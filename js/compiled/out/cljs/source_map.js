// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__35088){
var vec__35089 = p__35088;
var i = cljs.core.nth.call(null,vec__35089,(0),null);
var v = cljs.core.nth.call(null,vec__35089,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__35092 = seg;
var gcol = cljs.core.nth.call(null,vec__35092,(0),null);
var source = cljs.core.nth.call(null,vec__35092,(1),null);
var line = cljs.core.nth.call(null,vec__35092,(2),null);
var col = cljs.core.nth.call(null,vec__35092,(3),null);
var name = cljs.core.nth.call(null,vec__35092,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4657__auto__)){
var name__$1 = temp__4657__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__35095 = seg;
var gcol = cljs.core.nth.call(null,vec__35095,(0),null);
var source = cljs.core.nth.call(null,vec__35095,(1),null);
var line = cljs.core.nth.call(null,vec__35095,(2),null);
var col = cljs.core.nth.call(null,vec__35095,(3),null);
var name = cljs.core.nth.call(null,vec__35095,(4),null);
var vec__35098 = relseg;
var rgcol = cljs.core.nth.call(null,vec__35098,(0),null);
var rsource = cljs.core.nth.call(null,vec__35098,(1),null);
var rline = cljs.core.nth.call(null,vec__35098,(2),null);
var rcol = cljs.core.nth.call(null,vec__35098,(3),null);
var rname = cljs.core.nth.call(null,vec__35098,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__28826__auto__ = source;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__28826__auto__ = line;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__28826__auto__ = col;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__28826__auto__ = name;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__35101 = segmap;
var map__35101__$1 = ((((!((map__35101 == null)))?((((map__35101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35101):map__35101);
var gcol = cljs.core.get.call(null,map__35101__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__35101__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__35101__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__35101__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__35101__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__35101,map__35101__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__35101,map__35101__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__35101,map__35101__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__35101,map__35101__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__35101,map__35101__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__35101,map__35101__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__35104 = arguments.length;
switch (G__35104) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__35105 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__35109 = cljs.core.next.call(null,segs__$1);
var G__35110 = nrelseg;
var G__35111 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__35109;
relseg__$1 = G__35110;
result__$1 = G__35111;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__35105,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__35105,(1),null);
var G__35112 = (gline + (1));
var G__35113 = cljs.core.next.call(null,lines__$1);
var G__35114 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__35115 = result__$1;
gline = G__35112;
lines__$1 = G__35113;
relseg = G__35114;
result = G__35115;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__35117 = segmap;
var map__35117__$1 = ((((!((map__35117 == null)))?((((map__35117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35117):map__35117);
var gcol = cljs.core.get.call(null,map__35117__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__35117__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__35117__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__35117__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__35117__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__35117,map__35117__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__35117,map__35117__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__35116_SHARP_){
return cljs.core.conj.call(null,p1__35116_SHARP_,d__$1);
});})(map__35117,map__35117__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__35117,map__35117__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__35120 = arguments.length;
switch (G__35120) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__35121 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__35125 = cljs.core.next.call(null,segs__$1);
var G__35126 = nrelseg;
var G__35127 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__35125;
relseg__$1 = G__35126;
result__$1 = G__35127;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__35121,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__35121,(1),null);
var G__35128 = (gline + (1));
var G__35129 = cljs.core.next.call(null,lines__$1);
var G__35130 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__35131 = result__$1;
gline = G__35128;
lines__$1 = G__35129;
relseg = G__35130;
result = G__35131;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__35132){
var vec__35133 = p__35132;
var _ = cljs.core.nth.call(null,vec__35133,(0),null);
var source = cljs.core.nth.call(null,vec__35133,(1),null);
var line = cljs.core.nth.call(null,vec__35133,(2),null);
var col = cljs.core.nth.call(null,vec__35133,(3),null);
var name = cljs.core.nth.call(null,vec__35133,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__35136){
var vec__35137 = p__35136;
var gcol = cljs.core.nth.call(null,vec__35137,(0),null);
var sidx = cljs.core.nth.call(null,vec__35137,(1),null);
var line = cljs.core.nth.call(null,vec__35137,(2),null);
var col = cljs.core.nth.call(null,vec__35137,(3),null);
var name = cljs.core.nth.call(null,vec__35137,(4),null);
var seg = vec__35137;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__35137,gcol,sidx,line,col,name,seg,relseg){
return (function (p__35140){
var vec__35141 = p__35140;
var _ = cljs.core.nth.call(null,vec__35141,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35141,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__35141,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__35141,(3),null);
var lname = cljs.core.nth.call(null,vec__35141,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__28826__auto__ = name;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__35137,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__28826__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__35147 = cljs.core.seq.call(null,infos);
var chunk__35148 = null;
var count__35149 = (0);
var i__35150 = (0);
while(true){
if((i__35150 < count__35149)){
var info = cljs.core._nth.call(null,chunk__35148,i__35150);
var segv_35229 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_35230 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_35231 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_35230 > (lc_35231 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__35147,chunk__35148,count__35149,i__35150,segv_35229,gline_35230,lc_35231,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_35230 - (lc_35231 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_35229], null));
});})(seq__35147,chunk__35148,count__35149,i__35150,segv_35229,gline_35230,lc_35231,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__35147,chunk__35148,count__35149,i__35150,segv_35229,gline_35230,lc_35231,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_35230], null),cljs.core.conj,segv_35229);
});})(seq__35147,chunk__35148,count__35149,i__35150,segv_35229,gline_35230,lc_35231,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__35232 = seq__35147;
var G__35233 = chunk__35148;
var G__35234 = count__35149;
var G__35235 = (i__35150 + (1));
seq__35147 = G__35232;
chunk__35148 = G__35233;
count__35149 = G__35234;
i__35150 = G__35235;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35147);
if(temp__4657__auto__){
var seq__35147__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35147__$1)){
var c__29665__auto__ = cljs.core.chunk_first.call(null,seq__35147__$1);
var G__35236 = cljs.core.chunk_rest.call(null,seq__35147__$1);
var G__35237 = c__29665__auto__;
var G__35238 = cljs.core.count.call(null,c__29665__auto__);
var G__35239 = (0);
seq__35147 = G__35236;
chunk__35148 = G__35237;
count__35149 = G__35238;
i__35150 = G__35239;
continue;
} else {
var info = cljs.core.first.call(null,seq__35147__$1);
var segv_35240 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_35241 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_35242 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_35241 > (lc_35242 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__35147,chunk__35148,count__35149,i__35150,segv_35240,gline_35241,lc_35242,info,seq__35147__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_35241 - (lc_35242 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_35240], null));
});})(seq__35147,chunk__35148,count__35149,i__35150,segv_35240,gline_35241,lc_35242,info,seq__35147__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__35147,chunk__35148,count__35149,i__35150,segv_35240,gline_35241,lc_35242,info,seq__35147__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_35241], null),cljs.core.conj,segv_35240);
});})(seq__35147,chunk__35148,count__35149,i__35150,segv_35240,gline_35241,lc_35242,info,seq__35147__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__35243 = cljs.core.next.call(null,seq__35147__$1);
var G__35244 = null;
var G__35245 = (0);
var G__35246 = (0);
seq__35147 = G__35243;
chunk__35148 = G__35244;
count__35149 = G__35245;
i__35150 = G__35246;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__35151_35247 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__35152_35248 = null;
var count__35153_35249 = (0);
var i__35154_35250 = (0);
while(true){
if((i__35154_35250 < count__35153_35249)){
var vec__35155_35251 = cljs.core._nth.call(null,chunk__35152_35248,i__35154_35250);
var source_idx_35252 = cljs.core.nth.call(null,vec__35155_35251,(0),null);
var vec__35158_35253 = cljs.core.nth.call(null,vec__35155_35251,(1),null);
var __35254 = cljs.core.nth.call(null,vec__35158_35253,(0),null);
var lines_35255__$1 = cljs.core.nth.call(null,vec__35158_35253,(1),null);
var seq__35161_35256 = cljs.core.seq.call(null,lines_35255__$1);
var chunk__35162_35257 = null;
var count__35163_35258 = (0);
var i__35164_35259 = (0);
while(true){
if((i__35164_35259 < count__35163_35258)){
var vec__35165_35260 = cljs.core._nth.call(null,chunk__35162_35257,i__35164_35259);
var line_35261 = cljs.core.nth.call(null,vec__35165_35260,(0),null);
var cols_35262 = cljs.core.nth.call(null,vec__35165_35260,(1),null);
var seq__35168_35263 = cljs.core.seq.call(null,cols_35262);
var chunk__35169_35264 = null;
var count__35170_35265 = (0);
var i__35171_35266 = (0);
while(true){
if((i__35171_35266 < count__35170_35265)){
var vec__35172_35267 = cljs.core._nth.call(null,chunk__35169_35264,i__35171_35266);
var col_35268 = cljs.core.nth.call(null,vec__35172_35267,(0),null);
var infos_35269 = cljs.core.nth.call(null,vec__35172_35267,(1),null);
encode_cols.call(null,infos_35269,source_idx_35252,line_35261,col_35268);

var G__35270 = seq__35168_35263;
var G__35271 = chunk__35169_35264;
var G__35272 = count__35170_35265;
var G__35273 = (i__35171_35266 + (1));
seq__35168_35263 = G__35270;
chunk__35169_35264 = G__35271;
count__35170_35265 = G__35272;
i__35171_35266 = G__35273;
continue;
} else {
var temp__4657__auto___35274 = cljs.core.seq.call(null,seq__35168_35263);
if(temp__4657__auto___35274){
var seq__35168_35275__$1 = temp__4657__auto___35274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35168_35275__$1)){
var c__29665__auto___35276 = cljs.core.chunk_first.call(null,seq__35168_35275__$1);
var G__35277 = cljs.core.chunk_rest.call(null,seq__35168_35275__$1);
var G__35278 = c__29665__auto___35276;
var G__35279 = cljs.core.count.call(null,c__29665__auto___35276);
var G__35280 = (0);
seq__35168_35263 = G__35277;
chunk__35169_35264 = G__35278;
count__35170_35265 = G__35279;
i__35171_35266 = G__35280;
continue;
} else {
var vec__35175_35281 = cljs.core.first.call(null,seq__35168_35275__$1);
var col_35282 = cljs.core.nth.call(null,vec__35175_35281,(0),null);
var infos_35283 = cljs.core.nth.call(null,vec__35175_35281,(1),null);
encode_cols.call(null,infos_35283,source_idx_35252,line_35261,col_35282);

var G__35284 = cljs.core.next.call(null,seq__35168_35275__$1);
var G__35285 = null;
var G__35286 = (0);
var G__35287 = (0);
seq__35168_35263 = G__35284;
chunk__35169_35264 = G__35285;
count__35170_35265 = G__35286;
i__35171_35266 = G__35287;
continue;
}
} else {
}
}
break;
}

var G__35288 = seq__35161_35256;
var G__35289 = chunk__35162_35257;
var G__35290 = count__35163_35258;
var G__35291 = (i__35164_35259 + (1));
seq__35161_35256 = G__35288;
chunk__35162_35257 = G__35289;
count__35163_35258 = G__35290;
i__35164_35259 = G__35291;
continue;
} else {
var temp__4657__auto___35292 = cljs.core.seq.call(null,seq__35161_35256);
if(temp__4657__auto___35292){
var seq__35161_35293__$1 = temp__4657__auto___35292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35161_35293__$1)){
var c__29665__auto___35294 = cljs.core.chunk_first.call(null,seq__35161_35293__$1);
var G__35295 = cljs.core.chunk_rest.call(null,seq__35161_35293__$1);
var G__35296 = c__29665__auto___35294;
var G__35297 = cljs.core.count.call(null,c__29665__auto___35294);
var G__35298 = (0);
seq__35161_35256 = G__35295;
chunk__35162_35257 = G__35296;
count__35163_35258 = G__35297;
i__35164_35259 = G__35298;
continue;
} else {
var vec__35178_35299 = cljs.core.first.call(null,seq__35161_35293__$1);
var line_35300 = cljs.core.nth.call(null,vec__35178_35299,(0),null);
var cols_35301 = cljs.core.nth.call(null,vec__35178_35299,(1),null);
var seq__35181_35302 = cljs.core.seq.call(null,cols_35301);
var chunk__35182_35303 = null;
var count__35183_35304 = (0);
var i__35184_35305 = (0);
while(true){
if((i__35184_35305 < count__35183_35304)){
var vec__35185_35306 = cljs.core._nth.call(null,chunk__35182_35303,i__35184_35305);
var col_35307 = cljs.core.nth.call(null,vec__35185_35306,(0),null);
var infos_35308 = cljs.core.nth.call(null,vec__35185_35306,(1),null);
encode_cols.call(null,infos_35308,source_idx_35252,line_35300,col_35307);

var G__35309 = seq__35181_35302;
var G__35310 = chunk__35182_35303;
var G__35311 = count__35183_35304;
var G__35312 = (i__35184_35305 + (1));
seq__35181_35302 = G__35309;
chunk__35182_35303 = G__35310;
count__35183_35304 = G__35311;
i__35184_35305 = G__35312;
continue;
} else {
var temp__4657__auto___35313__$1 = cljs.core.seq.call(null,seq__35181_35302);
if(temp__4657__auto___35313__$1){
var seq__35181_35314__$1 = temp__4657__auto___35313__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35181_35314__$1)){
var c__29665__auto___35315 = cljs.core.chunk_first.call(null,seq__35181_35314__$1);
var G__35316 = cljs.core.chunk_rest.call(null,seq__35181_35314__$1);
var G__35317 = c__29665__auto___35315;
var G__35318 = cljs.core.count.call(null,c__29665__auto___35315);
var G__35319 = (0);
seq__35181_35302 = G__35316;
chunk__35182_35303 = G__35317;
count__35183_35304 = G__35318;
i__35184_35305 = G__35319;
continue;
} else {
var vec__35188_35320 = cljs.core.first.call(null,seq__35181_35314__$1);
var col_35321 = cljs.core.nth.call(null,vec__35188_35320,(0),null);
var infos_35322 = cljs.core.nth.call(null,vec__35188_35320,(1),null);
encode_cols.call(null,infos_35322,source_idx_35252,line_35300,col_35321);

var G__35323 = cljs.core.next.call(null,seq__35181_35314__$1);
var G__35324 = null;
var G__35325 = (0);
var G__35326 = (0);
seq__35181_35302 = G__35323;
chunk__35182_35303 = G__35324;
count__35183_35304 = G__35325;
i__35184_35305 = G__35326;
continue;
}
} else {
}
}
break;
}

var G__35327 = cljs.core.next.call(null,seq__35161_35293__$1);
var G__35328 = null;
var G__35329 = (0);
var G__35330 = (0);
seq__35161_35256 = G__35327;
chunk__35162_35257 = G__35328;
count__35163_35258 = G__35329;
i__35164_35259 = G__35330;
continue;
}
} else {
}
}
break;
}

