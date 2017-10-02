// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28139__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28139__auto__){
return or__28139__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28139__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
var or__28139__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28139__auto____$1)){
return or__28139__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__44168_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__44168_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__44169 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__44170 = null;
var count__44171 = (0);
var i__44172 = (0);
while(true){
if((i__44172 < count__44171)){
var n = cljs.core._nth.call(null,chunk__44170,i__44172);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44173 = seq__44169;
var G__44174 = chunk__44170;
var G__44175 = count__44171;
var G__44176 = (i__44172 + (1));
seq__44169 = G__44173;
chunk__44170 = G__44174;
count__44171 = G__44175;
i__44172 = G__44176;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44169);
if(temp__4657__auto__){
var seq__44169__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44169__$1)){
var c__28978__auto__ = cljs.core.chunk_first.call(null,seq__44169__$1);
var G__44177 = cljs.core.chunk_rest.call(null,seq__44169__$1);
var G__44178 = c__28978__auto__;
var G__44179 = cljs.core.count.call(null,c__28978__auto__);
var G__44180 = (0);
seq__44169 = G__44177;
chunk__44170 = G__44178;
count__44171 = G__44179;
i__44172 = G__44180;
continue;
} else {
var n = cljs.core.first.call(null,seq__44169__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44181 = cljs.core.next.call(null,seq__44169__$1);
var G__44182 = null;
var G__44183 = (0);
var G__44184 = (0);
seq__44169 = G__44181;
chunk__44170 = G__44182;
count__44171 = G__44183;
i__44172 = G__44184;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__44194_44202 = cljs.core.seq.call(null,deps);
var chunk__44195_44203 = null;
var count__44196_44204 = (0);
var i__44197_44205 = (0);
while(true){
if((i__44197_44205 < count__44196_44204)){
var dep_44206 = cljs.core._nth.call(null,chunk__44195_44203,i__44197_44205);
topo_sort_helper_STAR_.call(null,dep_44206,(depth + (1)),state);

var G__44207 = seq__44194_44202;
var G__44208 = chunk__44195_44203;
var G__44209 = count__44196_44204;
var G__44210 = (i__44197_44205 + (1));
seq__44194_44202 = G__44207;
chunk__44195_44203 = G__44208;
count__44196_44204 = G__44209;
i__44197_44205 = G__44210;
continue;
} else {
var temp__4657__auto___44211 = cljs.core.seq.call(null,seq__44194_44202);
if(temp__4657__auto___44211){
var seq__44194_44212__$1 = temp__4657__auto___44211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44194_44212__$1)){
var c__28978__auto___44213 = cljs.core.chunk_first.call(null,seq__44194_44212__$1);
var G__44214 = cljs.core.chunk_rest.call(null,seq__44194_44212__$1);
var G__44215 = c__28978__auto___44213;
var G__44216 = cljs.core.count.call(null,c__28978__auto___44213);
var G__44217 = (0);
seq__44194_44202 = G__44214;
chunk__44195_44203 = G__44215;
count__44196_44204 = G__44216;
i__44197_44205 = G__44217;
continue;
} else {
var dep_44218 = cljs.core.first.call(null,seq__44194_44212__$1);
topo_sort_helper_STAR_.call(null,dep_44218,(depth + (1)),state);

var G__44219 = cljs.core.next.call(null,seq__44194_44212__$1);
var G__44220 = null;
var G__44221 = (0);
var G__44222 = (0);
seq__44194_44202 = G__44219;
chunk__44195_44203 = G__44220;
count__44196_44204 = G__44221;
i__44197_44205 = G__44222;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__44198){
var vec__44199 = p__44198;
var seq__44200 = cljs.core.seq.call(null,vec__44199);
var first__44201 = cljs.core.first.call(null,seq__44200);
var seq__44200__$1 = cljs.core.next.call(null,seq__44200);
var x = first__44201;
var xs = seq__44200__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__44199,seq__44200,first__44201,seq__44200__$1,x,xs,get_deps__$1){
return (function (p1__44185_SHARP_){
return clojure.set.difference.call(null,p1__44185_SHARP_,x);
});})(vec__44199,seq__44200,first__44201,seq__44200__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__44223 = cljs.core.seq.call(null,provides);
var chunk__44224 = null;
var count__44225 = (0);
var i__44226 = (0);
while(true){
if((i__44226 < count__44225)){
var prov = cljs.core._nth.call(null,chunk__44224,i__44226);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44227_44235 = cljs.core.seq.call(null,requires);
var chunk__44228_44236 = null;
var count__44229_44237 = (0);
var i__44230_44238 = (0);
while(true){
if((i__44230_44238 < count__44229_44237)){
var req_44239 = cljs.core._nth.call(null,chunk__44228_44236,i__44230_44238);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44239,prov);

var G__44240 = seq__44227_44235;
var G__44241 = chunk__44228_44236;
var G__44242 = count__44229_44237;
var G__44243 = (i__44230_44238 + (1));
seq__44227_44235 = G__44240;
chunk__44228_44236 = G__44241;
count__44229_44237 = G__44242;
i__44230_44238 = G__44243;
continue;
} else {
var temp__4657__auto___44244 = cljs.core.seq.call(null,seq__44227_44235);
if(temp__4657__auto___44244){
var seq__44227_44245__$1 = temp__4657__auto___44244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44227_44245__$1)){
var c__28978__auto___44246 = cljs.core.chunk_first.call(null,seq__44227_44245__$1);
var G__44247 = cljs.core.chunk_rest.call(null,seq__44227_44245__$1);
var G__44248 = c__28978__auto___44246;
var G__44249 = cljs.core.count.call(null,c__28978__auto___44246);
var G__44250 = (0);
seq__44227_44235 = G__44247;
chunk__44228_44236 = G__44248;
count__44229_44237 = G__44249;
i__44230_44238 = G__44250;
continue;
} else {
var req_44251 = cljs.core.first.call(null,seq__44227_44245__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44251,prov);

var G__44252 = cljs.core.next.call(null,seq__44227_44245__$1);
var G__44253 = null;
var G__44254 = (0);
var G__44255 = (0);
seq__44227_44235 = G__44252;
chunk__44228_44236 = G__44253;
count__44229_44237 = G__44254;
i__44230_44238 = G__44255;
continue;
}
} else {
}
}
break;
}

var G__44256 = seq__44223;
var G__44257 = chunk__44224;
var G__44258 = count__44225;
var G__44259 = (i__44226 + (1));
seq__44223 = G__44256;
chunk__44224 = G__44257;
count__44225 = G__44258;
i__44226 = G__44259;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44223);
if(temp__4657__auto__){
var seq__44223__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44223__$1)){
var c__28978__auto__ = cljs.core.chunk_first.call(null,seq__44223__$1);
var G__44260 = cljs.core.chunk_rest.call(null,seq__44223__$1);
var G__44261 = c__28978__auto__;
var G__44262 = cljs.core.count.call(null,c__28978__auto__);
var G__44263 = (0);
seq__44223 = G__44260;
chunk__44224 = G__44261;
count__44225 = G__44262;
i__44226 = G__44263;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44223__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44231_44264 = cljs.core.seq.call(null,requires);
var chunk__44232_44265 = null;
var count__44233_44266 = (0);
var i__44234_44267 = (0);
while(true){
if((i__44234_44267 < count__44233_44266)){
var req_44268 = cljs.core._nth.call(null,chunk__44232_44265,i__44234_44267);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44268,prov);

var G__44269 = seq__44231_44264;
var G__44270 = chunk__44232_44265;
var G__44271 = count__44233_44266;
var G__44272 = (i__44234_44267 + (1));
seq__44231_44264 = G__44269;
chunk__44232_44265 = G__44270;
count__44233_44266 = G__44271;
i__44234_44267 = G__44272;
continue;
} else {
var temp__4657__auto___44273__$1 = cljs.core.seq.call(null,seq__44231_44264);
if(temp__4657__auto___44273__$1){
var seq__44231_44274__$1 = temp__4657__auto___44273__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44231_44274__$1)){
var c__28978__auto___44275 = cljs.core.chunk_first.call(null,seq__44231_44274__$1);
var G__44276 = cljs.core.chunk_rest.call(null,seq__44231_44274__$1);
var G__44277 = c__28978__auto___44275;
var G__44278 = cljs.core.count.call(null,c__28978__auto___44275);
var G__44279 = (0);
seq__44231_44264 = G__44276;
chunk__44232_44265 = G__44277;
count__44233_44266 = G__44278;
i__44234_44267 = G__44279;
continue;
} else {
var req_44280 = cljs.core.first.call(null,seq__44231_44274__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44280,prov);

var G__44281 = cljs.core.next.call(null,seq__44231_44274__$1);
var G__44282 = null;
var G__44283 = (0);
var G__44284 = (0);
seq__44231_44264 = G__44281;
chunk__44232_44265 = G__44282;
count__44233_44266 = G__44283;
i__44234_44267 = G__44284;
continue;
}
} else {
}
}
break;
}

