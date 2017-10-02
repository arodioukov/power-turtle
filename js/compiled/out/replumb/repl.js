// Compiled by ClojureScript 1.9.908 {}
goog.provide('replumb.repl');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('cljs.tagged_literals');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader.impl.commons');
goog.require('cljs.analyzer');
goog.require('cljs.env');
goog.require('cljs.repl');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('replumb.common');
goog.require('replumb.ast');
goog.require('replumb.doc_maps');
goog.require('replumb.load');
goog.require('replumb.browser');
goog.require('replumb.nodejs');
goog.require('replumb.cache');
if(typeof replumb.repl.st !== 'undefined'){
} else {
replumb.repl.st = cljs.js.empty_state.call(null);
}
if(typeof replumb.repl.app_env !== 'undefined'){
} else {
replumb.repl.app_env = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.Keyword(null,"last-eval-warning","last-eval-warning",-478360530),null,new cljs.core.Keyword(null,"initializing?","initializing?",111659212),false,new cljs.core.Keyword(null,"needs-init?","needs-init?",1016438963),true], null));
}
/**
 * The ex-info data for this file
 */
replumb.repl.ex_info_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("replumb.repl","error","replumb.repl/error",-144284746)], null);
/**
 * Return the current namespace, as a symbol.
 */
replumb.repl.current_ns = (function replumb$repl$current_ns(){
return new cljs.core.Keyword(null,"current-ns","current-ns",1661653428).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replumb.repl.app_env));
});
replumb.repl.empty_analyzer_env = (function replumb$repl$empty_analyzer_env(){
return cljs.core.assoc.call(null,cljs.analyzer.empty_env.call(null),new cljs.core.Keyword(null,"ns","ns",441598760),replumb.ast.namespace.call(null,cljs.core.deref.call(null,replumb.repl.st),replumb.repl.current_ns.call(null)),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
});
replumb.repl.map_keys = (function replumb$repl$map_keys(f,m){
return cljs.core.reduce_kv.call(null,(function (r,k,v){
return cljs.core.assoc.call(null,r,f.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * Reading forms from a reader (see clojure.tools.reader.reader-types
 *   for reader implementations). This function throws if a valid form
 *   cannot be found.
 */
replumb.repl.read = (function replumb$repl$read(opts,rdr){
var _STAR_cljs_ns_STAR_40346 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_data_readers_STAR_40347 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol40348 = cljs.tools.reader.resolve_symbol;
cljs.analyzer._STAR_cljs_ns_STAR_ = replumb.repl.current_ns.call(null);

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.tagged_literals._STAR_cljs_data_readers_STAR_;

cljs.tools.reader.resolve_symbol = cljs.analyzer.resolve_symbol;

try{return cljs.tools.reader.read.call(null,opts,rdr);
}finally {cljs.tools.reader.resolve_symbol = resolve_symbol40348;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_40347;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_40346;
}});
/**
 * Reading forms from a string. This function throws if a valid one
 *   cannot be found.
 */
replumb.repl.read_string = (function replumb$repl$read_string(opts,s){
var _STAR_cljs_ns_STAR_40349 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_data_readers_STAR_40350 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol40351 = cljs.tools.reader.resolve_symbol;
cljs.analyzer._STAR_cljs_ns_STAR_ = replumb.repl.current_ns.call(null);

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.tagged_literals._STAR_cljs_data_readers_STAR_;

cljs.tools.reader.resolve_symbol = cljs.analyzer.resolve_symbol;

try{return cljs.tools.reader.read_string.call(null,opts,s);
}finally {cljs.tools.reader.resolve_symbol = resolve_symbol40351;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_40350;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_40349;
}});
replumb.repl.ns_form_QMARK_ = (function replumb$repl$ns_form_QMARK_(form){
return (cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),cljs.core.first.call(null,form)));
});
/**
 * Is the input analyzer var (from either cljs.analyzer/resolve-var or
 *   cljs.analyzer/resolve-macro-var) a macro?
 */
replumb.repl.macro_QMARK_ = (function replumb$repl$macro_QMARK_(var$){
return new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(var$);
});
/**
 * From cljs.analyzer.api.clj. Given an analysis environment resolve a
 *   var. Analogous to clojure.core/resolve
 */
replumb.repl.resolve = (function replumb$repl$resolve(opts,env,sym){
if(cljs.core.map_QMARK_.call(null,env)){
} else {
throw (new Error("Assert failed: (map? env)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

var var$ = (function (){try{return cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
}catch (e40352){var e = e40352;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
replumb.common.debug_prn.call(null,"Exception safely wrapped:",e.message);
} else {
}

return cljs.analyzer.resolve_macro_var.call(null,env,sym);
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
replumb.common.debug_prn.call(null,"cljs.analyzer/resolve-var/resolve-macro-var returned",var$);
} else {
}

return var$;
});
replumb.repl.get_var = (function replumb$repl$get_var(opts,sym){
var temp__4657__auto__ = (function (){var env__34101__auto__ = replumb.repl.st;
var env__34101__auto____$1 = ((cljs.core.map_QMARK_.call(null,env__34101__auto__))?cljs.core.atom.call(null,env__34101__auto__):((((env__34101__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,env__34101__auto__))))?env__34101__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,env__34101__auto__))].join('')))})()
));
var _STAR_compiler_STAR_40354 = cljs.env._STAR_compiler_STAR_;
cljs.env._STAR_compiler_STAR_ = env__34101__auto____$1;

try{return replumb.repl.resolve.call(null,opts,replumb.repl.empty_analyzer_env.call(null),sym);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_40354;
}})();
if(cljs.core.truth_(temp__4657__auto__)){
var var$ = temp__4657__auto__;
if(cljs.core._EQ_.call(null,cljs.core.namespace.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$))].join(''))){
return cljs.core.update.call(null,var$,new cljs.core.Keyword(null,"name","name",1843675177),((function (var$,temp__4657__auto__){
return (function (p1__40353_SHARP_){
return cljs.core.symbol.call(null,cljs.core.name.call(null,p1__40353_SHARP_));
});})(var$,temp__4657__auto__))
);
} else {
return var$;
}
} else {
return null;
}
});
replumb.repl.replumb_repl_special_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"doc","doc",-741138878,null),null,new cljs.core.Symbol(null,"import","import",241030818,null),null,new cljs.core.Symbol(null,"find-doc","find-doc",-1096800949,null),null,new cljs.core.Symbol(null,"dir","dir",-919681108,null),null,new cljs.core.Symbol(null,"pst","pst",-1996688947,null),null,new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),null,new cljs.core.Symbol(null,"require","require",1172530194,null),null,new cljs.core.Symbol(null,"source","source",1206599988,null),null,new cljs.core.Symbol(null,"load-file","load-file",1215944857,null),null,new cljs.core.Symbol(null,"require-macros","require-macros",-1946488353,null),null,new cljs.core.Symbol(null,"apropos","apropos",-1511857537,null),null], null), null);
replumb.repl.repl_special_QMARK_ = (function replumb$repl$repl_special_QMARK_(form){
var and__28814__auto__ = cljs.core.seq_QMARK_.call(null,form);
if(and__28814__auto__){
return replumb.repl.replumb_repl_special_set.call(null,cljs.core.first.call(null,form));
} else {
return and__28814__auto__;
}
});
/**
 * Makes an eval function that will be used to eval JavaScript code. It returns
 *   a cljs.js-compatible *eval-fn*. Expects a map of user options, specifically:
 * 
 *   * :cache - a map containing an optional :path key which indicates the path
 *   in which write the cached files. If not empty, the function will first write
 *   the cached files and then eval the source, otherwise only the latter
 *   * write-file-fn! - a synchronous 2-arity function which expects the path and
 *   data to write.
 */
replumb.repl.make_js_eval_fn = (function replumb$repl$make_js_eval_fn(opts){
return (function (p__40356){
var map__40357 = p__40356;
var map__40357__$1 = ((((!((map__40357 == null)))?((((map__40357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40357.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40357):map__40357);
var path = cljs.core.get.call(null,map__40357__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var name = cljs.core.get.call(null,map__40357__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var source = cljs.core.get.call(null,map__40357__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var cache = cljs.core.get.call(null,map__40357__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var verbose = new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts);
var write_file_fn_BANG_ = new cljs.core.Keyword(null,"write-file-fn!","write-file-fn!",-535483541).cljs$core$IFn$_invoke$arity$1(opts);
var cache_path = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"path","path",-188191168)], null));
if(cljs.core.truth_((function (){var and__28814__auto__ = path;
if(cljs.core.truth_(and__28814__auto__)){
var and__28814__auto____$1 = source;
if(cljs.core.truth_(and__28814__auto____$1)){
var and__28814__auto____$2 = cache;
if(cljs.core.truth_(and__28814__auto____$2)){
return cache_path;
} else {
return and__28814__auto____$2;
}
} else {
return and__28814__auto____$1;
}
} else {
return and__28814__auto__;
}
})())){
if(cljs.core.truth_(write_file_fn_BANG_)){
var cache_prefix_for_path_40362 = replumb.cache.cache_prefix_for_path.call(null,cache_path,path,replumb.cache.is_macros_QMARK_.call(null,cache));
var vec__40359_40363 = cljs.core.map.call(null,((function (cache_prefix_for_path_40362,verbose,write_file_fn_BANG_,cache_path,map__40357,map__40357__$1,path,name,source,cache){
return (function (p1__40355_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_prefix_for_path_40362),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40355_SHARP_)].join('');
});})(cache_prefix_for_path_40362,verbose,write_file_fn_BANG_,cache_path,map__40357,map__40357__$1,path,name,source,cache))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".js",".cache.json"], null));
var js_path_40364 = cljs.core.nth.call(null,vec__40359_40363,(0),null);
var json_path_40365 = cljs.core.nth.call(null,vec__40359_40363,(1),null);
if(cljs.core.truth_(verbose)){
replumb.common.debug_prn.call(null,"Attempting to write",js_path_40364,"...");
} else {
}

write_file_fn_BANG_.call(null,js_path_40364,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(replumb.cache.compiled_by_string.call(null)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(source)].join(''));

if(cljs.core.truth_(verbose)){
replumb.common.debug_prn.call(null,"Attempting to write",json_path_40365,"...");
} else {
}

write_file_fn_BANG_.call(null,json_path_40365,replumb.cache.cljs__GT_transit_json.call(null,cache));
} else {
if(cljs.core.truth_(verbose)){
replumb.common.debug_prn.call(null,"Invalid :write-file-fn!. No cache will be written.");
} else {
}
}
} else {
}

return eval(source);
});
});
/**
 * Gets the base set of evaluation options. The 1-arity function
 *   specifies opts that override default. No check here if opts are
 *   valid.
 */
