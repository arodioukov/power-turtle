// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
var ret__30035__auto___40612 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40613 = arguments.length;
var i__29996__auto___40614 = (0);
while(true){
if((i__29996__auto___40614 < len__29995__auto___40613)){
args__30002__auto__.push((arguments[i__29996__auto___40614]));

var G__40615 = (i__29996__auto___40614 + (1));
i__29996__auto___40614 = G__40615;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__29688__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})());
var G__40616 = threaded;
var G__40617 = cljs.core.next.call(null,forms__$1);
x__$1 = G__40616;
forms__$1 = G__40617;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq40608){
var G__40609 = cljs.core.first.call(null,seq40608);
var seq40608__$1 = cljs.core.next.call(null,seq40608);
var G__40610 = cljs.core.first.call(null,seq40608__$1);
var seq40608__$2 = cljs.core.next.call(null,seq40608__$1);
var G__40611 = cljs.core.first.call(null,seq40608__$2);
var seq40608__$3 = cljs.core.next.call(null,seq40608__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__40609,G__40610,G__40611,seq40608__$3);
});

return null;
})()
;
cljs.core$macros.__GT_.cljs$lang$macro = true;

var ret__30035__auto___40622 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40623 = arguments.length;
var i__29996__auto___40624 = (0);
while(true){
if((i__29996__auto___40624 < len__29995__auto___40623)){
args__30002__auto__.push((arguments[i__29996__auto___40624]));

var G__40625 = (i__29996__auto___40624 + (1));
i__29996__auto___40624 = G__40625;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__29688__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__29688__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})());
var G__40626 = threaded;
var G__40627 = cljs.core.next.call(null,forms__$1);
x__$1 = G__40626;
forms__$1 = G__40627;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq40618){
var G__40619 = cljs.core.first.call(null,seq40618);
var seq40618__$1 = cljs.core.next.call(null,seq40618);
var G__40620 = cljs.core.first.call(null,seq40618__$1);
var seq40618__$2 = cljs.core.next.call(null,seq40618__$1);
var G__40621 = cljs.core.first.call(null,seq40618__$2);
var seq40618__$3 = cljs.core.next.call(null,seq40618__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__40619,G__40620,G__40621,seq40618__$3);
});

return null;
})()
;
cljs.core$macros.__GT__GT_.cljs$lang$macro = true;

var ret__30035__auto___40635 = (function (){
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var G__40634 = arguments.length;
switch (G__40634) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___40637 = arguments.length;
var i__29996__auto___40638 = (0);
while(true){
if((i__29996__auto___40638 < len__29995__auto___40637)){
args_arr__30014__auto__.push((arguments[i__29996__auto___40638]));

var G__40639 = (i__29996__auto___40638 + (1));
i__29996__auto___40638 = G__40639;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq40629){
var G__40630 = cljs.core.first.call(null,seq40629);
var seq40629__$1 = cljs.core.next.call(null,seq40629);
var G__40631 = cljs.core.first.call(null,seq40629__$1);
var seq40629__$2 = cljs.core.next.call(null,seq40629__$1);
var G__40632 = cljs.core.first.call(null,seq40629__$2);
var seq40629__$3 = cljs.core.next.call(null,seq40629__$2);
var G__40633 = cljs.core.first.call(null,seq40629__$3);
var seq40629__$4 = cljs.core.next.call(null,seq40629__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__40630,G__40631,G__40632,G__40633,seq40629__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;

var ret__30035__auto___40643 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40644 = arguments.length;
var i__29996__auto___40645 = (0);
while(true){
if((i__29996__auto___40645 < len__29995__auto___40644)){
args__30002__auto__.push((arguments[i__29996__auto___40645]));

var G__40646 = (i__29996__auto___40645 + (1));
i__29996__auto___40645 = G__40646;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq40640){
var G__40641 = cljs.core.first.call(null,seq40640);
var seq40640__$1 = cljs.core.next.call(null,seq40640);
var G__40642 = cljs.core.first.call(null,seq40640__$1);
var seq40640__$2 = cljs.core.next.call(null,seq40640__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__40641,G__40642,seq40640__$2);
});

return null;
})()
;
cljs.core$macros.comment.cljs$lang$macro = true;

var ret__30035__auto___40650 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40651 = arguments.length;
var i__29996__auto___40652 = (0);
while(true){
if((i__29996__auto___40652 < len__29995__auto___40651)){
args__30002__auto__.push((arguments[i__29996__auto___40652]));

var G__40653 = (i__29996__auto___40652 + (1));
i__29996__auto___40652 = G__40653;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__29688__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__29688__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$2);
})(),x__29688__auto____$1);
})(),x__29688__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq40647){
var G__40648 = cljs.core.first.call(null,seq40647);
var seq40647__$1 = cljs.core.next.call(null,seq40647);
var G__40649 = cljs.core.first.call(null,seq40647__$1);
var seq40647__$2 = cljs.core.next.call(null,seq40647__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__40648,G__40649,seq40647__$2);
});

return null;
})()
;
cljs.core$macros.cond.cljs$lang$macro = true;

var ret__30035__auto___40658 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40659 = arguments.length;
var i__29996__auto___40660 = (0);
while(true){
if((i__29996__auto___40660 < len__29995__auto___40659)){
args__30002__auto__.push((arguments[i__29996__auto___40660]));

var G__40661 = (i__29996__auto___40660 + (1));
i__29996__auto___40660 = G__40661;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__40654_SHARP_){
return cljs.core._conj.call(null,(function (){var x__29688__auto__ = cljs.core.vary_meta.call(null,p1__40654_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq40655){
var G__40656 = cljs.core.first.call(null,seq40655);
var seq40655__$1 = cljs.core.next.call(null,seq40655);
var G__40657 = cljs.core.first.call(null,seq40655__$1);
var seq40655__$2 = cljs.core.next.call(null,seq40655__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__40656,G__40657,seq40655__$2);
});

return null;
})()
;
cljs.core$macros.declare.cljs$lang$macro = true;

var ret__30035__auto___40666 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40667 = arguments.length;
var i__29996__auto___40668 = (0);
while(true){
if((i__29996__auto___40668 < len__29995__auto___40667)){
args__30002__auto__.push((arguments[i__29996__auto___40668]));

var G__40669 = (i__29996__auto___40668 + (1));
i__29996__auto___40668 = G__40669;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__29688__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq40662){
var G__40663 = cljs.core.first.call(null,seq40662);
var seq40662__$1 = cljs.core.next.call(null,seq40662);
var G__40664 = cljs.core.first.call(null,seq40662__$1);
var seq40662__$2 = cljs.core.next.call(null,seq40662__$1);
var G__40665 = cljs.core.first.call(null,seq40662__$2);
var seq40662__$3 = cljs.core.next.call(null,seq40662__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__40663,G__40664,G__40665,seq40662__$3);
});

return null;
})()
;
cljs.core$macros.doto.cljs$lang$macro = true;

cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__40670 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__40671 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__40670;
s = G__40671;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls.call(null,specs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,((function (impls){
return (function (p__40672){
var vec__40673 = p__40672;
var t = cljs.core.nth.call(null,vec__40673,(0),null);
var fs = cljs.core.nth.call(null,vec__40673,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__29688__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),fs)));
});})(impls))
,impls))));
});
var ret__30035__auto___40680 = (function (){
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40681 = arguments.length;
var i__29996__auto___40682 = (0);
while(true){
if((i__29996__auto___40682 < len__29995__auto___40681)){
args__30002__auto__.push((arguments[i__29996__auto___40682]));

var G__40683 = (i__29996__auto___40682 + (1));
i__29996__auto___40682 = G__40683;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq40676){
var G__40677 = cljs.core.first.call(null,seq40676);
var seq40676__$1 = cljs.core.next.call(null,seq40676);
var G__40678 = cljs.core.first.call(null,seq40676__$1);
var seq40676__$2 = cljs.core.next.call(null,seq40676__$1);
var G__40679 = cljs.core.first.call(null,seq40676__$2);
var seq40676__$3 = cljs.core.next.call(null,seq40676__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__40677,G__40678,G__40679,seq40676__$3);
});

return null;
})()
;
cljs.core$macros.extend_protocol.cljs$lang$macro = true;

cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,params)){
return cljs.core.cons.call(null,params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first.call(null,params__$1) instanceof cljs.core.Symbol)){
var G__40684 = cljs.core.next.call(null,params__$1);
var G__40685 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__40686 = lets;
params__$1 = G__40684;
new_params = G__40685;
lets = G__40686;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__40687 = cljs.core.next.call(null,params__$1);
var G__40688 = cljs.core.conj.call(null,new_params,gparam);
var G__40689 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__40687;
new_params = G__40688;
lets = G__40689;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
}
break;
}
}
});
var ret__30035__auto___40696 = (function (){
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40697 = arguments.length;
var i__29996__auto___40698 = (0);
while(true){
if((i__29996__auto___40698 < len__29995__auto___40697)){
args__30002__auto__.push((arguments[i__29996__auto___40698]));

var G__40699 = (i__29996__auto___40698 + (1));
i__29996__auto___40698 = G__40699;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__29688__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,sigs__$1))," should be a vector"].join(''):["Parameter declaration missing"].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')));
} else {
}

var vec__40693 = sig;
var seq__40694 = cljs.core.seq.call(null,vec__40693);
var first__40695 = cljs.core.first.call(null,seq__40694);
var seq__40694__$1 = cljs.core.next.call(null,seq__40694);
var params = first__40695;
var body = seq__40694__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__28826__auto__ = conds;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__29688__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.map.call(null,((function (vec__40693,seq__40694,first__40695,seq__40694__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__29688__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});})(vec__40693,seq__40694,first__40695,seq__40694__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__40693,seq__40694,first__40695,seq__40694__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__29688__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});})(vec__40693,seq__40694,first__40695,seq__40694__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq40690){
var G__40691 = cljs.core.first.call(null,seq40690);
var seq40690__$1 = cljs.core.next.call(null,seq40690);
var G__40692 = cljs.core.first.call(null,seq40690__$1);
var seq40690__$2 = cljs.core.next.call(null,seq40690__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__40691,G__40692,seq40690__$2);
});

return null;
})()
;
cljs.core$macros.fn.cljs$lang$macro = true;

var ret__30035__auto___40704 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40705 = arguments.length;
var i__29996__auto___40706 = (0);
while(true){
if((i__29996__auto___40706 < len__29995__auto___40705)){
args__30002__auto__.push((arguments[i__29996__auto___40706]));

var G__40707 = (i__29996__auto___40706 + (1));
i__29996__auto___40706 = G__40707;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq40700){
var G__40701 = cljs.core.first.call(null,seq40700);
var seq40700__$1 = cljs.core.next.call(null,seq40700);
var G__40702 = cljs.core.first.call(null,seq40700__$1);
var seq40700__$2 = cljs.core.next.call(null,seq40700__$1);
var G__40703 = cljs.core.first.call(null,seq40700__$2);
var seq40700__$3 = cljs.core.next.call(null,seq40700__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__40701,G__40702,G__40703,seq40700__$3);
});

return null;
})()
;
cljs.core$macros.defn_.cljs$lang$macro = true;

var ret__30035__auto___40717 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var G__40716 = arguments.length;
switch (G__40716) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___40719 = arguments.length;
var i__29996__auto___40720 = (0);
while(true){
if((i__29996__auto___40720 < len__29995__auto___40719)){
args_arr__30014__auto__.push((arguments[i__29996__auto___40720]));

var G__40721 = (i__29996__auto___40720 + (1));
i__29996__auto___40720 = G__40721;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__30015__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__29688__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40708__auto__","temp__40708__auto__",1416016302,null)),(function (){var x__29688__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40708__auto__","temp__40708__auto__",1416016302,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40708__auto__","temp__40708__auto__",1416016302,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq40710){
var G__40711 = cljs.core.first.call(null,seq40710);
var seq40710__$1 = cljs.core.next.call(null,seq40710);
var G__40712 = cljs.core.first.call(null,seq40710__$1);
var seq40710__$2 = cljs.core.next.call(null,seq40710__$1);
var G__40713 = cljs.core.first.call(null,seq40710__$2);
var seq40710__$3 = cljs.core.next.call(null,seq40710__$2);
var G__40714 = cljs.core.first.call(null,seq40710__$3);
var seq40710__$4 = cljs.core.next.call(null,seq40710__$3);
var G__40715 = cljs.core.first.call(null,seq40710__$4);
var seq40710__$5 = cljs.core.next.call(null,seq40710__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__40711,G__40712,G__40713,G__40714,G__40715,seq40710__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_let.cljs$lang$macro = true;

var ret__30035__auto___40724 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var G__40723 = arguments.length;
switch (G__40723) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__29688__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__29688__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

return null;
})()
;
cljs.core$macros.if_not.cljs$lang$macro = true;

var ret__30035__auto___40731 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40732 = arguments.length;
var i__29996__auto___40733 = (0);
while(true){
if((i__29996__auto___40733 < len__29995__auto___40732)){
args__30002__auto__.push((arguments[i__29996__auto___40733]));

var G__40734 = (i__29996__auto___40733 + (1));
i__29996__auto___40733 = G__40734;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__40726_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__40726_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq40727){
var G__40728 = cljs.core.first.call(null,seq40727);
var seq40727__$1 = cljs.core.next.call(null,seq40727);
var G__40729 = cljs.core.first.call(null,seq40727__$1);
var seq40727__$2 = cljs.core.next.call(null,seq40727__$1);
var G__40730 = cljs.core.first.call(null,seq40727__$2);
var seq40727__$3 = cljs.core.next.call(null,seq40727__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__40728,G__40729,G__40730,seq40727__$3);
});

return null;
})()
;
cljs.core$macros.letfn.cljs$lang$macro = true;

var ret__30035__auto___40739 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a JavaScript
 *   method as a first-class fn.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40740 = arguments.length;
var i__29996__auto___40741 = (0);
while(true){
if((i__29996__auto___40741 < len__29995__auto___40740)){
args__30002__auto__.push((arguments[i__29996__auto___40741]));

var G__40742 = (i__29996__auto___40741 + (1));
i__29996__auto___40741 = G__40742;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq40735){
var G__40736 = cljs.core.first.call(null,seq40735);
var seq40735__$1 = cljs.core.next.call(null,seq40735);
var G__40737 = cljs.core.first.call(null,seq40735__$1);
var seq40735__$2 = cljs.core.next.call(null,seq40735__$1);
var G__40738 = cljs.core.first.call(null,seq40735__$2);
var seq40735__$3 = cljs.core.next.call(null,seq40735__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__40736,G__40737,G__40738,seq40735__$3);
});

return null;
})()
;
cljs.core$macros.memfn.cljs$lang$macro = true;

var ret__30035__auto___40747 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40748 = arguments.length;
var i__29996__auto___40749 = (0);
while(true){
if((i__29996__auto___40749 < len__29995__auto___40748)){
args__30002__auto__.push((arguments[i__29996__auto___40749]));

var G__40750 = (i__29996__auto___40749 + (1));
i__29996__auto___40749 = G__40750;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__29688__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq40743){
var G__40744 = cljs.core.first.call(null,seq40743);
var seq40743__$1 = cljs.core.next.call(null,seq40743);
var G__40745 = cljs.core.first.call(null,seq40743__$1);
var seq40743__$2 = cljs.core.next.call(null,seq40743__$1);
var G__40746 = cljs.core.first.call(null,seq40743__$2);
var seq40743__$3 = cljs.core.next.call(null,seq40743__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__40744,G__40745,G__40746,seq40743__$3);
});

return null;
})()
;
cljs.core$macros.when.cljs$lang$macro = true;

var ret__30035__auto___40759 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40760 = arguments.length;
var i__29996__auto___40761 = (0);
while(true){
if((i__29996__auto___40761 < len__29995__auto___40760)){
args__30002__auto__.push((arguments[i__29996__auto___40761]));

var G__40762 = (i__29996__auto___40761 + (1));
i__29996__auto___40761 = G__40762;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__40756 = bindings;
var x = cljs.core.nth.call(null,vec__40756,(0),null);
var xs = cljs.core.nth.call(null,vec__40756,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__40751__auto__","xs__40751__auto__",-1084953111,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__29688__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__40751__auto__","xs__40751__auto__",-1084953111,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq40752){
var G__40753 = cljs.core.first.call(null,seq40752);
var seq40752__$1 = cljs.core.next.call(null,seq40752);
var G__40754 = cljs.core.first.call(null,seq40752__$1);
var seq40752__$2 = cljs.core.next.call(null,seq40752__$1);
var G__40755 = cljs.core.first.call(null,seq40752__$2);
var seq40752__$3 = cljs.core.next.call(null,seq40752__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__40753,G__40754,G__40755,seq40752__$3);
});

return null;
})()
;
cljs.core$macros.when_first.cljs$lang$macro = true;

var ret__30035__auto___40768 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40769 = arguments.length;
var i__29996__auto___40770 = (0);
while(true){
if((i__29996__auto___40770 < len__29995__auto___40769)){
args__30002__auto__.push((arguments[i__29996__auto___40770]));

var G__40771 = (i__29996__auto___40770 + (1));
i__29996__auto___40770 = G__40771;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40763__auto__","temp__40763__auto__",-1982254663,null)),(function (){var x__29688__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40763__auto__","temp__40763__auto__",-1982254663,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40763__auto__","temp__40763__auto__",-1982254663,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq40764){
var G__40765 = cljs.core.first.call(null,seq40764);
var seq40764__$1 = cljs.core.next.call(null,seq40764);
var G__40766 = cljs.core.first.call(null,seq40764__$1);
var seq40764__$2 = cljs.core.next.call(null,seq40764__$1);
var G__40767 = cljs.core.first.call(null,seq40764__$2);
var seq40764__$3 = cljs.core.next.call(null,seq40764__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__40765,G__40766,G__40767,seq40764__$3);
});

return null;
})()
;
cljs.core$macros.when_let.cljs$lang$macro = true;

var ret__30035__auto___40776 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40777 = arguments.length;
var i__29996__auto___40778 = (0);
while(true){
if((i__29996__auto___40778 < len__29995__auto___40777)){
args__30002__auto__.push((arguments[i__29996__auto___40778]));

var G__40779 = (i__29996__auto___40778 + (1));
i__29996__auto___40778 = G__40779;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__29688__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),null),x__29688__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq40772){
var G__40773 = cljs.core.first.call(null,seq40772);
var seq40772__$1 = cljs.core.next.call(null,seq40772);
var G__40774 = cljs.core.first.call(null,seq40772__$1);
var seq40772__$2 = cljs.core.next.call(null,seq40772__$1);
var G__40775 = cljs.core.first.call(null,seq40772__$2);
var seq40772__$3 = cljs.core.next.call(null,seq40772__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__40773,G__40774,G__40775,seq40772__$3);
});

return null;
})()
;
cljs.core$macros.when_not.cljs$lang$macro = true;

var ret__30035__auto___40784 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40785 = arguments.length;
var i__29996__auto___40786 = (0);
while(true){
if((i__29996__auto___40786 < len__29995__auto___40785)){
args__30002__auto__.push((arguments[i__29996__auto___40786]));

var G__40787 = (i__29996__auto___40786 + (1));
i__29996__auto___40786 = G__40787;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__29688__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body,(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq40780){
var G__40781 = cljs.core.first.call(null,seq40780);
var seq40780__$1 = cljs.core.next.call(null,seq40780);
var G__40782 = cljs.core.first.call(null,seq40780__$1);
var seq40780__$2 = cljs.core.next.call(null,seq40780__$1);
var G__40783 = cljs.core.first.call(null,seq40780__$2);
var seq40780__$3 = cljs.core.next.call(null,seq40780__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__40781,G__40782,G__40783,seq40780__$3);
});

return null;
})()
;
cljs.core$macros.while$.cljs$lang$macro = true;

