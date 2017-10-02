// Compiled by ClojureScript 1.9.908 {}
goog.provide('parinfer.reader');
goog.require('cljs.core');
parinfer.reader.matching_delim = new cljs.core.PersistentArrayMap(null, 6, ["{","}","}","{","[","]","]","[","(",")",")","("], null);
parinfer.reader.opening_delim_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["(",null,"{",null,"[",null], null), null);
parinfer.reader.closing_delim_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["]",null,")",null,"}",null], null), null);
parinfer.reader.whitespace_QMARK_ = (function parinfer$reader$whitespace_QMARK_(ch){
return cljs.core.re_find.call(null,/\s/,ch);
});
parinfer.reader.prev_ch = (function parinfer$reader$prev_ch(stack){
return new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,stack));
});
/**
 * Next character will be escaped.
 */
parinfer.reader.escaping_QMARK_ = (function parinfer$reader$escaping_QMARK_(stack){
return cljs.core._EQ_.call(null,"\\",parinfer.reader.prev_ch.call(null,stack));
});
/**
 * Next character is inside a string.
 */
parinfer.reader.in_str_QMARK_ = (function parinfer$reader$in_str_QMARK_(stack){
var ch = parinfer.reader.prev_ch.call(null,(function (){var G__38805 = stack;
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_.call(null,stack))){
return cljs.core.pop.call(null,G__38805);
} else {
return G__38805;
}
})());
return cljs.core._EQ_.call(null,"\"",ch);
});
/**
 * Next character is inside a comment.
 */
parinfer.reader.in_comment_QMARK_ = (function parinfer$reader$in_comment_QMARK_(stack){
return cljs.core._EQ_.call(null,";",parinfer.reader.prev_ch.call(null,stack));
});
/**
 * Next character is inside actual code.
 */
parinfer.reader.in_code_QMARK_ = (function parinfer$reader$in_code_QMARK_(stack){
return (cljs.core.not.call(null,parinfer.reader.in_str_QMARK_.call(null,stack))) && (cljs.core.not.call(null,parinfer.reader.in_comment_QMARK_.call(null,stack)));
});
/**
 * Determine if the given closing delimiter can be used next, assuming we are inside code.
 */
