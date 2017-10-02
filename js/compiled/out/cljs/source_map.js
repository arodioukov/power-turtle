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
return cljs.core.reduce.call(null,(function (m,p__34182){
var vec__34183 = p__34182;
var i = cljs.core.nth.call(null,vec__34183,(0),null);
var v = cljs.core.nth.call(null,vec__34183,(1),null);
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
var vec__34186 = seg;
var gcol = cljs.core.nth.call(null,vec__34186,(0),null);
var source = cljs.core.nth.call(null,vec__34186,(1),null);
var line = cljs.core.nth.call(null,vec__34186,(2),null);
var col = cljs.core.nth.call(null,vec__34186,(3),null);
var name = cljs.core.nth.call(null,vec__34186,(4),null);
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
var vec__34189 = seg;
var gcol = cljs.core.nth.call(null,vec__34189,(0),null);
var source = cljs.core.nth.call(null,vec__34189,(1),null);
var line = cljs.core.nth.call(null,vec__34189,(2),null);
var col = cljs.core.nth.call(null,vec__34189,(3),null);
var name = cljs.core.nth.call(null,vec__34189,(4),null);
var vec__34192 = relseg;
var rgcol = cljs.core.nth.call(null,vec__34192,(0),null);
var rsource = cljs.core.nth.call(null,vec__34192,(1),null);
var rline = cljs.core.nth.call(null,vec__34192,(2),null);
var rcol = cljs.core.nth.call(null,vec__34192,(3),null);
var rname = cljs.core.nth.call(null,vec__34192,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__28139__auto__ = source;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__28139__auto__ = line;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__28139__auto__ = col;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__28139__auto__ = name;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
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
var map__34195 = segmap;
var map__34195__$1 = ((((!((map__34195 == null)))?((((map__34195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34195):map__34195);
var gcol = cljs.core.get.call(null,map__34195__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__34195__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__34195__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__34195__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__34195__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__34195,map__34195__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__34195,map__34195__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__34195,map__34195__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__34195,map__34195__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__34195,map__34195__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__34195,map__34195__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__34198 = arguments.length;
switch (G__34198) {
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
var vec__34199 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__34203 = cljs.core.next.call(null,segs__$1);
var G__34204 = nrelseg;
var G__34205 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__34203;
relseg__$1 = G__34204;
result__$1 = G__34205;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__34199,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__34199,(1),null);
var G__34206 = (gline + (1));
var G__34207 = cljs.core.next.call(null,lines__$1);
var G__34208 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__34209 = result__$1;
gline = G__34206;
lines__$1 = G__34207;
relseg = G__34208;
result = G__34209;
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
var map__34211 = segmap;
var map__34211__$1 = ((((!((map__34211 == null)))?((((map__34211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34211.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34211):map__34211);
var gcol = cljs.core.get.call(null,map__34211__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__34211__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__34211__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__34211__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__34211__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__34211,map__34211__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__34211,map__34211__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__34210_SHARP_){
return cljs.core.conj.call(null,p1__34210_SHARP_,d__$1);
});})(map__34211,map__34211__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__34211,map__34211__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__34214 = arguments.length;
switch (G__34214) {
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
var vec__34215 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__34219 = cljs.core.next.call(null,segs__$1);
var G__34220 = nrelseg;
var G__34221 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__34219;
relseg__$1 = G__34220;
result__$1 = G__34221;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__34215,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__34215,(1),null);
var G__34222 = (gline + (1));
var G__34223 = cljs.core.next.call(null,lines__$1);
var G__34224 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__34225 = result__$1;
gline = G__34222;
lines__$1 = G__34223;
relseg = G__34224;
result = G__34225;
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
return (function (p__34226){
var vec__34227 = p__34226;
var _ = cljs.core.nth.call(null,vec__34227,(0),null);
var source = cljs.core.nth.call(null,vec__34227,(1),null);
var line = cljs.core.nth.call(null,vec__34227,(2),null);
var col = cljs.core.nth.call(null,vec__34227,(3),null);
var name = cljs.core.nth.call(null,vec__34227,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__34230){
var vec__34231 = p__34230;
var gcol = cljs.core.nth.call(null,vec__34231,(0),null);
var sidx = cljs.core.nth.call(null,vec__34231,(1),null);
var line = cljs.core.nth.call(null,vec__34231,(2),null);
var col = cljs.core.nth.call(null,vec__34231,(3),null);
var name = cljs.core.nth.call(null,vec__34231,(4),null);
var seg = vec__34231;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__34231,gcol,sidx,line,col,name,seg,relseg){
return (function (p__34234){
var vec__34235 = p__34234;
var _ = cljs.core.nth.call(null,vec__34235,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__34235,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__34235,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__34235,(3),null);
var lname = cljs.core.nth.call(null,vec__34235,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__28139__auto__ = name;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__34231,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__28139__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
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
var seq__34241 = cljs.core.seq.call(null,infos);
var chunk__34242 = null;
var count__34243 = (0);
var i__34244 = (0);
while(true){
if((i__34244 < count__34243)){
var info = cljs.core._nth.call(null,chunk__34242,i__34244);
var segv_34323 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_34324 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_34325 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_34324 > (lc_34325 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__34241,chunk__34242,count__34243,i__34244,segv_34323,gline_34324,lc_34325,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_34324 - (lc_34325 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_34323], null));
});})(seq__34241,chunk__34242,count__34243,i__34244,segv_34323,gline_34324,lc_34325,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__34241,chunk__34242,count__34243,i__34244,segv_34323,gline_34324,lc_34325,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34324], null),cljs.core.conj,segv_34323);
});})(seq__34241,chunk__34242,count__34243,i__34244,segv_34323,gline_34324,lc_34325,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__34326 = seq__34241;
var G__34327 = chunk__34242;
var G__34328 = count__34243;
var G__34329 = (i__34244 + (1));
seq__34241 = G__34326;
chunk__34242 = G__34327;
count__34243 = G__34328;
i__34244 = G__34329;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34241);
if(temp__4657__auto__){
var seq__34241__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34241__$1)){
var c__28978__auto__ = cljs.core.chunk_first.call(null,seq__34241__$1);
var G__34330 = cljs.core.chunk_rest.call(null,seq__34241__$1);
var G__34331 = c__28978__auto__;
var G__34332 = cljs.core.count.call(null,c__28978__auto__);
var G__34333 = (0);
seq__34241 = G__34330;
chunk__34242 = G__34331;
count__34243 = G__34332;
i__34244 = G__34333;
continue;
} else {
var info = cljs.core.first.call(null,seq__34241__$1);
var segv_34334 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_34335 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_34336 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_34335 > (lc_34336 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__34241,chunk__34242,count__34243,i__34244,segv_34334,gline_34335,lc_34336,info,seq__34241__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_34335 - (lc_34336 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_34334], null));
});})(seq__34241,chunk__34242,count__34243,i__34244,segv_34334,gline_34335,lc_34336,info,seq__34241__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__34241,chunk__34242,count__34243,i__34244,segv_34334,gline_34335,lc_34336,info,seq__34241__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34335], null),cljs.core.conj,segv_34334);
});})(seq__34241,chunk__34242,count__34243,i__34244,segv_34334,gline_34335,lc_34336,info,seq__34241__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__34337 = cljs.core.next.call(null,seq__34241__$1);
var G__34338 = null;
var G__34339 = (0);
var G__34340 = (0);
seq__34241 = G__34337;
chunk__34242 = G__34338;
count__34243 = G__34339;
i__34244 = G__34340;
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
var seq__34245_34341 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__34246_34342 = null;
var count__34247_34343 = (0);
var i__34248_34344 = (0);
while(true){
if((i__34248_34344 < count__34247_34343)){
var vec__34249_34345 = cljs.core._nth.call(null,chunk__34246_34342,i__34248_34344);
var source_idx_34346 = cljs.core.nth.call(null,vec__34249_34345,(0),null);
var vec__34252_34347 = cljs.core.nth.call(null,vec__34249_34345,(1),null);
var __34348 = cljs.core.nth.call(null,vec__34252_34347,(0),null);
var lines_34349__$1 = cljs.core.nth.call(null,vec__34252_34347,(1),null);
var seq__34255_34350 = cljs.core.seq.call(null,lines_34349__$1);
var chunk__34256_34351 = null;
var count__34257_34352 = (0);
var i__34258_34353 = (0);
while(true){
if((i__34258_34353 < count__34257_34352)){
var vec__34259_34354 = cljs.core._nth.call(null,chunk__34256_34351,i__34258_34353);
var line_34355 = cljs.core.nth.call(null,vec__34259_34354,(0),null);
var cols_34356 = cljs.core.nth.call(null,vec__34259_34354,(1),null);
var seq__34262_34357 = cljs.core.seq.call(null,cols_34356);
var chunk__34263_34358 = null;
var count__34264_34359 = (0);
var i__34265_34360 = (0);
while(true){
if((i__34265_34360 < count__34264_34359)){
var vec__34266_34361 = cljs.core._nth.call(null,chunk__34263_34358,i__34265_34360);
var col_34362 = cljs.core.nth.call(null,vec__34266_34361,(0),null);
var infos_34363 = cljs.core.nth.call(null,vec__34266_34361,(1),null);
encode_cols.call(null,infos_34363,source_idx_34346,line_34355,col_34362);

var G__34364 = seq__34262_34357;
var G__34365 = chunk__34263_34358;
var G__34366 = count__34264_34359;
var G__34367 = (i__34265_34360 + (1));
seq__34262_34357 = G__34364;
chunk__34263_34358 = G__34365;
count__34264_34359 = G__34366;
i__34265_34360 = G__34367;
continue;
} else {
var temp__4657__auto___34368 = cljs.core.seq.call(null,seq__34262_34357);
if(temp__4657__auto___34368){
var seq__34262_34369__$1 = temp__4657__auto___34368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34262_34369__$1)){
var c__28978__auto___34370 = cljs.core.chunk_first.call(null,seq__34262_34369__$1);
var G__34371 = cljs.core.chunk_rest.call(null,seq__34262_34369__$1);
var G__34372 = c__28978__auto___34370;
var G__34373 = cljs.core.count.call(null,c__28978__auto___34370);
var G__34374 = (0);
seq__34262_34357 = G__34371;
chunk__34263_34358 = G__34372;
count__34264_34359 = G__34373;
i__34265_34360 = G__34374;
continue;
} else {
var vec__34269_34375 = cljs.core.first.call(null,seq__34262_34369__$1);
var col_34376 = cljs.core.nth.call(null,vec__34269_34375,(0),null);
var infos_34377 = cljs.core.nth.call(null,vec__34269_34375,(1),null);
encode_cols.call(null,infos_34377,source_idx_34346,line_34355,col_34376);

var G__34378 = cljs.core.next.call(null,seq__34262_34369__$1);
var G__34379 = null;
var G__34380 = (0);
var G__34381 = (0);
seq__34262_34357 = G__34378;
chunk__34263_34358 = G__34379;
count__34264_34359 = G__34380;
i__34265_34360 = G__34381;
continue;
}
} else {
}
}
break;
}

var G__34382 = seq__34255_34350;
var G__34383 = chunk__34256_34351;
var G__34384 = count__34257_34352;
var G__34385 = (i__34258_34353 + (1));
seq__34255_34350 = G__34382;
chunk__34256_34351 = G__34383;
count__34257_34352 = G__34384;
i__34258_34353 = G__34385;
continue;
} else {
var temp__4657__auto___34386 = cljs.core.seq.call(null,seq__34255_34350);
if(temp__4657__auto___34386){
var seq__34255_34387__$1 = temp__4657__auto___34386;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34255_34387__$1)){
var c__28978__auto___34388 = cljs.core.chunk_first.call(null,seq__34255_34387__$1);
var G__34389 = cljs.core.chunk_rest.call(null,seq__34255_34387__$1);
var G__34390 = c__28978__auto___34388;
var G__34391 = cljs.core.count.call(null,c__28978__auto___34388);
var G__34392 = (0);
seq__34255_34350 = G__34389;
chunk__34256_34351 = G__34390;
count__34257_34352 = G__34391;
i__34258_34353 = G__34392;
continue;
} else {
var vec__34272_34393 = cljs.core.first.call(null,seq__34255_34387__$1);
var line_34394 = cljs.core.nth.call(null,vec__34272_34393,(0),null);
var cols_34395 = cljs.core.nth.call(null,vec__34272_34393,(1),null);
var seq__34275_34396 = cljs.core.seq.call(null,cols_34395);
var chunk__34276_34397 = null;
var count__34277_34398 = (0);
var i__34278_34399 = (0);
while(true){
if((i__34278_34399 < count__34277_34398)){
var vec__34279_34400 = cljs.core._nth.call(null,chunk__34276_34397,i__34278_34399);
var col_34401 = cljs.core.nth.call(null,vec__34279_34400,(0),null);
var infos_34402 = cljs.core.nth.call(null,vec__34279_34400,(1),null);
encode_cols.call(null,infos_34402,source_idx_34346,line_34394,col_34401);

var G__34403 = seq__34275_34396;
var G__34404 = chunk__34276_34397;
var G__34405 = count__34277_34398;
var G__34406 = (i__34278_34399 + (1));
seq__34275_34396 = G__34403;
chunk__34276_34397 = G__34404;
count__34277_34398 = G__34405;
i__34278_34399 = G__34406;
continue;
} else {
var temp__4657__auto___34407__$1 = cljs.core.seq.call(null,seq__34275_34396);
if(temp__4657__auto___34407__$1){
var seq__34275_34408__$1 = temp__4657__auto___34407__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34275_34408__$1)){
var c__28978__auto___34409 = cljs.core.chunk_first.call(null,seq__34275_34408__$1);
var G__34410 = cljs.core.chunk_rest.call(null,seq__34275_34408__$1);
var G__34411 = c__28978__auto___34409;
var G__34412 = cljs.core.count.call(null,c__28978__auto___34409);
var G__34413 = (0);
seq__34275_34396 = G__34410;
chunk__34276_34397 = G__34411;
count__34277_34398 = G__34412;
i__34278_34399 = G__34413;
continue;
} else {
var vec__34282_34414 = cljs.core.first.call(null,seq__34275_34408__$1);
var col_34415 = cljs.core.nth.call(null,vec__34282_34414,(0),null);
var infos_34416 = cljs.core.nth.call(null,vec__34282_34414,(1),null);
encode_cols.call(null,infos_34416,source_idx_34346,line_34394,col_34415);

var G__34417 = cljs.core.next.call(null,seq__34275_34408__$1);
var G__34418 = null;
var G__34419 = (0);
var G__34420 = (0);
seq__34275_34396 = G__34417;
chunk__34276_34397 = G__34418;
count__34277_34398 = G__34419;
i__34278_34399 = G__34420;
continue;
}
} else {
}
}
break;
}

var G__34421 = cljs.core.next.call(null,seq__34255_34387__$1);
var G__34422 = null;
var G__34423 = (0);
var G__34424 = (0);
seq__34255_34350 = G__34421;
chunk__34256_34351 = G__34422;
count__34257_34352 = G__34423;
i__34258_34353 = G__34424;
continue;
}
} else {
}
}
break;
}

