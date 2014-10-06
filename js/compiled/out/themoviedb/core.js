// Compiled by ClojureScript 0.0-2342
goog.provide('themoviedb.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
themoviedb.core.api_key = "86afaae5fbe574d49418485ca1e58803";
themoviedb.core.img_size = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"small","small",2133478704),"w300",new cljs.core.Keyword(null,"medium","medium",-1864319384),"w780",new cljs.core.Keyword(null,"large","large",-196820544),"w1280",new cljs.core.Keyword(null,"huge","huge",1683634816),"original"], null),new cljs.core.Keyword(null,"poster","poster",-1616913550),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"tiny","tiny",1577883515),"w92",new cljs.core.Keyword(null,"very-small","very-small",-1130161272),"w154",new cljs.core.Keyword(null,"small","small",2133478704),"w185",new cljs.core.Keyword(null,"ok","ok",967785236),"w342",new cljs.core.Keyword(null,"medium","medium",-1864319384),"w500",new cljs.core.Keyword(null,"large","large",-196820544),"w780",new cljs.core.Keyword(null,"huge","huge",1683634816),"original"], null)], null);
themoviedb.core.image_url = (function image_url(kind,size,url){return ("http://image.tmdb.org/t/p/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(size.call(null,kind.call(null,themoviedb.core.img_size)))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url));
});
themoviedb.core.request = (function request(url,query){return cljs.core.async.map_LT_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.get.call(null,("https://api.themoviedb.org/3/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"query-params","query-params",900640534),cljs.core.assoc.call(null,query,new cljs.core.Keyword(null,"api_key","api_key",-1567758224),themoviedb.core.api_key)], null)));
});
themoviedb.core.popular_movies = (function popular_movies(page){return cljs.core.async.map_LT_.call(null,new cljs.core.Keyword(null,"results","results",-1134170113),themoviedb.core.request.call(null,"movie/popular",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),page], null)));
});
themoviedb.core.find_movie = (function find_movie(title){return cljs.core.async.map_LT_.call(null,new cljs.core.Keyword(null,"results","results",-1134170113),themoviedb.core.request.call(null,"search/movie",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),title], null)));
});
themoviedb.core.find_tv_show = (function find_tv_show(title){return cljs.core.async.map_LT_.call(null,new cljs.core.Keyword(null,"results","results",-1134170113),themoviedb.core.request.call(null,"search/tv",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),title], null)));
});
themoviedb.core.get_movie = (function get_movie(id){return themoviedb.core.request.call(null,("movie/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
themoviedb.core.get_tv_show = (function get_tv_show(id){return themoviedb.core.request.call(null,("tv"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});

//# sourceMappingURL=core.js.map