replumb.repl.base_eval_opts_BANG_ = (function replumb$repl$base_eval_opts_BANG_(var_args){
var G__40367 = arguments.length;
switch (G__40367) {
case 0:
return replumb.repl.base_eval_opts_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return replumb.repl.base_eval_opts_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replumb.repl.base_eval_opts_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return replumb.repl.base_eval_opts_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

replumb.repl.base_eval_opts_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (user_opts){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),new cljs.core.Keyword(null,"verbose","verbose",1694226060),new cljs.core.Keyword(null,"source-map","source-map",1706252311),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),new cljs.core.Keyword(null,"eval","eval",-1103567905)],[new cljs.core.Keyword(null,"load-fn!","load-fn!",-896695751).cljs$core$IFn$_invoke$arity$1(user_opts),(function (){var or__28826__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(user_opts);
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return false;
}
})(),replumb.repl.current_ns.call(null),true,(function (){var or__28826__auto__ = new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(user_opts);
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return false;
}
})(),false,(function (){var or__28826__auto__ = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(user_opts);
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return new cljs.core.Keyword(null,"expr","expr",745722291);
}
})(),cljs.env._STAR_compiler_STAR_ = replumb.repl.st,replumb.repl.make_js_eval_fn.call(null,user_opts)]);
});

replumb.repl.base_eval_opts_BANG_.cljs$lang$maxFixedArity = 1;

replumb.repl.load_eval_opts_BANG_ = (function replumb$repl$load_eval_opts_BANG_(user_opts,file_name){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,replumb.repl.base_eval_opts_BANG_.call(null,user_opts),new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file_name);
});
replumb.repl.self_require_QMARK_ = (function replumb$repl$self_require_QMARK_(specs){
return cljs.core.some.call(null,(function (quoted_spec_or_kw){
var and__28814__auto__ = !((quoted_spec_or_kw instanceof cljs.core.Keyword));
if(and__28814__auto__){
var spec = cljs.core.second.call(null,quoted_spec_or_kw);
var ns = ((cljs.core.sequential_QMARK_.call(null,spec))?cljs.core.first.call(null,spec):spec);
return cljs.core._EQ_.call(null,ns,replumb.repl.current_ns.call(null));
} else {
return and__28814__auto__;
}
}),specs);
});
replumb.repl.canonicalize_specs = (function replumb$repl$canonicalize_specs(specs){
var canonicalize = (function replumb$repl$canonicalize_specs_$_canonicalize(quoted_spec_or_kw){
if((quoted_spec_or_kw instanceof cljs.core.Keyword)){
return quoted_spec_or_kw;
} else {
var spec = cljs.core.second.call(null,quoted_spec_or_kw);
if(cljs.core.vector_QMARK_.call(null,spec)){
return spec;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
}
}
});
return cljs.core.map.call(null,canonicalize,specs);
});
/**
 * Is the compiler state for the cljs.user namespace empty?
 */
replumb.repl.empty_cljs_user_QMARK_ = (function replumb$repl$empty_cljs_user_QMARK_(){
return replumb.ast.empty_state_QMARK_.call(null,cljs.core.deref.call(null,replumb.repl.st),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null));
});
/**
 * Remove all the references to the given namespace in the compiler
 *   state.
 */
replumb.repl.purge_required_ns_BANG_ = (function replumb$repl$purge_required_ns_BANG_(required_ns){
var required_macro_ns = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(required_ns),"$macros"].join(''));
cljs.core.swap_BANG_.call(null,replumb.repl.st,((function (required_macro_ns){
return (function (p1__40369_SHARP_){
return replumb.ast.dissoc_ns.call(null,replumb.ast.dissoc_ns.call(null,p1__40369_SHARP_,required_ns),required_macro_ns);
});})(required_macro_ns))
);

return cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,((function (required_macro_ns){
return (function (p1__40370_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,replumb.ast.import_of_ns_QMARK_,required_ns),cljs.core.disj.call(null,cljs.core.disj.call(null,p1__40370_SHARP_,required_ns),required_macro_ns)));
});})(required_macro_ns))
);
});
/**
 * Get rid of all the compiler state references to required-ns macros
 *   namespaces and symbols from requirer-ns.
 */
replumb.repl.purge_symbols_BANG_ = (function replumb$repl$purge_symbols_BANG_(requirer_ns,required_ns){
return cljs.core.swap_BANG_.call(null,replumb.repl.st,(function (p1__40371_SHARP_){
return replumb.ast.dissoc_all.call(null,replumb.ast.dissoc_all.call(null,replumb.ast.dissoc_all.call(null,replumb.ast.dissoc_all.call(null,replumb.ast.dissoc_all.call(null,p1__40371_SHARP_,requirer_ns,required_ns,new cljs.core.Keyword(null,"require","require",-468001333)),requirer_ns,required_ns,new cljs.core.Keyword(null,"macro-require","macro-require",-1277208441)),requirer_ns,required_ns,new cljs.core.Keyword(null,"macro","macro",-867863404)),requirer_ns,required_ns,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),requirer_ns,required_ns,new cljs.core.Keyword(null,"import","import",-1399500709));
}));
});
/**
 * Remove all the namespace references, symbols included, required from
 *   inside the input requirer-ns namespace.
 * 
 *   For instance after evaluating:
 * 
 *   (in-ns 'cljs.user)         ;; requirer-ns
 *   (require 'clojure.string)  ;; required-ns
 * 
 *   You can eval the following to clean the compiler state:
 * 
 *   (replumb.repl/purge-require 'cljs.user 'clojure.string).
 * 
 *   Note that doing this manually is tricky, as, for instance,
 *   clojure.string has the following dependencies to clear: goog.string
 *   goog.string.StringBuffer.
 */
replumb.repl.purge_namespaces_BANG_ = (function replumb$repl$purge_namespaces_BANG_(requirer_ns,namespaces){
var seq__40372 = cljs.core.seq.call(null,namespaces);
var chunk__40373 = null;
var count__40374 = (0);
var i__40375 = (0);
while(true){
if((i__40375 < count__40374)){
var ns = cljs.core._nth.call(null,chunk__40373,i__40375);
replumb.repl.purge_required_ns_BANG_.call(null,ns);

replumb.repl.purge_symbols_BANG_.call(null,requirer_ns,ns);

var G__40376 = seq__40372;
var G__40377 = chunk__40373;
var G__40378 = count__40374;
var G__40379 = (i__40375 + (1));
seq__40372 = G__40376;
chunk__40373 = G__40377;
count__40374 = G__40378;
i__40375 = G__40379;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40372);
if(temp__4657__auto__){
var seq__40372__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40372__$1)){
var c__29665__auto__ = cljs.core.chunk_first.call(null,seq__40372__$1);
var G__40380 = cljs.core.chunk_rest.call(null,seq__40372__$1);
var G__40381 = c__29665__auto__;
var G__40382 = cljs.core.count.call(null,c__29665__auto__);
var G__40383 = (0);
seq__40372 = G__40380;
chunk__40373 = G__40381;
count__40374 = G__40382;
i__40375 = G__40383;
continue;
} else {
var ns = cljs.core.first.call(null,seq__40372__$1);
replumb.repl.purge_required_ns_BANG_.call(null,ns);

replumb.repl.purge_symbols_BANG_.call(null,requirer_ns,ns);

var G__40384 = cljs.core.next.call(null,seq__40372__$1);
var G__40385 = null;
var G__40386 = (0);
var G__40387 = (0);
seq__40372 = G__40384;
chunk__40373 = G__40385;
count__40374 = G__40386;
i__40375 = G__40387;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Remove all the namespace references required from inside cljs.user
 *   from the compiler state.
 * 
 *   The 0-arity version cleans namespaces in cljs.js/*loaded*.
 */
replumb.repl.purge_cljs_user_BANG_ = (function replumb$repl$purge_cljs_user_BANG_(var_args){
var G__40389 = arguments.length;
switch (G__40389) {
case 0:
return replumb.repl.purge_cljs_user_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return replumb.repl.purge_cljs_user_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replumb.repl.purge_cljs_user_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return replumb.repl.purge_namespaces_BANG_.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),cljs.core.deref.call(null,cljs.js._STAR_loaded_STAR_));
});

replumb.repl.purge_cljs_user_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (namespaces){
return replumb.repl.purge_namespaces_BANG_.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),namespaces);
});

replumb.repl.purge_cljs_user_BANG_.cljs$lang$maxFixedArity = 1;

replumb.repl.process_reloads_BANG_ = (function replumb$repl$process_reloads_BANG_(specs){
var temp__4655__auto__ = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),specs);
if(cljs.core.truth_(temp__4655__auto__)){
var k = temp__4655__auto__;
var specs__$1 = cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),specs);
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"reload-all","reload-all",761570200))){
replumb.repl.purge_cljs_user_BANG_.call(null,cljs.core.deref.call(null,cljs.js._STAR_loaded_STAR_));
} else {
replumb.repl.purge_cljs_user_BANG_.call(null,cljs.core.map.call(null,cljs.core.first,specs__$1));
}

return specs__$1;
} else {
return specs;
}
});
replumb.repl.make_ns_form = (function replumb$repl$make_ns_form(kind,specs,target_ns){
if(cljs.core._EQ_.call(null,kind,new cljs.core.Keyword(null,"import","import",-1399500709))){
return cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns","ns",2082130287,null)),(function (){var x__29688__auto__ = target_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = kind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core.map.call(null,(function (quoted_spec_or_kw){
if((quoted_spec_or_kw instanceof cljs.core.Keyword)){
return quoted_spec_or_kw;
} else {
return cljs.core.second.call(null,quoted_spec_or_kw);
}
}),specs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"merge","merge",-1804319409),true,new cljs.core.Keyword(null,"line","line",212345235),(1),new cljs.core.Keyword(null,"column","column",2078222095),(1)], null));
} else {
return cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns","ns",2082130287,null)),(function (){var x__29688__auto__ = target_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29688__auto__ = kind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),replumb.repl.process_reloads_BANG_.call(null,replumb.repl.canonicalize_specs.call(null,specs)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})()))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"merge","merge",-1804319409),true,new cljs.core.Keyword(null,"line","line",212345235),(1),new cljs.core.Keyword(null,"column","column",2078222095),(1)], null));
}
});
/**
 * Make a ns form as string, starting from a map of kind and specs as
 *   in:
 * 
 *   {:require #{[my-ns] [your-ns]}
 * :use #{their-ns}}
 * 
 *   This function does not perform any validation of the kind
 *   keys (:require, :use, etc...).
 */
replumb.repl.make_ns_string = (function replumb$repl$make_ns_string(kind_and_specs,target_ns){
return ["(ns ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = cljs.core.not_empty.call(null,cljs.core.reduce_kv.call(null,(function (s,kind,specs){
if(cljs.core.seq.call(null,specs)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq.call(null,s))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join(''):s)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",specs)),")"].join('');
} else {
return null;
}
}),"",kind_and_specs));
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return null;
}
})()),")"].join('');
});
/**
 * Retrives the path for a file from (.-dependencies_.nameToPath js/goog). If
 *   not found will returns nil.
 */
