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
var seq__32639 = cljs.core.seq.call(null,cljs.core.range.call(null,(40)));
var chunk__32644 = null;
var count__32645 = (0);
var i__32646 = (0);
while(true){
if((i__32646 < count__32645)){
var x = cljs.core._nth.call(null,chunk__32644,i__32646);
var seq__32647_32663 = cljs.core.seq.call(null,cljs.core.range.call(null,(40)));
var chunk__32648_32664 = null;
var count__32649_32665 = (0);
var i__32650_32666 = (0);
while(true){
if((i__32650_32666 < count__32649_32665)){
var y_32667 = cljs.core._nth.call(null,chunk__32648_32664,i__32650_32666);
var vec__32651_32668 = power_turtle.view.canvas.raster_api.color_map.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,power_turtle.view.canvas.raster_api.raster),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_32667], null)));
var r_32669 = cljs.core.nth.call(null,vec__32651_32668,(0),null);
var g_32670 = cljs.core.nth.call(null,vec__32651_32668,(1),null);
var b_32671 = cljs.core.nth.call(null,vec__32651_32668,(2),null);
ctx.fillStyle = ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_32669),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_32670),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_32671),")"].join('');

ctx.fillRect((x * (7)),(y_32667 * (4)),(7),(4));

var G__32672 = seq__32647_32663;
var G__32673 = chunk__32648_32664;
var G__32674 = count__32649_32665;
var G__32675 = (i__32650_32666 + (1));
seq__32647_32663 = G__32672;
chunk__32648_32664 = G__32673;
count__32649_32665 = G__32674;
i__32650_32666 = G__32675;
continue;
} else {
var temp__4657__auto___32676 = cljs.core.seq.call(null,seq__32647_32663);
if(temp__4657__auto___32676){
var seq__32647_32677__$1 = temp__4657__auto___32676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32647_32677__$1)){
var c__28978__auto___32678 = cljs.core.chunk_first.call(null,seq__32647_32677__$1);
var G__32679 = cljs.core.chunk_rest.call(null,seq__32647_32677__$1);
var G__32680 = c__28978__auto___32678;
var G__32681 = cljs.core.count.call(null,c__28978__auto___32678);
var G__32682 = (0);
seq__32647_32663 = G__32679;
chunk__32648_32664 = G__32680;
count__32649_32665 = G__32681;
i__32650_32666 = G__32682;
continue;
} else {
var y_32683 = cljs.core.first.call(null,seq__32647_32677__$1);
var vec__32654_32684 = power_turtle.view.canvas.raster_api.color_map.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,power_turtle.view.canvas.raster_api.raster),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_32683], null)));
var r_32685 = cljs.core.nth.call(null,vec__32654_32684,(0),null);
var g_32686 = cljs.core.nth.call(null,vec__32654_32684,(1),null);
var b_32687 = cljs.core.nth.call(null,vec__32654_32684,(2),null);
ctx.fillStyle = ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_32685),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_32686),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_32687),")"].join('');

ctx.fillRect((x * (7)),(y_32683 * (4)),(7),(4));

var G__32688 = cljs.core.next.call(null,seq__32647_32677__$1);
var G__32689 = null;
var G__32690 = (0);
var G__32691 = (0);
seq__32647_32663 = G__32688;
chunk__32648_32664 = G__32689;
count__32649_32665 = G__32690;
i__32650_32666 = G__32691;
continue;
}
} else {
}
}
break;
}

