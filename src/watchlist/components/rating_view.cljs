(ns watchlist.components.rating-view
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn rating-view [{:keys [rating max-rating] :as data} owner]
  (om/component
    (apply dom/div #js {:className "rating"}
           (map #(dom/span nil %)
                (concat
                  (replicate (- max-rating rating) "☆")
                  (replicate rating "★"))))))