replumb.repl.file_path_from_goog_dependencies = (function replumb$repl$file_path_from_goog_dependencies(name){
var temp__4657__auto__ = (goog.dependencies_.nameToPath[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')]);
if(cljs.core.truth_(temp__4657__auto__)){
var path = temp__4657__auto__;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop_last.call(null,(3),cljs.core.drop.call(null,(3),path)));
} else {
return null;
}
});
/**
 * Retrieves the path for a file from the user provided :foreign-libs option.
 *   If not found, returns nil.
 */
replumb.repl.file_path_from_foreign_libs = (function replumb$repl$file_path_from_foreign_libs(name,foreign_libs){
var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__40391_SHARP_){
return cljs.core._EQ_.call(null,name,cljs.core.first.call(null,new cljs.core.Keyword(null,"provides","provides",-1634397992).cljs$core$IFn$_invoke$arity$1(p1__40391_SHARP_)));
}),foreign_libs));
if(temp__4657__auto__){
var foreign_libs__$1 = temp__4657__auto__;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop_last.call(null,(3),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,foreign_libs__$1))));
} else {
return null;
}
});
/**
 * Makes a load function that will read from a sequence of src-paths
 *   using a supplied read-file-fn!. It returns a cljs.js-compatible
 *   *load-fn*. Both src-paths and read-file-fn! are values in the options map
 *   passed as parameter.
 * 
 *   Read-file-fn! is an async 2-arity function with signature [file-path
 *   src-cb] where src-cb is itself a function (fn [source] ...) that needs
 *   to be called with the full source of the library (as string).
 * 
 *   If additionally the user map contains the :cache map the loading process
 *   will consider cached files as follow: if :path is present, it will try to load
 *   the cached files from the given path. If :src-paths-lookup? is present, it
 *   will try to load the cached files from src-paths.
 */
replumb.repl.make_load_fn = (function replumb$repl$make_load_fn(p__40392){
var map__40393 = p__40392;
var map__40393__$1 = ((((!((map__40393 == null)))?((((map__40393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40393):map__40393);
var verbose = cljs.core.get.call(null,map__40393__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060));
var src_paths = cljs.core.get.call(null,map__40393__$1,new cljs.core.Keyword(null,"src-paths","src-paths",-1052057603));
var read_file_fn_BANG_ = cljs.core.get.call(null,map__40393__$1,new cljs.core.Keyword(null,"read-file-fn!","read-file-fn!",-492428191));
var cache = cljs.core.get.call(null,map__40393__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var foreign_libs = cljs.core.get.call(null,map__40393__$1,new cljs.core.Keyword(null,"foreign-libs","foreign-libs",805847831));
var as = cljs.core.get.call(null,map__40393__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var user_opts = cljs.core.get.call(null,map__40393__$1,new cljs.core.Keyword(null,"user-opts","user-opts",-949672032));
if(cljs.core.truth_((function (){var and__28814__auto__ = read_file_fn_BANG_;
if(cljs.core.truth_(and__28814__auto__)){
return (cljs.core.sequential_QMARK_.call(null,src_paths)) && (cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,src_paths));
} else {
return and__28814__auto__;
}
})())){
return ((function (map__40393,map__40393__$1,verbose,src_paths,read_file_fn_BANG_,cache,foreign_libs,as,user_opts){
return (function (p__40395,cb){
var map__40396 = p__40395;
var map__40396__$1 = ((((!((map__40396 == null)))?((((map__40396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40396):map__40396);
var load_map = map__40396__$1;
var name = cljs.core.get.call(null,map__40396__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__40396__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__40396__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(replumb.load.skip_load_QMARK_.call(null,load_map))){
return replumb.load.fake_load_fn_BANG_.call(null,load_map,cb);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^goog\/.*/,path))){
return replumb.load.goog_closure_index_promise_BANG_.call(null,verbose,src_paths,read_file_fn_BANG_).then(((function (map__40396,map__40396__$1,load_map,name,macros,path,map__40393,map__40393__$1,verbose,src_paths,read_file_fn_BANG_,cache,foreign_libs,as,user_opts){
return (function (goog_map){
var temp__4655__auto__ = cljs.core.get.call(null,goog_map,name);
if(cljs.core.truth_(temp__4655__auto__)){
var goog_path = temp__4655__auto__;
return replumb.load.read_files_and_callback_BANG_.call(null,verbose,replumb.load.file_paths_for_closure.call(null,src_paths,goog_path),read_file_fn_BANG_,cb);
} else {
return cb.call(null,null);
}
});})(map__40396,map__40396__$1,load_map,name,macros,path,map__40393,map__40393__$1,verbose,src_paths,read_file_fn_BANG_,cache,foreign_libs,as,user_opts))
,((function (map__40396,map__40396__$1,load_map,name,macros,path,map__40393,map__40393__$1,verbose,src_paths,read_file_fn_BANG_,cache,foreign_libs,as,user_opts){
return (function (_){
if(cljs.core.truth_(verbose)){
replumb.common.debug_prn.call(null,"Error in parsing the Google Closure index.");
} else {
}

return cb.call(null,null);
});})(map__40396,map__40396__$1,load_map,name,macros,path,map__40393,map__40393__$1,verbose,src_paths,read_file_fn_BANG_,cache,foreign_libs,as,user_opts))
);
} else {
var path__$1 = (function (){var or__28826__auto__ = (cljs.core.truth_(goog.DEPENDENCIES_ENABLED)?replumb.repl.file_path_from_goog_dependencies.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')):null);
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
var or__28826__auto____$1 = replumb.repl.file_path_from_foreign_libs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),foreign_libs);
if(cljs.core.truth_(or__28826__auto____$1)){
return or__28826__auto____$1;
} else {
return path;
}
}
})();
var args = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [verbose,replumb.load.file_paths_for_load_fn.call(null,src_paths,macros,path__$1),read_file_fn_BANG_,cb], null);
var cache_path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cache);
var src_paths_lookup_QMARK_ = new cljs.core.Keyword(null,"src-paths-lookup?","src-paths-lookup?",-917471209).cljs$core$IFn$_invoke$arity$1(cache);
if(cljs.core.truth_((function (){var or__28826__auto__ = cache_path;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return src_paths_lookup_QMARK_;
}
})())){
var cache_paths = (function (){var G__40398 = cljs.core.PersistentVector.EMPTY;
var G__40398__$1 = (cljs.core.truth_(cache_path)?cljs.core.into.call(null,G__40398,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cache_path], null)):G__40398);
if(cljs.core.truth_(src_paths_lookup_QMARK_)){
return cljs.core.into.call(null,G__40398__$1,src_paths);
} else {
return G__40398__$1;
}
})();
var cached_file_paths = replumb.load.cache_file_paths_for_load_fn.call(null,cache_paths,macros,path__$1);
return cljs.core.apply.call(null,replumb.load.read_files_from_cache_and_callback_BANG_,cljs.core.conj.call(null,args,cached_file_paths,name));
} else {
return cljs.core.apply.call(null,replumb.load.read_files_and_callback_BANG_,args);
}

}
}
});
;})(map__40393,map__40393__$1,verbose,src_paths,read_file_fn_BANG_,cache,foreign_libs,as,user_opts))
} else {
if(cljs.core.truth_(verbose)){
replumb.common.debug_prn.call(null,"Invalid :read-file-fn! or :src-paths (is it sequential? Are all paths strings?). No *load-fn* will be passed to cljs.js.");
} else {
}

return null;
}
});
/**
 * Set of valid option used for external input validation.
 */
replumb.repl.valid_opts_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"read-file-fn!","read-file-fn!",-492428191),null,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),null,new cljs.core.Keyword(null,"write-file-fn!","write-file-fn!",-535483541),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"preloads","preloads",1620330189),null,new cljs.core.Keyword(null,"cache","cache",-1237023054),null,new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546),null,new cljs.core.Keyword(null,"warning-as-error","warning-as-error",1347418166),null,new cljs.core.Keyword(null,"context","context",-830191113),null,new cljs.core.Keyword(null,"foreign-libs","foreign-libs",805847831),null,new cljs.core.Keyword(null,"load-fn!","load-fn!",-896695751),null,new cljs.core.Keyword(null,"target","target",253001721),null,new cljs.core.Keyword(null,"src-paths","src-paths",-1052057603),null,new cljs.core.Keyword(null,"init-fn!","init-fn!",-986163042),null], null), null);
/**
 * Validate the input user options. Returns a new map without invalid
 *   ones according to valid-opts-set.
 */
replumb.repl.valid_opts = (function replumb$repl$valid_opts(user_opts){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,replumb.repl.valid_opts_set,cljs.core.first),user_opts));
});
/**
 * Given user provided options, conjoins the default option map for
 *   its :target (string or keyword). Defaults to conjoining :default (browser,
 *   aka :js target).
 */
replumb.repl.add_default_opts = (function replumb$repl$add_default_opts(opts,user_opts){
return cljs.core.merge.call(null,opts,(function (){var pred__40399 = cljs.core._EQ_;
var expr__40400 = cljs.core.keyword.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(user_opts));
if(cljs.core.truth_(pred__40399.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),expr__40400))){
return replumb.nodejs.default_opts;
} else {
return replumb.browser.default_opts;
}
})());
});
/**
 * Given current and user options, if :load-fn! is present in user-opts,
 *   conjoins it. Try to create and conjoin one from :src-paths
 *   and :read-file-fn! otherwise. Conjoins nil if it cannot.
 */
replumb.repl.add_load_fn = (function replumb$repl$add_load_fn(opts,user_opts){
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"load-fn!","load-fn!",-896695751),(function (){var or__28826__auto__ = new cljs.core.Keyword(null,"load-fn!","load-fn!",-896695751).cljs$core$IFn$_invoke$arity$1(user_opts);
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return replumb.repl.make_load_fn.call(null,user_opts);
}
})());
});
/**
 * Given current and user options, returns a map containing a
 *   valid :init-fns,conjoining with the one in current if necessary.
 */
replumb.repl.add_init_fns = (function replumb$repl$add_init_fns(opts,user_opts){
return cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-fns","init-fns",1169633539)], null),(function (init_fns){
var temp__4655__auto__ = new cljs.core.Keyword(null,"init-fn!","init-fn!",-986163042).cljs$core$IFn$_invoke$arity$1(user_opts);
if(cljs.core.truth_(temp__4655__auto__)){
var fn = temp__4655__auto__;
return cljs.core.conj.call(null,init_fns,fn);
} else {
return init_fns;
}
}));
});
/**
 * Given current and user options, returns a map containing a
 *   valid :init-fns,conjoining with the one in current if necessary.
 */
replumb.repl.add_init_eval_fn = (function replumb$repl$add_init_eval_fn(opts,user_opts){
return cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-fns","init-fns",1169633539)], null),cljs.core.conj,(function (){
return cljs.js._STAR_eval_fn_STAR_ = replumb.repl.make_js_eval_fn.call(null,user_opts);
}));
});
/**
 * Process the user options. Returns the map that can be fed to
 *   read-eval-call.
 */
replumb.repl.normalize_opts = (function replumb$repl$normalize_opts(user_opts){
var vld_opts = replumb.repl.valid_opts.call(null,user_opts);
return replumb.repl.add_init_fns.call(null,replumb.repl.add_load_fn.call(null,replumb.repl.add_init_eval_fn.call(null,replumb.repl.add_default_opts.call(null,vld_opts,vld_opts),vld_opts),vld_opts),vld_opts);
});
/**
 * Builds the map to return when the evaluation returned success.
 *   Supports the following options:
 * 
 *   * :no-pr-str-on-value avoids wrapping value in pr-str.
 */
