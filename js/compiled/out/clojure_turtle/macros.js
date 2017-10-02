// Compiled by ClojureScript 1.9.908 {}
goog.provide('clojure_turtle.macros');
goog.require('cljs.core');
var ret__30035__auto___32958 = (function (){
/**
 * This macro was created to substitute for the purpose served by the square brackets in Logo
 *   in a call to REPEAT.  This macro returns a no-argument function that, when invoked, executes
 *   the commands described in the body inside the macro call/form.
 *   (Haskell programmers refer to the type of function returned a 'thunk'.)
 */
clojure_turtle.macros.all = (function clojure_turtle$macros$all(var_args){
var args__30002__auto__ = [];
var len__29995__auto___32959 = arguments.length;
var i__29996__auto___32960 = (0);
while(true){
if((i__29996__auto___32960 < len__29995__auto___32959)){
args__30002__auto__.push((arguments[i__29996__auto___32960]));

var G__32961 = (i__29996__auto___32960 + (1));
i__29996__auto___32960 = G__32961;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return clojure_turtle.macros.all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

clojure_turtle.macros.all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

clojure_turtle.macros.all.cljs$lang$maxFixedArity = (2);

clojure_turtle.macros.all.cljs$lang$applyTo = (function (seq32955){
var G__32956 = cljs.core.first.call(null,seq32955);
var seq32955__$1 = cljs.core.next.call(null,seq32955);
var G__32957 = cljs.core.first.call(null,seq32955__$1);
var seq32955__$2 = cljs.core.next.call(null,seq32955__$1);
return clojure_turtle.macros.all.cljs$core$IFn$_invoke$arity$variadic(G__32956,G__32957,seq32955__$2);
});

return null;
})()
;
clojure_turtle.macros.all.cljs$lang$macro = true;

var ret__30035__auto___32967 = (function (){
/**
 * A macro to translate the purpose of the Logo REPEAT function.
 */
clojure_turtle.macros.repeat = (function clojure_turtle$macros$repeat(var_args){
var args__30002__auto__ = [];
var len__29995__auto___32968 = arguments.length;
var i__29996__auto___32969 = (0);
while(true){
if((i__29996__auto___32969 < len__29995__auto___32968)){
args__30002__auto__.push((arguments[i__29996__auto___32969]));

var G__32970 = (i__29996__auto___32969 + (1));
i__29996__auto___32969 = G__32970;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return clojure_turtle.macros.repeat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

clojure_turtle.macros.repeat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,n,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"states__32962__auto__","states__32962__auto__",851855711,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","repeatedly","cljs.core/repeatedly",-1346003388,null)),(function (){var x__29688__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dorun","cljs.core/dorun",1487325315,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"states__32962__auto__","states__32962__auto__",851855711,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","last","cljs.core/last",1273893704,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"states__32962__auto__","states__32962__auto__",851855711,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

clojure_turtle.macros.repeat.cljs$lang$maxFixedArity = (3);

clojure_turtle.macros.repeat.cljs$lang$applyTo = (function (seq32963){
var G__32964 = cljs.core.first.call(null,seq32963);
var seq32963__$1 = cljs.core.next.call(null,seq32963);
var G__32965 = cljs.core.first.call(null,seq32963__$1);
var seq32963__$2 = cljs.core.next.call(null,seq32963__$1);
var G__32966 = cljs.core.first.call(null,seq32963__$2);
var seq32963__$3 = cljs.core.next.call(null,seq32963__$2);
return clojure_turtle.macros.repeat.cljs$core$IFn$_invoke$arity$variadic(G__32964,G__32965,G__32966,seq32963__$3);
});

return null;
})()
;
clojure_turtle.macros.repeat.cljs$lang$macro = true;


//# sourceMappingURL=macros.js.map?rel=1506930995537
