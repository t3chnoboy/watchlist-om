(ns watchlist.components.list-view
  (:require-macros  [cljs.core.async.macros :refer  [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [themoviedb.core :as tmdb]
            [watchlist.components.movie-view :refer [movie-view]]
            [cljs.core.async :refer  [put! chan <!]]))

(defn list-view [watchlist owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [delete-ch]}]
      (dom/div #js {:id "container"}
               (apply dom/ul nil
                      (om/build-all movie-view watchlist
                                    {:init-state {:delete-ch delete-ch}}))))))
