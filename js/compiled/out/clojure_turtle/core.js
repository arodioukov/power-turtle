// Compiled by ClojureScript 1.9.908 {}
goog.provide('clojure_turtle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('clojure_turtle.macros');
/**
 * The default color to be used (ex: if color is not specified)
 */
clojure_turtle.core.DEFAULT_COLOR = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {clojure_turtle.core.Object}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure_turtle.core.Turtle = (function (x,y,angle,pen,color,fill,commands,start_from,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.angle = angle;
this.pen = pen;
this.color = color;
this.fill = fill;
this.commands = commands;
this.start_from = start_from;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
clojure_turtle.core.Turtle.prototype.toString = (function (){
var self__ = this;
var turt = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.select_keys.call(null,turt,cljs.core.keys.call(null,turt)))].join('');
});

clojure_turtle.core.Turtle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29466__auto__,k__29467__auto__){
var self__ = this;
var this__29466__auto____$1 = this;
return this__29466__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29467__auto__,null);
});

clojure_turtle.core.Turtle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29468__auto__,k33347,else__29469__auto__){
var self__ = this;
var this__29468__auto____$1 = this;
var G__33351 = k33347;
var G__33351__$1 = (((G__33351 instanceof cljs.core.Keyword))?G__33351.fqn:null);
switch (G__33351__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "angle":
return self__.angle;

break;
case "pen":
return self__.pen;

break;
case "color":
return self__.color;

break;
case "fill":
return self__.fill;

break;
case "commands":
return self__.commands;

break;
case "start-from":
return self__.start_from;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33347,else__29469__auto__);

}
});

clojure_turtle.core.Turtle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29480__auto__,writer__29481__auto__,opts__29482__auto__){
var self__ = this;
var this__29480__auto____$1 = this;
var pr_pair__29483__auto__ = ((function (this__29480__auto____$1){
return (function (keyval__29484__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29481__auto__,cljs.core.pr_writer,""," ","",opts__29482__auto__,keyval__29484__auto__);
});})(this__29480__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29481__auto__,pr_pair__29483__auto__,"#clojure-turtle.core.Turtle{",", ","}",opts__29482__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"angle","angle",1622094254),self__.angle],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pen","pen",2006675445),self__.pen],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"color","color",1011675173),self__.color],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill","fill",883462889),self__.fill],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"commands","commands",161008658),self__.commands],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-from","start-from",1934364841),self__.start_from],null))], null),self__.__extmap));
});

clojure_turtle.core.Turtle.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33346){
var self__ = this;
var G__33346__$1 = this;
return (new cljs.core.RecordIter((0),G__33346__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"pen","pen",2006675445),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"commands","commands",161008658),new cljs.core.Keyword(null,"start-from","start-from",1934364841)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

clojure_turtle.core.Turtle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29464__auto__){
var self__ = this;
var this__29464__auto____$1 = this;
return self__.__meta;
});

clojure_turtle.core.Turtle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29461__auto__){
var self__ = this;
var this__29461__auto____$1 = this;
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,self__.__extmap,self__.__hash));
});

clojure_turtle.core.Turtle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29470__auto__){
var self__ = this;
var this__29470__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

clojure_turtle.core.Turtle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29462__auto__){
var self__ = this;
var this__29462__auto____$1 = this;
var h__29280__auto__ = self__.__hash;
if(!((h__29280__auto__ == null))){
return h__29280__auto__;
} else {
var h__29280__auto____$1 = ((function (h__29280__auto__,this__29462__auto____$1){
return (function (coll__29463__auto__){
return (1301349890 ^ cljs.core.hash_unordered_coll.call(null,coll__29463__auto__));
});})(h__29280__auto__,this__29462__auto____$1))
.call(null,this__29462__auto____$1);
self__.__hash = h__29280__auto____$1;

return h__29280__auto____$1;
}
});