var G__35331 = seq__35151_35247;
var G__35332 = chunk__35152_35248;
var G__35333 = count__35153_35249;
var G__35334 = (i__35154_35250 + (1));
seq__35151_35247 = G__35331;
chunk__35152_35248 = G__35332;
count__35153_35249 = G__35333;
i__35154_35250 = G__35334;
continue;
} else {
var temp__4657__auto___35335 = cljs.core.seq.call(null,seq__35151_35247);
if(temp__4657__auto___35335){
var seq__35151_35336__$1 = temp__4657__auto___35335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35151_35336__$1)){
var c__29665__auto___35337 = cljs.core.chunk_first.call(null,seq__35151_35336__$1);
var G__35338 = cljs.core.chunk_rest.call(null,seq__35151_35336__$1);
var G__35339 = c__29665__auto___35337;
var G__35340 = cljs.core.count.call(null,c__29665__auto___35337);
var G__35341 = (0);
seq__35151_35247 = G__35338;
chunk__35152_35248 = G__35339;
count__35153_35249 = G__35340;
i__35154_35250 = G__35341;
continue;
} else {
var vec__35191_35342 = cljs.core.first.call(null,seq__35151_35336__$1);
var source_idx_35343 = cljs.core.nth.call(null,vec__35191_35342,(0),null);
var vec__35194_35344 = cljs.core.nth.call(null,vec__35191_35342,(1),null);
var __35345 = cljs.core.nth.call(null,vec__35194_35344,(0),null);
var lines_35346__$1 = cljs.core.nth.call(null,vec__35194_35344,(1),null);
var seq__35197_35347 = cljs.core.seq.call(null,lines_35346__$1);
var chunk__35198_35348 = null;
var count__35199_35349 = (0);
var i__35200_35350 = (0);
while(true){
if((i__35200_35350 < count__35199_35349)){
var vec__35201_35351 = cljs.core._nth.call(null,chunk__35198_35348,i__35200_35350);
var line_35352 = cljs.core.nth.call(null,vec__35201_35351,(0),null);
var cols_35353 = cljs.core.nth.call(null,vec__35201_35351,(1),null);
var seq__35204_35354 = cljs.core.seq.call(null,cols_35353);
var chunk__35205_35355 = null;
var count__35206_35356 = (0);
var i__35207_35357 = (0);
while(true){
if((i__35207_35357 < count__35206_35356)){
var vec__35208_35358 = cljs.core._nth.call(null,chunk__35205_35355,i__35207_35357);
var col_35359 = cljs.core.nth.call(null,vec__35208_35358,(0),null);
var infos_35360 = cljs.core.nth.call(null,vec__35208_35358,(1),null);
encode_cols.call(null,infos_35360,source_idx_35343,line_35352,col_35359);

var G__35361 = seq__35204_35354;
var G__35362 = chunk__35205_35355;
var G__35363 = count__35206_35356;
var G__35364 = (i__35207_35357 + (1));
seq__35204_35354 = G__35361;
chunk__35205_35355 = G__35362;
count__35206_35356 = G__35363;
i__35207_35357 = G__35364;
continue;
} else {
var temp__4657__auto___35365__$1 = cljs.core.seq.call(null,seq__35204_35354);
if(temp__4657__auto___35365__$1){
var seq__35204_35366__$1 = temp__4657__auto___35365__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35204_35366__$1)){
var c__29665__auto___35367 = cljs.core.chunk_first.call(null,seq__35204_35366__$1);
var G__35368 = cljs.core.chunk_rest.call(null,seq__35204_35366__$1);
var G__35369 = c__29665__auto___35367;
var G__35370 = cljs.core.count.call(null,c__29665__auto___35367);
var G__35371 = (0);
seq__35204_35354 = G__35368;
chunk__35205_35355 = G__35369;
count__35206_35356 = G__35370;
i__35207_35357 = G__35371;
continue;
} else {
var vec__35211_35372 = cljs.core.first.call(null,seq__35204_35366__$1);
var col_35373 = cljs.core.nth.call(null,vec__35211_35372,(0),null);
var infos_35374 = cljs.core.nth.call(null,vec__35211_35372,(1),null);
encode_cols.call(null,infos_35374,source_idx_35343,line_35352,col_35373);

var G__35375 = cljs.core.next.call(null,seq__35204_35366__$1);
var G__35376 = null;
var G__35377 = (0);
var G__35378 = (0);
seq__35204_35354 = G__35375;
chunk__35205_35355 = G__35376;
count__35206_35356 = G__35377;
i__35207_35357 = G__35378;
continue;
}
} else {
}
}
break;
}

var G__35379 = seq__35197_35347;
var G__35380 = chunk__35198_35348;
var G__35381 = count__35199_35349;
var G__35382 = (i__35200_35350 + (1));
seq__35197_35347 = G__35379;
chunk__35198_35348 = G__35380;
count__35199_35349 = G__35381;
i__35200_35350 = G__35382;
continue;
} else {
var temp__4657__auto___35383__$1 = cljs.core.seq.call(null,seq__35197_35347);
if(temp__4657__auto___35383__$1){
var seq__35197_35384__$1 = temp__4657__auto___35383__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35197_35384__$1)){
var c__29665__auto___35385 = cljs.core.chunk_first.call(null,seq__35197_35384__$1);
var G__35386 = cljs.core.chunk_rest.call(null,seq__35197_35384__$1);
var G__35387 = c__29665__auto___35385;
var G__35388 = cljs.core.count.call(null,c__29665__auto___35385);
var G__35389 = (0);
seq__35197_35347 = G__35386;
chunk__35198_35348 = G__35387;
count__35199_35349 = G__35388;
i__35200_35350 = G__35389;
continue;
} else {
var vec__35214_35390 = cljs.core.first.call(null,seq__35197_35384__$1);
var line_35391 = cljs.core.nth.call(null,vec__35214_35390,(0),null);
var cols_35392 = cljs.core.nth.call(null,vec__35214_35390,(1),null);
var seq__35217_35393 = cljs.core.seq.call(null,cols_35392);
var chunk__35218_35394 = null;
var count__35219_35395 = (0);
var i__35220_35396 = (0);
while(true){
if((i__35220_35396 < count__35219_35395)){
var vec__35221_35397 = cljs.core._nth.call(null,chunk__35218_35394,i__35220_35396);
var col_35398 = cljs.core.nth.call(null,vec__35221_35397,(0),null);
var infos_35399 = cljs.core.nth.call(null,vec__35221_35397,(1),null);
encode_cols.call(null,infos_35399,source_idx_35343,line_35391,col_35398);

var G__35400 = seq__35217_35393;
var G__35401 = chunk__35218_35394;
var G__35402 = count__35219_35395;
var G__35403 = (i__35220_35396 + (1));
seq__35217_35393 = G__35400;
chunk__35218_35394 = G__35401;
count__35219_35395 = G__35402;
i__35220_35396 = G__35403;
continue;
} else {
var temp__4657__auto___35404__$2 = cljs.core.seq.call(null,seq__35217_35393);
if(temp__4657__auto___35404__$2){
var seq__35217_35405__$1 = temp__4657__auto___35404__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35217_35405__$1)){
var c__29665__auto___35406 = cljs.core.chunk_first.call(null,seq__35217_35405__$1);
var G__35407 = cljs.core.chunk_rest.call(null,seq__35217_35405__$1);
var G__35408 = c__29665__auto___35406;
var G__35409 = cljs.core.count.call(null,c__29665__auto___35406);
var G__35410 = (0);
seq__35217_35393 = G__35407;
chunk__35218_35394 = G__35408;
count__35219_35395 = G__35409;
i__35220_35396 = G__35410;
continue;
} else {
var vec__35224_35411 = cljs.core.first.call(null,seq__35217_35405__$1);
var col_35412 = cljs.core.nth.call(null,vec__35224_35411,(0),null);
var infos_35413 = cljs.core.nth.call(null,vec__35224_35411,(1),null);
encode_cols.call(null,infos_35413,source_idx_35343,line_35391,col_35412);

var G__35414 = cljs.core.next.call(null,seq__35217_35405__$1);
var G__35415 = null;
var G__35416 = (0);
var G__35417 = (0);
seq__35217_35393 = G__35414;
chunk__35218_35394 = G__35415;
count__35219_35395 = G__35416;
i__35220_35396 = G__35417;
continue;
}
} else {
}
}
break;
}

