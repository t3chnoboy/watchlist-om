(ns watchlist.components.rating-view
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn rating-view [{:keys [rating max-rating]}]
  (om/component
    (apply dom/div #js {:className "rating"}
           (map #(dom/span nil %)
                (concat
                  (repeat (- max-rating rating) "☆")
                  (repeat rating "★"))))))
