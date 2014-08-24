(ns watchlist.components.app
  (:require-macros  [cljs.core.async.macros :refer  [go go-loop alt!]])
  (:require [cljs.core.async :refer  [put! chan <!]]
            [om.dom :as dom :include-macros true]
            [om.core :as om :include-macros true]
            [watchlist.components.list-view :refer [list-view]]
            [watchlist.components.search-view :refer [search-view]]))

(defn app [app-state owner]
  (reify
    om/IInitState
    (init-state [_]
      {:add-ch (chan)
       :delete-ch (chan)})
    om/IWillMount
    (will-mount [_]
      (let [{:keys [add-ch delete-ch]} (om/get-state owner)]
        (go-loop []
                 (alt!
                   add-ch ([movie] (om/transact! app-state :movies #(conj % movie)))
                   delete-ch ([movie] (om/transact! app-state :movies (fn [xs]
                                                                    (vec (remove #(= movie %) xs))))))
                 (recur))))
    om/IRenderState
    (render-state [_ {:keys [add-ch delete-ch]}]
      (dom/div nil
               (om/build search-view app-state {:init-state {:add-ch add-ch}})
               (om/build list-view (:movies app-state) {:init-state {:delete-ch delete-ch}})))))
