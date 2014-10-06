// Compiled by ClojureScript 0.0-2342
goog.provide('watchlist.components.search_view');
goog.require('cljs.core');
goog.require('watchlist.components.rating_view');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('watchlist.components.rating_view');
goog.require('themoviedb.core');
goog.require('themoviedb.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.set');
goog.require('cljs.core.async');
watchlist.components.search_view.transition_group = React.addons.CSSTransitionGroup;
watchlist.components.search_view.ENTER_KEY = (13);
watchlist.components.search_view.tv__GT_movie = (function tv__GT_movie(item){if(cljs.core.contains_QMARK_.call(null,item,new cljs.core.Keyword(null,"name","name",1843675177)))
{return cljs.core.assoc.call(null,clojure.set.rename_keys.call(null,item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"first_air_date","first_air_date",-1150187755),new cljs.core.Keyword(null,"release_date","release_date",-1770099066)], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tv-show","tv-show",1082920187));
} else
{return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"movie","movie",-1492569716));
}
});
watchlist.components.search_view.filter_without_images = (function filter_without_images(movies){return cljs.core.remove.call(null,(function (p1__18046_SHARP_){return (new cljs.core.Keyword(null,"poster_path","poster_path",-1568703583).cljs$core$IFn$_invoke$arity$1(p1__18046_SHARP_) == null);
}),movies);
});
watchlist.components.search_view.handle_search = (function handle_search(owner,query){var c__14013__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto__){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto__){
return (function (state_18078){var state_val_18079 = (state_18078[(1)]);if((state_val_18079 === (3)))
{var inst_18070 = (state_18078[(7)]);var inst_18073 = (state_18078[(2)]);var inst_18074 = cljs.core.concat.call(null,inst_18070,inst_18073);var inst_18075 = (function (){var results = inst_18074;return ((function (results,inst_18070,inst_18073,inst_18074,state_val_18079,c__14013__auto__){
return (function (p1__18047_SHARP_){return cljs.core.assoc.call(null,p1__18047_SHARP_,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.map.call(null,watchlist.components.search_view.tv__GT_movie,cljs.core.take.call(null,(5),watchlist.components.search_view.filter_without_images.call(null,results))));
});
;})(results,inst_18070,inst_18073,inst_18074,state_val_18079,c__14013__auto__))
})();var inst_18076 = om.core.update_state_BANG_.call(null,owner,inst_18075);var state_18078__$1 = state_18078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18078__$1,inst_18076);
} else
{if((state_val_18079 === (2)))
{var inst_18070 = (state_18078[(2)]);var inst_18071 = themoviedb.core.find_tv_show.call(null,query);var state_18078__$1 = (function (){var statearr_18080 = state_18078;(statearr_18080[(7)] = inst_18070);
return statearr_18080;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18078__$1,(3),inst_18071);
} else
{if((state_val_18079 === (1)))
{var inst_18068 = themoviedb.core.find_movie.call(null,query);var state_18078__$1 = state_18078;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18078__$1,(2),inst_18068);
} else
{return null;
}
}
}
});})(c__14013__auto__))
;return ((function (switch__13957__auto__,c__14013__auto__){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_18084 = [null,null,null,null,null,null,null,null];(statearr_18084[(0)] = state_machine__13958__auto__);
(statearr_18084[(1)] = (1));
return statearr_18084;
});
var state_machine__13958__auto____1 = (function (state_18078){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_18078);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e18085){if((e18085 instanceof Object))
{var ex__13961__auto__ = e18085;var statearr_18086_18088 = state_18078;(statearr_18086_18088[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18078);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18085;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18089 = state_18078;
state_18078 = G__18089;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_18078){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_18078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto__))
})();var state__14015__auto__ = (function (){var statearr_18087 = f__14014__auto__.call(null);(statearr_18087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto__);
return statearr_18087;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto__))
);
return c__14013__auto__;
});
watchlist.components.search_view.handle_enter = (function handle_enter(e,owner){if(cljs.core._EQ_.call(null,e.which,watchlist.components.search_view.ENTER_KEY))
{var map__18092_18093 = om.core.get_state.call(null,owner);var map__18092_18094__$1 = ((cljs.core.seq_QMARK_.call(null,map__18092_18093))?cljs.core.apply.call(null,cljs.core.hash_map,map__18092_18093):map__18092_18093);var results_18095 = cljs.core.get.call(null,map__18092_18094__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var add_ch_18096 = cljs.core.get.call(null,map__18092_18094__$1,new cljs.core.Keyword(null,"add-ch","add-ch",-631518812));cljs.core.async.put_BANG_.call(null,add_ch_18096,cljs.core.first.call(null,results_18095));
om.core.update_state_BANG_.call(null,owner,(function (p1__18090_SHARP_){return cljs.core.assoc.call(null,p1__18090_SHARP_,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.PersistentVector.EMPTY);
}));
return e.target.value = "";
} else
{return null;
}
});
watchlist.components.search_view.handle_blur = (function handle_blur(e,owner){return om.core.update_state_BANG_.call(null,owner,(function (p1__18097_SHARP_){return cljs.core.assoc.call(null,p1__18097_SHARP_,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.PersistentVector.EMPTY);
}));
});
watchlist.components.search_view.search_view = (function search_view(app,owner){if(typeof watchlist.components.search_view.t18106 !== 'undefined')
{} else
{
/**
* @constructor
*/
watchlist.components.search_view.t18106 = (function (owner,app,search_view,meta18107){
this.owner = owner;
this.app = app;
this.search_view = search_view;
this.meta18107 = meta18107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
watchlist.components.search_view.t18106.cljs$lang$type = true;
watchlist.components.search_view.t18106.cljs$lang$ctorStr = "watchlist.components.search-view/t18106";
watchlist.components.search_view.t18106.cljs$lang$ctorPrWriter = (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"watchlist.components.search-view/t18106");
});
watchlist.components.search_view.t18106.prototype.om$core$IRenderState$ = true;
watchlist.components.search_view.t18106.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__18109){var self__ = this;
var map__18110 = p__18109;var map__18110__$1 = ((cljs.core.seq_QMARK_.call(null,map__18110))?cljs.core.apply.call(null,cljs.core.hash_map,map__18110):map__18110);var add_ch = cljs.core.get.call(null,map__18110__$1,new cljs.core.Keyword(null,"add-ch","add-ch",-631518812));var results = cljs.core.get.call(null,map__18110__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var ___$1 = this;return React.DOM.div({"id": "search-view"},om.dom.input.call(null,{"onChange": ((function (___$1,map__18110,map__18110__$1,add_ch,results){
return (function (p1__18100_SHARP_){return watchlist.components.search_view.handle_search.call(null,self__.owner,p1__18100_SHARP_.target.value);
});})(___$1,map__18110,map__18110__$1,add_ch,results))
, "onKeyDown": ((function (___$1,map__18110,map__18110__$1,add_ch,results){
return (function (p1__18099_SHARP_){return watchlist.components.search_view.handle_enter.call(null,p1__18099_SHARP_,self__.owner);
});})(___$1,map__18110,map__18110__$1,add_ch,results))
, "onBlur": ((function (___$1,map__18110,map__18110__$1,add_ch,results){
return (function (p1__18098_SHARP_){return watchlist.components.search_view.handle_blur.call(null,p1__18098_SHARP_,self__.owner);
});})(___$1,map__18110,map__18110__$1,add_ch,results))
, "type": "text"}),cljs.core.apply.call(null,watchlist.components.search_view.transition_group,{"component": om.dom.ul, "transitionName": "fade", "id": "search-results"},om.core.build_all.call(null,watchlist.components.search_view.search_result,results,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add-ch","add-ch",-631518812),add_ch], null)], null))));
});
watchlist.components.search_view.t18106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18108){var self__ = this;
var _18108__$1 = this;return self__.meta18107;
});
watchlist.components.search_view.t18106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18108,meta18107__$1){var self__ = this;
var _18108__$1 = this;return (new watchlist.components.search_view.t18106(self__.owner,self__.app,self__.search_view,meta18107__$1));
});
watchlist.components.search_view.__GT_t18106 = (function __GT_t18106(owner__$1,app__$1,search_view__$1,meta18107){return (new watchlist.components.search_view.t18106(owner__$1,app__$1,search_view__$1,meta18107));
});
}
return (new watchlist.components.search_view.t18106(owner,app,search_view,null));
});
watchlist.components.search_view.search_result = (function search_result(result){if(typeof watchlist.components.search_view.t18116 !== 'undefined')
{} else
{
/**
* @constructor
*/
watchlist.components.search_view.t18116 = (function (result,search_result,meta18117){
this.result = result;
this.search_result = search_result;
this.meta18117 = meta18117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
watchlist.components.search_view.t18116.cljs$lang$type = true;
watchlist.components.search_view.t18116.cljs$lang$ctorStr = "watchlist.components.search-view/t18116";
watchlist.components.search_view.t18116.cljs$lang$ctorPrWriter = (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"watchlist.components.search-view/t18116");
});
watchlist.components.search_view.t18116.prototype.om$core$IRenderState$ = true;
watchlist.components.search_view.t18116.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__18119){var self__ = this;
var map__18120 = p__18119;var map__18120__$1 = ((cljs.core.seq_QMARK_.call(null,map__18120))?cljs.core.apply.call(null,cljs.core.hash_map,map__18120):map__18120);var add_ch = cljs.core.get.call(null,map__18120__$1,new cljs.core.Keyword(null,"add-ch","add-ch",-631518812));var ___$1 = this;return React.DOM.div({"onClick": ((function (___$1,map__18120,map__18120__$1,add_ch){
return (function (){return cljs.core.async.put_BANG_.call(null,add_ch,self__.result);
});})(___$1,map__18120,map__18120__$1,add_ch))
, "className": "result"},React.DOM.img({"className": "poster", "src": themoviedb.core.image_url.call(null,new cljs.core.Keyword(null,"poster","poster",-1616913550),new cljs.core.Keyword(null,"tiny","tiny",1577883515),new cljs.core.Keyword(null,"poster_path","poster_path",-1568703583).cljs$core$IFn$_invoke$arity$1(self__.result))}),React.DOM.span(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.result)),om.core.build.call(null,watchlist.components.rating_view.rating_view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"vote_average","vote_average",-1925125338).cljs$core$IFn$_invoke$arity$1(self__.result),new cljs.core.Keyword(null,"max-rating","max-rating",-56872651),(10)], null)),React.DOM.span({"className": "date"},new cljs.core.Keyword(null,"release_date","release_date",-1770099066).cljs$core$IFn$_invoke$arity$1(self__.result)));
});
watchlist.components.search_view.t18116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18118){var self__ = this;
var _18118__$1 = this;return self__.meta18117;
});
watchlist.components.search_view.t18116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18118,meta18117__$1){var self__ = this;
var _18118__$1 = this;return (new watchlist.components.search_view.t18116(self__.result,self__.search_result,meta18117__$1));
});
watchlist.components.search_view.__GT_t18116 = (function __GT_t18116(result__$1,search_result__$1,meta18117){return (new watchlist.components.search_view.t18116(result__$1,search_result__$1,meta18117));
});
}
return (new watchlist.components.search_view.t18116(result,search_result,null));
});

//# sourceMappingURL=search_view.js.map