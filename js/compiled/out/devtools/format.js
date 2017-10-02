// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__29509__auto__ = (((value == null))?null:value);
var m__29510__auto__ = (devtools.format._header[goog.typeOf(x__29509__auto__)]);
if(!((m__29510__auto__ == null))){
return m__29510__auto__.call(null,value);
} else {
var m__29510__auto____$1 = (devtools.format._header["_"]);
if(!((m__29510__auto____$1 == null))){
return m__29510__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__29509__auto__ = (((value == null))?null:value);
var m__29510__auto__ = (devtools.format._has_body[goog.typeOf(x__29509__auto__)]);
if(!((m__29510__auto__ == null))){
return m__29510__auto__.call(null,value);
} else {
var m__29510__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__29510__auto____$1 == null))){
return m__29510__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__29509__auto__ = (((value == null))?null:value);
var m__29510__auto__ = (devtools.format._body[goog.typeOf(x__29509__auto__)]);
if(!((m__29510__auto__ == null))){
return m__29510__auto__.call(null,value);
} else {
var m__29510__auto____$1 = (devtools.format._body["_"]);
if(!((m__29510__auto____$1 == null))){
return m__29510__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o42096 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42096["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42097 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42097["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42098 = temp__4655__auto____$2;
return (o42098["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o42099 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42099["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42100 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42100["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42101 = temp__4655__auto____$2;
return (o42101["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o42102 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42102["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42103 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42103["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42104 = temp__4655__auto____$2;
return (o42104["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o42105 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42105["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42106 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42106["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42107 = temp__4655__auto____$2;
return (o42107["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o42108 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42108["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42109 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42109["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42110 = temp__4655__auto____$2;
return (o42110["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o42111 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42111["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42112 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42112["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42113 = temp__4655__auto____$2;
return (o42113["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o42114 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42114["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42115 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42115["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42116 = temp__4655__auto____$2;
return (o42116["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__30002__auto__ = [];
var len__29995__auto___42118 = arguments.length;
var i__29996__auto___42119 = (0);
while(true){
if((i__29996__auto___42119 < len__29995__auto___42118)){
args__30002__auto__.push((arguments[i__29996__auto___42119]));

var G__42120 = (i__29996__auto___42119 + (1));
i__29996__auto___42119 = G__42120;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq42117){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42117));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__30002__auto__ = [];
var len__29995__auto___42122 = arguments.length;
var i__29996__auto___42123 = (0);
while(true){
if((i__29996__auto___42123 < len__29995__auto___42122)){
args__30002__auto__.push((arguments[i__29996__auto___42123]));

var G__42124 = (i__29996__auto___42123 + (1));
i__29996__auto___42123 = G__42124;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq42121){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42121));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__30002__auto__ = [];
var len__29995__auto___42126 = arguments.length;
var i__29996__auto___42127 = (0);
while(true){
if((i__29996__auto___42127 < len__29995__auto___42126)){
args__30002__auto__.push((arguments[i__29996__auto___42127]));

var G__42128 = (i__29996__auto___42127 + (1));
i__29996__auto___42127 = G__42128;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq42125){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42125));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__30002__auto__ = [];
var len__29995__auto___42130 = arguments.length;
var i__29996__auto___42131 = (0);
while(true){
if((i__29996__auto___42131 < len__29995__auto___42130)){
args__30002__auto__.push((arguments[i__29996__auto___42131]));

var G__42132 = (i__29996__auto___42131 + (1));
i__29996__auto___42131 = G__42132;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq42129){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42129));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__30002__auto__ = [];
var len__29995__auto___42134 = arguments.length;
var i__29996__auto___42135 = (0);
while(true){
if((i__29996__auto___42135 < len__29995__auto___42134)){
args__30002__auto__.push((arguments[i__29996__auto___42135]));

var G__42136 = (i__29996__auto___42135 + (1));
i__29996__auto___42135 = G__42136;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq42133){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42133));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__30002__auto__ = [];
var len__29995__auto___42138 = arguments.length;
var i__29996__auto___42139 = (0);
while(true){
if((i__29996__auto___42139 < len__29995__auto___42138)){
args__30002__auto__.push((arguments[i__29996__auto___42139]));

var G__42140 = (i__29996__auto___42139 + (1));
i__29996__auto___42139 = G__42140;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq42137){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42137));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__30002__auto__ = [];
var len__29995__auto___42142 = arguments.length;
var i__29996__auto___42143 = (0);
while(true){
if((i__29996__auto___42143 < len__29995__auto___42142)){
args__30002__auto__.push((arguments[i__29996__auto___42143]));

var G__42144 = (i__29996__auto___42143 + (1));
i__29996__auto___42143 = G__42144;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq42141){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42141));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__30002__auto__ = [];
var len__29995__auto___42152 = arguments.length;
var i__29996__auto___42153 = (0);
while(true){
if((i__29996__auto___42153 < len__29995__auto___42152)){
args__30002__auto__.push((arguments[i__29996__auto___42153]));

var G__42154 = (i__29996__auto___42153 + (1));
i__29996__auto___42153 = G__42154;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((1) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30003__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__42148){
var vec__42149 = p__42148;
var state_override = cljs.core.nth.call(null,vec__42149,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__42149,state_override){
return (function (p1__42145_SHARP_){
return cljs.core.merge.call(null,p1__42145_SHARP_,state_override);
});})(vec__42149,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq42146){
var G__42147 = cljs.core.first.call(null,seq42146);
var seq42146__$1 = cljs.core.next.call(null,seq42146);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__42147,seq42146__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__30002__auto__ = [];
var len__29995__auto___42156 = arguments.length;
var i__29996__auto___42157 = (0);
while(true){
if((i__29996__auto___42157 < len__29995__auto___42156)){
args__30002__auto__.push((arguments[i__29996__auto___42157]));

var G__42158 = (i__29996__auto___42157 + (1));
i__29996__auto___42157 = G__42158;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq42155){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42155));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__30002__auto__ = [];
var len__29995__auto___42161 = arguments.length;
var i__29996__auto___42162 = (0);
while(true){
if((i__29996__auto___42162 < len__29995__auto___42161)){
args__30002__auto__.push((arguments[i__29996__auto___42162]));

var G__42163 = (i__29996__auto___42162 + (1));
i__29996__auto___42162 = G__42163;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((1) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30003__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq42159){
var G__42160 = cljs.core.first.call(null,seq42159);
var seq42159__$1 = cljs.core.next.call(null,seq42159);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__42160,seq42159__$1);
});


//# sourceMappingURL=format.js.map?rel=1506931024215
