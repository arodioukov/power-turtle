// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40227){
var map__40228 = p__40227;
var map__40228__$1 = ((((!((map__40228 == null)))?((((map__40228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40228):map__40228);
var m = map__40228__$1;
var n = cljs.core.get.call(null,map__40228__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__40228__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__40230_40252 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40231_40253 = null;
var count__40232_40254 = (0);
var i__40233_40255 = (0);
while(true){
if((i__40233_40255 < count__40232_40254)){
var f_40256 = cljs.core._nth.call(null,chunk__40231_40253,i__40233_40255);
cljs.core.println.call(null,"  ",f_40256);

var G__40257 = seq__40230_40252;
var G__40258 = chunk__40231_40253;
var G__40259 = count__40232_40254;
var G__40260 = (i__40233_40255 + (1));
seq__40230_40252 = G__40257;
chunk__40231_40253 = G__40258;
count__40232_40254 = G__40259;
i__40233_40255 = G__40260;
continue;
} else {
var temp__4657__auto___40261 = cljs.core.seq.call(null,seq__40230_40252);
if(temp__4657__auto___40261){
var seq__40230_40262__$1 = temp__4657__auto___40261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40230_40262__$1)){
var c__29665__auto___40263 = cljs.core.chunk_first.call(null,seq__40230_40262__$1);
var G__40264 = cljs.core.chunk_rest.call(null,seq__40230_40262__$1);
var G__40265 = c__29665__auto___40263;
var G__40266 = cljs.core.count.call(null,c__29665__auto___40263);
var G__40267 = (0);
seq__40230_40252 = G__40264;
chunk__40231_40253 = G__40265;
count__40232_40254 = G__40266;
i__40233_40255 = G__40267;
continue;
} else {
var f_40268 = cljs.core.first.call(null,seq__40230_40262__$1);
cljs.core.println.call(null,"  ",f_40268);

var G__40269 = cljs.core.next.call(null,seq__40230_40262__$1);
var G__40270 = null;
var G__40271 = (0);
var G__40272 = (0);
seq__40230_40252 = G__40269;
chunk__40231_40253 = G__40270;
count__40232_40254 = G__40271;
i__40233_40255 = G__40272;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40273 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_40273);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_40273)))?cljs.core.second.call(null,arglists_40273):arglists_40273));
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
var seq__40234_40274 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40235_40275 = null;
var count__40236_40276 = (0);
var i__40237_40277 = (0);
while(true){
if((i__40237_40277 < count__40236_40276)){
var vec__40238_40278 = cljs.core._nth.call(null,chunk__40235_40275,i__40237_40277);
var name_40279 = cljs.core.nth.call(null,vec__40238_40278,(0),null);
var map__40241_40280 = cljs.core.nth.call(null,vec__40238_40278,(1),null);
var map__40241_40281__$1 = ((((!((map__40241_40280 == null)))?((((map__40241_40280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40241_40280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40241_40280):map__40241_40280);
var doc_40282 = cljs.core.get.call(null,map__40241_40281__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40283 = cljs.core.get.call(null,map__40241_40281__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40279);

cljs.core.println.call(null," ",arglists_40283);

if(cljs.core.truth_(doc_40282)){
cljs.core.println.call(null," ",doc_40282);
} else {
}

var G__40284 = seq__40234_40274;
var G__40285 = chunk__40235_40275;
var G__40286 = count__40236_40276;
var G__40287 = (i__40237_40277 + (1));
seq__40234_40274 = G__40284;
chunk__40235_40275 = G__40285;
count__40236_40276 = G__40286;
i__40237_40277 = G__40287;
continue;
} else {
var temp__4657__auto___40288 = cljs.core.seq.call(null,seq__40234_40274);
if(temp__4657__auto___40288){
var seq__40234_40289__$1 = temp__4657__auto___40288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40234_40289__$1)){
var c__29665__auto___40290 = cljs.core.chunk_first.call(null,seq__40234_40289__$1);
var G__40291 = cljs.core.chunk_rest.call(null,seq__40234_40289__$1);
var G__40292 = c__29665__auto___40290;
var G__40293 = cljs.core.count.call(null,c__29665__auto___40290);
var G__40294 = (0);
seq__40234_40274 = G__40291;
chunk__40235_40275 = G__40292;
count__40236_40276 = G__40293;
i__40237_40277 = G__40294;
continue;
} else {
var vec__40243_40295 = cljs.core.first.call(null,seq__40234_40289__$1);
var name_40296 = cljs.core.nth.call(null,vec__40243_40295,(0),null);
var map__40246_40297 = cljs.core.nth.call(null,vec__40243_40295,(1),null);
var map__40246_40298__$1 = ((((!((map__40246_40297 == null)))?((((map__40246_40297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40246_40297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40246_40297):map__40246_40297);
var doc_40299 = cljs.core.get.call(null,map__40246_40298__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40300 = cljs.core.get.call(null,map__40246_40298__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40296);

cljs.core.println.call(null," ",arglists_40300);

if(cljs.core.truth_(doc_40299)){
cljs.core.println.call(null," ",doc_40299);
} else {
}

var G__40301 = cljs.core.next.call(null,seq__40234_40289__$1);
var G__40302 = null;
var G__40303 = (0);
var G__40304 = (0);
seq__40234_40274 = G__40301;
chunk__40235_40275 = G__40302;
count__40236_40276 = G__40303;
i__40237_40277 = G__40304;
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

var seq__40248 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40249 = null;
var count__40250 = (0);
var i__40251 = (0);
while(true){
if((i__40251 < count__40250)){
var role = cljs.core._nth.call(null,chunk__40249,i__40251);
var temp__4657__auto___40305__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___40305__$1)){
var spec_40306 = temp__4657__auto___40305__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_40306));
} else {
}

var G__40307 = seq__40248;
var G__40308 = chunk__40249;
var G__40309 = count__40250;
var G__40310 = (i__40251 + (1));
seq__40248 = G__40307;
chunk__40249 = G__40308;
count__40250 = G__40309;
i__40251 = G__40310;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__40248);
if(temp__4657__auto____$1){
var seq__40248__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40248__$1)){
var c__29665__auto__ = cljs.core.chunk_first.call(null,seq__40248__$1);
var G__40311 = cljs.core.chunk_rest.call(null,seq__40248__$1);
var G__40312 = c__29665__auto__;
var G__40313 = cljs.core.count.call(null,c__29665__auto__);
var G__40314 = (0);
seq__40248 = G__40311;
chunk__40249 = G__40312;
count__40250 = G__40313;
i__40251 = G__40314;
continue;
} else {
var role = cljs.core.first.call(null,seq__40248__$1);
var temp__4657__auto___40315__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___40315__$2)){
var spec_40316 = temp__4657__auto___40315__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_40316));
} else {
}

var G__40317 = cljs.core.next.call(null,seq__40248__$1);
var G__40318 = null;
var G__40319 = (0);
var G__40320 = (0);
seq__40248 = G__40317;
chunk__40249 = G__40318;
count__40250 = G__40319;
i__40251 = G__40320;
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

//# sourceMappingURL=repl.js.map?rel=1506931010273
