// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x44284_44285 = value;
x44284_44285.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x44287_44288 = value;
x44287_44288.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x44290_44291 = value;
x44290_44291.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__28814__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__28814__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__28814__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__30002__auto__ = [];
var len__29995__auto___44298 = arguments.length;
var i__29996__auto___44299 = (0);
while(true){
if((i__29996__auto___44299 < len__29995__auto___44298)){
args__30002__auto__.push((arguments[i__29996__auto___44299]));

var G__44300 = (i__29996__auto___44299 + (1));
i__29996__auto___44299 = G__44300;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__44294_44301 = cljs.core.seq.call(null,items);
var chunk__44295_44302 = null;
var count__44296_44303 = (0);
var i__44297_44304 = (0);
while(true){
if((i__44297_44304 < count__44296_44303)){
var item_44305 = cljs.core._nth.call(null,chunk__44295_44302,i__44297_44304);
if(!((item_44305 == null))){
if(cljs.core.coll_QMARK_.call(null,item_44305)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_44305)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_44305));
}
} else {
}

var G__44306 = seq__44294_44301;
var G__44307 = chunk__44295_44302;
var G__44308 = count__44296_44303;
var G__44309 = (i__44297_44304 + (1));
seq__44294_44301 = G__44306;
chunk__44295_44302 = G__44307;
count__44296_44303 = G__44308;
i__44297_44304 = G__44309;
continue;
} else {
var temp__4657__auto___44310 = cljs.core.seq.call(null,seq__44294_44301);
if(temp__4657__auto___44310){
var seq__44294_44311__$1 = temp__4657__auto___44310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44294_44311__$1)){
var c__29665__auto___44312 = cljs.core.chunk_first.call(null,seq__44294_44311__$1);
var G__44313 = cljs.core.chunk_rest.call(null,seq__44294_44311__$1);
var G__44314 = c__29665__auto___44312;
var G__44315 = cljs.core.count.call(null,c__29665__auto___44312);
var G__44316 = (0);
seq__44294_44301 = G__44313;
chunk__44295_44302 = G__44314;
count__44296_44303 = G__44315;
i__44297_44304 = G__44316;
continue;
} else {
var item_44317 = cljs.core.first.call(null,seq__44294_44311__$1);
if(!((item_44317 == null))){
if(cljs.core.coll_QMARK_.call(null,item_44317)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_44317)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_44317));
}
} else {
}

var G__44318 = cljs.core.next.call(null,seq__44294_44311__$1);
var G__44319 = null;
var G__44320 = (0);
var G__44321 = (0);
seq__44294_44301 = G__44318;
chunk__44295_44302 = G__44319;
count__44296_44303 = G__44320;
i__44297_44304 = G__44321;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq44293){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44293));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__30002__auto__ = [];
var len__29995__auto___44329 = arguments.length;
var i__29996__auto___44330 = (0);
while(true){
if((i__29996__auto___44330 < len__29995__auto___44329)){
args__30002__auto__.push((arguments[i__29996__auto___44330]));

var G__44331 = (i__29996__auto___44330 + (1));
i__29996__auto___44330 = G__44331;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__44325_44332 = cljs.core.seq.call(null,children);
var chunk__44326_44333 = null;
var count__44327_44334 = (0);
var i__44328_44335 = (0);
while(true){
if((i__44328_44335 < count__44327_44334)){
var child_44336 = cljs.core._nth.call(null,chunk__44326_44333,i__44328_44335);
if(!((child_44336 == null))){
if(cljs.core.coll_QMARK_.call(null,child_44336)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_44336))));
} else {
var temp__4655__auto___44337 = devtools.formatters.helpers.pref.call(null,child_44336);
if(cljs.core.truth_(temp__4655__auto___44337)){
var child_value_44338 = temp__4655__auto___44337;
template.push(child_value_44338);
} else {
}
}
} else {
}