parinfer.reader.valid_closer_QMARK_ = (function parinfer$reader$valid_closer_QMARK_(stack,ch){
return cljs.core._EQ_.call(null,parinfer.reader.prev_ch.call(null,stack),parinfer.reader.matching_delim.call(null,ch));
});
if(typeof parinfer.reader.push_char_STAR_ !== 'undefined'){
} else {
/**
 * Update the delimiter stack with the given character.
 */
parinfer.reader.push_char_STAR_ = (function (){var method_table__29781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29783__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29784__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29785__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"parinfer.reader","push-char*"),((function (method_table__29781__auto__,prefer_table__29782__auto__,method_cache__29783__auto__,cached_hierarchy__29784__auto__,hierarchy__29785__auto__){
return (function (p__38806){
var map__38807 = p__38806;
var map__38807__$1 = ((((!((map__38807 == null)))?((((map__38807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38807):map__38807);
var ch = cljs.core.get.call(null,map__38807__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
if(cljs.core.truth_(parinfer.reader.opening_delim_QMARK_.call(null,ch))){
return new cljs.core.Keyword(null,"open","open",-1763596448);
} else {
if(cljs.core.truth_(parinfer.reader.closing_delim_QMARK_.call(null,ch))){
return new cljs.core.Keyword(null,"close","close",1835149582);
} else {
return ch;

}
}
});})(method_table__29781__auto__,prefer_table__29782__auto__,method_cache__29783__auto__,cached_hierarchy__29784__auto__,hierarchy__29785__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29785__auto__,method_table__29781__auto__,prefer_table__29782__auto__,method_cache__29783__auto__,cached_hierarchy__29784__auto__));
})();
}
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,"\t",(function (p__38809){
var map__38810 = p__38809;
var map__38810__$1 = ((((!((map__38810 == null)))?((((map__38810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38810):map__38810);
var stack = cljs.core.get.call(null,map__38810__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.not.call(null,parinfer.reader.in_str_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ch","ch",-554717905),"  "], null);
} else {
return null;

}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,new cljs.core.Keyword(null,"open","open",-1763596448),(function (p__38812){
var map__38813 = p__38812;
var map__38813__$1 = ((((!((map__38813 == null)))?((((map__38813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38813):map__38813);
var state = map__38813__$1;
var stack = cljs.core.get.call(null,map__38813__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_code_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905),new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232)], null)))], null);
} else {
return null;

}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,new cljs.core.Keyword(null,"close","close",1835149582),(function (p__38815){
var map__38816 = p__38815;
var map__38816__$1 = ((((!((map__38816 == null)))?((((map__38816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38816):map__38816);
var stack = cljs.core.get.call(null,map__38816__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var backup = cljs.core.get.call(null,map__38816__$1,new cljs.core.Keyword(null,"backup","backup",26347393));
var ch = cljs.core.get.call(null,map__38816__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_code_QMARK_.call(null,stack))){
if(cljs.core.truth_(parinfer.reader.valid_closer_QMARK_.call(null,stack,ch))){
var opener = cljs.core.peek.call(null,stack);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack),new cljs.core.Keyword(null,"backup","backup",26347393),cljs.core.conj.call(null,backup,opener)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ch","ch",-554717905),""], null);
}
} else {
return null;

}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,";",(function (p__38818){
var map__38819 = p__38818;
var map__38819__$1 = ((((!((map__38819 == null)))?((((map__38819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38819):map__38819);
var state = map__38819__$1;
var stack = cljs.core.get.call(null,map__38819__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_code_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905)], null)))], null);
} else {
return null;

}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,"\n",(function (p__38821){
var map__38822 = p__38821;
var map__38822__$1 = ((((!((map__38822 == null)))?((((map__38822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38822):map__38822);
var stack = cljs.core.get.call(null,map__38822__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var stack__$1 = (function (){var G__38824 = stack;
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_.call(null,stack))){
return cljs.core.pop.call(null,G__38824);
} else {
return G__38824;
}
})();
var stack__$2 = (function (){var G__38825 = stack__$1;
if(cljs.core.truth_(parinfer.reader.in_comment_QMARK_.call(null,stack__$1))){
return cljs.core.pop.call(null,G__38825);
} else {
return G__38825;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),"",new cljs.core.Keyword(null,"stack","stack",-793405930),stack__$2], null);
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,"\\",(function (p__38826){
var map__38827 = p__38826;
var map__38827__$1 = ((((!((map__38827 == null)))?((((map__38827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38827):map__38827);
var state = map__38827__$1;
var stack = cljs.core.get.call(null,map__38827__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_comment_QMARK_.call(null,stack))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905)], null)))], null);

}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,"\"",(function (p__38829){
var map__38830 = p__38829;
var map__38830__$1 = ((((!((map__38830 == null)))?((((map__38830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38830):map__38830);
var state = map__38830__$1;
var stack = cljs.core.get.call(null,map__38830__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_str_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_comment_QMARK_.call(null,stack))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905)], null)))], null);

}
}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__38832){
var map__38833 = p__38832;
var map__38833__$1 = ((((!((map__38833 == null)))?((((map__38833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38833):map__38833);
var stack = cljs.core.get.call(null,map__38833__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
return null;

}
}));
parinfer.reader.push_char = (function parinfer$reader$push_char(state){
var new_data = parinfer.reader.push_char_STAR_.call(null,state);
return cljs.core.merge_with.call(null,((function (new_data){
return (function (p1__38836_SHARP_,p2__38835_SHARP_){
var or__28826__auto__ = p2__38835_SHARP_;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return p1__38836_SHARP_;
}
});})(new_data))
,state,new_data);
});

//# sourceMappingURL=reader.js.map?rel=1506931008116
