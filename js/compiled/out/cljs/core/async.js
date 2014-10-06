// Compiled by ClojureScript 0.0-2342
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t20745 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20745 = (function (f,fn_handler,meta20746){
this.f = f;
this.fn_handler = fn_handler;
this.meta20746 = meta20746;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20745.cljs$lang$type = true;
cljs.core.async.t20745.cljs$lang$ctorStr = "cljs.core.async/t20745";
cljs.core.async.t20745.cljs$lang$ctorPrWriter = (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"cljs.core.async/t20745");
});
cljs.core.async.t20745.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20745.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t20745.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t20745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20747){var self__ = this;
var _20747__$1 = this;return self__.meta20746;
});
cljs.core.async.t20745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20747,meta20746__$1){var self__ = this;
var _20747__$1 = this;return (new cljs.core.async.t20745(self__.f,self__.fn_handler,meta20746__$1));
});
cljs.core.async.__GT_t20745 = (function __GT_t20745(f__$1,fn_handler__$1,meta20746){return (new cljs.core.async.t20745(f__$1,fn_handler__$1,meta20746));
});
}
return (new cljs.core.async.t20745(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__20749 = buff;if(G__20749)
{var bit__12144__auto__ = null;if(cljs.core.truth_((function (){var or__11481__auto__ = bit__12144__auto__;if(cljs.core.truth_(or__11481__auto__))
{return or__11481__auto__;
} else
{return G__20749.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__20749.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20749);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20749);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
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
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
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
{var val_20750 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_20750);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_20750,ret){
return (function (){return fn1.call(null,val_20750);
});})(val_20750,ret))
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
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4220__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4220__auto__))
{var ret = temp__4220__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4220__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4220__auto__))
{var retb = temp__4220__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4220__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4220__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__12350__auto___20751 = n;var x_20752 = (0);while(true){
if((x_20752 < n__12350__auto___20751))
{(a[x_20752] = (0));
{
var G__20753 = (x_20752 + (1));
x_20752 = G__20753;
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
var G__20754 = (i + (1));
i = G__20754;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t20758 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20758 = (function (flag,alt_flag,meta20759){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20759 = meta20759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20758.cljs$lang$type = true;
cljs.core.async.t20758.cljs$lang$ctorStr = "cljs.core.async/t20758";
cljs.core.async.t20758.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"cljs.core.async/t20758");
});})(flag))
;
cljs.core.async.t20758.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20758.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t20758.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t20758.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20760){var self__ = this;
var _20760__$1 = this;return self__.meta20759;
});})(flag))
;
cljs.core.async.t20758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20760,meta20759__$1){var self__ = this;
var _20760__$1 = this;return (new cljs.core.async.t20758(self__.flag,self__.alt_flag,meta20759__$1));
});})(flag))
;
cljs.core.async.__GT_t20758 = ((function (flag){
return (function __GT_t20758(flag__$1,alt_flag__$1,meta20759){return (new cljs.core.async.t20758(flag__$1,alt_flag__$1,meta20759));
});})(flag))
;
}
return (new cljs.core.async.t20758(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t20764 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20764 = (function (cb,flag,alt_handler,meta20765){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20765 = meta20765;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20764.cljs$lang$type = true;
cljs.core.async.t20764.cljs$lang$ctorStr = "cljs.core.async/t20764";
cljs.core.async.t20764.cljs$lang$ctorPrWriter = (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"cljs.core.async/t20764");
});
cljs.core.async.t20764.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20764.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t20764.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t20764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20766){var self__ = this;
var _20766__$1 = this;return self__.meta20765;
});
cljs.core.async.t20764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20766,meta20765__$1){var self__ = this;
var _20766__$1 = this;return (new cljs.core.async.t20764(self__.cb,self__.flag,self__.alt_handler,meta20765__$1));
});
cljs.core.async.__GT_t20764 = (function __GT_t20764(cb__$1,flag__$1,alt_handler__$1,meta20765){return (new cljs.core.async.t20764(cb__$1,flag__$1,alt_handler__$1,meta20765));
});
}
return (new cljs.core.async.t20764(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20767_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20767_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20768_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20768_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11481__auto__ = wport;if(cljs.core.truth_(or__11481__auto__))
{return or__11481__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__20769 = (i + (1));
i = G__20769;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__11481__auto__ = ret;if(cljs.core.truth_(or__11481__auto__))
{return or__11481__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4222__auto__ = (function (){var and__11469__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__11469__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__11469__auto__;
}
})();if(cljs.core.truth_(temp__4222__auto__))
{var got = temp__4222__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
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
var alts_BANG___delegate = function (ports,p__20770){var map__20772 = p__20770;var map__20772__$1 = ((cljs.core.seq_QMARK_.call(null,map__20772))?cljs.core.apply.call(null,cljs.core.hash_map,map__20772):map__20772);var opts = map__20772__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__20770 = null;if (arguments.length > 1) {
  p__20770 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__20770);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20773){
var ports = cljs.core.first(arglist__20773);
var p__20770 = cljs.core.rest(arglist__20773);
return alts_BANG___delegate(ports,p__20770);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__14013__auto___20868 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto___20868){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto___20868){
return (function (state_20844){var state_val_20845 = (state_20844[(1)]);if((state_val_20845 === (7)))
{var inst_20840 = (state_20844[(2)]);var state_20844__$1 = state_20844;var statearr_20846_20869 = state_20844__$1;(statearr_20846_20869[(2)] = inst_20840);
(statearr_20846_20869[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20845 === (1)))
{var state_20844__$1 = state_20844;var statearr_20847_20870 = state_20844__$1;(statearr_20847_20870[(2)] = null);
(statearr_20847_20870[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20845 === (4)))
{var inst_20823 = (state_20844[(7)]);var inst_20823__$1 = (state_20844[(2)]);var inst_20824 = (inst_20823__$1 == null);var state_20844__$1 = (function (){var statearr_20848 = state_20844;(statearr_20848[(7)] = inst_20823__$1);
return statearr_20848;
})();if(cljs.core.truth_(inst_20824))
{var statearr_20849_20871 = state_20844__$1;(statearr_20849_20871[(1)] = (5));
} else
{var statearr_20850_20872 = state_20844__$1;(statearr_20850_20872[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20845 === (13)))
{var state_20844__$1 = state_20844;var statearr_20851_20873 = state_20844__$1;(statearr_20851_20873[(2)] = null);
(statearr_20851_20873[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20845 === (6)))
{var inst_20823 = (state_20844[(7)]);var state_20844__$1 = state_20844;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20844__$1,(11),to,inst_20823);
} else
{if((state_val_20845 === (3)))
{var inst_20842 = (state_20844[(2)]);var state_20844__$1 = state_20844;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20844__$1,inst_20842);
} else
{if((state_val_20845 === (12)))
{var state_20844__$1 = state_20844;var statearr_20852_20874 = state_20844__$1;(statearr_20852_20874[(2)] = null);
(statearr_20852_20874[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20845 === (2)))
{var state_20844__$1 = state_20844;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20844__$1,(4),from);
} else
{if((state_val_20845 === (11)))
{var inst_20833 = (state_20844[(2)]);var state_20844__$1 = state_20844;if(cljs.core.truth_(inst_20833))
{var statearr_20853_20875 = state_20844__$1;(statearr_20853_20875[(1)] = (12));
} else
{var statearr_20854_20876 = state_20844__$1;(statearr_20854_20876[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20845 === (9)))
{var state_20844__$1 = state_20844;var statearr_20855_20877 = state_20844__$1;(statearr_20855_20877[(2)] = null);
(statearr_20855_20877[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20845 === (5)))
{var state_20844__$1 = state_20844;if(cljs.core.truth_(close_QMARK_))
{var statearr_20856_20878 = state_20844__$1;(statearr_20856_20878[(1)] = (8));
} else
{var statearr_20857_20879 = state_20844__$1;(statearr_20857_20879[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20845 === (14)))
{var inst_20838 = (state_20844[(2)]);var state_20844__$1 = state_20844;var statearr_20858_20880 = state_20844__$1;(statearr_20858_20880[(2)] = inst_20838);
(statearr_20858_20880[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20845 === (10)))
{var inst_20830 = (state_20844[(2)]);var state_20844__$1 = state_20844;var statearr_20859_20881 = state_20844__$1;(statearr_20859_20881[(2)] = inst_20830);
(statearr_20859_20881[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20845 === (8)))
{var inst_20827 = cljs.core.async.close_BANG_.call(null,to);var state_20844__$1 = state_20844;var statearr_20860_20882 = state_20844__$1;(statearr_20860_20882[(2)] = inst_20827);
(statearr_20860_20882[(1)] = (10));
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
});})(c__14013__auto___20868))
;return ((function (switch__13957__auto__,c__14013__auto___20868){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_20864 = [null,null,null,null,null,null,null,null];(statearr_20864[(0)] = state_machine__13958__auto__);
(statearr_20864[(1)] = (1));
return statearr_20864;
});
var state_machine__13958__auto____1 = (function (state_20844){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_20844);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e20865){if((e20865 instanceof Object))
{var ex__13961__auto__ = e20865;var statearr_20866_20883 = state_20844;(statearr_20866_20883[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20844);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20865;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20884 = state_20844;
state_20844 = G__20884;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_20844){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_20844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto___20868))
})();var state__14015__auto__ = (function (){var statearr_20867 = f__14014__auto__.call(null);(statearr_20867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto___20868);
return statearr_20867;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto___20868))
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
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__21068){var vec__21069 = p__21068;var v = cljs.core.nth.call(null,vec__21069,(0),null);var p = cljs.core.nth.call(null,vec__21069,(1),null);var job = vec__21069;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__14013__auto___21251 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto___21251,res,vec__21069,v,p,job,jobs,results){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto___21251,res,vec__21069,v,p,job,jobs,results){
return (function (state_21074){var state_val_21075 = (state_21074[(1)]);if((state_val_21075 === (2)))
{var inst_21071 = (state_21074[(2)]);var inst_21072 = cljs.core.async.close_BANG_.call(null,res);var state_21074__$1 = (function (){var statearr_21076 = state_21074;(statearr_21076[(7)] = inst_21071);
return statearr_21076;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21074__$1,inst_21072);
} else
{if((state_val_21075 === (1)))
{var state_21074__$1 = state_21074;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21074__$1,(2),res,v);
} else
{return null;
}
}
});})(c__14013__auto___21251,res,vec__21069,v,p,job,jobs,results))
;return ((function (switch__13957__auto__,c__14013__auto___21251,res,vec__21069,v,p,job,jobs,results){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_21080 = [null,null,null,null,null,null,null,null];(statearr_21080[(0)] = state_machine__13958__auto__);
(statearr_21080[(1)] = (1));
return statearr_21080;
});
var state_machine__13958__auto____1 = (function (state_21074){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_21074);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e21081){if((e21081 instanceof Object))
{var ex__13961__auto__ = e21081;var statearr_21082_21252 = state_21074;(statearr_21082_21252[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21074);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21081;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21253 = state_21074;
state_21074 = G__21253;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_21074){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_21074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto___21251,res,vec__21069,v,p,job,jobs,results))
})();var state__14015__auto__ = (function (){var statearr_21083 = f__14014__auto__.call(null);(statearr_21083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto___21251);
return statearr_21083;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto___21251,res,vec__21069,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__21084){var vec__21085 = p__21084;var v = cljs.core.nth.call(null,vec__21085,(0),null);var p = cljs.core.nth.call(null,vec__21085,(1),null);var job = vec__21085;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__12350__auto___21254 = n;var __21255 = (0);while(true){
if((__21255 < n__12350__auto___21254))
{var G__21086_21256 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__21086_21256) {
case "async":
var c__14013__auto___21258 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__21255,c__14013__auto___21258,G__21086_21256,n__12350__auto___21254,jobs,results,process,async){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (__21255,c__14013__auto___21258,G__21086_21256,n__12350__auto___21254,jobs,results,process,async){
return (function (state_21099){var state_val_21100 = (state_21099[(1)]);if((state_val_21100 === (7)))
{var inst_21095 = (state_21099[(2)]);var state_21099__$1 = state_21099;var statearr_21101_21259 = state_21099__$1;(statearr_21101_21259[(2)] = inst_21095);
(statearr_21101_21259[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21100 === (6)))
{var state_21099__$1 = state_21099;var statearr_21102_21260 = state_21099__$1;(statearr_21102_21260[(2)] = null);
(statearr_21102_21260[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21100 === (5)))
{var state_21099__$1 = state_21099;var statearr_21103_21261 = state_21099__$1;(statearr_21103_21261[(2)] = null);
(statearr_21103_21261[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21100 === (4)))
{var inst_21089 = (state_21099[(2)]);var inst_21090 = async.call(null,inst_21089);var state_21099__$1 = state_21099;if(cljs.core.truth_(inst_21090))
{var statearr_21104_21262 = state_21099__$1;(statearr_21104_21262[(1)] = (5));
} else
{var statearr_21105_21263 = state_21099__$1;(statearr_21105_21263[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21100 === (3)))
{var inst_21097 = (state_21099[(2)]);var state_21099__$1 = state_21099;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21099__$1,inst_21097);
} else
{if((state_val_21100 === (2)))
{var state_21099__$1 = state_21099;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21099__$1,(4),jobs);
} else
{if((state_val_21100 === (1)))
{var state_21099__$1 = state_21099;var statearr_21106_21264 = state_21099__$1;(statearr_21106_21264[(2)] = null);
(statearr_21106_21264[(1)] = (2));
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
});})(__21255,c__14013__auto___21258,G__21086_21256,n__12350__auto___21254,jobs,results,process,async))
;return ((function (__21255,switch__13957__auto__,c__14013__auto___21258,G__21086_21256,n__12350__auto___21254,jobs,results,process,async){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_21110 = [null,null,null,null,null,null,null];(statearr_21110[(0)] = state_machine__13958__auto__);
(statearr_21110[(1)] = (1));
return statearr_21110;
});
var state_machine__13958__auto____1 = (function (state_21099){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_21099);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e21111){if((e21111 instanceof Object))
{var ex__13961__auto__ = e21111;var statearr_21112_21265 = state_21099;(statearr_21112_21265[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21099);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21111;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21266 = state_21099;
state_21099 = G__21266;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_21099){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_21099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(__21255,switch__13957__auto__,c__14013__auto___21258,G__21086_21256,n__12350__auto___21254,jobs,results,process,async))
})();var state__14015__auto__ = (function (){var statearr_21113 = f__14014__auto__.call(null);(statearr_21113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto___21258);
return statearr_21113;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(__21255,c__14013__auto___21258,G__21086_21256,n__12350__auto___21254,jobs,results,process,async))
);

break;
case "compute":
var c__14013__auto___21267 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__21255,c__14013__auto___21267,G__21086_21256,n__12350__auto___21254,jobs,results,process,async){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (__21255,c__14013__auto___21267,G__21086_21256,n__12350__auto___21254,jobs,results,process,async){
return (function (state_21126){var state_val_21127 = (state_21126[(1)]);if((state_val_21127 === (7)))
{var inst_21122 = (state_21126[(2)]);var state_21126__$1 = state_21126;var statearr_21128_21268 = state_21126__$1;(statearr_21128_21268[(2)] = inst_21122);
(statearr_21128_21268[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21127 === (6)))
{var state_21126__$1 = state_21126;var statearr_21129_21269 = state_21126__$1;(statearr_21129_21269[(2)] = null);
(statearr_21129_21269[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21127 === (5)))
{var state_21126__$1 = state_21126;var statearr_21130_21270 = state_21126__$1;(statearr_21130_21270[(2)] = null);
(statearr_21130_21270[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21127 === (4)))
{var inst_21116 = (state_21126[(2)]);var inst_21117 = process.call(null,inst_21116);var state_21126__$1 = state_21126;if(cljs.core.truth_(inst_21117))
{var statearr_21131_21271 = state_21126__$1;(statearr_21131_21271[(1)] = (5));
} else
{var statearr_21132_21272 = state_21126__$1;(statearr_21132_21272[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21127 === (3)))
{var inst_21124 = (state_21126[(2)]);var state_21126__$1 = state_21126;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21126__$1,inst_21124);
} else
{if((state_val_21127 === (2)))
{var state_21126__$1 = state_21126;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21126__$1,(4),jobs);
} else
{if((state_val_21127 === (1)))
{var state_21126__$1 = state_21126;var statearr_21133_21273 = state_21126__$1;(statearr_21133_21273[(2)] = null);
(statearr_21133_21273[(1)] = (2));
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
});})(__21255,c__14013__auto___21267,G__21086_21256,n__12350__auto___21254,jobs,results,process,async))
;return ((function (__21255,switch__13957__auto__,c__14013__auto___21267,G__21086_21256,n__12350__auto___21254,jobs,results,process,async){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_21137 = [null,null,null,null,null,null,null];(statearr_21137[(0)] = state_machine__13958__auto__);
(statearr_21137[(1)] = (1));
return statearr_21137;
});
var state_machine__13958__auto____1 = (function (state_21126){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_21126);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e21138){if((e21138 instanceof Object))
{var ex__13961__auto__ = e21138;var statearr_21139_21274 = state_21126;(statearr_21139_21274[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21126);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21138;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21275 = state_21126;
state_21126 = G__21275;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_21126){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_21126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(__21255,switch__13957__auto__,c__14013__auto___21267,G__21086_21256,n__12350__auto___21254,jobs,results,process,async))
})();var state__14015__auto__ = (function (){var statearr_21140 = f__14014__auto__.call(null);(statearr_21140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto___21267);
return statearr_21140;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(__21255,c__14013__auto___21267,G__21086_21256,n__12350__auto___21254,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__21276 = (__21255 + (1));
__21255 = G__21276;
continue;
}
} else
{}
break;
}
var c__14013__auto___21277 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto___21277,jobs,results,process,async){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto___21277,jobs,results,process,async){
return (function (state_21162){var state_val_21163 = (state_21162[(1)]);if((state_val_21163 === (9)))
{var inst_21155 = (state_21162[(2)]);var state_21162__$1 = (function (){var statearr_21164 = state_21162;(statearr_21164[(7)] = inst_21155);
return statearr_21164;
})();var statearr_21165_21278 = state_21162__$1;(statearr_21165_21278[(2)] = null);
(statearr_21165_21278[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21163 === (8)))
{var inst_21148 = (state_21162[(8)]);var inst_21153 = (state_21162[(2)]);var state_21162__$1 = (function (){var statearr_21166 = state_21162;(statearr_21166[(9)] = inst_21153);
return statearr_21166;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21162__$1,(9),results,inst_21148);
} else
{if((state_val_21163 === (7)))
{var inst_21158 = (state_21162[(2)]);var state_21162__$1 = state_21162;var statearr_21167_21279 = state_21162__$1;(statearr_21167_21279[(2)] = inst_21158);
(statearr_21167_21279[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21163 === (6)))
{var inst_21148 = (state_21162[(8)]);var inst_21143 = (state_21162[(10)]);var inst_21148__$1 = cljs.core.async.chan.call(null,(1));var inst_21149 = cljs.core.PersistentVector.EMPTY_NODE;var inst_21150 = [inst_21143,inst_21148__$1];var inst_21151 = (new cljs.core.PersistentVector(null,2,(5),inst_21149,inst_21150,null));var state_21162__$1 = (function (){var statearr_21168 = state_21162;(statearr_21168[(8)] = inst_21148__$1);
return statearr_21168;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21162__$1,(8),jobs,inst_21151);
} else
{if((state_val_21163 === (5)))
{var inst_21146 = cljs.core.async.close_BANG_.call(null,jobs);var state_21162__$1 = state_21162;var statearr_21169_21280 = state_21162__$1;(statearr_21169_21280[(2)] = inst_21146);
(statearr_21169_21280[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21163 === (4)))
{var inst_21143 = (state_21162[(10)]);var inst_21143__$1 = (state_21162[(2)]);var inst_21144 = (inst_21143__$1 == null);var state_21162__$1 = (function (){var statearr_21170 = state_21162;(statearr_21170[(10)] = inst_21143__$1);
return statearr_21170;
})();if(cljs.core.truth_(inst_21144))
{var statearr_21171_21281 = state_21162__$1;(statearr_21171_21281[(1)] = (5));
} else
{var statearr_21172_21282 = state_21162__$1;(statearr_21172_21282[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21163 === (3)))
{var inst_21160 = (state_21162[(2)]);var state_21162__$1 = state_21162;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21162__$1,inst_21160);
} else
{if((state_val_21163 === (2)))
{var state_21162__$1 = state_21162;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21162__$1,(4),from);
} else
{if((state_val_21163 === (1)))
{var state_21162__$1 = state_21162;var statearr_21173_21283 = state_21162__$1;(statearr_21173_21283[(2)] = null);
(statearr_21173_21283[(1)] = (2));
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
});})(c__14013__auto___21277,jobs,results,process,async))
;return ((function (switch__13957__auto__,c__14013__auto___21277,jobs,results,process,async){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_21177 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21177[(0)] = state_machine__13958__auto__);
(statearr_21177[(1)] = (1));
return statearr_21177;
});
var state_machine__13958__auto____1 = (function (state_21162){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_21162);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e21178){if((e21178 instanceof Object))
{var ex__13961__auto__ = e21178;var statearr_21179_21284 = state_21162;(statearr_21179_21284[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21162);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21178;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21285 = state_21162;
state_21162 = G__21285;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_21162){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_21162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto___21277,jobs,results,process,async))
})();var state__14015__auto__ = (function (){var statearr_21180 = f__14014__auto__.call(null);(statearr_21180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto___21277);
return statearr_21180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto___21277,jobs,results,process,async))
);
var c__14013__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto__,jobs,results,process,async){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto__,jobs,results,process,async){
return (function (state_21218){var state_val_21219 = (state_21218[(1)]);if((state_val_21219 === (7)))
{var inst_21214 = (state_21218[(2)]);var state_21218__$1 = state_21218;var statearr_21220_21286 = state_21218__$1;(statearr_21220_21286[(2)] = inst_21214);
(statearr_21220_21286[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21219 === (20)))
{var state_21218__$1 = state_21218;var statearr_21221_21287 = state_21218__$1;(statearr_21221_21287[(2)] = null);
(statearr_21221_21287[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21219 === (1)))
{var state_21218__$1 = state_21218;var statearr_21222_21288 = state_21218__$1;(statearr_21222_21288[(2)] = null);
(statearr_21222_21288[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21219 === (4)))
{var inst_21183 = (state_21218[(7)]);var inst_21183__$1 = (state_21218[(2)]);var inst_21184 = (inst_21183__$1 == null);var state_21218__$1 = (function (){var statearr_21223 = state_21218;(statearr_21223[(7)] = inst_21183__$1);
return statearr_21223;
})();if(cljs.core.truth_(inst_21184))
{var statearr_21224_21289 = state_21218__$1;(statearr_21224_21289[(1)] = (5));
} else
{var statearr_21225_21290 = state_21218__$1;(statearr_21225_21290[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21219 === (15)))
{var inst_21196 = (state_21218[(8)]);var state_21218__$1 = state_21218;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21218__$1,(18),to,inst_21196);
} else
{if((state_val_21219 === (21)))
{var inst_21209 = (state_21218[(2)]);var state_21218__$1 = state_21218;var statearr_21226_21291 = state_21218__$1;(statearr_21226_21291[(2)] = inst_21209);
(statearr_21226_21291[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21219 === (13)))
{var inst_21211 = (state_21218[(2)]);var state_21218__$1 = (function (){var statearr_21227 = state_21218;(statearr_21227[(9)] = inst_21211);
return statearr_21227;
})();var statearr_21228_21292 = state_21218__$1;(statearr_21228_21292[(2)] = null);
(statearr_21228_21292[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21219 === (6)))
{var inst_21183 = (state_21218[(7)]);var state_21218__$1 = state_21218;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21218__$1,(11),inst_21183);
} else
{if((state_val_21219 === (17)))
{var inst_21204 = (state_21218[(2)]);var state_21218__$1 = state_21218;if(cljs.core.truth_(inst_21204))
{var statearr_21229_21293 = state_21218__$1;(statearr_21229_21293[(1)] = (19));
} else
{var statearr_21230_21294 = state_21218__$1;(statearr_21230_21294[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21219 === (3)))
{var inst_21216 = (state_21218[(2)]);var state_21218__$1 = state_21218;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21218__$1,inst_21216);
} else
{if((state_val_21219 === (12)))
{var inst_21193 = (state_21218[(10)]);var state_21218__$1 = state_21218;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21218__$1,(14),inst_21193);
} else
{if((state_val_21219 === (2)))
{var state_21218__$1 = state_21218;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21218__$1,(4),results);
} else
{if((state_val_21219 === (19)))
{var state_21218__$1 = state_21218;var statearr_21231_21295 = state_21218__$1;(statearr_21231_21295[(2)] = null);
(statearr_21231_21295[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21219 === (11)))
{var inst_21193 = (state_21218[(2)]);var state_21218__$1 = (function (){var statearr_21232 = state_21218;(statearr_21232[(10)] = inst_21193);
return statearr_21232;
})();var statearr_21233_21296 = state_21218__$1;(statearr_21233_21296[(2)] = null);
(statearr_21233_21296[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21219 === (9)))
{var state_21218__$1 = state_21218;var statearr_21234_21297 = state_21218__$1;(statearr_21234_21297[(2)] = null);
(statearr_21234_21297[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21219 === (5)))
{var state_21218__$1 = state_21218;if(cljs.core.truth_(close_QMARK_))
{var statearr_21235_21298 = state_21218__$1;(statearr_21235_21298[(1)] = (8));
} else
{var statearr_21236_21299 = state_21218__$1;(statearr_21236_21299[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21219 === (14)))
{var inst_21196 = (state_21218[(8)]);var inst_21198 = (state_21218[(11)]);var inst_21196__$1 = (state_21218[(2)]);var inst_21197 = (inst_21196__$1 == null);var inst_21198__$1 = cljs.core.not.call(null,inst_21197);var state_21218__$1 = (function (){var statearr_21237 = state_21218;(statearr_21237[(8)] = inst_21196__$1);
(statearr_21237[(11)] = inst_21198__$1);
return statearr_21237;
})();if(inst_21198__$1)
{var statearr_21238_21300 = state_21218__$1;(statearr_21238_21300[(1)] = (15));
} else
{var statearr_21239_21301 = state_21218__$1;(statearr_21239_21301[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21219 === (16)))
{var inst_21198 = (state_21218[(11)]);var state_21218__$1 = state_21218;var statearr_21240_21302 = state_21218__$1;(statearr_21240_21302[(2)] = inst_21198);
(statearr_21240_21302[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21219 === (10)))
{var inst_21190 = (state_21218[(2)]);var state_21218__$1 = state_21218;var statearr_21241_21303 = state_21218__$1;(statearr_21241_21303[(2)] = inst_21190);
(statearr_21241_21303[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21219 === (18)))
{var inst_21201 = (state_21218[(2)]);var state_21218__$1 = state_21218;var statearr_21242_21304 = state_21218__$1;(statearr_21242_21304[(2)] = inst_21201);
(statearr_21242_21304[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21219 === (8)))
{var inst_21187 = cljs.core.async.close_BANG_.call(null,to);var state_21218__$1 = state_21218;var statearr_21243_21305 = state_21218__$1;(statearr_21243_21305[(2)] = inst_21187);
(statearr_21243_21305[(1)] = (10));
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
});})(c__14013__auto__,jobs,results,process,async))
;return ((function (switch__13957__auto__,c__14013__auto__,jobs,results,process,async){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_21247 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21247[(0)] = state_machine__13958__auto__);
(statearr_21247[(1)] = (1));
return statearr_21247;
});
var state_machine__13958__auto____1 = (function (state_21218){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_21218);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e21248){if((e21248 instanceof Object))
{var ex__13961__auto__ = e21248;var statearr_21249_21306 = state_21218;(statearr_21249_21306[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21218);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21248;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21307 = state_21218;
state_21218 = G__21307;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_21218){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_21218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto__,jobs,results,process,async))
})();var state__14015__auto__ = (function (){var statearr_21250 = f__14014__auto__.call(null);(statearr_21250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto__);
return statearr_21250;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto__,jobs,results,process,async))
);
return c__14013__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__14013__auto___21408 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto___21408,tc,fc){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto___21408,tc,fc){
return (function (state_21383){var state_val_21384 = (state_21383[(1)]);if((state_val_21384 === (7)))
{var inst_21379 = (state_21383[(2)]);var state_21383__$1 = state_21383;var statearr_21385_21409 = state_21383__$1;(statearr_21385_21409[(2)] = inst_21379);
(statearr_21385_21409[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21384 === (1)))
{var state_21383__$1 = state_21383;var statearr_21386_21410 = state_21383__$1;(statearr_21386_21410[(2)] = null);
(statearr_21386_21410[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21384 === (4)))
{var inst_21360 = (state_21383[(7)]);var inst_21360__$1 = (state_21383[(2)]);var inst_21361 = (inst_21360__$1 == null);var state_21383__$1 = (function (){var statearr_21387 = state_21383;(statearr_21387[(7)] = inst_21360__$1);
return statearr_21387;
})();if(cljs.core.truth_(inst_21361))
{var statearr_21388_21411 = state_21383__$1;(statearr_21388_21411[(1)] = (5));
} else
{var statearr_21389_21412 = state_21383__$1;(statearr_21389_21412[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21384 === (13)))
{var state_21383__$1 = state_21383;var statearr_21390_21413 = state_21383__$1;(statearr_21390_21413[(2)] = null);
(statearr_21390_21413[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21384 === (6)))
{var inst_21360 = (state_21383[(7)]);var inst_21366 = p.call(null,inst_21360);var state_21383__$1 = state_21383;if(cljs.core.truth_(inst_21366))
{var statearr_21391_21414 = state_21383__$1;(statearr_21391_21414[(1)] = (9));
} else
{var statearr_21392_21415 = state_21383__$1;(statearr_21392_21415[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21384 === (3)))
{var inst_21381 = (state_21383[(2)]);var state_21383__$1 = state_21383;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21383__$1,inst_21381);
} else
{if((state_val_21384 === (12)))
{var state_21383__$1 = state_21383;var statearr_21393_21416 = state_21383__$1;(statearr_21393_21416[(2)] = null);
(statearr_21393_21416[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21384 === (2)))
{var state_21383__$1 = state_21383;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21383__$1,(4),ch);
} else
{if((state_val_21384 === (11)))
{var inst_21360 = (state_21383[(7)]);var inst_21370 = (state_21383[(2)]);var state_21383__$1 = state_21383;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21383__$1,(8),inst_21370,inst_21360);
} else
{if((state_val_21384 === (9)))
{var state_21383__$1 = state_21383;var statearr_21394_21417 = state_21383__$1;(statearr_21394_21417[(2)] = tc);
(statearr_21394_21417[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21384 === (5)))
{var inst_21363 = cljs.core.async.close_BANG_.call(null,tc);var inst_21364 = cljs.core.async.close_BANG_.call(null,fc);var state_21383__$1 = (function (){var statearr_21395 = state_21383;(statearr_21395[(8)] = inst_21363);
return statearr_21395;
})();var statearr_21396_21418 = state_21383__$1;(statearr_21396_21418[(2)] = inst_21364);
(statearr_21396_21418[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21384 === (14)))
{var inst_21377 = (state_21383[(2)]);var state_21383__$1 = state_21383;var statearr_21397_21419 = state_21383__$1;(statearr_21397_21419[(2)] = inst_21377);
(statearr_21397_21419[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21384 === (10)))
{var state_21383__$1 = state_21383;var statearr_21398_21420 = state_21383__$1;(statearr_21398_21420[(2)] = fc);
(statearr_21398_21420[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21384 === (8)))
{var inst_21372 = (state_21383[(2)]);var state_21383__$1 = state_21383;if(cljs.core.truth_(inst_21372))
{var statearr_21399_21421 = state_21383__$1;(statearr_21399_21421[(1)] = (12));
} else
{var statearr_21400_21422 = state_21383__$1;(statearr_21400_21422[(1)] = (13));
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
});})(c__14013__auto___21408,tc,fc))
;return ((function (switch__13957__auto__,c__14013__auto___21408,tc,fc){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_21404 = [null,null,null,null,null,null,null,null,null];(statearr_21404[(0)] = state_machine__13958__auto__);
(statearr_21404[(1)] = (1));
return statearr_21404;
});
var state_machine__13958__auto____1 = (function (state_21383){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_21383);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e21405){if((e21405 instanceof Object))
{var ex__13961__auto__ = e21405;var statearr_21406_21423 = state_21383;(statearr_21406_21423[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21383);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21405;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21424 = state_21383;
state_21383 = G__21424;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_21383){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_21383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto___21408,tc,fc))
})();var state__14015__auto__ = (function (){var statearr_21407 = f__14014__auto__.call(null);(statearr_21407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto___21408);
return statearr_21407;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto___21408,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__14013__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto__){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto__){
return (function (state_21471){var state_val_21472 = (state_21471[(1)]);if((state_val_21472 === (7)))
{var inst_21467 = (state_21471[(2)]);var state_21471__$1 = state_21471;var statearr_21473_21489 = state_21471__$1;(statearr_21473_21489[(2)] = inst_21467);
(statearr_21473_21489[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21472 === (6)))
{var inst_21460 = (state_21471[(7)]);var inst_21457 = (state_21471[(8)]);var inst_21464 = f.call(null,inst_21457,inst_21460);var inst_21457__$1 = inst_21464;var state_21471__$1 = (function (){var statearr_21474 = state_21471;(statearr_21474[(8)] = inst_21457__$1);
return statearr_21474;
})();var statearr_21475_21490 = state_21471__$1;(statearr_21475_21490[(2)] = null);
(statearr_21475_21490[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21472 === (5)))
{var inst_21457 = (state_21471[(8)]);var state_21471__$1 = state_21471;var statearr_21476_21491 = state_21471__$1;(statearr_21476_21491[(2)] = inst_21457);
(statearr_21476_21491[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21472 === (4)))
{var inst_21460 = (state_21471[(7)]);var inst_21460__$1 = (state_21471[(2)]);var inst_21461 = (inst_21460__$1 == null);var state_21471__$1 = (function (){var statearr_21477 = state_21471;(statearr_21477[(7)] = inst_21460__$1);
return statearr_21477;
})();if(cljs.core.truth_(inst_21461))
{var statearr_21478_21492 = state_21471__$1;(statearr_21478_21492[(1)] = (5));
} else
{var statearr_21479_21493 = state_21471__$1;(statearr_21479_21493[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21472 === (3)))
{var inst_21469 = (state_21471[(2)]);var state_21471__$1 = state_21471;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21471__$1,inst_21469);
} else
{if((state_val_21472 === (2)))
{var state_21471__$1 = state_21471;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21471__$1,(4),ch);
} else
{if((state_val_21472 === (1)))
{var inst_21457 = init;var state_21471__$1 = (function (){var statearr_21480 = state_21471;(statearr_21480[(8)] = inst_21457);
return statearr_21480;
})();var statearr_21481_21494 = state_21471__$1;(statearr_21481_21494[(2)] = null);
(statearr_21481_21494[(1)] = (2));
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
});})(c__14013__auto__))
;return ((function (switch__13957__auto__,c__14013__auto__){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_21485 = [null,null,null,null,null,null,null,null,null];(statearr_21485[(0)] = state_machine__13958__auto__);
(statearr_21485[(1)] = (1));
return statearr_21485;
});
var state_machine__13958__auto____1 = (function (state_21471){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_21471);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e21486){if((e21486 instanceof Object))
{var ex__13961__auto__ = e21486;var statearr_21487_21495 = state_21471;(statearr_21487_21495[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21471);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21486;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21496 = state_21471;
state_21471 = G__21496;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_21471){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_21471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto__))
})();var state__14015__auto__ = (function (){var statearr_21488 = f__14014__auto__.call(null);(statearr_21488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto__);
return statearr_21488;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto__))
);
return c__14013__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__14013__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto__){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto__){
return (function (state_21570){var state_val_21571 = (state_21570[(1)]);if((state_val_21571 === (7)))
{var inst_21552 = (state_21570[(2)]);var state_21570__$1 = state_21570;var statearr_21572_21595 = state_21570__$1;(statearr_21572_21595[(2)] = inst_21552);
(statearr_21572_21595[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21571 === (1)))
{var inst_21546 = cljs.core.seq.call(null,coll);var inst_21547 = inst_21546;var state_21570__$1 = (function (){var statearr_21573 = state_21570;(statearr_21573[(7)] = inst_21547);
return statearr_21573;
})();var statearr_21574_21596 = state_21570__$1;(statearr_21574_21596[(2)] = null);
(statearr_21574_21596[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21571 === (4)))
{var inst_21547 = (state_21570[(7)]);var inst_21550 = cljs.core.first.call(null,inst_21547);var state_21570__$1 = state_21570;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21570__$1,(7),ch,inst_21550);
} else
{if((state_val_21571 === (13)))
{var inst_21564 = (state_21570[(2)]);var state_21570__$1 = state_21570;var statearr_21575_21597 = state_21570__$1;(statearr_21575_21597[(2)] = inst_21564);
(statearr_21575_21597[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21571 === (6)))
{var inst_21555 = (state_21570[(2)]);var state_21570__$1 = state_21570;if(cljs.core.truth_(inst_21555))
{var statearr_21576_21598 = state_21570__$1;(statearr_21576_21598[(1)] = (8));
} else
{var statearr_21577_21599 = state_21570__$1;(statearr_21577_21599[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21571 === (3)))
{var inst_21568 = (state_21570[(2)]);var state_21570__$1 = state_21570;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21570__$1,inst_21568);
} else
{if((state_val_21571 === (12)))
{var state_21570__$1 = state_21570;var statearr_21578_21600 = state_21570__$1;(statearr_21578_21600[(2)] = null);
(statearr_21578_21600[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21571 === (2)))
{var inst_21547 = (state_21570[(7)]);var state_21570__$1 = state_21570;if(cljs.core.truth_(inst_21547))
{var statearr_21579_21601 = state_21570__$1;(statearr_21579_21601[(1)] = (4));
} else
{var statearr_21580_21602 = state_21570__$1;(statearr_21580_21602[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21571 === (11)))
{var inst_21561 = cljs.core.async.close_BANG_.call(null,ch);var state_21570__$1 = state_21570;var statearr_21581_21603 = state_21570__$1;(statearr_21581_21603[(2)] = inst_21561);
(statearr_21581_21603[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21571 === (9)))
{var state_21570__$1 = state_21570;if(cljs.core.truth_(close_QMARK_))
{var statearr_21582_21604 = state_21570__$1;(statearr_21582_21604[(1)] = (11));
} else
{var statearr_21583_21605 = state_21570__$1;(statearr_21583_21605[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21571 === (5)))
{var inst_21547 = (state_21570[(7)]);var state_21570__$1 = state_21570;var statearr_21584_21606 = state_21570__$1;(statearr_21584_21606[(2)] = inst_21547);
(statearr_21584_21606[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21571 === (10)))
{var inst_21566 = (state_21570[(2)]);var state_21570__$1 = state_21570;var statearr_21585_21607 = state_21570__$1;(statearr_21585_21607[(2)] = inst_21566);
(statearr_21585_21607[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21571 === (8)))
{var inst_21547 = (state_21570[(7)]);var inst_21557 = cljs.core.next.call(null,inst_21547);var inst_21547__$1 = inst_21557;var state_21570__$1 = (function (){var statearr_21586 = state_21570;(statearr_21586[(7)] = inst_21547__$1);
return statearr_21586;
})();var statearr_21587_21608 = state_21570__$1;(statearr_21587_21608[(2)] = null);
(statearr_21587_21608[(1)] = (2));
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
});})(c__14013__auto__))
;return ((function (switch__13957__auto__,c__14013__auto__){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_21591 = [null,null,null,null,null,null,null,null];(statearr_21591[(0)] = state_machine__13958__auto__);
(statearr_21591[(1)] = (1));
return statearr_21591;
});
var state_machine__13958__auto____1 = (function (state_21570){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_21570);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e21592){if((e21592 instanceof Object))
{var ex__13961__auto__ = e21592;var statearr_21593_21609 = state_21570;(statearr_21593_21609[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21570);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21592;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21610 = state_21570;
state_21570 = G__21610;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_21570){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_21570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto__))
})();var state__14015__auto__ = (function (){var statearr_21594 = f__14014__auto__.call(null);(statearr_21594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto__);
return statearr_21594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto__))
);
return c__14013__auto__;
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
cljs.core.async.Mux = (function (){var obj21612 = {};return obj21612;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__11469__auto__ = _;if(and__11469__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__11469__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__12117__auto__ = (((_ == null))?null:_);return (function (){var or__11481__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12117__auto__)]);if(or__11481__auto__)
{return or__11481__auto__;
} else
{var or__11481__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__11481__auto____$1)
{return or__11481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj21614 = {};return obj21614;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__11469__auto__ = m;if(and__11469__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__11469__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__12117__auto__ = (((m == null))?null:m);return (function (){var or__11481__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12117__auto__)]);if(or__11481__auto__)
{return or__11481__auto__;
} else
{var or__11481__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__11481__auto____$1)
{return or__11481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__11469__auto__ = m;if(and__11469__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__11469__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__12117__auto__ = (((m == null))?null:m);return (function (){var or__11481__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12117__auto__)]);if(or__11481__auto__)
{return or__11481__auto__;
} else
{var or__11481__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__11481__auto____$1)
{return or__11481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__11469__auto__ = m;if(and__11469__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__11469__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__12117__auto__ = (((m == null))?null:m);return (function (){var or__11481__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12117__auto__)]);if(or__11481__auto__)
{return or__11481__auto__;
} else
{var or__11481__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__11481__auto____$1)
{return or__11481__auto____$1;
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
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t21836 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21836 = (function (cs,ch,mult,meta21837){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21837 = meta21837;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21836.cljs$lang$type = true;
cljs.core.async.t21836.cljs$lang$ctorStr = "cljs.core.async/t21836";
cljs.core.async.t21836.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"cljs.core.async/t21836");
});})(cs))
;
cljs.core.async.t21836.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t21836.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t21836.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t21836.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t21836.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21836.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t21836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21838){var self__ = this;
var _21838__$1 = this;return self__.meta21837;
});})(cs))
;
cljs.core.async.t21836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21838,meta21837__$1){var self__ = this;
var _21838__$1 = this;return (new cljs.core.async.t21836(self__.cs,self__.ch,self__.mult,meta21837__$1));
});})(cs))
;
cljs.core.async.__GT_t21836 = ((function (cs){
return (function __GT_t21836(cs__$1,ch__$1,mult__$1,meta21837){return (new cljs.core.async.t21836(cs__$1,ch__$1,mult__$1,meta21837));
});})(cs))
;
}
return (new cljs.core.async.t21836(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__14013__auto___22057 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto___22057,cs,m,dchan,dctr,done){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto___22057,cs,m,dchan,dctr,done){
return (function (state_21969){var state_val_21970 = (state_21969[(1)]);if((state_val_21970 === (7)))
{var inst_21965 = (state_21969[(2)]);var state_21969__$1 = state_21969;var statearr_21971_22058 = state_21969__$1;(statearr_21971_22058[(2)] = inst_21965);
(statearr_21971_22058[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (20)))
{var inst_21870 = (state_21969[(7)]);var inst_21880 = cljs.core.first.call(null,inst_21870);var inst_21881 = cljs.core.nth.call(null,inst_21880,(0),null);var inst_21882 = cljs.core.nth.call(null,inst_21880,(1),null);var state_21969__$1 = (function (){var statearr_21972 = state_21969;(statearr_21972[(8)] = inst_21881);
return statearr_21972;
})();if(cljs.core.truth_(inst_21882))
{var statearr_21973_22059 = state_21969__$1;(statearr_21973_22059[(1)] = (22));
} else
{var statearr_21974_22060 = state_21969__$1;(statearr_21974_22060[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (27)))
{var inst_21910 = (state_21969[(9)]);var inst_21912 = (state_21969[(10)]);var inst_21841 = (state_21969[(11)]);var inst_21917 = (state_21969[(12)]);var inst_21917__$1 = cljs.core._nth.call(null,inst_21910,inst_21912);var inst_21918 = cljs.core.async.put_BANG_.call(null,inst_21917__$1,inst_21841,done);var state_21969__$1 = (function (){var statearr_21975 = state_21969;(statearr_21975[(12)] = inst_21917__$1);
return statearr_21975;
})();if(cljs.core.truth_(inst_21918))
{var statearr_21976_22061 = state_21969__$1;(statearr_21976_22061[(1)] = (30));
} else
{var statearr_21977_22062 = state_21969__$1;(statearr_21977_22062[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (1)))
{var state_21969__$1 = state_21969;var statearr_21978_22063 = state_21969__$1;(statearr_21978_22063[(2)] = null);
(statearr_21978_22063[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (24)))
{var inst_21870 = (state_21969[(7)]);var inst_21887 = (state_21969[(2)]);var inst_21888 = cljs.core.next.call(null,inst_21870);var inst_21850 = inst_21888;var inst_21851 = null;var inst_21852 = (0);var inst_21853 = (0);var state_21969__$1 = (function (){var statearr_21979 = state_21969;(statearr_21979[(13)] = inst_21851);
(statearr_21979[(14)] = inst_21850);
(statearr_21979[(15)] = inst_21853);
(statearr_21979[(16)] = inst_21852);
(statearr_21979[(17)] = inst_21887);
return statearr_21979;
})();var statearr_21980_22064 = state_21969__$1;(statearr_21980_22064[(2)] = null);
(statearr_21980_22064[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (39)))
{var state_21969__$1 = state_21969;var statearr_21984_22065 = state_21969__$1;(statearr_21984_22065[(2)] = null);
(statearr_21984_22065[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (4)))
{var inst_21841 = (state_21969[(11)]);var inst_21841__$1 = (state_21969[(2)]);var inst_21842 = (inst_21841__$1 == null);var state_21969__$1 = (function (){var statearr_21985 = state_21969;(statearr_21985[(11)] = inst_21841__$1);
return statearr_21985;
})();if(cljs.core.truth_(inst_21842))
{var statearr_21986_22066 = state_21969__$1;(statearr_21986_22066[(1)] = (5));
} else
{var statearr_21987_22067 = state_21969__$1;(statearr_21987_22067[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (15)))
{var inst_21851 = (state_21969[(13)]);var inst_21850 = (state_21969[(14)]);var inst_21853 = (state_21969[(15)]);var inst_21852 = (state_21969[(16)]);var inst_21866 = (state_21969[(2)]);var inst_21867 = (inst_21853 + (1));var tmp21981 = inst_21851;var tmp21982 = inst_21850;var tmp21983 = inst_21852;var inst_21850__$1 = tmp21982;var inst_21851__$1 = tmp21981;var inst_21852__$1 = tmp21983;var inst_21853__$1 = inst_21867;var state_21969__$1 = (function (){var statearr_21988 = state_21969;(statearr_21988[(13)] = inst_21851__$1);
(statearr_21988[(18)] = inst_21866);
(statearr_21988[(14)] = inst_21850__$1);
(statearr_21988[(15)] = inst_21853__$1);
(statearr_21988[(16)] = inst_21852__$1);
return statearr_21988;
})();var statearr_21989_22068 = state_21969__$1;(statearr_21989_22068[(2)] = null);
(statearr_21989_22068[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (21)))
{var inst_21891 = (state_21969[(2)]);var state_21969__$1 = state_21969;var statearr_21993_22069 = state_21969__$1;(statearr_21993_22069[(2)] = inst_21891);
(statearr_21993_22069[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (31)))
{var inst_21917 = (state_21969[(12)]);var inst_21921 = done.call(null,null);var inst_21922 = cljs.core.async.untap_STAR_.call(null,m,inst_21917);var state_21969__$1 = (function (){var statearr_21994 = state_21969;(statearr_21994[(19)] = inst_21921);
return statearr_21994;
})();var statearr_21995_22070 = state_21969__$1;(statearr_21995_22070[(2)] = inst_21922);
(statearr_21995_22070[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (32)))
{var inst_21910 = (state_21969[(9)]);var inst_21911 = (state_21969[(20)]);var inst_21912 = (state_21969[(10)]);var inst_21909 = (state_21969[(21)]);var inst_21924 = (state_21969[(2)]);var inst_21925 = (inst_21912 + (1));var tmp21990 = inst_21910;var tmp21991 = inst_21911;var tmp21992 = inst_21909;var inst_21909__$1 = tmp21992;var inst_21910__$1 = tmp21990;var inst_21911__$1 = tmp21991;var inst_21912__$1 = inst_21925;var state_21969__$1 = (function (){var statearr_21996 = state_21969;(statearr_21996[(9)] = inst_21910__$1);
(statearr_21996[(22)] = inst_21924);
(statearr_21996[(20)] = inst_21911__$1);
(statearr_21996[(10)] = inst_21912__$1);
(statearr_21996[(21)] = inst_21909__$1);
return statearr_21996;
})();var statearr_21997_22071 = state_21969__$1;(statearr_21997_22071[(2)] = null);
(statearr_21997_22071[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (40)))
{var inst_21937 = (state_21969[(23)]);var inst_21941 = done.call(null,null);var inst_21942 = cljs.core.async.untap_STAR_.call(null,m,inst_21937);var state_21969__$1 = (function (){var statearr_21998 = state_21969;(statearr_21998[(24)] = inst_21941);
return statearr_21998;
})();var statearr_21999_22072 = state_21969__$1;(statearr_21999_22072[(2)] = inst_21942);
(statearr_21999_22072[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (33)))
{var inst_21928 = (state_21969[(25)]);var inst_21930 = cljs.core.chunked_seq_QMARK_.call(null,inst_21928);var state_21969__$1 = state_21969;if(inst_21930)
{var statearr_22000_22073 = state_21969__$1;(statearr_22000_22073[(1)] = (36));
} else
{var statearr_22001_22074 = state_21969__$1;(statearr_22001_22074[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (13)))
{var inst_21860 = (state_21969[(26)]);var inst_21863 = cljs.core.async.close_BANG_.call(null,inst_21860);var state_21969__$1 = state_21969;var statearr_22002_22075 = state_21969__$1;(statearr_22002_22075[(2)] = inst_21863);
(statearr_22002_22075[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (22)))
{var inst_21881 = (state_21969[(8)]);var inst_21884 = cljs.core.async.close_BANG_.call(null,inst_21881);var state_21969__$1 = state_21969;var statearr_22003_22076 = state_21969__$1;(statearr_22003_22076[(2)] = inst_21884);
(statearr_22003_22076[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (36)))
{var inst_21928 = (state_21969[(25)]);var inst_21932 = cljs.core.chunk_first.call(null,inst_21928);var inst_21933 = cljs.core.chunk_rest.call(null,inst_21928);var inst_21934 = cljs.core.count.call(null,inst_21932);var inst_21909 = inst_21933;var inst_21910 = inst_21932;var inst_21911 = inst_21934;var inst_21912 = (0);var state_21969__$1 = (function (){var statearr_22004 = state_21969;(statearr_22004[(9)] = inst_21910);
(statearr_22004[(20)] = inst_21911);
(statearr_22004[(10)] = inst_21912);
(statearr_22004[(21)] = inst_21909);
return statearr_22004;
})();var statearr_22005_22077 = state_21969__$1;(statearr_22005_22077[(2)] = null);
(statearr_22005_22077[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (41)))
{var inst_21928 = (state_21969[(25)]);var inst_21944 = (state_21969[(2)]);var inst_21945 = cljs.core.next.call(null,inst_21928);var inst_21909 = inst_21945;var inst_21910 = null;var inst_21911 = (0);var inst_21912 = (0);var state_21969__$1 = (function (){var statearr_22006 = state_21969;(statearr_22006[(9)] = inst_21910);
(statearr_22006[(20)] = inst_21911);
(statearr_22006[(10)] = inst_21912);
(statearr_22006[(21)] = inst_21909);
(statearr_22006[(27)] = inst_21944);
return statearr_22006;
})();var statearr_22007_22078 = state_21969__$1;(statearr_22007_22078[(2)] = null);
(statearr_22007_22078[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (43)))
{var state_21969__$1 = state_21969;var statearr_22008_22079 = state_21969__$1;(statearr_22008_22079[(2)] = null);
(statearr_22008_22079[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (29)))
{var inst_21953 = (state_21969[(2)]);var state_21969__$1 = state_21969;var statearr_22009_22080 = state_21969__$1;(statearr_22009_22080[(2)] = inst_21953);
(statearr_22009_22080[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (44)))
{var inst_21962 = (state_21969[(2)]);var state_21969__$1 = (function (){var statearr_22010 = state_21969;(statearr_22010[(28)] = inst_21962);
return statearr_22010;
})();var statearr_22011_22081 = state_21969__$1;(statearr_22011_22081[(2)] = null);
(statearr_22011_22081[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (6)))
{var inst_21901 = (state_21969[(29)]);var inst_21900 = cljs.core.deref.call(null,cs);var inst_21901__$1 = cljs.core.keys.call(null,inst_21900);var inst_21902 = cljs.core.count.call(null,inst_21901__$1);var inst_21903 = cljs.core.reset_BANG_.call(null,dctr,inst_21902);var inst_21908 = cljs.core.seq.call(null,inst_21901__$1);var inst_21909 = inst_21908;var inst_21910 = null;var inst_21911 = (0);var inst_21912 = (0);var state_21969__$1 = (function (){var statearr_22012 = state_21969;(statearr_22012[(9)] = inst_21910);
(statearr_22012[(20)] = inst_21911);
(statearr_22012[(10)] = inst_21912);
(statearr_22012[(21)] = inst_21909);
(statearr_22012[(30)] = inst_21903);
(statearr_22012[(29)] = inst_21901__$1);
return statearr_22012;
})();var statearr_22013_22082 = state_21969__$1;(statearr_22013_22082[(2)] = null);
(statearr_22013_22082[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (28)))
{var inst_21909 = (state_21969[(21)]);var inst_21928 = (state_21969[(25)]);var inst_21928__$1 = cljs.core.seq.call(null,inst_21909);var state_21969__$1 = (function (){var statearr_22014 = state_21969;(statearr_22014[(25)] = inst_21928__$1);
return statearr_22014;
})();if(inst_21928__$1)
{var statearr_22015_22083 = state_21969__$1;(statearr_22015_22083[(1)] = (33));
} else
{var statearr_22016_22084 = state_21969__$1;(statearr_22016_22084[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (25)))
{var inst_21911 = (state_21969[(20)]);var inst_21912 = (state_21969[(10)]);var inst_21914 = (inst_21912 < inst_21911);var inst_21915 = inst_21914;var state_21969__$1 = state_21969;if(cljs.core.truth_(inst_21915))
{var statearr_22017_22085 = state_21969__$1;(statearr_22017_22085[(1)] = (27));
} else
{var statearr_22018_22086 = state_21969__$1;(statearr_22018_22086[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (34)))
{var state_21969__$1 = state_21969;var statearr_22019_22087 = state_21969__$1;(statearr_22019_22087[(2)] = null);
(statearr_22019_22087[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (17)))
{var state_21969__$1 = state_21969;var statearr_22020_22088 = state_21969__$1;(statearr_22020_22088[(2)] = null);
(statearr_22020_22088[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (3)))
{var inst_21967 = (state_21969[(2)]);var state_21969__$1 = state_21969;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21969__$1,inst_21967);
} else
{if((state_val_21970 === (12)))
{var inst_21896 = (state_21969[(2)]);var state_21969__$1 = state_21969;var statearr_22021_22089 = state_21969__$1;(statearr_22021_22089[(2)] = inst_21896);
(statearr_22021_22089[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (2)))
{var state_21969__$1 = state_21969;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21969__$1,(4),ch);
} else
{if((state_val_21970 === (23)))
{var state_21969__$1 = state_21969;var statearr_22022_22090 = state_21969__$1;(statearr_22022_22090[(2)] = null);
(statearr_22022_22090[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (35)))
{var inst_21951 = (state_21969[(2)]);var state_21969__$1 = state_21969;var statearr_22023_22091 = state_21969__$1;(statearr_22023_22091[(2)] = inst_21951);
(statearr_22023_22091[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (19)))
{var inst_21870 = (state_21969[(7)]);var inst_21874 = cljs.core.chunk_first.call(null,inst_21870);var inst_21875 = cljs.core.chunk_rest.call(null,inst_21870);var inst_21876 = cljs.core.count.call(null,inst_21874);var inst_21850 = inst_21875;var inst_21851 = inst_21874;var inst_21852 = inst_21876;var inst_21853 = (0);var state_21969__$1 = (function (){var statearr_22024 = state_21969;(statearr_22024[(13)] = inst_21851);
(statearr_22024[(14)] = inst_21850);
(statearr_22024[(15)] = inst_21853);
(statearr_22024[(16)] = inst_21852);
return statearr_22024;
})();var statearr_22025_22092 = state_21969__$1;(statearr_22025_22092[(2)] = null);
(statearr_22025_22092[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (11)))
{var inst_21850 = (state_21969[(14)]);var inst_21870 = (state_21969[(7)]);var inst_21870__$1 = cljs.core.seq.call(null,inst_21850);var state_21969__$1 = (function (){var statearr_22026 = state_21969;(statearr_22026[(7)] = inst_21870__$1);
return statearr_22026;
})();if(inst_21870__$1)
{var statearr_22027_22093 = state_21969__$1;(statearr_22027_22093[(1)] = (16));
} else
{var statearr_22028_22094 = state_21969__$1;(statearr_22028_22094[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (9)))
{var inst_21898 = (state_21969[(2)]);var state_21969__$1 = state_21969;var statearr_22029_22095 = state_21969__$1;(statearr_22029_22095[(2)] = inst_21898);
(statearr_22029_22095[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (5)))
{var inst_21848 = cljs.core.deref.call(null,cs);var inst_21849 = cljs.core.seq.call(null,inst_21848);var inst_21850 = inst_21849;var inst_21851 = null;var inst_21852 = (0);var inst_21853 = (0);var state_21969__$1 = (function (){var statearr_22030 = state_21969;(statearr_22030[(13)] = inst_21851);
(statearr_22030[(14)] = inst_21850);
(statearr_22030[(15)] = inst_21853);
(statearr_22030[(16)] = inst_21852);
return statearr_22030;
})();var statearr_22031_22096 = state_21969__$1;(statearr_22031_22096[(2)] = null);
(statearr_22031_22096[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (14)))
{var state_21969__$1 = state_21969;var statearr_22032_22097 = state_21969__$1;(statearr_22032_22097[(2)] = null);
(statearr_22032_22097[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (45)))
{var inst_21959 = (state_21969[(2)]);var state_21969__$1 = state_21969;var statearr_22033_22098 = state_21969__$1;(statearr_22033_22098[(2)] = inst_21959);
(statearr_22033_22098[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (26)))
{var inst_21901 = (state_21969[(29)]);var inst_21955 = (state_21969[(2)]);var inst_21956 = cljs.core.seq.call(null,inst_21901);var state_21969__$1 = (function (){var statearr_22034 = state_21969;(statearr_22034[(31)] = inst_21955);
return statearr_22034;
})();if(inst_21956)
{var statearr_22035_22099 = state_21969__$1;(statearr_22035_22099[(1)] = (42));
} else
{var statearr_22036_22100 = state_21969__$1;(statearr_22036_22100[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (16)))
{var inst_21870 = (state_21969[(7)]);var inst_21872 = cljs.core.chunked_seq_QMARK_.call(null,inst_21870);var state_21969__$1 = state_21969;if(inst_21872)
{var statearr_22037_22101 = state_21969__$1;(statearr_22037_22101[(1)] = (19));
} else
{var statearr_22038_22102 = state_21969__$1;(statearr_22038_22102[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (38)))
{var inst_21948 = (state_21969[(2)]);var state_21969__$1 = state_21969;var statearr_22039_22103 = state_21969__$1;(statearr_22039_22103[(2)] = inst_21948);
(statearr_22039_22103[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (30)))
{var state_21969__$1 = state_21969;var statearr_22040_22104 = state_21969__$1;(statearr_22040_22104[(2)] = null);
(statearr_22040_22104[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (10)))
{var inst_21851 = (state_21969[(13)]);var inst_21853 = (state_21969[(15)]);var inst_21859 = cljs.core._nth.call(null,inst_21851,inst_21853);var inst_21860 = cljs.core.nth.call(null,inst_21859,(0),null);var inst_21861 = cljs.core.nth.call(null,inst_21859,(1),null);var state_21969__$1 = (function (){var statearr_22041 = state_21969;(statearr_22041[(26)] = inst_21860);
return statearr_22041;
})();if(cljs.core.truth_(inst_21861))
{var statearr_22042_22105 = state_21969__$1;(statearr_22042_22105[(1)] = (13));
} else
{var statearr_22043_22106 = state_21969__$1;(statearr_22043_22106[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (18)))
{var inst_21894 = (state_21969[(2)]);var state_21969__$1 = state_21969;var statearr_22044_22107 = state_21969__$1;(statearr_22044_22107[(2)] = inst_21894);
(statearr_22044_22107[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (42)))
{var state_21969__$1 = state_21969;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21969__$1,(45),dchan);
} else
{if((state_val_21970 === (37)))
{var inst_21841 = (state_21969[(11)]);var inst_21937 = (state_21969[(23)]);var inst_21928 = (state_21969[(25)]);var inst_21937__$1 = cljs.core.first.call(null,inst_21928);var inst_21938 = cljs.core.async.put_BANG_.call(null,inst_21937__$1,inst_21841,done);var state_21969__$1 = (function (){var statearr_22045 = state_21969;(statearr_22045[(23)] = inst_21937__$1);
return statearr_22045;
})();if(cljs.core.truth_(inst_21938))
{var statearr_22046_22108 = state_21969__$1;(statearr_22046_22108[(1)] = (39));
} else
{var statearr_22047_22109 = state_21969__$1;(statearr_22047_22109[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21970 === (8)))
{var inst_21853 = (state_21969[(15)]);var inst_21852 = (state_21969[(16)]);var inst_21855 = (inst_21853 < inst_21852);var inst_21856 = inst_21855;var state_21969__$1 = state_21969;if(cljs.core.truth_(inst_21856))
{var statearr_22048_22110 = state_21969__$1;(statearr_22048_22110[(1)] = (10));
} else
{var statearr_22049_22111 = state_21969__$1;(statearr_22049_22111[(1)] = (11));
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
});})(c__14013__auto___22057,cs,m,dchan,dctr,done))
;return ((function (switch__13957__auto__,c__14013__auto___22057,cs,m,dchan,dctr,done){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_22053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22053[(0)] = state_machine__13958__auto__);
(statearr_22053[(1)] = (1));
return statearr_22053;
});
var state_machine__13958__auto____1 = (function (state_21969){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_21969);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e22054){if((e22054 instanceof Object))
{var ex__13961__auto__ = e22054;var statearr_22055_22112 = state_21969;(statearr_22055_22112[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21969);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22054;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22113 = state_21969;
state_21969 = G__22113;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_21969){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_21969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto___22057,cs,m,dchan,dctr,done))
})();var state__14015__auto__ = (function (){var statearr_22056 = f__14014__auto__.call(null);(statearr_22056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto___22057);
return statearr_22056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto___22057,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj22115 = {};return obj22115;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__11469__auto__ = m;if(and__11469__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__11469__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__12117__auto__ = (((m == null))?null:m);return (function (){var or__11481__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12117__auto__)]);if(or__11481__auto__)
{return or__11481__auto__;
} else
{var or__11481__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__11481__auto____$1)
{return or__11481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__11469__auto__ = m;if(and__11469__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__11469__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__12117__auto__ = (((m == null))?null:m);return (function (){var or__11481__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12117__auto__)]);if(or__11481__auto__)
{return or__11481__auto__;
} else
{var or__11481__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__11481__auto____$1)
{return or__11481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__11469__auto__ = m;if(and__11469__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__11469__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__12117__auto__ = (((m == null))?null:m);return (function (){var or__11481__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12117__auto__)]);if(or__11481__auto__)
{return or__11481__auto__;
} else
{var or__11481__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__11481__auto____$1)
{return or__11481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__11469__auto__ = m;if(and__11469__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__11469__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__12117__auto__ = (((m == null))?null:m);return (function (){var or__11481__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12117__auto__)]);if(or__11481__auto__)
{return or__11481__auto__;
} else
{var or__11481__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__11481__auto____$1)
{return or__11481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__11469__auto__ = m;if(and__11469__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__11469__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__12117__auto__ = (((m == null))?null:m);return (function (){var or__11481__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12117__auto__)]);if(or__11481__auto__)
{return or__11481__auto__;
} else
{var or__11481__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__11481__auto____$1)
{return or__11481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__22116){var map__22121 = p__22116;var map__22121__$1 = ((cljs.core.seq_QMARK_.call(null,map__22121))?cljs.core.apply.call(null,cljs.core.hash_map,map__22121):map__22121);var opts = map__22121__$1;var statearr_22122_22125 = state;(statearr_22122_22125[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4222__auto__ = cljs.core.async.do_alts.call(null,((function (map__22121,map__22121__$1,opts){
return (function (val){var statearr_22123_22126 = state;(statearr_22123_22126[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22121,map__22121__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4222__auto__))
{var cb = temp__4222__auto__;var statearr_22124_22127 = state;(statearr_22124_22127[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__22116 = null;if (arguments.length > 3) {
  p__22116 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__22116);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__22128){
var state = cljs.core.first(arglist__22128);
arglist__22128 = cljs.core.next(arglist__22128);
var cont_block = cljs.core.first(arglist__22128);
arglist__22128 = cljs.core.next(arglist__22128);
var ports = cljs.core.first(arglist__22128);
var p__22116 = cljs.core.rest(arglist__22128);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__22116);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
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
;var m = (function (){if(typeof cljs.core.async.t22248 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22248 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22249){
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
this.meta22249 = meta22249;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22248.cljs$lang$type = true;
cljs.core.async.t22248.cljs$lang$ctorStr = "cljs.core.async/t22248";
cljs.core.async.t22248.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"cljs.core.async/t22248");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22248.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22248.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22248.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22248.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22248.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22248.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22248.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22248.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22248.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22250){var self__ = this;
var _22250__$1 = this;return self__.meta22249;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22250,meta22249__$1){var self__ = this;
var _22250__$1 = this;return (new cljs.core.async.t22248(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22249__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22248 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22248(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22249){return (new cljs.core.async.t22248(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22249));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22248(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__14013__auto___22367 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto___22367,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto___22367,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22320){var state_val_22321 = (state_22320[(1)]);if((state_val_22321 === (7)))
{var inst_22264 = (state_22320[(7)]);var inst_22269 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22264);var state_22320__$1 = state_22320;var statearr_22322_22368 = state_22320__$1;(statearr_22322_22368[(2)] = inst_22269);
(statearr_22322_22368[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (20)))
{var inst_22279 = (state_22320[(8)]);var state_22320__$1 = state_22320;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22320__$1,(23),out,inst_22279);
} else
{if((state_val_22321 === (1)))
{var inst_22254 = (state_22320[(9)]);var inst_22254__$1 = calc_state.call(null);var inst_22255 = cljs.core.seq_QMARK_.call(null,inst_22254__$1);var state_22320__$1 = (function (){var statearr_22323 = state_22320;(statearr_22323[(9)] = inst_22254__$1);
return statearr_22323;
})();if(inst_22255)
{var statearr_22324_22369 = state_22320__$1;(statearr_22324_22369[(1)] = (2));
} else
{var statearr_22325_22370 = state_22320__$1;(statearr_22325_22370[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (24)))
{var inst_22272 = (state_22320[(10)]);var inst_22264 = inst_22272;var state_22320__$1 = (function (){var statearr_22326 = state_22320;(statearr_22326[(7)] = inst_22264);
return statearr_22326;
})();var statearr_22327_22371 = state_22320__$1;(statearr_22327_22371[(2)] = null);
(statearr_22327_22371[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (4)))
{var inst_22254 = (state_22320[(9)]);var inst_22260 = (state_22320[(2)]);var inst_22261 = cljs.core.get.call(null,inst_22260,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_22262 = cljs.core.get.call(null,inst_22260,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_22263 = cljs.core.get.call(null,inst_22260,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_22264 = inst_22254;var state_22320__$1 = (function (){var statearr_22328 = state_22320;(statearr_22328[(11)] = inst_22261);
(statearr_22328[(7)] = inst_22264);
(statearr_22328[(12)] = inst_22263);
(statearr_22328[(13)] = inst_22262);
return statearr_22328;
})();var statearr_22329_22372 = state_22320__$1;(statearr_22329_22372[(2)] = null);
(statearr_22329_22372[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (15)))
{var state_22320__$1 = state_22320;var statearr_22330_22373 = state_22320__$1;(statearr_22330_22373[(2)] = null);
(statearr_22330_22373[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (21)))
{var inst_22272 = (state_22320[(10)]);var inst_22264 = inst_22272;var state_22320__$1 = (function (){var statearr_22331 = state_22320;(statearr_22331[(7)] = inst_22264);
return statearr_22331;
})();var statearr_22332_22374 = state_22320__$1;(statearr_22332_22374[(2)] = null);
(statearr_22332_22374[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (13)))
{var inst_22316 = (state_22320[(2)]);var state_22320__$1 = state_22320;var statearr_22333_22375 = state_22320__$1;(statearr_22333_22375[(2)] = inst_22316);
(statearr_22333_22375[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (22)))
{var inst_22314 = (state_22320[(2)]);var state_22320__$1 = state_22320;var statearr_22334_22376 = state_22320__$1;(statearr_22334_22376[(2)] = inst_22314);
(statearr_22334_22376[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (6)))
{var inst_22318 = (state_22320[(2)]);var state_22320__$1 = state_22320;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22320__$1,inst_22318);
} else
{if((state_val_22321 === (25)))
{var state_22320__$1 = state_22320;var statearr_22335_22377 = state_22320__$1;(statearr_22335_22377[(2)] = null);
(statearr_22335_22377[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (17)))
{var inst_22294 = (state_22320[(14)]);var state_22320__$1 = state_22320;var statearr_22336_22378 = state_22320__$1;(statearr_22336_22378[(2)] = inst_22294);
(statearr_22336_22378[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (3)))
{var inst_22254 = (state_22320[(9)]);var state_22320__$1 = state_22320;var statearr_22337_22379 = state_22320__$1;(statearr_22337_22379[(2)] = inst_22254);
(statearr_22337_22379[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (12)))
{var inst_22275 = (state_22320[(15)]);var inst_22294 = (state_22320[(14)]);var inst_22280 = (state_22320[(16)]);var inst_22294__$1 = inst_22275.call(null,inst_22280);var state_22320__$1 = (function (){var statearr_22338 = state_22320;(statearr_22338[(14)] = inst_22294__$1);
return statearr_22338;
})();if(cljs.core.truth_(inst_22294__$1))
{var statearr_22339_22380 = state_22320__$1;(statearr_22339_22380[(1)] = (17));
} else
{var statearr_22340_22381 = state_22320__$1;(statearr_22340_22381[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (2)))
{var inst_22254 = (state_22320[(9)]);var inst_22257 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22254);var state_22320__$1 = state_22320;var statearr_22341_22382 = state_22320__$1;(statearr_22341_22382[(2)] = inst_22257);
(statearr_22341_22382[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (23)))
{var inst_22305 = (state_22320[(2)]);var state_22320__$1 = state_22320;if(cljs.core.truth_(inst_22305))
{var statearr_22342_22383 = state_22320__$1;(statearr_22342_22383[(1)] = (24));
} else
{var statearr_22343_22384 = state_22320__$1;(statearr_22343_22384[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (19)))
{var inst_22302 = (state_22320[(2)]);var state_22320__$1 = state_22320;if(cljs.core.truth_(inst_22302))
{var statearr_22344_22385 = state_22320__$1;(statearr_22344_22385[(1)] = (20));
} else
{var statearr_22345_22386 = state_22320__$1;(statearr_22345_22386[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (11)))
{var inst_22279 = (state_22320[(8)]);var inst_22285 = (inst_22279 == null);var state_22320__$1 = state_22320;if(cljs.core.truth_(inst_22285))
{var statearr_22346_22387 = state_22320__$1;(statearr_22346_22387[(1)] = (14));
} else
{var statearr_22347_22388 = state_22320__$1;(statearr_22347_22388[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (9)))
{var inst_22272 = (state_22320[(10)]);var inst_22272__$1 = (state_22320[(2)]);var inst_22273 = cljs.core.get.call(null,inst_22272__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_22274 = cljs.core.get.call(null,inst_22272__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_22275 = cljs.core.get.call(null,inst_22272__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_22320__$1 = (function (){var statearr_22348 = state_22320;(statearr_22348[(17)] = inst_22274);
(statearr_22348[(15)] = inst_22275);
(statearr_22348[(10)] = inst_22272__$1);
return statearr_22348;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_22320__$1,(10),inst_22273);
} else
{if((state_val_22321 === (5)))
{var inst_22264 = (state_22320[(7)]);var inst_22267 = cljs.core.seq_QMARK_.call(null,inst_22264);var state_22320__$1 = state_22320;if(inst_22267)
{var statearr_22349_22389 = state_22320__$1;(statearr_22349_22389[(1)] = (7));
} else
{var statearr_22350_22390 = state_22320__$1;(statearr_22350_22390[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (14)))
{var inst_22280 = (state_22320[(16)]);var inst_22287 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22280);var state_22320__$1 = state_22320;var statearr_22351_22391 = state_22320__$1;(statearr_22351_22391[(2)] = inst_22287);
(statearr_22351_22391[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (26)))
{var inst_22310 = (state_22320[(2)]);var state_22320__$1 = state_22320;var statearr_22352_22392 = state_22320__$1;(statearr_22352_22392[(2)] = inst_22310);
(statearr_22352_22392[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (16)))
{var inst_22290 = (state_22320[(2)]);var inst_22291 = calc_state.call(null);var inst_22264 = inst_22291;var state_22320__$1 = (function (){var statearr_22353 = state_22320;(statearr_22353[(7)] = inst_22264);
(statearr_22353[(18)] = inst_22290);
return statearr_22353;
})();var statearr_22354_22393 = state_22320__$1;(statearr_22354_22393[(2)] = null);
(statearr_22354_22393[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (10)))
{var inst_22279 = (state_22320[(8)]);var inst_22280 = (state_22320[(16)]);var inst_22278 = (state_22320[(2)]);var inst_22279__$1 = cljs.core.nth.call(null,inst_22278,(0),null);var inst_22280__$1 = cljs.core.nth.call(null,inst_22278,(1),null);var inst_22281 = (inst_22279__$1 == null);var inst_22282 = cljs.core._EQ_.call(null,inst_22280__$1,change);var inst_22283 = (inst_22281) || (inst_22282);var state_22320__$1 = (function (){var statearr_22355 = state_22320;(statearr_22355[(8)] = inst_22279__$1);
(statearr_22355[(16)] = inst_22280__$1);
return statearr_22355;
})();if(cljs.core.truth_(inst_22283))
{var statearr_22356_22394 = state_22320__$1;(statearr_22356_22394[(1)] = (11));
} else
{var statearr_22357_22395 = state_22320__$1;(statearr_22357_22395[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (18)))
{var inst_22274 = (state_22320[(17)]);var inst_22275 = (state_22320[(15)]);var inst_22280 = (state_22320[(16)]);var inst_22297 = cljs.core.empty_QMARK_.call(null,inst_22275);var inst_22298 = inst_22274.call(null,inst_22280);var inst_22299 = cljs.core.not.call(null,inst_22298);var inst_22300 = (inst_22297) && (inst_22299);var state_22320__$1 = state_22320;var statearr_22358_22396 = state_22320__$1;(statearr_22358_22396[(2)] = inst_22300);
(statearr_22358_22396[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (8)))
{var inst_22264 = (state_22320[(7)]);var state_22320__$1 = state_22320;var statearr_22359_22397 = state_22320__$1;(statearr_22359_22397[(2)] = inst_22264);
(statearr_22359_22397[(1)] = (9));
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
});})(c__14013__auto___22367,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__13957__auto__,c__14013__auto___22367,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_22363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22363[(0)] = state_machine__13958__auto__);
(statearr_22363[(1)] = (1));
return statearr_22363;
});
var state_machine__13958__auto____1 = (function (state_22320){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_22320);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e22364){if((e22364 instanceof Object))
{var ex__13961__auto__ = e22364;var statearr_22365_22398 = state_22320;(statearr_22365_22398[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22320);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22364;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22399 = state_22320;
state_22320 = G__22399;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_22320){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_22320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto___22367,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__14015__auto__ = (function (){var statearr_22366 = f__14014__auto__.call(null);(statearr_22366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto___22367);
return statearr_22366;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto___22367,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj22401 = {};return obj22401;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__11469__auto__ = p;if(and__11469__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__11469__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__12117__auto__ = (((p == null))?null:p);return (function (){var or__11481__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12117__auto__)]);if(or__11481__auto__)
{return or__11481__auto__;
} else
{var or__11481__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__11481__auto____$1)
{return or__11481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__11469__auto__ = p;if(and__11469__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__11469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__12117__auto__ = (((p == null))?null:p);return (function (){var or__11481__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12117__auto__)]);if(or__11481__auto__)
{return or__11481__auto__;
} else
{var or__11481__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__11481__auto____$1)
{return or__11481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__11469__auto__ = p;if(and__11469__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__11469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__12117__auto__ = (((p == null))?null:p);return (function (){var or__11481__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12117__auto__)]);if(or__11481__auto__)
{return or__11481__auto__;
} else
{var or__11481__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11481__auto____$1)
{return or__11481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__11469__auto__ = p;if(and__11469__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__11469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__12117__auto__ = (((p == null))?null:p);return (function (){var or__11481__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12117__auto__)]);if(or__11481__auto__)
{return or__11481__auto__;
} else
{var or__11481__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11481__auto____$1)
{return or__11481__auto____$1;
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
return (function (topic){var or__11481__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__11481__auto__))
{return or__11481__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11481__auto__,mults){
return (function (p1__22402_SHARP_){if(cljs.core.truth_(p1__22402_SHARP_.call(null,topic)))
{return p1__22402_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__22402_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11481__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22525 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22525 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22526){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22526 = meta22526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22525.cljs$lang$type = true;
cljs.core.async.t22525.cljs$lang$ctorStr = "cljs.core.async/t22525";
cljs.core.async.t22525.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"cljs.core.async/t22525");
});})(mults,ensure_mult))
;
cljs.core.async.t22525.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22525.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22525.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4222__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4222__auto__))
{var m = temp__4222__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22525.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t22525.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22525.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22525.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22527){var self__ = this;
var _22527__$1 = this;return self__.meta22526;
});})(mults,ensure_mult))
;
cljs.core.async.t22525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22527,meta22526__$1){var self__ = this;
var _22527__$1 = this;return (new cljs.core.async.t22525(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22526__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22525 = ((function (mults,ensure_mult){
return (function __GT_t22525(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22526){return (new cljs.core.async.t22525(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22526));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22525(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__14013__auto___22647 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto___22647,mults,ensure_mult,p){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto___22647,mults,ensure_mult,p){
return (function (state_22599){var state_val_22600 = (state_22599[(1)]);if((state_val_22600 === (7)))
{var inst_22595 = (state_22599[(2)]);var state_22599__$1 = state_22599;var statearr_22601_22648 = state_22599__$1;(statearr_22601_22648[(2)] = inst_22595);
(statearr_22601_22648[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (20)))
{var state_22599__$1 = state_22599;var statearr_22602_22649 = state_22599__$1;(statearr_22602_22649[(2)] = null);
(statearr_22602_22649[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (1)))
{var state_22599__$1 = state_22599;var statearr_22603_22650 = state_22599__$1;(statearr_22603_22650[(2)] = null);
(statearr_22603_22650[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (24)))
{var inst_22578 = (state_22599[(7)]);var inst_22587 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22578);var state_22599__$1 = state_22599;var statearr_22604_22651 = state_22599__$1;(statearr_22604_22651[(2)] = inst_22587);
(statearr_22604_22651[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (4)))
{var inst_22530 = (state_22599[(8)]);var inst_22530__$1 = (state_22599[(2)]);var inst_22531 = (inst_22530__$1 == null);var state_22599__$1 = (function (){var statearr_22605 = state_22599;(statearr_22605[(8)] = inst_22530__$1);
return statearr_22605;
})();if(cljs.core.truth_(inst_22531))
{var statearr_22606_22652 = state_22599__$1;(statearr_22606_22652[(1)] = (5));
} else
{var statearr_22607_22653 = state_22599__$1;(statearr_22607_22653[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (15)))
{var inst_22572 = (state_22599[(2)]);var state_22599__$1 = state_22599;var statearr_22608_22654 = state_22599__$1;(statearr_22608_22654[(2)] = inst_22572);
(statearr_22608_22654[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (21)))
{var inst_22592 = (state_22599[(2)]);var state_22599__$1 = (function (){var statearr_22609 = state_22599;(statearr_22609[(9)] = inst_22592);
return statearr_22609;
})();var statearr_22610_22655 = state_22599__$1;(statearr_22610_22655[(2)] = null);
(statearr_22610_22655[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (13)))
{var inst_22554 = (state_22599[(10)]);var inst_22556 = cljs.core.chunked_seq_QMARK_.call(null,inst_22554);var state_22599__$1 = state_22599;if(inst_22556)
{var statearr_22611_22656 = state_22599__$1;(statearr_22611_22656[(1)] = (16));
} else
{var statearr_22612_22657 = state_22599__$1;(statearr_22612_22657[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (22)))
{var inst_22584 = (state_22599[(2)]);var state_22599__$1 = state_22599;if(cljs.core.truth_(inst_22584))
{var statearr_22613_22658 = state_22599__$1;(statearr_22613_22658[(1)] = (23));
} else
{var statearr_22614_22659 = state_22599__$1;(statearr_22614_22659[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (6)))
{var inst_22578 = (state_22599[(7)]);var inst_22580 = (state_22599[(11)]);var inst_22530 = (state_22599[(8)]);var inst_22578__$1 = topic_fn.call(null,inst_22530);var inst_22579 = cljs.core.deref.call(null,mults);var inst_22580__$1 = cljs.core.get.call(null,inst_22579,inst_22578__$1);var state_22599__$1 = (function (){var statearr_22615 = state_22599;(statearr_22615[(7)] = inst_22578__$1);
(statearr_22615[(11)] = inst_22580__$1);
return statearr_22615;
})();if(cljs.core.truth_(inst_22580__$1))
{var statearr_22616_22660 = state_22599__$1;(statearr_22616_22660[(1)] = (19));
} else
{var statearr_22617_22661 = state_22599__$1;(statearr_22617_22661[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (25)))
{var inst_22589 = (state_22599[(2)]);var state_22599__$1 = state_22599;var statearr_22618_22662 = state_22599__$1;(statearr_22618_22662[(2)] = inst_22589);
(statearr_22618_22662[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (17)))
{var inst_22554 = (state_22599[(10)]);var inst_22563 = cljs.core.first.call(null,inst_22554);var inst_22564 = cljs.core.async.muxch_STAR_.call(null,inst_22563);var inst_22565 = cljs.core.async.close_BANG_.call(null,inst_22564);var inst_22566 = cljs.core.next.call(null,inst_22554);var inst_22540 = inst_22566;var inst_22541 = null;var inst_22542 = (0);var inst_22543 = (0);var state_22599__$1 = (function (){var statearr_22619 = state_22599;(statearr_22619[(12)] = inst_22565);
(statearr_22619[(13)] = inst_22542);
(statearr_22619[(14)] = inst_22543);
(statearr_22619[(15)] = inst_22541);
(statearr_22619[(16)] = inst_22540);
return statearr_22619;
})();var statearr_22620_22663 = state_22599__$1;(statearr_22620_22663[(2)] = null);
(statearr_22620_22663[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (3)))
{var inst_22597 = (state_22599[(2)]);var state_22599__$1 = state_22599;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22599__$1,inst_22597);
} else
{if((state_val_22600 === (12)))
{var inst_22574 = (state_22599[(2)]);var state_22599__$1 = state_22599;var statearr_22621_22664 = state_22599__$1;(statearr_22621_22664[(2)] = inst_22574);
(statearr_22621_22664[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (2)))
{var state_22599__$1 = state_22599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22599__$1,(4),ch);
} else
{if((state_val_22600 === (23)))
{var state_22599__$1 = state_22599;var statearr_22622_22665 = state_22599__$1;(statearr_22622_22665[(2)] = null);
(statearr_22622_22665[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (19)))
{var inst_22580 = (state_22599[(11)]);var inst_22530 = (state_22599[(8)]);var inst_22582 = cljs.core.async.muxch_STAR_.call(null,inst_22580);var state_22599__$1 = state_22599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22599__$1,(22),inst_22582,inst_22530);
} else
{if((state_val_22600 === (11)))
{var inst_22540 = (state_22599[(16)]);var inst_22554 = (state_22599[(10)]);var inst_22554__$1 = cljs.core.seq.call(null,inst_22540);var state_22599__$1 = (function (){var statearr_22623 = state_22599;(statearr_22623[(10)] = inst_22554__$1);
return statearr_22623;
})();if(inst_22554__$1)
{var statearr_22624_22666 = state_22599__$1;(statearr_22624_22666[(1)] = (13));
} else
{var statearr_22625_22667 = state_22599__$1;(statearr_22625_22667[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (9)))
{var inst_22576 = (state_22599[(2)]);var state_22599__$1 = state_22599;var statearr_22626_22668 = state_22599__$1;(statearr_22626_22668[(2)] = inst_22576);
(statearr_22626_22668[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (5)))
{var inst_22537 = cljs.core.deref.call(null,mults);var inst_22538 = cljs.core.vals.call(null,inst_22537);var inst_22539 = cljs.core.seq.call(null,inst_22538);var inst_22540 = inst_22539;var inst_22541 = null;var inst_22542 = (0);var inst_22543 = (0);var state_22599__$1 = (function (){var statearr_22627 = state_22599;(statearr_22627[(13)] = inst_22542);
(statearr_22627[(14)] = inst_22543);
(statearr_22627[(15)] = inst_22541);
(statearr_22627[(16)] = inst_22540);
return statearr_22627;
})();var statearr_22628_22669 = state_22599__$1;(statearr_22628_22669[(2)] = null);
(statearr_22628_22669[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (14)))
{var state_22599__$1 = state_22599;var statearr_22632_22670 = state_22599__$1;(statearr_22632_22670[(2)] = null);
(statearr_22632_22670[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (16)))
{var inst_22554 = (state_22599[(10)]);var inst_22558 = cljs.core.chunk_first.call(null,inst_22554);var inst_22559 = cljs.core.chunk_rest.call(null,inst_22554);var inst_22560 = cljs.core.count.call(null,inst_22558);var inst_22540 = inst_22559;var inst_22541 = inst_22558;var inst_22542 = inst_22560;var inst_22543 = (0);var state_22599__$1 = (function (){var statearr_22633 = state_22599;(statearr_22633[(13)] = inst_22542);
(statearr_22633[(14)] = inst_22543);
(statearr_22633[(15)] = inst_22541);
(statearr_22633[(16)] = inst_22540);
return statearr_22633;
})();var statearr_22634_22671 = state_22599__$1;(statearr_22634_22671[(2)] = null);
(statearr_22634_22671[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (10)))
{var inst_22542 = (state_22599[(13)]);var inst_22543 = (state_22599[(14)]);var inst_22541 = (state_22599[(15)]);var inst_22540 = (state_22599[(16)]);var inst_22548 = cljs.core._nth.call(null,inst_22541,inst_22543);var inst_22549 = cljs.core.async.muxch_STAR_.call(null,inst_22548);var inst_22550 = cljs.core.async.close_BANG_.call(null,inst_22549);var inst_22551 = (inst_22543 + (1));var tmp22629 = inst_22542;var tmp22630 = inst_22541;var tmp22631 = inst_22540;var inst_22540__$1 = tmp22631;var inst_22541__$1 = tmp22630;var inst_22542__$1 = tmp22629;var inst_22543__$1 = inst_22551;var state_22599__$1 = (function (){var statearr_22635 = state_22599;(statearr_22635[(13)] = inst_22542__$1);
(statearr_22635[(14)] = inst_22543__$1);
(statearr_22635[(17)] = inst_22550);
(statearr_22635[(15)] = inst_22541__$1);
(statearr_22635[(16)] = inst_22540__$1);
return statearr_22635;
})();var statearr_22636_22672 = state_22599__$1;(statearr_22636_22672[(2)] = null);
(statearr_22636_22672[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (18)))
{var inst_22569 = (state_22599[(2)]);var state_22599__$1 = state_22599;var statearr_22637_22673 = state_22599__$1;(statearr_22637_22673[(2)] = inst_22569);
(statearr_22637_22673[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22600 === (8)))
{var inst_22542 = (state_22599[(13)]);var inst_22543 = (state_22599[(14)]);var inst_22545 = (inst_22543 < inst_22542);var inst_22546 = inst_22545;var state_22599__$1 = state_22599;if(cljs.core.truth_(inst_22546))
{var statearr_22638_22674 = state_22599__$1;(statearr_22638_22674[(1)] = (10));
} else
{var statearr_22639_22675 = state_22599__$1;(statearr_22639_22675[(1)] = (11));
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
});})(c__14013__auto___22647,mults,ensure_mult,p))
;return ((function (switch__13957__auto__,c__14013__auto___22647,mults,ensure_mult,p){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_22643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22643[(0)] = state_machine__13958__auto__);
(statearr_22643[(1)] = (1));
return statearr_22643;
});
var state_machine__13958__auto____1 = (function (state_22599){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_22599);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e22644){if((e22644 instanceof Object))
{var ex__13961__auto__ = e22644;var statearr_22645_22676 = state_22599;(statearr_22645_22676[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22599);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22644;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22677 = state_22599;
state_22599 = G__22677;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_22599){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_22599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto___22647,mults,ensure_mult,p))
})();var state__14015__auto__ = (function (){var statearr_22646 = f__14014__auto__.call(null);(statearr_22646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto___22647);
return statearr_22646;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto___22647,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__14013__auto___22814 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto___22814,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto___22814,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22784){var state_val_22785 = (state_22784[(1)]);if((state_val_22785 === (7)))
{var state_22784__$1 = state_22784;var statearr_22786_22815 = state_22784__$1;(statearr_22786_22815[(2)] = null);
(statearr_22786_22815[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22785 === (1)))
{var state_22784__$1 = state_22784;var statearr_22787_22816 = state_22784__$1;(statearr_22787_22816[(2)] = null);
(statearr_22787_22816[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22785 === (4)))
{var inst_22748 = (state_22784[(7)]);var inst_22750 = (inst_22748 < cnt);var state_22784__$1 = state_22784;if(cljs.core.truth_(inst_22750))
{var statearr_22788_22817 = state_22784__$1;(statearr_22788_22817[(1)] = (6));
} else
{var statearr_22789_22818 = state_22784__$1;(statearr_22789_22818[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22785 === (15)))
{var inst_22780 = (state_22784[(2)]);var state_22784__$1 = state_22784;var statearr_22790_22819 = state_22784__$1;(statearr_22790_22819[(2)] = inst_22780);
(statearr_22790_22819[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22785 === (13)))
{var inst_22773 = cljs.core.async.close_BANG_.call(null,out);var state_22784__$1 = state_22784;var statearr_22791_22820 = state_22784__$1;(statearr_22791_22820[(2)] = inst_22773);
(statearr_22791_22820[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22785 === (6)))
{var state_22784__$1 = state_22784;var statearr_22792_22821 = state_22784__$1;(statearr_22792_22821[(2)] = null);
(statearr_22792_22821[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22785 === (3)))
{var inst_22782 = (state_22784[(2)]);var state_22784__$1 = state_22784;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22784__$1,inst_22782);
} else
{if((state_val_22785 === (12)))
{var inst_22770 = (state_22784[(8)]);var inst_22770__$1 = (state_22784[(2)]);var inst_22771 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22770__$1);var state_22784__$1 = (function (){var statearr_22793 = state_22784;(statearr_22793[(8)] = inst_22770__$1);
return statearr_22793;
})();if(cljs.core.truth_(inst_22771))
{var statearr_22794_22822 = state_22784__$1;(statearr_22794_22822[(1)] = (13));
} else
{var statearr_22795_22823 = state_22784__$1;(statearr_22795_22823[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22785 === (2)))
{var inst_22747 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_22748 = (0);var state_22784__$1 = (function (){var statearr_22796 = state_22784;(statearr_22796[(9)] = inst_22747);
(statearr_22796[(7)] = inst_22748);
return statearr_22796;
})();var statearr_22797_22824 = state_22784__$1;(statearr_22797_22824[(2)] = null);
(statearr_22797_22824[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22785 === (11)))
{var inst_22748 = (state_22784[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22784,(10),Object,null,(9));var inst_22757 = chs__$1.call(null,inst_22748);var inst_22758 = done.call(null,inst_22748);var inst_22759 = cljs.core.async.take_BANG_.call(null,inst_22757,inst_22758);var state_22784__$1 = state_22784;var statearr_22798_22825 = state_22784__$1;(statearr_22798_22825[(2)] = inst_22759);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22784__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22785 === (9)))
{var inst_22748 = (state_22784[(7)]);var inst_22761 = (state_22784[(2)]);var inst_22762 = (inst_22748 + (1));var inst_22748__$1 = inst_22762;var state_22784__$1 = (function (){var statearr_22799 = state_22784;(statearr_22799[(10)] = inst_22761);
(statearr_22799[(7)] = inst_22748__$1);
return statearr_22799;
})();var statearr_22800_22826 = state_22784__$1;(statearr_22800_22826[(2)] = null);
(statearr_22800_22826[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22785 === (5)))
{var inst_22768 = (state_22784[(2)]);var state_22784__$1 = (function (){var statearr_22801 = state_22784;(statearr_22801[(11)] = inst_22768);
return statearr_22801;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22784__$1,(12),dchan);
} else
{if((state_val_22785 === (14)))
{var inst_22770 = (state_22784[(8)]);var inst_22775 = cljs.core.apply.call(null,f,inst_22770);var state_22784__$1 = state_22784;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22784__$1,(16),out,inst_22775);
} else
{if((state_val_22785 === (16)))
{var inst_22777 = (state_22784[(2)]);var state_22784__$1 = (function (){var statearr_22802 = state_22784;(statearr_22802[(12)] = inst_22777);
return statearr_22802;
})();var statearr_22803_22827 = state_22784__$1;(statearr_22803_22827[(2)] = null);
(statearr_22803_22827[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22785 === (10)))
{var inst_22752 = (state_22784[(2)]);var inst_22753 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_22784__$1 = (function (){var statearr_22804 = state_22784;(statearr_22804[(13)] = inst_22752);
return statearr_22804;
})();var statearr_22805_22828 = state_22784__$1;(statearr_22805_22828[(2)] = inst_22753);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22784__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22785 === (8)))
{var inst_22766 = (state_22784[(2)]);var state_22784__$1 = state_22784;var statearr_22806_22829 = state_22784__$1;(statearr_22806_22829[(2)] = inst_22766);
(statearr_22806_22829[(1)] = (5));
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
});})(c__14013__auto___22814,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__13957__auto__,c__14013__auto___22814,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_22810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22810[(0)] = state_machine__13958__auto__);
(statearr_22810[(1)] = (1));
return statearr_22810;
});
var state_machine__13958__auto____1 = (function (state_22784){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_22784);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e22811){if((e22811 instanceof Object))
{var ex__13961__auto__ = e22811;var statearr_22812_22830 = state_22784;(statearr_22812_22830[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22784);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22811;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22831 = state_22784;
state_22784 = G__22831;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_22784){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_22784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto___22814,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__14015__auto__ = (function (){var statearr_22813 = f__14014__auto__.call(null);(statearr_22813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto___22814);
return statearr_22813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto___22814,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14013__auto___22939 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto___22939,out){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto___22939,out){
return (function (state_22915){var state_val_22916 = (state_22915[(1)]);if((state_val_22916 === (7)))
{var inst_22895 = (state_22915[(7)]);var inst_22894 = (state_22915[(8)]);var inst_22894__$1 = (state_22915[(2)]);var inst_22895__$1 = cljs.core.nth.call(null,inst_22894__$1,(0),null);var inst_22896 = cljs.core.nth.call(null,inst_22894__$1,(1),null);var inst_22897 = (inst_22895__$1 == null);var state_22915__$1 = (function (){var statearr_22917 = state_22915;(statearr_22917[(9)] = inst_22896);
(statearr_22917[(7)] = inst_22895__$1);
(statearr_22917[(8)] = inst_22894__$1);
return statearr_22917;
})();if(cljs.core.truth_(inst_22897))
{var statearr_22918_22940 = state_22915__$1;(statearr_22918_22940[(1)] = (8));
} else
{var statearr_22919_22941 = state_22915__$1;(statearr_22919_22941[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22916 === (1)))
{var inst_22886 = cljs.core.vec.call(null,chs);var inst_22887 = inst_22886;var state_22915__$1 = (function (){var statearr_22920 = state_22915;(statearr_22920[(10)] = inst_22887);
return statearr_22920;
})();var statearr_22921_22942 = state_22915__$1;(statearr_22921_22942[(2)] = null);
(statearr_22921_22942[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22916 === (4)))
{var inst_22887 = (state_22915[(10)]);var state_22915__$1 = state_22915;return cljs.core.async.ioc_alts_BANG_.call(null,state_22915__$1,(7),inst_22887);
} else
{if((state_val_22916 === (6)))
{var inst_22911 = (state_22915[(2)]);var state_22915__$1 = state_22915;var statearr_22922_22943 = state_22915__$1;(statearr_22922_22943[(2)] = inst_22911);
(statearr_22922_22943[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22916 === (3)))
{var inst_22913 = (state_22915[(2)]);var state_22915__$1 = state_22915;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22915__$1,inst_22913);
} else
{if((state_val_22916 === (2)))
{var inst_22887 = (state_22915[(10)]);var inst_22889 = cljs.core.count.call(null,inst_22887);var inst_22890 = (inst_22889 > (0));var state_22915__$1 = state_22915;if(cljs.core.truth_(inst_22890))
{var statearr_22924_22944 = state_22915__$1;(statearr_22924_22944[(1)] = (4));
} else
{var statearr_22925_22945 = state_22915__$1;(statearr_22925_22945[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22916 === (11)))
{var inst_22887 = (state_22915[(10)]);var inst_22904 = (state_22915[(2)]);var tmp22923 = inst_22887;var inst_22887__$1 = tmp22923;var state_22915__$1 = (function (){var statearr_22926 = state_22915;(statearr_22926[(11)] = inst_22904);
(statearr_22926[(10)] = inst_22887__$1);
return statearr_22926;
})();var statearr_22927_22946 = state_22915__$1;(statearr_22927_22946[(2)] = null);
(statearr_22927_22946[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22916 === (9)))
{var inst_22895 = (state_22915[(7)]);var state_22915__$1 = state_22915;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22915__$1,(11),out,inst_22895);
} else
{if((state_val_22916 === (5)))
{var inst_22909 = cljs.core.async.close_BANG_.call(null,out);var state_22915__$1 = state_22915;var statearr_22928_22947 = state_22915__$1;(statearr_22928_22947[(2)] = inst_22909);
(statearr_22928_22947[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22916 === (10)))
{var inst_22907 = (state_22915[(2)]);var state_22915__$1 = state_22915;var statearr_22929_22948 = state_22915__$1;(statearr_22929_22948[(2)] = inst_22907);
(statearr_22929_22948[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22916 === (8)))
{var inst_22896 = (state_22915[(9)]);var inst_22895 = (state_22915[(7)]);var inst_22894 = (state_22915[(8)]);var inst_22887 = (state_22915[(10)]);var inst_22899 = (function (){var c = inst_22896;var v = inst_22895;var vec__22892 = inst_22894;var cs = inst_22887;return ((function (c,v,vec__22892,cs,inst_22896,inst_22895,inst_22894,inst_22887,state_val_22916,c__14013__auto___22939,out){
return (function (p1__22832_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__22832_SHARP_);
});
;})(c,v,vec__22892,cs,inst_22896,inst_22895,inst_22894,inst_22887,state_val_22916,c__14013__auto___22939,out))
})();var inst_22900 = cljs.core.filterv.call(null,inst_22899,inst_22887);var inst_22887__$1 = inst_22900;var state_22915__$1 = (function (){var statearr_22930 = state_22915;(statearr_22930[(10)] = inst_22887__$1);
return statearr_22930;
})();var statearr_22931_22949 = state_22915__$1;(statearr_22931_22949[(2)] = null);
(statearr_22931_22949[(1)] = (2));
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
});})(c__14013__auto___22939,out))
;return ((function (switch__13957__auto__,c__14013__auto___22939,out){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_22935 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22935[(0)] = state_machine__13958__auto__);
(statearr_22935[(1)] = (1));
return statearr_22935;
});
var state_machine__13958__auto____1 = (function (state_22915){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_22915);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e22936){if((e22936 instanceof Object))
{var ex__13961__auto__ = e22936;var statearr_22937_22950 = state_22915;(statearr_22937_22950[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22915);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22936;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22951 = state_22915;
state_22915 = G__22951;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_22915){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_22915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto___22939,out))
})();var state__14015__auto__ = (function (){var statearr_22938 = f__14014__auto__.call(null);(statearr_22938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto___22939);
return statearr_22938;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto___22939,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14013__auto___23044 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto___23044,out){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto___23044,out){
return (function (state_23021){var state_val_23022 = (state_23021[(1)]);if((state_val_23022 === (7)))
{var inst_23003 = (state_23021[(7)]);var inst_23003__$1 = (state_23021[(2)]);var inst_23004 = (inst_23003__$1 == null);var inst_23005 = cljs.core.not.call(null,inst_23004);var state_23021__$1 = (function (){var statearr_23023 = state_23021;(statearr_23023[(7)] = inst_23003__$1);
return statearr_23023;
})();if(inst_23005)
{var statearr_23024_23045 = state_23021__$1;(statearr_23024_23045[(1)] = (8));
} else
{var statearr_23025_23046 = state_23021__$1;(statearr_23025_23046[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23022 === (1)))
{var inst_22998 = (0);var state_23021__$1 = (function (){var statearr_23026 = state_23021;(statearr_23026[(8)] = inst_22998);
return statearr_23026;
})();var statearr_23027_23047 = state_23021__$1;(statearr_23027_23047[(2)] = null);
(statearr_23027_23047[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23022 === (4)))
{var state_23021__$1 = state_23021;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23021__$1,(7),ch);
} else
{if((state_val_23022 === (6)))
{var inst_23016 = (state_23021[(2)]);var state_23021__$1 = state_23021;var statearr_23028_23048 = state_23021__$1;(statearr_23028_23048[(2)] = inst_23016);
(statearr_23028_23048[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23022 === (3)))
{var inst_23018 = (state_23021[(2)]);var inst_23019 = cljs.core.async.close_BANG_.call(null,out);var state_23021__$1 = (function (){var statearr_23029 = state_23021;(statearr_23029[(9)] = inst_23018);
return statearr_23029;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23021__$1,inst_23019);
} else
{if((state_val_23022 === (2)))
{var inst_22998 = (state_23021[(8)]);var inst_23000 = (inst_22998 < n);var state_23021__$1 = state_23021;if(cljs.core.truth_(inst_23000))
{var statearr_23030_23049 = state_23021__$1;(statearr_23030_23049[(1)] = (4));
} else
{var statearr_23031_23050 = state_23021__$1;(statearr_23031_23050[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23022 === (11)))
{var inst_22998 = (state_23021[(8)]);var inst_23008 = (state_23021[(2)]);var inst_23009 = (inst_22998 + (1));var inst_22998__$1 = inst_23009;var state_23021__$1 = (function (){var statearr_23032 = state_23021;(statearr_23032[(10)] = inst_23008);
(statearr_23032[(8)] = inst_22998__$1);
return statearr_23032;
})();var statearr_23033_23051 = state_23021__$1;(statearr_23033_23051[(2)] = null);
(statearr_23033_23051[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23022 === (9)))
{var state_23021__$1 = state_23021;var statearr_23034_23052 = state_23021__$1;(statearr_23034_23052[(2)] = null);
(statearr_23034_23052[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23022 === (5)))
{var state_23021__$1 = state_23021;var statearr_23035_23053 = state_23021__$1;(statearr_23035_23053[(2)] = null);
(statearr_23035_23053[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23022 === (10)))
{var inst_23013 = (state_23021[(2)]);var state_23021__$1 = state_23021;var statearr_23036_23054 = state_23021__$1;(statearr_23036_23054[(2)] = inst_23013);
(statearr_23036_23054[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23022 === (8)))
{var inst_23003 = (state_23021[(7)]);var state_23021__$1 = state_23021;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23021__$1,(11),out,inst_23003);
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
});})(c__14013__auto___23044,out))
;return ((function (switch__13957__auto__,c__14013__auto___23044,out){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_23040 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23040[(0)] = state_machine__13958__auto__);
(statearr_23040[(1)] = (1));
return statearr_23040;
});
var state_machine__13958__auto____1 = (function (state_23021){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_23021);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e23041){if((e23041 instanceof Object))
{var ex__13961__auto__ = e23041;var statearr_23042_23055 = state_23021;(statearr_23042_23055[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23021);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23041;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23056 = state_23021;
state_23021 = G__23056;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_23021){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_23021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto___23044,out))
})();var state__14015__auto__ = (function (){var statearr_23043 = f__14014__auto__.call(null);(statearr_23043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto___23044);
return statearr_23043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto___23044,out))
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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23064 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23064 = (function (ch,f,map_LT_,meta23065){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23065 = meta23065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23064.cljs$lang$type = true;
cljs.core.async.t23064.cljs$lang$ctorStr = "cljs.core.async/t23064";
cljs.core.async.t23064.cljs$lang$ctorPrWriter = (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"cljs.core.async/t23064");
});
cljs.core.async.t23064.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23064.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t23064.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23064.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t23067 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23067 = (function (fn1,_,meta23065,ch,f,map_LT_,meta23068){
this.fn1 = fn1;
this._ = _;
this.meta23065 = meta23065;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23068 = meta23068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23067.cljs$lang$type = true;
cljs.core.async.t23067.cljs$lang$ctorStr = "cljs.core.async/t23067";
cljs.core.async.t23067.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"cljs.core.async/t23067");
});})(___$1))
;
cljs.core.async.t23067.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23067.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t23067.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__23057_SHARP_){return f1.call(null,(((p1__23057_SHARP_ == null))?null:self__.f.call(null,p1__23057_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t23067.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23069){var self__ = this;
var _23069__$1 = this;return self__.meta23068;
});})(___$1))
;
cljs.core.async.t23067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23069,meta23068__$1){var self__ = this;
var _23069__$1 = this;return (new cljs.core.async.t23067(self__.fn1,self__._,self__.meta23065,self__.ch,self__.f,self__.map_LT_,meta23068__$1));
});})(___$1))
;
cljs.core.async.__GT_t23067 = ((function (___$1){
return (function __GT_t23067(fn1__$1,___$2,meta23065__$1,ch__$2,f__$2,map_LT___$2,meta23068){return (new cljs.core.async.t23067(fn1__$1,___$2,meta23065__$1,ch__$2,f__$2,map_LT___$2,meta23068));
});})(___$1))
;
}
return (new cljs.core.async.t23067(fn1,___$1,self__.meta23065,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__11469__auto__ = ret;if(cljs.core.truth_(and__11469__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__11469__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t23064.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23064.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23064.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t23064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23066){var self__ = this;
var _23066__$1 = this;return self__.meta23065;
});
cljs.core.async.t23064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23066,meta23065__$1){var self__ = this;
var _23066__$1 = this;return (new cljs.core.async.t23064(self__.ch,self__.f,self__.map_LT_,meta23065__$1));
});
cljs.core.async.__GT_t23064 = (function __GT_t23064(ch__$1,f__$1,map_LT___$1,meta23065){return (new cljs.core.async.t23064(ch__$1,f__$1,map_LT___$1,meta23065));
});
}
return (new cljs.core.async.t23064(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23073 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23073 = (function (ch,f,map_GT_,meta23074){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23074 = meta23074;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23073.cljs$lang$type = true;
cljs.core.async.t23073.cljs$lang$ctorStr = "cljs.core.async/t23073";
cljs.core.async.t23073.cljs$lang$ctorPrWriter = (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"cljs.core.async/t23073");
});
cljs.core.async.t23073.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t23073.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t23073.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23075){var self__ = this;
var _23075__$1 = this;return self__.meta23074;
});
cljs.core.async.t23073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23075,meta23074__$1){var self__ = this;
var _23075__$1 = this;return (new cljs.core.async.t23073(self__.ch,self__.f,self__.map_GT_,meta23074__$1));
});
cljs.core.async.__GT_t23073 = (function __GT_t23073(ch__$1,f__$1,map_GT___$1,meta23074){return (new cljs.core.async.t23073(ch__$1,f__$1,map_GT___$1,meta23074));
});
}
return (new cljs.core.async.t23073(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23079 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23079 = (function (ch,p,filter_GT_,meta23080){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23080 = meta23080;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23079.cljs$lang$type = true;
cljs.core.async.t23079.cljs$lang$ctorStr = "cljs.core.async/t23079";
cljs.core.async.t23079.cljs$lang$ctorPrWriter = (function (this__12057__auto__,writer__12058__auto__,opt__12059__auto__){return cljs.core._write.call(null,writer__12058__auto__,"cljs.core.async/t23079");
});
cljs.core.async.t23079.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23079.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t23079.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23079.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t23079.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23079.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23079.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t23079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23081){var self__ = this;
var _23081__$1 = this;return self__.meta23080;
});
cljs.core.async.t23079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23081,meta23080__$1){var self__ = this;
var _23081__$1 = this;return (new cljs.core.async.t23079(self__.ch,self__.p,self__.filter_GT_,meta23080__$1));
});
cljs.core.async.__GT_t23079 = (function __GT_t23079(ch__$1,p__$1,filter_GT___$1,meta23080){return (new cljs.core.async.t23079(ch__$1,p__$1,filter_GT___$1,meta23080));
});
}
return (new cljs.core.async.t23079(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14013__auto___23164 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto___23164,out){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto___23164,out){
return (function (state_23143){var state_val_23144 = (state_23143[(1)]);if((state_val_23144 === (7)))
{var inst_23139 = (state_23143[(2)]);var state_23143__$1 = state_23143;var statearr_23145_23165 = state_23143__$1;(statearr_23145_23165[(2)] = inst_23139);
(statearr_23145_23165[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23144 === (1)))
{var state_23143__$1 = state_23143;var statearr_23146_23166 = state_23143__$1;(statearr_23146_23166[(2)] = null);
(statearr_23146_23166[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23144 === (4)))
{var inst_23125 = (state_23143[(7)]);var inst_23125__$1 = (state_23143[(2)]);var inst_23126 = (inst_23125__$1 == null);var state_23143__$1 = (function (){var statearr_23147 = state_23143;(statearr_23147[(7)] = inst_23125__$1);
return statearr_23147;
})();if(cljs.core.truth_(inst_23126))
{var statearr_23148_23167 = state_23143__$1;(statearr_23148_23167[(1)] = (5));
} else
{var statearr_23149_23168 = state_23143__$1;(statearr_23149_23168[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23144 === (6)))
{var inst_23125 = (state_23143[(7)]);var inst_23130 = p.call(null,inst_23125);var state_23143__$1 = state_23143;if(cljs.core.truth_(inst_23130))
{var statearr_23150_23169 = state_23143__$1;(statearr_23150_23169[(1)] = (8));
} else
{var statearr_23151_23170 = state_23143__$1;(statearr_23151_23170[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23144 === (3)))
{var inst_23141 = (state_23143[(2)]);var state_23143__$1 = state_23143;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23143__$1,inst_23141);
} else
{if((state_val_23144 === (2)))
{var state_23143__$1 = state_23143;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23143__$1,(4),ch);
} else
{if((state_val_23144 === (11)))
{var inst_23133 = (state_23143[(2)]);var state_23143__$1 = state_23143;var statearr_23152_23171 = state_23143__$1;(statearr_23152_23171[(2)] = inst_23133);
(statearr_23152_23171[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23144 === (9)))
{var state_23143__$1 = state_23143;var statearr_23153_23172 = state_23143__$1;(statearr_23153_23172[(2)] = null);
(statearr_23153_23172[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23144 === (5)))
{var inst_23128 = cljs.core.async.close_BANG_.call(null,out);var state_23143__$1 = state_23143;var statearr_23154_23173 = state_23143__$1;(statearr_23154_23173[(2)] = inst_23128);
(statearr_23154_23173[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23144 === (10)))
{var inst_23136 = (state_23143[(2)]);var state_23143__$1 = (function (){var statearr_23155 = state_23143;(statearr_23155[(8)] = inst_23136);
return statearr_23155;
})();var statearr_23156_23174 = state_23143__$1;(statearr_23156_23174[(2)] = null);
(statearr_23156_23174[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23144 === (8)))
{var inst_23125 = (state_23143[(7)]);var state_23143__$1 = state_23143;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23143__$1,(11),out,inst_23125);
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
});})(c__14013__auto___23164,out))
;return ((function (switch__13957__auto__,c__14013__auto___23164,out){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_23160 = [null,null,null,null,null,null,null,null,null];(statearr_23160[(0)] = state_machine__13958__auto__);
(statearr_23160[(1)] = (1));
return statearr_23160;
});
var state_machine__13958__auto____1 = (function (state_23143){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_23143);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e23161){if((e23161 instanceof Object))
{var ex__13961__auto__ = e23161;var statearr_23162_23175 = state_23143;(statearr_23162_23175[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23143);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23161;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23176 = state_23143;
state_23143 = G__23176;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_23143){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_23143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto___23164,out))
})();var state__14015__auto__ = (function (){var statearr_23163 = f__14014__auto__.call(null);(statearr_23163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto___23164);
return statearr_23163;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto___23164,out))
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
* Deprecated - this function will be removed. Use transducer instead
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__14013__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto__){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto__){
return (function (state_23342){var state_val_23343 = (state_23342[(1)]);if((state_val_23343 === (7)))
{var inst_23338 = (state_23342[(2)]);var state_23342__$1 = state_23342;var statearr_23344_23385 = state_23342__$1;(statearr_23344_23385[(2)] = inst_23338);
(statearr_23344_23385[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23343 === (20)))
{var inst_23308 = (state_23342[(7)]);var inst_23319 = (state_23342[(2)]);var inst_23320 = cljs.core.next.call(null,inst_23308);var inst_23294 = inst_23320;var inst_23295 = null;var inst_23296 = (0);var inst_23297 = (0);var state_23342__$1 = (function (){var statearr_23345 = state_23342;(statearr_23345[(8)] = inst_23297);
(statearr_23345[(9)] = inst_23296);
(statearr_23345[(10)] = inst_23294);
(statearr_23345[(11)] = inst_23319);
(statearr_23345[(12)] = inst_23295);
return statearr_23345;
})();var statearr_23346_23386 = state_23342__$1;(statearr_23346_23386[(2)] = null);
(statearr_23346_23386[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23343 === (1)))
{var state_23342__$1 = state_23342;var statearr_23347_23387 = state_23342__$1;(statearr_23347_23387[(2)] = null);
(statearr_23347_23387[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23343 === (4)))
{var inst_23283 = (state_23342[(13)]);var inst_23283__$1 = (state_23342[(2)]);var inst_23284 = (inst_23283__$1 == null);var state_23342__$1 = (function (){var statearr_23348 = state_23342;(statearr_23348[(13)] = inst_23283__$1);
return statearr_23348;
})();if(cljs.core.truth_(inst_23284))
{var statearr_23349_23388 = state_23342__$1;(statearr_23349_23388[(1)] = (5));
} else
{var statearr_23350_23389 = state_23342__$1;(statearr_23350_23389[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23343 === (15)))
{var state_23342__$1 = state_23342;var statearr_23354_23390 = state_23342__$1;(statearr_23354_23390[(2)] = null);
(statearr_23354_23390[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23343 === (21)))
{var state_23342__$1 = state_23342;var statearr_23355_23391 = state_23342__$1;(statearr_23355_23391[(2)] = null);
(statearr_23355_23391[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23343 === (13)))
{var inst_23297 = (state_23342[(8)]);var inst_23296 = (state_23342[(9)]);var inst_23294 = (state_23342[(10)]);var inst_23295 = (state_23342[(12)]);var inst_23304 = (state_23342[(2)]);var inst_23305 = (inst_23297 + (1));var tmp23351 = inst_23296;var tmp23352 = inst_23294;var tmp23353 = inst_23295;var inst_23294__$1 = tmp23352;var inst_23295__$1 = tmp23353;var inst_23296__$1 = tmp23351;var inst_23297__$1 = inst_23305;var state_23342__$1 = (function (){var statearr_23356 = state_23342;(statearr_23356[(8)] = inst_23297__$1);
(statearr_23356[(9)] = inst_23296__$1);
(statearr_23356[(10)] = inst_23294__$1);
(statearr_23356[(14)] = inst_23304);
(statearr_23356[(12)] = inst_23295__$1);
return statearr_23356;
})();var statearr_23357_23392 = state_23342__$1;(statearr_23357_23392[(2)] = null);
(statearr_23357_23392[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23343 === (22)))
{var state_23342__$1 = state_23342;var statearr_23358_23393 = state_23342__$1;(statearr_23358_23393[(2)] = null);
(statearr_23358_23393[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23343 === (6)))
{var inst_23283 = (state_23342[(13)]);var inst_23292 = f.call(null,inst_23283);var inst_23293 = cljs.core.seq.call(null,inst_23292);var inst_23294 = inst_23293;var inst_23295 = null;var inst_23296 = (0);var inst_23297 = (0);var state_23342__$1 = (function (){var statearr_23359 = state_23342;(statearr_23359[(8)] = inst_23297);
(statearr_23359[(9)] = inst_23296);
(statearr_23359[(10)] = inst_23294);
(statearr_23359[(12)] = inst_23295);
return statearr_23359;
})();var statearr_23360_23394 = state_23342__$1;(statearr_23360_23394[(2)] = null);
(statearr_23360_23394[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23343 === (17)))
{var inst_23308 = (state_23342[(7)]);var inst_23312 = cljs.core.chunk_first.call(null,inst_23308);var inst_23313 = cljs.core.chunk_rest.call(null,inst_23308);var inst_23314 = cljs.core.count.call(null,inst_23312);var inst_23294 = inst_23313;var inst_23295 = inst_23312;var inst_23296 = inst_23314;var inst_23297 = (0);var state_23342__$1 = (function (){var statearr_23361 = state_23342;(statearr_23361[(8)] = inst_23297);
(statearr_23361[(9)] = inst_23296);
(statearr_23361[(10)] = inst_23294);
(statearr_23361[(12)] = inst_23295);
return statearr_23361;
})();var statearr_23362_23395 = state_23342__$1;(statearr_23362_23395[(2)] = null);
(statearr_23362_23395[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23343 === (3)))
{var inst_23340 = (state_23342[(2)]);var state_23342__$1 = state_23342;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23342__$1,inst_23340);
} else
{if((state_val_23343 === (12)))
{var inst_23328 = (state_23342[(2)]);var state_23342__$1 = state_23342;var statearr_23363_23396 = state_23342__$1;(statearr_23363_23396[(2)] = inst_23328);
(statearr_23363_23396[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23343 === (2)))
{var state_23342__$1 = state_23342;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23342__$1,(4),in$);
} else
{if((state_val_23343 === (23)))
{var inst_23336 = (state_23342[(2)]);var state_23342__$1 = state_23342;var statearr_23364_23397 = state_23342__$1;(statearr_23364_23397[(2)] = inst_23336);
(statearr_23364_23397[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23343 === (19)))
{var inst_23323 = (state_23342[(2)]);var state_23342__$1 = state_23342;var statearr_23365_23398 = state_23342__$1;(statearr_23365_23398[(2)] = inst_23323);
(statearr_23365_23398[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23343 === (11)))
{var inst_23308 = (state_23342[(7)]);var inst_23294 = (state_23342[(10)]);var inst_23308__$1 = cljs.core.seq.call(null,inst_23294);var state_23342__$1 = (function (){var statearr_23366 = state_23342;(statearr_23366[(7)] = inst_23308__$1);
return statearr_23366;
})();if(inst_23308__$1)
{var statearr_23367_23399 = state_23342__$1;(statearr_23367_23399[(1)] = (14));
} else
{var statearr_23368_23400 = state_23342__$1;(statearr_23368_23400[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23343 === (9)))
{var inst_23330 = (state_23342[(2)]);var inst_23331 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_23342__$1 = (function (){var statearr_23369 = state_23342;(statearr_23369[(15)] = inst_23330);
return statearr_23369;
})();if(cljs.core.truth_(inst_23331))
{var statearr_23370_23401 = state_23342__$1;(statearr_23370_23401[(1)] = (21));
} else
{var statearr_23371_23402 = state_23342__$1;(statearr_23371_23402[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23343 === (5)))
{var inst_23286 = cljs.core.async.close_BANG_.call(null,out);var state_23342__$1 = state_23342;var statearr_23372_23403 = state_23342__$1;(statearr_23372_23403[(2)] = inst_23286);
(statearr_23372_23403[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23343 === (14)))
{var inst_23308 = (state_23342[(7)]);var inst_23310 = cljs.core.chunked_seq_QMARK_.call(null,inst_23308);var state_23342__$1 = state_23342;if(inst_23310)
{var statearr_23373_23404 = state_23342__$1;(statearr_23373_23404[(1)] = (17));
} else
{var statearr_23374_23405 = state_23342__$1;(statearr_23374_23405[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23343 === (16)))
{var inst_23326 = (state_23342[(2)]);var state_23342__$1 = state_23342;var statearr_23375_23406 = state_23342__$1;(statearr_23375_23406[(2)] = inst_23326);
(statearr_23375_23406[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23343 === (10)))
{var inst_23297 = (state_23342[(8)]);var inst_23295 = (state_23342[(12)]);var inst_23302 = cljs.core._nth.call(null,inst_23295,inst_23297);var state_23342__$1 = state_23342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23342__$1,(13),out,inst_23302);
} else
{if((state_val_23343 === (18)))
{var inst_23308 = (state_23342[(7)]);var inst_23317 = cljs.core.first.call(null,inst_23308);var state_23342__$1 = state_23342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23342__$1,(20),out,inst_23317);
} else
{if((state_val_23343 === (8)))
{var inst_23297 = (state_23342[(8)]);var inst_23296 = (state_23342[(9)]);var inst_23299 = (inst_23297 < inst_23296);var inst_23300 = inst_23299;var state_23342__$1 = state_23342;if(cljs.core.truth_(inst_23300))
{var statearr_23376_23407 = state_23342__$1;(statearr_23376_23407[(1)] = (10));
} else
{var statearr_23377_23408 = state_23342__$1;(statearr_23377_23408[(1)] = (11));
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
});})(c__14013__auto__))
;return ((function (switch__13957__auto__,c__14013__auto__){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_23381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23381[(0)] = state_machine__13958__auto__);
(statearr_23381[(1)] = (1));
return statearr_23381;
});
var state_machine__13958__auto____1 = (function (state_23342){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_23342);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e23382){if((e23382 instanceof Object))
{var ex__13961__auto__ = e23382;var statearr_23383_23409 = state_23342;(statearr_23383_23409[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23342);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23382;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23410 = state_23342;
state_23342 = G__23410;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_23342){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_23342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto__))
})();var state__14015__auto__ = (function (){var statearr_23384 = f__14014__auto__.call(null);(statearr_23384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto__);
return statearr_23384;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto__))
);
return c__14013__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
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
* Deprecated - this function will be removed. Use transducer instead
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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14013__auto___23507 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto___23507,out){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto___23507,out){
return (function (state_23482){var state_val_23483 = (state_23482[(1)]);if((state_val_23483 === (7)))
{var inst_23477 = (state_23482[(2)]);var state_23482__$1 = state_23482;var statearr_23484_23508 = state_23482__$1;(statearr_23484_23508[(2)] = inst_23477);
(statearr_23484_23508[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (1)))
{var inst_23459 = null;var state_23482__$1 = (function (){var statearr_23485 = state_23482;(statearr_23485[(7)] = inst_23459);
return statearr_23485;
})();var statearr_23486_23509 = state_23482__$1;(statearr_23486_23509[(2)] = null);
(statearr_23486_23509[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (4)))
{var inst_23462 = (state_23482[(8)]);var inst_23462__$1 = (state_23482[(2)]);var inst_23463 = (inst_23462__$1 == null);var inst_23464 = cljs.core.not.call(null,inst_23463);var state_23482__$1 = (function (){var statearr_23487 = state_23482;(statearr_23487[(8)] = inst_23462__$1);
return statearr_23487;
})();if(inst_23464)
{var statearr_23488_23510 = state_23482__$1;(statearr_23488_23510[(1)] = (5));
} else
{var statearr_23489_23511 = state_23482__$1;(statearr_23489_23511[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (6)))
{var state_23482__$1 = state_23482;var statearr_23490_23512 = state_23482__$1;(statearr_23490_23512[(2)] = null);
(statearr_23490_23512[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (3)))
{var inst_23479 = (state_23482[(2)]);var inst_23480 = cljs.core.async.close_BANG_.call(null,out);var state_23482__$1 = (function (){var statearr_23491 = state_23482;(statearr_23491[(9)] = inst_23479);
return statearr_23491;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23482__$1,inst_23480);
} else
{if((state_val_23483 === (2)))
{var state_23482__$1 = state_23482;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23482__$1,(4),ch);
} else
{if((state_val_23483 === (11)))
{var inst_23462 = (state_23482[(8)]);var inst_23471 = (state_23482[(2)]);var inst_23459 = inst_23462;var state_23482__$1 = (function (){var statearr_23492 = state_23482;(statearr_23492[(7)] = inst_23459);
(statearr_23492[(10)] = inst_23471);
return statearr_23492;
})();var statearr_23493_23513 = state_23482__$1;(statearr_23493_23513[(2)] = null);
(statearr_23493_23513[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (9)))
{var inst_23462 = (state_23482[(8)]);var state_23482__$1 = state_23482;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23482__$1,(11),out,inst_23462);
} else
{if((state_val_23483 === (5)))
{var inst_23462 = (state_23482[(8)]);var inst_23459 = (state_23482[(7)]);var inst_23466 = cljs.core._EQ_.call(null,inst_23462,inst_23459);var state_23482__$1 = state_23482;if(inst_23466)
{var statearr_23495_23514 = state_23482__$1;(statearr_23495_23514[(1)] = (8));
} else
{var statearr_23496_23515 = state_23482__$1;(statearr_23496_23515[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (10)))
{var inst_23474 = (state_23482[(2)]);var state_23482__$1 = state_23482;var statearr_23497_23516 = state_23482__$1;(statearr_23497_23516[(2)] = inst_23474);
(statearr_23497_23516[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (8)))
{var inst_23459 = (state_23482[(7)]);var tmp23494 = inst_23459;var inst_23459__$1 = tmp23494;var state_23482__$1 = (function (){var statearr_23498 = state_23482;(statearr_23498[(7)] = inst_23459__$1);
return statearr_23498;
})();var statearr_23499_23517 = state_23482__$1;(statearr_23499_23517[(2)] = null);
(statearr_23499_23517[(1)] = (2));
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
});})(c__14013__auto___23507,out))
;return ((function (switch__13957__auto__,c__14013__auto___23507,out){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_23503 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23503[(0)] = state_machine__13958__auto__);
(statearr_23503[(1)] = (1));
return statearr_23503;
});
var state_machine__13958__auto____1 = (function (state_23482){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_23482);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e23504){if((e23504 instanceof Object))
{var ex__13961__auto__ = e23504;var statearr_23505_23518 = state_23482;(statearr_23505_23518[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23482);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23504;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23519 = state_23482;
state_23482 = G__23519;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_23482){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_23482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto___23507,out))
})();var state__14015__auto__ = (function (){var statearr_23506 = f__14014__auto__.call(null);(statearr_23506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto___23507);
return statearr_23506;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto___23507,out))
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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14013__auto___23654 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto___23654,out){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto___23654,out){
return (function (state_23624){var state_val_23625 = (state_23624[(1)]);if((state_val_23625 === (7)))
{var inst_23620 = (state_23624[(2)]);var state_23624__$1 = state_23624;var statearr_23626_23655 = state_23624__$1;(statearr_23626_23655[(2)] = inst_23620);
(statearr_23626_23655[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23625 === (1)))
{var inst_23587 = (new Array(n));var inst_23588 = inst_23587;var inst_23589 = (0);var state_23624__$1 = (function (){var statearr_23627 = state_23624;(statearr_23627[(7)] = inst_23588);
(statearr_23627[(8)] = inst_23589);
return statearr_23627;
})();var statearr_23628_23656 = state_23624__$1;(statearr_23628_23656[(2)] = null);
(statearr_23628_23656[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23625 === (4)))
{var inst_23592 = (state_23624[(9)]);var inst_23592__$1 = (state_23624[(2)]);var inst_23593 = (inst_23592__$1 == null);var inst_23594 = cljs.core.not.call(null,inst_23593);var state_23624__$1 = (function (){var statearr_23629 = state_23624;(statearr_23629[(9)] = inst_23592__$1);
return statearr_23629;
})();if(inst_23594)
{var statearr_23630_23657 = state_23624__$1;(statearr_23630_23657[(1)] = (5));
} else
{var statearr_23631_23658 = state_23624__$1;(statearr_23631_23658[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23625 === (15)))
{var inst_23614 = (state_23624[(2)]);var state_23624__$1 = state_23624;var statearr_23632_23659 = state_23624__$1;(statearr_23632_23659[(2)] = inst_23614);
(statearr_23632_23659[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23625 === (13)))
{var state_23624__$1 = state_23624;var statearr_23633_23660 = state_23624__$1;(statearr_23633_23660[(2)] = null);
(statearr_23633_23660[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23625 === (6)))
{var inst_23589 = (state_23624[(8)]);var inst_23610 = (inst_23589 > (0));var state_23624__$1 = state_23624;if(cljs.core.truth_(inst_23610))
{var statearr_23634_23661 = state_23624__$1;(statearr_23634_23661[(1)] = (12));
} else
{var statearr_23635_23662 = state_23624__$1;(statearr_23635_23662[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23625 === (3)))
{var inst_23622 = (state_23624[(2)]);var state_23624__$1 = state_23624;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23624__$1,inst_23622);
} else
{if((state_val_23625 === (12)))
{var inst_23588 = (state_23624[(7)]);var inst_23612 = cljs.core.vec.call(null,inst_23588);var state_23624__$1 = state_23624;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23624__$1,(15),out,inst_23612);
} else
{if((state_val_23625 === (2)))
{var state_23624__$1 = state_23624;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23624__$1,(4),ch);
} else
{if((state_val_23625 === (11)))
{var inst_23604 = (state_23624[(2)]);var inst_23605 = (new Array(n));var inst_23588 = inst_23605;var inst_23589 = (0);var state_23624__$1 = (function (){var statearr_23636 = state_23624;(statearr_23636[(7)] = inst_23588);
(statearr_23636[(10)] = inst_23604);
(statearr_23636[(8)] = inst_23589);
return statearr_23636;
})();var statearr_23637_23663 = state_23624__$1;(statearr_23637_23663[(2)] = null);
(statearr_23637_23663[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23625 === (9)))
{var inst_23588 = (state_23624[(7)]);var inst_23602 = cljs.core.vec.call(null,inst_23588);var state_23624__$1 = state_23624;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23624__$1,(11),out,inst_23602);
} else
{if((state_val_23625 === (5)))
{var inst_23588 = (state_23624[(7)]);var inst_23589 = (state_23624[(8)]);var inst_23592 = (state_23624[(9)]);var inst_23597 = (state_23624[(11)]);var inst_23596 = (inst_23588[inst_23589] = inst_23592);var inst_23597__$1 = (inst_23589 + (1));var inst_23598 = (inst_23597__$1 < n);var state_23624__$1 = (function (){var statearr_23638 = state_23624;(statearr_23638[(12)] = inst_23596);
(statearr_23638[(11)] = inst_23597__$1);
return statearr_23638;
})();if(cljs.core.truth_(inst_23598))
{var statearr_23639_23664 = state_23624__$1;(statearr_23639_23664[(1)] = (8));
} else
{var statearr_23640_23665 = state_23624__$1;(statearr_23640_23665[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23625 === (14)))
{var inst_23617 = (state_23624[(2)]);var inst_23618 = cljs.core.async.close_BANG_.call(null,out);var state_23624__$1 = (function (){var statearr_23642 = state_23624;(statearr_23642[(13)] = inst_23617);
return statearr_23642;
})();var statearr_23643_23666 = state_23624__$1;(statearr_23643_23666[(2)] = inst_23618);
(statearr_23643_23666[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23625 === (10)))
{var inst_23608 = (state_23624[(2)]);var state_23624__$1 = state_23624;var statearr_23644_23667 = state_23624__$1;(statearr_23644_23667[(2)] = inst_23608);
(statearr_23644_23667[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23625 === (8)))
{var inst_23588 = (state_23624[(7)]);var inst_23597 = (state_23624[(11)]);var tmp23641 = inst_23588;var inst_23588__$1 = tmp23641;var inst_23589 = inst_23597;var state_23624__$1 = (function (){var statearr_23645 = state_23624;(statearr_23645[(7)] = inst_23588__$1);
(statearr_23645[(8)] = inst_23589);
return statearr_23645;
})();var statearr_23646_23668 = state_23624__$1;(statearr_23646_23668[(2)] = null);
(statearr_23646_23668[(1)] = (2));
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
});})(c__14013__auto___23654,out))
;return ((function (switch__13957__auto__,c__14013__auto___23654,out){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_23650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23650[(0)] = state_machine__13958__auto__);
(statearr_23650[(1)] = (1));
return statearr_23650;
});
var state_machine__13958__auto____1 = (function (state_23624){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_23624);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e23651){if((e23651 instanceof Object))
{var ex__13961__auto__ = e23651;var statearr_23652_23669 = state_23624;(statearr_23652_23669[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23624);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23651;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23670 = state_23624;
state_23624 = G__23670;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_23624){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_23624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto___23654,out))
})();var state__14015__auto__ = (function (){var statearr_23653 = f__14014__auto__.call(null);(statearr_23653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto___23654);
return statearr_23653;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto___23654,out))
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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14013__auto___23813 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14013__auto___23813,out){
return (function (){var f__14014__auto__ = (function (){var switch__13957__auto__ = ((function (c__14013__auto___23813,out){
return (function (state_23783){var state_val_23784 = (state_23783[(1)]);if((state_val_23784 === (7)))
{var inst_23779 = (state_23783[(2)]);var state_23783__$1 = state_23783;var statearr_23785_23814 = state_23783__$1;(statearr_23785_23814[(2)] = inst_23779);
(statearr_23785_23814[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23784 === (1)))
{var inst_23742 = [];var inst_23743 = inst_23742;var inst_23744 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_23783__$1 = (function (){var statearr_23786 = state_23783;(statearr_23786[(7)] = inst_23743);
(statearr_23786[(8)] = inst_23744);
return statearr_23786;
})();var statearr_23787_23815 = state_23783__$1;(statearr_23787_23815[(2)] = null);
(statearr_23787_23815[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23784 === (4)))
{var inst_23747 = (state_23783[(9)]);var inst_23747__$1 = (state_23783[(2)]);var inst_23748 = (inst_23747__$1 == null);var inst_23749 = cljs.core.not.call(null,inst_23748);var state_23783__$1 = (function (){var statearr_23788 = state_23783;(statearr_23788[(9)] = inst_23747__$1);
return statearr_23788;
})();if(inst_23749)
{var statearr_23789_23816 = state_23783__$1;(statearr_23789_23816[(1)] = (5));
} else
{var statearr_23790_23817 = state_23783__$1;(statearr_23790_23817[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23784 === (15)))
{var inst_23773 = (state_23783[(2)]);var state_23783__$1 = state_23783;var statearr_23791_23818 = state_23783__$1;(statearr_23791_23818[(2)] = inst_23773);
(statearr_23791_23818[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23784 === (13)))
{var state_23783__$1 = state_23783;var statearr_23792_23819 = state_23783__$1;(statearr_23792_23819[(2)] = null);
(statearr_23792_23819[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23784 === (6)))
{var inst_23743 = (state_23783[(7)]);var inst_23768 = inst_23743.length;var inst_23769 = (inst_23768 > (0));var state_23783__$1 = state_23783;if(cljs.core.truth_(inst_23769))
{var statearr_23793_23820 = state_23783__$1;(statearr_23793_23820[(1)] = (12));
} else
{var statearr_23794_23821 = state_23783__$1;(statearr_23794_23821[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23784 === (3)))
{var inst_23781 = (state_23783[(2)]);var state_23783__$1 = state_23783;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23783__$1,inst_23781);
} else
{if((state_val_23784 === (12)))
{var inst_23743 = (state_23783[(7)]);var inst_23771 = cljs.core.vec.call(null,inst_23743);var state_23783__$1 = state_23783;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23783__$1,(15),out,inst_23771);
} else
{if((state_val_23784 === (2)))
{var state_23783__$1 = state_23783;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23783__$1,(4),ch);
} else
{if((state_val_23784 === (11)))
{var inst_23747 = (state_23783[(9)]);var inst_23751 = (state_23783[(10)]);var inst_23761 = (state_23783[(2)]);var inst_23762 = [];var inst_23763 = inst_23762.push(inst_23747);var inst_23743 = inst_23762;var inst_23744 = inst_23751;var state_23783__$1 = (function (){var statearr_23795 = state_23783;(statearr_23795[(11)] = inst_23761);
(statearr_23795[(12)] = inst_23763);
(statearr_23795[(7)] = inst_23743);
(statearr_23795[(8)] = inst_23744);
return statearr_23795;
})();var statearr_23796_23822 = state_23783__$1;(statearr_23796_23822[(2)] = null);
(statearr_23796_23822[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23784 === (9)))
{var inst_23743 = (state_23783[(7)]);var inst_23759 = cljs.core.vec.call(null,inst_23743);var state_23783__$1 = state_23783;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23783__$1,(11),out,inst_23759);
} else
{if((state_val_23784 === (5)))
{var inst_23747 = (state_23783[(9)]);var inst_23751 = (state_23783[(10)]);var inst_23744 = (state_23783[(8)]);var inst_23751__$1 = f.call(null,inst_23747);var inst_23752 = cljs.core._EQ_.call(null,inst_23751__$1,inst_23744);var inst_23753 = cljs.core.keyword_identical_QMARK_.call(null,inst_23744,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_23754 = (inst_23752) || (inst_23753);var state_23783__$1 = (function (){var statearr_23797 = state_23783;(statearr_23797[(10)] = inst_23751__$1);
return statearr_23797;
})();if(cljs.core.truth_(inst_23754))
{var statearr_23798_23823 = state_23783__$1;(statearr_23798_23823[(1)] = (8));
} else
{var statearr_23799_23824 = state_23783__$1;(statearr_23799_23824[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23784 === (14)))
{var inst_23776 = (state_23783[(2)]);var inst_23777 = cljs.core.async.close_BANG_.call(null,out);var state_23783__$1 = (function (){var statearr_23801 = state_23783;(statearr_23801[(13)] = inst_23776);
return statearr_23801;
})();var statearr_23802_23825 = state_23783__$1;(statearr_23802_23825[(2)] = inst_23777);
(statearr_23802_23825[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23784 === (10)))
{var inst_23766 = (state_23783[(2)]);var state_23783__$1 = state_23783;var statearr_23803_23826 = state_23783__$1;(statearr_23803_23826[(2)] = inst_23766);
(statearr_23803_23826[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23784 === (8)))
{var inst_23747 = (state_23783[(9)]);var inst_23751 = (state_23783[(10)]);var inst_23743 = (state_23783[(7)]);var inst_23756 = inst_23743.push(inst_23747);var tmp23800 = inst_23743;var inst_23743__$1 = tmp23800;var inst_23744 = inst_23751;var state_23783__$1 = (function (){var statearr_23804 = state_23783;(statearr_23804[(14)] = inst_23756);
(statearr_23804[(7)] = inst_23743__$1);
(statearr_23804[(8)] = inst_23744);
return statearr_23804;
})();var statearr_23805_23827 = state_23783__$1;(statearr_23805_23827[(2)] = null);
(statearr_23805_23827[(1)] = (2));
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
});})(c__14013__auto___23813,out))
;return ((function (switch__13957__auto__,c__14013__auto___23813,out){
return (function() {
var state_machine__13958__auto__ = null;
var state_machine__13958__auto____0 = (function (){var statearr_23809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23809[(0)] = state_machine__13958__auto__);
(statearr_23809[(1)] = (1));
return statearr_23809;
});
var state_machine__13958__auto____1 = (function (state_23783){while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13957__auto__.call(null,state_23783);if(cljs.core.keyword_identical_QMARK_.call(null,result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13960__auto__;
}
break;
}
}catch (e23810){if((e23810 instanceof Object))
{var ex__13961__auto__ = e23810;var statearr_23811_23828 = state_23783;(statearr_23811_23828[(5)] = ex__13961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23783);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23810;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23829 = state_23783;
state_23783 = G__23829;
continue;
}
} else
{return ret_value__13959__auto__;
}
break;
}
});
state_machine__13958__auto__ = function(state_23783){
switch(arguments.length){
case 0:
return state_machine__13958__auto____0.call(this);
case 1:
return state_machine__13958__auto____1.call(this,state_23783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13958__auto____0;
state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13958__auto____1;
return state_machine__13958__auto__;
})()
;})(switch__13957__auto__,c__14013__auto___23813,out))
})();var state__14015__auto__ = (function (){var statearr_23812 = f__14014__auto__.call(null);(statearr_23812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14013__auto___23813);
return statearr_23812;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14015__auto__);
});})(c__14013__auto___23813,out))
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