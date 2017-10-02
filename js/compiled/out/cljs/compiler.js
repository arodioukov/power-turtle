// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__34804 = s;
var map__34804__$1 = ((((!((map__34804 == null)))?((((map__34804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34804.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34804):map__34804);
var name = cljs.core.get.call(null,map__34804__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__34804__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__34807 = info;
var map__34808 = G__34807;
var map__34808__$1 = ((((!((map__34808 == null)))?((((map__34808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34808):map__34808);
var shadow = cljs.core.get.call(null,map__34808__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__34807__$1 = G__34807;
while(true){
var d__$2 = d__$1;
var map__34810 = G__34807__$1;
var map__34810__$1 = ((((!((map__34810 == null)))?((((map__34810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34810):map__34810);
var shadow__$1 = cljs.core.get.call(null,map__34810__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__34812 = (d__$2 + (1));
var G__34813 = shadow__$1;
d__$1 = G__34812;
G__34807__$1 = G__34813;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__34814){
var map__34815 = p__34814;
var map__34815__$1 = ((((!((map__34815 == null)))?((((map__34815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34815):map__34815);
var name_var = map__34815__$1;
var name = cljs.core.get.call(null,map__34815__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__34815__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__34817 = info;
var map__34817__$1 = ((((!((map__34817 == null)))?((((map__34817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34817):map__34817);
var ns = cljs.core.get.call(null,map__34817__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__34817__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__34820 = arguments.length;
switch (G__34820) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge_str.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__34822 = cp;
switch (G__34822) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__34824_34828 = cljs.core.seq.call(null,s);
var chunk__34825_34829 = null;
var count__34826_34830 = (0);
var i__34827_34831 = (0);
while(true){
if((i__34827_34831 < count__34826_34830)){
var c_34832 = cljs.core._nth.call(null,chunk__34825_34829,i__34827_34831);
sb.append(cljs.compiler.escape_char.call(null,c_34832));

var G__34833 = seq__34824_34828;
var G__34834 = chunk__34825_34829;
var G__34835 = count__34826_34830;
var G__34836 = (i__34827_34831 + (1));
seq__34824_34828 = G__34833;
chunk__34825_34829 = G__34834;
count__34826_34830 = G__34835;
i__34827_34831 = G__34836;
continue;
} else {
var temp__4657__auto___34837 = cljs.core.seq.call(null,seq__34824_34828);
if(temp__4657__auto___34837){
var seq__34824_34838__$1 = temp__4657__auto___34837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34824_34838__$1)){
var c__28978__auto___34839 = cljs.core.chunk_first.call(null,seq__34824_34838__$1);
var G__34840 = cljs.core.chunk_rest.call(null,seq__34824_34838__$1);
var G__34841 = c__28978__auto___34839;
var G__34842 = cljs.core.count.call(null,c__28978__auto___34839);
var G__34843 = (0);
seq__34824_34828 = G__34840;
chunk__34825_34829 = G__34841;
count__34826_34830 = G__34842;
i__34827_34831 = G__34843;
continue;
} else {
var c_34844 = cljs.core.first.call(null,seq__34824_34838__$1);
sb.append(cljs.compiler.escape_char.call(null,c_34844));

var G__34845 = cljs.core.next.call(null,seq__34824_34838__$1);
var G__34846 = null;
var G__34847 = (0);
var G__34848 = (0);
seq__34824_34828 = G__34845;
chunk__34825_34829 = G__34846;
count__34826_34830 = G__34847;
i__34827_34831 = G__34848;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__29094__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29095__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29096__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29097__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29098__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29098__auto__,method_table__29094__auto__,prefer_table__29095__auto__,method_cache__29096__auto__,cached_hierarchy__29097__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__33201__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__33201__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__34849_34854 = ast;
var map__34849_34855__$1 = ((((!((map__34849_34854 == null)))?((((map__34849_34854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34849_34854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34849_34854):map__34849_34854);
var env_34856 = cljs.core.get.call(null,map__34849_34855__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_34856))){
var map__34851_34857 = env_34856;
var map__34851_34858__$1 = ((((!((map__34851_34857 == null)))?((((map__34851_34857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34851_34857.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34851_34857):map__34851_34857);
var line_34859 = cljs.core.get.call(null,map__34851_34858__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34860 = cljs.core.get.call(null,map__34851_34858__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__34851_34857,map__34851_34858__$1,line_34859,column_34860,map__34849_34854,map__34849_34855__$1,env_34856,val__33201__auto__){
return (function (m){
var minfo = (function (){var G__34853 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__34853,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__34853;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_34859 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__34851_34857,map__34851_34858__$1,line_34859,column_34860,map__34849_34854,map__34849_34855__$1,env_34856,val__33201__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_34860)?(column_34860 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__34851_34857,map__34851_34858__$1,line_34859,column_34860,map__34849_34854,map__34849_34855__$1,env_34856,val__33201__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__34851_34857,map__34851_34858__$1,line_34859,column_34860,map__34849_34854,map__34849_34855__$1,env_34856,val__33201__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__34851_34857,map__34851_34858__$1,line_34859,column_34860,map__34849_34854,map__34849_34855__$1,env_34856,val__33201__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__34851_34857,map__34851_34858__$1,line_34859,column_34860,map__34849_34854,map__34849_34855__$1,env_34856,val__33201__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__33201__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__29315__auto__ = [];
var len__29308__auto___34867 = arguments.length;
var i__29309__auto___34868 = (0);
while(true){
if((i__29309__auto___34868 < len__29308__auto___34867)){
args__29315__auto__.push((arguments[i__29309__auto___34868]));

var G__34869 = (i__29309__auto___34868 + (1));
i__29309__auto___34868 = G__34869;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__34863_34870 = cljs.core.seq.call(null,xs);
var chunk__34864_34871 = null;
var count__34865_34872 = (0);
var i__34866_34873 = (0);
while(true){
if((i__34866_34873 < count__34865_34872)){
var x_34874 = cljs.core._nth.call(null,chunk__34864_34871,i__34866_34873);
if((x_34874 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_34874)){
cljs.compiler.emit.call(null,x_34874);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_34874)){
cljs.core.apply.call(null,cljs.compiler.emits,x_34874);
} else {
if(goog.isFunction(x_34874)){
x_34874.call(null);
} else {
var s_34875 = cljs.core.print_str.call(null,x_34874);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__34863_34870,chunk__34864_34871,count__34865_34872,i__34866_34873,s_34875,x_34874){
return (function (p1__34861_SHARP_){
return (p1__34861_SHARP_ + cljs.core.count.call(null,s_34875));
});})(seq__34863_34870,chunk__34864_34871,count__34865_34872,i__34866_34873,s_34875,x_34874))
);
}

cljs.core.print.call(null,s_34875);

}
}
}
}

var G__34876 = seq__34863_34870;
var G__34877 = chunk__34864_34871;
var G__34878 = count__34865_34872;
var G__34879 = (i__34866_34873 + (1));
seq__34863_34870 = G__34876;
chunk__34864_34871 = G__34877;
count__34865_34872 = G__34878;
i__34866_34873 = G__34879;
continue;
} else {
var temp__4657__auto___34880 = cljs.core.seq.call(null,seq__34863_34870);
if(temp__4657__auto___34880){
var seq__34863_34881__$1 = temp__4657__auto___34880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34863_34881__$1)){
var c__28978__auto___34882 = cljs.core.chunk_first.call(null,seq__34863_34881__$1);
var G__34883 = cljs.core.chunk_rest.call(null,seq__34863_34881__$1);
var G__34884 = c__28978__auto___34882;
var G__34885 = cljs.core.count.call(null,c__28978__auto___34882);
var G__34886 = (0);
seq__34863_34870 = G__34883;
chunk__34864_34871 = G__34884;
count__34865_34872 = G__34885;
i__34866_34873 = G__34886;
continue;
} else {
var x_34887 = cljs.core.first.call(null,seq__34863_34881__$1);
if((x_34887 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_34887)){
cljs.compiler.emit.call(null,x_34887);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_34887)){
cljs.core.apply.call(null,cljs.compiler.emits,x_34887);
} else {
if(goog.isFunction(x_34887)){
x_34887.call(null);
} else {
var s_34888 = cljs.core.print_str.call(null,x_34887);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__34863_34870,chunk__34864_34871,count__34865_34872,i__34866_34873,s_34888,x_34887,seq__34863_34881__$1,temp__4657__auto___34880){
return (function (p1__34861_SHARP_){
return (p1__34861_SHARP_ + cljs.core.count.call(null,s_34888));
});})(seq__34863_34870,chunk__34864_34871,count__34865_34872,i__34866_34873,s_34888,x_34887,seq__34863_34881__$1,temp__4657__auto___34880))
);
}

cljs.core.print.call(null,s_34888);

}
}
}
}

var G__34889 = cljs.core.next.call(null,seq__34863_34881__$1);
var G__34890 = null;
var G__34891 = (0);
var G__34892 = (0);
seq__34863_34870 = G__34889;
chunk__34864_34871 = G__34890;
count__34865_34872 = G__34891;
i__34866_34873 = G__34892;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq34862){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34862));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__29315__auto__ = [];
var len__29308__auto___34898 = arguments.length;
var i__29309__auto___34899 = (0);
while(true){
if((i__29309__auto___34899 < len__29308__auto___34898)){
args__29315__auto__.push((arguments[i__29309__auto___34899]));

var G__34900 = (i__29309__auto___34899 + (1));
i__29309__auto___34899 = G__34900;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_34894_34901 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_34894_34901;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__34895){
var map__34896 = p__34895;
var map__34896__$1 = ((((!((map__34896 == null)))?((((map__34896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34896):map__34896);
var m = map__34896__$1;
var gen_line = cljs.core.get.call(null,map__34896__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq34893){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34893));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__29166__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_34902_34904 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_34903_34905 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_34902_34904,_STAR_print_fn_STAR_34903_34905,sb__29166__auto__){
return (function (x__29167__auto__){
return sb__29166__auto__.append(x__29167__auto__);
});})(_STAR_print_newline_STAR_34902_34904,_STAR_print_fn_STAR_34903_34905,sb__29166__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34903_34905;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34902_34904;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__29166__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__29094__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29095__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29096__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29097__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29098__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29098__auto__,method_table__29094__auto__,prefer_table__29095__auto__,method_cache__29096__auto__,cached_hierarchy__29097__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,"(",x,")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__34906 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__34906,(0),null);
var flags = cljs.core.nth.call(null,vec__34906,(1),null);
var pattern = cljs.core.nth.call(null,vec__34906,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
var temp__4655__auto__ = (function (){var and__28127__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__28127__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__28127__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var value = temp__4655__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
var temp__4655__auto__ = (function (){var and__28127__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__28127__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__28127__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var value = temp__4655__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__34910){
var map__34911 = p__34910;
var map__34911__$1 = ((((!((map__34911 == null)))?((((map__34911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34911):map__34911);
var ast = map__34911__$1;
var info = cljs.core.get.call(null,map__34911__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__34911__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__34911__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__4655__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__4655__auto__)){
var const_expr = temp__4655__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__34913 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__34913__$1 = ((((!((map__34913 == null)))?((((map__34913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34913):map__34913);
var cenv = map__34913__$1;
var options = cljs.core.get.call(null,map__34913__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__28139__auto__ = js_module_name;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__34915 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__28127__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__28127__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__28127__auto__;
}
})())){
return clojure.set.difference.call(null,G__34915,cljs.analyzer.es5_allowed);
} else {
return G__34915;
}
})();
var env__34796__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__34916 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__34916,reserved);
} else {
return G__34916;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__34917){
var map__34918 = p__34917;
var map__34918__$1 = ((((!((map__34918 == null)))?((((map__34918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34918):map__34918);
var arg = map__34918__$1;
var env = cljs.core.get.call(null,map__34918__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__34918__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__34918__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__34918__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__34920 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__34920__$1 = ((((!((map__34920 == null)))?((((map__34920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34920):map__34920);
var name = cljs.core.get.call(null,map__34920__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__34796__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__34922){
var map__34923 = p__34922;
var map__34923__$1 = ((((!((map__34923 == null)))?((((map__34923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34923):map__34923);
var expr = cljs.core.get.call(null,map__34923__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__34923__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__34923__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__34796__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__34925_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__34925_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__34926){
var map__34927 = p__34926;
var map__34927__$1 = ((((!((map__34927 == null)))?((((map__34927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34927):map__34927);
var env = cljs.core.get.call(null,map__34927__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__34927__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__34927__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__34796__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__34929){
var map__34930 = p__34929;
var map__34930__$1 = ((((!((map__34930 == null)))?((((map__34930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34930):map__34930);
var items = cljs.core.get.call(null,map__34930__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__34930__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__34796__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__34932){
var map__34933 = p__34932;
var map__34933__$1 = ((((!((map__34933 == null)))?((((map__34933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34933.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34933):map__34933);
var items = cljs.core.get.call(null,map__34933__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__34933__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__34796__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_34935 = cljs.core.count.call(null,items);
if((cnt_34935 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_34935,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__34936_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__34936_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__34937){
var map__34938 = p__34937;
var map__34938__$1 = ((((!((map__34938 == null)))?((((map__34938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34938):map__34938);
var items = cljs.core.get.call(null,map__34938__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__34938__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__34796__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,items),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__34940){
var map__34941 = p__34940;
var map__34941__$1 = ((((!((map__34941 == null)))?((((map__34941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34941):map__34941);
var items = cljs.core.get.call(null,map__34941__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__34941__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__34941__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__34796__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___34959 = cljs.core.seq.call(null,items);
if(temp__4657__auto___34959){
var items_34960__$1 = temp__4657__auto___34959;
var vec__34943_34961 = items_34960__$1;
var seq__34944_34962 = cljs.core.seq.call(null,vec__34943_34961);
var first__34945_34963 = cljs.core.first.call(null,seq__34944_34962);
var seq__34944_34964__$1 = cljs.core.next.call(null,seq__34944_34962);
var vec__34946_34965 = first__34945_34963;
var k_34966 = cljs.core.nth.call(null,vec__34946_34965,(0),null);
var v_34967 = cljs.core.nth.call(null,vec__34946_34965,(1),null);
var r_34968 = seq__34944_34964__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_34966),"\": ",v_34967);

var seq__34949_34969 = cljs.core.seq.call(null,r_34968);
var chunk__34950_34970 = null;
var count__34951_34971 = (0);
var i__34952_34972 = (0);
while(true){
if((i__34952_34972 < count__34951_34971)){
var vec__34953_34973 = cljs.core._nth.call(null,chunk__34950_34970,i__34952_34972);
var k_34974__$1 = cljs.core.nth.call(null,vec__34953_34973,(0),null);
var v_34975__$1 = cljs.core.nth.call(null,vec__34953_34973,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_34974__$1),"\": ",v_34975__$1);

var G__34976 = seq__34949_34969;
var G__34977 = chunk__34950_34970;
var G__34978 = count__34951_34971;
var G__34979 = (i__34952_34972 + (1));
seq__34949_34969 = G__34976;
chunk__34950_34970 = G__34977;
count__34951_34971 = G__34978;
i__34952_34972 = G__34979;
continue;
} else {
var temp__4657__auto___34980__$1 = cljs.core.seq.call(null,seq__34949_34969);
if(temp__4657__auto___34980__$1){
var seq__34949_34981__$1 = temp__4657__auto___34980__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34949_34981__$1)){
var c__28978__auto___34982 = cljs.core.chunk_first.call(null,seq__34949_34981__$1);
var G__34983 = cljs.core.chunk_rest.call(null,seq__34949_34981__$1);
var G__34984 = c__28978__auto___34982;
var G__34985 = cljs.core.count.call(null,c__28978__auto___34982);
var G__34986 = (0);
seq__34949_34969 = G__34983;
chunk__34950_34970 = G__34984;
count__34951_34971 = G__34985;
i__34952_34972 = G__34986;
continue;
} else {
var vec__34956_34987 = cljs.core.first.call(null,seq__34949_34981__$1);
var k_34988__$1 = cljs.core.nth.call(null,vec__34956_34987,(0),null);
var v_34989__$1 = cljs.core.nth.call(null,vec__34956_34987,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_34988__$1),"\": ",v_34989__$1);

var G__34990 = cljs.core.next.call(null,seq__34949_34981__$1);
var G__34991 = null;
var G__34992 = (0);
var G__34993 = (0);
seq__34949_34969 = G__34990;
chunk__34950_34970 = G__34991;
count__34951_34971 = G__34992;
i__34952_34972 = G__34993;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__34994){
var map__34995 = p__34994;
var map__34995__$1 = ((((!((map__34995 == null)))?((((map__34995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34995):map__34995);
var items = cljs.core.get.call(null,map__34995__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__34995__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__34995__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__34995__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__34796__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__34997){
var map__34998 = p__34997;
var map__34998__$1 = ((((!((map__34998 == null)))?((((map__34998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34998):map__34998);
var form = cljs.core.get.call(null,map__34998__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__34998__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__34796__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__35000){
var map__35001 = p__35000;
var map__35001__$1 = ((((!((map__35001 == null)))?((((map__35001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35001):map__35001);
var op = cljs.core.get.call(null,map__35001__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__35001__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__35001__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__28139__auto__ = (function (){var and__28127__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__28127__auto__){
var and__28127__auto____$1 = form;
if(cljs.core.truth_(and__28127__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__28127__auto____$1;
}
} else {
return and__28127__auto__;
}
})();
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
var and__28127__auto__ = !((const_expr == null));
if(and__28127__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__28127__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__35003){
var map__35004 = p__35003;
var map__35004__$1 = ((((!((map__35004 == null)))?((((map__35004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35004):map__35004);
var op = cljs.core.get.call(null,map__35004__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__35004__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__35004__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__28139__auto__ = (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
if(or__28139__auto__){
return or__28139__auto__;
} else {
var and__28127__auto__ = !((const_expr == null));
if(and__28127__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__28127__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__28139__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__35006){
var map__35007 = p__35006;
var map__35007__$1 = ((((!((map__35007 == null)))?((((map__35007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35007):map__35007);
var test = cljs.core.get.call(null,map__35007__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__35007__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__35007__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__35007__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__35007__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__28139__auto__ = unchecked;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__35009){
var map__35010 = p__35009;
var map__35010__$1 = ((((!((map__35010 == null)))?((((map__35010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35010):map__35010);
var v = cljs.core.get.call(null,map__35010__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__35010__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__35010__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__35010__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__35010__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__35012_35030 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__35013_35031 = null;
var count__35014_35032 = (0);
var i__35015_35033 = (0);
while(true){
if((i__35015_35033 < count__35014_35032)){
var vec__35016_35034 = cljs.core._nth.call(null,chunk__35013_35031,i__35015_35033);
var ts_35035 = cljs.core.nth.call(null,vec__35016_35034,(0),null);
var then_35036 = cljs.core.nth.call(null,vec__35016_35034,(1),null);
var seq__35019_35037 = cljs.core.seq.call(null,ts_35035);
var chunk__35020_35038 = null;
var count__35021_35039 = (0);
var i__35022_35040 = (0);
while(true){
if((i__35022_35040 < count__35021_35039)){
var test_35041 = cljs.core._nth.call(null,chunk__35020_35038,i__35022_35040);
cljs.compiler.emitln.call(null,"case ",test_35041,":");

var G__35042 = seq__35019_35037;
var G__35043 = chunk__35020_35038;
var G__35044 = count__35021_35039;
var G__35045 = (i__35022_35040 + (1));
seq__35019_35037 = G__35042;
chunk__35020_35038 = G__35043;
count__35021_35039 = G__35044;
i__35022_35040 = G__35045;
continue;
} else {
var temp__4657__auto___35046 = cljs.core.seq.call(null,seq__35019_35037);
if(temp__4657__auto___35046){
var seq__35019_35047__$1 = temp__4657__auto___35046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35019_35047__$1)){
var c__28978__auto___35048 = cljs.core.chunk_first.call(null,seq__35019_35047__$1);
var G__35049 = cljs.core.chunk_rest.call(null,seq__35019_35047__$1);
var G__35050 = c__28978__auto___35048;
var G__35051 = cljs.core.count.call(null,c__28978__auto___35048);
var G__35052 = (0);
seq__35019_35037 = G__35049;
chunk__35020_35038 = G__35050;
count__35021_35039 = G__35051;
i__35022_35040 = G__35052;
continue;
} else {
var test_35053 = cljs.core.first.call(null,seq__35019_35047__$1);
cljs.compiler.emitln.call(null,"case ",test_35053,":");

var G__35054 = cljs.core.next.call(null,seq__35019_35047__$1);
var G__35055 = null;
var G__35056 = (0);
var G__35057 = (0);
seq__35019_35037 = G__35054;
chunk__35020_35038 = G__35055;
count__35021_35039 = G__35056;
i__35022_35040 = G__35057;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_35036);
} else {
cljs.compiler.emitln.call(null,then_35036);
}

cljs.compiler.emitln.call(null,"break;");

var G__35058 = seq__35012_35030;
var G__35059 = chunk__35013_35031;
var G__35060 = count__35014_35032;
var G__35061 = (i__35015_35033 + (1));
seq__35012_35030 = G__35058;
chunk__35013_35031 = G__35059;
count__35014_35032 = G__35060;
i__35015_35033 = G__35061;
continue;
} else {
var temp__4657__auto___35062 = cljs.core.seq.call(null,seq__35012_35030);
if(temp__4657__auto___35062){
var seq__35012_35063__$1 = temp__4657__auto___35062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35012_35063__$1)){
var c__28978__auto___35064 = cljs.core.chunk_first.call(null,seq__35012_35063__$1);
var G__35065 = cljs.core.chunk_rest.call(null,seq__35012_35063__$1);
var G__35066 = c__28978__auto___35064;
var G__35067 = cljs.core.count.call(null,c__28978__auto___35064);
var G__35068 = (0);
seq__35012_35030 = G__35065;
chunk__35013_35031 = G__35066;
count__35014_35032 = G__35067;
i__35015_35033 = G__35068;
continue;
} else {
var vec__35023_35069 = cljs.core.first.call(null,seq__35012_35063__$1);
var ts_35070 = cljs.core.nth.call(null,vec__35023_35069,(0),null);
var then_35071 = cljs.core.nth.call(null,vec__35023_35069,(1),null);
var seq__35026_35072 = cljs.core.seq.call(null,ts_35070);
var chunk__35027_35073 = null;
var count__35028_35074 = (0);
var i__35029_35075 = (0);
while(true){
if((i__35029_35075 < count__35028_35074)){
var test_35076 = cljs.core._nth.call(null,chunk__35027_35073,i__35029_35075);
cljs.compiler.emitln.call(null,"case ",test_35076,":");

var G__35077 = seq__35026_35072;
var G__35078 = chunk__35027_35073;
var G__35079 = count__35028_35074;
var G__35080 = (i__35029_35075 + (1));
seq__35026_35072 = G__35077;
chunk__35027_35073 = G__35078;
count__35028_35074 = G__35079;
i__35029_35075 = G__35080;
continue;
} else {
var temp__4657__auto___35081__$1 = cljs.core.seq.call(null,seq__35026_35072);
if(temp__4657__auto___35081__$1){
var seq__35026_35082__$1 = temp__4657__auto___35081__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35026_35082__$1)){
var c__28978__auto___35083 = cljs.core.chunk_first.call(null,seq__35026_35082__$1);
var G__35084 = cljs.core.chunk_rest.call(null,seq__35026_35082__$1);
var G__35085 = c__28978__auto___35083;
var G__35086 = cljs.core.count.call(null,c__28978__auto___35083);
var G__35087 = (0);
seq__35026_35072 = G__35084;
chunk__35027_35073 = G__35085;
count__35028_35074 = G__35086;
i__35029_35075 = G__35087;
continue;
} else {
var test_35088 = cljs.core.first.call(null,seq__35026_35082__$1);
cljs.compiler.emitln.call(null,"case ",test_35088,":");

var G__35089 = cljs.core.next.call(null,seq__35026_35082__$1);
var G__35090 = null;
var G__35091 = (0);
var G__35092 = (0);
seq__35026_35072 = G__35089;
chunk__35027_35073 = G__35090;
count__35028_35074 = G__35091;
i__35029_35075 = G__35092;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_35071);
} else {
cljs.compiler.emitln.call(null,then_35071);
}

cljs.compiler.emitln.call(null,"break;");

var G__35093 = cljs.core.next.call(null,seq__35012_35063__$1);
var G__35094 = null;
var G__35095 = (0);
var G__35096 = (0);
seq__35012_35030 = G__35093;
chunk__35013_35031 = G__35094;
count__35014_35032 = G__35095;
i__35015_35033 = G__35096;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__35097){
var map__35098 = p__35097;
var map__35098__$1 = ((((!((map__35098 == null)))?((((map__35098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35098):map__35098);
var throw$ = cljs.core.get.call(null,map__35098__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__35098__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__35101 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__35101,(0),null);
var rstr = cljs.core.nth.call(null,vec__35101,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__35101,fstr,rstr,ret_t,axstr){
return (function (p1__35100_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__35100_SHARP_);
});})(idx,vec__35101,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__35104 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35104),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__35104;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__35105_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__35105_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__35106 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__35107 = cljs.core.seq.call(null,vec__35106);
var first__35108 = cljs.core.first.call(null,seq__35107);
var seq__35107__$1 = cljs.core.next.call(null,seq__35107);
var p = first__35108;
var first__35108__$1 = cljs.core.first.call(null,seq__35107__$1);
var seq__35107__$2 = cljs.core.next.call(null,seq__35107__$1);
var ts = first__35108__$1;
var first__35108__$2 = cljs.core.first.call(null,seq__35107__$2);
var seq__35107__$3 = cljs.core.next.call(null,seq__35107__$2);
var n = first__35108__$2;
var xs = seq__35107__$3;
if(cljs.core.truth_((function (){var and__28127__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__28127__auto__){
var and__28127__auto____$1 = ts;
if(cljs.core.truth_(and__28127__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__28127__auto____$1;
}
} else {
return and__28127__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__35109 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__35110 = cljs.core.seq.call(null,vec__35109);
var first__35111 = cljs.core.first.call(null,seq__35110);
var seq__35110__$1 = cljs.core.next.call(null,seq__35110);
var p = first__35111;
var first__35111__$1 = cljs.core.first.call(null,seq__35110__$1);
var seq__35110__$2 = cljs.core.next.call(null,seq__35110__$1);
var ts = first__35111__$1;
var xs = seq__35110__$2;
if(cljs.core.truth_((function (){var and__28127__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__28127__auto__){
var and__28127__auto____$1 = ts;
if(cljs.core.truth_(and__28127__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__28127__auto____$1;
}
} else {
return and__28127__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__35114 = arguments.length;
switch (G__35114) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__35122 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__35112_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__35112_SHARP_);
} else {
return p1__35112_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__35123 = cljs.core.seq.call(null,vec__35122);
var first__35124 = cljs.core.first.call(null,seq__35123);
var seq__35123__$1 = cljs.core.next.call(null,seq__35123);
var x = first__35124;
var ys = seq__35123__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__35125 = cljs.core.seq.call(null,ys);
var chunk__35126 = null;
var count__35127 = (0);
var i__35128 = (0);
while(true){
if((i__35128 < count__35127)){
var next_line = cljs.core._nth.call(null,chunk__35126,i__35128);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__35134 = seq__35125;
var G__35135 = chunk__35126;
var G__35136 = count__35127;
var G__35137 = (i__35128 + (1));
seq__35125 = G__35134;
chunk__35126 = G__35135;
count__35127 = G__35136;
i__35128 = G__35137;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35125);
if(temp__4657__auto__){
var seq__35125__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35125__$1)){
var c__28978__auto__ = cljs.core.chunk_first.call(null,seq__35125__$1);
var G__35138 = cljs.core.chunk_rest.call(null,seq__35125__$1);
var G__35139 = c__28978__auto__;
var G__35140 = cljs.core.count.call(null,c__28978__auto__);
var G__35141 = (0);
seq__35125 = G__35138;
chunk__35126 = G__35139;
count__35127 = G__35140;
i__35128 = G__35141;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__35125__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__35142 = cljs.core.next.call(null,seq__35125__$1);
var G__35143 = null;
var G__35144 = (0);
var G__35145 = (0);
seq__35125 = G__35142;
chunk__35126 = G__35143;
count__35127 = G__35144;
i__35128 = G__35145;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__35129_35146 = cljs.core.seq.call(null,docs__$2);
var chunk__35130_35147 = null;
var count__35131_35148 = (0);
var i__35132_35149 = (0);
while(true){
if((i__35132_35149 < count__35131_35148)){
var e_35150 = cljs.core._nth.call(null,chunk__35130_35147,i__35132_35149);
if(cljs.core.truth_(e_35150)){
print_comment_lines.call(null,e_35150);
} else {
}

var G__35151 = seq__35129_35146;
var G__35152 = chunk__35130_35147;
var G__35153 = count__35131_35148;
var G__35154 = (i__35132_35149 + (1));
seq__35129_35146 = G__35151;
chunk__35130_35147 = G__35152;
count__35131_35148 = G__35153;
i__35132_35149 = G__35154;
continue;
} else {
var temp__4657__auto___35155 = cljs.core.seq.call(null,seq__35129_35146);
if(temp__4657__auto___35155){
var seq__35129_35156__$1 = temp__4657__auto___35155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35129_35156__$1)){
var c__28978__auto___35157 = cljs.core.chunk_first.call(null,seq__35129_35156__$1);
var G__35158 = cljs.core.chunk_rest.call(null,seq__35129_35156__$1);
var G__35159 = c__28978__auto___35157;
var G__35160 = cljs.core.count.call(null,c__28978__auto___35157);
var G__35161 = (0);
seq__35129_35146 = G__35158;
chunk__35130_35147 = G__35159;
count__35131_35148 = G__35160;
i__35132_35149 = G__35161;
continue;
} else {
var e_35162 = cljs.core.first.call(null,seq__35129_35156__$1);
if(cljs.core.truth_(e_35162)){
print_comment_lines.call(null,e_35162);
} else {
}

var G__35163 = cljs.core.next.call(null,seq__35129_35156__$1);
var G__35164 = null;
var G__35165 = (0);
var G__35166 = (0);
seq__35129_35146 = G__35163;
chunk__35130_35147 = G__35164;
count__35131_35148 = G__35165;
i__35132_35149 = G__35166;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__28127__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__35168_SHARP_){
return goog.string.startsWith(p1__35168_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__28127__auto__)){
var and__28127__auto____$1 = opts;
if(cljs.core.truth_(and__28127__auto____$1)){
var and__28127__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__28127__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__28127__auto____$2;
}
} else {
return and__28127__auto____$1;
}
} else {
return and__28127__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__35169){
var map__35170 = p__35169;
var map__35170__$1 = ((((!((map__35170 == null)))?((((map__35170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35170.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35170):map__35170);
var name = cljs.core.get.call(null,map__35170__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__35170__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__35170__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__35170__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__35170__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__35170__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__35170__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__35170__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__35170__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__28139__auto__ = init;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__28127__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__28127__auto__){
return test;
} else {
return and__28127__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__35172){
var map__35173 = p__35172;
var map__35173__$1 = ((((!((map__35173 == null)))?((((map__35173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35173):map__35173);
var name = cljs.core.get.call(null,map__35173__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__35173__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__35173__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__35175_35193 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__35176_35194 = null;
var count__35177_35195 = (0);
var i__35178_35196 = (0);
while(true){
if((i__35178_35196 < count__35177_35195)){
var vec__35179_35197 = cljs.core._nth.call(null,chunk__35176_35194,i__35178_35196);
var i_35198 = cljs.core.nth.call(null,vec__35179_35197,(0),null);
var param_35199 = cljs.core.nth.call(null,vec__35179_35197,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_35199);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__35200 = seq__35175_35193;
var G__35201 = chunk__35176_35194;
var G__35202 = count__35177_35195;
var G__35203 = (i__35178_35196 + (1));
seq__35175_35193 = G__35200;
chunk__35176_35194 = G__35201;
count__35177_35195 = G__35202;
i__35178_35196 = G__35203;
continue;
} else {
var temp__4657__auto___35204 = cljs.core.seq.call(null,seq__35175_35193);
if(temp__4657__auto___35204){
var seq__35175_35205__$1 = temp__4657__auto___35204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35175_35205__$1)){
var c__28978__auto___35206 = cljs.core.chunk_first.call(null,seq__35175_35205__$1);
var G__35207 = cljs.core.chunk_rest.call(null,seq__35175_35205__$1);
var G__35208 = c__28978__auto___35206;
var G__35209 = cljs.core.count.call(null,c__28978__auto___35206);
var G__35210 = (0);
seq__35175_35193 = G__35207;
chunk__35176_35194 = G__35208;
count__35177_35195 = G__35209;
i__35178_35196 = G__35210;
continue;
} else {
var vec__35182_35211 = cljs.core.first.call(null,seq__35175_35205__$1);
var i_35212 = cljs.core.nth.call(null,vec__35182_35211,(0),null);
var param_35213 = cljs.core.nth.call(null,vec__35182_35211,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_35213);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__35214 = cljs.core.next.call(null,seq__35175_35205__$1);
var G__35215 = null;
var G__35216 = (0);
var G__35217 = (0);
seq__35175_35193 = G__35214;
chunk__35176_35194 = G__35215;
count__35177_35195 = G__35216;
i__35178_35196 = G__35217;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__35185_35218 = cljs.core.seq.call(null,params);
var chunk__35186_35219 = null;
var count__35187_35220 = (0);
var i__35188_35221 = (0);
while(true){
if((i__35188_35221 < count__35187_35220)){
var param_35222 = cljs.core._nth.call(null,chunk__35186_35219,i__35188_35221);
cljs.compiler.emit.call(null,param_35222);

if(cljs.core._EQ_.call(null,param_35222,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__35223 = seq__35185_35218;
var G__35224 = chunk__35186_35219;
var G__35225 = count__35187_35220;
var G__35226 = (i__35188_35221 + (1));
seq__35185_35218 = G__35223;
chunk__35186_35219 = G__35224;
count__35187_35220 = G__35225;
i__35188_35221 = G__35226;
continue;
} else {
var temp__4657__auto___35227 = cljs.core.seq.call(null,seq__35185_35218);
if(temp__4657__auto___35227){
var seq__35185_35228__$1 = temp__4657__auto___35227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35185_35228__$1)){
var c__28978__auto___35229 = cljs.core.chunk_first.call(null,seq__35185_35228__$1);
var G__35230 = cljs.core.chunk_rest.call(null,seq__35185_35228__$1);
var G__35231 = c__28978__auto___35229;
var G__35232 = cljs.core.count.call(null,c__28978__auto___35229);
var G__35233 = (0);
seq__35185_35218 = G__35230;
chunk__35186_35219 = G__35231;
count__35187_35220 = G__35232;
i__35188_35221 = G__35233;
continue;
} else {
var param_35234 = cljs.core.first.call(null,seq__35185_35228__$1);
cljs.compiler.emit.call(null,param_35234);

if(cljs.core._EQ_.call(null,param_35234,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__35235 = cljs.core.next.call(null,seq__35185_35228__$1);
var G__35236 = null;
var G__35237 = (0);
var G__35238 = (0);
seq__35185_35218 = G__35235;
chunk__35186_35219 = G__35236;
count__35187_35220 = G__35237;
i__35188_35221 = G__35238;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__35189_35239 = cljs.core.seq.call(null,params);
var chunk__35190_35240 = null;
var count__35191_35241 = (0);
var i__35192_35242 = (0);
while(true){
if((i__35192_35242 < count__35191_35241)){
var param_35243 = cljs.core._nth.call(null,chunk__35190_35240,i__35192_35242);
cljs.compiler.emit.call(null,param_35243);

if(cljs.core._EQ_.call(null,param_35243,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__35244 = seq__35189_35239;
var G__35245 = chunk__35190_35240;
var G__35246 = count__35191_35241;
var G__35247 = (i__35192_35242 + (1));
seq__35189_35239 = G__35244;
chunk__35190_35240 = G__35245;
count__35191_35241 = G__35246;
i__35192_35242 = G__35247;
continue;
} else {
var temp__4657__auto___35248 = cljs.core.seq.call(null,seq__35189_35239);
if(temp__4657__auto___35248){
var seq__35189_35249__$1 = temp__4657__auto___35248;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35189_35249__$1)){
var c__28978__auto___35250 = cljs.core.chunk_first.call(null,seq__35189_35249__$1);
var G__35251 = cljs.core.chunk_rest.call(null,seq__35189_35249__$1);
var G__35252 = c__28978__auto___35250;
var G__35253 = cljs.core.count.call(null,c__28978__auto___35250);
var G__35254 = (0);
seq__35189_35239 = G__35251;
chunk__35190_35240 = G__35252;
count__35191_35241 = G__35253;
i__35192_35242 = G__35254;
continue;
} else {
var param_35255 = cljs.core.first.call(null,seq__35189_35249__$1);
cljs.compiler.emit.call(null,param_35255);

if(cljs.core._EQ_.call(null,param_35255,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__35256 = cljs.core.next.call(null,seq__35189_35249__$1);
var G__35257 = null;
var G__35258 = (0);
var G__35259 = (0);
seq__35189_35239 = G__35256;
chunk__35190_35240 = G__35257;
count__35191_35241 = G__35258;
i__35192_35242 = G__35259;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__35260 = cljs.core.seq.call(null,params);
var chunk__35261 = null;
var count__35262 = (0);
var i__35263 = (0);
while(true){
if((i__35263 < count__35262)){
var param = cljs.core._nth.call(null,chunk__35261,i__35263);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__35264 = seq__35260;
var G__35265 = chunk__35261;
var G__35266 = count__35262;
var G__35267 = (i__35263 + (1));
seq__35260 = G__35264;
chunk__35261 = G__35265;
count__35262 = G__35266;
i__35263 = G__35267;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35260);
if(temp__4657__auto__){
var seq__35260__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35260__$1)){
var c__28978__auto__ = cljs.core.chunk_first.call(null,seq__35260__$1);
var G__35268 = cljs.core.chunk_rest.call(null,seq__35260__$1);
var G__35269 = c__28978__auto__;
var G__35270 = cljs.core.count.call(null,c__28978__auto__);
var G__35271 = (0);
seq__35260 = G__35268;
chunk__35261 = G__35269;
count__35262 = G__35270;
i__35263 = G__35271;
continue;
} else {
var param = cljs.core.first.call(null,seq__35260__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__35272 = cljs.core.next.call(null,seq__35260__$1);
var G__35273 = null;
var G__35274 = (0);
var G__35275 = (0);
seq__35260 = G__35272;
chunk__35261 = G__35273;
count__35262 = G__35274;
i__35263 = G__35275;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__35276){
var map__35277 = p__35276;
var map__35277__$1 = ((((!((map__35277 == null)))?((((map__35277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35277):map__35277);
var type = cljs.core.get.call(null,map__35277__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__35277__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__35277__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__35277__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__35277__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__35277__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__35277__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__35277__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__34796__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__35279){
var map__35280 = p__35279;
var map__35280__$1 = ((((!((map__35280 == null)))?((((map__35280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35280):map__35280);
var f = map__35280__$1;
var type = cljs.core.get.call(null,map__35280__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__35280__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__35280__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__35280__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__35280__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__35280__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__35280__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__35280__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__34796__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_35290__$1 = (function (){var or__28139__auto__ = name;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_35291 = cljs.compiler.munge.call(null,name_35290__$1);
var delegate_name_35292 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_35291),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_35292," = function (");

var seq__35282_35293 = cljs.core.seq.call(null,params);
var chunk__35283_35294 = null;
var count__35284_35295 = (0);
var i__35285_35296 = (0);
while(true){
if((i__35285_35296 < count__35284_35295)){
var param_35297 = cljs.core._nth.call(null,chunk__35283_35294,i__35285_35296);
cljs.compiler.emit.call(null,param_35297);

if(cljs.core._EQ_.call(null,param_35297,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__35298 = seq__35282_35293;
var G__35299 = chunk__35283_35294;
var G__35300 = count__35284_35295;
var G__35301 = (i__35285_35296 + (1));
seq__35282_35293 = G__35298;
chunk__35283_35294 = G__35299;
count__35284_35295 = G__35300;
i__35285_35296 = G__35301;
continue;
} else {
var temp__4657__auto___35302 = cljs.core.seq.call(null,seq__35282_35293);
if(temp__4657__auto___35302){
var seq__35282_35303__$1 = temp__4657__auto___35302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35282_35303__$1)){
var c__28978__auto___35304 = cljs.core.chunk_first.call(null,seq__35282_35303__$1);
var G__35305 = cljs.core.chunk_rest.call(null,seq__35282_35303__$1);
var G__35306 = c__28978__auto___35304;
var G__35307 = cljs.core.count.call(null,c__28978__auto___35304);
var G__35308 = (0);
seq__35282_35293 = G__35305;
chunk__35283_35294 = G__35306;
count__35284_35295 = G__35307;
i__35285_35296 = G__35308;
continue;
} else {
var param_35309 = cljs.core.first.call(null,seq__35282_35303__$1);
cljs.compiler.emit.call(null,param_35309);

if(cljs.core._EQ_.call(null,param_35309,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__35310 = cljs.core.next.call(null,seq__35282_35303__$1);
var G__35311 = null;
var G__35312 = (0);
var G__35313 = (0);
seq__35282_35293 = G__35310;
chunk__35283_35294 = G__35311;
count__35284_35295 = G__35312;
i__35285_35296 = G__35313;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_35291," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_35314 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_35314,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_35292,".call(this,");

var seq__35286_35315 = cljs.core.seq.call(null,params);
var chunk__35287_35316 = null;
var count__35288_35317 = (0);
var i__35289_35318 = (0);
while(true){
if((i__35289_35318 < count__35288_35317)){
var param_35319 = cljs.core._nth.call(null,chunk__35287_35316,i__35289_35318);
cljs.compiler.emit.call(null,param_35319);

if(cljs.core._EQ_.call(null,param_35319,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__35320 = seq__35286_35315;
var G__35321 = chunk__35287_35316;
var G__35322 = count__35288_35317;
var G__35323 = (i__35289_35318 + (1));
seq__35286_35315 = G__35320;
chunk__35287_35316 = G__35321;
count__35288_35317 = G__35322;
i__35289_35318 = G__35323;
continue;
} else {
var temp__4657__auto___35324 = cljs.core.seq.call(null,seq__35286_35315);
if(temp__4657__auto___35324){
var seq__35286_35325__$1 = temp__4657__auto___35324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35286_35325__$1)){
var c__28978__auto___35326 = cljs.core.chunk_first.call(null,seq__35286_35325__$1);
var G__35327 = cljs.core.chunk_rest.call(null,seq__35286_35325__$1);
var G__35328 = c__28978__auto___35326;
var G__35329 = cljs.core.count.call(null,c__28978__auto___35326);
var G__35330 = (0);
seq__35286_35315 = G__35327;
chunk__35287_35316 = G__35328;
count__35288_35317 = G__35329;
i__35289_35318 = G__35330;
continue;
} else {
var param_35331 = cljs.core.first.call(null,seq__35286_35325__$1);
cljs.compiler.emit.call(null,param_35331);

if(cljs.core._EQ_.call(null,param_35331,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__35332 = cljs.core.next.call(null,seq__35286_35325__$1);
var G__35333 = null;
var G__35334 = (0);
var G__35335 = (0);
seq__35286_35315 = G__35332;
chunk__35287_35316 = G__35333;
count__35288_35317 = G__35334;
i__35289_35318 = G__35335;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_35291,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_35291,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_35290__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_35291,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_35292,";");

cljs.compiler.emitln.call(null,"return ",mname_35291,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__35339){
var map__35340 = p__35339;
var map__35340__$1 = ((((!((map__35340 == null)))?((((map__35340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35340):map__35340);
var name = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__35340,map__35340__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__35336_SHARP_){
var and__28127__auto__ = p1__35336_SHARP_;
if(cljs.core.truth_(and__28127__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__35336_SHARP_));
} else {
return and__28127__auto__;
}
});})(map__35340,map__35340__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_35375__$1 = (function (){var or__28139__auto__ = name;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_35376 = cljs.compiler.munge.call(null,name_35375__$1);
var maxparams_35377 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_35378 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_35375__$1,mname_35376,maxparams_35377,loop_locals,map__35340,map__35340__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_35376),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_35375__$1,mname_35376,maxparams_35377,loop_locals,map__35340,map__35340__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_35379 = cljs.core.sort_by.call(null,((function (name_35375__$1,mname_35376,maxparams_35377,mmap_35378,loop_locals,map__35340,map__35340__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__35337_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__35337_SHARP_)));
});})(name_35375__$1,mname_35376,maxparams_35377,mmap_35378,loop_locals,map__35340,map__35340__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_35378));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_35376," = null;");

var seq__35342_35380 = cljs.core.seq.call(null,ms_35379);
var chunk__35343_35381 = null;
var count__35344_35382 = (0);
var i__35345_35383 = (0);
while(true){
if((i__35345_35383 < count__35344_35382)){
var vec__35346_35384 = cljs.core._nth.call(null,chunk__35343_35381,i__35345_35383);
var n_35385 = cljs.core.nth.call(null,vec__35346_35384,(0),null);
var meth_35386 = cljs.core.nth.call(null,vec__35346_35384,(1),null);
cljs.compiler.emits.call(null,"var ",n_35385," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_35386))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_35386);
} else {
cljs.compiler.emit_fn_method.call(null,meth_35386);
}

cljs.compiler.emitln.call(null,";");

var G__35387 = seq__35342_35380;
var G__35388 = chunk__35343_35381;
var G__35389 = count__35344_35382;
var G__35390 = (i__35345_35383 + (1));
seq__35342_35380 = G__35387;
chunk__35343_35381 = G__35388;
count__35344_35382 = G__35389;
i__35345_35383 = G__35390;
continue;
} else {
var temp__4657__auto___35391 = cljs.core.seq.call(null,seq__35342_35380);
if(temp__4657__auto___35391){
var seq__35342_35392__$1 = temp__4657__auto___35391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35342_35392__$1)){
var c__28978__auto___35393 = cljs.core.chunk_first.call(null,seq__35342_35392__$1);
var G__35394 = cljs.core.chunk_rest.call(null,seq__35342_35392__$1);
var G__35395 = c__28978__auto___35393;
var G__35396 = cljs.core.count.call(null,c__28978__auto___35393);
var G__35397 = (0);
seq__35342_35380 = G__35394;
chunk__35343_35381 = G__35395;
count__35344_35382 = G__35396;
i__35345_35383 = G__35397;
continue;
} else {
var vec__35349_35398 = cljs.core.first.call(null,seq__35342_35392__$1);
var n_35399 = cljs.core.nth.call(null,vec__35349_35398,(0),null);
var meth_35400 = cljs.core.nth.call(null,vec__35349_35398,(1),null);
cljs.compiler.emits.call(null,"var ",n_35399," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_35400))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_35400);
} else {
cljs.compiler.emit_fn_method.call(null,meth_35400);
}

cljs.compiler.emitln.call(null,";");

var G__35401 = cljs.core.next.call(null,seq__35342_35392__$1);
var G__35402 = null;
var G__35403 = (0);
var G__35404 = (0);
seq__35342_35380 = G__35401;
chunk__35343_35381 = G__35402;
count__35344_35382 = G__35403;
i__35345_35383 = G__35404;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_35376," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_35377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_35377)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_35377));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__35352_35405 = cljs.core.seq.call(null,ms_35379);
var chunk__35353_35406 = null;
var count__35354_35407 = (0);
var i__35355_35408 = (0);
while(true){
if((i__35355_35408 < count__35354_35407)){
var vec__35356_35409 = cljs.core._nth.call(null,chunk__35353_35406,i__35355_35408);
var n_35410 = cljs.core.nth.call(null,vec__35356_35409,(0),null);
var meth_35411 = cljs.core.nth.call(null,vec__35356_35409,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_35411))){
cljs.compiler.emitln.call(null,"default:");

var restarg_35412 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_35412," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_35413 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_35412," = new cljs.core.IndexedSeq(",a_35413,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_35410,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_35377)),(((cljs.core.count.call(null,maxparams_35377) > (1)))?", ":null),restarg_35412,");");
} else {
var pcnt_35414 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_35411));
cljs.compiler.emitln.call(null,"case ",pcnt_35414,":");

cljs.compiler.emitln.call(null,"return ",n_35410,".call(this",(((pcnt_35414 === (0)))?null:cljs.core._conj.call(null,(function (){var x__29001__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_35414,maxparams_35377));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),",")),");");
}

var G__35415 = seq__35352_35405;
var G__35416 = chunk__35353_35406;
var G__35417 = count__35354_35407;
var G__35418 = (i__35355_35408 + (1));
seq__35352_35405 = G__35415;
chunk__35353_35406 = G__35416;
count__35354_35407 = G__35417;
i__35355_35408 = G__35418;
continue;
} else {
var temp__4657__auto___35419 = cljs.core.seq.call(null,seq__35352_35405);
if(temp__4657__auto___35419){
var seq__35352_35420__$1 = temp__4657__auto___35419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35352_35420__$1)){
var c__28978__auto___35421 = cljs.core.chunk_first.call(null,seq__35352_35420__$1);
var G__35422 = cljs.core.chunk_rest.call(null,seq__35352_35420__$1);
var G__35423 = c__28978__auto___35421;
var G__35424 = cljs.core.count.call(null,c__28978__auto___35421);
var G__35425 = (0);
seq__35352_35405 = G__35422;
chunk__35353_35406 = G__35423;
count__35354_35407 = G__35424;
i__35355_35408 = G__35425;
continue;
} else {
var vec__35359_35426 = cljs.core.first.call(null,seq__35352_35420__$1);
var n_35427 = cljs.core.nth.call(null,vec__35359_35426,(0),null);
var meth_35428 = cljs.core.nth.call(null,vec__35359_35426,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_35428))){
cljs.compiler.emitln.call(null,"default:");

var restarg_35429 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_35429," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_35430 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_35429," = new cljs.core.IndexedSeq(",a_35430,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_35427,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_35377)),(((cljs.core.count.call(null,maxparams_35377) > (1)))?", ":null),restarg_35429,");");
} else {
var pcnt_35431 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_35428));
cljs.compiler.emitln.call(null,"case ",pcnt_35431,":");

cljs.compiler.emitln.call(null,"return ",n_35427,".call(this",(((pcnt_35431 === (0)))?null:cljs.core._conj.call(null,(function (){var x__29001__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_35431,maxparams_35377));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),",")),");");
}

var G__35432 = cljs.core.next.call(null,seq__35352_35420__$1);
var G__35433 = null;
var G__35434 = (0);
var G__35435 = (0);
seq__35352_35405 = G__35432;
chunk__35353_35406 = G__35433;
count__35354_35407 = G__35434;
i__35355_35408 = G__35435;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + (arguments.length - 1)));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_35376,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_35376,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_35375__$1,mname_35376,maxparams_35377,mmap_35378,ms_35379,loop_locals,map__35340,map__35340__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__35338_SHARP_){
var vec__35362 = p1__35338_SHARP_;
var n = cljs.core.nth.call(null,vec__35362,(0),null);
var m = cljs.core.nth.call(null,vec__35362,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_35375__$1,mname_35376,maxparams_35377,mmap_35378,ms_35379,loop_locals,map__35340,map__35340__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_35379),".cljs$lang$applyTo;");
} else {
}

var seq__35365_35436 = cljs.core.seq.call(null,ms_35379);
var chunk__35366_35437 = null;
var count__35367_35438 = (0);
var i__35368_35439 = (0);
while(true){
if((i__35368_35439 < count__35367_35438)){
var vec__35369_35440 = cljs.core._nth.call(null,chunk__35366_35437,i__35368_35439);
var n_35441 = cljs.core.nth.call(null,vec__35369_35440,(0),null);
var meth_35442 = cljs.core.nth.call(null,vec__35369_35440,(1),null);
var c_35443 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_35442));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_35442))){
cljs.compiler.emitln.call(null,mname_35376,".cljs$core$IFn$_invoke$arity$variadic = ",n_35441,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_35376,".cljs$core$IFn$_invoke$arity$",c_35443," = ",n_35441,";");
}

var G__35444 = seq__35365_35436;
var G__35445 = chunk__35366_35437;
var G__35446 = count__35367_35438;
var G__35447 = (i__35368_35439 + (1));
seq__35365_35436 = G__35444;
chunk__35366_35437 = G__35445;
count__35367_35438 = G__35446;
i__35368_35439 = G__35447;
continue;
} else {
var temp__4657__auto___35448 = cljs.core.seq.call(null,seq__35365_35436);
if(temp__4657__auto___35448){
var seq__35365_35449__$1 = temp__4657__auto___35448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35365_35449__$1)){
var c__28978__auto___35450 = cljs.core.chunk_first.call(null,seq__35365_35449__$1);
var G__35451 = cljs.core.chunk_rest.call(null,seq__35365_35449__$1);
var G__35452 = c__28978__auto___35450;
var G__35453 = cljs.core.count.call(null,c__28978__auto___35450);
var G__35454 = (0);
seq__35365_35436 = G__35451;
chunk__35366_35437 = G__35452;
count__35367_35438 = G__35453;
i__35368_35439 = G__35454;
continue;
} else {
var vec__35372_35455 = cljs.core.first.call(null,seq__35365_35449__$1);
var n_35456 = cljs.core.nth.call(null,vec__35372_35455,(0),null);
var meth_35457 = cljs.core.nth.call(null,vec__35372_35455,(1),null);
var c_35458 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_35457));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_35457))){
cljs.compiler.emitln.call(null,mname_35376,".cljs$core$IFn$_invoke$arity$variadic = ",n_35456,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_35376,".cljs$core$IFn$_invoke$arity$",c_35458," = ",n_35456,";");
}

var G__35459 = cljs.core.next.call(null,seq__35365_35449__$1);
var G__35460 = null;
var G__35461 = (0);
var G__35462 = (0);
seq__35365_35436 = G__35459;
chunk__35366_35437 = G__35460;
count__35367_35438 = G__35461;
i__35368_35439 = G__35462;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_35376,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__35463){
var map__35464 = p__35463;
var map__35464__$1 = ((((!((map__35464 == null)))?((((map__35464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35464):map__35464);
var statements = cljs.core.get.call(null,map__35464__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__35464__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__35464__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__28127__auto__ = statements;
if(cljs.core.truth_(and__28127__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__28127__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__35466_35470 = cljs.core.seq.call(null,statements);
var chunk__35467_35471 = null;
var count__35468_35472 = (0);
var i__35469_35473 = (0);
while(true){
if((i__35469_35473 < count__35468_35472)){
var s_35474 = cljs.core._nth.call(null,chunk__35467_35471,i__35469_35473);
cljs.compiler.emitln.call(null,s_35474);

var G__35475 = seq__35466_35470;
var G__35476 = chunk__35467_35471;
var G__35477 = count__35468_35472;
var G__35478 = (i__35469_35473 + (1));
seq__35466_35470 = G__35475;
chunk__35467_35471 = G__35476;
count__35468_35472 = G__35477;
i__35469_35473 = G__35478;
continue;
} else {
var temp__4657__auto___35479 = cljs.core.seq.call(null,seq__35466_35470);
if(temp__4657__auto___35479){
var seq__35466_35480__$1 = temp__4657__auto___35479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35466_35480__$1)){
var c__28978__auto___35481 = cljs.core.chunk_first.call(null,seq__35466_35480__$1);
var G__35482 = cljs.core.chunk_rest.call(null,seq__35466_35480__$1);
var G__35483 = c__28978__auto___35481;
var G__35484 = cljs.core.count.call(null,c__28978__auto___35481);
var G__35485 = (0);
seq__35466_35470 = G__35482;
chunk__35467_35471 = G__35483;
count__35468_35472 = G__35484;
i__35469_35473 = G__35485;
continue;
} else {
var s_35486 = cljs.core.first.call(null,seq__35466_35480__$1);
cljs.compiler.emitln.call(null,s_35486);

var G__35487 = cljs.core.next.call(null,seq__35466_35480__$1);
var G__35488 = null;
var G__35489 = (0);
var G__35490 = (0);
seq__35466_35470 = G__35487;
chunk__35467_35471 = G__35488;
count__35468_35472 = G__35489;
i__35469_35473 = G__35490;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__28127__auto__ = statements;
if(cljs.core.truth_(and__28127__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__28127__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__35491){
var map__35492 = p__35491;
var map__35492__$1 = ((((!((map__35492 == null)))?((((map__35492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35492):map__35492);
var env = cljs.core.get.call(null,map__35492__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__35492__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__35492__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__35492__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__35492__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__28139__auto__ = name;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__35494,is_loop){
var map__35495 = p__35494;
var map__35495__$1 = ((((!((map__35495 == null)))?((((map__35495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35495):map__35495);
var bindings = cljs.core.get.call(null,map__35495__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__35495__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__35495__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_35497_35506 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_35497_35506,context,map__35495,map__35495__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_35497_35506,context,map__35495,map__35495__$1,bindings,expr,env))
,bindings):null));

try{var seq__35498_35507 = cljs.core.seq.call(null,bindings);
var chunk__35499_35508 = null;
var count__35500_35509 = (0);
var i__35501_35510 = (0);
while(true){
if((i__35501_35510 < count__35500_35509)){
var map__35502_35511 = cljs.core._nth.call(null,chunk__35499_35508,i__35501_35510);
var map__35502_35512__$1 = ((((!((map__35502_35511 == null)))?((((map__35502_35511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35502_35511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35502_35511):map__35502_35511);
var binding_35513 = map__35502_35512__$1;
var init_35514 = cljs.core.get.call(null,map__35502_35512__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_35513);

cljs.compiler.emitln.call(null," = ",init_35514,";");

var G__35515 = seq__35498_35507;
var G__35516 = chunk__35499_35508;
var G__35517 = count__35500_35509;
var G__35518 = (i__35501_35510 + (1));
seq__35498_35507 = G__35515;
chunk__35499_35508 = G__35516;
count__35500_35509 = G__35517;
i__35501_35510 = G__35518;
continue;
} else {
var temp__4657__auto___35519 = cljs.core.seq.call(null,seq__35498_35507);
if(temp__4657__auto___35519){
var seq__35498_35520__$1 = temp__4657__auto___35519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35498_35520__$1)){
var c__28978__auto___35521 = cljs.core.chunk_first.call(null,seq__35498_35520__$1);
var G__35522 = cljs.core.chunk_rest.call(null,seq__35498_35520__$1);
var G__35523 = c__28978__auto___35521;
var G__35524 = cljs.core.count.call(null,c__28978__auto___35521);
var G__35525 = (0);
seq__35498_35507 = G__35522;
chunk__35499_35508 = G__35523;
count__35500_35509 = G__35524;
i__35501_35510 = G__35525;
continue;
} else {
var map__35504_35526 = cljs.core.first.call(null,seq__35498_35520__$1);
var map__35504_35527__$1 = ((((!((map__35504_35526 == null)))?((((map__35504_35526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35504_35526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35504_35526):map__35504_35526);
var binding_35528 = map__35504_35527__$1;
var init_35529 = cljs.core.get.call(null,map__35504_35527__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_35528);

cljs.compiler.emitln.call(null," = ",init_35529,";");

var G__35530 = cljs.core.next.call(null,seq__35498_35520__$1);
var G__35531 = null;
var G__35532 = (0);
var G__35533 = (0);
seq__35498_35507 = G__35530;
chunk__35499_35508 = G__35531;
count__35500_35509 = G__35532;
i__35501_35510 = G__35533;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_35497_35506;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__35534){
var map__35535 = p__35534;
var map__35535__$1 = ((((!((map__35535 == null)))?((((map__35535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35535):map__35535);
var frame = cljs.core.get.call(null,map__35535__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__35535__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__35535__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__29084__auto___35537 = cljs.core.count.call(null,exprs);
var i_35538 = (0);
while(true){
if((i_35538 < n__29084__auto___35537)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_35538)," = ",exprs.call(null,i_35538),";");

var G__35539 = (i_35538 + (1));
i_35538 = G__35539;
continue;
} else {
}
break;
}

var n__29084__auto___35540 = cljs.core.count.call(null,exprs);
var i_35541 = (0);
while(true){
if((i_35541 < n__29084__auto___35540)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_35541))," = ",temps.call(null,i_35541),";");

var G__35542 = (i_35541 + (1));
i_35541 = G__35542;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__35543){
var map__35544 = p__35543;
var map__35544__$1 = ((((!((map__35544 == null)))?((((map__35544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35544):map__35544);
var bindings = cljs.core.get.call(null,map__35544__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__35544__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__35544__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__35546_35554 = cljs.core.seq.call(null,bindings);
var chunk__35547_35555 = null;
var count__35548_35556 = (0);
var i__35549_35557 = (0);
while(true){
if((i__35549_35557 < count__35548_35556)){
var map__35550_35558 = cljs.core._nth.call(null,chunk__35547_35555,i__35549_35557);
var map__35550_35559__$1 = ((((!((map__35550_35558 == null)))?((((map__35550_35558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35550_35558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35550_35558):map__35550_35558);
var binding_35560 = map__35550_35559__$1;
var init_35561 = cljs.core.get.call(null,map__35550_35559__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_35560)," = ",init_35561,";");

var G__35562 = seq__35546_35554;
var G__35563 = chunk__35547_35555;
var G__35564 = count__35548_35556;
var G__35565 = (i__35549_35557 + (1));
seq__35546_35554 = G__35562;
chunk__35547_35555 = G__35563;
count__35548_35556 = G__35564;
i__35549_35557 = G__35565;
continue;
} else {
var temp__4657__auto___35566 = cljs.core.seq.call(null,seq__35546_35554);
if(temp__4657__auto___35566){
var seq__35546_35567__$1 = temp__4657__auto___35566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35546_35567__$1)){
var c__28978__auto___35568 = cljs.core.chunk_first.call(null,seq__35546_35567__$1);
var G__35569 = cljs.core.chunk_rest.call(null,seq__35546_35567__$1);
var G__35570 = c__28978__auto___35568;
var G__35571 = cljs.core.count.call(null,c__28978__auto___35568);
var G__35572 = (0);
seq__35546_35554 = G__35569;
chunk__35547_35555 = G__35570;
count__35548_35556 = G__35571;
i__35549_35557 = G__35572;
continue;
} else {
var map__35552_35573 = cljs.core.first.call(null,seq__35546_35567__$1);
var map__35552_35574__$1 = ((((!((map__35552_35573 == null)))?((((map__35552_35573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35552_35573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35552_35573):map__35552_35573);
var binding_35575 = map__35552_35574__$1;
var init_35576 = cljs.core.get.call(null,map__35552_35574__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_35575)," = ",init_35576,";");

var G__35577 = cljs.core.next.call(null,seq__35546_35567__$1);
var G__35578 = null;
var G__35579 = (0);
var G__35580 = (0);
seq__35546_35554 = G__35577;
chunk__35547_35555 = G__35578;
count__35548_35556 = G__35579;
i__35549_35557 = G__35580;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__35583){
var map__35584 = p__35583;
var map__35584__$1 = ((((!((map__35584 == null)))?((((map__35584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35584):map__35584);
var expr = map__35584__$1;
var f = cljs.core.get.call(null,map__35584__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__35584__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__35584__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__28127__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__28127__auto__){
var and__28127__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__28127__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__28127__auto____$1;
}
} else {
return and__28127__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__28127__auto__ = protocol;
if(cljs.core.truth_(and__28127__auto__)){
var and__28127__auto____$1 = tag;
if(cljs.core.truth_(and__28127__auto____$1)){
var or__28139__auto__ = (function (){var and__28127__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__28127__auto____$2){
var and__28127__auto____$3 = protocol;
if(cljs.core.truth_(and__28127__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__28127__auto____$3;
}
} else {
return and__28127__auto____$2;
}
})();
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
var and__28127__auto____$2 = (function (){var or__28139__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__28139__auto____$1){
return or__28139__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__28127__auto____$2)){
var or__28139__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__28139__auto____$1){
return or__28139__auto____$1;
} else {
var and__28127__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__28127__auto____$3){
var and__28127__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__28127__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__28127__auto____$4;
}
} else {
return and__28127__auto____$3;
}
}
} else {
return and__28127__auto____$2;
}
}
} else {
return and__28127__auto____$1;
}
} else {
return and__28127__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__28139__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__28139__auto__){
return or__28139__auto__;
} else {
var or__28139__auto____$1 = (function (){var temp__4657__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__28139__auto____$1)){
return or__28139__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)));
var vec__35586 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__28127__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__28127__auto__)){
return (arity > mfa);
} else {
return and__28127__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__35584,map__35584__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__35584,map__35584__$1,expr,f,args,env){
return (function (p1__35581_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__35581_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__35584,map__35584__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__35584,map__35584__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__35584,map__35584__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__35584,map__35584__$1,expr,f,args,env){
return (function (p1__35582_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__35582_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__35584,map__35584__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__35584,map__35584__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__35586,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__35586,(1),null);
var env__34796__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_35589 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_35589,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_35590 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_35590,args)),(((mfa_35590 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_35590,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__28139__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
var or__28139__auto____$1 = js_QMARK_;
if(or__28139__auto____$1){
return or__28139__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797)))){
var fprop_35591 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_35591," ? ",f__$1,fprop_35591,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_35591," ? ",f__$1,fprop_35591,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__35592){
var map__35593 = p__35592;
var map__35593__$1 = ((((!((map__35593 == null)))?((((map__35593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35593):map__35593);
var ctor = cljs.core.get.call(null,map__35593__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__35593__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__35593__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__34796__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__35595){
var map__35596 = p__35595;
var map__35596__$1 = ((((!((map__35596 == null)))?((((map__35596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35596.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35596):map__35596);
var target = cljs.core.get.call(null,map__35596__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__35596__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__35596__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__34796__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__35598 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__35598__$1 = ((((!((map__35598 == null)))?((((map__35598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35598):map__35598);
var options = cljs.core.get.call(null,map__35598__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__35598__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__35599 = options;
var map__35599__$1 = ((((!((map__35599 == null)))?((((map__35599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35599):map__35599);
var target = cljs.core.get.call(null,map__35599__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__35599__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__35600 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__35606 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__35606__$1 = ((((!((map__35606 == null)))?((((map__35606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35606.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35606):map__35606);
var node_libs = cljs.core.get.call(null,map__35606__$1,true);
var libs_to_load = cljs.core.get.call(null,map__35606__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__35600,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__35600,(1),null);
var map__35603 = cljs.core.group_by.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__35603__$1 = ((((!((map__35603 == null)))?((((map__35603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35603):map__35603);
var global_exports_libs = cljs.core.get.call(null,map__35603__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__35603__$1,false);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__35609_35625 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__35610_35626 = null;
var count__35611_35627 = (0);
var i__35612_35628 = (0);
while(true){
if((i__35612_35628 < count__35611_35627)){
var lib_35629 = cljs.core._nth.call(null,chunk__35610_35626,i__35612_35628);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_35629)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__28139__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_35629),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_35629),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__28139__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_35629),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_35629),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_35629),"');");

}
}
}

var G__35630 = seq__35609_35625;
var G__35631 = chunk__35610_35626;
var G__35632 = count__35611_35627;
var G__35633 = (i__35612_35628 + (1));
seq__35609_35625 = G__35630;
chunk__35610_35626 = G__35631;
count__35611_35627 = G__35632;
i__35612_35628 = G__35633;
continue;
} else {
var temp__4657__auto___35634 = cljs.core.seq.call(null,seq__35609_35625);
if(temp__4657__auto___35634){
var seq__35609_35635__$1 = temp__4657__auto___35634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35609_35635__$1)){
var c__28978__auto___35636 = cljs.core.chunk_first.call(null,seq__35609_35635__$1);
var G__35637 = cljs.core.chunk_rest.call(null,seq__35609_35635__$1);
var G__35638 = c__28978__auto___35636;
var G__35639 = cljs.core.count.call(null,c__28978__auto___35636);
var G__35640 = (0);
seq__35609_35625 = G__35637;
chunk__35610_35626 = G__35638;
count__35611_35627 = G__35639;
i__35612_35628 = G__35640;
continue;
} else {
var lib_35641 = cljs.core.first.call(null,seq__35609_35635__$1);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_35641)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__28139__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_35641),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_35641),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__28139__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_35641),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_35641),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_35641),"');");

}
}
}

var G__35642 = cljs.core.next.call(null,seq__35609_35635__$1);
var G__35643 = null;
var G__35644 = (0);
var G__35645 = (0);
seq__35609_35625 = G__35642;
chunk__35610_35626 = G__35643;
count__35611_35627 = G__35644;
i__35612_35628 = G__35645;
continue;
}
} else {
}
}
break;
}

var seq__35613_35646 = cljs.core.seq.call(null,node_libs);
var chunk__35614_35647 = null;
var count__35615_35648 = (0);
var i__35616_35649 = (0);
while(true){
if((i__35616_35649 < count__35615_35648)){
var lib_35650 = cljs.core._nth.call(null,chunk__35614_35647,i__35616_35649);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_35650)," = require('",lib_35650,"');");

var G__35651 = seq__35613_35646;
var G__35652 = chunk__35614_35647;
var G__35653 = count__35615_35648;
var G__35654 = (i__35616_35649 + (1));
seq__35613_35646 = G__35651;
chunk__35614_35647 = G__35652;
count__35615_35648 = G__35653;
i__35616_35649 = G__35654;
continue;
} else {
var temp__4657__auto___35655 = cljs.core.seq.call(null,seq__35613_35646);
if(temp__4657__auto___35655){
var seq__35613_35656__$1 = temp__4657__auto___35655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35613_35656__$1)){
var c__28978__auto___35657 = cljs.core.chunk_first.call(null,seq__35613_35656__$1);
var G__35658 = cljs.core.chunk_rest.call(null,seq__35613_35656__$1);
var G__35659 = c__28978__auto___35657;
var G__35660 = cljs.core.count.call(null,c__28978__auto___35657);
var G__35661 = (0);
seq__35613_35646 = G__35658;
chunk__35614_35647 = G__35659;
count__35615_35648 = G__35660;
i__35616_35649 = G__35661;
continue;
} else {
var lib_35662 = cljs.core.first.call(null,seq__35613_35656__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_35662)," = require('",lib_35662,"');");

var G__35663 = cljs.core.next.call(null,seq__35613_35656__$1);
var G__35664 = null;
var G__35665 = (0);
var G__35666 = (0);
seq__35613_35646 = G__35663;
chunk__35614_35647 = G__35664;
count__35615_35648 = G__35665;
i__35616_35649 = G__35666;
continue;
}
} else {
}
}
break;
}

var seq__35617_35667 = cljs.core.seq.call(null,global_exports_libs);
var chunk__35618_35668 = null;
var count__35619_35669 = (0);
var i__35620_35670 = (0);
while(true){
if((i__35620_35670 < count__35619_35669)){
var lib_35671 = cljs.core._nth.call(null,chunk__35618_35668,i__35620_35670);
var map__35621_35672 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_35671));
var map__35621_35673__$1 = ((((!((map__35621_35672 == null)))?((((map__35621_35672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35621_35672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35621_35672):map__35621_35672);
var global_exports_35674 = cljs.core.get.call(null,map__35621_35673__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_35671)," = goog.global.",cljs.core.get.call(null,global_exports_35674,cljs.core.symbol.call(null,lib_35671)),";");

var G__35675 = seq__35617_35667;
var G__35676 = chunk__35618_35668;
var G__35677 = count__35619_35669;
var G__35678 = (i__35620_35670 + (1));
seq__35617_35667 = G__35675;
chunk__35618_35668 = G__35676;
count__35619_35669 = G__35677;
i__35620_35670 = G__35678;
continue;
} else {
var temp__4657__auto___35679 = cljs.core.seq.call(null,seq__35617_35667);
if(temp__4657__auto___35679){
var seq__35617_35680__$1 = temp__4657__auto___35679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35617_35680__$1)){
var c__28978__auto___35681 = cljs.core.chunk_first.call(null,seq__35617_35680__$1);
var G__35682 = cljs.core.chunk_rest.call(null,seq__35617_35680__$1);
var G__35683 = c__28978__auto___35681;
var G__35684 = cljs.core.count.call(null,c__28978__auto___35681);
var G__35685 = (0);
seq__35617_35667 = G__35682;
chunk__35618_35668 = G__35683;
count__35619_35669 = G__35684;
i__35620_35670 = G__35685;
continue;
} else {
var lib_35686 = cljs.core.first.call(null,seq__35617_35680__$1);
var map__35623_35687 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_35686));
var map__35623_35688__$1 = ((((!((map__35623_35687 == null)))?((((map__35623_35687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35623_35687.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35623_35687):map__35623_35687);
var global_exports_35689 = cljs.core.get.call(null,map__35623_35688__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_35686)," = goog.global.",cljs.core.get.call(null,global_exports_35689,cljs.core.symbol.call(null,lib_35686)),";");

var G__35690 = cljs.core.next.call(null,seq__35617_35680__$1);
var G__35691 = null;
var G__35692 = (0);
var G__35693 = (0);
seq__35617_35667 = G__35690;
chunk__35618_35668 = G__35691;
count__35619_35669 = G__35692;
i__35620_35670 = G__35693;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__35694){
var map__35695 = p__35694;
var map__35695__$1 = ((((!((map__35695 == null)))?((((map__35695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35695):map__35695);
var name = cljs.core.get.call(null,map__35695__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__35695__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__35695__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__35695__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__35695__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__35695__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__35695__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__35697){
var map__35698 = p__35697;
var map__35698__$1 = ((((!((map__35698 == null)))?((((map__35698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35698):map__35698);
var name = cljs.core.get.call(null,map__35698__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__35698__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__35698__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__35698__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__35698__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__35698__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__35698__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__35700){
var map__35701 = p__35700;
var map__35701__$1 = ((((!((map__35701 == null)))?((((map__35701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35701):map__35701);
var t = cljs.core.get.call(null,map__35701__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__35701__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__35701__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__35701__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__35701__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__35703_35721 = cljs.core.seq.call(null,protocols);
var chunk__35704_35722 = null;
var count__35705_35723 = (0);
var i__35706_35724 = (0);
while(true){
if((i__35706_35724 < count__35705_35723)){
var protocol_35725 = cljs.core._nth.call(null,chunk__35704_35722,i__35706_35724);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35725)].join('')),"}");

var G__35726 = seq__35703_35721;
var G__35727 = chunk__35704_35722;
var G__35728 = count__35705_35723;
var G__35729 = (i__35706_35724 + (1));
seq__35703_35721 = G__35726;
chunk__35704_35722 = G__35727;
count__35705_35723 = G__35728;
i__35706_35724 = G__35729;
continue;
} else {
var temp__4657__auto___35730 = cljs.core.seq.call(null,seq__35703_35721);
if(temp__4657__auto___35730){
var seq__35703_35731__$1 = temp__4657__auto___35730;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35703_35731__$1)){
var c__28978__auto___35732 = cljs.core.chunk_first.call(null,seq__35703_35731__$1);
var G__35733 = cljs.core.chunk_rest.call(null,seq__35703_35731__$1);
var G__35734 = c__28978__auto___35732;
var G__35735 = cljs.core.count.call(null,c__28978__auto___35732);
var G__35736 = (0);
seq__35703_35721 = G__35733;
chunk__35704_35722 = G__35734;
count__35705_35723 = G__35735;
i__35706_35724 = G__35736;
continue;
} else {
var protocol_35737 = cljs.core.first.call(null,seq__35703_35731__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35737)].join('')),"}");

var G__35738 = cljs.core.next.call(null,seq__35703_35731__$1);
var G__35739 = null;
var G__35740 = (0);
var G__35741 = (0);
seq__35703_35721 = G__35738;
chunk__35704_35722 = G__35739;
count__35705_35723 = G__35740;
i__35706_35724 = G__35741;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__35707_35742 = cljs.core.seq.call(null,fields__$1);
var chunk__35708_35743 = null;
var count__35709_35744 = (0);
var i__35710_35745 = (0);
while(true){
if((i__35710_35745 < count__35709_35744)){
var fld_35746 = cljs.core._nth.call(null,chunk__35708_35743,i__35710_35745);
cljs.compiler.emitln.call(null,"this.",fld_35746," = ",fld_35746,";");

var G__35747 = seq__35707_35742;
var G__35748 = chunk__35708_35743;
var G__35749 = count__35709_35744;
var G__35750 = (i__35710_35745 + (1));
seq__35707_35742 = G__35747;
chunk__35708_35743 = G__35748;
count__35709_35744 = G__35749;
i__35710_35745 = G__35750;
continue;
} else {
var temp__4657__auto___35751 = cljs.core.seq.call(null,seq__35707_35742);
if(temp__4657__auto___35751){
var seq__35707_35752__$1 = temp__4657__auto___35751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35707_35752__$1)){
var c__28978__auto___35753 = cljs.core.chunk_first.call(null,seq__35707_35752__$1);
var G__35754 = cljs.core.chunk_rest.call(null,seq__35707_35752__$1);
var G__35755 = c__28978__auto___35753;
var G__35756 = cljs.core.count.call(null,c__28978__auto___35753);
var G__35757 = (0);
seq__35707_35742 = G__35754;
chunk__35708_35743 = G__35755;
count__35709_35744 = G__35756;
i__35710_35745 = G__35757;
continue;
} else {
var fld_35758 = cljs.core.first.call(null,seq__35707_35752__$1);
cljs.compiler.emitln.call(null,"this.",fld_35758," = ",fld_35758,";");

var G__35759 = cljs.core.next.call(null,seq__35707_35752__$1);
var G__35760 = null;
var G__35761 = (0);
var G__35762 = (0);
seq__35707_35742 = G__35759;
chunk__35708_35743 = G__35760;
count__35709_35744 = G__35761;
i__35710_35745 = G__35762;
continue;
}
} else {
}
}
break;
}

var seq__35711_35763 = cljs.core.seq.call(null,pmasks);
var chunk__35712_35764 = null;
var count__35713_35765 = (0);
var i__35714_35766 = (0);
while(true){
if((i__35714_35766 < count__35713_35765)){
var vec__35715_35767 = cljs.core._nth.call(null,chunk__35712_35764,i__35714_35766);
var pno_35768 = cljs.core.nth.call(null,vec__35715_35767,(0),null);
var pmask_35769 = cljs.core.nth.call(null,vec__35715_35767,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_35768,"$ = ",pmask_35769,";");

var G__35770 = seq__35711_35763;
var G__35771 = chunk__35712_35764;
var G__35772 = count__35713_35765;
var G__35773 = (i__35714_35766 + (1));
seq__35711_35763 = G__35770;
chunk__35712_35764 = G__35771;
count__35713_35765 = G__35772;
i__35714_35766 = G__35773;
continue;
} else {
var temp__4657__auto___35774 = cljs.core.seq.call(null,seq__35711_35763);
if(temp__4657__auto___35774){
var seq__35711_35775__$1 = temp__4657__auto___35774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35711_35775__$1)){
var c__28978__auto___35776 = cljs.core.chunk_first.call(null,seq__35711_35775__$1);
var G__35777 = cljs.core.chunk_rest.call(null,seq__35711_35775__$1);
var G__35778 = c__28978__auto___35776;
var G__35779 = cljs.core.count.call(null,c__28978__auto___35776);
var G__35780 = (0);
seq__35711_35763 = G__35777;
chunk__35712_35764 = G__35778;
count__35713_35765 = G__35779;
i__35714_35766 = G__35780;
continue;
} else {
var vec__35718_35781 = cljs.core.first.call(null,seq__35711_35775__$1);
var pno_35782 = cljs.core.nth.call(null,vec__35718_35781,(0),null);
var pmask_35783 = cljs.core.nth.call(null,vec__35718_35781,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_35782,"$ = ",pmask_35783,";");

var G__35784 = cljs.core.next.call(null,seq__35711_35775__$1);
var G__35785 = null;
var G__35786 = (0);
var G__35787 = (0);
seq__35711_35763 = G__35784;
chunk__35712_35764 = G__35785;
count__35713_35765 = G__35786;
i__35714_35766 = G__35787;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__35788){
var map__35789 = p__35788;
var map__35789__$1 = ((((!((map__35789 == null)))?((((map__35789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35789):map__35789);
var t = cljs.core.get.call(null,map__35789__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__35789__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__35789__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__35789__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__35789__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__35791_35809 = cljs.core.seq.call(null,protocols);
var chunk__35792_35810 = null;
var count__35793_35811 = (0);
var i__35794_35812 = (0);
while(true){
if((i__35794_35812 < count__35793_35811)){
var protocol_35813 = cljs.core._nth.call(null,chunk__35792_35810,i__35794_35812);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35813)].join('')),"}");

var G__35814 = seq__35791_35809;
var G__35815 = chunk__35792_35810;
var G__35816 = count__35793_35811;
var G__35817 = (i__35794_35812 + (1));
seq__35791_35809 = G__35814;
chunk__35792_35810 = G__35815;
count__35793_35811 = G__35816;
i__35794_35812 = G__35817;
continue;
} else {
var temp__4657__auto___35818 = cljs.core.seq.call(null,seq__35791_35809);
if(temp__4657__auto___35818){
var seq__35791_35819__$1 = temp__4657__auto___35818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35791_35819__$1)){
var c__28978__auto___35820 = cljs.core.chunk_first.call(null,seq__35791_35819__$1);
var G__35821 = cljs.core.chunk_rest.call(null,seq__35791_35819__$1);
var G__35822 = c__28978__auto___35820;
var G__35823 = cljs.core.count.call(null,c__28978__auto___35820);
var G__35824 = (0);
seq__35791_35809 = G__35821;
chunk__35792_35810 = G__35822;
count__35793_35811 = G__35823;
i__35794_35812 = G__35824;
continue;
} else {
var protocol_35825 = cljs.core.first.call(null,seq__35791_35819__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35825)].join('')),"}");

var G__35826 = cljs.core.next.call(null,seq__35791_35819__$1);
var G__35827 = null;
var G__35828 = (0);
var G__35829 = (0);
seq__35791_35809 = G__35826;
chunk__35792_35810 = G__35827;
count__35793_35811 = G__35828;
i__35794_35812 = G__35829;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__35795_35830 = cljs.core.seq.call(null,fields__$1);
var chunk__35796_35831 = null;
var count__35797_35832 = (0);
var i__35798_35833 = (0);
while(true){
if((i__35798_35833 < count__35797_35832)){
var fld_35834 = cljs.core._nth.call(null,chunk__35796_35831,i__35798_35833);
cljs.compiler.emitln.call(null,"this.",fld_35834," = ",fld_35834,";");

var G__35835 = seq__35795_35830;
var G__35836 = chunk__35796_35831;
var G__35837 = count__35797_35832;
var G__35838 = (i__35798_35833 + (1));
seq__35795_35830 = G__35835;
chunk__35796_35831 = G__35836;
count__35797_35832 = G__35837;
i__35798_35833 = G__35838;
continue;
} else {
var temp__4657__auto___35839 = cljs.core.seq.call(null,seq__35795_35830);
if(temp__4657__auto___35839){
var seq__35795_35840__$1 = temp__4657__auto___35839;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35795_35840__$1)){
var c__28978__auto___35841 = cljs.core.chunk_first.call(null,seq__35795_35840__$1);
var G__35842 = cljs.core.chunk_rest.call(null,seq__35795_35840__$1);
var G__35843 = c__28978__auto___35841;
var G__35844 = cljs.core.count.call(null,c__28978__auto___35841);
var G__35845 = (0);
seq__35795_35830 = G__35842;
chunk__35796_35831 = G__35843;
count__35797_35832 = G__35844;
i__35798_35833 = G__35845;
continue;
} else {
var fld_35846 = cljs.core.first.call(null,seq__35795_35840__$1);
cljs.compiler.emitln.call(null,"this.",fld_35846," = ",fld_35846,";");

var G__35847 = cljs.core.next.call(null,seq__35795_35840__$1);
var G__35848 = null;
var G__35849 = (0);
var G__35850 = (0);
seq__35795_35830 = G__35847;
chunk__35796_35831 = G__35848;
count__35797_35832 = G__35849;
i__35798_35833 = G__35850;
continue;
}
} else {
}
}
break;
}

var seq__35799_35851 = cljs.core.seq.call(null,pmasks);
var chunk__35800_35852 = null;
var count__35801_35853 = (0);
var i__35802_35854 = (0);
while(true){
if((i__35802_35854 < count__35801_35853)){
var vec__35803_35855 = cljs.core._nth.call(null,chunk__35800_35852,i__35802_35854);
var pno_35856 = cljs.core.nth.call(null,vec__35803_35855,(0),null);
var pmask_35857 = cljs.core.nth.call(null,vec__35803_35855,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_35856,"$ = ",pmask_35857,";");

var G__35858 = seq__35799_35851;
var G__35859 = chunk__35800_35852;
var G__35860 = count__35801_35853;
var G__35861 = (i__35802_35854 + (1));
seq__35799_35851 = G__35858;
chunk__35800_35852 = G__35859;
count__35801_35853 = G__35860;
i__35802_35854 = G__35861;
continue;
} else {
var temp__4657__auto___35862 = cljs.core.seq.call(null,seq__35799_35851);
if(temp__4657__auto___35862){
var seq__35799_35863__$1 = temp__4657__auto___35862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35799_35863__$1)){
var c__28978__auto___35864 = cljs.core.chunk_first.call(null,seq__35799_35863__$1);
var G__35865 = cljs.core.chunk_rest.call(null,seq__35799_35863__$1);
var G__35866 = c__28978__auto___35864;
var G__35867 = cljs.core.count.call(null,c__28978__auto___35864);
var G__35868 = (0);
seq__35799_35851 = G__35865;
chunk__35800_35852 = G__35866;
count__35801_35853 = G__35867;
i__35802_35854 = G__35868;
continue;
} else {
var vec__35806_35869 = cljs.core.first.call(null,seq__35799_35863__$1);
var pno_35870 = cljs.core.nth.call(null,vec__35806_35869,(0),null);
var pmask_35871 = cljs.core.nth.call(null,vec__35806_35869,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_35870,"$ = ",pmask_35871,";");

var G__35872 = cljs.core.next.call(null,seq__35799_35863__$1);
var G__35873 = null;
var G__35874 = (0);
var G__35875 = (0);
seq__35799_35851 = G__35872;
chunk__35800_35852 = G__35873;
count__35801_35853 = G__35874;
i__35802_35854 = G__35875;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__35876){
var map__35877 = p__35876;
var map__35877__$1 = ((((!((map__35877 == null)))?((((map__35877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35877):map__35877);
var target = cljs.core.get.call(null,map__35877__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__35877__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__35877__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__35877__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__35877__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__34796__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__35879){
var map__35880 = p__35879;
var map__35880__$1 = ((((!((map__35880 == null)))?((((map__35880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35880):map__35880);
var op = cljs.core.get.call(null,map__35880__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__35880__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__35880__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__35880__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__35880__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__28127__auto__ = code;
if(cljs.core.truth_(and__28127__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__28127__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__34796__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__34796__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"cache-key","cache-key",-565448732),new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445),new cljs.core.Keyword(null,"language-out","language-out",334619882)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__35885 = cljs.core.seq.call(null,table);
var chunk__35886 = null;
var count__35887 = (0);
var i__35888 = (0);
while(true){
if((i__35888 < count__35887)){
var vec__35889 = cljs.core._nth.call(null,chunk__35886,i__35888);
var sym = cljs.core.nth.call(null,vec__35889,(0),null);
var value = cljs.core.nth.call(null,vec__35889,(1),null);
var ns_35895 = cljs.core.namespace.call(null,sym);
var name_35896 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__35897 = seq__35885;
var G__35898 = chunk__35886;
var G__35899 = count__35887;
var G__35900 = (i__35888 + (1));
seq__35885 = G__35897;
chunk__35886 = G__35898;
count__35887 = G__35899;
i__35888 = G__35900;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35885);
if(temp__4657__auto__){
var seq__35885__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35885__$1)){
var c__28978__auto__ = cljs.core.chunk_first.call(null,seq__35885__$1);
var G__35901 = cljs.core.chunk_rest.call(null,seq__35885__$1);
var G__35902 = c__28978__auto__;
var G__35903 = cljs.core.count.call(null,c__28978__auto__);
var G__35904 = (0);
seq__35885 = G__35901;
chunk__35886 = G__35902;
count__35887 = G__35903;
i__35888 = G__35904;
continue;
} else {
var vec__35892 = cljs.core.first.call(null,seq__35885__$1);
var sym = cljs.core.nth.call(null,vec__35892,(0),null);
var value = cljs.core.nth.call(null,vec__35892,(1),null);
var ns_35905 = cljs.core.namespace.call(null,sym);
var name_35906 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__35907 = cljs.core.next.call(null,seq__35885__$1);
var G__35908 = null;
var G__35909 = (0);
var G__35910 = (0);
seq__35885 = G__35907;
chunk__35886 = G__35908;
count__35887 = G__35909;
i__35888 = G__35910;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__35912 = arguments.length;
switch (G__35912) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_35917 = cljs.core.first.call(null,ks);
var vec__35913_35918 = cljs.core.conj.call(null,prefix,k_35917);
var top_35919 = cljs.core.nth.call(null,vec__35913_35918,(0),null);
var prefix_SINGLEQUOTE__35920 = vec__35913_35918;
if((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_35917)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__35920) == null))){
if(!((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_35919)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_35919)))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__35920)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_35919);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__35920)),";");
}
} else {
}

var m_35921 = cljs.core.get.call(null,externs,k_35917);
if(cljs.core.empty_QMARK_.call(null,m_35921)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__35920,m_35921,top_level,known_externs);
}

var G__35922 = cljs.core.next.call(null,ks);
ks = G__35922;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1506931514407