var G__32692 = seq__32639;
var G__32693 = chunk__32644;
var G__32694 = count__32645;
var G__32695 = (i__32646 + (1));
seq__32639 = G__32692;
chunk__32644 = G__32693;
count__32645 = G__32694;
i__32646 = G__32695;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32639);
if(temp__4657__auto__){
var seq__32639__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32639__$1)){
var c__28978__auto__ = cljs.core.chunk_first.call(null,seq__32639__$1);
var G__32696 = cljs.core.chunk_rest.call(null,seq__32639__$1);
var G__32697 = c__28978__auto__;
var G__32698 = cljs.core.count.call(null,c__28978__auto__);
var G__32699 = (0);
seq__32639 = G__32696;
chunk__32644 = G__32697;
count__32645 = G__32698;
i__32646 = G__32699;
continue;
} else {
var x = cljs.core.first.call(null,seq__32639__$1);
var seq__32640_32700 = cljs.core.seq.call(null,cljs.core.range.call(null,(40)));
var chunk__32641_32701 = null;
var count__32642_32702 = (0);
var i__32643_32703 = (0);
while(true){
if((i__32643_32703 < count__32642_32702)){
var y_32704 = cljs.core._nth.call(null,chunk__32641_32701,i__32643_32703);
var vec__32657_32705 = power_turtle.view.canvas.raster_api.color_map.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,power_turtle.view.canvas.raster_api.raster),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_32704], null)));
var r_32706 = cljs.core.nth.call(null,vec__32657_32705,(0),null);
var g_32707 = cljs.core.nth.call(null,vec__32657_32705,(1),null);
var b_32708 = cljs.core.nth.call(null,vec__32657_32705,(2),null);
ctx.fillStyle = ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_32706),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_32707),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_32708),")"].join('');

ctx.fillRect((x * (7)),(y_32704 * (4)),(7),(4));

var G__32709 = seq__32640_32700;
var G__32710 = chunk__32641_32701;
var G__32711 = count__32642_32702;
var G__32712 = (i__32643_32703 + (1));
seq__32640_32700 = G__32709;
chunk__32641_32701 = G__32710;
count__32642_32702 = G__32711;
i__32643_32703 = G__32712;
continue;
} else {
var temp__4657__auto___32713__$1 = cljs.core.seq.call(null,seq__32640_32700);
if(temp__4657__auto___32713__$1){
var seq__32640_32714__$1 = temp__4657__auto___32713__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32640_32714__$1)){
var c__28978__auto___32715 = cljs.core.chunk_first.call(null,seq__32640_32714__$1);
var G__32716 = cljs.core.chunk_rest.call(null,seq__32640_32714__$1);
var G__32717 = c__28978__auto___32715;
var G__32718 = cljs.core.count.call(null,c__28978__auto___32715);
var G__32719 = (0);
seq__32640_32700 = G__32716;
chunk__32641_32701 = G__32717;
count__32642_32702 = G__32718;
i__32643_32703 = G__32719;
continue;
} else {
var y_32720 = cljs.core.first.call(null,seq__32640_32714__$1);
var vec__32660_32721 = power_turtle.view.canvas.raster_api.color_map.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,power_turtle.view.canvas.raster_api.raster),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_32720], null)));
var r_32722 = cljs.core.nth.call(null,vec__32660_32721,(0),null);
var g_32723 = cljs.core.nth.call(null,vec__32660_32721,(1),null);
var b_32724 = cljs.core.nth.call(null,vec__32660_32721,(2),null);
ctx.fillStyle = ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_32722),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_32723),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_32724),")"].join('');

ctx.fillRect((x * (7)),(y_32720 * (4)),(7),(4));

var G__32725 = cljs.core.next.call(null,seq__32640_32714__$1);
var G__32726 = null;
var G__32727 = (0);
var G__32728 = (0);
seq__32640_32700 = G__32725;
chunk__32641_32701 = G__32726;
count__32642_32702 = G__32727;
i__32643_32703 = G__32728;
continue;
}
} else {
}
}
break;
}

var G__32729 = cljs.core.next.call(null,seq__32639__$1);
var G__32730 = null;
var G__32731 = (0);
var G__32732 = (0);
seq__32639 = G__32729;
chunk__32644 = G__32730;
count__32645 = G__32731;
i__32646 = G__32732;
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

//# sourceMappingURL=raster_canvas.js.map?rel=1506931510777
