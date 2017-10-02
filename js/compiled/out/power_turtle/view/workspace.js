// Compiled by ClojureScript 1.9.908 {}
goog.provide('power_turtle.view.workspace');
goog.require('cljs.core');
goog.require('power_turtle.view.canvas.raster_canvas');
goog.require('power_turtle.view.canvas.html_canvas');
goog.require('power_turtle.view.canvas.quil_canvas');
goog.require('power_turtle.view.canvas.turtle_canvas');
goog.require('power_turtle.view.help');
goog.require('power_turtle.view.repl');
goog.require('power_turtle.view.toolbar');
goog.require('reagent.core');
goog.require('soda_ash.core');
power_turtle.view.workspace.canvases = new cljs.core.PersistentArrayMap(null, 4, ["turtle",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.canvas.turtle_canvas.turtle_canvas], null),"raster",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.canvas.raster_canvas.raster_canvas], null),"quil",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.canvas.quil_canvas.quil_canvas], null),"html",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.canvas.html_canvas.html_space], null)], null);
power_turtle.view.workspace.freestyle_canvas = reagent.core.atom.call(null,"turtle");
power_turtle.view.workspace.chooser = (function power_turtle$view$workspace$chooser(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.deref.call(null,power_turtle.view.workspace.freestyle_canvas),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.clj__GT_js.call(null,(function (){var iter__29634__auto__ = (function power_turtle$view$workspace$chooser_$_iter__40551(s__40552){
return (new cljs.core.LazySeq(null,(function (){
var s__40552__$1 = s__40552;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40552__$1);
if(temp__4657__auto__){
var s__40552__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40552__$2)){
var c__29632__auto__ = cljs.core.chunk_first.call(null,s__40552__$2);
var size__29633__auto__ = cljs.core.count.call(null,c__29632__auto__);
var b__40554 = cljs.core.chunk_buffer.call(null,size__29633__auto__);
if((function (){var i__40553 = (0);
while(true){
if((i__40553 < size__29633__auto__)){
var k = cljs.core._nth.call(null,c__29632__auto__,i__40553);
cljs.core.chunk_append.call(null,b__40554,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"text","text",-1790561697),k], null));

var G__40555 = (i__40553 + (1));
i__40553 = G__40555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40554),power_turtle$view$workspace$chooser_$_iter__40551.call(null,cljs.core.chunk_rest.call(null,s__40552__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40554),null);
}
} else {
var k = cljs.core.first.call(null,s__40552__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"text","text",-1790561697),k], null),power_turtle$view$workspace$chooser_$_iter__40551.call(null,cljs.core.rest.call(null,s__40552__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29634__auto__.call(null,cljs.core.keys.call(null,power_turtle.view.workspace.canvases));
})()),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function power_turtle$view$workspace$chooser_$_chooser_changed(e,d){
return cljs.core.reset_BANG_.call(null,power_turtle.view.workspace.freestyle_canvas,d.value);
})], null)], null);
});
power_turtle.view.workspace.canvas_repl = (function power_turtle$view$workspace$canvas_repl(canvas_name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main.well","div.main.well",364370871),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space","div.space",-1949188144),cljs.core.get.call(null,power_turtle.view.workspace.canvases,(function (){var or__28826__auto__ = canvas_name;
if(cljs.core.truth_(or__28826__auto__)){
return or__28826__auto__;
} else {
return cljs.core.deref.call(null,power_turtle.view.workspace.freestyle_canvas);
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.canvas.turtle_canvas.turtle_canvas], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.repl.repl], null)], null);
});
power_turtle.view.workspace.workspace = (function power_turtle$view$workspace$workspace(canvas_name){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.toolbar.toolbar], null),((cljs.core.not.call(null,canvas_name))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.workspace.chooser], null)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.workspace.canvas_repl,canvas_name], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.help.help_tips], null)], null);
});

//# sourceMappingURL=workspace.js.map?rel=1506931010854
