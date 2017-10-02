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
var args__29315__auto__ = [];
var len__29308__auto___32615 = arguments.length;
var i__29309__auto___32616 = (0);
while(true){
if((i__29309__auto___32616 < len__29308__auto___32615)){
args__29315__auto__.push((arguments[i__29309__auto___32616]));

var G__32617 = (i__29309__auto___32616 + (1));
i__29309__auto___32616 = G__32617;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return power_turtle.view.toolbar.browser_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

power_turtle.view.toolbar.browser_map.cljs$core$IFn$_invoke$arity$variadic = (function (ss){
return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-ms-transform","-ms-transform",1881412958),new cljs.core.Keyword(null,"-moz-transform","-moz-transform",1304730193),new cljs.core.Keyword(null,"-webkit-transform","-webkit-transform",-624763371),new cljs.core.Keyword(null,"transform","transform",1381301764)], null),cljs.core.repeat.call(null,cljs.core.apply.call(null,cljs.core.str,ss)));
});

power_turtle.view.toolbar.browser_map.cljs$lang$maxFixedArity = (0);

power_turtle.view.toolbar.browser_map.cljs$lang$applyTo = (function (seq32614){
return power_turtle.view.toolbar.browser_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32614));
});

power_turtle.view.toolbar.flipper = (function power_turtle$view$toolbar$flipper(var_args){
var args__29315__auto__ = [];
var len__29308__auto___32621 = arguments.length;
var i__29309__auto___32622 = (0);
while(true){
if((i__29309__auto___32622 < len__29308__auto___32621)){
args__29315__auto__.push((arguments[i__29309__auto___32622]));

var G__32623 = (i__29309__auto___32622 + (1));
i__29309__auto___32622 = G__32623;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return power_turtle.view.toolbar.flipper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
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

power_turtle.view.toolbar.flipper.cljs$lang$applyTo = (function (seq32618){
var G__32619 = cljs.core.first.call(null,seq32618);
var seq32618__$1 = cljs.core.next.call(null,seq32618);
var G__32620 = cljs.core.first.call(null,seq32618__$1);
var seq32618__$2 = cljs.core.next.call(null,seq32618__$1);
return power_turtle.view.toolbar.flipper.cljs$core$IFn$_invoke$arity$variadic(G__32619,G__32620,seq32618__$2);
});

power_turtle.view.toolbar.toolbar = (function power_turtle$view$toolbar$toolbar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.toolbar.flipper,new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"turtle.jpg",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.toolbar.flipper,new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"clojure_logo.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__28947__auto__ = (function power_turtle$view$toolbar$toolbar_$_iter__32624(s__32625){
return (new cljs.core.LazySeq(null,(function (){
var s__32625__$1 = s__32625;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32625__$1);
if(temp__4657__auto__){
var s__32625__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32625__$2)){
var c__28945__auto__ = cljs.core.chunk_first.call(null,s__32625__$2);
var size__28946__auto__ = cljs.core.count.call(null,c__28945__auto__);
var b__32627 = cljs.core.chunk_buffer.call(null,size__28946__auto__);
if((function (){var i__32626 = (0);
while(true){
if((i__32626 < size__28946__auto__)){
var vec__32628 = cljs.core._nth.call(null,c__28945__auto__,i__32626);
var k = cljs.core.nth.call(null,vec__32628,(0),null);
var f = cljs.core.nth.call(null,vec__32628,(1),null);
cljs.core.chunk_append.call(null,b__32627,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.toolbar.action,k,f], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__32634 = (i__32626 + (1));
i__32626 = G__32634;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32627),power_turtle$view$toolbar$toolbar_$_iter__32624.call(null,cljs.core.chunk_rest.call(null,s__32625__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32627),null);
}
} else {
var vec__32631 = cljs.core.first.call(null,s__32625__$2);
var k = cljs.core.nth.call(null,vec__32631,(0),null);
var f = cljs.core.nth.call(null,vec__32631,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.toolbar.action,k,f], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),power_turtle$view$toolbar$toolbar_$_iter__32624.call(null,cljs.core.rest.call(null,s__32625__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28947__auto__.call(null,cljs.core.deref.call(null,power_turtle.view.toolbar.actions));
})()], null)], null);
});

//# sourceMappingURL=toolbar.js.map?rel=1506931510699
