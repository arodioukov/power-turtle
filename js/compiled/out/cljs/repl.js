// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39321){
var map__39322 = p__39321;
var map__39322__$1 = ((((!((map__39322 == null)))?((((map__39322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39322.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39322):map__39322);
var m = map__39322__$1;
var n = cljs.core.get.call(null,map__39322__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39322__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39324_39346 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39325_39347 = null;
var count__39326_39348 = (0);
var i__39327_39349 = (0);
while(true){
if((i__39327_39349 < count__39326_39348)){
var f_39350 = cljs.core._nth.call(null,chunk__39325_39347,i__39327_39349);
cljs.core.println.call(null,"  ",f_39350);

var G__39351 = seq__39324_39346;
var G__39352 = chunk__39325_39347;
var G__39353 = count__39326_39348;
var G__39354 = (i__39327_39349 + (1));
seq__39324_39346 = G__39351;
chunk__39325_39347 = G__39352;
count__39326_39348 = G__39353;
i__39327_39349 = G__39354;
continue;
} else {
var temp__4657__auto___39355 = cljs.core.seq.call(null,seq__39324_39346);
if(temp__4657__auto___39355){
var seq__39324_39356__$1 = temp__4657__auto___39355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39324_39356__$1)){
var c__28978__auto___39357 = cljs.core.chunk_first.call(null,seq__39324_39356__$1);
var G__39358 = cljs.core.chunk_rest.call(null,seq__39324_39356__$1);
var G__39359 = c__28978__auto___39357;
var G__39360 = cljs.core.count.call(null,c__28978__auto___39357);
var G__39361 = (0);
seq__39324_39346 = G__39358;
chunk__39325_39347 = G__39359;
count__39326_39348 = G__39360;
i__39327_39349 = G__39361;
continue;
} else {
var f_39362 = cljs.core.first.call(null,seq__39324_39356__$1);
cljs.core.println.call(null,"  ",f_39362);

var G__39363 = cljs.core.next.call(null,seq__39324_39356__$1);
var G__39364 = null;
var G__39365 = (0);
var G__39366 = (0);
seq__39324_39346 = G__39363;
chunk__39325_39347 = G__39364;
count__39326_39348 = G__39365;
i__39327_39349 = G__39366;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39367 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28139__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39367);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39367)))?cljs.core.second.call(null,arglists_39367):arglists_39367));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39328_39368 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39329_39369 = null;
var count__39330_39370 = (0);
var i__39331_39371 = (0);
while(true){
if((i__39331_39371 < count__39330_39370)){
var vec__39332_39372 = cljs.core._nth.call(null,chunk__39329_39369,i__39331_39371);
var name_39373 = cljs.core.nth.call(null,vec__39332_39372,(0),null);
var map__39335_39374 = cljs.core.nth.call(null,vec__39332_39372,(1),null);
var map__39335_39375__$1 = ((((!((map__39335_39374 == null)))?((((map__39335_39374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39335_39374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39335_39374):map__39335_39374);
var doc_39376 = cljs.core.get.call(null,map__39335_39375__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39377 = cljs.core.get.call(null,map__39335_39375__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39373);

cljs.core.println.call(null," ",arglists_39377);

if(cljs.core.truth_(doc_39376)){
cljs.core.println.call(null," ",doc_39376);
} else {
}

var G__39378 = seq__39328_39368;
var G__39379 = chunk__39329_39369;
var G__39380 = count__39330_39370;
var G__39381 = (i__39331_39371 + (1));
seq__39328_39368 = G__39378;
chunk__39329_39369 = G__39379;
count__39330_39370 = G__39380;
i__39331_39371 = G__39381;
continue;
} else {
var temp__4657__auto___39382 = cljs.core.seq.call(null,seq__39328_39368);
if(temp__4657__auto___39382){
var seq__39328_39383__$1 = temp__4657__auto___39382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39328_39383__$1)){
var c__28978__auto___39384 = cljs.core.chunk_first.call(null,seq__39328_39383__$1);
var G__39385 = cljs.core.chunk_rest.call(null,seq__39328_39383__$1);
var G__39386 = c__28978__auto___39384;
var G__39387 = cljs.core.count.call(null,c__28978__auto___39384);
var G__39388 = (0);
seq__39328_39368 = G__39385;
chunk__39329_39369 = G__39386;
count__39330_39370 = G__39387;
i__39331_39371 = G__39388;
continue;
} else {
var vec__39337_39389 = cljs.core.first.call(null,seq__39328_39383__$1);
var name_39390 = cljs.core.nth.call(null,vec__39337_39389,(0),null);
var map__39340_39391 = cljs.core.nth.call(null,vec__39337_39389,(1),null);
var map__39340_39392__$1 = ((((!((map__39340_39391 == null)))?((((map__39340_39391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39340_39391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39340_39391):map__39340_39391);
var doc_39393 = cljs.core.get.call(null,map__39340_39392__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39394 = cljs.core.get.call(null,map__39340_39392__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39390);

cljs.core.println.call(null," ",arglists_39394);

if(cljs.core.truth_(doc_39393)){
cljs.core.println.call(null," ",doc_39393);
} else {
}

var G__39395 = cljs.core.next.call(null,seq__39328_39383__$1);
var G__39396 = null;
var G__39397 = (0);
var G__39398 = (0);
seq__39328_39368 = G__39395;
chunk__39329_39369 = G__39396;
count__39330_39370 = G__39397;
i__39331_39371 = G__39398;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__39342 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39343 = null;
var count__39344 = (0);
var i__39345 = (0);
while(true){
if((i__39345 < count__39344)){
var role = cljs.core._nth.call(null,chunk__39343,i__39345);
var temp__4657__auto___39399__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39399__$1)){
var spec_39400 = temp__4657__auto___39399__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39400));
} else {
}

var G__39401 = seq__39342;
var G__39402 = chunk__39343;
var G__39403 = count__39344;
var G__39404 = (i__39345 + (1));
seq__39342 = G__39401;
chunk__39343 = G__39402;
count__39344 = G__39403;
i__39345 = G__39404;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__39342);
if(temp__4657__auto____$1){
var seq__39342__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39342__$1)){
var c__28978__auto__ = cljs.core.chunk_first.call(null,seq__39342__$1);
var G__39405 = cljs.core.chunk_rest.call(null,seq__39342__$1);
var G__39406 = c__28978__auto__;
var G__39407 = cljs.core.count.call(null,c__28978__auto__);
var G__39408 = (0);
seq__39342 = G__39405;
chunk__39343 = G__39406;
count__39344 = G__39407;
i__39345 = G__39408;
continue;
} else {
var role = cljs.core.first.call(null,seq__39342__$1);
var temp__4657__auto___39409__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39409__$2)){
var spec_39410 = temp__4657__auto___39409__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39410));
} else {
}

var G__39411 = cljs.core.next.call(null,seq__39342__$1);
var G__39412 = null;
var G__39413 = (0);
var G__39414 = (0);
seq__39342 = G__39411;
chunk__39343 = G__39412;
count__39344 = G__39413;
i__39345 = G__39414;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1506931525306