var ret__30035__auto___40796 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40797 = arguments.length;
var i__29996__auto___40798 = (0);
while(true){
if((i__29996__auto___40798 < len__29995__auto___40797)){
args__30002__auto__.push((arguments[i__29996__auto___40798]));

var G__40799 = (i__29996__auto___40798 + (1));
i__29996__auto___40798 = G__40799;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__40792){
var vec__40793 = p__40792;
var test = cljs.core.nth.call(null,vec__40793,(0),null);
var step = cljs.core.nth.call(null,vec__40793,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__29688__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq40788){
var G__40789 = cljs.core.first.call(null,seq40788);
var seq40788__$1 = cljs.core.next.call(null,seq40788);
var G__40790 = cljs.core.first.call(null,seq40788__$1);
var seq40788__$2 = cljs.core.next.call(null,seq40788__$1);
var G__40791 = cljs.core.first.call(null,seq40788__$2);
var seq40788__$3 = cljs.core.next.call(null,seq40788__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__40789,G__40790,G__40791,seq40788__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT_.cljs$lang$macro = true;

var ret__30035__auto___40808 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40809 = arguments.length;
var i__29996__auto___40810 = (0);
while(true){
if((i__29996__auto___40810 < len__29995__auto___40809)){
args__30002__auto__.push((arguments[i__29996__auto___40810]));

var G__40811 = (i__29996__auto___40810 + (1));
i__29996__auto___40810 = G__40811;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__40804){
var vec__40805 = p__40804;
var test = cljs.core.nth.call(null,vec__40805,(0),null);
var step = cljs.core.nth.call(null,vec__40805,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__29688__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq40800){
var G__40801 = cljs.core.first.call(null,seq40800);
var seq40800__$1 = cljs.core.next.call(null,seq40800);
var G__40802 = cljs.core.first.call(null,seq40800__$1);
var seq40800__$2 = cljs.core.next.call(null,seq40800__$1);
var G__40803 = cljs.core.first.call(null,seq40800__$2);
var seq40800__$3 = cljs.core.next.call(null,seq40800__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__40801,G__40802,G__40803,seq40800__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;

var ret__30035__auto___40817 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40818 = arguments.length;
var i__29996__auto___40819 = (0);
while(true){
if((i__29996__auto___40819 < len__29995__auto___40818)){
args__30002__auto__.push((arguments[i__29996__auto___40819]));

var G__40820 = (i__29996__auto___40819 + (1));
i__29996__auto___40819 = G__40820;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((4) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30003__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),cljs.core.butlast.call(null,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = ((cljs.core.empty_QMARK_.call(null,forms))?name:cljs.core.last.call(null,forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq40812){
var G__40813 = cljs.core.first.call(null,seq40812);
var seq40812__$1 = cljs.core.next.call(null,seq40812);
var G__40814 = cljs.core.first.call(null,seq40812__$1);
var seq40812__$2 = cljs.core.next.call(null,seq40812__$1);
var G__40815 = cljs.core.first.call(null,seq40812__$2);
var seq40812__$3 = cljs.core.next.call(null,seq40812__$2);
var G__40816 = cljs.core.first.call(null,seq40812__$3);
var seq40812__$4 = cljs.core.next.call(null,seq40812__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__40813,G__40814,G__40815,G__40816,seq40812__$4);
});

return null;
})()
;
cljs.core$macros.as__GT_.cljs$lang$macro = true;

var ret__30035__auto___40825 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40826 = arguments.length;
var i__29996__auto___40827 = (0);
while(true){
if((i__29996__auto___40827 < len__29995__auto___40826)){
args__30002__auto__.push((arguments[i__29996__auto___40827]));

var G__40828 = (i__29996__auto___40827 + (1));
i__29996__auto___40827 = G__40828;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29688__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__29688__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq40821){
var G__40822 = cljs.core.first.call(null,seq40821);
var seq40821__$1 = cljs.core.next.call(null,seq40821);
var G__40823 = cljs.core.first.call(null,seq40821__$1);
var seq40821__$2 = cljs.core.next.call(null,seq40821__$1);
var G__40824 = cljs.core.first.call(null,seq40821__$2);
var seq40821__$3 = cljs.core.next.call(null,seq40821__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__40822,G__40823,G__40824,seq40821__$3);
});

return null;
})()
;
cljs.core$macros.some__GT_.cljs$lang$macro = true;

var ret__30035__auto___40833 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40834 = arguments.length;
var i__29996__auto___40835 = (0);
while(true){
if((i__29996__auto___40835 < len__29995__auto___40834)){
args__30002__auto__.push((arguments[i__29996__auto___40835]));

var G__40836 = (i__29996__auto___40835 + (1));
i__29996__auto___40835 = G__40836;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29688__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__29688__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq40829){
var G__40830 = cljs.core.first.call(null,seq40829);
var seq40829__$1 = cljs.core.next.call(null,seq40829);
var G__40831 = cljs.core.first.call(null,seq40829__$1);
var seq40829__$2 = cljs.core.next.call(null,seq40829__$1);
var G__40832 = cljs.core.first.call(null,seq40829__$2);
var seq40829__$3 = cljs.core.next.call(null,seq40829__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__40830,G__40831,G__40832,seq40829__$3);
});

return null;
})()
;
cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__30035__auto___40846 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var G__40845 = arguments.length;
switch (G__40845) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___40848 = arguments.length;
var i__29996__auto___40849 = (0);
while(true){
if((i__29996__auto___40849 < len__29995__auto___40848)){
args_arr__30014__auto__.push((arguments[i__29996__auto___40849]));

var G__40850 = (i__29996__auto___40849 + (1));
i__29996__auto___40849 = G__40850;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__30015__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__29688__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40837__auto__","temp__40837__auto__",1730518782,null)),(function (){var x__29688__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40837__auto__","temp__40837__auto__",1730518782,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40837__auto__","temp__40837__auto__",1730518782,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq40839){
var G__40840 = cljs.core.first.call(null,seq40839);
var seq40839__$1 = cljs.core.next.call(null,seq40839);
var G__40841 = cljs.core.first.call(null,seq40839__$1);
var seq40839__$2 = cljs.core.next.call(null,seq40839__$1);
var G__40842 = cljs.core.first.call(null,seq40839__$2);
var seq40839__$3 = cljs.core.next.call(null,seq40839__$2);
var G__40843 = cljs.core.first.call(null,seq40839__$3);
var seq40839__$4 = cljs.core.next.call(null,seq40839__$3);
var G__40844 = cljs.core.first.call(null,seq40839__$4);
var seq40839__$5 = cljs.core.next.call(null,seq40839__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__40840,G__40841,G__40842,G__40843,G__40844,seq40839__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_some.cljs$lang$macro = true;

var ret__30035__auto___40856 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40857 = arguments.length;
var i__29996__auto___40858 = (0);
while(true){
if((i__29996__auto___40858 < len__29995__auto___40857)){
args__30002__auto__.push((arguments[i__29996__auto___40858]));

var G__40859 = (i__29996__auto___40858 + (1));
i__29996__auto___40858 = G__40859;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40851__auto__","temp__40851__auto__",-757207556,null)),(function (){var x__29688__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40851__auto__","temp__40851__auto__",-757207556,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40851__auto__","temp__40851__auto__",-757207556,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq40852){
var G__40853 = cljs.core.first.call(null,seq40852);
var seq40852__$1 = cljs.core.next.call(null,seq40852);
var G__40854 = cljs.core.first.call(null,seq40852__$1);
var seq40852__$2 = cljs.core.next.call(null,seq40852__$1);
var G__40855 = cljs.core.first.call(null,seq40852__$2);
var seq40852__$3 = cljs.core.next.call(null,seq40852__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__40853,G__40854,G__40855,seq40852__$3);
});

return null;
})()
;
cljs.core$macros.when_some.cljs$lang$macro = true;

/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_.call(null,fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.call(null,(function (p1__40860_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__40860_SHARP_)){
return cljs.core.first.call(null,p1__40860_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?["Invalid signature \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40860_SHARP_),"\" should be a list"].join(''):["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40860_SHARP_),"\" should be a vector"].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__40861_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__40861_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error(["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,bad_args)),"\" should be a vector"].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
cljs.core$macros.assert_valid_fdecl.call(null,fdecl);

var asig = (function (fdecl__$1){
var arglist = cljs.core.first.call(null,fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first.call(null,arglist)))?cljs.core.subvec.call(null,arglist,(2),cljs.core.count.call(null,arglist)):arglist);
var body = cljs.core.next.call(null,fdecl__$1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
if(cljs.core.next.call(null,body)){
return cljs.core.with_meta.call(null,arglist__$1,cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,arglist__$1))?cljs.core.meta.call(null,arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first.call(null,body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__40862 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__40863 = cljs.core.next.call(null,fdecls);
ret = G__40862;
fdecls = G__40863;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__29688__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
}
});
var ret__30035__auto___40864 = /**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.defonce.cljs$lang$macro = true;

cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.call(null,(2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.call(null,"vec__");
var gseq = cljs.core.gensym.call(null,"seq__");
var gfirst = cljs.core.gensym.call(null,"first__");
var has_rest = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.call(null,bvec__$1,gvec,val);
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__29688__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq.call(null,bs)){
var firstb = cljs.core.first.call(null,bs);
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__40871 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__40872 = n;
var G__40873 = cljs.core.nnext.call(null,bs);
var G__40874 = true;
ret = G__40871;
n = G__40872;
bs = G__40873;
seen_rest_QMARK_ = G__40874;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__40875 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__29688__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__29688__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__29688__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__29688__auto____$1);
})(),x__29688__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__40876 = (n + (1));
var G__40877 = cljs.core.next.call(null,bs);
var G__40878 = seen_rest_QMARK_;
ret = G__40875;
n = G__40876;
bs = G__40877;
seen_rest_QMARK_ = G__40878;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.call(null,"map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),gmap);
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__29688__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__29688__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__40865_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__28826__auto__ = mkns;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return cljs.core.namespace.call(null,p1__40865_SHARP_);
}
})(),cljs.core.name.call(null,p1__40865_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__40866_SHARP_){
return cljs.core._conj.call(null,(function (){var x__29688__auto__ = cljs.core.symbol.call(null,(function (){var or__28826__auto__ = mkns;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return cljs.core.namespace.call(null,p1__40866_SHARP_);
}
})(),cljs.core.name.call(null,p1__40866_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"strs")){
return cljs.core.assoc.call(null,transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,b__$1));
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__40867_SHARP_,p2__40868_SHARP_){
return cljs.core.assoc.call(null,p1__40867_SHARP_,p2__40868_SHARP_,cljs.core.val.call(null,entry).call(null,p2__40868_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,b__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169)),transforms);
})();
while(true){
if(cljs.core.seq.call(null,bes)){
var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$)))?true:false):false))?cljs.core.with_meta.call(null,cljs.core.symbol.call(null,null,cljs.core.name.call(null,bb)),cljs.core.meta.call(null,bb)):bb);
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__29688__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$2);
})(),x__29688__auto____$1);
})(),x__29688__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__29688__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__40879 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__40880 = cljs.core.next.call(null,bes);
ret = G__40879;
bes = G__40880;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,(cljs.core.truth_(cljs.core.namespace.call(null,b))?cljs.core.symbol.call(null,cljs.core.name.call(null,b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,cljs.core.symbol.call(null,cljs.core.name.call(null,b))),v);
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
return pvec.call(null,bvec,b,v);
} else {
if(cljs.core.map_QMARK_.call(null,b)){
return pmap.call(null,bvec,b,v);
} else {
throw (new Error(["Unsupported binding form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb.call(null,bvec,cljs.core.first.call(null,b),cljs.core.second.call(null,b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,cljs.core.map.call(null,cljs.core.first,bents))){
return bindings;
} else {
var temp__4655__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bents,pb,process_entry){
return (function (p1__40869_SHARP_){
return (cljs.core.first.call(null,p1__40869_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__4655__auto__){
var kwbs = temp__4655__auto__;
throw (new Error(["Unsupported binding key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst.call(null,kwbs))].join('')));
} else {
return cljs.core.reduce.call(null,process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
var ret__30035__auto___40881 = /**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.call(null,"goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__29688__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__29688__auto__ = ["/** @define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"} */"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__29688__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.goog_define.cljs$lang$macro = true;

var ret__30035__auto___40886 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40887 = arguments.length;
var i__29996__auto___40888 = (0);
while(true){
if((i__29996__auto___40888 < len__29995__auto___40887)){
args__30002__auto__.push((arguments[i__29996__auto___40888]));

var G__40889 = (i__29996__auto___40888 + (1));
i__29996__auto___40888 = G__40889;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__29688__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq40882){
var G__40883 = cljs.core.first.call(null,seq40882);
var seq40882__$1 = cljs.core.next.call(null,seq40882);
var G__40884 = cljs.core.first.call(null,seq40882__$1);
var seq40882__$2 = cljs.core.next.call(null,seq40882__$1);
var G__40885 = cljs.core.first.call(null,seq40882__$2);
var seq40882__$3 = cljs.core.next.call(null,seq40882__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__40883,G__40884,G__40885,seq40882__$3);
});

return null;
})()
;
cljs.core$macros.let$.cljs$lang$macro = true;

var ret__30035__auto___40898 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40899 = arguments.length;
var i__29996__auto___40900 = (0);
while(true){
if((i__29996__auto___40900 < len__29995__auto___40899)){
args__30002__auto__.push((arguments[i__29996__auto___40900]));

var G__40901 = (i__29996__auto___40900 + (1));
i__29996__auto___40900 = G__40901;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure.call(null,bindings);
if(cljs.core._EQ_.call(null,db,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__29688__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body)));
} else {
var vs = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var bs = cljs.core.take_nth.call(null,(2),bindings);
var gs = cljs.core.map.call(null,((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.call(null);
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.call(null,((function (vs,bs,gs,db){
return (function (ret,p__40894){
var vec__40895 = p__40894;
var b = cljs.core.nth.call(null,vec__40895,(0),null);
var v = cljs.core.nth.call(null,vec__40895,(1),null);
var g = cljs.core.nth.call(null,vec__40895,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq40890){
var G__40891 = cljs.core.first.call(null,seq40890);
var seq40890__$1 = cljs.core.next.call(null,seq40890);
var G__40892 = cljs.core.first.call(null,seq40890__$1);
var seq40890__$2 = cljs.core.next.call(null,seq40890__$1);
var G__40893 = cljs.core.first.call(null,seq40890__$2);
var seq40890__$3 = cljs.core.next.call(null,seq40890__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__40891,G__40892,G__40893,seq40890__$3);
});

return null;
})()
;
cljs.core$macros.loop.cljs$lang$macro = true;

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__40902_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40902_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null)], true)),cljs.core.iterate.call(null,(function (p__40903){
var vec__40904 = p__40903;
var p = cljs.core.nth.call(null,vec__40904,(0),null);
var b = cljs.core.nth.call(null,vec__40904,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count.call(null,cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod.call(null,c,(32));
if((m === (0))){
return cljs.core.quot.call(null,c,(32));
} else {
return (cljs.core.quot.call(null,c,(32)) + (1));
}
})();
var ret__30035__auto___40910 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__30002__auto__ = [];
var len__29995__auto___40911 = arguments.length;
var i__29996__auto___40912 = (0);
while(true){
if((i__29996__auto___40912 < len__29995__auto___40911)){
args__30002__auto__.push((arguments[i__29996__auto___40912]));

var G__40913 = (i__29996__auto___40912 + (1));
i__29996__auto___40912 = G__40913;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var interpolate = (function (x){
if(typeof x === 'string'){
return "~{}";
} else {
return "cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})";
}
});
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,interpolate,xs)));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),"].join('')"].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq40907){
var G__40908 = cljs.core.first.call(null,seq40907);
var seq40907__$1 = cljs.core.next.call(null,seq40907);
var G__40909 = cljs.core.first.call(null,seq40907__$1);
var seq40907__$2 = cljs.core.next.call(null,seq40907__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__40908,G__40909,seq40907__$2);
});

return null;
})()
;
cljs.core$macros.str.cljs$lang$macro = true;

cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__28814__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__28814__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__28814__auto__;
}
});
var ret__30035__auto___40924 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var G__40922 = arguments.length;
switch (G__40922) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___40926 = arguments.length;
var i__29996__auto___40927 = (0);
while(true){
if((i__29996__auto___40927 < len__29995__auto___40926)){
args_arr__30014__auto__.push((arguments[i__29996__auto___40927]));

var G__40928 = (i__29996__auto___40927 + (1));
i__29996__auto___40927 = G__40928;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30015__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__40914_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__40914_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__40915_SHARP_){
var _STAR_cljs_warnings_STAR_40923 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__40915_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_40923;
}});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__29688__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__40916__auto__","and__40916__auto__",931555427,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__40916__auto__","and__40916__auto__",931555427,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__40916__auto__","and__40916__auto__",931555427,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq40918){
var G__40919 = cljs.core.first.call(null,seq40918);
var seq40918__$1 = cljs.core.next.call(null,seq40918);
var G__40920 = cljs.core.first.call(null,seq40918__$1);
var seq40918__$2 = cljs.core.next.call(null,seq40918__$1);
var G__40921 = cljs.core.first.call(null,seq40918__$2);
var seq40918__$3 = cljs.core.next.call(null,seq40918__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__40919,G__40920,G__40921,seq40918__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.and.cljs$lang$macro = true;

var ret__30035__auto___40939 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var G__40937 = arguments.length;
switch (G__40937) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___40941 = arguments.length;
var i__29996__auto___40942 = (0);
while(true){
if((i__29996__auto___40942 < len__29995__auto___40941)){
args_arr__30014__auto__.push((arguments[i__29996__auto___40942]));

var G__40943 = (i__29996__auto___40942 + (1));
i__29996__auto___40942 = G__40943;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30015__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__40929_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__40929_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__40930_SHARP_){
var _STAR_cljs_warnings_STAR_40938 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__40930_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_40938;
}});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__29688__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__40931__auto__","or__40931__auto__",-1572881466,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__40931__auto__","or__40931__auto__",-1572881466,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__40931__auto__","or__40931__auto__",-1572881466,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq40933){
var G__40934 = cljs.core.first.call(null,seq40933);
var seq40933__$1 = cljs.core.next.call(null,seq40933);
var G__40935 = cljs.core.first.call(null,seq40933__$1);
var seq40933__$2 = cljs.core.next.call(null,seq40933__$1);
var G__40936 = cljs.core.first.call(null,seq40933__$2);
var seq40933__$3 = cljs.core.next.call(null,seq40933__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__40934,G__40935,G__40936,seq40933__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.or.cljs$lang$macro = true;

var ret__30035__auto___40944 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});
cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;

var ret__30035__auto___40945 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.some_QMARK_.cljs$lang$macro = true;

var ret__30035__auto___40946 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not.cljs$lang$macro = true;

var ret__30035__auto___40947 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;

var ret__30035__auto___40948 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;

var ret__30035__auto___40949 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});
cljs.core$macros.coercive_boolean.cljs$lang$macro = true;

var ret__30035__auto___40950 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","x is substituted twice","\n","(core/symbol? x)"].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.truth_.cljs$lang$macro = true;

var ret__30035__auto___40951 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_arguments.cljs$lang$macro = true;

var ret__30035__auto___40952 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_delete.cljs$lang$macro = true;

var ret__30035__auto___40953 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_in.cljs$lang$macro = true;

var ret__30035__auto___40954 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__29688__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__29688__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
cljs.core$macros.js_debugger.cljs$lang$macro = true;

var ret__30035__auto___40959 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__40956 = clojure.string.split.call(null,comment,/\n/);
var seq__40957 = cljs.core.seq.call(null,vec__40956);
var first__40958 = cljs.core.first.call(null,seq__40957);
var seq__40957__$1 = cljs.core.next.call(null,seq__40957);
var x = first__40958;
var ys = seq__40957__$1;
return cljs.core._conj.call(null,(function (){var x__29688__auto__ = ["\n/**\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1([" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\n"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__40956,seq__40957,first__40958,seq__40957__$1,x,ys){
return (function (p1__40955_SHARP_){
return [" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,p1__40955_SHARP_,/^   /,"")),"\n"].join('');
});})(vec__40956,seq__40957,first__40958,seq__40957__$1,x,ys))
,ys)))," */\n"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_comment.cljs$lang$macro = true;

