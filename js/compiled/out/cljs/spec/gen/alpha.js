// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__29451__auto__,writer__29452__auto__,opt__29453__auto__){
return cljs.core._write.call(null,writer__29452__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36832 = arguments.length;
var i__29996__auto___36833 = (0);
while(true){
if((i__29996__auto___36833 < len__29995__auto___36832)){
args__30002__auto__.push((arguments[i__29996__auto___36833]));

var G__36834 = (i__29996__auto___36833 + (1));
i__29996__auto___36833 = G__36834;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq36831){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36831));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36836 = arguments.length;
var i__29996__auto___36837 = (0);
while(true){
if((i__29996__auto___36837 < len__29995__auto___36836)){
args__30002__auto__.push((arguments[i__29996__auto___36837]));

var G__36838 = (i__29996__auto___36837 + (1));
i__29996__auto___36837 = G__36838;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq36835){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36835));
});

var g_QMARK__36839 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_36840 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__36839){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__36839))
,null));
var mkg_36841 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__36839,g_36840){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__36839,g_36840))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__36839,g_36840,mkg_36841){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__36839).call(null,x);
});})(g_QMARK__36839,g_36840,mkg_36841))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__36839,g_36840,mkg_36841){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_36841).call(null,gfn);
});})(g_QMARK__36839,g_36840,mkg_36841))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__36839,g_36840,mkg_36841){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_36840).call(null,generator);
});})(g_QMARK__36839,g_36840,mkg_36841))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__32062__auto___36861 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__32062__auto___36861){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36862 = arguments.length;
var i__29996__auto___36863 = (0);
while(true){
if((i__29996__auto___36863 < len__29995__auto___36862)){
args__30002__auto__.push((arguments[i__29996__auto___36863]));

var G__36864 = (i__29996__auto___36863 + (1));
i__29996__auto___36863 = G__36864;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32062__auto___36861))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32062__auto___36861){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32062__auto___36861),args);
});})(g__32062__auto___36861))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__32062__auto___36861){
return (function (seq36842){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36842));
});})(g__32062__auto___36861))
;


var g__32062__auto___36865 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__32062__auto___36865){
return (function cljs$spec$gen$alpha$list(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36866 = arguments.length;
var i__29996__auto___36867 = (0);
while(true){
if((i__29996__auto___36867 < len__29995__auto___36866)){
args__30002__auto__.push((arguments[i__29996__auto___36867]));

var G__36868 = (i__29996__auto___36867 + (1));
i__29996__auto___36867 = G__36868;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32062__auto___36865))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32062__auto___36865){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32062__auto___36865),args);
});})(g__32062__auto___36865))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__32062__auto___36865){
return (function (seq36843){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36843));
});})(g__32062__auto___36865))
;


var g__32062__auto___36869 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__32062__auto___36869){
return (function cljs$spec$gen$alpha$map(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36870 = arguments.length;
var i__29996__auto___36871 = (0);
while(true){
if((i__29996__auto___36871 < len__29995__auto___36870)){
args__30002__auto__.push((arguments[i__29996__auto___36871]));

var G__36872 = (i__29996__auto___36871 + (1));
i__29996__auto___36871 = G__36872;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32062__auto___36869))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32062__auto___36869){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32062__auto___36869),args);
});})(g__32062__auto___36869))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__32062__auto___36869){
return (function (seq36844){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36844));
});})(g__32062__auto___36869))
;


var g__32062__auto___36873 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__32062__auto___36873){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36874 = arguments.length;
var i__29996__auto___36875 = (0);
while(true){
if((i__29996__auto___36875 < len__29995__auto___36874)){
args__30002__auto__.push((arguments[i__29996__auto___36875]));

var G__36876 = (i__29996__auto___36875 + (1));
i__29996__auto___36875 = G__36876;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32062__auto___36873))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32062__auto___36873){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32062__auto___36873),args);
});})(g__32062__auto___36873))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__32062__auto___36873){
return (function (seq36845){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36845));
});})(g__32062__auto___36873))
;


var g__32062__auto___36877 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__32062__auto___36877){
return (function cljs$spec$gen$alpha$set(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36878 = arguments.length;
var i__29996__auto___36879 = (0);
while(true){
if((i__29996__auto___36879 < len__29995__auto___36878)){
args__30002__auto__.push((arguments[i__29996__auto___36879]));

var G__36880 = (i__29996__auto___36879 + (1));
i__29996__auto___36879 = G__36880;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32062__auto___36877))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32062__auto___36877){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32062__auto___36877),args);
});})(g__32062__auto___36877))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__32062__auto___36877){
return (function (seq36846){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36846));
});})(g__32062__auto___36877))
;


