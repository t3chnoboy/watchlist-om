// Compiled by ClojureScript 0.0-2280
goog.provide('om_tut.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('figwheel.client');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('figwheel.client');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null);
om_tut.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"movies","movies",-255929346),cljs.core.PersistentVector.EMPTY], null));
om_tut.core.image_url = (function image_url(url){return ("http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w342"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url));
});
om_tut.core.tmdb_get = (function tmdb_get(url,query){var out = cljs.core.async.chan.call(null);var c__10396__auto___14570 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10396__auto___14570,out){
return (function (){var f__10397__auto__ = (function (){var switch__10381__auto__ = ((function (c__10396__auto___14570,out){
return (function (state_14561){var state_val_14562 = (state_14561[(1)]);if((state_val_14562 === (2)))
{var inst_14557 = (state_14561[(2)]);var inst_14558 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_14557);var inst_14559 = cljs.core.async.put_BANG_.call(null,out,inst_14558);var state_14561__$1 = state_14561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14561__$1,inst_14559);
} else
{if((state_val_14562 === (1)))
{var inst_14551 = ("http://watchlist-koa.herokuapp.com/tmdb/3/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url));var inst_14552 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];var inst_14553 = [false,query];var inst_14554 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14552,inst_14553);var inst_14555 = cljs_http.client.get.call(null,inst_14551,inst_14554);var state_14561__$1 = state_14561;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14561__$1,(2),inst_14555);
} else
{return null;
}
}
});})(c__10396__auto___14570,out))
;return ((function (switch__10381__auto__,c__10396__auto___14570,out){
return (function() {
var state_machine__10382__auto__ = null;
var state_machine__10382__auto____0 = (function (){var statearr_14566 = [null,null,null,null,null,null,null];(statearr_14566[(0)] = state_machine__10382__auto__);
(statearr_14566[(1)] = (1));
return statearr_14566;
});
var state_machine__10382__auto____1 = (function (state_14561){while(true){
var ret_value__10383__auto__ = (function (){try{while(true){
var result__10384__auto__ = switch__10381__auto__.call(null,state_14561);if(cljs.core.keyword_identical_QMARK_.call(null,result__10384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10384__auto__;
}
break;
}
}catch (e14567){if((e14567 instanceof Object))
{var ex__10385__auto__ = e14567;var statearr_14568_14571 = state_14561;(statearr_14568_14571[(5)] = ex__10385__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14561);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14567;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14572 = state_14561;
state_14561 = G__14572;
continue;
}
} else
{return ret_value__10383__auto__;
}
break;
}
});
state_machine__10382__auto__ = function(state_14561){
switch(arguments.length){
case 0:
return state_machine__10382__auto____0.call(this);
case 1:
return state_machine__10382__auto____1.call(this,state_14561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10382__auto____0;
state_machine__10382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10382__auto____1;
return state_machine__10382__auto__;
})()
;})(switch__10381__auto__,c__10396__auto___14570,out))
})();var state__10398__auto__ = (function (){var statearr_14569 = f__10397__auto__.call(null);(statearr_14569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10396__auto___14570);
return statearr_14569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10398__auto__);
});})(c__10396__auto___14570,out))
);
return out;
});
om_tut.core.load_movies = (function load_movies(page){return om_tut.core.tmdb_get.call(null,"movie/popular",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),page], null));
});
om_tut.core.find_movie = (function find_movie(title){return om_tut.core.tmdb_get.call(null,"search/movie",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),title], null));
});
om_tut.core.load_movie = (function load_movie(id){return om_tut.core.tmdb_get.call(null,("movie/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
om_tut.core.add_movie = (function add_movie(app,owner){var movie_title = om.core.get_node.call(null,owner,"new-movie").value;var c__10396__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10396__auto__,movie_title){
return (function (){var f__10397__auto__ = (function (){var switch__10381__auto__ = ((function (c__10396__auto__,movie_title){
return (function (state_14599){var state_val_14600 = (state_14599[(1)]);if((state_val_14600 === (2)))
{var inst_14593 = (state_14599[(2)]);var inst_14594 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(inst_14593);var inst_14595 = inst_14594.call(null,(1));var inst_14596 = (function (){var new_movie = inst_14595;return ((function (new_movie,inst_14593,inst_14594,inst_14595,state_val_14600,c__10396__auto__,movie_title){
return (function (p1__14573_SHARP_){return cljs.core.conj.call(null,p1__14573_SHARP_,new_movie);
});
;})(new_movie,inst_14593,inst_14594,inst_14595,state_val_14600,c__10396__auto__,movie_title))
})();var inst_14597 = om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"movies","movies",-255929346),inst_14596);var state_14599__$1 = state_14599;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14599__$1,inst_14597);
} else
{if((state_val_14600 === (1)))
{var inst_14591 = om_tut.core.find_movie.call(null,movie_title);var state_14599__$1 = state_14599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14599__$1,(2),inst_14591);
} else
{return null;
}
}
});})(c__10396__auto__,movie_title))
;return ((function (switch__10381__auto__,c__10396__auto__,movie_title){
return (function() {
var state_machine__10382__auto__ = null;
var state_machine__10382__auto____0 = (function (){var statearr_14604 = [null,null,null,null,null,null,null];(statearr_14604[(0)] = state_machine__10382__auto__);
(statearr_14604[(1)] = (1));
return statearr_14604;
});
var state_machine__10382__auto____1 = (function (state_14599){while(true){
var ret_value__10383__auto__ = (function (){try{while(true){
var result__10384__auto__ = switch__10381__auto__.call(null,state_14599);if(cljs.core.keyword_identical_QMARK_.call(null,result__10384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10384__auto__;
}
break;
}
}catch (e14605){if((e14605 instanceof Object))
{var ex__10385__auto__ = e14605;var statearr_14606_14608 = state_14599;(statearr_14606_14608[(5)] = ex__10385__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14599);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14605;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14609 = state_14599;
state_14599 = G__14609;
continue;
}
} else
{return ret_value__10383__auto__;
}
break;
}
});
state_machine__10382__auto__ = function(state_14599){
switch(arguments.length){
case 0:
return state_machine__10382__auto____0.call(this);
case 1:
return state_machine__10382__auto____1.call(this,state_14599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10382__auto____0;
state_machine__10382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10382__auto____1;
return state_machine__10382__auto__;
})()
;})(switch__10381__auto__,c__10396__auto__,movie_title))
})();var state__10398__auto__ = (function (){var statearr_14607 = f__10397__auto__.call(null);(statearr_14607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10396__auto__);
return statearr_14607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10398__auto__);
});})(c__10396__auto__,movie_title))
);
return c__10396__auto__;
});
om_tut.core.movie_view = (function movie_view(movie,owner){if(typeof om_tut.core.t14615 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_tut.core.t14615 = (function (owner,movie,movie_view,meta14616){
this.owner = owner;
this.movie = movie;
this.movie_view = movie_view;
this.meta14616 = meta14616;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t14615.cljs$lang$type = true;
om_tut.core.t14615.cljs$lang$ctorStr = "om-tut.core/t14615";
om_tut.core.t14615.cljs$lang$ctorPrWriter = (function (this__8437__auto__,writer__8438__auto__,opt__8439__auto__){return cljs.core._write.call(null,writer__8438__auto__,"om-tut.core/t14615");
});
om_tut.core.t14615.prototype.om$core$IRenderState$ = true;
om_tut.core.t14615.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__14618){var self__ = this;
var map__14619 = p__14618;var map__14619__$1 = ((cljs.core.seq_QMARK_.call(null,map__14619))?cljs.core.apply.call(null,cljs.core.hash_map,map__14619):map__14619);var delete$ = cljs.core.get.call(null,map__14619__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));var this$__$1 = this;return React.DOM.li({"draggable": true, "className": "movie-item"},React.DOM.h1(null,self__.movie.call(null,new cljs.core.Keyword(null,"title","title",636505583))),React.DOM.img({"className": "movie", "src": om_tut.core.image_url.call(null,self__.movie.call(null,new cljs.core.Keyword(null,"poster_path","poster_path",-1568703583)))}),React.DOM.b(null,self__.movie.call(null,new cljs.core.Keyword(null,"release_date","release_date",-1770099066))),React.DOM.button({"onClick": ((function (this$__$1,map__14619,map__14619__$1,delete$){
return (function (){return cljs.core.async.put_BANG_.call(null,delete$,cljs.core.deref.call(null,self__.movie));
});})(this$__$1,map__14619,map__14619__$1,delete$))
, "className": "btn"},"delete"));
});
om_tut.core.t14615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14617){var self__ = this;
var _14617__$1 = this;return self__.meta14616;
});
om_tut.core.t14615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14617,meta14616__$1){var self__ = this;
var _14617__$1 = this;return (new om_tut.core.t14615(self__.owner,self__.movie,self__.movie_view,meta14616__$1));
});
om_tut.core.__GT_t14615 = (function __GT_t14615(owner__$1,movie__$1,movie_view__$1,meta14616){return (new om_tut.core.t14615(owner__$1,movie__$1,movie_view__$1,meta14616));
});
}
return (new om_tut.core.t14615(owner,movie,movie_view,null));
});
om_tut.core.movies_view = (function movies_view(app,owner){if(typeof om_tut.core.t14647 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_tut.core.t14647 = (function (owner,app,movies_view,meta14648){
this.owner = owner;
this.app = app;
this.movies_view = movies_view;
this.meta14648 = meta14648;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t14647.cljs$lang$type = true;
om_tut.core.t14647.cljs$lang$ctorStr = "om-tut.core/t14647";
om_tut.core.t14647.cljs$lang$ctorPrWriter = (function (this__8437__auto__,writer__8438__auto__,opt__8439__auto__){return cljs.core._write.call(null,writer__8438__auto__,"om-tut.core/t14647");
});
om_tut.core.t14647.prototype.om$core$IRenderState$ = true;
om_tut.core.t14647.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__14650){var self__ = this;
var map__14651 = p__14650;var map__14651__$1 = ((cljs.core.seq_QMARK_.call(null,map__14651))?cljs.core.apply.call(null,cljs.core.hash_map,map__14651):map__14651);var delete$ = cljs.core.get.call(null,map__14651__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));var this$__$1 = this;return React.DOM.div({"id": "container"},React.DOM.div(null,om.dom.input.call(null,{"ref": "new-movie", "type": "text"}),React.DOM.button({"onClick": ((function (this$__$1,map__14651,map__14651__$1,delete$){
return (function (){return om_tut.core.add_movie.call(null,self__.app,self__.owner);
});})(this$__$1,map__14651,map__14651__$1,delete$))
, "className": "btn"},"Add movie")),React.DOM.h1(null,"Popular movies:"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,om_tut.core.movie_view,new cljs.core.Keyword(null,"movies","movies",-255929346).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete","delete",-1768633620),delete$], null)], null))));
});
om_tut.core.t14647.prototype.om$core$IWillMount$ = true;
om_tut.core.t14647.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var delete$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete","delete",-1768633620));var c__10396__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10396__auto__,delete$,___$1){
return (function (){var f__10397__auto__ = (function (){var switch__10381__auto__ = ((function (c__10396__auto__,delete$,___$1){
return (function (state_14661){var state_val_14662 = (state_14661[(1)]);if((state_val_14662 === (4)))
{var inst_14654 = (state_14661[(2)]);var inst_14655 = (function (){var movie = inst_14654;return ((function (movie,inst_14654,state_val_14662,c__10396__auto__,delete$,___$1){
return (function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (movie,inst_14654,state_val_14662,c__10396__auto__,delete$,___$1){
return (function (p1__14620_SHARP_){return cljs.core._EQ_.call(null,movie,p1__14620_SHARP_);
});})(movie,inst_14654,state_val_14662,c__10396__auto__,delete$,___$1))
,xs));
});
;})(movie,inst_14654,state_val_14662,c__10396__auto__,delete$,___$1))
})();var inst_14656 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"movies","movies",-255929346),inst_14655);var state_14661__$1 = (function (){var statearr_14663 = state_14661;(statearr_14663[(7)] = inst_14656);
return statearr_14663;
})();var statearr_14664_14673 = state_14661__$1;(statearr_14664_14673[(2)] = null);
(statearr_14664_14673[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14662 === (3)))
{var inst_14659 = (state_14661[(2)]);var state_14661__$1 = state_14661;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14661__$1,inst_14659);
} else
{if((state_val_14662 === (2)))
{var state_14661__$1 = state_14661;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14661__$1,(4),delete$);
} else
{if((state_val_14662 === (1)))
{var state_14661__$1 = state_14661;var statearr_14665_14674 = state_14661__$1;(statearr_14665_14674[(2)] = null);
(statearr_14665_14674[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__10396__auto__,delete$,___$1))
;return ((function (switch__10381__auto__,c__10396__auto__,delete$,___$1){
return (function() {
var state_machine__10382__auto__ = null;
var state_machine__10382__auto____0 = (function (){var statearr_14669 = [null,null,null,null,null,null,null,null];(statearr_14669[(0)] = state_machine__10382__auto__);
(statearr_14669[(1)] = (1));
return statearr_14669;
});
var state_machine__10382__auto____1 = (function (state_14661){while(true){
var ret_value__10383__auto__ = (function (){try{while(true){
var result__10384__auto__ = switch__10381__auto__.call(null,state_14661);if(cljs.core.keyword_identical_QMARK_.call(null,result__10384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10384__auto__;
}
break;
}
}catch (e14670){if((e14670 instanceof Object))
{var ex__10385__auto__ = e14670;var statearr_14671_14675 = state_14661;(statearr_14671_14675[(5)] = ex__10385__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14661);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14670;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14676 = state_14661;
state_14661 = G__14676;
continue;
}
} else
{return ret_value__10383__auto__;
}
break;
}
});
state_machine__10382__auto__ = function(state_14661){
switch(arguments.length){
case 0:
return state_machine__10382__auto____0.call(this);
case 1:
return state_machine__10382__auto____1.call(this,state_14661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10382__auto____0;
state_machine__10382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10382__auto____1;
return state_machine__10382__auto__;
})()
;})(switch__10381__auto__,c__10396__auto__,delete$,___$1))
})();var state__10398__auto__ = (function (){var statearr_14672 = f__10397__auto__.call(null);(statearr_14672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10396__auto__);
return statearr_14672;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10398__auto__);
});})(c__10396__auto__,delete$,___$1))
);
return c__10396__auto__;
});
om_tut.core.t14647.prototype.om$core$IInitState$ = true;
om_tut.core.t14647.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.async.chan.call(null)], null);
});
om_tut.core.t14647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14649){var self__ = this;
var _14649__$1 = this;return self__.meta14648;
});
om_tut.core.t14647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14649,meta14648__$1){var self__ = this;
var _14649__$1 = this;return (new om_tut.core.t14647(self__.owner,self__.app,self__.movies_view,meta14648__$1));
});
om_tut.core.__GT_t14647 = (function __GT_t14647(owner__$1,app__$1,movies_view__$1,meta14648){return (new om_tut.core.t14647(owner__$1,app__$1,movies_view__$1,meta14648));
});
}
return (new om_tut.core.t14647(owner,app,movies_view,null));
});
om.core.root.call(null,om_tut.core.movies_view,om_tut.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map