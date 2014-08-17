(defproject watchlist "0.1.0"
  :description "Watchlist app"
  :url "http://watchlist-app.github.io"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2280"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.7.0"]
                 [alandipert/storage-atom  "1.2.3"]
                 [cljs-http  "0.1.15"]
                 [figwheel  "0.1.3-SNAPSHOT"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]
            [lein-figwheel  "0.1.3-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {:builds [{:id "dev"
              :source-paths ["src"]
              :compiler {:output-to "resources/public/js/compiled/watchlist.js"
                         :output-dir "resources/public/js/compiled/out"
                         :optimizations :none
                         :source-map true}}]}

  :figwheel  {:http-server-root  "public"
              :port 3449
              :css-dirs  ["resources/public/css"]})