var g__32062__auto___36881 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__32062__auto___36881){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36882 = arguments.length;
var i__29996__auto___36883 = (0);
while(true){
if((i__29996__auto___36883 < len__29995__auto___36882)){
args__30002__auto__.push((arguments[i__29996__auto___36883]));

var G__36884 = (i__29996__auto___36883 + (1));
i__29996__auto___36883 = G__36884;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32062__auto___36881))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32062__auto___36881){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32062__auto___36881),args);
});})(g__32062__auto___36881))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__32062__auto___36881){
return (function (seq36847){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36847));
});})(g__32062__auto___36881))
;


var g__32062__auto___36885 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__32062__auto___36885){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36886 = arguments.length;
var i__29996__auto___36887 = (0);
while(true){
if((i__29996__auto___36887 < len__29995__auto___36886)){
args__30002__auto__.push((arguments[i__29996__auto___36887]));

var G__36888 = (i__29996__auto___36887 + (1));
i__29996__auto___36887 = G__36888;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32062__auto___36885))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32062__auto___36885){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32062__auto___36885),args);
});})(g__32062__auto___36885))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__32062__auto___36885){
return (function (seq36848){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36848));
});})(g__32062__auto___36885))
;


var g__32062__auto___36889 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__32062__auto___36889){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36890 = arguments.length;
var i__29996__auto___36891 = (0);
while(true){
if((i__29996__auto___36891 < len__29995__auto___36890)){
args__30002__auto__.push((arguments[i__29996__auto___36891]));

var G__36892 = (i__29996__auto___36891 + (1));
i__29996__auto___36891 = G__36892;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32062__auto___36889))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32062__auto___36889){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32062__auto___36889),args);
});})(g__32062__auto___36889))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__32062__auto___36889){
return (function (seq36849){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36849));
});})(g__32062__auto___36889))
;


var g__32062__auto___36893 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__32062__auto___36893){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36894 = arguments.length;
var i__29996__auto___36895 = (0);
while(true){
if((i__29996__auto___36895 < len__29995__auto___36894)){
args__30002__auto__.push((arguments[i__29996__auto___36895]));

var G__36896 = (i__29996__auto___36895 + (1));
i__29996__auto___36895 = G__36896;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32062__auto___36893))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32062__auto___36893){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32062__auto___36893),args);
});})(g__32062__auto___36893))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__32062__auto___36893){
return (function (seq36850){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36850));
});})(g__32062__auto___36893))
;


var g__32062__auto___36897 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__32062__auto___36897){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36898 = arguments.length;
var i__29996__auto___36899 = (0);
while(true){
if((i__29996__auto___36899 < len__29995__auto___36898)){
args__30002__auto__.push((arguments[i__29996__auto___36899]));

var G__36900 = (i__29996__auto___36899 + (1));
i__29996__auto___36899 = G__36900;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32062__auto___36897))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32062__auto___36897){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32062__auto___36897),args);
});})(g__32062__auto___36897))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__32062__auto___36897){
return (function (seq36851){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36851));
});})(g__32062__auto___36897))
;


var g__32062__auto___36901 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__32062__auto___36901){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36902 = arguments.length;
var i__29996__auto___36903 = (0);
while(true){
if((i__29996__auto___36903 < len__29995__auto___36902)){
args__30002__auto__.push((arguments[i__29996__auto___36903]));

var G__36904 = (i__29996__auto___36903 + (1));
i__29996__auto___36903 = G__36904;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32062__auto___36901))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32062__auto___36901){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32062__auto___36901),args);
});})(g__32062__auto___36901))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__32062__auto___36901){
return (function (seq36852){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36852));
});})(g__32062__auto___36901))
;


var g__32062__auto___36905 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__32062__auto___36905){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36906 = arguments.length;
var i__29996__auto___36907 = (0);
while(true){
if((i__29996__auto___36907 < len__29995__auto___36906)){
args__30002__auto__.push((arguments[i__29996__auto___36907]));

var G__36908 = (i__29996__auto___36907 + (1));
i__29996__auto___36907 = G__36908;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32062__auto___36905))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32062__auto___36905){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32062__auto___36905),args);
});})(g__32062__auto___36905))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__32062__auto___36905){
return (function (seq36853){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36853));
});})(g__32062__auto___36905))
;


