// Compiled by ClojureScript 1.9.908 {}
goog.provide('clojure_turtle.macros');
goog.require('cljs.core');
var ret__29348__auto___31575 = (function (){
/**
 * This macro was created to substitute for the purpose served by the square brackets in Logo
 *   in a call to REPEAT.  This macro returns a no-argument function that, when invoked, executes
 *   the commands described in the body inside the macro call/form.
 *   (Haskell programmers refer to the type of function returned a 'thunk'.)
 */
clojure_turtle.macros.all = (function clojure_turtle$macros$all(var_args){
var args__29315__auto__ = [];
var len__29308__auto___31576 = arguments.length;
var i__29309__auto___31577 = (0);
while(true){
if((i__29309__auto___31577 < len__29308__auto___31576)){
args__29315__auto__.push((arguments[i__29309__auto___31577]));

var G__31578 = (i__29309__auto___31577 + (1));
i__29309__auto___31577 = G__31578;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return clojure_turtle.macros.all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

clojure_turtle.macros.all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

clojure_turtle.macros.all.cljs$lang$maxFixedArity = (2);

clojure_turtle.macros.all.cljs$lang$applyTo = (function (seq31572){
var G__31573 = cljs.core.first.call(null,seq31572);
var seq31572__$1 = cljs.core.next.call(null,seq31572);
var G__31574 = cljs.core.first.call(null,seq31572__$1);
var seq31572__$2 = cljs.core.next.call(null,seq31572__$1);
return clojure_turtle.macros.all.cljs$core$IFn$_invoke$arity$variadic(G__31573,G__31574,seq31572__$2);
});

return null;
})()
;
clojure_turtle.macros.all.cljs$lang$macro = true;

var ret__29348__auto___31584 = (function (){
/**
 * A macro to translate the purpose of the Logo REPEAT function.
 */
clojure_turtle.macros.repeat = (function clojure_turtle$macros$repeat(var_args){
var args__29315__auto__ = [];
var len__29308__auto___31585 = arguments.length;
var i__29309__auto___31586 = (0);
while(true){
if((i__29309__auto___31586 < len__29308__auto___31585)){
args__29315__auto__.push((arguments[i__29309__auto___31586]));

var G__31587 = (i__29309__auto___31586 + (1));
i__29309__auto___31586 = G__31587;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return clojure_turtle.macros.repeat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

clojure_turtle.macros.repeat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,n,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"states__31579__auto__","states__31579__auto__",-242066100,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","repeatedly","cljs.core/repeatedly",-1346003388,null)),(function (){var x__29001__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dorun","cljs.core/dorun",1487325315,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"states__31579__auto__","states__31579__auto__",-242066100,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","last","cljs.core/last",1273893704,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"states__31579__auto__","states__31579__auto__",-242066100,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

clojure_turtle.macros.repeat.cljs$lang$maxFixedArity = (3);

clojure_turtle.macros.repeat.cljs$lang$applyTo = (function (seq31580){
var G__31581 = cljs.core.first.call(null,seq31580);
var seq31580__$1 = cljs.core.next.call(null,seq31580);
var G__31582 = cljs.core.first.call(null,seq31580__$1);
var seq31580__$2 = cljs.core.next.call(null,seq31580__$1);
var G__31583 = cljs.core.first.call(null,seq31580__$2);
var seq31580__$3 = cljs.core.next.call(null,seq31580__$2);
return clojure_turtle.macros.repeat.cljs$core$IFn$_invoke$arity$variadic(G__31581,G__31582,G__31583,seq31580__$3);
});

return null;
})()
;
clojure_turtle.macros.repeat.cljs$lang$macro = true;


//# sourceMappingURL=macros.js.map?rel=1506931509081
