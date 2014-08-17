// Compiled by ClojureScript 0.0-2280
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
figwheel.client.log_style = "color:rgb(0,128,0);";
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__15119,args){var map__15121 = p__15119;var map__15121__$1 = ((cljs.core.seq_QMARK_.call(null,map__15121))?cljs.core.apply.call(null,cljs.core.hash_map,map__15121):map__15121);var debug = cljs.core.get.call(null,map__15121__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__15119,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__15119,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__15122){
var p__15119 = cljs.core.first(arglist__15122);
var args = cljs.core.rest(arglist__15122);
return log__delegate(p__15119,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__15123){var map__15125 = p__15123;var map__15125__$1 = ((cljs.core.seq_QMARK_.call(null,map__15125))?cljs.core.apply.call(null,cljs.core.hash_map,map__15125):map__15125);var websocket_url = cljs.core.get.call(null,map__15125__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__15126,callback){var map__15128 = p__15126;var map__15128__$1 = ((cljs.core.seq_QMARK_.call(null,map__15128))?cljs.core.apply.call(null,cljs.core.hash_map,map__15128):map__15128);var msg = map__15128__$1;var dependency_file = cljs.core.get.call(null,map__15128__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__15128__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__15128__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__7870__auto__ = dependency_file;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__15128,map__15128__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__15128,map__15128__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__15129,p__15130){var map__15133 = p__15129;var map__15133__$1 = ((cljs.core.seq_QMARK_.call(null,map__15133))?cljs.core.apply.call(null,cljs.core.hash_map,map__15133):map__15133);var opts = map__15133__$1;var url_rewriter = cljs.core.get.call(null,map__15133__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__15134 = p__15130;var map__15134__$1 = ((cljs.core.seq_QMARK_.call(null,map__15134))?cljs.core.apply.call(null,cljs.core.hash_map,map__15134):map__15134);var d = map__15134__$1;var file = cljs.core.get.call(null,map__15134__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__15135,p__15136){var map__15177 = p__15135;var map__15177__$1 = ((cljs.core.seq_QMARK_.call(null,map__15177))?cljs.core.apply.call(null,cljs.core.hash_map,map__15177):map__15177);var opts = map__15177__$1;var on_jsload = cljs.core.get.call(null,map__15177__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__15177__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__15178 = p__15136;var map__15178__$1 = ((cljs.core.seq_QMARK_.call(null,map__15178))?cljs.core.apply.call(null,cljs.core.hash_map,map__15178):map__15178);var files = cljs.core.get.call(null,map__15178__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__12567__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12567__auto__,map__15177,map__15177__$1,opts,on_jsload,before_jsload,map__15178,map__15178__$1,files){
return (function (){var f__12568__auto__ = (function (){var switch__12502__auto__ = ((function (c__12567__auto__,map__15177,map__15177__$1,opts,on_jsload,before_jsload,map__15178,map__15178__$1,files){
return (function (state_15200){var state_val_15201 = (state_15200[(1)]);if((state_val_15201 === (6)))
{var inst_15183 = (state_15200[(7)]);var inst_15192 = (state_15200[(2)]);var inst_15193 = [inst_15183];var inst_15194 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15193,null));var inst_15195 = cljs.core.apply.call(null,on_jsload,inst_15194);var state_15200__$1 = (function (){var statearr_15202 = state_15200;(statearr_15202[(8)] = inst_15192);
return statearr_15202;
})();var statearr_15203_15217 = state_15200__$1;(statearr_15203_15217[(2)] = inst_15195);
(statearr_15203_15217[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15201 === (5)))
{var inst_15198 = (state_15200[(2)]);var state_15200__$1 = state_15200;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15200__$1,inst_15198);
} else
{if((state_val_15201 === (4)))
{var state_15200__$1 = state_15200;var statearr_15204_15218 = state_15200__$1;(statearr_15204_15218[(2)] = null);
(statearr_15204_15218[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15201 === (3)))
{var inst_15183 = (state_15200[(7)]);var inst_15186 = console.log("%cFigwheel: loaded these files",figwheel.client.log_style);var inst_15187 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_15183);var inst_15188 = cljs.core.prn_str.call(null,inst_15187);var inst_15189 = console.log(inst_15188);var inst_15190 = cljs.core.async.timeout.call(null,(10));var state_15200__$1 = (function (){var statearr_15205 = state_15200;(statearr_15205[(9)] = inst_15189);
(statearr_15205[(10)] = inst_15186);
return statearr_15205;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15200__$1,(6),inst_15190);
} else
{if((state_val_15201 === (2)))
{var inst_15183 = (state_15200[(7)]);var inst_15183__$1 = (state_15200[(2)]);var inst_15184 = cljs.core.not_empty.call(null,inst_15183__$1);var state_15200__$1 = (function (){var statearr_15206 = state_15200;(statearr_15206[(7)] = inst_15183__$1);
return statearr_15206;
})();if(cljs.core.truth_(inst_15184))
{var statearr_15207_15219 = state_15200__$1;(statearr_15207_15219[(1)] = (3));
} else
{var statearr_15208_15220 = state_15200__$1;(statearr_15208_15220[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15201 === (1)))
{var inst_15179 = before_jsload.call(null,files);var inst_15180 = figwheel.client.add_request_urls.call(null,opts,files);var inst_15181 = figwheel.client.load_all_js_files.call(null,inst_15180);var state_15200__$1 = (function (){var statearr_15209 = state_15200;(statearr_15209[(11)] = inst_15179);
return statearr_15209;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15200__$1,(2),inst_15181);
} else
{return null;
}
}
}
}
}
}
});})(c__12567__auto__,map__15177,map__15177__$1,opts,on_jsload,before_jsload,map__15178,map__15178__$1,files))
;return ((function (switch__12502__auto__,c__12567__auto__,map__15177,map__15177__$1,opts,on_jsload,before_jsload,map__15178,map__15178__$1,files){
return (function() {
var state_machine__12503__auto__ = null;
var state_machine__12503__auto____0 = (function (){var statearr_15213 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15213[(0)] = state_machine__12503__auto__);
(statearr_15213[(1)] = (1));
return statearr_15213;
});
var state_machine__12503__auto____1 = (function (state_15200){while(true){
var ret_value__12504__auto__ = (function (){try{while(true){
var result__12505__auto__ = switch__12502__auto__.call(null,state_15200);if(cljs.core.keyword_identical_QMARK_.call(null,result__12505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12505__auto__;
}
break;
}
}catch (e15214){if((e15214 instanceof Object))
{var ex__12506__auto__ = e15214;var statearr_15215_15221 = state_15200;(statearr_15215_15221[(5)] = ex__12506__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15200);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15222 = state_15200;
state_15200 = G__15222;
continue;
}
} else
{return ret_value__12504__auto__;
}
break;
}
});
state_machine__12503__auto__ = function(state_15200){
switch(arguments.length){
case 0:
return state_machine__12503__auto____0.call(this);
case 1:
return state_machine__12503__auto____1.call(this,state_15200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12503__auto____0;
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12503__auto____1;
return state_machine__12503__auto__;
})()
;})(switch__12502__auto__,c__12567__auto__,map__15177,map__15177__$1,opts,on_jsload,before_jsload,map__15178,map__15178__$1,files))
})();var state__12569__auto__ = (function (){var statearr_15216 = f__12568__auto__.call(null);(statearr_15216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12567__auto__);
return statearr_15216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12569__auto__);
});})(c__12567__auto__,map__15177,map__15177__$1,opts,on_jsload,before_jsload,map__15178,map__15178__$1,files))
);
return c__12567__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__15223,link_href){var map__15225 = p__15223;var map__15225__$1 = ((cljs.core.seq_QMARK_.call(null,map__15225))?cljs.core.apply.call(null,cljs.core.hash_map,map__15225):map__15225);var request_url = cljs.core.get.call(null,map__15225__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__15225__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__12567__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12567__auto__,parent){
return (function (){var f__12568__auto__ = (function (){var switch__12502__auto__ = ((function (c__12567__auto__,parent){
return (function (state_15246){var state_val_15247 = (state_15246[(1)]);if((state_val_15247 === (2)))
{var inst_15243 = (state_15246[(2)]);var inst_15244 = parent.removeChild(orig_link);var state_15246__$1 = (function (){var statearr_15248 = state_15246;(statearr_15248[(7)] = inst_15243);
return statearr_15248;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15246__$1,inst_15244);
} else
{if((state_val_15247 === (1)))
{var inst_15241 = cljs.core.async.timeout.call(null,(200));var state_15246__$1 = state_15246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15246__$1,(2),inst_15241);
} else
{return null;
}
}
});})(c__12567__auto__,parent))
;return ((function (switch__12502__auto__,c__12567__auto__,parent){
return (function() {
var state_machine__12503__auto__ = null;
var state_machine__12503__auto____0 = (function (){var statearr_15252 = [null,null,null,null,null,null,null,null];(statearr_15252[(0)] = state_machine__12503__auto__);
(statearr_15252[(1)] = (1));
return statearr_15252;
});
var state_machine__12503__auto____1 = (function (state_15246){while(true){
var ret_value__12504__auto__ = (function (){try{while(true){
var result__12505__auto__ = switch__12502__auto__.call(null,state_15246);if(cljs.core.keyword_identical_QMARK_.call(null,result__12505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12505__auto__;
}
break;
}
}catch (e15253){if((e15253 instanceof Object))
{var ex__12506__auto__ = e15253;var statearr_15254_15256 = state_15246;(statearr_15254_15256[(5)] = ex__12506__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15246);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15253;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15257 = state_15246;
state_15246 = G__15257;
continue;
}
} else
{return ret_value__12504__auto__;
}
break;
}
});
state_machine__12503__auto__ = function(state_15246){
switch(arguments.length){
case 0:
return state_machine__12503__auto____0.call(this);
case 1:
return state_machine__12503__auto____1.call(this,state_15246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12503__auto____0;
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12503__auto____1;
return state_machine__12503__auto__;
})()
;})(switch__12502__auto__,c__12567__auto__,parent))
})();var state__12569__auto__ = (function (){var statearr_15255 = f__12568__auto__.call(null);(statearr_15255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12567__auto__);
return statearr_15255;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12569__auto__);
});})(c__12567__auto__,parent))
);
return c__12567__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__15258){var map__15260 = p__15258;var map__15260__$1 = ((cljs.core.seq_QMARK_.call(null,map__15260))?cljs.core.apply.call(null,cljs.core.hash_map,map__15260):map__15260);var f_data = map__15260__$1;var request_url = cljs.core.get.call(null,map__15260__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__15260__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__15261,files_msg){var map__15283 = p__15261;var map__15283__$1 = ((cljs.core.seq_QMARK_.call(null,map__15283))?cljs.core.apply.call(null,cljs.core.hash_map,map__15283):map__15283);var opts = map__15283__$1;var on_cssload = cljs.core.get.call(null,map__15283__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__15284_15304 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__15285_15305 = null;var count__15286_15306 = (0);var i__15287_15307 = (0);while(true){
if((i__15287_15307 < count__15286_15306))
{var f_15308 = cljs.core._nth.call(null,chunk__15285_15305,i__15287_15307);figwheel.client.reload_css_file.call(null,f_15308);
{
var G__15309 = seq__15284_15304;
var G__15310 = chunk__15285_15305;
var G__15311 = count__15286_15306;
var G__15312 = (i__15287_15307 + (1));
seq__15284_15304 = G__15309;
chunk__15285_15305 = G__15310;
count__15286_15306 = G__15311;
i__15287_15307 = G__15312;
continue;
}
} else
{var temp__4126__auto___15313 = cljs.core.seq.call(null,seq__15284_15304);if(temp__4126__auto___15313)
{var seq__15284_15314__$1 = temp__4126__auto___15313;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15284_15314__$1))
{var c__8626__auto___15315 = cljs.core.chunk_first.call(null,seq__15284_15314__$1);{
var G__15316 = cljs.core.chunk_rest.call(null,seq__15284_15314__$1);
var G__15317 = c__8626__auto___15315;
var G__15318 = cljs.core.count.call(null,c__8626__auto___15315);
var G__15319 = (0);
seq__15284_15304 = G__15316;
chunk__15285_15305 = G__15317;
count__15286_15306 = G__15318;
i__15287_15307 = G__15319;
continue;
}
} else
{var f_15320 = cljs.core.first.call(null,seq__15284_15314__$1);figwheel.client.reload_css_file.call(null,f_15320);
{
var G__15321 = cljs.core.next.call(null,seq__15284_15314__$1);
var G__15322 = null;
var G__15323 = (0);
var G__15324 = (0);
seq__15284_15304 = G__15321;
chunk__15285_15305 = G__15322;
count__15286_15306 = G__15323;
i__15287_15307 = G__15324;
continue;
}
}
} else
{}
}
break;
}
var c__12567__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12567__auto__,map__15283,map__15283__$1,opts,on_cssload){
return (function (){var f__12568__auto__ = (function (){var switch__12502__auto__ = ((function (c__12567__auto__,map__15283,map__15283__$1,opts,on_cssload){
return (function (state_15294){var state_val_15295 = (state_15294[(1)]);if((state_val_15295 === (2)))
{var inst_15290 = (state_15294[(2)]);var inst_15291 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_15292 = on_cssload.call(null,inst_15291);var state_15294__$1 = (function (){var statearr_15296 = state_15294;(statearr_15296[(7)] = inst_15290);
return statearr_15296;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15294__$1,inst_15292);
} else
{if((state_val_15295 === (1)))
{var inst_15288 = cljs.core.async.timeout.call(null,(100));var state_15294__$1 = state_15294;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15294__$1,(2),inst_15288);
} else
{return null;
}
}
});})(c__12567__auto__,map__15283,map__15283__$1,opts,on_cssload))
;return ((function (switch__12502__auto__,c__12567__auto__,map__15283,map__15283__$1,opts,on_cssload){
return (function() {
var state_machine__12503__auto__ = null;
var state_machine__12503__auto____0 = (function (){var statearr_15300 = [null,null,null,null,null,null,null,null];(statearr_15300[(0)] = state_machine__12503__auto__);
(statearr_15300[(1)] = (1));
return statearr_15300;
});
var state_machine__12503__auto____1 = (function (state_15294){while(true){
var ret_value__12504__auto__ = (function (){try{while(true){
var result__12505__auto__ = switch__12502__auto__.call(null,state_15294);if(cljs.core.keyword_identical_QMARK_.call(null,result__12505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12505__auto__;
}
break;
}
}catch (e15301){if((e15301 instanceof Object))
{var ex__12506__auto__ = e15301;var statearr_15302_15325 = state_15294;(statearr_15302_15325[(5)] = ex__12506__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15294);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15301;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15326 = state_15294;
state_15294 = G__15326;
continue;
}
} else
{return ret_value__12504__auto__;
}
break;
}
});
state_machine__12503__auto__ = function(state_15294){
switch(arguments.length){
case 0:
return state_machine__12503__auto____0.call(this);
case 1:
return state_machine__12503__auto____1.call(this,state_15294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12503__auto____0;
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12503__auto____1;
return state_machine__12503__auto__;
})()
;})(switch__12502__auto__,c__12567__auto__,map__15283,map__15283__$1,opts,on_cssload))
})();var state__12569__auto__ = (function (){var statearr_15303 = f__12568__auto__.call(null);(statearr_15303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12567__auto__);
return statearr_15303;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12569__auto__);
});})(c__12567__auto__,map__15283,map__15283__$1,opts,on_cssload))
);
return c__12567__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__15327){var map__15332 = p__15327;var map__15332__$1 = ((cljs.core.seq_QMARK_.call(null,map__15332))?cljs.core.apply.call(null,cljs.core.hash_map,map__15332):map__15332);var opts = map__15332__$1;var on_compile_fail = cljs.core.get.call(null,map__15332__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__15332__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__15332__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__15332__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__15332,map__15332__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__15333 = cljs.core._EQ_;var expr__15334 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__15333.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__15334)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__15333.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__15334)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__15333.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__15334)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__15332,map__15332__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__15332,map__15332__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__15332,map__15332__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__15332,map__15332__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__15332,map__15332__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__15332,map__15332__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__15332,map__15332__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__15332,map__15332__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__15332,map__15332__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj15339 = {"detail":url};return obj15339;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__15340){var map__15342 = p__15340;var map__15342__$1 = ((cljs.core.seq_QMARK_.call(null,map__15342))?cljs.core.apply.call(null,cljs.core.hash_map,map__15342):map__15342);var class$ = cljs.core.get.call(null,map__15342__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__15342__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__15343){var map__15349 = p__15343;var map__15349__$1 = ((cljs.core.seq_QMARK_.call(null,map__15349))?cljs.core.apply.call(null,cljs.core.hash_map,map__15349):map__15349);var ed = map__15349__$1;var exception_data = cljs.core.get.call(null,map__15349__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__15349__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.log("%cFigwheel: Compile Exception",figwheel.client.log_style);
var seq__15350_15354 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__15351_15355 = null;var count__15352_15356 = (0);var i__15353_15357 = (0);while(true){
if((i__15353_15357 < count__15352_15356))
{var msg_15358 = cljs.core._nth.call(null,chunk__15351_15355,i__15353_15357);console.log(msg_15358);
{
var G__15359 = seq__15350_15354;
var G__15360 = chunk__15351_15355;
var G__15361 = count__15352_15356;
var G__15362 = (i__15353_15357 + (1));
seq__15350_15354 = G__15359;
chunk__15351_15355 = G__15360;
count__15352_15356 = G__15361;
i__15353_15357 = G__15362;
continue;
}
} else
{var temp__4126__auto___15363 = cljs.core.seq.call(null,seq__15350_15354);if(temp__4126__auto___15363)
{var seq__15350_15364__$1 = temp__4126__auto___15363;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15350_15364__$1))
{var c__8626__auto___15365 = cljs.core.chunk_first.call(null,seq__15350_15364__$1);{
var G__15366 = cljs.core.chunk_rest.call(null,seq__15350_15364__$1);
var G__15367 = c__8626__auto___15365;
var G__15368 = cljs.core.count.call(null,c__8626__auto___15365);
var G__15369 = (0);
seq__15350_15354 = G__15366;
chunk__15351_15355 = G__15367;
count__15352_15356 = G__15368;
i__15353_15357 = G__15369;
continue;
}
} else
{var msg_15370 = cljs.core.first.call(null,seq__15350_15364__$1);console.log(msg_15370);
{
var G__15371 = cljs.core.next.call(null,seq__15350_15364__$1);
var G__15372 = null;
var G__15373 = (0);
var G__15374 = (0);
seq__15350_15354 = G__15371;
chunk__15351_15355 = G__15372;
count__15352_15356 = G__15373;
i__15353_15357 = G__15374;
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
figwheel.client.default_before_load = (function default_before_load(files){console.log("%cFigwheel: loading files",figwheel.client.log_style);
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.log("%cFigwheel: loaded CSS files",figwheel.client.log_style);
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__7870__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
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
var watch_and_reload__delegate = function (p__15375){var map__15377 = p__15375;var map__15377__$1 = ((cljs.core.seq_QMARK_.call(null,map__15377))?cljs.core.apply.call(null,cljs.core.hash_map,map__15377):map__15377);var opts = map__15377__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__15375 = null;if (arguments.length > 0) {
  p__15375 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__15375);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__15378){
var p__15375 = cljs.core.seq(arglist__15378);
return watch_and_reload__delegate(p__15375);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map