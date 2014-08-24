(ns watchlist.core
  (:require [om.core :as om :include-macros true]
            [alandipert.storage-atom :refer  [local-storage]]
            [watchlist.components.app :refer [app]]
            [figwheel.client :as fw]))

(enable-console-print!)

(defonce app-state (local-storage (atom {:movies []})))

(defn main []
  (om/root app
           app-state
           {:target (. js/document (getElementById "app"))}))

(main)
(fw/watch-and-reload :jsload-callback main)
