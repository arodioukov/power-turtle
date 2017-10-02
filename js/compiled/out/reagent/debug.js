// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__31995__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__31995 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31996__i = 0, G__31996__a = new Array(arguments.length -  0);
while (G__31996__i < G__31996__a.length) {G__31996__a[G__31996__i] = arguments[G__31996__i + 0]; ++G__31996__i;}
  args = new cljs.core.IndexedSeq(G__31996__a,0,null);
} 
return G__31995__delegate.call(this,args);};
G__31995.cljs$lang$maxFixedArity = 0;
G__31995.cljs$lang$applyTo = (function (arglist__31997){
var args = cljs.core.seq(arglist__31997);
return G__31995__delegate(args);
});
G__31995.cljs$core$IFn$_invoke$arity$variadic = G__31995__delegate;
return G__31995;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__31998__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__31998 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31999__i = 0, G__31999__a = new Array(arguments.length -  0);
while (G__31999__i < G__31999__a.length) {G__31999__a[G__31999__i] = arguments[G__31999__i + 0]; ++G__31999__i;}
  args = new cljs.core.IndexedSeq(G__31999__a,0,null);
} 
return G__31998__delegate.call(this,args);};
G__31998.cljs$lang$maxFixedArity = 0;
G__31998.cljs$lang$applyTo = (function (arglist__32000){
var args = cljs.core.seq(arglist__32000);
return G__31998__delegate(args);
});
G__31998.cljs$core$IFn$_invoke$arity$variadic = G__31998__delegate;
return G__31998;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1506930994017