var G__44285 = cljs.core.next.call(null,seq__44223__$1);
var G__44286 = null;
var G__44287 = (0);
var G__44288 = (0);
seq__44223 = G__44285;
chunk__44224 = G__44286;
count__44225 = G__44287;
i__44226 = G__44288;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__44289_44293 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__44290_44294 = null;
var count__44291_44295 = (0);
var i__44292_44296 = (0);
while(true){
if((i__44292_44296 < count__44291_44295)){
var ns_44297 = cljs.core._nth.call(null,chunk__44290_44294,i__44292_44296);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44297);

var G__44298 = seq__44289_44293;
var G__44299 = chunk__44290_44294;
var G__44300 = count__44291_44295;
var G__44301 = (i__44292_44296 + (1));
seq__44289_44293 = G__44298;
chunk__44290_44294 = G__44299;
count__44291_44295 = G__44300;
i__44292_44296 = G__44301;
continue;
} else {
var temp__4657__auto___44302 = cljs.core.seq.call(null,seq__44289_44293);
if(temp__4657__auto___44302){
var seq__44289_44303__$1 = temp__4657__auto___44302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44289_44303__$1)){
var c__28978__auto___44304 = cljs.core.chunk_first.call(null,seq__44289_44303__$1);
var G__44305 = cljs.core.chunk_rest.call(null,seq__44289_44303__$1);
var G__44306 = c__28978__auto___44304;
var G__44307 = cljs.core.count.call(null,c__28978__auto___44304);
var G__44308 = (0);
seq__44289_44293 = G__44305;
chunk__44290_44294 = G__44306;
count__44291_44295 = G__44307;
i__44292_44296 = G__44308;
continue;
} else {
var ns_44309 = cljs.core.first.call(null,seq__44289_44303__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44309);

var G__44310 = cljs.core.next.call(null,seq__44289_44303__$1);
var G__44311 = null;
var G__44312 = (0);
var G__44313 = (0);
seq__44289_44293 = G__44310;
chunk__44290_44294 = G__44311;
count__44291_44295 = G__44312;
i__44292_44296 = G__44313;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28139__auto__ = goog.require__;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__44314__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__44314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44315__i = 0, G__44315__a = new Array(arguments.length -  0);
while (G__44315__i < G__44315__a.length) {G__44315__a[G__44315__i] = arguments[G__44315__i + 0]; ++G__44315__i;}
  args = new cljs.core.IndexedSeq(G__44315__a,0,null);
} 
return G__44314__delegate.call(this,args);};
G__44314.cljs$lang$maxFixedArity = 0;
G__44314.cljs$lang$applyTo = (function (arglist__44316){
var args = cljs.core.seq(arglist__44316);
return G__44314__delegate(args);
});
G__44314.cljs$core$IFn$_invoke$arity$variadic = G__44314__delegate;
return G__44314;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__44317_SHARP_,p2__44318_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44317_SHARP_)].join('')),p2__44318_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__44319_SHARP_,p2__44320_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44319_SHARP_)].join(''),p2__44320_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__44321 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__44321.addCallback(((function (G__44321){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__44321))
);

G__44321.addErrback(((function (G__44321){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__44321))
);

return G__44321;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__44322 = cljs.core._EQ_;
var expr__44323 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__44322.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__44323))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__44322,expr__44323){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__44322,expr__44323))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__44322,expr__44323){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e44325){if((e44325 instanceof Error)){
var e = e44325;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44325;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__44322,expr__44323))
} else {
if(cljs.core.truth_(pred__44322.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__44323))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__44322.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__44323))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__44322.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__44323))){
return ((function (pred__44322,expr__44323){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e44326){if((e44326 instanceof Error)){
var e = e44326;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44326;

}
}})());
});
;})(pred__44322,expr__44323))
} else {
return ((function (pred__44322,expr__44323){
return (function (a__$1,b){
throw "Reload not defined for this platform";
});
;})(pred__44322,expr__44323))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__44327,callback){
var map__44328 = p__44327;
var map__44328__$1 = ((((!((map__44328 == null)))?((((map__44328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44328):map__44328);
var file_msg = map__44328__$1;
var request_url = cljs.core.get.call(null,map__44328__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__44328,map__44328__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__44328,map__44328__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__42199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto__){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto__){
return (function (state_44352){
var state_val_44353 = (state_44352[(1)]);
if((state_val_44353 === (7))){
var inst_44348 = (state_44352[(2)]);
var state_44352__$1 = state_44352;
var statearr_44354_44371 = state_44352__$1;
(statearr_44354_44371[(2)] = inst_44348);

(statearr_44354_44371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44353 === (1))){
var state_44352__$1 = state_44352;
var statearr_44355_44372 = state_44352__$1;
(statearr_44355_44372[(2)] = null);

(statearr_44355_44372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44353 === (4))){
var inst_44332 = (state_44352[(7)]);
var inst_44332__$1 = (state_44352[(2)]);
var state_44352__$1 = (function (){var statearr_44356 = state_44352;
(statearr_44356[(7)] = inst_44332__$1);

return statearr_44356;
})();
if(cljs.core.truth_(inst_44332__$1)){
var statearr_44357_44373 = state_44352__$1;
(statearr_44357_44373[(1)] = (5));

} else {
var statearr_44358_44374 = state_44352__$1;
(statearr_44358_44374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44353 === (6))){
var state_44352__$1 = state_44352;
var statearr_44359_44375 = state_44352__$1;
(statearr_44359_44375[(2)] = null);

(statearr_44359_44375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44353 === (3))){
var inst_44350 = (state_44352[(2)]);
var state_44352__$1 = state_44352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44352__$1,inst_44350);
} else {
if((state_val_44353 === (2))){
var state_44352__$1 = state_44352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44352__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_44353 === (11))){
var inst_44344 = (state_44352[(2)]);
var state_44352__$1 = (function (){var statearr_44360 = state_44352;
(statearr_44360[(8)] = inst_44344);

return statearr_44360;
})();
var statearr_44361_44376 = state_44352__$1;
(statearr_44361_44376[(2)] = null);

(statearr_44361_44376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44353 === (9))){
var inst_44336 = (state_44352[(9)]);
var inst_44338 = (state_44352[(10)]);
var inst_44340 = inst_44338.call(null,inst_44336);
var state_44352__$1 = state_44352;
var statearr_44362_44377 = state_44352__$1;
(statearr_44362_44377[(2)] = inst_44340);

(statearr_44362_44377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44353 === (5))){
var inst_44332 = (state_44352[(7)]);
var inst_44334 = figwheel.client.file_reloading.blocking_load.call(null,inst_44332);
var state_44352__$1 = state_44352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44352__$1,(8),inst_44334);
} else {
if((state_val_44353 === (10))){
var inst_44336 = (state_44352[(9)]);
var inst_44342 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_44336);
var state_44352__$1 = state_44352;
var statearr_44363_44378 = state_44352__$1;
(statearr_44363_44378[(2)] = inst_44342);

(statearr_44363_44378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44353 === (8))){
var inst_44332 = (state_44352[(7)]);
var inst_44338 = (state_44352[(10)]);
var inst_44336 = (state_44352[(2)]);
var inst_44337 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_44338__$1 = cljs.core.get.call(null,inst_44337,inst_44332);
var state_44352__$1 = (function (){var statearr_44364 = state_44352;
(statearr_44364[(9)] = inst_44336);

(statearr_44364[(10)] = inst_44338__$1);

return statearr_44364;
})();
if(cljs.core.truth_(inst_44338__$1)){
var statearr_44365_44379 = state_44352__$1;
(statearr_44365_44379[(1)] = (9));

} else {
var statearr_44366_44380 = state_44352__$1;
(statearr_44366_44380[(1)] = (10));

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
});})(c__42199__auto__))
;
return ((function (switch__42111__auto__,c__42199__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__42112__auto__ = null;
var figwheel$client$file_reloading$state_machine__42112__auto____0 = (function (){
var statearr_44367 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44367[(0)] = figwheel$client$file_reloading$state_machine__42112__auto__);

(statearr_44367[(1)] = (1));

return statearr_44367;
});
var figwheel$client$file_reloading$state_machine__42112__auto____1 = (function (state_44352){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_44352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e44368){if((e44368 instanceof Object)){
var ex__42115__auto__ = e44368;
var statearr_44369_44381 = state_44352;
(statearr_44369_44381[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44382 = state_44352;
state_44352 = G__44382;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__42112__auto__ = function(state_44352){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__42112__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__42112__auto____1.call(this,state_44352);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__42112__auto____0;
figwheel$client$file_reloading$state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__42112__auto____1;
return figwheel$client$file_reloading$state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto__))
})();
var state__42201__auto__ = (function (){var statearr_44370 = f__42200__auto__.call(null);
(statearr_44370[(6)] = c__42199__auto__);

return statearr_44370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto__))
);

return c__42199__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__44383,callback){
var map__44384 = p__44383;
var map__44384__$1 = ((((!((map__44384 == null)))?((((map__44384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44384):map__44384);
var file_msg = map__44384__$1;
var namespace = cljs.core.get.call(null,map__44384__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__44384,map__44384__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__44384,map__44384__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__44386){
var map__44387 = p__44386;
var map__44387__$1 = ((((!((map__44387 == null)))?((((map__44387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44387):map__44387);
var file_msg = map__44387__$1;
var namespace = cljs.core.get.call(null,map__44387__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__44389){
var map__44390 = p__44389;
var map__44390__$1 = ((((!((map__44390 == null)))?((((map__44390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44390):map__44390);
var file_msg = map__44390__$1;
var namespace = cljs.core.get.call(null,map__44390__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28127__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28127__auto__){
var or__28139__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
var or__28139__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28139__auto____$1)){
return or__28139__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28127__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__44392,callback){
var map__44393 = p__44392;
var map__44393__$1 = ((((!((map__44393 == null)))?((((map__44393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44393):map__44393);
var file_msg = map__44393__$1;
var request_url = cljs.core.get.call(null,map__44393__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__44393__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__42199__auto___44443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto___44443,out){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto___44443,out){
return (function (state_44428){
var state_val_44429 = (state_44428[(1)]);
if((state_val_44429 === (1))){
var inst_44402 = cljs.core.seq.call(null,files);
var inst_44403 = cljs.core.first.call(null,inst_44402);
var inst_44404 = cljs.core.next.call(null,inst_44402);
var inst_44405 = files;
var state_44428__$1 = (function (){var statearr_44430 = state_44428;
(statearr_44430[(7)] = inst_44403);

(statearr_44430[(8)] = inst_44404);

(statearr_44430[(9)] = inst_44405);

return statearr_44430;
})();
var statearr_44431_44444 = state_44428__$1;
(statearr_44431_44444[(2)] = null);

(statearr_44431_44444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44429 === (2))){
var inst_44411 = (state_44428[(10)]);
var inst_44405 = (state_44428[(9)]);
var inst_44410 = cljs.core.seq.call(null,inst_44405);
var inst_44411__$1 = cljs.core.first.call(null,inst_44410);
var inst_44412 = cljs.core.next.call(null,inst_44410);
var inst_44413 = (inst_44411__$1 == null);
var inst_44414 = cljs.core.not.call(null,inst_44413);
var state_44428__$1 = (function (){var statearr_44432 = state_44428;
(statearr_44432[(10)] = inst_44411__$1);

(statearr_44432[(11)] = inst_44412);

return statearr_44432;
})();
if(inst_44414){
var statearr_44433_44445 = state_44428__$1;
(statearr_44433_44445[(1)] = (4));

} else {
var statearr_44434_44446 = state_44428__$1;
(statearr_44434_44446[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44429 === (3))){
var inst_44426 = (state_44428[(2)]);
var state_44428__$1 = state_44428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44428__$1,inst_44426);
} else {
if((state_val_44429 === (4))){
var inst_44411 = (state_44428[(10)]);
var inst_44416 = figwheel.client.file_reloading.reload_js_file.call(null,inst_44411);
var state_44428__$1 = state_44428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44428__$1,(7),inst_44416);
} else {
if((state_val_44429 === (5))){
var inst_44422 = cljs.core.async.close_BANG_.call(null,out);
var state_44428__$1 = state_44428;
var statearr_44435_44447 = state_44428__$1;
(statearr_44435_44447[(2)] = inst_44422);

(statearr_44435_44447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44429 === (6))){
var inst_44424 = (state_44428[(2)]);
var state_44428__$1 = state_44428;
var statearr_44436_44448 = state_44428__$1;
(statearr_44436_44448[(2)] = inst_44424);

(statearr_44436_44448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44429 === (7))){
var inst_44412 = (state_44428[(11)]);
var inst_44418 = (state_44428[(2)]);
var inst_44419 = cljs.core.async.put_BANG_.call(null,out,inst_44418);
var inst_44405 = inst_44412;
var state_44428__$1 = (function (){var statearr_44437 = state_44428;
(statearr_44437[(12)] = inst_44419);

(statearr_44437[(9)] = inst_44405);

return statearr_44437;
})();
var statearr_44438_44449 = state_44428__$1;
(statearr_44438_44449[(2)] = null);

(statearr_44438_44449[(1)] = (2));


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
});})(c__42199__auto___44443,out))
;
return ((function (switch__42111__auto__,c__42199__auto___44443,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42112__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42112__auto____0 = (function (){
var statearr_44439 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44439[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42112__auto__);

(statearr_44439[(1)] = (1));

return statearr_44439;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42112__auto____1 = (function (state_44428){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_44428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e44440){if((e44440 instanceof Object)){
var ex__42115__auto__ = e44440;
var statearr_44441_44450 = state_44428;
(statearr_44441_44450[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44451 = state_44428;
state_44428 = G__44451;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42112__auto__ = function(state_44428){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42112__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42112__auto____1.call(this,state_44428);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42112__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42112__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto___44443,out))
})();
var state__42201__auto__ = (function (){var statearr_44442 = f__42200__auto__.call(null);
(statearr_44442[(6)] = c__42199__auto___44443);

return statearr_44442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto___44443,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__44452,opts){
var map__44453 = p__44452;
var map__44453__$1 = ((((!((map__44453 == null)))?((((map__44453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44453):map__44453);
var eval_body = cljs.core.get.call(null,map__44453__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__44453__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28127__auto__ = eval_body;
if(cljs.core.truth_(and__28127__auto__)){
return typeof eval_body === 'string';
} else {
return and__28127__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e44455){var e = e44455;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__44456_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44456_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__44457){
var vec__44458 = p__44457;
var k = cljs.core.nth.call(null,vec__44458,(0),null);
var v = cljs.core.nth.call(null,vec__44458,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__44461){
var vec__44462 = p__44461;
var k = cljs.core.nth.call(null,vec__44462,(0),null);
var v = cljs.core.nth.call(null,vec__44462,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__44468,p__44469){
var map__44470 = p__44468;
var map__44470__$1 = ((((!((map__44470 == null)))?((((map__44470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44470.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44470):map__44470);
var opts = map__44470__$1;
var before_jsload = cljs.core.get.call(null,map__44470__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__44470__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__44470__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__44471 = p__44469;
var map__44471__$1 = ((((!((map__44471 == null)))?((((map__44471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44471.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44471):map__44471);
var msg = map__44471__$1;
var files = cljs.core.get.call(null,map__44471__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__44471__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__44471__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__42199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__42200__auto__ = (function (){var switch__42111__auto__ = ((function (c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_44625){
var state_val_44626 = (state_44625[(1)]);
if((state_val_44626 === (7))){
var inst_44486 = (state_44625[(7)]);
var inst_44487 = (state_44625[(8)]);
var inst_44485 = (state_44625[(9)]);
var inst_44488 = (state_44625[(10)]);
var inst_44493 = cljs.core._nth.call(null,inst_44486,inst_44488);
var inst_44494 = figwheel.client.file_reloading.eval_body.call(null,inst_44493,opts);
var inst_44495 = (inst_44488 + (1));
var tmp44627 = inst_44486;
var tmp44628 = inst_44487;
var tmp44629 = inst_44485;
var inst_44485__$1 = tmp44629;
var inst_44486__$1 = tmp44627;
var inst_44487__$1 = tmp44628;
var inst_44488__$1 = inst_44495;
var state_44625__$1 = (function (){var statearr_44630 = state_44625;
(statearr_44630[(7)] = inst_44486__$1);

(statearr_44630[(8)] = inst_44487__$1);

(statearr_44630[(11)] = inst_44494);

(statearr_44630[(9)] = inst_44485__$1);

(statearr_44630[(10)] = inst_44488__$1);

return statearr_44630;
})();
var statearr_44631_44714 = state_44625__$1;
(statearr_44631_44714[(2)] = null);

(statearr_44631_44714[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (20))){
var inst_44528 = (state_44625[(12)]);
var inst_44536 = figwheel.client.file_reloading.sort_files.call(null,inst_44528);
var state_44625__$1 = state_44625;
var statearr_44632_44715 = state_44625__$1;
(statearr_44632_44715[(2)] = inst_44536);

(statearr_44632_44715[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (27))){
var state_44625__$1 = state_44625;
var statearr_44633_44716 = state_44625__$1;
(statearr_44633_44716[(2)] = null);

(statearr_44633_44716[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (1))){
var inst_44477 = (state_44625[(13)]);
var inst_44474 = before_jsload.call(null,files);
var inst_44475 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_44476 = (function (){return ((function (inst_44477,inst_44474,inst_44475,state_val_44626,c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44465_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44465_SHARP_);
});
;})(inst_44477,inst_44474,inst_44475,state_val_44626,c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44477__$1 = cljs.core.filter.call(null,inst_44476,files);
var inst_44478 = cljs.core.not_empty.call(null,inst_44477__$1);
var state_44625__$1 = (function (){var statearr_44634 = state_44625;
(statearr_44634[(14)] = inst_44474);

(statearr_44634[(13)] = inst_44477__$1);

(statearr_44634[(15)] = inst_44475);

return statearr_44634;
})();
if(cljs.core.truth_(inst_44478)){
var statearr_44635_44717 = state_44625__$1;
(statearr_44635_44717[(1)] = (2));

} else {
var statearr_44636_44718 = state_44625__$1;
(statearr_44636_44718[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (24))){
var state_44625__$1 = state_44625;
var statearr_44637_44719 = state_44625__$1;
(statearr_44637_44719[(2)] = null);

(statearr_44637_44719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (39))){
var inst_44578 = (state_44625[(16)]);
var state_44625__$1 = state_44625;
var statearr_44638_44720 = state_44625__$1;
(statearr_44638_44720[(2)] = inst_44578);

(statearr_44638_44720[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (46))){
var inst_44620 = (state_44625[(2)]);
var state_44625__$1 = state_44625;
var statearr_44639_44721 = state_44625__$1;
(statearr_44639_44721[(2)] = inst_44620);

(statearr_44639_44721[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (4))){
var inst_44522 = (state_44625[(2)]);
var inst_44523 = cljs.core.List.EMPTY;
var inst_44524 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_44523);
var inst_44525 = (function (){return ((function (inst_44522,inst_44523,inst_44524,state_val_44626,c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44466_SHARP_){
var and__28127__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44466_SHARP_);
if(cljs.core.truth_(and__28127__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44466_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__44466_SHARP_)));
} else {
return and__28127__auto__;
}
});
;})(inst_44522,inst_44523,inst_44524,state_val_44626,c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44526 = cljs.core.filter.call(null,inst_44525,files);
var inst_44527 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_44528 = cljs.core.concat.call(null,inst_44526,inst_44527);
var state_44625__$1 = (function (){var statearr_44640 = state_44625;
(statearr_44640[(17)] = inst_44524);

(statearr_44640[(18)] = inst_44522);

(statearr_44640[(12)] = inst_44528);

return statearr_44640;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_44641_44722 = state_44625__$1;
(statearr_44641_44722[(1)] = (16));

} else {
var statearr_44642_44723 = state_44625__$1;
(statearr_44642_44723[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (15))){
var inst_44512 = (state_44625[(2)]);
var state_44625__$1 = state_44625;
var statearr_44643_44724 = state_44625__$1;
(statearr_44643_44724[(2)] = inst_44512);

(statearr_44643_44724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (21))){
var inst_44538 = (state_44625[(19)]);
var inst_44538__$1 = (state_44625[(2)]);
var inst_44539 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_44538__$1);
var state_44625__$1 = (function (){var statearr_44644 = state_44625;
(statearr_44644[(19)] = inst_44538__$1);

return statearr_44644;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44625__$1,(22),inst_44539);
} else {
if((state_val_44626 === (31))){
var inst_44623 = (state_44625[(2)]);
var state_44625__$1 = state_44625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44625__$1,inst_44623);
} else {
if((state_val_44626 === (32))){
var inst_44578 = (state_44625[(16)]);
var inst_44583 = inst_44578.cljs$lang$protocol_mask$partition0$;
var inst_44584 = (inst_44583 & (64));
var inst_44585 = inst_44578.cljs$core$ISeq$;
var inst_44586 = (cljs.core.PROTOCOL_SENTINEL === inst_44585);
var inst_44587 = (inst_44584) || (inst_44586);
var state_44625__$1 = state_44625;
if(cljs.core.truth_(inst_44587)){
var statearr_44645_44725 = state_44625__$1;
(statearr_44645_44725[(1)] = (35));

} else {
var statearr_44646_44726 = state_44625__$1;
(statearr_44646_44726[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (40))){
var inst_44600 = (state_44625[(20)]);
var inst_44599 = (state_44625[(2)]);
var inst_44600__$1 = cljs.core.get.call(null,inst_44599,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_44601 = cljs.core.get.call(null,inst_44599,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_44602 = cljs.core.not_empty.call(null,inst_44600__$1);
var state_44625__$1 = (function (){var statearr_44647 = state_44625;
(statearr_44647[(20)] = inst_44600__$1);

(statearr_44647[(21)] = inst_44601);

return statearr_44647;
})();
if(cljs.core.truth_(inst_44602)){
var statearr_44648_44727 = state_44625__$1;
(statearr_44648_44727[(1)] = (41));

} else {
var statearr_44649_44728 = state_44625__$1;
(statearr_44649_44728[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (33))){
var state_44625__$1 = state_44625;
var statearr_44650_44729 = state_44625__$1;
(statearr_44650_44729[(2)] = false);

(statearr_44650_44729[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (13))){
var inst_44498 = (state_44625[(22)]);
var inst_44502 = cljs.core.chunk_first.call(null,inst_44498);
var inst_44503 = cljs.core.chunk_rest.call(null,inst_44498);
var inst_44504 = cljs.core.count.call(null,inst_44502);
var inst_44485 = inst_44503;
var inst_44486 = inst_44502;
var inst_44487 = inst_44504;
var inst_44488 = (0);
var state_44625__$1 = (function (){var statearr_44651 = state_44625;
(statearr_44651[(7)] = inst_44486);

(statearr_44651[(8)] = inst_44487);

(statearr_44651[(9)] = inst_44485);

(statearr_44651[(10)] = inst_44488);

return statearr_44651;
})();
var statearr_44652_44730 = state_44625__$1;
(statearr_44652_44730[(2)] = null);

(statearr_44652_44730[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (22))){
var inst_44546 = (state_44625[(23)]);
var inst_44538 = (state_44625[(19)]);
var inst_44541 = (state_44625[(24)]);
var inst_44542 = (state_44625[(25)]);
var inst_44541__$1 = (state_44625[(2)]);
var inst_44542__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44541__$1);
var inst_44543 = (function (){var all_files = inst_44538;
var res_SINGLEQUOTE_ = inst_44541__$1;
var res = inst_44542__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_44546,inst_44538,inst_44541,inst_44542,inst_44541__$1,inst_44542__$1,state_val_44626,c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44467_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__44467_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_44546,inst_44538,inst_44541,inst_44542,inst_44541__$1,inst_44542__$1,state_val_44626,c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44544 = cljs.core.filter.call(null,inst_44543,inst_44541__$1);
var inst_44545 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_44546__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44545);
var inst_44547 = cljs.core.not_empty.call(null,inst_44546__$1);
var state_44625__$1 = (function (){var statearr_44653 = state_44625;
(statearr_44653[(23)] = inst_44546__$1);

(statearr_44653[(24)] = inst_44541__$1);

(statearr_44653[(25)] = inst_44542__$1);

(statearr_44653[(26)] = inst_44544);

return statearr_44653;
})();
if(cljs.core.truth_(inst_44547)){
var statearr_44654_44731 = state_44625__$1;
(statearr_44654_44731[(1)] = (23));

} else {
var statearr_44655_44732 = state_44625__$1;
(statearr_44655_44732[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (36))){
var state_44625__$1 = state_44625;
var statearr_44656_44733 = state_44625__$1;
(statearr_44656_44733[(2)] = false);

(statearr_44656_44733[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (41))){
var inst_44600 = (state_44625[(20)]);
var inst_44604 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_44605 = cljs.core.map.call(null,inst_44604,inst_44600);
var inst_44606 = cljs.core.pr_str.call(null,inst_44605);
var inst_44607 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44606)].join('');
var inst_44608 = figwheel.client.utils.log.call(null,inst_44607);
var state_44625__$1 = state_44625;
var statearr_44657_44734 = state_44625__$1;
(statearr_44657_44734[(2)] = inst_44608);

(statearr_44657_44734[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (43))){
var inst_44601 = (state_44625[(21)]);
var inst_44611 = (state_44625[(2)]);
var inst_44612 = cljs.core.not_empty.call(null,inst_44601);
var state_44625__$1 = (function (){var statearr_44658 = state_44625;
(statearr_44658[(27)] = inst_44611);

return statearr_44658;
})();
if(cljs.core.truth_(inst_44612)){
var statearr_44659_44735 = state_44625__$1;
(statearr_44659_44735[(1)] = (44));

} else {
var statearr_44660_44736 = state_44625__$1;
(statearr_44660_44736[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (29))){
var inst_44546 = (state_44625[(23)]);
var inst_44538 = (state_44625[(19)]);
var inst_44541 = (state_44625[(24)]);
var inst_44578 = (state_44625[(16)]);
var inst_44542 = (state_44625[(25)]);
var inst_44544 = (state_44625[(26)]);
var inst_44574 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_44577 = (function (){var all_files = inst_44538;
var res_SINGLEQUOTE_ = inst_44541;
var res = inst_44542;
var files_not_loaded = inst_44544;
var dependencies_that_loaded = inst_44546;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44546,inst_44538,inst_44541,inst_44578,inst_44542,inst_44544,inst_44574,state_val_44626,c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44576){
var map__44661 = p__44576;
var map__44661__$1 = ((((!((map__44661 == null)))?((((map__44661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44661):map__44661);
var namespace = cljs.core.get.call(null,map__44661__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44546,inst_44538,inst_44541,inst_44578,inst_44542,inst_44544,inst_44574,state_val_44626,c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44578__$1 = cljs.core.group_by.call(null,inst_44577,inst_44544);
var inst_44580 = (inst_44578__$1 == null);
var inst_44581 = cljs.core.not.call(null,inst_44580);
var state_44625__$1 = (function (){var statearr_44663 = state_44625;
(statearr_44663[(28)] = inst_44574);

(statearr_44663[(16)] = inst_44578__$1);

return statearr_44663;
})();
if(inst_44581){
var statearr_44664_44737 = state_44625__$1;
(statearr_44664_44737[(1)] = (32));

} else {
var statearr_44665_44738 = state_44625__$1;
(statearr_44665_44738[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (44))){
var inst_44601 = (state_44625[(21)]);
var inst_44614 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44601);
var inst_44615 = cljs.core.pr_str.call(null,inst_44614);
var inst_44616 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44615)].join('');
var inst_44617 = figwheel.client.utils.log.call(null,inst_44616);
var state_44625__$1 = state_44625;
var statearr_44666_44739 = state_44625__$1;
(statearr_44666_44739[(2)] = inst_44617);

(statearr_44666_44739[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (6))){
var inst_44519 = (state_44625[(2)]);
var state_44625__$1 = state_44625;
var statearr_44667_44740 = state_44625__$1;
(statearr_44667_44740[(2)] = inst_44519);

(statearr_44667_44740[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (28))){
var inst_44544 = (state_44625[(26)]);
var inst_44571 = (state_44625[(2)]);
var inst_44572 = cljs.core.not_empty.call(null,inst_44544);
var state_44625__$1 = (function (){var statearr_44668 = state_44625;
(statearr_44668[(29)] = inst_44571);

return statearr_44668;
})();
if(cljs.core.truth_(inst_44572)){
var statearr_44669_44741 = state_44625__$1;
(statearr_44669_44741[(1)] = (29));

} else {
var statearr_44670_44742 = state_44625__$1;
(statearr_44670_44742[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (25))){
var inst_44542 = (state_44625[(25)]);
var inst_44558 = (state_44625[(2)]);
var inst_44559 = cljs.core.not_empty.call(null,inst_44542);
var state_44625__$1 = (function (){var statearr_44671 = state_44625;
(statearr_44671[(30)] = inst_44558);

return statearr_44671;
})();
if(cljs.core.truth_(inst_44559)){
var statearr_44672_44743 = state_44625__$1;
(statearr_44672_44743[(1)] = (26));

} else {
var statearr_44673_44744 = state_44625__$1;
(statearr_44673_44744[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (34))){
var inst_44594 = (state_44625[(2)]);
var state_44625__$1 = state_44625;
if(cljs.core.truth_(inst_44594)){
var statearr_44674_44745 = state_44625__$1;
(statearr_44674_44745[(1)] = (38));

} else {
var statearr_44675_44746 = state_44625__$1;
(statearr_44675_44746[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (17))){
var state_44625__$1 = state_44625;
var statearr_44676_44747 = state_44625__$1;
(statearr_44676_44747[(2)] = recompile_dependents);

(statearr_44676_44747[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (3))){
var state_44625__$1 = state_44625;
var statearr_44677_44748 = state_44625__$1;
(statearr_44677_44748[(2)] = null);

(statearr_44677_44748[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (12))){
var inst_44515 = (state_44625[(2)]);
var state_44625__$1 = state_44625;
var statearr_44678_44749 = state_44625__$1;
(statearr_44678_44749[(2)] = inst_44515);

(statearr_44678_44749[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (2))){
var inst_44477 = (state_44625[(13)]);
var inst_44484 = cljs.core.seq.call(null,inst_44477);
var inst_44485 = inst_44484;
var inst_44486 = null;
var inst_44487 = (0);
var inst_44488 = (0);
var state_44625__$1 = (function (){var statearr_44679 = state_44625;
(statearr_44679[(7)] = inst_44486);

(statearr_44679[(8)] = inst_44487);

(statearr_44679[(9)] = inst_44485);

(statearr_44679[(10)] = inst_44488);

return statearr_44679;
})();
var statearr_44680_44750 = state_44625__$1;
(statearr_44680_44750[(2)] = null);

(statearr_44680_44750[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (23))){
var inst_44546 = (state_44625[(23)]);
var inst_44538 = (state_44625[(19)]);
var inst_44541 = (state_44625[(24)]);
var inst_44542 = (state_44625[(25)]);
var inst_44544 = (state_44625[(26)]);
var inst_44549 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_44551 = (function (){var all_files = inst_44538;
var res_SINGLEQUOTE_ = inst_44541;
var res = inst_44542;
var files_not_loaded = inst_44544;
var dependencies_that_loaded = inst_44546;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44546,inst_44538,inst_44541,inst_44542,inst_44544,inst_44549,state_val_44626,c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44550){
var map__44681 = p__44550;
var map__44681__$1 = ((((!((map__44681 == null)))?((((map__44681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44681):map__44681);
var request_url = cljs.core.get.call(null,map__44681__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44546,inst_44538,inst_44541,inst_44542,inst_44544,inst_44549,state_val_44626,c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44552 = cljs.core.reverse.call(null,inst_44546);
var inst_44553 = cljs.core.map.call(null,inst_44551,inst_44552);
var inst_44554 = cljs.core.pr_str.call(null,inst_44553);
var inst_44555 = figwheel.client.utils.log.call(null,inst_44554);
var state_44625__$1 = (function (){var statearr_44683 = state_44625;
(statearr_44683[(31)] = inst_44549);

return statearr_44683;
})();
var statearr_44684_44751 = state_44625__$1;
(statearr_44684_44751[(2)] = inst_44555);

(statearr_44684_44751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (35))){
var state_44625__$1 = state_44625;
var statearr_44685_44752 = state_44625__$1;
(statearr_44685_44752[(2)] = true);

(statearr_44685_44752[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (19))){
var inst_44528 = (state_44625[(12)]);
var inst_44534 = figwheel.client.file_reloading.expand_files.call(null,inst_44528);
var state_44625__$1 = state_44625;
var statearr_44686_44753 = state_44625__$1;
(statearr_44686_44753[(2)] = inst_44534);

(statearr_44686_44753[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (11))){
var state_44625__$1 = state_44625;
var statearr_44687_44754 = state_44625__$1;
(statearr_44687_44754[(2)] = null);

(statearr_44687_44754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (9))){
var inst_44517 = (state_44625[(2)]);
var state_44625__$1 = state_44625;
var statearr_44688_44755 = state_44625__$1;
(statearr_44688_44755[(2)] = inst_44517);

(statearr_44688_44755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (5))){
var inst_44487 = (state_44625[(8)]);
var inst_44488 = (state_44625[(10)]);
var inst_44490 = (inst_44488 < inst_44487);
var inst_44491 = inst_44490;
var state_44625__$1 = state_44625;
if(cljs.core.truth_(inst_44491)){
var statearr_44689_44756 = state_44625__$1;
(statearr_44689_44756[(1)] = (7));

} else {
var statearr_44690_44757 = state_44625__$1;
(statearr_44690_44757[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (14))){
var inst_44498 = (state_44625[(22)]);
var inst_44507 = cljs.core.first.call(null,inst_44498);
var inst_44508 = figwheel.client.file_reloading.eval_body.call(null,inst_44507,opts);
var inst_44509 = cljs.core.next.call(null,inst_44498);
var inst_44485 = inst_44509;
var inst_44486 = null;
var inst_44487 = (0);
var inst_44488 = (0);
var state_44625__$1 = (function (){var statearr_44691 = state_44625;
(statearr_44691[(7)] = inst_44486);

(statearr_44691[(8)] = inst_44487);

(statearr_44691[(9)] = inst_44485);

(statearr_44691[(10)] = inst_44488);

(statearr_44691[(32)] = inst_44508);

return statearr_44691;
})();
var statearr_44692_44758 = state_44625__$1;
(statearr_44692_44758[(2)] = null);

(statearr_44692_44758[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (45))){
var state_44625__$1 = state_44625;
var statearr_44693_44759 = state_44625__$1;
(statearr_44693_44759[(2)] = null);

(statearr_44693_44759[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (26))){
var inst_44546 = (state_44625[(23)]);
var inst_44538 = (state_44625[(19)]);
var inst_44541 = (state_44625[(24)]);
var inst_44542 = (state_44625[(25)]);
var inst_44544 = (state_44625[(26)]);
var inst_44561 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_44563 = (function (){var all_files = inst_44538;
var res_SINGLEQUOTE_ = inst_44541;
var res = inst_44542;
var files_not_loaded = inst_44544;
var dependencies_that_loaded = inst_44546;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44546,inst_44538,inst_44541,inst_44542,inst_44544,inst_44561,state_val_44626,c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44562){
var map__44694 = p__44562;
var map__44694__$1 = ((((!((map__44694 == null)))?((((map__44694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44694):map__44694);
var namespace = cljs.core.get.call(null,map__44694__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__44694__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44546,inst_44538,inst_44541,inst_44542,inst_44544,inst_44561,state_val_44626,c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44564 = cljs.core.map.call(null,inst_44563,inst_44542);
var inst_44565 = cljs.core.pr_str.call(null,inst_44564);
var inst_44566 = figwheel.client.utils.log.call(null,inst_44565);
var inst_44567 = (function (){var all_files = inst_44538;
var res_SINGLEQUOTE_ = inst_44541;
var res = inst_44542;
var files_not_loaded = inst_44544;
var dependencies_that_loaded = inst_44546;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44546,inst_44538,inst_44541,inst_44542,inst_44544,inst_44561,inst_44563,inst_44564,inst_44565,inst_44566,state_val_44626,c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44546,inst_44538,inst_44541,inst_44542,inst_44544,inst_44561,inst_44563,inst_44564,inst_44565,inst_44566,state_val_44626,c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44568 = setTimeout(inst_44567,(10));
var state_44625__$1 = (function (){var statearr_44696 = state_44625;
(statearr_44696[(33)] = inst_44561);

(statearr_44696[(34)] = inst_44566);

return statearr_44696;
})();
var statearr_44697_44760 = state_44625__$1;
(statearr_44697_44760[(2)] = inst_44568);

(statearr_44697_44760[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (16))){
var state_44625__$1 = state_44625;
var statearr_44698_44761 = state_44625__$1;
(statearr_44698_44761[(2)] = reload_dependents);

(statearr_44698_44761[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (38))){
var inst_44578 = (state_44625[(16)]);
var inst_44596 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44578);
var state_44625__$1 = state_44625;
var statearr_44699_44762 = state_44625__$1;
(statearr_44699_44762[(2)] = inst_44596);

(statearr_44699_44762[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (30))){
var state_44625__$1 = state_44625;
var statearr_44700_44763 = state_44625__$1;
(statearr_44700_44763[(2)] = null);

(statearr_44700_44763[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (10))){
var inst_44498 = (state_44625[(22)]);
var inst_44500 = cljs.core.chunked_seq_QMARK_.call(null,inst_44498);
var state_44625__$1 = state_44625;
if(inst_44500){
var statearr_44701_44764 = state_44625__$1;
(statearr_44701_44764[(1)] = (13));

} else {
var statearr_44702_44765 = state_44625__$1;
(statearr_44702_44765[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (18))){
var inst_44532 = (state_44625[(2)]);
var state_44625__$1 = state_44625;
if(cljs.core.truth_(inst_44532)){
var statearr_44703_44766 = state_44625__$1;
(statearr_44703_44766[(1)] = (19));

} else {
var statearr_44704_44767 = state_44625__$1;
(statearr_44704_44767[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (42))){
var state_44625__$1 = state_44625;
var statearr_44705_44768 = state_44625__$1;
(statearr_44705_44768[(2)] = null);

(statearr_44705_44768[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (37))){
var inst_44591 = (state_44625[(2)]);
var state_44625__$1 = state_44625;
var statearr_44706_44769 = state_44625__$1;
(statearr_44706_44769[(2)] = inst_44591);

(statearr_44706_44769[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44626 === (8))){
var inst_44498 = (state_44625[(22)]);
var inst_44485 = (state_44625[(9)]);
var inst_44498__$1 = cljs.core.seq.call(null,inst_44485);
var state_44625__$1 = (function (){var statearr_44707 = state_44625;
(statearr_44707[(22)] = inst_44498__$1);

return statearr_44707;
})();
if(inst_44498__$1){
var statearr_44708_44770 = state_44625__$1;
(statearr_44708_44770[(1)] = (10));

} else {
var statearr_44709_44771 = state_44625__$1;
(statearr_44709_44771[(1)] = (11));

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
});})(c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__42111__auto__,c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42112__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42112__auto____0 = (function (){
var statearr_44710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44710[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__42112__auto__);

(statearr_44710[(1)] = (1));

return statearr_44710;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42112__auto____1 = (function (state_44625){
while(true){
var ret_value__42113__auto__ = (function (){try{while(true){
var result__42114__auto__ = switch__42111__auto__.call(null,state_44625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42114__auto__;
}
break;
}
}catch (e44711){if((e44711 instanceof Object)){
var ex__42115__auto__ = e44711;
var statearr_44712_44772 = state_44625;
(statearr_44712_44772[(5)] = ex__42115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44773 = state_44625;
state_44625 = G__44773;
continue;
} else {
return ret_value__42113__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__42112__auto__ = function(state_44625){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42112__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42112__auto____1.call(this,state_44625);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__42112__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__42112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__42112__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42112__auto__;
})()
;})(switch__42111__auto__,c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__42201__auto__ = (function (){var statearr_44713 = f__42200__auto__.call(null);
(statearr_44713[(6)] = c__42199__auto__);

return statearr_44713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42201__auto__);
});})(c__42199__auto__,map__44470,map__44470__$1,opts,before_jsload,on_jsload,reload_dependents,map__44471,map__44471__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__42199__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__44776,link){
var map__44777 = p__44776;
var map__44777__$1 = ((((!((map__44777 == null)))?((((map__44777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44777):map__44777);
var file = cljs.core.get.call(null,map__44777__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__44777,map__44777__$1,file){
return (function (p1__44774_SHARP_,p2__44775_SHARP_){
if(cljs.core._EQ_.call(null,p1__44774_SHARP_,p2__44775_SHARP_)){
return p1__44774_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__44777,map__44777__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__44780){
var map__44781 = p__44780;
var map__44781__$1 = ((((!((map__44781 == null)))?((((map__44781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44781):map__44781);
var match_length = cljs.core.get.call(null,map__44781__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__44781__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__44779_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__44779_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__44783_SHARP_,p2__44784_SHARP_){
return cljs.core.assoc.call(null,p1__44783_SHARP_,cljs.core.get.call(null,p2__44784_SHARP_,key),p2__44784_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_44785 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_44785);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_44785);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__44786,p__44787){
var map__44788 = p__44786;
var map__44788__$1 = ((((!((map__44788 == null)))?((((map__44788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44788):map__44788);
var on_cssload = cljs.core.get.call(null,map__44788__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__44789 = p__44787;
var map__44789__$1 = ((((!((map__44789 == null)))?((((map__44789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44789):map__44789);
var files_msg = map__44789__$1;
var files = cljs.core.get.call(null,map__44789__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1506931541880
