// Compiled by ClojureScript 0.0-2342
goog.provide('watchlist.components.rating_view');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
watchlist.components.rating_view.rating_view = (function rating_view(p__18076){var map__18081 = p__18076;var map__18081__$1 = ((cljs.core.seq_QMARK_.call(null,map__18081))?cljs.core.apply.call(null,cljs.core.hash_map,map__18081):map__18081);var max_rating = cljs.core.get.call(null,map__18081__$1,new cljs.core.Keyword(null,"max-rating","max-rating",-56872651));var rating = cljs.core.get.call(null,map__18081__$1,new cljs.core.Keyword(null,"rating","rating",144173662));if(typeof watchlist.components.rating_view.t18082 !== 'undefined')
{} else
{
/**
* @constructor
*/
watchlist.components.rating_view.t18082 = (function (rating,max_rating,map__18081,p__18076,rating_view,meta18083){
this.rating = rating;
this.max_rating = max_rating;
this.map__18081 = map__18081;
this.p__18076 = p__18076;
this.rating_view = rating_view;
this.meta18083 = meta18083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
watchlist.components.rating_view.t18082.cljs$lang$type = true;
watchlist.components.rating_view.t18082.cljs$lang$ctorStr = "watchlist.components.rating-view/t18082";
watchlist.components.rating_view.t18082.cljs$lang$ctorPrWriter = ((function (map__18081,map__18081__$1,max_rating,rating){
return (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"watchlist.components.rating-view/t18082");
});})(map__18081,map__18081__$1,max_rating,rating))
;
watchlist.components.rating_view.t18082.prototype.om$core$IRender$ = true;
watchlist.components.rating_view.t18082.prototype.om$core$IRender$render$arity$1 = ((function (map__18081,map__18081__$1,max_rating,rating){
return (function (this__16954__auto__){var self__ = this;
var this__16954__auto____$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "rating"},cljs.core.concat.call(null,cljs.core.repeat.call(null,(self__.max_rating - self__.rating),"\u2606"),cljs.core.repeat.call(null,self__.rating,"\u2605")));
});})(map__18081,map__18081__$1,max_rating,rating))
;
watchlist.components.rating_view.t18082.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__18081,map__18081__$1,max_rating,rating){
return (function (_18084){var self__ = this;
var _18084__$1 = this;return self__.meta18083;
});})(map__18081,map__18081__$1,max_rating,rating))
;
watchlist.components.rating_view.t18082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__18081,map__18081__$1,max_rating,rating){
return (function (_18084,meta18083__$1){var self__ = this;
var _18084__$1 = this;return (new watchlist.components.rating_view.t18082(self__.rating,self__.max_rating,self__.map__18081,self__.p__18076,self__.rating_view,meta18083__$1));
});})(map__18081,map__18081__$1,max_rating,rating))
;
watchlist.components.rating_view.__GT_t18082 = ((function (map__18081,map__18081__$1,max_rating,rating){
return (function __GT_t18082(rating__$1,max_rating__$1,map__18081__$2,p__18076__$1,rating_view__$1,meta18083){return (new watchlist.components.rating_view.t18082(rating__$1,max_rating__$1,map__18081__$2,p__18076__$1,rating_view__$1,meta18083));
});})(map__18081,map__18081__$1,max_rating,rating))
;
}
return (new watchlist.components.rating_view.t18082(rating,max_rating,map__18081__$1,p__18076,rating_view,null));
});

//# sourceMappingURL=rating_view.js.map