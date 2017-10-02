// Compiled by ClojureScript 1.9.908 {}
goog.provide('power_turtle.view.toolbar');
goog.require('cljs.core');
goog.require('power_turtle.model');
goog.require('reagent.core');
goog.require('reanimated.core');
power_turtle.view.toolbar.actions = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
power_turtle.view.toolbar.action = (function power_turtle$view$toolbar$action(k,f){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return f.call(null);
})], null),cljs.core.name.call(null,k)], null);
});
power_turtle.view.toolbar.browser_map = (function power_turtle$view$toolbar$browser_map(var_args){
var args__30002__auto__ = [];
var len__29995__auto___33521 = arguments.length;
var i__29996__auto___33522 = (0);
while(true){
if((i__29996__auto___33522 < len__29995__auto___33521)){
args__30002__auto__.push((arguments[i__29996__auto___33522]));

var G__33523 = (i__29996__auto___33522 + (1));
i__29996__auto___33522 = G__33523;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return power_turtle.view.toolbar.browser_map.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

power_turtle.view.toolbar.browser_map.cljs$core$IFn$_invoke$arity$variadic = (function (ss){
return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-ms-transform","-ms-transform",1881412958),new cljs.core.Keyword(null,"-moz-transform","-moz-transform",1304730193),new cljs.core.Keyword(null,"-webkit-transform","-webkit-transform",-624763371),new cljs.core.Keyword(null,"transform","transform",1381301764)], null),cljs.core.repeat.call(null,cljs.core.apply.call(null,cljs.core.str,ss)));
});

power_turtle.view.toolbar.browser_map.cljs$lang$maxFixedArity = (0);

power_turtle.view.toolbar.browser_map.cljs$lang$applyTo = (function (seq33520){
return power_turtle.view.toolbar.browser_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33520));
});

power_turtle.view.toolbar.flipper = (function power_turtle$view$toolbar$flipper(var_args){
var args__30002__auto__ = [];
var len__29995__auto___33527 = arguments.length;
var i__29996__auto___33528 = (0);
while(true){
if((i__29996__auto___33528 < len__29995__auto___33527)){
args__30002__auto__.push((arguments[i__29996__auto___33528]));

var G__33529 = (i__29996__auto___33528 + (1));
i__29996__auto___33528 = G__33529;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return power_turtle.view.toolbar.flipper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

power_turtle.view.toolbar.flipper.cljs$core$IFn$_invoke$arity$variadic = (function (tag,attrs,children){
var flip_spring = reanimated.core.spring.call(null,power_turtle.model.flip);
return ((function (flip_spring){
return (function power_turtle$view$toolbar$a_flipper(tag__$1,attrs__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,cljs.core.merge_with.call(null,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),power_turtle.view.toolbar.browser_map.call(null,"rotateY(",((90) + cljs.core.deref.call(null,flip_spring)),"deg)")], null),attrs__$1)], null),children)], null);
});
;})(flip_spring))
});

power_turtle.view.toolbar.flipper.cljs$lang$maxFixedArity = (2);

power_turtle.view.toolbar.flipper.cljs$lang$applyTo = (function (seq33524){
var G__33525 = cljs.core.first.call(null,seq33524);
var seq33524__$1 = cljs.core.next.call(null,seq33524);
var G__33526 = cljs.core.first.call(null,seq33524__$1);
var seq33524__$2 = cljs.core.next.call(null,seq33524__$1);
return power_turtle.view.toolbar.flipper.cljs$core$IFn$_invoke$arity$variadic(G__33525,G__33526,seq33524__$2);
});

power_turtle.view.toolbar.toolbar = (function power_turtle$view$toolbar$toolbar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.toolbar.flipper,new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"turtle.jpg",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.toolbar.flipper,new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"clojure_logo.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__29634__auto__ = (function power_turtle$view$toolbar$toolbar_$_iter__33530(s__33531){
return (new cljs.core.LazySeq(null,(function (){
var s__33531__$1 = s__33531;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33531__$1);
if(temp__4657__auto__){
var s__33531__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33531__$2)){
var c__29632__auto__ = cljs.core.chunk_first.call(null,s__33531__$2);
var size__29633__auto__ = cljs.core.count.call(null,c__29632__auto__);
var b__33533 = cljs.core.chunk_buffer.call(null,size__29633__auto__);
if((function (){var i__33532 = (0);
while(true){
if((i__33532 < size__29633__auto__)){
var vec__33534 = cljs.core._nth.call(null,c__29632__auto__,i__33532);
var k = cljs.core.nth.call(null,vec__33534,(0),null);
var f = cljs.core.nth.call(null,vec__33534,(1),null);
cljs.core.chunk_append.call(null,b__33533,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.toolbar.action,k,f], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__33540 = (i__33532 + (1));
i__33532 = G__33540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33533),power_turtle$view$toolbar$toolbar_$_iter__33530.call(null,cljs.core.chunk_rest.call(null,s__33531__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33533),null);
}
} else {
var vec__33537 = cljs.core.first.call(null,s__33531__$2);
var k = cljs.core.nth.call(null,vec__33537,(0),null);
var f = cljs.core.nth.call(null,vec__33537,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.toolbar.action,k,f], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),power_turtle$view$toolbar$toolbar_$_iter__33530.call(null,cljs.core.rest.call(null,s__33531__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29634__auto__.call(null,cljs.core.deref.call(null,power_turtle.view.toolbar.actions));
})()], null)], null);
});

//# sourceMappingURL=toolbar.js.map?rel=1506930996579
