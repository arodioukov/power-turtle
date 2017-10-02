// Compiled by ClojureScript 1.9.908 {}
goog.provide('power_turtle.view.canvas.raster_canvas');
goog.require('cljs.core');
goog.require('power_turtle.view.canvas.raster_api');
goog.require('reagent.core');
goog.require('reagent.dom');
if(typeof power_turtle.view.canvas.raster_canvas.canvas !== 'undefined'){
} else {
power_turtle.view.canvas.raster_canvas.canvas = cljs.core.atom.call(null,null);
}
power_turtle.view.canvas.raster_canvas.pixel_width = (7);
power_turtle.view.canvas.raster_canvas.pixel_height = (4);
power_turtle.view.canvas.raster_canvas.redraw = (function power_turtle$view$canvas$raster_canvas$redraw(){
if(cljs.core.truth_(cljs.core.deref.call(null,power_turtle.view.canvas.raster_canvas.canvas))){
var ctx = cljs.core.deref.call(null,power_turtle.view.canvas.raster_canvas.canvas).getContext("2d");
var seq__33545 = cljs.core.seq.call(null,cljs.core.range.call(null,(40)));
var chunk__33550 = null;
var count__33551 = (0);
var i__33552 = (0);
while(true){
if((i__33552 < count__33551)){
var x = cljs.core._nth.call(null,chunk__33550,i__33552);
var seq__33553_33569 = cljs.core.seq.call(null,cljs.core.range.call(null,(40)));
var chunk__33554_33570 = null;
var count__33555_33571 = (0);
var i__33556_33572 = (0);
while(true){
if((i__33556_33572 < count__33555_33571)){
var y_33573 = cljs.core._nth.call(null,chunk__33554_33570,i__33556_33572);
var vec__33557_33574 = power_turtle.view.canvas.raster_api.color_map.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,power_turtle.view.canvas.raster_api.raster),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_33573], null)));
var r_33575 = cljs.core.nth.call(null,vec__33557_33574,(0),null);
var g_33576 = cljs.core.nth.call(null,vec__33557_33574,(1),null);
var b_33577 = cljs.core.nth.call(null,vec__33557_33574,(2),null);
ctx.fillStyle = ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_33575),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_33576),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_33577),")"].join('');

ctx.fillRect((x * (7)),(y_33573 * (4)),(7),(4));

var G__33578 = seq__33553_33569;
var G__33579 = chunk__33554_33570;
var G__33580 = count__33555_33571;
var G__33581 = (i__33556_33572 + (1));
seq__33553_33569 = G__33578;
chunk__33554_33570 = G__33579;
count__33555_33571 = G__33580;
i__33556_33572 = G__33581;
continue;
} else {
var temp__4657__auto___33582 = cljs.core.seq.call(null,seq__33553_33569);
if(temp__4657__auto___33582){
var seq__33553_33583__$1 = temp__4657__auto___33582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33553_33583__$1)){
var c__29665__auto___33584 = cljs.core.chunk_first.call(null,seq__33553_33583__$1);
var G__33585 = cljs.core.chunk_rest.call(null,seq__33553_33583__$1);
var G__33586 = c__29665__auto___33584;
var G__33587 = cljs.core.count.call(null,c__29665__auto___33584);
var G__33588 = (0);
seq__33553_33569 = G__33585;
chunk__33554_33570 = G__33586;
count__33555_33571 = G__33587;
i__33556_33572 = G__33588;
continue;
} else {
var y_33589 = cljs.core.first.call(null,seq__33553_33583__$1);
var vec__33560_33590 = power_turtle.view.canvas.raster_api.color_map.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,power_turtle.view.canvas.raster_api.raster),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_33589], null)));
var r_33591 = cljs.core.nth.call(null,vec__33560_33590,(0),null);
var g_33592 = cljs.core.nth.call(null,vec__33560_33590,(1),null);
var b_33593 = cljs.core.nth.call(null,vec__33560_33590,(2),null);
ctx.fillStyle = ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_33591),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_33592),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_33593),")"].join('');

ctx.fillRect((x * (7)),(y_33589 * (4)),(7),(4));

var G__33594 = cljs.core.next.call(null,seq__33553_33583__$1);
var G__33595 = null;
var G__33596 = (0);
var G__33597 = (0);
seq__33553_33569 = G__33594;
chunk__33554_33570 = G__33595;
count__33555_33571 = G__33596;
i__33556_33572 = G__33597;
continue;
}
} else {
}
}
break;
}

