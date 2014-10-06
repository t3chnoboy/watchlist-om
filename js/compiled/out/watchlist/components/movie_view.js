// Compiled by ClojureScript 0.0-2342
goog.provide('watchlist.components.movie_view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('watchlist.components.rating_view');
goog.require('om.dom');
goog.require('om.dom');
goog.require('watchlist.components.rating_view');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om.core');
goog.require('themoviedb.core');
goog.require('themoviedb.core');
watchlist.components.movie_view.movie_view = (function movie_view(movie,owner){if(typeof watchlist.components.movie_view.t18071 !== 'undefined')
{} else
{
/**
* @constructor
*/
watchlist.components.movie_view.t18071 = (function (owner,movie,movie_view,meta18072){
this.owner = owner;
this.movie = movie;
this.movie_view = movie_view;
this.meta18072 = meta18072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
watchlist.components.movie_view.t18071.cljs$lang$type = true;
watchlist.components.movie_view.t18071.cljs$lang$ctorStr = "watchlist.components.movie-view/t18071";
watchlist.components.movie_view.t18071.cljs$lang$ctorPrWriter = (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"watchlist.components.movie-view/t18071");
});
watchlist.components.movie_view.t18071.prototype.om$core$IRenderState$ = true;
watchlist.components.movie_view.t18071.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__18074){var self__ = this;
var map__18075 = p__18074;var map__18075__$1 = ((cljs.core.seq_QMARK_.call(null,map__18075))?cljs.core.apply.call(null,cljs.core.hash_map,map__18075):map__18075);var delete_ch = cljs.core.get.call(null,map__18075__$1,new cljs.core.Keyword(null,"delete-ch","delete-ch",-1768176320));var ___$1 = this;return React.DOM.li({"draggable": true, "className": "movie-item"},React.DOM.h2(null,self__.movie.call(null,new cljs.core.Keyword(null,"title","title",636505583))),React.DOM.img({"className": "movie", "src": themoviedb.core.image_url.call(null,new cljs.core.Keyword(null,"poster","poster",-1616913550),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"poster_path","poster_path",-1568703583).cljs$core$IFn$_invoke$arity$1(self__.movie))}),om.core.build.call(null,watchlist.components.rating_view.rating_view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"vote_average","vote_average",-1925125338).cljs$core$IFn$_invoke$arity$1(self__.movie),new cljs.core.Keyword(null,"max-rating","max-rating",-56872651),(10)], null)),React.DOM.b(null,self__.movie.call(null,new cljs.core.Keyword(null,"release_date","release_date",-1770099066))),React.DOM.button({"onClick": ((function (___$1,map__18075,map__18075__$1,delete_ch){
return (function (){return cljs.core.async.put_BANG_.call(null,delete_ch,cljs.core.deref.call(null,self__.movie));
});})(___$1,map__18075,map__18075__$1,delete_ch))
, "className": "btn"},"delete"));
});
watchlist.components.movie_view.t18071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18073){var self__ = this;
var _18073__$1 = this;return self__.meta18072;
});
watchlist.components.movie_view.t18071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18073,meta18072__$1){var self__ = this;
var _18073__$1 = this;return (new watchlist.components.movie_view.t18071(self__.owner,self__.movie,self__.movie_view,meta18072__$1));
});
watchlist.components.movie_view.__GT_t18071 = (function __GT_t18071(owner__$1,movie__$1,movie_view__$1,meta18072){return (new watchlist.components.movie_view.t18071(owner__$1,movie__$1,movie_view__$1,meta18072));
});
}
return (new watchlist.components.movie_view.t18071(owner,movie,movie_view,null));
});

//# sourceMappingURL=movie_view.js.map