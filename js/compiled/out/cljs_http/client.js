// Compiled by ClojureScript 0.0-2280
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs_http.core');
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__7858__auto__ = v;if(cljs.core.truth_(and__7858__auto__))
{return (v > (0));
} else
{return and__7858__auto__;
}
})()))
{return v;
} else
{return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s)))
{return cljs.core.reduce.call(null,(function (p1__13961_SHARP_,p2__13960_SHARP_){var vec__13963 = clojure.string.split.call(null,p2__13960_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__13963,(0),null);var v = cljs.core.nth.call(null,vec__13963,(1),null);return cljs.core.assoc.call(null,p1__13961_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url)))
{var uri = goog.Uri.parse(url);var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__13964_SHARP_){return cljs_http.client.encode_val.call(null,k,p1__13964_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__13965){var vec__13967 = p__13965;var k = cljs.core.nth.call(null,vec__13967,(0),null);var v = cljs.core.nth.call(null,vec__13967,(1),null);if(cljs.core.coll_QMARK_.call(null,v))
{return cljs_http.client.encode_vals.call(null,k,v);
} else
{return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__7858__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__7858__auto__)
{return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content_type))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__7858__auto__;
}
})()))
{return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__10397__auto___14004 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10397__auto___14004,channel){
return (function (){var f__10398__auto__ = (function (){var switch__10382__auto__ = ((function (c__10397__auto___14004,channel){
return (function (state_13994){var state_val_13995 = (state_13994[(1)]);if((state_val_13995 === (2)))
{var inst_13988 = (state_13994[(2)]);var inst_13989 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_13990 = cljs_http.client.decode_body.call(null,inst_13988,cljs.reader.read_string,"application/edn",inst_13989);var inst_13991 = cljs.core.async.put_BANG_.call(null,channel,inst_13990);var inst_13992 = cljs.core.async.close_BANG_.call(null,channel);var state_13994__$1 = (function (){var statearr_13996 = state_13994;(statearr_13996[(7)] = inst_13991);
return statearr_13996;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13994__$1,inst_13992);
} else
{if((state_val_13995 === (1)))
{var inst_13986 = client.call(null,request);var state_13994__$1 = state_13994;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13994__$1,(2),inst_13986);
} else
{return null;
}
}
});})(c__10397__auto___14004,channel))
;return ((function (switch__10382__auto__,c__10397__auto___14004,channel){
return (function() {
var state_machine__10383__auto__ = null;
var state_machine__10383__auto____0 = (function (){var statearr_14000 = [null,null,null,null,null,null,null,null];(statearr_14000[(0)] = state_machine__10383__auto__);
(statearr_14000[(1)] = (1));
return statearr_14000;
});
var state_machine__10383__auto____1 = (function (state_13994){while(true){
var ret_value__10384__auto__ = (function (){try{while(true){
var result__10385__auto__ = switch__10382__auto__.call(null,state_13994);if(cljs.core.keyword_identical_QMARK_.call(null,result__10385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10385__auto__;
}
break;
}
}catch (e14001){if((e14001 instanceof Object))
{var ex__10386__auto__ = e14001;var statearr_14002_14005 = state_13994;(statearr_14002_14005[(5)] = ex__10386__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13994);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14001;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14006 = state_13994;
state_13994 = G__14006;
continue;
}
} else
{return ret_value__10384__auto__;
}
break;
}
});
state_machine__10383__auto__ = function(state_13994){
switch(arguments.length){
case 0:
return state_machine__10383__auto____0.call(this);
case 1:
return state_machine__10383__auto____1.call(this,state_13994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10383__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10383__auto____0;
state_machine__10383__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10383__auto____1;
return state_machine__10383__auto__;
})()
;})(switch__10382__auto__,c__10397__auto___14004,channel))
})();var state__10399__auto__ = (function (){var statearr_14003 = f__10398__auto__.call(null);(statearr_14003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10397__auto___14004);
return statearr_14003;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10399__auto__);
});})(c__10397__auto___14004,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__14007){var vec__14009 = p__14007;var accept = cljs.core.nth.call(null,vec__14009,(0),null);return ((function (vec__14009,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__7870__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__14009,accept))
};
var wrap_accept = function (client,var_args){
var p__14007 = null;if (arguments.length > 1) {
  p__14007 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__14007);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__14010){
var client = cljs.core.first(arglist__14010);
var p__14007 = cljs.core.rest(arglist__14010);
return wrap_accept__delegate(client,p__14007);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__14011){var vec__14013 = p__14011;var content_type = cljs.core.nth.call(null,vec__14013,(0),null);return ((function (vec__14013,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__7870__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__14013,content_type))
};
var wrap_content_type = function (client,var_args){
var p__14011 = null;if (arguments.length > 1) {
  p__14011 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__14011);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__14014){
var client = cljs.core.first(arglist__14014);
var p__14011 = cljs.core.rest(arglist__14014);
return wrap_content_type__delegate(client,p__14011);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__10397__auto___14051 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10397__auto___14051,channel){
return (function (){var f__10398__auto__ = (function (){var switch__10382__auto__ = ((function (c__10397__auto___14051,channel){
return (function (state_14041){var state_val_14042 = (state_14041[(1)]);if((state_val_14042 === (2)))
{var inst_14035 = (state_14041[(2)]);var inst_14036 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_14037 = cljs_http.client.decode_body.call(null,inst_14035,cljs_http.util.json_decode,"application/json",inst_14036);var inst_14038 = cljs.core.async.put_BANG_.call(null,channel,inst_14037);var inst_14039 = cljs.core.async.close_BANG_.call(null,channel);var state_14041__$1 = (function (){var statearr_14043 = state_14041;(statearr_14043[(7)] = inst_14038);
return statearr_14043;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14041__$1,inst_14039);
} else
{if((state_val_14042 === (1)))
{var inst_14033 = client.call(null,request);var state_14041__$1 = state_14041;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14041__$1,(2),inst_14033);
} else
{return null;
}
}
});})(c__10397__auto___14051,channel))
;return ((function (switch__10382__auto__,c__10397__auto___14051,channel){
return (function() {
var state_machine__10383__auto__ = null;
var state_machine__10383__auto____0 = (function (){var statearr_14047 = [null,null,null,null,null,null,null,null];(statearr_14047[(0)] = state_machine__10383__auto__);
(statearr_14047[(1)] = (1));
return statearr_14047;
});
var state_machine__10383__auto____1 = (function (state_14041){while(true){
var ret_value__10384__auto__ = (function (){try{while(true){
var result__10385__auto__ = switch__10382__auto__.call(null,state_14041);if(cljs.core.keyword_identical_QMARK_.call(null,result__10385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10385__auto__;
}
break;
}
}catch (e14048){if((e14048 instanceof Object))
{var ex__10386__auto__ = e14048;var statearr_14049_14052 = state_14041;(statearr_14049_14052[(5)] = ex__10386__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14041);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14048;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14053 = state_14041;
state_14041 = G__14053;
continue;
}
} else
{return ret_value__10384__auto__;
}
break;
}
});
state_machine__10383__auto__ = function(state_14041){
switch(arguments.length){
case 0:
return state_machine__10383__auto____0.call(this);
case 1:
return state_machine__10383__auto____1.call(this,state_14041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10383__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10383__auto____0;
state_machine__10383__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10383__auto____1;
return state_machine__10383__auto__;
})()
;})(switch__10382__auto__,c__10397__auto___14051,channel))
})();var state__10399__auto__ = (function (){var statearr_14050 = f__10398__auto__.call(null);(statearr_14050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10397__auto___14051);
return statearr_14050;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10399__auto__);
});})(c__10397__auto___14051,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__14056){var map__14057 = p__14056;var map__14057__$1 = ((cljs.core.seq_QMARK_.call(null,map__14057))?cljs.core.apply.call(null,cljs.core.hash_map,map__14057):map__14057);var req = map__14057__$1;var query_params = cljs.core.get.call(null,map__14057__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__14060){var map__14061 = p__14060;var map__14061__$1 = ((cljs.core.seq_QMARK_.call(null,map__14061))?cljs.core.apply.call(null,cljs.core.hash_map,map__14061):map__14061);var request = map__14061__$1;var request_method = cljs.core.get.call(null,map__14061__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.call(null,map__14061__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__7858__auto__ = form_params;if(cljs.core.truth_(and__7858__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__7858__auto__;
}
})()))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded"));
} else
{return client.call(null,request);
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){return client.call(null,(cljs.core.truth_(cljs_http.util.android_QMARK_.call(null))?cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),Math.random.call(null)):request));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__14062_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__14062_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__14066){var map__14067 = p__14066;var map__14067__$1 = ((cljs.core.seq_QMARK_.call(null,map__14067))?cljs.core.apply.call(null,cljs.core.hash_map,map__14067):map__14067);var req = map__14067__$1;var query_params = cljs.core.get.call(null,map__14067__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__14067,map__14067__$1,req,query_params){
return (function (p1__14063_SHARP_){return cljs.core.merge.call(null,p1__14063_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__14067,map__14067__$1,req,query_params))
));
} else
{return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__14068){var vec__14070 = p__14068;var credentials = cljs.core.nth.call(null,vec__14070,(0),null);return ((function (vec__14070,credentials){
return (function (req){var credentials__$1 = (function (){var or__7870__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__14070,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__14068 = null;if (arguments.length > 1) {
  p__14068 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__14068);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__14071){
var client = cljs.core.first(arglist__14071);
var p__14068 = cljs.core.rest(arglist__14071);
return wrap_basic_auth__delegate(client,p__14068);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token))));
} else
{return client.call(null,req);
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_android_cors_bugfix.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__14072){var vec__14074 = p__14072;var req = cljs.core.nth.call(null,vec__14074,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__14072 = null;if (arguments.length > 1) {
  p__14072 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__14072);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__14075){
var url = cljs.core.first(arglist__14075);
var p__14072 = cljs.core.rest(arglist__14075);
return delete$__delegate(url,p__14072);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__14076){var vec__14078 = p__14076;var req = cljs.core.nth.call(null,vec__14078,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__14076 = null;if (arguments.length > 1) {
  p__14076 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__14076);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__14079){
var url = cljs.core.first(arglist__14079);
var p__14076 = cljs.core.rest(arglist__14079);
return get__delegate(url,p__14076);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__14080){var vec__14082 = p__14080;var req = cljs.core.nth.call(null,vec__14082,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__14080 = null;if (arguments.length > 1) {
  p__14080 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__14080);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__14083){
var url = cljs.core.first(arglist__14083);
var p__14080 = cljs.core.rest(arglist__14083);
return head__delegate(url,p__14080);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__14084){var vec__14086 = p__14084;var req = cljs.core.nth.call(null,vec__14086,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__14084 = null;if (arguments.length > 1) {
  p__14084 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__14084);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__14087){
var url = cljs.core.first(arglist__14087);
var p__14084 = cljs.core.rest(arglist__14087);
return move__delegate(url,p__14084);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__14088){var vec__14090 = p__14088;var req = cljs.core.nth.call(null,vec__14090,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__14088 = null;if (arguments.length > 1) {
  p__14088 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__14088);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__14091){
var url = cljs.core.first(arglist__14091);
var p__14088 = cljs.core.rest(arglist__14091);
return options__delegate(url,p__14088);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__14092){var vec__14094 = p__14092;var req = cljs.core.nth.call(null,vec__14094,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__14092 = null;if (arguments.length > 1) {
  p__14092 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__14092);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__14095){
var url = cljs.core.first(arglist__14095);
var p__14092 = cljs.core.rest(arglist__14095);
return patch__delegate(url,p__14092);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__14096){var vec__14098 = p__14096;var req = cljs.core.nth.call(null,vec__14098,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__14096 = null;if (arguments.length > 1) {
  p__14096 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__14096);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__14099){
var url = cljs.core.first(arglist__14099);
var p__14096 = cljs.core.rest(arglist__14099);
return post__delegate(url,p__14096);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__14100){var vec__14102 = p__14100;var req = cljs.core.nth.call(null,vec__14102,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__14100 = null;if (arguments.length > 1) {
  p__14100 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__14100);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__14103){
var url = cljs.core.first(arglist__14103);
var p__14100 = cljs.core.rest(arglist__14103);
return put__delegate(url,p__14100);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map