var ret__30035__auto___40960 = /**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = ["~{} = /** @type {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"} */ (~{})"].join('');
return cljs.core._conj.call(null,(function (){var x__29688__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$2);
})(),x__29688__auto____$1);
})(),x__29688__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsafe_cast.cljs$lang$macro = true;

var ret__30035__auto___40961 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__29688__auto__ = ["/**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),"*/"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_inline_comment.cljs$lang$macro = true;

var ret__30035__auto___40962 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.true_QMARK_.cljs$lang$macro = true;

var ret__30035__auto___40963 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.false_QMARK_.cljs$lang$macro = true;

var ret__30035__auto___40964 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.string_QMARK_.cljs$lang$macro = true;

var ret__30035__auto___40965 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;

var ret__30035__auto___40966 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;

var ret__30035__auto___40967 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a__$1,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = a__$1;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;

var ret__30035__auto___40970 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__40968__auto__","c__40968__auto__",-1131769785,null)),(function (){var x__29688__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40969__auto__","x__40969__auto__",-298354206,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40969__auto__","x__40969__auto__",-298354206,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__40968__auto__","c__40968__auto__",-1131769785,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())))));
});
cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;

var ret__30035__auto___40971 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.number_QMARK_.cljs$lang$macro = true;

var ret__30035__auto___40972 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
});
cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;

var ret__30035__auto___40973 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
});
cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;

var ret__30035__auto___40983 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var G__40980 = arguments.length;
switch (G__40980) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___40985 = arguments.length;
var i__29996__auto___40986 = (0);
while(true){
if((i__29996__auto___40986 < len__29995__auto___40985)){
args_arr__30014__auto__.push((arguments[i__29996__auto___40986]));

var G__40987 = (i__29996__auto___40986 + (1));
i__29996__auto___40986 = G__40987;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx){
var G__40981 = cljs.analyzer.checked_arrays.call(null);
var G__40981__$1 = (((G__40981 instanceof cljs.core.Keyword))?G__40981.fqn:null);
switch (G__40981__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__29688__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__29688__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));

break;
default:
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = array;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idxs){
var G__40982 = cljs.analyzer.checked_arrays.call(null);
var G__40982__$1 = (((G__40982 instanceof cljs.core.Keyword))?G__40982.fqn:null);
switch (G__40982__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__29688__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),idxs)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__29688__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),idxs)));

break;
default:
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__29688__auto__ = ["(~{}[~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),")"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),idxs)));

}
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq40975){
var G__40976 = cljs.core.first.call(null,seq40975);
var seq40975__$1 = cljs.core.next.call(null,seq40975);
var G__40977 = cljs.core.first.call(null,seq40975__$1);
var seq40975__$2 = cljs.core.next.call(null,seq40975__$1);
var G__40978 = cljs.core.first.call(null,seq40975__$2);
var seq40975__$3 = cljs.core.next.call(null,seq40975__$2);
var G__40979 = cljs.core.first.call(null,seq40975__$3);
var seq40975__$4 = cljs.core.next.call(null,seq40975__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__40976,G__40977,G__40978,G__40979,seq40975__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.aget.cljs$lang$macro = true;

var ret__30035__auto___41000 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var G__40997 = arguments.length;
switch (G__40997) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41002 = arguments.length;
var i__29996__auto___41003 = (0);
while(true){
if((i__29996__auto___41003 < len__29995__auto___41002)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41003]));

var G__41004 = (i__29996__auto___41003 + (1));
i__29996__auto___41003 = G__41004;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__30015__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,val){
var G__40998 = cljs.analyzer.checked_arrays.call(null);
var G__40998__$1 = (((G__40998 instanceof cljs.core.Keyword))?G__40998.fqn:null);
switch (G__40998__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__29688__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__29688__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));

break;
default:
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = array;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = idx;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$2 = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$2);
})(),x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idx2,idxv){
var G__40999 = cljs.analyzer.checked_arrays.call(null);
var G__40999__$1 = (((G__40999 instanceof cljs.core.Keyword))?G__40999.fqn:null);
switch (G__40999__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__29688__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),idxv)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__29688__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),idxv)));

