(ns watchlist.components.movie-view
  (:require [themoviedb.core :as tmdb]
            [om.core :as om :include-macros true]
            [cljs.core.async :refer [put!]]
            [watchlist.components.rating-view :refer [rating-view]]
            [om.dom :as dom :include-macros true]))


(defn movie-view [movie owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [delete-ch]}]
      (dom/li #js {:className "movie-item" :draggable true}
              (dom/h2 nil (movie :title))
              (dom/img #js {:src (tmdb/image-url :poster :small (:poster_path movie)) :className "movie"})
              (om/build rating-view {:rating (:vote_average movie) :max-rating 10})
              (dom/b nil (movie :release_date))
              (dom/button #js {:className "btn"
                               :onClick #(put! delete-ch @movie)}
                          "delete")))))
