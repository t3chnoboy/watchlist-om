(ns themoviedb.core
  (:require-macros  [cljs.core.async.macros :refer  [go go-loop]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer  [put! chan <!]]))


(def ^:private api-key "")

(defn image-url [url]
  (str "http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w342" url))


(defn- request [url query]
  (let [out (chan)]
    (go (let [response (<! (http/get (str "https://api.themoviedb.org/3/" url)
                                     {:with-credentials? false
                                      :query-params (assoc query :api_key api-key)}))]
          (put! out (:body response))))
    out))


(defn load-movies [page]
  (request "movie/popular" {:page page}))


(defn find-movie [title]
  (request "search/movie" {:query title}))


(defn load-movie [id]
  (request (str "movie/" id)))