clojure_turtle.core.Turtle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33348,other33349){
var self__ = this;
var this33348__$1 = this;
return (!((other33349 == null))) && ((this33348__$1.constructor === other33349.constructor)) && (cljs.core._EQ_.call(null,this33348__$1.x,other33349.x)) && (cljs.core._EQ_.call(null,this33348__$1.y,other33349.y)) && (cljs.core._EQ_.call(null,this33348__$1.angle,other33349.angle)) && (cljs.core._EQ_.call(null,this33348__$1.pen,other33349.pen)) && (cljs.core._EQ_.call(null,this33348__$1.color,other33349.color)) && (cljs.core._EQ_.call(null,this33348__$1.fill,other33349.fill)) && (cljs.core._EQ_.call(null,this33348__$1.commands,other33349.commands)) && (cljs.core._EQ_.call(null,this33348__$1.start_from,other33349.start_from)) && (cljs.core._EQ_.call(null,this33348__$1.__extmap,other33349.__extmap));
});

clojure_turtle.core.Turtle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29475__auto__,k__29476__auto__){
var self__ = this;
var this__29475__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"start-from","start-from",1934364841),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"angle","angle",1622094254),null,new cljs.core.Keyword(null,"commands","commands",161008658),null,new cljs.core.Keyword(null,"pen","pen",2006675445),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__29476__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29475__auto____$1),self__.__meta),k__29476__auto__);
} else {
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29476__auto__)),null));
}
});

clojure_turtle.core.Turtle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29473__auto__,k__29474__auto__,G__33346){
var self__ = this;
var this__29473__auto____$1 = this;
var pred__33352 = cljs.core.keyword_identical_QMARK_;
var expr__33353 = k__29474__auto__;
if(cljs.core.truth_(pred__33352.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33353))){
return (new clojure_turtle.core.Turtle(G__33346,self__.y,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33352.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33353))){
return (new clojure_turtle.core.Turtle(self__.x,G__33346,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33352.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254),expr__33353))){
return (new clojure_turtle.core.Turtle(self__.x,self__.y,G__33346,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33352.call(null,new cljs.core.Keyword(null,"pen","pen",2006675445),expr__33353))){
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,G__33346,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33352.call(null,new cljs.core.Keyword(null,"color","color",1011675173),expr__33353))){
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,G__33346,self__.fill,self__.commands,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33352.call(null,new cljs.core.Keyword(null,"fill","fill",883462889),expr__33353))){
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,G__33346,self__.commands,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33352.call(null,new cljs.core.Keyword(null,"commands","commands",161008658),expr__33353))){
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,self__.fill,G__33346,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33352.call(null,new cljs.core.Keyword(null,"start-from","start-from",1934364841),expr__33353))){
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,G__33346,self__.__meta,self__.__extmap,null));
} else {
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29474__auto__,G__33346),null));
}
}
}
}
}
}
}
}
});

clojure_turtle.core.Turtle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29478__auto__){
var self__ = this;
var this__29478__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"angle","angle",1622094254),self__.angle],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pen","pen",2006675445),self__.pen],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"color","color",1011675173),self__.color],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill","fill",883462889),self__.fill],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"commands","commands",161008658),self__.commands],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-from","start-from",1934364841),self__.start_from],null))], null),self__.__extmap));
});

clojure_turtle.core.Turtle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29465__auto__,G__33346){
var self__ = this;
var this__29465__auto____$1 = this;
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,G__33346,self__.__extmap,self__.__hash));
});

clojure_turtle.core.Turtle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29471__auto__,entry__29472__auto__){
var self__ = this;
var this__29471__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29472__auto__)){
return this__29471__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29472__auto__,(0)),cljs.core._nth.call(null,entry__29472__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29471__auto____$1,entry__29472__auto__);
}
});

clojure_turtle.core.Turtle.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null),new cljs.core.Symbol(null,"pen","pen",-647760324,null),new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"fill","fill",-1770972880,null),new cljs.core.Symbol(null,"commands","commands",1801540185,null),new cljs.core.Symbol(null,"start-from","start-from",-720070928,null)], null);
});

clojure_turtle.core.Turtle.cljs$lang$type = true;

clojure_turtle.core.Turtle.cljs$lang$ctorPrSeq = (function (this__29502__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clojure-turtle.core/Turtle");
});

clojure_turtle.core.Turtle.cljs$lang$ctorPrWriter = (function (this__29502__auto__,writer__29503__auto__){
return cljs.core._write.call(null,writer__29503__auto__,"clojure-turtle.core/Turtle");
});

clojure_turtle.core.__GT_Turtle = (function clojure_turtle$core$__GT_Turtle(x,y,angle,pen,color,fill,commands,start_from){
return (new clojure_turtle.core.Turtle(x,y,angle,pen,color,fill,commands,start_from,null,null,null));
});