var G__34425 = seq__34245_34341;
var G__34426 = chunk__34246_34342;
var G__34427 = count__34247_34343;
var G__34428 = (i__34248_34344 + (1));
seq__34245_34341 = G__34425;
chunk__34246_34342 = G__34426;
count__34247_34343 = G__34427;
i__34248_34344 = G__34428;
continue;
} else {
var temp__4657__auto___34429 = cljs.core.seq.call(null,seq__34245_34341);
if(temp__4657__auto___34429){
var seq__34245_34430__$1 = temp__4657__auto___34429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34245_34430__$1)){
var c__28978__auto___34431 = cljs.core.chunk_first.call(null,seq__34245_34430__$1);
var G__34432 = cljs.core.chunk_rest.call(null,seq__34245_34430__$1);
var G__34433 = c__28978__auto___34431;
var G__34434 = cljs.core.count.call(null,c__28978__auto___34431);
var G__34435 = (0);
seq__34245_34341 = G__34432;
chunk__34246_34342 = G__34433;
count__34247_34343 = G__34434;
i__34248_34344 = G__34435;
continue;
} else {
var vec__34285_34436 = cljs.core.first.call(null,seq__34245_34430__$1);
var source_idx_34437 = cljs.core.nth.call(null,vec__34285_34436,(0),null);
var vec__34288_34438 = cljs.core.nth.call(null,vec__34285_34436,(1),null);
var __34439 = cljs.core.nth.call(null,vec__34288_34438,(0),null);
var lines_34440__$1 = cljs.core.nth.call(null,vec__34288_34438,(1),null);
var seq__34291_34441 = cljs.core.seq.call(null,lines_34440__$1);
var chunk__34292_34442 = null;
var count__34293_34443 = (0);
var i__34294_34444 = (0);
while(true){
if((i__34294_34444 < count__34293_34443)){
var vec__34295_34445 = cljs.core._nth.call(null,chunk__34292_34442,i__34294_34444);
var line_34446 = cljs.core.nth.call(null,vec__34295_34445,(0),null);
var cols_34447 = cljs.core.nth.call(null,vec__34295_34445,(1),null);
var seq__34298_34448 = cljs.core.seq.call(null,cols_34447);
var chunk__34299_34449 = null;
var count__34300_34450 = (0);
var i__34301_34451 = (0);
while(true){
if((i__34301_34451 < count__34300_34450)){
var vec__34302_34452 = cljs.core._nth.call(null,chunk__34299_34449,i__34301_34451);
var col_34453 = cljs.core.nth.call(null,vec__34302_34452,(0),null);
var infos_34454 = cljs.core.nth.call(null,vec__34302_34452,(1),null);
encode_cols.call(null,infos_34454,source_idx_34437,line_34446,col_34453);

var G__34455 = seq__34298_34448;
var G__34456 = chunk__34299_34449;
var G__34457 = count__34300_34450;
var G__34458 = (i__34301_34451 + (1));
seq__34298_34448 = G__34455;
chunk__34299_34449 = G__34456;
count__34300_34450 = G__34457;
i__34301_34451 = G__34458;
continue;
} else {
var temp__4657__auto___34459__$1 = cljs.core.seq.call(null,seq__34298_34448);
if(temp__4657__auto___34459__$1){
var seq__34298_34460__$1 = temp__4657__auto___34459__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34298_34460__$1)){
var c__28978__auto___34461 = cljs.core.chunk_first.call(null,seq__34298_34460__$1);
var G__34462 = cljs.core.chunk_rest.call(null,seq__34298_34460__$1);
var G__34463 = c__28978__auto___34461;
var G__34464 = cljs.core.count.call(null,c__28978__auto___34461);
var G__34465 = (0);
seq__34298_34448 = G__34462;
chunk__34299_34449 = G__34463;
count__34300_34450 = G__34464;
i__34301_34451 = G__34465;
continue;
} else {
var vec__34305_34466 = cljs.core.first.call(null,seq__34298_34460__$1);
var col_34467 = cljs.core.nth.call(null,vec__34305_34466,(0),null);
var infos_34468 = cljs.core.nth.call(null,vec__34305_34466,(1),null);
encode_cols.call(null,infos_34468,source_idx_34437,line_34446,col_34467);

var G__34469 = cljs.core.next.call(null,seq__34298_34460__$1);
var G__34470 = null;
var G__34471 = (0);
var G__34472 = (0);
seq__34298_34448 = G__34469;
chunk__34299_34449 = G__34470;
count__34300_34450 = G__34471;
i__34301_34451 = G__34472;
continue;
}
} else {
}
}
break;
}

var G__34473 = seq__34291_34441;
var G__34474 = chunk__34292_34442;
var G__34475 = count__34293_34443;
var G__34476 = (i__34294_34444 + (1));
seq__34291_34441 = G__34473;
chunk__34292_34442 = G__34474;
count__34293_34443 = G__34475;
i__34294_34444 = G__34476;
continue;
} else {
var temp__4657__auto___34477__$1 = cljs.core.seq.call(null,seq__34291_34441);
if(temp__4657__auto___34477__$1){
var seq__34291_34478__$1 = temp__4657__auto___34477__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34291_34478__$1)){
var c__28978__auto___34479 = cljs.core.chunk_first.call(null,seq__34291_34478__$1);
var G__34480 = cljs.core.chunk_rest.call(null,seq__34291_34478__$1);
var G__34481 = c__28978__auto___34479;
var G__34482 = cljs.core.count.call(null,c__28978__auto___34479);
var G__34483 = (0);
seq__34291_34441 = G__34480;
chunk__34292_34442 = G__34481;
count__34293_34443 = G__34482;
i__34294_34444 = G__34483;
continue;
} else {
var vec__34308_34484 = cljs.core.first.call(null,seq__34291_34478__$1);
var line_34485 = cljs.core.nth.call(null,vec__34308_34484,(0),null);
var cols_34486 = cljs.core.nth.call(null,vec__34308_34484,(1),null);
var seq__34311_34487 = cljs.core.seq.call(null,cols_34486);
var chunk__34312_34488 = null;
var count__34313_34489 = (0);
var i__34314_34490 = (0);
while(true){
if((i__34314_34490 < count__34313_34489)){
var vec__34315_34491 = cljs.core._nth.call(null,chunk__34312_34488,i__34314_34490);
var col_34492 = cljs.core.nth.call(null,vec__34315_34491,(0),null);
var infos_34493 = cljs.core.nth.call(null,vec__34315_34491,(1),null);
encode_cols.call(null,infos_34493,source_idx_34437,line_34485,col_34492);

var G__34494 = seq__34311_34487;
var G__34495 = chunk__34312_34488;
var G__34496 = count__34313_34489;
var G__34497 = (i__34314_34490 + (1));
seq__34311_34487 = G__34494;
chunk__34312_34488 = G__34495;
count__34313_34489 = G__34496;
i__34314_34490 = G__34497;
continue;
} else {
var temp__4657__auto___34498__$2 = cljs.core.seq.call(null,seq__34311_34487);
if(temp__4657__auto___34498__$2){
var seq__34311_34499__$1 = temp__4657__auto___34498__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34311_34499__$1)){
var c__28978__auto___34500 = cljs.core.chunk_first.call(null,seq__34311_34499__$1);
var G__34501 = cljs.core.chunk_rest.call(null,seq__34311_34499__$1);
var G__34502 = c__28978__auto___34500;
var G__34503 = cljs.core.count.call(null,c__28978__auto___34500);
var G__34504 = (0);
seq__34311_34487 = G__34501;
chunk__34312_34488 = G__34502;
count__34313_34489 = G__34503;
i__34314_34490 = G__34504;
continue;
} else {
var vec__34318_34505 = cljs.core.first.call(null,seq__34311_34499__$1);
var col_34506 = cljs.core.nth.call(null,vec__34318_34505,(0),null);
var infos_34507 = cljs.core.nth.call(null,vec__34318_34505,(1),null);
encode_cols.call(null,infos_34507,source_idx_34437,line_34485,col_34506);

var G__34508 = cljs.core.next.call(null,seq__34311_34499__$1);
var G__34509 = null;
var G__34510 = (0);
var G__34511 = (0);
seq__34311_34487 = G__34508;
chunk__34312_34488 = G__34509;
count__34313_34489 = G__34510;
i__34314_34490 = G__34511;
continue;
}
} else {
}
}
break;
}