var G__35418 = cljs.core.next.call(null,seq__35197_35384__$1);
var G__35419 = null;
var G__35420 = (0);
var G__35421 = (0);
seq__35197_35347 = G__35418;
chunk__35198_35348 = G__35419;
count__35199_35349 = G__35420;
i__35200_35350 = G__35421;
continue;
}
} else {
}
}
break;
}

var G__35422 = cljs.core.next.call(null,seq__35151_35336__$1);
var G__35423 = null;
var G__35424 = (0);
var G__35425 = (0);
seq__35151_35247 = G__35422;
chunk__35152_35248 = G__35423;
count__35153_35249 = G__35424;
i__35154_35250 = G__35425;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__35227 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__35144_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35144_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__35145_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__35145_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__35146_SHARP_){
return clojure.string.join.call(null,",",p1__35146_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__35228 = G__35227;
goog.object.set(G__35228,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__35228;
} else {
return G__35227;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__35426 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__35426,(0),null);
var col_map = cljs.core.nth.call(null,vec__35426,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__35429 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__35429,(0),null);
var infos = cljs.core.nth.call(null,vec__35429,(1),null);
var G__35435 = cljs.core.next.call(null,col_map_seq);
var G__35436 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__35429,col,infos,vec__35426,line,col_map){
return (function (v,p__35432){
var map__35433 = p__35432;
var map__35433__$1 = ((((!((map__35433 == null)))?((((map__35433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35433):map__35433);
var gline = cljs.core.get.call(null,map__35433__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__35433__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__35429,col,infos,vec__35426,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__35435;
new_cols = G__35436;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__35437 = cljs.core.next.call(null,line_map_seq);
var G__35438 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__35437;
new_lines = G__35438;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__35439_35501 = cljs.core.seq.call(null,reverse_map);
var chunk__35440_35502 = null;
var count__35441_35503 = (0);
var i__35442_35504 = (0);
while(true){
if((i__35442_35504 < count__35441_35503)){
var vec__35443_35505 = cljs.core._nth.call(null,chunk__35440_35502,i__35442_35504);
var line_35506 = cljs.core.nth.call(null,vec__35443_35505,(0),null);
var columns_35507 = cljs.core.nth.call(null,vec__35443_35505,(1),null);
var seq__35446_35508 = cljs.core.seq.call(null,columns_35507);
var chunk__35447_35509 = null;
var count__35448_35510 = (0);
var i__35449_35511 = (0);
while(true){
if((i__35449_35511 < count__35448_35510)){
var vec__35450_35512 = cljs.core._nth.call(null,chunk__35447_35509,i__35449_35511);
var column_35513 = cljs.core.nth.call(null,vec__35450_35512,(0),null);
var column_info_35514 = cljs.core.nth.call(null,vec__35450_35512,(1),null);
var seq__35453_35515 = cljs.core.seq.call(null,column_info_35514);
var chunk__35454_35516 = null;
var count__35455_35517 = (0);
var i__35456_35518 = (0);
while(true){
if((i__35456_35518 < count__35455_35517)){
var map__35457_35519 = cljs.core._nth.call(null,chunk__35454_35516,i__35456_35518);
var map__35457_35520__$1 = ((((!((map__35457_35519 == null)))?((((map__35457_35519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35457_35519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35457_35519):map__35457_35519);
var gline_35521 = cljs.core.get.call(null,map__35457_35520__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_35522 = cljs.core.get.call(null,map__35457_35520__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_35523 = cljs.core.get.call(null,map__35457_35520__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_35521], null),cljs.core.fnil.call(null,((function (seq__35453_35515,chunk__35454_35516,count__35455_35517,i__35456_35518,seq__35446_35508,chunk__35447_35509,count__35448_35510,i__35449_35511,seq__35439_35501,chunk__35440_35502,count__35441_35503,i__35442_35504,map__35457_35519,map__35457_35520__$1,gline_35521,gcol_35522,name_35523,vec__35450_35512,column_35513,column_info_35514,vec__35443_35505,line_35506,columns_35507,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_35522], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_35506,new cljs.core.Keyword(null,"col","col",-1959363084),column_35513,new cljs.core.Keyword(null,"name","name",1843675177),name_35523], null));
});})(seq__35453_35515,chunk__35454_35516,count__35455_35517,i__35456_35518,seq__35446_35508,chunk__35447_35509,count__35448_35510,i__35449_35511,seq__35439_35501,chunk__35440_35502,count__35441_35503,i__35442_35504,map__35457_35519,map__35457_35520__$1,gline_35521,gcol_35522,name_35523,vec__35450_35512,column_35513,column_info_35514,vec__35443_35505,line_35506,columns_35507,inverted))
,cljs.core.sorted_map.call(null)));

var G__35524 = seq__35453_35515;
var G__35525 = chunk__35454_35516;
var G__35526 = count__35455_35517;
var G__35527 = (i__35456_35518 + (1));
seq__35453_35515 = G__35524;
chunk__35454_35516 = G__35525;
count__35455_35517 = G__35526;
i__35456_35518 = G__35527;
continue;
} else {
var temp__4657__auto___35528 = cljs.core.seq.call(null,seq__35453_35515);
if(temp__4657__auto___35528){
var seq__35453_35529__$1 = temp__4657__auto___35528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35453_35529__$1)){
var c__29665__auto___35530 = cljs.core.chunk_first.call(null,seq__35453_35529__$1);
var G__35531 = cljs.core.chunk_rest.call(null,seq__35453_35529__$1);
var G__35532 = c__29665__auto___35530;
var G__35533 = cljs.core.count.call(null,c__29665__auto___35530);
var G__35534 = (0);
seq__35453_35515 = G__35531;
chunk__35454_35516 = G__35532;
count__35455_35517 = G__35533;
i__35456_35518 = G__35534;
continue;
} else {
var map__35459_35535 = cljs.core.first.call(null,seq__35453_35529__$1);
var map__35459_35536__$1 = ((((!((map__35459_35535 == null)))?((((map__35459_35535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35459_35535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35459_35535):map__35459_35535);
var gline_35537 = cljs.core.get.call(null,map__35459_35536__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_35538 = cljs.core.get.call(null,map__35459_35536__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_35539 = cljs.core.get.call(null,map__35459_35536__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_35537], null),cljs.core.fnil.call(null,((function (seq__35453_35515,chunk__35454_35516,count__35455_35517,i__35456_35518,seq__35446_35508,chunk__35447_35509,count__35448_35510,i__35449_35511,seq__35439_35501,chunk__35440_35502,count__35441_35503,i__35442_35504,map__35459_35535,map__35459_35536__$1,gline_35537,gcol_35538,name_35539,seq__35453_35529__$1,temp__4657__auto___35528,vec__35450_35512,column_35513,column_info_35514,vec__35443_35505,line_35506,columns_35507,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_35538], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_35506,new cljs.core.Keyword(null,"col","col",-1959363084),column_35513,new cljs.core.Keyword(null,"name","name",1843675177),name_35539], null));
});})(seq__35453_35515,chunk__35454_35516,count__35455_35517,i__35456_35518,seq__35446_35508,chunk__35447_35509,count__35448_35510,i__35449_35511,seq__35439_35501,chunk__35440_35502,count__35441_35503,i__35442_35504,map__35459_35535,map__35459_35536__$1,gline_35537,gcol_35538,name_35539,seq__35453_35529__$1,temp__4657__auto___35528,vec__35450_35512,column_35513,column_info_35514,vec__35443_35505,line_35506,columns_35507,inverted))
,cljs.core.sorted_map.call(null)));

var G__35540 = cljs.core.next.call(null,seq__35453_35529__$1);
var G__35541 = null;
var G__35542 = (0);
var G__35543 = (0);
seq__35453_35515 = G__35540;
chunk__35454_35516 = G__35541;
count__35455_35517 = G__35542;
i__35456_35518 = G__35543;
continue;
}
} else {
}
}
break;
}

var G__35544 = seq__35446_35508;
var G__35545 = chunk__35447_35509;
var G__35546 = count__35448_35510;
var G__35547 = (i__35449_35511 + (1));
seq__35446_35508 = G__35544;
chunk__35447_35509 = G__35545;
count__35448_35510 = G__35546;
i__35449_35511 = G__35547;
continue;
} else {
var temp__4657__auto___35548 = cljs.core.seq.call(null,seq__35446_35508);
if(temp__4657__auto___35548){
var seq__35446_35549__$1 = temp__4657__auto___35548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35446_35549__$1)){
var c__29665__auto___35550 = cljs.core.chunk_first.call(null,seq__35446_35549__$1);
var G__35551 = cljs.core.chunk_rest.call(null,seq__35446_35549__$1);
var G__35552 = c__29665__auto___35550;
var G__35553 = cljs.core.count.call(null,c__29665__auto___35550);
var G__35554 = (0);
seq__35446_35508 = G__35551;
chunk__35447_35509 = G__35552;
count__35448_35510 = G__35553;
i__35449_35511 = G__35554;
continue;
} else {
var vec__35461_35555 = cljs.core.first.call(null,seq__35446_35549__$1);
var column_35556 = cljs.core.nth.call(null,vec__35461_35555,(0),null);
var column_info_35557 = cljs.core.nth.call(null,vec__35461_35555,(1),null);
var seq__35464_35558 = cljs.core.seq.call(null,column_info_35557);
var chunk__35465_35559 = null;
var count__35466_35560 = (0);
var i__35467_35561 = (0);
while(true){
if((i__35467_35561 < count__35466_35560)){
var map__35468_35562 = cljs.core._nth.call(null,chunk__35465_35559,i__35467_35561);
var map__35468_35563__$1 = ((((!((map__35468_35562 == null)))?((((map__35468_35562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35468_35562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35468_35562):map__35468_35562);
var gline_35564 = cljs.core.get.call(null,map__35468_35563__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_35565 = cljs.core.get.call(null,map__35468_35563__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_35566 = cljs.core.get.call(null,map__35468_35563__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_35564], null),cljs.core.fnil.call(null,((function (seq__35464_35558,chunk__35465_35559,count__35466_35560,i__35467_35561,seq__35446_35508,chunk__35447_35509,count__35448_35510,i__35449_35511,seq__35439_35501,chunk__35440_35502,count__35441_35503,i__35442_35504,map__35468_35562,map__35468_35563__$1,gline_35564,gcol_35565,name_35566,vec__35461_35555,column_35556,column_info_35557,seq__35446_35549__$1,temp__4657__auto___35548,vec__35443_35505,line_35506,columns_35507,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_35565], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_35506,new cljs.core.Keyword(null,"col","col",-1959363084),column_35556,new cljs.core.Keyword(null,"name","name",1843675177),name_35566], null));
});})(seq__35464_35558,chunk__35465_35559,count__35466_35560,i__35467_35561,seq__35446_35508,chunk__35447_35509,count__35448_35510,i__35449_35511,seq__35439_35501,chunk__35440_35502,count__35441_35503,i__35442_35504,map__35468_35562,map__35468_35563__$1,gline_35564,gcol_35565,name_35566,vec__35461_35555,column_35556,column_info_35557,seq__35446_35549__$1,temp__4657__auto___35548,vec__35443_35505,line_35506,columns_35507,inverted))
,cljs.core.sorted_map.call(null)));

var G__35567 = seq__35464_35558;
var G__35568 = chunk__35465_35559;
var G__35569 = count__35466_35560;
var G__35570 = (i__35467_35561 + (1));
seq__35464_35558 = G__35567;
chunk__35465_35559 = G__35568;
count__35466_35560 = G__35569;
i__35467_35561 = G__35570;
continue;
} else {
var temp__4657__auto___35571__$1 = cljs.core.seq.call(null,seq__35464_35558);
if(temp__4657__auto___35571__$1){
var seq__35464_35572__$1 = temp__4657__auto___35571__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35464_35572__$1)){
var c__29665__auto___35573 = cljs.core.chunk_first.call(null,seq__35464_35572__$1);
var G__35574 = cljs.core.chunk_rest.call(null,seq__35464_35572__$1);
var G__35575 = c__29665__auto___35573;
var G__35576 = cljs.core.count.call(null,c__29665__auto___35573);
var G__35577 = (0);
seq__35464_35558 = G__35574;
chunk__35465_35559 = G__35575;
count__35466_35560 = G__35576;
i__35467_35561 = G__35577;
continue;
} else {
var map__35470_35578 = cljs.core.first.call(null,seq__35464_35572__$1);
var map__35470_35579__$1 = ((((!((map__35470_35578 == null)))?((((map__35470_35578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35470_35578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35470_35578):map__35470_35578);
var gline_35580 = cljs.core.get.call(null,map__35470_35579__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_35581 = cljs.core.get.call(null,map__35470_35579__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_35582 = cljs.core.get.call(null,map__35470_35579__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_35580], null),cljs.core.fnil.call(null,((function (seq__35464_35558,chunk__35465_35559,count__35466_35560,i__35467_35561,seq__35446_35508,chunk__35447_35509,count__35448_35510,i__35449_35511,seq__35439_35501,chunk__35440_35502,count__35441_35503,i__35442_35504,map__35470_35578,map__35470_35579__$1,gline_35580,gcol_35581,name_35582,seq__35464_35572__$1,temp__4657__auto___35571__$1,vec__35461_35555,column_35556,column_info_35557,seq__35446_35549__$1,temp__4657__auto___35548,vec__35443_35505,line_35506,columns_35507,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_35581], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_35506,new cljs.core.Keyword(null,"col","col",-1959363084),column_35556,new cljs.core.Keyword(null,"name","name",1843675177),name_35582], null));
});})(seq__35464_35558,chunk__35465_35559,count__35466_35560,i__35467_35561,seq__35446_35508,chunk__35447_35509,count__35448_35510,i__35449_35511,seq__35439_35501,chunk__35440_35502,count__35441_35503,i__35442_35504,map__35470_35578,map__35470_35579__$1,gline_35580,gcol_35581,name_35582,seq__35464_35572__$1,temp__4657__auto___35571__$1,vec__35461_35555,column_35556,column_info_35557,seq__35446_35549__$1,temp__4657__auto___35548,vec__35443_35505,line_35506,columns_35507,inverted))
,cljs.core.sorted_map.call(null)));

var G__35583 = cljs.core.next.call(null,seq__35464_35572__$1);
var G__35584 = null;
var G__35585 = (0);
var G__35586 = (0);
seq__35464_35558 = G__35583;
chunk__35465_35559 = G__35584;
count__35466_35560 = G__35585;
i__35467_35561 = G__35586;
continue;
}
} else {
}
}
break;
}

var G__35587 = cljs.core.next.call(null,seq__35446_35549__$1);
var G__35588 = null;
var G__35589 = (0);
var G__35590 = (0);
seq__35446_35508 = G__35587;
chunk__35447_35509 = G__35588;
count__35448_35510 = G__35589;
i__35449_35511 = G__35590;
continue;
}
} else {
}
}
break;
}

var G__35591 = seq__35439_35501;
var G__35592 = chunk__35440_35502;
var G__35593 = count__35441_35503;
var G__35594 = (i__35442_35504 + (1));
seq__35439_35501 = G__35591;
chunk__35440_35502 = G__35592;
count__35441_35503 = G__35593;
i__35442_35504 = G__35594;
continue;
} else {
var temp__4657__auto___35595 = cljs.core.seq.call(null,seq__35439_35501);
if(temp__4657__auto___35595){
var seq__35439_35596__$1 = temp__4657__auto___35595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35439_35596__$1)){
var c__29665__auto___35597 = cljs.core.chunk_first.call(null,seq__35439_35596__$1);
var G__35598 = cljs.core.chunk_rest.call(null,seq__35439_35596__$1);
var G__35599 = c__29665__auto___35597;
var G__35600 = cljs.core.count.call(null,c__29665__auto___35597);
var G__35601 = (0);
seq__35439_35501 = G__35598;
chunk__35440_35502 = G__35599;
count__35441_35503 = G__35600;
i__35442_35504 = G__35601;
continue;
} else {
var vec__35472_35602 = cljs.core.first.call(null,seq__35439_35596__$1);
var line_35603 = cljs.core.nth.call(null,vec__35472_35602,(0),null);
var columns_35604 = cljs.core.nth.call(null,vec__35472_35602,(1),null);
var seq__35475_35605 = cljs.core.seq.call(null,columns_35604);
var chunk__35476_35606 = null;
var count__35477_35607 = (0);
var i__35478_35608 = (0);
while(true){
if((i__35478_35608 < count__35477_35607)){
var vec__35479_35609 = cljs.core._nth.call(null,chunk__35476_35606,i__35478_35608);
var column_35610 = cljs.core.nth.call(null,vec__35479_35609,(0),null);
var column_info_35611 = cljs.core.nth.call(null,vec__35479_35609,(1),null);
var seq__35482_35612 = cljs.core.seq.call(null,column_info_35611);
var chunk__35483_35613 = null;
var count__35484_35614 = (0);
var i__35485_35615 = (0);
while(true){
if((i__35485_35615 < count__35484_35614)){
var map__35486_35616 = cljs.core._nth.call(null,chunk__35483_35613,i__35485_35615);
var map__35486_35617__$1 = ((((!((map__35486_35616 == null)))?((((map__35486_35616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35486_35616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35486_35616):map__35486_35616);
var gline_35618 = cljs.core.get.call(null,map__35486_35617__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_35619 = cljs.core.get.call(null,map__35486_35617__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_35620 = cljs.core.get.call(null,map__35486_35617__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_35618], null),cljs.core.fnil.call(null,((function (seq__35482_35612,chunk__35483_35613,count__35484_35614,i__35485_35615,seq__35475_35605,chunk__35476_35606,count__35477_35607,i__35478_35608,seq__35439_35501,chunk__35440_35502,count__35441_35503,i__35442_35504,map__35486_35616,map__35486_35617__$1,gline_35618,gcol_35619,name_35620,vec__35479_35609,column_35610,column_info_35611,vec__35472_35602,line_35603,columns_35604,seq__35439_35596__$1,temp__4657__auto___35595,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_35619], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_35603,new cljs.core.Keyword(null,"col","col",-1959363084),column_35610,new cljs.core.Keyword(null,"name","name",1843675177),name_35620], null));
});})(seq__35482_35612,chunk__35483_35613,count__35484_35614,i__35485_35615,seq__35475_35605,chunk__35476_35606,count__35477_35607,i__35478_35608,seq__35439_35501,chunk__35440_35502,count__35441_35503,i__35442_35504,map__35486_35616,map__35486_35617__$1,gline_35618,gcol_35619,name_35620,vec__35479_35609,column_35610,column_info_35611,vec__35472_35602,line_35603,columns_35604,seq__35439_35596__$1,temp__4657__auto___35595,inverted))
,cljs.core.sorted_map.call(null)));

var G__35621 = seq__35482_35612;
var G__35622 = chunk__35483_35613;
var G__35623 = count__35484_35614;
var G__35624 = (i__35485_35615 + (1));
seq__35482_35612 = G__35621;
chunk__35483_35613 = G__35622;
count__35484_35614 = G__35623;
i__35485_35615 = G__35624;
continue;
} else {
var temp__4657__auto___35625__$1 = cljs.core.seq.call(null,seq__35482_35612);
if(temp__4657__auto___35625__$1){
var seq__35482_35626__$1 = temp__4657__auto___35625__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35482_35626__$1)){
var c__29665__auto___35627 = cljs.core.chunk_first.call(null,seq__35482_35626__$1);
var G__35628 = cljs.core.chunk_rest.call(null,seq__35482_35626__$1);
var G__35629 = c__29665__auto___35627;
var G__35630 = cljs.core.count.call(null,c__29665__auto___35627);
var G__35631 = (0);
seq__35482_35612 = G__35628;
chunk__35483_35613 = G__35629;
count__35484_35614 = G__35630;
i__35485_35615 = G__35631;
continue;
} else {
var map__35488_35632 = cljs.core.first.call(null,seq__35482_35626__$1);
var map__35488_35633__$1 = ((((!((map__35488_35632 == null)))?((((map__35488_35632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35488_35632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35488_35632):map__35488_35632);
var gline_35634 = cljs.core.get.call(null,map__35488_35633__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_35635 = cljs.core.get.call(null,map__35488_35633__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_35636 = cljs.core.get.call(null,map__35488_35633__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_35634], null),cljs.core.fnil.call(null,((function (seq__35482_35612,chunk__35483_35613,count__35484_35614,i__35485_35615,seq__35475_35605,chunk__35476_35606,count__35477_35607,i__35478_35608,seq__35439_35501,chunk__35440_35502,count__35441_35503,i__35442_35504,map__35488_35632,map__35488_35633__$1,gline_35634,gcol_35635,name_35636,seq__35482_35626__$1,temp__4657__auto___35625__$1,vec__35479_35609,column_35610,column_info_35611,vec__35472_35602,line_35603,columns_35604,seq__35439_35596__$1,temp__4657__auto___35595,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_35635], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_35603,new cljs.core.Keyword(null,"col","col",-1959363084),column_35610,new cljs.core.Keyword(null,"name","name",1843675177),name_35636], null));
});})(seq__35482_35612,chunk__35483_35613,count__35484_35614,i__35485_35615,seq__35475_35605,chunk__35476_35606,count__35477_35607,i__35478_35608,seq__35439_35501,chunk__35440_35502,count__35441_35503,i__35442_35504,map__35488_35632,map__35488_35633__$1,gline_35634,gcol_35635,name_35636,seq__35482_35626__$1,temp__4657__auto___35625__$1,vec__35479_35609,column_35610,column_info_35611,vec__35472_35602,line_35603,columns_35604,seq__35439_35596__$1,temp__4657__auto___35595,inverted))
,cljs.core.sorted_map.call(null)));

var G__35637 = cljs.core.next.call(null,seq__35482_35626__$1);
var G__35638 = null;
var G__35639 = (0);
var G__35640 = (0);
seq__35482_35612 = G__35637;
chunk__35483_35613 = G__35638;
count__35484_35614 = G__35639;
i__35485_35615 = G__35640;
continue;
}
} else {
}
}
break;
}