break;
default:
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__29688__auto__ = ["(~{}[~{}][~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr)," = ~{})"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),idxv)));

}
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq40991){
var G__40992 = cljs.core.first.call(null,seq40991);
var seq40991__$1 = cljs.core.next.call(null,seq40991);
var G__40993 = cljs.core.first.call(null,seq40991__$1);
var seq40991__$2 = cljs.core.next.call(null,seq40991__$1);
var G__40994 = cljs.core.first.call(null,seq40991__$2);
var seq40991__$3 = cljs.core.next.call(null,seq40991__$2);
var G__40995 = cljs.core.first.call(null,seq40991__$3);
var seq40991__$4 = cljs.core.next.call(null,seq40991__$3);
var G__40996 = cljs.core.first.call(null,seq40991__$4);
var seq40991__$5 = cljs.core.next.call(null,seq40991__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__40992,G__40993,G__40994,G__40995,G__40996,seq40991__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.aset.cljs$lang$macro = true;

var ret__30035__auto___41007 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_get = (function cljs$core$macros$unchecked_get(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_get.cljs$lang$macro = true;

var ret__30035__auto___41008 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_set = (function cljs$core$macros$unchecked_set(_AMPERSAND_form,_AMPERSAND_env,obj,key,val){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = key;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$2 = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$2);
})(),x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_set.cljs$lang$macro = true;

var ret__30035__auto___41016 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var G__41015 = arguments.length;
switch (G__41015) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41018 = arguments.length;
var i__29996__auto___41019 = (0);
while(true){
if((i__29996__auto___41019 < len__29995__auto___41018)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41019]));

var G__41020 = (i__29996__auto___41019 + (1));
i__29996__auto___41019 = G__41020;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq41010){
var G__41011 = cljs.core.first.call(null,seq41010);
var seq41010__$1 = cljs.core.next.call(null,seq41010);
var G__41012 = cljs.core.first.call(null,seq41010__$1);
var seq41010__$2 = cljs.core.next.call(null,seq41010__$1);
var G__41013 = cljs.core.first.call(null,seq41010__$2);
var seq41010__$3 = cljs.core.next.call(null,seq41010__$2);
var G__41014 = cljs.core.first.call(null,seq41010__$3);
var seq41010__$4 = cljs.core.next.call(null,seq41010__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__41011,G__41012,G__41013,G__41014,seq41010__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._PLUS_.cljs$lang$macro = true;

var ret__30035__auto___41021 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.byte$.cljs$lang$macro = true;

var ret__30035__auto___41022 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.short$.cljs$lang$macro = true;

var ret__30035__auto___41023 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.float$.cljs$lang$macro = true;

var ret__30035__auto___41024 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.double$.cljs$lang$macro = true;

var ret__30035__auto___41025 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_byte.cljs$lang$macro = true;

var ret__30035__auto___41026 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_char.cljs$lang$macro = true;

var ret__30035__auto___41027 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_short.cljs$lang$macro = true;

var ret__30035__auto___41028 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_float.cljs$lang$macro = true;

var ret__30035__auto___41029 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_double.cljs$lang$macro = true;

var ret__30035__auto___41033 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41034 = arguments.length;
var i__29996__auto___41035 = (0);
while(true){
if((i__29996__auto___41035 < len__29995__auto___41034)){
args__30002__auto__.push((arguments[i__29996__auto___41035]));

var G__41036 = (i__29996__auto___41035 + (1));
i__29996__auto___41035 = G__41036;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq41030){
var G__41031 = cljs.core.first.call(null,seq41030);
var seq41030__$1 = cljs.core.next.call(null,seq41030);
var G__41032 = cljs.core.first.call(null,seq41030__$1);
var seq41030__$2 = cljs.core.next.call(null,seq41030__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__41031,G__41032,seq41030__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add.cljs$lang$macro = true;

var ret__30035__auto___41040 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41041 = arguments.length;
var i__29996__auto___41042 = (0);
while(true){
if((i__29996__auto___41042 < len__29995__auto___41041)){
args__30002__auto__.push((arguments[i__29996__auto___41042]));

var G__41043 = (i__29996__auto___41042 + (1));
i__29996__auto___41042 = G__41043;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq41037){
var G__41038 = cljs.core.first.call(null,seq41037);
var seq41037__$1 = cljs.core.next.call(null,seq41037);
var G__41039 = cljs.core.first.call(null,seq41037__$1);
var seq41037__$2 = cljs.core.next.call(null,seq41037__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__41038,G__41039,seq41037__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;

var ret__30035__auto___41044 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.unchecked_dec.cljs$lang$macro = true;

var ret__30035__auto___41045 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;

var ret__30035__auto___41049 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41050 = arguments.length;
var i__29996__auto___41051 = (0);
while(true){
if((i__29996__auto___41051 < len__29995__auto___41050)){
args__30002__auto__.push((arguments[i__29996__auto___41051]));

var G__41052 = (i__29996__auto___41051 + (1));
i__29996__auto___41051 = G__41052;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq41046){
var G__41047 = cljs.core.first.call(null,seq41046);
var seq41046__$1 = cljs.core.next.call(null,seq41046);
var G__41048 = cljs.core.first.call(null,seq41046__$1);
var seq41046__$2 = cljs.core.next.call(null,seq41046__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__41047,G__41048,seq41046__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;

var ret__30035__auto___41053 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.unchecked_inc.cljs$lang$macro = true;

var ret__30035__auto___41054 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;

var ret__30035__auto___41058 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41059 = arguments.length;
var i__29996__auto___41060 = (0);
while(true){
if((i__29996__auto___41060 < len__29995__auto___41059)){
args__30002__auto__.push((arguments[i__29996__auto___41060]));

var G__41061 = (i__29996__auto___41060 + (1));
i__29996__auto___41060 = G__41061;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq41055){
var G__41056 = cljs.core.first.call(null,seq41055);
var seq41055__$1 = cljs.core.next.call(null,seq41055);
var G__41057 = cljs.core.first.call(null,seq41055__$1);
var seq41055__$2 = cljs.core.next.call(null,seq41055__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__41056,G__41057,seq41055__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;

var ret__30035__auto___41065 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41066 = arguments.length;
var i__29996__auto___41067 = (0);
while(true){
if((i__29996__auto___41067 < len__29995__auto___41066)){
args__30002__auto__.push((arguments[i__29996__auto___41067]));

var G__41068 = (i__29996__auto___41067 + (1));
i__29996__auto___41067 = G__41068;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq41062){
var G__41063 = cljs.core.first.call(null,seq41062);
var seq41062__$1 = cljs.core.next.call(null,seq41062);
var G__41064 = cljs.core.first.call(null,seq41062__$1);
var seq41062__$2 = cljs.core.next.call(null,seq41062__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__41063,G__41064,seq41062__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;

var ret__30035__auto___41069 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.unchecked_negate.cljs$lang$macro = true;

var ret__30035__auto___41070 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;

var ret__30035__auto___41071 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","mod","cljs.core/mod",1925370196,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;

var ret__30035__auto___41075 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41076 = arguments.length;
var i__29996__auto___41077 = (0);
while(true){
if((i__29996__auto___41077 < len__29995__auto___41076)){
args__30002__auto__.push((arguments[i__29996__auto___41077]));

var G__41078 = (i__29996__auto___41077 + (1));
i__29996__auto___41077 = G__41078;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq41072){
var G__41073 = cljs.core.first.call(null,seq41072);
var seq41072__$1 = cljs.core.next.call(null,seq41072);
var G__41074 = cljs.core.first.call(null,seq41072__$1);
var seq41072__$2 = cljs.core.next.call(null,seq41072__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__41073,G__41074,seq41072__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;

var ret__30035__auto___41082 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41083 = arguments.length;
var i__29996__auto___41084 = (0);
while(true){
if((i__29996__auto___41084 < len__29995__auto___41083)){
args__30002__auto__.push((arguments[i__29996__auto___41084]));

var G__41085 = (i__29996__auto___41084 + (1));
i__29996__auto___41084 = G__41085;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq41079){
var G__41080 = cljs.core.first.call(null,seq41079);
var seq41079__$1 = cljs.core.next.call(null,seq41079);
var G__41081 = cljs.core.first.call(null,seq41079__$1);
var seq41079__$2 = cljs.core.next.call(null,seq41079__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__41080,G__41081,seq41079__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;

var ret__30035__auto___41093 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var G__41092 = arguments.length;
switch (G__41092) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41095 = arguments.length;
var i__29996__auto___41096 = (0);
while(true){
if((i__29996__auto___41096 < len__29995__auto___41095)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41096]));

var G__41097 = (i__29996__auto___41096 + (1));
i__29996__auto___41096 = G__41097;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq41087){
var G__41088 = cljs.core.first.call(null,seq41087);
var seq41087__$1 = cljs.core.next.call(null,seq41087);
var G__41089 = cljs.core.first.call(null,seq41087__$1);
var seq41087__$2 = cljs.core.next.call(null,seq41087__$1);
var G__41090 = cljs.core.first.call(null,seq41087__$2);
var seq41087__$3 = cljs.core.next.call(null,seq41087__$2);
var G__41091 = cljs.core.first.call(null,seq41087__$3);
var seq41087__$4 = cljs.core.next.call(null,seq41087__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__41088,G__41089,G__41090,G__41091,seq41087__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._.cljs$lang$macro = true;

var ret__30035__auto___41105 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var G__41104 = arguments.length;
switch (G__41104) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41107 = arguments.length;
var i__29996__auto___41108 = (0);
while(true){
if((i__29996__auto___41108 < len__29995__auto___41107)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41108]));

var G__41109 = (i__29996__auto___41108 + (1));
i__29996__auto___41108 = G__41109;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq41099){
var G__41100 = cljs.core.first.call(null,seq41099);
var seq41099__$1 = cljs.core.next.call(null,seq41099);
var G__41101 = cljs.core.first.call(null,seq41099__$1);
var seq41099__$2 = cljs.core.next.call(null,seq41099__$1);
var G__41102 = cljs.core.first.call(null,seq41099__$2);
var seq41099__$3 = cljs.core.next.call(null,seq41099__$2);
var G__41103 = cljs.core.first.call(null,seq41099__$3);
var seq41099__$4 = cljs.core.next.call(null,seq41099__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__41100,G__41101,G__41102,G__41103,seq41099__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._STAR_.cljs$lang$macro = true;

var ret__30035__auto___41117 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var G__41116 = arguments.length;
switch (G__41116) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41119 = arguments.length;
var i__29996__auto___41120 = (0);
while(true){
if((i__29996__auto___41120 < len__29995__auto___41119)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41120]));

var G__41121 = (i__29996__auto___41120 + (1));
i__29996__auto___41120 = G__41121;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq41111){
var G__41112 = cljs.core.first.call(null,seq41111);
var seq41111__$1 = cljs.core.next.call(null,seq41111);
var G__41113 = cljs.core.first.call(null,seq41111__$1);
var seq41111__$2 = cljs.core.next.call(null,seq41111__$1);
var G__41114 = cljs.core.first.call(null,seq41111__$2);
var seq41111__$3 = cljs.core.next.call(null,seq41111__$2);
var G__41115 = cljs.core.first.call(null,seq41111__$3);
var seq41111__$4 = cljs.core.next.call(null,seq41111__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__41112,G__41113,G__41114,G__41115,seq41111__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._SLASH_.cljs$lang$macro = true;

var ret__30035__auto___41129 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var G__41128 = arguments.length;
switch (G__41128) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41131 = arguments.length;
var i__29996__auto___41132 = (0);
while(true){
if((i__29996__auto___41132 < len__29995__auto___41131)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41132]));

var G__41133 = (i__29996__auto___41132 + (1));
i__29996__auto___41132 = G__41133;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq41123){
var G__41124 = cljs.core.first.call(null,seq41123);
var seq41123__$1 = cljs.core.next.call(null,seq41123);
var G__41125 = cljs.core.first.call(null,seq41123__$1);
var seq41123__$2 = cljs.core.next.call(null,seq41123__$1);
var G__41126 = cljs.core.first.call(null,seq41123__$2);
var seq41123__$3 = cljs.core.next.call(null,seq41123__$2);
var G__41127 = cljs.core.first.call(null,seq41123__$3);
var seq41123__$4 = cljs.core.next.call(null,seq41123__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__41124,G__41125,G__41126,G__41127,seq41123__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.divide.cljs$lang$macro = true;

var ret__30035__auto___41141 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var G__41140 = arguments.length;
switch (G__41140) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41143 = arguments.length;
var i__29996__auto___41144 = (0);
while(true){
if((i__29996__auto___41144 < len__29995__auto___41143)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41144]));

var G__41145 = (i__29996__auto___41144 + (1));
i__29996__auto___41144 = G__41145;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq41135){
var G__41136 = cljs.core.first.call(null,seq41135);
var seq41135__$1 = cljs.core.next.call(null,seq41135);
var G__41137 = cljs.core.first.call(null,seq41135__$1);
var seq41135__$2 = cljs.core.next.call(null,seq41135__$1);
var G__41138 = cljs.core.first.call(null,seq41135__$2);
var seq41135__$3 = cljs.core.next.call(null,seq41135__$2);
var G__41139 = cljs.core.first.call(null,seq41135__$3);
var seq41135__$4 = cljs.core.next.call(null,seq41135__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__41136,G__41137,G__41138,G__41139,seq41135__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT_.cljs$lang$macro = true;

var ret__30035__auto___41153 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var G__41152 = arguments.length;
switch (G__41152) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41155 = arguments.length;
var i__29996__auto___41156 = (0);
while(true){
if((i__29996__auto___41156 < len__29995__auto___41155)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41156]));

var G__41157 = (i__29996__auto___41156 + (1));
i__29996__auto___41156 = G__41157;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq41147){
var G__41148 = cljs.core.first.call(null,seq41147);
var seq41147__$1 = cljs.core.next.call(null,seq41147);
var G__41149 = cljs.core.first.call(null,seq41147__$1);
var seq41147__$2 = cljs.core.next.call(null,seq41147__$1);
var G__41150 = cljs.core.first.call(null,seq41147__$2);
var seq41147__$3 = cljs.core.next.call(null,seq41147__$2);
var G__41151 = cljs.core.first.call(null,seq41147__$3);
var seq41147__$4 = cljs.core.next.call(null,seq41147__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__41148,G__41149,G__41150,G__41151,seq41147__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT__EQ_.cljs$lang$macro = true;

var ret__30035__auto___41165 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var G__41164 = arguments.length;
switch (G__41164) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41167 = arguments.length;
var i__29996__auto___41168 = (0);
while(true){
if((i__29996__auto___41168 < len__29995__auto___41167)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41168]));

var G__41169 = (i__29996__auto___41168 + (1));
i__29996__auto___41168 = G__41169;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq41159){
var G__41160 = cljs.core.first.call(null,seq41159);
var seq41159__$1 = cljs.core.next.call(null,seq41159);
var G__41161 = cljs.core.first.call(null,seq41159__$1);
var seq41159__$2 = cljs.core.next.call(null,seq41159__$1);
var G__41162 = cljs.core.first.call(null,seq41159__$2);
var seq41159__$3 = cljs.core.next.call(null,seq41159__$2);
var G__41163 = cljs.core.first.call(null,seq41159__$3);
var seq41159__$4 = cljs.core.next.call(null,seq41159__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__41160,G__41161,G__41162,G__41163,seq41159__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT_.cljs$lang$macro = true;

var ret__30035__auto___41177 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var G__41176 = arguments.length;
switch (G__41176) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41179 = arguments.length;
var i__29996__auto___41180 = (0);
while(true){
if((i__29996__auto___41180 < len__29995__auto___41179)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41180]));

var G__41181 = (i__29996__auto___41180 + (1));
i__29996__auto___41180 = G__41181;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq41171){
var G__41172 = cljs.core.first.call(null,seq41171);
var seq41171__$1 = cljs.core.next.call(null,seq41171);
var G__41173 = cljs.core.first.call(null,seq41171__$1);
var seq41171__$2 = cljs.core.next.call(null,seq41171__$1);
var G__41174 = cljs.core.first.call(null,seq41171__$2);
var seq41171__$3 = cljs.core.next.call(null,seq41171__$2);
var G__41175 = cljs.core.first.call(null,seq41171__$3);
var seq41171__$4 = cljs.core.next.call(null,seq41171__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__41172,G__41173,G__41174,G__41175,seq41171__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT__EQ_.cljs$lang$macro = true;

var ret__30035__auto___41189 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var G__41188 = arguments.length;
switch (G__41188) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41191 = arguments.length;
var i__29996__auto___41192 = (0);
while(true){
if((i__29996__auto___41192 < len__29995__auto___41191)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41192]));

var G__41193 = (i__29996__auto___41192 + (1));
i__29996__auto___41192 = G__41193;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq41183){
var G__41184 = cljs.core.first.call(null,seq41183);
var seq41183__$1 = cljs.core.next.call(null,seq41183);
var G__41185 = cljs.core.first.call(null,seq41183__$1);
var seq41183__$2 = cljs.core.next.call(null,seq41183__$1);
var G__41186 = cljs.core.first.call(null,seq41183__$2);
var seq41183__$3 = cljs.core.next.call(null,seq41183__$2);
var G__41187 = cljs.core.first.call(null,seq41183__$3);
var seq41183__$4 = cljs.core.next.call(null,seq41183__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__41184,G__41185,G__41186,G__41187,seq41183__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;

var ret__30035__auto___41194 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.dec.cljs$lang$macro = true;

var ret__30035__auto___41195 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.inc.cljs$lang$macro = true;

var ret__30035__auto___41196 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;

var ret__30035__auto___41197 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;

var ret__30035__auto___41198 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;

var ret__30035__auto___41208 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var G__41207 = arguments.length;
switch (G__41207) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41210 = arguments.length;
var i__29996__auto___41211 = (0);
while(true){
if((i__29996__auto___41211 < len__29995__auto___41210)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41211]));

var G__41212 = (i__29996__auto___41211 + (1));
i__29996__auto___41211 = G__41212;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41199__auto__","x__41199__auto__",883491506,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__41200__auto__","y__41200__auto__",563557467,null)),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41199__auto__","x__41199__auto__",883491506,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__41200__auto__","y__41200__auto__",563557467,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41199__auto__","x__41199__auto__",883491506,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__41200__auto__","y__41200__auto__",563557467,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq41202){
var G__41203 = cljs.core.first.call(null,seq41202);
var seq41202__$1 = cljs.core.next.call(null,seq41202);
var G__41204 = cljs.core.first.call(null,seq41202__$1);
var seq41202__$2 = cljs.core.next.call(null,seq41202__$1);
var G__41205 = cljs.core.first.call(null,seq41202__$2);
var seq41202__$3 = cljs.core.next.call(null,seq41202__$2);
var G__41206 = cljs.core.first.call(null,seq41202__$3);
var seq41202__$4 = cljs.core.next.call(null,seq41202__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__41203,G__41204,G__41205,G__41206,seq41202__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.max.cljs$lang$macro = true;

var ret__30035__auto___41222 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var G__41221 = arguments.length;
switch (G__41221) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41224 = arguments.length;
var i__29996__auto___41225 = (0);
while(true){
if((i__29996__auto___41225 < len__29995__auto___41224)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41225]));

var G__41226 = (i__29996__auto___41225 + (1));
i__29996__auto___41225 = G__41226;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41213__auto__","x__41213__auto__",402533108,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__41214__auto__","y__41214__auto__",215225612,null)),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41213__auto__","x__41213__auto__",402533108,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__41214__auto__","y__41214__auto__",215225612,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41213__auto__","x__41213__auto__",402533108,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__41214__auto__","y__41214__auto__",215225612,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq41216){
var G__41217 = cljs.core.first.call(null,seq41216);
var seq41216__$1 = cljs.core.next.call(null,seq41216);
var G__41218 = cljs.core.first.call(null,seq41216__$1);
var seq41216__$2 = cljs.core.next.call(null,seq41216__$1);
var G__41219 = cljs.core.first.call(null,seq41216__$2);
var seq41216__$3 = cljs.core.next.call(null,seq41216__$2);
var G__41220 = cljs.core.first.call(null,seq41216__$3);
var seq41216__$4 = cljs.core.next.call(null,seq41216__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__41217,G__41218,G__41219,G__41220,seq41216__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.min.cljs$lang$macro = true;

var ret__30035__auto___41227 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_mod.cljs$lang$macro = true;

var ret__30035__auto___41228 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_not.cljs$lang$macro = true;

var ret__30035__auto___41236 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var G__41235 = arguments.length;
switch (G__41235) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41238 = arguments.length;
var i__29996__auto___41239 = (0);
while(true){
if((i__29996__auto___41239 < len__29995__auto___41238)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41239]));

var G__41240 = (i__29996__auto___41239 + (1));
i__29996__auto___41239 = G__41240;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq41230){
var G__41231 = cljs.core.first.call(null,seq41230);
var seq41230__$1 = cljs.core.next.call(null,seq41230);
var G__41232 = cljs.core.first.call(null,seq41230__$1);
var seq41230__$2 = cljs.core.next.call(null,seq41230__$1);
var G__41233 = cljs.core.first.call(null,seq41230__$2);
var seq41230__$3 = cljs.core.next.call(null,seq41230__$2);
var G__41234 = cljs.core.first.call(null,seq41230__$3);
var seq41230__$4 = cljs.core.next.call(null,seq41230__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__41231,G__41232,G__41233,G__41234,seq41230__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and.cljs$lang$macro = true;

var ret__30035__auto___41248 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var G__41247 = arguments.length;
switch (G__41247) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41250 = arguments.length;
var i__29996__auto___41251 = (0);
while(true){
if((i__29996__auto___41251 < len__29995__auto___41250)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41251]));

var G__41252 = (i__29996__auto___41251 + (1));
i__29996__auto___41251 = G__41252;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq41242){
var G__41243 = cljs.core.first.call(null,seq41242);
var seq41242__$1 = cljs.core.next.call(null,seq41242);
var G__41244 = cljs.core.first.call(null,seq41242__$1);
var seq41242__$2 = cljs.core.next.call(null,seq41242__$1);
var G__41245 = cljs.core.first.call(null,seq41242__$2);
var seq41242__$3 = cljs.core.next.call(null,seq41242__$2);
var G__41246 = cljs.core.first.call(null,seq41242__$3);
var seq41242__$4 = cljs.core.next.call(null,seq41242__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__41243,G__41244,G__41245,G__41246,seq41242__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;

var ret__30035__auto___41260 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var G__41259 = arguments.length;
switch (G__41259) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41262 = arguments.length;
var i__29996__auto___41263 = (0);
while(true){
if((i__29996__auto___41263 < len__29995__auto___41262)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41263]));

var G__41264 = (i__29996__auto___41263 + (1));
i__29996__auto___41263 = G__41264;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq41254){
var G__41255 = cljs.core.first.call(null,seq41254);
var seq41254__$1 = cljs.core.next.call(null,seq41254);
var G__41256 = cljs.core.first.call(null,seq41254__$1);
var seq41254__$2 = cljs.core.next.call(null,seq41254__$1);
var G__41257 = cljs.core.first.call(null,seq41254__$2);
var seq41254__$3 = cljs.core.next.call(null,seq41254__$2);
var G__41258 = cljs.core.first.call(null,seq41254__$3);
var seq41254__$4 = cljs.core.next.call(null,seq41254__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__41255,G__41256,G__41257,G__41258,seq41254__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_or.cljs$lang$macro = true;

var ret__30035__auto___41265 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.int$.cljs$lang$macro = true;

var ret__30035__auto___41273 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var G__41272 = arguments.length;
switch (G__41272) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41275 = arguments.length;
var i__29996__auto___41276 = (0);
while(true){
if((i__29996__auto___41276 < len__29995__auto___41275)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41276]));

var G__41277 = (i__29996__auto___41276 + (1));
i__29996__auto___41276 = G__41277;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq41267){
var G__41268 = cljs.core.first.call(null,seq41267);
var seq41267__$1 = cljs.core.next.call(null,seq41267);
var G__41269 = cljs.core.first.call(null,seq41267__$1);
var seq41267__$2 = cljs.core.next.call(null,seq41267__$1);
var G__41270 = cljs.core.first.call(null,seq41267__$2);
var seq41267__$3 = cljs.core.next.call(null,seq41267__$2);
var G__41271 = cljs.core.first.call(null,seq41267__$3);
var seq41267__$4 = cljs.core.next.call(null,seq41267__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__41268,G__41269,G__41270,G__41271,seq41267__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_xor.cljs$lang$macro = true;

var ret__30035__auto___41285 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var G__41284 = arguments.length;
switch (G__41284) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41287 = arguments.length;
var i__29996__auto___41288 = (0);
while(true){
if((i__29996__auto___41288 < len__29995__auto___41287)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41288]));

var G__41289 = (i__29996__auto___41288 + (1));
i__29996__auto___41288 = G__41289;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq41279){
var G__41280 = cljs.core.first.call(null,seq41279);
var seq41279__$1 = cljs.core.next.call(null,seq41279);
var G__41281 = cljs.core.first.call(null,seq41279__$1);
var seq41279__$2 = cljs.core.next.call(null,seq41279__$1);
var G__41282 = cljs.core.first.call(null,seq41279__$2);
var seq41279__$3 = cljs.core.next.call(null,seq41279__$2);
var G__41283 = cljs.core.first.call(null,seq41279__$3);
var seq41279__$4 = cljs.core.next.call(null,seq41279__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__41280,G__41281,G__41282,G__41283,seq41279__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and_not.cljs$lang$macro = true;

var ret__30035__auto___41290 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_clear.cljs$lang$macro = true;

var ret__30035__auto___41291 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_flip.cljs$lang$macro = true;

var ret__30035__auto___41292 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.bit_test.cljs$lang$macro = true;

var ret__30035__auto___41293 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_left.cljs$lang$macro = true;

var ret__30035__auto___41294 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right.cljs$lang$macro = true;

var ret__30035__auto___41295 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;

var ret__30035__auto___41296 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;

var ret__30035__auto___41297 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_set.cljs$lang$macro = true;

var ret__30035__auto___41298 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.mask.cljs$lang$macro = true;

var ret__30035__auto___41299 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__29688__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bitpos.cljs$lang$macro = true;

var ret__30035__auto___41301 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","hash-key is substituted twice","\n","(clojure.core/symbol? hash-key)"].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__41300__auto__","h__41300__auto__",-863977573,null)),(function (){var x__29688__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__41300__auto__","h__41300__auto__",-863977573,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__41300__auto__","h__41300__auto__",-863977573,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__41300__auto__","h__41300__auto__",-863977573,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__41300__auto__","h__41300__auto__",-863977573,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__41300__auto__","h__41300__auto__",-863977573,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.caching_hash.cljs$lang$macro = true;

cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__29688__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41302__auto__","x__41302__auto__",428588799,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41302__auto__","x__41302__auto__",428588799,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
var ret__30035__auto___41310 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41311 = arguments.length;
var i__29996__auto___41312 = (0);
while(true){
if((i__29996__auto___41312 < len__29995__auto___41311)){
args__30002__auto__.push((arguments[i__29996__auto___41312]));

var G__41313 = (i__29996__auto___41312 + (1));
i__29996__auto___41312 = G__41313;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((6) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__30003__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq41303){
var G__41304 = cljs.core.first.call(null,seq41303);
var seq41303__$1 = cljs.core.next.call(null,seq41303);
var G__41305 = cljs.core.first.call(null,seq41303__$1);
var seq41303__$2 = cljs.core.next.call(null,seq41303__$1);
var G__41306 = cljs.core.first.call(null,seq41303__$2);
var seq41303__$3 = cljs.core.next.call(null,seq41303__$2);
var G__41307 = cljs.core.first.call(null,seq41303__$3);
var seq41303__$4 = cljs.core.next.call(null,seq41303__$3);
var G__41308 = cljs.core.first.call(null,seq41303__$4);
var seq41303__$5 = cljs.core.next.call(null,seq41303__$4);
var G__41309 = cljs.core.first.call(null,seq41303__$5);
var seq41303__$6 = cljs.core.next.call(null,seq41303__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__41304,G__41305,G__41306,G__41307,G__41308,G__41309,seq41303__$6);
});

return null;
})()
;
cljs.core$macros.defcurried.cljs$lang$macro = true;

cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = clojure.walk.postwalk.call(null,(function (p1__41314_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__41314_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__41314_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__41314_SHARP_));
} else {
return p1__41314_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
var ret__30035__auto___41319 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__41315,fkv){
var vec__41316 = p__41315;
var f1 = cljs.core.nth.call(null,vec__41316,(0),null);
var k = cljs.core.nth.call(null,vec__41316,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});
cljs.core$macros.rfn.cljs$lang$macro = true;

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
var ret__30035__auto___41323 = (function (){
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (seq f)))))
 *   == ("f" "o" "o"))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41324 = arguments.length;
var i__29996__auto___41325 = (0);
while(true){
if((i__29996__auto___41325 < len__29995__auto___41324)){
args__30002__auto__.push((arguments[i__29996__auto___41325]));

var G__41326 = (i__29996__auto___41325 + (1));
i__29996__auto___41325 = G__41326;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,["t_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__29688__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__29688__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__29688__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29688__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),locals,(function (){var x__29688__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29688__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),locals,(function (){var x__29688__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq41320){
var G__41321 = cljs.core.first.call(null,seq41320);
var seq41320__$1 = cljs.core.next.call(null,seq41320);
var G__41322 = cljs.core.first.call(null,seq41320__$1);
var seq41320__$2 = cljs.core.next.call(null,seq41320__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__41321,G__41322,seq41320__$2);
});

return null;
})()
;
cljs.core$macros.reify.cljs$lang$macro = true;

var ret__30035__auto___41331 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41332 = arguments.length;
var i__29996__auto___41333 = (0);
while(true){
if((i__29996__auto___41333 < len__29995__auto___41332)){
args__30002__auto__.push((arguments[i__29996__auto___41333]));

var G__41334 = (i__29996__auto___41333 + (1));
i__29996__auto___41333 = G__41334;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq41327){
var G__41328 = cljs.core.first.call(null,seq41327);
var seq41327__$1 = cljs.core.next.call(null,seq41327);
var G__41329 = cljs.core.first.call(null,seq41327__$1);
var seq41327__$2 = cljs.core.next.call(null,seq41327__$1);
var G__41330 = cljs.core.first.call(null,seq41327__$2);
var seq41327__$3 = cljs.core.next.call(null,seq41327__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41328,G__41329,G__41330,seq41327__$3);
});

return null;
})()
;
cljs.core$macros.specify_BANG_.cljs$lang$macro = true;

var ret__30035__auto___41339 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41340 = arguments.length;
var i__29996__auto___41341 = (0);
while(true){
if((i__29996__auto___41341 < len__29995__auto___41340)){
args__30002__auto__.push((arguments[i__29996__auto___41341]));

var G__41342 = (i__29996__auto___41341 + (1));
i__29996__auto___41341 = G__41342;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__29688__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq41335){
var G__41336 = cljs.core.first.call(null,seq41335);
var seq41335__$1 = cljs.core.next.call(null,seq41335);
var G__41337 = cljs.core.first.call(null,seq41335__$1);
var seq41335__$2 = cljs.core.next.call(null,seq41335__$1);
var G__41338 = cljs.core.first.call(null,seq41335__$2);
var seq41335__$3 = cljs.core.next.call(null,seq41335__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__41336,G__41337,G__41338,seq41335__$3);
});

return null;
})()
;
cljs.core$macros.specify.cljs$lang$macro = true;

var ret__30035__auto___41343 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_this.cljs$lang$macro = true;

var ret__30035__auto___41348 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41349 = arguments.length;
var i__29996__auto___41350 = (0);
while(true){
if((i__29996__auto___41350 < len__29995__auto___41349)){
args__30002__auto__.push((arguments[i__29996__auto___41350]));

var G__41351 = (i__29996__auto___41350 + (1));
i__29996__auto___41350 = G__41351;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq41344){
var G__41345 = cljs.core.first.call(null,seq41344);
var seq41344__$1 = cljs.core.next.call(null,seq41344);
var G__41346 = cljs.core.first.call(null,seq41344__$1);
var seq41344__$2 = cljs.core.next.call(null,seq41344__$1);
var G__41347 = cljs.core.first.call(null,seq41344__$2);
var seq41344__$3 = cljs.core.next.call(null,seq41344__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__41345,G__41346,G__41347,seq41344__$3);
});

return null;
})()
;
cljs.core$macros.this_as.cljs$lang$macro = true;

cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__4655__auto__ = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__28814__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__28814__auto__)){
var and__28814__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__28814__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__28814__auto____$1;
}
} else {
return and__28814__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__4655__auto__){
return (function (ns){
return cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__4655__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Can't resolve: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),"\n","ret"].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq.call(null,s)){
var G__41352 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__41353 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__41352;
s = G__41353;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__41354){
var vec__41355 = p__41354;
var p = cljs.core.nth.call(null,vec__41355,(0),null);
var sigs = cljs.core.nth.call(null,vec__41355,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__29688__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__41355,p,sigs){
return (function (p__41358){
var vec__41359 = p__41358;
var seq__41360 = cljs.core.seq.call(null,vec__41359);
var first__41361 = cljs.core.first.call(null,seq__41360);
var seq__41360__$1 = cljs.core.next.call(null,seq__41360);
var f = first__41361;
var meths = seq__41360__$1;
var form = vec__41359;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__29688__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});})(psym,pfn_prefix,vec__41355,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__29781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29783__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29784__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29785__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__29781__auto__,prefer_table__29782__auto__,method_cache__29783__auto__,cached_hierarchy__29784__auto__,hierarchy__29785__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__29781__auto__,prefer_table__29782__auto__,method_cache__29783__auto__,cached_hierarchy__29784__auto__,hierarchy__29785__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29785__auto__,method_table__29781__auto__,prefer_table__29782__auto__,method_cache__29783__auto__,cached_hierarchy__29784__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__29688__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__29688__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__29688__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__41362){
var vec__41363 = p__41362;
var seq__41364 = cljs.core.seq.call(null,vec__41363);
var first__41365 = cljs.core.first.call(null,seq__41364);
var seq__41364__$1 = cljs.core.next.call(null,seq__41364);
var vec__41366 = first__41365;
var seq__41367 = cljs.core.seq.call(null,vec__41366);
var first__41368 = cljs.core.first.call(null,seq__41367);
var seq__41367__$1 = cljs.core.next.call(null,seq__41367);
var this$ = first__41368;
var args = seq__41367__$1;
var sig = vec__41366;
var body = seq__41364__$1;
var x__29688__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__41369){
var vec__41370 = p__41369;
var seq__41371 = cljs.core.seq.call(null,vec__41370);
var first__41372 = cljs.core.first.call(null,seq__41371);
var seq__41371__$1 = cljs.core.next.call(null,seq__41371);
var vec__41373 = first__41372;
var seq__41374 = cljs.core.seq.call(null,vec__41373);
var first__41375 = cljs.core.first.call(null,seq__41374);
var seq__41374__$1 = cljs.core.next.call(null,seq__41374);
var this$ = first__41375;
var args = seq__41374__$1;
var sig = vec__41373;
var body = seq__41371__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__29688__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__41376){
var vec__41377 = p__41376;
var seq__41378 = cljs.core.seq.call(null,vec__41377);
var first__41379 = cljs.core.first.call(null,seq__41378);
var seq__41378__$1 = cljs.core.next.call(null,seq__41378);
var vec__41380 = first__41379;
var seq__41381 = cljs.core.seq.call(null,vec__41380);
var first__41382 = cljs.core.first.call(null,seq__41381);
var seq__41381__$1 = cljs.core.next.call(null,seq__41381);
var this$ = first__41382;
var args = seq__41381__$1;
var sig = vec__41380;
var body = seq__41378__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__29688__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__41383){
var vec__41384 = p__41383;
var seq__41385 = cljs.core.seq.call(null,vec__41384);
var first__41386 = cljs.core.first.call(null,seq__41385);
var seq__41385__$1 = cljs.core.next.call(null,seq__41385);
var vec__41387 = first__41386;
var seq__41388 = cljs.core.seq.call(null,vec__41387);
var first__41389 = cljs.core.first.call(null,seq__41388);
var seq__41388__$1 = cljs.core.next.call(null,seq__41388);
var this$ = first__41389;
var args = seq__41388__$1;
var sig = vec__41387;
var body = seq__41385__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,this_SINGLEQUOTE_,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__29688__auto__ = this_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__41391){
var vec__41392 = p__41391;
var seq__41393 = cljs.core.seq.call(null,vec__41392);
var first__41394 = cljs.core.first.call(null,seq__41393);
var seq__41393__$1 = cljs.core.next.call(null,seq__41393);
var f = first__41394;
var meths = seq__41393__$1;
var form = vec__41392;
var vec__41395 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__41395,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__41395,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__41395,f__$1,meths__$1,vec__41392,seq__41393,first__41394,seq__41393__$1,f,meths,form){
return (function (p1__41390_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__41390_SHARP_);
});})(vec__41395,f__$1,meths__$1,vec__41392,seq__41393,first__41394,seq__41393__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__41399){
var vec__41400 = p__41399;
var seq__41401 = cljs.core.seq.call(null,vec__41400);
var first__41402 = cljs.core.first.call(null,seq__41401);
var seq__41401__$1 = cljs.core.next.call(null,seq__41401);
var f = first__41402;
var meths = seq__41401__$1;
var form = vec__41400;
return cljs.core.map.call(null,((function (vec__41400,seq__41401,first__41402,seq__41401__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});})(vec__41400,seq__41401,first__41402,seq__41401__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__41400,seq__41401,first__41402,seq__41401__$1,f,meths,form){
return (function (p1__41398_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__41398_SHARP_);
});})(vec__41400,seq__41401,first__41402,seq__41401__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__41404){
var vec__41405 = p__41404;
var seq__41406 = cljs.core.seq.call(null,vec__41405);
var first__41407 = cljs.core.first.call(null,seq__41406);
var seq__41406__$1 = cljs.core.next.call(null,seq__41406);
var f = first__41407;
var meths = seq__41406__$1;
var form = vec__41405;
var meths__$1 = cljs.core.map.call(null,((function (vec__41405,seq__41406,first__41407,seq__41406__$1,f,meths,form){
return (function (p1__41403_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__41403_SHARP_);
});})(vec__41405,seq__41406,first__41407,seq__41406__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__29688__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__29688__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__29688__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__29688__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__41408){
var vec__41409 = p__41408;
var seq__41410 = cljs.core.seq.call(null,vec__41409);
var first__41411 = cljs.core.first.call(null,seq__41410);
var seq__41410__$1 = cljs.core.next.call(null,seq__41410);
var f = first__41411;
var meths = seq__41410__$1;
var form = vec__41409;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__41409,seq__41410,first__41411,seq__41410__$1,f,meths,form){
return (function (p__41412){
var vec__41413 = p__41412;
var seq__41414 = cljs.core.seq.call(null,vec__41413);
var first__41415 = cljs.core.first.call(null,seq__41414);
var seq__41414__$1 = cljs.core.next.call(null,seq__41414);
var sig = first__41415;
var body = seq__41414__$1;
var meth = vec__41413;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});})(pf,vec__41409,seq__41410,first__41411,seq__41410__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__41416){
var vec__41417 = p__41416;
var p = cljs.core.nth.call(null,vec__41417,(0),null);
var sigs = cljs.core.nth.call(null,vec__41417,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__41417,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__41417,p,sigs))
,sigs));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first.call(null,method);
var __GT_name = cljs.core.comp.call(null,cljs.core.symbol,cljs.core.name);
var vec__41420 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__41420,(0),null);
var sigs = cljs.core.nth.call(null,vec__41420,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_41423 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_41423))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,sigs__$1)){
var sig = cljs.core.first.call(null,sigs__$1);
var c = cljs.core.count.call(null,sig);
if(cljs.core.contains_QMARK_.call(null,seen,c)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"name","name",1843675177),fname], null));
} else {
}

