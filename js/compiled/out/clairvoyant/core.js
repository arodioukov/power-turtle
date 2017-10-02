// Compiled by ClojureScript 1.9.908 {}
goog.provide('clairvoyant.core');
goog.require('cljs.core');
goog.require('clojure.walk');

/**
 * @interface
 */
clairvoyant.core.ITraceEnter = function(){};

clairvoyant.core._trace_enter = (function clairvoyant$core$_trace_enter(this$,trace_data){
if((!((this$ == null))) && (!((this$.clairvoyant$core$ITraceEnter$_trace_enter$arity$2 == null)))){
return this$.clairvoyant$core$ITraceEnter$_trace_enter$arity$2(this$,trace_data);
} else {
var x__29509__auto__ = (((this$ == null))?null:this$);
var m__29510__auto__ = (clairvoyant.core._trace_enter[goog.typeOf(x__29509__auto__)]);
if(!((m__29510__auto__ == null))){
return m__29510__auto__.call(null,this$,trace_data);
} else {
var m__29510__auto____$1 = (clairvoyant.core._trace_enter["_"]);
if(!((m__29510__auto____$1 == null))){
return m__29510__auto____$1.call(null,this$,trace_data);
} else {
throw cljs.core.missing_protocol.call(null,"ITraceEnter.-trace-enter",this$);
}
}
}
});


/**
 * @interface
 */
clairvoyant.core.ITraceError = function(){};

clairvoyant.core._trace_error = (function clairvoyant$core$_trace_error(this$,trace_data){
if((!((this$ == null))) && (!((this$.clairvoyant$core$ITraceError$_trace_error$arity$2 == null)))){
return this$.clairvoyant$core$ITraceError$_trace_error$arity$2(this$,trace_data);
} else {
var x__29509__auto__ = (((this$ == null))?null:this$);
var m__29510__auto__ = (clairvoyant.core._trace_error[goog.typeOf(x__29509__auto__)]);
if(!((m__29510__auto__ == null))){
return m__29510__auto__.call(null,this$,trace_data);
} else {
var m__29510__auto____$1 = (clairvoyant.core._trace_error["_"]);
if(!((m__29510__auto____$1 == null))){
return m__29510__auto____$1.call(null,this$,trace_data);
} else {
throw cljs.core.missing_protocol.call(null,"ITraceError.-trace-error",this$);
}
}
}
});


/**
 * @interface
 */
clairvoyant.core.ITraceExit = function(){};

clairvoyant.core._trace_exit = (function clairvoyant$core$_trace_exit(this$,trace_data){
if((!((this$ == null))) && (!((this$.clairvoyant$core$ITraceExit$_trace_exit$arity$2 == null)))){
return this$.clairvoyant$core$ITraceExit$_trace_exit$arity$2(this$,trace_data);
} else {
var x__29509__auto__ = (((this$ == null))?null:this$);
var m__29510__auto__ = (clairvoyant.core._trace_exit[goog.typeOf(x__29509__auto__)]);
if(!((m__29510__auto__ == null))){
return m__29510__auto__.call(null,this$,trace_data);
} else {
var m__29510__auto____$1 = (clairvoyant.core._trace_exit["_"]);
if(!((m__29510__auto____$1 == null))){
return m__29510__auto____$1.call(null,this$,trace_data);
} else {
throw cljs.core.missing_protocol.call(null,"ITraceExit.-trace-exit",this$);
}
}
}
});

/**
 * Call the -trace-enter method for a given tracer with trace-data.
 *   tracer must satisfy ITraceEnter.
 */
clairvoyant.core.trace_enter = (function clairvoyant$core$trace_enter(tracer,trace_data){
return clairvoyant.core._trace_enter.call(null,tracer,trace_data);
});
/**
 * Call the -trace-error method for a given tracer with trace-data.
 *   tracer must satisfy ITraceError.
 */
