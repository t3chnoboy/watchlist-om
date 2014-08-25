(ns watchlist.components.search-view
  (:require-macros  [cljs.core.async.macros :refer  [go]])
  (:require [cljs.core.async :refer  [<! put!]]
            [clojure.set :refer [rename-keys]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [themoviedb.core :as tmdb]
            [watchlist.components.rating-view :refer [rating-view]]))


(def transition-group (.. js/React  -addons -CSSTransitionGroup))
(def ENTER_KEY 13)


(defn- tv->movie [item]
  (if (contains? item :name)
    (assoc (rename-keys item {:name :title :first_air_date :release_date})
           :type :tv-show)
    (assoc item :type :movie)))


(defn- filter-without-images [movies]
  (remove #(nil? (:poster_path %)) movies))


(defn- handle-search [owner query]
  (go (let [results (concat (:results (<! (tmdb/find-movie query)))
                            (:results (<! (tmdb/find-tv-show query))))]
        (om/update-state! owner #(assoc % :results (->> results
                                                        (filter-without-images)
                                                        (take 5)
                                                        (map tv->movie)))))))


(defn- handle-enter [e owner]
  (when (= (.-which e) ENTER_KEY)
    (let [{:keys [add-ch results]} (om/get-state owner)]
      (put! add-ch (first results)))
    (om/update-state! owner #(assoc % :results []))
    (set! (.. e -target -value) "")))


(defn- handle-blur [e owner]
  (om/update-state! owner #(assoc % :results [])))


(defn search-view [app owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [results add-ch]}]
      (dom/div #js {:id "search-view"}
               (dom/input #js {:type "text"
                               :onBlur #(handle-blur % owner)
                               :onKeyDown #(handle-enter % owner)
                               :onChange #(handle-search owner (.. % -target -value))})
               (apply transition-group #js {:id "search-results"
                                            :transitionName  "fade"
                                            :component dom/ul}
                      (om/build-all search-result results
                                    {:init-state {:add-ch add-ch}}))))))


(defn search-result [result]
  (reify
    om/IRenderState
    (render-state [_ {:keys [add-ch]}]
      (dom/div #js {:className "result" :onClick #(put! add-ch result)}
               (dom/img #js {:src (tmdb/image-url :poster :tiny (:poster_path result))
                             :className "poster"})
               (dom/span nil (:title result))
               (om/build rating-view {:rating (:vote_average result) :max-rating 10})
               (dom/span #js {:className "date"} (:release_date result))))))
