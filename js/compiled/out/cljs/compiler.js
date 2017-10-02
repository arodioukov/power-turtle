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
var map__35710 = s;
var map__35710__$1 = ((((!((map__35710 == null)))?((((map__35710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35710):map__35710);
var name = cljs.core.get.call(null,map__35710__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__35710__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__35713 = info;
var map__35714 = G__35713;
var map__35714__$1 = ((((!((map__35714 == null)))?((((map__35714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35714):map__35714);
var shadow = cljs.core.get.call(null,map__35714__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__35713__$1 = G__35713;
while(true){
var d__$2 = d__$1;
var map__35716 = G__35713__$1;
var map__35716__$1 = ((((!((map__35716 == null)))?((((map__35716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35716):map__35716);
var shadow__$1 = cljs.core.get.call(null,map__35716__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__35718 = (d__$2 + (1));
var G__35719 = shadow__$1;
d__$1 = G__35718;
G__35713__$1 = G__35719;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__35720){
var map__35721 = p__35720;
var map__35721__$1 = ((((!((map__35721 == null)))?((((map__35721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35721):map__35721);
var name_var = map__35721__$1;
var name = cljs.core.get.call(null,map__35721__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__35721__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__35723 = info;
var map__35723__$1 = ((((!((map__35723 == null)))?((((map__35723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35723):map__35723);
var ns = cljs.core.get.call(null,map__35723__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__35723__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__35726 = arguments.length;
switch (G__35726) {
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
var G__35728 = cp;
switch (G__35728) {
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
var seq__35730_35734 = cljs.core.seq.call(null,s);
var chunk__35731_35735 = null;
var count__35732_35736 = (0);
var i__35733_35737 = (0);
while(true){
if((i__35733_35737 < count__35732_35736)){
var c_35738 = cljs.core._nth.call(null,chunk__35731_35735,i__35733_35737);
sb.append(cljs.compiler.escape_char.call(null,c_35738));

var G__35739 = seq__35730_35734;
var G__35740 = chunk__35731_35735;
var G__35741 = count__35732_35736;
var G__35742 = (i__35733_35737 + (1));
seq__35730_35734 = G__35739;
chunk__35731_35735 = G__35740;
count__35732_35736 = G__35741;
i__35733_35737 = G__35742;
continue;
} else {
var temp__4657__auto___35743 = cljs.core.seq.call(null,seq__35730_35734);
if(temp__4657__auto___35743){
var seq__35730_35744__$1 = temp__4657__auto___35743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35730_35744__$1)){
var c__29665__auto___35745 = cljs.core.chunk_first.call(null,seq__35730_35744__$1);
var G__35746 = cljs.core.chunk_rest.call(null,seq__35730_35744__$1);
var G__35747 = c__29665__auto___35745;
var G__35748 = cljs.core.count.call(null,c__29665__auto___35745);
var G__35749 = (0);
seq__35730_35734 = G__35746;
chunk__35731_35735 = G__35747;
count__35732_35736 = G__35748;
i__35733_35737 = G__35749;
continue;
} else {
var c_35750 = cljs.core.first.call(null,seq__35730_35744__$1);
sb.append(cljs.compiler.escape_char.call(null,c_35750));

var G__35751 = cljs.core.next.call(null,seq__35730_35744__$1);
var G__35752 = null;
var G__35753 = (0);
var G__35754 = (0);
seq__35730_35734 = G__35751;
chunk__35731_35735 = G__35752;
count__35732_35736 = G__35753;
i__35733_35737 = G__35754;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__29781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29783__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29784__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29785__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29785__auto__,method_table__29781__auto__,prefer_table__29782__auto__,method_cache__29783__auto__,cached_hierarchy__29784__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__34107__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__34107__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__35755_35760 = ast;
var map__35755_35761__$1 = ((((!((map__35755_35760 == null)))?((((map__35755_35760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35755_35760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35755_35760):map__35755_35760);
var env_35762 = cljs.core.get.call(null,map__35755_35761__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_35762))){
var map__35757_35763 = env_35762;
var map__35757_35764__$1 = ((((!((map__35757_35763 == null)))?((((map__35757_35763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35757_35763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35757_35763):map__35757_35763);
var line_35765 = cljs.core.get.call(null,map__35757_35764__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35766 = cljs.core.get.call(null,map__35757_35764__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__35757_35763,map__35757_35764__$1,line_35765,column_35766,map__35755_35760,map__35755_35761__$1,env_35762,val__34107__auto__){
return (function (m){
var minfo = (function (){var G__35759 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__35759,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__35759;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_35765 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__35757_35763,map__35757_35764__$1,line_35765,column_35766,map__35755_35760,map__35755_35761__$1,env_35762,val__34107__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_35766)?(column_35766 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__35757_35763,map__35757_35764__$1,line_35765,column_35766,map__35755_35760,map__35755_35761__$1,env_35762,val__34107__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__35757_35763,map__35757_35764__$1,line_35765,column_35766,map__35755_35760,map__35755_35761__$1,env_35762,val__34107__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__35757_35763,map__35757_35764__$1,line_35765,column_35766,map__35755_35760,map__35755_35761__$1,env_35762,val__34107__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__35757_35763,map__35757_35764__$1,line_35765,column_35766,map__35755_35760,map__35755_35761__$1,env_35762,val__34107__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__34107__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__30002__auto__ = [];
var len__29995__auto___35773 = arguments.length;
var i__29996__auto___35774 = (0);
while(true){
if((i__29996__auto___35774 < len__29995__auto___35773)){
args__30002__auto__.push((arguments[i__29996__auto___35774]));

var G__35775 = (i__29996__auto___35774 + (1));
i__29996__auto___35774 = G__35775;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__35769_35776 = cljs.core.seq.call(null,xs);
var chunk__35770_35777 = null;
var count__35771_35778 = (0);
var i__35772_35779 = (0);
while(true){
if((i__35772_35779 < count__35771_35778)){
var x_35780 = cljs.core._nth.call(null,chunk__35770_35777,i__35772_35779);
if((x_35780 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_35780)){
cljs.compiler.emit.call(null,x_35780);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_35780)){
cljs.core.apply.call(null,cljs.compiler.emits,x_35780);
} else {
if(goog.isFunction(x_35780)){
x_35780.call(null);
} else {
var s_35781 = cljs.core.print_str.call(null,x_35780);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__35769_35776,chunk__35770_35777,count__35771_35778,i__35772_35779,s_35781,x_35780){
return (function (p1__35767_SHARP_){
return (p1__35767_SHARP_ + cljs.core.count.call(null,s_35781));
});})(seq__35769_35776,chunk__35770_35777,count__35771_35778,i__35772_35779,s_35781,x_35780))
);
}

cljs.core.print.call(null,s_35781);

}
}
}
}

var G__35782 = seq__35769_35776;
var G__35783 = chunk__35770_35777;
var G__35784 = count__35771_35778;
var G__35785 = (i__35772_35779 + (1));
seq__35769_35776 = G__35782;
chunk__35770_35777 = G__35783;
count__35771_35778 = G__35784;
i__35772_35779 = G__35785;
continue;
} else {
var temp__4657__auto___35786 = cljs.core.seq.call(null,seq__35769_35776);
if(temp__4657__auto___35786){
var seq__35769_35787__$1 = temp__4657__auto___35786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35769_35787__$1)){
var c__29665__auto___35788 = cljs.core.chunk_first.call(null,seq__35769_35787__$1);
var G__35789 = cljs.core.chunk_rest.call(null,seq__35769_35787__$1);
var G__35790 = c__29665__auto___35788;
var G__35791 = cljs.core.count.call(null,c__29665__auto___35788);
var G__35792 = (0);
seq__35769_35776 = G__35789;
chunk__35770_35777 = G__35790;
count__35771_35778 = G__35791;
i__35772_35779 = G__35792;
continue;
} else {
var x_35793 = cljs.core.first.call(null,seq__35769_35787__$1);
if((x_35793 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_35793)){
cljs.compiler.emit.call(null,x_35793);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_35793)){
cljs.core.apply.call(null,cljs.compiler.emits,x_35793);
} else {
if(goog.isFunction(x_35793)){
x_35793.call(null);
} else {
var s_35794 = cljs.core.print_str.call(null,x_35793);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__35769_35776,chunk__35770_35777,count__35771_35778,i__35772_35779,s_35794,x_35793,seq__35769_35787__$1,temp__4657__auto___35786){
return (function (p1__35767_SHARP_){
return (p1__35767_SHARP_ + cljs.core.count.call(null,s_35794));
});})(seq__35769_35776,chunk__35770_35777,count__35771_35778,i__35772_35779,s_35794,x_35793,seq__35769_35787__$1,temp__4657__auto___35786))
);
}

cljs.core.print.call(null,s_35794);

}
}
}
}

var G__35795 = cljs.core.next.call(null,seq__35769_35787__$1);
var G__35796 = null;
var G__35797 = (0);
var G__35798 = (0);
seq__35769_35776 = G__35795;
chunk__35770_35777 = G__35796;
count__35771_35778 = G__35797;
i__35772_35779 = G__35798;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq35768){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35768));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__30002__auto__ = [];
var len__29995__auto___35804 = arguments.length;
var i__29996__auto___35805 = (0);
while(true){
if((i__29996__auto___35805 < len__29995__auto___35804)){
args__30002__auto__.push((arguments[i__29996__auto___35805]));

var G__35806 = (i__29996__auto___35805 + (1));
i__29996__auto___35805 = G__35806;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((0) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__30003__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_35800_35807 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_35800_35807;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__35801){
var map__35802 = p__35801;
var map__35802__$1 = ((((!((map__35802 == null)))?((((map__35802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35802):map__35802);
var m = map__35802__$1;
var gen_line = cljs.core.get.call(null,map__35802__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq35799){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35799));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__29853__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_35808_35810 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_35809_35811 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_35808_35810,_STAR_print_fn_STAR_35809_35811,sb__29853__auto__){
return (function (x__29854__auto__){
return sb__29853__auto__.append(x__29854__auto__);
});})(_STAR_print_newline_STAR_35808_35810,_STAR_print_fn_STAR_35809_35811,sb__29853__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_35809_35811;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_35808_35810;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__29853__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__29781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29783__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29784__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29785__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29785__auto__,method_table__29781__auto__,prefer_table__29782__auto__,method_cache__29783__auto__,cached_hierarchy__29784__auto__));
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
var vec__35812 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__35812,(0),null);
var flags = cljs.core.nth.call(null,vec__35812,(1),null);
var pattern = cljs.core.nth.call(null,vec__35812,(2),null);
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
var temp__4655__auto__ = (function (){var and__28814__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__28814__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__28814__auto__;
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
var temp__4655__auto__ = (function (){var and__28814__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__28814__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__28814__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__35816){
var map__35817 = p__35816;
var map__35817__$1 = ((((!((map__35817 == null)))?((((map__35817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35817):map__35817);
var ast = map__35817__$1;
var info = cljs.core.get.call(null,map__35817__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__35817__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__35817__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__4655__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__4655__auto__)){
var const_expr = temp__4655__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__35819 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__35819__$1 = ((((!((map__35819 == null)))?((((map__35819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35819):map__35819);
var cenv = map__35819__$1;
var options = cljs.core.get.call(null,map__35819__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__28826__auto__ = js_module_name;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
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
var reserved = (function (){var G__35821 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__28814__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__28814__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__28814__auto__;
}
})())){
return clojure.set.difference.call(null,G__35821,cljs.analyzer.es5_allowed);
} else {
return G__35821;
}
})();
var env__35702__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__35822 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__35822,reserved);
} else {
return G__35822;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__35823){
var map__35824 = p__35823;
var map__35824__$1 = ((((!((map__35824 == null)))?((((map__35824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35824):map__35824);
var arg = map__35824__$1;
var env = cljs.core.get.call(null,map__35824__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__35824__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__35824__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__35824__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__35826 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__35826__$1 = ((((!((map__35826 == null)))?((((map__35826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35826):map__35826);
var name = cljs.core.get.call(null,map__35826__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__35702__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__35828){
var map__35829 = p__35828;
var map__35829__$1 = ((((!((map__35829 == null)))?((((map__35829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35829):map__35829);
var expr = cljs.core.get.call(null,map__35829__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__35829__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__35829__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__35702__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__35831_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__35831_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__35832){
var map__35833 = p__35832;
var map__35833__$1 = ((((!((map__35833 == null)))?((((map__35833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35833):map__35833);
var env = cljs.core.get.call(null,map__35833__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__35833__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__35833__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__35702__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__35835){
var map__35836 = p__35835;
var map__35836__$1 = ((((!((map__35836 == null)))?((((map__35836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35836):map__35836);
var items = cljs.core.get.call(null,map__35836__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__35836__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__35702__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__35838){
var map__35839 = p__35838;
var map__35839__$1 = ((((!((map__35839 == null)))?((((map__35839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35839):map__35839);
var items = cljs.core.get.call(null,map__35839__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__35839__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__35702__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_35841 = cljs.core.count.call(null,items);
if((cnt_35841 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_35841,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__35842_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__35842_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__35843){
var map__35844 = p__35843;
var map__35844__$1 = ((((!((map__35844 == null)))?((((map__35844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35844):map__35844);
var items = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__35702__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__35846){
var map__35847 = p__35846;
var map__35847__$1 = ((((!((map__35847 == null)))?((((map__35847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35847):map__35847);
var items = cljs.core.get.call(null,map__35847__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__35847__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__35847__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__35702__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___35865 = cljs.core.seq.call(null,items);
if(temp__4657__auto___35865){
var items_35866__$1 = temp__4657__auto___35865;
var vec__35849_35867 = items_35866__$1;
var seq__35850_35868 = cljs.core.seq.call(null,vec__35849_35867);
var first__35851_35869 = cljs.core.first.call(null,seq__35850_35868);
var seq__35850_35870__$1 = cljs.core.next.call(null,seq__35850_35868);
var vec__35852_35871 = first__35851_35869;
var k_35872 = cljs.core.nth.call(null,vec__35852_35871,(0),null);
var v_35873 = cljs.core.nth.call(null,vec__35852_35871,(1),null);
var r_35874 = seq__35850_35870__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_35872),"\": ",v_35873);

var seq__35855_35875 = cljs.core.seq.call(null,r_35874);
var chunk__35856_35876 = null;
var count__35857_35877 = (0);
var i__35858_35878 = (0);
while(true){
if((i__35858_35878 < count__35857_35877)){
var vec__35859_35879 = cljs.core._nth.call(null,chunk__35856_35876,i__35858_35878);
var k_35880__$1 = cljs.core.nth.call(null,vec__35859_35879,(0),null);
var v_35881__$1 = cljs.core.nth.call(null,vec__35859_35879,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_35880__$1),"\": ",v_35881__$1);

var G__35882 = seq__35855_35875;
var G__35883 = chunk__35856_35876;
var G__35884 = count__35857_35877;
var G__35885 = (i__35858_35878 + (1));
seq__35855_35875 = G__35882;
chunk__35856_35876 = G__35883;
count__35857_35877 = G__35884;
i__35858_35878 = G__35885;
continue;
} else {
var temp__4657__auto___35886__$1 = cljs.core.seq.call(null,seq__35855_35875);
if(temp__4657__auto___35886__$1){
var seq__35855_35887__$1 = temp__4657__auto___35886__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35855_35887__$1)){
var c__29665__auto___35888 = cljs.core.chunk_first.call(null,seq__35855_35887__$1);
var G__35889 = cljs.core.chunk_rest.call(null,seq__35855_35887__$1);
var G__35890 = c__29665__auto___35888;
var G__35891 = cljs.core.count.call(null,c__29665__auto___35888);
var G__35892 = (0);
seq__35855_35875 = G__35889;
chunk__35856_35876 = G__35890;
count__35857_35877 = G__35891;
i__35858_35878 = G__35892;
continue;
} else {
var vec__35862_35893 = cljs.core.first.call(null,seq__35855_35887__$1);
var k_35894__$1 = cljs.core.nth.call(null,vec__35862_35893,(0),null);
var v_35895__$1 = cljs.core.nth.call(null,vec__35862_35893,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_35894__$1),"\": ",v_35895__$1);

var G__35896 = cljs.core.next.call(null,seq__35855_35887__$1);
var G__35897 = null;
var G__35898 = (0);
var G__35899 = (0);
seq__35855_35875 = G__35896;
chunk__35856_35876 = G__35897;
count__35857_35877 = G__35898;
i__35858_35878 = G__35899;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__35900){
var map__35901 = p__35900;
var map__35901__$1 = ((((!((map__35901 == null)))?((((map__35901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35901):map__35901);
var items = cljs.core.get.call(null,map__35901__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__35901__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__35901__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__35901__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__35702__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__35903){
var map__35904 = p__35903;
var map__35904__$1 = ((((!((map__35904 == null)))?((((map__35904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35904.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35904):map__35904);
var form = cljs.core.get.call(null,map__35904__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__35904__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__35702__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__35906){
var map__35907 = p__35906;
var map__35907__$1 = ((((!((map__35907 == null)))?((((map__35907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35907):map__35907);
var op = cljs.core.get.call(null,map__35907__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__35907__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__35907__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__28826__auto__ = (function (){var and__28814__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__28814__auto__){
var and__28814__auto____$1 = form;
if(cljs.core.truth_(and__28814__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__28814__auto____$1;
}
} else {
return and__28814__auto__;
}
})();
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
var and__28814__auto__ = !((const_expr == null));
if(and__28814__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__28814__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__35909){
var map__35910 = p__35909;
var map__35910__$1 = ((((!((map__35910 == null)))?((((map__35910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35910):map__35910);
var op = cljs.core.get.call(null,map__35910__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__35910__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__35910__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__28826__auto__ = (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
if(or__28826__auto__){
return or__28826__auto__;
} else {
var and__28814__auto__ = !((const_expr == null));
if(and__28814__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__28814__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__28826__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__35912){
var map__35913 = p__35912;
var map__35913__$1 = ((((!((map__35913 == null)))?((((map__35913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35913):map__35913);
var test = cljs.core.get.call(null,map__35913__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__35913__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__35913__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__35913__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__35913__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__28826__auto__ = unchecked;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__35915){
var map__35916 = p__35915;
var map__35916__$1 = ((((!((map__35916 == null)))?((((map__35916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35916):map__35916);
var v = cljs.core.get.call(null,map__35916__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__35916__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__35916__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__35916__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__35916__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__35918_35936 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__35919_35937 = null;
var count__35920_35938 = (0);
var i__35921_35939 = (0);
while(true){
if((i__35921_35939 < count__35920_35938)){
var vec__35922_35940 = cljs.core._nth.call(null,chunk__35919_35937,i__35921_35939);
var ts_35941 = cljs.core.nth.call(null,vec__35922_35940,(0),null);
var then_35942 = cljs.core.nth.call(null,vec__35922_35940,(1),null);
var seq__35925_35943 = cljs.core.seq.call(null,ts_35941);
var chunk__35926_35944 = null;
var count__35927_35945 = (0);
var i__35928_35946 = (0);
while(true){
if((i__35928_35946 < count__35927_35945)){
var test_35947 = cljs.core._nth.call(null,chunk__35926_35944,i__35928_35946);
cljs.compiler.emitln.call(null,"case ",test_35947,":");

var G__35948 = seq__35925_35943;
var G__35949 = chunk__35926_35944;
var G__35950 = count__35927_35945;
var G__35951 = (i__35928_35946 + (1));
seq__35925_35943 = G__35948;
chunk__35926_35944 = G__35949;
count__35927_35945 = G__35950;
i__35928_35946 = G__35951;
continue;
} else {
var temp__4657__auto___35952 = cljs.core.seq.call(null,seq__35925_35943);
if(temp__4657__auto___35952){
var seq__35925_35953__$1 = temp__4657__auto___35952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35925_35953__$1)){
var c__29665__auto___35954 = cljs.core.chunk_first.call(null,seq__35925_35953__$1);
var G__35955 = cljs.core.chunk_rest.call(null,seq__35925_35953__$1);
var G__35956 = c__29665__auto___35954;
var G__35957 = cljs.core.count.call(null,c__29665__auto___35954);
var G__35958 = (0);
seq__35925_35943 = G__35955;
chunk__35926_35944 = G__35956;
count__35927_35945 = G__35957;
i__35928_35946 = G__35958;
continue;
} else {
var test_35959 = cljs.core.first.call(null,seq__35925_35953__$1);
cljs.compiler.emitln.call(null,"case ",test_35959,":");

var G__35960 = cljs.core.next.call(null,seq__35925_35953__$1);
var G__35961 = null;
var G__35962 = (0);
var G__35963 = (0);
seq__35925_35943 = G__35960;
chunk__35926_35944 = G__35961;
count__35927_35945 = G__35962;
i__35928_35946 = G__35963;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_35942);
} else {
cljs.compiler.emitln.call(null,then_35942);
}

cljs.compiler.emitln.call(null,"break;");

var G__35964 = seq__35918_35936;
var G__35965 = chunk__35919_35937;
var G__35966 = count__35920_35938;
var G__35967 = (i__35921_35939 + (1));
seq__35918_35936 = G__35964;
chunk__35919_35937 = G__35965;
count__35920_35938 = G__35966;
i__35921_35939 = G__35967;
continue;
} else {
var temp__4657__auto___35968 = cljs.core.seq.call(null,seq__35918_35936);
if(temp__4657__auto___35968){
var seq__35918_35969__$1 = temp__4657__auto___35968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35918_35969__$1)){
var c__29665__auto___35970 = cljs.core.chunk_first.call(null,seq__35918_35969__$1);
var G__35971 = cljs.core.chunk_rest.call(null,seq__35918_35969__$1);
var G__35972 = c__29665__auto___35970;
var G__35973 = cljs.core.count.call(null,c__29665__auto___35970);
var G__35974 = (0);
seq__35918_35936 = G__35971;
chunk__35919_35937 = G__35972;
count__35920_35938 = G__35973;
i__35921_35939 = G__35974;
continue;
} else {
var vec__35929_35975 = cljs.core.first.call(null,seq__35918_35969__$1);
var ts_35976 = cljs.core.nth.call(null,vec__35929_35975,(0),null);
var then_35977 = cljs.core.nth.call(null,vec__35929_35975,(1),null);
var seq__35932_35978 = cljs.core.seq.call(null,ts_35976);
var chunk__35933_35979 = null;
var count__35934_35980 = (0);
var i__35935_35981 = (0);
while(true){
if((i__35935_35981 < count__35934_35980)){
var test_35982 = cljs.core._nth.call(null,chunk__35933_35979,i__35935_35981);
cljs.compiler.emitln.call(null,"case ",test_35982,":");

var G__35983 = seq__35932_35978;
var G__35984 = chunk__35933_35979;
var G__35985 = count__35934_35980;
var G__35986 = (i__35935_35981 + (1));
seq__35932_35978 = G__35983;
chunk__35933_35979 = G__35984;
count__35934_35980 = G__35985;
i__35935_35981 = G__35986;
continue;
} else {
var temp__4657__auto___35987__$1 = cljs.core.seq.call(null,seq__35932_35978);
if(temp__4657__auto___35987__$1){
var seq__35932_35988__$1 = temp__4657__auto___35987__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35932_35988__$1)){
var c__29665__auto___35989 = cljs.core.chunk_first.call(null,seq__35932_35988__$1);
var G__35990 = cljs.core.chunk_rest.call(null,seq__35932_35988__$1);
var G__35991 = c__29665__auto___35989;
var G__35992 = cljs.core.count.call(null,c__29665__auto___35989);
var G__35993 = (0);
seq__35932_35978 = G__35990;
chunk__35933_35979 = G__35991;
count__35934_35980 = G__35992;
i__35935_35981 = G__35993;
continue;
} else {
var test_35994 = cljs.core.first.call(null,seq__35932_35988__$1);
cljs.compiler.emitln.call(null,"case ",test_35994,":");

var G__35995 = cljs.core.next.call(null,seq__35932_35988__$1);
var G__35996 = null;
var G__35997 = (0);
var G__35998 = (0);
seq__35932_35978 = G__35995;
chunk__35933_35979 = G__35996;
count__35934_35980 = G__35997;
i__35935_35981 = G__35998;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_35977);
} else {
cljs.compiler.emitln.call(null,then_35977);
}

cljs.compiler.emitln.call(null,"break;");

var G__35999 = cljs.core.next.call(null,seq__35918_35969__$1);
var G__36000 = null;
var G__36001 = (0);
var G__36002 = (0);
seq__35918_35936 = G__35999;
chunk__35919_35937 = G__36000;
count__35920_35938 = G__36001;
i__35921_35939 = G__36002;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__36003){
var map__36004 = p__36003;
var map__36004__$1 = ((((!((map__36004 == null)))?((((map__36004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36004):map__36004);
var throw$ = cljs.core.get.call(null,map__36004__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__36004__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__36007 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__36007,(0),null);
var rstr = cljs.core.nth.call(null,vec__36007,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__36007,fstr,rstr,ret_t,axstr){
return (function (p1__36006_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__36006_SHARP_);
});})(idx,vec__36007,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__36010 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36010),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__36010;
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
return (function (p1__36011_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__36011_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__36012 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__36013 = cljs.core.seq.call(null,vec__36012);
var first__36014 = cljs.core.first.call(null,seq__36013);
var seq__36013__$1 = cljs.core.next.call(null,seq__36013);
var p = first__36014;
var first__36014__$1 = cljs.core.first.call(null,seq__36013__$1);
var seq__36013__$2 = cljs.core.next.call(null,seq__36013__$1);
var ts = first__36014__$1;
var first__36014__$2 = cljs.core.first.call(null,seq__36013__$2);
var seq__36013__$3 = cljs.core.next.call(null,seq__36013__$2);
var n = first__36014__$2;
var xs = seq__36013__$3;
if(cljs.core.truth_((function (){var and__28814__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__28814__auto__){
var and__28814__auto____$1 = ts;
if(cljs.core.truth_(and__28814__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__28814__auto____$1;
}
} else {
return and__28814__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__36015 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__36016 = cljs.core.seq.call(null,vec__36015);
var first__36017 = cljs.core.first.call(null,seq__36016);
var seq__36016__$1 = cljs.core.next.call(null,seq__36016);
var p = first__36017;
var first__36017__$1 = cljs.core.first.call(null,seq__36016__$1);
var seq__36016__$2 = cljs.core.next.call(null,seq__36016__$1);
var ts = first__36017__$1;
var xs = seq__36016__$2;
if(cljs.core.truth_((function (){var and__28814__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__28814__auto__){
var and__28814__auto____$1 = ts;
if(cljs.core.truth_(and__28814__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__28814__auto____$1;
}
} else {
return and__28814__auto__;
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
var G__36020 = arguments.length;
switch (G__36020) {
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
var vec__36028 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__36018_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__36018_SHARP_);
} else {
return p1__36018_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__36029 = cljs.core.seq.call(null,vec__36028);
var first__36030 = cljs.core.first.call(null,seq__36029);
var seq__36029__$1 = cljs.core.next.call(null,seq__36029);
var x = first__36030;
var ys = seq__36029__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__36031 = cljs.core.seq.call(null,ys);
var chunk__36032 = null;
var count__36033 = (0);
var i__36034 = (0);
while(true){
if((i__36034 < count__36033)){
var next_line = cljs.core._nth.call(null,chunk__36032,i__36034);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__36040 = seq__36031;
var G__36041 = chunk__36032;
var G__36042 = count__36033;
var G__36043 = (i__36034 + (1));
seq__36031 = G__36040;
chunk__36032 = G__36041;
count__36033 = G__36042;
i__36034 = G__36043;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36031);
if(temp__4657__auto__){
var seq__36031__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36031__$1)){
var c__29665__auto__ = cljs.core.chunk_first.call(null,seq__36031__$1);
var G__36044 = cljs.core.chunk_rest.call(null,seq__36031__$1);
var G__36045 = c__29665__auto__;
var G__36046 = cljs.core.count.call(null,c__29665__auto__);
var G__36047 = (0);
seq__36031 = G__36044;
chunk__36032 = G__36045;
count__36033 = G__36046;
i__36034 = G__36047;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__36031__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__36048 = cljs.core.next.call(null,seq__36031__$1);
var G__36049 = null;
var G__36050 = (0);
var G__36051 = (0);
seq__36031 = G__36048;
chunk__36032 = G__36049;
count__36033 = G__36050;
i__36034 = G__36051;
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

var seq__36035_36052 = cljs.core.seq.call(null,docs__$2);
var chunk__36036_36053 = null;
var count__36037_36054 = (0);
var i__36038_36055 = (0);
while(true){
if((i__36038_36055 < count__36037_36054)){
var e_36056 = cljs.core._nth.call(null,chunk__36036_36053,i__36038_36055);
if(cljs.core.truth_(e_36056)){
print_comment_lines.call(null,e_36056);
} else {
}

var G__36057 = seq__36035_36052;
var G__36058 = chunk__36036_36053;
var G__36059 = count__36037_36054;
var G__36060 = (i__36038_36055 + (1));
seq__36035_36052 = G__36057;
chunk__36036_36053 = G__36058;
count__36037_36054 = G__36059;
i__36038_36055 = G__36060;
continue;
} else {
var temp__4657__auto___36061 = cljs.core.seq.call(null,seq__36035_36052);
if(temp__4657__auto___36061){
var seq__36035_36062__$1 = temp__4657__auto___36061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36035_36062__$1)){
var c__29665__auto___36063 = cljs.core.chunk_first.call(null,seq__36035_36062__$1);
var G__36064 = cljs.core.chunk_rest.call(null,seq__36035_36062__$1);
var G__36065 = c__29665__auto___36063;
var G__36066 = cljs.core.count.call(null,c__29665__auto___36063);
var G__36067 = (0);
seq__36035_36052 = G__36064;
chunk__36036_36053 = G__36065;
count__36037_36054 = G__36066;
i__36038_36055 = G__36067;
continue;
} else {
var e_36068 = cljs.core.first.call(null,seq__36035_36062__$1);
if(cljs.core.truth_(e_36068)){
print_comment_lines.call(null,e_36068);
} else {
}

var G__36069 = cljs.core.next.call(null,seq__36035_36062__$1);
var G__36070 = null;
var G__36071 = (0);
var G__36072 = (0);
seq__36035_36052 = G__36069;
chunk__36036_36053 = G__36070;
count__36037_36054 = G__36071;
i__36038_36055 = G__36072;
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
var and__28814__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__36074_SHARP_){
return goog.string.startsWith(p1__36074_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__28814__auto__)){
var and__28814__auto____$1 = opts;
if(cljs.core.truth_(and__28814__auto____$1)){
var and__28814__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__28814__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__28814__auto____$2;
}
} else {
return and__28814__auto____$1;
}
} else {
return and__28814__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__36075){
var map__36076 = p__36075;
var map__36076__$1 = ((((!((map__36076 == null)))?((((map__36076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36076):map__36076);
var name = cljs.core.get.call(null,map__36076__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__36076__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__36076__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__36076__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__36076__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__36076__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__36076__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__36076__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__36076__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__28826__auto__ = init;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
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

if(cljs.core.truth_((function (){var and__28814__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__28814__auto__){
return test;
} else {
return and__28814__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__36078){
var map__36079 = p__36078;
var map__36079__$1 = ((((!((map__36079 == null)))?((((map__36079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36079):map__36079);
var name = cljs.core.get.call(null,map__36079__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__36079__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__36079__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__36081_36099 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__36082_36100 = null;
var count__36083_36101 = (0);
var i__36084_36102 = (0);
while(true){
if((i__36084_36102 < count__36083_36101)){
var vec__36085_36103 = cljs.core._nth.call(null,chunk__36082_36100,i__36084_36102);
var i_36104 = cljs.core.nth.call(null,vec__36085_36103,(0),null);
var param_36105 = cljs.core.nth.call(null,vec__36085_36103,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_36105);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__36106 = seq__36081_36099;
var G__36107 = chunk__36082_36100;
var G__36108 = count__36083_36101;
var G__36109 = (i__36084_36102 + (1));
seq__36081_36099 = G__36106;
chunk__36082_36100 = G__36107;
count__36083_36101 = G__36108;
i__36084_36102 = G__36109;
continue;
} else {
var temp__4657__auto___36110 = cljs.core.seq.call(null,seq__36081_36099);
if(temp__4657__auto___36110){
var seq__36081_36111__$1 = temp__4657__auto___36110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36081_36111__$1)){
var c__29665__auto___36112 = cljs.core.chunk_first.call(null,seq__36081_36111__$1);
var G__36113 = cljs.core.chunk_rest.call(null,seq__36081_36111__$1);
var G__36114 = c__29665__auto___36112;
var G__36115 = cljs.core.count.call(null,c__29665__auto___36112);
var G__36116 = (0);
seq__36081_36099 = G__36113;
chunk__36082_36100 = G__36114;
count__36083_36101 = G__36115;
i__36084_36102 = G__36116;
continue;
} else {
var vec__36088_36117 = cljs.core.first.call(null,seq__36081_36111__$1);
var i_36118 = cljs.core.nth.call(null,vec__36088_36117,(0),null);
var param_36119 = cljs.core.nth.call(null,vec__36088_36117,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_36119);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__36120 = cljs.core.next.call(null,seq__36081_36111__$1);
var G__36121 = null;
var G__36122 = (0);
var G__36123 = (0);
seq__36081_36099 = G__36120;
chunk__36082_36100 = G__36121;
count__36083_36101 = G__36122;
i__36084_36102 = G__36123;
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

var seq__36091_36124 = cljs.core.seq.call(null,params);
var chunk__36092_36125 = null;
var count__36093_36126 = (0);
var i__36094_36127 = (0);
while(true){
if((i__36094_36127 < count__36093_36126)){
var param_36128 = cljs.core._nth.call(null,chunk__36092_36125,i__36094_36127);
cljs.compiler.emit.call(null,param_36128);

if(cljs.core._EQ_.call(null,param_36128,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__36129 = seq__36091_36124;
var G__36130 = chunk__36092_36125;
var G__36131 = count__36093_36126;
var G__36132 = (i__36094_36127 + (1));
seq__36091_36124 = G__36129;
chunk__36092_36125 = G__36130;
count__36093_36126 = G__36131;
i__36094_36127 = G__36132;
continue;
} else {
var temp__4657__auto___36133 = cljs.core.seq.call(null,seq__36091_36124);
if(temp__4657__auto___36133){
var seq__36091_36134__$1 = temp__4657__auto___36133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36091_36134__$1)){
var c__29665__auto___36135 = cljs.core.chunk_first.call(null,seq__36091_36134__$1);
var G__36136 = cljs.core.chunk_rest.call(null,seq__36091_36134__$1);
var G__36137 = c__29665__auto___36135;
var G__36138 = cljs.core.count.call(null,c__29665__auto___36135);
var G__36139 = (0);
seq__36091_36124 = G__36136;
chunk__36092_36125 = G__36137;
count__36093_36126 = G__36138;
i__36094_36127 = G__36139;
continue;
} else {
var param_36140 = cljs.core.first.call(null,seq__36091_36134__$1);
cljs.compiler.emit.call(null,param_36140);

if(cljs.core._EQ_.call(null,param_36140,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__36141 = cljs.core.next.call(null,seq__36091_36134__$1);
var G__36142 = null;
var G__36143 = (0);
var G__36144 = (0);
seq__36091_36124 = G__36141;
chunk__36092_36125 = G__36142;
count__36093_36126 = G__36143;
i__36094_36127 = G__36144;
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

var seq__36095_36145 = cljs.core.seq.call(null,params);
var chunk__36096_36146 = null;
var count__36097_36147 = (0);
var i__36098_36148 = (0);
while(true){
if((i__36098_36148 < count__36097_36147)){
var param_36149 = cljs.core._nth.call(null,chunk__36096_36146,i__36098_36148);
cljs.compiler.emit.call(null,param_36149);

if(cljs.core._EQ_.call(null,param_36149,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__36150 = seq__36095_36145;
var G__36151 = chunk__36096_36146;
var G__36152 = count__36097_36147;
var G__36153 = (i__36098_36148 + (1));
seq__36095_36145 = G__36150;
chunk__36096_36146 = G__36151;
count__36097_36147 = G__36152;
i__36098_36148 = G__36153;
continue;
} else {
var temp__4657__auto___36154 = cljs.core.seq.call(null,seq__36095_36145);
if(temp__4657__auto___36154){
var seq__36095_36155__$1 = temp__4657__auto___36154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36095_36155__$1)){
var c__29665__auto___36156 = cljs.core.chunk_first.call(null,seq__36095_36155__$1);
var G__36157 = cljs.core.chunk_rest.call(null,seq__36095_36155__$1);
var G__36158 = c__29665__auto___36156;
var G__36159 = cljs.core.count.call(null,c__29665__auto___36156);
var G__36160 = (0);
seq__36095_36145 = G__36157;
chunk__36096_36146 = G__36158;
count__36097_36147 = G__36159;
i__36098_36148 = G__36160;
continue;
} else {
var param_36161 = cljs.core.first.call(null,seq__36095_36155__$1);
cljs.compiler.emit.call(null,param_36161);

if(cljs.core._EQ_.call(null,param_36161,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__36162 = cljs.core.next.call(null,seq__36095_36155__$1);
var G__36163 = null;
var G__36164 = (0);
var G__36165 = (0);
seq__36095_36145 = G__36162;
chunk__36096_36146 = G__36163;
count__36097_36147 = G__36164;
i__36098_36148 = G__36165;
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
var seq__36166 = cljs.core.seq.call(null,params);
var chunk__36167 = null;
var count__36168 = (0);
var i__36169 = (0);
while(true){
if((i__36169 < count__36168)){
var param = cljs.core._nth.call(null,chunk__36167,i__36169);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__36170 = seq__36166;
var G__36171 = chunk__36167;
var G__36172 = count__36168;
var G__36173 = (i__36169 + (1));
seq__36166 = G__36170;
chunk__36167 = G__36171;
count__36168 = G__36172;
i__36169 = G__36173;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36166);
if(temp__4657__auto__){
var seq__36166__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36166__$1)){
var c__29665__auto__ = cljs.core.chunk_first.call(null,seq__36166__$1);
var G__36174 = cljs.core.chunk_rest.call(null,seq__36166__$1);
var G__36175 = c__29665__auto__;
var G__36176 = cljs.core.count.call(null,c__29665__auto__);
var G__36177 = (0);
seq__36166 = G__36174;
chunk__36167 = G__36175;
count__36168 = G__36176;
i__36169 = G__36177;
continue;
} else {
var param = cljs.core.first.call(null,seq__36166__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__36178 = cljs.core.next.call(null,seq__36166__$1);
var G__36179 = null;
var G__36180 = (0);
var G__36181 = (0);
seq__36166 = G__36178;
chunk__36167 = G__36179;
count__36168 = G__36180;
i__36169 = G__36181;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__36182){
var map__36183 = p__36182;
var map__36183__$1 = ((((!((map__36183 == null)))?((((map__36183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36183):map__36183);
var type = cljs.core.get.call(null,map__36183__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__36183__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__36183__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__36183__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__36183__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__36183__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__36183__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__36183__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__35702__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__36185){
var map__36186 = p__36185;
var map__36186__$1 = ((((!((map__36186 == null)))?((((map__36186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36186):map__36186);
var f = map__36186__$1;
var type = cljs.core.get.call(null,map__36186__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__36186__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__36186__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__36186__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__36186__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__36186__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__36186__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__36186__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__35702__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_36196__$1 = (function (){var or__28826__auto__ = name;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_36197 = cljs.compiler.munge.call(null,name_36196__$1);
var delegate_name_36198 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_36197),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_36198," = function (");

var seq__36188_36199 = cljs.core.seq.call(null,params);
var chunk__36189_36200 = null;
var count__36190_36201 = (0);
var i__36191_36202 = (0);
while(true){
if((i__36191_36202 < count__36190_36201)){
var param_36203 = cljs.core._nth.call(null,chunk__36189_36200,i__36191_36202);
cljs.compiler.emit.call(null,param_36203);

if(cljs.core._EQ_.call(null,param_36203,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__36204 = seq__36188_36199;
var G__36205 = chunk__36189_36200;
var G__36206 = count__36190_36201;
var G__36207 = (i__36191_36202 + (1));
seq__36188_36199 = G__36204;
chunk__36189_36200 = G__36205;
count__36190_36201 = G__36206;
i__36191_36202 = G__36207;
continue;
} else {
var temp__4657__auto___36208 = cljs.core.seq.call(null,seq__36188_36199);
if(temp__4657__auto___36208){
var seq__36188_36209__$1 = temp__4657__auto___36208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36188_36209__$1)){
var c__29665__auto___36210 = cljs.core.chunk_first.call(null,seq__36188_36209__$1);
var G__36211 = cljs.core.chunk_rest.call(null,seq__36188_36209__$1);
var G__36212 = c__29665__auto___36210;
var G__36213 = cljs.core.count.call(null,c__29665__auto___36210);
var G__36214 = (0);
seq__36188_36199 = G__36211;
chunk__36189_36200 = G__36212;
count__36190_36201 = G__36213;
i__36191_36202 = G__36214;
continue;
} else {
var param_36215 = cljs.core.first.call(null,seq__36188_36209__$1);
cljs.compiler.emit.call(null,param_36215);

if(cljs.core._EQ_.call(null,param_36215,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__36216 = cljs.core.next.call(null,seq__36188_36209__$1);
var G__36217 = null;
var G__36218 = (0);
var G__36219 = (0);
seq__36188_36199 = G__36216;
chunk__36189_36200 = G__36217;
count__36190_36201 = G__36218;
i__36191_36202 = G__36219;
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

cljs.compiler.emitln.call(null,"var ",mname_36197," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_36220 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_36220,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_36198,".call(this,");

var seq__36192_36221 = cljs.core.seq.call(null,params);
var chunk__36193_36222 = null;
var count__36194_36223 = (0);
var i__36195_36224 = (0);
while(true){
if((i__36195_36224 < count__36194_36223)){
var param_36225 = cljs.core._nth.call(null,chunk__36193_36222,i__36195_36224);
cljs.compiler.emit.call(null,param_36225);

if(cljs.core._EQ_.call(null,param_36225,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__36226 = seq__36192_36221;
var G__36227 = chunk__36193_36222;
var G__36228 = count__36194_36223;
var G__36229 = (i__36195_36224 + (1));
seq__36192_36221 = G__36226;
chunk__36193_36222 = G__36227;
count__36194_36223 = G__36228;
i__36195_36224 = G__36229;
continue;
} else {
var temp__4657__auto___36230 = cljs.core.seq.call(null,seq__36192_36221);
if(temp__4657__auto___36230){
var seq__36192_36231__$1 = temp__4657__auto___36230;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36192_36231__$1)){
var c__29665__auto___36232 = cljs.core.chunk_first.call(null,seq__36192_36231__$1);
var G__36233 = cljs.core.chunk_rest.call(null,seq__36192_36231__$1);
var G__36234 = c__29665__auto___36232;
var G__36235 = cljs.core.count.call(null,c__29665__auto___36232);
var G__36236 = (0);
seq__36192_36221 = G__36233;
chunk__36193_36222 = G__36234;
count__36194_36223 = G__36235;
i__36195_36224 = G__36236;
continue;
} else {
var param_36237 = cljs.core.first.call(null,seq__36192_36231__$1);
cljs.compiler.emit.call(null,param_36237);

if(cljs.core._EQ_.call(null,param_36237,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__36238 = cljs.core.next.call(null,seq__36192_36231__$1);
var G__36239 = null;
var G__36240 = (0);
var G__36241 = (0);
seq__36192_36221 = G__36238;
chunk__36193_36222 = G__36239;
count__36194_36223 = G__36240;
i__36195_36224 = G__36241;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_36197,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_36197,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_36196__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_36197,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_36198,";");

cljs.compiler.emitln.call(null,"return ",mname_36197,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__36245){
var map__36246 = p__36245;
var map__36246__$1 = ((((!((map__36246 == null)))?((((map__36246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36246.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36246):map__36246);
var name = cljs.core.get.call(null,map__36246__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__36246__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__36246__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__36246__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__36246__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__36246__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__36246__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__36246,map__36246__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__36242_SHARP_){
var and__28814__auto__ = p1__36242_SHARP_;
if(cljs.core.truth_(and__28814__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__36242_SHARP_));
} else {
return and__28814__auto__;
}
});})(map__36246,map__36246__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_36281__$1 = (function (){var or__28826__auto__ = name;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_36282 = cljs.compiler.munge.call(null,name_36281__$1);
var maxparams_36283 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_36284 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_36281__$1,mname_36282,maxparams_36283,loop_locals,map__36246,map__36246__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_36282),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_36281__$1,mname_36282,maxparams_36283,loop_locals,map__36246,map__36246__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_36285 = cljs.core.sort_by.call(null,((function (name_36281__$1,mname_36282,maxparams_36283,mmap_36284,loop_locals,map__36246,map__36246__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__36243_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__36243_SHARP_)));
});})(name_36281__$1,mname_36282,maxparams_36283,mmap_36284,loop_locals,map__36246,map__36246__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_36284));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_36282," = null;");

var seq__36248_36286 = cljs.core.seq.call(null,ms_36285);
var chunk__36249_36287 = null;
var count__36250_36288 = (0);
var i__36251_36289 = (0);
while(true){
if((i__36251_36289 < count__36250_36288)){
var vec__36252_36290 = cljs.core._nth.call(null,chunk__36249_36287,i__36251_36289);
var n_36291 = cljs.core.nth.call(null,vec__36252_36290,(0),null);
var meth_36292 = cljs.core.nth.call(null,vec__36252_36290,(1),null);
cljs.compiler.emits.call(null,"var ",n_36291," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_36292))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_36292);
} else {
cljs.compiler.emit_fn_method.call(null,meth_36292);
}

cljs.compiler.emitln.call(null,";");

var G__36293 = seq__36248_36286;
var G__36294 = chunk__36249_36287;
var G__36295 = count__36250_36288;
var G__36296 = (i__36251_36289 + (1));
seq__36248_36286 = G__36293;
chunk__36249_36287 = G__36294;
count__36250_36288 = G__36295;
i__36251_36289 = G__36296;
continue;
} else {
var temp__4657__auto___36297 = cljs.core.seq.call(null,seq__36248_36286);
if(temp__4657__auto___36297){
var seq__36248_36298__$1 = temp__4657__auto___36297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36248_36298__$1)){
var c__29665__auto___36299 = cljs.core.chunk_first.call(null,seq__36248_36298__$1);
var G__36300 = cljs.core.chunk_rest.call(null,seq__36248_36298__$1);
var G__36301 = c__29665__auto___36299;
var G__36302 = cljs.core.count.call(null,c__29665__auto___36299);
var G__36303 = (0);
seq__36248_36286 = G__36300;
chunk__36249_36287 = G__36301;
count__36250_36288 = G__36302;
i__36251_36289 = G__36303;
continue;
} else {
var vec__36255_36304 = cljs.core.first.call(null,seq__36248_36298__$1);
var n_36305 = cljs.core.nth.call(null,vec__36255_36304,(0),null);
var meth_36306 = cljs.core.nth.call(null,vec__36255_36304,(1),null);
cljs.compiler.emits.call(null,"var ",n_36305," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_36306))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_36306);
} else {
cljs.compiler.emit_fn_method.call(null,meth_36306);
}

cljs.compiler.emitln.call(null,";");

var G__36307 = cljs.core.next.call(null,seq__36248_36298__$1);
var G__36308 = null;
var G__36309 = (0);
var G__36310 = (0);
seq__36248_36286 = G__36307;
chunk__36249_36287 = G__36308;
count__36250_36288 = G__36309;
i__36251_36289 = G__36310;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_36282," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_36283),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_36283)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_36283));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__36258_36311 = cljs.core.seq.call(null,ms_36285);
var chunk__36259_36312 = null;
var count__36260_36313 = (0);
var i__36261_36314 = (0);
while(true){
if((i__36261_36314 < count__36260_36313)){
var vec__36262_36315 = cljs.core._nth.call(null,chunk__36259_36312,i__36261_36314);
var n_36316 = cljs.core.nth.call(null,vec__36262_36315,(0),null);
var meth_36317 = cljs.core.nth.call(null,vec__36262_36315,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_36317))){
cljs.compiler.emitln.call(null,"default:");

var restarg_36318 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_36318," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_36319 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_36318," = new cljs.core.IndexedSeq(",a_36319,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_36316,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_36283)),(((cljs.core.count.call(null,maxparams_36283) > (1)))?", ":null),restarg_36318,");");
} else {
var pcnt_36320 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_36317));
cljs.compiler.emitln.call(null,"case ",pcnt_36320,":");

cljs.compiler.emitln.call(null,"return ",n_36316,".call(this",(((pcnt_36320 === (0)))?null:cljs.core._conj.call(null,(function (){var x__29688__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_36320,maxparams_36283));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),",")),");");
}

var G__36321 = seq__36258_36311;
var G__36322 = chunk__36259_36312;
var G__36323 = count__36260_36313;
var G__36324 = (i__36261_36314 + (1));
seq__36258_36311 = G__36321;
chunk__36259_36312 = G__36322;
count__36260_36313 = G__36323;
i__36261_36314 = G__36324;
continue;
} else {
var temp__4657__auto___36325 = cljs.core.seq.call(null,seq__36258_36311);
if(temp__4657__auto___36325){
var seq__36258_36326__$1 = temp__4657__auto___36325;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36258_36326__$1)){
var c__29665__auto___36327 = cljs.core.chunk_first.call(null,seq__36258_36326__$1);
var G__36328 = cljs.core.chunk_rest.call(null,seq__36258_36326__$1);
var G__36329 = c__29665__auto___36327;
var G__36330 = cljs.core.count.call(null,c__29665__auto___36327);
var G__36331 = (0);
seq__36258_36311 = G__36328;
chunk__36259_36312 = G__36329;
count__36260_36313 = G__36330;
i__36261_36314 = G__36331;
continue;
} else {
var vec__36265_36332 = cljs.core.first.call(null,seq__36258_36326__$1);
var n_36333 = cljs.core.nth.call(null,vec__36265_36332,(0),null);
var meth_36334 = cljs.core.nth.call(null,vec__36265_36332,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_36334))){
cljs.compiler.emitln.call(null,"default:");

var restarg_36335 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_36335," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_36336 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_36335," = new cljs.core.IndexedSeq(",a_36336,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_36333,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_36283)),(((cljs.core.count.call(null,maxparams_36283) > (1)))?", ":null),restarg_36335,");");
} else {
var pcnt_36337 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_36334));
cljs.compiler.emitln.call(null,"case ",pcnt_36337,":");

cljs.compiler.emitln.call(null,"return ",n_36333,".call(this",(((pcnt_36337 === (0)))?null:cljs.core._conj.call(null,(function (){var x__29688__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_36337,maxparams_36283));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),",")),");");
}

var G__36338 = cljs.core.next.call(null,seq__36258_36326__$1);
var G__36339 = null;
var G__36340 = (0);
var G__36341 = (0);
seq__36258_36311 = G__36338;
chunk__36259_36312 = G__36339;
count__36260_36313 = G__36340;
i__36261_36314 = G__36341;
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
cljs.compiler.emitln.call(null,mname_36282,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_36282,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_36281__$1,mname_36282,maxparams_36283,mmap_36284,ms_36285,loop_locals,map__36246,map__36246__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__36244_SHARP_){
var vec__36268 = p1__36244_SHARP_;
var n = cljs.core.nth.call(null,vec__36268,(0),null);
var m = cljs.core.nth.call(null,vec__36268,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_36281__$1,mname_36282,maxparams_36283,mmap_36284,ms_36285,loop_locals,map__36246,map__36246__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_36285),".cljs$lang$applyTo;");
} else {
}

var seq__36271_36342 = cljs.core.seq.call(null,ms_36285);
var chunk__36272_36343 = null;
var count__36273_36344 = (0);
var i__36274_36345 = (0);
while(true){
if((i__36274_36345 < count__36273_36344)){
var vec__36275_36346 = cljs.core._nth.call(null,chunk__36272_36343,i__36274_36345);
var n_36347 = cljs.core.nth.call(null,vec__36275_36346,(0),null);
var meth_36348 = cljs.core.nth.call(null,vec__36275_36346,(1),null);
var c_36349 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_36348));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_36348))){
cljs.compiler.emitln.call(null,mname_36282,".cljs$core$IFn$_invoke$arity$variadic = ",n_36347,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_36282,".cljs$core$IFn$_invoke$arity$",c_36349," = ",n_36347,";");
}

var G__36350 = seq__36271_36342;
var G__36351 = chunk__36272_36343;
var G__36352 = count__36273_36344;
var G__36353 = (i__36274_36345 + (1));
seq__36271_36342 = G__36350;
chunk__36272_36343 = G__36351;
count__36273_36344 = G__36352;
i__36274_36345 = G__36353;
continue;
} else {
var temp__4657__auto___36354 = cljs.core.seq.call(null,seq__36271_36342);
if(temp__4657__auto___36354){
var seq__36271_36355__$1 = temp__4657__auto___36354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36271_36355__$1)){
var c__29665__auto___36356 = cljs.core.chunk_first.call(null,seq__36271_36355__$1);
var G__36357 = cljs.core.chunk_rest.call(null,seq__36271_36355__$1);
var G__36358 = c__29665__auto___36356;
var G__36359 = cljs.core.count.call(null,c__29665__auto___36356);
var G__36360 = (0);
seq__36271_36342 = G__36357;
chunk__36272_36343 = G__36358;
count__36273_36344 = G__36359;
i__36274_36345 = G__36360;
continue;
} else {
var vec__36278_36361 = cljs.core.first.call(null,seq__36271_36355__$1);
var n_36362 = cljs.core.nth.call(null,vec__36278_36361,(0),null);
var meth_36363 = cljs.core.nth.call(null,vec__36278_36361,(1),null);
var c_36364 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_36363));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_36363))){
cljs.compiler.emitln.call(null,mname_36282,".cljs$core$IFn$_invoke$arity$variadic = ",n_36362,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_36282,".cljs$core$IFn$_invoke$arity$",c_36364," = ",n_36362,";");
}

var G__36365 = cljs.core.next.call(null,seq__36271_36355__$1);
var G__36366 = null;
var G__36367 = (0);
var G__36368 = (0);
seq__36271_36342 = G__36365;
chunk__36272_36343 = G__36366;
count__36273_36344 = G__36367;
i__36274_36345 = G__36368;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_36282,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__36369){
var map__36370 = p__36369;
var map__36370__$1 = ((((!((map__36370 == null)))?((((map__36370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36370):map__36370);
var statements = cljs.core.get.call(null,map__36370__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__36370__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__36370__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__28814__auto__ = statements;
if(cljs.core.truth_(and__28814__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__28814__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__36372_36376 = cljs.core.seq.call(null,statements);
var chunk__36373_36377 = null;
var count__36374_36378 = (0);
var i__36375_36379 = (0);
while(true){
if((i__36375_36379 < count__36374_36378)){
var s_36380 = cljs.core._nth.call(null,chunk__36373_36377,i__36375_36379);
cljs.compiler.emitln.call(null,s_36380);

var G__36381 = seq__36372_36376;
var G__36382 = chunk__36373_36377;
var G__36383 = count__36374_36378;
var G__36384 = (i__36375_36379 + (1));
seq__36372_36376 = G__36381;
chunk__36373_36377 = G__36382;
count__36374_36378 = G__36383;
i__36375_36379 = G__36384;
continue;
} else {
var temp__4657__auto___36385 = cljs.core.seq.call(null,seq__36372_36376);
if(temp__4657__auto___36385){
var seq__36372_36386__$1 = temp__4657__auto___36385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36372_36386__$1)){
var c__29665__auto___36387 = cljs.core.chunk_first.call(null,seq__36372_36386__$1);
var G__36388 = cljs.core.chunk_rest.call(null,seq__36372_36386__$1);
var G__36389 = c__29665__auto___36387;
var G__36390 = cljs.core.count.call(null,c__29665__auto___36387);
var G__36391 = (0);
seq__36372_36376 = G__36388;
chunk__36373_36377 = G__36389;
count__36374_36378 = G__36390;
i__36375_36379 = G__36391;
continue;
} else {
var s_36392 = cljs.core.first.call(null,seq__36372_36386__$1);
cljs.compiler.emitln.call(null,s_36392);

var G__36393 = cljs.core.next.call(null,seq__36372_36386__$1);
var G__36394 = null;
var G__36395 = (0);
var G__36396 = (0);
seq__36372_36376 = G__36393;
chunk__36373_36377 = G__36394;
count__36374_36378 = G__36395;
i__36375_36379 = G__36396;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__28814__auto__ = statements;
if(cljs.core.truth_(and__28814__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__28814__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__36397){
var map__36398 = p__36397;
var map__36398__$1 = ((((!((map__36398 == null)))?((((map__36398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36398.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36398):map__36398);
var env = cljs.core.get.call(null,map__36398__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__36398__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__36398__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__36398__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__36398__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__28826__auto__ = name;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__36400,is_loop){
var map__36401 = p__36400;
var map__36401__$1 = ((((!((map__36401 == null)))?((((map__36401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36401):map__36401);
var bindings = cljs.core.get.call(null,map__36401__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__36401__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__36401__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_36403_36412 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_36403_36412,context,map__36401,map__36401__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_36403_36412,context,map__36401,map__36401__$1,bindings,expr,env))
,bindings):null));

try{var seq__36404_36413 = cljs.core.seq.call(null,bindings);
var chunk__36405_36414 = null;
var count__36406_36415 = (0);
var i__36407_36416 = (0);
while(true){
if((i__36407_36416 < count__36406_36415)){
var map__36408_36417 = cljs.core._nth.call(null,chunk__36405_36414,i__36407_36416);
var map__36408_36418__$1 = ((((!((map__36408_36417 == null)))?((((map__36408_36417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36408_36417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36408_36417):map__36408_36417);
var binding_36419 = map__36408_36418__$1;
var init_36420 = cljs.core.get.call(null,map__36408_36418__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_36419);

cljs.compiler.emitln.call(null," = ",init_36420,";");

var G__36421 = seq__36404_36413;
var G__36422 = chunk__36405_36414;
var G__36423 = count__36406_36415;
var G__36424 = (i__36407_36416 + (1));
seq__36404_36413 = G__36421;
chunk__36405_36414 = G__36422;
count__36406_36415 = G__36423;
i__36407_36416 = G__36424;
continue;
} else {
var temp__4657__auto___36425 = cljs.core.seq.call(null,seq__36404_36413);
if(temp__4657__auto___36425){
var seq__36404_36426__$1 = temp__4657__auto___36425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36404_36426__$1)){
var c__29665__auto___36427 = cljs.core.chunk_first.call(null,seq__36404_36426__$1);
var G__36428 = cljs.core.chunk_rest.call(null,seq__36404_36426__$1);
var G__36429 = c__29665__auto___36427;
var G__36430 = cljs.core.count.call(null,c__29665__auto___36427);
var G__36431 = (0);
seq__36404_36413 = G__36428;
chunk__36405_36414 = G__36429;
count__36406_36415 = G__36430;
i__36407_36416 = G__36431;
continue;
} else {
var map__36410_36432 = cljs.core.first.call(null,seq__36404_36426__$1);
var map__36410_36433__$1 = ((((!((map__36410_36432 == null)))?((((map__36410_36432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36410_36432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36410_36432):map__36410_36432);
var binding_36434 = map__36410_36433__$1;
var init_36435 = cljs.core.get.call(null,map__36410_36433__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_36434);

cljs.compiler.emitln.call(null," = ",init_36435,";");

var G__36436 = cljs.core.next.call(null,seq__36404_36426__$1);
var G__36437 = null;
var G__36438 = (0);
var G__36439 = (0);
seq__36404_36413 = G__36436;
chunk__36405_36414 = G__36437;
count__36406_36415 = G__36438;
i__36407_36416 = G__36439;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_36403_36412;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__36440){
var map__36441 = p__36440;
var map__36441__$1 = ((((!((map__36441 == null)))?((((map__36441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36441):map__36441);
var frame = cljs.core.get.call(null,map__36441__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__36441__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__36441__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__29771__auto___36443 = cljs.core.count.call(null,exprs);
var i_36444 = (0);
while(true){
if((i_36444 < n__29771__auto___36443)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_36444)," = ",exprs.call(null,i_36444),";");

var G__36445 = (i_36444 + (1));
i_36444 = G__36445;
continue;
} else {
}
break;
}

var n__29771__auto___36446 = cljs.core.count.call(null,exprs);
var i_36447 = (0);
while(true){
if((i_36447 < n__29771__auto___36446)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_36447))," = ",temps.call(null,i_36447),";");

var G__36448 = (i_36447 + (1));
i_36447 = G__36448;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__36449){
var map__36450 = p__36449;
var map__36450__$1 = ((((!((map__36450 == null)))?((((map__36450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36450):map__36450);
var bindings = cljs.core.get.call(null,map__36450__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__36450__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__36450__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__36452_36460 = cljs.core.seq.call(null,bindings);
var chunk__36453_36461 = null;
var count__36454_36462 = (0);
var i__36455_36463 = (0);
while(true){
if((i__36455_36463 < count__36454_36462)){
var map__36456_36464 = cljs.core._nth.call(null,chunk__36453_36461,i__36455_36463);
var map__36456_36465__$1 = ((((!((map__36456_36464 == null)))?((((map__36456_36464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36456_36464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36456_36464):map__36456_36464);
var binding_36466 = map__36456_36465__$1;
var init_36467 = cljs.core.get.call(null,map__36456_36465__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_36466)," = ",init_36467,";");

var G__36468 = seq__36452_36460;
var G__36469 = chunk__36453_36461;
var G__36470 = count__36454_36462;
var G__36471 = (i__36455_36463 + (1));
seq__36452_36460 = G__36468;
chunk__36453_36461 = G__36469;
count__36454_36462 = G__36470;
i__36455_36463 = G__36471;
continue;
} else {
var temp__4657__auto___36472 = cljs.core.seq.call(null,seq__36452_36460);
if(temp__4657__auto___36472){
var seq__36452_36473__$1 = temp__4657__auto___36472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36452_36473__$1)){
var c__29665__auto___36474 = cljs.core.chunk_first.call(null,seq__36452_36473__$1);
var G__36475 = cljs.core.chunk_rest.call(null,seq__36452_36473__$1);
var G__36476 = c__29665__auto___36474;
var G__36477 = cljs.core.count.call(null,c__29665__auto___36474);
var G__36478 = (0);
seq__36452_36460 = G__36475;
chunk__36453_36461 = G__36476;
count__36454_36462 = G__36477;
i__36455_36463 = G__36478;
continue;
} else {
var map__36458_36479 = cljs.core.first.call(null,seq__36452_36473__$1);
var map__36458_36480__$1 = ((((!((map__36458_36479 == null)))?((((map__36458_36479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36458_36479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36458_36479):map__36458_36479);
var binding_36481 = map__36458_36480__$1;
var init_36482 = cljs.core.get.call(null,map__36458_36480__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_36481)," = ",init_36482,";");

var G__36483 = cljs.core.next.call(null,seq__36452_36473__$1);
var G__36484 = null;
var G__36485 = (0);
var G__36486 = (0);
seq__36452_36460 = G__36483;
chunk__36453_36461 = G__36484;
count__36454_36462 = G__36485;
i__36455_36463 = G__36486;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__36489){
var map__36490 = p__36489;
var map__36490__$1 = ((((!((map__36490 == null)))?((((map__36490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36490):map__36490);
var expr = map__36490__$1;
var f = cljs.core.get.call(null,map__36490__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__36490__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__36490__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__28814__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__28814__auto__){
var and__28814__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__28814__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__28814__auto____$1;
}
} else {
return and__28814__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__28814__auto__ = protocol;
if(cljs.core.truth_(and__28814__auto__)){
var and__28814__auto____$1 = tag;
if(cljs.core.truth_(and__28814__auto____$1)){
var or__28826__auto__ = (function (){var and__28814__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__28814__auto____$2){
var and__28814__auto____$3 = protocol;
if(cljs.core.truth_(and__28814__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__28814__auto____$3;
}
} else {
return and__28814__auto____$2;
}
})();
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
var and__28814__auto____$2 = (function (){var or__28826__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__28826__auto____$1){
return or__28826__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__28814__auto____$2)){
var or__28826__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__28826__auto____$1){
return or__28826__auto____$1;
} else {
var and__28814__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__28814__auto____$3){
var and__28814__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__28814__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__28814__auto____$4;
}
} else {
return and__28814__auto____$3;
}
}
} else {
return and__28814__auto____$2;
}
}
} else {
return and__28814__auto____$1;
}
} else {
return and__28814__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__28826__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__28826__auto__){
return or__28826__auto__;
} else {
var or__28826__auto____$1 = (function (){var temp__4657__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__28826__auto____$1)){
return or__28826__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)));
var vec__36492 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__28814__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__28814__auto__)){
return (arity > mfa);
} else {
return and__28814__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__36490,map__36490__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__36490,map__36490__$1,expr,f,args,env){
return (function (p1__36487_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__36487_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__36490,map__36490__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__36490,map__36490__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__36490,map__36490__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__36490,map__36490__$1,expr,f,args,env){
return (function (p1__36488_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__36488_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__36490,map__36490__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__36490,map__36490__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__36492,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__36492,(1),null);
var env__35702__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_36495 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_36495,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_36496 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_36496,args)),(((mfa_36496 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_36496,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__28826__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
var or__28826__auto____$1 = js_QMARK_;
if(or__28826__auto____$1){
return or__28826__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797)))){
var fprop_36497 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_36497," ? ",f__$1,fprop_36497,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_36497," ? ",f__$1,fprop_36497,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__36498){
var map__36499 = p__36498;
var map__36499__$1 = ((((!((map__36499 == null)))?((((map__36499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36499):map__36499);
var ctor = cljs.core.get.call(null,map__36499__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__36499__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__36499__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__35702__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__36501){
var map__36502 = p__36501;
var map__36502__$1 = ((((!((map__36502 == null)))?((((map__36502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36502.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36502):map__36502);
var target = cljs.core.get.call(null,map__36502__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__36502__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__36502__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__35702__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__36504 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__36504__$1 = ((((!((map__36504 == null)))?((((map__36504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36504):map__36504);
var options = cljs.core.get.call(null,map__36504__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__36504__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__36505 = options;
var map__36505__$1 = ((((!((map__36505 == null)))?((((map__36505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36505):map__36505);
var target = cljs.core.get.call(null,map__36505__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__36505__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__36506 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__36512 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__36512__$1 = ((((!((map__36512 == null)))?((((map__36512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36512):map__36512);
var node_libs = cljs.core.get.call(null,map__36512__$1,true);
var libs_to_load = cljs.core.get.call(null,map__36512__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__36506,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__36506,(1),null);
var map__36509 = cljs.core.group_by.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__36509__$1 = ((((!((map__36509 == null)))?((((map__36509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36509):map__36509);
var global_exports_libs = cljs.core.get.call(null,map__36509__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__36509__$1,false);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__36515_36531 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__36516_36532 = null;
var count__36517_36533 = (0);
var i__36518_36534 = (0);
while(true){
if((i__36518_36534 < count__36517_36533)){
var lib_36535 = cljs.core._nth.call(null,chunk__36516_36532,i__36518_36534);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_36535)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__28826__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_36535),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_36535),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__28826__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_36535),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_36535),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_36535),"');");

}
}
}

var G__36536 = seq__36515_36531;
var G__36537 = chunk__36516_36532;
var G__36538 = count__36517_36533;
var G__36539 = (i__36518_36534 + (1));
seq__36515_36531 = G__36536;
chunk__36516_36532 = G__36537;
count__36517_36533 = G__36538;
i__36518_36534 = G__36539;
continue;
} else {
var temp__4657__auto___36540 = cljs.core.seq.call(null,seq__36515_36531);
if(temp__4657__auto___36540){
var seq__36515_36541__$1 = temp__4657__auto___36540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36515_36541__$1)){
var c__29665__auto___36542 = cljs.core.chunk_first.call(null,seq__36515_36541__$1);
var G__36543 = cljs.core.chunk_rest.call(null,seq__36515_36541__$1);
var G__36544 = c__29665__auto___36542;
var G__36545 = cljs.core.count.call(null,c__29665__auto___36542);
var G__36546 = (0);
seq__36515_36531 = G__36543;
chunk__36516_36532 = G__36544;
count__36517_36533 = G__36545;
i__36518_36534 = G__36546;
continue;
} else {
var lib_36547 = cljs.core.first.call(null,seq__36515_36541__$1);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_36547)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__28826__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_36547),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_36547),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__28826__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_36547),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_36547),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_36547),"');");

}
}
}

var G__36548 = cljs.core.next.call(null,seq__36515_36541__$1);
var G__36549 = null;
var G__36550 = (0);
var G__36551 = (0);
seq__36515_36531 = G__36548;
chunk__36516_36532 = G__36549;
count__36517_36533 = G__36550;
i__36518_36534 = G__36551;
continue;
}
} else {
}
}
break;
}

var seq__36519_36552 = cljs.core.seq.call(null,node_libs);
var chunk__36520_36553 = null;
var count__36521_36554 = (0);
var i__36522_36555 = (0);
while(true){
if((i__36522_36555 < count__36521_36554)){
var lib_36556 = cljs.core._nth.call(null,chunk__36520_36553,i__36522_36555);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_36556)," = require('",lib_36556,"');");

var G__36557 = seq__36519_36552;
var G__36558 = chunk__36520_36553;
var G__36559 = count__36521_36554;
var G__36560 = (i__36522_36555 + (1));
seq__36519_36552 = G__36557;
chunk__36520_36553 = G__36558;
count__36521_36554 = G__36559;
i__36522_36555 = G__36560;
continue;
} else {
var temp__4657__auto___36561 = cljs.core.seq.call(null,seq__36519_36552);
if(temp__4657__auto___36561){
var seq__36519_36562__$1 = temp__4657__auto___36561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36519_36562__$1)){
var c__29665__auto___36563 = cljs.core.chunk_first.call(null,seq__36519_36562__$1);
var G__36564 = cljs.core.chunk_rest.call(null,seq__36519_36562__$1);
var G__36565 = c__29665__auto___36563;
var G__36566 = cljs.core.count.call(null,c__29665__auto___36563);
var G__36567 = (0);
seq__36519_36552 = G__36564;
chunk__36520_36553 = G__36565;
count__36521_36554 = G__36566;
i__36522_36555 = G__36567;
continue;
} else {
var lib_36568 = cljs.core.first.call(null,seq__36519_36562__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_36568)," = require('",lib_36568,"');");

var G__36569 = cljs.core.next.call(null,seq__36519_36562__$1);
var G__36570 = null;
var G__36571 = (0);
var G__36572 = (0);
seq__36519_36552 = G__36569;
chunk__36520_36553 = G__36570;
count__36521_36554 = G__36571;
i__36522_36555 = G__36572;
continue;
}
} else {
}
}
break;
}

var seq__36523_36573 = cljs.core.seq.call(null,global_exports_libs);
var chunk__36524_36574 = null;
var count__36525_36575 = (0);
var i__36526_36576 = (0);
while(true){
if((i__36526_36576 < count__36525_36575)){
var lib_36577 = cljs.core._nth.call(null,chunk__36524_36574,i__36526_36576);
var map__36527_36578 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_36577));
var map__36527_36579__$1 = ((((!((map__36527_36578 == null)))?((((map__36527_36578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36527_36578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36527_36578):map__36527_36578);
var global_exports_36580 = cljs.core.get.call(null,map__36527_36579__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_36577)," = goog.global.",cljs.core.get.call(null,global_exports_36580,cljs.core.symbol.call(null,lib_36577)),";");

var G__36581 = seq__36523_36573;
var G__36582 = chunk__36524_36574;
var G__36583 = count__36525_36575;
var G__36584 = (i__36526_36576 + (1));
seq__36523_36573 = G__36581;
chunk__36524_36574 = G__36582;
count__36525_36575 = G__36583;
i__36526_36576 = G__36584;
continue;
} else {
var temp__4657__auto___36585 = cljs.core.seq.call(null,seq__36523_36573);
if(temp__4657__auto___36585){
var seq__36523_36586__$1 = temp__4657__auto___36585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36523_36586__$1)){
var c__29665__auto___36587 = cljs.core.chunk_first.call(null,seq__36523_36586__$1);
var G__36588 = cljs.core.chunk_rest.call(null,seq__36523_36586__$1);
var G__36589 = c__29665__auto___36587;
var G__36590 = cljs.core.count.call(null,c__29665__auto___36587);
var G__36591 = (0);
seq__36523_36573 = G__36588;
chunk__36524_36574 = G__36589;
count__36525_36575 = G__36590;
i__36526_36576 = G__36591;
continue;
} else {
var lib_36592 = cljs.core.first.call(null,seq__36523_36586__$1);
var map__36529_36593 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_36592));
var map__36529_36594__$1 = ((((!((map__36529_36593 == null)))?((((map__36529_36593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36529_36593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36529_36593):map__36529_36593);
var global_exports_36595 = cljs.core.get.call(null,map__36529_36594__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_36592)," = goog.global.",cljs.core.get.call(null,global_exports_36595,cljs.core.symbol.call(null,lib_36592)),";");

var G__36596 = cljs.core.next.call(null,seq__36523_36586__$1);
var G__36597 = null;
var G__36598 = (0);
var G__36599 = (0);
seq__36523_36573 = G__36596;
chunk__36524_36574 = G__36597;
count__36525_36575 = G__36598;
i__36526_36576 = G__36599;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__36600){
var map__36601 = p__36600;
var map__36601__$1 = ((((!((map__36601 == null)))?((((map__36601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36601):map__36601);
var name = cljs.core.get.call(null,map__36601__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__36601__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__36601__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__36601__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__36601__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__36601__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__36601__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__36603){
var map__36604 = p__36603;
var map__36604__$1 = ((((!((map__36604 == null)))?((((map__36604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36604.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36604):map__36604);
var name = cljs.core.get.call(null,map__36604__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__36604__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__36604__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__36604__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__36604__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__36604__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__36604__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__36606){
var map__36607 = p__36606;
var map__36607__$1 = ((((!((map__36607 == null)))?((((map__36607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36607):map__36607);
var t = cljs.core.get.call(null,map__36607__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__36607__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__36607__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__36607__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__36607__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__36609_36627 = cljs.core.seq.call(null,protocols);
var chunk__36610_36628 = null;
var count__36611_36629 = (0);
var i__36612_36630 = (0);
while(true){
if((i__36612_36630 < count__36611_36629)){
var protocol_36631 = cljs.core._nth.call(null,chunk__36610_36628,i__36612_36630);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_36631)].join('')),"}");

var G__36632 = seq__36609_36627;
var G__36633 = chunk__36610_36628;
var G__36634 = count__36611_36629;
var G__36635 = (i__36612_36630 + (1));
seq__36609_36627 = G__36632;
chunk__36610_36628 = G__36633;
count__36611_36629 = G__36634;
i__36612_36630 = G__36635;
continue;
} else {
var temp__4657__auto___36636 = cljs.core.seq.call(null,seq__36609_36627);
if(temp__4657__auto___36636){
var seq__36609_36637__$1 = temp__4657__auto___36636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36609_36637__$1)){
var c__29665__auto___36638 = cljs.core.chunk_first.call(null,seq__36609_36637__$1);
var G__36639 = cljs.core.chunk_rest.call(null,seq__36609_36637__$1);
var G__36640 = c__29665__auto___36638;
var G__36641 = cljs.core.count.call(null,c__29665__auto___36638);
var G__36642 = (0);
seq__36609_36627 = G__36639;
chunk__36610_36628 = G__36640;
count__36611_36629 = G__36641;
i__36612_36630 = G__36642;
continue;
} else {
var protocol_36643 = cljs.core.first.call(null,seq__36609_36637__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_36643)].join('')),"}");

var G__36644 = cljs.core.next.call(null,seq__36609_36637__$1);
var G__36645 = null;
var G__36646 = (0);
var G__36647 = (0);
seq__36609_36627 = G__36644;
chunk__36610_36628 = G__36645;
count__36611_36629 = G__36646;
i__36612_36630 = G__36647;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__36613_36648 = cljs.core.seq.call(null,fields__$1);
var chunk__36614_36649 = null;
var count__36615_36650 = (0);
var i__36616_36651 = (0);
while(true){
if((i__36616_36651 < count__36615_36650)){
var fld_36652 = cljs.core._nth.call(null,chunk__36614_36649,i__36616_36651);
cljs.compiler.emitln.call(null,"this.",fld_36652," = ",fld_36652,";");

var G__36653 = seq__36613_36648;
var G__36654 = chunk__36614_36649;
var G__36655 = count__36615_36650;
var G__36656 = (i__36616_36651 + (1));
seq__36613_36648 = G__36653;
chunk__36614_36649 = G__36654;
count__36615_36650 = G__36655;
i__36616_36651 = G__36656;
continue;
} else {
var temp__4657__auto___36657 = cljs.core.seq.call(null,seq__36613_36648);
if(temp__4657__auto___36657){
var seq__36613_36658__$1 = temp__4657__auto___36657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36613_36658__$1)){
var c__29665__auto___36659 = cljs.core.chunk_first.call(null,seq__36613_36658__$1);
var G__36660 = cljs.core.chunk_rest.call(null,seq__36613_36658__$1);
var G__36661 = c__29665__auto___36659;
var G__36662 = cljs.core.count.call(null,c__29665__auto___36659);
var G__36663 = (0);
seq__36613_36648 = G__36660;
chunk__36614_36649 = G__36661;
count__36615_36650 = G__36662;
i__36616_36651 = G__36663;
continue;
} else {
var fld_36664 = cljs.core.first.call(null,seq__36613_36658__$1);
cljs.compiler.emitln.call(null,"this.",fld_36664," = ",fld_36664,";");

var G__36665 = cljs.core.next.call(null,seq__36613_36658__$1);
var G__36666 = null;
var G__36667 = (0);
var G__36668 = (0);
seq__36613_36648 = G__36665;
chunk__36614_36649 = G__36666;
count__36615_36650 = G__36667;
i__36616_36651 = G__36668;
continue;
}
} else {
}
}
break;
}

var seq__36617_36669 = cljs.core.seq.call(null,pmasks);
var chunk__36618_36670 = null;
var count__36619_36671 = (0);
var i__36620_36672 = (0);
while(true){
if((i__36620_36672 < count__36619_36671)){
var vec__36621_36673 = cljs.core._nth.call(null,chunk__36618_36670,i__36620_36672);
var pno_36674 = cljs.core.nth.call(null,vec__36621_36673,(0),null);
var pmask_36675 = cljs.core.nth.call(null,vec__36621_36673,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_36674,"$ = ",pmask_36675,";");

var G__36676 = seq__36617_36669;
var G__36677 = chunk__36618_36670;
var G__36678 = count__36619_36671;
var G__36679 = (i__36620_36672 + (1));
seq__36617_36669 = G__36676;
chunk__36618_36670 = G__36677;
count__36619_36671 = G__36678;
i__36620_36672 = G__36679;
continue;
} else {
var temp__4657__auto___36680 = cljs.core.seq.call(null,seq__36617_36669);
if(temp__4657__auto___36680){
var seq__36617_36681__$1 = temp__4657__auto___36680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36617_36681__$1)){
var c__29665__auto___36682 = cljs.core.chunk_first.call(null,seq__36617_36681__$1);
var G__36683 = cljs.core.chunk_rest.call(null,seq__36617_36681__$1);
var G__36684 = c__29665__auto___36682;
var G__36685 = cljs.core.count.call(null,c__29665__auto___36682);
var G__36686 = (0);
seq__36617_36669 = G__36683;
chunk__36618_36670 = G__36684;
count__36619_36671 = G__36685;
i__36620_36672 = G__36686;
continue;
} else {
var vec__36624_36687 = cljs.core.first.call(null,seq__36617_36681__$1);
var pno_36688 = cljs.core.nth.call(null,vec__36624_36687,(0),null);
var pmask_36689 = cljs.core.nth.call(null,vec__36624_36687,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_36688,"$ = ",pmask_36689,";");

var G__36690 = cljs.core.next.call(null,seq__36617_36681__$1);
var G__36691 = null;
var G__36692 = (0);
var G__36693 = (0);
seq__36617_36669 = G__36690;
chunk__36618_36670 = G__36691;
count__36619_36671 = G__36692;
i__36620_36672 = G__36693;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__36694){
var map__36695 = p__36694;
var map__36695__$1 = ((((!((map__36695 == null)))?((((map__36695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36695):map__36695);
var t = cljs.core.get.call(null,map__36695__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__36695__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__36695__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__36695__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__36695__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__36697_36715 = cljs.core.seq.call(null,protocols);
var chunk__36698_36716 = null;
var count__36699_36717 = (0);
var i__36700_36718 = (0);
while(true){
if((i__36700_36718 < count__36699_36717)){
var protocol_36719 = cljs.core._nth.call(null,chunk__36698_36716,i__36700_36718);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_36719)].join('')),"}");

var G__36720 = seq__36697_36715;
var G__36721 = chunk__36698_36716;
var G__36722 = count__36699_36717;
var G__36723 = (i__36700_36718 + (1));
seq__36697_36715 = G__36720;
chunk__36698_36716 = G__36721;
count__36699_36717 = G__36722;
i__36700_36718 = G__36723;
continue;
} else {
var temp__4657__auto___36724 = cljs.core.seq.call(null,seq__36697_36715);
if(temp__4657__auto___36724){
var seq__36697_36725__$1 = temp__4657__auto___36724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36697_36725__$1)){
var c__29665__auto___36726 = cljs.core.chunk_first.call(null,seq__36697_36725__$1);
var G__36727 = cljs.core.chunk_rest.call(null,seq__36697_36725__$1);
var G__36728 = c__29665__auto___36726;
var G__36729 = cljs.core.count.call(null,c__29665__auto___36726);
var G__36730 = (0);
seq__36697_36715 = G__36727;
chunk__36698_36716 = G__36728;
count__36699_36717 = G__36729;
i__36700_36718 = G__36730;
continue;
} else {
var protocol_36731 = cljs.core.first.call(null,seq__36697_36725__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_36731)].join('')),"}");

var G__36732 = cljs.core.next.call(null,seq__36697_36725__$1);
var G__36733 = null;
var G__36734 = (0);
var G__36735 = (0);
seq__36697_36715 = G__36732;
chunk__36698_36716 = G__36733;
count__36699_36717 = G__36734;
i__36700_36718 = G__36735;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__36701_36736 = cljs.core.seq.call(null,fields__$1);
var chunk__36702_36737 = null;
var count__36703_36738 = (0);
var i__36704_36739 = (0);
while(true){
if((i__36704_36739 < count__36703_36738)){
var fld_36740 = cljs.core._nth.call(null,chunk__36702_36737,i__36704_36739);
cljs.compiler.emitln.call(null,"this.",fld_36740," = ",fld_36740,";");

var G__36741 = seq__36701_36736;
var G__36742 = chunk__36702_36737;
var G__36743 = count__36703_36738;
var G__36744 = (i__36704_36739 + (1));
seq__36701_36736 = G__36741;
chunk__36702_36737 = G__36742;
count__36703_36738 = G__36743;
i__36704_36739 = G__36744;
continue;
} else {
var temp__4657__auto___36745 = cljs.core.seq.call(null,seq__36701_36736);
if(temp__4657__auto___36745){
var seq__36701_36746__$1 = temp__4657__auto___36745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36701_36746__$1)){
var c__29665__auto___36747 = cljs.core.chunk_first.call(null,seq__36701_36746__$1);
var G__36748 = cljs.core.chunk_rest.call(null,seq__36701_36746__$1);
var G__36749 = c__29665__auto___36747;
var G__36750 = cljs.core.count.call(null,c__29665__auto___36747);
var G__36751 = (0);
seq__36701_36736 = G__36748;
chunk__36702_36737 = G__36749;
count__36703_36738 = G__36750;
i__36704_36739 = G__36751;
continue;
} else {
var fld_36752 = cljs.core.first.call(null,seq__36701_36746__$1);
cljs.compiler.emitln.call(null,"this.",fld_36752," = ",fld_36752,";");

var G__36753 = cljs.core.next.call(null,seq__36701_36746__$1);
var G__36754 = null;
var G__36755 = (0);
var G__36756 = (0);
seq__36701_36736 = G__36753;
chunk__36702_36737 = G__36754;
count__36703_36738 = G__36755;
i__36704_36739 = G__36756;
continue;
}
} else {
}
}
break;
}

var seq__36705_36757 = cljs.core.seq.call(null,pmasks);
var chunk__36706_36758 = null;
var count__36707_36759 = (0);
var i__36708_36760 = (0);
while(true){
if((i__36708_36760 < count__36707_36759)){
var vec__36709_36761 = cljs.core._nth.call(null,chunk__36706_36758,i__36708_36760);
var pno_36762 = cljs.core.nth.call(null,vec__36709_36761,(0),null);
var pmask_36763 = cljs.core.nth.call(null,vec__36709_36761,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_36762,"$ = ",pmask_36763,";");

var G__36764 = seq__36705_36757;
var G__36765 = chunk__36706_36758;
var G__36766 = count__36707_36759;
var G__36767 = (i__36708_36760 + (1));
seq__36705_36757 = G__36764;
chunk__36706_36758 = G__36765;
count__36707_36759 = G__36766;
i__36708_36760 = G__36767;
continue;
} else {
var temp__4657__auto___36768 = cljs.core.seq.call(null,seq__36705_36757);
if(temp__4657__auto___36768){
var seq__36705_36769__$1 = temp__4657__auto___36768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36705_36769__$1)){
var c__29665__auto___36770 = cljs.core.chunk_first.call(null,seq__36705_36769__$1);
var G__36771 = cljs.core.chunk_rest.call(null,seq__36705_36769__$1);
var G__36772 = c__29665__auto___36770;
var G__36773 = cljs.core.count.call(null,c__29665__auto___36770);
var G__36774 = (0);
seq__36705_36757 = G__36771;
chunk__36706_36758 = G__36772;
count__36707_36759 = G__36773;
i__36708_36760 = G__36774;
continue;
} else {
var vec__36712_36775 = cljs.core.first.call(null,seq__36705_36769__$1);
var pno_36776 = cljs.core.nth.call(null,vec__36712_36775,(0),null);
var pmask_36777 = cljs.core.nth.call(null,vec__36712_36775,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_36776,"$ = ",pmask_36777,";");

var G__36778 = cljs.core.next.call(null,seq__36705_36769__$1);
var G__36779 = null;
var G__36780 = (0);
var G__36781 = (0);
seq__36705_36757 = G__36778;
chunk__36706_36758 = G__36779;
count__36707_36759 = G__36780;
i__36708_36760 = G__36781;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__36782){
var map__36783 = p__36782;
var map__36783__$1 = ((((!((map__36783 == null)))?((((map__36783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36783):map__36783);
var target = cljs.core.get.call(null,map__36783__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__36783__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__36783__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__36783__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__36783__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__35702__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__36785){
var map__36786 = p__36785;
var map__36786__$1 = ((((!((map__36786 == null)))?((((map__36786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36786):map__36786);
var op = cljs.core.get.call(null,map__36786__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__36786__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__36786__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__36786__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__36786__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__28814__auto__ = code;
if(cljs.core.truth_(and__28814__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__28814__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__35702__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35702__auto__))){
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

var seq__36791 = cljs.core.seq.call(null,table);
var chunk__36792 = null;
var count__36793 = (0);
var i__36794 = (0);
while(true){
if((i__36794 < count__36793)){
var vec__36795 = cljs.core._nth.call(null,chunk__36792,i__36794);
var sym = cljs.core.nth.call(null,vec__36795,(0),null);
var value = cljs.core.nth.call(null,vec__36795,(1),null);
var ns_36801 = cljs.core.namespace.call(null,sym);
var name_36802 = cljs.core.name.call(null,sym);
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

var G__36803 = seq__36791;
var G__36804 = chunk__36792;
var G__36805 = count__36793;
var G__36806 = (i__36794 + (1));
seq__36791 = G__36803;
chunk__36792 = G__36804;
count__36793 = G__36805;
i__36794 = G__36806;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36791);
if(temp__4657__auto__){
var seq__36791__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36791__$1)){
var c__29665__auto__ = cljs.core.chunk_first.call(null,seq__36791__$1);
var G__36807 = cljs.core.chunk_rest.call(null,seq__36791__$1);
var G__36808 = c__29665__auto__;
var G__36809 = cljs.core.count.call(null,c__29665__auto__);
var G__36810 = (0);
seq__36791 = G__36807;
chunk__36792 = G__36808;
count__36793 = G__36809;
i__36794 = G__36810;
continue;
} else {
var vec__36798 = cljs.core.first.call(null,seq__36791__$1);
var sym = cljs.core.nth.call(null,vec__36798,(0),null);
var value = cljs.core.nth.call(null,vec__36798,(1),null);
var ns_36811 = cljs.core.namespace.call(null,sym);
var name_36812 = cljs.core.name.call(null,sym);
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

var G__36813 = cljs.core.next.call(null,seq__36791__$1);
var G__36814 = null;
var G__36815 = (0);
var G__36816 = (0);
seq__36791 = G__36813;
chunk__36792 = G__36814;
count__36793 = G__36815;
i__36794 = G__36816;
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
var G__36818 = arguments.length;
switch (G__36818) {
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
var k_36823 = cljs.core.first.call(null,ks);
var vec__36819_36824 = cljs.core.conj.call(null,prefix,k_36823);
var top_36825 = cljs.core.nth.call(null,vec__36819_36824,(0),null);
var prefix_SINGLEQUOTE__36826 = vec__36819_36824;
if((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_36823)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__36826) == null))){
if(!((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_36825)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_36825)))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__36826)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_36825);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__36826)),";");
}
} else {
}

var m_36827 = cljs.core.get.call(null,externs,k_36823);
if(cljs.core.empty_QMARK_.call(null,m_36827)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__36826,m_36827,top_level,known_externs);
}

var G__36828 = cljs.core.next.call(null,ks);
ks = G__36828;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1506931000042
