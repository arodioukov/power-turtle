// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42245 = arguments.length;
switch (G__42245) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async42246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42246 = (function (f,blockable,meta42247){
this.f = f;
this.blockable = blockable;
this.meta42247 = meta42247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42248,meta42247__$1){
var self__ = this;
var _42248__$1 = this;
return (new cljs.core.async.t_cljs$core$async42246(self__.f,self__.blockable,meta42247__$1));
});

cljs.core.async.t_cljs$core$async42246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42248){
var self__ = this;
var _42248__$1 = this;
return self__.meta42247;
});

cljs.core.async.t_cljs$core$async42246.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42246.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42246.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async42246.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async42246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42247","meta42247",-1030692671,null)], null);
});

cljs.core.async.t_cljs$core$async42246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42246";

cljs.core.async.t_cljs$core$async42246.cljs$lang$ctorPrWriter = (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async42246");
});

cljs.core.async.__GT_t_cljs$core$async42246 = (function cljs$core$async$__GT_t_cljs$core$async42246(f__$1,blockable__$1,meta42247){
return (new cljs.core.async.t_cljs$core$async42246(f__$1,blockable__$1,meta42247));
});

}

return (new cljs.core.async.t_cljs$core$async42246(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__42252 = arguments.length;
switch (G__42252) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__42255 = arguments.length;
switch (G__42255) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__42258 = arguments.length;
switch (G__42258) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_42260 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_42260);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_42260,ret){
return (function (){
return fn1.call(null,val_42260);
});})(val_42260,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__42262 = arguments.length;
switch (G__42262) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a__$1 = (new Array(n));
var n__29084__auto___42264 = n;
var x_42265 = (0);
while(true){
if((x_42265 < n__29084__auto___42264)){
(a__$1[x_42265] = (0));

var G__42266 = (x_42265 + (1));
x_42265 = G__42266;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a__$1;
} else {
var j = cljs.core.rand_int.call(null,i);
(a__$1[i] = (a__$1[j]));

(a__$1[j] = i);

var G__42267 = (i + (1));
i = G__42267;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async42268 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42268 = (function (flag,meta42269){
this.flag = flag;
this.meta42269 = meta42269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42270,meta42269__$1){
var self__ = this;
var _42270__$1 = this;
return (new cljs.core.async.t_cljs$core$async42268(self__.flag,meta42269__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async42268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42270){
var self__ = this;
var _42270__$1 = this;
return self__.meta42269;
});})(flag))
;

cljs.core.async.t_cljs$core$async42268.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async42268.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42268.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42269","meta42269",156494123,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async42268.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42268";

cljs.core.async.t_cljs$core$async42268.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async42268");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async42268 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42268(flag__$1,meta42269){
return (new cljs.core.async.t_cljs$core$async42268(flag__$1,meta42269));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async42268(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async42271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42271 = (function (flag,cb,meta42272){
this.flag = flag;
this.cb = cb;
this.meta42272 = meta42272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42273,meta42272__$1){
var self__ = this;
var _42273__$1 = this;
return (new cljs.core.async.t_cljs$core$async42271(self__.flag,self__.cb,meta42272__$1));
});

cljs.core.async.t_cljs$core$async42271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42273){
var self__ = this;
var _42273__$1 = this;
return self__.meta42272;
});

cljs.core.async.t_cljs$core$async42271.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async42271.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42272","meta42272",-1181849689,null)], null);
});

cljs.core.async.t_cljs$core$async42271.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42271";

cljs.core.async.t_cljs$core$async42271.cljs$lang$ctorPrWriter = (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async42271");
});

cljs.core.async.__GT_t_cljs$core$async42271 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42271(flag__$1,cb__$1,meta42272){
return (new cljs.core.async.t_cljs$core$async42271(flag__$1,cb__$1,meta42272));
});

}

