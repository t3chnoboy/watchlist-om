// Compiled by ClojureScript 0.0-2280
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_read_enabled_STAR_ = false;
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core.IDisplayName = (function (){var obj11345 = {};return obj11345;
})();
om.core.display_name = (function display_name(this$){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$IDisplayName$display_name$arity$1;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core.display_name[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core.display_name["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});
om.core.IInitState = (function (){var obj11347 = {};return obj11347;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core.init_state[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core.init_state["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj11349 = {};return obj11349;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core.should_update[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core.should_update["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj11351 = {};return obj11351;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core.will_mount[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core.will_mount["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj11353 = {};return obj11353;
})();
om.core.did_mount = (function did_mount(this$){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$IDidMount$did_mount$arity$1;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core.did_mount[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core.did_mount["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUnmount = (function (){var obj11355 = {};return obj11355;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core.will_unmount[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core.will_unmount["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj11357 = {};return obj11357;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core.will_update[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core.will_update["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj11359 = {};return obj11359;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$3;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core.did_update[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core.did_update["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});
om.core.IWillReceiveProps = (function (){var obj11361 = {};return obj11361;
})();
om.core.will_receive_props = (function will_receive_props(this$,next_props){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core.will_receive_props[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core.will_receive_props["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});
om.core.IRender = (function (){var obj11363 = {};return obj11363;
})();
om.core.render = (function render(this$){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core.render[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core.render["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.IRenderState = (function (){var obj11365 = {};return obj11365;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core.render_state[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core.render_state["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});
om.core.IOmSwap = (function (){var obj11367 = {};return obj11367;
})();
om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._om_swap_BANG_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});
om.core.IGetState = (function (){var obj11369 = {};return obj11369;
})();
om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$IGetState$_get_state$arity$1;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$1(this$);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core._get_state[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._get_state["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$IGetState$_get_state$arity$2;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core._get_state[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._get_state["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;
om.core.IGetRenderState = (function (){var obj11371 = {};return obj11371;
})();
om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core._get_render_state[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._get_render_state["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core._get_render_state[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._get_render_state["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;
om.core.ISetState = (function (){var obj11373 = {};return obj11373;
})();
om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___2 = (function (this$,val){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$2;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$2(this$,val);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val);
}
});
var _set_state_BANG___3 = (function (this$,ks,val){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,ks,val);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val);
}
});
_set_state_BANG_ = function(this$,ks,val){
switch(arguments.length){
case 2:
return _set_state_BANG___2.call(this,this$,ks);
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = _set_state_BANG___2;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
return _set_state_BANG_;
})()
;
om.core.IRenderQueue = (function (){var obj11375 = {};return obj11375;
})();
om.core._get_queue = (function _get_queue(this$){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core._get_queue[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._get_queue["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});
om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._queue_render_BANG_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){if((function (){var and__7858__auto__ = this$;if(and__7858__auto__)
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else
{return and__7858__auto__;
}
})())
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else
{var x__8497__auto__ = (((this$ == null))?null:this$);return (function (){var or__7870__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._empty_queue_BANG_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});
om.core.IValue = (function (){var obj11377 = {};return obj11377;
})();
om.core._value = (function _value(x){if((function (){var and__7858__auto__ = x;if(and__7858__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__7858__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__8497__auto__ = (((x == null))?null:x);return (function (){var or__7870__auto__ = (om.core._value[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._value["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});
(om.core.IValue["_"] = true);
(om.core._value["_"] = (function (x){return x;
}));
om.core.ICursor = (function (){var obj11379 = {};return obj11379;
})();
om.core._path = (function _path(cursor){if((function (){var and__7858__auto__ = cursor;if(and__7858__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__7858__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__8497__auto__ = (((cursor == null))?null:cursor);return (function (){var or__7870__auto__ = (om.core._path[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._path["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__7858__auto__ = cursor;if(and__7858__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__7858__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__8497__auto__ = (((cursor == null))?null:cursor);return (function (){var or__7870__auto__ = (om.core._state[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._state["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj11381 = {};return obj11381;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__7858__auto__ = value;if(and__7858__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__7858__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__8497__auto__ = (((value == null))?null:value);return (function (){var or__7870__auto__ = (om.core._to_cursor[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._to_cursor["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__7858__auto__ = value;if(and__7858__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__7858__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__8497__auto__ = (((value == null))?null:value);return (function (){var or__7870__auto__ = (om.core._to_cursor[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._to_cursor["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;
om.core.ICursorDerive = (function (){var obj11383 = {};return obj11383;
})();
om.core._derive = (function _derive(cursor,derived,state,path){if((function (){var and__7858__auto__ = cursor;if(and__7858__auto__)
{return cursor.om$core$ICursorDerive$_derive$arity$4;
} else
{return and__7858__auto__;
}
})())
{return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else
{var x__8497__auto__ = (((cursor == null))?null:cursor);return (function (){var or__7870__auto__ = (om.core._derive[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._derive["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});
(om.core.ICursorDerive["_"] = true);
(om.core._derive["_"] = (function (this$,derived,state,path){return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function path(cursor){return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){return om.core._value.call(null,cursor);
});
om.core.state = (function state(cursor){return om.core._state.call(null,cursor);
});
om.core.ITransact = (function (){var obj11385 = {};return obj11385;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){if((function (){var and__7858__auto__ = cursor;if(and__7858__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else
{return and__7858__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else
{var x__8497__auto__ = (((cursor == null))?null:cursor);return (function (){var or__7870__auto__ = (om.core._transact_BANG_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._transact_BANG_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});
om.core.INotify = (function (){var obj11387 = {};return obj11387;
})();
om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){if((function (){var and__7858__auto__ = x;if(and__7858__auto__)
{return x.om$core$INotify$_listen_BANG_$arity$3;
} else
{return and__7858__auto__;
}
})())
{return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else
{var x__8497__auto__ = (((x == null))?null:x);return (function (){var or__7870__auto__ = (om.core._listen_BANG_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._listen_BANG_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});
om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){if((function (){var and__7858__auto__ = x;if(and__7858__auto__)
{return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else
{return and__7858__auto__;
}
})())
{return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else
{var x__8497__auto__ = (((x == null))?null:x);return (function (){var or__7870__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._unlisten_BANG_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});
om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){if((function (){var and__7858__auto__ = x;if(and__7858__auto__)
{return x.om$core$INotify$_notify_BANG_$arity$3;
} else
{return and__7858__auto__;
}
})())
{return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else
{var x__8497__auto__ = (((x == null))?null:x);return (function (){var or__7870__auto__ = (om.core._notify_BANG_[goog.typeOf(x__8497__auto__)]);if(or__7870__auto__)
{return or__7870__auto__;
} else
{var or__7870__auto____$1 = (om.core._notify_BANG_["_"]);if(or__7870__auto____$1)
{return or__7870__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = cljs.core.deref.call(null,state);var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);var ret = (((function (){var G__11389 = state;if(G__11389)
{var bit__8520__auto__ = null;if(cljs.core.truth_((function (){var or__7870__auto__ = bit__8520__auto__;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return G__11389.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__11389.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__11389);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__11389);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f):null)));if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178)))
{return null;
} else
{var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);if(!((tag == null)))
{return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else
{return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__11391 = x;if(G__11391)
{var bit__8520__auto__ = null;if(cljs.core.truth_((function (){var or__7870__auto__ = bit__8520__auto__;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return G__11391.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__11391.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__11391);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__11391);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_.call(null,c))
{return node.props.children = (function (){var _STAR_read_enabled_STAR_11393 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return c.call(null,node);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11393;
}})();
} else
{return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){return om.core._get_state.call(null,owner);
});
var get_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_state.call(null,owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){if((owner == null))
{return null;
} else
{return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else
{if(cljs.core.empty_QMARK_.call(null,korks))
{return get_shared.call(null,owner);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);
} else
{return null;
}
}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){var state = owner.state;var temp__4126__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var pending_state = temp__4126__auto__;var G__11395 = state;(G__11395["__om_prev_state"] = (state["__om_state"]));
(G__11395["__om_state"] = pending_state);
(G__11395["__om_pending_state"] = null);
return G__11395;
} else
{return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){var props__$1 = (function (){var or__7870__auto__ = props;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return owner.props;
}
})();var temp__4126__auto__ = (props__$1["__om_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var props_state = temp__4126__auto__;var state = owner.state;(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__7870__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return (state["__om_state"]);
}
})(),props_state));
return (props__$1["__om_state"] = null);
} else
{return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__11396 = c;if(G__11396)
{var bit__8520__auto__ = null;if(cljs.core.truth_((function (){var or__7870__auto__ = bit__8520__auto__;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return G__11396.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__11396.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__11396);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__11396);
}
})())
{var state_11423 = this$.state;var _STAR_read_enabled_STAR_11397_11424 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props}),(function (){var or__7870__auto__ = (state_11423["__om_prev_state"]);if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return (state_11423["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11397_11424;
}} else
{}
return (this$.state["__om_prev_state"] = null);
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__11398 = c;if(G__11398)
{var bit__8520__auto__ = null;if(cljs.core.truth_((function (){var or__7870__auto__ = bit__8520__auto__;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return G__11398.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__11398.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__11398);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__11398);
}
})())
{var _STAR_read_enabled_STAR_11399 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_unmount.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11399;
}} else
{return null;
}
}),(function (next_props){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__11400 = c;if(G__11400)
{var bit__8520__auto__ = null;if(cljs.core.truth_((function (){var or__7870__auto__ = bit__8520__auto__;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return G__11400.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__11400.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__11400);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__11400);
}
})())
{var _STAR_read_enabled_STAR_11401 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11401;
}} else
{return null;
}
}),(function (next_props,next_state){var this$ = this;var _STAR_read_enabled_STAR_11402 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$.props;var state = this$.state;var c = om.core.children.call(null,this$);om.core.merge_props_state.call(null,this$,next_props);
if((function (){var G__11403 = c;if(G__11403)
{var bit__8520__auto__ = null;if(cljs.core.truth_((function (){var or__7870__auto__ = bit__8520__auto__;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return G__11403.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__11403.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__11403);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__11403);
}
})())
{return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
} else
{if(cljs.core.not_EQ_.call(null,om.core._value.call(null,(props["__om_cursor"])),om.core._value.call(null,(next_props["__om_cursor"]))))
{return true;
} else
{if(!(((state["__om_pending_state"]) == null)))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return false;
} else
{return null;
}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11402;
}}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var _STAR_read_enabled_STAR_11404 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if((function (){var G__11405 = c;if(G__11405)
{var bit__8520__auto__ = null;if(cljs.core.truth_((function (){var or__7870__auto__ = bit__8520__auto__;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return G__11405.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__11405.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__11405);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__11405);
}
})())
{var _STAR_parent_STAR_11406 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_11407 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_11408 = om.core._STAR_instrument_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
return om.core.render.call(null,c);
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_11408;
om.core._STAR_state_STAR_ = _STAR_state_STAR_11407;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_11406;
}} else
{if((function (){var G__11409 = c;if(G__11409)
{var bit__8520__auto__ = null;if(cljs.core.truth_((function (){var or__7870__auto__ = bit__8520__auto__;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return G__11409.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__11409.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__11409);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__11409);
}
})())
{var _STAR_parent_STAR_11410 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_11411 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_11412 = om.core._STAR_instrument_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_11412;
om.core._STAR_state_STAR_ = _STAR_state_STAR_11411;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_11410;
}} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return c;
} else
{return null;
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11404;
}}),(function (next_props,next_state){var this$ = this;var c_11425 = om.core.children.call(null,this$);if((function (){var G__11413 = c_11425;if(G__11413)
{var bit__8520__auto__ = null;if(cljs.core.truth_((function (){var or__7870__auto__ = bit__8520__auto__;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return G__11413.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__11413.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__11413);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__11413);
}
})())
{var state_11426 = this$.state;var _STAR_read_enabled_STAR_11414_11427 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update.call(null,c_11425,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11414_11427;
}} else
{}
return om.core.merge_pending_state.call(null,this$);
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (function (){var or__7870__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__11415 = c;if(G__11415)
{var bit__8520__auto__ = null;if(cljs.core.truth_((function (){var or__7870__auto__ = bit__8520__auto__;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return G__11415.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__11415.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__11415);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__11415);
}
})())?(function (){var _STAR_read_enabled_STAR_11416 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11416;
}})():null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))), "__om_id": (function (){var or__7870__auto__ = id;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};(props["__om_init_state"] = null);
return ret;
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__11417 = c;if(G__11417)
{var bit__8520__auto__ = null;if(cljs.core.truth_((function (){var or__7870__auto__ = bit__8520__auto__;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return G__11417.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__11417.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__11417);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__11417);
}
})())
{var _STAR_read_enabled_STAR_11418 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.did_mount.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11418;
}} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__11419 = c;if(G__11419)
{var bit__8520__auto__ = null;if(cljs.core.truth_((function (){var or__7870__auto__ = bit__8520__auto__;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return G__11419.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__11419.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__11419);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__11419);
}
})())
{var _STAR_read_enabled_STAR_11420 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.display_name.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11420;
}} else
{return null;
}
}),(function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_11428 = om.core.children.call(null,this$);if((function (){var G__11421 = c_11428;if(G__11421)
{var bit__8520__auto__ = null;if(cljs.core.truth_((function (){var or__7870__auto__ = bit__8520__auto__;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return G__11421.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__11421.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__11421);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__11421);
}
})())
{var _STAR_read_enabled_STAR_11422_11429 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount.call(null,c_11428);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11422_11429;
}} else
{}
return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){var x11433 = obj;x11433.om$core$IGetState$ = true;
x11433.om$core$IGetState$_get_state$arity$1 = ((function (x11433){
return (function (this$){var this$__$1 = this;var state = this$__$1.state;var or__7870__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return (state["__om_state"]);
}
});})(x11433))
;
x11433.om$core$IGetState$_get_state$arity$2 = ((function (x11433){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x11433))
;
x11433.om$core$IGetRenderState$ = true;
x11433.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x11433){
return (function (this$){var this$__$1 = this;return (this$__$1.state["__om_state"]);
});})(x11433))
;
x11433.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x11433){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x11433))
;
x11433.om$core$ISetState$ = true;
x11433.om$core$ISetState$_set_state_BANG_$arity$2 = ((function (x11433){
return (function (this$,val){var this$__$1 = this;var _STAR_read_enabled_STAR_11434 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var app_state = (props["__om_app_state"]);(this$__$1.state["__om_pending_state"] = val);
if((app_state == null))
{return null;
} else
{return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11434;
}});})(x11433))
;
x11433.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x11433){
return (function (this$,ks,val){var this$__$1 = this;var _STAR_read_enabled_STAR_11435 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var state = this$__$1.state;var pstate = om.core._get_state.call(null,this$__$1);var app_state = (props["__om_app_state"]);(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));
if((app_state == null))
{return null;
} else
{return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11435;
}});})(x11433))
;
return x11433;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2158397195;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.cljs$lang$type = true;
om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__8437__auto__,writer__8438__auto__,opt__8439__auto__){return cljs.core._write.call(null,writer__8438__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{var v = cljs.core._lookup.call(null,self__.value,k,not_found);if(!(cljs.core._EQ_.call(null,v,not_found)))
{return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else
{return not_found;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer.call(null,self__.value,writer,opts);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta.call(null,self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count.call(null,self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$IValue$ = true;
om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count.call(null,self__.value) > (0)))
{return cljs.core.map.call(null,((function (this$__$1){
return (function (p__11437){var vec__11438 = p__11437;var k = cljs.core.nth.call(null,vec__11438,(0),null);var v = cljs.core.nth.call(null,vec__11438,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else
{return null;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.call = (function() {
var G__11439 = null;
var G__11439__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__11439__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__11439 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__11439__2.call(this,self__,k);
case 3:
return G__11439__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__11439;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args11436){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args11436)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});
om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){return (new om.core.MapCursor(value,state,path));
});

/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2175181595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.cljs$lang$type = true;
om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__8437__auto__,writer__8438__auto__,opt__8439__auto__){return cljs.core._write.call(null,writer__8438__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.call(null,this$__$1,n,null);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.call(null,this$__$1,n,not_found);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((n < cljs.core._count.call(null,self__.value)))
{return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
} else
{return not_found;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer.call(null,self__.value,writer,opts);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta.call(null,self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count.call(null,self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$IValue$ = true;
om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count.call(null,self__.value) > (0)))
{return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else
{return null;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.call = (function() {
var G__11441 = null;
var G__11441__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__11441__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__11441 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__11441__2.call(this,self__,k);
case 3:
return G__11441__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__11441;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args11440){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args11440)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x11443 = cljs.core.clone.call(null,val);x11443.cljs$core$IEquiv$ = true;
x11443.cljs$core$IEquiv$_equiv$arity$2 = ((function (x11443){
return (function (_,other){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,val,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});})(x11443))
;
x11443.om$core$ITransact$ = true;
x11443.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x11443){
return (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x11443))
;
x11443.om$core$ICursor$ = true;
x11443.om$core$ICursor$_path$arity$1 = ((function (x11443){
return (function (_){var ___$1 = this;return path;
});})(x11443))
;
x11443.om$core$ICursor$_state$arity$1 = ((function (x11443){
return (function (_){var ___$1 = this;return state;
});})(x11443))
;
x11443.cljs$core$IDeref$ = true;
x11443.cljs$core$IDeref$_deref$arity$1 = ((function (x11443){
return (function (this$){var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});})(x11443))
;
return x11443;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){if(om.core.cursor_QMARK_.call(null,val))
{return val;
} else
{if((function (){var G__11446 = val;if(G__11446)
{var bit__8520__auto__ = null;if(cljs.core.truth_((function (){var or__7870__auto__ = bit__8520__auto__;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return G__11446.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__11446.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__11446);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__11446);
}
})())
{return om.core._to_cursor.call(null,val,state,path);
} else
{if(cljs.core.indexed_QMARK_.call(null,val))
{return (new om.core.IndexedCursor(val,state,path));
} else
{if(cljs.core.map_QMARK_.call(null,val))
{return (new om.core.MapCursor(val,state,path));
} else
{if((function (){var G__11447 = val;if(G__11447)
{var bit__8520__auto__ = (G__11447.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__8520__auto__) || (G__11447.cljs$core$ICloneable$))
{return true;
} else
{if((!G__11447.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__11447);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__11447);
}
})())
{return om.core.to_cursor_STAR_.call(null,val,state,path);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return val;
} else
{return null;
}
}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state.call(null,cursor);return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.render_all = (function render_all(){om.core.refresh_queued = false;
var seq__11452 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));var chunk__11453 = null;var count__11454 = (0);var i__11455 = (0);while(true){
if((i__11455 < count__11454))
{var f = cljs.core._nth.call(null,chunk__11453,i__11455);f.call(null);
{
var G__11456 = seq__11452;
var G__11457 = chunk__11453;
var G__11458 = count__11454;
var G__11459 = (i__11455 + (1));
seq__11452 = G__11456;
chunk__11453 = G__11457;
count__11454 = G__11458;
i__11455 = G__11459;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11452);if(temp__4126__auto__)
{var seq__11452__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11452__$1))
{var c__8626__auto__ = cljs.core.chunk_first.call(null,seq__11452__$1);{
var G__11460 = cljs.core.chunk_rest.call(null,seq__11452__$1);
var G__11461 = c__8626__auto__;
var G__11462 = cljs.core.count.call(null,c__8626__auto__);
var G__11463 = (0);
seq__11452 = G__11460;
chunk__11453 = G__11461;
count__11454 = G__11462;
i__11455 = G__11463;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__11452__$1);f.call(null);
{
var G__11464 = cljs.core.next.call(null,seq__11452__$1);
var G__11465 = null;
var G__11466 = (0);
var G__11467 = (0);
seq__11452 = G__11464;
chunk__11453 = G__11465;
count__11454 = G__11466;
i__11455 = G__11467;
continue;
}
}
} else
{return null;
}
}
break;
}
});
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_QMARK_ = (function valid_QMARK_(m){return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function id(owner){return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){return get_descriptor.call(null,f,null);
});
var get_descriptor__2 = (function (f,descriptor){if(((f["om$descriptor"]) == null))
{(f["om$descriptor"] = React.createClass((function (){var or__7870__auto__ = descriptor;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return om.core.pure_descriptor;
}
})()));
} else
{}
return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){return build_STAR_.call(null,f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){if(om.core.valid_QMARK_.call(null,m))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid?","valid?",1428119148,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))));
}
if((m == null))
{var shared = (function (){var or__7870__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();var ctor = om.core.get_descriptor.call(null,f,new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));return ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_11472 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor,this$);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11472;
}});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var map__11473 = m;var map__11473__$1 = ((cljs.core.seq_QMARK_.call(null,map__11473))?cljs.core.apply.call(null,cljs.core.hash_map,map__11473):map__11473);var opts = cljs.core.get.call(null,map__11473__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var init_state = cljs.core.get.call(null,map__11473__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));var state = cljs.core.get.call(null,map__11473__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var key = cljs.core.get.call(null,map__11473__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;return dataf.call(null,cursor,i);
} else
{return dataf.call(null,cursor);
}
})():cursor);var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348)));var shared = (function (){var or__7870__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();var ctor = om.core.get_descriptor.call(null,f,new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));return ctor.call(null,{"__om_shared": shared, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_cursor": cursor_SINGLEQUOTE_, "__om_app_state": om.core._STAR_state_STAR_, "key": rkey, "__om_init_state": init_state, "children": (((opts == null))?((function (map__11473,map__11473__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_11474 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor_SINGLEQUOTE_,this$);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11474;
}});})(map__11473,map__11473__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__11473,map__11473__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_11475 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor_SINGLEQUOTE_,this$,opts);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11475;
}});})(map__11473,map__11473__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_instrument": om.core._STAR_instrument_STAR_, "__om_state": state});
} else
{return null;
}
}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a cursor, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument will be
* the cursor and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* cursor - an ICursor instance
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets cursor
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,cursor){return build.call(null,f,cursor,null);
});
var build__3 = (function (f,cursor,m){if(!((om.core._STAR_instrument_STAR_ == null)))
{var ret = (function (){var _STAR_read_enabled_STAR_11477 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._STAR_instrument_STAR_.call(null,f,cursor,m);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11477;
}})();if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268)))
{return om.core.build_STAR_.call(null,f,cursor,m);
} else
{return ret;
}
} else
{return om.core.build_STAR_.call(null,f,cursor,m);
}
});
build = function(f,cursor,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,cursor);
case 3:
return build__3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of cursors, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){return cljs.core.map.call(null,(function (x,i){return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){if((function (){var G__11486 = state;if(G__11486)
{var bit__8520__auto__ = null;if(cljs.core.truth_((function (){var or__7870__auto__ = bit__8520__auto__;if(cljs.core.truth_(or__7870__auto__))
{return or__7870__auto__;
} else
{return G__11486.om$core$INotify$;
}
})()))
{return true;
} else
{if((!G__11486.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__11486);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__11486);
}
})())
{} else
{var listeners_11494 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var render_queue_11495 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var x11487_11496 = state;x11487_11496.om$core$IRenderQueue$ = true;
x11487_11496.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x11487_11496,listeners_11494,render_queue_11495){
return (function (this$){var this$__$1 = this;return cljs.core.deref.call(null,render_queue_11495);
});})(x11487_11496,listeners_11494,render_queue_11495))
;
x11487_11496.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x11487_11496,listeners_11494,render_queue_11495){
return (function (this$,c){var this$__$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_11495),c))
{return null;
} else
{cljs.core.swap_BANG_.call(null,render_queue_11495,cljs.core.conj,c);
return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x11487_11496,listeners_11494,render_queue_11495))
;
x11487_11496.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x11487_11496,listeners_11494,render_queue_11495){
return (function (this$){var this$__$1 = this;return cljs.core.swap_BANG_.call(null,render_queue_11495,cljs.core.empty);
});})(x11487_11496,listeners_11494,render_queue_11495))
;
x11487_11496.om$core$INotify$ = true;
x11487_11496.om$core$INotify$_listen_BANG_$arity$3 = ((function (x11487_11496,listeners_11494,render_queue_11495){
return (function (this$,key__$1,tx_listen__$1){var this$__$1 = this;if((tx_listen__$1 == null))
{} else
{cljs.core.swap_BANG_.call(null,listeners_11494,cljs.core.assoc,key__$1,tx_listen__$1);
}
return this$__$1;
});})(x11487_11496,listeners_11494,render_queue_11495))
;
x11487_11496.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x11487_11496,listeners_11494,render_queue_11495){
return (function (this$,key__$1){var this$__$1 = this;cljs.core.swap_BANG_.call(null,listeners_11494,cljs.core.dissoc,key__$1);
return this$__$1;
});})(x11487_11496,listeners_11494,render_queue_11495))
;
x11487_11496.om$core$INotify$_notify_BANG_$arity$3 = ((function (x11487_11496,listeners_11494,render_queue_11495){
return (function (this$,tx_data,root_cursor){var this$__$1 = this;var seq__11488_11497 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_11494));var chunk__11489_11498 = null;var count__11490_11499 = (0);var i__11491_11500 = (0);while(true){
if((i__11491_11500 < count__11490_11499))
{var vec__11492_11501 = cljs.core._nth.call(null,chunk__11489_11498,i__11491_11500);var __11502 = cljs.core.nth.call(null,vec__11492_11501,(0),null);var f_11503 = cljs.core.nth.call(null,vec__11492_11501,(1),null);f_11503.call(null,tx_data,root_cursor);
{
var G__11504 = seq__11488_11497;
var G__11505 = chunk__11489_11498;
var G__11506 = count__11490_11499;
var G__11507 = (i__11491_11500 + (1));
seq__11488_11497 = G__11504;
chunk__11489_11498 = G__11505;
count__11490_11499 = G__11506;
i__11491_11500 = G__11507;
continue;
}
} else
{var temp__4126__auto___11508 = cljs.core.seq.call(null,seq__11488_11497);if(temp__4126__auto___11508)
{var seq__11488_11509__$1 = temp__4126__auto___11508;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11488_11509__$1))
{var c__8626__auto___11510 = cljs.core.chunk_first.call(null,seq__11488_11509__$1);{
var G__11511 = cljs.core.chunk_rest.call(null,seq__11488_11509__$1);
var G__11512 = c__8626__auto___11510;
var G__11513 = cljs.core.count.call(null,c__8626__auto___11510);
var G__11514 = (0);
seq__11488_11497 = G__11511;
chunk__11489_11498 = G__11512;
count__11490_11499 = G__11513;
i__11491_11500 = G__11514;
continue;
}
} else
{var vec__11493_11515 = cljs.core.first.call(null,seq__11488_11509__$1);var __11516 = cljs.core.nth.call(null,vec__11493_11515,(0),null);var f_11517 = cljs.core.nth.call(null,vec__11493_11515,(1),null);f_11517.call(null,tx_data,root_cursor);
{
var G__11518 = cljs.core.next.call(null,seq__11488_11509__$1);
var G__11519 = null;
var G__11520 = (0);
var G__11521 = (0);
seq__11488_11497 = G__11518;
chunk__11489_11498 = G__11519;
count__11490_11499 = G__11520;
i__11491_11500 = G__11521;
continue;
}
}
} else
{}
}
break;
}
return this$__$1;
});})(x11487_11496,listeners_11494,render_queue_11495))
;
}
return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){return om.core._unlisten_BANG_.call(null,state,key);
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__11522){var map__11537 = p__11522;var map__11537__$1 = ((cljs.core.seq_QMARK_.call(null,map__11537))?cljs.core.apply.call(null,cljs.core.hash_map,map__11537):map__11537);var options = map__11537__$1;var instrument = cljs.core.get.call(null,map__11537__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));var path = cljs.core.get.call(null,map__11537__$1,new cljs.core.Keyword(null,"path","path",-188191168));var tx_listen = cljs.core.get.call(null,map__11537__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));var target = cljs.core.get.call(null,map__11537__$1,new cljs.core.Keyword(null,"target","target",253001721));if(!((target == null)))
{} else
{throw (new Error(("Assert failed: No target specified to om.core/root\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))))));
}
var roots_SINGLEQUOTE__11551 = cljs.core.deref.call(null,om.core.roots);if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__11551,target))
{cljs.core.get.call(null,roots_SINGLEQUOTE__11551,target).call(null);
} else
{}
var watch_key = cljs.core.gensym.call(null);var state = (((function (){var G__11538 = value;if(G__11538)
{var bit__8520__auto__ = (G__11538.cljs$lang$protocol_mask$partition1$ & (16384));if((bit__8520__auto__) || (G__11538.cljs$core$IAtom$))
{return true;
} else
{if((!G__11538.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__11538);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__11538);
}
})())?value:cljs.core.atom.call(null,value));var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168));var rootf = ((function (watch_key,state,state__$1,m,map__11537,map__11537__$1,options,instrument,path,tx_listen,target){
return (function rootf(){cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = cljs.core.deref.call(null,state__$1);var cursor = (((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path));om.dom.render.call(null,(function (){var _STAR_instrument_STAR_11545 = om.core._STAR_instrument_STAR_;var _STAR_state_STAR_11546 = om.core._STAR_state_STAR_;try{om.core._STAR_instrument_STAR_ = instrument;
om.core._STAR_state_STAR_ = state__$1;
return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_state_STAR_ = _STAR_state_STAR_11546;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_11545;
}})(),target);
var queue = om.core._get_queue.call(null,state__$1);if(cljs.core.empty_QMARK_.call(null,queue))
{return null;
} else
{var seq__11547_11552 = cljs.core.seq.call(null,queue);var chunk__11548_11553 = null;var count__11549_11554 = (0);var i__11550_11555 = (0);while(true){
if((i__11550_11555 < count__11549_11554))
{var c_11556 = cljs.core._nth.call(null,chunk__11548_11553,i__11550_11555);if(cljs.core.truth_(c_11556.isMounted()))
{c_11556.forceUpdate();
} else
{}
{
var G__11557 = seq__11547_11552;
var G__11558 = chunk__11548_11553;
var G__11559 = count__11549_11554;
var G__11560 = (i__11550_11555 + (1));
seq__11547_11552 = G__11557;
chunk__11548_11553 = G__11558;
count__11549_11554 = G__11559;
i__11550_11555 = G__11560;
continue;
}
} else
{var temp__4126__auto___11561 = cljs.core.seq.call(null,seq__11547_11552);if(temp__4126__auto___11561)
{var seq__11547_11562__$1 = temp__4126__auto___11561;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11547_11562__$1))
{var c__8626__auto___11563 = cljs.core.chunk_first.call(null,seq__11547_11562__$1);{
var G__11564 = cljs.core.chunk_rest.call(null,seq__11547_11562__$1);
var G__11565 = c__8626__auto___11563;
var G__11566 = cljs.core.count.call(null,c__8626__auto___11563);
var G__11567 = (0);
seq__11547_11552 = G__11564;
chunk__11548_11553 = G__11565;
count__11549_11554 = G__11566;
i__11550_11555 = G__11567;
continue;
}
} else
{var c_11568 = cljs.core.first.call(null,seq__11547_11562__$1);if(cljs.core.truth_(c_11568.isMounted()))
{c_11568.forceUpdate();
} else
{}
{
var G__11569 = cljs.core.next.call(null,seq__11547_11562__$1);
var G__11570 = null;
var G__11571 = (0);
var G__11572 = (0);
seq__11547_11552 = G__11569;
chunk__11548_11553 = G__11570;
count__11549_11554 = G__11571;
i__11550_11555 = G__11572;
continue;
}
}
} else
{}
}
break;
}
return om.core._empty_queue_BANG_.call(null,state__$1);
}
});})(watch_key,state,state__$1,m,map__11537,map__11537__$1,options,instrument,path,tx_listen,target))
;cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,m,rootf,map__11537,map__11537__$1,options,instrument,path,tx_listen,target){
return (function (_,___$1,___$2,___$3){if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf))
{} else
{cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame(om.core.render_all);
} else
{return setTimeout(om.core.render_all,(16));
}
}
});})(watch_key,state,state__$1,m,rootf,map__11537,map__11537__$1,options,instrument,path,tx_listen,target))
);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,m,rootf,map__11537,map__11537__$1,options,instrument,path,tx_listen,target){
return (function (){cljs.core.remove_watch.call(null,state__$1,watch_key);
om.core.tear_down.call(null,state__$1,watch_key);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);
return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,m,rootf,map__11537,map__11537__$1,options,instrument,path,tx_listen,target))
);
return rootf.call(null);
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){return transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){return transact_BANG_.call(null,cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:((new cljs.core.Keyword(null,"else","else",-1508377146))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null):null)));return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){return om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){return om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){var temp__4126__auto__ = owner.refs;if(cljs.core.truth_(temp__4126__auto__))
{var refs = temp__4126__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.call(null,owner,v);
});
var set_state_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.call(null,owner,ks,v);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_BANG___3 = (function (owner,korks,f){return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){return om.core._get_render_state.call(null,owner);
});
var get_render_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_render_state.call(null,owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
/**
* Returns true if in the React render phase.
*/
om.core.rendering_QMARK_ = (function rendering_QMARK_(){return om.core._STAR_read_enabled_STAR_ === true;
});

//# sourceMappingURL=core.js.map