var G__34512 = cljs.core.next.call(null,seq__34291_34478__$1);
var G__34513 = null;
var G__34514 = (0);
var G__34515 = (0);
seq__34291_34441 = G__34512;
chunk__34292_34442 = G__34513;
count__34293_34443 = G__34514;
i__34294_34444 = G__34515;
continue;
}
} else {
}
}
break;
}

var G__34516 = cljs.core.next.call(null,seq__34245_34430__$1);
var G__34517 = null;
var G__34518 = (0);
var G__34519 = (0);
seq__34245_34341 = G__34516;
chunk__34246_34342 = G__34517;
count__34247_34343 = G__34518;
i__34248_34344 = G__34519;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__34321 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__34238_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34238_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__34239_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__34239_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__34240_SHARP_){
return clojure.string.join.call(null,",",p1__34240_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__34322 = G__34321;
goog.object.set(G__34322,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__34322;
} else {
return G__34321;
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
var vec__34520 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__34520,(0),null);
var col_map = cljs.core.nth.call(null,vec__34520,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__34523 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__34523,(0),null);
var infos = cljs.core.nth.call(null,vec__34523,(1),null);
var G__34529 = cljs.core.next.call(null,col_map_seq);
var G__34530 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__34523,col,infos,vec__34520,line,col_map){
return (function (v,p__34526){
var map__34527 = p__34526;
var map__34527__$1 = ((((!((map__34527 == null)))?((((map__34527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34527):map__34527);
var gline = cljs.core.get.call(null,map__34527__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__34527__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__34523,col,infos,vec__34520,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__34529;
new_cols = G__34530;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__34531 = cljs.core.next.call(null,line_map_seq);
var G__34532 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__34531;
new_lines = G__34532;
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
var seq__34533_34595 = cljs.core.seq.call(null,reverse_map);
var chunk__34534_34596 = null;
var count__34535_34597 = (0);
var i__34536_34598 = (0);
while(true){
if((i__34536_34598 < count__34535_34597)){
var vec__34537_34599 = cljs.core._nth.call(null,chunk__34534_34596,i__34536_34598);
var line_34600 = cljs.core.nth.call(null,vec__34537_34599,(0),null);
var columns_34601 = cljs.core.nth.call(null,vec__34537_34599,(1),null);
var seq__34540_34602 = cljs.core.seq.call(null,columns_34601);
var chunk__34541_34603 = null;
var count__34542_34604 = (0);
var i__34543_34605 = (0);
while(true){
if((i__34543_34605 < count__34542_34604)){
var vec__34544_34606 = cljs.core._nth.call(null,chunk__34541_34603,i__34543_34605);
var column_34607 = cljs.core.nth.call(null,vec__34544_34606,(0),null);
var column_info_34608 = cljs.core.nth.call(null,vec__34544_34606,(1),null);
var seq__34547_34609 = cljs.core.seq.call(null,column_info_34608);
var chunk__34548_34610 = null;
var count__34549_34611 = (0);
var i__34550_34612 = (0);
while(true){
if((i__34550_34612 < count__34549_34611)){
var map__34551_34613 = cljs.core._nth.call(null,chunk__34548_34610,i__34550_34612);
var map__34551_34614__$1 = ((((!((map__34551_34613 == null)))?((((map__34551_34613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34551_34613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34551_34613):map__34551_34613);
var gline_34615 = cljs.core.get.call(null,map__34551_34614__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34616 = cljs.core.get.call(null,map__34551_34614__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34617 = cljs.core.get.call(null,map__34551_34614__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34615], null),cljs.core.fnil.call(null,((function (seq__34547_34609,chunk__34548_34610,count__34549_34611,i__34550_34612,seq__34540_34602,chunk__34541_34603,count__34542_34604,i__34543_34605,seq__34533_34595,chunk__34534_34596,count__34535_34597,i__34536_34598,map__34551_34613,map__34551_34614__$1,gline_34615,gcol_34616,name_34617,vec__34544_34606,column_34607,column_info_34608,vec__34537_34599,line_34600,columns_34601,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34616], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34600,new cljs.core.Keyword(null,"col","col",-1959363084),column_34607,new cljs.core.Keyword(null,"name","name",1843675177),name_34617], null));
});})(seq__34547_34609,chunk__34548_34610,count__34549_34611,i__34550_34612,seq__34540_34602,chunk__34541_34603,count__34542_34604,i__34543_34605,seq__34533_34595,chunk__34534_34596,count__34535_34597,i__34536_34598,map__34551_34613,map__34551_34614__$1,gline_34615,gcol_34616,name_34617,vec__34544_34606,column_34607,column_info_34608,vec__34537_34599,line_34600,columns_34601,inverted))
,cljs.core.sorted_map.call(null)));

var G__34618 = seq__34547_34609;
var G__34619 = chunk__34548_34610;
var G__34620 = count__34549_34611;
var G__34621 = (i__34550_34612 + (1));
seq__34547_34609 = G__34618;
chunk__34548_34610 = G__34619;
count__34549_34611 = G__34620;
i__34550_34612 = G__34621;
continue;
} else {
var temp__4657__auto___34622 = cljs.core.seq.call(null,seq__34547_34609);
if(temp__4657__auto___34622){
var seq__34547_34623__$1 = temp__4657__auto___34622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34547_34623__$1)){
var c__28978__auto___34624 = cljs.core.chunk_first.call(null,seq__34547_34623__$1);
var G__34625 = cljs.core.chunk_rest.call(null,seq__34547_34623__$1);
var G__34626 = c__28978__auto___34624;
var G__34627 = cljs.core.count.call(null,c__28978__auto___34624);
var G__34628 = (0);
seq__34547_34609 = G__34625;
chunk__34548_34610 = G__34626;
count__34549_34611 = G__34627;
i__34550_34612 = G__34628;
continue;
} else {
var map__34553_34629 = cljs.core.first.call(null,seq__34547_34623__$1);
var map__34553_34630__$1 = ((((!((map__34553_34629 == null)))?((((map__34553_34629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34553_34629.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34553_34629):map__34553_34629);
var gline_34631 = cljs.core.get.call(null,map__34553_34630__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34632 = cljs.core.get.call(null,map__34553_34630__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34633 = cljs.core.get.call(null,map__34553_34630__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34631], null),cljs.core.fnil.call(null,((function (seq__34547_34609,chunk__34548_34610,count__34549_34611,i__34550_34612,seq__34540_34602,chunk__34541_34603,count__34542_34604,i__34543_34605,seq__34533_34595,chunk__34534_34596,count__34535_34597,i__34536_34598,map__34553_34629,map__34553_34630__$1,gline_34631,gcol_34632,name_34633,seq__34547_34623__$1,temp__4657__auto___34622,vec__34544_34606,column_34607,column_info_34608,vec__34537_34599,line_34600,columns_34601,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34632], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34600,new cljs.core.Keyword(null,"col","col",-1959363084),column_34607,new cljs.core.Keyword(null,"name","name",1843675177),name_34633], null));
});})(seq__34547_34609,chunk__34548_34610,count__34549_34611,i__34550_34612,seq__34540_34602,chunk__34541_34603,count__34542_34604,i__34543_34605,seq__34533_34595,chunk__34534_34596,count__34535_34597,i__34536_34598,map__34553_34629,map__34553_34630__$1,gline_34631,gcol_34632,name_34633,seq__34547_34623__$1,temp__4657__auto___34622,vec__34544_34606,column_34607,column_info_34608,vec__34537_34599,line_34600,columns_34601,inverted))
,cljs.core.sorted_map.call(null)));

var G__34634 = cljs.core.next.call(null,seq__34547_34623__$1);
var G__34635 = null;
var G__34636 = (0);
var G__34637 = (0);
seq__34547_34609 = G__34634;
chunk__34548_34610 = G__34635;
count__34549_34611 = G__34636;
i__34550_34612 = G__34637;
continue;
}
} else {
}
}
break;
}

var G__34638 = seq__34540_34602;
var G__34639 = chunk__34541_34603;
var G__34640 = count__34542_34604;
var G__34641 = (i__34543_34605 + (1));
seq__34540_34602 = G__34638;
chunk__34541_34603 = G__34639;
count__34542_34604 = G__34640;
i__34543_34605 = G__34641;
continue;
} else {
var temp__4657__auto___34642 = cljs.core.seq.call(null,seq__34540_34602);
if(temp__4657__auto___34642){
var seq__34540_34643__$1 = temp__4657__auto___34642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34540_34643__$1)){
var c__28978__auto___34644 = cljs.core.chunk_first.call(null,seq__34540_34643__$1);
var G__34645 = cljs.core.chunk_rest.call(null,seq__34540_34643__$1);
var G__34646 = c__28978__auto___34644;
var G__34647 = cljs.core.count.call(null,c__28978__auto___34644);
var G__34648 = (0);
seq__34540_34602 = G__34645;
chunk__34541_34603 = G__34646;
count__34542_34604 = G__34647;
i__34543_34605 = G__34648;
continue;
} else {
var vec__34555_34649 = cljs.core.first.call(null,seq__34540_34643__$1);
var column_34650 = cljs.core.nth.call(null,vec__34555_34649,(0),null);
var column_info_34651 = cljs.core.nth.call(null,vec__34555_34649,(1),null);
var seq__34558_34652 = cljs.core.seq.call(null,column_info_34651);
var chunk__34559_34653 = null;
var count__34560_34654 = (0);
var i__34561_34655 = (0);
while(true){
if((i__34561_34655 < count__34560_34654)){
var map__34562_34656 = cljs.core._nth.call(null,chunk__34559_34653,i__34561_34655);
var map__34562_34657__$1 = ((((!((map__34562_34656 == null)))?((((map__34562_34656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34562_34656.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34562_34656):map__34562_34656);
var gline_34658 = cljs.core.get.call(null,map__34562_34657__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34659 = cljs.core.get.call(null,map__34562_34657__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34660 = cljs.core.get.call(null,map__34562_34657__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34658], null),cljs.core.fnil.call(null,((function (seq__34558_34652,chunk__34559_34653,count__34560_34654,i__34561_34655,seq__34540_34602,chunk__34541_34603,count__34542_34604,i__34543_34605,seq__34533_34595,chunk__34534_34596,count__34535_34597,i__34536_34598,map__34562_34656,map__34562_34657__$1,gline_34658,gcol_34659,name_34660,vec__34555_34649,column_34650,column_info_34651,seq__34540_34643__$1,temp__4657__auto___34642,vec__34537_34599,line_34600,columns_34601,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34659], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34600,new cljs.core.Keyword(null,"col","col",-1959363084),column_34650,new cljs.core.Keyword(null,"name","name",1843675177),name_34660], null));
});})(seq__34558_34652,chunk__34559_34653,count__34560_34654,i__34561_34655,seq__34540_34602,chunk__34541_34603,count__34542_34604,i__34543_34605,seq__34533_34595,chunk__34534_34596,count__34535_34597,i__34536_34598,map__34562_34656,map__34562_34657__$1,gline_34658,gcol_34659,name_34660,vec__34555_34649,column_34650,column_info_34651,seq__34540_34643__$1,temp__4657__auto___34642,vec__34537_34599,line_34600,columns_34601,inverted))
,cljs.core.sorted_map.call(null)));

var G__34661 = seq__34558_34652;
var G__34662 = chunk__34559_34653;
var G__34663 = count__34560_34654;
var G__34664 = (i__34561_34655 + (1));
seq__34558_34652 = G__34661;
chunk__34559_34653 = G__34662;
count__34560_34654 = G__34663;
i__34561_34655 = G__34664;
continue;
} else {
var temp__4657__auto___34665__$1 = cljs.core.seq.call(null,seq__34558_34652);
if(temp__4657__auto___34665__$1){
var seq__34558_34666__$1 = temp__4657__auto___34665__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34558_34666__$1)){
var c__28978__auto___34667 = cljs.core.chunk_first.call(null,seq__34558_34666__$1);
var G__34668 = cljs.core.chunk_rest.call(null,seq__34558_34666__$1);
var G__34669 = c__28978__auto___34667;
var G__34670 = cljs.core.count.call(null,c__28978__auto___34667);
var G__34671 = (0);
seq__34558_34652 = G__34668;
chunk__34559_34653 = G__34669;
count__34560_34654 = G__34670;
i__34561_34655 = G__34671;
continue;
} else {
var map__34564_34672 = cljs.core.first.call(null,seq__34558_34666__$1);
var map__34564_34673__$1 = ((((!((map__34564_34672 == null)))?((((map__34564_34672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34564_34672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34564_34672):map__34564_34672);
var gline_34674 = cljs.core.get.call(null,map__34564_34673__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34675 = cljs.core.get.call(null,map__34564_34673__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34676 = cljs.core.get.call(null,map__34564_34673__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34674], null),cljs.core.fnil.call(null,((function (seq__34558_34652,chunk__34559_34653,count__34560_34654,i__34561_34655,seq__34540_34602,chunk__34541_34603,count__34542_34604,i__34543_34605,seq__34533_34595,chunk__34534_34596,count__34535_34597,i__34536_34598,map__34564_34672,map__34564_34673__$1,gline_34674,gcol_34675,name_34676,seq__34558_34666__$1,temp__4657__auto___34665__$1,vec__34555_34649,column_34650,column_info_34651,seq__34540_34643__$1,temp__4657__auto___34642,vec__34537_34599,line_34600,columns_34601,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34675], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34600,new cljs.core.Keyword(null,"col","col",-1959363084),column_34650,new cljs.core.Keyword(null,"name","name",1843675177),name_34676], null));
});})(seq__34558_34652,chunk__34559_34653,count__34560_34654,i__34561_34655,seq__34540_34602,chunk__34541_34603,count__34542_34604,i__34543_34605,seq__34533_34595,chunk__34534_34596,count__34535_34597,i__34536_34598,map__34564_34672,map__34564_34673__$1,gline_34674,gcol_34675,name_34676,seq__34558_34666__$1,temp__4657__auto___34665__$1,vec__34555_34649,column_34650,column_info_34651,seq__34540_34643__$1,temp__4657__auto___34642,vec__34537_34599,line_34600,columns_34601,inverted))
,cljs.core.sorted_map.call(null)));

var G__34677 = cljs.core.next.call(null,seq__34558_34666__$1);
var G__34678 = null;
var G__34679 = (0);
var G__34680 = (0);
seq__34558_34652 = G__34677;
chunk__34559_34653 = G__34678;
count__34560_34654 = G__34679;
i__34561_34655 = G__34680;
continue;
}
} else {
}
}
break;
}

var G__34681 = cljs.core.next.call(null,seq__34540_34643__$1);
var G__34682 = null;
var G__34683 = (0);
var G__34684 = (0);
seq__34540_34602 = G__34681;
chunk__34541_34603 = G__34682;
count__34542_34604 = G__34683;
i__34543_34605 = G__34684;
continue;
}
} else {
}
}
break;
}

var G__34685 = seq__34533_34595;
var G__34686 = chunk__34534_34596;
var G__34687 = count__34535_34597;
var G__34688 = (i__34536_34598 + (1));
seq__34533_34595 = G__34685;
chunk__34534_34596 = G__34686;
count__34535_34597 = G__34687;
i__34536_34598 = G__34688;
continue;
} else {
var temp__4657__auto___34689 = cljs.core.seq.call(null,seq__34533_34595);
if(temp__4657__auto___34689){
var seq__34533_34690__$1 = temp__4657__auto___34689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34533_34690__$1)){
var c__28978__auto___34691 = cljs.core.chunk_first.call(null,seq__34533_34690__$1);
var G__34692 = cljs.core.chunk_rest.call(null,seq__34533_34690__$1);
var G__34693 = c__28978__auto___34691;
var G__34694 = cljs.core.count.call(null,c__28978__auto___34691);
var G__34695 = (0);
seq__34533_34595 = G__34692;
chunk__34534_34596 = G__34693;
count__34535_34597 = G__34694;
i__34536_34598 = G__34695;
continue;
} else {
var vec__34566_34696 = cljs.core.first.call(null,seq__34533_34690__$1);
var line_34697 = cljs.core.nth.call(null,vec__34566_34696,(0),null);
var columns_34698 = cljs.core.nth.call(null,vec__34566_34696,(1),null);
var seq__34569_34699 = cljs.core.seq.call(null,columns_34698);
var chunk__34570_34700 = null;
var count__34571_34701 = (0);
var i__34572_34702 = (0);
while(true){
if((i__34572_34702 < count__34571_34701)){
var vec__34573_34703 = cljs.core._nth.call(null,chunk__34570_34700,i__34572_34702);
var column_34704 = cljs.core.nth.call(null,vec__34573_34703,(0),null);
var column_info_34705 = cljs.core.nth.call(null,vec__34573_34703,(1),null);
var seq__34576_34706 = cljs.core.seq.call(null,column_info_34705);
var chunk__34577_34707 = null;
var count__34578_34708 = (0);
var i__34579_34709 = (0);
while(true){
if((i__34579_34709 < count__34578_34708)){
var map__34580_34710 = cljs.core._nth.call(null,chunk__34577_34707,i__34579_34709);
var map__34580_34711__$1 = ((((!((map__34580_34710 == null)))?((((map__34580_34710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34580_34710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34580_34710):map__34580_34710);
var gline_34712 = cljs.core.get.call(null,map__34580_34711__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34713 = cljs.core.get.call(null,map__34580_34711__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34714 = cljs.core.get.call(null,map__34580_34711__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34712], null),cljs.core.fnil.call(null,((function (seq__34576_34706,chunk__34577_34707,count__34578_34708,i__34579_34709,seq__34569_34699,chunk__34570_34700,count__34571_34701,i__34572_34702,seq__34533_34595,chunk__34534_34596,count__34535_34597,i__34536_34598,map__34580_34710,map__34580_34711__$1,gline_34712,gcol_34713,name_34714,vec__34573_34703,column_34704,column_info_34705,vec__34566_34696,line_34697,columns_34698,seq__34533_34690__$1,temp__4657__auto___34689,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34713], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34697,new cljs.core.Keyword(null,"col","col",-1959363084),column_34704,new cljs.core.Keyword(null,"name","name",1843675177),name_34714], null));
});})(seq__34576_34706,chunk__34577_34707,count__34578_34708,i__34579_34709,seq__34569_34699,chunk__34570_34700,count__34571_34701,i__34572_34702,seq__34533_34595,chunk__34534_34596,count__34535_34597,i__34536_34598,map__34580_34710,map__34580_34711__$1,gline_34712,gcol_34713,name_34714,vec__34573_34703,column_34704,column_info_34705,vec__34566_34696,line_34697,columns_34698,seq__34533_34690__$1,temp__4657__auto___34689,inverted))
,cljs.core.sorted_map.call(null)));

var G__34715 = seq__34576_34706;
var G__34716 = chunk__34577_34707;
var G__34717 = count__34578_34708;
var G__34718 = (i__34579_34709 + (1));
seq__34576_34706 = G__34715;
chunk__34577_34707 = G__34716;
count__34578_34708 = G__34717;
i__34579_34709 = G__34718;
continue;
} else {
var temp__4657__auto___34719__$1 = cljs.core.seq.call(null,seq__34576_34706);
if(temp__4657__auto___34719__$1){
var seq__34576_34720__$1 = temp__4657__auto___34719__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34576_34720__$1)){
var c__28978__auto___34721 = cljs.core.chunk_first.call(null,seq__34576_34720__$1);
var G__34722 = cljs.core.chunk_rest.call(null,seq__34576_34720__$1);
var G__34723 = c__28978__auto___34721;
var G__34724 = cljs.core.count.call(null,c__28978__auto___34721);
var G__34725 = (0);
seq__34576_34706 = G__34722;
chunk__34577_34707 = G__34723;
count__34578_34708 = G__34724;
i__34579_34709 = G__34725;
continue;
} else {
var map__34582_34726 = cljs.core.first.call(null,seq__34576_34720__$1);
var map__34582_34727__$1 = ((((!((map__34582_34726 == null)))?((((map__34582_34726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34582_34726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34582_34726):map__34582_34726);
var gline_34728 = cljs.core.get.call(null,map__34582_34727__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34729 = cljs.core.get.call(null,map__34582_34727__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34730 = cljs.core.get.call(null,map__34582_34727__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34728], null),cljs.core.fnil.call(null,((function (seq__34576_34706,chunk__34577_34707,count__34578_34708,i__34579_34709,seq__34569_34699,chunk__34570_34700,count__34571_34701,i__34572_34702,seq__34533_34595,chunk__34534_34596,count__34535_34597,i__34536_34598,map__34582_34726,map__34582_34727__$1,gline_34728,gcol_34729,name_34730,seq__34576_34720__$1,temp__4657__auto___34719__$1,vec__34573_34703,column_34704,column_info_34705,vec__34566_34696,line_34697,columns_34698,seq__34533_34690__$1,temp__4657__auto___34689,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34729], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34697,new cljs.core.Keyword(null,"col","col",-1959363084),column_34704,new cljs.core.Keyword(null,"name","name",1843675177),name_34730], null));
});})(seq__34576_34706,chunk__34577_34707,count__34578_34708,i__34579_34709,seq__34569_34699,chunk__34570_34700,count__34571_34701,i__34572_34702,seq__34533_34595,chunk__34534_34596,count__34535_34597,i__34536_34598,map__34582_34726,map__34582_34727__$1,gline_34728,gcol_34729,name_34730,seq__34576_34720__$1,temp__4657__auto___34719__$1,vec__34573_34703,column_34704,column_info_34705,vec__34566_34696,line_34697,columns_34698,seq__34533_34690__$1,temp__4657__auto___34689,inverted))
,cljs.core.sorted_map.call(null)));

var G__34731 = cljs.core.next.call(null,seq__34576_34720__$1);
var G__34732 = null;
var G__34733 = (0);
var G__34734 = (0);
seq__34576_34706 = G__34731;
chunk__34577_34707 = G__34732;
count__34578_34708 = G__34733;
i__34579_34709 = G__34734;
continue;
}
} else {
}
}
break;
}