var g__32062__auto___36909 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__32062__auto___36909){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36910 = arguments.length;
var i__29996__auto___36911 = (0);
while(true){
if((i__29996__auto___36911 < len__29995__auto___36910)){
args__30002__auto__.push((arguments[i__29996__auto___36911]));

var G__36912 = (i__29996__auto___36911 + (1));
i__29996__auto___36911 = G__36912;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32062__auto___36909))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32062__auto___36909){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32062__auto___36909),args);
});})(g__32062__auto___36909))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__32062__auto___36909){
return (function (seq36854){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36854));
});})(g__32062__auto___36909))
;


var g__32062__auto___36913 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__32062__auto___36913){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36914 = arguments.length;
var i__29996__auto___36915 = (0);
while(true){
if((i__29996__auto___36915 < len__29995__auto___36914)){
args__30002__auto__.push((arguments[i__29996__auto___36915]));

var G__36916 = (i__29996__auto___36915 + (1));
i__29996__auto___36915 = G__36916;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32062__auto___36913))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32062__auto___36913){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32062__auto___36913),args);
});})(g__32062__auto___36913))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__32062__auto___36913){
return (function (seq36855){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36855));
});})(g__32062__auto___36913))
;


var g__32062__auto___36917 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__32062__auto___36917){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36918 = arguments.length;
var i__29996__auto___36919 = (0);
while(true){
if((i__29996__auto___36919 < len__29995__auto___36918)){
args__30002__auto__.push((arguments[i__29996__auto___36919]));

var G__36920 = (i__29996__auto___36919 + (1));
i__29996__auto___36919 = G__36920;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32062__auto___36917))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32062__auto___36917){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32062__auto___36917),args);
});})(g__32062__auto___36917))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__32062__auto___36917){
return (function (seq36856){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36856));
});})(g__32062__auto___36917))
;


var g__32062__auto___36921 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__32062__auto___36921){
return (function cljs$spec$gen$alpha$return(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36922 = arguments.length;
var i__29996__auto___36923 = (0);
while(true){
if((i__29996__auto___36923 < len__29995__auto___36922)){
args__30002__auto__.push((arguments[i__29996__auto___36923]));

var G__36924 = (i__29996__auto___36923 + (1));
i__29996__auto___36923 = G__36924;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32062__auto___36921))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32062__auto___36921){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32062__auto___36921),args);
});})(g__32062__auto___36921))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__32062__auto___36921){
return (function (seq36857){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36857));
});})(g__32062__auto___36921))
;


var g__32062__auto___36925 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__32062__auto___36925){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36926 = arguments.length;
var i__29996__auto___36927 = (0);
while(true){
if((i__29996__auto___36927 < len__29995__auto___36926)){
args__30002__auto__.push((arguments[i__29996__auto___36927]));

var G__36928 = (i__29996__auto___36927 + (1));
i__29996__auto___36927 = G__36928;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32062__auto___36925))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32062__auto___36925){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32062__auto___36925),args);
});})(g__32062__auto___36925))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__32062__auto___36925){
return (function (seq36858){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36858));
});})(g__32062__auto___36925))
;


var g__32062__auto___36929 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__32062__auto___36929){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36930 = arguments.length;
var i__29996__auto___36931 = (0);
while(true){
if((i__29996__auto___36931 < len__29995__auto___36930)){
args__30002__auto__.push((arguments[i__29996__auto___36931]));

var G__36932 = (i__29996__auto___36931 + (1));
i__29996__auto___36931 = G__36932;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32062__auto___36929))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32062__auto___36929){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32062__auto___36929),args);
});})(g__32062__auto___36929))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__32062__auto___36929){
return (function (seq36859){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36859));
});})(g__32062__auto___36929))
;


var g__32062__auto___36933 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__32062__auto___36933){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36934 = arguments.length;
var i__29996__auto___36935 = (0);
while(true){
if((i__29996__auto___36935 < len__29995__auto___36934)){
args__30002__auto__.push((arguments[i__29996__auto___36935]));

var G__36936 = (i__29996__auto___36935 + (1));
i__29996__auto___36935 = G__36936;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32062__auto___36933))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32062__auto___36933){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32062__auto___36933),args);
});})(g__32062__auto___36933))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__32062__auto___36933){
return (function (seq36860){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36860));
});})(g__32062__auto___36933))
;