replumb.repl.success_map = (function replumb$repl$success_map(opts,form,warning,value){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"warning","warning",-1685650671),warning,new cljs.core.Keyword(null,"value","value",305978217),((cljs.core.not.call(null,new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546).cljs$core$IFn$_invoke$arity$1(opts)))?cljs.core.pr_str.call(null,value):value)], null);
});
/**
 * Builds the map to return when the evaluation returned error.
 */
replumb.repl.error_map = (function replumb$repl$error_map(opts,form,warning,error){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"warning","warning",-1685650671),warning,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
});
replumb.repl.reset_last_warning_BANG_ = (function replumb$repl$reset_last_warning_BANG_(){
return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,cljs.core.assoc,new cljs.core.Keyword(null,"last-eval-warning","last-eval-warning",-478360530),null);
});
/**
 * Handles the case when the evaluation returns a warning and can be
 *   passed as a warning handler when partially applied. At the moment it
 *   treats warnings as errors.
 */
replumb.repl.custom_warning_handler = (function replumb$repl$custom_warning_handler(opts,cb,warning_type,env,extra){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
replumb.common.debug_prn.call(null,["Handling warning:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__29853__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40402_40404 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40403_40405 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40402_40404,_STAR_print_fn_STAR_40403_40405,sb__29853__auto__){
return (function (x__29854__auto__){
return sb__29853__auto__.append(x__29854__auto__);
});})(_STAR_print_newline_STAR_40402_40404,_STAR_print_fn_STAR_40403_40405,sb__29853__auto__))
;

try{cljs.pprint.pprint.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"warning-type","warning-type",1711103595),warning_type,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"extra","extra",1612569067),extra], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40403_40405;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40402_40404;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__29853__auto__)].join('');
})())].join(''));
} else {
}

if(cljs.core.truth_(warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_))){
var temp__4657__auto__ = cljs.analyzer.error_message.call(null,warning_type,extra);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,cljs.core.assoc,new cljs.core.Keyword(null,"last-eval-warning","last-eval-warning",-478360530),cljs.analyzer.message.call(null,env,s));
} else {
return null;
}
} else {
return null;
}
});
replumb.repl.validated_call_back_BANG_ = (function replumb$repl$validated_call_back_BANG_(opts,cb,res){
if(cljs.core.map_QMARK_.call(null,res)){
} else {
throw (new Error("Assert failed: (map? res)"));
}

if(cljs.core.truth_(cljs.core.find.call(null,res,new cljs.core.Keyword(null,"form","form",-1624062471)))){
} else {
throw (new Error("Assert failed: (find res :form)"));
}

if(cljs.core.truth_((function (){var or__28826__auto__ = cljs.core.find.call(null,res,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return cljs.core.find.call(null,res,new cljs.core.Keyword(null,"value","value",305978217));
}
})())){
} else {
throw (new Error("Assert failed: (or (find res :error) (find res :value))"));
}

if(cljs.core.truth_((function (){var or__28826__auto__ = (function (){var and__28814__auto__ = cljs.core.find.call(null,res,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(and__28814__auto__)){
return cljs.core.get.call(null,res,new cljs.core.Keyword(null,"success?","success?",-122854052));
} else {
return and__28814__auto__;
}
})();
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
var and__28814__auto__ = cljs.core.find.call(null,res,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(and__28814__auto__)){
return cljs.core.not.call(null,cljs.core.get.call(null,res,new cljs.core.Keyword(null,"success?","success?",-122854052)));
} else {
return and__28814__auto__;
}
}
})())){
} else {
throw (new Error("Assert failed: (or (and (find res :value) (get res :success?)) (and (find res :error) (not (get res :success?))))"));
}

if(cljs.core.truth_((function (){var or__28826__auto__ = (function (){var and__28814__auto__ = cljs.core.find.call(null,res,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(and__28814__auto__)){
var or__28826__auto__ = (cljs.core.not.call(null,new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546).cljs$core$IFn$_invoke$arity$1(opts))) && (typeof cljs.core.get.call(null,res,new cljs.core.Keyword(null,"value","value",305978217)) === 'string');
if(or__28826__auto__){
return or__28826__auto__;
} else {
var and__28814__auto____$1 = new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__28814__auto____$1)){
return !((res == null));
} else {
return and__28814__auto____$1;
}
}
} else {
return and__28814__auto__;
}
})();
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
var and__28814__auto__ = cljs.core.find.call(null,res,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(and__28814__auto__)){
return (cljs.core.get.call(null,res,new cljs.core.Keyword(null,"error","error",-978969032)) instanceof Error);
} else {
return and__28814__auto__;
}
}
})())){
} else {
throw (new Error("Assert failed: (or (and (find res :value) (or (and (not (:no-pr-str-on-value opts)) (string? (get res :value))) (and (:no-pr-str-on-value opts) (not (nil? res))))) (and (find res :error) (instance? js/Error (get res :error))))"));
}

if(cljs.core.truth_((function (){var or__28826__auto__ = cljs.core.not.call(null,cljs.core.find.call(null,res,new cljs.core.Keyword(null,"warning","warning",-1685650671)));
if(or__28826__auto__){
return or__28826__auto__;
} else {
var or__28826__auto____$1 = cljs.core.find.call(null,res,new cljs.core.Keyword(null,"warning","warning",-1685650671));
if(cljs.core.truth_(or__28826__auto____$1)){
return or__28826__auto____$1;
} else {
return typeof cljs.core.get.call(null,res,new cljs.core.Keyword(null,"warning","warning",-1685650671)) === 'string';
}
}
})())){
} else {
throw (new Error("Assert failed: (or (not (find res :warning)) (and (find res :warning)) (string? (get res :warning)))"));
}

return cb.call(null,res);
});
replumb.repl.validated_init_fn_BANG_ = (function replumb$repl$validated_init_fn_BANG_(init_fn_BANG_,res){
if(cljs.core.map_QMARK_.call(null,res)){
} else {
throw (new Error("Assert failed: (map? res)"));
}

if(cljs.core.truth_(cljs.core.find.call(null,res,new cljs.core.Keyword(null,"form","form",-1624062471)))){
} else {
throw (new Error("Assert failed: (find res :form)"));
}

if(cljs.core.truth_(cljs.core.find.call(null,res,new cljs.core.Keyword(null,"ns","ns",441598760)))){
} else {
throw (new Error("Assert failed: (find res :ns)"));
}

if(cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,cljs.core.get.call(null,res,new cljs.core.Keyword(null,"target","target",253001721)))){
} else {
throw (new Error("Assert failed: (= *target* (get res :target))"));
}

return init_fn_BANG_.call(null,res);
});
/**
 * Execute the correct side effecting function from data.
 *   Handles :side-effect-fn!, :on-error-fn! and :on-success-fn!.
 */
replumb.repl.call_side_effect_BANG_ = (function replumb$repl$call_side_effect_BANG_(data,p__40406){
var map__40407 = p__40406;
var map__40407__$1 = ((((!((map__40407 == null)))?((((map__40407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40407):map__40407);
var value = cljs.core.get.call(null,map__40407__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__40407__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var temp__4655__auto__ = new cljs.core.Keyword(null,"side-effect-fn!","side-effect-fn!",-1977898773).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__4655__auto__)){
var f_BANG_ = temp__4655__auto__;
return f_BANG_.call(null);
} else {
if(cljs.core.not.call(null,error)){
var temp__4657__auto__ = new cljs.core.Keyword(null,"on-success-fn!","on-success-fn!",461991357).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__4657__auto__)){
var s_BANG_ = temp__4657__auto__;
return s_BANG_.call(null);
} else {
return null;
}
} else {
var temp__4657__auto__ = new cljs.core.Keyword(null,"on-error-fn!","on-error-fn!",-1787514690).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__4657__auto__)){
var e_BANG_ = temp__4657__auto__;
return e_BANG_.call(null);
} else {
return null;
}
}
}
});
/**
 * Checks if there has been a warning and if so will return a new result
 *   map instead of the input one, potentially with a :warning key
 *   containing the warning message in it.
 * 
 *   The code paths are the following:
 * 
 *   - if the input map was already an :error, there will be no warning,
 *   the original :error is returned.
 *   - if the input map was a :value:
 *  - if (:warning-as-error opts) is truey, the new map will always
 *    contain it as :error, overriding the original.
 *  - if (:warning-as-error opts) is falsey, the new map will contain
 *    the warning as :warning along with the original :value
 */
replumb.repl.warning_error_map_BANG_ = (function replumb$repl$warning_error_map_BANG_(opts,p__40409){
var map__40410 = p__40409;
var map__40410__$1 = ((((!((map__40410 == null)))?((((map__40410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40410):map__40410);
var orig = map__40410__$1;
var error = cljs.core.get.call(null,map__40410__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var temp__4655__auto__ = new cljs.core.Keyword(null,"last-eval-warning","last-eval-warning",-478360530).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replumb.repl.app_env));
if(cljs.core.truth_(temp__4655__auto__)){
var warning_msg = temp__4655__auto__;
if(cljs.core.not.call(null,error)){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"warning-as-error","warning-as-error",1347418166).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,orig,new cljs.core.Keyword(null,"warning","warning",-1685650671),warning_msg);
} else {
var warning_error = cljs.core.ex_info.call(null,warning_msg,replumb.repl.ex_info_data);
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
replumb.common.debug_prn.call(null,"Erroring on last warning: ",warning_msg);
} else {
}

return replumb.common.wrap_error.call(null,warning_error);
}
} else {
return orig;
}
} else {
return orig;
}
});
/**
 * Handles the evaluation result, calling the callback in the right way,
 *   based on the success or error of the evaluation. The res parameter
 *   expects the same map as ClojureScript's cljs.js callback,
 *   :value if success and :error if not. The data parameter might contain
 *   additional stuff:
 * 
 *   * :form the source form that has been eval-ed
 *   * :on-success-fn! 0-arity function that will be executed on success
 *   * :on-error-fn! 0-arity function that will be executed on error
 *   * :side-effect-fn! 0-arity function that if present will be executed
 *   for both success and error, effectively disabling the individual
 *   on-success-fn! and on-error-fn!
 * 
 *   Call-back! supports the following opts:
 * 
 *   * :verbose will enable the evaluation logging, defaults to false.
 *   * :no-pr-str-on-value avoids wrapping successful value in a pr-str
 *   * :warning-as-error will consider a warning like an error
 * 
 *   Notes:
 *   1. The opts map passed here overrides the environment options.
 *   2. This function will also clear the :last-eval-warning flag in
 *   app-env.
 *   3. It will execute (:side-effect-fn!) or (on-success-fn!)
 *   and (on-error-fn!)  *before* the callback is called.
 * 
 *   ** Every function in this namespace should call call-back! as
 *   single point of exit. **
 */