var G__34735 = seq__34569_34699;
var G__34736 = chunk__34570_34700;
var G__34737 = count__34571_34701;
var G__34738 = (i__34572_34702 + (1));
seq__34569_34699 = G__34735;
chunk__34570_34700 = G__34736;
count__34571_34701 = G__34737;
i__34572_34702 = G__34738;
continue;
} else {
var temp__4657__auto___34739__$1 = cljs.core.seq.call(null,seq__34569_34699);
if(temp__4657__auto___34739__$1){
var seq__34569_34740__$1 = temp__4657__auto___34739__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34569_34740__$1)){
var c__28978__auto___34741 = cljs.core.chunk_first.call(null,seq__34569_34740__$1);
var G__34742 = cljs.core.chunk_rest.call(null,seq__34569_34740__$1);
var G__34743 = c__28978__auto___34741;
var G__34744 = cljs.core.count.call(null,c__28978__auto___34741);
var G__34745 = (0);
seq__34569_34699 = G__34742;
chunk__34570_34700 = G__34743;
count__34571_34701 = G__34744;
i__34572_34702 = G__34745;
continue;
} else {
var vec__34584_34746 = cljs.core.first.call(null,seq__34569_34740__$1);
var column_34747 = cljs.core.nth.call(null,vec__34584_34746,(0),null);
var column_info_34748 = cljs.core.nth.call(null,vec__34584_34746,(1),null);
var seq__34587_34749 = cljs.core.seq.call(null,column_info_34748);
var chunk__34588_34750 = null;
var count__34589_34751 = (0);
var i__34590_34752 = (0);
while(true){
if((i__34590_34752 < count__34589_34751)){
var map__34591_34753 = cljs.core._nth.call(null,chunk__34588_34750,i__34590_34752);
var map__34591_34754__$1 = ((((!((map__34591_34753 == null)))?((((map__34591_34753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34591_34753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34591_34753):map__34591_34753);
var gline_34755 = cljs.core.get.call(null,map__34591_34754__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34756 = cljs.core.get.call(null,map__34591_34754__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34757 = cljs.core.get.call(null,map__34591_34754__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34755], null),cljs.core.fnil.call(null,((function (seq__34587_34749,chunk__34588_34750,count__34589_34751,i__34590_34752,seq__34569_34699,chunk__34570_34700,count__34571_34701,i__34572_34702,seq__34533_34595,chunk__34534_34596,count__34535_34597,i__34536_34598,map__34591_34753,map__34591_34754__$1,gline_34755,gcol_34756,name_34757,vec__34584_34746,column_34747,column_info_34748,seq__34569_34740__$1,temp__4657__auto___34739__$1,vec__34566_34696,line_34697,columns_34698,seq__34533_34690__$1,temp__4657__auto___34689,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34756], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34697,new cljs.core.Keyword(null,"col","col",-1959363084),column_34747,new cljs.core.Keyword(null,"name","name",1843675177),name_34757], null));
});})(seq__34587_34749,chunk__34588_34750,count__34589_34751,i__34590_34752,seq__34569_34699,chunk__34570_34700,count__34571_34701,i__34572_34702,seq__34533_34595,chunk__34534_34596,count__34535_34597,i__34536_34598,map__34591_34753,map__34591_34754__$1,gline_34755,gcol_34756,name_34757,vec__34584_34746,column_34747,column_info_34748,seq__34569_34740__$1,temp__4657__auto___34739__$1,vec__34566_34696,line_34697,columns_34698,seq__34533_34690__$1,temp__4657__auto___34689,inverted))
,cljs.core.sorted_map.call(null)));

var G__34758 = seq__34587_34749;
var G__34759 = chunk__34588_34750;
var G__34760 = count__34589_34751;
var G__34761 = (i__34590_34752 + (1));
seq__34587_34749 = G__34758;
chunk__34588_34750 = G__34759;
count__34589_34751 = G__34760;
i__34590_34752 = G__34761;
continue;
} else {
var temp__4657__auto___34762__$2 = cljs.core.seq.call(null,seq__34587_34749);
if(temp__4657__auto___34762__$2){
var seq__34587_34763__$1 = temp__4657__auto___34762__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34587_34763__$1)){
var c__28978__auto___34764 = cljs.core.chunk_first.call(null,seq__34587_34763__$1);
var G__34765 = cljs.core.chunk_rest.call(null,seq__34587_34763__$1);
var G__34766 = c__28978__auto___34764;
var G__34767 = cljs.core.count.call(null,c__28978__auto___34764);
var G__34768 = (0);
seq__34587_34749 = G__34765;
chunk__34588_34750 = G__34766;
count__34589_34751 = G__34767;
i__34590_34752 = G__34768;
continue;
} else {
var map__34593_34769 = cljs.core.first.call(null,seq__34587_34763__$1);
var map__34593_34770__$1 = ((((!((map__34593_34769 == null)))?((((map__34593_34769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34593_34769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34593_34769):map__34593_34769);
var gline_34771 = cljs.core.get.call(null,map__34593_34770__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34772 = cljs.core.get.call(null,map__34593_34770__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34773 = cljs.core.get.call(null,map__34593_34770__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34771], null),cljs.core.fnil.call(null,((function (seq__34587_34749,chunk__34588_34750,count__34589_34751,i__34590_34752,seq__34569_34699,chunk__34570_34700,count__34571_34701,i__34572_34702,seq__34533_34595,chunk__34534_34596,count__34535_34597,i__34536_34598,map__34593_34769,map__34593_34770__$1,gline_34771,gcol_34772,name_34773,seq__34587_34763__$1,temp__4657__auto___34762__$2,vec__34584_34746,column_34747,column_info_34748,seq__34569_34740__$1,temp__4657__auto___34739__$1,vec__34566_34696,line_34697,columns_34698,seq__34533_34690__$1,temp__4657__auto___34689,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34772], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34697,new cljs.core.Keyword(null,"col","col",-1959363084),column_34747,new cljs.core.Keyword(null,"name","name",1843675177),name_34773], null));
});})(seq__34587_34749,chunk__34588_34750,count__34589_34751,i__34590_34752,seq__34569_34699,chunk__34570_34700,count__34571_34701,i__34572_34702,seq__34533_34595,chunk__34534_34596,count__34535_34597,i__34536_34598,map__34593_34769,map__34593_34770__$1,gline_34771,gcol_34772,name_34773,seq__34587_34763__$1,temp__4657__auto___34762__$2,vec__34584_34746,column_34747,column_info_34748,seq__34569_34740__$1,temp__4657__auto___34739__$1,vec__34566_34696,line_34697,columns_34698,seq__34533_34690__$1,temp__4657__auto___34689,inverted))
,cljs.core.sorted_map.call(null)));

var G__34774 = cljs.core.next.call(null,seq__34587_34763__$1);
var G__34775 = null;
var G__34776 = (0);
var G__34777 = (0);
seq__34587_34749 = G__34774;
chunk__34588_34750 = G__34775;
count__34589_34751 = G__34776;
i__34590_34752 = G__34777;
continue;
}
} else {
}
}
break;
}

var G__34778 = cljs.core.next.call(null,seq__34569_34740__$1);
var G__34779 = null;
var G__34780 = (0);
var G__34781 = (0);
seq__34569_34699 = G__34778;
chunk__34570_34700 = G__34779;
count__34571_34701 = G__34780;
i__34572_34702 = G__34781;
continue;
}
} else {
}
}
break;
}

var G__34782 = cljs.core.next.call(null,seq__34533_34690__$1);
var G__34783 = null;
var G__34784 = (0);
var G__34785 = (0);
seq__34533_34595 = G__34782;
chunk__34534_34596 = G__34783;
count__34535_34597 = G__34784;
i__34536_34598 = G__34785;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1506931513713