var g__32075__auto___36958 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__32075__auto___36958){
return (function cljs$spec$gen$alpha$any(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36959 = arguments.length;
var i__29996__auto___36960 = (0);
while(true){
if((i__29996__auto___36960 < len__29995__auto___36959)){
args__30002__auto__.push((arguments[i__29996__auto___36960]));

var G__36961 = (i__29996__auto___36960 + (1));
i__29996__auto___36960 = G__36961;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___36958))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___36958){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___36958);
});})(g__32075__auto___36958))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__32075__auto___36958){
return (function (seq36937){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36937));
});})(g__32075__auto___36958))
;


var g__32075__auto___36962 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__32075__auto___36962){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36963 = arguments.length;
var i__29996__auto___36964 = (0);
while(true){
if((i__29996__auto___36964 < len__29995__auto___36963)){
args__30002__auto__.push((arguments[i__29996__auto___36964]));

var G__36965 = (i__29996__auto___36964 + (1));
i__29996__auto___36964 = G__36965;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___36962))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___36962){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___36962);
});})(g__32075__auto___36962))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__32075__auto___36962){
return (function (seq36938){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36938));
});})(g__32075__auto___36962))
;


var g__32075__auto___36966 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__32075__auto___36966){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36967 = arguments.length;
var i__29996__auto___36968 = (0);
while(true){
if((i__29996__auto___36968 < len__29995__auto___36967)){
args__30002__auto__.push((arguments[i__29996__auto___36968]));

var G__36969 = (i__29996__auto___36968 + (1));
i__29996__auto___36968 = G__36969;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___36966))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___36966){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___36966);
});})(g__32075__auto___36966))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__32075__auto___36966){
return (function (seq36939){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36939));
});})(g__32075__auto___36966))
;


var g__32075__auto___36970 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__32075__auto___36970){
return (function cljs$spec$gen$alpha$char(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36971 = arguments.length;
var i__29996__auto___36972 = (0);
while(true){
if((i__29996__auto___36972 < len__29995__auto___36971)){
args__30002__auto__.push((arguments[i__29996__auto___36972]));

var G__36973 = (i__29996__auto___36972 + (1));
i__29996__auto___36972 = G__36973;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___36970))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___36970){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___36970);
});})(g__32075__auto___36970))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__32075__auto___36970){
return (function (seq36940){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36940));
});})(g__32075__auto___36970))
;


var g__32075__auto___36974 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__32075__auto___36974){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36975 = arguments.length;
var i__29996__auto___36976 = (0);
while(true){
if((i__29996__auto___36976 < len__29995__auto___36975)){
args__30002__auto__.push((arguments[i__29996__auto___36976]));

var G__36977 = (i__29996__auto___36976 + (1));
i__29996__auto___36976 = G__36977;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___36974))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___36974){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___36974);
});})(g__32075__auto___36974))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__32075__auto___36974){
return (function (seq36941){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36941));
});})(g__32075__auto___36974))
;


var g__32075__auto___36978 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__32075__auto___36978){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36979 = arguments.length;
var i__29996__auto___36980 = (0);
while(true){
if((i__29996__auto___36980 < len__29995__auto___36979)){
args__30002__auto__.push((arguments[i__29996__auto___36980]));

var G__36981 = (i__29996__auto___36980 + (1));
i__29996__auto___36980 = G__36981;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___36978))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___36978){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___36978);
});})(g__32075__auto___36978))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__32075__auto___36978){
return (function (seq36942){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36942));
});})(g__32075__auto___36978))
;


var g__32075__auto___36982 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__32075__auto___36982){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36983 = arguments.length;
var i__29996__auto___36984 = (0);
while(true){
if((i__29996__auto___36984 < len__29995__auto___36983)){
args__30002__auto__.push((arguments[i__29996__auto___36984]));

var G__36985 = (i__29996__auto___36984 + (1));
i__29996__auto___36984 = G__36985;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___36982))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___36982){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___36982);
});})(g__32075__auto___36982))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__32075__auto___36982){
return (function (seq36943){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36943));
});})(g__32075__auto___36982))
;


var g__32075__auto___36986 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__32075__auto___36986){
return (function cljs$spec$gen$alpha$double(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36987 = arguments.length;
var i__29996__auto___36988 = (0);
while(true){
if((i__29996__auto___36988 < len__29995__auto___36987)){
args__30002__auto__.push((arguments[i__29996__auto___36988]));

var G__36989 = (i__29996__auto___36988 + (1));
i__29996__auto___36988 = G__36989;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___36986))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___36986){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___36986);
});})(g__32075__auto___36986))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__32075__auto___36986){
return (function (seq36944){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36944));
});})(g__32075__auto___36986))
;


