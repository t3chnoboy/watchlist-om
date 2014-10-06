// Compiled by ClojureScript 0.0-2342
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
cljs.core.enable_console_print_BANG_.call(null);
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__20569_20573 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__20570_20574 = null;var count__20571_20575 = (0);var i__20572_20576 = (0);while(true){
if((i__20572_20576 < count__20571_20575))
{var k_20577 = cljs.core._nth.call(null,chunk__20570_20574,i__20572_20576);var v_20578 = (b[k_20577]);(a[k_20577] = v_20578);
{
var G__20579 = seq__20569_20573;
var G__20580 = chunk__20570_20574;
var G__20581 = count__20571_20575;
var G__20582 = (i__20572_20576 + (1));
seq__20569_20573 = G__20579;
chunk__20570_20574 = G__20580;
count__20571_20575 = G__20581;
i__20572_20576 = G__20582;
continue;
}
} else
{var temp__4222__auto___20583 = cljs.core.seq.call(null,seq__20569_20573);if(temp__4222__auto___20583)
{var seq__20569_20584__$1 = temp__4222__auto___20583;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20569_20584__$1))
{var c__12250__auto___20585 = cljs.core.chunk_first.call(null,seq__20569_20584__$1);{
var G__20586 = cljs.core.chunk_rest.call(null,seq__20569_20584__$1);
var G__20587 = c__12250__auto___20585;
var G__20588 = cljs.core.count.call(null,c__12250__auto___20585);
var G__20589 = (0);
seq__20569_20573 = G__20586;
chunk__20570_20574 = G__20587;
count__20571_20575 = G__20588;
i__20572_20576 = G__20589;
continue;
}
} else
{var k_20590 = cljs.core.first.call(null,seq__20569_20584__$1);var v_20591 = (b[k_20590]);(a[k_20590] = v_20591);
{
var G__20592 = cljs.core.next.call(null,seq__20569_20584__$1);
var G__20593 = null;
var G__20594 = (0);
var G__20595 = (0);
seq__20569_20573 = G__20592;
chunk__20570_20574 = G__20593;
count__20571_20575 = G__20594;
i__20572_20576 = G__20595;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": (function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__20596 = (i + (2));
var G__20597 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__20596;
ret = G__20597;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
}), "list": (function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}), "set": (function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}), ":": (function (v){return cljs.core.keyword.call(null,v);
}), "$": (function (v){return cljs.core.symbol.call(null,v);
})}},cljs.core.clj__GT_js.call(null,opts)));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__20598_20602 = cljs.core.seq.call(null,v);var chunk__20599_20603 = null;var count__20600_20604 = (0);var i__20601_20605 = (0);while(true){
if((i__20601_20605 < count__20600_20604))
{var x_20606 = cljs.core._nth.call(null,chunk__20599_20603,i__20601_20605);ret.push(x_20606);
{
var G__20607 = seq__20598_20602;
var G__20608 = chunk__20599_20603;
var G__20609 = count__20600_20604;
var G__20610 = (i__20601_20605 + (1));
seq__20598_20602 = G__20607;
chunk__20599_20603 = G__20608;
count__20600_20604 = G__20609;
i__20601_20605 = G__20610;
continue;
}
} else
{var temp__4222__auto___20611 = cljs.core.seq.call(null,seq__20598_20602);if(temp__4222__auto___20611)
{var seq__20598_20612__$1 = temp__4222__auto___20611;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20598_20612__$1))
{var c__12250__auto___20613 = cljs.core.chunk_first.call(null,seq__20598_20612__$1);{
var G__20614 = cljs.core.chunk_rest.call(null,seq__20598_20612__$1);
var G__20615 = c__12250__auto___20613;
var G__20616 = cljs.core.count.call(null,c__12250__auto___20613);
var G__20617 = (0);
seq__20598_20602 = G__20614;
chunk__20599_20603 = G__20615;
count__20600_20604 = G__20616;
i__20601_20605 = G__20617;
continue;
}
} else
{var x_20618 = cljs.core.first.call(null,seq__20598_20612__$1);ret.push(x_20618);
{
var G__20619 = cljs.core.next.call(null,seq__20598_20612__$1);
var G__20620 = null;
var G__20621 = (0);
var G__20622 = (0);
seq__20598_20602 = G__20619;
chunk__20599_20603 = G__20620;
count__20600_20604 = G__20621;
i__20601_20605 = G__20622;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__20623_20627 = cljs.core.seq.call(null,v);var chunk__20624_20628 = null;var count__20625_20629 = (0);var i__20626_20630 = (0);while(true){
if((i__20626_20630 < count__20625_20629))
{var x_20631 = cljs.core._nth.call(null,chunk__20624_20628,i__20626_20630);ret.push(x_20631);
{
var G__20632 = seq__20623_20627;
var G__20633 = chunk__20624_20628;
var G__20634 = count__20625_20629;
var G__20635 = (i__20626_20630 + (1));
seq__20623_20627 = G__20632;
chunk__20624_20628 = G__20633;
count__20625_20629 = G__20634;
i__20626_20630 = G__20635;
continue;
}
} else
{var temp__4222__auto___20636 = cljs.core.seq.call(null,seq__20623_20627);if(temp__4222__auto___20636)
{var seq__20623_20637__$1 = temp__4222__auto___20636;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20623_20637__$1))
{var c__12250__auto___20638 = cljs.core.chunk_first.call(null,seq__20623_20637__$1);{
var G__20639 = cljs.core.chunk_rest.call(null,seq__20623_20637__$1);
var G__20640 = c__12250__auto___20638;
var G__20641 = cljs.core.count.call(null,c__12250__auto___20638);
var G__20642 = (0);
seq__20623_20627 = G__20639;
chunk__20624_20628 = G__20640;
count__20625_20629 = G__20641;
i__20626_20630 = G__20642;
continue;
}
} else
{var x_20643 = cljs.core.first.call(null,seq__20623_20637__$1);ret.push(x_20643);
{
var G__20644 = cljs.core.next.call(null,seq__20623_20637__$1);
var G__20645 = null;
var G__20646 = (0);
var G__20647 = (0);
seq__20623_20627 = G__20644;
chunk__20624_20628 = G__20645;
count__20625_20629 = G__20646;
i__20626_20630 = G__20647;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__20648_20652 = cljs.core.seq.call(null,v);var chunk__20649_20653 = null;var count__20650_20654 = (0);var i__20651_20655 = (0);while(true){
if((i__20651_20655 < count__20650_20654))
{var x_20656 = cljs.core._nth.call(null,chunk__20649_20653,i__20651_20655);ret.push(x_20656);
{
var G__20657 = seq__20648_20652;
var G__20658 = chunk__20649_20653;
var G__20659 = count__20650_20654;
var G__20660 = (i__20651_20655 + (1));
seq__20648_20652 = G__20657;
chunk__20649_20653 = G__20658;
count__20650_20654 = G__20659;
i__20651_20655 = G__20660;
continue;
}
} else
{var temp__4222__auto___20661 = cljs.core.seq.call(null,seq__20648_20652);if(temp__4222__auto___20661)
{var seq__20648_20662__$1 = temp__4222__auto___20661;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20648_20662__$1))
{var c__12250__auto___20663 = cljs.core.chunk_first.call(null,seq__20648_20662__$1);{
var G__20664 = cljs.core.chunk_rest.call(null,seq__20648_20662__$1);
var G__20665 = c__12250__auto___20663;
var G__20666 = cljs.core.count.call(null,c__12250__auto___20663);
var G__20667 = (0);
seq__20648_20652 = G__20664;
chunk__20649_20653 = G__20665;
count__20650_20654 = G__20666;
i__20651_20655 = G__20667;
continue;
}
} else
{var x_20668 = cljs.core.first.call(null,seq__20648_20662__$1);ret.push(x_20668);
{
var G__20669 = cljs.core.next.call(null,seq__20648_20662__$1);
var G__20670 = null;
var G__20671 = (0);
var G__20672 = (0);
seq__20648_20652 = G__20669;
chunk__20649_20653 = G__20670;
count__20650_20654 = G__20671;
i__20651_20655 = G__20672;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x20682 = cljs.core.clone.call(null,handlers);x20682.forEach = ((function (x20682,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__20683 = cljs.core.seq.call(null,coll);var chunk__20684 = null;var count__20685 = (0);var i__20686 = (0);while(true){
if((i__20686 < count__20685))
{var vec__20687 = cljs.core._nth.call(null,chunk__20684,i__20686);var k = cljs.core.nth.call(null,vec__20687,(0),null);var v = cljs.core.nth.call(null,vec__20687,(1),null);f.call(null,v,k);
{
var G__20689 = seq__20683;
var G__20690 = chunk__20684;
var G__20691 = count__20685;
var G__20692 = (i__20686 + (1));
seq__20683 = G__20689;
chunk__20684 = G__20690;
count__20685 = G__20691;
i__20686 = G__20692;
continue;
}
} else
{var temp__4222__auto__ = cljs.core.seq.call(null,seq__20683);if(temp__4222__auto__)
{var seq__20683__$1 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20683__$1))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,seq__20683__$1);{
var G__20693 = cljs.core.chunk_rest.call(null,seq__20683__$1);
var G__20694 = c__12250__auto__;
var G__20695 = cljs.core.count.call(null,c__12250__auto__);
var G__20696 = (0);
seq__20683 = G__20693;
chunk__20684 = G__20694;
count__20685 = G__20695;
i__20686 = G__20696;
continue;
}
} else
{var vec__20688 = cljs.core.first.call(null,seq__20683__$1);var k = cljs.core.nth.call(null,vec__20688,(0),null);var v = cljs.core.nth.call(null,vec__20688,(1),null);f.call(null,v,k);
{
var G__20697 = cljs.core.next.call(null,seq__20683__$1);
var G__20698 = null;
var G__20699 = (0);
var G__20700 = (0);
seq__20683 = G__20697;
chunk__20684 = G__20698;
count__20685 = G__20699;
i__20686 = G__20700;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x20682,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x20682;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__20681 = obj;G__20681.push(kfn.call(null,k),vfn.call(null,v));
return G__20681;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t20704 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t20704 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta20705){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta20705 = meta20705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t20704.cljs$lang$type = true;
cognitect.transit.t20704.cljs$lang$ctorStr = "cognitect.transit/t20704";
cognitect.transit.t20704.cljs$lang$ctorPrWriter = (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"cognitect.transit/t20704");
});
cognitect.transit.t20704.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t20704.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t20704.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t20704.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t20704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20706){var self__ = this;
var _20706__$1 = this;return self__.meta20705;
});
cognitect.transit.t20704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20706,meta20705__$1){var self__ = this;
var _20706__$1 = this;return (new cognitect.transit.t20704(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta20705__$1));
});
cognitect.transit.__GT_t20704 = (function __GT_t20704(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta20705){return (new cognitect.transit.t20704(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta20705));
});
}
return (new cognitect.transit.t20704(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map