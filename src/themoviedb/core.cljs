(ns themoviedb.core
  (:require [cljs-http.client :as http]
            [cljs.core.async :as async :refer  [map<]]))


(def ^:private api-key "")

(def img-size {:backdrop {:small "w300"
                          :medium "w780"
                          :large "w1280"
                          :huge "original"}
               :poster   {:tiny "w92"
                          :very-small "w154"
                          :small "w185"
                          :ok "w342"
                          :medium "w500"
                          :large "w780"
                          :huge "original"}})

(defn image-url [kind size url]
  (str "http://image.tmdb.org/t/p/" (-> img-size kind size)  "/" url))

(defn- request [url query]
  (map< :body (http/get (str "https://api.themoviedb.org/3/" url)
                                     {:with-credentials? false
                                      :query-params (assoc query :api_key api-key)})))

(defn popular-movies [page]
  (map< :results (request "movie/popular" {:page page})))

(defn find-movie [title]
  (map< :results (request "search/movie" {:query title})))

(defn find-tv-show [title]
  (map< :results (request "search/tv" {:query title})))

(defn get-movie [id]
  (request (str "movie/" id)))

(defn get-tv-show [id]
  (request (str "tv" id)))
