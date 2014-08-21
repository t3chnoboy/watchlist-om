(ns watchlist.core
  (:require-macros  [cljs.core.async.macros :refer  [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [figwheel.client :as fw :include-macros true]
            [alandipert.storage-atom :refer  [local-storage]]
            [cljs.core.async :refer  [put! chan <!]]
            [themoviedb.core :as tmdb]))


(enable-console-print!)
(fw/watch-and-reload)

(def app-state (local-storage (atom {})))


(defn add-movie [app owner]
  (let [input (om/get-node owner "new-movie")]
    (let [movie-title (.-value input)]
      (go (let [new-movie ((:results (<! (tmdb/find-movie movie-title))) 1)]
            (om/transact! app :movies #(conj % new-movie))
            (set! (.-value input) ""))))))


(defn movie-view [movie owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [delete]}]
      (dom/li #js {:className "movie-item" :draggable true}
              (dom/h1 nil (movie :title))
              (dom/img #js {:src (tmdb/image-url (movie :poster_path)) :className "movie"})
              (dom/b nil (movie :release_date))
              (dom/button #js {:className "btn"
                               :onClick #(put! delete @movie)}
                          "delete")))))


(defn movies-view [app owner]
  (reify

    om/IInitState
    (init-state [_]
      {:delete (chan)})

    om/IWillMount
    (will-mount [_]
      (let [delete (om/get-state owner :delete)]
        (go-loop []
                 (let [movie (<! delete)]
                   (om/transact! app :movies
                                 (fn [xs] (vec (remove #(= movie %) xs))))
                   (recur)))))

    om/IRenderState
    (render-state [this {:keys [delete]}]
      (dom/div #js {:id "container"}
               (dom/h1 nil "Watchlist")
               (dom/div #js {:className "movie-input"}
                        (dom/input #js {:type "text" :ref "new-movie"})
                        (dom/button #js {:className "btn" :onClick #(add-movie app owner)} "Add movie"))
               (apply dom/ul nil
                      (om/build-all movie-view (:movies app)
                                    {:init-state {:delete delete}}))))))


(om/root movies-view
         app-state
         {:target (. js/document (getElementById "app"))})