if((cljs.core.not_EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),cljs.core.map.call(null,cljs.core.count,decmeths))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__41424 = cljs.core.next.call(null,sigs__$1);
var G__41425 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__41424;
seen = G__41425;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq.call(null,impls__$1)){
var proto = cljs.core.first.call(null,impls__$1);
var methods$ = cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
var impls__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
if(cljs.core.contains_QMARK_.call(null,protos,proto)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_41429 = cljs.core.PersistentHashSet.EMPTY;
var methods_41430__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_41430__$1)){
var vec__41426_41431 = cljs.core.first.call(null,methods_41430__$1);
var fname_41432 = cljs.core.nth.call(null,vec__41426_41431,(0),null);
var method_41433 = vec__41426_41431;
if(cljs.core.contains_QMARK_.call(null,seen_41429,fname_41432)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_41432], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_41433);

var G__41434 = cljs.core.conj.call(null,seen_41429,fname_41432);
var G__41435 = cljs.core.next.call(null,methods_41430__$1);
seen_41429 = G__41434;
methods_41430__$1 = G__41435;
continue;
} else {
}
break;
}

var G__41436 = cljs.core.conj.call(null,protos,proto);
var G__41437 = impls__$2;
protos = G__41436;
impls__$1 = G__41437;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.call(null,argv,(0),cljs.core.vary_meta.call(null,argv.call(null,(0)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sig),cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.second.call(null,sig)),cljs.core.nnext.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.first.call(null,sig)),cljs.core.next.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sigs),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest.call(null,sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,sig))){
return cljs.core$macros.type_hint_single_arity_sig.call(null,type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs.call(null,type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv.call(null,(function (m,proto,sigs){
return cljs.core.assoc.call(null,m,proto,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
var ret__30035__auto___41446 = (function (){
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y] ...) ...)
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41447 = arguments.length;
var i__29996__auto___41448 = (0);
while(true){
if((i__29996__auto___41448 < len__29995__auto___41447)){
args__30002__auto__.push((arguments[i__29996__auto___41448]));

var G__41449 = (i__29996__auto___41448 + (1));
i__29996__auto___41448 = G__41449;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__41443 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__41443,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__41443,(1),null);
if(cljs.core.truth_((function (){var and__28814__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__28814__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__28814__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__41443,type,assign_impls){
return (function (p1__41438_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__41438_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__41443,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq41439){
var G__41440 = cljs.core.first.call(null,seq41439);
var seq41439__$1 = cljs.core.next.call(null,seq41439);
var G__41441 = cljs.core.first.call(null,seq41439__$1);
var seq41439__$2 = cljs.core.next.call(null,seq41439__$1);
var G__41442 = cljs.core.first.call(null,seq41439__$2);
var seq41439__$3 = cljs.core.next.call(null,seq41439__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__41440,G__41441,G__41442,seq41439__$3);
});

return null;
})()
;
cljs.core$macros.extend_type.cljs$lang$macro = true;

cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var fpp_pbs = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core$macros.fast_path_protocols,cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
var parts = (function (){var parts = cljs.core.group_by.call(null,cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.call(null,((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.call(null,ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.call(null,cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.call(null,cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__41451){
var vec__41452 = p__41451;
var f = cljs.core.nth.call(null,vec__41452,(0),null);
var sigs = cljs.core.nth.call(null,vec__41452,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__41452,f,sigs){
return (function (p1__41450_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__41450_SHARP_),cljs.core.nnext.call(null,p1__41450_SHARP_));
});})(vec__41452,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var G__41456 = arguments.length;
switch (G__41456) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.call(null,type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq.call(null,specs__$1)){
var p = cljs.core.first.call(null,specs__$1);
var ret__$1 = cljs.core.into.call(null,cljs.core.conj.call(null,ret,p),cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by.call(null,cljs.core.first,cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1)))));
var specs__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1));
var G__41458 = ret__$1;
var G__41459 = specs__$2;
ret = G__41458;
specs__$1 = G__41459;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__41460_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__41460_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__29688__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29688__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", no fields vector given."].join('')));
}
});
var ret__30035__auto___41472 = (function (){
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41473 = arguments.length;
var i__29996__auto___41474 = (0);
while(true){
if((i__29996__auto___41474 < len__29995__auto___41473)){
args__30002__auto__.push((arguments[i__29996__auto___41474]));

var G__41475 = (i__29996__auto___41474 + (1));
i__29996__auto___41474 = G__41475;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((4) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30003__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__41469 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__41469,(0),null);
var pmasks = cljs.core.nth.call(null,vec__41469,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__29688__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__29688__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__29688__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__29688__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__29688__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__29688__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41461__auto__","this__41461__auto__",-1356759318,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__41462__auto__","writer__41462__auto__",-1350493212,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__41463__auto__","opt__41463__auto__",741444479,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__41462__auto__","writer__41462__auto__",-1350493212,null)),(function (){var x__29688__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq41464){
var G__41465 = cljs.core.first.call(null,seq41464);
var seq41464__$1 = cljs.core.next.call(null,seq41464);
var G__41466 = cljs.core.first.call(null,seq41464__$1);
var seq41464__$2 = cljs.core.next.call(null,seq41464__$1);
var G__41467 = cljs.core.first.call(null,seq41464__$2);
var seq41464__$3 = cljs.core.next.call(null,seq41464__$2);
var G__41468 = cljs.core.first.call(null,seq41464__$3);
var seq41464__$4 = cljs.core.next.call(null,seq41464__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__41465,G__41466,G__41467,G__41468,seq41464__$4);
});

return null;
})()
;
cljs.core$macros.deftype.cljs$lang$macro = true;

/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__41476_SHARP_){
return cljs.core.with_meta.call(null,p1__41476_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,rname)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,rname)),"{"].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41477__auto__","this__41477__auto__",211908815,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29688__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41478__auto__","this__41478__auto__",-1389608627,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41478__auto__","this__41478__auto__",-1389608627,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__41479__auto__","coll__41479__auto__",711499091,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__29688__auto__ = cljs.core.hash.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,rname))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-unordered-coll","cljs.core/hash-unordered-coll",-639086053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__41479__auto__","coll__41479__auto__",711499091,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),(function (){var this$ = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"this","this",1028897902,null));
var other = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"other","other",-1658642225,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","some?","cljs.core$macros/some?",-253244523,null)),(function (){var x__29688__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__29688__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__29688__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.map.call(null,((function (this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (field){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__29688__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core$macros.to_property.call(null,field);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__29688__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core$macros.to_property.call(null,field);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});})(this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__29688__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__29688__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
})(),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41480__auto__","this__41480__auto__",1311420195,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41481__auto__","this__41481__auto__",-1645974089,null)),(function (){var x__29688__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29688__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41482__auto__","this__41482__auto__",-291280022,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__41483__auto__","k__41483__auto__",-97741272,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41482__auto__","this__41482__auto__",-291280022,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__41483__auto__","k__41483__auto__",-97741272,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41484__auto__","this__41484__auto__",-1338635728,null)),(function (){var x__29688__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__41485__auto__","else__41485__auto__",-1899891351,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__29688__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__29688__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__41485__auto__","else__41485__auto__",-1899891351,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41486__auto__","this__41486__auto__",975355093,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__29688__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41487__auto__","this__41487__auto__",-1753055432,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__41488__auto__","entry__41488__auto__",194108910,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__41488__auto__","entry__41488__auto__",194108910,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41487__auto__","this__41487__auto__",-1753055432,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__41488__auto__","entry__41488__auto__",194108910,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__41488__auto__","entry__41488__auto__",194108910,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41487__auto__","this__41487__auto__",-1753055432,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__41488__auto__","entry__41488__auto__",194108910,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41489__auto__","this__41489__auto__",2134482919,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__41490__auto__","k__41490__auto__",971776475,null)),(function (){var x__29688__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__41490__auto__","k__41490__auto__",971776475,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29688__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__41490__auto__","k__41490__auto__",971776475,null)),(function (){var x__29688__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41491__auto__","this__41491__auto__",-1011845195,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__41492__auto__","k__41492__auto__",-1434985253,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__29688__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__41492__auto__","k__41492__auto__",-1434985253,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-with-meta","cljs.core/-with-meta",-146937782,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__29688__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41491__auto__","this__41491__auto__",-1011845195,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__41492__auto__","k__41492__auto__",-1434985253,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29688__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__41492__auto__","k__41492__auto__",-1434985253,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41494__auto__","this__41494__auto__",771800712,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__41493_SHARP_){
return cljs.core._conj.call(null,(function (){var x__29688__auto__ = cljs.core.keyword.call(null,p1__41493_SHARP_);
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = p1__41493_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__29688__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41496__auto__","this__41496__auto__",-326779020,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__41497__auto__","writer__41497__auto__",1859810250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__41498__auto__","opts__41498__auto__",1417505818,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__41499__auto__","pr-pair__41499__auto__",1882042948,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__41500__auto__","keyval__41500__auto__",-941982836,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__41497__auto__","writer__41497__auto__",1859810250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__41498__auto__","opts__41498__auto__",1417505818,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__41500__auto__","keyval__41500__auto__",-941982836,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__41497__auto__","writer__41497__auto__",1859810250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__41499__auto__","pr-pair__41499__auto__",1882042948,null)),(function (){var x__29688__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__41498__auto__","opts__41498__auto__",1417505818,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__41495_SHARP_){
return cljs.core._conj.call(null,(function (){var x__29688__auto__ = cljs.core.keyword.call(null,p1__41495_SHARP_);
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = p1__41495_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())))], null));
var vec__41501 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__41501,(0),null);
var pmasks = cljs.core.nth.call(null,vec__41501,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__29688__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__29688__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__29688__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29688__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__29688__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
var ret__30035__auto___41511 = (function (){
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41512 = arguments.length;
var i__29996__auto___41513 = (0);
while(true){
if((i__29996__auto___41513 < len__29995__auto___41512)){
args__30002__auto__.push((arguments[i__29996__auto___41513]));

var G__41514 = (i__29996__auto___41513 + (1));
i__29996__auto___41513 = G__41514;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((4) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30003__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__29688__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__29688__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__29688__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41504__auto__","this__41504__auto__",-465398011,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__29688__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__29688__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41504__auto__","this__41504__auto__",-465398011,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__41505__auto__","writer__41505__auto__",746875273,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__41505__auto__","writer__41505__auto__",746875273,null)),(function (){var x__29688__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq41506){
var G__41507 = cljs.core.first.call(null,seq41506);
var seq41506__$1 = cljs.core.next.call(null,seq41506);
var G__41508 = cljs.core.first.call(null,seq41506__$1);
var seq41506__$2 = cljs.core.next.call(null,seq41506__$1);
var G__41509 = cljs.core.first.call(null,seq41506__$2);
var seq41506__$3 = cljs.core.next.call(null,seq41506__$2);
var G__41510 = cljs.core.first.call(null,seq41506__$3);
var seq41506__$4 = cljs.core.next.call(null,seq41506__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__41507,G__41508,G__41509,G__41510,seq41506__$4);
});

return null;
})()
;
cljs.core$macros.defrecord.cljs$lang$macro = true;

var ret__30035__auto___41542 = (function (){
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41543 = arguments.length;
var i__29996__auto___41544 = (0);
while(true){
if((i__29996__auto___41544 < len__29995__auto___41543)){
args__30002__auto__.push((arguments[i__29996__auto___41544]));

var G__41545 = (i__29996__auto___41544 + (1));
i__29996__auto___41544 = G__41545;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__41521 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__41521,(0),null);
var methods$ = cljs.core.nth.call(null,vec__41521,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__41521,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__41521,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__41524 = cljs.core.seq.call(null,methods$);
var chunk__41525 = null;
var count__41526 = (0);
var i__41527 = (0);
while(true){
if((i__41527 < count__41526)){
var vec__41528 = cljs.core._nth.call(null,chunk__41525,i__41527);
var seq__41529 = cljs.core.seq.call(null,vec__41528);
var first__41530 = cljs.core.first.call(null,seq__41529);
var seq__41529__$1 = cljs.core.next.call(null,seq__41529);
var mname = first__41530;
var arities = seq__41529__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__41546 = seq__41524;
var G__41547 = chunk__41525;
var G__41548 = count__41526;
var G__41549 = (i__41527 + (1));
seq__41524 = G__41546;
chunk__41525 = G__41547;
count__41526 = G__41548;
i__41527 = G__41549;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41524);
if(temp__4657__auto__){
var seq__41524__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41524__$1)){
var c__29665__auto__ = cljs.core.chunk_first.call(null,seq__41524__$1);
var G__41550 = cljs.core.chunk_rest.call(null,seq__41524__$1);
var G__41551 = c__29665__auto__;
var G__41552 = cljs.core.count.call(null,c__29665__auto__);
var G__41553 = (0);
seq__41524 = G__41550;
chunk__41525 = G__41551;
count__41526 = G__41552;
i__41527 = G__41553;
continue;
} else {
var vec__41531 = cljs.core.first.call(null,seq__41524__$1);
var seq__41532 = cljs.core.seq.call(null,vec__41531);
var first__41533 = cljs.core.first.call(null,seq__41532);
var seq__41532__$1 = cljs.core.next.call(null,seq__41532);
var mname = first__41533;
var arities = seq__41532__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__41554 = cljs.core.next.call(null,seq__41524__$1);
var G__41555 = null;
var G__41556 = (0);
var G__41557 = (0);
seq__41524 = G__41554;
chunk__41525 = G__41555;
count__41526 = G__41556;
i__41527 = G__41557;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__41521,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__41521,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if((cljs.core.map_QMARK_.call(null,arg)) && (!((new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg) == null)))){
return new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.call(null);

}
}
});})(p,vec__41521,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = sig__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29688__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41515__auto__","x__41515__auto__",310070453,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29688__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29688__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__41516__auto__","m__41516__auto__",26294136,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__29688__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41515__auto__","x__41515__auto__",310070453,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__41516__auto__","m__41516__auto__",26294136,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__41516__auto__","m__41516__auto__",26294136,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__41516__auto__","m__41516__auto__",26294136,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__29688__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__41516__auto__","m__41516__auto__",26294136,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__41516__auto__","m__41516__auto__",26294136,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__29688__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});})(p,vec__41521,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__41521,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__41534){
var vec__41535 = p__41534;
var seq__41536 = cljs.core.seq.call(null,vec__41535);
var first__41537 = cljs.core.first.call(null,seq__41536);
var seq__41536__$1 = cljs.core.next.call(null,seq__41536);
var fname = first__41537;
var sigs = seq__41536__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__41521,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__41521,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__41538){
var vec__41539 = p__41538;
var seq__41540 = cljs.core.seq.call(null,vec__41539);
var first__41541 = cljs.core.first.call(null,seq__41540);
var seq__41540__$1 = cljs.core.next.call(null,seq__41540);
var fname = first__41541;
var sigs = seq__41540__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.call(null,cljs.core.concat,sigs__$1)))?cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var slot = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,fname))].join(''));
var fname__$1 = cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__29688__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__41539,seq__41540,first__41541,seq__41540__$1,fname,sigs,p,vec__41521,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__41539,seq__41540,first__41541,seq__41540__$1,fname,sigs,p,vec__41521,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__41521,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__29688__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq41517){
var G__41518 = cljs.core.first.call(null,seq41517);
var seq41517__$1 = cljs.core.next.call(null,seq41517);
var G__41519 = cljs.core.first.call(null,seq41517__$1);
var seq41517__$2 = cljs.core.next.call(null,seq41517__$1);
var G__41520 = cljs.core.first.call(null,seq41517__$2);
var seq41517__$3 = cljs.core.next.call(null,seq41517__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__41518,G__41519,G__41520,seq41517__$3);
});