clairvoyant.core.trace_error = (function clairvoyant$core$trace_error(tracer,trace_data){
return clairvoyant.core._trace_error.call(null,tracer,trace_data);
});
/**
 * Call the -trace-exit method for a given tracer with trace-data.
 *   tracer must satisfy ITraceExit.
 */
clairvoyant.core.trace_exit = (function clairvoyant$core$trace_exit(tracer,trace_data){
return clairvoyant.core._trace_exit.call(null,tracer,trace_data);
});

/** @define {boolean} */
goog.define("clairvoyant.core.devmode",false);
/**
 * Matches the function signature of the result of (str f) where f is a
 *   function. Captures the argument list and identifier (if possible).
 */
clairvoyant.core.fn_re = /function\s+([a-zA-Z0-9_$]+)?\(([a-zA-Z0-9_,\s]+)\)/;
/**
 * Return the function signature of f.
 * 
 *   Example:
 * 
 *  (fn-signature inc)
 *  ;;=> (fn inc [x])
 * 
 *  (fn-signature map)
 *  ;; => (fn [f c1 c2 c3 var_args])
 *   
 */
clairvoyant.core.fn_signature = (function clairvoyant$core$fn_signature(f){
var vec__38107 = cljs.core.re_find.call(null,clairvoyant.core.fn_re,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var _ = cljs.core.nth.call(null,vec__38107,(0),null);
var name = cljs.core.nth.call(null,vec__38107,(1),null);
var sig = cljs.core.nth.call(null,vec__38107,(2),null);
var arglist = cljs.core.mapv.call(null,cljs.core.symbol,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)].join('').split(","));
if(cljs.core.truth_(name)){
return cljs.core._conj.call(null,(function (){var x__29688__auto__ = cljs.core.symbol.call(null,name);
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),new cljs.core.Symbol(null,"fn","fn",465265323,null));
} else {
return cljs.core._conj.call(null,(function (){var x__29688__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),new cljs.core.Symbol(null,"fn","fn",465265323,null));
}
});
clairvoyant.core.default_tracer = (function (){var pr_val_STAR_ = (function clairvoyant$core$pr_val_STAR_(x){
if(cljs.core.fn_QMARK_.call(null,x)){
return clairvoyant.core.fn_signature.call(null,x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return clojure.walk.walk.call(null,clairvoyant$core$pr_val_STAR_,cljs.core.identity,x);
} else {
return x;

}
}
});
var pr_val = ((function (pr_val_STAR_){
return (function (x){
return cljs.core.pr_str.call(null,pr_val_STAR_.call(null,x));
});})(pr_val_STAR_))
;
var log_binding = ((function (pr_val_STAR_,pr_val){
return (function (form,init){
return console.groupCollapsed("%c%s %c%s","font-weight:bold;",cljs.core.pr_str.call(null,form),"font-weight:normal;",pr_val.call(null,init));
});})(pr_val_STAR_,pr_val))
;
var log_exit = ((function (pr_val_STAR_,pr_val,log_binding){
return (function (exit){
console.groupCollapsed("=>",pr_val.call(null,exit));

console.log(exit);

return console.groupEnd();
});})(pr_val_STAR_,pr_val,log_binding))
;
var has_bindings_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [new cljs.core.Symbol("cljs.core","extend-protocol","cljs.core/extend-protocol",-100428625,null),null,new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),null,new cljs.core.Symbol(null,"defmethod","defmethod",-579171823,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,new cljs.core.Symbol(null,"defn","defn",-126010802,null),null,new cljs.core.Symbol(null,"extend-protocol","extend-protocol",306378578,null),null,new cljs.core.Symbol(null,"extend-type","extend-type",1123355921,null),null,new cljs.core.Symbol("cljs.core","defrecord","cljs.core/defrecord",948295858,null),null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,new cljs.core.Symbol(null,"reify","reify",1885539699,null),null,new cljs.core.Symbol(null,"let","let",358118826,null),null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null),null,new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,new cljs.core.Symbol("cljs.core","deftype","cljs.core/deftype",-1630339979,null),null,new cljs.core.Symbol("cljs.core","extend-type","cljs.core/extend-type",2058791100,null),null,new cljs.core.Symbol("cljs.core","reify","cljs.core/reify",463577556,null),null,new cljs.core.Symbol("cljs.core","defn-","cljs.core/defn-",1764521227,null),null], null), null);
var fn_like_QMARK_ = cljs.core.disj.call(null,has_bindings_QMARK_,new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null));
if(typeof clairvoyant.core.t_clairvoyant$core38110 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {clairvoyant.core.ITraceError}
 * @implements {clairvoyant.core.ITraceEnter}
 * @implements {cljs.core.IMeta}
 * @implements {clairvoyant.core.ITraceExit}
 * @implements {cljs.core.IWithMeta}
*/
clairvoyant.core.t_clairvoyant$core38110 = (function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,meta38111){
this.pr_val_STAR_ = pr_val_STAR_;
this.pr_val = pr_val;
this.log_binding = log_binding;
this.log_exit = log_exit;
this.has_bindings_QMARK_ = has_bindings_QMARK_;
this.fn_like_QMARK_ = fn_like_QMARK_;
this.meta38111 = meta38111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
clairvoyant.core.t_clairvoyant$core38110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_38112,meta38111__$1){
var self__ = this;
var _38112__$1 = this;
return (new clairvoyant.core.t_clairvoyant$core38110(self__.pr_val_STAR_,self__.pr_val,self__.log_binding,self__.log_exit,self__.has_bindings_QMARK_,self__.fn_like_QMARK_,meta38111__$1));
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core38110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_38112){
var self__ = this;
var _38112__$1 = this;
return self__.meta38111;
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core38110.prototype.clairvoyant$core$ITraceEnter$ = cljs.core.PROTOCOL_SENTINEL;

clairvoyant.core.t_clairvoyant$core38110.prototype.clairvoyant$core$ITraceEnter$_trace_enter$arity$2 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_,p__38113){
var self__ = this;
var map__38114 = p__38113;
var map__38114__$1 = ((((!((map__38114 == null)))?((((map__38114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38114):map__38114);
var form = cljs.core.get.call(null,map__38114__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var args = cljs.core.get.call(null,map__38114__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var dispatch_val = cljs.core.get.call(null,map__38114__$1,new cljs.core.Keyword(null,"dispatch-val","dispatch-val",-1571470527));
var protocol = cljs.core.get.call(null,map__38114__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var init = cljs.core.get.call(null,map__38114__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var ns = cljs.core.get.call(null,map__38114__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__38114__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arglist = cljs.core.get.call(null,map__38114__$1,new cljs.core.Keyword(null,"arglist","arglist",-1808272150));
var op = cljs.core.get.call(null,map__38114__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var anonymous_QMARK_ = cljs.core.get.call(null,map__38114__$1,new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995));
var ___$1 = this;
if(cljs.core.truth_(self__.fn_like_QMARK_.call(null,op))){
var title = (cljs.core.truth_(protocol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arglist)].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(dispatch_val)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,dispatch_val))].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1([" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arglist)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(anonymous_QMARK_)?" (anonymous)":null))].join(''));
var arglist__$1 = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
console.groupCollapsed(title);

return console.groupCollapsed("bindings");
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,new cljs.core.Symbol(null,"let","let",358118826,null),null], null), null).call(null,op))){
var title = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('');
console.groupCollapsed(title);

return console.groupCollapsed("bindings");
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op))){
return self__.log_binding.call(null,form,init);
} else {
return null;
}
}
}
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core38110.prototype.clairvoyant$core$ITraceExit$ = cljs.core.PROTOCOL_SENTINEL;

clairvoyant.core.t_clairvoyant$core38110.prototype.clairvoyant$core$ITraceExit$_trace_exit$arity$2 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_,p__38116){
var self__ = this;
var map__38117 = p__38116;
var map__38117__$1 = ((((!((map__38117 == null)))?((((map__38117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38117):map__38117);
var op = cljs.core.get.call(null,map__38117__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var exit = cljs.core.get.call(null,map__38117__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var ___$1 = this;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op))){
self__.log_exit.call(null,exit);

return console.groupEnd();
} else {
if(cljs.core.truth_(self__.has_bindings_QMARK_.call(null,op))){
console.groupEnd();

self__.log_exit.call(null,exit);

return console.groupEnd();
} else {
return null;
}
}
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core38110.prototype.clairvoyant$core$ITraceError$ = cljs.core.PROTOCOL_SENTINEL;

clairvoyant.core.t_clairvoyant$core38110.prototype.clairvoyant$core$ITraceError$_trace_error$arity$2 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_,p__38119){
var self__ = this;
var map__38120 = p__38119;
var map__38120__$1 = ((((!((map__38120 == null)))?((((map__38120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38120):map__38120);
var op = cljs.core.get.call(null,map__38120__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__38120__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var error = cljs.core.get.call(null,map__38120__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var ex_data = cljs.core.get.call(null,map__38120__$1,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259));
var ___$1 = this;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op))){
console.error(error.stack);

if(cljs.core.truth_(ex_data)){
console.groupCollapsed("ex-data");

console.groupCollapsed(self__.pr_val.call(null,ex_data));

console.log(ex_data);

console.groupEnd();

return console.groupEnd();
} else {
return null;
}
} else {
if(cljs.core.truth_(self__.has_bindings_QMARK_.call(null,op))){
console.groupEnd();

console.error(error.stack);

if(cljs.core.truth_(ex_data)){
console.groupCollapsed("ex-data");

console.groupCollapsed(self__.pr_val.call(null,ex_data));

console.log(ex_data);

console.groupEnd();

console.groupEnd();
} else {
}

return console.groupEnd();
} else {
return null;
}
}
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core38110.getBasis = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pr-val*","pr-val*",344533536,null),new cljs.core.Symbol(null,"pr-val","pr-val",-289132329,null),new cljs.core.Symbol(null,"log-binding","log-binding",-7452044,null),new cljs.core.Symbol(null,"log-exit","log-exit",-1916806496,null),new cljs.core.Symbol(null,"has-bindings?","has-bindings?",-1143394454,null),new cljs.core.Symbol(null,"fn-like?","fn-like?",312793189,null),new cljs.core.Symbol(null,"meta38111","meta38111",-2013990333,null)], null);
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core38110.cljs$lang$type = true;

clairvoyant.core.t_clairvoyant$core38110.cljs$lang$ctorStr = "clairvoyant.core/t_clairvoyant$core38110";

clairvoyant.core.t_clairvoyant$core38110.cljs$lang$ctorPrWriter = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (this__29451__auto__,writer__29452__auto__,opt__29453__auto__){
return cljs.core._write.call(null,writer__29452__auto__,"clairvoyant.core/t_clairvoyant$core38110");
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.__GT_t_clairvoyant$core38110 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function clairvoyant$core$__GT_t_clairvoyant$core38110(pr_val_STAR___$1,pr_val__$1,log_binding__$1,log_exit__$1,has_bindings_QMARK___$1,fn_like_QMARK___$1,meta38111){
return (new clairvoyant.core.t_clairvoyant$core38110(pr_val_STAR___$1,pr_val__$1,log_binding__$1,log_exit__$1,has_bindings_QMARK___$1,fn_like_QMARK___$1,meta38111));
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

}

return (new clairvoyant.core.t_clairvoyant$core38110(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
})();
clairvoyant.core.cljs_devtools_tracer = (function clairvoyant$core$cljs_devtools_tracer(var_args){
var args__30002__auto__ = [];
var len__29995__auto___38138 = arguments.length;
var i__29996__auto___38139 = (0);
while(true){
if((i__29996__auto___38139 < len__29995__auto___38138)){
args__30002__auto__.push((arguments[i__29996__auto___38139]));

var G__38140 = (i__29996__auto___38139 + (1));
i__29996__auto___38139 = G__38140;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return clairvoyant.core.cljs_devtools_tracer.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

clairvoyant.core.cljs_devtools_tracer.cljs$core$IFn$_invoke$arity$variadic = (function (p__38123){
var map__38124 = p__38123;
var map__38124__$1 = ((((!((map__38124 == null)))?((((map__38124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38124):map__38124);
var options = map__38124__$1;
var color = cljs.core.get.call(null,map__38124__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var pr_val = ((function (map__38124,map__38124__$1,options,color){
return (function clairvoyant$core$pr_val(x){
return x;
});})(map__38124,map__38124__$1,options,color))
;
var log_binding = ((function (pr_val,map__38124,map__38124__$1,options,color){
return (function (form,init){
return console.groupCollapsed("%c%s","font-weight:bold;",cljs.core.pr_str.call(null,form),pr_val.call(null,init));
});})(pr_val,map__38124,map__38124__$1,options,color))
;
var log_exit = ((function (pr_val,log_binding,map__38124,map__38124__$1,options,color){
return (function (exit){
return console.log("=>",pr_val.call(null,exit));
});})(pr_val,log_binding,map__38124,map__38124__$1,options,color))
;
var has_bindings_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [new cljs.core.Symbol("cljs.core","extend-protocol","cljs.core/extend-protocol",-100428625,null),null,new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),null,new cljs.core.Symbol(null,"defmethod","defmethod",-579171823,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,new cljs.core.Symbol(null,"defn","defn",-126010802,null),null,new cljs.core.Symbol(null,"extend-protocol","extend-protocol",306378578,null),null,new cljs.core.Symbol(null,"extend-type","extend-type",1123355921,null),null,new cljs.core.Symbol("cljs.core","defrecord","cljs.core/defrecord",948295858,null),null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,new cljs.core.Symbol(null,"reify","reify",1885539699,null),null,new cljs.core.Symbol(null,"let","let",358118826,null),null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null),null,new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,new cljs.core.Symbol("cljs.core","deftype","cljs.core/deftype",-1630339979,null),null,new cljs.core.Symbol("cljs.core","extend-type","cljs.core/extend-type",2058791100,null),null,new cljs.core.Symbol("cljs.core","reify","cljs.core/reify",463577556,null),null,new cljs.core.Symbol("cljs.core","defn-","cljs.core/defn-",1764521227,null),null], null), null);
var fn_like_QMARK_ = cljs.core.disj.call(null,has_bindings_QMARK_,new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null));
if(typeof clairvoyant.core.t_clairvoyant$core38126 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {clairvoyant.core.ITraceError}
 * @implements {clairvoyant.core.ITraceEnter}
 * @implements {cljs.core.IMeta}
 * @implements {clairvoyant.core.ITraceExit}
 * @implements {cljs.core.IWithMeta}
*/
clairvoyant.core.t_clairvoyant$core38126 = (function (p__38123,map__38124,options,color,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,meta38127){
this.p__38123 = p__38123;
this.map__38124 = map__38124;
this.options = options;
this.color = color;
this.pr_val = pr_val;
this.log_binding = log_binding;
this.log_exit = log_exit;
this.has_bindings_QMARK_ = has_bindings_QMARK_;
this.fn_like_QMARK_ = fn_like_QMARK_;
this.meta38127 = meta38127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
clairvoyant.core.t_clairvoyant$core38126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__38124,map__38124__$1,options,color){
return (function (_38128,meta38127__$1){
var self__ = this;
var _38128__$1 = this;
return (new clairvoyant.core.t_clairvoyant$core38126(self__.p__38123,self__.map__38124,self__.options,self__.color,self__.pr_val,self__.log_binding,self__.log_exit,self__.has_bindings_QMARK_,self__.fn_like_QMARK_,meta38127__$1));
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__38124,map__38124__$1,options,color))
;

clairvoyant.core.t_clairvoyant$core38126.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__38124,map__38124__$1,options,color){
return (function (_38128){
var self__ = this;
var _38128__$1 = this;
return self__.meta38127;
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__38124,map__38124__$1,options,color))
;

clairvoyant.core.t_clairvoyant$core38126.prototype.clairvoyant$core$ITraceEnter$ = cljs.core.PROTOCOL_SENTINEL;

clairvoyant.core.t_clairvoyant$core38126.prototype.clairvoyant$core$ITraceEnter$_trace_enter$arity$2 = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__38124,map__38124__$1,options,color){
return (function (_,p__38129){
var self__ = this;
var map__38130 = p__38129;
var map__38130__$1 = ((((!((map__38130 == null)))?((((map__38130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38130):map__38130);
var form = cljs.core.get.call(null,map__38130__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var args = cljs.core.get.call(null,map__38130__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var dispatch_val = cljs.core.get.call(null,map__38130__$1,new cljs.core.Keyword(null,"dispatch-val","dispatch-val",-1571470527));
var protocol = cljs.core.get.call(null,map__38130__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var init = cljs.core.get.call(null,map__38130__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var ns = cljs.core.get.call(null,map__38130__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__38130__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arglist = cljs.core.get.call(null,map__38130__$1,new cljs.core.Keyword(null,"arglist","arglist",-1808272150));
var op = cljs.core.get.call(null,map__38130__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var anonymous_QMARK_ = cljs.core.get.call(null,map__38130__$1,new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995));
var ___$1 = this;
if(cljs.core.truth_(self__.fn_like_QMARK_.call(null,op))){
var title = (cljs.core.truth_(protocol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arglist)].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(dispatch_val)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,dispatch_val))].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1([" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arglist)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(anonymous_QMARK_)?" (anonymous)":null))].join(''));
var arglist__$1 = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
console.groupCollapsed("%c%s",["color:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.color),";"].join(''),title);

return console.groupCollapsed("bindings");
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,new cljs.core.Symbol(null,"let","let",358118826,null),null], null), null).call(null,op))){
var title = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('');
console.groupCollapsed(title);

return console.groupCollapsed("bindings");
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op))){
return self__.log_binding.call(null,form,init);
} else {
return null;
}
}
}
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__38124,map__38124__$1,options,color))
;

clairvoyant.core.t_clairvoyant$core38126.prototype.clairvoyant$core$ITraceExit$ = cljs.core.PROTOCOL_SENTINEL;

clairvoyant.core.t_clairvoyant$core38126.prototype.clairvoyant$core$ITraceExit$_trace_exit$arity$2 = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__38124,map__38124__$1,options,color){
return (function (_,p__38132){
var self__ = this;
var map__38133 = p__38132;
var map__38133__$1 = ((((!((map__38133 == null)))?((((map__38133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38133):map__38133);
var op = cljs.core.get.call(null,map__38133__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var exit = cljs.core.get.call(null,map__38133__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var ___$1 = this;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op))){
self__.log_exit.call(null,exit);

return console.groupEnd();
} else {
if(cljs.core.truth_(self__.has_bindings_QMARK_.call(null,op))){
console.groupEnd();

self__.log_exit.call(null,exit);

return console.groupEnd();
} else {
return null;
}
}
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__38124,map__38124__$1,options,color))
;

clairvoyant.core.t_clairvoyant$core38126.prototype.clairvoyant$core$ITraceError$ = cljs.core.PROTOCOL_SENTINEL;

clairvoyant.core.t_clairvoyant$core38126.prototype.clairvoyant$core$ITraceError$_trace_error$arity$2 = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__38124,map__38124__$1,options,color){
return (function (_,p__38135){
var self__ = this;
var map__38136 = p__38135;
var map__38136__$1 = ((((!((map__38136 == null)))?((((map__38136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38136):map__38136);
var op = cljs.core.get.call(null,map__38136__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__38136__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var error = cljs.core.get.call(null,map__38136__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var ex_data = cljs.core.get.call(null,map__38136__$1,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259));
var ___$1 = this;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op))){
console.error(error.stack);

if(cljs.core.truth_(ex_data)){
console.groupCollapsed("ex-data");

console.groupCollapsed(self__.pr_val.call(null,ex_data));

console.groupEnd();

return console.groupEnd();
} else {
return null;
}
} else {
if(cljs.core.truth_(self__.has_bindings_QMARK_.call(null,op))){
console.groupEnd();

console.error(error.stack);

if(cljs.core.truth_(ex_data)){
console.groupCollapsed("ex-data");

console.groupCollapsed(self__.pr_val.call(null,ex_data));

console.groupEnd();

console.groupEnd();
} else {
}

return console.groupEnd();
} else {
return null;
}
}
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__38124,map__38124__$1,options,color))
;

clairvoyant.core.t_clairvoyant$core38126.getBasis = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__38124,map__38124__$1,options,color){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__38123","p__38123",-1875214353,null),new cljs.core.Symbol(null,"map__38124","map__38124",-12526298,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"pr-val","pr-val",-289132329,null),new cljs.core.Symbol(null,"log-binding","log-binding",-7452044,null),new cljs.core.Symbol(null,"log-exit","log-exit",-1916806496,null),new cljs.core.Symbol(null,"has-bindings?","has-bindings?",-1143394454,null),new cljs.core.Symbol(null,"fn-like?","fn-like?",312793189,null),new cljs.core.Symbol(null,"meta38127","meta38127",-385764330,null)], null);
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__38124,map__38124__$1,options,color))
;

clairvoyant.core.t_clairvoyant$core38126.cljs$lang$type = true;

clairvoyant.core.t_clairvoyant$core38126.cljs$lang$ctorStr = "clairvoyant.core/t_clairvoyant$core38126";

clairvoyant.core.t_clairvoyant$core38126.cljs$lang$ctorPrWriter = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__38124,map__38124__$1,options,color){
return (function (this__29451__auto__,writer__29452__auto__,opt__29453__auto__){
return cljs.core._write.call(null,writer__29452__auto__,"clairvoyant.core/t_clairvoyant$core38126");
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__38124,map__38124__$1,options,color))
;

clairvoyant.core.__GT_t_clairvoyant$core38126 = ((function (pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__38124,map__38124__$1,options,color){
return (function clairvoyant$core$__GT_t_clairvoyant$core38126(p__38123__$1,map__38124__$2,options__$1,color__$1,pr_val__$1,log_binding__$1,log_exit__$1,has_bindings_QMARK___$1,fn_like_QMARK___$1,meta38127){
return (new clairvoyant.core.t_clairvoyant$core38126(p__38123__$1,map__38124__$2,options__$1,color__$1,pr_val__$1,log_binding__$1,log_exit__$1,has_bindings_QMARK___$1,fn_like_QMARK___$1,meta38127));
});})(pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,map__38124,map__38124__$1,options,color))
;

}

return (new clairvoyant.core.t_clairvoyant$core38126(p__38123,map__38124__$1,options,color,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});

clairvoyant.core.cljs_devtools_tracer.cljs$lang$maxFixedArity = (0);

clairvoyant.core.cljs_devtools_tracer.cljs$lang$applyTo = (function (seq38122){
return clairvoyant.core.cljs_devtools_tracer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38122));
});


//# sourceMappingURL=core.js.map?rel=1506931007570