replumb.repl.call_back_BANG_ = (function replumb$repl$call_back_BANG_(var_args){
var G__40413 = arguments.length;
switch (G__40413) {
case 3:
return replumb.repl.call_back_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return replumb.repl.call_back_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replumb.repl.call_back_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (opts,cb,res){
return replumb.repl.call_back_BANG_.call(null,opts,cb,cljs.core.PersistentArrayMap.EMPTY,res);
});

replumb.repl.call_back_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (opts,cb,data,res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
replumb.common.debug_prn.call(null,"Calling back!\n",(function (){var sb__29853__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40414_40419 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40415_40420 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40414_40419,_STAR_print_fn_STAR_40415_40420,sb__29853__auto__){
return (function (x__29854__auto__){
return sb__29853__auto__.append(x__29854__auto__);
});})(_STAR_print_newline_STAR_40414_40419,_STAR_print_fn_STAR_40415_40420,sb__29853__auto__))
;

try{cljs.pprint.pprint.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),replumb.common.filter_fn_keys.call(null,opts),new cljs.core.Keyword(null,"data","data",-232669377),replumb.common.filter_fn_keys.call(null,data),new cljs.core.Keyword(null,"res","res",-1395007879),res], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40415_40420;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40414_40419;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__29853__auto__)].join('');
})());
} else {
}

var res__$1 = replumb.repl.warning_error_map_BANG_.call(null,opts,res);
var map__40416 = res__$1;
var map__40416__$1 = ((((!((map__40416 == null)))?((((map__40416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40416):map__40416);
var value = cljs.core.get.call(null,map__40416__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__40416__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var warning = cljs.core.get.call(null,map__40416__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
replumb.repl.call_side_effect_BANG_.call(null,data,res__$1);

replumb.repl.reset_last_warning_BANG_.call(null);

if(cljs.core.not.call(null,error)){
cljs.core._STAR_e = null;

return cb.call(null,replumb.repl.success_map.call(null,opts,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(data),warning,value));
} else {
cljs.core._STAR_e = error;

return cb.call(null,replumb.repl.error_map.call(null,opts,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(data),warning,error));
}
});

replumb.repl.call_back_BANG_.cljs$lang$maxFixedArity = 4;

replumb.repl.process_1_2_3 = (function replumb$repl$process_1_2_3(data,expression_form,value){
if(cljs.core.truth_((function (){var or__28826__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"*2","*2",1728229926,null),null,new cljs.core.Symbol(null,"*1","*1",2110258092,null),null,new cljs.core.Symbol(null,"*e","*e",329170866,null),null,new cljs.core.Symbol(null,"*3","*3",105062009,null),null], null), null).call(null,expression_form);
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return replumb.repl.ns_form_QMARK_.call(null,expression_form);
}
})())){
return null;
} else {
cljs.core._STAR_3 = cljs.core._STAR_2;

cljs.core._STAR_2 = cljs.core._STAR_1;

return cljs.core._STAR_1 = value;
}
});
/**
 * Custom version of cljs.js/eval-str. The only difference is in the
 *   spitting of eval-opts, which is the map which the actual
 *   cljs.js/eval-str needs and usually built by base-eval-opts!, and
 *   user-opts, passed through read-eval-call (same keys supported).
 * 
 *   Additionally, eval-opts might contain:
 * 
 *   * :file-name In case of file loading, indicates its name
 *   * :on-success-fn! 1-arity function that will be executed on success,
 *   the input is the evaluation result
 *   * :on-error-fn! 1-arity function that will be executed on error, the
 *   input is the evaluation result
 *   * :side-effect-fn! 1-arity function that if present will be executed
 *   for both success and error, effectively disabling the individual
 *   on-success-fn! and on-error-fn!. The input is the evaluation result
 */
replumb.repl.eval_str_STAR_ = (function replumb$repl$eval_str_STAR_(eval_opts,user_opts,cb,data,source){
var map__40421 = eval_opts;
var map__40421__$1 = ((((!((map__40421 == null)))?((((map__40421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40421):map__40421);
var file_name = cljs.core.get.call(null,map__40421__$1,new cljs.core.Keyword(null,"file-name","file-name",-1654217259));
var on_success_fn_BANG_ = cljs.core.get.call(null,map__40421__$1,new cljs.core.Keyword(null,"on-success-fn!","on-success-fn!",461991357));
var on_error_fn_BANG_ = cljs.core.get.call(null,map__40421__$1,new cljs.core.Keyword(null,"on-error-fn!","on-error-fn!",-1787514690));
var side_effect_fn_BANG_ = cljs.core.get.call(null,map__40421__$1,new cljs.core.Keyword(null,"side-effect-fn!","side-effect-fn!",-1977898773));
return cljs.js.eval_str.call(null,replumb.repl.st,source,(cljs.core.truth_(file_name)?file_name:source),eval_opts,((function (map__40421,map__40421__$1,file_name,on_success_fn_BANG_,on_error_fn_BANG_,side_effect_fn_BANG_){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(user_opts))){
replumb.common.debug_prn.call(null,"Evaluation returned: ",res);
} else {
}

return replumb.repl.call_back_BANG_.call(null,user_opts,cb,(function (){var G__40423 = data;
var G__40423__$1 = (cljs.core.truth_(on_success_fn_BANG_)?cljs.core.assoc.call(null,G__40423,new cljs.core.Keyword(null,"on-success-fn!","on-success-fn!",461991357),((function (G__40423,map__40421,map__40421__$1,file_name,on_success_fn_BANG_,on_error_fn_BANG_,side_effect_fn_BANG_){
return (function (){
return on_success_fn_BANG_.call(null,res);
});})(G__40423,map__40421,map__40421__$1,file_name,on_success_fn_BANG_,on_error_fn_BANG_,side_effect_fn_BANG_))
):G__40423);
var G__40423__$2 = (cljs.core.truth_(on_error_fn_BANG_)?cljs.core.assoc.call(null,G__40423__$1,new cljs.core.Keyword(null,"on-error-fn!","on-error-fn!",-1787514690),((function (G__40423,G__40423__$1,map__40421,map__40421__$1,file_name,on_success_fn_BANG_,on_error_fn_BANG_,side_effect_fn_BANG_){
return (function (){
return on_error_fn_BANG_.call(null,res);
});})(G__40423,G__40423__$1,map__40421,map__40421__$1,file_name,on_success_fn_BANG_,on_error_fn_BANG_,side_effect_fn_BANG_))
):G__40423__$1);
if(cljs.core.truth_(side_effect_fn_BANG_)){
return cljs.core.assoc.call(null,G__40423__$2,new cljs.core.Keyword(null,"side-effect-fn!","side-effect-fn!",-1977898773),((function (G__40423,G__40423__$1,G__40423__$2,map__40421,map__40421__$1,file_name,on_success_fn_BANG_,on_error_fn_BANG_,side_effect_fn_BANG_){
return (function (){
return side_effect_fn_BANG_.call(null,res);
});})(G__40423,G__40423__$1,G__40423__$2,map__40421,map__40421__$1,file_name,on_success_fn_BANG_,on_error_fn_BANG_,side_effect_fn_BANG_))
);
} else {
return G__40423__$2;
}
})(),res);
});})(map__40421,map__40421__$1,file_name,on_success_fn_BANG_,on_error_fn_BANG_,side_effect_fn_BANG_))
);
});
replumb.repl.process_require = (function replumb$repl$process_require(opts,cb,data,kind,specs){
if(!(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.ffirst.call(null,specs)))){
return replumb.repl.call_back_BANG_.call(null,opts,cb,data,replumb.common.error_argument_must_be_symbol.call(null,"require",replumb.repl.ex_info_data));
} else {
var is_self_require_QMARK_ = (function (){var and__28814__auto__ = cljs.core._EQ_.call(null,kind,new cljs.core.Keyword(null,"require","require",-468001333));
if(and__28814__auto__){
return replumb.repl.self_require_QMARK_.call(null,specs);
} else {
return and__28814__auto__;
}
})();
var vec__40424 = ((cljs.core.not.call(null,is_self_require_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replumb.repl.current_ns.call(null),null], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),replumb.repl.current_ns.call(null)], null));
var target_ns = cljs.core.nth.call(null,vec__40424,(0),null);
var restore_ns = cljs.core.nth.call(null,vec__40424,(1),null);
var ns_form = replumb.repl.make_ns_form.call(null,kind,specs,target_ns);
var restore_ns_BANG_ = ((function (is_self_require_QMARK_,vec__40424,target_ns,restore_ns,ns_form){
return (function (){
if(cljs.core.truth_(is_self_require_QMARK_)){
return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,cljs.core.assoc,new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),restore_ns);
} else {
return null;
}
});})(is_self_require_QMARK_,vec__40424,target_ns,restore_ns,ns_form))
;
var purge_ns_BANG_ = ((function (is_self_require_QMARK_,vec__40424,target_ns,restore_ns,ns_form,restore_ns_BANG_){
return (function (){
return replumb.repl.purge_namespaces_BANG_.call(null,target_ns,cljs.core.deref.call(null,cljs.js._STAR_loaded_STAR_));
});})(is_self_require_QMARK_,vec__40424,target_ns,restore_ns,ns_form,restore_ns_BANG_))
;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
replumb.common.debug_prn.call(null,"Processing",kind,"via",cljs.core.pr_str.call(null,ns_form));
} else {
}