clojure_turtle.core.map__GT_Turtle = (function clojure_turtle$core$map__GT_Turtle(G__33350){
return (new clojure_turtle.core.Turtle(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33350),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33350),new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(G__33350),new cljs.core.Keyword(null,"pen","pen",2006675445).cljs$core$IFn$_invoke$arity$1(G__33350),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(G__33350),new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(G__33350),new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$1(G__33350),new cljs.core.Keyword(null,"start-from","start-from",1934364841).cljs$core$IFn$_invoke$arity$1(G__33350),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__33350,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"pen","pen",2006675445),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"commands","commands",161008658),new cljs.core.Keyword(null,"start-from","start-from",1934364841))),null));
});

/**
 * This method determines what gets returned when passing a Turtle record instance to pr-str, which in turn affects what gets printed at the REPL
 */
clojure_turtle.core.pr_str_turtle = (function clojure_turtle$core$pr_str_turtle(turt){
return cljs.core.pr_str.call(null,cljs.core.select_keys.call(null,turt,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"pen","pen",2006675445),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"fill","fill",883462889)], null)));
});
clojure_turtle.core.Turtle.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

clojure_turtle.core.Turtle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (turt,writer,_){
var turt__$1 = this;
return cljs.core._write.call(null,writer,clojure_turtle.core.pr_str_turtle.call(null,turt__$1));
});
/**
 * Returns an entity that represents a turtle.
 */
clojure_turtle.core.new_turtle = (function clojure_turtle$core$new_turtle(){
return cljs.core.atom.call(null,clojure_turtle.core.map__GT_Turtle.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(90),new cljs.core.Keyword(null,"pen","pen",2006675445),true,new cljs.core.Keyword(null,"color","color",1011675173),clojure_turtle.core.DEFAULT_COLOR,new cljs.core.Keyword(null,"fill","fill",883462889),false,new cljs.core.Keyword(null,"commands","commands",161008658),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"start-from","start-from",1934364841),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null)));
});
/**
 * The default turtle entity used when no turtle is specified for an operation.
 */
clojure_turtle.core.turtle = clojure_turtle.core.new_turtle.call(null);
/**
 * A helper function used in the implementation of basic operations to abstract
 *   out the interface of applying a function to a turtle entity.
 */
clojure_turtle.core.alter_turtle = (function clojure_turtle$core$alter_turtle(turt_state,f){
cljs.core.swap_BANG_.call(null,turt_state,f);

return turt_state;
});
/**
 * Take a color vector, as passed to the `color` fn, and return a color vector
 *   in the form [red blue green alpha], where all RGB and alpha values are integers
 *   in the range 0-255 inclusive. In order to make the color vector represent full
 *   opacity, the alpha value will be 255.
 */
clojure_turtle.core.make_opaque = (function clojure_turtle$core$make_opaque(color_vec){
var rgb_vec = (function (){var G__33356 = cljs.core.count.call(null,color_vec);
switch (G__33356) {
case (1):
return cljs.core.repeat.call(null,(3),cljs.core.first.call(null,color_vec));

break;
case (3):
return color_vec;

break;
case (4):
return cljs.core.take.call(null,(3),color_vec);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33356)].join('')));

}
})();
var rgba_vec = cljs.core.concat.call(null,rgb_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255)], null));
return rgba_vec;
});
/**
 * Set the turtle's color using [red green blue].
 *   RGB values are in the range 0 to 255, inclusive.
 */
