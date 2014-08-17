// Compiled by ClojureScript 0.0-2280
goog.provide('watchlist.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('alandipert.storage_atom');
goog.require('om.dom');
goog.require('figwheel.client');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('alandipert.storage_atom');
goog.require('cljs.core.async');
goog.require('figwheel.client');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null);
watchlist.core.app_state = alandipert.storage_atom.local_storage.call(null,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
watchlist.core.image_url = (function image_url(url){return ("http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w342"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url));
});
watchlist.core.tmdb_get = (function tmdb_get(url,query){var out = cljs.core.async.chan.call(null);var c__10398__auto___14978 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10398__auto___14978,out){
return (function (){var f__10399__auto__ = (function (){var switch__10383__auto__ = ((function (c__10398__auto___14978,out){
return (function (state_14969){var state_val_14970 = (state_14969[(1)]);if((state_val_14970 === (2)))
{var inst_14965 = (state_14969[(2)]);var inst_14966 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_14965);var inst_14967 = cljs.core.async.put_BANG_.call(null,out,inst_14966);var state_14969__$1 = state_14969;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14969__$1,inst_14967);
} else
{if((state_val_14970 === (1)))
{var inst_14959 = ("http://watchlist-koa.herokuapp.com/tmdb/3/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url));var inst_14960 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];var inst_14961 = [false,query];var inst_14962 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14960,inst_14961);var inst_14963 = cljs_http.client.get.call(null,inst_14959,inst_14962);var state_14969__$1 = state_14969;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14969__$1,(2),inst_14963);
} else
{return null;
}
}
});})(c__10398__auto___14978,out))
;return ((function (switch__10383__auto__,c__10398__auto___14978,out){
return (function() {
var state_machine__10384__auto__ = null;
var state_machine__10384__auto____0 = (function (){var statearr_14974 = [null,null,null,null,null,null,null];(statearr_14974[(0)] = state_machine__10384__auto__);
(statearr_14974[(1)] = (1));
return statearr_14974;
});
var state_machine__10384__auto____1 = (function (state_14969){while(true){
var ret_value__10385__auto__ = (function (){try{while(true){
var result__10386__auto__ = switch__10383__auto__.call(null,state_14969);if(cljs.core.keyword_identical_QMARK_.call(null,result__10386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10386__auto__;
}
break;
}
}catch (e14975){if((e14975 instanceof Object))
{var ex__10387__auto__ = e14975;var statearr_14976_14979 = state_14969;(statearr_14976_14979[(5)] = ex__10387__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14969);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14975;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14980 = state_14969;
state_14969 = G__14980;
continue;
}
} else
{return ret_value__10385__auto__;
}
break;
}
});
state_machine__10384__auto__ = function(state_14969){
switch(arguments.length){
case 0:
return state_machine__10384__auto____0.call(this);
case 1:
return state_machine__10384__auto____1.call(this,state_14969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10384__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10384__auto____0;
state_machine__10384__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10384__auto____1;
return state_machine__10384__auto__;
})()
;})(switch__10383__auto__,c__10398__auto___14978,out))
})();var state__10400__auto__ = (function (){var statearr_14977 = f__10399__auto__.call(null);(statearr_14977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10398__auto___14978);
return statearr_14977;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10400__auto__);
});})(c__10398__auto___14978,out))
);
return out;
});
watchlist.core.load_movies = (function load_movies(page){return watchlist.core.tmdb_get.call(null,"movie/popular",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),page], null));
});
watchlist.core.find_movie = (function find_movie(title){return watchlist.core.tmdb_get.call(null,"search/movie",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),title], null));
});
watchlist.core.load_movie = (function load_movie(id){return watchlist.core.tmdb_get.call(null,("movie/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
watchlist.core.add_movie = (function add_movie(app,owner){var input = om.core.get_node.call(null,owner,"new-movie");var movie_title = input.value;var c__10398__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10398__auto__,movie_title,input){
return (function (){var f__10399__auto__ = (function (){var switch__10383__auto__ = ((function (c__10398__auto__,movie_title,input){
return (function (state_15010){var state_val_15011 = (state_15010[(1)]);if((state_val_15011 === (2)))
{var inst_15003 = (state_15010[(2)]);var inst_15004 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(inst_15003);var inst_15005 = inst_15004.call(null,(1));var inst_15006 = (function (){var new_movie = inst_15005;return ((function (new_movie,inst_15003,inst_15004,inst_15005,state_val_15011,c__10398__auto__,movie_title,input){
return (function (p1__14981_SHARP_){return cljs.core.conj.call(null,p1__14981_SHARP_,new_movie);
});
;})(new_movie,inst_15003,inst_15004,inst_15005,state_val_15011,c__10398__auto__,movie_title,input))
})();var inst_15007 = om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"movies","movies",-255929346),inst_15006);var inst_15008 = input.value = "";var state_15010__$1 = (function (){var statearr_15012 = state_15010;(statearr_15012[(7)] = inst_15007);
return statearr_15012;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15010__$1,inst_15008);
} else
{if((state_val_15011 === (1)))
{var inst_15001 = watchlist.core.find_movie.call(null,movie_title);var state_15010__$1 = state_15010;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15010__$1,(2),inst_15001);
} else
{return null;
}
}
});})(c__10398__auto__,movie_title,input))
;return ((function (switch__10383__auto__,c__10398__auto__,movie_title,input){
return (function() {
var state_machine__10384__auto__ = null;
var state_machine__10384__auto____0 = (function (){var statearr_15016 = [null,null,null,null,null,null,null,null];(statearr_15016[(0)] = state_machine__10384__auto__);
(statearr_15016[(1)] = (1));
return statearr_15016;
});
var state_machine__10384__auto____1 = (function (state_15010){while(true){
var ret_value__10385__auto__ = (function (){try{while(true){
var result__10386__auto__ = switch__10383__auto__.call(null,state_15010);if(cljs.core.keyword_identical_QMARK_.call(null,result__10386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10386__auto__;
}
break;
}
}catch (e15017){if((e15017 instanceof Object))
{var ex__10387__auto__ = e15017;var statearr_15018_15020 = state_15010;(statearr_15018_15020[(5)] = ex__10387__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15010);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15017;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15021 = state_15010;
state_15010 = G__15021;
continue;
}
} else
{return ret_value__10385__auto__;
}
break;
}
});
state_machine__10384__auto__ = function(state_15010){
switch(arguments.length){
case 0:
return state_machine__10384__auto____0.call(this);
case 1:
return state_machine__10384__auto____1.call(this,state_15010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10384__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10384__auto____0;
state_machine__10384__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10384__auto____1;
return state_machine__10384__auto__;
})()
;})(switch__10383__auto__,c__10398__auto__,movie_title,input))
})();var state__10400__auto__ = (function (){var statearr_15019 = f__10399__auto__.call(null);(statearr_15019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10398__auto__);
return statearr_15019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10400__auto__);
});})(c__10398__auto__,movie_title,input))
);
return c__10398__auto__;
});
watchlist.core.movie_view = (function movie_view(movie,owner){if(typeof watchlist.core.t15027 !== 'undefined')
{} else
{
/**
* @constructor
*/
watchlist.core.t15027 = (function (owner,movie,movie_view,meta15028){
this.owner = owner;
this.movie = movie;
this.movie_view = movie_view;
this.meta15028 = meta15028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
watchlist.core.t15027.cljs$lang$type = true;
watchlist.core.t15027.cljs$lang$ctorStr = "watchlist.core/t15027";
watchlist.core.t15027.cljs$lang$ctorPrWriter = (function (this__8439__auto__,writer__8440__auto__,opt__8441__auto__){return cljs.core._write.call(null,writer__8440__auto__,"watchlist.core/t15027");
});
watchlist.core.t15027.prototype.om$core$IRenderState$ = true;
watchlist.core.t15027.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__15030){var self__ = this;
var map__15031 = p__15030;var map__15031__$1 = ((cljs.core.seq_QMARK_.call(null,map__15031))?cljs.core.apply.call(null,cljs.core.hash_map,map__15031):map__15031);var delete$ = cljs.core.get.call(null,map__15031__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));var this$__$1 = this;return React.DOM.li({"draggable": true, "className": "movie-item"},React.DOM.h1(null,self__.movie.call(null,new cljs.core.Keyword(null,"title","title",636505583))),React.DOM.img({"className": "movie", "src": watchlist.core.image_url.call(null,self__.movie.call(null,new cljs.core.Keyword(null,"poster_path","poster_path",-1568703583)))}),React.DOM.b(null,self__.movie.call(null,new cljs.core.Keyword(null,"release_date","release_date",-1770099066))),React.DOM.button({"onClick": ((function (this$__$1,map__15031,map__15031__$1,delete$){
return (function (){return cljs.core.async.put_BANG_.call(null,delete$,cljs.core.deref.call(null,self__.movie));
});})(this$__$1,map__15031,map__15031__$1,delete$))
, "className": "btn"},"delete"));
});
watchlist.core.t15027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15029){var self__ = this;
var _15029__$1 = this;return self__.meta15028;
});
watchlist.core.t15027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15029,meta15028__$1){var self__ = this;
var _15029__$1 = this;return (new watchlist.core.t15027(self__.owner,self__.movie,self__.movie_view,meta15028__$1));
});
watchlist.core.__GT_t15027 = (function __GT_t15027(owner__$1,movie__$1,movie_view__$1,meta15028){return (new watchlist.core.t15027(owner__$1,movie__$1,movie_view__$1,meta15028));
});
}
return (new watchlist.core.t15027(owner,movie,movie_view,null));
});
watchlist.core.movies_view = (function movies_view(app,owner){if(typeof watchlist.core.t15059 !== 'undefined')
{} else
{
/**
* @constructor
*/
watchlist.core.t15059 = (function (owner,app,movies_view,meta15060){
this.owner = owner;
this.app = app;
this.movies_view = movies_view;
this.meta15060 = meta15060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
watchlist.core.t15059.cljs$lang$type = true;
watchlist.core.t15059.cljs$lang$ctorStr = "watchlist.core/t15059";
watchlist.core.t15059.cljs$lang$ctorPrWriter = (function (this__8439__auto__,writer__8440__auto__,opt__8441__auto__){return cljs.core._write.call(null,writer__8440__auto__,"watchlist.core/t15059");
});
watchlist.core.t15059.prototype.om$core$IRenderState$ = true;
watchlist.core.t15059.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__15062){var self__ = this;
var map__15063 = p__15062;var map__15063__$1 = ((cljs.core.seq_QMARK_.call(null,map__15063))?cljs.core.apply.call(null,cljs.core.hash_map,map__15063):map__15063);var delete$ = cljs.core.get.call(null,map__15063__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));var this$__$1 = this;return React.DOM.div({"id": "container"},React.DOM.h1(null,"Watchlist"),React.DOM.div({"className": "movie-input"},om.dom.input.call(null,{"ref": "new-movie", "type": "text"}),React.DOM.button({"onClick": ((function (this$__$1,map__15063,map__15063__$1,delete$){
return (function (){return watchlist.core.add_movie.call(null,self__.app,self__.owner);
});})(this$__$1,map__15063,map__15063__$1,delete$))
, "className": "btn"},"Add movie")),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,watchlist.core.movie_view,new cljs.core.Keyword(null,"movies","movies",-255929346).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete","delete",-1768633620),delete$], null)], null))));
});
watchlist.core.t15059.prototype.om$core$IWillMount$ = true;
watchlist.core.t15059.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var delete$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete","delete",-1768633620));var c__10398__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10398__auto__,delete$,___$1){
return (function (){var f__10399__auto__ = (function (){var switch__10383__auto__ = ((function (c__10398__auto__,delete$,___$1){
return (function (state_15073){var state_val_15074 = (state_15073[(1)]);if((state_val_15074 === (4)))
{var inst_15066 = (state_15073[(2)]);var inst_15067 = (function (){var movie = inst_15066;return ((function (movie,inst_15066,state_val_15074,c__10398__auto__,delete$,___$1){
return (function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (movie,inst_15066,state_val_15074,c__10398__auto__,delete$,___$1){
return (function (p1__15032_SHARP_){return cljs.core._EQ_.call(null,movie,p1__15032_SHARP_);
});})(movie,inst_15066,state_val_15074,c__10398__auto__,delete$,___$1))
,xs));
});
;})(movie,inst_15066,state_val_15074,c__10398__auto__,delete$,___$1))
})();var inst_15068 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"movies","movies",-255929346),inst_15067);var state_15073__$1 = (function (){var statearr_15075 = state_15073;(statearr_15075[(7)] = inst_15068);
return statearr_15075;
})();var statearr_15076_15085 = state_15073__$1;(statearr_15076_15085[(2)] = null);
(statearr_15076_15085[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (3)))
{var inst_15071 = (state_15073[(2)]);var state_15073__$1 = state_15073;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15073__$1,inst_15071);
} else
{if((state_val_15074 === (2)))
{var state_15073__$1 = state_15073;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15073__$1,(4),delete$);
} else
{if((state_val_15074 === (1)))
{var state_15073__$1 = state_15073;var statearr_15077_15086 = state_15073__$1;(statearr_15077_15086[(2)] = null);
(statearr_15077_15086[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__10398__auto__,delete$,___$1))
;return ((function (switch__10383__auto__,c__10398__auto__,delete$,___$1){
return (function() {
var state_machine__10384__auto__ = null;
var state_machine__10384__auto____0 = (function (){var statearr_15081 = [null,null,null,null,null,null,null,null];(statearr_15081[(0)] = state_machine__10384__auto__);
(statearr_15081[(1)] = (1));
return statearr_15081;
});
var state_machine__10384__auto____1 = (function (state_15073){while(true){
var ret_value__10385__auto__ = (function (){try{while(true){
var result__10386__auto__ = switch__10383__auto__.call(null,state_15073);if(cljs.core.keyword_identical_QMARK_.call(null,result__10386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10386__auto__;
}
break;
}
}catch (e15082){if((e15082 instanceof Object))
{var ex__10387__auto__ = e15082;var statearr_15083_15087 = state_15073;(statearr_15083_15087[(5)] = ex__10387__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15073);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15082;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15088 = state_15073;
state_15073 = G__15088;
continue;
}
} else
{return ret_value__10385__auto__;
}
break;
}
});
state_machine__10384__auto__ = function(state_15073){
switch(arguments.length){
case 0:
return state_machine__10384__auto____0.call(this);
case 1:
return state_machine__10384__auto____1.call(this,state_15073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10384__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10384__auto____0;
state_machine__10384__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10384__auto____1;
return state_machine__10384__auto__;
})()
;})(switch__10383__auto__,c__10398__auto__,delete$,___$1))
})();var state__10400__auto__ = (function (){var statearr_15084 = f__10399__auto__.call(null);(statearr_15084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10398__auto__);
return statearr_15084;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10400__auto__);
});})(c__10398__auto__,delete$,___$1))
);
return c__10398__auto__;
});
watchlist.core.t15059.prototype.om$core$IInitState$ = true;
watchlist.core.t15059.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.async.chan.call(null)], null);
});
watchlist.core.t15059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15061){var self__ = this;
var _15061__$1 = this;return self__.meta15060;
});
watchlist.core.t15059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15061,meta15060__$1){var self__ = this;
var _15061__$1 = this;return (new watchlist.core.t15059(self__.owner,self__.app,self__.movies_view,meta15060__$1));
});
watchlist.core.__GT_t15059 = (function __GT_t15059(owner__$1,app__$1,movies_view__$1,meta15060){return (new watchlist.core.t15059(owner__$1,app__$1,movies_view__$1,meta15060));
});
}
return (new watchlist.core.t15059(owner,app,movies_view,null));
});
om.core.root.call(null,watchlist.core.movies_view,watchlist.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map