// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e44986){if((e44986 instanceof Error)){
var e = e44986;
return "Error: Unable to stringify";
} else {
throw e44986;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__44989 = arguments.length;
switch (G__44989) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__44987_SHARP_){
if(typeof p1__44987_SHARP_ === 'string'){
return p1__44987_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__44987_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29315__auto__ = [];
var len__29308__auto___44992 = arguments.length;
var i__29309__auto___44993 = (0);
while(true){
if((i__29309__auto___44993 < len__29308__auto___44992)){
args__29315__auto__.push((arguments[i__29309__auto___44993]));

var G__44994 = (i__29309__auto___44993 + (1));
i__29309__auto___44993 = G__44994;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq44991){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44991));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29315__auto__ = [];
var len__29308__auto___44996 = arguments.length;
var i__29309__auto___44997 = (0);
while(true){
if((i__29309__auto___44997 < len__29308__auto___44996)){
args__29315__auto__.push((arguments[i__29309__auto___44997]));

var G__44998 = (i__29309__auto___44997 + (1));
i__29309__auto___44997 = G__44998;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq44995){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44995));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__44999){
var map__45000 = p__44999;
var map__45000__$1 = ((((!((map__45000 == null)))?((((map__45000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45000):map__45000);
var message = cljs.core.get.call(null,map__45000__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__45000__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28139__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28127__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28127__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28127__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__42199__auto___45079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto___45079,ch){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto___45079,ch){
return (function (state_45051){
var state_val_45052 = (state_45051[(1)]);
if((state_val_45052 === (7))){
var inst_45047 = (state_45051[(2)]);
var state_45051__$1 = state_45051;
var statearr_45053_45080 = state_45051__$1;
(statearr_45053_45080[(2)] = inst_45047);

(statearr_45053_45080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45052 === (1))){
var state_45051__$1 = state_45051;
var statearr_45054_45081 = state_45051__$1;
(statearr_45054_45081[(2)] = null);

(statearr_45054_45081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45052 === (4))){
var inst_45004 = (state_45051[(7)]);
var inst_45004__$1 = (state_45051[(2)]);
var state_45051__$1 = (function (){var statearr_45055 = state_45051;
(statearr_45055[(7)] = inst_45004__$1);

return statearr_45055;
})();
if(cljs.core.truth_(inst_45004__$1)){
var statearr_45056_45082 = state_45051__$1;
(statearr_45056_45082[(1)] = (5));

} else {
var statearr_45057_45083 = state_45051__$1;
(statearr_45057_45083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45052 === (15))){
var inst_45011 = (state_45051[(8)]);
var inst_45026 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45011);
var inst_45027 = cljs.core.first.call(null,inst_45026);
var inst_45028 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_45027);
var inst_45029 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45028)].join('');
var inst_45030 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_45029);
var state_45051__$1 = state_45051;
var statearr_45058_45084 = state_45051__$1;
(statearr_45058_45084[(2)] = inst_45030);

(statearr_45058_45084[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45052 === (13))){
var inst_45035 = (state_45051[(2)]);
var state_45051__$1 = state_45051;
var statearr_45059_45085 = state_45051__$1;
(statearr_45059_45085[(2)] = inst_45035);

(statearr_45059_45085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45052 === (6))){
var state_45051__$1 = state_45051;
var statearr_45060_45086 = state_45051__$1;
(statearr_45060_45086[(2)] = null);

(statearr_45060_45086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45052 === (17))){
var inst_45033 = (state_45051[(2)]);
var state_45051__$1 = state_45051;
var statearr_45061_45087 = state_45051__$1;
(statearr_45061_45087[(2)] = inst_45033);

(statearr_45061_45087[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45052 === (3))){
var inst_45049 = (state_45051[(2)]);
var state_45051__$1 = state_45051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45051__$1,inst_45049);
} else {
if((state_val_45052 === (12))){
var inst_45010 = (state_45051[(9)]);
var inst_45024 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_45010,opts);
var state_45051__$1 = state_45051;
if(cljs.core.truth_(inst_45024)){
var statearr_45062_45088 = state_45051__$1;
(statearr_45062_45088[(1)] = (15));

} else {
var statearr_45063_45089 = state_45051__$1;
(statearr_45063_45089[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45052 === (2))){
var state_45051__$1 = state_45051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45051__$1,(4),ch);
} else {
if((state_val_45052 === (11))){
var inst_45011 = (state_45051[(8)]);
var inst_45016 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45017 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_45011);
var inst_45018 = cljs.core.async.timeout.call(null,(1000));
var inst_45019 = [inst_45017,inst_45018];
var inst_45020 = (new cljs.core.PersistentVector(null,2,(5),inst_45016,inst_45019,null));
var state_45051__$1 = state_45051;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45051__$1,(14),inst_45020);
} else {
if((state_val_45052 === (9))){
var inst_45011 = (state_45051[(8)]);
var inst_45037 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_45038 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45011);
var inst_45039 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45038);
var inst_45040 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45039)].join('');
var inst_45041 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_45040);
var state_45051__$1 = (function (){var statearr_45064 = state_45051;
(statearr_45064[(10)] = inst_45037);

return statearr_45064;
})();
var statearr_45065_45090 = state_45051__$1;
(statearr_45065_45090[(2)] = inst_45041);

(statearr_45065_45090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45052 === (5))){
var inst_45004 = (state_45051[(7)]);
var inst_45006 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_45007 = (new cljs.core.PersistentArrayMap(null,2,inst_45006,null));
var inst_45008 = (new cljs.core.PersistentHashSet(null,inst_45007,null));
var inst_45009 = figwheel.client.focus_msgs.call(null,inst_45008,inst_45004);
var inst_45010 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_45009);
var inst_45011 = cljs.core.first.call(null,inst_45009);
var inst_45012 = figwheel.client.autoload_QMARK_.call(null);
var state_45051__$1 = (function (){var statearr_45066 = state_45051;
(statearr_45066[(8)] = inst_45011);

(statearr_45066[(9)] = inst_45010);

return statearr_45066;
})();
if(cljs.core.truth_(inst_45012)){
var statearr_45067_45091 = state_45051__$1;
(statearr_45067_45091[(1)] = (8));

} else {
var statearr_45068_45092 = state_45051__$1;
(statearr_45068_45092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45052 === (14))){
var inst_45022 = (state_45051[(2)]);
var state_45051__$1 = state_45051;
var statearr_45069_45093 = state_45051__$1;
(statearr_45069_45093[(2)] = inst_45022);

(statearr_45069_45093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45052 === (16))){
var state_45051__$1 = state_45051;
var statearr_45070_45094 = state_45051__$1;
(statearr_45070_45094[(2)] = null);

(statearr_45070_45094[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45052 === (10))){
var inst_45043 = (state_45051[(2)]);
var state_45051__$1 = (function (){var statearr_45071 = state_45051;
(statearr_45071[(11)] = inst_45043);

return statearr_45071;
})();
var statearr_45072_45095 = state_45051__$1;
(statearr_45072_45095[(2)] = null);

(statearr_45072_45095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45052 === (8))){
var inst_45010 = (state_45051[(9)]);
var inst_45014 = figwheel.client.reload_file_state_QMARK_.call(null,inst_45010,opts);
var state_45051__$1 = state_45051;
if(cljs.core.truth_(inst_45014)){
var statearr_45073_45096 = state_45051__$1;
(statearr_45073_45096[(1)] = (11));

} else {
var statearr_45074_45097 = state_45051__$1;
(statearr_45074_45097[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42199__auto___45079,ch))
;
return ((function (switch__42111__auto__,c__42199__auto___45079,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__42112__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__42112__auto____0 = (function (){
var statearr_45075 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45075[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__42112__auto__);

(statearr_45075[(1)] = (1));

return statearr_45075;
});
var figwheel$client$file_reloader_plugin_$_state_machine__42112__auto____1 = (function (state_45051){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_45051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e45076){if((e45076 instanceof Object)){
var ex__42115__auto__ = e45076;
var statearr_45077_45098 = state_45051;
(statearr_45077_45098[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45099 = state_45051;
state_45051 = G__45099;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__42112__auto__ = function(state_45051){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__42112__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__42112__auto____1.call(this,state_45051);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__42112__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__42112__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto___45079,ch))
})();
var state__42201__auto__ = (function (){var statearr_45078 = f__42200__auto__.call(null);
(statearr_45078[(6)] = c__42199__auto___45079);

return statearr_45078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto___45079,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__45100_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__45100_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_45102 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_45102){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e45101){if((e45101 instanceof Error)){
var e = e45101;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_45102], null));
} else {
var e = e45101;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_45102))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__45103){
var map__45104 = p__45103;
var map__45104__$1 = ((((!((map__45104 == null)))?((((map__45104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45104):map__45104);
var opts = map__45104__$1;
var build_id = cljs.core.get.call(null,map__45104__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__45104,map__45104__$1,opts,build_id){
return (function (p__45106){
var vec__45107 = p__45106;
var seq__45108 = cljs.core.seq.call(null,vec__45107);
var first__45109 = cljs.core.first.call(null,seq__45108);
var seq__45108__$1 = cljs.core.next.call(null,seq__45108);
var map__45110 = first__45109;
var map__45110__$1 = ((((!((map__45110 == null)))?((((map__45110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45110):map__45110);
var msg = map__45110__$1;
var msg_name = cljs.core.get.call(null,map__45110__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45108__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__45107,seq__45108,first__45109,seq__45108__$1,map__45110,map__45110__$1,msg,msg_name,_,map__45104,map__45104__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__45107,seq__45108,first__45109,seq__45108__$1,map__45110,map__45110__$1,msg,msg_name,_,map__45104,map__45104__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__45104,map__45104__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__45112){
var vec__45113 = p__45112;
var seq__45114 = cljs.core.seq.call(null,vec__45113);
var first__45115 = cljs.core.first.call(null,seq__45114);
var seq__45114__$1 = cljs.core.next.call(null,seq__45114);
var map__45116 = first__45115;
var map__45116__$1 = ((((!((map__45116 == null)))?((((map__45116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45116):map__45116);
var msg = map__45116__$1;
var msg_name = cljs.core.get.call(null,map__45116__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45114__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__45118){
var map__45119 = p__45118;
var map__45119__$1 = ((((!((map__45119 == null)))?((((map__45119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45119):map__45119);
var on_compile_warning = cljs.core.get.call(null,map__45119__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__45119__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__45119,map__45119__$1,on_compile_warning,on_compile_fail){
return (function (p__45121){
var vec__45122 = p__45121;
var seq__45123 = cljs.core.seq.call(null,vec__45122);
var first__45124 = cljs.core.first.call(null,seq__45123);
var seq__45123__$1 = cljs.core.next.call(null,seq__45123);
var map__45125 = first__45124;
var map__45125__$1 = ((((!((map__45125 == null)))?((((map__45125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45125):map__45125);
var msg = map__45125__$1;
var msg_name = cljs.core.get.call(null,map__45125__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45123__$1;
var pred__45127 = cljs.core._EQ_;
var expr__45128 = msg_name;
if(cljs.core.truth_(pred__45127.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__45128))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__45127.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__45128))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__45119,map__45119__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__42199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto__,msg_hist,msg_names,msg){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto__,msg_hist,msg_names,msg){
return (function (state_45217){
var state_val_45218 = (state_45217[(1)]);
if((state_val_45218 === (7))){
var inst_45137 = (state_45217[(2)]);
var state_45217__$1 = state_45217;
if(cljs.core.truth_(inst_45137)){
var statearr_45219_45266 = state_45217__$1;
(statearr_45219_45266[(1)] = (8));

} else {
var statearr_45220_45267 = state_45217__$1;
(statearr_45220_45267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (20))){
var inst_45211 = (state_45217[(2)]);
var state_45217__$1 = state_45217;
var statearr_45221_45268 = state_45217__$1;
(statearr_45221_45268[(2)] = inst_45211);

(statearr_45221_45268[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (27))){
var inst_45207 = (state_45217[(2)]);
var state_45217__$1 = state_45217;
var statearr_45222_45269 = state_45217__$1;
(statearr_45222_45269[(2)] = inst_45207);

(statearr_45222_45269[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (1))){
var inst_45130 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_45217__$1 = state_45217;
if(cljs.core.truth_(inst_45130)){
var statearr_45223_45270 = state_45217__$1;
(statearr_45223_45270[(1)] = (2));

} else {
var statearr_45224_45271 = state_45217__$1;
(statearr_45224_45271[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (24))){
var inst_45209 = (state_45217[(2)]);
var state_45217__$1 = state_45217;
var statearr_45225_45272 = state_45217__$1;
(statearr_45225_45272[(2)] = inst_45209);

(statearr_45225_45272[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (4))){
var inst_45215 = (state_45217[(2)]);
var state_45217__$1 = state_45217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45217__$1,inst_45215);
} else {
if((state_val_45218 === (15))){
var inst_45213 = (state_45217[(2)]);
var state_45217__$1 = state_45217;
var statearr_45226_45273 = state_45217__$1;
(statearr_45226_45273[(2)] = inst_45213);

(statearr_45226_45273[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (21))){
var inst_45166 = (state_45217[(2)]);
var inst_45167 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45168 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45167);
var state_45217__$1 = (function (){var statearr_45227 = state_45217;
(statearr_45227[(7)] = inst_45166);

return statearr_45227;
})();
var statearr_45228_45274 = state_45217__$1;
(statearr_45228_45274[(2)] = inst_45168);

(statearr_45228_45274[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (31))){
var inst_45196 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_45217__$1 = state_45217;
if(cljs.core.truth_(inst_45196)){
var statearr_45229_45275 = state_45217__$1;
(statearr_45229_45275[(1)] = (34));

} else {
var statearr_45230_45276 = state_45217__$1;
(statearr_45230_45276[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (32))){
var inst_45205 = (state_45217[(2)]);
var state_45217__$1 = state_45217;
var statearr_45231_45277 = state_45217__$1;
(statearr_45231_45277[(2)] = inst_45205);

(statearr_45231_45277[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (33))){
var inst_45192 = (state_45217[(2)]);
var inst_45193 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45194 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45193);
var state_45217__$1 = (function (){var statearr_45232 = state_45217;
(statearr_45232[(8)] = inst_45192);

return statearr_45232;
})();
var statearr_45233_45278 = state_45217__$1;
(statearr_45233_45278[(2)] = inst_45194);

(statearr_45233_45278[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (13))){
var inst_45151 = figwheel.client.heads_up.clear.call(null);
var state_45217__$1 = state_45217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45217__$1,(16),inst_45151);
} else {
if((state_val_45218 === (22))){
var inst_45172 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45173 = figwheel.client.heads_up.append_warning_message.call(null,inst_45172);
var state_45217__$1 = state_45217;
var statearr_45234_45279 = state_45217__$1;
(statearr_45234_45279[(2)] = inst_45173);

(statearr_45234_45279[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (36))){
var inst_45203 = (state_45217[(2)]);
var state_45217__$1 = state_45217;
var statearr_45235_45280 = state_45217__$1;
(statearr_45235_45280[(2)] = inst_45203);

(statearr_45235_45280[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (29))){
var inst_45183 = (state_45217[(2)]);
var inst_45184 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45185 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45184);
var state_45217__$1 = (function (){var statearr_45236 = state_45217;
(statearr_45236[(9)] = inst_45183);

return statearr_45236;
})();
var statearr_45237_45281 = state_45217__$1;
(statearr_45237_45281[(2)] = inst_45185);

(statearr_45237_45281[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (6))){
var inst_45132 = (state_45217[(10)]);
var state_45217__$1 = state_45217;
var statearr_45238_45282 = state_45217__$1;
(statearr_45238_45282[(2)] = inst_45132);

(statearr_45238_45282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (28))){
var inst_45179 = (state_45217[(2)]);
var inst_45180 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45181 = figwheel.client.heads_up.display_warning.call(null,inst_45180);
var state_45217__$1 = (function (){var statearr_45239 = state_45217;
(statearr_45239[(11)] = inst_45179);

return statearr_45239;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45217__$1,(29),inst_45181);
} else {
if((state_val_45218 === (25))){
var inst_45177 = figwheel.client.heads_up.clear.call(null);
var state_45217__$1 = state_45217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45217__$1,(28),inst_45177);
} else {
if((state_val_45218 === (34))){
var inst_45198 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45217__$1 = state_45217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45217__$1,(37),inst_45198);
} else {
if((state_val_45218 === (17))){
var inst_45157 = (state_45217[(2)]);
var inst_45158 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45159 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45158);
var state_45217__$1 = (function (){var statearr_45240 = state_45217;
(statearr_45240[(12)] = inst_45157);

return statearr_45240;
})();
var statearr_45241_45283 = state_45217__$1;
(statearr_45241_45283[(2)] = inst_45159);

(statearr_45241_45283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (3))){
var inst_45149 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_45217__$1 = state_45217;
if(cljs.core.truth_(inst_45149)){
var statearr_45242_45284 = state_45217__$1;
(statearr_45242_45284[(1)] = (13));

} else {
var statearr_45243_45285 = state_45217__$1;
(statearr_45243_45285[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (12))){
var inst_45145 = (state_45217[(2)]);
var state_45217__$1 = state_45217;
var statearr_45244_45286 = state_45217__$1;
(statearr_45244_45286[(2)] = inst_45145);

(statearr_45244_45286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (2))){
var inst_45132 = (state_45217[(10)]);
var inst_45132__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_45217__$1 = (function (){var statearr_45245 = state_45217;
(statearr_45245[(10)] = inst_45132__$1);

return statearr_45245;
})();
if(cljs.core.truth_(inst_45132__$1)){
var statearr_45246_45287 = state_45217__$1;
(statearr_45246_45287[(1)] = (5));

} else {
var statearr_45247_45288 = state_45217__$1;
(statearr_45247_45288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (23))){
var inst_45175 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_45217__$1 = state_45217;
if(cljs.core.truth_(inst_45175)){
var statearr_45248_45289 = state_45217__$1;
(statearr_45248_45289[(1)] = (25));

} else {
var statearr_45249_45290 = state_45217__$1;
(statearr_45249_45290[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (35))){
var state_45217__$1 = state_45217;
var statearr_45250_45291 = state_45217__$1;
(statearr_45250_45291[(2)] = null);

(statearr_45250_45291[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (19))){
var inst_45170 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_45217__$1 = state_45217;
if(cljs.core.truth_(inst_45170)){
var statearr_45251_45292 = state_45217__$1;
(statearr_45251_45292[(1)] = (22));

} else {
var statearr_45252_45293 = state_45217__$1;
(statearr_45252_45293[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (11))){
var inst_45141 = (state_45217[(2)]);
var state_45217__$1 = state_45217;
var statearr_45253_45294 = state_45217__$1;
(statearr_45253_45294[(2)] = inst_45141);

(statearr_45253_45294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (9))){
var inst_45143 = figwheel.client.heads_up.clear.call(null);
var state_45217__$1 = state_45217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45217__$1,(12),inst_45143);
} else {
if((state_val_45218 === (5))){
var inst_45134 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_45217__$1 = state_45217;
var statearr_45254_45295 = state_45217__$1;
(statearr_45254_45295[(2)] = inst_45134);

(statearr_45254_45295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (14))){
var inst_45161 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_45217__$1 = state_45217;
if(cljs.core.truth_(inst_45161)){
var statearr_45255_45296 = state_45217__$1;
(statearr_45255_45296[(1)] = (18));

} else {
var statearr_45256_45297 = state_45217__$1;
(statearr_45256_45297[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (26))){
var inst_45187 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_45217__$1 = state_45217;
if(cljs.core.truth_(inst_45187)){
var statearr_45257_45298 = state_45217__$1;
(statearr_45257_45298[(1)] = (30));

} else {
var statearr_45258_45299 = state_45217__$1;
(statearr_45258_45299[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (16))){
var inst_45153 = (state_45217[(2)]);
var inst_45154 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45155 = figwheel.client.heads_up.display_exception.call(null,inst_45154);
var state_45217__$1 = (function (){var statearr_45259 = state_45217;
(statearr_45259[(13)] = inst_45153);

return statearr_45259;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45217__$1,(17),inst_45155);
} else {
if((state_val_45218 === (30))){
var inst_45189 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45190 = figwheel.client.heads_up.display_warning.call(null,inst_45189);
var state_45217__$1 = state_45217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45217__$1,(33),inst_45190);
} else {
if((state_val_45218 === (10))){
var inst_45147 = (state_45217[(2)]);
var state_45217__$1 = state_45217;
var statearr_45260_45300 = state_45217__$1;
(statearr_45260_45300[(2)] = inst_45147);

(statearr_45260_45300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (18))){
var inst_45163 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45164 = figwheel.client.heads_up.display_exception.call(null,inst_45163);
var state_45217__$1 = state_45217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45217__$1,(21),inst_45164);
} else {
if((state_val_45218 === (37))){
var inst_45200 = (state_45217[(2)]);
var state_45217__$1 = state_45217;
var statearr_45261_45301 = state_45217__$1;
(statearr_45261_45301[(2)] = inst_45200);

(statearr_45261_45301[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45218 === (8))){
var inst_45139 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45217__$1 = state_45217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45217__$1,(11),inst_45139);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42199__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__42111__auto__,c__42199__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42112__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42112__auto____0 = (function (){
var statearr_45262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45262[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42112__auto__);

(statearr_45262[(1)] = (1));

return statearr_45262;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42112__auto____1 = (function (state_45217){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_45217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e45263){if((e45263 instanceof Object)){
var ex__42115__auto__ = e45263;
var statearr_45264_45302 = state_45217;
(statearr_45264_45302[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45303 = state_45217;
state_45217 = G__45303;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42112__auto__ = function(state_45217){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42112__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42112__auto____1.call(this,state_45217);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42112__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42112__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto__,msg_hist,msg_names,msg))
})();
var state__42201__auto__ = (function (){var statearr_45265 = f__42200__auto__.call(null);
(statearr_45265[(6)] = c__42199__auto__);

return statearr_45265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto__,msg_hist,msg_names,msg))
);

return c__42199__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__42199__auto___45332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto___45332,ch){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto___45332,ch){
return (function (state_45318){
var state_val_45319 = (state_45318[(1)]);
if((state_val_45319 === (1))){
var state_45318__$1 = state_45318;
var statearr_45320_45333 = state_45318__$1;
(statearr_45320_45333[(2)] = null);

(statearr_45320_45333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45319 === (2))){
var state_45318__$1 = state_45318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45318__$1,(4),ch);
} else {
if((state_val_45319 === (3))){
var inst_45316 = (state_45318[(2)]);
var state_45318__$1 = state_45318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45318__$1,inst_45316);
} else {
if((state_val_45319 === (4))){
var inst_45306 = (state_45318[(7)]);
var inst_45306__$1 = (state_45318[(2)]);
var state_45318__$1 = (function (){var statearr_45321 = state_45318;
(statearr_45321[(7)] = inst_45306__$1);

return statearr_45321;
})();
if(cljs.core.truth_(inst_45306__$1)){
var statearr_45322_45334 = state_45318__$1;
(statearr_45322_45334[(1)] = (5));

} else {
var statearr_45323_45335 = state_45318__$1;
(statearr_45323_45335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45319 === (5))){
var inst_45306 = (state_45318[(7)]);
var inst_45308 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_45306);
var state_45318__$1 = state_45318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45318__$1,(8),inst_45308);
} else {
if((state_val_45319 === (6))){
var state_45318__$1 = state_45318;
var statearr_45324_45336 = state_45318__$1;
(statearr_45324_45336[(2)] = null);

(statearr_45324_45336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45319 === (7))){
var inst_45314 = (state_45318[(2)]);
var state_45318__$1 = state_45318;
var statearr_45325_45337 = state_45318__$1;
(statearr_45325_45337[(2)] = inst_45314);

(statearr_45325_45337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45319 === (8))){
var inst_45310 = (state_45318[(2)]);
var state_45318__$1 = (function (){var statearr_45326 = state_45318;
(statearr_45326[(8)] = inst_45310);

return statearr_45326;
})();
var statearr_45327_45338 = state_45318__$1;
(statearr_45327_45338[(2)] = null);

(statearr_45327_45338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__42199__auto___45332,ch))
;
return ((function (switch__42111__auto__,c__42199__auto___45332,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__42112__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__42112__auto____0 = (function (){
var statearr_45328 = [null,null,null,null,null,null,null,null,null];
(statearr_45328[(0)] = figwheel$client$heads_up_plugin_$_state_machine__42112__auto__);

(statearr_45328[(1)] = (1));

return statearr_45328;
});
var figwheel$client$heads_up_plugin_$_state_machine__42112__auto____1 = (function (state_45318){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_45318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e45329){if((e45329 instanceof Object)){
var ex__42115__auto__ = e45329;
var statearr_45330_45339 = state_45318;
(statearr_45330_45339[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45340 = state_45318;
state_45318 = G__45340;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__42112__auto__ = function(state_45318){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__42112__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__42112__auto____1.call(this,state_45318);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__42112__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__42112__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto___45332,ch))
})();
var state__42201__auto__ = (function (){var statearr_45331 = f__42200__auto__.call(null);
(statearr_45331[(6)] = c__42199__auto___45332);

return statearr_45331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto___45332,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__42199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto__){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto__){
return (function (state_45346){
var state_val_45347 = (state_45346[(1)]);
if((state_val_45347 === (1))){
var inst_45341 = cljs.core.async.timeout.call(null,(3000));
var state_45346__$1 = state_45346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45346__$1,(2),inst_45341);
} else {
if((state_val_45347 === (2))){
var inst_45343 = (state_45346[(2)]);
var inst_45344 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_45346__$1 = (function (){var statearr_45348 = state_45346;
(statearr_45348[(7)] = inst_45343);

return statearr_45348;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45346__$1,inst_45344);
} else {
return null;
}
}
});})(c__42199__auto__))
;
return ((function (switch__42111__auto__,c__42199__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__42112__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__42112__auto____0 = (function (){
var statearr_45349 = [null,null,null,null,null,null,null,null];
(statearr_45349[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__42112__auto__);

(statearr_45349[(1)] = (1));

return statearr_45349;
});
var figwheel$client$enforce_project_plugin_$_state_machine__42112__auto____1 = (function (state_45346){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_45346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e45350){if((e45350 instanceof Object)){
var ex__42115__auto__ = e45350;
var statearr_45351_45353 = state_45346;
(statearr_45351_45353[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45354 = state_45346;
state_45346 = G__45354;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__42112__auto__ = function(state_45346){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__42112__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__42112__auto____1.call(this,state_45346);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__42112__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__42112__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto__))
})();
var state__42201__auto__ = (function (){var statearr_45352 = f__42200__auto__.call(null);
(statearr_45352[(6)] = c__42199__auto__);

return statearr_45352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto__))
);

return c__42199__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__42199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto__,figwheel_version,temp__4657__auto__){
return (function (state_45361){
var state_val_45362 = (state_45361[(1)]);
if((state_val_45362 === (1))){
var inst_45355 = cljs.core.async.timeout.call(null,(2000));
var state_45361__$1 = state_45361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45361__$1,(2),inst_45355);
} else {
if((state_val_45362 === (2))){
var inst_45357 = (state_45361[(2)]);
var inst_45358 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_45359 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_45358);
var state_45361__$1 = (function (){var statearr_45363 = state_45361;
(statearr_45363[(7)] = inst_45357);

return statearr_45363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45361__$1,inst_45359);
} else {
return null;
}
}
});})(c__42199__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__42111__auto__,c__42199__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42112__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42112__auto____0 = (function (){
var statearr_45364 = [null,null,null,null,null,null,null,null];
(statearr_45364[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42112__auto__);

(statearr_45364[(1)] = (1));

return statearr_45364;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42112__auto____1 = (function (state_45361){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_45361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e45365){if((e45365 instanceof Object)){
var ex__42115__auto__ = e45365;
var statearr_45366_45368 = state_45361;
(statearr_45366_45368[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45369 = state_45361;
state_45361 = G__45369;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42112__auto__ = function(state_45361){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42112__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42112__auto____1.call(this,state_45361);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42112__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42112__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto__,figwheel_version,temp__4657__auto__))
})();
var state__42201__auto__ = (function (){var statearr_45367 = f__42200__auto__.call(null);
(statearr_45367[(6)] = c__42199__auto__);

return statearr_45367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto__,figwheel_version,temp__4657__auto__))
);

return c__42199__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__45370){
var map__45371 = p__45370;
var map__45371__$1 = ((((!((map__45371 == null)))?((((map__45371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45371):map__45371);
var file = cljs.core.get.call(null,map__45371__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__45371__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__45371__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__45373 = "";
var G__45373__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45373),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__45373);
var G__45373__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45373__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__45373__$1);
if(cljs.core.truth_((function (){var and__28127__auto__ = line;
if(cljs.core.truth_(and__28127__auto__)){
return column;
} else {
return and__28127__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45373__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__45373__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__45374){
var map__45375 = p__45374;
var map__45375__$1 = ((((!((map__45375 == null)))?((((map__45375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45375):map__45375);
var ed = map__45375__$1;
var formatted_exception = cljs.core.get.call(null,map__45375__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__45375__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__45375__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__45377_45381 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__45378_45382 = null;
var count__45379_45383 = (0);
var i__45380_45384 = (0);
while(true){
if((i__45380_45384 < count__45379_45383)){
var msg_45385 = cljs.core._nth.call(null,chunk__45378_45382,i__45380_45384);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_45385);

var G__45386 = seq__45377_45381;
var G__45387 = chunk__45378_45382;
var G__45388 = count__45379_45383;
var G__45389 = (i__45380_45384 + (1));
seq__45377_45381 = G__45386;
chunk__45378_45382 = G__45387;
count__45379_45383 = G__45388;
i__45380_45384 = G__45389;
continue;
} else {
var temp__4657__auto___45390 = cljs.core.seq.call(null,seq__45377_45381);
if(temp__4657__auto___45390){
var seq__45377_45391__$1 = temp__4657__auto___45390;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45377_45391__$1)){
var c__28978__auto___45392 = cljs.core.chunk_first.call(null,seq__45377_45391__$1);
var G__45393 = cljs.core.chunk_rest.call(null,seq__45377_45391__$1);
var G__45394 = c__28978__auto___45392;
var G__45395 = cljs.core.count.call(null,c__28978__auto___45392);
var G__45396 = (0);
seq__45377_45381 = G__45393;
chunk__45378_45382 = G__45394;
count__45379_45383 = G__45395;
i__45380_45384 = G__45396;
continue;
} else {
var msg_45397 = cljs.core.first.call(null,seq__45377_45391__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_45397);

var G__45398 = cljs.core.next.call(null,seq__45377_45391__$1);
var G__45399 = null;
var G__45400 = (0);
var G__45401 = (0);
seq__45377_45381 = G__45398;
chunk__45378_45382 = G__45399;
count__45379_45383 = G__45400;
i__45380_45384 = G__45401;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__45402){
var map__45403 = p__45402;
var map__45403__$1 = ((((!((map__45403 == null)))?((((map__45403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45403):map__45403);
var w = map__45403__$1;
var message = cljs.core.get.call(null,map__45403__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28127__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28127__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28127__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__45405 = cljs.core.seq.call(null,plugins);
var chunk__45406 = null;
var count__45407 = (0);
var i__45408 = (0);
while(true){
if((i__45408 < count__45407)){
var vec__45409 = cljs.core._nth.call(null,chunk__45406,i__45408);
var k = cljs.core.nth.call(null,vec__45409,(0),null);
var plugin = cljs.core.nth.call(null,vec__45409,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45415 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45405,chunk__45406,count__45407,i__45408,pl_45415,vec__45409,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_45415.call(null,msg_hist);
});})(seq__45405,chunk__45406,count__45407,i__45408,pl_45415,vec__45409,k,plugin))
);
} else {
}

var G__45416 = seq__45405;
var G__45417 = chunk__45406;
var G__45418 = count__45407;
var G__45419 = (i__45408 + (1));
seq__45405 = G__45416;
chunk__45406 = G__45417;
count__45407 = G__45418;
i__45408 = G__45419;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45405);
if(temp__4657__auto__){
var seq__45405__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45405__$1)){
var c__28978__auto__ = cljs.core.chunk_first.call(null,seq__45405__$1);
var G__45420 = cljs.core.chunk_rest.call(null,seq__45405__$1);
var G__45421 = c__28978__auto__;
var G__45422 = cljs.core.count.call(null,c__28978__auto__);
var G__45423 = (0);
seq__45405 = G__45420;
chunk__45406 = G__45421;
count__45407 = G__45422;
i__45408 = G__45423;
continue;
} else {
var vec__45412 = cljs.core.first.call(null,seq__45405__$1);
var k = cljs.core.nth.call(null,vec__45412,(0),null);
var plugin = cljs.core.nth.call(null,vec__45412,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45424 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45405,chunk__45406,count__45407,i__45408,pl_45424,vec__45412,k,plugin,seq__45405__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_45424.call(null,msg_hist);
});})(seq__45405,chunk__45406,count__45407,i__45408,pl_45424,vec__45412,k,plugin,seq__45405__$1,temp__4657__auto__))
);
} else {
}

var G__45425 = cljs.core.next.call(null,seq__45405__$1);
var G__45426 = null;
var G__45427 = (0);
var G__45428 = (0);
seq__45405 = G__45425;
chunk__45406 = G__45426;
count__45407 = G__45427;
i__45408 = G__45428;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__45430 = arguments.length;
switch (G__45430) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__45431_45436 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__45432_45437 = null;
var count__45433_45438 = (0);
var i__45434_45439 = (0);
while(true){
if((i__45434_45439 < count__45433_45438)){
var msg_45440 = cljs.core._nth.call(null,chunk__45432_45437,i__45434_45439);
figwheel.client.socket.handle_incoming_message.call(null,msg_45440);

var G__45441 = seq__45431_45436;
var G__45442 = chunk__45432_45437;
var G__45443 = count__45433_45438;
var G__45444 = (i__45434_45439 + (1));
seq__45431_45436 = G__45441;
chunk__45432_45437 = G__45442;
count__45433_45438 = G__45443;
i__45434_45439 = G__45444;
continue;
} else {
var temp__4657__auto___45445 = cljs.core.seq.call(null,seq__45431_45436);
if(temp__4657__auto___45445){
var seq__45431_45446__$1 = temp__4657__auto___45445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45431_45446__$1)){
var c__28978__auto___45447 = cljs.core.chunk_first.call(null,seq__45431_45446__$1);
var G__45448 = cljs.core.chunk_rest.call(null,seq__45431_45446__$1);
var G__45449 = c__28978__auto___45447;
var G__45450 = cljs.core.count.call(null,c__28978__auto___45447);
var G__45451 = (0);
seq__45431_45436 = G__45448;
chunk__45432_45437 = G__45449;
count__45433_45438 = G__45450;
i__45434_45439 = G__45451;
continue;
} else {
var msg_45452 = cljs.core.first.call(null,seq__45431_45446__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_45452);

var G__45453 = cljs.core.next.call(null,seq__45431_45446__$1);
var G__45454 = null;
var G__45455 = (0);
var G__45456 = (0);
seq__45431_45436 = G__45453;
chunk__45432_45437 = G__45454;
count__45433_45438 = G__45455;
i__45434_45439 = G__45456;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29315__auto__ = [];
var len__29308__auto___45461 = arguments.length;
var i__29309__auto___45462 = (0);
while(true){
if((i__29309__auto___45462 < len__29308__auto___45461)){
args__29315__auto__.push((arguments[i__29309__auto___45462]));

var G__45463 = (i__29309__auto___45462 + (1));
i__29309__auto___45462 = G__45463;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__45458){
var map__45459 = p__45458;
var map__45459__$1 = ((((!((map__45459 == null)))?((((map__45459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45459):map__45459);
var opts = map__45459__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq45457){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45457));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e45464){if((e45464 instanceof Error)){
var e = e45464;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e45464;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__45465){
var map__45466 = p__45465;
var map__45466__$1 = ((((!((map__45466 == null)))?((((map__45466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45466):map__45466);
var msg_name = cljs.core.get.call(null,map__45466__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1506931542470