var g__32075__auto___36990 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__32075__auto___36990){
return (function cljs$spec$gen$alpha$int(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36991 = arguments.length;
var i__29996__auto___36992 = (0);
while(true){
if((i__29996__auto___36992 < len__29995__auto___36991)){
args__30002__auto__.push((arguments[i__29996__auto___36992]));

var G__36993 = (i__29996__auto___36992 + (1));
i__29996__auto___36992 = G__36993;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___36990))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___36990){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___36990);
});})(g__32075__auto___36990))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__32075__auto___36990){
return (function (seq36945){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36945));
});})(g__32075__auto___36990))
;


var g__32075__auto___36994 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__32075__auto___36994){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36995 = arguments.length;
var i__29996__auto___36996 = (0);
while(true){
if((i__29996__auto___36996 < len__29995__auto___36995)){
args__30002__auto__.push((arguments[i__29996__auto___36996]));

var G__36997 = (i__29996__auto___36996 + (1));
i__29996__auto___36996 = G__36997;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___36994))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___36994){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___36994);
});})(g__32075__auto___36994))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__32075__auto___36994){
return (function (seq36946){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36946));
});})(g__32075__auto___36994))
;


var g__32075__auto___36998 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__32075__auto___36998){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__30002__auto__ = [];
var len__29995__auto___36999 = arguments.length;
var i__29996__auto___37000 = (0);
while(true){
if((i__29996__auto___37000 < len__29995__auto___36999)){
args__30002__auto__.push((arguments[i__29996__auto___37000]));

var G__37001 = (i__29996__auto___37000 + (1));
i__29996__auto___37000 = G__37001;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___36998))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___36998){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___36998);
});})(g__32075__auto___36998))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__32075__auto___36998){
return (function (seq36947){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36947));
});})(g__32075__auto___36998))
;


var g__32075__auto___37002 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__32075__auto___37002){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__30002__auto__ = [];
var len__29995__auto___37003 = arguments.length;
var i__29996__auto___37004 = (0);
while(true){
if((i__29996__auto___37004 < len__29995__auto___37003)){
args__30002__auto__.push((arguments[i__29996__auto___37004]));

var G__37005 = (i__29996__auto___37004 + (1));
i__29996__auto___37004 = G__37005;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___37002))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___37002){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___37002);
});})(g__32075__auto___37002))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__32075__auto___37002){
return (function (seq36948){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36948));
});})(g__32075__auto___37002))
;


var g__32075__auto___37006 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__32075__auto___37006){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__30002__auto__ = [];
var len__29995__auto___37007 = arguments.length;
var i__29996__auto___37008 = (0);
while(true){
if((i__29996__auto___37008 < len__29995__auto___37007)){
args__30002__auto__.push((arguments[i__29996__auto___37008]));

var G__37009 = (i__29996__auto___37008 + (1));
i__29996__auto___37008 = G__37009;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___37006))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___37006){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___37006);
});})(g__32075__auto___37006))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__32075__auto___37006){
return (function (seq36949){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36949));
});})(g__32075__auto___37006))
;


var g__32075__auto___37010 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__32075__auto___37010){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__30002__auto__ = [];
var len__29995__auto___37011 = arguments.length;
var i__29996__auto___37012 = (0);
while(true){
if((i__29996__auto___37012 < len__29995__auto___37011)){
args__30002__auto__.push((arguments[i__29996__auto___37012]));

var G__37013 = (i__29996__auto___37012 + (1));
i__29996__auto___37012 = G__37013;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___37010))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___37010){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___37010);
});})(g__32075__auto___37010))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__32075__auto___37010){
return (function (seq36950){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36950));
});})(g__32075__auto___37010))
;


var g__32075__auto___37014 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__32075__auto___37014){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__30002__auto__ = [];
var len__29995__auto___37015 = arguments.length;
var i__29996__auto___37016 = (0);
while(true){
if((i__29996__auto___37016 < len__29995__auto___37015)){
args__30002__auto__.push((arguments[i__29996__auto___37016]));

var G__37017 = (i__29996__auto___37016 + (1));
i__29996__auto___37016 = G__37017;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___37014))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___37014){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___37014);
});})(g__32075__auto___37014))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__32075__auto___37014){
return (function (seq36951){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36951));
});})(g__32075__auto___37014))
;