var G__44339 = seq__44325_44332;
var G__44340 = chunk__44326_44333;
var G__44341 = count__44327_44334;
var G__44342 = (i__44328_44335 + (1));
seq__44325_44332 = G__44339;
chunk__44326_44333 = G__44340;
count__44327_44334 = G__44341;
i__44328_44335 = G__44342;
continue;
} else {
var temp__4657__auto___44343 = cljs.core.seq.call(null,seq__44325_44332);
if(temp__4657__auto___44343){
var seq__44325_44344__$1 = temp__4657__auto___44343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44325_44344__$1)){
var c__29665__auto___44345 = cljs.core.chunk_first.call(null,seq__44325_44344__$1);
var G__44346 = cljs.core.chunk_rest.call(null,seq__44325_44344__$1);
var G__44347 = c__29665__auto___44345;
var G__44348 = cljs.core.count.call(null,c__29665__auto___44345);
var G__44349 = (0);
seq__44325_44332 = G__44346;
chunk__44326_44333 = G__44347;
count__44327_44334 = G__44348;
i__44328_44335 = G__44349;
continue;
} else {
var child_44350 = cljs.core.first.call(null,seq__44325_44344__$1);
if(!((child_44350 == null))){
if(cljs.core.coll_QMARK_.call(null,child_44350)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_44350))));
} else {
var temp__4655__auto___44351 = devtools.formatters.helpers.pref.call(null,child_44350);
if(cljs.core.truth_(temp__4655__auto___44351)){
var child_value_44352 = temp__4655__auto___44351;
template.push(child_value_44352);
} else {
}
}
} else {
}

var G__44353 = cljs.core.next.call(null,seq__44325_44344__$1);
var G__44354 = null;
var G__44355 = (0);
var G__44356 = (0);
seq__44325_44332 = G__44353;
chunk__44326_44333 = G__44354;
count__44327_44334 = G__44355;
i__44328_44335 = G__44356;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq44322){
var G__44323 = cljs.core.first.call(null,seq44322);
var seq44322__$1 = cljs.core.next.call(null,seq44322);
var G__44324 = cljs.core.first.call(null,seq44322__$1);
var seq44322__$2 = cljs.core.next.call(null,seq44322__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__44323,G__44324,seq44322__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__30002__auto__ = [];
var len__29995__auto___44359 = arguments.length;
var i__29996__auto___44360 = (0);
while(true){
if((i__29996__auto___44360 < len__29995__auto___44359)){
args__30002__auto__.push((arguments[i__29996__auto___44360]));

var G__44361 = (i__29996__auto___44360 + (1));
i__29996__auto___44360 = G__44361;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((1) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30003__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq44357){
var G__44358 = cljs.core.first.call(null,seq44357);
var seq44357__$1 = cljs.core.next.call(null,seq44357);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44358,seq44357__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__30002__auto__ = [];
var len__29995__auto___44364 = arguments.length;
var i__29996__auto___44365 = (0);
while(true){
if((i__29996__auto___44365 < len__29995__auto___44364)){
args__30002__auto__.push((arguments[i__29996__auto___44365]));

var G__44366 = (i__29996__auto___44365 + (1));
i__29996__auto___44365 = G__44366;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((1) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30003__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq44362){
var G__44363 = cljs.core.first.call(null,seq44362);
var seq44362__$1 = cljs.core.next.call(null,seq44362);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44363,seq44362__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__44368 = arguments.length;
switch (G__44368) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj44370 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__28826__auto__ = start_index;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return (0);
}
})()};
return obj44370;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__30002__auto__ = [];
var len__29995__auto___44378 = arguments.length;
var i__29996__auto___44379 = (0);
while(true){
if((i__29996__auto___44379 < len__29995__auto___44378)){
args__30002__auto__.push((arguments[i__29996__auto___44379]));

var G__44380 = (i__29996__auto___44379 + (1));
i__29996__auto___44379 = G__44380;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((1) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30003__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__44374){
var vec__44375 = p__44374;
var state_override_fn = cljs.core.nth.call(null,vec__44375,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq44372){
var G__44373 = cljs.core.first.call(null,seq44372);
var seq44372__$1 = cljs.core.next.call(null,seq44372);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__44373,seq44372__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_44381 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_44381;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__44382 = name;
switch (G__44382) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__44384 = tag;
var html_tag = cljs.core.nth.call(null,vec__44384,(0),null);
var style = cljs.core.nth.call(null,vec__44384,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_44387 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_44387;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_44388 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_44389 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_44389;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_44388;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__44390 = initial_value;
var G__44391 = value.call(null);
initial_value = G__44390;
value = G__44391;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__44392 = initial_value;
var G__44393 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__44392;
value = G__44393;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__44394 = initial_value;
var G__44395 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__44394;
value = G__44395;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1506931026832
