// Compiled by ClojureScript 0.0-2342
goog.provide('watchlist.components.app');
goog.require('cljs.core');
goog.require('watchlist.components.movie_view');
goog.require('cljs.core.async');
goog.require('watchlist.components.search_view');
goog.require('watchlist.components.search_view');
goog.require('watchlist.components.movie_view');
goog.require('om.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('cljs.core.async');
watchlist.components.app.app = (function app(app_state,owner){if(typeof watchlist.components.app.t17962 !== 'undefined')
{} else
{
/**
* @constructor
*/
watchlist.components.app.t17962 = (function (owner,app_state,app,meta17963){
this.owner = owner;
this.app_state = app_state;
this.app = app;
this.meta17963 = meta17963;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
watchlist.components.app.t17962.cljs$lang$type = true;
watchlist.components.app.t17962.cljs$lang$ctorStr = "watchlist.components.app/t17962";
watchlist.components.app.t17962.cljs$lang$ctorPrWriter = (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"watchlist.components.app/t17962");
});
watchlist.components.app.t17962.prototype.om$core$IRenderState$ = true;
watchlist.components.app.t17962.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__17965){var self__ = this;
var map__17966 = p__17965;var map__17966__$1 = ((cljs.core.seq_QMARK_.call(null,map__17966))?cljs.core.apply.call(null,cljs.core.hash_map,map__17966):map__17966);var delete_ch = cljs.core.get.call(null,map__17966__$1,new cljs.core.Keyword(null,"delete-ch","delete-ch",-1768176320));var add_ch = cljs.core.get.call(null,map__17966__$1,new cljs.core.Keyword(null,"add-ch","add-ch",-631518812));var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,watchlist.components.search_view.search_view,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add-ch","add-ch",-631518812),add_ch], null)], null)),React.DOM.div({"id": "container"},cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,watchlist.components.movie_view.movie_view,new cljs.core.Keyword(null,"movies","movies",-255929346).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete-ch","delete-ch",-1768176320),delete_ch], null)], null)))));
});
watchlist.components.app.t17962.prototype.om$core$IWillMount$ = true;
watchlist.components.app.t17962.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var map__17967 = om.core.get_state.call(null,self__.owner);var map__17967__$1 = ((cljs.core.seq_QMARK_.call(null,map__17967))?cljs.core.apply.call(null,cljs.core.hash_map,map__17967):map__17967);var delete_ch = cljs.core.get.call(null,map__17967__$1,new cljs.core.Keyword(null,"delete-ch","delete-ch",-1768176320));var add_ch = cljs.core.get.call(null,map__17967__$1,new cljs.core.Keyword(null,"add-ch","add-ch",-631518812));var c__14013__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto__,map__17967,map__17967__$1,delete_ch,add_ch,___$1){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto__,map__17967,map__17967__$1,delete_ch,add_ch,___$1){
return (function (state_18016){var state_val_18017 = (state_18016[(1)]);if((state_val_18017 === (7)))
{var inst_18011 = (state_18016[(2)]);var state_18016__$1 = (function (){var statearr_18018 = state_18016;(statearr_18018[(7)] = inst_18011);
return statearr_18018;
})();var statearr_18019_18046 = state_18016__$1;(statearr_18019_18046[(2)] = null);
(statearr_18019_18046[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18017 === (1)))
{var state_18016__$1 = state_18016;var statearr_18020_18047 = state_18016__$1;(statearr_18020_18047[(2)] = null);
(statearr_18020_18047[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18017 === (4)))
{var inst_17978 = (state_18016[(8)]);var inst_17980 = (state_18016[(9)]);var inst_17978__$1 = (state_18016[(2)]);var inst_17979 = cljs.core.nth.call(null,inst_17978__$1,(0),null);var inst_17980__$1 = cljs.core.nth.call(null,inst_17978__$1,(1),null);var inst_17981 = cljs.core._EQ_.call(null,inst_17980__$1,add_ch);var state_18016__$1 = (function (){var statearr_18021 = state_18016;(statearr_18021[(8)] = inst_17978__$1);
(statearr_18021[(10)] = inst_17979);
(statearr_18021[(9)] = inst_17980__$1);
return statearr_18021;
})();if(inst_17981)
{var statearr_18022_18048 = state_18016__$1;(statearr_18022_18048[(1)] = (5));
} else
{var statearr_18023_18049 = state_18016__$1;(statearr_18023_18049[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18017 === (15)))
{var state_18016__$1 = state_18016;var statearr_18024_18050 = state_18016__$1;(statearr_18024_18050[(2)] = null);
(statearr_18024_18050[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18017 === (13)))
{var inst_18009 = (state_18016[(2)]);var state_18016__$1 = state_18016;var statearr_18025_18051 = state_18016__$1;(statearr_18025_18051[(2)] = inst_18009);
(statearr_18025_18051[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18017 === (6)))
{var inst_17980 = (state_18016[(9)]);var inst_17996 = cljs.core._EQ_.call(null,inst_17980,delete_ch);var state_18016__$1 = state_18016;if(inst_17996)
{var statearr_18026_18052 = state_18016__$1;(statearr_18026_18052[(1)] = (11));
} else
{var statearr_18027_18053 = state_18016__$1;(statearr_18027_18053[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18017 === (3)))
{var inst_18014 = (state_18016[(2)]);var state_18016__$1 = state_18016;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18016__$1,inst_18014);
} else
{if((state_val_18017 === (12)))
{var inst_17980 = (state_18016[(9)]);var inst_18003 = cljs.core._EQ_.call(null,inst_17980,new cljs.core.Keyword(null,"default","default",-1987822328));var state_18016__$1 = state_18016;if(inst_18003)
{var statearr_18028_18054 = state_18016__$1;(statearr_18028_18054[(1)] = (14));
} else
{var statearr_18029_18055 = state_18016__$1;(statearr_18029_18055[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18017 === (2)))
{var inst_17974 = cljs.core.PersistentVector.EMPTY_NODE;var inst_17975 = [add_ch,delete_ch];var inst_17976 = (new cljs.core.PersistentVector(null,2,(5),inst_17974,inst_17975,null));var state_18016__$1 = state_18016;return cljs.core.async.ioc_alts_BANG_.call(null,state_18016__$1,(4),inst_17976);
} else
{if((state_val_18017 === (11)))
{var inst_17978 = (state_18016[(8)]);var inst_17979 = (state_18016[(10)]);var inst_17980 = (state_18016[(9)]);var inst_17999 = cljs.core.nth.call(null,inst_17978,(0),null);var inst_18000 = (function (){var movie = inst_17999;var vec__17998 = inst_17978;var ret17972 = inst_17978;var ch17971 = inst_17980;var val__14022__auto__ = inst_17979;var vec__17973 = inst_17978;var G__17970 = delete_ch;var G__17969 = add_ch;return ((function (movie,vec__17998,ret17972,ch17971,val__14022__auto__,vec__17973,G__17970,G__17969,inst_17978,inst_17979,inst_17980,inst_17999,state_val_18017,c__14013__auto__,map__17967,map__17967__$1,delete_ch,add_ch,___$1){
return (function (movies){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (movie,vec__17998,ret17972,ch17971,val__14022__auto__,vec__17973,G__17970,G__17969,inst_17978,inst_17979,inst_17980,inst_17999,state_val_18017,c__14013__auto__,map__17967,map__17967__$1,delete_ch,add_ch,___$1){
return (function (p1__17877_SHARP_){return cljs.core._EQ_.call(null,movie,p1__17877_SHARP_);
});})(movie,vec__17998,ret17972,ch17971,val__14022__auto__,vec__17973,G__17970,G__17969,inst_17978,inst_17979,inst_17980,inst_17999,state_val_18017,c__14013__auto__,map__17967,map__17967__$1,delete_ch,add_ch,___$1))
,movies));
});
;})(movie,vec__17998,ret17972,ch17971,val__14022__auto__,vec__17973,G__17970,G__17969,inst_17978,inst_17979,inst_17980,inst_17999,state_val_18017,c__14013__auto__,map__17967,map__17967__$1,delete_ch,add_ch,___$1))
})();var inst_18001 = om.core.transact_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"movies","movies",-255929346),inst_18000);var state_18016__$1 = state_18016;var statearr_18030_18056 = state_18016__$1;(statearr_18030_18056[(2)] = inst_18001);
(statearr_18030_18056[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18017 === (9)))
{var state_18016__$1 = state_18016;var statearr_18031_18057 = state_18016__$1;(statearr_18031_18057[(2)] = null);
(statearr_18031_18057[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18017 === (5)))
{var inst_17978 = (state_18016[(8)]);var inst_17984 = (state_18016[(11)]);var inst_17979 = (state_18016[(10)]);var inst_17980 = (state_18016[(9)]);var inst_17984__$1 = cljs.core.nth.call(null,inst_17978,(0),null);var inst_17985 = (function (){var movie = inst_17984__$1;var vec__17983 = inst_17978;var ret17972 = inst_17978;var ch17971 = inst_17980;var val__14022__auto__ = inst_17979;var vec__17973 = inst_17978;var G__17970 = delete_ch;var G__17969 = add_ch;return ((function (movie,vec__17983,ret17972,ch17971,val__14022__auto__,vec__17973,G__17970,G__17969,inst_17978,inst_17984,inst_17979,inst_17980,inst_17984__$1,state_val_18017,c__14013__auto__,map__17967,map__17967__$1,delete_ch,add_ch,___$1){
return (function (p1__17875_SHARP_){return cljs.core._EQ_.call(null,movie,p1__17875_SHARP_);
});
;})(movie,vec__17983,ret17972,ch17971,val__14022__auto__,vec__17973,G__17970,G__17969,inst_17978,inst_17984,inst_17979,inst_17980,inst_17984__$1,state_val_18017,c__14013__auto__,map__17967,map__17967__$1,delete_ch,add_ch,___$1))
})();var inst_17986 = cljs.core.deref.call(null,self__.app_state);var inst_17987 = new cljs.core.Keyword(null,"movies","movies",-255929346).cljs$core$IFn$_invoke$arity$1(inst_17986);var inst_17988 = cljs.core.not_any_QMARK_.call(null,inst_17985,inst_17987);var state_18016__$1 = (function (){var statearr_18032 = state_18016;(statearr_18032[(11)] = inst_17984__$1);
return statearr_18032;
})();if(inst_17988)
{var statearr_18033_18058 = state_18016__$1;(statearr_18033_18058[(1)] = (8));
} else
{var statearr_18034_18059 = state_18016__$1;(statearr_18034_18059[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18017 === (14)))
{var inst_17979 = (state_18016[(10)]);var state_18016__$1 = state_18016;var statearr_18035_18060 = state_18016__$1;(statearr_18035_18060[(2)] = inst_17979);
(statearr_18035_18060[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18017 === (16)))
{var inst_18007 = (state_18016[(2)]);var state_18016__$1 = state_18016;var statearr_18036_18061 = state_18016__$1;(statearr_18036_18061[(2)] = inst_18007);
(statearr_18036_18061[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18017 === (10)))
{var inst_17994 = (state_18016[(2)]);var state_18016__$1 = state_18016;var statearr_18037_18062 = state_18016__$1;(statearr_18037_18062[(2)] = inst_17994);
(statearr_18037_18062[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18017 === (8)))
{var inst_17978 = (state_18016[(8)]);var inst_17984 = (state_18016[(11)]);var inst_17979 = (state_18016[(10)]);var inst_17980 = (state_18016[(9)]);var inst_17990 = (function (){var movie = inst_17984;var vec__17983 = inst_17978;var ret17972 = inst_17978;var ch17971 = inst_17980;var val__14022__auto__ = inst_17979;var vec__17973 = inst_17978;var G__17970 = delete_ch;var G__17969 = add_ch;return ((function (movie,vec__17983,ret17972,ch17971,val__14022__auto__,vec__17973,G__17970,G__17969,inst_17978,inst_17984,inst_17979,inst_17980,state_val_18017,c__14013__auto__,map__17967,map__17967__$1,delete_ch,add_ch,___$1){
return (function (p1__17876_SHARP_){return cljs.core.conj.call(null,p1__17876_SHARP_,movie);
});
;})(movie,vec__17983,ret17972,ch17971,val__14022__auto__,vec__17973,G__17970,G__17969,inst_17978,inst_17984,inst_17979,inst_17980,state_val_18017,c__14013__auto__,map__17967,map__17967__$1,delete_ch,add_ch,___$1))
})();var inst_17991 = om.core.transact_BANG_.call(null,self__.app_state,new cljs.core.Keyword(null,"movies","movies",-255929346),inst_17990);var state_18016__$1 = state_18016;var statearr_18038_18063 = state_18016__$1;(statearr_18038_18063[(2)] = inst_17991);
(statearr_18038_18063[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14013__auto__,map__17967,map__17967__$1,delete_ch,add_ch,___$1))
;return ((function (switch__13957__auto__,c__14013__auto__,map__17967,map__17967__$1,delete_ch,add_ch,___$1){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_18042 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18042[(0)] = state_machine__13958__auto__);
(statearr_18042[(1)] = (1));
return statearr_18042;
});
var state_machine__13958__auto____1 = (function (state_18016){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_18016);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e18043){if((e18043 instanceof Object))
{var ex__13961__auto__ = e18043;var statearr_18044_18064 = state_18016;(statearr_18044_18064[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18016);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18043;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18065 = state_18016;
state_18016 = G__18065;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_18016){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_18016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto__,map__17967,map__17967__$1,delete_ch,add_ch,___$1))
})();var state__14015__auto__ = (function (){var statearr_18045 = f__14014__auto__.call(null);(statearr_18045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto__);
return statearr_18045;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto__,map__17967,map__17967__$1,delete_ch,add_ch,___$1))
);
return c__14013__auto__;
});
watchlist.components.app.t17962.prototype.om$core$IInitState$ = true;
watchlist.components.app.t17962.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"add-ch","add-ch",-631518812),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"delete-ch","delete-ch",-1768176320),cljs.core.async.chan.call(null)], null);
});
watchlist.components.app.t17962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17964){var self__ = this;
var _17964__$1 = this;return self__.meta17963;
});
watchlist.components.app.t17962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17964,meta17963__$1){var self__ = this;
var _17964__$1 = this;return (new watchlist.components.app.t17962(self__.owner,self__.app_state,self__.app,meta17963__$1));
});
watchlist.components.app.__GT_t17962 = (function __GT_t17962(owner__$1,app_state__$1,app__$1,meta17963){return (new watchlist.components.app.t17962(owner__$1,app_state__$1,app__$1,meta17963));
});
}
return (new watchlist.components.app.t17962(owner,app_state,app,null));
});

//# sourceMappingURL=app.js.map