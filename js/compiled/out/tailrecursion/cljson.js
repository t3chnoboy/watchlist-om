// Compiled by ClojureScript 0.0-2342
goog.provide('tailrecursion.cljson');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.date.DateTime');
goog.require('goog.date.DateTime');
goog.require('cljs.reader');
goog.require('cljs.reader');
tailrecursion.cljson.EncodeTagged = (function (){var obj24339 = {};return obj24339;
})();
tailrecursion.cljson._encode = (function _encode(o){if((function (){var and__11469__auto__ = o;if(and__11469__auto__)
{return o.tailrecursion$cljson$EncodeTagged$_encode$arity$1;
} else
{return and__11469__auto__;
}
})())
{return o.tailrecursion$cljson$EncodeTagged$_encode$arity$1(o);
} else
{var x__12117__auto__ = (((o == null))?null:o);return (function (){var or__11481__auto__ = (tailrecursion.cljson._encode[goog.typeOf(x__12117__auto__)]);if(or__11481__auto__)
{return or__11481__auto__;
} else
{var or__11481__auto____$1 = (tailrecursion.cljson._encode["_"]);if(or__11481__auto____$1)
{return or__11481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"EncodeTagged.-encode",o);
}
}
})().call(null,o);
}
});
/**
* Convert clj data to JSON string.
*/
tailrecursion.cljson.clj__GT_cljson = (function clj__GT_cljson(v){return JSON.stringify(tailrecursion.cljson.encode.call(null,v));
});
/**
* Convert JSON string to clj data.
*/
tailrecursion.cljson.cljson__GT_clj = (function cljson__GT_clj(s){return tailrecursion.cljson.decode.call(null,JSON.parse(s));
});
tailrecursion.cljson.enc_coll = (function enc_coll(tag,val){var len = cljs.core.count.call(null,val);var out = [tag];var i = (0);var c = val;while(true){
if((i < len))
{var i__$1 = (i + (1));(out[i__$1] = cljs.core.first.call(null,c));
{
var G__24340 = i__$1;
var G__24341 = cljs.core.rest.call(null,c);
i = G__24340;
c = G__24341;
continue;
}
} else
{return out;
}
break;
}
});
cljs.core.UUID.prototype.tailrecursion$cljson$EncodeTagged$ = true;
cljs.core.UUID.prototype.tailrecursion$cljson$EncodeTagged$_encode$arity$1 = (function (o){var o__$1 = this;return ["uuid",o__$1.uuid];
});
Date.prototype.tailrecursion$cljson$EncodeTagged$ = true;
Date.prototype.tailrecursion$cljson$EncodeTagged$_encode$arity$1 = (function (o){var o__$1 = this;return ["inst",cljs.core.subs.call(null,cljs.core.pr_str.call(null,o__$1),(7),(36))];
});
/**
* Attempts to encode an object that does not satisfy EncodeTagged,
* but for which the printed representation contains a tag.
*/
tailrecursion.cljson.interpret = (function interpret(x){var temp__4222__auto__ = cljs.core.second.call(null,cljs.core.re_matches.call(null,/#([^<].*)/,cljs.core.pr_str.call(null,x)));if(cljs.core.truth_(temp__4222__auto__))
{var match = temp__4222__auto__;var tag = cljs.reader.read_string.call(null,match);var val = cljs.reader.read_string.call(null,cljs.core.subs.call(null,match,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)).length));return [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)),tailrecursion.cljson.encode.call(null,val)];
} else
{return null;
}
});
tailrecursion.cljson.encode = (function encode(x){var temp__4220__auto__ = (function (){var and__11469__auto__ = cljs.core._STAR_print_meta_STAR_;if(cljs.core.truth_(and__11469__auto__))
{return cljs.core.meta.call(null,x);
} else
{return and__11469__auto__;
}
})();if(cljs.core.truth_(temp__4220__auto__))
{var m = temp__4220__auto__;return ["z",encode.call(null,m),encode.call(null,cljs.core.with_meta.call(null,x,null))];
} else
{if((function (){var G__24345 = x;if(G__24345)
{var bit__12144__auto__ = null;if(cljs.core.truth_((function (){var or__11481__auto__ = bit__12144__auto__;if(cljs.core.truth_(or__11481__auto__))
{return or__11481__auto__;
} else
{return G__24345.tailrecursion$cljson$EncodeTagged$;
}
})()))
{return true;
} else
{if((!G__24345.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,tailrecursion.cljson.EncodeTagged,G__24345);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,tailrecursion.cljson.EncodeTagged,G__24345);
}
})())
{return tailrecursion.cljson._encode.call(null,x);
} else
{if((x instanceof cljs.core.Keyword))
{return ["k",cljs.core.subs.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),(1))];
} else
{if((x instanceof cljs.core.Symbol))
{return ["y",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))];
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return tailrecursion.cljson.enc_coll.call(null,"v",cljs.core.map.call(null,encode,x));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return tailrecursion.cljson.enc_coll.call(null,"l",cljs.core.map.call(null,encode,x));
} else
{if((cljs.core.map_QMARK_.call(null,x)) && (!((function (){var G__24347 = x;if(G__24347)
{var bit__12144__auto__ = (G__24347.cljs$lang$protocol_mask$partition0$ & (67108864));if((bit__12144__auto__) || (G__24347.cljs$core$IRecord$))
{return true;
} else
{if((!G__24347.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__24347);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__24347);
}
})())))
{return tailrecursion.cljson.enc_coll.call(null,"m",cljs.core.map.call(null,encode,cljs.core.apply.call(null,cljs.core.concat,x)));
} else
{if(cljs.core.set_QMARK_.call(null,x))
{return tailrecursion.cljson.enc_coll.call(null,"s",cljs.core.map.call(null,encode,x));
} else
{if((typeof x === 'string') || (typeof x === 'number') || ((x == null)) || (cljs.core._EQ_.call(null,true,x)) || (cljs.core._EQ_.call(null,false,x)))
{return x;
} else
{var or__11481__auto__ = tailrecursion.cljson.interpret.call(null,x);if(cljs.core.truth_(or__11481__auto__))
{return or__11481__auto__;
} else
{throw (new Error(("No cljson encoding for type '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))+"'.")));
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
});
tailrecursion.cljson.decode_tagged = (function decode_tagged(o){var tag = (o[(0)]);var G__24349 = tag;switch (G__24349) {
case "v":
var i = (1);var len = o.length;var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);while(true){
if((i < len))
{{
var G__24351 = (i + (1));
var G__24352 = len;
var G__24353 = cljs.core.conj_BANG_.call(null,out,tailrecursion.cljson.decode.call(null,(o[i])));
i = G__24351;
len = G__24352;
out = G__24353;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}

break;
case "m":
var i = (1);var len = o.length;var out = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < len))
{{
var G__24354 = (i + (2));
var G__24355 = len;
var G__24356 = cljs.core.assoc_BANG_.call(null,out,tailrecursion.cljson.decode.call(null,(o[i])),tailrecursion.cljson.decode.call(null,(o[(i + (1))])));
i = G__24354;
len = G__24355;
out = G__24356;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}

break;
case "l":
var i = (o.length - (1));var out = cljs.core.List.EMPTY;while(true){
if((i > (0)))
{{
var G__24357 = (i - (1));
var G__24358 = cljs.core.conj.call(null,out,tailrecursion.cljson.decode.call(null,(o[i])));
i = G__24357;
out = G__24358;
continue;
}
} else
{return out;
}
break;
}

break;
case "s":
var i = (1);var len = o.length;var out = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);while(true){
if((i < len))
{{
var G__24359 = (i + (1));
var G__24360 = len;
var G__24361 = cljs.core.conj_BANG_.call(null,out,tailrecursion.cljson.decode.call(null,(o[i])));
i = G__24359;
len = G__24360;
out = G__24361;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}

break;
case "k":
return cljs.core.keyword.call(null,(o[(1)]));

break;
case "y":
var val = (o[(1)]);var idx = val.indexOf("/");if((idx < (0)))
{return cljs.core.symbol.call(null,val);
} else
{return cljs.core.symbol.call(null,val.slice((0),idx),val.slice((idx + (1))));
}

break;
case "z":
var m = tailrecursion.cljson.decode.call(null,(o[(1)]));var v = tailrecursion.cljson.decode.call(null,(o[(2)]));return cljs.core.with_meta.call(null,v,m);

break;
default:
var temp__4220__auto__ = (function (){var or__11481__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag);if(cljs.core.truth_(or__11481__auto__))
{return or__11481__auto__;
} else
{return cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
}
})();if(cljs.core.truth_(temp__4220__auto__))
{var reader = temp__4220__auto__;return reader.call(null,tailrecursion.cljson.decode.call(null,(o[(1)])));
} else
{throw (new Error(("No reader function for tag '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"'.")));
}

}
});
tailrecursion.cljson.decode = (function decode(v){if(v instanceof Array)
{return tailrecursion.cljson.decode_tagged.call(null,v);
} else
{return v;
}
});

//# sourceMappingURL=cljson.js.map