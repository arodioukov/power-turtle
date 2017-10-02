// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__38164_SHARP_){
return console.log(p1__38164_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__38165_SHARP_){
return console.warn(p1__38165_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__38166_SHARP_){
return console.error(p1__38166_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__38167_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__38167_SHARP_);
} else {
return console.log(p1__38167_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error(["Assert failed: ","Unknown keys in new-loggers","\n","(empty? (difference (set (keys new-loggers)) (set (keys default-loggers))))"].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__30002__auto__ = [];
var len__29995__auto___38169 = arguments.length;
var i__29996__auto___38170 = (0);
while(true){
if((i__29996__auto___38170 < len__29995__auto___38169)){
args__30002__auto__.push((arguments[i__29996__auto___38170]));

var G__38171 = (i__29996__auto___38170 + (1));
i__29996__auto___38170 = G__38171;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq38168){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38168));
});

re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__30002__auto__ = [];
var len__29995__auto___38173 = arguments.length;
var i__29996__auto___38174 = (0);
while(true){
if((i__29996__auto___38174 < len__29995__auto___38173)){
args__30002__auto__.push((arguments[i__29996__auto___38174]));

var G__38175 = (i__29996__auto___38174 + (1));
i__29996__auto___38174 = G__38175;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq38172){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38172));
});

re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__30002__auto__ = [];
var len__29995__auto___38177 = arguments.length;
var i__29996__auto___38178 = (0);
while(true){
if((i__29996__auto___38178 < len__29995__auto___38177)){
args__30002__auto__.push((arguments[i__29996__auto___38178]));

var G__38179 = (i__29996__auto___38178 + (1));
i__29996__auto___38178 = G__38179;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq38176){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38176));
});

re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__30002__auto__ = [];
var len__29995__auto___38181 = arguments.length;
var i__29996__auto___38182 = (0);
while(true){
if((i__29996__auto___38182 < len__29995__auto___38181)){
args__30002__auto__.push((arguments[i__29996__auto___38182]));

var G__38183 = (i__29996__auto___38182 + (1));
i__29996__auto___38182 = G__38183;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq38180){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38180));
});

re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__30002__auto__ = [];
var len__29995__auto___38185 = arguments.length;
var i__29996__auto___38186 = (0);
while(true){
if((i__29996__auto___38186 < len__29995__auto___38185)){
args__30002__auto__.push((arguments[i__29996__auto___38186]));

var G__38187 = (i__29996__auto___38186 + (1));
i__29996__auto___38186 = G__38187;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq38184){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38184));
});

re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1506931007654