return cljs.js.eval.call(null,replumb.repl.st,ns_form,replumb.repl.base_eval_opts_BANG_.call(null,opts),((function (is_self_require_QMARK_,vec__40424,target_ns,restore_ns,ns_form,restore_ns_BANG_,purge_ns_BANG_){
return (function (p__40427){
var map__40428 = p__40427;
var map__40428__$1 = ((((!((map__40428 == null)))?((((map__40428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40428):map__40428);
var error = cljs.core.get.call(null,map__40428__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return replumb.repl.call_back_BANG_.call(null,opts,cb,cljs.core.merge.call(null,data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-error-fn!","on-error-fn!",-1787514690),((function (map__40428,map__40428__$1,error,is_self_require_QMARK_,vec__40424,target_ns,restore_ns,ns_form,restore_ns_BANG_,purge_ns_BANG_){
return (function (){
purge_ns_BANG_.call(null);

return restore_ns_BANG_.call(null);
});})(map__40428,map__40428__$1,error,is_self_require_QMARK_,vec__40424,target_ns,restore_ns,ns_form,restore_ns_BANG_,purge_ns_BANG_))
,new cljs.core.Keyword(null,"on-success-fn!","on-success-fn!",461991357),((function (map__40428,map__40428__$1,error,is_self_require_QMARK_,vec__40424,target_ns,restore_ns,ns_form,restore_ns_BANG_,purge_ns_BANG_){
return (function (){
return restore_ns_BANG_.call(null);
});})(map__40428,map__40428__$1,error,is_self_require_QMARK_,vec__40424,target_ns,restore_ns,ns_form,restore_ns_BANG_,purge_ns_BANG_))
], null)),(cljs.core.truth_(error)?replumb.common.wrap_error.call(null,error):replumb.common.wrap_success.call(null,null)));
});})(is_self_require_QMARK_,vec__40424,target_ns,restore_ns,ns_form,restore_ns_BANG_,purge_ns_BANG_))
);
}
});
replumb.repl.doc_map_special_symbols = (function replumb$repl$doc_map_special_symbols(sym){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol(null,"try","try",-1273693247,null),new cljs.core.Symbol(null,"finally","finally",-1065347064,null),new cljs.core.Symbol(null,"try","try",-1273693247,null)], null),sym,sym);
});
replumb.repl.process_doc = (function replumb$repl$process_doc(opts,cb,data,sym){
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546),true], null));
return replumb.repl.call_back_BANG_.call(null,opts__$1,cb,data,replumb.common.wrap_success.call(null,(function (){var sb__29853__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40430_40432 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40431_40433 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40430_40432,_STAR_print_fn_STAR_40431_40433,sb__29853__auto__,opts__$1){
return (function (x__29854__auto__){
return sb__29853__auto__.append(x__29854__auto__);
});})(_STAR_print_newline_STAR_40430_40432,_STAR_print_fn_STAR_40431_40433,sb__29853__auto__,opts__$1))
;

try{var sym_40434__$1 = replumb.repl.doc_map_special_symbols.call(null,sym);
if(cljs.core.truth_(replumb.doc_maps.special_doc_map.call(null,sym_40434__$1))){
cljs.repl.print_doc.call(null,replumb.doc_maps.special_doc.call(null,sym_40434__$1));
} else {
if(cljs.core.truth_(replumb.doc_maps.repl_special_doc_map.call(null,sym_40434__$1))){
cljs.repl.print_doc.call(null,replumb.doc_maps.repl_special_doc.call(null,sym_40434__$1));
} else {
if(cljs.core.truth_(replumb.ast.namespace.call(null,cljs.core.deref.call(null,replumb.repl.st),sym_40434__$1))){
cljs.repl.print_doc.call(null,cljs.core.select_keys.call(null,replumb.ast.namespace.call(null,cljs.core.deref.call(null,replumb.repl.st),sym_40434__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"doc","doc",1913296891)], null)));
} else {
cljs.repl.print_doc.call(null,replumb.repl.get_var.call(null,opts__$1,sym_40434__$1));

}
}
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40431_40433;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40430_40432;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__29853__auto__)].join('');
})()));
});
replumb.repl.process_pst = (function replumb$repl$process_pst(opts,cb,data,expr){
var temp__4655__auto__ = (function (){var or__28826__auto__ = expr;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return new cljs.core.Symbol(null,"*e","*e",329170866,null);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var expr__$1 = temp__4655__auto__;
return cljs.js.eval.call(null,replumb.repl.st,expr__$1,replumb.repl.base_eval_opts_BANG_.call(null,opts),((function (expr__$1,temp__4655__auto__){
return (function (p__40435){
var map__40436 = p__40435;
var map__40436__$1 = ((((!((map__40436 == null)))?((((map__40436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40436):map__40436);
var value = cljs.core.get.call(null,map__40436__$1,new cljs.core.Keyword(null,"value","value",305978217));
var msg = (cljs.core.truth_(value)?replumb.common.extract_message.call(null,true,true,value):"nil");
return replumb.repl.call_back_BANG_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546),true),cb,data,replumb.common.wrap_success.call(null,msg));
});})(expr__$1,temp__4655__auto__))
);
} else {
return replumb.repl.call_back_BANG_.call(null,opts,cb,data,replumb.common.wrap_success.call(null,null));
}
});
replumb.repl.process_in_ns = (function replumb$repl$process_in_ns(opts,cb,data,ns_string){
return cljs.js.eval.call(null,replumb.repl.st,ns_string,replumb.repl.base_eval_opts_BANG_.call(null,opts),(function (p__40438){
var map__40439 = p__40438;
var map__40439__$1 = ((((!((map__40439 == null)))?((((map__40439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40439):map__40439);
var result = map__40439__$1;
var error = cljs.core.get.call(null,map__40439__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__40439__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(error)){
return replumb.repl.call_back_BANG_.call(null,opts,cb,data,result);
} else {
var ns_symbol = value;
if(!((ns_symbol instanceof cljs.core.Symbol))){
return replumb.repl.call_back_BANG_.call(null,opts,cb,data,replumb.common.error_argument_must_be_symbol.call(null,"in-ns",replumb.repl.ex_info_data));
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,ns_symbol),replumb.ast.known_namespaces.call(null,cljs.core.deref.call(null,replumb.repl.st))))){
return replumb.repl.call_back_BANG_.call(null,opts,cb,cljs.core.merge.call(null,data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"side-effect-fn!","side-effect-fn!",-1977898773),((function (ns_symbol,map__40439,map__40439__$1,result,error,value){
return (function (){
return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,cljs.core.assoc,new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),ns_symbol);
});})(ns_symbol,map__40439,map__40439__$1,result,error,value))
], null)),replumb.common.wrap_success.call(null,null));
} else {
var ns_form = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns","ns",2082130287,null)),(function (){var x__29688__auto__ = ns_symbol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.js.eval.call(null,replumb.repl.st,ns_form,replumb.repl.base_eval_opts_BANG_.call(null,opts),cljs.core.partial.call(null,replumb.repl.call_back_BANG_,opts,cb,cljs.core.merge.call(null,data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-success-fn!","on-success-fn!",461991357),((function (ns_form,ns_symbol,map__40439,map__40439__$1,result,error,value){
return (function (){
return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,cljs.core.assoc,new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),ns_symbol);
});})(ns_form,ns_symbol,map__40439,map__40439__$1,result,error,value))
], null))));
}
}
}
}));
});
replumb.repl.fetch_source = (function replumb$repl$fetch_source(p__40441,var$,paths_to_try,cb){
var map__40442 = p__40441;
var map__40442__$1 = ((((!((map__40442 == null)))?((((map__40442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40442):map__40442);
var verbose = cljs.core.get.call(null,map__40442__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060));
var read_file_fn_BANG_ = cljs.core.get.call(null,map__40442__$1,new cljs.core.Keyword(null,"read-file-fn!","read-file-fn!",-492428191));
if(cljs.core.truth_(read_file_fn_BANG_)){
return replumb.load.read_files_and_callback_BANG_.call(null,verbose,paths_to_try,read_file_fn_BANG_,((function (map__40442,map__40442__$1,verbose,read_file_fn_BANG_){
return (function (result){
if(cljs.core.truth_(result)){
var _STAR_cljs_ns_STAR_40444 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR_40445 = cljs.env._STAR_compiler_STAR_;
var _STAR_data_readers_STAR_40446 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol40447 = cljs.tools.reader.resolve_symbol;
cljs.analyzer._STAR_cljs_ns_STAR_ = replumb.repl.current_ns.call(null);

cljs.env._STAR_compiler_STAR_ = replumb.repl.st;

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.tagged_literals._STAR_cljs_data_readers_STAR_;

cljs.tools.reader.resolve_symbol = cljs.analyzer.resolve_symbol;

try{var source = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(result);
var rdr = cljs.tools.reader.reader_types.source_logging_push_back_reader.call(null,source);
var n__29771__auto___40448 = (new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(var$) - (1));
var __40449 = (0);
while(true){
if((__40449 < n__29771__auto___40448)){
cljs.tools.reader.impl.commons.skip_line.call(null,rdr);

var G__40450 = (__40449 + (1));
__40449 = G__40450;
continue;
} else {
}
break;
}

return cb.call(null,replumb.common.wrap_success.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,replumb.repl.read.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr)))));
}finally {cljs.tools.reader.resolve_symbol = resolve_symbol40447;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_40446;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_40445;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_40444;
}} else {
return cb.call(null,replumb.common.wrap_success.call(null,"nil"));
}
});})(map__40442,map__40442__$1,verbose,read_file_fn_BANG_))
);
} else {
if(cljs.core.truth_(verbose)){
replumb.common.debug_prn.call(null,"No :read-file-fn! provided, skipping source fetching...");
} else {
}

return cb.call(null,replumb.common.wrap_success.call(null,"nil"));
}
});
replumb.repl.process_source = (function replumb$repl$process_source(opts,cb,data,sym){
var var$ = replumb.repl.get_var.call(null,opts,sym);
var call_back = cljs.core.partial.call(null,replumb.repl.call_back_BANG_,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546),true], null)),cb,data);
var temp__4655__auto__ = (function (){var or__28826__auto__ = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(var$));
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var full_path_or_ns = temp__4655__auto__;
var paths_to_try = ((!((full_path_or_ns instanceof cljs.core.Symbol)))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_path_or_ns], null),replumb.load.file_paths.call(null,new cljs.core.Keyword(null,"src-paths","src-paths",-1052057603).cljs$core$IFn$_invoke$arity$1(opts),full_path_or_ns)):replumb.load.file_paths_for_load_fn.call(null,new cljs.core.Keyword(null,"src-paths","src-paths",-1052057603).cljs$core$IFn$_invoke$arity$1(opts),replumb.repl.macro_QMARK_.call(null,var$),cljs.js.ns__GT_relpath.call(null,full_path_or_ns)));
return replumb.repl.fetch_source.call(null,opts,var$,paths_to_try,call_back);
} else {
return call_back.call(null,replumb.common.wrap_success.call(null,"nil"));
}
});
replumb.repl.process_dir = (function replumb$repl$process_dir(opts,cb,data,sym){
var vars = cljs.core.sort.call(null,cljs.core.keys.call(null,replumb.ast.ns_publics.call(null,cljs.core.deref.call(null,replumb.repl.st),sym)));
var call_back = cljs.core.partial.call(null,replumb.repl.call_back_BANG_,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546),true], null)),cb,data);
if(cljs.core.seq.call(null,vars)){
return call_back.call(null,replumb.common.wrap_success.call(null,clojure.string.join.call(null,"\n",vars)));
} else {
return call_back.call(null,replumb.common.wrap_success.call(null,"nil"));
}
});
replumb.repl.process_apropos = (function replumb$repl$process_apropos(opts,cb,data,str_or_pattern){
var matches_QMARK_ = (((str_or_pattern instanceof RegExp))?(function (p1__40451_SHARP_){
return cljs.core.re_find.call(null,str_or_pattern,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40451_SHARP_)].join(''));
}):(function (p1__40452_SHARP_){
return ((-1) < [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40452_SHARP_)].join('').indexOf([cljs.core.str.cljs$core$IFn$_invoke$arity$1(str_or_pattern)].join('')));
}));
var defs = cljs.core.sort.call(null,cljs.core.mapcat.call(null,((function (matches_QMARK_){
return (function (ns){
var ns_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
return cljs.core.map.call(null,((function (ns_name,matches_QMARK_){
return (function (p1__40453_SHARP_){
return cljs.core.symbol.call(null,ns_name,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40453_SHARP_)].join(''));
});})(ns_name,matches_QMARK_))
,cljs.core.filter.call(null,matches_QMARK_,cljs.core.keys.call(null,replumb.ast.ns_publics.call(null,cljs.core.deref.call(null,replumb.repl.st),ns))));
});})(matches_QMARK_))
,replumb.ast.known_namespaces.call(null,cljs.core.deref.call(null,replumb.repl.st))));
return replumb.repl.call_back_BANG_.call(null,opts,cb,data,replumb.common.wrap_success.call(null,cljs.core.seq.call(null,defs)));
});
replumb.repl.process_find_doc = (function replumb$repl$process_find_doc(opts,cb,data,re_string_or_pattern){
var re = cljs.core.re_pattern.call(null,re_string_or_pattern);
var ms = cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (re){
return (function (ns){
return cljs.core.map.call(null,((function (re){
return (function (m){
return cljs.core.update_in.call(null,cljs.core.select_keys.call(null,m,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"url","url",276297046)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),((function (re){
return (function (p1__40454_SHARP_){
if(!((p1__40454_SHARP_ == null))){
return cljs.core.name.call(null,p1__40454_SHARP_);
} else {
return p1__40454_SHARP_;
}
});})(re))
);
});})(re))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.vals.call(null,replumb.ast.ns_interns.call(null,cljs.core.deref.call(null,replumb.repl.st),ns))));
});})(re))
,replumb.ast.known_namespaces.call(null,cljs.core.deref.call(null,replumb.repl.st))),cljs.core.map.call(null,((function (re){
return (function (p1__40455_SHARP_){
return cljs.core.select_keys.call(null,replumb.ast.namespace.call(null,cljs.core.deref.call(null,replumb.repl.st),p1__40455_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"doc","doc",1913296891)], null));
});})(re))
,replumb.ast.known_namespaces.call(null,cljs.core.deref.call(null,replumb.repl.st))),cljs.core.map.call(null,replumb.doc_maps.special_doc,cljs.core.keys.call(null,replumb.doc_maps.special_doc_map)));
var ms__$1 = (function (){var iter__29634__auto__ = ((function (re,ms){
return (function replumb$repl$process_find_doc_$_iter__40457(s__40458){
return (new cljs.core.LazySeq(null,((function (re,ms){
return (function (){
var s__40458__$1 = s__40458;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40458__$1);
if(temp__4657__auto__){
var s__40458__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40458__$2)){
var c__29632__auto__ = cljs.core.chunk_first.call(null,s__40458__$2);
var size__29633__auto__ = cljs.core.count.call(null,c__29632__auto__);
var b__40460 = cljs.core.chunk_buffer.call(null,size__29633__auto__);
if((function (){var i__40459 = (0);
while(true){
if((i__40459 < size__29633__auto__)){
var m = cljs.core._nth.call(null,c__29632__auto__,i__40459);
if(cljs.core.truth_((function (){var and__28814__auto__ = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(and__28814__auto__)){
var or__28826__auto__ = cljs.core.re_find.call(null,re,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return cljs.core.re_find.call(null,re,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
return and__28814__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__40460,m);

var G__40463 = (i__40459 + (1));
i__40459 = G__40463;
continue;
} else {
var G__40464 = (i__40459 + (1));
i__40459 = G__40464;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40460),replumb$repl$process_find_doc_$_iter__40457.call(null,cljs.core.chunk_rest.call(null,s__40458__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40460),null);
}
} else {
var m = cljs.core.first.call(null,s__40458__$2);
if(cljs.core.truth_((function (){var and__28814__auto__ = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(and__28814__auto__)){
var or__28826__auto__ = cljs.core.re_find.call(null,re,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return cljs.core.re_find.call(null,re,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
return and__28814__auto__;
}
})())){
return cljs.core.cons.call(null,m,replumb$repl$process_find_doc_$_iter__40457.call(null,cljs.core.rest.call(null,s__40458__$2)));
} else {
var G__40465 = cljs.core.rest.call(null,s__40458__$2);
s__40458__$1 = G__40465;
continue;
}
}
} else {
return null;
}
break;
}
});})(re,ms))
,null,null));
});})(re,ms))
;
return iter__29634__auto__.call(null,ms);
})();
var call_back = cljs.core.partial.call(null,replumb.repl.call_back_BANG_,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546),true], null)),cb,data);
if(cljs.core.seq.call(null,ms__$1)){
return call_back.call(null,replumb.common.wrap_success.call(null,clojure.string.join.call(null,cljs.core.map.call(null,((function (re,ms,ms__$1,call_back){
return (function (p1__40456_SHARP_){
var sb__29853__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40461_40466 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40462_40467 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40461_40466,_STAR_print_fn_STAR_40462_40467,sb__29853__auto__,re,ms,ms__$1,call_back){
return (function (x__29854__auto__){
return sb__29853__auto__.append(x__29854__auto__);
});})(_STAR_print_newline_STAR_40461_40466,_STAR_print_fn_STAR_40462_40467,sb__29853__auto__,re,ms,ms__$1,call_back))
;

try{cljs.repl.print_doc.call(null,p1__40456_SHARP_);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40462_40467;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40461_40466;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__29853__auto__)].join('');
});})(re,ms,ms__$1,call_back))
,ms__$1))));
} else {
return call_back.call(null,replumb.common.wrap_success.call(null,"nil"));
}
});
replumb.repl.last_form = (function replumb$repl$last_form(source){
var rdr = cljs.tools.reader.reader_types.string_push_back_reader.call(null,source);
var eof = {};
var read = ((function (rdr,eof){
return (function (){
return replumb.repl.read.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof], null),rdr);
});})(rdr,eof))
;
var first_form = read.call(null);
var second_form = read.call(null);
while(true){
if((eof === second_form)){
return first_form;
} else {
var G__40470 = second_form;
var G__40471 = read.call(null);
first_form = G__40470;
second_form = G__40471;
continue;
}
break;
}
});
replumb.repl.process_load_file = (function replumb$repl$process_load_file(p__40472,cb,data,file_name){
var map__40473 = p__40472;
var map__40473__$1 = ((((!((map__40473 == null)))?((((map__40473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40473):map__40473);
var opts = map__40473__$1;
var verbose = cljs.core.get.call(null,map__40473__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060));
var read_file_fn_BANG_ = cljs.core.get.call(null,map__40473__$1,new cljs.core.Keyword(null,"read-file-fn!","read-file-fn!",-492428191));
var src_paths = cljs.core.get.call(null,map__40473__$1,new cljs.core.Keyword(null,"src-paths","src-paths",-1052057603));
var call_back = cljs.core.partial.call(null,replumb.repl.call_back_BANG_,opts,cb,data);
if(cljs.core.truth_(read_file_fn_BANG_)){
return replumb.load.read_files_and_callback_BANG_.call(null,verbose,replumb.load.file_paths.call(null,src_paths,file_name),read_file_fn_BANG_,((function (call_back,map__40473,map__40473__$1,opts,verbose,read_file_fn_BANG_,src_paths){
return (function (p__40475){
var map__40476 = p__40475;
var map__40476__$1 = ((((!((map__40476 == null)))?((((map__40476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40476):map__40476);
var result = map__40476__$1;
var source = cljs.core.get.call(null,map__40476__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if(cljs.core.truth_(result)){
return replumb.repl.eval_str_STAR_.call(null,cljs.core.assoc.call(null,replumb.repl.load_eval_opts_BANG_.call(null,opts,file_name),new cljs.core.Keyword(null,"on-success-fn!","on-success-fn!",461991357),((function (map__40476,map__40476__$1,result,source,call_back,map__40473,map__40473__$1,opts,verbose,read_file_fn_BANG_,src_paths){
return (function (eval_res){
return replumb.repl.process_1_2_3.call(null,data,replumb.repl.last_form.call(null,source),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(eval_res));
});})(map__40476,map__40476__$1,result,source,call_back,map__40473,map__40473__$1,opts,verbose,read_file_fn_BANG_,src_paths))
),opts,cb,data,source);
} else {
return call_back.call(null,replumb.common.wrap_error.call(null,cljs.core.ex_info.call(null,["Could not load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name)].join(''),replumb.repl.ex_info_data)));
}
});})(call_back,map__40473,map__40473__$1,opts,verbose,read_file_fn_BANG_,src_paths))
);
} else {
if(cljs.core.truth_(verbose)){
replumb.common.debug_prn.call(null,"No :read-file-fn! provided, skipping file loading...");
} else {
}

return call_back.call(null,replumb.common.wrap_success.call(null,null));
}
});
replumb.repl.process_repl_special = (function replumb$repl$process_repl_special(opts,cb,data,expression_form){
var argument = cljs.core.second.call(null,expression_form);
var G__40478 = cljs.core.first.call(null,expression_form);
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"find-doc","find-doc",-1096800949,null),G__40478)){
return replumb.repl.process_find_doc.call(null,opts,cb,data,argument);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"dir","dir",-919681108,null),G__40478)){
return replumb.repl.process_dir.call(null,opts,cb,data,argument);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"import","import",241030818,null),G__40478)){
return replumb.repl.process_require.call(null,opts,cb,data,new cljs.core.Keyword(null,"import","import",-1399500709),cljs.core.rest.call(null,expression_form));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"require-macros","require-macros",-1946488353,null),G__40478)){
return replumb.repl.process_require.call(null,opts,cb,data,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),cljs.core.rest.call(null,expression_form));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"pst","pst",-1996688947,null),G__40478)){
return replumb.repl.process_pst.call(null,opts,cb,data,argument);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"load-file","load-file",1215944857,null),G__40478)){
return replumb.repl.process_load_file.call(null,opts,cb,data,argument);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"source","source",1206599988,null),G__40478)){
return replumb.repl.process_source.call(null,opts,cb,data,argument);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"doc","doc",-741138878,null),G__40478)){
return replumb.repl.process_doc.call(null,opts,cb,data,argument);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__40478)){
return replumb.repl.process_in_ns.call(null,opts,cb,data,argument);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"require","require",1172530194,null),G__40478)){
return replumb.repl.process_require.call(null,opts,cb,data,new cljs.core.Keyword(null,"require","require",-468001333),cljs.core.rest.call(null,expression_form));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"apropos","apropos",-1511857537,null),G__40478)){
return replumb.repl.process_apropos.call(null,opts,cb,data,argument);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40478)].join('')));

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
});
/**
 * Builds a `ns` for the given specs and evaluates it.
 */
