// Compiled by ClojureScript 0.0-2342
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
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__11469__auto__ = v;if(cljs.core.truth_(and__11469__auto__))
{return (v > (0));
} else
{return and__11469__auto__;
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
{return cljs.core.reduce.call(null,(function (p1__20239_SHARP_,p2__20238_SHARP_){var vec__20241 = clojure.string.split.call(null,p2__20238_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__20241,(0),null);var v = cljs.core.nth.call(null,vec__20241,(1),null);return cljs.core.assoc.call(null,p1__20239_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__20242_SHARP_){return cljs_http.client.encode_val.call(null,k,p1__20242_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__20243){var vec__20245 = p__20243;var k = cljs.core.nth.call(null,vec__20245,(0),null);var v = cljs.core.nth.call(null,vec__20245,(1),null);if(cljs.core.coll_QMARK_.call(null,v))
{return cljs_http.client.encode_vals.call(null,k,v);
} else
{return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__20246_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20246_SHARP_));
});})(esc_chars))
,esc_chars));
})();
/**
* Escape special characters -- for content-type.
*/
cljs_http.client.escape_special = (function escape_special(string){return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__11469__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__11469__auto__)
{return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__11469__auto__;
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
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4220__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4220__auto__))
{var params = temp__4220__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__14013__auto___20283 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto___20283,channel){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto___20283,channel){
return (function (state_20273){var state_val_20274 = (state_20273[(1)]);if((state_val_20274 === (2)))
{var inst_20267 = (state_20273[(2)]);var inst_20268 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_20269 = cljs_http.client.decode_body.call(null,inst_20267,cljs.reader.read_string,"application/edn",inst_20268);var inst_20270 = cljs.core.async.put_BANG_.call(null,channel,inst_20269);var inst_20271 = cljs.core.async.close_BANG_.call(null,channel);var state_20273__$1 = (function (){var statearr_20275 = state_20273;(statearr_20275[(7)] = inst_20270);
return statearr_20275;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20273__$1,inst_20271);
} else
{if((state_val_20274 === (1)))
{var inst_20265 = client.call(null,request);var state_20273__$1 = state_20273;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20273__$1,(2),inst_20265);
} else
{return null;
}
}
});})(c__14013__auto___20283,channel))
;return ((function (switch__13957__auto__,c__14013__auto___20283,channel){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_20279 = [null,null,null,null,null,null,null,null];(statearr_20279[(0)] = state_machine__13958__auto__);
(statearr_20279[(1)] = (1));
return statearr_20279;
});
var state_machine__13958__auto____1 = (function (state_20273){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_20273);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e20280){if((e20280 instanceof Object))
{var ex__13961__auto__ = e20280;var statearr_20281_20284 = state_20273;(statearr_20281_20284[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20273);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20280;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20285 = state_20273;
state_20273 = G__20285;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_20273){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_20273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto___20283,channel))
})();var state__14015__auto__ = (function (){var statearr_20282 = f__14014__auto__.call(null);(statearr_20282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto___20283);
return statearr_20282;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto___20283,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__20286){var vec__20288 = p__20286;var accept = cljs.core.nth.call(null,vec__20288,(0),null);return ((function (vec__20288,accept){
return (function (request){var temp__4220__auto__ = (function (){var or__11481__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__11481__auto__))
{return or__11481__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4220__auto__))
{var accept__$1 = temp__4220__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__20288,accept))
};
var wrap_accept = function (client,var_args){
var p__20286 = null;if (arguments.length > 1) {
  p__20286 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__20286);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__20289){
var client = cljs.core.first(arglist__20289);
var p__20286 = cljs.core.rest(arglist__20289);
return wrap_accept__delegate(client,p__20286);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__20290){var vec__20292 = p__20290;var content_type = cljs.core.nth.call(null,vec__20292,(0),null);return ((function (vec__20292,content_type){
return (function (request){var temp__4220__auto__ = (function (){var or__11481__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__11481__auto__))
{return or__11481__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4220__auto__))
{var content_type__$1 = temp__4220__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__20292,content_type))
};
var wrap_content_type = function (client,var_args){
var p__20290 = null;if (arguments.length > 1) {
  p__20290 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__20290);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__20293){
var client = cljs.core.first(arglist__20293);
var p__20290 = cljs.core.rest(arglist__20293);
return wrap_content_type__delegate(client,p__20290);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
* Encode :transit-params in the `request` :body and set the appropriate
* Content Type header.
* 
* A :transit-opts map can be optionally provided with the following keys:
* 
* :encoding                #{:json, :json-verbose}
* :decoding                #{:json, :json-verbose}
* :encoding/decoding-opts  appropriate map of options to be passed to
* transit writer/reader, respectively.
*/
cljs_http.client.wrap_transit_params = (function wrap_transit_params(client){return (function (request){var temp__4220__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4220__auto__))
{var params = temp__4220__auto__;var map__20295 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__20295__$1 = ((cljs.core.seq_QMARK_.call(null,map__20295))?cljs.core.apply.call(null,cljs.core.hash_map,map__20295):map__20295);var encoding_opts = cljs.core.get.call(null,map__20295__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));var encoding = cljs.core.get.call(null,map__20295__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var map__20317 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__20317__$1 = ((cljs.core.seq_QMARK_.call(null,map__20317))?cljs.core.apply.call(null,cljs.core.hash_map,map__20317):map__20317);var decoding_opts = cljs.core.get.call(null,map__20317__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));var decoding = cljs.core.get.call(null,map__20317__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));var c__14013__auto___20337 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto___20337,channel,map__20317,map__20317__$1,decoding_opts,decoding){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto___20337,channel,map__20317,map__20317__$1,decoding_opts,decoding){
return (function (state_20327){var state_val_20328 = (state_20327[(1)]);if((state_val_20328 === (2)))
{var inst_20320 = (state_20327[(2)]);var inst_20321 = (function (){var response = inst_20320;return ((function (response,inst_20320,state_val_20328,c__14013__auto___20337,channel,map__20317,map__20317__$1,decoding_opts,decoding){
return (function (p1__20296_SHARP_){return cljs_http.util.transit_decode.call(null,p1__20296_SHARP_,decoding,decoding_opts);
});
;})(response,inst_20320,state_val_20328,c__14013__auto___20337,channel,map__20317,map__20317__$1,decoding_opts,decoding))
})();var inst_20322 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_20323 = cljs_http.client.decode_body.call(null,inst_20320,inst_20321,"application/transit+json",inst_20322);var inst_20324 = cljs.core.async.put_BANG_.call(null,channel,inst_20323);var inst_20325 = cljs.core.async.close_BANG_.call(null,channel);var state_20327__$1 = (function (){var statearr_20329 = state_20327;(statearr_20329[(7)] = inst_20324);
return statearr_20329;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20327__$1,inst_20325);
} else
{if((state_val_20328 === (1)))
{var inst_20318 = client.call(null,request);var state_20327__$1 = state_20327;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20327__$1,(2),inst_20318);
} else
{return null;
}
}
});})(c__14013__auto___20337,channel,map__20317,map__20317__$1,decoding_opts,decoding))
;return ((function (switch__13957__auto__,c__14013__auto___20337,channel,map__20317,map__20317__$1,decoding_opts,decoding){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_20333 = [null,null,null,null,null,null,null,null];(statearr_20333[(0)] = state_machine__13958__auto__);
(statearr_20333[(1)] = (1));
return statearr_20333;
});
var state_machine__13958__auto____1 = (function (state_20327){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_20327);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e20334){if((e20334 instanceof Object))
{var ex__13961__auto__ = e20334;var statearr_20335_20338 = state_20327;(statearr_20335_20338[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20327);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20334;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20339 = state_20327;
state_20327 = G__20339;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_20327){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_20327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto___20337,channel,map__20317,map__20317__$1,decoding_opts,decoding))
})();var state__14015__auto__ = (function (){var statearr_20336 = f__14014__auto__.call(null);(statearr_20336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto___20337);
return statearr_20336;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto___20337,channel,map__20317,map__20317__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4220__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4220__auto__))
{var params = temp__4220__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__14013__auto___20376 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto___20376,channel){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto___20376,channel){
return (function (state_20366){var state_val_20367 = (state_20366[(1)]);if((state_val_20367 === (2)))
{var inst_20360 = (state_20366[(2)]);var inst_20361 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_20362 = cljs_http.client.decode_body.call(null,inst_20360,cljs_http.util.json_decode,"application/json",inst_20361);var inst_20363 = cljs.core.async.put_BANG_.call(null,channel,inst_20362);var inst_20364 = cljs.core.async.close_BANG_.call(null,channel);var state_20366__$1 = (function (){var statearr_20368 = state_20366;(statearr_20368[(7)] = inst_20363);
return statearr_20368;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20366__$1,inst_20364);
} else
{if((state_val_20367 === (1)))
{var inst_20358 = client.call(null,request);var state_20366__$1 = state_20366;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20366__$1,(2),inst_20358);
} else
{return null;
}
}
});})(c__14013__auto___20376,channel))
;return ((function (switch__13957__auto__,c__14013__auto___20376,channel){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_20372 = [null,null,null,null,null,null,null,null];(statearr_20372[(0)] = state_machine__13958__auto__);
(statearr_20372[(1)] = (1));
return statearr_20372;
});
var state_machine__13958__auto____1 = (function (state_20366){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_20366);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e20373){if((e20373 instanceof Object))
{var ex__13961__auto__ = e20373;var statearr_20374_20377 = state_20366;(statearr_20374_20377[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20366);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20373;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20378 = state_20366;
state_20366 = G__20378;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_20366){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_20366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto___20376,channel))
})();var state__14015__auto__ = (function (){var statearr_20375 = f__14014__auto__.call(null);(statearr_20375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto___20376);
return statearr_20375;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto___20376,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__20381){var map__20382 = p__20381;var map__20382__$1 = ((cljs.core.seq_QMARK_.call(null,map__20382))?cljs.core.apply.call(null,cljs.core.hash_map,map__20382):map__20382);var req = map__20382__$1;var query_params = cljs.core.get.call(null,map__20382__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__20385){var map__20386 = p__20385;var map__20386__$1 = ((cljs.core.seq_QMARK_.call(null,map__20386))?cljs.core.apply.call(null,cljs.core.hash_map,map__20386):map__20386);var request = map__20386__$1;var request_method = cljs.core.get.call(null,map__20386__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.call(null,map__20386__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__11469__auto__ = form_params;if(cljs.core.truth_(and__11469__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__11469__auto__;
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
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4220__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4220__auto__))
{var m = temp__4220__auto__;return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__20387_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__20387_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__20391){var map__20392 = p__20391;var map__20392__$1 = ((cljs.core.seq_QMARK_.call(null,map__20392))?cljs.core.apply.call(null,cljs.core.hash_map,map__20392):map__20392);var req = map__20392__$1;var query_params = cljs.core.get.call(null,map__20392__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4220__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4220__auto__))
{var spec = temp__4220__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4220__auto__,map__20392,map__20392__$1,req,query_params){
return (function (p1__20388_SHARP_){return cljs.core.merge.call(null,p1__20388_SHARP_,query_params);
});})(spec,temp__4220__auto__,map__20392,map__20392__$1,req,query_params))
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
var wrap_basic_auth__delegate = function (client,p__20393){var vec__20395 = p__20393;var credentials = cljs.core.nth.call(null,vec__20395,(0),null);return ((function (vec__20395,credentials){
return (function (req){var credentials__$1 = (function (){var or__11481__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__11481__auto__))
{return or__11481__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__20395,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__20393 = null;if (arguments.length > 1) {
  p__20393 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__20393);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__20396){
var client = cljs.core.first(arglist__20396);
var p__20393 = cljs.core.rest(arglist__20396);
return wrap_basic_auth__delegate(client,p__20393);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4220__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4220__auto__))
{var oauth_token = temp__4220__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token))));
} else
{return client.call(null,req);
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_android_cors_bugfix.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))));
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
var delete$__delegate = function (url,p__20397){var vec__20399 = p__20397;var req = cljs.core.nth.call(null,vec__20399,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__20397 = null;if (arguments.length > 1) {
  p__20397 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__20397);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__20400){
var url = cljs.core.first(arglist__20400);
var p__20397 = cljs.core.rest(arglist__20400);
return delete$__delegate(url,p__20397);
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
var get__delegate = function (url,p__20401){var vec__20403 = p__20401;var req = cljs.core.nth.call(null,vec__20403,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__20401 = null;if (arguments.length > 1) {
  p__20401 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__20401);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__20404){
var url = cljs.core.first(arglist__20404);
var p__20401 = cljs.core.rest(arglist__20404);
return get__delegate(url,p__20401);
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
var head__delegate = function (url,p__20405){var vec__20407 = p__20405;var req = cljs.core.nth.call(null,vec__20407,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__20405 = null;if (arguments.length > 1) {
  p__20405 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__20405);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__20408){
var url = cljs.core.first(arglist__20408);
var p__20405 = cljs.core.rest(arglist__20408);
return head__delegate(url,p__20405);
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
var move__delegate = function (url,p__20409){var vec__20411 = p__20409;var req = cljs.core.nth.call(null,vec__20411,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__20409 = null;if (arguments.length > 1) {
  p__20409 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__20409);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__20412){
var url = cljs.core.first(arglist__20412);
var p__20409 = cljs.core.rest(arglist__20412);
return move__delegate(url,p__20409);
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
var options__delegate = function (url,p__20413){var vec__20415 = p__20413;var req = cljs.core.nth.call(null,vec__20415,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__20413 = null;if (arguments.length > 1) {
  p__20413 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__20413);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__20416){
var url = cljs.core.first(arglist__20416);
var p__20413 = cljs.core.rest(arglist__20416);
return options__delegate(url,p__20413);
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
var patch__delegate = function (url,p__20417){var vec__20419 = p__20417;var req = cljs.core.nth.call(null,vec__20419,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__20417 = null;if (arguments.length > 1) {
  p__20417 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__20417);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__20420){
var url = cljs.core.first(arglist__20420);
var p__20417 = cljs.core.rest(arglist__20420);
return patch__delegate(url,p__20417);
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
var post__delegate = function (url,p__20421){var vec__20423 = p__20421;var req = cljs.core.nth.call(null,vec__20423,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__20421 = null;if (arguments.length > 1) {
  p__20421 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__20421);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__20424){
var url = cljs.core.first(arglist__20424);
var p__20421 = cljs.core.rest(arglist__20424);
return post__delegate(url,p__20421);
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
var put__delegate = function (url,p__20425){var vec__20427 = p__20425;var req = cljs.core.nth.call(null,vec__20427,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__20425 = null;if (arguments.length > 1) {
  p__20425 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__20425);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__20428){
var url = cljs.core.first(arglist__20428);
var p__20425 = cljs.core.rest(arglist__20428);
return put__delegate(url,p__20425);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map