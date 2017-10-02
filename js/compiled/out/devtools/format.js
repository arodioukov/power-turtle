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
var x__28822__auto__ = (((value == null))?null:value);
var m__28823__auto__ = (devtools.format._header[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,value);
} else {
var m__28823__auto____$1 = (devtools.format._header["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,value);
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
var x__28822__auto__ = (((value == null))?null:value);
var m__28823__auto__ = (devtools.format._has_body[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,value);
} else {
var m__28823__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,value);
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
var x__28822__auto__ = (((value == null))?null:value);
var m__28823__auto__ = (devtools.format._body[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,value);
} else {
var m__28823__auto____$1 = (devtools.format._body["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,value);
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
var o45967 = temp__4655__auto__;
var temp__4655__auto____$1 = (o45967["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o45968 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o45968["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o45969 = temp__4655__auto____$2;
return (o45969["make_template"]);
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
var o45970 = temp__4655__auto__;
var temp__4655__auto____$1 = (o45970["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o45971 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o45971["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o45972 = temp__4655__auto____$2;
return (o45972["make_group"]);
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
var o45973 = temp__4655__auto__;
var temp__4655__auto____$1 = (o45973["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o45974 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o45974["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o45975 = temp__4655__auto____$2;
return (o45975["make_reference"]);
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
var o45976 = temp__4655__auto__;
var temp__4655__auto____$1 = (o45976["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o45977 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o45977["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o45978 = temp__4655__auto____$2;
return (o45978["make_surrogate"]);
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
var o45979 = temp__4655__auto__;
var temp__4655__auto____$1 = (o45979["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o45980 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o45980["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o45981 = temp__4655__auto____$2;
return (o45981["render_markup"]);
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
var o45982 = temp__4655__auto__;
var temp__4655__auto____$1 = (o45982["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o45983 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o45983["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o45984 = temp__4655__auto____$2;
return (o45984["_LT_header_GT_"]);
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
var o45985 = temp__4655__auto__;
var temp__4655__auto____$1 = (o45985["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o45986 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o45986["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o45987 = temp__4655__auto____$2;
return (o45987["_LT_standard_body_GT_"]);
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
var args__29315__auto__ = [];
var len__29308__auto___45989 = arguments.length;
var i__29309__auto___45990 = (0);
while(true){
if((i__29309__auto___45990 < len__29308__auto___45989)){
args__29315__auto__.push((arguments[i__29309__auto___45990]));

var G__45991 = (i__29309__auto___45990 + (1));
i__29309__auto___45990 = G__45991;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq45988){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45988));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29315__auto__ = [];
var len__29308__auto___45993 = arguments.length;
var i__29309__auto___45994 = (0);
while(true){
if((i__29309__auto___45994 < len__29308__auto___45993)){
args__29315__auto__.push((arguments[i__29309__auto___45994]));

var G__45995 = (i__29309__auto___45994 + (1));
i__29309__auto___45994 = G__45995;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq45992){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45992));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29315__auto__ = [];
var len__29308__auto___45997 = arguments.length;
var i__29309__auto___45998 = (0);
while(true){
if((i__29309__auto___45998 < len__29308__auto___45997)){
args__29315__auto__.push((arguments[i__29309__auto___45998]));

var G__45999 = (i__29309__auto___45998 + (1));
i__29309__auto___45998 = G__45999;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq45996){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45996));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29315__auto__ = [];
var len__29308__auto___46001 = arguments.length;
var i__29309__auto___46002 = (0);
while(true){
if((i__29309__auto___46002 < len__29308__auto___46001)){
args__29315__auto__.push((arguments[i__29309__auto___46002]));

var G__46003 = (i__29309__auto___46002 + (1));
i__29309__auto___46002 = G__46003;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq46000){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46000));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29315__auto__ = [];
var len__29308__auto___46005 = arguments.length;
var i__29309__auto___46006 = (0);
while(true){
if((i__29309__auto___46006 < len__29308__auto___46005)){
args__29315__auto__.push((arguments[i__29309__auto___46006]));

var G__46007 = (i__29309__auto___46006 + (1));
i__29309__auto___46006 = G__46007;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq46004){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46004));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29315__auto__ = [];
var len__29308__auto___46009 = arguments.length;
var i__29309__auto___46010 = (0);
while(true){
if((i__29309__auto___46010 < len__29308__auto___46009)){
args__29315__auto__.push((arguments[i__29309__auto___46010]));

var G__46011 = (i__29309__auto___46010 + (1));
i__29309__auto___46010 = G__46011;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq46008){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46008));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29315__auto__ = [];
var len__29308__auto___46013 = arguments.length;
var i__29309__auto___46014 = (0);
while(true){
if((i__29309__auto___46014 < len__29308__auto___46013)){
args__29315__auto__.push((arguments[i__29309__auto___46014]));

var G__46015 = (i__29309__auto___46014 + (1));
i__29309__auto___46014 = G__46015;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq46012){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46012));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29315__auto__ = [];
var len__29308__auto___46023 = arguments.length;
var i__29309__auto___46024 = (0);
while(true){
if((i__29309__auto___46024 < len__29308__auto___46023)){
args__29315__auto__.push((arguments[i__29309__auto___46024]));

var G__46025 = (i__29309__auto___46024 + (1));
i__29309__auto___46024 = G__46025;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((1) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29316__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__46019){
var vec__46020 = p__46019;
var state_override = cljs.core.nth.call(null,vec__46020,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__46020,state_override){
return (function (p1__46016_SHARP_){
return cljs.core.merge.call(null,p1__46016_SHARP_,state_override);
});})(vec__46020,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq46017){
var G__46018 = cljs.core.first.call(null,seq46017);
var seq46017__$1 = cljs.core.next.call(null,seq46017);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__46018,seq46017__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29315__auto__ = [];
var len__29308__auto___46027 = arguments.length;
var i__29309__auto___46028 = (0);
while(true){
if((i__29309__auto___46028 < len__29308__auto___46027)){
args__29315__auto__.push((arguments[i__29309__auto___46028]));

var G__46029 = (i__29309__auto___46028 + (1));
i__29309__auto___46028 = G__46029;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq46026){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46026));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29315__auto__ = [];
var len__29308__auto___46032 = arguments.length;
var i__29309__auto___46033 = (0);
while(true){
if((i__29309__auto___46033 < len__29308__auto___46032)){
args__29315__auto__.push((arguments[i__29309__auto___46033]));

var G__46034 = (i__29309__auto___46033 + (1));
i__29309__auto___46033 = G__46034;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((1) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29316__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq46030){
var G__46031 = cljs.core.first.call(null,seq46030);
var seq46030__$1 = cljs.core.next.call(null,seq46030);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__46031,seq46030__$1);
});


//# sourceMappingURL=format.js.map?rel=1506931542878