return null;
})()
;
cljs.core$macros.defprotocol.cljs$lang$macro = true;

var ret__30035__auto___41561 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__41558 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__41558,(0),null);
var bit = cljs.core.nth.call(null,vec__41558,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__29688__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__29688__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});
cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;

var ret__30035__auto___41565 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__41562 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__41562,(0),null);
var bit = cljs.core.nth.call(null,vec__41562,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29688__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__29688__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__29688__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__29688__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__29688__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__29688__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__29688__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
}
});
cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;

var ret__30035__auto___41569 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41570 = arguments.length;
var i__29996__auto___41571 = (0);
while(true){
if((i__29996__auto___41571 < len__29995__auto___41570)){
args__30002__auto__.push((arguments[i__29996__auto___41571]));

var G__41572 = (i__29996__auto___41571 + (1));
i__29996__auto___41571 = G__41572;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq41566){
var G__41567 = cljs.core.first.call(null,seq41566);
var seq41566__$1 = cljs.core.next.call(null,seq41566);
var G__41568 = cljs.core.first.call(null,seq41566__$1);
var seq41566__$2 = cljs.core.next.call(null,seq41566__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__41567,G__41568,seq41566__$2);
});

return null;
})()
;
cljs.core$macros.lazy_seq.cljs$lang$macro = true;

var ret__30035__auto___41576 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41577 = arguments.length;
var i__29996__auto___41578 = (0);
while(true){
if((i__29996__auto___41578 < len__29995__auto___41577)){
args__30002__auto__.push((arguments[i__29996__auto___41578]));

var G__41579 = (i__29996__auto___41578 + (1));
i__29996__auto___41578 = G__41579;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq41573){
var G__41574 = cljs.core.first.call(null,seq41573);
var seq41573__$1 = cljs.core.next.call(null,seq41573);
var G__41575 = cljs.core.first.call(null,seq41573__$1);
var seq41573__$2 = cljs.core.next.call(null,seq41573__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__41574,G__41575,seq41573__$2);
});

return null;
})()
;
cljs.core$macros.delay.cljs$lang$macro = true;

var ret__30035__auto___41588 = (function (){
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41589 = arguments.length;
var i__29996__auto___41590 = (0);
while(true){
if((i__29996__auto___41590 < len__29995__auto___41589)){
args__30002__auto__.push((arguments[i__29996__auto___41590]));

var G__41591 = (i__29996__auto___41590 + (1));
i__29996__auto___41590 = G__41591;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__41584){
var vec__41585 = p__41584;
var k = cljs.core.nth.call(null,vec__41585,(0),null);
var v = cljs.core.nth.call(null,vec__41585,(1),null);
return cljs.core._conj.call(null,(function (){var x__29688__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq41580){
var G__41581 = cljs.core.first.call(null,seq41580);
var seq41580__$1 = cljs.core.next.call(null,seq41580);
var G__41582 = cljs.core.first.call(null,seq41580__$1);
var seq41580__$2 = cljs.core.next.call(null,seq41580__$1);
var G__41583 = cljs.core.first.call(null,seq41580__$2);
var seq41580__$3 = cljs.core.next.call(null,seq41580__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__41581,G__41582,G__41583,seq41580__$3);
});

return null;
})()
;
cljs.core$macros.with_redefs.cljs$lang$macro = true;

var ret__30035__auto___41596 = (function (){
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41597 = arguments.length;
var i__29996__auto___41598 = (0);
while(true){
if((i__29996__auto___41598 < len__29995__auto___41597)){
args__30002__auto__.push((arguments[i__29996__auto___41598]));

var G__41599 = (i__29996__auto___41598 + (1));
i__29996__auto___41598 = G__41599;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__29688__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq41592){
var G__41593 = cljs.core.first.call(null,seq41592);
var seq41592__$1 = cljs.core.next.call(null,seq41592);
var G__41594 = cljs.core.first.call(null,seq41592__$1);
var seq41592__$2 = cljs.core.next.call(null,seq41592__$1);
var G__41595 = cljs.core.first.call(null,seq41592__$2);
var seq41592__$3 = cljs.core.next.call(null,seq41592__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__41593,G__41594,G__41595,seq41592__$3);
});

return null;
})()
;
cljs.core$macros.binding.cljs$lang$macro = true;

var ret__30035__auto___41612 = (function (){
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41613 = arguments.length;
var i__29996__auto___41614 = (0);
while(true){
if((i__29996__auto___41614 < len__29995__auto___41613)){
args__30002__auto__.push((arguments[i__29996__auto___41614]));

var G__41615 = (i__29996__auto___41614 + (1));
i__29996__auto___41614 = G__41615;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((4) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30003__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__41606 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__41609 = cljs.core.nth.call(null,vec__41606,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__41609,(0),null);
var b = cljs.core.nth.call(null,vec__41609,(1),null);
var c = cljs.core.nth.call(null,vec__41609,(2),null);
var clause = vec__41609;
var more = cljs.core.nth.call(null,vec__41606,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__29688__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a__$1;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = a__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__41600__auto__","p__41600__auto__",1183417937,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = a__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__41600__auto__","p__41600__auto__",1183417937,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq41601){
var G__41602 = cljs.core.first.call(null,seq41601);
var seq41601__$1 = cljs.core.next.call(null,seq41601);
var G__41603 = cljs.core.first.call(null,seq41601__$1);
var seq41601__$2 = cljs.core.next.call(null,seq41601__$1);
var G__41604 = cljs.core.first.call(null,seq41601__$2);
var seq41601__$3 = cljs.core.next.call(null,seq41601__$2);
var G__41605 = cljs.core.first.call(null,seq41601__$3);
var seq41601__$4 = cljs.core.next.call(null,seq41601__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__41602,G__41603,G__41604,G__41605,seq41601__$4);
});

return null;
})()
;
cljs.core$macros.condp.cljs$lang$macro = true;

cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_.call(null,m,test)){
throw (new Error(["Duplicate case test constant '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.call(null,m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__28814__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__28814__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__28814__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
var ret__30035__auto___41636 = (function (){
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41637 = arguments.length;
var i__29996__auto___41638 = (0);
while(true){
if((i__29996__auto___41638 < len__29995__auto___41637)){
args__30002__auto__.push((arguments[i__29996__auto___41638]));

var G__41639 = (i__29996__auto___41638 + (1));
i__29996__auto___41638 = G__41639;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var esym = cljs.core.gensym.call(null);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__29688__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (esym,default$,env){
return (function (m,p__41624){
var vec__41625 = p__41624;
var test = cljs.core.nth.call(null,vec__41625,(0),null);
var expr = cljs.core.nth.call(null,vec__41625,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__41625,test,expr,esym,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__29688__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__41625,test,expr,esym,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__29688__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(esym,default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),((function (esym,default$,env,pairs,tests){
return (function (p1__41616_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__41616_SHARP_);
});})(esym,default$,env,pairs,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__41617_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__41617_SHARP_)){
return cljs.core.vec.call(null,p1__41617_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41617_SHARP_], null);
}
});})(no_default,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__29688__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var kw_str = ((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__41618_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41618_SHARP_)].join('').substring((1));
});})(no_default,esym,default$,env,pairs,tests))
;
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,kw_str,esym,default$,env,pairs,tests){
return (function (p1__41619_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__41619_SHARP_)){
return cljs.core.mapv.call(null,kw_str,p1__41619_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_str.call(null,p1__41619_SHARP_)], null);
}
});})(no_default,kw_str,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__29688__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__29688__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__29688__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (esym,default$,env,pairs,tests){
return (function (p__41632){
var vec__41633 = p__41632;
var m = cljs.core.nth.call(null,vec__41633,(0),null);
var c = cljs.core.nth.call(null,vec__41633,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__29688__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});})(esym,default$,env,pairs,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__29688__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq41620){
var G__41621 = cljs.core.first.call(null,seq41620);
var seq41620__$1 = cljs.core.next.call(null,seq41620);
var G__41622 = cljs.core.first.call(null,seq41620__$1);
var seq41620__$2 = cljs.core.next.call(null,seq41620__$1);
var G__41623 = cljs.core.first.call(null,seq41620__$2);
var seq41620__$3 = cljs.core.next.call(null,seq41620__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__41621,G__41622,G__41623,seq41620__$3);
});

return null;
})()
;
cljs.core$macros.case$.cljs$lang$macro = true;

var ret__30035__auto___41640 = cljs.core$macros.when_assert = (function cljs$core$macros$when_assert(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return x;
} else {
return null;
}
});
cljs.core$macros.when_assert.cljs$lang$macro = true;

var ret__30035__auto___41643 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var G__41642 = arguments.length;
switch (G__41642) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__29688__auto__ = ["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__29688__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__29688__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;

return null;
})()
;
cljs.core$macros.assert.cljs$lang$macro = true;