var G__33598 = seq__33545;
var G__33599 = chunk__33550;
var G__33600 = count__33551;
var G__33601 = (i__33552 + (1));
seq__33545 = G__33598;
chunk__33550 = G__33599;
count__33551 = G__33600;
i__33552 = G__33601;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33545);
if(temp__4657__auto__){
var seq__33545__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33545__$1)){
var c__29665__auto__ = cljs.core.chunk_first.call(null,seq__33545__$1);
var G__33602 = cljs.core.chunk_rest.call(null,seq__33545__$1);
var G__33603 = c__29665__auto__;
var G__33604 = cljs.core.count.call(null,c__29665__auto__);
var G__33605 = (0);
seq__33545 = G__33602;
chunk__33550 = G__33603;
count__33551 = G__33604;
i__33552 = G__33605;
continue;
} else {
var x = cljs.core.first.call(null,seq__33545__$1);
var seq__33546_33606 = cljs.core.seq.call(null,cljs.core.range.call(null,(40)));
var chunk__33547_33607 = null;
var count__33548_33608 = (0);
var i__33549_33609 = (0);
while(true){
if((i__33549_33609 < count__33548_33608)){
var y_33610 = cljs.core._nth.call(null,chunk__33547_33607,i__33549_33609);
var vec__33563_33611 = power_turtle.view.canvas.raster_api.color_map.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,power_turtle.view.canvas.raster_api.raster),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_33610], null)));
var r_33612 = cljs.core.nth.call(null,vec__33563_33611,(0),null);
var g_33613 = cljs.core.nth.call(null,vec__33563_33611,(1),null);
var b_33614 = cljs.core.nth.call(null,vec__33563_33611,(2),null);
ctx.fillStyle = ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_33612),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_33613),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_33614),")"].join('');

ctx.fillRect((x * (7)),(y_33610 * (4)),(7),(4));

var G__33615 = seq__33546_33606;
var G__33616 = chunk__33547_33607;
var G__33617 = count__33548_33608;
var G__33618 = (i__33549_33609 + (1));
seq__33546_33606 = G__33615;
chunk__33547_33607 = G__33616;
count__33548_33608 = G__33617;
i__33549_33609 = G__33618;
continue;
} else {
var temp__4657__auto___33619__$1 = cljs.core.seq.call(null,seq__33546_33606);
if(temp__4657__auto___33619__$1){
var seq__33546_33620__$1 = temp__4657__auto___33619__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33546_33620__$1)){
var c__29665__auto___33621 = cljs.core.chunk_first.call(null,seq__33546_33620__$1);
var G__33622 = cljs.core.chunk_rest.call(null,seq__33546_33620__$1);
var G__33623 = c__29665__auto___33621;
var G__33624 = cljs.core.count.call(null,c__29665__auto___33621);
var G__33625 = (0);
seq__33546_33606 = G__33622;
chunk__33547_33607 = G__33623;
count__33548_33608 = G__33624;
i__33549_33609 = G__33625;
continue;
} else {
var y_33626 = cljs.core.first.call(null,seq__33546_33620__$1);
var vec__33566_33627 = power_turtle.view.canvas.raster_api.color_map.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,power_turtle.view.canvas.raster_api.raster),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_33626], null)));
var r_33628 = cljs.core.nth.call(null,vec__33566_33627,(0),null);
var g_33629 = cljs.core.nth.call(null,vec__33566_33627,(1),null);
var b_33630 = cljs.core.nth.call(null,vec__33566_33627,(2),null);
ctx.fillStyle = ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_33628),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_33629),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_33630),")"].join('');

ctx.fillRect((x * (7)),(y_33626 * (4)),(7),(4));

var G__33631 = cljs.core.next.call(null,seq__33546_33620__$1);
var G__33632 = null;
var G__33633 = (0);
var G__33634 = (0);
seq__33546_33606 = G__33631;
chunk__33547_33607 = G__33632;
count__33548_33608 = G__33633;
i__33549_33609 = G__33634;
continue;
}
} else {
}
}
break;
}

var G__33635 = cljs.core.next.call(null,seq__33545__$1);
var G__33636 = null;
var G__33637 = (0);
var G__33638 = (0);
seq__33545 = G__33635;
chunk__33550 = G__33636;
count__33551 = G__33637;
i__33552 = G__33638;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
if(typeof power_turtle.view.canvas.raster_canvas.init !== 'undefined'){
} else {
power_turtle.view.canvas.raster_canvas.init = cljs.core.add_watch.call(null,power_turtle.view.canvas.raster_api.raster,new cljs.core.Keyword(null,"monitor","monitor",459609397),(function (_,___$1,___$2,___$3){
return power_turtle.view.canvas.raster_canvas.redraw.call(null);
}));
}
power_turtle.view.canvas.raster_canvas.raster_canvas = (function power_turtle$view$canvas$raster_canvas$raster_canvas(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"raster-canvas",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function power_turtle$view$canvas$raster_canvas$raster_canvas_$_render_raster_canvas(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),((40) * (7)),new cljs.core.Keyword(null,"height","height",1025178622),((40) * (4))], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function power_turtle$view$canvas$raster_canvas$raster_canvas_$_raster_canvas_did_mount(this$){
cljs.core.reset_BANG_.call(null,power_turtle.view.canvas.raster_canvas.canvas,reagent.dom.dom_node.call(null,this$));

return power_turtle.view.canvas.raster_canvas.redraw.call(null);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function power_turtle$view$canvas$raster_canvas$raster_canvas_$_raster_canvas_will_unmount(){
return cljs.core.reset_BANG_.call(null,power_turtle.view.canvas.raster_canvas.canvas,null);
})], null));
});

//# sourceMappingURL=raster_canvas.js.map?rel=1506930996653
