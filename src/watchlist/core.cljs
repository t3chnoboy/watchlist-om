(ns watchlist.core
  (:require [om.core :as om :include-macros true]
            [figwheel.client :as fw]
            [alandipert.storage-atom :refer  [local-storage]]
            [watchlist.components.app :refer [app]]))

(enable-console-print!)

(defonce app-state (local-storage (atom {:movies []})))

(defn main []
  (om/root app
           app-state
           {:target (.getElementById js/document "app")}))

(main)
(fw/start { :on-jsload main })