var ret__30035__auto___41681 = /**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.call(null,(function (groups,p__41650){
var vec__41651 = p__41650;
var k = cljs.core.nth.call(null,vec__41651,(0),null);
var v = cljs.core.nth.call(null,vec__41651,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__41682__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__41682 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__41683__i = 0, G__41683__a = new Array(arguments.length -  0);
while (G__41683__i < G__41683__a.length) {G__41683__a[G__41683__i] = arguments[G__41683__i + 0]; ++G__41683__i;}
  msg = new cljs.core.IndexedSeq(G__41683__a,0,null);
} 
return G__41682__delegate.call(this,msg);};
G__41682.cljs$lang$maxFixedArity = 0;
G__41682.cljs$lang$applyTo = (function (arglist__41684){
var msg = cljs.core.seq(arglist__41684);
return G__41682__delegate(msg);
});
G__41682.cljs$core$IFn$_invoke$arity$variadic = G__41682__delegate;
return G__41682;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__41654){
var vec__41655 = p__41654;
var seq__41656 = cljs.core.seq.call(null,vec__41655);
var first__41657 = cljs.core.first.call(null,seq__41656);
var seq__41656__$1 = cljs.core.next.call(null,seq__41656);
var vec__41658 = first__41657;
var seq__41659 = cljs.core.seq.call(null,vec__41658);
var first__41660 = cljs.core.first.call(null,seq__41659);
var seq__41659__$1 = cljs.core.next.call(null,seq__41659);
var bind = first__41660;
var first__41660__$1 = cljs.core.first.call(null,seq__41659__$1);
var seq__41659__$2 = cljs.core.next.call(null,seq__41659__$1);
var expr = first__41660__$1;
var mod_pairs = seq__41659__$2;
var vec__41661 = seq__41656__$1;
var vec__41664 = cljs.core.nth.call(null,vec__41661,(0),null);
var _ = cljs.core.nth.call(null,vec__41664,(0),null);
var next_expr = cljs.core.nth.call(null,vec__41664,(1),null);
var next_groups = vec__41661;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__41655,seq__41656,first__41657,seq__41656__$1,vec__41658,seq__41659,first__41660,seq__41659__$1,bind,first__41660__$1,seq__41659__$2,expr,mod_pairs,vec__41661,vec__41664,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__41667){
var vec__41668 = p__41667;
var seq__41669 = cljs.core.seq.call(null,vec__41668);
var first__41670 = cljs.core.first.call(null,seq__41669);
var seq__41669__$1 = cljs.core.next.call(null,seq__41669);
var vec__41671 = first__41670;
var k = cljs.core.nth.call(null,vec__41671,(0),null);
var v = cljs.core.nth.call(null,vec__41671,(1),null);
var pair = vec__41671;
var etc = seq__41669__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__29688__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__29688__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__41645__auto__","iterys__41645__auto__",-457720342,null)),(function (){var x__29688__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__41646__auto__","fs__41646__auto__",271186817,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__41645__auto__","iterys__41645__auto__",-457720342,null)),(function (){var x__29688__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__41646__auto__","fs__41646__auto__",271186817,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__41646__auto__","fs__41646__auto__",271186817,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__29688__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__29688__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__29688__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__29688__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__41655,seq__41656,first__41657,seq__41656__$1,vec__41658,seq__41659,first__41660,seq__41659__$1,bind,first__41660__$1,seq__41659__$2,expr,mod_pairs,vec__41661,vec__41664,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__41655,seq__41656,first__41657,seq__41656__$1,vec__41658,seq__41659,first__41660,seq__41659__$1,bind,first__41660__$1,seq__41659__$2,expr,mod_pairs,vec__41661,vec__41664,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__41674){
var vec__41675 = p__41674;
var seq__41676 = cljs.core.seq.call(null,vec__41675);
var first__41677 = cljs.core.first.call(null,seq__41676);
var seq__41676__$1 = cljs.core.next.call(null,seq__41676);
var vec__41678 = first__41677;
var k = cljs.core.nth.call(null,vec__41678,(0),null);
var v = cljs.core.nth.call(null,vec__41678,(1),null);
var pair = vec__41678;
var etc = seq__41676__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__29688__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__29688__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__29688__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__29688__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__41655,seq__41656,first__41657,seq__41656__$1,vec__41658,seq__41659,first__41660,seq__41659__$1,bind,first__41660__$1,seq__41659__$2,expr,mod_pairs,vec__41661,vec__41664,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__29688__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__29688__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__41647__auto__","c__41647__auto__",-1998041738,null)),(function (){var x__29688__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__29688__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/timothy/git/power-turtle/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__41648__auto__","size__41648__auto__",2017411931,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__41647__auto__","c__41647__auto__",-1998041738,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__41648__auto__","size__41648__auto__",2017411931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__29688__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__41648__auto__","size__41648__auto__",2017411931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__41647__auto__","c__41647__auto__",-1998041738,null)),(function (){var x__29688__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__29688__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__29688__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__29688__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__29688__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__41649__auto__","iter__41649__auto__",-1529640434,null)),(function (){var x__29688__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__41649__auto__","iter__41649__auto__",-1529640434,null)),(function (){var x__29688__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.for$.cljs$lang$macro = true;

var ret__30035__auto___41690 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41691 = arguments.length;
var i__29996__auto___41692 = (0);
while(true){
if((i__29996__auto___41692 < len__29995__auto___41691)){
args__30002__auto__.push((arguments[i__29996__auto___41692]));

var G__41693 = (i__29996__auto___41692 + (1));
i__29996__auto___41692 = G__41693;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__41694__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__41694 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__41695__i = 0, G__41695__a = new Array(arguments.length -  0);
while (G__41695__i < G__41695__a.length) {G__41695__a[G__41695__i] = arguments[G__41695__i + 0]; ++G__41695__i;}
  msg = new cljs.core.IndexedSeq(G__41695__a,0,null);
} 
return G__41694__delegate.call(this,msg);};
G__41694.cljs$lang$maxFixedArity = 0;
G__41694.cljs$lang$applyTo = (function (arglist__41696){
var msg = cljs.core.seq(arglist__41696);
return G__41694__delegate(msg);
});
G__41694.cljs$core$IFn$_invoke$arity$variadic = G__41694__delegate;
return G__41694;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not.call(null,exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))], null);
} else {
var k = cljs.core.first.call(null,exprs);
var v = cljs.core.second.call(null,exprs);
var seqsym = cljs.core.gensym.call(null,"seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__29688__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__29688__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29688__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29688__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__29688__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__29688__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29688__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__29688__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__29688__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__29688__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__29688__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__29688__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__41685__auto__","c__41685__auto__",-1991620016,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__29688__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__29688__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__41685__auto__","c__41685__auto__",-1991620016,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__41685__auto__","c__41685__auto__",-1991620016,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__29688__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.call(null,step.call(null,null,cljs.core.seq.call(null,seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq41686){
var G__41687 = cljs.core.first.call(null,seq41686);
var seq41686__$1 = cljs.core.next.call(null,seq41686);
var G__41688 = cljs.core.first.call(null,seq41686__$1);
var seq41686__$2 = cljs.core.next.call(null,seq41686__$1);
var G__41689 = cljs.core.first.call(null,seq41686__$2);
var seq41686__$3 = cljs.core.next.call(null,seq41686__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__41687,G__41688,G__41689,seq41686__$3);
});

return null;
})()
;
cljs.core$macros.doseq.cljs$lang$macro = true;

var ret__30035__auto___41700 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41701 = arguments.length;
var i__29996__auto___41702 = (0);
while(true){
if((i__29996__auto___41702 < len__29995__auto___41701)){
args__30002__auto__.push((arguments[i__29996__auto___41702]));

var G__41703 = (i__29996__auto___41702 + (1));
i__29996__auto___41702 = G__41703;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),"]"].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq41697){
var G__41698 = cljs.core.first.call(null,seq41697);
var seq41697__$1 = cljs.core.next.call(null,seq41697);
var G__41699 = cljs.core.first.call(null,seq41697__$1);
var seq41697__$2 = cljs.core.next.call(null,seq41697__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__41698,G__41699,seq41697__$2);
});

return null;
})()
;
cljs.core$macros.array.cljs$lang$macro = true;

var ret__30035__auto___41714 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var G__41713 = arguments.length;
switch (G__41713) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41716 = arguments.length;
var i__29996__auto___41717 = (0);
while(true){
if((i__29996__auto___41717 < len__29995__auto___41716)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41717]));

var G__41718 = (i__29996__auto___41717 + (1));
i__29996__auto___41717 = G__41718;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30015__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__29688__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__29688__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__41704__auto__","dims__41704__auto__",-393414906,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__41705__auto__","dimarray__41705__auto__",1596920714,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__29688__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__41706__auto__","i__41706__auto__",-550953704,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__41705__auto__","dimarray__41705__auto__",1596920714,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__41705__auto__","dimarray__41705__auto__",1596920714,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__41706__auto__","i__41706__auto__",-550953704,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__41704__auto__","dims__41704__auto__",-393414906,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__41705__auto__","dimarray__41705__auto__",1596920714,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq41708){
var G__41709 = cljs.core.first.call(null,seq41708);
var seq41708__$1 = cljs.core.next.call(null,seq41708);
var G__41710 = cljs.core.first.call(null,seq41708__$1);
var seq41708__$2 = cljs.core.next.call(null,seq41708__$1);
var G__41711 = cljs.core.first.call(null,seq41708__$2);
var seq41708__$3 = cljs.core.next.call(null,seq41708__$2);
var G__41712 = cljs.core.first.call(null,seq41708__$3);
var seq41708__$4 = cljs.core.next.call(null,seq41708__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__41709,G__41710,G__41711,G__41712,seq41708__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.make_array.cljs$lang$macro = true;

var ret__30035__auto___41727 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var G__41725 = arguments.length;
switch (G__41725) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41729 = arguments.length;
var i__29996__auto___41730 = (0);
while(true){
if((i__29996__auto___41730 < len__29995__auto___41729)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41730]));

var G__41731 = (i__29996__auto___41730 + (1));
i__29996__auto___41730 = G__41731;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30015__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1((function (){var _STAR_cljs_warnings_STAR_41726 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,x);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_41726;
}})()))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41719__auto__","x__41719__auto__",-1097770494,null)),(function (){var x__29688__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41719__auto__","x__41719__auto__",-1097770494,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq41721){
var G__41722 = cljs.core.first.call(null,seq41721);
var seq41721__$1 = cljs.core.next.call(null,seq41721);
var G__41723 = cljs.core.first.call(null,seq41721__$1);
var seq41721__$2 = cljs.core.next.call(null,seq41721__$1);
var G__41724 = cljs.core.first.call(null,seq41721__$2);
var seq41721__$3 = cljs.core.next.call(null,seq41721__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__41722,G__41723,G__41724,seq41721__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.list.cljs$lang$macro = true;

var ret__30035__auto___41737 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var G__41736 = arguments.length;
switch (G__41736) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41739 = arguments.length;
var i__29996__auto___41740 = (0);
while(true){
if((i__29996__auto___41740 < len__29995__auto___41739)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41740]));

var G__41741 = (i__29996__auto___41740 + (1));
i__29996__auto___41740 = G__41741;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30015__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29688__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq41733){
var G__41734 = cljs.core.first.call(null,seq41733);
var seq41733__$1 = cljs.core.next.call(null,seq41733);
var G__41735 = cljs.core.first.call(null,seq41733__$1);
var seq41733__$2 = cljs.core.next.call(null,seq41733__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__41734,G__41735,seq41733__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.vector.cljs$lang$macro = true;

var ret__30035__auto___41751 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var G__41748 = arguments.length;
switch (G__41748) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41753 = arguments.length;
var i__29996__auto___41754 = (0);
while(true){
if((i__29996__auto___41754 < len__29995__auto___41753)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41754]));

var G__41755 = (i__29996__auto___41754 + (1));
i__29996__auto___41754 = G__41755;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30015__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__41742_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__41742_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__41743_SHARP_){
var _STAR_cljs_warnings_STAR_41750 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__41743_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_41750;
}});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29688__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq41745){
var G__41746 = cljs.core.first.call(null,seq41745);
var seq41745__$1 = cljs.core.next.call(null,seq41745);
var G__41747 = cljs.core.first.call(null,seq41745__$1);
var seq41745__$2 = cljs.core.next.call(null,seq41745__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__41746,G__41747,seq41745__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.array_map.cljs$lang$macro = true;

var ret__30035__auto___41761 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var G__41760 = arguments.length;
switch (G__41760) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41763 = arguments.length;
var i__29996__auto___41764 = (0);
while(true){
if((i__29996__auto___41764 < len__29995__auto___41763)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41764]));

var G__41765 = (i__29996__auto___41764 + (1));
i__29996__auto___41764 = G__41765;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30015__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq41757){
var G__41758 = cljs.core.first.call(null,seq41757);
var seq41757__$1 = cljs.core.next.call(null,seq41757);
var G__41759 = cljs.core.first.call(null,seq41757__$1);
var seq41757__$2 = cljs.core.next.call(null,seq41757__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__41758,G__41759,seq41757__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_map.cljs$lang$macro = true;

var ret__30035__auto___41775 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var G__41772 = arguments.length;
switch (G__41772) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__30014__auto__ = [];
var len__29995__auto___41777 = arguments.length;
var i__29996__auto___41778 = (0);
while(true){
if((i__29996__auto___41778 < len__29995__auto___41777)){
args_arr__30014__auto__.push((arguments[i__29996__auto___41778]));

var G__41779 = (i__29996__auto___41778 + (1));
i__29996__auto___41778 = G__41779;
continue;
} else {
}
break;
}

var argseq__30015__auto__ = (new cljs.core.IndexedSeq(args_arr__30014__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30015__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__41766_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__41766_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__41767_SHARP_){
var _STAR_cljs_warnings_STAR_41774 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__41767_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_41774;
}}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29688__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq41769){
var G__41770 = cljs.core.first.call(null,seq41769);
var seq41769__$1 = cljs.core.next.call(null,seq41769);
var G__41771 = cljs.core.first.call(null,seq41769__$1);
var seq41769__$2 = cljs.core.next.call(null,seq41769__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__41770,G__41771,seq41769__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_set.cljs$lang$macro = true;

cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),"}"].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
var ret__30035__auto___41795 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41796 = arguments.length;
var i__29996__auto___41797 = (0);
while(true){
if((i__29996__auto___41797 < len__29995__auto___41796)){
args__30002__auto__.push((arguments[i__29996__auto___41797]));

var G__41798 = (i__29996__auto___41797 + (1));
i__29996__auto___41797 = G__41798;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__41783){
var vec__41784 = p__41783;
var k = cljs.core.nth.call(null,vec__41784,(0),null);
var _ = cljs.core.nth.call(null,vec__41784,(1),null);
return f.call(null,k);
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),rest)));
var sym_pairs = filter_on_keys.call(null,cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,sym_or_str_QMARK_),cljs.core.keys.call(null,kvs)),cljs.core.repeatedly.call(null,cljs.core.gensym));
var obj = cljs.core.gensym.call(null,"obj");
if(cljs.core.empty_QMARK_.call(null,rest)){
return cljs.core$macros.js_obj_STAR_.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__29688__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__41787){
var vec__41788 = p__41787;
var k = cljs.core.nth.call(null,vec__41788,(0),null);
var v = cljs.core.nth.call(null,vec__41788,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__29688__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__41791){
var vec__41792 = p__41791;
var k = cljs.core.nth.call(null,vec__41792,(0),null);
var v = cljs.core.nth.call(null,vec__41792,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__29688__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__29688__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq41780){
var G__41781 = cljs.core.first.call(null,seq41780);
var seq41780__$1 = cljs.core.next.call(null,seq41780);
var G__41782 = cljs.core.first.call(null,seq41780__$1);
var seq41780__$2 = cljs.core.next.call(null,seq41780__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__41781,G__41782,seq41780__$2);
});

return null;
})()
;
cljs.core$macros.js_obj.cljs$lang$macro = true;

var ret__30035__auto___41799 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a__$1){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = a__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});
cljs.core$macros.alength.cljs$lang$macro = true;

var ret__30035__auto___41801 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a__$1,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__41800__auto__","a__41800__auto__",289959801,null)),(function (){var x__29688__auto__ = a__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__41800__auto__","a__41800__auto__",289959801,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__29688__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__41800__auto__","a__41800__auto__",289959801,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__29688__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__29688__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.amap.cljs$lang$macro = true;

var ret__30035__auto___41803 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a__$1,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__41802__auto__","a__41802__auto__",508792479,null)),(function (){var x__29688__auto__ = a__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__29688__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__29688__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__41802__auto__","a__41802__auto__",508792479,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__29688__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.areduce.cljs$lang$macro = true;

var ret__30035__auto___41809 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41810 = arguments.length;
var i__29996__auto___41811 = (0);
while(true){
if((i__29996__auto___41811 < len__29995__auto___41810)){
args__30002__auto__.push((arguments[i__29996__auto___41811]));

var G__41812 = (i__29996__auto___41811 + (1));
i__29996__auto___41811 = G__41812;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__41804__auto__","n__41804__auto__",-915279279,null)),(function (){var x__29688__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__29688__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__41804__auto__","n__41804__auto__",-915279279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body,(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__29688__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq41805){
var G__41806 = cljs.core.first.call(null,seq41805);
var seq41805__$1 = cljs.core.next.call(null,seq41805);
var G__41807 = cljs.core.first.call(null,seq41805__$1);
var seq41805__$2 = cljs.core.next.call(null,seq41805__$1);
var G__41808 = cljs.core.first.call(null,seq41805__$2);
var seq41805__$3 = cljs.core.next.call(null,seq41805__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__41806,G__41807,G__41808,seq41805__$3);
});

return null;
})()
;
cljs.core$macros.dotimes.cljs$lang$macro = true;

/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41816 = arguments.length;
var i__29996__auto___41817 = (0);
while(true){
if((i__29996__auto___41817 < len__29995__auto___41816)){
args__30002__auto__.push((arguments[i__29996__auto___41817]));

var G__41818 = (i__29996__auto___41817 + (1));
i__29996__auto___41817 = G__41818;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((1) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30003__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__41813_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41813_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq41814){
var G__41815 = cljs.core.first.call(null,seq41814);
var seq41814__$1 = cljs.core.next.call(null,seq41814);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__41815,seq41814__$1);
});

var ret__30035__auto___41828 = (function (){
/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41829 = arguments.length;
var i__29996__auto___41830 = (0);
while(true){
if((i__29996__auto___41830 < len__29995__auto___41829)){
args__30002__auto__.push((arguments[i__29996__auto___41830]));

var G__41831 = (i__29996__auto___41830 + (1));
i__29996__auto___41830 = G__41831;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.first.call(null,options):null);
var options__$1 = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.next.call(null,options):options);
var m = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.first.call(null,options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.next.call(null,options__$1):options__$1);
var dispatch_fn = cljs.core.first.call(null,options__$2);
var options__$3 = cljs.core.next.call(null,options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta.call(null,mm_name))?cljs.core.conj.call(null,cljs.core.meta.call(null,mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.call(null,cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__29688__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__41819__auto__","method-table__41819__auto__",2077497207,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__29688__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__41820__auto__","prefer-table__41820__auto__",-693180494,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__29688__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__41821__auto__","method-cache__41821__auto__",-350884257,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__29688__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__41822__auto__","cached-hierarchy__41822__auto__",1563788707,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__29688__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__41823__auto__","hierarchy__41823__auto__",-1779376279,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__29688__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__29688__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__41823__auto__","hierarchy__41823__auto__",-1779376279,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__41819__auto__","method-table__41819__auto__",2077497207,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__41820__auto__","prefer-table__41820__auto__",-693180494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__41821__auto__","method-cache__41821__auto__",-350884257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__41822__auto__","cached-hierarchy__41822__auto__",1563788707,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq41824){
var G__41825 = cljs.core.first.call(null,seq41824);
var seq41824__$1 = cljs.core.next.call(null,seq41824);
var G__41826 = cljs.core.first.call(null,seq41824__$1);
var seq41824__$2 = cljs.core.next.call(null,seq41824__$1);
var G__41827 = cljs.core.first.call(null,seq41824__$2);
var seq41824__$3 = cljs.core.next.call(null,seq41824__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__41825,G__41826,G__41827,seq41824__$3);
});

return null;
})()
;
cljs.core$macros.defmulti.cljs$lang$macro = true;

var ret__30035__auto___41837 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41838 = arguments.length;
var i__29996__auto___41839 = (0);
while(true){
if((i__29996__auto___41839 < len__29995__auto___41838)){
args__30002__auto__.push((arguments[i__29996__auto___41839]));

var G__41840 = (i__29996__auto___41839 + (1));
i__29996__auto___41839 = G__41840;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((4) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30003__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__29688__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq41832){
var G__41833 = cljs.core.first.call(null,seq41832);
var seq41832__$1 = cljs.core.next.call(null,seq41832);
var G__41834 = cljs.core.first.call(null,seq41832__$1);
var seq41832__$2 = cljs.core.next.call(null,seq41832__$1);
var G__41835 = cljs.core.first.call(null,seq41832__$2);
var seq41832__$3 = cljs.core.next.call(null,seq41832__$2);
var G__41836 = cljs.core.first.call(null,seq41832__$3);
var seq41832__$4 = cljs.core.next.call(null,seq41832__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__41833,G__41834,G__41835,G__41836,seq41832__$4);
});

return null;
})()
;
cljs.core$macros.defmethod.cljs$lang$macro = true;

var ret__30035__auto___41843 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__41841__auto__","start__41841__auto__",-49694252,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__41842__auto__","ret__41842__auto__",1891016527,null)),(function (){var x__29688__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__41841__auto__","start__41841__auto__",-49694252,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__41842__auto__","ret__41842__auto__",1891016527,null)))));
});
cljs.core$macros.time.cljs$lang$macro = true;

var ret__30035__auto___41858 = (function (){
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41859 = arguments.length;
var i__29996__auto___41860 = (0);
while(true){
if((i__29996__auto___41860 < len__29995__auto___41859)){
args__30002__auto__.push((arguments[i__29996__auto___41860]));

var G__41861 = (i__29996__auto___41860 + (1));
i__29996__auto___41860 = G__41861;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((5) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__30003__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__41855){
var map__41856 = p__41855;
var map__41856__$1 = ((((!((map__41856 == null)))?((((map__41856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41856):map__41856);
var print_fn = cljs.core.get.call(null,map__41856__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__41844__auto__","start__41844__auto__",822701515,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__41845__auto__","ret__41845__auto__",987538281,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___41846__auto__","___41846__auto__",-349451273,null)),(function (){var x__29688__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__41847__auto__","end__41847__auto__",-1385307619,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__41848__auto__","elapsed__41848__auto__",-1933475289,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__41847__auto__","end__41847__auto__",-1385307619,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__41844__auto__","start__41844__auto__",822701515,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__29688__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__29688__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__29688__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__41848__auto__","elapsed__41848__auto__",-1933475289,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq41849){
var G__41850 = cljs.core.first.call(null,seq41849);
var seq41849__$1 = cljs.core.next.call(null,seq41849);
var G__41851 = cljs.core.first.call(null,seq41849__$1);
var seq41849__$2 = cljs.core.next.call(null,seq41849__$1);
var G__41852 = cljs.core.first.call(null,seq41849__$2);
var seq41849__$3 = cljs.core.next.call(null,seq41849__$2);
var G__41853 = cljs.core.first.call(null,seq41849__$3);
var seq41849__$4 = cljs.core.next.call(null,seq41849__$3);
var G__41854 = cljs.core.first.call(null,seq41849__$4);
var seq41849__$5 = cljs.core.next.call(null,seq41849__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__41850,G__41851,G__41852,G__41853,G__41854,seq41849__$5);
});

return null;
})()
;
cljs.core$macros.simple_benchmark.cljs$lang$macro = true;

cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var G__41863 = arguments.length;
switch (G__41863) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__29688__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

var ret__30035__auto___41865 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.gen_apply_to.cljs$lang$macro = true;

cljs.core$macros.gen_apply_to_simple_helper = (function cljs$core$macros$gen_apply_to_simple_helper(f,num_args,args){
var new_arg_sym = cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var proto_name = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1((num_args + (1)))].join('');
var proto_prop = cljs.core.symbol.call(null,[".-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var proto_inv = cljs.core.symbol.call(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var next_sym = cljs.core.symbol.call(null,["next_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var all_args = cljs.core.mapv.call(null,((function (new_arg_sym,proto_name,proto_prop,proto_inv,next_sym){
return (function (p1__41866_SHARP_){
return cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41866_SHARP_)].join(''));
});})(new_arg_sym,proto_name,proto_prop,proto_inv,next_sym))
,cljs.core.range.call(null,(num_args + (1))));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = new_arg_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),(function (){var x__29688__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__29688__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29688__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = proto_prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = proto_inv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".call",".call",1496874263,null)),(function (){var x__29688__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = ((((19) <= num_args))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__41867__auto__","arr__41867__auto__",-273616319,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null)),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__41868__auto__","s__41868__auto__",279364984,null)),(function (){var x__29688__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__41868__auto__","s__41868__auto__",279364984,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__41867__auto__","arr__41867__auto__",-273616319,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__41868__auto__","s__41868__auto__",279364984,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__41868__auto__","s__41868__auto__",279364984,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__29688__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__41867__auto__","arr__41867__auto__",-273616319,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))):cljs.core$macros.gen_apply_to_simple_helper.call(null,f,(num_args + (1)),next_sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
var ret__30035__auto___41869 = cljs.core$macros.gen_apply_to_simple = (function cljs$core$macros$gen_apply_to_simple(_AMPERSAND_form,_AMPERSAND_env,f,num_args,args){
return cljs.core$macros.gen_apply_to_simple_helper.call(null,f,num_args,args);
});
cljs.core$macros.gen_apply_to_simple.cljs$lang$macro = true;

var ret__30035__auto___41875 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41876 = arguments.length;
var i__29996__auto___41877 = (0);
while(true){
if((i__29996__auto___41877 < len__29995__auto___41876)){
args__30002__auto__.push((arguments[i__29996__auto___41877]));

var G__41878 = (i__29996__auto___41877 + (1));
i__29996__auto___41877 = G__41878;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__41870__auto__","sb__41870__auto__",-1243197827,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41871__auto__","x__41871__auto__",67794785,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__41870__auto__","sb__41870__auto__",-1243197827,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41871__auto__","x__41871__auto__",67794785,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__41870__auto__","sb__41870__auto__",-1243197827,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq41872){
var G__41873 = cljs.core.first.call(null,seq41872);
var seq41872__$1 = cljs.core.next.call(null,seq41872);
var G__41874 = cljs.core.first.call(null,seq41872__$1);
var seq41872__$2 = cljs.core.next.call(null,seq41872__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__41873,G__41874,seq41872__$2);
});

return null;
})()
;
cljs.core$macros.with_out_str.cljs$lang$macro = true;

var ret__30035__auto___41883 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41884 = arguments.length;
var i__29996__auto___41885 = (0);
while(true){
if((i__29996__auto___41885 < len__29995__auto___41884)){
args__30002__auto__.push((arguments[i__29996__auto___41885]));

var G__41886 = (i__29996__auto___41885 + (1));
i__29996__auto___41885 = G__41886;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__41879_SHARP_){
return cljs.core._conj.call(null,(function (){var x__29688__auto__ = p1__41879_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq41880){
var G__41881 = cljs.core.first.call(null,seq41880);
var seq41880__$1 = cljs.core.next.call(null,seq41880);
var G__41882 = cljs.core.first.call(null,seq41880__$1);
var seq41880__$2 = cljs.core.next.call(null,seq41880__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__41881,G__41882,seq41880__$2);
});

return null;
})()
;
cljs.core$macros.lazy_cat.cljs$lang$macro = true;

var ret__30035__auto___41887 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29688__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_str.cljs$lang$macro = true;

var ret__30035__auto___41889 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__29688__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41888__auto__","this__41888__auto__",2107062402,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41888__auto__","this__41888__auto__",2107062402,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.es6_iterable.cljs$lang$macro = true;

var ret__30035__auto___41906 = /**
 * Returns a map of the public intern mappings for the namespace.
 */
