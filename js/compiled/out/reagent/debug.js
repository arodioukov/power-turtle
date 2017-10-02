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
var G__30394__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30394 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30395__i = 0, G__30395__a = new Array(arguments.length -  0);
while (G__30395__i < G__30395__a.length) {G__30395__a[G__30395__i] = arguments[G__30395__i + 0]; ++G__30395__i;}
  args = new cljs.core.IndexedSeq(G__30395__a,0,null);
} 
return G__30394__delegate.call(this,args);};
G__30394.cljs$lang$maxFixedArity = 0;
G__30394.cljs$lang$applyTo = (function (arglist__30396){
var args = cljs.core.seq(arglist__30396);
return G__30394__delegate(args);
});
G__30394.cljs$core$IFn$_invoke$arity$variadic = G__30394__delegate;
return G__30394;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__30397__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30398__i = 0, G__30398__a = new Array(arguments.length -  0);
while (G__30398__i < G__30398__a.length) {G__30398__a[G__30398__i] = arguments[G__30398__i + 0]; ++G__30398__i;}
  args = new cljs.core.IndexedSeq(G__30398__a,0,null);
} 
return G__30397__delegate.call(this,args);};
G__30397.cljs$lang$maxFixedArity = 0;
G__30397.cljs$lang$applyTo = (function (arglist__30399){
var args = cljs.core.seq(arglist__30399);
return G__30397__delegate(args);
});
G__30397.cljs$core$IFn$_invoke$arity$variadic = G__30397__delegate;
return G__30397;
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

//# sourceMappingURL=debug.js.map?rel=1506931507460