replumb.repl.process_init_requires = (function replumb$repl$process_init_requires(opts,cb,data,specs){
var verbose = new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts);
var ns_form = replumb.repl.make_ns_string.call(null,specs,replumb.repl.current_ns.call(null));
if(cljs.core.truth_(verbose)){
replumb.common.debug_prn.call(null,"Spec for :preloads",ns_form);
} else {
}

return cljs.js.eval_str.call(null,replumb.repl.st,ns_form,ns_form,replumb.repl.base_eval_opts_BANG_.call(null,opts),((function (verbose,ns_form){
return (function (res){
if(cljs.core.truth_(verbose)){
replumb.common.debug_prn.call(null,"Evaluation returned (:preloads): ",res);
} else {
}

if(cljs.core.fn_QMARK_.call(null,cb)){
return ((function (verbose,ns_form){
return (function (p1__40479_SHARP_){
return cb.call(null,p1__40479_SHARP_);
});
;})(verbose,ns_form))
} else {
if(cljs.core.truth_(verbose)){
return replumb.common.debug_prn.call(null,"The :cb key did not contain a function, skipping...");
} else {
return null;
}
}
});})(verbose,ns_form))
);
});
/**
 * If we are not already :initializing? and :needs-init? is true, then
 *   move to the "Initializing" state, signaling that the init is in
 *   progress.
 */
replumb.repl.initializing_state = (function replumb$repl$initializing_state(old_app_env){
if(cljs.core.truth_((function (){var and__28814__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"initializing?","initializing?",111659212).cljs$core$IFn$_invoke$arity$1(old_app_env));
if(and__28814__auto__){
return new cljs.core.Keyword(null,"needs-init?","needs-init?",1016438963).cljs$core$IFn$_invoke$arity$1(old_app_env);
} else {
return and__28814__auto__;
}
})())){
return cljs.core.assoc.call(null,old_app_env,new cljs.core.Keyword(null,"initializing?","initializing?",111659212),true);
} else {
return cljs.core.assoc.call(null,old_app_env,new cljs.core.Keyword(null,"needs-init?","needs-init?",1016438963),false);
}
});
/**
 * Move the state to "Initialized", signaling that the init is not in
 *   progress and done.
 */