clojure_turtle.core.color = (function clojure_turtle$core$color(var_args){
var G__33359 = arguments.length;
switch (G__33359) {
case 1:
return clojure_turtle.core.color.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_turtle.core.color.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.color.cljs$core$IFn$_invoke$arity$1 = (function (c){
return clojure_turtle.core.color.call(null,clojure_turtle.core.turtle,c);
});

clojure_turtle.core.color.cljs$core$IFn$_invoke$arity$2 = (function (turt_state,c){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"color","color",1011675173),c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),c], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.color.cljs$lang$maxFixedArity = 2;

/**
 * Rotate the turtle turt clockwise by ang degrees.
 */
clojure_turtle.core.right = (function clojure_turtle$core$right(var_args){
var G__33362 = arguments.length;
switch (G__33362) {
case 1:
return clojure_turtle.core.right.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_turtle.core.right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.right.cljs$core$IFn$_invoke$arity$1 = (function (ang){
return clojure_turtle.core.right.call(null,clojure_turtle.core.turtle,ang);
});

clojure_turtle.core.right.cljs$core$IFn$_invoke$arity$2 = (function (turt_state,ang){
var add_angle = (function clojure_turtle$core$add_angle(p__33366){
var map__33367 = p__33366;
var map__33367__$1 = ((((!((map__33367 == null)))?((((map__33367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33367.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33367):map__33367);
var t = map__33367__$1;
var angle = cljs.core.get.call(null,map__33367__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var new_angle = cljs.core.mod.call(null,(angle - ang),(360));
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"angle","angle",1622094254),new_angle),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setheading","setheading",1500207184),new_angle], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,add_angle);
});

clojure_turtle.core.right.cljs$lang$maxFixedArity = 2;

/**
 * Same as right, but turns the turtle counter-clockwise.
 */
clojure_turtle.core.left = (function clojure_turtle$core$left(var_args){
var G__33371 = arguments.length;
switch (G__33371) {
case 1:
return clojure_turtle.core.left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_turtle.core.left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.left.cljs$core$IFn$_invoke$arity$1 = (function (ang){
return clojure_turtle.core.right.call(null,((-1) * ang));
});

clojure_turtle.core.left.cljs$core$IFn$_invoke$arity$2 = (function (turt_state,ang){
return clojure_turtle.core.right.call(null,turt_state,((-1) * ang));
});

clojure_turtle.core.left.cljs$lang$maxFixedArity = 2;

clojure_turtle.core.deg__GT_radians = quil.core.radians;
clojure_turtle.core.radians__GT_deg = quil.core.degrees;
clojure_turtle.core.atan = quil.core.atan;
/**
 * Move the turtle turt forward in the direction that it is facing by length len.
 */
clojure_turtle.core.forward = (function clojure_turtle$core$forward(var_args){
var G__33374 = arguments.length;
switch (G__33374) {
case 1:
return clojure_turtle.core.forward.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_turtle.core.forward.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.forward.cljs$core$IFn$_invoke$arity$1 = (function (len){
return clojure_turtle.core.forward.call(null,clojure_turtle.core.turtle,len);
});

clojure_turtle.core.forward.cljs$core$IFn$_invoke$arity$2 = (function (turt_state,len){
var rads = clojure_turtle.core.deg__GT_radians.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,turt_state),new cljs.core.Keyword(null,"angle","angle",1622094254)));
var dx = (len * Math.cos(rads));
var dy = (len * Math.sin(rads));
var alter_fn = ((function (rads,dx,dy){
return (function (t){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,dx),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,dy),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null)], null));
});})(rads,dx,dy))
;
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.forward.cljs$lang$maxFixedArity = 2;

/**
 * Same as forward, but move the turtle backwards, which is opposite of the direction it is facing.
 */
clojure_turtle.core.back = (function clojure_turtle$core$back(var_args){
var G__33377 = arguments.length;
switch (G__33377) {
case 1:
return clojure_turtle.core.back.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_turtle.core.back.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.back.cljs$core$IFn$_invoke$arity$1 = (function (len){
return clojure_turtle.core.forward.call(null,((-1) * len));
});

clojure_turtle.core.back.cljs$core$IFn$_invoke$arity$2 = (function (turt_state,len){
return clojure_turtle.core.forward.call(null,turt_state,((-1) * len));
});

clojure_turtle.core.back.cljs$lang$maxFixedArity = 2;

/**
 * Instruct the turtle to pick its pen up. Subsequent movements will not draw to screen until the pen is put down again.
 */
clojure_turtle.core.penup = (function clojure_turtle$core$penup(var_args){
var G__33380 = arguments.length;
switch (G__33380) {
case 0:
return clojure_turtle.core.penup.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.penup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.penup.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.penup.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.penup.cljs$core$IFn$_invoke$arity$1 = (function (turt_state){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"pen","pen",2006675445),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pen","pen",2006675445),false], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.penup.cljs$lang$maxFixedArity = 1;

/**
 * Instruct the turtle to put its pen down. Subsequent movements will draw to screen.
 */
clojure_turtle.core.pendown = (function clojure_turtle$core$pendown(var_args){
var G__33383 = arguments.length;
switch (G__33383) {
case 0:
return clojure_turtle.core.pendown.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.pendown.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.pendown.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.pendown.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.pendown.cljs$core$IFn$_invoke$arity$1 = (function (turt_state){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"pen","pen",2006675445),true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pen","pen",2006675445),true], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.pendown.cljs$lang$maxFixedArity = 1;

/**
 * Make the turtle fill the area created by his subsequent moves, until end-fill is called.
 */
clojure_turtle.core.start_fill = (function clojure_turtle$core$start_fill(var_args){
var G__33386 = arguments.length;
switch (G__33386) {
case 0:
return clojure_turtle.core.start_fill.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.start_fill.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.start_fill.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.start_fill.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.start_fill.cljs$core$IFn$_invoke$arity$1 = (function (turt_state){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"fill","fill",883462889),true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-fill","start-fill",91524710)], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.start_fill.cljs$lang$maxFixedArity = 1;

/**
 * Stop filling the area of turtle moves. Must be called start-fill.
 */
clojure_turtle.core.end_fill = (function clojure_turtle$core$end_fill(var_args){
var G__33389 = arguments.length;
switch (G__33389) {
case 0:
return clojure_turtle.core.end_fill.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.end_fill.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.end_fill.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.end_fill.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.end_fill.cljs$core$IFn$_invoke$arity$1 = (function (turt_state){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"fill","fill",883462889),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-fill","end-fill",-1674316866)], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.end_fill.cljs$lang$maxFixedArity = 1;

/**
 * Sleeps for ms miliseconds. Can be used in a repeat to show commands execute in real time
 */
clojure_turtle.core.wait = (function clojure_turtle$core$wait(ms){
var get_time = (function clojure_turtle$core$wait_$_get_time(){
return (new Date()).getTime();
});
var initial_time = get_time.call(null);
while(true){
if((get_time.call(null) < (initial_time + ms))){
continue;
} else {
return null;
}
break;
}
});
/**
 * Clear the lines state, which effectively clears the drawing canvas.
 */
clojure_turtle.core.clean = (function clojure_turtle$core$clean(var_args){
var G__33393 = arguments.length;
switch (G__33393) {
case 0:
return clojure_turtle.core.clean.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.clean.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.clean.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.clean.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.clean.cljs$core$IFn$_invoke$arity$1 = (function (turt_state){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
var curr_pos_map = cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"commands","commands",161008658),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"start-from","start-from",1934364841),curr_pos_map);
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.clean.cljs$lang$maxFixedArity = 1;

/**
 * Set the position of turtle turt to x-coordinate x and y-coordinate y.
 */
clojure_turtle.core.setxy = (function clojure_turtle$core$setxy(var_args){
var G__33396 = arguments.length;
switch (G__33396) {
case 2:
return clojure_turtle.core.setxy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure_turtle.core.setxy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.setxy.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return clojure_turtle.core.setxy.call(null,clojure_turtle.core.turtle,x,y);
});

clojure_turtle.core.setxy.cljs$core$IFn$_invoke$arity$3 = (function (turt_state,x,y){
var pen_down_QMARK_ = cljs.core.get.call(null,cljs.core.deref.call(null,turt_state),new cljs.core.Keyword(null,"pen","pen",2006675445));
var alter_fn = ((function (pen_down_QMARK_){
return (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"x","x",2099068185),x),new cljs.core.Keyword(null,"y","y",-1757859776),y),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setxy","setxy",-229566621),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
});})(pen_down_QMARK_))
;
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.setxy.cljs$lang$maxFixedArity = 3;

/**
 * Set the direction which the turtle is facing, given in degrees, where 0 is to the right,
 *   90 is up, 180 is left, and 270 is down.
 */
clojure_turtle.core.setheading = (function clojure_turtle$core$setheading(var_args){
var G__33399 = arguments.length;
switch (G__33399) {
case 1:
return clojure_turtle.core.setheading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_turtle.core.setheading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.setheading.cljs$core$IFn$_invoke$arity$1 = (function (ang){
return clojure_turtle.core.setheading.call(null,clojure_turtle.core.turtle,ang);
});

clojure_turtle.core.setheading.cljs$core$IFn$_invoke$arity$2 = (function (turt_state,ang){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"angle","angle",1622094254),ang),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setheading","setheading",1500207184),ang], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.setheading.cljs$lang$maxFixedArity = 2;

/**
 * Set the turtle at coordinates (0,0), facing up (heading = 90 degrees)
 */
clojure_turtle.core.home = (function clojure_turtle$core$home(var_args){
var G__33402 = arguments.length;
switch (G__33402) {
case 0:
return clojure_turtle.core.home.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.home.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.home.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.home.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.home.cljs$core$IFn$_invoke$arity$1 = (function (turt_state){
clojure_turtle.core.setxy.call(null,turt_state,(0),(0));

return clojure_turtle.core.setheading.call(null,turt_state,(90));
});

clojure_turtle.core.home.cljs$lang$maxFixedArity = 1;

/**
 * A helper function for the Quil rendering function.
 */
clojure_turtle.core.reset_rendering = (function clojure_turtle$core$reset_rendering(){
quil.core.background.call(null,(200));

return quil.core.stroke_weight.call(null,(1));
});
/**
 * A helper function for the Quil rendering function.
 */
clojure_turtle.core.setup = (function clojure_turtle$core$setup(){
quil.core.smooth.call(null);

setTimeout((function (){
return quil.sketch._STAR_applet_STAR_ = quil.core.get_sketch_by_id.call(null,"turtle-canvas");
}),(5));

return clojure_turtle.core.reset_rendering.call(null);
});
/**
 * A helper function that draws the triangle that represents the turtle onto the screen.
 */
clojure_turtle.core.get_turtle_sprite = (function clojure_turtle$core$get_turtle_sprite(var_args){
var G__33405 = arguments.length;
switch (G__33405) {
case 0:
return clojure_turtle.core.get_turtle_sprite.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.get_turtle_sprite.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.get_turtle_sprite.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.get_turtle_sprite.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.get_turtle_sprite.cljs$core$IFn$_invoke$arity$1 = (function (turt){
var short_leg = (5);
var long_leg = (12);
var hypoteneuse = Math.sqrt(((short_leg * short_leg) + (long_leg * long_leg)));
var large_angle = clojure_turtle.core.radians__GT_deg.call(null,clojure_turtle.core.atan.call(null,(long_leg / short_leg)));
var small_angle = ((90) - large_angle);
var turt_copy_state = clojure_turtle.core.clean.call(null,clojure_turtle.core.pendown.call(null,cljs.core.atom.call(null,turt)));
var current_color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(turt);
var opaque_color = clojure_turtle.core.make_opaque.call(null,current_color);
clojure_turtle.core.left.call(null,clojure_turtle.core.forward.call(null,clojure_turtle.core.left.call(null,clojure_turtle.core.forward.call(null,clojure_turtle.core.left.call(null,clojure_turtle.core.forward.call(null,clojure_turtle.core.left.call(null,clojure_turtle.core.forward.call(null,clojure_turtle.core.right.call(null,clojure_turtle.core.color.call(null,clojure_turtle.core.pendown.call(null,clojure_turtle.core.back.call(null,clojure_turtle.core.penup.call(null,clojure_turtle.core.setxy.call(null,turt_copy_state,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(turt),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(turt))),(long_leg / (3)))),opaque_color),(90)),short_leg),((180) - large_angle)),hypoteneuse),((180) - ((2) * small_angle))),hypoteneuse),((180) - large_angle)),short_leg),(90));

return turt_copy_state;
});

clojure_turtle.core.get_turtle_sprite.cljs$lang$maxFixedArity = 1;

/**
 * Takes a seq of turtle commands and converts them into Quil commands to draw
 *   onto the canvas
 */
clojure_turtle.core.draw_turtle_commands = (function clojure_turtle$core$draw_turtle_commands(turt){
var new_turtle = cljs.core.deref.call(null,clojure_turtle.core.new_turtle.call(null));
var start_from_pos = cljs.core.get.call(null,turt,new cljs.core.Keyword(null,"start-from","start-from",1934364841));
var new_turtle_with_start = cljs.core.assoc.call(null,cljs.core.assoc.call(null,new_turtle,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_from_pos)),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_from_pos));
var t = new_turtle_with_start;
var commands = new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$1(turt);
while(true){
if(cljs.core.empty_QMARK_.call(null,commands)){
return t;
} else {
var next_cmd = cljs.core.first.call(null,commands);
var cmd_name = cljs.core.first.call(null,next_cmd);
var cmd_vals = cljs.core.rest.call(null,next_cmd);
var rest_cmds = cljs.core.rest.call(null,commands);
var G__33407 = cmd_name;
var G__33407__$1 = (((G__33407 instanceof cljs.core.Keyword))?G__33407.fqn:null);
switch (G__33407__$1) {
case "color":
var c = cljs.core.first.call(null,cmd_vals);
cljs.core.apply.call(null,quil.core.stroke,c);

cljs.core.apply.call(null,quil.core.fill,c);

var G__33415 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"color","color",1011675173),c);
var G__33416 = rest_cmds;
t = G__33415;
commands = G__33416;
continue;

break;
case "setxy":
var vec__33408 = cljs.core.first.call(null,cmd_vals);
var x = cljs.core.nth.call(null,vec__33408,(0),null);
var y = cljs.core.nth.call(null,vec__33408,(1),null);
var G__33417 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y);
var G__33418 = rest_cmds;
t = G__33417;
commands = G__33418;
continue;

break;
case "setheading":
var G__33419 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"angle","angle",1622094254),cljs.core.first.call(null,cmd_vals));
var G__33420 = rest_cmds;
t = G__33419;
commands = G__33420;
continue;

break;
case "translate":
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(t);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(t);
var vec__33411 = cljs.core.first.call(null,cmd_vals);
var dx = cljs.core.nth.call(null,vec__33411,(0),null);
var dy = cljs.core.nth.call(null,vec__33411,(1),null);
var new_x = (x + dx);
var new_y = (y + dy);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pen","pen",2006675445).cljs$core$IFn$_invoke$arity$1(t))){
quil.core.line.call(null,x,y,new_x,new_y);

if(cljs.core.truth_(new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(t))){
quil.core.vertex.call(null,x,y);

quil.core.vertex.call(null,new_x,new_y);
} else {
}
} else {
}

var G__33421 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"x","x",2099068185),new_x,new cljs.core.Keyword(null,"y","y",-1757859776),new_y);
var G__33422 = rest_cmds;
t = G__33421;
commands = G__33422;
continue;

break;
case "pen":
var G__33423 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"pen","pen",2006675445),cljs.core.first.call(null,cmd_vals));
var G__33424 = rest_cmds;
t = G__33423;
commands = G__33424;
continue;

break;
case "start-fill":
if(cljs.core.truth_(new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(t))){
} else {
quil.core.begin_shape.call(null);
}

var G__33425 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"fill","fill",883462889),true);
var G__33426 = rest_cmds;
t = G__33425;
commands = G__33426;
continue;

break;
case "end-fill":
if(cljs.core.truth_(new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(t))){
quil.core.end_shape.call(null);
} else {
}

var G__33427 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"fill","fill",883462889),false);
var G__33428 = rest_cmds;
t = G__33427;
commands = G__33428;
continue;

break;
default:
return t;

}
}
break;
}
});
/**
 * The function passed to Quil for doing rendering.
 */
clojure_turtle.core.draw_turtle = (function clojure_turtle$core$draw_turtle(turt_state){
quil.core.push_matrix.call(null);

quil.core.translate.call(null,(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)));

clojure_turtle.core.reset_rendering.call(null);

quil.core.push_matrix.call(null);

quil.core.scale.call(null,1.0,-1.0);

cljs.core.apply.call(null,quil.core.stroke,clojure_turtle.core.DEFAULT_COLOR);

cljs.core.apply.call(null,quil.core.fill,clojure_turtle.core.DEFAULT_COLOR);

clojure_turtle.core.draw_turtle_commands.call(null,cljs.core.deref.call(null,turt_state));

var sprite_33429 = clojure_turtle.core.get_turtle_sprite.call(null,cljs.core.deref.call(null,turt_state));
clojure_turtle.core.draw_turtle_commands.call(null,cljs.core.deref.call(null,sprite_33429));

quil.core.pop_matrix.call(null);

return quil.core.pop_matrix.call(null);
});
/**
 * The function passed to Quil for doing rendering.
 */
clojure_turtle.core.draw = (function clojure_turtle$core$draw(){
return clojure_turtle.core.draw_turtle.call(null,clojure_turtle.core.turtle);
});
var ret__30035__auto___33430 = /**
 * Executes `then` clause iff generating ClojureScript code. Stolen from Prismatic code.
 *   Ref. http://goo.gl/DhhhSN, http://goo.gl/Bhdyna.
 */
clojure_turtle.core.if_cljs = (function clojure_turtle$core$if_cljs(_AMPERSAND_form,_AMPERSAND_env,then,else$){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return then;
} else {
return else$;
}
});
clojure_turtle.core.if_cljs.cljs$lang$macro = true;

var ret__30035__auto___33446 = (function (){
/**
 * Opens up a new window that shows the turtle rendering canvas.  In CLJS it will render
 *   to a new HTML5 canvas object. An optional config map can be provided, where the key
 *   :title indicates the window title (clj), the :size key indicates a vector of 2 values
 *   indicating the width and height of the window.
 */
clojure_turtle.core.new_window = (function clojure_turtle$core$new_window(var_args){
var args__30002__auto__ = [];
var len__29995__auto___33447 = arguments.length;
var i__29996__auto___33448 = (0);
while(true){
if((i__29996__auto___33448 < len__29995__auto___33447)){
args__30002__auto__.push((arguments[i__29996__auto___33448]));

var G__33449 = (i__29996__auto___33448 + (1));
i__29996__auto___33448 = G__33449;
continue;
} else {
}
break;
}

var argseq__30003__auto__ = ((((2) < args__30002__auto__.length))?(new cljs.core.IndexedSeq(args__30002__auto__.slice((2)),(0),null)):null);
return clojure_turtle.core.new_window.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30003__auto__);
});

clojure_turtle.core.new_window.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__33434){
var vec__33435 = p__33434;
var config = cljs.core.nth.call(null,vec__33435,(0),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure-turtle.core","if-cljs","clojure-turtle.core/if-cljs",1147190338,null)),(function (){var x__29688__auto__ = (function (){var default_config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(323),(200)], null)], null);
var map__33440 = cljs.core.merge.call(null,default_config,config);
var map__33440__$1 = ((((!((map__33440 == null)))?((((map__33440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33440):map__33440);
var host = cljs.core.get.call(null,map__33440__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var size = cljs.core.get.call(null,map__33440__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.sketch","add-canvas","quil.sketch/add-canvas",-44468094,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"turtle-canvas"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.core","defsketch","quil.core/defsketch",137571269,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"example","example",-115247617,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"host","host",-1558485167)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"turtle-canvas"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"setup","setup",1987730512)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure-turtle.core","setup","clojure-turtle.core/setup",-224051665,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"draw","draw",1358331674)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure-turtle.core","draw","clojure-turtle.core/draw",1759977673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"size","size",1098693007)),(function (){var x__29688__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),(function (){var x__29688__auto__ = (function (){var default_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Watch the turtle go!",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(323),(200)], null)], null);
var map__33444 = cljs.core.merge.call(null,default_config,config);
var map__33444__$1 = ((((!((map__33444 == null)))?((((map__33444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33444.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33444):map__33444);
var title = cljs.core.get.call(null,map__33444__$1,new cljs.core.Keyword(null,"title","title",636505583));
var size = cljs.core.get.call(null,map__33444__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.core","defsketch","quil.core/defsketch",137571269,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"example","example",-115247617,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"title","title",636505583)),(function (){var x__29688__auto__ = title;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"setup","setup",1987730512)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure-turtle.core","setup","clojure-turtle.core/setup",-224051665,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"draw","draw",1358331674)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure-turtle.core","draw","clojure-turtle.core/draw",1759977673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"size","size",1098693007)),(function (){var x__29688__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29688__auto__);
})())));
});

clojure_turtle.core.new_window.cljs$lang$maxFixedArity = (2);

clojure_turtle.core.new_window.cljs$lang$applyTo = (function (seq33431){
var G__33432 = cljs.core.first.call(null,seq33431);
var seq33431__$1 = cljs.core.next.call(null,seq33431);
var G__33433 = cljs.core.first.call(null,seq33431__$1);
var seq33431__$2 = cljs.core.next.call(null,seq33431__$1);
return clojure_turtle.core.new_window.cljs$core$IFn$_invoke$arity$variadic(G__33432,G__33433,seq33431__$2);
});

return null;
})()
;
clojure_turtle.core.new_window.cljs$lang$macro = true;


//# sourceMappingURL=core.js.map?rel=1506930996392
