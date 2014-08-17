// Compiled by ClojureScript 0.0-2280
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15507 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15507 = (function (f,fn_handler,meta15508){
this.f = f;
this.fn_handler = fn_handler;
this.meta15508 = meta15508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15507.cljs$lang$type = true;
cljs.core.async.t15507.cljs$lang$ctorStr = "cljs.core.async/t15507";
cljs.core.async.t15507.cljs$lang$ctorPrWriter = (function (this__8437__auto__,writer__8438__auto__,opt__8439__auto__){return cljs.core._write.call(null,writer__8438__auto__,"cljs.core.async/t15507");
});
cljs.core.async.t15507.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15507.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15507.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15509){var self__ = this;
var _15509__$1 = this;return self__.meta15508;
});
cljs.core.async.t15507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15509,meta15508__$1){var self__ = this;
var _15509__$1 = this;return (new cljs.core.async.t15507(self__.f,self__.fn_handler,meta15508__$1));
});
cljs.core.async.__GT_t15507 = (function __GT_t15507(f__$1,fn_handler__$1,meta15508){return (new cljs.core.async.t15507(f__$1,fn_handler__$1,meta15508));
});
}
return (new cljs.core.async.t15507(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15511 = buff;if(G__15511)
{var bit__8520__auto__ = null;if(cljs.core.truth_((function (){var or__7870__auto__ = bit__8520__auto__;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return G__15511.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15511.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15511);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15511);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_15512 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15512);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15512,ret){
return (function (){return fn1.call(null,val_15512);
});})(val_15512,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__7858__auto__ = ret;if(cljs.core.truth_(and__7858__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__7858__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8726__auto___15513 = n;var x_15514 = (0);while(true){
if((x_15514 < n__8726__auto___15513))
{(a[x_15514] = (0));
{
var G__15515 = (x_15514 + (1));
x_15514 = G__15515;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__15516 = (i + (1));
i = G__15516;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15520 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15520 = (function (flag,alt_flag,meta15521){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15521 = meta15521;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15520.cljs$lang$type = true;
cljs.core.async.t15520.cljs$lang$ctorStr = "cljs.core.async/t15520";
cljs.core.async.t15520.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8437__auto__,writer__8438__auto__,opt__8439__auto__){return cljs.core._write.call(null,writer__8438__auto__,"cljs.core.async/t15520");
});})(flag))
;
cljs.core.async.t15520.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15520.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15520.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15522){var self__ = this;
var _15522__$1 = this;return self__.meta15521;
});})(flag))
;
cljs.core.async.t15520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15522,meta15521__$1){var self__ = this;
var _15522__$1 = this;return (new cljs.core.async.t15520(self__.flag,self__.alt_flag,meta15521__$1));
});})(flag))
;
cljs.core.async.__GT_t15520 = ((function (flag){
return (function __GT_t15520(flag__$1,alt_flag__$1,meta15521){return (new cljs.core.async.t15520(flag__$1,alt_flag__$1,meta15521));
});})(flag))
;
}
return (new cljs.core.async.t15520(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15526 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15526 = (function (cb,flag,alt_handler,meta15527){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15527 = meta15527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15526.cljs$lang$type = true;
cljs.core.async.t15526.cljs$lang$ctorStr = "cljs.core.async/t15526";
cljs.core.async.t15526.cljs$lang$ctorPrWriter = (function (this__8437__auto__,writer__8438__auto__,opt__8439__auto__){return cljs.core._write.call(null,writer__8438__auto__,"cljs.core.async/t15526");
});
cljs.core.async.t15526.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15528){var self__ = this;
var _15528__$1 = this;return self__.meta15527;
});
cljs.core.async.t15526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15528,meta15527__$1){var self__ = this;
var _15528__$1 = this;return (new cljs.core.async.t15526(self__.cb,self__.flag,self__.alt_handler,meta15527__$1));
});
cljs.core.async.__GT_t15526 = (function __GT_t15526(cb__$1,flag__$1,alt_handler__$1,meta15527){return (new cljs.core.async.t15526(cb__$1,flag__$1,alt_handler__$1,meta15527));
});
}
return (new cljs.core.async.t15526(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15529_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15529_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7870__auto__ = wport;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15530 = (i + (1));
i = G__15530;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7870__auto__ = ret;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__7858__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7858__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7858__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__15531){var map__15533 = p__15531;var map__15533__$1 = ((cljs.core.seq_QMARK_.call(null,map__15533))?cljs.core.apply.call(null,cljs.core.hash_map,map__15533):map__15533);var opts = map__15533__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15531 = null;if (arguments.length > 1) {
  p__15531 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15531);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15534){
var ports = cljs.core.first(arglist__15534);
var p__15531 = cljs.core.rest(arglist__15534);
return alts_BANG___delegate(ports,p__15531);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15542 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15542 = (function (ch,f,map_LT_,meta15543){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15543 = meta15543;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15542.cljs$lang$type = true;
cljs.core.async.t15542.cljs$lang$ctorStr = "cljs.core.async/t15542";
cljs.core.async.t15542.cljs$lang$ctorPrWriter = (function (this__8437__auto__,writer__8438__auto__,opt__8439__auto__){return cljs.core._write.call(null,writer__8438__auto__,"cljs.core.async/t15542");
});
cljs.core.async.t15542.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15542.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15542.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15542.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15545 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15545 = (function (fn1,_,meta15543,ch,f,map_LT_,meta15546){
this.fn1 = fn1;
this._ = _;
this.meta15543 = meta15543;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15546 = meta15546;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15545.cljs$lang$type = true;
cljs.core.async.t15545.cljs$lang$ctorStr = "cljs.core.async/t15545";
cljs.core.async.t15545.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8437__auto__,writer__8438__auto__,opt__8439__auto__){return cljs.core._write.call(null,writer__8438__auto__,"cljs.core.async/t15545");
});})(___$1))
;
cljs.core.async.t15545.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15545.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15535_SHARP_){return f1.call(null,(((p1__15535_SHARP_ == null))?null:self__.f.call(null,p1__15535_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15545.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15547){var self__ = this;
var _15547__$1 = this;return self__.meta15546;
});})(___$1))
;
cljs.core.async.t15545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15547,meta15546__$1){var self__ = this;
var _15547__$1 = this;return (new cljs.core.async.t15545(self__.fn1,self__._,self__.meta15543,self__.ch,self__.f,self__.map_LT_,meta15546__$1));
});})(___$1))
;
cljs.core.async.__GT_t15545 = ((function (___$1){
return (function __GT_t15545(fn1__$1,___$2,meta15543__$1,ch__$2,f__$2,map_LT___$2,meta15546){return (new cljs.core.async.t15545(fn1__$1,___$2,meta15543__$1,ch__$2,f__$2,map_LT___$2,meta15546));
});})(___$1))
;
}
return (new cljs.core.async.t15545(fn1,___$1,self__.meta15543,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7858__auto__ = ret;if(cljs.core.truth_(and__7858__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7858__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15542.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15542.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15544){var self__ = this;
var _15544__$1 = this;return self__.meta15543;
});
cljs.core.async.t15542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15544,meta15543__$1){var self__ = this;
var _15544__$1 = this;return (new cljs.core.async.t15542(self__.ch,self__.f,self__.map_LT_,meta15543__$1));
});
cljs.core.async.__GT_t15542 = (function __GT_t15542(ch__$1,f__$1,map_LT___$1,meta15543){return (new cljs.core.async.t15542(ch__$1,f__$1,map_LT___$1,meta15543));
});
}
return (new cljs.core.async.t15542(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15551 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15551 = (function (ch,f,map_GT_,meta15552){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15552 = meta15552;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15551.cljs$lang$type = true;
cljs.core.async.t15551.cljs$lang$ctorStr = "cljs.core.async/t15551";
cljs.core.async.t15551.cljs$lang$ctorPrWriter = (function (this__8437__auto__,writer__8438__auto__,opt__8439__auto__){return cljs.core._write.call(null,writer__8438__auto__,"cljs.core.async/t15551");
});
cljs.core.async.t15551.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15551.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15551.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15551.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15551.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15551.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15553){var self__ = this;
var _15553__$1 = this;return self__.meta15552;
});
cljs.core.async.t15551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15553,meta15552__$1){var self__ = this;
var _15553__$1 = this;return (new cljs.core.async.t15551(self__.ch,self__.f,self__.map_GT_,meta15552__$1));
});
cljs.core.async.__GT_t15551 = (function __GT_t15551(ch__$1,f__$1,map_GT___$1,meta15552){return (new cljs.core.async.t15551(ch__$1,f__$1,map_GT___$1,meta15552));
});
}
return (new cljs.core.async.t15551(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15557 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15557 = (function (ch,p,filter_GT_,meta15558){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15558 = meta15558;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15557.cljs$lang$type = true;
cljs.core.async.t15557.cljs$lang$ctorStr = "cljs.core.async/t15557";
cljs.core.async.t15557.cljs$lang$ctorPrWriter = (function (this__8437__auto__,writer__8438__auto__,opt__8439__auto__){return cljs.core._write.call(null,writer__8438__auto__,"cljs.core.async/t15557");
});
cljs.core.async.t15557.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15557.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15557.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15557.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15557.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15557.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15559){var self__ = this;
var _15559__$1 = this;return self__.meta15558;
});
cljs.core.async.t15557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15559,meta15558__$1){var self__ = this;
var _15559__$1 = this;return (new cljs.core.async.t15557(self__.ch,self__.p,self__.filter_GT_,meta15558__$1));
});
cljs.core.async.__GT_t15557 = (function __GT_t15557(ch__$1,p__$1,filter_GT___$1,meta15558){return (new cljs.core.async.t15557(ch__$1,p__$1,filter_GT___$1,meta15558));
});
}
return (new cljs.core.async.t15557(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12567__auto___15642 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12567__auto___15642,out){
return (function (){var f__12568__auto__ = (function (){var switch__12502__auto__ = ((function (c__12567__auto___15642,out){
return (function (state_15621){var state_val_15622 = (state_15621[(1)]);if((state_val_15622 === (7)))
{var inst_15617 = (state_15621[(2)]);var state_15621__$1 = state_15621;var statearr_15623_15643 = state_15621__$1;(statearr_15623_15643[(2)] = inst_15617);
(statearr_15623_15643[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15622 === (1)))
{var state_15621__$1 = state_15621;var statearr_15624_15644 = state_15621__$1;(statearr_15624_15644[(2)] = null);
(statearr_15624_15644[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15622 === (4)))
{var inst_15603 = (state_15621[(7)]);var inst_15603__$1 = (state_15621[(2)]);var inst_15604 = (inst_15603__$1 == null);var state_15621__$1 = (function (){var statearr_15625 = state_15621;(statearr_15625[(7)] = inst_15603__$1);
return statearr_15625;
})();if(cljs.core.truth_(inst_15604))
{var statearr_15626_15645 = state_15621__$1;(statearr_15626_15645[(1)] = (5));
} else
{var statearr_15627_15646 = state_15621__$1;(statearr_15627_15646[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15622 === (6)))
{var inst_15603 = (state_15621[(7)]);var inst_15608 = p.call(null,inst_15603);var state_15621__$1 = state_15621;if(cljs.core.truth_(inst_15608))
{var statearr_15628_15647 = state_15621__$1;(statearr_15628_15647[(1)] = (8));
} else
{var statearr_15629_15648 = state_15621__$1;(statearr_15629_15648[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15622 === (3)))
{var inst_15619 = (state_15621[(2)]);var state_15621__$1 = state_15621;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15621__$1,inst_15619);
} else
{if((state_val_15622 === (2)))
{var state_15621__$1 = state_15621;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15621__$1,(4),ch);
} else
{if((state_val_15622 === (11)))
{var inst_15611 = (state_15621[(2)]);var state_15621__$1 = state_15621;var statearr_15630_15649 = state_15621__$1;(statearr_15630_15649[(2)] = inst_15611);
(statearr_15630_15649[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15622 === (9)))
{var state_15621__$1 = state_15621;var statearr_15631_15650 = state_15621__$1;(statearr_15631_15650[(2)] = null);
(statearr_15631_15650[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15622 === (5)))
{var inst_15606 = cljs.core.async.close_BANG_.call(null,out);var state_15621__$1 = state_15621;var statearr_15632_15651 = state_15621__$1;(statearr_15632_15651[(2)] = inst_15606);
(statearr_15632_15651[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15622 === (10)))
{var inst_15614 = (state_15621[(2)]);var state_15621__$1 = (function (){var statearr_15633 = state_15621;(statearr_15633[(8)] = inst_15614);
return statearr_15633;
})();var statearr_15634_15652 = state_15621__$1;(statearr_15634_15652[(2)] = null);
(statearr_15634_15652[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15622 === (8)))
{var inst_15603 = (state_15621[(7)]);var state_15621__$1 = state_15621;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15621__$1,(11),out,inst_15603);
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
});})(c__12567__auto___15642,out))
;return ((function (switch__12502__auto__,c__12567__auto___15642,out){
return (function() {
var state_machine__12503__auto__ = null;
var state_machine__12503__auto____0 = (function (){var statearr_15638 = [null,null,null,null,null,null,null,null,null];(statearr_15638[(0)] = state_machine__12503__auto__);
(statearr_15638[(1)] = (1));
return statearr_15638;
});
var state_machine__12503__auto____1 = (function (state_15621){while(true){
var ret_value__12504__auto__ = (function (){try{while(true){
var result__12505__auto__ = switch__12502__auto__.call(null,state_15621);if(cljs.core.keyword_identical_QMARK_.call(null,result__12505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12505__auto__;
}
break;
}
}catch (e15639){if((e15639 instanceof Object))
{var ex__12506__auto__ = e15639;var statearr_15640_15653 = state_15621;(statearr_15640_15653[(5)] = ex__12506__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15621);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15639;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15654 = state_15621;
state_15621 = G__15654;
continue;
}
} else
{return ret_value__12504__auto__;
}
break;
}
});
state_machine__12503__auto__ = function(state_15621){
switch(arguments.length){
case 0:
return state_machine__12503__auto____0.call(this);
case 1:
return state_machine__12503__auto____1.call(this,state_15621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12503__auto____0;
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12503__auto____1;
return state_machine__12503__auto__;
})()
;})(switch__12502__auto__,c__12567__auto___15642,out))
})();var state__12569__auto__ = (function (){var statearr_15641 = f__12568__auto__.call(null);(statearr_15641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12567__auto___15642);
return statearr_15641;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12569__auto__);
});})(c__12567__auto___15642,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12567__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12567__auto__){
return (function (){var f__12568__auto__ = (function (){var switch__12502__auto__ = ((function (c__12567__auto__){
return (function (state_15806){var state_val_15807 = (state_15806[(1)]);if((state_val_15807 === (7)))
{var inst_15802 = (state_15806[(2)]);var state_15806__$1 = state_15806;var statearr_15808_15845 = state_15806__$1;(statearr_15808_15845[(2)] = inst_15802);
(statearr_15808_15845[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15807 === (20)))
{var inst_15777 = (state_15806[(7)]);var inst_15788 = (state_15806[(2)]);var inst_15789 = cljs.core.next.call(null,inst_15777);var inst_15763 = inst_15789;var inst_15764 = null;var inst_15765 = (0);var inst_15766 = (0);var state_15806__$1 = (function (){var statearr_15809 = state_15806;(statearr_15809[(8)] = inst_15765);
(statearr_15809[(9)] = inst_15766);
(statearr_15809[(10)] = inst_15788);
(statearr_15809[(11)] = inst_15763);
(statearr_15809[(12)] = inst_15764);
return statearr_15809;
})();var statearr_15810_15846 = state_15806__$1;(statearr_15810_15846[(2)] = null);
(statearr_15810_15846[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15807 === (1)))
{var state_15806__$1 = state_15806;var statearr_15811_15847 = state_15806__$1;(statearr_15811_15847[(2)] = null);
(statearr_15811_15847[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15807 === (4)))
{var inst_15752 = (state_15806[(13)]);var inst_15752__$1 = (state_15806[(2)]);var inst_15753 = (inst_15752__$1 == null);var state_15806__$1 = (function (){var statearr_15815 = state_15806;(statearr_15815[(13)] = inst_15752__$1);
return statearr_15815;
})();if(cljs.core.truth_(inst_15753))
{var statearr_15816_15848 = state_15806__$1;(statearr_15816_15848[(1)] = (5));
} else
{var statearr_15817_15849 = state_15806__$1;(statearr_15817_15849[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15807 === (15)))
{var state_15806__$1 = state_15806;var statearr_15818_15850 = state_15806__$1;(statearr_15818_15850[(2)] = null);
(statearr_15818_15850[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15807 === (13)))
{var inst_15765 = (state_15806[(8)]);var inst_15766 = (state_15806[(9)]);var inst_15763 = (state_15806[(11)]);var inst_15764 = (state_15806[(12)]);var inst_15773 = (state_15806[(2)]);var inst_15774 = (inst_15766 + (1));var tmp15812 = inst_15765;var tmp15813 = inst_15763;var tmp15814 = inst_15764;var inst_15763__$1 = tmp15813;var inst_15764__$1 = tmp15814;var inst_15765__$1 = tmp15812;var inst_15766__$1 = inst_15774;var state_15806__$1 = (function (){var statearr_15819 = state_15806;(statearr_15819[(8)] = inst_15765__$1);
(statearr_15819[(9)] = inst_15766__$1);
(statearr_15819[(14)] = inst_15773);
(statearr_15819[(11)] = inst_15763__$1);
(statearr_15819[(12)] = inst_15764__$1);
return statearr_15819;
})();var statearr_15820_15851 = state_15806__$1;(statearr_15820_15851[(2)] = null);
(statearr_15820_15851[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15807 === (6)))
{var inst_15752 = (state_15806[(13)]);var inst_15757 = f.call(null,inst_15752);var inst_15762 = cljs.core.seq.call(null,inst_15757);var inst_15763 = inst_15762;var inst_15764 = null;var inst_15765 = (0);var inst_15766 = (0);var state_15806__$1 = (function (){var statearr_15821 = state_15806;(statearr_15821[(8)] = inst_15765);
(statearr_15821[(9)] = inst_15766);
(statearr_15821[(11)] = inst_15763);
(statearr_15821[(12)] = inst_15764);
return statearr_15821;
})();var statearr_15822_15852 = state_15806__$1;(statearr_15822_15852[(2)] = null);
(statearr_15822_15852[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15807 === (17)))
{var inst_15777 = (state_15806[(7)]);var inst_15781 = cljs.core.chunk_first.call(null,inst_15777);var inst_15782 = cljs.core.chunk_rest.call(null,inst_15777);var inst_15783 = cljs.core.count.call(null,inst_15781);var inst_15763 = inst_15782;var inst_15764 = inst_15781;var inst_15765 = inst_15783;var inst_15766 = (0);var state_15806__$1 = (function (){var statearr_15823 = state_15806;(statearr_15823[(8)] = inst_15765);
(statearr_15823[(9)] = inst_15766);
(statearr_15823[(11)] = inst_15763);
(statearr_15823[(12)] = inst_15764);
return statearr_15823;
})();var statearr_15824_15853 = state_15806__$1;(statearr_15824_15853[(2)] = null);
(statearr_15824_15853[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15807 === (3)))
{var inst_15804 = (state_15806[(2)]);var state_15806__$1 = state_15806;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15806__$1,inst_15804);
} else
{if((state_val_15807 === (12)))
{var inst_15797 = (state_15806[(2)]);var state_15806__$1 = state_15806;var statearr_15825_15854 = state_15806__$1;(statearr_15825_15854[(2)] = inst_15797);
(statearr_15825_15854[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15807 === (2)))
{var state_15806__$1 = state_15806;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15806__$1,(4),in$);
} else
{if((state_val_15807 === (19)))
{var inst_15792 = (state_15806[(2)]);var state_15806__$1 = state_15806;var statearr_15826_15855 = state_15806__$1;(statearr_15826_15855[(2)] = inst_15792);
(statearr_15826_15855[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15807 === (11)))
{var inst_15777 = (state_15806[(7)]);var inst_15763 = (state_15806[(11)]);var inst_15777__$1 = cljs.core.seq.call(null,inst_15763);var state_15806__$1 = (function (){var statearr_15827 = state_15806;(statearr_15827[(7)] = inst_15777__$1);
return statearr_15827;
})();if(inst_15777__$1)
{var statearr_15828_15856 = state_15806__$1;(statearr_15828_15856[(1)] = (14));
} else
{var statearr_15829_15857 = state_15806__$1;(statearr_15829_15857[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15807 === (9)))
{var inst_15799 = (state_15806[(2)]);var state_15806__$1 = (function (){var statearr_15830 = state_15806;(statearr_15830[(15)] = inst_15799);
return statearr_15830;
})();var statearr_15831_15858 = state_15806__$1;(statearr_15831_15858[(2)] = null);
(statearr_15831_15858[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15807 === (5)))
{var inst_15755 = cljs.core.async.close_BANG_.call(null,out);var state_15806__$1 = state_15806;var statearr_15832_15859 = state_15806__$1;(statearr_15832_15859[(2)] = inst_15755);
(statearr_15832_15859[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15807 === (14)))
{var inst_15777 = (state_15806[(7)]);var inst_15779 = cljs.core.chunked_seq_QMARK_.call(null,inst_15777);var state_15806__$1 = state_15806;if(inst_15779)
{var statearr_15833_15860 = state_15806__$1;(statearr_15833_15860[(1)] = (17));
} else
{var statearr_15834_15861 = state_15806__$1;(statearr_15834_15861[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15807 === (16)))
{var inst_15795 = (state_15806[(2)]);var state_15806__$1 = state_15806;var statearr_15835_15862 = state_15806__$1;(statearr_15835_15862[(2)] = inst_15795);
(statearr_15835_15862[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15807 === (10)))
{var inst_15766 = (state_15806[(9)]);var inst_15764 = (state_15806[(12)]);var inst_15771 = cljs.core._nth.call(null,inst_15764,inst_15766);var state_15806__$1 = state_15806;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15806__$1,(13),out,inst_15771);
} else
{if((state_val_15807 === (18)))
{var inst_15777 = (state_15806[(7)]);var inst_15786 = cljs.core.first.call(null,inst_15777);var state_15806__$1 = state_15806;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15806__$1,(20),out,inst_15786);
} else
{if((state_val_15807 === (8)))
{var inst_15765 = (state_15806[(8)]);var inst_15766 = (state_15806[(9)]);var inst_15768 = (inst_15766 < inst_15765);var inst_15769 = inst_15768;var state_15806__$1 = state_15806;if(cljs.core.truth_(inst_15769))
{var statearr_15836_15863 = state_15806__$1;(statearr_15836_15863[(1)] = (10));
} else
{var statearr_15837_15864 = state_15806__$1;(statearr_15837_15864[(1)] = (11));
}
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
}
}
}
}
});})(c__12567__auto__))
;return ((function (switch__12502__auto__,c__12567__auto__){
return (function() {
var state_machine__12503__auto__ = null;
var state_machine__12503__auto____0 = (function (){var statearr_15841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15841[(0)] = state_machine__12503__auto__);
(statearr_15841[(1)] = (1));
return statearr_15841;
});
var state_machine__12503__auto____1 = (function (state_15806){while(true){
var ret_value__12504__auto__ = (function (){try{while(true){
var result__12505__auto__ = switch__12502__auto__.call(null,state_15806);if(cljs.core.keyword_identical_QMARK_.call(null,result__12505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12505__auto__;
}
break;
}
}catch (e15842){if((e15842 instanceof Object))
{var ex__12506__auto__ = e15842;var statearr_15843_15865 = state_15806;(statearr_15843_15865[(5)] = ex__12506__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15806);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15842;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15866 = state_15806;
state_15806 = G__15866;
continue;
}
} else
{return ret_value__12504__auto__;
}
break;
}
});
state_machine__12503__auto__ = function(state_15806){
switch(arguments.length){
case 0:
return state_machine__12503__auto____0.call(this);
case 1:
return state_machine__12503__auto____1.call(this,state_15806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12503__auto____0;
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12503__auto____1;
return state_machine__12503__auto__;
})()
;})(switch__12502__auto__,c__12567__auto__))
})();var state__12569__auto__ = (function (){var statearr_15844 = f__12568__auto__.call(null);(statearr_15844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12567__auto__);
return statearr_15844;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12569__auto__);
});})(c__12567__auto__))
);
return c__12567__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__12567__auto___15947 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12567__auto___15947){
return (function (){var f__12568__auto__ = (function (){var switch__12502__auto__ = ((function (c__12567__auto___15947){
return (function (state_15926){var state_val_15927 = (state_15926[(1)]);if((state_val_15927 === (7)))
{var inst_15922 = (state_15926[(2)]);var state_15926__$1 = state_15926;var statearr_15928_15948 = state_15926__$1;(statearr_15928_15948[(2)] = inst_15922);
(statearr_15928_15948[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15927 === (1)))
{var state_15926__$1 = state_15926;var statearr_15929_15949 = state_15926__$1;(statearr_15929_15949[(2)] = null);
(statearr_15929_15949[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15927 === (4)))
{var inst_15909 = (state_15926[(7)]);var inst_15909__$1 = (state_15926[(2)]);var inst_15910 = (inst_15909__$1 == null);var state_15926__$1 = (function (){var statearr_15930 = state_15926;(statearr_15930[(7)] = inst_15909__$1);
return statearr_15930;
})();if(cljs.core.truth_(inst_15910))
{var statearr_15931_15950 = state_15926__$1;(statearr_15931_15950[(1)] = (5));
} else
{var statearr_15932_15951 = state_15926__$1;(statearr_15932_15951[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15927 === (6)))
{var inst_15909 = (state_15926[(7)]);var state_15926__$1 = state_15926;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15926__$1,(11),to,inst_15909);
} else
{if((state_val_15927 === (3)))
{var inst_15924 = (state_15926[(2)]);var state_15926__$1 = state_15926;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15926__$1,inst_15924);
} else
{if((state_val_15927 === (2)))
{var state_15926__$1 = state_15926;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15926__$1,(4),from);
} else
{if((state_val_15927 === (11)))
{var inst_15919 = (state_15926[(2)]);var state_15926__$1 = (function (){var statearr_15933 = state_15926;(statearr_15933[(8)] = inst_15919);
return statearr_15933;
})();var statearr_15934_15952 = state_15926__$1;(statearr_15934_15952[(2)] = null);
(statearr_15934_15952[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15927 === (9)))
{var state_15926__$1 = state_15926;var statearr_15935_15953 = state_15926__$1;(statearr_15935_15953[(2)] = null);
(statearr_15935_15953[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15927 === (5)))
{var state_15926__$1 = state_15926;if(cljs.core.truth_(close_QMARK_))
{var statearr_15936_15954 = state_15926__$1;(statearr_15936_15954[(1)] = (8));
} else
{var statearr_15937_15955 = state_15926__$1;(statearr_15937_15955[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15927 === (10)))
{var inst_15916 = (state_15926[(2)]);var state_15926__$1 = state_15926;var statearr_15938_15956 = state_15926__$1;(statearr_15938_15956[(2)] = inst_15916);
(statearr_15938_15956[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15927 === (8)))
{var inst_15913 = cljs.core.async.close_BANG_.call(null,to);var state_15926__$1 = state_15926;var statearr_15939_15957 = state_15926__$1;(statearr_15939_15957[(2)] = inst_15913);
(statearr_15939_15957[(1)] = (10));
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
});})(c__12567__auto___15947))
;return ((function (switch__12502__auto__,c__12567__auto___15947){
return (function() {
var state_machine__12503__auto__ = null;
var state_machine__12503__auto____0 = (function (){var statearr_15943 = [null,null,null,null,null,null,null,null,null];(statearr_15943[(0)] = state_machine__12503__auto__);
(statearr_15943[(1)] = (1));
return statearr_15943;
});
var state_machine__12503__auto____1 = (function (state_15926){while(true){
var ret_value__12504__auto__ = (function (){try{while(true){
var result__12505__auto__ = switch__12502__auto__.call(null,state_15926);if(cljs.core.keyword_identical_QMARK_.call(null,result__12505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12505__auto__;
}
break;
}
}catch (e15944){if((e15944 instanceof Object))
{var ex__12506__auto__ = e15944;var statearr_15945_15958 = state_15926;(statearr_15945_15958[(5)] = ex__12506__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15926);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15944;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15959 = state_15926;
state_15926 = G__15959;
continue;
}
} else
{return ret_value__12504__auto__;
}
break;
}
});
state_machine__12503__auto__ = function(state_15926){
switch(arguments.length){
case 0:
return state_machine__12503__auto____0.call(this);
case 1:
return state_machine__12503__auto____1.call(this,state_15926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12503__auto____0;
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12503__auto____1;
return state_machine__12503__auto__;
})()
;})(switch__12502__auto__,c__12567__auto___15947))
})();var state__12569__auto__ = (function (){var statearr_15946 = f__12568__auto__.call(null);(statearr_15946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12567__auto___15947);
return statearr_15946;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12569__auto__);
});})(c__12567__auto___15947))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12567__auto___16046 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12567__auto___16046,tc,fc){
return (function (){var f__12568__auto__ = (function (){var switch__12502__auto__ = ((function (c__12567__auto___16046,tc,fc){
return (function (state_16024){var state_val_16025 = (state_16024[(1)]);if((state_val_16025 === (7)))
{var inst_16020 = (state_16024[(2)]);var state_16024__$1 = state_16024;var statearr_16026_16047 = state_16024__$1;(statearr_16026_16047[(2)] = inst_16020);
(statearr_16026_16047[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16025 === (1)))
{var state_16024__$1 = state_16024;var statearr_16027_16048 = state_16024__$1;(statearr_16027_16048[(2)] = null);
(statearr_16027_16048[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16025 === (4)))
{var inst_16005 = (state_16024[(7)]);var inst_16005__$1 = (state_16024[(2)]);var inst_16006 = (inst_16005__$1 == null);var state_16024__$1 = (function (){var statearr_16028 = state_16024;(statearr_16028[(7)] = inst_16005__$1);
return statearr_16028;
})();if(cljs.core.truth_(inst_16006))
{var statearr_16029_16049 = state_16024__$1;(statearr_16029_16049[(1)] = (5));
} else
{var statearr_16030_16050 = state_16024__$1;(statearr_16030_16050[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16025 === (6)))
{var inst_16005 = (state_16024[(7)]);var inst_16011 = p.call(null,inst_16005);var state_16024__$1 = state_16024;if(cljs.core.truth_(inst_16011))
{var statearr_16031_16051 = state_16024__$1;(statearr_16031_16051[(1)] = (9));
} else
{var statearr_16032_16052 = state_16024__$1;(statearr_16032_16052[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16025 === (3)))
{var inst_16022 = (state_16024[(2)]);var state_16024__$1 = state_16024;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16024__$1,inst_16022);
} else
{if((state_val_16025 === (2)))
{var state_16024__$1 = state_16024;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16024__$1,(4),ch);
} else
{if((state_val_16025 === (11)))
{var inst_16005 = (state_16024[(7)]);var inst_16015 = (state_16024[(2)]);var state_16024__$1 = state_16024;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16024__$1,(8),inst_16015,inst_16005);
} else
{if((state_val_16025 === (9)))
{var state_16024__$1 = state_16024;var statearr_16033_16053 = state_16024__$1;(statearr_16033_16053[(2)] = tc);
(statearr_16033_16053[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16025 === (5)))
{var inst_16008 = cljs.core.async.close_BANG_.call(null,tc);var inst_16009 = cljs.core.async.close_BANG_.call(null,fc);var state_16024__$1 = (function (){var statearr_16034 = state_16024;(statearr_16034[(8)] = inst_16008);
return statearr_16034;
})();var statearr_16035_16054 = state_16024__$1;(statearr_16035_16054[(2)] = inst_16009);
(statearr_16035_16054[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16025 === (10)))
{var state_16024__$1 = state_16024;var statearr_16036_16055 = state_16024__$1;(statearr_16036_16055[(2)] = fc);
(statearr_16036_16055[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16025 === (8)))
{var inst_16017 = (state_16024[(2)]);var state_16024__$1 = (function (){var statearr_16037 = state_16024;(statearr_16037[(9)] = inst_16017);
return statearr_16037;
})();var statearr_16038_16056 = state_16024__$1;(statearr_16038_16056[(2)] = null);
(statearr_16038_16056[(1)] = (2));
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
});})(c__12567__auto___16046,tc,fc))
;return ((function (switch__12502__auto__,c__12567__auto___16046,tc,fc){
return (function() {
var state_machine__12503__auto__ = null;
var state_machine__12503__auto____0 = (function (){var statearr_16042 = [null,null,null,null,null,null,null,null,null,null];(statearr_16042[(0)] = state_machine__12503__auto__);
(statearr_16042[(1)] = (1));
return statearr_16042;
});
var state_machine__12503__auto____1 = (function (state_16024){while(true){
var ret_value__12504__auto__ = (function (){try{while(true){
var result__12505__auto__ = switch__12502__auto__.call(null,state_16024);if(cljs.core.keyword_identical_QMARK_.call(null,result__12505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12505__auto__;
}
break;
}
}catch (e16043){if((e16043 instanceof Object))
{var ex__12506__auto__ = e16043;var statearr_16044_16057 = state_16024;(statearr_16044_16057[(5)] = ex__12506__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16024);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16043;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16058 = state_16024;
state_16024 = G__16058;
continue;
}
} else
{return ret_value__12504__auto__;
}
break;
}
});
state_machine__12503__auto__ = function(state_16024){
switch(arguments.length){
case 0:
return state_machine__12503__auto____0.call(this);
case 1:
return state_machine__12503__auto____1.call(this,state_16024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12503__auto____0;
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12503__auto____1;
return state_machine__12503__auto__;
})()
;})(switch__12502__auto__,c__12567__auto___16046,tc,fc))
})();var state__12569__auto__ = (function (){var statearr_16045 = f__12568__auto__.call(null);(statearr_16045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12567__auto___16046);
return statearr_16045;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12569__auto__);
});})(c__12567__auto___16046,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12567__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12567__auto__){
return (function (){var f__12568__auto__ = (function (){var switch__12502__auto__ = ((function (c__12567__auto__){
return (function (state_16105){var state_val_16106 = (state_16105[(1)]);if((state_val_16106 === (7)))
{var inst_16101 = (state_16105[(2)]);var state_16105__$1 = state_16105;var statearr_16107_16123 = state_16105__$1;(statearr_16107_16123[(2)] = inst_16101);
(statearr_16107_16123[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16106 === (6)))
{var inst_16091 = (state_16105[(7)]);var inst_16094 = (state_16105[(8)]);var inst_16098 = f.call(null,inst_16091,inst_16094);var inst_16091__$1 = inst_16098;var state_16105__$1 = (function (){var statearr_16108 = state_16105;(statearr_16108[(7)] = inst_16091__$1);
return statearr_16108;
})();var statearr_16109_16124 = state_16105__$1;(statearr_16109_16124[(2)] = null);
(statearr_16109_16124[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16106 === (5)))
{var inst_16091 = (state_16105[(7)]);var state_16105__$1 = state_16105;var statearr_16110_16125 = state_16105__$1;(statearr_16110_16125[(2)] = inst_16091);
(statearr_16110_16125[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16106 === (4)))
{var inst_16094 = (state_16105[(8)]);var inst_16094__$1 = (state_16105[(2)]);var inst_16095 = (inst_16094__$1 == null);var state_16105__$1 = (function (){var statearr_16111 = state_16105;(statearr_16111[(8)] = inst_16094__$1);
return statearr_16111;
})();if(cljs.core.truth_(inst_16095))
{var statearr_16112_16126 = state_16105__$1;(statearr_16112_16126[(1)] = (5));
} else
{var statearr_16113_16127 = state_16105__$1;(statearr_16113_16127[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16106 === (3)))
{var inst_16103 = (state_16105[(2)]);var state_16105__$1 = state_16105;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16105__$1,inst_16103);
} else
{if((state_val_16106 === (2)))
{var state_16105__$1 = state_16105;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16105__$1,(4),ch);
} else
{if((state_val_16106 === (1)))
{var inst_16091 = init;var state_16105__$1 = (function (){var statearr_16114 = state_16105;(statearr_16114[(7)] = inst_16091);
return statearr_16114;
})();var statearr_16115_16128 = state_16105__$1;(statearr_16115_16128[(2)] = null);
(statearr_16115_16128[(1)] = (2));
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
});})(c__12567__auto__))
;return ((function (switch__12502__auto__,c__12567__auto__){
return (function() {
var state_machine__12503__auto__ = null;
var state_machine__12503__auto____0 = (function (){var statearr_16119 = [null,null,null,null,null,null,null,null,null];(statearr_16119[(0)] = state_machine__12503__auto__);
(statearr_16119[(1)] = (1));
return statearr_16119;
});
var state_machine__12503__auto____1 = (function (state_16105){while(true){
var ret_value__12504__auto__ = (function (){try{while(true){
var result__12505__auto__ = switch__12502__auto__.call(null,state_16105);if(cljs.core.keyword_identical_QMARK_.call(null,result__12505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12505__auto__;
}
break;
}
}catch (e16120){if((e16120 instanceof Object))
{var ex__12506__auto__ = e16120;var statearr_16121_16129 = state_16105;(statearr_16121_16129[(5)] = ex__12506__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16105);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16120;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16130 = state_16105;
state_16105 = G__16130;
continue;
}
} else
{return ret_value__12504__auto__;
}
break;
}
});
state_machine__12503__auto__ = function(state_16105){
switch(arguments.length){
case 0:
return state_machine__12503__auto____0.call(this);
case 1:
return state_machine__12503__auto____1.call(this,state_16105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12503__auto____0;
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12503__auto____1;
return state_machine__12503__auto__;
})()
;})(switch__12502__auto__,c__12567__auto__))
})();var state__12569__auto__ = (function (){var statearr_16122 = f__12568__auto__.call(null);(statearr_16122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12567__auto__);
return statearr_16122;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12569__auto__);
});})(c__12567__auto__))
);
return c__12567__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12567__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12567__auto__){
return (function (){var f__12568__auto__ = (function (){var switch__12502__auto__ = ((function (c__12567__auto__){
return (function (state_16192){var state_val_16193 = (state_16192[(1)]);if((state_val_16193 === (7)))
{var inst_16173 = (state_16192[(7)]);var inst_16178 = (state_16192[(2)]);var inst_16179 = cljs.core.next.call(null,inst_16173);var inst_16173__$1 = inst_16179;var state_16192__$1 = (function (){var statearr_16194 = state_16192;(statearr_16194[(7)] = inst_16173__$1);
(statearr_16194[(8)] = inst_16178);
return statearr_16194;
})();var statearr_16195_16213 = state_16192__$1;(statearr_16195_16213[(2)] = null);
(statearr_16195_16213[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16193 === (1)))
{var inst_16172 = cljs.core.seq.call(null,coll);var inst_16173 = inst_16172;var state_16192__$1 = (function (){var statearr_16196 = state_16192;(statearr_16196[(7)] = inst_16173);
return statearr_16196;
})();var statearr_16197_16214 = state_16192__$1;(statearr_16197_16214[(2)] = null);
(statearr_16197_16214[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16193 === (4)))
{var inst_16173 = (state_16192[(7)]);var inst_16176 = cljs.core.first.call(null,inst_16173);var state_16192__$1 = state_16192;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16192__$1,(7),ch,inst_16176);
} else
{if((state_val_16193 === (6)))
{var inst_16188 = (state_16192[(2)]);var state_16192__$1 = state_16192;var statearr_16198_16215 = state_16192__$1;(statearr_16198_16215[(2)] = inst_16188);
(statearr_16198_16215[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16193 === (3)))
{var inst_16190 = (state_16192[(2)]);var state_16192__$1 = state_16192;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16192__$1,inst_16190);
} else
{if((state_val_16193 === (2)))
{var inst_16173 = (state_16192[(7)]);var state_16192__$1 = state_16192;if(cljs.core.truth_(inst_16173))
{var statearr_16199_16216 = state_16192__$1;(statearr_16199_16216[(1)] = (4));
} else
{var statearr_16200_16217 = state_16192__$1;(statearr_16200_16217[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16193 === (9)))
{var state_16192__$1 = state_16192;var statearr_16201_16218 = state_16192__$1;(statearr_16201_16218[(2)] = null);
(statearr_16201_16218[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16193 === (5)))
{var state_16192__$1 = state_16192;if(cljs.core.truth_(close_QMARK_))
{var statearr_16202_16219 = state_16192__$1;(statearr_16202_16219[(1)] = (8));
} else
{var statearr_16203_16220 = state_16192__$1;(statearr_16203_16220[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16193 === (10)))
{var inst_16186 = (state_16192[(2)]);var state_16192__$1 = state_16192;var statearr_16204_16221 = state_16192__$1;(statearr_16204_16221[(2)] = inst_16186);
(statearr_16204_16221[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16193 === (8)))
{var inst_16183 = cljs.core.async.close_BANG_.call(null,ch);var state_16192__$1 = state_16192;var statearr_16205_16222 = state_16192__$1;(statearr_16205_16222[(2)] = inst_16183);
(statearr_16205_16222[(1)] = (10));
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
});})(c__12567__auto__))
;return ((function (switch__12502__auto__,c__12567__auto__){
return (function() {
var state_machine__12503__auto__ = null;
var state_machine__12503__auto____0 = (function (){var statearr_16209 = [null,null,null,null,null,null,null,null,null];(statearr_16209[(0)] = state_machine__12503__auto__);
(statearr_16209[(1)] = (1));
return statearr_16209;
});
var state_machine__12503__auto____1 = (function (state_16192){while(true){
var ret_value__12504__auto__ = (function (){try{while(true){
var result__12505__auto__ = switch__12502__auto__.call(null,state_16192);if(cljs.core.keyword_identical_QMARK_.call(null,result__12505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12505__auto__;
}
break;
}
}catch (e16210){if((e16210 instanceof Object))
{var ex__12506__auto__ = e16210;var statearr_16211_16223 = state_16192;(statearr_16211_16223[(5)] = ex__12506__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16192);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16210;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16224 = state_16192;
state_16192 = G__16224;
continue;
}
} else
{return ret_value__12504__auto__;
}
break;
}
});
state_machine__12503__auto__ = function(state_16192){
switch(arguments.length){
case 0:
return state_machine__12503__auto____0.call(this);
case 1:
return state_machine__12503__auto____1.call(this,state_16192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12503__auto____0;
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12503__auto____1;
return state_machine__12503__auto__;
})()
;})(switch__12502__auto__,c__12567__auto__))
})();var state__12569__auto__ = (function (){var statearr_16212 = f__12568__auto__.call(null);(statearr_16212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12567__auto__);
return statearr_16212;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12569__auto__);
});})(c__12567__auto__))
);
return c__12567__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj16226 = {};return obj16226;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7858__auto__ = _;if(and__7858__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7858__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8497__auto__ = (((_ == null))?null:_);return (function (){var or__7870__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16228 = {};return obj16228;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7858__auto__ = m;if(and__7858__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7858__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8497__auto__ = (((m == null))?null:m);return (function (){var or__7870__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7858__auto__ = m;if(and__7858__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7858__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8497__auto__ = (((m == null))?null:m);return (function (){var or__7870__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7858__auto__ = m;if(and__7858__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7858__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8497__auto__ = (((m == null))?null:m);return (function (){var or__7870__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16452 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16452 = (function (cs,ch,mult,meta16453){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16453 = meta16453;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16452.cljs$lang$type = true;
cljs.core.async.t16452.cljs$lang$ctorStr = "cljs.core.async/t16452";
cljs.core.async.t16452.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8437__auto__,writer__8438__auto__,opt__8439__auto__){return cljs.core._write.call(null,writer__8438__auto__,"cljs.core.async/t16452");
});})(cs))
;
cljs.core.async.t16452.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16452.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16452.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16452.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16452.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16452.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16452.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16454){var self__ = this;
var _16454__$1 = this;return self__.meta16453;
});})(cs))
;
cljs.core.async.t16452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16454,meta16453__$1){var self__ = this;
var _16454__$1 = this;return (new cljs.core.async.t16452(self__.cs,self__.ch,self__.mult,meta16453__$1));
});})(cs))
;
cljs.core.async.__GT_t16452 = ((function (cs){
return (function __GT_t16452(cs__$1,ch__$1,mult__$1,meta16453){return (new cljs.core.async.t16452(cs__$1,ch__$1,mult__$1,meta16453));
});})(cs))
;
}
return (new cljs.core.async.t16452(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12567__auto___16675 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12567__auto___16675,cs,m,dchan,dctr,done){
return (function (){var f__12568__auto__ = (function (){var switch__12502__auto__ = ((function (c__12567__auto___16675,cs,m,dchan,dctr,done){
return (function (state_16589){var state_val_16590 = (state_16589[(1)]);if((state_val_16590 === (7)))
{var inst_16585 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16591_16676 = state_16589__$1;(statearr_16591_16676[(2)] = inst_16585);
(statearr_16591_16676[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (20)))
{var inst_16486 = (state_16589[(7)]);var inst_16496 = cljs.core.first.call(null,inst_16486);var inst_16497 = cljs.core.nth.call(null,inst_16496,(0),null);var inst_16498 = cljs.core.nth.call(null,inst_16496,(1),null);var state_16589__$1 = (function (){var statearr_16592 = state_16589;(statearr_16592[(8)] = inst_16497);
return statearr_16592;
})();if(cljs.core.truth_(inst_16498))
{var statearr_16593_16677 = state_16589__$1;(statearr_16593_16677[(1)] = (22));
} else
{var statearr_16594_16678 = state_16589__$1;(statearr_16594_16678[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (27)))
{var inst_16528 = (state_16589[(9)]);var inst_16526 = (state_16589[(10)]);var inst_16533 = cljs.core._nth.call(null,inst_16526,inst_16528);var state_16589__$1 = (function (){var statearr_16595 = state_16589;(statearr_16595[(11)] = inst_16533);
return statearr_16595;
})();var statearr_16596_16679 = state_16589__$1;(statearr_16596_16679[(2)] = null);
(statearr_16596_16679[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (1)))
{var state_16589__$1 = state_16589;var statearr_16597_16680 = state_16589__$1;(statearr_16597_16680[(2)] = null);
(statearr_16597_16680[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (24)))
{var inst_16486 = (state_16589[(7)]);var inst_16503 = (state_16589[(2)]);var inst_16504 = cljs.core.next.call(null,inst_16486);var inst_16466 = inst_16504;var inst_16467 = null;var inst_16468 = (0);var inst_16469 = (0);var state_16589__$1 = (function (){var statearr_16598 = state_16589;(statearr_16598[(12)] = inst_16469);
(statearr_16598[(13)] = inst_16466);
(statearr_16598[(14)] = inst_16467);
(statearr_16598[(15)] = inst_16503);
(statearr_16598[(16)] = inst_16468);
return statearr_16598;
})();var statearr_16599_16681 = state_16589__$1;(statearr_16599_16681[(2)] = null);
(statearr_16599_16681[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (39)))
{var inst_16546 = (state_16589[(17)]);var inst_16564 = (state_16589[(2)]);var inst_16565 = cljs.core.next.call(null,inst_16546);var inst_16525 = inst_16565;var inst_16526 = null;var inst_16527 = (0);var inst_16528 = (0);var state_16589__$1 = (function (){var statearr_16603 = state_16589;(statearr_16603[(18)] = inst_16564);
(statearr_16603[(9)] = inst_16528);
(statearr_16603[(19)] = inst_16527);
(statearr_16603[(10)] = inst_16526);
(statearr_16603[(20)] = inst_16525);
return statearr_16603;
})();var statearr_16604_16682 = state_16589__$1;(statearr_16604_16682[(2)] = null);
(statearr_16604_16682[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (4)))
{var inst_16457 = (state_16589[(21)]);var inst_16457__$1 = (state_16589[(2)]);var inst_16458 = (inst_16457__$1 == null);var state_16589__$1 = (function (){var statearr_16605 = state_16589;(statearr_16605[(21)] = inst_16457__$1);
return statearr_16605;
})();if(cljs.core.truth_(inst_16458))
{var statearr_16606_16683 = state_16589__$1;(statearr_16606_16683[(1)] = (5));
} else
{var statearr_16607_16684 = state_16589__$1;(statearr_16607_16684[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (15)))
{var inst_16469 = (state_16589[(12)]);var inst_16466 = (state_16589[(13)]);var inst_16467 = (state_16589[(14)]);var inst_16468 = (state_16589[(16)]);var inst_16482 = (state_16589[(2)]);var inst_16483 = (inst_16469 + (1));var tmp16600 = inst_16466;var tmp16601 = inst_16467;var tmp16602 = inst_16468;var inst_16466__$1 = tmp16600;var inst_16467__$1 = tmp16601;var inst_16468__$1 = tmp16602;var inst_16469__$1 = inst_16483;var state_16589__$1 = (function (){var statearr_16608 = state_16589;(statearr_16608[(22)] = inst_16482);
(statearr_16608[(12)] = inst_16469__$1);
(statearr_16608[(13)] = inst_16466__$1);
(statearr_16608[(14)] = inst_16467__$1);
(statearr_16608[(16)] = inst_16468__$1);
return statearr_16608;
})();var statearr_16609_16685 = state_16589__$1;(statearr_16609_16685[(2)] = null);
(statearr_16609_16685[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (21)))
{var inst_16507 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16610_16686 = state_16589__$1;(statearr_16610_16686[(2)] = inst_16507);
(statearr_16610_16686[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (31)))
{var inst_16533 = (state_16589[(11)]);var inst_16534 = (state_16589[(2)]);var inst_16535 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16536 = cljs.core.async.untap_STAR_.call(null,m,inst_16533);var state_16589__$1 = (function (){var statearr_16611 = state_16589;(statearr_16611[(23)] = inst_16535);
(statearr_16611[(24)] = inst_16534);
return statearr_16611;
})();var statearr_16612_16687 = state_16589__$1;(statearr_16612_16687[(2)] = inst_16536);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16589__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (32)))
{var inst_16533 = (state_16589[(11)]);var inst_16457 = (state_16589[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16589,(31),Object,null,(30));var inst_16540 = cljs.core.async.put_BANG_.call(null,inst_16533,inst_16457,done);var state_16589__$1 = state_16589;var statearr_16613_16688 = state_16589__$1;(statearr_16613_16688[(2)] = inst_16540);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16589__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (40)))
{var inst_16555 = (state_16589[(25)]);var inst_16556 = (state_16589[(2)]);var inst_16557 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16558 = cljs.core.async.untap_STAR_.call(null,m,inst_16555);var state_16589__$1 = (function (){var statearr_16614 = state_16589;(statearr_16614[(26)] = inst_16557);
(statearr_16614[(27)] = inst_16556);
return statearr_16614;
})();var statearr_16615_16689 = state_16589__$1;(statearr_16615_16689[(2)] = inst_16558);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16589__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (33)))
{var inst_16546 = (state_16589[(17)]);var inst_16548 = cljs.core.chunked_seq_QMARK_.call(null,inst_16546);var state_16589__$1 = state_16589;if(inst_16548)
{var statearr_16616_16690 = state_16589__$1;(statearr_16616_16690[(1)] = (36));
} else
{var statearr_16617_16691 = state_16589__$1;(statearr_16617_16691[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (13)))
{var inst_16476 = (state_16589[(28)]);var inst_16479 = cljs.core.async.close_BANG_.call(null,inst_16476);var state_16589__$1 = state_16589;var statearr_16618_16692 = state_16589__$1;(statearr_16618_16692[(2)] = inst_16479);
(statearr_16618_16692[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (22)))
{var inst_16497 = (state_16589[(8)]);var inst_16500 = cljs.core.async.close_BANG_.call(null,inst_16497);var state_16589__$1 = state_16589;var statearr_16619_16693 = state_16589__$1;(statearr_16619_16693[(2)] = inst_16500);
(statearr_16619_16693[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (36)))
{var inst_16546 = (state_16589[(17)]);var inst_16550 = cljs.core.chunk_first.call(null,inst_16546);var inst_16551 = cljs.core.chunk_rest.call(null,inst_16546);var inst_16552 = cljs.core.count.call(null,inst_16550);var inst_16525 = inst_16551;var inst_16526 = inst_16550;var inst_16527 = inst_16552;var inst_16528 = (0);var state_16589__$1 = (function (){var statearr_16620 = state_16589;(statearr_16620[(9)] = inst_16528);
(statearr_16620[(19)] = inst_16527);
(statearr_16620[(10)] = inst_16526);
(statearr_16620[(20)] = inst_16525);
return statearr_16620;
})();var statearr_16621_16694 = state_16589__$1;(statearr_16621_16694[(2)] = null);
(statearr_16621_16694[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (41)))
{var inst_16555 = (state_16589[(25)]);var inst_16457 = (state_16589[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16589,(40),Object,null,(39));var inst_16562 = cljs.core.async.put_BANG_.call(null,inst_16555,inst_16457,done);var state_16589__$1 = state_16589;var statearr_16622_16695 = state_16589__$1;(statearr_16622_16695[(2)] = inst_16562);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16589__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (43)))
{var state_16589__$1 = state_16589;var statearr_16623_16696 = state_16589__$1;(statearr_16623_16696[(2)] = null);
(statearr_16623_16696[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (29)))
{var inst_16573 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16624_16697 = state_16589__$1;(statearr_16624_16697[(2)] = inst_16573);
(statearr_16624_16697[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (44)))
{var inst_16582 = (state_16589[(2)]);var state_16589__$1 = (function (){var statearr_16625 = state_16589;(statearr_16625[(29)] = inst_16582);
return statearr_16625;
})();var statearr_16626_16698 = state_16589__$1;(statearr_16626_16698[(2)] = null);
(statearr_16626_16698[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (6)))
{var inst_16517 = (state_16589[(30)]);var inst_16516 = cljs.core.deref.call(null,cs);var inst_16517__$1 = cljs.core.keys.call(null,inst_16516);var inst_16518 = cljs.core.count.call(null,inst_16517__$1);var inst_16519 = cljs.core.reset_BANG_.call(null,dctr,inst_16518);var inst_16524 = cljs.core.seq.call(null,inst_16517__$1);var inst_16525 = inst_16524;var inst_16526 = null;var inst_16527 = (0);var inst_16528 = (0);var state_16589__$1 = (function (){var statearr_16627 = state_16589;(statearr_16627[(31)] = inst_16519);
(statearr_16627[(30)] = inst_16517__$1);
(statearr_16627[(9)] = inst_16528);
(statearr_16627[(19)] = inst_16527);
(statearr_16627[(10)] = inst_16526);
(statearr_16627[(20)] = inst_16525);
return statearr_16627;
})();var statearr_16628_16699 = state_16589__$1;(statearr_16628_16699[(2)] = null);
(statearr_16628_16699[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (28)))
{var inst_16546 = (state_16589[(17)]);var inst_16525 = (state_16589[(20)]);var inst_16546__$1 = cljs.core.seq.call(null,inst_16525);var state_16589__$1 = (function (){var statearr_16629 = state_16589;(statearr_16629[(17)] = inst_16546__$1);
return statearr_16629;
})();if(inst_16546__$1)
{var statearr_16630_16700 = state_16589__$1;(statearr_16630_16700[(1)] = (33));
} else
{var statearr_16631_16701 = state_16589__$1;(statearr_16631_16701[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (25)))
{var inst_16528 = (state_16589[(9)]);var inst_16527 = (state_16589[(19)]);var inst_16530 = (inst_16528 < inst_16527);var inst_16531 = inst_16530;var state_16589__$1 = state_16589;if(cljs.core.truth_(inst_16531))
{var statearr_16632_16702 = state_16589__$1;(statearr_16632_16702[(1)] = (27));
} else
{var statearr_16633_16703 = state_16589__$1;(statearr_16633_16703[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (34)))
{var state_16589__$1 = state_16589;var statearr_16634_16704 = state_16589__$1;(statearr_16634_16704[(2)] = null);
(statearr_16634_16704[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (17)))
{var state_16589__$1 = state_16589;var statearr_16635_16705 = state_16589__$1;(statearr_16635_16705[(2)] = null);
(statearr_16635_16705[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (3)))
{var inst_16587 = (state_16589[(2)]);var state_16589__$1 = state_16589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16589__$1,inst_16587);
} else
{if((state_val_16590 === (12)))
{var inst_16512 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16636_16706 = state_16589__$1;(statearr_16636_16706[(2)] = inst_16512);
(statearr_16636_16706[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (2)))
{var state_16589__$1 = state_16589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16589__$1,(4),ch);
} else
{if((state_val_16590 === (23)))
{var state_16589__$1 = state_16589;var statearr_16637_16707 = state_16589__$1;(statearr_16637_16707[(2)] = null);
(statearr_16637_16707[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (35)))
{var inst_16571 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16638_16708 = state_16589__$1;(statearr_16638_16708[(2)] = inst_16571);
(statearr_16638_16708[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (19)))
{var inst_16486 = (state_16589[(7)]);var inst_16490 = cljs.core.chunk_first.call(null,inst_16486);var inst_16491 = cljs.core.chunk_rest.call(null,inst_16486);var inst_16492 = cljs.core.count.call(null,inst_16490);var inst_16466 = inst_16491;var inst_16467 = inst_16490;var inst_16468 = inst_16492;var inst_16469 = (0);var state_16589__$1 = (function (){var statearr_16639 = state_16589;(statearr_16639[(12)] = inst_16469);
(statearr_16639[(13)] = inst_16466);
(statearr_16639[(14)] = inst_16467);
(statearr_16639[(16)] = inst_16468);
return statearr_16639;
})();var statearr_16640_16709 = state_16589__$1;(statearr_16640_16709[(2)] = null);
(statearr_16640_16709[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (11)))
{var inst_16466 = (state_16589[(13)]);var inst_16486 = (state_16589[(7)]);var inst_16486__$1 = cljs.core.seq.call(null,inst_16466);var state_16589__$1 = (function (){var statearr_16641 = state_16589;(statearr_16641[(7)] = inst_16486__$1);
return statearr_16641;
})();if(inst_16486__$1)
{var statearr_16642_16710 = state_16589__$1;(statearr_16642_16710[(1)] = (16));
} else
{var statearr_16643_16711 = state_16589__$1;(statearr_16643_16711[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (9)))
{var inst_16514 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16644_16712 = state_16589__$1;(statearr_16644_16712[(2)] = inst_16514);
(statearr_16644_16712[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (5)))
{var inst_16464 = cljs.core.deref.call(null,cs);var inst_16465 = cljs.core.seq.call(null,inst_16464);var inst_16466 = inst_16465;var inst_16467 = null;var inst_16468 = (0);var inst_16469 = (0);var state_16589__$1 = (function (){var statearr_16645 = state_16589;(statearr_16645[(12)] = inst_16469);
(statearr_16645[(13)] = inst_16466);
(statearr_16645[(14)] = inst_16467);
(statearr_16645[(16)] = inst_16468);
return statearr_16645;
})();var statearr_16646_16713 = state_16589__$1;(statearr_16646_16713[(2)] = null);
(statearr_16646_16713[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (14)))
{var state_16589__$1 = state_16589;var statearr_16647_16714 = state_16589__$1;(statearr_16647_16714[(2)] = null);
(statearr_16647_16714[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (45)))
{var inst_16579 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16648_16715 = state_16589__$1;(statearr_16648_16715[(2)] = inst_16579);
(statearr_16648_16715[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (26)))
{var inst_16517 = (state_16589[(30)]);var inst_16575 = (state_16589[(2)]);var inst_16576 = cljs.core.seq.call(null,inst_16517);var state_16589__$1 = (function (){var statearr_16649 = state_16589;(statearr_16649[(32)] = inst_16575);
return statearr_16649;
})();if(inst_16576)
{var statearr_16650_16716 = state_16589__$1;(statearr_16650_16716[(1)] = (42));
} else
{var statearr_16651_16717 = state_16589__$1;(statearr_16651_16717[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (16)))
{var inst_16486 = (state_16589[(7)]);var inst_16488 = cljs.core.chunked_seq_QMARK_.call(null,inst_16486);var state_16589__$1 = state_16589;if(inst_16488)
{var statearr_16655_16718 = state_16589__$1;(statearr_16655_16718[(1)] = (19));
} else
{var statearr_16656_16719 = state_16589__$1;(statearr_16656_16719[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (38)))
{var inst_16568 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16657_16720 = state_16589__$1;(statearr_16657_16720[(2)] = inst_16568);
(statearr_16657_16720[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (30)))
{var inst_16528 = (state_16589[(9)]);var inst_16527 = (state_16589[(19)]);var inst_16526 = (state_16589[(10)]);var inst_16525 = (state_16589[(20)]);var inst_16542 = (state_16589[(2)]);var inst_16543 = (inst_16528 + (1));var tmp16652 = inst_16527;var tmp16653 = inst_16526;var tmp16654 = inst_16525;var inst_16525__$1 = tmp16654;var inst_16526__$1 = tmp16653;var inst_16527__$1 = tmp16652;var inst_16528__$1 = inst_16543;var state_16589__$1 = (function (){var statearr_16658 = state_16589;(statearr_16658[(9)] = inst_16528__$1);
(statearr_16658[(19)] = inst_16527__$1);
(statearr_16658[(33)] = inst_16542);
(statearr_16658[(10)] = inst_16526__$1);
(statearr_16658[(20)] = inst_16525__$1);
return statearr_16658;
})();var statearr_16659_16721 = state_16589__$1;(statearr_16659_16721[(2)] = null);
(statearr_16659_16721[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (10)))
{var inst_16469 = (state_16589[(12)]);var inst_16467 = (state_16589[(14)]);var inst_16475 = cljs.core._nth.call(null,inst_16467,inst_16469);var inst_16476 = cljs.core.nth.call(null,inst_16475,(0),null);var inst_16477 = cljs.core.nth.call(null,inst_16475,(1),null);var state_16589__$1 = (function (){var statearr_16660 = state_16589;(statearr_16660[(28)] = inst_16476);
return statearr_16660;
})();if(cljs.core.truth_(inst_16477))
{var statearr_16661_16722 = state_16589__$1;(statearr_16661_16722[(1)] = (13));
} else
{var statearr_16662_16723 = state_16589__$1;(statearr_16662_16723[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (18)))
{var inst_16510 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16663_16724 = state_16589__$1;(statearr_16663_16724[(2)] = inst_16510);
(statearr_16663_16724[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (42)))
{var state_16589__$1 = state_16589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16589__$1,(45),dchan);
} else
{if((state_val_16590 === (37)))
{var inst_16546 = (state_16589[(17)]);var inst_16555 = cljs.core.first.call(null,inst_16546);var state_16589__$1 = (function (){var statearr_16664 = state_16589;(statearr_16664[(25)] = inst_16555);
return statearr_16664;
})();var statearr_16665_16725 = state_16589__$1;(statearr_16665_16725[(2)] = null);
(statearr_16665_16725[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (8)))
{var inst_16469 = (state_16589[(12)]);var inst_16468 = (state_16589[(16)]);var inst_16471 = (inst_16469 < inst_16468);var inst_16472 = inst_16471;var state_16589__$1 = state_16589;if(cljs.core.truth_(inst_16472))
{var statearr_16666_16726 = state_16589__$1;(statearr_16666_16726[(1)] = (10));
} else
{var statearr_16667_16727 = state_16589__$1;(statearr_16667_16727[(1)] = (11));
}
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
});})(c__12567__auto___16675,cs,m,dchan,dctr,done))
;return ((function (switch__12502__auto__,c__12567__auto___16675,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12503__auto__ = null;
var state_machine__12503__auto____0 = (function (){var statearr_16671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16671[(0)] = state_machine__12503__auto__);
(statearr_16671[(1)] = (1));
return statearr_16671;
});
var state_machine__12503__auto____1 = (function (state_16589){while(true){
var ret_value__12504__auto__ = (function (){try{while(true){
var result__12505__auto__ = switch__12502__auto__.call(null,state_16589);if(cljs.core.keyword_identical_QMARK_.call(null,result__12505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12505__auto__;
}
break;
}
}catch (e16672){if((e16672 instanceof Object))
{var ex__12506__auto__ = e16672;var statearr_16673_16728 = state_16589;(statearr_16673_16728[(5)] = ex__12506__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16589);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16672;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16729 = state_16589;
state_16589 = G__16729;
continue;
}
} else
{return ret_value__12504__auto__;
}
break;
}
});
state_machine__12503__auto__ = function(state_16589){
switch(arguments.length){
case 0:
return state_machine__12503__auto____0.call(this);
case 1:
return state_machine__12503__auto____1.call(this,state_16589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12503__auto____0;
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12503__auto____1;
return state_machine__12503__auto__;
})()
;})(switch__12502__auto__,c__12567__auto___16675,cs,m,dchan,dctr,done))
})();var state__12569__auto__ = (function (){var statearr_16674 = f__12568__auto__.call(null);(statearr_16674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12567__auto___16675);
return statearr_16674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12569__auto__);
});})(c__12567__auto___16675,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj16731 = {};return obj16731;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7858__auto__ = m;if(and__7858__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7858__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8497__auto__ = (((m == null))?null:m);return (function (){var or__7870__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7858__auto__ = m;if(and__7858__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7858__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8497__auto__ = (((m == null))?null:m);return (function (){var or__7870__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7858__auto__ = m;if(and__7858__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7858__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8497__auto__ = (((m == null))?null:m);return (function (){var or__7870__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7858__auto__ = m;if(and__7858__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7858__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8497__auto__ = (((m == null))?null:m);return (function (){var or__7870__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7858__auto__ = m;if(and__7858__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7858__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8497__auto__ = (((m == null))?null:m);return (function (){var or__7870__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t16841 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16841 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16842){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16842 = meta16842;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16841.cljs$lang$type = true;
cljs.core.async.t16841.cljs$lang$ctorStr = "cljs.core.async/t16841";
cljs.core.async.t16841.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8437__auto__,writer__8438__auto__,opt__8439__auto__){return cljs.core._write.call(null,writer__8438__auto__,"cljs.core.async/t16841");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16841.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16841.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16841.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16841.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16841.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16841.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16841.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16841.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16841.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16843){var self__ = this;
var _16843__$1 = this;return self__.meta16842;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16843,meta16842__$1){var self__ = this;
var _16843__$1 = this;return (new cljs.core.async.t16841(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16842__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16841 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16841(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16842){return (new cljs.core.async.t16841(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16842));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16841(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__12567__auto___16950 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12567__auto___16950,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__12568__auto__ = (function (){var switch__12502__auto__ = ((function (c__12567__auto___16950,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16908){var state_val_16909 = (state_16908[(1)]);if((state_val_16909 === (7)))
{var inst_16857 = (state_16908[(7)]);var inst_16862 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16857);var state_16908__$1 = state_16908;var statearr_16910_16951 = state_16908__$1;(statearr_16910_16951[(2)] = inst_16862);
(statearr_16910_16951[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16909 === (20)))
{var inst_16872 = (state_16908[(8)]);var state_16908__$1 = state_16908;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16908__$1,(23),out,inst_16872);
} else
{if((state_val_16909 === (1)))
{var inst_16847 = (state_16908[(9)]);var inst_16847__$1 = calc_state.call(null);var inst_16848 = cljs.core.seq_QMARK_.call(null,inst_16847__$1);var state_16908__$1 = (function (){var statearr_16911 = state_16908;(statearr_16911[(9)] = inst_16847__$1);
return statearr_16911;
})();if(inst_16848)
{var statearr_16912_16952 = state_16908__$1;(statearr_16912_16952[(1)] = (2));
} else
{var statearr_16913_16953 = state_16908__$1;(statearr_16913_16953[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16909 === (4)))
{var inst_16847 = (state_16908[(9)]);var inst_16853 = (state_16908[(2)]);var inst_16854 = cljs.core.get.call(null,inst_16853,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16855 = cljs.core.get.call(null,inst_16853,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16856 = cljs.core.get.call(null,inst_16853,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_16857 = inst_16847;var state_16908__$1 = (function (){var statearr_16914 = state_16908;(statearr_16914[(10)] = inst_16855);
(statearr_16914[(11)] = inst_16854);
(statearr_16914[(12)] = inst_16856);
(statearr_16914[(7)] = inst_16857);
return statearr_16914;
})();var statearr_16915_16954 = state_16908__$1;(statearr_16915_16954[(2)] = null);
(statearr_16915_16954[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16909 === (15)))
{var state_16908__$1 = state_16908;var statearr_16916_16955 = state_16908__$1;(statearr_16916_16955[(2)] = null);
(statearr_16916_16955[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16909 === (21)))
{var state_16908__$1 = state_16908;var statearr_16917_16956 = state_16908__$1;(statearr_16917_16956[(2)] = null);
(statearr_16917_16956[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16909 === (13)))
{var inst_16904 = (state_16908[(2)]);var state_16908__$1 = state_16908;var statearr_16918_16957 = state_16908__$1;(statearr_16918_16957[(2)] = inst_16904);
(statearr_16918_16957[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16909 === (22)))
{var inst_16865 = (state_16908[(13)]);var inst_16901 = (state_16908[(2)]);var inst_16857 = inst_16865;var state_16908__$1 = (function (){var statearr_16919 = state_16908;(statearr_16919[(14)] = inst_16901);
(statearr_16919[(7)] = inst_16857);
return statearr_16919;
})();var statearr_16920_16958 = state_16908__$1;(statearr_16920_16958[(2)] = null);
(statearr_16920_16958[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16909 === (6)))
{var inst_16906 = (state_16908[(2)]);var state_16908__$1 = state_16908;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16908__$1,inst_16906);
} else
{if((state_val_16909 === (17)))
{var inst_16887 = (state_16908[(15)]);var state_16908__$1 = state_16908;var statearr_16921_16959 = state_16908__$1;(statearr_16921_16959[(2)] = inst_16887);
(statearr_16921_16959[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16909 === (3)))
{var inst_16847 = (state_16908[(9)]);var state_16908__$1 = state_16908;var statearr_16922_16960 = state_16908__$1;(statearr_16922_16960[(2)] = inst_16847);
(statearr_16922_16960[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16909 === (12)))
{var inst_16873 = (state_16908[(16)]);var inst_16887 = (state_16908[(15)]);var inst_16868 = (state_16908[(17)]);var inst_16887__$1 = inst_16868.call(null,inst_16873);var state_16908__$1 = (function (){var statearr_16923 = state_16908;(statearr_16923[(15)] = inst_16887__$1);
return statearr_16923;
})();if(cljs.core.truth_(inst_16887__$1))
{var statearr_16924_16961 = state_16908__$1;(statearr_16924_16961[(1)] = (17));
} else
{var statearr_16925_16962 = state_16908__$1;(statearr_16925_16962[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16909 === (2)))
{var inst_16847 = (state_16908[(9)]);var inst_16850 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16847);var state_16908__$1 = state_16908;var statearr_16926_16963 = state_16908__$1;(statearr_16926_16963[(2)] = inst_16850);
(statearr_16926_16963[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16909 === (23)))
{var inst_16898 = (state_16908[(2)]);var state_16908__$1 = state_16908;var statearr_16927_16964 = state_16908__$1;(statearr_16927_16964[(2)] = inst_16898);
(statearr_16927_16964[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16909 === (19)))
{var inst_16895 = (state_16908[(2)]);var state_16908__$1 = state_16908;if(cljs.core.truth_(inst_16895))
{var statearr_16928_16965 = state_16908__$1;(statearr_16928_16965[(1)] = (20));
} else
{var statearr_16929_16966 = state_16908__$1;(statearr_16929_16966[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16909 === (11)))
{var inst_16872 = (state_16908[(8)]);var inst_16878 = (inst_16872 == null);var state_16908__$1 = state_16908;if(cljs.core.truth_(inst_16878))
{var statearr_16930_16967 = state_16908__$1;(statearr_16930_16967[(1)] = (14));
} else
{var statearr_16931_16968 = state_16908__$1;(statearr_16931_16968[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16909 === (9)))
{var inst_16865 = (state_16908[(13)]);var inst_16865__$1 = (state_16908[(2)]);var inst_16866 = cljs.core.get.call(null,inst_16865__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16867 = cljs.core.get.call(null,inst_16865__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16868 = cljs.core.get.call(null,inst_16865__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_16908__$1 = (function (){var statearr_16932 = state_16908;(statearr_16932[(13)] = inst_16865__$1);
(statearr_16932[(17)] = inst_16868);
(statearr_16932[(18)] = inst_16867);
return statearr_16932;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16908__$1,(10),inst_16866);
} else
{if((state_val_16909 === (5)))
{var inst_16857 = (state_16908[(7)]);var inst_16860 = cljs.core.seq_QMARK_.call(null,inst_16857);var state_16908__$1 = state_16908;if(inst_16860)
{var statearr_16933_16969 = state_16908__$1;(statearr_16933_16969[(1)] = (7));
} else
{var statearr_16934_16970 = state_16908__$1;(statearr_16934_16970[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16909 === (14)))
{var inst_16873 = (state_16908[(16)]);var inst_16880 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16873);var state_16908__$1 = state_16908;var statearr_16935_16971 = state_16908__$1;(statearr_16935_16971[(2)] = inst_16880);
(statearr_16935_16971[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16909 === (16)))
{var inst_16883 = (state_16908[(2)]);var inst_16884 = calc_state.call(null);var inst_16857 = inst_16884;var state_16908__$1 = (function (){var statearr_16936 = state_16908;(statearr_16936[(19)] = inst_16883);
(statearr_16936[(7)] = inst_16857);
return statearr_16936;
})();var statearr_16937_16972 = state_16908__$1;(statearr_16937_16972[(2)] = null);
(statearr_16937_16972[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16909 === (10)))
{var inst_16873 = (state_16908[(16)]);var inst_16872 = (state_16908[(8)]);var inst_16871 = (state_16908[(2)]);var inst_16872__$1 = cljs.core.nth.call(null,inst_16871,(0),null);var inst_16873__$1 = cljs.core.nth.call(null,inst_16871,(1),null);var inst_16874 = (inst_16872__$1 == null);var inst_16875 = cljs.core._EQ_.call(null,inst_16873__$1,change);var inst_16876 = (inst_16874) || (inst_16875);var state_16908__$1 = (function (){var statearr_16938 = state_16908;(statearr_16938[(16)] = inst_16873__$1);
(statearr_16938[(8)] = inst_16872__$1);
return statearr_16938;
})();if(cljs.core.truth_(inst_16876))
{var statearr_16939_16973 = state_16908__$1;(statearr_16939_16973[(1)] = (11));
} else
{var statearr_16940_16974 = state_16908__$1;(statearr_16940_16974[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16909 === (18)))
{var inst_16873 = (state_16908[(16)]);var inst_16868 = (state_16908[(17)]);var inst_16867 = (state_16908[(18)]);var inst_16890 = cljs.core.empty_QMARK_.call(null,inst_16868);var inst_16891 = inst_16867.call(null,inst_16873);var inst_16892 = cljs.core.not.call(null,inst_16891);var inst_16893 = (inst_16890) && (inst_16892);var state_16908__$1 = state_16908;var statearr_16941_16975 = state_16908__$1;(statearr_16941_16975[(2)] = inst_16893);
(statearr_16941_16975[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16909 === (8)))
{var inst_16857 = (state_16908[(7)]);var state_16908__$1 = state_16908;var statearr_16942_16976 = state_16908__$1;(statearr_16942_16976[(2)] = inst_16857);
(statearr_16942_16976[(1)] = (9));
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
}
}
}
}
}
}
}
});})(c__12567__auto___16950,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__12502__auto__,c__12567__auto___16950,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12503__auto__ = null;
var state_machine__12503__auto____0 = (function (){var statearr_16946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16946[(0)] = state_machine__12503__auto__);
(statearr_16946[(1)] = (1));
return statearr_16946;
});
var state_machine__12503__auto____1 = (function (state_16908){while(true){
var ret_value__12504__auto__ = (function (){try{while(true){
var result__12505__auto__ = switch__12502__auto__.call(null,state_16908);if(cljs.core.keyword_identical_QMARK_.call(null,result__12505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12505__auto__;
}
break;
}
}catch (e16947){if((e16947 instanceof Object))
{var ex__12506__auto__ = e16947;var statearr_16948_16977 = state_16908;(statearr_16948_16977[(5)] = ex__12506__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16908);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16947;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16978 = state_16908;
state_16908 = G__16978;
continue;
}
} else
{return ret_value__12504__auto__;
}
break;
}
});
state_machine__12503__auto__ = function(state_16908){
switch(arguments.length){
case 0:
return state_machine__12503__auto____0.call(this);
case 1:
return state_machine__12503__auto____1.call(this,state_16908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12503__auto____0;
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12503__auto____1;
return state_machine__12503__auto__;
})()
;})(switch__12502__auto__,c__12567__auto___16950,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__12569__auto__ = (function (){var statearr_16949 = f__12568__auto__.call(null);(statearr_16949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12567__auto___16950);
return statearr_16949;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12569__auto__);
});})(c__12567__auto___16950,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj16980 = {};return obj16980;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7858__auto__ = p;if(and__7858__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7858__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8497__auto__ = (((p == null))?null:p);return (function (){var or__7870__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7858__auto__ = p;if(and__7858__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7858__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8497__auto__ = (((p == null))?null:p);return (function (){var or__7870__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7858__auto__ = p;if(and__7858__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7858__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8497__auto__ = (((p == null))?null:p);return (function (){var or__7870__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7858__auto__ = p;if(and__7858__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7858__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8497__auto__ = (((p == null))?null:p);return (function (){var or__7870__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7870__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7870__auto__,mults){
return (function (p1__16981_SHARP_){if(cljs.core.truth_(p1__16981_SHARP_.call(null,topic)))
{return p1__16981_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16981_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7870__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17106 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17106 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17107){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17107 = meta17107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17106.cljs$lang$type = true;
cljs.core.async.t17106.cljs$lang$ctorStr = "cljs.core.async/t17106";
cljs.core.async.t17106.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8437__auto__,writer__8438__auto__,opt__8439__auto__){return cljs.core._write.call(null,writer__8438__auto__,"cljs.core.async/t17106");
});})(mults,ensure_mult))
;
cljs.core.async.t17106.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17106.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17106.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17106.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17106.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17106.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17106.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17106.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17108){var self__ = this;
var _17108__$1 = this;return self__.meta17107;
});})(mults,ensure_mult))
;
cljs.core.async.t17106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17108,meta17107__$1){var self__ = this;
var _17108__$1 = this;return (new cljs.core.async.t17106(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17107__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17106 = ((function (mults,ensure_mult){
return (function __GT_t17106(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17107){return (new cljs.core.async.t17106(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17107));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17106(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12567__auto___17230 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12567__auto___17230,mults,ensure_mult,p){
return (function (){var f__12568__auto__ = (function (){var switch__12502__auto__ = ((function (c__12567__auto___17230,mults,ensure_mult,p){
return (function (state_17182){var state_val_17183 = (state_17182[(1)]);if((state_val_17183 === (7)))
{var inst_17178 = (state_17182[(2)]);var state_17182__$1 = state_17182;var statearr_17184_17231 = state_17182__$1;(statearr_17184_17231[(2)] = inst_17178);
(statearr_17184_17231[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (20)))
{var state_17182__$1 = state_17182;var statearr_17185_17232 = state_17182__$1;(statearr_17185_17232[(2)] = null);
(statearr_17185_17232[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (1)))
{var state_17182__$1 = state_17182;var statearr_17186_17233 = state_17182__$1;(statearr_17186_17233[(2)] = null);
(statearr_17186_17233[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (24)))
{var inst_17111 = (state_17182[(7)]);var inst_17161 = (state_17182[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17182,(23),Object,null,(22));var inst_17168 = cljs.core.async.muxch_STAR_.call(null,inst_17161);var state_17182__$1 = state_17182;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17182__$1,(25),inst_17168,inst_17111);
} else
{if((state_val_17183 === (4)))
{var inst_17111 = (state_17182[(7)]);var inst_17111__$1 = (state_17182[(2)]);var inst_17112 = (inst_17111__$1 == null);var state_17182__$1 = (function (){var statearr_17187 = state_17182;(statearr_17187[(7)] = inst_17111__$1);
return statearr_17187;
})();if(cljs.core.truth_(inst_17112))
{var statearr_17188_17234 = state_17182__$1;(statearr_17188_17234[(1)] = (5));
} else
{var statearr_17189_17235 = state_17182__$1;(statearr_17189_17235[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (15)))
{var inst_17153 = (state_17182[(2)]);var state_17182__$1 = state_17182;var statearr_17190_17236 = state_17182__$1;(statearr_17190_17236[(2)] = inst_17153);
(statearr_17190_17236[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (21)))
{var inst_17175 = (state_17182[(2)]);var state_17182__$1 = (function (){var statearr_17191 = state_17182;(statearr_17191[(9)] = inst_17175);
return statearr_17191;
})();var statearr_17192_17237 = state_17182__$1;(statearr_17192_17237[(2)] = null);
(statearr_17192_17237[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (13)))
{var inst_17135 = (state_17182[(10)]);var inst_17137 = cljs.core.chunked_seq_QMARK_.call(null,inst_17135);var state_17182__$1 = state_17182;if(inst_17137)
{var statearr_17193_17238 = state_17182__$1;(statearr_17193_17238[(1)] = (16));
} else
{var statearr_17194_17239 = state_17182__$1;(statearr_17194_17239[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (22)))
{var inst_17172 = (state_17182[(2)]);var state_17182__$1 = state_17182;var statearr_17195_17240 = state_17182__$1;(statearr_17195_17240[(2)] = inst_17172);
(statearr_17195_17240[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (6)))
{var inst_17111 = (state_17182[(7)]);var inst_17159 = (state_17182[(11)]);var inst_17161 = (state_17182[(8)]);var inst_17159__$1 = topic_fn.call(null,inst_17111);var inst_17160 = cljs.core.deref.call(null,mults);var inst_17161__$1 = cljs.core.get.call(null,inst_17160,inst_17159__$1);var state_17182__$1 = (function (){var statearr_17196 = state_17182;(statearr_17196[(11)] = inst_17159__$1);
(statearr_17196[(8)] = inst_17161__$1);
return statearr_17196;
})();if(cljs.core.truth_(inst_17161__$1))
{var statearr_17197_17241 = state_17182__$1;(statearr_17197_17241[(1)] = (19));
} else
{var statearr_17198_17242 = state_17182__$1;(statearr_17198_17242[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (25)))
{var inst_17170 = (state_17182[(2)]);var state_17182__$1 = state_17182;var statearr_17199_17243 = state_17182__$1;(statearr_17199_17243[(2)] = inst_17170);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17182__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (17)))
{var inst_17135 = (state_17182[(10)]);var inst_17144 = cljs.core.first.call(null,inst_17135);var inst_17145 = cljs.core.async.muxch_STAR_.call(null,inst_17144);var inst_17146 = cljs.core.async.close_BANG_.call(null,inst_17145);var inst_17147 = cljs.core.next.call(null,inst_17135);var inst_17121 = inst_17147;var inst_17122 = null;var inst_17123 = (0);var inst_17124 = (0);var state_17182__$1 = (function (){var statearr_17200 = state_17182;(statearr_17200[(12)] = inst_17124);
(statearr_17200[(13)] = inst_17146);
(statearr_17200[(14)] = inst_17122);
(statearr_17200[(15)] = inst_17123);
(statearr_17200[(16)] = inst_17121);
return statearr_17200;
})();var statearr_17201_17244 = state_17182__$1;(statearr_17201_17244[(2)] = null);
(statearr_17201_17244[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (3)))
{var inst_17180 = (state_17182[(2)]);var state_17182__$1 = state_17182;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17182__$1,inst_17180);
} else
{if((state_val_17183 === (12)))
{var inst_17155 = (state_17182[(2)]);var state_17182__$1 = state_17182;var statearr_17202_17245 = state_17182__$1;(statearr_17202_17245[(2)] = inst_17155);
(statearr_17202_17245[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (2)))
{var state_17182__$1 = state_17182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17182__$1,(4),ch);
} else
{if((state_val_17183 === (23)))
{var inst_17159 = (state_17182[(11)]);var inst_17163 = (state_17182[(2)]);var inst_17164 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17159);var state_17182__$1 = (function (){var statearr_17203 = state_17182;(statearr_17203[(17)] = inst_17163);
return statearr_17203;
})();var statearr_17204_17246 = state_17182__$1;(statearr_17204_17246[(2)] = inst_17164);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17182__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (19)))
{var state_17182__$1 = state_17182;var statearr_17205_17247 = state_17182__$1;(statearr_17205_17247[(2)] = null);
(statearr_17205_17247[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (11)))
{var inst_17135 = (state_17182[(10)]);var inst_17121 = (state_17182[(16)]);var inst_17135__$1 = cljs.core.seq.call(null,inst_17121);var state_17182__$1 = (function (){var statearr_17206 = state_17182;(statearr_17206[(10)] = inst_17135__$1);
return statearr_17206;
})();if(inst_17135__$1)
{var statearr_17207_17248 = state_17182__$1;(statearr_17207_17248[(1)] = (13));
} else
{var statearr_17208_17249 = state_17182__$1;(statearr_17208_17249[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (9)))
{var inst_17157 = (state_17182[(2)]);var state_17182__$1 = state_17182;var statearr_17209_17250 = state_17182__$1;(statearr_17209_17250[(2)] = inst_17157);
(statearr_17209_17250[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (5)))
{var inst_17118 = cljs.core.deref.call(null,mults);var inst_17119 = cljs.core.vals.call(null,inst_17118);var inst_17120 = cljs.core.seq.call(null,inst_17119);var inst_17121 = inst_17120;var inst_17122 = null;var inst_17123 = (0);var inst_17124 = (0);var state_17182__$1 = (function (){var statearr_17210 = state_17182;(statearr_17210[(12)] = inst_17124);
(statearr_17210[(14)] = inst_17122);
(statearr_17210[(15)] = inst_17123);
(statearr_17210[(16)] = inst_17121);
return statearr_17210;
})();var statearr_17211_17251 = state_17182__$1;(statearr_17211_17251[(2)] = null);
(statearr_17211_17251[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (14)))
{var state_17182__$1 = state_17182;var statearr_17215_17252 = state_17182__$1;(statearr_17215_17252[(2)] = null);
(statearr_17215_17252[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (16)))
{var inst_17135 = (state_17182[(10)]);var inst_17139 = cljs.core.chunk_first.call(null,inst_17135);var inst_17140 = cljs.core.chunk_rest.call(null,inst_17135);var inst_17141 = cljs.core.count.call(null,inst_17139);var inst_17121 = inst_17140;var inst_17122 = inst_17139;var inst_17123 = inst_17141;var inst_17124 = (0);var state_17182__$1 = (function (){var statearr_17216 = state_17182;(statearr_17216[(12)] = inst_17124);
(statearr_17216[(14)] = inst_17122);
(statearr_17216[(15)] = inst_17123);
(statearr_17216[(16)] = inst_17121);
return statearr_17216;
})();var statearr_17217_17253 = state_17182__$1;(statearr_17217_17253[(2)] = null);
(statearr_17217_17253[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (10)))
{var inst_17124 = (state_17182[(12)]);var inst_17122 = (state_17182[(14)]);var inst_17123 = (state_17182[(15)]);var inst_17121 = (state_17182[(16)]);var inst_17129 = cljs.core._nth.call(null,inst_17122,inst_17124);var inst_17130 = cljs.core.async.muxch_STAR_.call(null,inst_17129);var inst_17131 = cljs.core.async.close_BANG_.call(null,inst_17130);var inst_17132 = (inst_17124 + (1));var tmp17212 = inst_17122;var tmp17213 = inst_17123;var tmp17214 = inst_17121;var inst_17121__$1 = tmp17214;var inst_17122__$1 = tmp17212;var inst_17123__$1 = tmp17213;var inst_17124__$1 = inst_17132;var state_17182__$1 = (function (){var statearr_17218 = state_17182;(statearr_17218[(18)] = inst_17131);
(statearr_17218[(12)] = inst_17124__$1);
(statearr_17218[(14)] = inst_17122__$1);
(statearr_17218[(15)] = inst_17123__$1);
(statearr_17218[(16)] = inst_17121__$1);
return statearr_17218;
})();var statearr_17219_17254 = state_17182__$1;(statearr_17219_17254[(2)] = null);
(statearr_17219_17254[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (18)))
{var inst_17150 = (state_17182[(2)]);var state_17182__$1 = state_17182;var statearr_17220_17255 = state_17182__$1;(statearr_17220_17255[(2)] = inst_17150);
(statearr_17220_17255[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17183 === (8)))
{var inst_17124 = (state_17182[(12)]);var inst_17123 = (state_17182[(15)]);var inst_17126 = (inst_17124 < inst_17123);var inst_17127 = inst_17126;var state_17182__$1 = state_17182;if(cljs.core.truth_(inst_17127))
{var statearr_17221_17256 = state_17182__$1;(statearr_17221_17256[(1)] = (10));
} else
{var statearr_17222_17257 = state_17182__$1;(statearr_17222_17257[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
});})(c__12567__auto___17230,mults,ensure_mult,p))
;return ((function (switch__12502__auto__,c__12567__auto___17230,mults,ensure_mult,p){
return (function() {
var state_machine__12503__auto__ = null;
var state_machine__12503__auto____0 = (function (){var statearr_17226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17226[(0)] = state_machine__12503__auto__);
(statearr_17226[(1)] = (1));
return statearr_17226;
});
var state_machine__12503__auto____1 = (function (state_17182){while(true){
var ret_value__12504__auto__ = (function (){try{while(true){
var result__12505__auto__ = switch__12502__auto__.call(null,state_17182);if(cljs.core.keyword_identical_QMARK_.call(null,result__12505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12505__auto__;
}
break;
}
}catch (e17227){if((e17227 instanceof Object))
{var ex__12506__auto__ = e17227;var statearr_17228_17258 = state_17182;(statearr_17228_17258[(5)] = ex__12506__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17182);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17227;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17259 = state_17182;
state_17182 = G__17259;
continue;
}
} else
{return ret_value__12504__auto__;
}
break;
}
});
state_machine__12503__auto__ = function(state_17182){
switch(arguments.length){
case 0:
return state_machine__12503__auto____0.call(this);
case 1:
return state_machine__12503__auto____1.call(this,state_17182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12503__auto____0;
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12503__auto____1;
return state_machine__12503__auto__;
})()
;})(switch__12502__auto__,c__12567__auto___17230,mults,ensure_mult,p))
})();var state__12569__auto__ = (function (){var statearr_17229 = f__12568__auto__.call(null);(statearr_17229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12567__auto___17230);
return statearr_17229;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12569__auto__);
});})(c__12567__auto___17230,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__12567__auto___17396 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12567__auto___17396,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__12568__auto__ = (function (){var switch__12502__auto__ = ((function (c__12567__auto___17396,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17366){var state_val_17367 = (state_17366[(1)]);if((state_val_17367 === (7)))
{var state_17366__$1 = state_17366;var statearr_17368_17397 = state_17366__$1;(statearr_17368_17397[(2)] = null);
(statearr_17368_17397[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17367 === (1)))
{var state_17366__$1 = state_17366;var statearr_17369_17398 = state_17366__$1;(statearr_17369_17398[(2)] = null);
(statearr_17369_17398[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17367 === (4)))
{var inst_17330 = (state_17366[(7)]);var inst_17332 = (inst_17330 < cnt);var state_17366__$1 = state_17366;if(cljs.core.truth_(inst_17332))
{var statearr_17370_17399 = state_17366__$1;(statearr_17370_17399[(1)] = (6));
} else
{var statearr_17371_17400 = state_17366__$1;(statearr_17371_17400[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17367 === (15)))
{var inst_17362 = (state_17366[(2)]);var state_17366__$1 = state_17366;var statearr_17372_17401 = state_17366__$1;(statearr_17372_17401[(2)] = inst_17362);
(statearr_17372_17401[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17367 === (13)))
{var inst_17355 = cljs.core.async.close_BANG_.call(null,out);var state_17366__$1 = state_17366;var statearr_17373_17402 = state_17366__$1;(statearr_17373_17402[(2)] = inst_17355);
(statearr_17373_17402[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17367 === (6)))
{var state_17366__$1 = state_17366;var statearr_17374_17403 = state_17366__$1;(statearr_17374_17403[(2)] = null);
(statearr_17374_17403[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17367 === (3)))
{var inst_17364 = (state_17366[(2)]);var state_17366__$1 = state_17366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17366__$1,inst_17364);
} else
{if((state_val_17367 === (12)))
{var inst_17352 = (state_17366[(8)]);var inst_17352__$1 = (state_17366[(2)]);var inst_17353 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17352__$1);var state_17366__$1 = (function (){var statearr_17375 = state_17366;(statearr_17375[(8)] = inst_17352__$1);
return statearr_17375;
})();if(cljs.core.truth_(inst_17353))
{var statearr_17376_17404 = state_17366__$1;(statearr_17376_17404[(1)] = (13));
} else
{var statearr_17377_17405 = state_17366__$1;(statearr_17377_17405[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17367 === (2)))
{var inst_17329 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17330 = (0);var state_17366__$1 = (function (){var statearr_17378 = state_17366;(statearr_17378[(9)] = inst_17329);
(statearr_17378[(7)] = inst_17330);
return statearr_17378;
})();var statearr_17379_17406 = state_17366__$1;(statearr_17379_17406[(2)] = null);
(statearr_17379_17406[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17367 === (11)))
{var inst_17330 = (state_17366[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17366,(10),Object,null,(9));var inst_17339 = chs__$1.call(null,inst_17330);var inst_17340 = done.call(null,inst_17330);var inst_17341 = cljs.core.async.take_BANG_.call(null,inst_17339,inst_17340);var state_17366__$1 = state_17366;var statearr_17380_17407 = state_17366__$1;(statearr_17380_17407[(2)] = inst_17341);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17366__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17367 === (9)))
{var inst_17330 = (state_17366[(7)]);var inst_17343 = (state_17366[(2)]);var inst_17344 = (inst_17330 + (1));var inst_17330__$1 = inst_17344;var state_17366__$1 = (function (){var statearr_17381 = state_17366;(statearr_17381[(10)] = inst_17343);
(statearr_17381[(7)] = inst_17330__$1);
return statearr_17381;
})();var statearr_17382_17408 = state_17366__$1;(statearr_17382_17408[(2)] = null);
(statearr_17382_17408[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17367 === (5)))
{var inst_17350 = (state_17366[(2)]);var state_17366__$1 = (function (){var statearr_17383 = state_17366;(statearr_17383[(11)] = inst_17350);
return statearr_17383;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17366__$1,(12),dchan);
} else
{if((state_val_17367 === (14)))
{var inst_17352 = (state_17366[(8)]);var inst_17357 = cljs.core.apply.call(null,f,inst_17352);var state_17366__$1 = state_17366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17366__$1,(16),out,inst_17357);
} else
{if((state_val_17367 === (16)))
{var inst_17359 = (state_17366[(2)]);var state_17366__$1 = (function (){var statearr_17384 = state_17366;(statearr_17384[(12)] = inst_17359);
return statearr_17384;
})();var statearr_17385_17409 = state_17366__$1;(statearr_17385_17409[(2)] = null);
(statearr_17385_17409[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17367 === (10)))
{var inst_17334 = (state_17366[(2)]);var inst_17335 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17366__$1 = (function (){var statearr_17386 = state_17366;(statearr_17386[(13)] = inst_17334);
return statearr_17386;
})();var statearr_17387_17410 = state_17366__$1;(statearr_17387_17410[(2)] = inst_17335);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17366__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17367 === (8)))
{var inst_17348 = (state_17366[(2)]);var state_17366__$1 = state_17366;var statearr_17388_17411 = state_17366__$1;(statearr_17388_17411[(2)] = inst_17348);
(statearr_17388_17411[(1)] = (5));
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
});})(c__12567__auto___17396,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__12502__auto__,c__12567__auto___17396,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12503__auto__ = null;
var state_machine__12503__auto____0 = (function (){var statearr_17392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17392[(0)] = state_machine__12503__auto__);
(statearr_17392[(1)] = (1));
return statearr_17392;
});
var state_machine__12503__auto____1 = (function (state_17366){while(true){
var ret_value__12504__auto__ = (function (){try{while(true){
var result__12505__auto__ = switch__12502__auto__.call(null,state_17366);if(cljs.core.keyword_identical_QMARK_.call(null,result__12505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12505__auto__;
}
break;
}
}catch (e17393){if((e17393 instanceof Object))
{var ex__12506__auto__ = e17393;var statearr_17394_17412 = state_17366;(statearr_17394_17412[(5)] = ex__12506__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17366);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17413 = state_17366;
state_17366 = G__17413;
continue;
}
} else
{return ret_value__12504__auto__;
}
break;
}
});
state_machine__12503__auto__ = function(state_17366){
switch(arguments.length){
case 0:
return state_machine__12503__auto____0.call(this);
case 1:
return state_machine__12503__auto____1.call(this,state_17366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12503__auto____0;
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12503__auto____1;
return state_machine__12503__auto__;
})()
;})(switch__12502__auto__,c__12567__auto___17396,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__12569__auto__ = (function (){var statearr_17395 = f__12568__auto__.call(null);(statearr_17395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12567__auto___17396);
return statearr_17395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12569__auto__);
});})(c__12567__auto___17396,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12567__auto___17521 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12567__auto___17521,out){
return (function (){var f__12568__auto__ = (function (){var switch__12502__auto__ = ((function (c__12567__auto___17521,out){
return (function (state_17497){var state_val_17498 = (state_17497[(1)]);if((state_val_17498 === (7)))
{var inst_17477 = (state_17497[(7)]);var inst_17476 = (state_17497[(8)]);var inst_17476__$1 = (state_17497[(2)]);var inst_17477__$1 = cljs.core.nth.call(null,inst_17476__$1,(0),null);var inst_17478 = cljs.core.nth.call(null,inst_17476__$1,(1),null);var inst_17479 = (inst_17477__$1 == null);var state_17497__$1 = (function (){var statearr_17499 = state_17497;(statearr_17499[(9)] = inst_17478);
(statearr_17499[(7)] = inst_17477__$1);
(statearr_17499[(8)] = inst_17476__$1);
return statearr_17499;
})();if(cljs.core.truth_(inst_17479))
{var statearr_17500_17522 = state_17497__$1;(statearr_17500_17522[(1)] = (8));
} else
{var statearr_17501_17523 = state_17497__$1;(statearr_17501_17523[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17498 === (1)))
{var inst_17468 = cljs.core.vec.call(null,chs);var inst_17469 = inst_17468;var state_17497__$1 = (function (){var statearr_17502 = state_17497;(statearr_17502[(10)] = inst_17469);
return statearr_17502;
})();var statearr_17503_17524 = state_17497__$1;(statearr_17503_17524[(2)] = null);
(statearr_17503_17524[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17498 === (4)))
{var inst_17469 = (state_17497[(10)]);var state_17497__$1 = state_17497;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17497__$1,(7),inst_17469);
} else
{if((state_val_17498 === (6)))
{var inst_17493 = (state_17497[(2)]);var state_17497__$1 = state_17497;var statearr_17504_17525 = state_17497__$1;(statearr_17504_17525[(2)] = inst_17493);
(statearr_17504_17525[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17498 === (3)))
{var inst_17495 = (state_17497[(2)]);var state_17497__$1 = state_17497;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17497__$1,inst_17495);
} else
{if((state_val_17498 === (2)))
{var inst_17469 = (state_17497[(10)]);var inst_17471 = cljs.core.count.call(null,inst_17469);var inst_17472 = (inst_17471 > (0));var state_17497__$1 = state_17497;if(cljs.core.truth_(inst_17472))
{var statearr_17506_17526 = state_17497__$1;(statearr_17506_17526[(1)] = (4));
} else
{var statearr_17507_17527 = state_17497__$1;(statearr_17507_17527[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17498 === (11)))
{var inst_17469 = (state_17497[(10)]);var inst_17486 = (state_17497[(2)]);var tmp17505 = inst_17469;var inst_17469__$1 = tmp17505;var state_17497__$1 = (function (){var statearr_17508 = state_17497;(statearr_17508[(10)] = inst_17469__$1);
(statearr_17508[(11)] = inst_17486);
return statearr_17508;
})();var statearr_17509_17528 = state_17497__$1;(statearr_17509_17528[(2)] = null);
(statearr_17509_17528[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17498 === (9)))
{var inst_17477 = (state_17497[(7)]);var state_17497__$1 = state_17497;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17497__$1,(11),out,inst_17477);
} else
{if((state_val_17498 === (5)))
{var inst_17491 = cljs.core.async.close_BANG_.call(null,out);var state_17497__$1 = state_17497;var statearr_17510_17529 = state_17497__$1;(statearr_17510_17529[(2)] = inst_17491);
(statearr_17510_17529[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17498 === (10)))
{var inst_17489 = (state_17497[(2)]);var state_17497__$1 = state_17497;var statearr_17511_17530 = state_17497__$1;(statearr_17511_17530[(2)] = inst_17489);
(statearr_17511_17530[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17498 === (8)))
{var inst_17469 = (state_17497[(10)]);var inst_17478 = (state_17497[(9)]);var inst_17477 = (state_17497[(7)]);var inst_17476 = (state_17497[(8)]);var inst_17481 = (function (){var c = inst_17478;var v = inst_17477;var vec__17474 = inst_17476;var cs = inst_17469;return ((function (c,v,vec__17474,cs,inst_17469,inst_17478,inst_17477,inst_17476,state_val_17498,c__12567__auto___17521,out){
return (function (p1__17414_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17414_SHARP_);
});
;})(c,v,vec__17474,cs,inst_17469,inst_17478,inst_17477,inst_17476,state_val_17498,c__12567__auto___17521,out))
})();var inst_17482 = cljs.core.filterv.call(null,inst_17481,inst_17469);var inst_17469__$1 = inst_17482;var state_17497__$1 = (function (){var statearr_17512 = state_17497;(statearr_17512[(10)] = inst_17469__$1);
return statearr_17512;
})();var statearr_17513_17531 = state_17497__$1;(statearr_17513_17531[(2)] = null);
(statearr_17513_17531[(1)] = (2));
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
});})(c__12567__auto___17521,out))
;return ((function (switch__12502__auto__,c__12567__auto___17521,out){
return (function() {
var state_machine__12503__auto__ = null;
var state_machine__12503__auto____0 = (function (){var statearr_17517 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17517[(0)] = state_machine__12503__auto__);
(statearr_17517[(1)] = (1));
return statearr_17517;
});
var state_machine__12503__auto____1 = (function (state_17497){while(true){
var ret_value__12504__auto__ = (function (){try{while(true){
var result__12505__auto__ = switch__12502__auto__.call(null,state_17497);if(cljs.core.keyword_identical_QMARK_.call(null,result__12505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12505__auto__;
}
break;
}
}catch (e17518){if((e17518 instanceof Object))
{var ex__12506__auto__ = e17518;var statearr_17519_17532 = state_17497;(statearr_17519_17532[(5)] = ex__12506__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17497);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17533 = state_17497;
state_17497 = G__17533;
continue;
}
} else
{return ret_value__12504__auto__;
}
break;
}
});
state_machine__12503__auto__ = function(state_17497){
switch(arguments.length){
case 0:
return state_machine__12503__auto____0.call(this);
case 1:
return state_machine__12503__auto____1.call(this,state_17497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12503__auto____0;
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12503__auto____1;
return state_machine__12503__auto__;
})()
;})(switch__12502__auto__,c__12567__auto___17521,out))
})();var state__12569__auto__ = (function (){var statearr_17520 = f__12568__auto__.call(null);(statearr_17520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12567__auto___17521);
return statearr_17520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12569__auto__);
});})(c__12567__auto___17521,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12567__auto___17626 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12567__auto___17626,out){
return (function (){var f__12568__auto__ = (function (){var switch__12502__auto__ = ((function (c__12567__auto___17626,out){
return (function (state_17603){var state_val_17604 = (state_17603[(1)]);if((state_val_17604 === (7)))
{var inst_17585 = (state_17603[(7)]);var inst_17585__$1 = (state_17603[(2)]);var inst_17586 = (inst_17585__$1 == null);var inst_17587 = cljs.core.not.call(null,inst_17586);var state_17603__$1 = (function (){var statearr_17605 = state_17603;(statearr_17605[(7)] = inst_17585__$1);
return statearr_17605;
})();if(inst_17587)
{var statearr_17606_17627 = state_17603__$1;(statearr_17606_17627[(1)] = (8));
} else
{var statearr_17607_17628 = state_17603__$1;(statearr_17607_17628[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17604 === (1)))
{var inst_17580 = (0);var state_17603__$1 = (function (){var statearr_17608 = state_17603;(statearr_17608[(8)] = inst_17580);
return statearr_17608;
})();var statearr_17609_17629 = state_17603__$1;(statearr_17609_17629[(2)] = null);
(statearr_17609_17629[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17604 === (4)))
{var state_17603__$1 = state_17603;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17603__$1,(7),ch);
} else
{if((state_val_17604 === (6)))
{var inst_17598 = (state_17603[(2)]);var state_17603__$1 = state_17603;var statearr_17610_17630 = state_17603__$1;(statearr_17610_17630[(2)] = inst_17598);
(statearr_17610_17630[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17604 === (3)))
{var inst_17600 = (state_17603[(2)]);var inst_17601 = cljs.core.async.close_BANG_.call(null,out);var state_17603__$1 = (function (){var statearr_17611 = state_17603;(statearr_17611[(9)] = inst_17600);
return statearr_17611;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17603__$1,inst_17601);
} else
{if((state_val_17604 === (2)))
{var inst_17580 = (state_17603[(8)]);var inst_17582 = (inst_17580 < n);var state_17603__$1 = state_17603;if(cljs.core.truth_(inst_17582))
{var statearr_17612_17631 = state_17603__$1;(statearr_17612_17631[(1)] = (4));
} else
{var statearr_17613_17632 = state_17603__$1;(statearr_17613_17632[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17604 === (11)))
{var inst_17580 = (state_17603[(8)]);var inst_17590 = (state_17603[(2)]);var inst_17591 = (inst_17580 + (1));var inst_17580__$1 = inst_17591;var state_17603__$1 = (function (){var statearr_17614 = state_17603;(statearr_17614[(8)] = inst_17580__$1);
(statearr_17614[(10)] = inst_17590);
return statearr_17614;
})();var statearr_17615_17633 = state_17603__$1;(statearr_17615_17633[(2)] = null);
(statearr_17615_17633[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17604 === (9)))
{var state_17603__$1 = state_17603;var statearr_17616_17634 = state_17603__$1;(statearr_17616_17634[(2)] = null);
(statearr_17616_17634[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17604 === (5)))
{var state_17603__$1 = state_17603;var statearr_17617_17635 = state_17603__$1;(statearr_17617_17635[(2)] = null);
(statearr_17617_17635[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17604 === (10)))
{var inst_17595 = (state_17603[(2)]);var state_17603__$1 = state_17603;var statearr_17618_17636 = state_17603__$1;(statearr_17618_17636[(2)] = inst_17595);
(statearr_17618_17636[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17604 === (8)))
{var inst_17585 = (state_17603[(7)]);var state_17603__$1 = state_17603;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17603__$1,(11),out,inst_17585);
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
});})(c__12567__auto___17626,out))
;return ((function (switch__12502__auto__,c__12567__auto___17626,out){
return (function() {
var state_machine__12503__auto__ = null;
var state_machine__12503__auto____0 = (function (){var statearr_17622 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17622[(0)] = state_machine__12503__auto__);
(statearr_17622[(1)] = (1));
return statearr_17622;
});
var state_machine__12503__auto____1 = (function (state_17603){while(true){
var ret_value__12504__auto__ = (function (){try{while(true){
var result__12505__auto__ = switch__12502__auto__.call(null,state_17603);if(cljs.core.keyword_identical_QMARK_.call(null,result__12505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12505__auto__;
}
break;
}
}catch (e17623){if((e17623 instanceof Object))
{var ex__12506__auto__ = e17623;var statearr_17624_17637 = state_17603;(statearr_17624_17637[(5)] = ex__12506__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17603);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17623;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17638 = state_17603;
state_17603 = G__17638;
continue;
}
} else
{return ret_value__12504__auto__;
}
break;
}
});
state_machine__12503__auto__ = function(state_17603){
switch(arguments.length){
case 0:
return state_machine__12503__auto____0.call(this);
case 1:
return state_machine__12503__auto____1.call(this,state_17603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12503__auto____0;
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12503__auto____1;
return state_machine__12503__auto__;
})()
;})(switch__12502__auto__,c__12567__auto___17626,out))
})();var state__12569__auto__ = (function (){var statearr_17625 = f__12568__auto__.call(null);(statearr_17625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12567__auto___17626);
return statearr_17625;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12569__auto__);
});})(c__12567__auto___17626,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12567__auto___17735 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12567__auto___17735,out){
return (function (){var f__12568__auto__ = (function (){var switch__12502__auto__ = ((function (c__12567__auto___17735,out){
return (function (state_17710){var state_val_17711 = (state_17710[(1)]);if((state_val_17711 === (7)))
{var inst_17705 = (state_17710[(2)]);var state_17710__$1 = state_17710;var statearr_17712_17736 = state_17710__$1;(statearr_17712_17736[(2)] = inst_17705);
(statearr_17712_17736[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17711 === (1)))
{var inst_17687 = null;var state_17710__$1 = (function (){var statearr_17713 = state_17710;(statearr_17713[(7)] = inst_17687);
return statearr_17713;
})();var statearr_17714_17737 = state_17710__$1;(statearr_17714_17737[(2)] = null);
(statearr_17714_17737[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17711 === (4)))
{var inst_17690 = (state_17710[(8)]);var inst_17690__$1 = (state_17710[(2)]);var inst_17691 = (inst_17690__$1 == null);var inst_17692 = cljs.core.not.call(null,inst_17691);var state_17710__$1 = (function (){var statearr_17715 = state_17710;(statearr_17715[(8)] = inst_17690__$1);
return statearr_17715;
})();if(inst_17692)
{var statearr_17716_17738 = state_17710__$1;(statearr_17716_17738[(1)] = (5));
} else
{var statearr_17717_17739 = state_17710__$1;(statearr_17717_17739[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17711 === (6)))
{var state_17710__$1 = state_17710;var statearr_17718_17740 = state_17710__$1;(statearr_17718_17740[(2)] = null);
(statearr_17718_17740[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17711 === (3)))
{var inst_17707 = (state_17710[(2)]);var inst_17708 = cljs.core.async.close_BANG_.call(null,out);var state_17710__$1 = (function (){var statearr_17719 = state_17710;(statearr_17719[(9)] = inst_17707);
return statearr_17719;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17710__$1,inst_17708);
} else
{if((state_val_17711 === (2)))
{var state_17710__$1 = state_17710;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17710__$1,(4),ch);
} else
{if((state_val_17711 === (11)))
{var inst_17690 = (state_17710[(8)]);var inst_17699 = (state_17710[(2)]);var inst_17687 = inst_17690;var state_17710__$1 = (function (){var statearr_17720 = state_17710;(statearr_17720[(7)] = inst_17687);
(statearr_17720[(10)] = inst_17699);
return statearr_17720;
})();var statearr_17721_17741 = state_17710__$1;(statearr_17721_17741[(2)] = null);
(statearr_17721_17741[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17711 === (9)))
{var inst_17690 = (state_17710[(8)]);var state_17710__$1 = state_17710;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17710__$1,(11),out,inst_17690);
} else
{if((state_val_17711 === (5)))
{var inst_17690 = (state_17710[(8)]);var inst_17687 = (state_17710[(7)]);var inst_17694 = cljs.core._EQ_.call(null,inst_17690,inst_17687);var state_17710__$1 = state_17710;if(inst_17694)
{var statearr_17723_17742 = state_17710__$1;(statearr_17723_17742[(1)] = (8));
} else
{var statearr_17724_17743 = state_17710__$1;(statearr_17724_17743[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17711 === (10)))
{var inst_17702 = (state_17710[(2)]);var state_17710__$1 = state_17710;var statearr_17725_17744 = state_17710__$1;(statearr_17725_17744[(2)] = inst_17702);
(statearr_17725_17744[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17711 === (8)))
{var inst_17687 = (state_17710[(7)]);var tmp17722 = inst_17687;var inst_17687__$1 = tmp17722;var state_17710__$1 = (function (){var statearr_17726 = state_17710;(statearr_17726[(7)] = inst_17687__$1);
return statearr_17726;
})();var statearr_17727_17745 = state_17710__$1;(statearr_17727_17745[(2)] = null);
(statearr_17727_17745[(1)] = (2));
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
});})(c__12567__auto___17735,out))
;return ((function (switch__12502__auto__,c__12567__auto___17735,out){
return (function() {
var state_machine__12503__auto__ = null;
var state_machine__12503__auto____0 = (function (){var statearr_17731 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17731[(0)] = state_machine__12503__auto__);
(statearr_17731[(1)] = (1));
return statearr_17731;
});
var state_machine__12503__auto____1 = (function (state_17710){while(true){
var ret_value__12504__auto__ = (function (){try{while(true){
var result__12505__auto__ = switch__12502__auto__.call(null,state_17710);if(cljs.core.keyword_identical_QMARK_.call(null,result__12505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12505__auto__;
}
break;
}
}catch (e17732){if((e17732 instanceof Object))
{var ex__12506__auto__ = e17732;var statearr_17733_17746 = state_17710;(statearr_17733_17746[(5)] = ex__12506__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17710);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17732;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17747 = state_17710;
state_17710 = G__17747;
continue;
}
} else
{return ret_value__12504__auto__;
}
break;
}
});
state_machine__12503__auto__ = function(state_17710){
switch(arguments.length){
case 0:
return state_machine__12503__auto____0.call(this);
case 1:
return state_machine__12503__auto____1.call(this,state_17710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12503__auto____0;
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12503__auto____1;
return state_machine__12503__auto__;
})()
;})(switch__12502__auto__,c__12567__auto___17735,out))
})();var state__12569__auto__ = (function (){var statearr_17734 = f__12568__auto__.call(null);(statearr_17734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12567__auto___17735);
return statearr_17734;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12569__auto__);
});})(c__12567__auto___17735,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12567__auto___17882 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12567__auto___17882,out){
return (function (){var f__12568__auto__ = (function (){var switch__12502__auto__ = ((function (c__12567__auto___17882,out){
return (function (state_17852){var state_val_17853 = (state_17852[(1)]);if((state_val_17853 === (7)))
{var inst_17848 = (state_17852[(2)]);var state_17852__$1 = state_17852;var statearr_17854_17883 = state_17852__$1;(statearr_17854_17883[(2)] = inst_17848);
(statearr_17854_17883[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17853 === (1)))
{var inst_17815 = (new Array(n));var inst_17816 = inst_17815;var inst_17817 = (0);var state_17852__$1 = (function (){var statearr_17855 = state_17852;(statearr_17855[(7)] = inst_17817);
(statearr_17855[(8)] = inst_17816);
return statearr_17855;
})();var statearr_17856_17884 = state_17852__$1;(statearr_17856_17884[(2)] = null);
(statearr_17856_17884[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17853 === (4)))
{var inst_17820 = (state_17852[(9)]);var inst_17820__$1 = (state_17852[(2)]);var inst_17821 = (inst_17820__$1 == null);var inst_17822 = cljs.core.not.call(null,inst_17821);var state_17852__$1 = (function (){var statearr_17857 = state_17852;(statearr_17857[(9)] = inst_17820__$1);
return statearr_17857;
})();if(inst_17822)
{var statearr_17858_17885 = state_17852__$1;(statearr_17858_17885[(1)] = (5));
} else
{var statearr_17859_17886 = state_17852__$1;(statearr_17859_17886[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17853 === (15)))
{var inst_17842 = (state_17852[(2)]);var state_17852__$1 = state_17852;var statearr_17860_17887 = state_17852__$1;(statearr_17860_17887[(2)] = inst_17842);
(statearr_17860_17887[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17853 === (13)))
{var state_17852__$1 = state_17852;var statearr_17861_17888 = state_17852__$1;(statearr_17861_17888[(2)] = null);
(statearr_17861_17888[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17853 === (6)))
{var inst_17817 = (state_17852[(7)]);var inst_17838 = (inst_17817 > (0));var state_17852__$1 = state_17852;if(cljs.core.truth_(inst_17838))
{var statearr_17862_17889 = state_17852__$1;(statearr_17862_17889[(1)] = (12));
} else
{var statearr_17863_17890 = state_17852__$1;(statearr_17863_17890[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17853 === (3)))
{var inst_17850 = (state_17852[(2)]);var state_17852__$1 = state_17852;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17852__$1,inst_17850);
} else
{if((state_val_17853 === (12)))
{var inst_17816 = (state_17852[(8)]);var inst_17840 = cljs.core.vec.call(null,inst_17816);var state_17852__$1 = state_17852;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17852__$1,(15),out,inst_17840);
} else
{if((state_val_17853 === (2)))
{var state_17852__$1 = state_17852;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17852__$1,(4),ch);
} else
{if((state_val_17853 === (11)))
{var inst_17832 = (state_17852[(2)]);var inst_17833 = (new Array(n));var inst_17816 = inst_17833;var inst_17817 = (0);var state_17852__$1 = (function (){var statearr_17864 = state_17852;(statearr_17864[(7)] = inst_17817);
(statearr_17864[(8)] = inst_17816);
(statearr_17864[(10)] = inst_17832);
return statearr_17864;
})();var statearr_17865_17891 = state_17852__$1;(statearr_17865_17891[(2)] = null);
(statearr_17865_17891[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17853 === (9)))
{var inst_17816 = (state_17852[(8)]);var inst_17830 = cljs.core.vec.call(null,inst_17816);var state_17852__$1 = state_17852;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17852__$1,(11),out,inst_17830);
} else
{if((state_val_17853 === (5)))
{var inst_17820 = (state_17852[(9)]);var inst_17817 = (state_17852[(7)]);var inst_17825 = (state_17852[(11)]);var inst_17816 = (state_17852[(8)]);var inst_17824 = (inst_17816[inst_17817] = inst_17820);var inst_17825__$1 = (inst_17817 + (1));var inst_17826 = (inst_17825__$1 < n);var state_17852__$1 = (function (){var statearr_17866 = state_17852;(statearr_17866[(12)] = inst_17824);
(statearr_17866[(11)] = inst_17825__$1);
return statearr_17866;
})();if(cljs.core.truth_(inst_17826))
{var statearr_17867_17892 = state_17852__$1;(statearr_17867_17892[(1)] = (8));
} else
{var statearr_17868_17893 = state_17852__$1;(statearr_17868_17893[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17853 === (14)))
{var inst_17845 = (state_17852[(2)]);var inst_17846 = cljs.core.async.close_BANG_.call(null,out);var state_17852__$1 = (function (){var statearr_17870 = state_17852;(statearr_17870[(13)] = inst_17845);
return statearr_17870;
})();var statearr_17871_17894 = state_17852__$1;(statearr_17871_17894[(2)] = inst_17846);
(statearr_17871_17894[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17853 === (10)))
{var inst_17836 = (state_17852[(2)]);var state_17852__$1 = state_17852;var statearr_17872_17895 = state_17852__$1;(statearr_17872_17895[(2)] = inst_17836);
(statearr_17872_17895[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17853 === (8)))
{var inst_17825 = (state_17852[(11)]);var inst_17816 = (state_17852[(8)]);var tmp17869 = inst_17816;var inst_17816__$1 = tmp17869;var inst_17817 = inst_17825;var state_17852__$1 = (function (){var statearr_17873 = state_17852;(statearr_17873[(7)] = inst_17817);
(statearr_17873[(8)] = inst_17816__$1);
return statearr_17873;
})();var statearr_17874_17896 = state_17852__$1;(statearr_17874_17896[(2)] = null);
(statearr_17874_17896[(1)] = (2));
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
});})(c__12567__auto___17882,out))
;return ((function (switch__12502__auto__,c__12567__auto___17882,out){
return (function() {
var state_machine__12503__auto__ = null;
var state_machine__12503__auto____0 = (function (){var statearr_17878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17878[(0)] = state_machine__12503__auto__);
(statearr_17878[(1)] = (1));
return statearr_17878;
});
var state_machine__12503__auto____1 = (function (state_17852){while(true){
var ret_value__12504__auto__ = (function (){try{while(true){
var result__12505__auto__ = switch__12502__auto__.call(null,state_17852);if(cljs.core.keyword_identical_QMARK_.call(null,result__12505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12505__auto__;
}
break;
}
}catch (e17879){if((e17879 instanceof Object))
{var ex__12506__auto__ = e17879;var statearr_17880_17897 = state_17852;(statearr_17880_17897[(5)] = ex__12506__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17852);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17879;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17898 = state_17852;
state_17852 = G__17898;
continue;
}
} else
{return ret_value__12504__auto__;
}
break;
}
});
state_machine__12503__auto__ = function(state_17852){
switch(arguments.length){
case 0:
return state_machine__12503__auto____0.call(this);
case 1:
return state_machine__12503__auto____1.call(this,state_17852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12503__auto____0;
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12503__auto____1;
return state_machine__12503__auto__;
})()
;})(switch__12502__auto__,c__12567__auto___17882,out))
})();var state__12569__auto__ = (function (){var statearr_17881 = f__12568__auto__.call(null);(statearr_17881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12567__auto___17882);
return statearr_17881;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12569__auto__);
});})(c__12567__auto___17882,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12567__auto___18041 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12567__auto___18041,out){
return (function (){var f__12568__auto__ = (function (){var switch__12502__auto__ = ((function (c__12567__auto___18041,out){
return (function (state_18011){var state_val_18012 = (state_18011[(1)]);if((state_val_18012 === (7)))
{var inst_18007 = (state_18011[(2)]);var state_18011__$1 = state_18011;var statearr_18013_18042 = state_18011__$1;(statearr_18013_18042[(2)] = inst_18007);
(statearr_18013_18042[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18012 === (1)))
{var inst_17970 = [];var inst_17971 = inst_17970;var inst_17972 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_18011__$1 = (function (){var statearr_18014 = state_18011;(statearr_18014[(7)] = inst_17972);
(statearr_18014[(8)] = inst_17971);
return statearr_18014;
})();var statearr_18015_18043 = state_18011__$1;(statearr_18015_18043[(2)] = null);
(statearr_18015_18043[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18012 === (4)))
{var inst_17975 = (state_18011[(9)]);var inst_17975__$1 = (state_18011[(2)]);var inst_17976 = (inst_17975__$1 == null);var inst_17977 = cljs.core.not.call(null,inst_17976);var state_18011__$1 = (function (){var statearr_18016 = state_18011;(statearr_18016[(9)] = inst_17975__$1);
return statearr_18016;
})();if(inst_17977)
{var statearr_18017_18044 = state_18011__$1;(statearr_18017_18044[(1)] = (5));
} else
{var statearr_18018_18045 = state_18011__$1;(statearr_18018_18045[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18012 === (15)))
{var inst_18001 = (state_18011[(2)]);var state_18011__$1 = state_18011;var statearr_18019_18046 = state_18011__$1;(statearr_18019_18046[(2)] = inst_18001);
(statearr_18019_18046[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18012 === (13)))
{var state_18011__$1 = state_18011;var statearr_18020_18047 = state_18011__$1;(statearr_18020_18047[(2)] = null);
(statearr_18020_18047[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18012 === (6)))
{var inst_17971 = (state_18011[(8)]);var inst_17996 = inst_17971.length;var inst_17997 = (inst_17996 > (0));var state_18011__$1 = state_18011;if(cljs.core.truth_(inst_17997))
{var statearr_18021_18048 = state_18011__$1;(statearr_18021_18048[(1)] = (12));
} else
{var statearr_18022_18049 = state_18011__$1;(statearr_18022_18049[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18012 === (3)))
{var inst_18009 = (state_18011[(2)]);var state_18011__$1 = state_18011;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18011__$1,inst_18009);
} else
{if((state_val_18012 === (12)))
{var inst_17971 = (state_18011[(8)]);var inst_17999 = cljs.core.vec.call(null,inst_17971);var state_18011__$1 = state_18011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18011__$1,(15),out,inst_17999);
} else
{if((state_val_18012 === (2)))
{var state_18011__$1 = state_18011;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18011__$1,(4),ch);
} else
{if((state_val_18012 === (11)))
{var inst_17979 = (state_18011[(10)]);var inst_17975 = (state_18011[(9)]);var inst_17989 = (state_18011[(2)]);var inst_17990 = [];var inst_17991 = inst_17990.push(inst_17975);var inst_17971 = inst_17990;var inst_17972 = inst_17979;var state_18011__$1 = (function (){var statearr_18023 = state_18011;(statearr_18023[(11)] = inst_17991);
(statearr_18023[(12)] = inst_17989);
(statearr_18023[(7)] = inst_17972);
(statearr_18023[(8)] = inst_17971);
return statearr_18023;
})();var statearr_18024_18050 = state_18011__$1;(statearr_18024_18050[(2)] = null);
(statearr_18024_18050[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18012 === (9)))
{var inst_17971 = (state_18011[(8)]);var inst_17987 = cljs.core.vec.call(null,inst_17971);var state_18011__$1 = state_18011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18011__$1,(11),out,inst_17987);
} else
{if((state_val_18012 === (5)))
{var inst_17979 = (state_18011[(10)]);var inst_17975 = (state_18011[(9)]);var inst_17972 = (state_18011[(7)]);var inst_17979__$1 = f.call(null,inst_17975);var inst_17980 = cljs.core._EQ_.call(null,inst_17979__$1,inst_17972);var inst_17981 = cljs.core.keyword_identical_QMARK_.call(null,inst_17972,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_17982 = (inst_17980) || (inst_17981);var state_18011__$1 = (function (){var statearr_18025 = state_18011;(statearr_18025[(10)] = inst_17979__$1);
return statearr_18025;
})();if(cljs.core.truth_(inst_17982))
{var statearr_18026_18051 = state_18011__$1;(statearr_18026_18051[(1)] = (8));
} else
{var statearr_18027_18052 = state_18011__$1;(statearr_18027_18052[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18012 === (14)))
{var inst_18004 = (state_18011[(2)]);var inst_18005 = cljs.core.async.close_BANG_.call(null,out);var state_18011__$1 = (function (){var statearr_18029 = state_18011;(statearr_18029[(13)] = inst_18004);
return statearr_18029;
})();var statearr_18030_18053 = state_18011__$1;(statearr_18030_18053[(2)] = inst_18005);
(statearr_18030_18053[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18012 === (10)))
{var inst_17994 = (state_18011[(2)]);var state_18011__$1 = state_18011;var statearr_18031_18054 = state_18011__$1;(statearr_18031_18054[(2)] = inst_17994);
(statearr_18031_18054[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18012 === (8)))
{var inst_17979 = (state_18011[(10)]);var inst_17975 = (state_18011[(9)]);var inst_17971 = (state_18011[(8)]);var inst_17984 = inst_17971.push(inst_17975);var tmp18028 = inst_17971;var inst_17971__$1 = tmp18028;var inst_17972 = inst_17979;var state_18011__$1 = (function (){var statearr_18032 = state_18011;(statearr_18032[(14)] = inst_17984);
(statearr_18032[(7)] = inst_17972);
(statearr_18032[(8)] = inst_17971__$1);
return statearr_18032;
})();var statearr_18033_18055 = state_18011__$1;(statearr_18033_18055[(2)] = null);
(statearr_18033_18055[(1)] = (2));
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
});})(c__12567__auto___18041,out))
;return ((function (switch__12502__auto__,c__12567__auto___18041,out){
return (function() {
var state_machine__12503__auto__ = null;
var state_machine__12503__auto____0 = (function (){var statearr_18037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18037[(0)] = state_machine__12503__auto__);
(statearr_18037[(1)] = (1));
return statearr_18037;
});
var state_machine__12503__auto____1 = (function (state_18011){while(true){
var ret_value__12504__auto__ = (function (){try{while(true){
var result__12505__auto__ = switch__12502__auto__.call(null,state_18011);if(cljs.core.keyword_identical_QMARK_.call(null,result__12505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12505__auto__;
}
break;
}
}catch (e18038){if((e18038 instanceof Object))
{var ex__12506__auto__ = e18038;var statearr_18039_18056 = state_18011;(statearr_18039_18056[(5)] = ex__12506__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18011);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18057 = state_18011;
state_18011 = G__18057;
continue;
}
} else
{return ret_value__12504__auto__;
}
break;
}
});
state_machine__12503__auto__ = function(state_18011){
switch(arguments.length){
case 0:
return state_machine__12503__auto____0.call(this);
case 1:
return state_machine__12503__auto____1.call(this,state_18011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12503__auto____0;
state_machine__12503__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12503__auto____1;
return state_machine__12503__auto__;
})()
;})(switch__12502__auto__,c__12567__auto___18041,out))
})();var state__12569__auto__ = (function (){var statearr_18040 = f__12568__auto__.call(null);(statearr_18040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12567__auto___18041);
return statearr_18040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12569__auto__);
});})(c__12567__auto___18041,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map