replumb.repl.initialized_state = (function replumb$repl$initialized_state(old_app_env,opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"needs-init?","needs-init?",1016438963).cljs$core$IFn$_invoke$arity$1(old_app_env))){
} else {
throw (new Error("Assert failed: (:needs-init? old-app-env)"));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"initializing?","initializing?",111659212).cljs$core$IFn$_invoke$arity$1(old_app_env))){
} else {
throw (new Error("Assert failed: (:initializing? old-app-env)"));
}

return cljs.core.merge.call(null,old_app_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initializing?","initializing?",111659212),false,new cljs.core.Keyword(null,"needs-init?","needs-init?",1016438963),false], null));
});
/**
 * Reset the initialization state, moving to "Needs Init", signaling
 *   that the we need to initialize the app.
 */
replumb.repl.needs_init_state = (function replumb$repl$needs_init_state(old_app_env){
return cljs.core.merge.call(null,old_app_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initializing?","initializing?",111659212),false,new cljs.core.Keyword(null,"needs-init?","needs-init?",1016438963),true], null));
});
/**
 * Force the initialization at the next read-eval-call. Use this every
 *   time an option that needs to be read at initialization time changes,
 *   e.g. :source-path. In the future this will be automated.
 */
replumb.repl.force_init_BANG_ = (function replumb$repl$force_init_BANG_(){
return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,replumb.repl.needs_init_state);
});
/**
 * The init-repl function. It uses the following opts keys:
 * 
 *   * :init-fns initialization function vector, it will be executed in
 *   order
 * 
 *   Data is passed from outside and will be forwarded to :init-fn!.
 * 
 *   This is a sync method and should not leak any async operation.
 */
replumb.repl.init_repl_BANG_ = (function replumb$repl$init_repl_BANG_(opts,data){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
replumb.common.debug_prn.call(null,"Initializing REPL environment with data",(function (){var sb__29853__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40480_40486 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40481_40487 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40480_40486,_STAR_print_fn_STAR_40481_40487,sb__29853__auto__){
return (function (x__29854__auto__){
return sb__29853__auto__.append(x__29854__auto__);
});})(_STAR_print_newline_STAR_40480_40486,_STAR_print_fn_STAR_40481_40487,sb__29853__auto__))
;

try{cljs.pprint.pprint.call(null,data);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40481_40487;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40480_40486;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__29853__auto__)].join('');
})());
} else {
}

var seq__40482_40488 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"init-fns","init-fns",1169633539).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__40483_40489 = null;
var count__40484_40490 = (0);
var i__40485_40491 = (0);
while(true){
if((i__40485_40491 < count__40484_40490)){
var init_fn_BANG__40492 = cljs.core._nth.call(null,chunk__40483_40489,i__40485_40491);
init_fn_BANG__40492.call(null,data);

var G__40493 = seq__40482_40488;
var G__40494 = chunk__40483_40489;
var G__40495 = count__40484_40490;
var G__40496 = (i__40485_40491 + (1));
seq__40482_40488 = G__40493;
chunk__40483_40489 = G__40494;
count__40484_40490 = G__40495;
i__40485_40491 = G__40496;
continue;
} else {
var temp__4657__auto___40497 = cljs.core.seq.call(null,seq__40482_40488);
if(temp__4657__auto___40497){
var seq__40482_40498__$1 = temp__4657__auto___40497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40482_40498__$1)){
var c__29665__auto___40499 = cljs.core.chunk_first.call(null,seq__40482_40498__$1);
var G__40500 = cljs.core.chunk_rest.call(null,seq__40482_40498__$1);
var G__40501 = c__29665__auto___40499;
var G__40502 = cljs.core.count.call(null,c__29665__auto___40499);
var G__40503 = (0);
seq__40482_40488 = G__40500;
chunk__40483_40489 = G__40501;
count__40484_40490 = G__40502;
i__40485_40491 = G__40503;
continue;
} else {
var init_fn_BANG__40504 = cljs.core.first.call(null,seq__40482_40498__$1);
init_fn_BANG__40504.call(null,data);

var G__40505 = cljs.core.next.call(null,seq__40482_40498__$1);
var G__40506 = null;
var G__40507 = (0);
var G__40508 = (0);
seq__40482_40488 = G__40505;
chunk__40483_40489 = G__40506;
count__40484_40490 = G__40507;
i__40485_40491 = G__40508;
continue;
}
} else {
}
}
break;
}

var temp__4657__auto__ = new cljs.core.Keyword(null,"preloads","preloads",1620330189).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4657__auto__)){
var preloads = temp__4657__auto__;
return replumb.repl.process_init_requires.call(null,opts,cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preloads","preloads",1620330189),new cljs.core.Keyword(null,"cb","cb",589947841)], null)),data,((cljs.core.sequential_QMARK_.call(null,preloads))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"require","require",-468001333),preloads], null):preloads
));
} else {
return null;
}
});
replumb.repl.init_repl_if_necessary_BANG_ = (function replumb$repl$init_repl_if_necessary_BANG_(opts,data){
if(cljs.core.truth_(new cljs.core.Keyword(null,"needs-init?","needs-init?",1016438963).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,replumb.repl.app_env,replumb.repl.initializing_state)))){
replumb.repl.init_repl_BANG_.call(null,opts,data);

return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,replumb.repl.initialized_state,opts);
} else {
return null;
}
});
/**
 * Reads, evaluates and calls back with the evaluation result.
 * 
 *   The first parameter is a map of configuration options, currently
 *   supporting:
 * 
 *  * :verbose - will enable the evaluation logging, defaults to false.
 *  To customize how to print, use (set! *print-fn* (fn [& args] ...)
 * 
 *  * :warning-as-error - will consider a compiler warning as error.
 * 
 *  * :target - :nodejs and :browser supported, the latter is used if
 *  missing.
 * 
 *  * :init-fn! - user provided initialization function, it will be passed
 *  a map of data currently containing:
 * 
 *      :form   ;; the form to evaluate, as data, past the reader step
 *      :ns     ;; the current namespace, as symbol
 *      :target ;; *target* as keyword, :default is the default
 * 
 *  * :load-fn! - will override replumb's default cljs.js/*load-fn*.
 *  It rules out :read-file-fn!, losing any perk of using replumb.load
 *  helpers. Use it if you know what you are doing and keep in mind
 *  that :load-fn! is never used with load-file. It is the only case where
 *  it does not take precedence over :read-file-fn!.
 * 
 *  * :read-file-fn! an asynchronous 2-arity function with signature
 *  [file-path src-cb] where src-cb is itself a function (fn [source] ...)
 *  that needs to be called with the file content as string (nil if no
 *  file is found). It is mutually exclusive with :load-fn! and will be
 *  ignored in case both are present.
 * 
 *  * :write-file-fn! a synchronous 2-arity function with signature
 *  [file-path data] that accepts a file-path and data to write.
 * 
 *  * :src-paths - a vector of paths containing source files.
 * 
 *  * :cache - a map containing two optional values: the first, :path,
 *  indicates the path of the cached files. The
 *  second, :src-paths-lookup?, indicates if look for cached files
 *  in :src-paths. If both present, :path will have the priority but both
 *  will be inspected.
 * 
 *  * :no-pr-str-on-value - in case of :success? avoid converting the
 *  result map :value to string.
 * 
 *  * :context - indicates the evaluation context that will be passed to
 *  cljs/eval-str. One in :expr, :statement, :return. Defaults to :expr.
 * 
 *  * :foreign-libs - a way to include foreign libraries. The format is
 *  analogous to the compiler option.
 * 
 *  * :static-fns - static dispatch in generated JavaScript.
 * 
 *  * :preloads - accepts either a sequence of, akin to the core feature,
 *  symbols or a map containing keys to specs, analogous to the :ns form
 *  syntax:
 * 
 *  {:preloads {:require '#{[my-ns.core :refer [init]] your-ns.core}
 *              :use '#{their-ns}
 *              :cb #(println "Result:" %)}}
 * 
 *  (Note the set, order does not matter)
 * 
 *   The second parameter, cb, is a 1-arity function which receives the
 *   result map.
 * 
 *   Therefore, given cb (fn [result-map] ...), the main map keys are:
 * 
 *  :success? - a boolean indicating if everything went right
 *  :value    - (if (:success? result)), this key contains the yielded value as
 *              string, unless :no-pr-str-on-value is true, in which case it
 *              returns the bare value.
 *  :error    - (if-not (:success? result)) will contain a js/Error
 *  :warning  - in case a warning was thrown and :warning-as-error is falsey
 *  :form     - the evaluated form as data structure (not a string)
 * 
 *   The third parameter is the source string to be read and evaluated.
 */
replumb.repl.read_eval_call = (function replumb$repl$read_eval_call(opts,cb,source){
try{var data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"ns","ns",441598760),replumb.repl.current_ns.call(null),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.keyword.call(null,cljs.core._STAR_target_STAR_)], null);
var opts__$1 = replumb.repl.normalize_opts.call(null,opts);
replumb.repl.init_repl_if_necessary_BANG_.call(null,opts__$1,data);

var expression_form = replumb.repl.read_string.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),source);
var data__$1 = cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"form","form",-1624062471),expression_form);
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts__$1))){
replumb.common.debug_prn.call(null,"Calling eval-str on",expression_form,"with options",replumb.common.filter_fn_keys.call(null,opts__$1));
} else {
}

var _STAR_cljs_warning_handlers_STAR_40510 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,replumb.repl.custom_warning_handler,opts__$1,cb)], null);

try{if(cljs.core.truth_(replumb.repl.repl_special_QMARK_.call(null,expression_form))){
return replumb.repl.process_repl_special.call(null,opts__$1,cb,data__$1,expression_form);
} else {
return replumb.repl.eval_str_STAR_.call(null,cljs.core.assoc.call(null,replumb.repl.base_eval_opts_BANG_.call(null,opts__$1),new cljs.core.Keyword(null,"on-success-fn!","on-success-fn!",461991357),((function (_STAR_cljs_warning_handlers_STAR_40510,expression_form,data__$1,data,opts__$1){
return (function (eval_res){
replumb.repl.process_1_2_3.call(null,data__$1,expression_form,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(eval_res));

return cljs.core.swap_BANG_.call(null,replumb.repl.app_env,cljs.core.assoc,new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(eval_res));
});})(_STAR_cljs_warning_handlers_STAR_40510,expression_form,data__$1,data,opts__$1))
),opts__$1,cb,data__$1,source);
}
}finally {cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR_40510;
}}catch (e40509){var e = e40509;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
replumb.common.debug_prn.call(null,"Exception caught in read-eval-call: ",e.stack);
} else {
}

return replumb.repl.call_back_BANG_.call(null,opts,cb,cljs.core.PersistentArrayMap.EMPTY,replumb.common.wrap_error.call(null,e));
}});

//# sourceMappingURL=repl.js.map?rel=1506931010631
