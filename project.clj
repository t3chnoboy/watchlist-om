(defproject watchlist "0.1.0-SNAPSHOT"
  :description "Watchlist app"
  :url "http://watchlist-app.github.io"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0-alpha5"]
                 [org.clojure/clojurescript "0.0-2850"]
                 [figwheel "0.2.5-SNAPSHOT"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [cljs-http  "0.1.24"]
                 [alandipert/storage-atom  "1.2.4"]
                 [cljsjs/react-with-addons "0.12.2-4"]
                 [org.omcljs/om "0.8.8" :exclusions [cljsjs/react]]]

  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-ring "0.8.13"]
            [lein-figwheel "0.2.5-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {:output-to "resources/public/js/compiled/watchlist.js"
                         :output-dir "resources/public/js/compiled/out"
                         :optimizations :none
                         :source-map true}}
             {:id "min"
              :source-paths ["src"]
              :compiler {:output-to "www/watchlist.min.js"
                         :optimizations :advanced
                         :pretty-print false
                         :preamble ["react/react.min.js"]
                         :externs ["react/externs/react.js"]}}]}
  :figwheel {
             :http-server-root "public"
             :server-port 3449
             :nrepl-port 7888
             :css-dirs ["resources/public/css"]})