cljs.core$macros.ns_publics = (function cljs$core$macros$ns_publics(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-publics must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__29688__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__41898){
var vec__41899 = p__41898;
var sym = cljs.core.nth.call(null,vec__41899,(0),null);
var _ = cljs.core.nth.call(null,vec__41899,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__29688__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__29688__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
});})(ns))
,cljs.core.filter.call(null,((function (ns){
return (function (p__41902){
var vec__41903 = p__41902;
var _ = cljs.core.nth.call(null,vec__41903,(0),null);
var info = cljs.core.nth.call(null,vec__41903,(1),null);
return cljs.core.not.call(null,new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(info)));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null))))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.ns_publics.cljs$lang$macro = true;

var ret__30035__auto___41915 = /**
 * Returns a map of the import mappings for the namespace.
 */
cljs.core$macros.ns_imports = (function cljs$core$macros$ns_imports(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-imports must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__29688__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__41911){
var vec__41912 = p__41911;
var ctor = cljs.core.nth.call(null,vec__41912,(0),null);
var qualified_ctor = cljs.core.nth.call(null,vec__41912,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__29688__auto__ = cljs.core.name.call(null,ctor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.symbol.call(null,qualified_ctor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"imports","imports",-1249933394)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.ns_imports.cljs$lang$macro = true;

var ret__30035__auto___41924 = /**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-interns must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__29688__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__41920){
var vec__41921 = p__41920;
var sym = cljs.core.nth.call(null,vec__41921,(0),null);
var _ = cljs.core.nth.call(null,vec__41921,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__29688__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__29688__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.ns_interns.cljs$lang$macro = true;

var ret__30035__auto___41925 = /**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,quoted_ns,quoted_sym){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol)) && (cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_sym),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_sym) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Arguments to ns-unmap must be quoted symbols","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)) (seq? quoted-sym) (= (first quoted-sym) (quote quote)) (core/symbol? (second quoted-sym)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
var sym = cljs.core.second.call(null,quoted_sym);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__29688__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.ns_unmap.cljs$lang$macro = true;

var ret__30035__auto___41931 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41932 = arguments.length;
var i__29996__auto___41933 = (0);
while(true){
if((i__29996__auto___41933 < len__29995__auto___41932)){
args__30002__auto__.push((arguments[i__29996__auto___41933]));

var G__41934 = (i__29996__auto___41933 + (1));
i__29996__auto___41933 = G__41934;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((4) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30003__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__29688__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__29688__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq41926){
var G__41927 = cljs.core.first.call(null,seq41926);
var seq41926__$1 = cljs.core.next.call(null,seq41926);
var G__41928 = cljs.core.first.call(null,seq41926__$1);
var seq41926__$2 = cljs.core.next.call(null,seq41926__$1);
var G__41929 = cljs.core.first.call(null,seq41926__$2);
var seq41926__$3 = cljs.core.next.call(null,seq41926__$2);
var G__41930 = cljs.core.first.call(null,seq41926__$3);
var seq41926__$4 = cljs.core.next.call(null,seq41926__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41927,G__41928,G__41929,G__41930,seq41926__$4);
});

return null;
})()
;
cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;

var ret__30035__auto___41939 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41940 = arguments.length;
var i__29996__auto___41941 = (0);
while(true){
if((i__29996__auto___41941 < len__29995__auto___41940)){
args__30002__auto__.push((arguments[i__29996__auto___41941]));

var G__41942 = (i__29996__auto___41941 + (1));
i__29996__auto___41941 = G__41942;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq41935){
var G__41936 = cljs.core.first.call(null,seq41935);
var seq41935__$1 = cljs.core.next.call(null,seq41935);
var G__41937 = cljs.core.first.call(null,seq41935__$1);
var seq41935__$2 = cljs.core.next.call(null,seq41935__$1);
var G__41938 = cljs.core.first.call(null,seq41935__$2);
var seq41935__$3 = cljs.core.next.call(null,seq41935__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__41936,G__41937,G__41938,seq41935__$3);
});

return null;
})()
;
cljs.core$macros.locking.cljs$lang$macro = true;

var ret__30035__auto___41946 = (function (){
/**
 * Loads libs, skipping any that are already loaded. Each argument is
 *   either a libspec that identifies a lib or a flag that modifies how all the identified
 *   libs are loaded. Use :require in the ns macro in preference to calling this
 *   directly.
 * 
 *   Libs
 * 
 *   A 'lib' is a named set of resources in classpath whose contents define a
 *   library of ClojureScript code. Lib names are symbols and each lib is associated
 *   with a ClojureScript namespace. A lib's name also locates its root directory
 *   within classpath using Java's package name to classpath-relative path mapping.
 *   All resources in a lib should be contained in the directory structure under its
 *   root directory. All definitions a lib makes should be in its associated namespace.
 * 
 *   'require loads a lib by loading its root resource. The root resource path
 *   is derived from the lib name in the following manner:
 *   Consider a lib named by the symbol 'x.y.z; it has the root directory
 *   <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root
 *   resource should contain code to create the lib's namespace (usually by using
 *   the ns macro) and load any additional lib resources.
 * 
 *   Libspecs
 * 
 *   A libspec is a lib name or a vector containing a lib name followed by
 *   options expressed as sequential keywords and arguments.
 * 
 *   Recognized options:
 *   :as takes a symbol as its argument and makes that symbol an alias to the
 *  lib's namespace in the current namespace.
 *   :refer takes a list of symbols to refer from the namespace.
 *   :refer-macros takes a list of macro symbols to refer from the namespace.
 *   :include-macros true causes macros from the namespace to be required.
 *   :rename specifies a map from referred var names to different
 *  symbols (and can be used to prevent clashes)
 * 
 * 
 *   Flags
 * 
 *   A flag is a keyword.
 *   Recognized flags: :reload, :reload-all, :verbose
 *   :reload forces loading of all the identified libs even if they are
 *  already loaded
 *   :reload-all implies :reload and also forces loading of all libs that the
 *  identified libs directly or indirectly load via require or use
 *   :verbose triggers printing information about each load, alias, and refer
 * 
 *   Example:
 * 
 *   The following would load the library clojure.string :as string.
 * 
 *   (require '[clojure.string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41947 = arguments.length;
var i__29996__auto___41948 = (0);
while(true){
if((i__29996__auto___41948 < len__29995__auto___41947)){
args__30002__auto__.push((arguments[i__29996__auto___41948]));

var G__41949 = (i__29996__auto___41948 + (1));
i__29996__auto___41948 = G__41949;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__29688__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq41943){
var G__41944 = cljs.core.first.call(null,seq41943);
var seq41943__$1 = cljs.core.next.call(null,seq41943);
var G__41945 = cljs.core.first.call(null,seq41943__$1);
var seq41943__$2 = cljs.core.next.call(null,seq41943__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__41944,G__41945,seq41943__$2);
});

return null;
})()
;
cljs.core$macros.require.cljs$lang$macro = true;

var ret__30035__auto___41953 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41954 = arguments.length;
var i__29996__auto___41955 = (0);
while(true){
if((i__29996__auto___41955 < len__29995__auto___41954)){
args__30002__auto__.push((arguments[i__29996__auto___41955]));

var G__41956 = (i__29996__auto___41955 + (1));
i__29996__auto___41955 = G__41956;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__29688__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq41950){
var G__41951 = cljs.core.first.call(null,seq41950);
var seq41950__$1 = cljs.core.next.call(null,seq41950);
var G__41952 = cljs.core.first.call(null,seq41950__$1);
var seq41950__$2 = cljs.core.next.call(null,seq41950__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__41951,G__41952,seq41950__$2);
});

return null;
})()
;
cljs.core$macros.require_macros.cljs$lang$macro = true;

var ret__30035__auto___41960 = (function (){
/**
 * Like require, but referring vars specified by the mandatory
 *   :only option.
 * 
 *   Example:
 * 
 *   The following would load the library clojure.set while referring
 *   the intersection var.
 * 
 *   (use '[clojure.set :only [intersection]])
 */
cljs.core$macros.use = (function cljs$core$macros$use(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41961 = arguments.length;
var i__29996__auto___41962 = (0);
while(true){
if((i__29996__auto___41962 < len__29995__auto___41961)){
args__30002__auto__.push((arguments[i__29996__auto___41962]));

var G__41963 = (i__29996__auto___41962 + (1));
i__29996__auto___41962 = G__41963;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__29688__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq41957){
var G__41958 = cljs.core.first.call(null,seq41957);
var seq41957__$1 = cljs.core.next.call(null,seq41957);
var G__41959 = cljs.core.first.call(null,seq41957__$1);
var seq41957__$2 = cljs.core.next.call(null,seq41957__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__41958,G__41959,seq41957__$2);
});

return null;
})()
;
cljs.core$macros.use.cljs$lang$macro = true;

var ret__30035__auto___41967 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41968 = arguments.length;
var i__29996__auto___41969 = (0);
while(true){
if((i__29996__auto___41969 < len__29995__auto___41968)){
args__30002__auto__.push((arguments[i__29996__auto___41969]));

var G__41970 = (i__29996__auto___41969 + (1));
i__29996__auto___41969 = G__41970;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__29688__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq41964){
var G__41965 = cljs.core.first.call(null,seq41964);
var seq41964__$1 = cljs.core.next.call(null,seq41964);
var G__41966 = cljs.core.first.call(null,seq41964__$1);
var seq41964__$2 = cljs.core.next.call(null,seq41964__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__41965,G__41966,seq41964__$2);
});

return null;
})()
;
cljs.core$macros.use_macros.cljs$lang$macro = true;

var ret__30035__auto___41974 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41975 = arguments.length;
var i__29996__auto___41976 = (0);
while(true){
if((i__29996__auto___41976 < len__29995__auto___41975)){
args__30002__auto__.push((arguments[i__29996__auto___41976]));

var G__41977 = (i__29996__auto___41976 + (1));
i__29996__auto___41976 = G__41977;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__29688__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq41971){
var G__41972 = cljs.core.first.call(null,seq41971);
var seq41971__$1 = cljs.core.next.call(null,seq41971);
var G__41973 = cljs.core.first.call(null,seq41971__$1);
var seq41971__$2 = cljs.core.next.call(null,seq41971__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__41972,G__41973,seq41971__$2);
});

return null;
})()
;
cljs.core$macros.import$.cljs$lang$macro = true;

var ret__30035__auto___41981 = (function (){
/**
 * Refers to all the public vars of `cljs.core`, subject to
 *   filters.
 *   Filters can include at most one each of:
 * 
 *   :exclude list-of-symbols
 *   :rename map-of-fromsymbol-tosymbol
 * 
 *   Filters can be used to select a subset, via exclusion, or to provide a mapping
 *   to a symbol different from the var's name, in order to prevent clashes.
 */
cljs.core$macros.refer_clojure = (function cljs$core$macros$refer_clojure(var_args){
var args__30002__auto__ = [];
var len__29995__auto___41982 = arguments.length;
var i__29996__auto___41983 = (0);
while(true){
if((i__29996__auto___41983 < len__29995__auto___41982)){
args__30002__auto__.push((arguments[i__29996__auto___41983]));

var G__41984 = (i__29996__auto___41983 + (1));
i__29996__auto___41983 = G__41984;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__29688__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq41978){
var G__41979 = cljs.core.first.call(null,seq41978);
var seq41978__$1 = cljs.core.next.call(null,seq41978);
var G__41980 = cljs.core.first.call(null,seq41978__$1);
var seq41978__$2 = cljs.core.next.call(null,seq41978__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__41979,G__41980,seq41978__$2);
});

return null;
})()
;
cljs.core$macros.refer_clojure.cljs$lang$macro = true;

var ret__30035__auto___41985 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__29688__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;

var ret__30035__auto___41986 = /**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand-1 must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second.call(null,quoted);
if(cljs.core.seq_QMARK_.call(null,form)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__29688__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
return form;
}
});
cljs.core$macros.macroexpand_1.cljs$lang$macro = true;

var ret__30035__auto___41987 = /**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second.call(null,quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_.call(null,form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1.call(null,env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__41988 = form_SINGLEQUOTE_;
var G__41989 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__41988;
form_SINGLEQUOTE_ = G__41989;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__29688__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
}
break;
}
} else {
return form;
}
});
cljs.core$macros.macroexpand.cljs$lang$macro = true;

cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count.call(null,fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__28814__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__28814__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__28814__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var G__41991 = arguments.length;
switch (G__41991) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__41992,solo){
var vec__41993 = p__41992;
var seq__41994 = cljs.core.seq.call(null,vec__41993);
var first__41995 = cljs.core.first.call(null,seq__41994);
var seq__41994__$1 = cljs.core.next.call(null,seq__41994);
var arglist = first__41995;
var body = seq__41994__$1;
var method = vec__41993;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__41993,seq__41994,first__41995,seq__41994__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__41993,seq__41994,first__41995,seq__41994__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__41993,seq__41994,first__41995,seq__41994__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__41993,seq__41994,first__41995,seq__41994__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__41993,seq__41994,first__41995,seq__41994__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/timothy/git/power-turtle/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2997),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2997),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/timothy/git/power-turtle/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2998),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2998),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
});})(sig,restarg,vec__41993,seq__41994,first__41995,seq__41994__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__41993,seq__41994,first__41995,seq__41994__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),params,(function (){var x__29688__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__29688__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
}
});})(sig,restarg,vec__41993,seq__41994,first__41995,seq__41994__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())))):null),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

var ret__30035__auto___41999 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__41997__auto__","len__41997__auto__",50907246,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__41998__auto__","i__41998__auto__",98194527,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__41998__auto__","i__41998__auto__",98194527,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__41997__auto__","len__41997__auto__",50907246,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__29688__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__41998__auto__","i__41998__auto__",98194527,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__41998__auto__","i__41998__auto__",98194527,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.copy_arguments.cljs$lang$macro = true;

cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__42002,emit_var_QMARK_){
var vec__42003 = p__42002;
var vec__42006 = cljs.core.nth.call(null,vec__42003,(0),null);
var seq__42007 = cljs.core.seq.call(null,vec__42006);
var first__42008 = cljs.core.first.call(null,seq__42007);
var seq__42007__$1 = cljs.core.next.call(null,seq__42007);
var arglist = first__42008;
var body = seq__42007__$1;
var method = vec__42006;
var fdecl = vec__42003;
var dest_args = ((function (vec__42003,vec__42006,seq__42007,first__42008,seq__42007__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__42003,vec__42006,seq__42007,first__42008,seq__42007__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});})(vec__42003,vec__42006,seq__42007,first__42008,seq__42007__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__42003,vec__42006,seq__42007,first__42008,seq__42007__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__29688__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__29688__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__42000__auto__","args__42000__auto__",-944930226,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__42000__auto__","args__42000__auto__",-944930226,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__42001__auto__","argseq__42001__auto__",36378184,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__29688__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__42000__auto__","args__42000__auto__",-944930226,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29688__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/timothy/git/power-turtle/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3045),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3045),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__42000__auto__","args__42000__auto__",-944930226,null)),(function (){var x__29688__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__42001__auto__","argseq__42001__auto__",36378184,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__29688__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__42017){
var vec__42018 = p__42017;
var seq__42019 = cljs.core.seq.call(null,vec__42018);
var first__42020 = cljs.core.first.call(null,seq__42019);
var seq__42019__$1 = cljs.core.next.call(null,seq__42019);
var sig = first__42020;
var body = seq__42019__$1;
var method = vec__42018;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.symbol.call(null,["-cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__42009_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__42009_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
var param_counts = cljs.core.map.call(null,cljs.core.count,arglists);
if(cljs.core.not_EQ_.call(null,cljs.core.distinct.call(null,param_counts),param_counts)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__29688__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts){
return (function (p1__42010_SHARP_){
return fixed_arity.call(null,rname,p1__42010_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts))
,sigs),(function (){var x__29688__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__42011__auto__","args-arr__42011__auto__",-2019502284,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__42011__auto__","args-arr__42011__auto__",-2019502284,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__42012__auto__","argseq__42012__auto__",1140899656,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29688__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/timothy/git/power-turtle/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3106),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,59),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3106),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,79),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__42011__auto__","args-arr__42011__auto__",-2019502284,null)),(function (){var x__29688__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__42012__auto__","argseq__42012__auto__",1140899656,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__29688__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first.call(null,fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first.call(null,fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first.call(null,fdecl) === 'string')?cljs.core.next.call(null,fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.conj.call(null,m,cljs.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__29688__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__29688__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__29688__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__29688__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto____$1);
})(),x__29688__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__42021__i = 0, G__42021__a = new Array(arguments.length -  3);
while (G__42021__i < G__42021__a.length) {G__42021__a[G__42021__i] = arguments[G__42021__i + 3]; ++G__42021__i;}
  fdecl = new cljs.core.IndexedSeq(G__42021__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__42022){
var _AMPERSAND_form = cljs.core.first(arglist__42022);
arglist__42022 = cljs.core.next(arglist__42022);
var _AMPERSAND_env = cljs.core.first(arglist__42022);
arglist__42022 = cljs.core.next(arglist__42022);
var name = cljs.core.first(arglist__42022);
var fdecl = cljs.core.rest(arglist__42022);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__30002__auto__ = [];
var len__29995__auto___42028 = arguments.length;
var i__29996__auto___42029 = (0);
while(true){
if((i__29996__auto___42029 < len__29995__auto___42028)){
args__30002__auto__.push((arguments[i__29996__auto___42029]));

var G__42030 = (i__29996__auto___42029 + (1));
i__29996__auto___42029 = G__42030;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((3) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30003__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__29688__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__42031 = cljs.core.cons.call(null,f,p);
var G__42032 = cljs.core.next.call(null,args__$1);
p = G__42031;
args__$1 = G__42032;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__42033 = cljs.core.cons.call(null,f,p);
var G__42034 = cljs.core.next.call(null,args__$1);
p = G__42033;
args__$1 = G__42034;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first.call(null,fd) === 'string'){
var G__42035 = cljs.core.next.call(null,fd);
fd = G__42035;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__42036 = cljs.core.next.call(null,fd);
fd = G__42036;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__29688__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first.call(null,fd);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next.call(null,fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first.call(null,ds);
if(cljs.core.map_QMARK_.call(null,d)){
return cljs.core.conj.call(null,acc,d);
} else {
var G__42037 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__42038 = cljs.core.next.call(null,ds);
acc = G__42037;
ds = G__42038;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq.call(null,add_args.call(null,cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__42039 = cljs.core.next.call(null,p);
var G__42040 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__42039;
d = G__42040;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__42023__auto__","ret__42023__auto__",-253294106,null)),(function (){var x__29688__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29688__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__42023__auto__","ret__42023__auto__",-253294106,null)))));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq42024){
var G__42025 = cljs.core.first.call(null,seq42024);
var seq42024__$1 = cljs.core.next.call(null,seq42024);
var G__42026 = cljs.core.first.call(null,seq42024__$1);
var seq42024__$2 = cljs.core.next.call(null,seq42024__$1);
var G__42027 = cljs.core.first.call(null,seq42024__$2);
var seq42024__$3 = cljs.core.next.call(null,seq42024__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__42025,G__42026,G__42027,seq42024__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
var ret__30035__auto___42045 = /**
 * Returns the var to which a symbol will be resolved in the namespace else nil.
 */
cljs.core$macros.resolve = (function cljs$core$macros$resolve(_AMPERSAND_form,_AMPERSAND_env,quoted_sym){
if((cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,quoted_sym)))){
} else {
throw (new Error(["Assert failed: ","Argument to resolve must be a quoted symbol","\n","(core/and (seq? quoted-sym) (= (quote quote) (first quoted-sym)))"].join('')));
}

var sym = cljs.core.second.call(null,quoted_sym);
var env = _AMPERSAND_env;
var vec__42041 = (function (){try{var var$ = cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.analyzer.var_meta.call(null,var$)], null);
}catch (e42044){var e = e42044;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.resolve_var.call(null,env,sym),null], null);
}})();
var var$ = cljs.core.nth.call(null,vec__42041,(0),null);
var meta = cljs.core.nth.call(null,vec__42041,(1),null);
var resolved = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__29688__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Var.","cljs.core/Var.",-242685277,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29688__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__29688__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});
cljs.core$macros.resolve.cljs$lang$macro = true;


//# sourceMappingURL=core$macros.js.map?rel=1506931023735
