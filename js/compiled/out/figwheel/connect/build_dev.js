// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('power_turtle.main');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__45470__delegate = function (x){
if(cljs.core.truth_(power_turtle.main.on_reload)){
return cljs.core.apply.call(null,power_turtle.main.on_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'power-turtle.main/on-reload' is missing");
}
};
var G__45470 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__45471__i = 0, G__45471__a = new Array(arguments.length -  0);
while (G__45471__i < G__45471__a.length) {G__45471__a[G__45471__i] = arguments[G__45471__i + 0]; ++G__45471__i;}
  x = new cljs.core.IndexedSeq(G__45471__a,0,null);
} 
return G__45470__delegate.call(this,x);};
G__45470.cljs$lang$maxFixedArity = 0;
G__45470.cljs$lang$applyTo = (function (arglist__45472){
var x = cljs.core.seq(arglist__45472);
return G__45470__delegate(x);
});
G__45470.cljs$core$IFn$_invoke$arity$variadic = G__45470__delegate;
return G__45470;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1506931542514