return (new cljs.core.async.t_cljs$core$async42271(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42274_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42274_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42275_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42275_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28139__auto__ = wport;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42276 = (i + (1));
i = G__42276;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28139__auto__ = ret;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28127__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28127__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28127__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29315__auto__ = [];
var len__29308__auto___42282 = arguments.length;
var i__29309__auto___42283 = (0);
while(true){
if((i__29309__auto___42283 < len__29308__auto___42282)){
args__29315__auto__.push((arguments[i__29309__auto___42283]));

var G__42284 = (i__29309__auto___42283 + (1));
i__29309__auto___42283 = G__42284;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((1) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29316__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42279){
var map__42280 = p__42279;
var map__42280__$1 = ((((!((map__42280 == null)))?((((map__42280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42280):map__42280);
var opts = map__42280__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42277){
var G__42278 = cljs.core.first.call(null,seq42277);
var seq42277__$1 = cljs.core.next.call(null,seq42277);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42278,seq42277__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__42286 = arguments.length;
switch (G__42286) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__42199__auto___42332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto___42332){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto___42332){
return (function (state_42310){
var state_val_42311 = (state_42310[(1)]);
if((state_val_42311 === (7))){
var inst_42306 = (state_42310[(2)]);
var state_42310__$1 = state_42310;
var statearr_42312_42333 = state_42310__$1;
(statearr_42312_42333[(2)] = inst_42306);

(statearr_42312_42333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (1))){
var state_42310__$1 = state_42310;
var statearr_42313_42334 = state_42310__$1;
(statearr_42313_42334[(2)] = null);

(statearr_42313_42334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (4))){
var inst_42289 = (state_42310[(7)]);
var inst_42289__$1 = (state_42310[(2)]);
var inst_42290 = (inst_42289__$1 == null);
var state_42310__$1 = (function (){var statearr_42314 = state_42310;
(statearr_42314[(7)] = inst_42289__$1);

return statearr_42314;
})();
if(cljs.core.truth_(inst_42290)){
var statearr_42315_42335 = state_42310__$1;
(statearr_42315_42335[(1)] = (5));

} else {
var statearr_42316_42336 = state_42310__$1;
(statearr_42316_42336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (13))){
var state_42310__$1 = state_42310;
var statearr_42317_42337 = state_42310__$1;
(statearr_42317_42337[(2)] = null);

(statearr_42317_42337[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (6))){
var inst_42289 = (state_42310[(7)]);
var state_42310__$1 = state_42310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42310__$1,(11),to,inst_42289);
} else {
if((state_val_42311 === (3))){
var inst_42308 = (state_42310[(2)]);
var state_42310__$1 = state_42310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42310__$1,inst_42308);
} else {
if((state_val_42311 === (12))){
var state_42310__$1 = state_42310;
var statearr_42318_42338 = state_42310__$1;
(statearr_42318_42338[(2)] = null);

(statearr_42318_42338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (2))){
var state_42310__$1 = state_42310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42310__$1,(4),from);
} else {
if((state_val_42311 === (11))){
var inst_42299 = (state_42310[(2)]);
var state_42310__$1 = state_42310;
if(cljs.core.truth_(inst_42299)){
var statearr_42319_42339 = state_42310__$1;
(statearr_42319_42339[(1)] = (12));

} else {
var statearr_42320_42340 = state_42310__$1;
(statearr_42320_42340[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (9))){
var state_42310__$1 = state_42310;
var statearr_42321_42341 = state_42310__$1;
(statearr_42321_42341[(2)] = null);

(statearr_42321_42341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (5))){
var state_42310__$1 = state_42310;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42322_42342 = state_42310__$1;
(statearr_42322_42342[(1)] = (8));

} else {
var statearr_42323_42343 = state_42310__$1;
(statearr_42323_42343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (14))){
var inst_42304 = (state_42310[(2)]);
var state_42310__$1 = state_42310;
var statearr_42324_42344 = state_42310__$1;
(statearr_42324_42344[(2)] = inst_42304);

(statearr_42324_42344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (10))){
var inst_42296 = (state_42310[(2)]);
var state_42310__$1 = state_42310;
var statearr_42325_42345 = state_42310__$1;
(statearr_42325_42345[(2)] = inst_42296);

(statearr_42325_42345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (8))){
var inst_42293 = cljs.core.async.close_BANG_.call(null,to);
var state_42310__$1 = state_42310;
var statearr_42326_42346 = state_42310__$1;
(statearr_42326_42346[(2)] = inst_42293);

(statearr_42326_42346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__42199__auto___42332))
;
return ((function (switch__42111__auto__,c__42199__auto___42332){
return (function() {
var cljs$core$async$state_machine__42112__auto__ = null;
var cljs$core$async$state_machine__42112__auto____0 = (function (){
var statearr_42327 = [null,null,null,null,null,null,null,null];
(statearr_42327[(0)] = cljs$core$async$state_machine__42112__auto__);

(statearr_42327[(1)] = (1));

return statearr_42327;
});
var cljs$core$async$state_machine__42112__auto____1 = (function (state_42310){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_42310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e42328){if((e42328 instanceof Object)){
var ex__42115__auto__ = e42328;
var statearr_42329_42347 = state_42310;
(statearr_42329_42347[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42348 = state_42310;
state_42310 = G__42348;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$state_machine__42112__auto__ = function(state_42310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42112__auto____1.call(this,state_42310);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42112__auto____0;
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42112__auto____1;
return cljs$core$async$state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto___42332))
})();
var state__42201__auto__ = (function (){var statearr_42330 = f__42200__auto__.call(null);
(statearr_42330[(6)] = c__42199__auto___42332);

return statearr_42330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto___42332))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__42349){
var vec__42350 = p__42349;
var v = cljs.core.nth.call(null,vec__42350,(0),null);
var p = cljs.core.nth.call(null,vec__42350,(1),null);
var job = vec__42350;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__42199__auto___42521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto___42521,res,vec__42350,v,p,job,jobs,results){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto___42521,res,vec__42350,v,p,job,jobs,results){
return (function (state_42357){
var state_val_42358 = (state_42357[(1)]);
if((state_val_42358 === (1))){
var state_42357__$1 = state_42357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42357__$1,(2),res,v);
} else {
if((state_val_42358 === (2))){
var inst_42354 = (state_42357[(2)]);
var inst_42355 = cljs.core.async.close_BANG_.call(null,res);
var state_42357__$1 = (function (){var statearr_42359 = state_42357;
(statearr_42359[(7)] = inst_42354);

return statearr_42359;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42357__$1,inst_42355);
} else {
return null;
}
}
});})(c__42199__auto___42521,res,vec__42350,v,p,job,jobs,results))
;
return ((function (switch__42111__auto__,c__42199__auto___42521,res,vec__42350,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____0 = (function (){
var statearr_42360 = [null,null,null,null,null,null,null,null];
(statearr_42360[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__);

(statearr_42360[(1)] = (1));

return statearr_42360;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____1 = (function (state_42357){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_42357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e42361){if((e42361 instanceof Object)){
var ex__42115__auto__ = e42361;
var statearr_42362_42522 = state_42357;
(statearr_42362_42522[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42523 = state_42357;
state_42357 = G__42523;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__ = function(state_42357){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____1.call(this,state_42357);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto___42521,res,vec__42350,v,p,job,jobs,results))
})();
var state__42201__auto__ = (function (){var statearr_42363 = f__42200__auto__.call(null);
(statearr_42363[(6)] = c__42199__auto___42521);

return statearr_42363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto___42521,res,vec__42350,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42364){
var vec__42365 = p__42364;
var v = cljs.core.nth.call(null,vec__42365,(0),null);
var p = cljs.core.nth.call(null,vec__42365,(1),null);
var job = vec__42365;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29084__auto___42524 = n;
var __42525 = (0);
while(true){
if((__42525 < n__29084__auto___42524)){
var G__42368_42526 = type;
var G__42368_42527__$1 = (((G__42368_42526 instanceof cljs.core.Keyword))?G__42368_42526.fqn:null);
switch (G__42368_42527__$1) {
case "compute":
var c__42199__auto___42529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42525,c__42199__auto___42529,G__42368_42526,G__42368_42527__$1,n__29084__auto___42524,jobs,results,process,async){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (__42525,c__42199__auto___42529,G__42368_42526,G__42368_42527__$1,n__29084__auto___42524,jobs,results,process,async){
return (function (state_42381){
var state_val_42382 = (state_42381[(1)]);
if((state_val_42382 === (1))){
var state_42381__$1 = state_42381;
var statearr_42383_42530 = state_42381__$1;
(statearr_42383_42530[(2)] = null);

(statearr_42383_42530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (2))){
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42381__$1,(4),jobs);
} else {
if((state_val_42382 === (3))){
var inst_42379 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42381__$1,inst_42379);
} else {
if((state_val_42382 === (4))){
var inst_42371 = (state_42381[(2)]);
var inst_42372 = process.call(null,inst_42371);
var state_42381__$1 = state_42381;
if(cljs.core.truth_(inst_42372)){
var statearr_42384_42531 = state_42381__$1;
(statearr_42384_42531[(1)] = (5));

} else {
var statearr_42385_42532 = state_42381__$1;
(statearr_42385_42532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (5))){
var state_42381__$1 = state_42381;
var statearr_42386_42533 = state_42381__$1;
(statearr_42386_42533[(2)] = null);

(statearr_42386_42533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (6))){
var state_42381__$1 = state_42381;
var statearr_42387_42534 = state_42381__$1;
(statearr_42387_42534[(2)] = null);

(statearr_42387_42534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (7))){
var inst_42377 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42388_42535 = state_42381__$1;
(statearr_42388_42535[(2)] = inst_42377);

(statearr_42388_42535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__42525,c__42199__auto___42529,G__42368_42526,G__42368_42527__$1,n__29084__auto___42524,jobs,results,process,async))
;
return ((function (__42525,switch__42111__auto__,c__42199__auto___42529,G__42368_42526,G__42368_42527__$1,n__29084__auto___42524,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____0 = (function (){
var statearr_42389 = [null,null,null,null,null,null,null];
(statearr_42389[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__);

(statearr_42389[(1)] = (1));

return statearr_42389;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____1 = (function (state_42381){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_42381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e42390){if((e42390 instanceof Object)){
var ex__42115__auto__ = e42390;
var statearr_42391_42536 = state_42381;
(statearr_42391_42536[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42537 = state_42381;
state_42381 = G__42537;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__ = function(state_42381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____1.call(this,state_42381);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__;
})()
;})(__42525,switch__42111__auto__,c__42199__auto___42529,G__42368_42526,G__42368_42527__$1,n__29084__auto___42524,jobs,results,process,async))
})();
var state__42201__auto__ = (function (){var statearr_42392 = f__42200__auto__.call(null);
(statearr_42392[(6)] = c__42199__auto___42529);

return statearr_42392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(__42525,c__42199__auto___42529,G__42368_42526,G__42368_42527__$1,n__29084__auto___42524,jobs,results,process,async))
);


break;
case "async":
var c__42199__auto___42538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42525,c__42199__auto___42538,G__42368_42526,G__42368_42527__$1,n__29084__auto___42524,jobs,results,process,async){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (__42525,c__42199__auto___42538,G__42368_42526,G__42368_42527__$1,n__29084__auto___42524,jobs,results,process,async){
return (function (state_42405){
var state_val_42406 = (state_42405[(1)]);
if((state_val_42406 === (1))){
var state_42405__$1 = state_42405;
var statearr_42407_42539 = state_42405__$1;
(statearr_42407_42539[(2)] = null);

(statearr_42407_42539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42406 === (2))){
var state_42405__$1 = state_42405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42405__$1,(4),jobs);
} else {
if((state_val_42406 === (3))){
var inst_42403 = (state_42405[(2)]);
var state_42405__$1 = state_42405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42405__$1,inst_42403);
} else {
if((state_val_42406 === (4))){
var inst_42395 = (state_42405[(2)]);
var inst_42396 = async.call(null,inst_42395);
var state_42405__$1 = state_42405;
if(cljs.core.truth_(inst_42396)){
var statearr_42408_42540 = state_42405__$1;
(statearr_42408_42540[(1)] = (5));

} else {
var statearr_42409_42541 = state_42405__$1;
(statearr_42409_42541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42406 === (5))){
var state_42405__$1 = state_42405;
var statearr_42410_42542 = state_42405__$1;
(statearr_42410_42542[(2)] = null);

(statearr_42410_42542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42406 === (6))){
var state_42405__$1 = state_42405;
var statearr_42411_42543 = state_42405__$1;
(statearr_42411_42543[(2)] = null);

(statearr_42411_42543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42406 === (7))){
var inst_42401 = (state_42405[(2)]);
var state_42405__$1 = state_42405;
var statearr_42412_42544 = state_42405__$1;
(statearr_42412_42544[(2)] = inst_42401);

(statearr_42412_42544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__42525,c__42199__auto___42538,G__42368_42526,G__42368_42527__$1,n__29084__auto___42524,jobs,results,process,async))
;
return ((function (__42525,switch__42111__auto__,c__42199__auto___42538,G__42368_42526,G__42368_42527__$1,n__29084__auto___42524,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____0 = (function (){
var statearr_42413 = [null,null,null,null,null,null,null];
(statearr_42413[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__);

(statearr_42413[(1)] = (1));

return statearr_42413;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____1 = (function (state_42405){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_42405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e42414){if((e42414 instanceof Object)){
var ex__42115__auto__ = e42414;
var statearr_42415_42545 = state_42405;
(statearr_42415_42545[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42546 = state_42405;
state_42405 = G__42546;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__ = function(state_42405){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____1.call(this,state_42405);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__;
})()
;})(__42525,switch__42111__auto__,c__42199__auto___42538,G__42368_42526,G__42368_42527__$1,n__29084__auto___42524,jobs,results,process,async))
})();
var state__42201__auto__ = (function (){var statearr_42416 = f__42200__auto__.call(null);
(statearr_42416[(6)] = c__42199__auto___42538);

return statearr_42416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(__42525,c__42199__auto___42538,G__42368_42526,G__42368_42527__$1,n__29084__auto___42524,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42368_42527__$1)].join('')));

}

var G__42547 = (__42525 + (1));
__42525 = G__42547;
continue;
} else {
}
break;
}

var c__42199__auto___42548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto___42548,jobs,results,process,async){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto___42548,jobs,results,process,async){
return (function (state_42438){
var state_val_42439 = (state_42438[(1)]);
if((state_val_42439 === (1))){
var state_42438__$1 = state_42438;
var statearr_42440_42549 = state_42438__$1;
(statearr_42440_42549[(2)] = null);

(statearr_42440_42549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (2))){
var state_42438__$1 = state_42438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42438__$1,(4),from);
} else {
if((state_val_42439 === (3))){
var inst_42436 = (state_42438[(2)]);
var state_42438__$1 = state_42438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42438__$1,inst_42436);
} else {
if((state_val_42439 === (4))){
var inst_42419 = (state_42438[(7)]);
var inst_42419__$1 = (state_42438[(2)]);
var inst_42420 = (inst_42419__$1 == null);
var state_42438__$1 = (function (){var statearr_42441 = state_42438;
(statearr_42441[(7)] = inst_42419__$1);

return statearr_42441;
})();
if(cljs.core.truth_(inst_42420)){
var statearr_42442_42550 = state_42438__$1;
(statearr_42442_42550[(1)] = (5));

} else {
var statearr_42443_42551 = state_42438__$1;
(statearr_42443_42551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (5))){
var inst_42422 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42438__$1 = state_42438;
var statearr_42444_42552 = state_42438__$1;
(statearr_42444_42552[(2)] = inst_42422);

(statearr_42444_42552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (6))){
var inst_42419 = (state_42438[(7)]);
var inst_42424 = (state_42438[(8)]);
var inst_42424__$1 = cljs.core.async.chan.call(null,(1));
var inst_42425 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42426 = [inst_42419,inst_42424__$1];
var inst_42427 = (new cljs.core.PersistentVector(null,2,(5),inst_42425,inst_42426,null));
var state_42438__$1 = (function (){var statearr_42445 = state_42438;
(statearr_42445[(8)] = inst_42424__$1);

return statearr_42445;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42438__$1,(8),jobs,inst_42427);
} else {
if((state_val_42439 === (7))){
var inst_42434 = (state_42438[(2)]);
var state_42438__$1 = state_42438;
var statearr_42446_42553 = state_42438__$1;
(statearr_42446_42553[(2)] = inst_42434);

(statearr_42446_42553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (8))){
var inst_42424 = (state_42438[(8)]);
var inst_42429 = (state_42438[(2)]);
var state_42438__$1 = (function (){var statearr_42447 = state_42438;
(statearr_42447[(9)] = inst_42429);

return statearr_42447;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42438__$1,(9),results,inst_42424);
} else {
if((state_val_42439 === (9))){
var inst_42431 = (state_42438[(2)]);
var state_42438__$1 = (function (){var statearr_42448 = state_42438;
(statearr_42448[(10)] = inst_42431);

return statearr_42448;
})();
var statearr_42449_42554 = state_42438__$1;
(statearr_42449_42554[(2)] = null);

(statearr_42449_42554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__42199__auto___42548,jobs,results,process,async))
;
return ((function (switch__42111__auto__,c__42199__auto___42548,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____0 = (function (){
var statearr_42450 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42450[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__);

(statearr_42450[(1)] = (1));

return statearr_42450;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____1 = (function (state_42438){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_42438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e42451){if((e42451 instanceof Object)){
var ex__42115__auto__ = e42451;
var statearr_42452_42555 = state_42438;
(statearr_42452_42555[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42556 = state_42438;
state_42438 = G__42556;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__ = function(state_42438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____1.call(this,state_42438);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto___42548,jobs,results,process,async))
})();
var state__42201__auto__ = (function (){var statearr_42453 = f__42200__auto__.call(null);
(statearr_42453[(6)] = c__42199__auto___42548);

return statearr_42453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto___42548,jobs,results,process,async))
);


var c__42199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto__,jobs,results,process,async){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto__,jobs,results,process,async){
return (function (state_42491){
var state_val_42492 = (state_42491[(1)]);
if((state_val_42492 === (7))){
var inst_42487 = (state_42491[(2)]);
var state_42491__$1 = state_42491;
var statearr_42493_42557 = state_42491__$1;
(statearr_42493_42557[(2)] = inst_42487);

(statearr_42493_42557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (20))){
var state_42491__$1 = state_42491;
var statearr_42494_42558 = state_42491__$1;
(statearr_42494_42558[(2)] = null);

(statearr_42494_42558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (1))){
var state_42491__$1 = state_42491;
var statearr_42495_42559 = state_42491__$1;
(statearr_42495_42559[(2)] = null);

(statearr_42495_42559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (4))){
var inst_42456 = (state_42491[(7)]);
var inst_42456__$1 = (state_42491[(2)]);
var inst_42457 = (inst_42456__$1 == null);
var state_42491__$1 = (function (){var statearr_42496 = state_42491;
(statearr_42496[(7)] = inst_42456__$1);

return statearr_42496;
})();
if(cljs.core.truth_(inst_42457)){
var statearr_42497_42560 = state_42491__$1;
(statearr_42497_42560[(1)] = (5));

} else {
var statearr_42498_42561 = state_42491__$1;
(statearr_42498_42561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (15))){
var inst_42469 = (state_42491[(8)]);
var state_42491__$1 = state_42491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42491__$1,(18),to,inst_42469);
} else {
if((state_val_42492 === (21))){
var inst_42482 = (state_42491[(2)]);
var state_42491__$1 = state_42491;
var statearr_42499_42562 = state_42491__$1;
(statearr_42499_42562[(2)] = inst_42482);

(statearr_42499_42562[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (13))){
var inst_42484 = (state_42491[(2)]);
var state_42491__$1 = (function (){var statearr_42500 = state_42491;
(statearr_42500[(9)] = inst_42484);

return statearr_42500;
})();
var statearr_42501_42563 = state_42491__$1;
(statearr_42501_42563[(2)] = null);

(statearr_42501_42563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (6))){
var inst_42456 = (state_42491[(7)]);
var state_42491__$1 = state_42491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42491__$1,(11),inst_42456);
} else {
if((state_val_42492 === (17))){
var inst_42477 = (state_42491[(2)]);
var state_42491__$1 = state_42491;
if(cljs.core.truth_(inst_42477)){
var statearr_42502_42564 = state_42491__$1;
(statearr_42502_42564[(1)] = (19));

} else {
var statearr_42503_42565 = state_42491__$1;
(statearr_42503_42565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (3))){
var inst_42489 = (state_42491[(2)]);
var state_42491__$1 = state_42491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42491__$1,inst_42489);
} else {
if((state_val_42492 === (12))){
var inst_42466 = (state_42491[(10)]);
var state_42491__$1 = state_42491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42491__$1,(14),inst_42466);
} else {
if((state_val_42492 === (2))){
var state_42491__$1 = state_42491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42491__$1,(4),results);
} else {
if((state_val_42492 === (19))){
var state_42491__$1 = state_42491;
var statearr_42504_42566 = state_42491__$1;
(statearr_42504_42566[(2)] = null);

(statearr_42504_42566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (11))){
var inst_42466 = (state_42491[(2)]);
var state_42491__$1 = (function (){var statearr_42505 = state_42491;
(statearr_42505[(10)] = inst_42466);

return statearr_42505;
})();
var statearr_42506_42567 = state_42491__$1;
(statearr_42506_42567[(2)] = null);

(statearr_42506_42567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (9))){
var state_42491__$1 = state_42491;
var statearr_42507_42568 = state_42491__$1;
(statearr_42507_42568[(2)] = null);

(statearr_42507_42568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (5))){
var state_42491__$1 = state_42491;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42508_42569 = state_42491__$1;
(statearr_42508_42569[(1)] = (8));

} else {
var statearr_42509_42570 = state_42491__$1;
(statearr_42509_42570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (14))){
var inst_42471 = (state_42491[(11)]);
var inst_42469 = (state_42491[(8)]);
var inst_42469__$1 = (state_42491[(2)]);
var inst_42470 = (inst_42469__$1 == null);
var inst_42471__$1 = cljs.core.not.call(null,inst_42470);
var state_42491__$1 = (function (){var statearr_42510 = state_42491;
(statearr_42510[(11)] = inst_42471__$1);

(statearr_42510[(8)] = inst_42469__$1);

return statearr_42510;
})();
if(inst_42471__$1){
var statearr_42511_42571 = state_42491__$1;
(statearr_42511_42571[(1)] = (15));

} else {
var statearr_42512_42572 = state_42491__$1;
(statearr_42512_42572[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (16))){
var inst_42471 = (state_42491[(11)]);
var state_42491__$1 = state_42491;
var statearr_42513_42573 = state_42491__$1;
(statearr_42513_42573[(2)] = inst_42471);

(statearr_42513_42573[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (10))){
var inst_42463 = (state_42491[(2)]);
var state_42491__$1 = state_42491;
var statearr_42514_42574 = state_42491__$1;
(statearr_42514_42574[(2)] = inst_42463);

(statearr_42514_42574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (18))){
var inst_42474 = (state_42491[(2)]);
var state_42491__$1 = state_42491;
var statearr_42515_42575 = state_42491__$1;
(statearr_42515_42575[(2)] = inst_42474);

(statearr_42515_42575[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (8))){
var inst_42460 = cljs.core.async.close_BANG_.call(null,to);
var state_42491__$1 = state_42491;
var statearr_42516_42576 = state_42491__$1;
(statearr_42516_42576[(2)] = inst_42460);

(statearr_42516_42576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__42199__auto__,jobs,results,process,async))
;
return ((function (switch__42111__auto__,c__42199__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____0 = (function (){
var statearr_42517 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__);

(statearr_42517[(1)] = (1));

return statearr_42517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____1 = (function (state_42491){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_42491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e42518){if((e42518 instanceof Object)){
var ex__42115__auto__ = e42518;
var statearr_42519_42577 = state_42491;
(statearr_42519_42577[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42578 = state_42491;
state_42491 = G__42578;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__ = function(state_42491){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____1.call(this,state_42491);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42112__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto__,jobs,results,process,async))
})();
var state__42201__auto__ = (function (){var statearr_42520 = f__42200__auto__.call(null);
(statearr_42520[(6)] = c__42199__auto__);

return statearr_42520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto__,jobs,results,process,async))
);

return c__42199__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__42580 = arguments.length;
switch (G__42580) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__42583 = arguments.length;
switch (G__42583) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__42586 = arguments.length;
switch (G__42586) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__42199__auto___42635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto___42635,tc,fc){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto___42635,tc,fc){
return (function (state_42612){
var state_val_42613 = (state_42612[(1)]);
if((state_val_42613 === (7))){
var inst_42608 = (state_42612[(2)]);
var state_42612__$1 = state_42612;
var statearr_42614_42636 = state_42612__$1;
(statearr_42614_42636[(2)] = inst_42608);

(statearr_42614_42636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42613 === (1))){
var state_42612__$1 = state_42612;
var statearr_42615_42637 = state_42612__$1;
(statearr_42615_42637[(2)] = null);

(statearr_42615_42637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42613 === (4))){
var inst_42589 = (state_42612[(7)]);
var inst_42589__$1 = (state_42612[(2)]);
var inst_42590 = (inst_42589__$1 == null);
var state_42612__$1 = (function (){var statearr_42616 = state_42612;
(statearr_42616[(7)] = inst_42589__$1);

return statearr_42616;
})();
if(cljs.core.truth_(inst_42590)){
var statearr_42617_42638 = state_42612__$1;
(statearr_42617_42638[(1)] = (5));

} else {
var statearr_42618_42639 = state_42612__$1;
(statearr_42618_42639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42613 === (13))){
var state_42612__$1 = state_42612;
var statearr_42619_42640 = state_42612__$1;
(statearr_42619_42640[(2)] = null);

(statearr_42619_42640[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42613 === (6))){
var inst_42589 = (state_42612[(7)]);
var inst_42595 = p.call(null,inst_42589);
var state_42612__$1 = state_42612;
if(cljs.core.truth_(inst_42595)){
var statearr_42620_42641 = state_42612__$1;
(statearr_42620_42641[(1)] = (9));

} else {
var statearr_42621_42642 = state_42612__$1;
(statearr_42621_42642[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42613 === (3))){
var inst_42610 = (state_42612[(2)]);
var state_42612__$1 = state_42612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42612__$1,inst_42610);
} else {
if((state_val_42613 === (12))){
var state_42612__$1 = state_42612;
var statearr_42622_42643 = state_42612__$1;
(statearr_42622_42643[(2)] = null);

(statearr_42622_42643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42613 === (2))){
var state_42612__$1 = state_42612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42612__$1,(4),ch);
} else {
if((state_val_42613 === (11))){
var inst_42589 = (state_42612[(7)]);
var inst_42599 = (state_42612[(2)]);
var state_42612__$1 = state_42612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42612__$1,(8),inst_42599,inst_42589);
} else {
if((state_val_42613 === (9))){
var state_42612__$1 = state_42612;
var statearr_42623_42644 = state_42612__$1;
(statearr_42623_42644[(2)] = tc);

(statearr_42623_42644[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42613 === (5))){
var inst_42592 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42593 = cljs.core.async.close_BANG_.call(null,fc);
var state_42612__$1 = (function (){var statearr_42624 = state_42612;
(statearr_42624[(8)] = inst_42592);

return statearr_42624;
})();
var statearr_42625_42645 = state_42612__$1;
(statearr_42625_42645[(2)] = inst_42593);

(statearr_42625_42645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42613 === (14))){
var inst_42606 = (state_42612[(2)]);
var state_42612__$1 = state_42612;
var statearr_42626_42646 = state_42612__$1;
(statearr_42626_42646[(2)] = inst_42606);

(statearr_42626_42646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42613 === (10))){
var state_42612__$1 = state_42612;
var statearr_42627_42647 = state_42612__$1;
(statearr_42627_42647[(2)] = fc);

(statearr_42627_42647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42613 === (8))){
var inst_42601 = (state_42612[(2)]);
var state_42612__$1 = state_42612;
if(cljs.core.truth_(inst_42601)){
var statearr_42628_42648 = state_42612__$1;
(statearr_42628_42648[(1)] = (12));

} else {
var statearr_42629_42649 = state_42612__$1;
(statearr_42629_42649[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__42199__auto___42635,tc,fc))
;
return ((function (switch__42111__auto__,c__42199__auto___42635,tc,fc){
return (function() {
var cljs$core$async$state_machine__42112__auto__ = null;
var cljs$core$async$state_machine__42112__auto____0 = (function (){
var statearr_42630 = [null,null,null,null,null,null,null,null,null];
(statearr_42630[(0)] = cljs$core$async$state_machine__42112__auto__);

(statearr_42630[(1)] = (1));

return statearr_42630;
});
var cljs$core$async$state_machine__42112__auto____1 = (function (state_42612){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_42612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e42631){if((e42631 instanceof Object)){
var ex__42115__auto__ = e42631;
var statearr_42632_42650 = state_42612;
(statearr_42632_42650[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42651 = state_42612;
state_42612 = G__42651;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$state_machine__42112__auto__ = function(state_42612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42112__auto____1.call(this,state_42612);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42112__auto____0;
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42112__auto____1;
return cljs$core$async$state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto___42635,tc,fc))
})();
var state__42201__auto__ = (function (){var statearr_42633 = f__42200__auto__.call(null);
(statearr_42633[(6)] = c__42199__auto___42635);

return statearr_42633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto___42635,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__42199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto__){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto__){
return (function (state_42672){
var state_val_42673 = (state_42672[(1)]);
if((state_val_42673 === (7))){
var inst_42668 = (state_42672[(2)]);
var state_42672__$1 = state_42672;
var statearr_42674_42692 = state_42672__$1;
(statearr_42674_42692[(2)] = inst_42668);

(statearr_42674_42692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42673 === (1))){
var inst_42652 = init;
var state_42672__$1 = (function (){var statearr_42675 = state_42672;
(statearr_42675[(7)] = inst_42652);

return statearr_42675;
})();
var statearr_42676_42693 = state_42672__$1;
(statearr_42676_42693[(2)] = null);

(statearr_42676_42693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42673 === (4))){
var inst_42655 = (state_42672[(8)]);
var inst_42655__$1 = (state_42672[(2)]);
var inst_42656 = (inst_42655__$1 == null);
var state_42672__$1 = (function (){var statearr_42677 = state_42672;
(statearr_42677[(8)] = inst_42655__$1);

return statearr_42677;
})();
if(cljs.core.truth_(inst_42656)){
var statearr_42678_42694 = state_42672__$1;
(statearr_42678_42694[(1)] = (5));

} else {
var statearr_42679_42695 = state_42672__$1;
(statearr_42679_42695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42673 === (6))){
var inst_42652 = (state_42672[(7)]);
var inst_42659 = (state_42672[(9)]);
var inst_42655 = (state_42672[(8)]);
var inst_42659__$1 = f.call(null,inst_42652,inst_42655);
var inst_42660 = cljs.core.reduced_QMARK_.call(null,inst_42659__$1);
var state_42672__$1 = (function (){var statearr_42680 = state_42672;
(statearr_42680[(9)] = inst_42659__$1);

return statearr_42680;
})();
if(inst_42660){
var statearr_42681_42696 = state_42672__$1;
(statearr_42681_42696[(1)] = (8));

} else {
var statearr_42682_42697 = state_42672__$1;
(statearr_42682_42697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42673 === (3))){
var inst_42670 = (state_42672[(2)]);
var state_42672__$1 = state_42672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42672__$1,inst_42670);
} else {
if((state_val_42673 === (2))){
var state_42672__$1 = state_42672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42672__$1,(4),ch);
} else {
if((state_val_42673 === (9))){
var inst_42659 = (state_42672[(9)]);
var inst_42652 = inst_42659;
var state_42672__$1 = (function (){var statearr_42683 = state_42672;
(statearr_42683[(7)] = inst_42652);

return statearr_42683;
})();
var statearr_42684_42698 = state_42672__$1;
(statearr_42684_42698[(2)] = null);

(statearr_42684_42698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42673 === (5))){
var inst_42652 = (state_42672[(7)]);
var state_42672__$1 = state_42672;
var statearr_42685_42699 = state_42672__$1;
(statearr_42685_42699[(2)] = inst_42652);

(statearr_42685_42699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42673 === (10))){
var inst_42666 = (state_42672[(2)]);
var state_42672__$1 = state_42672;
var statearr_42686_42700 = state_42672__$1;
(statearr_42686_42700[(2)] = inst_42666);

(statearr_42686_42700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42673 === (8))){
var inst_42659 = (state_42672[(9)]);
var inst_42662 = cljs.core.deref.call(null,inst_42659);
var state_42672__$1 = state_42672;
var statearr_42687_42701 = state_42672__$1;
(statearr_42687_42701[(2)] = inst_42662);

(statearr_42687_42701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__42199__auto__))
;
return ((function (switch__42111__auto__,c__42199__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__42112__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42112__auto____0 = (function (){
var statearr_42688 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42688[(0)] = cljs$core$async$reduce_$_state_machine__42112__auto__);

(statearr_42688[(1)] = (1));

return statearr_42688;
});
var cljs$core$async$reduce_$_state_machine__42112__auto____1 = (function (state_42672){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_42672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e42689){if((e42689 instanceof Object)){
var ex__42115__auto__ = e42689;
var statearr_42690_42702 = state_42672;
(statearr_42690_42702[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42703 = state_42672;
state_42672 = G__42703;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42112__auto__ = function(state_42672){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42112__auto____1.call(this,state_42672);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42112__auto____0;
cljs$core$async$reduce_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42112__auto____1;
return cljs$core$async$reduce_$_state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto__))
})();
var state__42201__auto__ = (function (){var statearr_42691 = f__42200__auto__.call(null);
(statearr_42691[(6)] = c__42199__auto__);

return statearr_42691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto__))
);

return c__42199__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__42199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto__,f__$1){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto__,f__$1){
return (function (state_42709){
var state_val_42710 = (state_42709[(1)]);
if((state_val_42710 === (1))){
var inst_42704 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_42709__$1 = state_42709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42709__$1,(2),inst_42704);
} else {
if((state_val_42710 === (2))){
var inst_42706 = (state_42709[(2)]);
var inst_42707 = f__$1.call(null,inst_42706);
var state_42709__$1 = state_42709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42709__$1,inst_42707);
} else {
return null;
}
}
});})(c__42199__auto__,f__$1))
;
return ((function (switch__42111__auto__,c__42199__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__42112__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42112__auto____0 = (function (){
var statearr_42711 = [null,null,null,null,null,null,null];
(statearr_42711[(0)] = cljs$core$async$transduce_$_state_machine__42112__auto__);

(statearr_42711[(1)] = (1));

return statearr_42711;
});
var cljs$core$async$transduce_$_state_machine__42112__auto____1 = (function (state_42709){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_42709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e42712){if((e42712 instanceof Object)){
var ex__42115__auto__ = e42712;
var statearr_42713_42715 = state_42709;
(statearr_42713_42715[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42716 = state_42709;
state_42709 = G__42716;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42112__auto__ = function(state_42709){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42112__auto____1.call(this,state_42709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42112__auto____0;
cljs$core$async$transduce_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42112__auto____1;
return cljs$core$async$transduce_$_state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto__,f__$1))
})();
var state__42201__auto__ = (function (){var statearr_42714 = f__42200__auto__.call(null);
(statearr_42714[(6)] = c__42199__auto__);

return statearr_42714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto__,f__$1))
);

return c__42199__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__42718 = arguments.length;
switch (G__42718) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__42199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto__){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto__){
return (function (state_42743){
var state_val_42744 = (state_42743[(1)]);
if((state_val_42744 === (7))){
var inst_42725 = (state_42743[(2)]);
var state_42743__$1 = state_42743;
var statearr_42745_42766 = state_42743__$1;
(statearr_42745_42766[(2)] = inst_42725);

(statearr_42745_42766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (1))){
var inst_42719 = cljs.core.seq.call(null,coll);
var inst_42720 = inst_42719;
var state_42743__$1 = (function (){var statearr_42746 = state_42743;
(statearr_42746[(7)] = inst_42720);

return statearr_42746;
})();
var statearr_42747_42767 = state_42743__$1;
(statearr_42747_42767[(2)] = null);

(statearr_42747_42767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (4))){
var inst_42720 = (state_42743[(7)]);
var inst_42723 = cljs.core.first.call(null,inst_42720);
var state_42743__$1 = state_42743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42743__$1,(7),ch,inst_42723);
} else {
if((state_val_42744 === (13))){
var inst_42737 = (state_42743[(2)]);
var state_42743__$1 = state_42743;
var statearr_42748_42768 = state_42743__$1;
(statearr_42748_42768[(2)] = inst_42737);

(statearr_42748_42768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (6))){
var inst_42728 = (state_42743[(2)]);
var state_42743__$1 = state_42743;
if(cljs.core.truth_(inst_42728)){
var statearr_42749_42769 = state_42743__$1;
(statearr_42749_42769[(1)] = (8));

} else {
var statearr_42750_42770 = state_42743__$1;
(statearr_42750_42770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (3))){
var inst_42741 = (state_42743[(2)]);
var state_42743__$1 = state_42743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42743__$1,inst_42741);
} else {
if((state_val_42744 === (12))){
var state_42743__$1 = state_42743;
var statearr_42751_42771 = state_42743__$1;
(statearr_42751_42771[(2)] = null);

(statearr_42751_42771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (2))){
var inst_42720 = (state_42743[(7)]);
var state_42743__$1 = state_42743;
if(cljs.core.truth_(inst_42720)){
var statearr_42752_42772 = state_42743__$1;
(statearr_42752_42772[(1)] = (4));

} else {
var statearr_42753_42773 = state_42743__$1;
(statearr_42753_42773[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (11))){
var inst_42734 = cljs.core.async.close_BANG_.call(null,ch);
var state_42743__$1 = state_42743;
var statearr_42754_42774 = state_42743__$1;
(statearr_42754_42774[(2)] = inst_42734);

(statearr_42754_42774[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (9))){
var state_42743__$1 = state_42743;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42755_42775 = state_42743__$1;
(statearr_42755_42775[(1)] = (11));

} else {
var statearr_42756_42776 = state_42743__$1;
(statearr_42756_42776[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (5))){
var inst_42720 = (state_42743[(7)]);
var state_42743__$1 = state_42743;
var statearr_42757_42777 = state_42743__$1;
(statearr_42757_42777[(2)] = inst_42720);

(statearr_42757_42777[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (10))){
var inst_42739 = (state_42743[(2)]);
var state_42743__$1 = state_42743;
var statearr_42758_42778 = state_42743__$1;
(statearr_42758_42778[(2)] = inst_42739);

(statearr_42758_42778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (8))){
var inst_42720 = (state_42743[(7)]);
var inst_42730 = cljs.core.next.call(null,inst_42720);
var inst_42720__$1 = inst_42730;
var state_42743__$1 = (function (){var statearr_42759 = state_42743;
(statearr_42759[(7)] = inst_42720__$1);

return statearr_42759;
})();
var statearr_42760_42779 = state_42743__$1;
(statearr_42760_42779[(2)] = null);

(statearr_42760_42779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__42199__auto__))
;
return ((function (switch__42111__auto__,c__42199__auto__){
return (function() {
var cljs$core$async$state_machine__42112__auto__ = null;
var cljs$core$async$state_machine__42112__auto____0 = (function (){
var statearr_42761 = [null,null,null,null,null,null,null,null];
(statearr_42761[(0)] = cljs$core$async$state_machine__42112__auto__);

(statearr_42761[(1)] = (1));

return statearr_42761;
});
var cljs$core$async$state_machine__42112__auto____1 = (function (state_42743){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_42743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e42762){if((e42762 instanceof Object)){
var ex__42115__auto__ = e42762;
var statearr_42763_42780 = state_42743;
(statearr_42763_42780[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42781 = state_42743;
state_42743 = G__42781;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$state_machine__42112__auto__ = function(state_42743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42112__auto____1.call(this,state_42743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42112__auto____0;
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42112__auto____1;
return cljs$core$async$state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto__))
})();
var state__42201__auto__ = (function (){var statearr_42764 = f__42200__auto__.call(null);
(statearr_42764[(6)] = c__42199__auto__);

return statearr_42764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto__))
);

return c__42199__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28822__auto__ = (((_ == null))?null:_);
var m__28823__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,_);
} else {
var m__28823__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28822__auto__ = (((m == null))?null:m);
var m__28823__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28823__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28822__auto__ = (((m == null))?null:m);
var m__28823__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,m,ch);
} else {
var m__28823__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28822__auto__ = (((m == null))?null:m);
var m__28823__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,m);
} else {
var m__28823__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async42782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42782 = (function (ch,cs,meta42783){
this.ch = ch;
this.cs = cs;
this.meta42783 = meta42783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42784,meta42783__$1){
var self__ = this;
var _42784__$1 = this;
return (new cljs.core.async.t_cljs$core$async42782(self__.ch,self__.cs,meta42783__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42784){
var self__ = this;
var _42784__$1 = this;
return self__.meta42783;
});})(cs))
;

cljs.core.async.t_cljs$core$async42782.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42782.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42782.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42782.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42782.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42782.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42782.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42783","meta42783",-936202978,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42782";

cljs.core.async.t_cljs$core$async42782.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async42782");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async42782 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42782(ch__$1,cs__$1,meta42783){
return (new cljs.core.async.t_cljs$core$async42782(ch__$1,cs__$1,meta42783));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42782(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__42199__auto___43004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto___43004,cs,m,dchan,dctr,done){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto___43004,cs,m,dchan,dctr,done){
return (function (state_42919){
var state_val_42920 = (state_42919[(1)]);
if((state_val_42920 === (7))){
var inst_42915 = (state_42919[(2)]);
var state_42919__$1 = state_42919;
var statearr_42921_43005 = state_42919__$1;
(statearr_42921_43005[(2)] = inst_42915);

(statearr_42921_43005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (20))){
var inst_42818 = (state_42919[(7)]);
var inst_42830 = cljs.core.first.call(null,inst_42818);
var inst_42831 = cljs.core.nth.call(null,inst_42830,(0),null);
var inst_42832 = cljs.core.nth.call(null,inst_42830,(1),null);
var state_42919__$1 = (function (){var statearr_42922 = state_42919;
(statearr_42922[(8)] = inst_42831);

return statearr_42922;
})();
if(cljs.core.truth_(inst_42832)){
var statearr_42923_43006 = state_42919__$1;
(statearr_42923_43006[(1)] = (22));

} else {
var statearr_42924_43007 = state_42919__$1;
(statearr_42924_43007[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (27))){
var inst_42860 = (state_42919[(9)]);
var inst_42787 = (state_42919[(10)]);
var inst_42862 = (state_42919[(11)]);
var inst_42867 = (state_42919[(12)]);
var inst_42867__$1 = cljs.core._nth.call(null,inst_42860,inst_42862);
var inst_42868 = cljs.core.async.put_BANG_.call(null,inst_42867__$1,inst_42787,done);
var state_42919__$1 = (function (){var statearr_42925 = state_42919;
(statearr_42925[(12)] = inst_42867__$1);

return statearr_42925;
})();
if(cljs.core.truth_(inst_42868)){
var statearr_42926_43008 = state_42919__$1;
(statearr_42926_43008[(1)] = (30));

} else {
var statearr_42927_43009 = state_42919__$1;
(statearr_42927_43009[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (1))){
var state_42919__$1 = state_42919;
var statearr_42928_43010 = state_42919__$1;
(statearr_42928_43010[(2)] = null);

(statearr_42928_43010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (24))){
var inst_42818 = (state_42919[(7)]);
var inst_42837 = (state_42919[(2)]);
var inst_42838 = cljs.core.next.call(null,inst_42818);
var inst_42796 = inst_42838;
var inst_42797 = null;
var inst_42798 = (0);
var inst_42799 = (0);
var state_42919__$1 = (function (){var statearr_42929 = state_42919;
(statearr_42929[(13)] = inst_42799);

(statearr_42929[(14)] = inst_42797);

(statearr_42929[(15)] = inst_42796);

(statearr_42929[(16)] = inst_42837);

(statearr_42929[(17)] = inst_42798);

return statearr_42929;
})();
var statearr_42930_43011 = state_42919__$1;
(statearr_42930_43011[(2)] = null);

(statearr_42930_43011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (39))){
var state_42919__$1 = state_42919;
var statearr_42934_43012 = state_42919__$1;
(statearr_42934_43012[(2)] = null);

(statearr_42934_43012[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (4))){
var inst_42787 = (state_42919[(10)]);
var inst_42787__$1 = (state_42919[(2)]);
var inst_42788 = (inst_42787__$1 == null);
var state_42919__$1 = (function (){var statearr_42935 = state_42919;
(statearr_42935[(10)] = inst_42787__$1);

return statearr_42935;
})();
if(cljs.core.truth_(inst_42788)){
var statearr_42936_43013 = state_42919__$1;
(statearr_42936_43013[(1)] = (5));

} else {
var statearr_42937_43014 = state_42919__$1;
(statearr_42937_43014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (15))){
var inst_42799 = (state_42919[(13)]);
var inst_42797 = (state_42919[(14)]);
var inst_42796 = (state_42919[(15)]);
var inst_42798 = (state_42919[(17)]);
var inst_42814 = (state_42919[(2)]);
var inst_42815 = (inst_42799 + (1));
var tmp42931 = inst_42797;
var tmp42932 = inst_42796;
var tmp42933 = inst_42798;
var inst_42796__$1 = tmp42932;
var inst_42797__$1 = tmp42931;
var inst_42798__$1 = tmp42933;
var inst_42799__$1 = inst_42815;
var state_42919__$1 = (function (){var statearr_42938 = state_42919;
(statearr_42938[(13)] = inst_42799__$1);

(statearr_42938[(18)] = inst_42814);

(statearr_42938[(14)] = inst_42797__$1);

(statearr_42938[(15)] = inst_42796__$1);

(statearr_42938[(17)] = inst_42798__$1);

return statearr_42938;
})();
var statearr_42939_43015 = state_42919__$1;
(statearr_42939_43015[(2)] = null);

(statearr_42939_43015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (21))){
var inst_42841 = (state_42919[(2)]);
var state_42919__$1 = state_42919;
var statearr_42943_43016 = state_42919__$1;
(statearr_42943_43016[(2)] = inst_42841);

(statearr_42943_43016[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (31))){
var inst_42867 = (state_42919[(12)]);
var inst_42871 = done.call(null,null);
var inst_42872 = cljs.core.async.untap_STAR_.call(null,m,inst_42867);
var state_42919__$1 = (function (){var statearr_42944 = state_42919;
(statearr_42944[(19)] = inst_42871);

return statearr_42944;
})();
var statearr_42945_43017 = state_42919__$1;
(statearr_42945_43017[(2)] = inst_42872);

(statearr_42945_43017[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (32))){
var inst_42860 = (state_42919[(9)]);
var inst_42859 = (state_42919[(20)]);
var inst_42861 = (state_42919[(21)]);
var inst_42862 = (state_42919[(11)]);
var inst_42874 = (state_42919[(2)]);
var inst_42875 = (inst_42862 + (1));
var tmp42940 = inst_42860;
var tmp42941 = inst_42859;
var tmp42942 = inst_42861;
var inst_42859__$1 = tmp42941;
var inst_42860__$1 = tmp42940;
var inst_42861__$1 = tmp42942;
var inst_42862__$1 = inst_42875;
var state_42919__$1 = (function (){var statearr_42946 = state_42919;
(statearr_42946[(9)] = inst_42860__$1);

(statearr_42946[(20)] = inst_42859__$1);

(statearr_42946[(22)] = inst_42874);

(statearr_42946[(21)] = inst_42861__$1);

(statearr_42946[(11)] = inst_42862__$1);

return statearr_42946;
})();
var statearr_42947_43018 = state_42919__$1;
(statearr_42947_43018[(2)] = null);

(statearr_42947_43018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (40))){
var inst_42887 = (state_42919[(23)]);
var inst_42891 = done.call(null,null);
var inst_42892 = cljs.core.async.untap_STAR_.call(null,m,inst_42887);
var state_42919__$1 = (function (){var statearr_42948 = state_42919;
(statearr_42948[(24)] = inst_42891);

return statearr_42948;
})();
var statearr_42949_43019 = state_42919__$1;
(statearr_42949_43019[(2)] = inst_42892);

(statearr_42949_43019[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (33))){
var inst_42878 = (state_42919[(25)]);
var inst_42880 = cljs.core.chunked_seq_QMARK_.call(null,inst_42878);
var state_42919__$1 = state_42919;
if(inst_42880){
var statearr_42950_43020 = state_42919__$1;
(statearr_42950_43020[(1)] = (36));

} else {
var statearr_42951_43021 = state_42919__$1;
(statearr_42951_43021[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (13))){
var inst_42808 = (state_42919[(26)]);
var inst_42811 = cljs.core.async.close_BANG_.call(null,inst_42808);
var state_42919__$1 = state_42919;
var statearr_42952_43022 = state_42919__$1;
(statearr_42952_43022[(2)] = inst_42811);

(statearr_42952_43022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (22))){
var inst_42831 = (state_42919[(8)]);
var inst_42834 = cljs.core.async.close_BANG_.call(null,inst_42831);
var state_42919__$1 = state_42919;
var statearr_42953_43023 = state_42919__$1;
(statearr_42953_43023[(2)] = inst_42834);

(statearr_42953_43023[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (36))){
var inst_42878 = (state_42919[(25)]);
var inst_42882 = cljs.core.chunk_first.call(null,inst_42878);
var inst_42883 = cljs.core.chunk_rest.call(null,inst_42878);
var inst_42884 = cljs.core.count.call(null,inst_42882);
var inst_42859 = inst_42883;
var inst_42860 = inst_42882;
var inst_42861 = inst_42884;
var inst_42862 = (0);
var state_42919__$1 = (function (){var statearr_42954 = state_42919;
(statearr_42954[(9)] = inst_42860);

(statearr_42954[(20)] = inst_42859);

(statearr_42954[(21)] = inst_42861);

(statearr_42954[(11)] = inst_42862);

return statearr_42954;
})();
var statearr_42955_43024 = state_42919__$1;
(statearr_42955_43024[(2)] = null);

(statearr_42955_43024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (41))){
var inst_42878 = (state_42919[(25)]);
var inst_42894 = (state_42919[(2)]);
var inst_42895 = cljs.core.next.call(null,inst_42878);
var inst_42859 = inst_42895;
var inst_42860 = null;
var inst_42861 = (0);
var inst_42862 = (0);
var state_42919__$1 = (function (){var statearr_42956 = state_42919;
(statearr_42956[(9)] = inst_42860);

(statearr_42956[(20)] = inst_42859);

(statearr_42956[(21)] = inst_42861);

(statearr_42956[(27)] = inst_42894);

(statearr_42956[(11)] = inst_42862);

return statearr_42956;
})();
var statearr_42957_43025 = state_42919__$1;
(statearr_42957_43025[(2)] = null);

(statearr_42957_43025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (43))){
var state_42919__$1 = state_42919;
var statearr_42958_43026 = state_42919__$1;
(statearr_42958_43026[(2)] = null);

(statearr_42958_43026[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (29))){
var inst_42903 = (state_42919[(2)]);
var state_42919__$1 = state_42919;
var statearr_42959_43027 = state_42919__$1;
(statearr_42959_43027[(2)] = inst_42903);

(statearr_42959_43027[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (44))){
var inst_42912 = (state_42919[(2)]);
var state_42919__$1 = (function (){var statearr_42960 = state_42919;
(statearr_42960[(28)] = inst_42912);

return statearr_42960;
})();
var statearr_42961_43028 = state_42919__$1;
(statearr_42961_43028[(2)] = null);

(statearr_42961_43028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (6))){
var inst_42851 = (state_42919[(29)]);
var inst_42850 = cljs.core.deref.call(null,cs);
var inst_42851__$1 = cljs.core.keys.call(null,inst_42850);
var inst_42852 = cljs.core.count.call(null,inst_42851__$1);
var inst_42853 = cljs.core.reset_BANG_.call(null,dctr,inst_42852);
var inst_42858 = cljs.core.seq.call(null,inst_42851__$1);
var inst_42859 = inst_42858;
var inst_42860 = null;
var inst_42861 = (0);
var inst_42862 = (0);
var state_42919__$1 = (function (){var statearr_42962 = state_42919;
(statearr_42962[(9)] = inst_42860);

(statearr_42962[(29)] = inst_42851__$1);

(statearr_42962[(20)] = inst_42859);

(statearr_42962[(21)] = inst_42861);

(statearr_42962[(30)] = inst_42853);

(statearr_42962[(11)] = inst_42862);

return statearr_42962;
})();
var statearr_42963_43029 = state_42919__$1;
(statearr_42963_43029[(2)] = null);

(statearr_42963_43029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (28))){
var inst_42878 = (state_42919[(25)]);
var inst_42859 = (state_42919[(20)]);
var inst_42878__$1 = cljs.core.seq.call(null,inst_42859);
var state_42919__$1 = (function (){var statearr_42964 = state_42919;
(statearr_42964[(25)] = inst_42878__$1);

return statearr_42964;
})();
if(inst_42878__$1){
var statearr_42965_43030 = state_42919__$1;
(statearr_42965_43030[(1)] = (33));

} else {
var statearr_42966_43031 = state_42919__$1;
(statearr_42966_43031[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (25))){
var inst_42861 = (state_42919[(21)]);
var inst_42862 = (state_42919[(11)]);
var inst_42864 = (inst_42862 < inst_42861);
var inst_42865 = inst_42864;
var state_42919__$1 = state_42919;
if(cljs.core.truth_(inst_42865)){
var statearr_42967_43032 = state_42919__$1;
(statearr_42967_43032[(1)] = (27));

} else {
var statearr_42968_43033 = state_42919__$1;
(statearr_42968_43033[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (34))){
var state_42919__$1 = state_42919;
var statearr_42969_43034 = state_42919__$1;
(statearr_42969_43034[(2)] = null);

(statearr_42969_43034[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (17))){
var state_42919__$1 = state_42919;
var statearr_42970_43035 = state_42919__$1;
(statearr_42970_43035[(2)] = null);

(statearr_42970_43035[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (3))){
var inst_42917 = (state_42919[(2)]);
var state_42919__$1 = state_42919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42919__$1,inst_42917);
} else {
if((state_val_42920 === (12))){
var inst_42846 = (state_42919[(2)]);
var state_42919__$1 = state_42919;
var statearr_42971_43036 = state_42919__$1;
(statearr_42971_43036[(2)] = inst_42846);

(statearr_42971_43036[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (2))){
var state_42919__$1 = state_42919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42919__$1,(4),ch);
} else {
if((state_val_42920 === (23))){
var state_42919__$1 = state_42919;
var statearr_42972_43037 = state_42919__$1;
(statearr_42972_43037[(2)] = null);

(statearr_42972_43037[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (35))){
var inst_42901 = (state_42919[(2)]);
var state_42919__$1 = state_42919;
var statearr_42973_43038 = state_42919__$1;
(statearr_42973_43038[(2)] = inst_42901);

(statearr_42973_43038[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (19))){
var inst_42818 = (state_42919[(7)]);
var inst_42822 = cljs.core.chunk_first.call(null,inst_42818);
var inst_42823 = cljs.core.chunk_rest.call(null,inst_42818);
var inst_42824 = cljs.core.count.call(null,inst_42822);
var inst_42796 = inst_42823;
var inst_42797 = inst_42822;
var inst_42798 = inst_42824;
var inst_42799 = (0);
var state_42919__$1 = (function (){var statearr_42974 = state_42919;
(statearr_42974[(13)] = inst_42799);

(statearr_42974[(14)] = inst_42797);

(statearr_42974[(15)] = inst_42796);

(statearr_42974[(17)] = inst_42798);

return statearr_42974;
})();
var statearr_42975_43039 = state_42919__$1;
(statearr_42975_43039[(2)] = null);

(statearr_42975_43039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (11))){
var inst_42818 = (state_42919[(7)]);
var inst_42796 = (state_42919[(15)]);
var inst_42818__$1 = cljs.core.seq.call(null,inst_42796);
var state_42919__$1 = (function (){var statearr_42976 = state_42919;
(statearr_42976[(7)] = inst_42818__$1);

return statearr_42976;
})();
if(inst_42818__$1){
var statearr_42977_43040 = state_42919__$1;
(statearr_42977_43040[(1)] = (16));

} else {
var statearr_42978_43041 = state_42919__$1;
(statearr_42978_43041[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (9))){
var inst_42848 = (state_42919[(2)]);
var state_42919__$1 = state_42919;
var statearr_42979_43042 = state_42919__$1;
(statearr_42979_43042[(2)] = inst_42848);

(statearr_42979_43042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (5))){
var inst_42794 = cljs.core.deref.call(null,cs);
var inst_42795 = cljs.core.seq.call(null,inst_42794);
var inst_42796 = inst_42795;
var inst_42797 = null;
var inst_42798 = (0);
var inst_42799 = (0);
var state_42919__$1 = (function (){var statearr_42980 = state_42919;
(statearr_42980[(13)] = inst_42799);

(statearr_42980[(14)] = inst_42797);

(statearr_42980[(15)] = inst_42796);

(statearr_42980[(17)] = inst_42798);

return statearr_42980;
})();
var statearr_42981_43043 = state_42919__$1;
(statearr_42981_43043[(2)] = null);

(statearr_42981_43043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (14))){
var state_42919__$1 = state_42919;
var statearr_42982_43044 = state_42919__$1;
(statearr_42982_43044[(2)] = null);

(statearr_42982_43044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (45))){
var inst_42909 = (state_42919[(2)]);
var state_42919__$1 = state_42919;
var statearr_42983_43045 = state_42919__$1;
(statearr_42983_43045[(2)] = inst_42909);

(statearr_42983_43045[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (26))){
var inst_42851 = (state_42919[(29)]);
var inst_42905 = (state_42919[(2)]);
var inst_42906 = cljs.core.seq.call(null,inst_42851);
var state_42919__$1 = (function (){var statearr_42984 = state_42919;
(statearr_42984[(31)] = inst_42905);

return statearr_42984;
})();
if(inst_42906){
var statearr_42985_43046 = state_42919__$1;
(statearr_42985_43046[(1)] = (42));

} else {
var statearr_42986_43047 = state_42919__$1;
(statearr_42986_43047[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (16))){
var inst_42818 = (state_42919[(7)]);
var inst_42820 = cljs.core.chunked_seq_QMARK_.call(null,inst_42818);
var state_42919__$1 = state_42919;
if(inst_42820){
var statearr_42987_43048 = state_42919__$1;
(statearr_42987_43048[(1)] = (19));

} else {
var statearr_42988_43049 = state_42919__$1;
(statearr_42988_43049[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (38))){
var inst_42898 = (state_42919[(2)]);
var state_42919__$1 = state_42919;
var statearr_42989_43050 = state_42919__$1;
(statearr_42989_43050[(2)] = inst_42898);

(statearr_42989_43050[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (30))){
var state_42919__$1 = state_42919;
var statearr_42990_43051 = state_42919__$1;
(statearr_42990_43051[(2)] = null);

(statearr_42990_43051[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (10))){
var inst_42799 = (state_42919[(13)]);
var inst_42797 = (state_42919[(14)]);
var inst_42807 = cljs.core._nth.call(null,inst_42797,inst_42799);
var inst_42808 = cljs.core.nth.call(null,inst_42807,(0),null);
var inst_42809 = cljs.core.nth.call(null,inst_42807,(1),null);
var state_42919__$1 = (function (){var statearr_42991 = state_42919;
(statearr_42991[(26)] = inst_42808);

return statearr_42991;
})();
if(cljs.core.truth_(inst_42809)){
var statearr_42992_43052 = state_42919__$1;
(statearr_42992_43052[(1)] = (13));

} else {
var statearr_42993_43053 = state_42919__$1;
(statearr_42993_43053[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (18))){
var inst_42844 = (state_42919[(2)]);
var state_42919__$1 = state_42919;
var statearr_42994_43054 = state_42919__$1;
(statearr_42994_43054[(2)] = inst_42844);

(statearr_42994_43054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (42))){
var state_42919__$1 = state_42919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42919__$1,(45),dchan);
} else {
if((state_val_42920 === (37))){
var inst_42787 = (state_42919[(10)]);
var inst_42878 = (state_42919[(25)]);
var inst_42887 = (state_42919[(23)]);
var inst_42887__$1 = cljs.core.first.call(null,inst_42878);
var inst_42888 = cljs.core.async.put_BANG_.call(null,inst_42887__$1,inst_42787,done);
var state_42919__$1 = (function (){var statearr_42995 = state_42919;
(statearr_42995[(23)] = inst_42887__$1);

return statearr_42995;
})();
if(cljs.core.truth_(inst_42888)){
var statearr_42996_43055 = state_42919__$1;
(statearr_42996_43055[(1)] = (39));

} else {
var statearr_42997_43056 = state_42919__$1;
(statearr_42997_43056[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (8))){
var inst_42799 = (state_42919[(13)]);
var inst_42798 = (state_42919[(17)]);
var inst_42801 = (inst_42799 < inst_42798);
var inst_42802 = inst_42801;
var state_42919__$1 = state_42919;
if(cljs.core.truth_(inst_42802)){
var statearr_42998_43057 = state_42919__$1;
(statearr_42998_43057[(1)] = (10));

} else {
var statearr_42999_43058 = state_42919__$1;
(statearr_42999_43058[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__42199__auto___43004,cs,m,dchan,dctr,done))
;
return ((function (switch__42111__auto__,c__42199__auto___43004,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__42112__auto__ = null;
var cljs$core$async$mult_$_state_machine__42112__auto____0 = (function (){
var statearr_43000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43000[(0)] = cljs$core$async$mult_$_state_machine__42112__auto__);

(statearr_43000[(1)] = (1));

return statearr_43000;
});
var cljs$core$async$mult_$_state_machine__42112__auto____1 = (function (state_42919){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_42919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e43001){if((e43001 instanceof Object)){
var ex__42115__auto__ = e43001;
var statearr_43002_43059 = state_42919;
(statearr_43002_43059[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43060 = state_42919;
state_42919 = G__43060;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42112__auto__ = function(state_42919){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42112__auto____1.call(this,state_42919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42112__auto____0;
cljs$core$async$mult_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42112__auto____1;
return cljs$core$async$mult_$_state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto___43004,cs,m,dchan,dctr,done))
})();
var state__42201__auto__ = (function (){var statearr_43003 = f__42200__auto__.call(null);
(statearr_43003[(6)] = c__42199__auto___43004);

return statearr_43003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto___43004,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__43062 = arguments.length;
switch (G__43062) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28822__auto__ = (((m == null))?null:m);
var m__28823__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,m,ch);
} else {
var m__28823__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28822__auto__ = (((m == null))?null:m);
var m__28823__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,m,ch);
} else {
var m__28823__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28822__auto__ = (((m == null))?null:m);
var m__28823__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,m);
} else {
var m__28823__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28822__auto__ = (((m == null))?null:m);
var m__28823__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,m,state_map);
} else {
var m__28823__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28822__auto__ = (((m == null))?null:m);
var m__28823__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,m,mode);
} else {
var m__28823__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29315__auto__ = [];
var len__29308__auto___43074 = arguments.length;
var i__29309__auto___43075 = (0);
while(true){
if((i__29309__auto___43075 < len__29308__auto___43074)){
args__29315__auto__.push((arguments[i__29309__auto___43075]));

var G__43076 = (i__29309__auto___43075 + (1));
i__29309__auto___43075 = G__43076;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43068){
var map__43069 = p__43068;
var map__43069__$1 = ((((!((map__43069 == null)))?((((map__43069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43069.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43069):map__43069);
var opts = map__43069__$1;
var statearr_43071_43077 = state;
(statearr_43071_43077[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__43069,map__43069__$1,opts){
return (function (val){
var statearr_43072_43078 = state;
(statearr_43072_43078[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__43069,map__43069__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_43073_43079 = state;
(statearr_43073_43079[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43064){
var G__43065 = cljs.core.first.call(null,seq43064);
var seq43064__$1 = cljs.core.next.call(null,seq43064);
var G__43066 = cljs.core.first.call(null,seq43064__$1);
var seq43064__$2 = cljs.core.next.call(null,seq43064__$1);
var G__43067 = cljs.core.first.call(null,seq43064__$2);
var seq43064__$3 = cljs.core.next.call(null,seq43064__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43065,G__43066,G__43067,seq43064__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async43080 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43080 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta43081){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta43081 = meta43081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43082,meta43081__$1){
var self__ = this;
var _43082__$1 = this;
return (new cljs.core.async.t_cljs$core$async43080(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta43081__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43082){
var self__ = this;
var _43082__$1 = this;
return self__.meta43081;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43080.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43080.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta43081","meta43081",360386614,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43080.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43080";

cljs.core.async.t_cljs$core$async43080.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async43080");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async43080 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async43080(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta43081){
return (new cljs.core.async.t_cljs$core$async43080(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta43081));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async43080(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42199__auto___43244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto___43244,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto___43244,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43184){
var state_val_43185 = (state_43184[(1)]);
if((state_val_43185 === (7))){
var inst_43099 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
var statearr_43186_43245 = state_43184__$1;
(statearr_43186_43245[(2)] = inst_43099);

(statearr_43186_43245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (20))){
var inst_43111 = (state_43184[(7)]);
var state_43184__$1 = state_43184;
var statearr_43187_43246 = state_43184__$1;
(statearr_43187_43246[(2)] = inst_43111);

(statearr_43187_43246[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (27))){
var state_43184__$1 = state_43184;
var statearr_43188_43247 = state_43184__$1;
(statearr_43188_43247[(2)] = null);

(statearr_43188_43247[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (1))){
var inst_43086 = (state_43184[(8)]);
var inst_43086__$1 = calc_state.call(null);
var inst_43088 = (inst_43086__$1 == null);
var inst_43089 = cljs.core.not.call(null,inst_43088);
var state_43184__$1 = (function (){var statearr_43189 = state_43184;
(statearr_43189[(8)] = inst_43086__$1);

return statearr_43189;
})();
if(inst_43089){
var statearr_43190_43248 = state_43184__$1;
(statearr_43190_43248[(1)] = (2));

} else {
var statearr_43191_43249 = state_43184__$1;
(statearr_43191_43249[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (24))){
var inst_43135 = (state_43184[(9)]);
var inst_43158 = (state_43184[(10)]);
var inst_43144 = (state_43184[(11)]);
var inst_43158__$1 = inst_43135.call(null,inst_43144);
var state_43184__$1 = (function (){var statearr_43192 = state_43184;
(statearr_43192[(10)] = inst_43158__$1);

return statearr_43192;
})();
if(cljs.core.truth_(inst_43158__$1)){
var statearr_43193_43250 = state_43184__$1;
(statearr_43193_43250[(1)] = (29));

} else {
var statearr_43194_43251 = state_43184__$1;
(statearr_43194_43251[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (4))){
var inst_43102 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
if(cljs.core.truth_(inst_43102)){
var statearr_43195_43252 = state_43184__$1;
(statearr_43195_43252[(1)] = (8));

} else {
var statearr_43196_43253 = state_43184__$1;
(statearr_43196_43253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (15))){
var inst_43129 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
if(cljs.core.truth_(inst_43129)){
var statearr_43197_43254 = state_43184__$1;
(statearr_43197_43254[(1)] = (19));

} else {
var statearr_43198_43255 = state_43184__$1;
(statearr_43198_43255[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (21))){
var inst_43134 = (state_43184[(12)]);
var inst_43134__$1 = (state_43184[(2)]);
var inst_43135 = cljs.core.get.call(null,inst_43134__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43136 = cljs.core.get.call(null,inst_43134__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43137 = cljs.core.get.call(null,inst_43134__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43184__$1 = (function (){var statearr_43199 = state_43184;
(statearr_43199[(9)] = inst_43135);

(statearr_43199[(13)] = inst_43136);

(statearr_43199[(12)] = inst_43134__$1);

return statearr_43199;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43184__$1,(22),inst_43137);
} else {
if((state_val_43185 === (31))){
var inst_43166 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
if(cljs.core.truth_(inst_43166)){
var statearr_43200_43256 = state_43184__$1;
(statearr_43200_43256[(1)] = (32));

} else {
var statearr_43201_43257 = state_43184__$1;
(statearr_43201_43257[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (32))){
var inst_43143 = (state_43184[(14)]);
var state_43184__$1 = state_43184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43184__$1,(35),out,inst_43143);
} else {
if((state_val_43185 === (33))){
var inst_43134 = (state_43184[(12)]);
var inst_43111 = inst_43134;
var state_43184__$1 = (function (){var statearr_43202 = state_43184;
(statearr_43202[(7)] = inst_43111);

return statearr_43202;
})();
var statearr_43203_43258 = state_43184__$1;
(statearr_43203_43258[(2)] = null);

(statearr_43203_43258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (13))){
var inst_43111 = (state_43184[(7)]);
var inst_43118 = inst_43111.cljs$lang$protocol_mask$partition0$;
var inst_43119 = (inst_43118 & (64));
var inst_43120 = inst_43111.cljs$core$ISeq$;
var inst_43121 = (cljs.core.PROTOCOL_SENTINEL === inst_43120);
var inst_43122 = (inst_43119) || (inst_43121);
var state_43184__$1 = state_43184;
if(cljs.core.truth_(inst_43122)){
var statearr_43204_43259 = state_43184__$1;
(statearr_43204_43259[(1)] = (16));

} else {
var statearr_43205_43260 = state_43184__$1;
(statearr_43205_43260[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (22))){
var inst_43143 = (state_43184[(14)]);
var inst_43144 = (state_43184[(11)]);
var inst_43142 = (state_43184[(2)]);
var inst_43143__$1 = cljs.core.nth.call(null,inst_43142,(0),null);
var inst_43144__$1 = cljs.core.nth.call(null,inst_43142,(1),null);
var inst_43145 = (inst_43143__$1 == null);
var inst_43146 = cljs.core._EQ_.call(null,inst_43144__$1,change);
var inst_43147 = (inst_43145) || (inst_43146);
var state_43184__$1 = (function (){var statearr_43206 = state_43184;
(statearr_43206[(14)] = inst_43143__$1);

(statearr_43206[(11)] = inst_43144__$1);

return statearr_43206;
})();
if(cljs.core.truth_(inst_43147)){
var statearr_43207_43261 = state_43184__$1;
(statearr_43207_43261[(1)] = (23));

} else {
var statearr_43208_43262 = state_43184__$1;
(statearr_43208_43262[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (36))){
var inst_43134 = (state_43184[(12)]);
var inst_43111 = inst_43134;
var state_43184__$1 = (function (){var statearr_43209 = state_43184;
(statearr_43209[(7)] = inst_43111);

return statearr_43209;
})();
var statearr_43210_43263 = state_43184__$1;
(statearr_43210_43263[(2)] = null);

(statearr_43210_43263[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (29))){
var inst_43158 = (state_43184[(10)]);
var state_43184__$1 = state_43184;
var statearr_43211_43264 = state_43184__$1;
(statearr_43211_43264[(2)] = inst_43158);

(statearr_43211_43264[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (6))){
var state_43184__$1 = state_43184;
var statearr_43212_43265 = state_43184__$1;
(statearr_43212_43265[(2)] = false);

(statearr_43212_43265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (28))){
var inst_43154 = (state_43184[(2)]);
var inst_43155 = calc_state.call(null);
var inst_43111 = inst_43155;
var state_43184__$1 = (function (){var statearr_43213 = state_43184;
(statearr_43213[(15)] = inst_43154);

(statearr_43213[(7)] = inst_43111);

return statearr_43213;
})();
var statearr_43214_43266 = state_43184__$1;
(statearr_43214_43266[(2)] = null);

(statearr_43214_43266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (25))){
var inst_43180 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
var statearr_43215_43267 = state_43184__$1;
(statearr_43215_43267[(2)] = inst_43180);

(statearr_43215_43267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (34))){
var inst_43178 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
var statearr_43216_43268 = state_43184__$1;
(statearr_43216_43268[(2)] = inst_43178);

(statearr_43216_43268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (17))){
var state_43184__$1 = state_43184;
var statearr_43217_43269 = state_43184__$1;
(statearr_43217_43269[(2)] = false);

(statearr_43217_43269[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (3))){
var state_43184__$1 = state_43184;
var statearr_43218_43270 = state_43184__$1;
(statearr_43218_43270[(2)] = false);

(statearr_43218_43270[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (12))){
var inst_43182 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43184__$1,inst_43182);
} else {
if((state_val_43185 === (2))){
var inst_43086 = (state_43184[(8)]);
var inst_43091 = inst_43086.cljs$lang$protocol_mask$partition0$;
var inst_43092 = (inst_43091 & (64));
var inst_43093 = inst_43086.cljs$core$ISeq$;
var inst_43094 = (cljs.core.PROTOCOL_SENTINEL === inst_43093);
var inst_43095 = (inst_43092) || (inst_43094);
var state_43184__$1 = state_43184;
if(cljs.core.truth_(inst_43095)){
var statearr_43219_43271 = state_43184__$1;
(statearr_43219_43271[(1)] = (5));

} else {
var statearr_43220_43272 = state_43184__$1;
(statearr_43220_43272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (23))){
var inst_43143 = (state_43184[(14)]);
var inst_43149 = (inst_43143 == null);
var state_43184__$1 = state_43184;
if(cljs.core.truth_(inst_43149)){
var statearr_43221_43273 = state_43184__$1;
(statearr_43221_43273[(1)] = (26));

} else {
var statearr_43222_43274 = state_43184__$1;
(statearr_43222_43274[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (35))){
var inst_43169 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
if(cljs.core.truth_(inst_43169)){
var statearr_43223_43275 = state_43184__$1;
(statearr_43223_43275[(1)] = (36));

} else {
var statearr_43224_43276 = state_43184__$1;
(statearr_43224_43276[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (19))){
var inst_43111 = (state_43184[(7)]);
var inst_43131 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43111);
var state_43184__$1 = state_43184;
var statearr_43225_43277 = state_43184__$1;
(statearr_43225_43277[(2)] = inst_43131);

(statearr_43225_43277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (11))){
var inst_43111 = (state_43184[(7)]);
var inst_43115 = (inst_43111 == null);
var inst_43116 = cljs.core.not.call(null,inst_43115);
var state_43184__$1 = state_43184;
if(inst_43116){
var statearr_43226_43278 = state_43184__$1;
(statearr_43226_43278[(1)] = (13));

} else {
var statearr_43227_43279 = state_43184__$1;
(statearr_43227_43279[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (9))){
var inst_43086 = (state_43184[(8)]);
var state_43184__$1 = state_43184;
var statearr_43228_43280 = state_43184__$1;
(statearr_43228_43280[(2)] = inst_43086);

(statearr_43228_43280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (5))){
var state_43184__$1 = state_43184;
var statearr_43229_43281 = state_43184__$1;
(statearr_43229_43281[(2)] = true);

(statearr_43229_43281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (14))){
var state_43184__$1 = state_43184;
var statearr_43230_43282 = state_43184__$1;
(statearr_43230_43282[(2)] = false);

(statearr_43230_43282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (26))){
var inst_43144 = (state_43184[(11)]);
var inst_43151 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43144);
var state_43184__$1 = state_43184;
var statearr_43231_43283 = state_43184__$1;
(statearr_43231_43283[(2)] = inst_43151);

(statearr_43231_43283[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (16))){
var state_43184__$1 = state_43184;
var statearr_43232_43284 = state_43184__$1;
(statearr_43232_43284[(2)] = true);

(statearr_43232_43284[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (38))){
var inst_43174 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
var statearr_43233_43285 = state_43184__$1;
(statearr_43233_43285[(2)] = inst_43174);

(statearr_43233_43285[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (30))){
var inst_43135 = (state_43184[(9)]);
var inst_43136 = (state_43184[(13)]);
var inst_43144 = (state_43184[(11)]);
var inst_43161 = cljs.core.empty_QMARK_.call(null,inst_43135);
var inst_43162 = inst_43136.call(null,inst_43144);
var inst_43163 = cljs.core.not.call(null,inst_43162);
var inst_43164 = (inst_43161) && (inst_43163);
var state_43184__$1 = state_43184;
var statearr_43234_43286 = state_43184__$1;
(statearr_43234_43286[(2)] = inst_43164);

(statearr_43234_43286[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (10))){
var inst_43086 = (state_43184[(8)]);
var inst_43107 = (state_43184[(2)]);
var inst_43108 = cljs.core.get.call(null,inst_43107,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43109 = cljs.core.get.call(null,inst_43107,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43110 = cljs.core.get.call(null,inst_43107,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43111 = inst_43086;
var state_43184__$1 = (function (){var statearr_43235 = state_43184;
(statearr_43235[(16)] = inst_43109);

(statearr_43235[(17)] = inst_43110);

(statearr_43235[(18)] = inst_43108);

(statearr_43235[(7)] = inst_43111);

return statearr_43235;
})();
var statearr_43236_43287 = state_43184__$1;
(statearr_43236_43287[(2)] = null);

(statearr_43236_43287[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (18))){
var inst_43126 = (state_43184[(2)]);
var state_43184__$1 = state_43184;
var statearr_43237_43288 = state_43184__$1;
(statearr_43237_43288[(2)] = inst_43126);

(statearr_43237_43288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (37))){
var state_43184__$1 = state_43184;
var statearr_43238_43289 = state_43184__$1;
(statearr_43238_43289[(2)] = null);

(statearr_43238_43289[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43185 === (8))){
var inst_43086 = (state_43184[(8)]);
var inst_43104 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43086);
var state_43184__$1 = state_43184;
var statearr_43239_43290 = state_43184__$1;
(statearr_43239_43290[(2)] = inst_43104);

(statearr_43239_43290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__42199__auto___43244,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__42111__auto__,c__42199__auto___43244,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__42112__auto__ = null;
var cljs$core$async$mix_$_state_machine__42112__auto____0 = (function (){
var statearr_43240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43240[(0)] = cljs$core$async$mix_$_state_machine__42112__auto__);

(statearr_43240[(1)] = (1));

return statearr_43240;
});
var cljs$core$async$mix_$_state_machine__42112__auto____1 = (function (state_43184){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_43184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e43241){if((e43241 instanceof Object)){
var ex__42115__auto__ = e43241;
var statearr_43242_43291 = state_43184;
(statearr_43242_43291[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43292 = state_43184;
state_43184 = G__43292;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42112__auto__ = function(state_43184){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42112__auto____1.call(this,state_43184);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42112__auto____0;
cljs$core$async$mix_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42112__auto____1;
return cljs$core$async$mix_$_state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto___43244,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__42201__auto__ = (function (){var statearr_43243 = f__42200__auto__.call(null);
(statearr_43243[(6)] = c__42199__auto___43244);

return statearr_43243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto___43244,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28822__auto__ = (((p == null))?null:p);
var m__28823__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28823__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28822__auto__ = (((p == null))?null:p);
var m__28823__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,p,v,ch);
} else {
var m__28823__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43294 = arguments.length;
switch (G__43294) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28822__auto__ = (((p == null))?null:p);
var m__28823__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,p);
} else {
var m__28823__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28822__auto__ = (((p == null))?null:p);
var m__28823__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,p,v);
} else {
var m__28823__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__43298 = arguments.length;
switch (G__43298) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28139__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28139__auto__,mults){
return (function (p1__43296_SHARP_){
if(cljs.core.truth_(p1__43296_SHARP_.call(null,topic))){
return p1__43296_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43296_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28139__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async43299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43299 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43300){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43300 = meta43300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43301,meta43300__$1){
var self__ = this;
var _43301__$1 = this;
return (new cljs.core.async.t_cljs$core$async43299(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43300__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43301){
var self__ = this;
var _43301__$1 = this;
return self__.meta43300;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43299.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43299.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43299.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43299.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43299.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43299.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43299.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43299.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43300","meta43300",-1124742106,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43299";

cljs.core.async.t_cljs$core$async43299.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async43299");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async43299 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43299(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43300){
return (new cljs.core.async.t_cljs$core$async43299(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43300));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43299(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42199__auto___43419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto___43419,mults,ensure_mult,p){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto___43419,mults,ensure_mult,p){
return (function (state_43373){
var state_val_43374 = (state_43373[(1)]);
if((state_val_43374 === (7))){
var inst_43369 = (state_43373[(2)]);
var state_43373__$1 = state_43373;
var statearr_43375_43420 = state_43373__$1;
(statearr_43375_43420[(2)] = inst_43369);

(statearr_43375_43420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (20))){
var state_43373__$1 = state_43373;
var statearr_43376_43421 = state_43373__$1;
(statearr_43376_43421[(2)] = null);

(statearr_43376_43421[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (1))){
var state_43373__$1 = state_43373;
var statearr_43377_43422 = state_43373__$1;
(statearr_43377_43422[(2)] = null);

(statearr_43377_43422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (24))){
var inst_43352 = (state_43373[(7)]);
var inst_43361 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43352);
var state_43373__$1 = state_43373;
var statearr_43378_43423 = state_43373__$1;
(statearr_43378_43423[(2)] = inst_43361);

(statearr_43378_43423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (4))){
var inst_43304 = (state_43373[(8)]);
var inst_43304__$1 = (state_43373[(2)]);
var inst_43305 = (inst_43304__$1 == null);
var state_43373__$1 = (function (){var statearr_43379 = state_43373;
(statearr_43379[(8)] = inst_43304__$1);

return statearr_43379;
})();
if(cljs.core.truth_(inst_43305)){
var statearr_43380_43424 = state_43373__$1;
(statearr_43380_43424[(1)] = (5));

} else {
var statearr_43381_43425 = state_43373__$1;
(statearr_43381_43425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (15))){
var inst_43346 = (state_43373[(2)]);
var state_43373__$1 = state_43373;
var statearr_43382_43426 = state_43373__$1;
(statearr_43382_43426[(2)] = inst_43346);

(statearr_43382_43426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (21))){
var inst_43366 = (state_43373[(2)]);
var state_43373__$1 = (function (){var statearr_43383 = state_43373;
(statearr_43383[(9)] = inst_43366);

return statearr_43383;
})();
var statearr_43384_43427 = state_43373__$1;
(statearr_43384_43427[(2)] = null);

(statearr_43384_43427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (13))){
var inst_43328 = (state_43373[(10)]);
var inst_43330 = cljs.core.chunked_seq_QMARK_.call(null,inst_43328);
var state_43373__$1 = state_43373;
if(inst_43330){
var statearr_43385_43428 = state_43373__$1;
(statearr_43385_43428[(1)] = (16));

} else {
var statearr_43386_43429 = state_43373__$1;
(statearr_43386_43429[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (22))){
var inst_43358 = (state_43373[(2)]);
var state_43373__$1 = state_43373;
if(cljs.core.truth_(inst_43358)){
var statearr_43387_43430 = state_43373__$1;
(statearr_43387_43430[(1)] = (23));

} else {
var statearr_43388_43431 = state_43373__$1;
(statearr_43388_43431[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (6))){
var inst_43352 = (state_43373[(7)]);
var inst_43354 = (state_43373[(11)]);
var inst_43304 = (state_43373[(8)]);
var inst_43352__$1 = topic_fn.call(null,inst_43304);
var inst_43353 = cljs.core.deref.call(null,mults);
var inst_43354__$1 = cljs.core.get.call(null,inst_43353,inst_43352__$1);
var state_43373__$1 = (function (){var statearr_43389 = state_43373;
(statearr_43389[(7)] = inst_43352__$1);

(statearr_43389[(11)] = inst_43354__$1);

return statearr_43389;
})();
if(cljs.core.truth_(inst_43354__$1)){
var statearr_43390_43432 = state_43373__$1;
(statearr_43390_43432[(1)] = (19));

} else {
var statearr_43391_43433 = state_43373__$1;
(statearr_43391_43433[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (25))){
var inst_43363 = (state_43373[(2)]);
var state_43373__$1 = state_43373;
var statearr_43392_43434 = state_43373__$1;
(statearr_43392_43434[(2)] = inst_43363);

(statearr_43392_43434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (17))){
var inst_43328 = (state_43373[(10)]);
var inst_43337 = cljs.core.first.call(null,inst_43328);
var inst_43338 = cljs.core.async.muxch_STAR_.call(null,inst_43337);
var inst_43339 = cljs.core.async.close_BANG_.call(null,inst_43338);
var inst_43340 = cljs.core.next.call(null,inst_43328);
var inst_43314 = inst_43340;
var inst_43315 = null;
var inst_43316 = (0);
var inst_43317 = (0);
var state_43373__$1 = (function (){var statearr_43393 = state_43373;
(statearr_43393[(12)] = inst_43339);

(statearr_43393[(13)] = inst_43317);

(statearr_43393[(14)] = inst_43314);

(statearr_43393[(15)] = inst_43316);

(statearr_43393[(16)] = inst_43315);

return statearr_43393;
})();
var statearr_43394_43435 = state_43373__$1;
(statearr_43394_43435[(2)] = null);

(statearr_43394_43435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (3))){
var inst_43371 = (state_43373[(2)]);
var state_43373__$1 = state_43373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43373__$1,inst_43371);
} else {
if((state_val_43374 === (12))){
var inst_43348 = (state_43373[(2)]);
var state_43373__$1 = state_43373;
var statearr_43395_43436 = state_43373__$1;
(statearr_43395_43436[(2)] = inst_43348);

(statearr_43395_43436[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (2))){
var state_43373__$1 = state_43373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43373__$1,(4),ch);
} else {
if((state_val_43374 === (23))){
var state_43373__$1 = state_43373;
var statearr_43396_43437 = state_43373__$1;
(statearr_43396_43437[(2)] = null);

(statearr_43396_43437[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (19))){
var inst_43354 = (state_43373[(11)]);
var inst_43304 = (state_43373[(8)]);
var inst_43356 = cljs.core.async.muxch_STAR_.call(null,inst_43354);
var state_43373__$1 = state_43373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43373__$1,(22),inst_43356,inst_43304);
} else {
if((state_val_43374 === (11))){
var inst_43328 = (state_43373[(10)]);
var inst_43314 = (state_43373[(14)]);
var inst_43328__$1 = cljs.core.seq.call(null,inst_43314);
var state_43373__$1 = (function (){var statearr_43397 = state_43373;
(statearr_43397[(10)] = inst_43328__$1);

return statearr_43397;
})();
if(inst_43328__$1){
var statearr_43398_43438 = state_43373__$1;
(statearr_43398_43438[(1)] = (13));

} else {
var statearr_43399_43439 = state_43373__$1;
(statearr_43399_43439[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (9))){
var inst_43350 = (state_43373[(2)]);
var state_43373__$1 = state_43373;
var statearr_43400_43440 = state_43373__$1;
(statearr_43400_43440[(2)] = inst_43350);

(statearr_43400_43440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (5))){
var inst_43311 = cljs.core.deref.call(null,mults);
var inst_43312 = cljs.core.vals.call(null,inst_43311);
var inst_43313 = cljs.core.seq.call(null,inst_43312);
var inst_43314 = inst_43313;
var inst_43315 = null;
var inst_43316 = (0);
var inst_43317 = (0);
var state_43373__$1 = (function (){var statearr_43401 = state_43373;
(statearr_43401[(13)] = inst_43317);

(statearr_43401[(14)] = inst_43314);

(statearr_43401[(15)] = inst_43316);

(statearr_43401[(16)] = inst_43315);

return statearr_43401;
})();
var statearr_43402_43441 = state_43373__$1;
(statearr_43402_43441[(2)] = null);

(statearr_43402_43441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (14))){
var state_43373__$1 = state_43373;
var statearr_43406_43442 = state_43373__$1;
(statearr_43406_43442[(2)] = null);

(statearr_43406_43442[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (16))){
var inst_43328 = (state_43373[(10)]);
var inst_43332 = cljs.core.chunk_first.call(null,inst_43328);
var inst_43333 = cljs.core.chunk_rest.call(null,inst_43328);
var inst_43334 = cljs.core.count.call(null,inst_43332);
var inst_43314 = inst_43333;
var inst_43315 = inst_43332;
var inst_43316 = inst_43334;
var inst_43317 = (0);
var state_43373__$1 = (function (){var statearr_43407 = state_43373;
(statearr_43407[(13)] = inst_43317);

(statearr_43407[(14)] = inst_43314);

(statearr_43407[(15)] = inst_43316);

(statearr_43407[(16)] = inst_43315);

return statearr_43407;
})();
var statearr_43408_43443 = state_43373__$1;
(statearr_43408_43443[(2)] = null);

(statearr_43408_43443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (10))){
var inst_43317 = (state_43373[(13)]);
var inst_43314 = (state_43373[(14)]);
var inst_43316 = (state_43373[(15)]);
var inst_43315 = (state_43373[(16)]);
var inst_43322 = cljs.core._nth.call(null,inst_43315,inst_43317);
var inst_43323 = cljs.core.async.muxch_STAR_.call(null,inst_43322);
var inst_43324 = cljs.core.async.close_BANG_.call(null,inst_43323);
var inst_43325 = (inst_43317 + (1));
var tmp43403 = inst_43314;
var tmp43404 = inst_43316;
var tmp43405 = inst_43315;
var inst_43314__$1 = tmp43403;
var inst_43315__$1 = tmp43405;
var inst_43316__$1 = tmp43404;
var inst_43317__$1 = inst_43325;
var state_43373__$1 = (function (){var statearr_43409 = state_43373;
(statearr_43409[(13)] = inst_43317__$1);

(statearr_43409[(14)] = inst_43314__$1);

(statearr_43409[(17)] = inst_43324);

(statearr_43409[(15)] = inst_43316__$1);

(statearr_43409[(16)] = inst_43315__$1);

return statearr_43409;
})();
var statearr_43410_43444 = state_43373__$1;
(statearr_43410_43444[(2)] = null);

(statearr_43410_43444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (18))){
var inst_43343 = (state_43373[(2)]);
var state_43373__$1 = state_43373;
var statearr_43411_43445 = state_43373__$1;
(statearr_43411_43445[(2)] = inst_43343);

(statearr_43411_43445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43374 === (8))){
var inst_43317 = (state_43373[(13)]);
var inst_43316 = (state_43373[(15)]);
var inst_43319 = (inst_43317 < inst_43316);
var inst_43320 = inst_43319;
var state_43373__$1 = state_43373;
if(cljs.core.truth_(inst_43320)){
var statearr_43412_43446 = state_43373__$1;
(statearr_43412_43446[(1)] = (10));

} else {
var statearr_43413_43447 = state_43373__$1;
(statearr_43413_43447[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__42199__auto___43419,mults,ensure_mult,p))
;
return ((function (switch__42111__auto__,c__42199__auto___43419,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__42112__auto__ = null;
var cljs$core$async$state_machine__42112__auto____0 = (function (){
var statearr_43414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43414[(0)] = cljs$core$async$state_machine__42112__auto__);

(statearr_43414[(1)] = (1));

return statearr_43414;
});
var cljs$core$async$state_machine__42112__auto____1 = (function (state_43373){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_43373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e43415){if((e43415 instanceof Object)){
var ex__42115__auto__ = e43415;
var statearr_43416_43448 = state_43373;
(statearr_43416_43448[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43449 = state_43373;
state_43373 = G__43449;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$state_machine__42112__auto__ = function(state_43373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42112__auto____1.call(this,state_43373);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42112__auto____0;
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42112__auto____1;
return cljs$core$async$state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto___43419,mults,ensure_mult,p))
})();
var state__42201__auto__ = (function (){var statearr_43417 = f__42200__auto__.call(null);
(statearr_43417[(6)] = c__42199__auto___43419);

return statearr_43417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto___43419,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__43451 = arguments.length;
switch (G__43451) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__43454 = arguments.length;
switch (G__43454) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__43457 = arguments.length;
switch (G__43457) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__42199__auto___43524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto___43524,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto___43524,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43496){
var state_val_43497 = (state_43496[(1)]);
if((state_val_43497 === (7))){
var state_43496__$1 = state_43496;
var statearr_43498_43525 = state_43496__$1;
(statearr_43498_43525[(2)] = null);

(statearr_43498_43525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (1))){
var state_43496__$1 = state_43496;
var statearr_43499_43526 = state_43496__$1;
(statearr_43499_43526[(2)] = null);

(statearr_43499_43526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (4))){
var inst_43460 = (state_43496[(7)]);
var inst_43462 = (inst_43460 < cnt);
var state_43496__$1 = state_43496;
if(cljs.core.truth_(inst_43462)){
var statearr_43500_43527 = state_43496__$1;
(statearr_43500_43527[(1)] = (6));

} else {
var statearr_43501_43528 = state_43496__$1;
(statearr_43501_43528[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (15))){
var inst_43492 = (state_43496[(2)]);
var state_43496__$1 = state_43496;
var statearr_43502_43529 = state_43496__$1;
(statearr_43502_43529[(2)] = inst_43492);

(statearr_43502_43529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (13))){
var inst_43485 = cljs.core.async.close_BANG_.call(null,out);
var state_43496__$1 = state_43496;
var statearr_43503_43530 = state_43496__$1;
(statearr_43503_43530[(2)] = inst_43485);

(statearr_43503_43530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (6))){
var state_43496__$1 = state_43496;
var statearr_43504_43531 = state_43496__$1;
(statearr_43504_43531[(2)] = null);

(statearr_43504_43531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (3))){
var inst_43494 = (state_43496[(2)]);
var state_43496__$1 = state_43496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43496__$1,inst_43494);
} else {
if((state_val_43497 === (12))){
var inst_43482 = (state_43496[(8)]);
var inst_43482__$1 = (state_43496[(2)]);
var inst_43483 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43482__$1);
var state_43496__$1 = (function (){var statearr_43505 = state_43496;
(statearr_43505[(8)] = inst_43482__$1);

return statearr_43505;
})();
if(cljs.core.truth_(inst_43483)){
var statearr_43506_43532 = state_43496__$1;
(statearr_43506_43532[(1)] = (13));

} else {
var statearr_43507_43533 = state_43496__$1;
(statearr_43507_43533[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (2))){
var inst_43459 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43460 = (0);
var state_43496__$1 = (function (){var statearr_43508 = state_43496;
(statearr_43508[(9)] = inst_43459);

(statearr_43508[(7)] = inst_43460);

return statearr_43508;
})();
var statearr_43509_43534 = state_43496__$1;
(statearr_43509_43534[(2)] = null);

(statearr_43509_43534[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (11))){
var inst_43460 = (state_43496[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43496,(10),Object,null,(9));
var inst_43469 = chs__$1.call(null,inst_43460);
var inst_43470 = done.call(null,inst_43460);
var inst_43471 = cljs.core.async.take_BANG_.call(null,inst_43469,inst_43470);
var state_43496__$1 = state_43496;
var statearr_43510_43535 = state_43496__$1;
(statearr_43510_43535[(2)] = inst_43471);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43496__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (9))){
var inst_43460 = (state_43496[(7)]);
var inst_43473 = (state_43496[(2)]);
var inst_43474 = (inst_43460 + (1));
var inst_43460__$1 = inst_43474;
var state_43496__$1 = (function (){var statearr_43511 = state_43496;
(statearr_43511[(10)] = inst_43473);

(statearr_43511[(7)] = inst_43460__$1);

return statearr_43511;
})();
var statearr_43512_43536 = state_43496__$1;
(statearr_43512_43536[(2)] = null);

(statearr_43512_43536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (5))){
var inst_43480 = (state_43496[(2)]);
var state_43496__$1 = (function (){var statearr_43513 = state_43496;
(statearr_43513[(11)] = inst_43480);

return statearr_43513;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43496__$1,(12),dchan);
} else {
if((state_val_43497 === (14))){
var inst_43482 = (state_43496[(8)]);
var inst_43487 = cljs.core.apply.call(null,f,inst_43482);
var state_43496__$1 = state_43496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43496__$1,(16),out,inst_43487);
} else {
if((state_val_43497 === (16))){
var inst_43489 = (state_43496[(2)]);
var state_43496__$1 = (function (){var statearr_43514 = state_43496;
(statearr_43514[(12)] = inst_43489);

return statearr_43514;
})();
var statearr_43515_43537 = state_43496__$1;
(statearr_43515_43537[(2)] = null);

(statearr_43515_43537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (10))){
var inst_43464 = (state_43496[(2)]);
var inst_43465 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43496__$1 = (function (){var statearr_43516 = state_43496;
(statearr_43516[(13)] = inst_43464);

return statearr_43516;
})();
var statearr_43517_43538 = state_43496__$1;
(statearr_43517_43538[(2)] = inst_43465);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43496__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (8))){
var inst_43478 = (state_43496[(2)]);
var state_43496__$1 = state_43496;
var statearr_43518_43539 = state_43496__$1;
(statearr_43518_43539[(2)] = inst_43478);

(statearr_43518_43539[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__42199__auto___43524,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__42111__auto__,c__42199__auto___43524,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__42112__auto__ = null;
var cljs$core$async$state_machine__42112__auto____0 = (function (){
var statearr_43519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43519[(0)] = cljs$core$async$state_machine__42112__auto__);

(statearr_43519[(1)] = (1));

return statearr_43519;
});
var cljs$core$async$state_machine__42112__auto____1 = (function (state_43496){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_43496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e43520){if((e43520 instanceof Object)){
var ex__42115__auto__ = e43520;
var statearr_43521_43540 = state_43496;
(statearr_43521_43540[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43541 = state_43496;
state_43496 = G__43541;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$state_machine__42112__auto__ = function(state_43496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42112__auto____1.call(this,state_43496);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42112__auto____0;
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42112__auto____1;
return cljs$core$async$state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto___43524,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__42201__auto__ = (function (){var statearr_43522 = f__42200__auto__.call(null);
(statearr_43522[(6)] = c__42199__auto___43524);

return statearr_43522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto___43524,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__43544 = arguments.length;
switch (G__43544) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42199__auto___43598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto___43598,out){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto___43598,out){
return (function (state_43576){
var state_val_43577 = (state_43576[(1)]);
if((state_val_43577 === (7))){
var inst_43556 = (state_43576[(7)]);
var inst_43555 = (state_43576[(8)]);
var inst_43555__$1 = (state_43576[(2)]);
var inst_43556__$1 = cljs.core.nth.call(null,inst_43555__$1,(0),null);
var inst_43557 = cljs.core.nth.call(null,inst_43555__$1,(1),null);
var inst_43558 = (inst_43556__$1 == null);
var state_43576__$1 = (function (){var statearr_43578 = state_43576;
(statearr_43578[(7)] = inst_43556__$1);

(statearr_43578[(8)] = inst_43555__$1);

(statearr_43578[(9)] = inst_43557);

return statearr_43578;
})();
if(cljs.core.truth_(inst_43558)){
var statearr_43579_43599 = state_43576__$1;
(statearr_43579_43599[(1)] = (8));

} else {
var statearr_43580_43600 = state_43576__$1;
(statearr_43580_43600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (1))){
var inst_43545 = cljs.core.vec.call(null,chs);
var inst_43546 = inst_43545;
var state_43576__$1 = (function (){var statearr_43581 = state_43576;
(statearr_43581[(10)] = inst_43546);

return statearr_43581;
})();
var statearr_43582_43601 = state_43576__$1;
(statearr_43582_43601[(2)] = null);

(statearr_43582_43601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (4))){
var inst_43546 = (state_43576[(10)]);
var state_43576__$1 = state_43576;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43576__$1,(7),inst_43546);
} else {
if((state_val_43577 === (6))){
var inst_43572 = (state_43576[(2)]);
var state_43576__$1 = state_43576;
var statearr_43583_43602 = state_43576__$1;
(statearr_43583_43602[(2)] = inst_43572);

(statearr_43583_43602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (3))){
var inst_43574 = (state_43576[(2)]);
var state_43576__$1 = state_43576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43576__$1,inst_43574);
} else {
if((state_val_43577 === (2))){
var inst_43546 = (state_43576[(10)]);
var inst_43548 = cljs.core.count.call(null,inst_43546);
var inst_43549 = (inst_43548 > (0));
var state_43576__$1 = state_43576;
if(cljs.core.truth_(inst_43549)){
var statearr_43585_43603 = state_43576__$1;
(statearr_43585_43603[(1)] = (4));

} else {
var statearr_43586_43604 = state_43576__$1;
(statearr_43586_43604[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (11))){
var inst_43546 = (state_43576[(10)]);
var inst_43565 = (state_43576[(2)]);
var tmp43584 = inst_43546;
var inst_43546__$1 = tmp43584;
var state_43576__$1 = (function (){var statearr_43587 = state_43576;
(statearr_43587[(10)] = inst_43546__$1);

(statearr_43587[(11)] = inst_43565);

return statearr_43587;
})();
var statearr_43588_43605 = state_43576__$1;
(statearr_43588_43605[(2)] = null);

(statearr_43588_43605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (9))){
var inst_43556 = (state_43576[(7)]);
var state_43576__$1 = state_43576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43576__$1,(11),out,inst_43556);
} else {
if((state_val_43577 === (5))){
var inst_43570 = cljs.core.async.close_BANG_.call(null,out);
var state_43576__$1 = state_43576;
var statearr_43589_43606 = state_43576__$1;
(statearr_43589_43606[(2)] = inst_43570);

(statearr_43589_43606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (10))){
var inst_43568 = (state_43576[(2)]);
var state_43576__$1 = state_43576;
var statearr_43590_43607 = state_43576__$1;
(statearr_43590_43607[(2)] = inst_43568);

(statearr_43590_43607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (8))){
var inst_43556 = (state_43576[(7)]);
var inst_43546 = (state_43576[(10)]);
var inst_43555 = (state_43576[(8)]);
var inst_43557 = (state_43576[(9)]);
var inst_43560 = (function (){var cs = inst_43546;
var vec__43551 = inst_43555;
var v = inst_43556;
var c = inst_43557;
return ((function (cs,vec__43551,v,c,inst_43556,inst_43546,inst_43555,inst_43557,state_val_43577,c__42199__auto___43598,out){
return (function (p1__43542_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43542_SHARP_);
});
;})(cs,vec__43551,v,c,inst_43556,inst_43546,inst_43555,inst_43557,state_val_43577,c__42199__auto___43598,out))
})();
var inst_43561 = cljs.core.filterv.call(null,inst_43560,inst_43546);
var inst_43546__$1 = inst_43561;
var state_43576__$1 = (function (){var statearr_43591 = state_43576;
(statearr_43591[(10)] = inst_43546__$1);

return statearr_43591;
})();
var statearr_43592_43608 = state_43576__$1;
(statearr_43592_43608[(2)] = null);

(statearr_43592_43608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__42199__auto___43598,out))
;
return ((function (switch__42111__auto__,c__42199__auto___43598,out){
return (function() {
var cljs$core$async$state_machine__42112__auto__ = null;
var cljs$core$async$state_machine__42112__auto____0 = (function (){
var statearr_43593 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43593[(0)] = cljs$core$async$state_machine__42112__auto__);

(statearr_43593[(1)] = (1));

return statearr_43593;
});
var cljs$core$async$state_machine__42112__auto____1 = (function (state_43576){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_43576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e43594){if((e43594 instanceof Object)){
var ex__42115__auto__ = e43594;
var statearr_43595_43609 = state_43576;
(statearr_43595_43609[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43610 = state_43576;
state_43576 = G__43610;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$state_machine__42112__auto__ = function(state_43576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42112__auto____1.call(this,state_43576);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42112__auto____0;
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42112__auto____1;
return cljs$core$async$state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto___43598,out))
})();
var state__42201__auto__ = (function (){var statearr_43596 = f__42200__auto__.call(null);
(statearr_43596[(6)] = c__42199__auto___43598);

return statearr_43596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto___43598,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__43612 = arguments.length;
switch (G__43612) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42199__auto___43657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto___43657,out){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto___43657,out){
return (function (state_43636){
var state_val_43637 = (state_43636[(1)]);
if((state_val_43637 === (7))){
var inst_43618 = (state_43636[(7)]);
var inst_43618__$1 = (state_43636[(2)]);
var inst_43619 = (inst_43618__$1 == null);
var inst_43620 = cljs.core.not.call(null,inst_43619);
var state_43636__$1 = (function (){var statearr_43638 = state_43636;
(statearr_43638[(7)] = inst_43618__$1);

return statearr_43638;
})();
if(inst_43620){
var statearr_43639_43658 = state_43636__$1;
(statearr_43639_43658[(1)] = (8));

} else {
var statearr_43640_43659 = state_43636__$1;
(statearr_43640_43659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43637 === (1))){
var inst_43613 = (0);
var state_43636__$1 = (function (){var statearr_43641 = state_43636;
(statearr_43641[(8)] = inst_43613);

return statearr_43641;
})();
var statearr_43642_43660 = state_43636__$1;
(statearr_43642_43660[(2)] = null);

(statearr_43642_43660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43637 === (4))){
var state_43636__$1 = state_43636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43636__$1,(7),ch);
} else {
if((state_val_43637 === (6))){
var inst_43631 = (state_43636[(2)]);
var state_43636__$1 = state_43636;
var statearr_43643_43661 = state_43636__$1;
(statearr_43643_43661[(2)] = inst_43631);

(statearr_43643_43661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43637 === (3))){
var inst_43633 = (state_43636[(2)]);
var inst_43634 = cljs.core.async.close_BANG_.call(null,out);
var state_43636__$1 = (function (){var statearr_43644 = state_43636;
(statearr_43644[(9)] = inst_43633);

return statearr_43644;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43636__$1,inst_43634);
} else {
if((state_val_43637 === (2))){
var inst_43613 = (state_43636[(8)]);
var inst_43615 = (inst_43613 < n);
var state_43636__$1 = state_43636;
if(cljs.core.truth_(inst_43615)){
var statearr_43645_43662 = state_43636__$1;
(statearr_43645_43662[(1)] = (4));

} else {
var statearr_43646_43663 = state_43636__$1;
(statearr_43646_43663[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43637 === (11))){
var inst_43613 = (state_43636[(8)]);
var inst_43623 = (state_43636[(2)]);
var inst_43624 = (inst_43613 + (1));
var inst_43613__$1 = inst_43624;
var state_43636__$1 = (function (){var statearr_43647 = state_43636;
(statearr_43647[(8)] = inst_43613__$1);

(statearr_43647[(10)] = inst_43623);

return statearr_43647;
})();
var statearr_43648_43664 = state_43636__$1;
(statearr_43648_43664[(2)] = null);

(statearr_43648_43664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43637 === (9))){
var state_43636__$1 = state_43636;
var statearr_43649_43665 = state_43636__$1;
(statearr_43649_43665[(2)] = null);

(statearr_43649_43665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43637 === (5))){
var state_43636__$1 = state_43636;
var statearr_43650_43666 = state_43636__$1;
(statearr_43650_43666[(2)] = null);

(statearr_43650_43666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43637 === (10))){
var inst_43628 = (state_43636[(2)]);
var state_43636__$1 = state_43636;
var statearr_43651_43667 = state_43636__$1;
(statearr_43651_43667[(2)] = inst_43628);

(statearr_43651_43667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43637 === (8))){
var inst_43618 = (state_43636[(7)]);
var state_43636__$1 = state_43636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43636__$1,(11),out,inst_43618);
} else {
return null;
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
});})(c__42199__auto___43657,out))
;
return ((function (switch__42111__auto__,c__42199__auto___43657,out){
return (function() {
var cljs$core$async$state_machine__42112__auto__ = null;
var cljs$core$async$state_machine__42112__auto____0 = (function (){
var statearr_43652 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43652[(0)] = cljs$core$async$state_machine__42112__auto__);

(statearr_43652[(1)] = (1));

return statearr_43652;
});
var cljs$core$async$state_machine__42112__auto____1 = (function (state_43636){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_43636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e43653){if((e43653 instanceof Object)){
var ex__42115__auto__ = e43653;
var statearr_43654_43668 = state_43636;
(statearr_43654_43668[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43669 = state_43636;
state_43636 = G__43669;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$state_machine__42112__auto__ = function(state_43636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42112__auto____1.call(this,state_43636);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42112__auto____0;
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42112__auto____1;
return cljs$core$async$state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto___43657,out))
})();
var state__42201__auto__ = (function (){var statearr_43655 = f__42200__auto__.call(null);
(statearr_43655[(6)] = c__42199__auto___43657);

return statearr_43655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto___43657,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43671 = (function (f,ch,meta43672){
this.f = f;
this.ch = ch;
this.meta43672 = meta43672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43673,meta43672__$1){
var self__ = this;
var _43673__$1 = this;
return (new cljs.core.async.t_cljs$core$async43671(self__.f,self__.ch,meta43672__$1));
});

cljs.core.async.t_cljs$core$async43671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43673){
var self__ = this;
var _43673__$1 = this;
return self__.meta43672;
});

cljs.core.async.t_cljs$core$async43671.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43671.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43671.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43671.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43671.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async43674 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43674 = (function (f,ch,meta43672,_,fn1,meta43675){
this.f = f;
this.ch = ch;
this.meta43672 = meta43672;
this._ = _;
this.fn1 = fn1;
this.meta43675 = meta43675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43676,meta43675__$1){
var self__ = this;
var _43676__$1 = this;
return (new cljs.core.async.t_cljs$core$async43674(self__.f,self__.ch,self__.meta43672,self__._,self__.fn1,meta43675__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43676){
var self__ = this;
var _43676__$1 = this;
return self__.meta43675;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43674.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43674.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43674.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43674.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43670_SHARP_){
return f1.call(null,(((p1__43670_SHARP_ == null))?null:self__.f.call(null,p1__43670_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43674.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43672","meta43672",-265275170,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43671","cljs.core.async/t_cljs$core$async43671",-1196873773,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43675","meta43675",-364345597,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43674.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43674";

cljs.core.async.t_cljs$core$async43674.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async43674");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async43674 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43674(f__$1,ch__$1,meta43672__$1,___$2,fn1__$1,meta43675){
return (new cljs.core.async.t_cljs$core$async43674(f__$1,ch__$1,meta43672__$1,___$2,fn1__$1,meta43675));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43674(self__.f,self__.ch,self__.meta43672,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28127__auto__ = ret;
if(cljs.core.truth_(and__28127__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28127__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async43671.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43671.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43672","meta43672",-265275170,null)], null);
});

cljs.core.async.t_cljs$core$async43671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43671";

cljs.core.async.t_cljs$core$async43671.cljs$lang$ctorPrWriter = (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async43671");
});

cljs.core.async.__GT_t_cljs$core$async43671 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43671(f__$1,ch__$1,meta43672){
return (new cljs.core.async.t_cljs$core$async43671(f__$1,ch__$1,meta43672));
});

}

return (new cljs.core.async.t_cljs$core$async43671(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43677 = (function (f,ch,meta43678){
this.f = f;
this.ch = ch;
this.meta43678 = meta43678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43679,meta43678__$1){
var self__ = this;
var _43679__$1 = this;
return (new cljs.core.async.t_cljs$core$async43677(self__.f,self__.ch,meta43678__$1));
});

cljs.core.async.t_cljs$core$async43677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43679){
var self__ = this;
var _43679__$1 = this;
return self__.meta43678;
});

cljs.core.async.t_cljs$core$async43677.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43677.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43677.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43677.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43677.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43677.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43678","meta43678",-1650278523,null)], null);
});

cljs.core.async.t_cljs$core$async43677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43677";

cljs.core.async.t_cljs$core$async43677.cljs$lang$ctorPrWriter = (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async43677");
});

cljs.core.async.__GT_t_cljs$core$async43677 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43677(f__$1,ch__$1,meta43678){
return (new cljs.core.async.t_cljs$core$async43677(f__$1,ch__$1,meta43678));
});

}

return (new cljs.core.async.t_cljs$core$async43677(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async43680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43680 = (function (p,ch,meta43681){
this.p = p;
this.ch = ch;
this.meta43681 = meta43681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43682,meta43681__$1){
var self__ = this;
var _43682__$1 = this;
return (new cljs.core.async.t_cljs$core$async43680(self__.p,self__.ch,meta43681__$1));
});

cljs.core.async.t_cljs$core$async43680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43682){
var self__ = this;
var _43682__$1 = this;
return self__.meta43681;
});

cljs.core.async.t_cljs$core$async43680.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43680.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43680.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43680.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43680.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43680.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43680.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43681","meta43681",-1801528480,null)], null);
});

cljs.core.async.t_cljs$core$async43680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43680";

cljs.core.async.t_cljs$core$async43680.cljs$lang$ctorPrWriter = (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async43680");
});

cljs.core.async.__GT_t_cljs$core$async43680 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43680(p__$1,ch__$1,meta43681){
return (new cljs.core.async.t_cljs$core$async43680(p__$1,ch__$1,meta43681));
});

}

return (new cljs.core.async.t_cljs$core$async43680(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__43684 = arguments.length;
switch (G__43684) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42199__auto___43724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto___43724,out){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto___43724,out){
return (function (state_43705){
var state_val_43706 = (state_43705[(1)]);
if((state_val_43706 === (7))){
var inst_43701 = (state_43705[(2)]);
var state_43705__$1 = state_43705;
var statearr_43707_43725 = state_43705__$1;
(statearr_43707_43725[(2)] = inst_43701);

(statearr_43707_43725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43706 === (1))){
var state_43705__$1 = state_43705;
var statearr_43708_43726 = state_43705__$1;
(statearr_43708_43726[(2)] = null);

(statearr_43708_43726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43706 === (4))){
var inst_43687 = (state_43705[(7)]);
var inst_43687__$1 = (state_43705[(2)]);
var inst_43688 = (inst_43687__$1 == null);
var state_43705__$1 = (function (){var statearr_43709 = state_43705;
(statearr_43709[(7)] = inst_43687__$1);

return statearr_43709;
})();
if(cljs.core.truth_(inst_43688)){
var statearr_43710_43727 = state_43705__$1;
(statearr_43710_43727[(1)] = (5));

} else {
var statearr_43711_43728 = state_43705__$1;
(statearr_43711_43728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43706 === (6))){
var inst_43687 = (state_43705[(7)]);
var inst_43692 = p.call(null,inst_43687);
var state_43705__$1 = state_43705;
if(cljs.core.truth_(inst_43692)){
var statearr_43712_43729 = state_43705__$1;
(statearr_43712_43729[(1)] = (8));

} else {
var statearr_43713_43730 = state_43705__$1;
(statearr_43713_43730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43706 === (3))){
var inst_43703 = (state_43705[(2)]);
var state_43705__$1 = state_43705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43705__$1,inst_43703);
} else {
if((state_val_43706 === (2))){
var state_43705__$1 = state_43705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43705__$1,(4),ch);
} else {
if((state_val_43706 === (11))){
var inst_43695 = (state_43705[(2)]);
var state_43705__$1 = state_43705;
var statearr_43714_43731 = state_43705__$1;
(statearr_43714_43731[(2)] = inst_43695);

(statearr_43714_43731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43706 === (9))){
var state_43705__$1 = state_43705;
var statearr_43715_43732 = state_43705__$1;
(statearr_43715_43732[(2)] = null);

(statearr_43715_43732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43706 === (5))){
var inst_43690 = cljs.core.async.close_BANG_.call(null,out);
var state_43705__$1 = state_43705;
var statearr_43716_43733 = state_43705__$1;
(statearr_43716_43733[(2)] = inst_43690);

(statearr_43716_43733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43706 === (10))){
var inst_43698 = (state_43705[(2)]);
var state_43705__$1 = (function (){var statearr_43717 = state_43705;
(statearr_43717[(8)] = inst_43698);

return statearr_43717;
})();
var statearr_43718_43734 = state_43705__$1;
(statearr_43718_43734[(2)] = null);

(statearr_43718_43734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43706 === (8))){
var inst_43687 = (state_43705[(7)]);
var state_43705__$1 = state_43705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43705__$1,(11),out,inst_43687);
} else {
return null;
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
});})(c__42199__auto___43724,out))
;
return ((function (switch__42111__auto__,c__42199__auto___43724,out){
return (function() {
var cljs$core$async$state_machine__42112__auto__ = null;
var cljs$core$async$state_machine__42112__auto____0 = (function (){
var statearr_43719 = [null,null,null,null,null,null,null,null,null];
(statearr_43719[(0)] = cljs$core$async$state_machine__42112__auto__);

(statearr_43719[(1)] = (1));

return statearr_43719;
});
var cljs$core$async$state_machine__42112__auto____1 = (function (state_43705){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_43705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e43720){if((e43720 instanceof Object)){
var ex__42115__auto__ = e43720;
var statearr_43721_43735 = state_43705;
(statearr_43721_43735[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43736 = state_43705;
state_43705 = G__43736;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$state_machine__42112__auto__ = function(state_43705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42112__auto____1.call(this,state_43705);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42112__auto____0;
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42112__auto____1;
return cljs$core$async$state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto___43724,out))
})();
var state__42201__auto__ = (function (){var statearr_43722 = f__42200__auto__.call(null);
(statearr_43722[(6)] = c__42199__auto___43724);

return statearr_43722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto___43724,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43738 = arguments.length;
switch (G__43738) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__42199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto__){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto__){
return (function (state_43801){
var state_val_43802 = (state_43801[(1)]);
if((state_val_43802 === (7))){
var inst_43797 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
var statearr_43803_43841 = state_43801__$1;
(statearr_43803_43841[(2)] = inst_43797);

(statearr_43803_43841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (20))){
var inst_43767 = (state_43801[(7)]);
var inst_43778 = (state_43801[(2)]);
var inst_43779 = cljs.core.next.call(null,inst_43767);
var inst_43753 = inst_43779;
var inst_43754 = null;
var inst_43755 = (0);
var inst_43756 = (0);
var state_43801__$1 = (function (){var statearr_43804 = state_43801;
(statearr_43804[(8)] = inst_43778);

(statearr_43804[(9)] = inst_43756);

(statearr_43804[(10)] = inst_43755);

(statearr_43804[(11)] = inst_43754);

(statearr_43804[(12)] = inst_43753);

return statearr_43804;
})();
var statearr_43805_43842 = state_43801__$1;
(statearr_43805_43842[(2)] = null);

(statearr_43805_43842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (1))){
var state_43801__$1 = state_43801;
var statearr_43806_43843 = state_43801__$1;
(statearr_43806_43843[(2)] = null);

(statearr_43806_43843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (4))){
var inst_43742 = (state_43801[(13)]);
var inst_43742__$1 = (state_43801[(2)]);
var inst_43743 = (inst_43742__$1 == null);
var state_43801__$1 = (function (){var statearr_43807 = state_43801;
(statearr_43807[(13)] = inst_43742__$1);

return statearr_43807;
})();
if(cljs.core.truth_(inst_43743)){
var statearr_43808_43844 = state_43801__$1;
(statearr_43808_43844[(1)] = (5));

} else {
var statearr_43809_43845 = state_43801__$1;
(statearr_43809_43845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (15))){
var state_43801__$1 = state_43801;
var statearr_43813_43846 = state_43801__$1;
(statearr_43813_43846[(2)] = null);

(statearr_43813_43846[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (21))){
var state_43801__$1 = state_43801;
var statearr_43814_43847 = state_43801__$1;
(statearr_43814_43847[(2)] = null);

(statearr_43814_43847[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (13))){
var inst_43756 = (state_43801[(9)]);
var inst_43755 = (state_43801[(10)]);
var inst_43754 = (state_43801[(11)]);
var inst_43753 = (state_43801[(12)]);
var inst_43763 = (state_43801[(2)]);
var inst_43764 = (inst_43756 + (1));
var tmp43810 = inst_43755;
var tmp43811 = inst_43754;
var tmp43812 = inst_43753;
var inst_43753__$1 = tmp43812;
var inst_43754__$1 = tmp43811;
var inst_43755__$1 = tmp43810;
var inst_43756__$1 = inst_43764;
var state_43801__$1 = (function (){var statearr_43815 = state_43801;
(statearr_43815[(14)] = inst_43763);

(statearr_43815[(9)] = inst_43756__$1);

(statearr_43815[(10)] = inst_43755__$1);

(statearr_43815[(11)] = inst_43754__$1);

(statearr_43815[(12)] = inst_43753__$1);

return statearr_43815;
})();
var statearr_43816_43848 = state_43801__$1;
(statearr_43816_43848[(2)] = null);

(statearr_43816_43848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (22))){
var state_43801__$1 = state_43801;
var statearr_43817_43849 = state_43801__$1;
(statearr_43817_43849[(2)] = null);

(statearr_43817_43849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (6))){
var inst_43742 = (state_43801[(13)]);
var inst_43751 = f.call(null,inst_43742);
var inst_43752 = cljs.core.seq.call(null,inst_43751);
var inst_43753 = inst_43752;
var inst_43754 = null;
var inst_43755 = (0);
var inst_43756 = (0);
var state_43801__$1 = (function (){var statearr_43818 = state_43801;
(statearr_43818[(9)] = inst_43756);

(statearr_43818[(10)] = inst_43755);

(statearr_43818[(11)] = inst_43754);

(statearr_43818[(12)] = inst_43753);

return statearr_43818;
})();
var statearr_43819_43850 = state_43801__$1;
(statearr_43819_43850[(2)] = null);

(statearr_43819_43850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (17))){
var inst_43767 = (state_43801[(7)]);
var inst_43771 = cljs.core.chunk_first.call(null,inst_43767);
var inst_43772 = cljs.core.chunk_rest.call(null,inst_43767);
var inst_43773 = cljs.core.count.call(null,inst_43771);
var inst_43753 = inst_43772;
var inst_43754 = inst_43771;
var inst_43755 = inst_43773;
var inst_43756 = (0);
var state_43801__$1 = (function (){var statearr_43820 = state_43801;
(statearr_43820[(9)] = inst_43756);

(statearr_43820[(10)] = inst_43755);

(statearr_43820[(11)] = inst_43754);

(statearr_43820[(12)] = inst_43753);

return statearr_43820;
})();
var statearr_43821_43851 = state_43801__$1;
(statearr_43821_43851[(2)] = null);

(statearr_43821_43851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (3))){
var inst_43799 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43801__$1,inst_43799);
} else {
if((state_val_43802 === (12))){
var inst_43787 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
var statearr_43822_43852 = state_43801__$1;
(statearr_43822_43852[(2)] = inst_43787);

(statearr_43822_43852[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (2))){
var state_43801__$1 = state_43801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43801__$1,(4),in$);
} else {
if((state_val_43802 === (23))){
var inst_43795 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
var statearr_43823_43853 = state_43801__$1;
(statearr_43823_43853[(2)] = inst_43795);

(statearr_43823_43853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (19))){
var inst_43782 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
var statearr_43824_43854 = state_43801__$1;
(statearr_43824_43854[(2)] = inst_43782);

(statearr_43824_43854[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (11))){
var inst_43767 = (state_43801[(7)]);
var inst_43753 = (state_43801[(12)]);
var inst_43767__$1 = cljs.core.seq.call(null,inst_43753);
var state_43801__$1 = (function (){var statearr_43825 = state_43801;
(statearr_43825[(7)] = inst_43767__$1);

return statearr_43825;
})();
if(inst_43767__$1){
var statearr_43826_43855 = state_43801__$1;
(statearr_43826_43855[(1)] = (14));

} else {
var statearr_43827_43856 = state_43801__$1;
(statearr_43827_43856[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (9))){
var inst_43789 = (state_43801[(2)]);
var inst_43790 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43801__$1 = (function (){var statearr_43828 = state_43801;
(statearr_43828[(15)] = inst_43789);

return statearr_43828;
})();
if(cljs.core.truth_(inst_43790)){
var statearr_43829_43857 = state_43801__$1;
(statearr_43829_43857[(1)] = (21));

} else {
var statearr_43830_43858 = state_43801__$1;
(statearr_43830_43858[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (5))){
var inst_43745 = cljs.core.async.close_BANG_.call(null,out);
var state_43801__$1 = state_43801;
var statearr_43831_43859 = state_43801__$1;
(statearr_43831_43859[(2)] = inst_43745);

(statearr_43831_43859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (14))){
var inst_43767 = (state_43801[(7)]);
var inst_43769 = cljs.core.chunked_seq_QMARK_.call(null,inst_43767);
var state_43801__$1 = state_43801;
if(inst_43769){
var statearr_43832_43860 = state_43801__$1;
(statearr_43832_43860[(1)] = (17));

} else {
var statearr_43833_43861 = state_43801__$1;
(statearr_43833_43861[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (16))){
var inst_43785 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
var statearr_43834_43862 = state_43801__$1;
(statearr_43834_43862[(2)] = inst_43785);

(statearr_43834_43862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (10))){
var inst_43756 = (state_43801[(9)]);
var inst_43754 = (state_43801[(11)]);
var inst_43761 = cljs.core._nth.call(null,inst_43754,inst_43756);
var state_43801__$1 = state_43801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43801__$1,(13),out,inst_43761);
} else {
if((state_val_43802 === (18))){
var inst_43767 = (state_43801[(7)]);
var inst_43776 = cljs.core.first.call(null,inst_43767);
var state_43801__$1 = state_43801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43801__$1,(20),out,inst_43776);
} else {
if((state_val_43802 === (8))){
var inst_43756 = (state_43801[(9)]);
var inst_43755 = (state_43801[(10)]);
var inst_43758 = (inst_43756 < inst_43755);
var inst_43759 = inst_43758;
var state_43801__$1 = state_43801;
if(cljs.core.truth_(inst_43759)){
var statearr_43835_43863 = state_43801__$1;
(statearr_43835_43863[(1)] = (10));

} else {
var statearr_43836_43864 = state_43801__$1;
(statearr_43836_43864[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__42199__auto__))
;
return ((function (switch__42111__auto__,c__42199__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42112__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42112__auto____0 = (function (){
var statearr_43837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43837[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42112__auto__);

(statearr_43837[(1)] = (1));

return statearr_43837;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42112__auto____1 = (function (state_43801){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_43801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e43838){if((e43838 instanceof Object)){
var ex__42115__auto__ = e43838;
var statearr_43839_43865 = state_43801;
(statearr_43839_43865[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43866 = state_43801;
state_43801 = G__43866;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42112__auto__ = function(state_43801){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42112__auto____1.call(this,state_43801);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42112__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42112__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto__))
})();
var state__42201__auto__ = (function (){var statearr_43840 = f__42200__auto__.call(null);
(statearr_43840[(6)] = c__42199__auto__);

return statearr_43840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto__))
);

return c__42199__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43868 = arguments.length;
switch (G__43868) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__43871 = arguments.length;
switch (G__43871) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__43874 = arguments.length;
switch (G__43874) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42199__auto___43921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto___43921,out){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto___43921,out){
return (function (state_43898){
var state_val_43899 = (state_43898[(1)]);
if((state_val_43899 === (7))){
var inst_43893 = (state_43898[(2)]);
var state_43898__$1 = state_43898;
var statearr_43900_43922 = state_43898__$1;
(statearr_43900_43922[(2)] = inst_43893);

(statearr_43900_43922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43899 === (1))){
var inst_43875 = null;
var state_43898__$1 = (function (){var statearr_43901 = state_43898;
(statearr_43901[(7)] = inst_43875);

return statearr_43901;
})();
var statearr_43902_43923 = state_43898__$1;
(statearr_43902_43923[(2)] = null);

(statearr_43902_43923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43899 === (4))){
var inst_43878 = (state_43898[(8)]);
var inst_43878__$1 = (state_43898[(2)]);
var inst_43879 = (inst_43878__$1 == null);
var inst_43880 = cljs.core.not.call(null,inst_43879);
var state_43898__$1 = (function (){var statearr_43903 = state_43898;
(statearr_43903[(8)] = inst_43878__$1);

return statearr_43903;
})();
if(inst_43880){
var statearr_43904_43924 = state_43898__$1;
(statearr_43904_43924[(1)] = (5));

} else {
var statearr_43905_43925 = state_43898__$1;
(statearr_43905_43925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43899 === (6))){
var state_43898__$1 = state_43898;
var statearr_43906_43926 = state_43898__$1;
(statearr_43906_43926[(2)] = null);

(statearr_43906_43926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43899 === (3))){
var inst_43895 = (state_43898[(2)]);
var inst_43896 = cljs.core.async.close_BANG_.call(null,out);
var state_43898__$1 = (function (){var statearr_43907 = state_43898;
(statearr_43907[(9)] = inst_43895);

return statearr_43907;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43898__$1,inst_43896);
} else {
if((state_val_43899 === (2))){
var state_43898__$1 = state_43898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43898__$1,(4),ch);
} else {
if((state_val_43899 === (11))){
var inst_43878 = (state_43898[(8)]);
var inst_43887 = (state_43898[(2)]);
var inst_43875 = inst_43878;
var state_43898__$1 = (function (){var statearr_43908 = state_43898;
(statearr_43908[(10)] = inst_43887);

(statearr_43908[(7)] = inst_43875);

return statearr_43908;
})();
var statearr_43909_43927 = state_43898__$1;
(statearr_43909_43927[(2)] = null);

(statearr_43909_43927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43899 === (9))){
var inst_43878 = (state_43898[(8)]);
var state_43898__$1 = state_43898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43898__$1,(11),out,inst_43878);
} else {
if((state_val_43899 === (5))){
var inst_43878 = (state_43898[(8)]);
var inst_43875 = (state_43898[(7)]);
var inst_43882 = cljs.core._EQ_.call(null,inst_43878,inst_43875);
var state_43898__$1 = state_43898;
if(inst_43882){
var statearr_43911_43928 = state_43898__$1;
(statearr_43911_43928[(1)] = (8));

} else {
var statearr_43912_43929 = state_43898__$1;
(statearr_43912_43929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43899 === (10))){
var inst_43890 = (state_43898[(2)]);
var state_43898__$1 = state_43898;
var statearr_43913_43930 = state_43898__$1;
(statearr_43913_43930[(2)] = inst_43890);

(statearr_43913_43930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43899 === (8))){
var inst_43875 = (state_43898[(7)]);
var tmp43910 = inst_43875;
var inst_43875__$1 = tmp43910;
var state_43898__$1 = (function (){var statearr_43914 = state_43898;
(statearr_43914[(7)] = inst_43875__$1);

return statearr_43914;
})();
var statearr_43915_43931 = state_43898__$1;
(statearr_43915_43931[(2)] = null);

(statearr_43915_43931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__42199__auto___43921,out))
;
return ((function (switch__42111__auto__,c__42199__auto___43921,out){
return (function() {
var cljs$core$async$state_machine__42112__auto__ = null;
var cljs$core$async$state_machine__42112__auto____0 = (function (){
var statearr_43916 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43916[(0)] = cljs$core$async$state_machine__42112__auto__);

(statearr_43916[(1)] = (1));

return statearr_43916;
});
var cljs$core$async$state_machine__42112__auto____1 = (function (state_43898){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_43898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e43917){if((e43917 instanceof Object)){
var ex__42115__auto__ = e43917;
var statearr_43918_43932 = state_43898;
(statearr_43918_43932[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43933 = state_43898;
state_43898 = G__43933;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$state_machine__42112__auto__ = function(state_43898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42112__auto____1.call(this,state_43898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42112__auto____0;
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42112__auto____1;
return cljs$core$async$state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto___43921,out))
})();
var state__42201__auto__ = (function (){var statearr_43919 = f__42200__auto__.call(null);
(statearr_43919[(6)] = c__42199__auto___43921);

return statearr_43919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto___43921,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43935 = arguments.length;
switch (G__43935) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42199__auto___44001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto___44001,out){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto___44001,out){
return (function (state_43973){
var state_val_43974 = (state_43973[(1)]);
if((state_val_43974 === (7))){
var inst_43969 = (state_43973[(2)]);
var state_43973__$1 = state_43973;
var statearr_43975_44002 = state_43973__$1;
(statearr_43975_44002[(2)] = inst_43969);

(statearr_43975_44002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43974 === (1))){
var inst_43936 = (new Array(n));
var inst_43937 = inst_43936;
var inst_43938 = (0);
var state_43973__$1 = (function (){var statearr_43976 = state_43973;
(statearr_43976[(7)] = inst_43937);

(statearr_43976[(8)] = inst_43938);

return statearr_43976;
})();
var statearr_43977_44003 = state_43973__$1;
(statearr_43977_44003[(2)] = null);

(statearr_43977_44003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43974 === (4))){
var inst_43941 = (state_43973[(9)]);
var inst_43941__$1 = (state_43973[(2)]);
var inst_43942 = (inst_43941__$1 == null);
var inst_43943 = cljs.core.not.call(null,inst_43942);
var state_43973__$1 = (function (){var statearr_43978 = state_43973;
(statearr_43978[(9)] = inst_43941__$1);

return statearr_43978;
})();
if(inst_43943){
var statearr_43979_44004 = state_43973__$1;
(statearr_43979_44004[(1)] = (5));

} else {
var statearr_43980_44005 = state_43973__$1;
(statearr_43980_44005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43974 === (15))){
var inst_43963 = (state_43973[(2)]);
var state_43973__$1 = state_43973;
var statearr_43981_44006 = state_43973__$1;
(statearr_43981_44006[(2)] = inst_43963);

(statearr_43981_44006[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43974 === (13))){
var state_43973__$1 = state_43973;
var statearr_43982_44007 = state_43973__$1;
(statearr_43982_44007[(2)] = null);

(statearr_43982_44007[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43974 === (6))){
var inst_43938 = (state_43973[(8)]);
var inst_43959 = (inst_43938 > (0));
var state_43973__$1 = state_43973;
if(cljs.core.truth_(inst_43959)){
var statearr_43983_44008 = state_43973__$1;
(statearr_43983_44008[(1)] = (12));

} else {
var statearr_43984_44009 = state_43973__$1;
(statearr_43984_44009[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43974 === (3))){
var inst_43971 = (state_43973[(2)]);
var state_43973__$1 = state_43973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43973__$1,inst_43971);
} else {
if((state_val_43974 === (12))){
var inst_43937 = (state_43973[(7)]);
var inst_43961 = cljs.core.vec.call(null,inst_43937);
var state_43973__$1 = state_43973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43973__$1,(15),out,inst_43961);
} else {
if((state_val_43974 === (2))){
var state_43973__$1 = state_43973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43973__$1,(4),ch);
} else {
if((state_val_43974 === (11))){
var inst_43953 = (state_43973[(2)]);
var inst_43954 = (new Array(n));
var inst_43937 = inst_43954;
var inst_43938 = (0);
var state_43973__$1 = (function (){var statearr_43985 = state_43973;
(statearr_43985[(7)] = inst_43937);

(statearr_43985[(8)] = inst_43938);

(statearr_43985[(10)] = inst_43953);

return statearr_43985;
})();
var statearr_43986_44010 = state_43973__$1;
(statearr_43986_44010[(2)] = null);

(statearr_43986_44010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43974 === (9))){
var inst_43937 = (state_43973[(7)]);
var inst_43951 = cljs.core.vec.call(null,inst_43937);
var state_43973__$1 = state_43973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43973__$1,(11),out,inst_43951);
} else {
if((state_val_43974 === (5))){
var inst_43941 = (state_43973[(9)]);
var inst_43946 = (state_43973[(11)]);
var inst_43937 = (state_43973[(7)]);
var inst_43938 = (state_43973[(8)]);
var inst_43945 = (inst_43937[inst_43938] = inst_43941);
var inst_43946__$1 = (inst_43938 + (1));
var inst_43947 = (inst_43946__$1 < n);
var state_43973__$1 = (function (){var statearr_43987 = state_43973;
(statearr_43987[(11)] = inst_43946__$1);

(statearr_43987[(12)] = inst_43945);

return statearr_43987;
})();
if(cljs.core.truth_(inst_43947)){
var statearr_43988_44011 = state_43973__$1;
(statearr_43988_44011[(1)] = (8));

} else {
var statearr_43989_44012 = state_43973__$1;
(statearr_43989_44012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43974 === (14))){
var inst_43966 = (state_43973[(2)]);
var inst_43967 = cljs.core.async.close_BANG_.call(null,out);
var state_43973__$1 = (function (){var statearr_43991 = state_43973;
(statearr_43991[(13)] = inst_43966);

return statearr_43991;
})();
var statearr_43992_44013 = state_43973__$1;
(statearr_43992_44013[(2)] = inst_43967);

(statearr_43992_44013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43974 === (10))){
var inst_43957 = (state_43973[(2)]);
var state_43973__$1 = state_43973;
var statearr_43993_44014 = state_43973__$1;
(statearr_43993_44014[(2)] = inst_43957);

(statearr_43993_44014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43974 === (8))){
var inst_43946 = (state_43973[(11)]);
var inst_43937 = (state_43973[(7)]);
var tmp43990 = inst_43937;
var inst_43937__$1 = tmp43990;
var inst_43938 = inst_43946;
var state_43973__$1 = (function (){var statearr_43994 = state_43973;
(statearr_43994[(7)] = inst_43937__$1);

(statearr_43994[(8)] = inst_43938);

return statearr_43994;
})();
var statearr_43995_44015 = state_43973__$1;
(statearr_43995_44015[(2)] = null);

(statearr_43995_44015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__42199__auto___44001,out))
;
return ((function (switch__42111__auto__,c__42199__auto___44001,out){
return (function() {
var cljs$core$async$state_machine__42112__auto__ = null;
var cljs$core$async$state_machine__42112__auto____0 = (function (){
var statearr_43996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43996[(0)] = cljs$core$async$state_machine__42112__auto__);

(statearr_43996[(1)] = (1));

return statearr_43996;
});
var cljs$core$async$state_machine__42112__auto____1 = (function (state_43973){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_43973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e43997){if((e43997 instanceof Object)){
var ex__42115__auto__ = e43997;
var statearr_43998_44016 = state_43973;
(statearr_43998_44016[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44017 = state_43973;
state_43973 = G__44017;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$state_machine__42112__auto__ = function(state_43973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42112__auto____1.call(this,state_43973);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42112__auto____0;
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42112__auto____1;
return cljs$core$async$state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto___44001,out))
})();
var state__42201__auto__ = (function (){var statearr_43999 = f__42200__auto__.call(null);
(statearr_43999[(6)] = c__42199__auto___44001);

return statearr_43999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto___44001,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44019 = arguments.length;
switch (G__44019) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42199__auto___44089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto___44089,out){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto___44089,out){
return (function (state_44061){
var state_val_44062 = (state_44061[(1)]);
if((state_val_44062 === (7))){
var inst_44057 = (state_44061[(2)]);
var state_44061__$1 = state_44061;
var statearr_44063_44090 = state_44061__$1;
(statearr_44063_44090[(2)] = inst_44057);

(statearr_44063_44090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44062 === (1))){
var inst_44020 = [];
var inst_44021 = inst_44020;
var inst_44022 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44061__$1 = (function (){var statearr_44064 = state_44061;
(statearr_44064[(7)] = inst_44021);

(statearr_44064[(8)] = inst_44022);

return statearr_44064;
})();
var statearr_44065_44091 = state_44061__$1;
(statearr_44065_44091[(2)] = null);

(statearr_44065_44091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44062 === (4))){
var inst_44025 = (state_44061[(9)]);
var inst_44025__$1 = (state_44061[(2)]);
var inst_44026 = (inst_44025__$1 == null);
var inst_44027 = cljs.core.not.call(null,inst_44026);
var state_44061__$1 = (function (){var statearr_44066 = state_44061;
(statearr_44066[(9)] = inst_44025__$1);

return statearr_44066;
})();
if(inst_44027){
var statearr_44067_44092 = state_44061__$1;
(statearr_44067_44092[(1)] = (5));

} else {
var statearr_44068_44093 = state_44061__$1;
(statearr_44068_44093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44062 === (15))){
var inst_44051 = (state_44061[(2)]);
var state_44061__$1 = state_44061;
var statearr_44069_44094 = state_44061__$1;
(statearr_44069_44094[(2)] = inst_44051);

(statearr_44069_44094[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44062 === (13))){
var state_44061__$1 = state_44061;
var statearr_44070_44095 = state_44061__$1;
(statearr_44070_44095[(2)] = null);

(statearr_44070_44095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44062 === (6))){
var inst_44021 = (state_44061[(7)]);
var inst_44046 = inst_44021.length;
var inst_44047 = (inst_44046 > (0));
var state_44061__$1 = state_44061;
if(cljs.core.truth_(inst_44047)){
var statearr_44071_44096 = state_44061__$1;
(statearr_44071_44096[(1)] = (12));

} else {
var statearr_44072_44097 = state_44061__$1;
(statearr_44072_44097[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44062 === (3))){
var inst_44059 = (state_44061[(2)]);
var state_44061__$1 = state_44061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44061__$1,inst_44059);
} else {
if((state_val_44062 === (12))){
var inst_44021 = (state_44061[(7)]);
var inst_44049 = cljs.core.vec.call(null,inst_44021);
var state_44061__$1 = state_44061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44061__$1,(15),out,inst_44049);
} else {
if((state_val_44062 === (2))){
var state_44061__$1 = state_44061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44061__$1,(4),ch);
} else {
if((state_val_44062 === (11))){
var inst_44025 = (state_44061[(9)]);
var inst_44029 = (state_44061[(10)]);
var inst_44039 = (state_44061[(2)]);
var inst_44040 = [];
var inst_44041 = inst_44040.push(inst_44025);
var inst_44021 = inst_44040;
var inst_44022 = inst_44029;
var state_44061__$1 = (function (){var statearr_44073 = state_44061;
(statearr_44073[(7)] = inst_44021);

(statearr_44073[(8)] = inst_44022);

(statearr_44073[(11)] = inst_44041);

(statearr_44073[(12)] = inst_44039);

return statearr_44073;
})();
var statearr_44074_44098 = state_44061__$1;
(statearr_44074_44098[(2)] = null);

(statearr_44074_44098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44062 === (9))){
var inst_44021 = (state_44061[(7)]);
var inst_44037 = cljs.core.vec.call(null,inst_44021);
var state_44061__$1 = state_44061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44061__$1,(11),out,inst_44037);
} else {
if((state_val_44062 === (5))){
var inst_44025 = (state_44061[(9)]);
var inst_44029 = (state_44061[(10)]);
var inst_44022 = (state_44061[(8)]);
var inst_44029__$1 = f.call(null,inst_44025);
var inst_44030 = cljs.core._EQ_.call(null,inst_44029__$1,inst_44022);
var inst_44031 = cljs.core.keyword_identical_QMARK_.call(null,inst_44022,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44032 = (inst_44030) || (inst_44031);
var state_44061__$1 = (function (){var statearr_44075 = state_44061;
(statearr_44075[(10)] = inst_44029__$1);

return statearr_44075;
})();
if(cljs.core.truth_(inst_44032)){
var statearr_44076_44099 = state_44061__$1;
(statearr_44076_44099[(1)] = (8));

} else {
var statearr_44077_44100 = state_44061__$1;
(statearr_44077_44100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44062 === (14))){
var inst_44054 = (state_44061[(2)]);
var inst_44055 = cljs.core.async.close_BANG_.call(null,out);
var state_44061__$1 = (function (){var statearr_44079 = state_44061;
(statearr_44079[(13)] = inst_44054);

return statearr_44079;
})();
var statearr_44080_44101 = state_44061__$1;
(statearr_44080_44101[(2)] = inst_44055);

(statearr_44080_44101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44062 === (10))){
var inst_44044 = (state_44061[(2)]);
var state_44061__$1 = state_44061;
var statearr_44081_44102 = state_44061__$1;
(statearr_44081_44102[(2)] = inst_44044);

(statearr_44081_44102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44062 === (8))){
var inst_44025 = (state_44061[(9)]);
var inst_44029 = (state_44061[(10)]);
var inst_44021 = (state_44061[(7)]);
var inst_44034 = inst_44021.push(inst_44025);
var tmp44078 = inst_44021;
var inst_44021__$1 = tmp44078;
var inst_44022 = inst_44029;
var state_44061__$1 = (function (){var statearr_44082 = state_44061;
(statearr_44082[(7)] = inst_44021__$1);

(statearr_44082[(8)] = inst_44022);

(statearr_44082[(14)] = inst_44034);

return statearr_44082;
})();
var statearr_44083_44103 = state_44061__$1;
(statearr_44083_44103[(2)] = null);

(statearr_44083_44103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__42199__auto___44089,out))
;
return ((function (switch__42111__auto__,c__42199__auto___44089,out){
return (function() {
var cljs$core$async$state_machine__42112__auto__ = null;
var cljs$core$async$state_machine__42112__auto____0 = (function (){
var statearr_44084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44084[(0)] = cljs$core$async$state_machine__42112__auto__);

(statearr_44084[(1)] = (1));

return statearr_44084;
});
var cljs$core$async$state_machine__42112__auto____1 = (function (state_44061){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_44061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e44085){if((e44085 instanceof Object)){
var ex__42115__auto__ = e44085;
var statearr_44086_44104 = state_44061;
(statearr_44086_44104[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44105 = state_44061;
state_44061 = G__44105;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
cljs$core$async$state_machine__42112__auto__ = function(state_44061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42112__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42112__auto____1.call(this,state_44061);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42112__auto____0;
cljs$core$async$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42112__auto____1;
return cljs$core$async$state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto___44089,out))
})();
var state__42201__auto__ = (function (){var statearr_44087 = f__42200__auto__.call(null);
(statearr_44087[(6)] = c__42199__auto___44089);

return statearr_44087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto___44089,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1506931541318