var g__32075__auto___37018 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__32075__auto___37018){
return (function cljs$spec$gen$alpha$string(var_args){
var args__30002__auto__ = [];
var len__29995__auto___37019 = arguments.length;
var i__29996__auto___37020 = (0);
while(true){
if((i__29996__auto___37020 < len__29995__auto___37019)){
args__30002__auto__.push((arguments[i__29996__auto___37020]));

var G__37021 = (i__29996__auto___37020 + (1));
i__29996__auto___37020 = G__37021;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___37018))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___37018){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___37018);
});})(g__32075__auto___37018))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__32075__auto___37018){
return (function (seq36952){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36952));
});})(g__32075__auto___37018))
;


var g__32075__auto___37022 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__32075__auto___37022){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__30002__auto__ = [];
var len__29995__auto___37023 = arguments.length;
var i__29996__auto___37024 = (0);
while(true){
if((i__29996__auto___37024 < len__29995__auto___37023)){
args__30002__auto__.push((arguments[i__29996__auto___37024]));

var G__37025 = (i__29996__auto___37024 + (1));
i__29996__auto___37024 = G__37025;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___37022))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___37022){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___37022);
});})(g__32075__auto___37022))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__32075__auto___37022){
return (function (seq36953){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36953));
});})(g__32075__auto___37022))
;


var g__32075__auto___37026 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__32075__auto___37026){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__30002__auto__ = [];
var len__29995__auto___37027 = arguments.length;
var i__29996__auto___37028 = (0);
while(true){
if((i__29996__auto___37028 < len__29995__auto___37027)){
args__30002__auto__.push((arguments[i__29996__auto___37028]));

var G__37029 = (i__29996__auto___37028 + (1));
i__29996__auto___37028 = G__37029;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___37026))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___37026){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___37026);
});})(g__32075__auto___37026))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__32075__auto___37026){
return (function (seq36954){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36954));
});})(g__32075__auto___37026))
;


var g__32075__auto___37030 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__32075__auto___37030){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__30002__auto__ = [];
var len__29995__auto___37031 = arguments.length;
var i__29996__auto___37032 = (0);
while(true){
if((i__29996__auto___37032 < len__29995__auto___37031)){
args__30002__auto__.push((arguments[i__29996__auto___37032]));

var G__37033 = (i__29996__auto___37032 + (1));
i__29996__auto___37032 = G__37033;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___37030))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___37030){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___37030);
});})(g__32075__auto___37030))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__32075__auto___37030){
return (function (seq36955){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36955));
});})(g__32075__auto___37030))
;


var g__32075__auto___37034 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__32075__auto___37034){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__30002__auto__ = [];
var len__29995__auto___37035 = arguments.length;
var i__29996__auto___37036 = (0);
while(true){
if((i__29996__auto___37036 < len__29995__auto___37035)){
args__30002__auto__.push((arguments[i__29996__auto___37036]));

var G__37037 = (i__29996__auto___37036 + (1));
i__29996__auto___37036 = G__37037;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___37034))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___37034){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___37034);
});})(g__32075__auto___37034))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__32075__auto___37034){
return (function (seq36956){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36956));
});})(g__32075__auto___37034))
;


var g__32075__auto___37038 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__32075__auto___37038){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__30002__auto__ = [];
var len__29995__auto___37039 = arguments.length;
var i__29996__auto___37040 = (0);
while(true){
if((i__29996__auto___37040 < len__29995__auto___37039)){
args__30002__auto__.push((arguments[i__29996__auto___37040]));

var G__37041 = (i__29996__auto___37040 + (1));
i__29996__auto___37040 = G__37041;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});})(g__32075__auto___37038))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32075__auto___37038){
return (function (args){
return cljs.core.deref.call(null,g__32075__auto___37038);
});})(g__32075__auto___37038))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__32075__auto___37038){
return (function (seq36957){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36957));
});})(g__32075__auto___37038))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__30002__auto__ = [];
var len__29995__auto___37044 = arguments.length;
var i__29996__auto___37045 = (0);
while(true){
if((i__29996__auto___37045 < len__29995__auto___37044)){
args__30002__auto__.push((arguments[i__29996__auto___37045]));

var G__37046 = (i__29996__auto___37045 + (1));
i__29996__auto___37045 = G__37046;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__37042_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__37042_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq37043){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37043));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__37047_SHARP_){
return (new Date(p1__37047_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1506931000371