var G__35641 = seq__35475_35605;
var G__35642 = chunk__35476_35606;
var G__35643 = count__35477_35607;
var G__35644 = (i__35478_35608 + (1));
seq__35475_35605 = G__35641;
chunk__35476_35606 = G__35642;
count__35477_35607 = G__35643;
i__35478_35608 = G__35644;
continue;
} else {
var temp__4657__auto___35645__$1 = cljs.core.seq.call(null,seq__35475_35605);
if(temp__4657__auto___35645__$1){
var seq__35475_35646__$1 = temp__4657__auto___35645__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35475_35646__$1)){
var c__29665__auto___35647 = cljs.core.chunk_first.call(null,seq__35475_35646__$1);
var G__35648 = cljs.core.chunk_rest.call(null,seq__35475_35646__$1);
var G__35649 = c__29665__auto___35647;
var G__35650 = cljs.core.count.call(null,c__29665__auto___35647);
var G__35651 = (0);
seq__35475_35605 = G__35648;
chunk__35476_35606 = G__35649;
count__35477_35607 = G__35650;
i__35478_35608 = G__35651;
continue;
} else {
var vec__35490_35652 = cljs.core.first.call(null,seq__35475_35646__$1);
var column_35653 = cljs.core.nth.call(null,vec__35490_35652,(0),null);
var column_info_35654 = cljs.core.nth.call(null,vec__35490_35652,(1),null);
var seq__35493_35655 = cljs.core.seq.call(null,column_info_35654);
var chunk__35494_35656 = null;
var count__35495_35657 = (0);
var i__35496_35658 = (0);
while(true){
if((i__35496_35658 < count__35495_35657)){
var map__35497_35659 = cljs.core._nth.call(null,chunk__35494_35656,i__35496_35658);
var map__35497_35660__$1 = ((((!((map__35497_35659 == null)))?((((map__35497_35659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35497_35659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35497_35659):map__35497_35659);
var gline_35661 = cljs.core.get.call(null,map__35497_35660__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_35662 = cljs.core.get.call(null,map__35497_35660__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_35663 = cljs.core.get.call(null,map__35497_35660__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_35661], null),cljs.core.fnil.call(null,((function (seq__35493_35655,chunk__35494_35656,count__35495_35657,i__35496_35658,seq__35475_35605,chunk__35476_35606,count__35477_35607,i__35478_35608,seq__35439_35501,chunk__35440_35502,count__35441_35503,i__35442_35504,map__35497_35659,map__35497_35660__$1,gline_35661,gcol_35662,name_35663,vec__35490_35652,column_35653,column_info_35654,seq__35475_35646__$1,temp__4657__auto___35645__$1,vec__35472_35602,line_35603,columns_35604,seq__35439_35596__$1,temp__4657__auto___35595,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_35662], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_35603,new cljs.core.Keyword(null,"col","col",-1959363084),column_35653,new cljs.core.Keyword(null,"name","name",1843675177),name_35663], null));
});})(seq__35493_35655,chunk__35494_35656,count__35495_35657,i__35496_35658,seq__35475_35605,chunk__35476_35606,count__35477_35607,i__35478_35608,seq__35439_35501,chunk__35440_35502,count__35441_35503,i__35442_35504,map__35497_35659,map__35497_35660__$1,gline_35661,gcol_35662,name_35663,vec__35490_35652,column_35653,column_info_35654,seq__35475_35646__$1,temp__4657__auto___35645__$1,vec__35472_35602,line_35603,columns_35604,seq__35439_35596__$1,temp__4657__auto___35595,inverted))
,cljs.core.sorted_map.call(null)));

var G__35664 = seq__35493_35655;
var G__35665 = chunk__35494_35656;
var G__35666 = count__35495_35657;
var G__35667 = (i__35496_35658 + (1));
seq__35493_35655 = G__35664;
chunk__35494_35656 = G__35665;
count__35495_35657 = G__35666;
i__35496_35658 = G__35667;
continue;
} else {
var temp__4657__auto___35668__$2 = cljs.core.seq.call(null,seq__35493_35655);
if(temp__4657__auto___35668__$2){
var seq__35493_35669__$1 = temp__4657__auto___35668__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35493_35669__$1)){
var c__29665__auto___35670 = cljs.core.chunk_first.call(null,seq__35493_35669__$1);
var G__35671 = cljs.core.chunk_rest.call(null,seq__35493_35669__$1);
var G__35672 = c__29665__auto___35670;
var G__35673 = cljs.core.count.call(null,c__29665__auto___35670);
var G__35674 = (0);
seq__35493_35655 = G__35671;
chunk__35494_35656 = G__35672;
count__35495_35657 = G__35673;
i__35496_35658 = G__35674;
continue;
} else {
var map__35499_35675 = cljs.core.first.call(null,seq__35493_35669__$1);
var map__35499_35676__$1 = ((((!((map__35499_35675 == null)))?((((map__35499_35675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35499_35675.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35499_35675):map__35499_35675);
var gline_35677 = cljs.core.get.call(null,map__35499_35676__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_35678 = cljs.core.get.call(null,map__35499_35676__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_35679 = cljs.core.get.call(null,map__35499_35676__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_35677], null),cljs.core.fnil.call(null,((function (seq__35493_35655,chunk__35494_35656,count__35495_35657,i__35496_35658,seq__35475_35605,chunk__35476_35606,count__35477_35607,i__35478_35608,seq__35439_35501,chunk__35440_35502,count__35441_35503,i__35442_35504,map__35499_35675,map__35499_35676__$1,gline_35677,gcol_35678,name_35679,seq__35493_35669__$1,temp__4657__auto___35668__$2,vec__35490_35652,column_35653,column_info_35654,seq__35475_35646__$1,temp__4657__auto___35645__$1,vec__35472_35602,line_35603,columns_35604,seq__35439_35596__$1,temp__4657__auto___35595,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_35678], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_35603,new cljs.core.Keyword(null,"col","col",-1959363084),column_35653,new cljs.core.Keyword(null,"name","name",1843675177),name_35679], null));
});})(seq__35493_35655,chunk__35494_35656,count__35495_35657,i__35496_35658,seq__35475_35605,chunk__35476_35606,count__35477_35607,i__35478_35608,seq__35439_35501,chunk__35440_35502,count__35441_35503,i__35442_35504,map__35499_35675,map__35499_35676__$1,gline_35677,gcol_35678,name_35679,seq__35493_35669__$1,temp__4657__auto___35668__$2,vec__35490_35652,column_35653,column_info_35654,seq__35475_35646__$1,temp__4657__auto___35645__$1,vec__35472_35602,line_35603,columns_35604,seq__35439_35596__$1,temp__4657__auto___35595,inverted))
,cljs.core.sorted_map.call(null)));

var G__35680 = cljs.core.next.call(null,seq__35493_35669__$1);
var G__35681 = null;
var G__35682 = (0);
var G__35683 = (0);
seq__35493_35655 = G__35680;
chunk__35494_35656 = G__35681;
count__35495_35657 = G__35682;
i__35496_35658 = G__35683;
continue;
}
} else {
}
}
break;
}

var G__35684 = cljs.core.next.call(null,seq__35475_35646__$1);
var G__35685 = null;
var G__35686 = (0);
var G__35687 = (0);
seq__35475_35605 = G__35684;
chunk__35476_35606 = G__35685;
count__35477_35607 = G__35686;
i__35478_35608 = G__35687;
continue;
}
} else {
}
}
break;
}

var G__35688 = cljs.core.next.call(null,seq__35439_35596__$1);
var G__35689 = null;
var G__35690 = (0);
var G__35691 = (0);
seq__35439_35501 = G__35688;
chunk__35440_35502 = G__35689;
count__35441_35503 = G__35690;
i__35442_35504 = G__35691;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1506930999388
