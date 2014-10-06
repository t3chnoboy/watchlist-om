// Compiled by ClojureScript 0.0-2342
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__24362,args){var map__24364 = p__24362;var map__24364__$1 = ((cljs.core.seq_QMARK_.call(null,map__24364))?cljs.core.apply.call(null,cljs.core.hash_map,map__24364):map__24364);var debug = cljs.core.get.call(null,map__24364__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__24362,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__24362,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__24365){
var p__24362 = cljs.core.first(arglist__24365);
var args = cljs.core.rest(arglist__24365);
return log__delegate(p__24362,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__24366){var map__24368 = p__24366;var map__24368__$1 = ((cljs.core.seq_QMARK_.call(null,map__24368))?cljs.core.apply.call(null,cljs.core.hash_map,map__24368):map__24368);var websocket_url = cljs.core.get.call(null,map__24368__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__24369,callback){var map__24371 = p__24369;var map__24371__$1 = ((cljs.core.seq_QMARK_.call(null,map__24371))?cljs.core.apply.call(null,cljs.core.hash_map,map__24371):map__24371);var msg = map__24371__$1;var dependency_file = cljs.core.get.call(null,map__24371__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__24371__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__24371__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__11481__auto__ = dependency_file;if(cljs.core.truth_(or__11481__auto__))
{return or__11481__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__24371,map__24371__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__24371,map__24371__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__24372,p__24373){var map__24376 = p__24372;var map__24376__$1 = ((cljs.core.seq_QMARK_.call(null,map__24376))?cljs.core.apply.call(null,cljs.core.hash_map,map__24376):map__24376);var opts = map__24376__$1;var url_rewriter = cljs.core.get.call(null,map__24376__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__24377 = p__24373;var map__24377__$1 = ((cljs.core.seq_QMARK_.call(null,map__24377))?cljs.core.apply.call(null,cljs.core.hash_map,map__24377):map__24377);var d = map__24377__$1;var file = cljs.core.get.call(null,map__24377__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__24378,p__24379){var map__24421 = p__24378;var map__24421__$1 = ((cljs.core.seq_QMARK_.call(null,map__24421))?cljs.core.apply.call(null,cljs.core.hash_map,map__24421):map__24421);var opts = map__24421__$1;var on_jsload = cljs.core.get.call(null,map__24421__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__24421__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__24422 = p__24379;var map__24422__$1 = ((cljs.core.seq_QMARK_.call(null,map__24422))?cljs.core.apply.call(null,cljs.core.hash_map,map__24422):map__24422);var files = cljs.core.get.call(null,map__24422__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__14013__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto__,map__24421,map__24421__$1,opts,on_jsload,before_jsload,map__24422,map__24422__$1,files){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto__,map__24421,map__24421__$1,opts,on_jsload,before_jsload,map__24422,map__24422__$1,files){
return (function (state_24445){var state_val_24446 = (state_24445[(1)]);if((state_val_24446 === (6)))
{var inst_24427 = (state_24445[(7)]);var inst_24436 = (state_24445[(2)]);var inst_24437 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24438 = [inst_24427];var inst_24439 = (new cljs.core.PersistentVector(null,1,(5),inst_24437,inst_24438,null));var inst_24440 = cljs.core.apply.call(null,on_jsload,inst_24439);var state_24445__$1 = (function (){var statearr_24447 = state_24445;(statearr_24447[(8)] = inst_24436);
return statearr_24447;
})();var statearr_24448_24462 = state_24445__$1;(statearr_24448_24462[(2)] = inst_24440);
(statearr_24448_24462[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24446 === (5)))
{var inst_24443 = (state_24445[(2)]);var state_24445__$1 = state_24445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24445__$1,inst_24443);
} else
{if((state_val_24446 === (4)))
{var state_24445__$1 = state_24445;var statearr_24449_24463 = state_24445__$1;(statearr_24449_24463[(2)] = null);
(statearr_24449_24463[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24446 === (3)))
{var inst_24427 = (state_24445[(7)]);var inst_24430 = console.debug("Figwheel: loaded these files");var inst_24431 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24427);var inst_24432 = cljs.core.prn_str.call(null,inst_24431);var inst_24433 = console.log(inst_24432);var inst_24434 = cljs.core.async.timeout.call(null,(10));var state_24445__$1 = (function (){var statearr_24450 = state_24445;(statearr_24450[(9)] = inst_24433);
(statearr_24450[(10)] = inst_24430);
return statearr_24450;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24445__$1,(6),inst_24434);
} else
{if((state_val_24446 === (2)))
{var inst_24427 = (state_24445[(7)]);var inst_24427__$1 = (state_24445[(2)]);var inst_24428 = cljs.core.not_empty.call(null,inst_24427__$1);var state_24445__$1 = (function (){var statearr_24451 = state_24445;(statearr_24451[(7)] = inst_24427__$1);
return statearr_24451;
})();if(cljs.core.truth_(inst_24428))
{var statearr_24452_24464 = state_24445__$1;(statearr_24452_24464[(1)] = (3));
} else
{var statearr_24453_24465 = state_24445__$1;(statearr_24453_24465[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24446 === (1)))
{var inst_24423 = before_jsload.call(null,files);var inst_24424 = figwheel.client.add_request_urls.call(null,opts,files);var inst_24425 = figwheel.client.load_all_js_files.call(null,inst_24424);var state_24445__$1 = (function (){var statearr_24454 = state_24445;(statearr_24454[(11)] = inst_24423);
return statearr_24454;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24445__$1,(2),inst_24425);
} else
{return null;
}
}
}
}
}
}
});})(c__14013__auto__,map__24421,map__24421__$1,opts,on_jsload,before_jsload,map__24422,map__24422__$1,files))
;return ((function (switch__13957__auto__,c__14013__auto__,map__24421,map__24421__$1,opts,on_jsload,before_jsload,map__24422,map__24422__$1,files){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_24458 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24458[(0)] = state_machine__13958__auto__);
(statearr_24458[(1)] = (1));
return statearr_24458;
});
var state_machine__13958__auto____1 = (function (state_24445){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_24445);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e24459){if((e24459 instanceof Object))
{var ex__13961__auto__ = e24459;var statearr_24460_24466 = state_24445;(statearr_24460_24466[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24445);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24459;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24467 = state_24445;
state_24445 = G__24467;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_24445){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_24445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto__,map__24421,map__24421__$1,opts,on_jsload,before_jsload,map__24422,map__24422__$1,files))
})();var state__14015__auto__ = (function (){var statearr_24461 = f__14014__auto__.call(null);(statearr_24461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto__);
return statearr_24461;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto__,map__24421,map__24421__$1,opts,on_jsload,before_jsload,map__24422,map__24422__$1,files))
);
return c__14013__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__24468,link_href){var map__24470 = p__24468;var map__24470__$1 = ((cljs.core.seq_QMARK_.call(null,map__24470))?cljs.core.apply.call(null,cljs.core.hash_map,map__24470):map__24470);var request_url = cljs.core.get.call(null,map__24470__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__24470__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__14013__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto__,parent){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto__,parent){
return (function (state_24491){var state_val_24492 = (state_24491[(1)]);if((state_val_24492 === (2)))
{var inst_24488 = (state_24491[(2)]);var inst_24489 = parent.removeChild(orig_link);var state_24491__$1 = (function (){var statearr_24493 = state_24491;(statearr_24493[(7)] = inst_24488);
return statearr_24493;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24491__$1,inst_24489);
} else
{if((state_val_24492 === (1)))
{var inst_24486 = cljs.core.async.timeout.call(null,(200));var state_24491__$1 = state_24491;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24491__$1,(2),inst_24486);
} else
{return null;
}
}
});})(c__14013__auto__,parent))
;return ((function (switch__13957__auto__,c__14013__auto__,parent){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_24497 = [null,null,null,null,null,null,null,null];(statearr_24497[(0)] = state_machine__13958__auto__);
(statearr_24497[(1)] = (1));
return statearr_24497;
});
var state_machine__13958__auto____1 = (function (state_24491){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_24491);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e24498){if((e24498 instanceof Object))
{var ex__13961__auto__ = e24498;var statearr_24499_24501 = state_24491;(statearr_24499_24501[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24491);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24498;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24502 = state_24491;
state_24491 = G__24502;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_24491){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_24491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto__,parent))
})();var state__14015__auto__ = (function (){var statearr_24500 = f__14014__auto__.call(null);(statearr_24500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto__);
return statearr_24500;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto__,parent))
);
return c__14013__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__24503){var map__24505 = p__24503;var map__24505__$1 = ((cljs.core.seq_QMARK_.call(null,map__24505))?cljs.core.apply.call(null,cljs.core.hash_map,map__24505):map__24505);var f_data = map__24505__$1;var request_url = cljs.core.get.call(null,map__24505__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__24505__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4220__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4220__auto__))
{var link = temp__4220__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__24506,files_msg){var map__24528 = p__24506;var map__24528__$1 = ((cljs.core.seq_QMARK_.call(null,map__24528))?cljs.core.apply.call(null,cljs.core.hash_map,map__24528):map__24528);var opts = map__24528__$1;var on_cssload = cljs.core.get.call(null,map__24528__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__24529_24549 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__24530_24550 = null;var count__24531_24551 = (0);var i__24532_24552 = (0);while(true){
if((i__24532_24552 < count__24531_24551))
{var f_24553 = cljs.core._nth.call(null,chunk__24530_24550,i__24532_24552);figwheel.client.reload_css_file.call(null,f_24553);
{
var G__24554 = seq__24529_24549;
var G__24555 = chunk__24530_24550;
var G__24556 = count__24531_24551;
var G__24557 = (i__24532_24552 + (1));
seq__24529_24549 = G__24554;
chunk__24530_24550 = G__24555;
count__24531_24551 = G__24556;
i__24532_24552 = G__24557;
continue;
}
} else
{var temp__4222__auto___24558 = cljs.core.seq.call(null,seq__24529_24549);if(temp__4222__auto___24558)
{var seq__24529_24559__$1 = temp__4222__auto___24558;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24529_24559__$1))
{var c__12250__auto___24560 = cljs.core.chunk_first.call(null,seq__24529_24559__$1);{
var G__24561 = cljs.core.chunk_rest.call(null,seq__24529_24559__$1);
var G__24562 = c__12250__auto___24560;
var G__24563 = cljs.core.count.call(null,c__12250__auto___24560);
var G__24564 = (0);
seq__24529_24549 = G__24561;
chunk__24530_24550 = G__24562;
count__24531_24551 = G__24563;
i__24532_24552 = G__24564;
continue;
}
} else
{var f_24565 = cljs.core.first.call(null,seq__24529_24559__$1);figwheel.client.reload_css_file.call(null,f_24565);
{
var G__24566 = cljs.core.next.call(null,seq__24529_24559__$1);
var G__24567 = null;
var G__24568 = (0);
var G__24569 = (0);
seq__24529_24549 = G__24566;
chunk__24530_24550 = G__24567;
count__24531_24551 = G__24568;
i__24532_24552 = G__24569;
continue;
}
}
} else
{}
}
break;
}
var c__14013__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto__,map__24528,map__24528__$1,opts,on_cssload){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto__,map__24528,map__24528__$1,opts,on_cssload){
return (function (state_24539){var state_val_24540 = (state_24539[(1)]);if((state_val_24540 === (2)))
{var inst_24535 = (state_24539[(2)]);var inst_24536 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_24537 = on_cssload.call(null,inst_24536);var state_24539__$1 = (function (){var statearr_24541 = state_24539;(statearr_24541[(7)] = inst_24535);
return statearr_24541;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24539__$1,inst_24537);
} else
{if((state_val_24540 === (1)))
{var inst_24533 = cljs.core.async.timeout.call(null,(100));var state_24539__$1 = state_24539;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24539__$1,(2),inst_24533);
} else
{return null;
}
}
});})(c__14013__auto__,map__24528,map__24528__$1,opts,on_cssload))
;return ((function (switch__13957__auto__,c__14013__auto__,map__24528,map__24528__$1,opts,on_cssload){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_24545 = [null,null,null,null,null,null,null,null];(statearr_24545[(0)] = state_machine__13958__auto__);
(statearr_24545[(1)] = (1));
return statearr_24545;
});
var state_machine__13958__auto____1 = (function (state_24539){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_24539);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e24546){if((e24546 instanceof Object))
{var ex__13961__auto__ = e24546;var statearr_24547_24570 = state_24539;(statearr_24547_24570[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24539);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24546;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24571 = state_24539;
state_24539 = G__24571;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_24539){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_24539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto__,map__24528,map__24528__$1,opts,on_cssload))
})();var state__14015__auto__ = (function (){var statearr_24548 = f__14014__auto__.call(null);(statearr_24548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto__);
return statearr_24548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto__,map__24528,map__24528__$1,opts,on_cssload))
);
return c__14013__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__24572){var map__24577 = p__24572;var map__24577__$1 = ((cljs.core.seq_QMARK_.call(null,map__24577))?cljs.core.apply.call(null,cljs.core.hash_map,map__24577):map__24577);var opts = map__24577__$1;var on_compile_fail = cljs.core.get.call(null,map__24577__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__24577__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__24577__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__24577__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__24577,map__24577__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__24578 = cljs.core._EQ_;var expr__24579 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__24578.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__24579)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__24578.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__24579)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__24578.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24579)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__24577,map__24577__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__24577,map__24577__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__24577,map__24577__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__24577,map__24577__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__24577,map__24577__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__24577,map__24577__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__24577,map__24577__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__24577,map__24577__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__24577,map__24577__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj24584 = {"detail":url};return obj24584;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__24585){var map__24587 = p__24585;var map__24587__$1 = ((cljs.core.seq_QMARK_.call(null,map__24587))?cljs.core.apply.call(null,cljs.core.hash_map,map__24587):map__24587);var class$ = cljs.core.get.call(null,map__24587__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__24587__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__24588){var map__24594 = p__24588;var map__24594__$1 = ((cljs.core.seq_QMARK_.call(null,map__24594))?cljs.core.apply.call(null,cljs.core.hash_map,map__24594):map__24594);var ed = map__24594__$1;var exception_data = cljs.core.get.call(null,map__24594__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__24594__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__24595_24599 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__24596_24600 = null;var count__24597_24601 = (0);var i__24598_24602 = (0);while(true){
if((i__24598_24602 < count__24597_24601))
{var msg_24603 = cljs.core._nth.call(null,chunk__24596_24600,i__24598_24602);console.log(msg_24603);
{
var G__24604 = seq__24595_24599;
var G__24605 = chunk__24596_24600;
var G__24606 = count__24597_24601;
var G__24607 = (i__24598_24602 + (1));
seq__24595_24599 = G__24604;
chunk__24596_24600 = G__24605;
count__24597_24601 = G__24606;
i__24598_24602 = G__24607;
continue;
}
} else
{var temp__4222__auto___24608 = cljs.core.seq.call(null,seq__24595_24599);if(temp__4222__auto___24608)
{var seq__24595_24609__$1 = temp__4222__auto___24608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24595_24609__$1))
{var c__12250__auto___24610 = cljs.core.chunk_first.call(null,seq__24595_24609__$1);{
var G__24611 = cljs.core.chunk_rest.call(null,seq__24595_24609__$1);
var G__24612 = c__12250__auto___24610;
var G__24613 = cljs.core.count.call(null,c__12250__auto___24610);
var G__24614 = (0);
seq__24595_24599 = G__24611;
chunk__24596_24600 = G__24612;
count__24597_24601 = G__24613;
i__24598_24602 = G__24614;
continue;
}
} else
{var msg_24615 = cljs.core.first.call(null,seq__24595_24609__$1);console.log(msg_24615);
{
var G__24616 = cljs.core.next.call(null,seq__24595_24609__$1);
var G__24617 = null;
var G__24618 = (0);
var G__24619 = (0);
seq__24595_24599 = G__24616;
chunk__24596_24600 = G__24617;
count__24597_24601 = G__24618;
i__24598_24602 = G__24619;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__11481__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__11481__auto__))
{return or__11481__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__24620){var map__24622 = p__24620;var map__24622__$1 = ((cljs.core.seq_QMARK_.call(null,map__24622))?cljs.core.apply.call(null,cljs.core.hash_map,map__24622):map__24622);var opts = map__24622__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__24620 = null;if (arguments.length > 0) {
  p__24620 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__24620);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__24623){
var p__24620 = cljs.core.seq(arglist__24623);
return watch_and_reload__delegate(p__24620);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map