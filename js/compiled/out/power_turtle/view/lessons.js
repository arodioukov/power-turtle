// Compiled by ClojureScript 1.9.908 {}
goog.provide('power_turtle.view.lessons');
goog.require('cljs.core');
goog.require('power_turtle.lesson_markdown');
goog.require('power_turtle.model');
goog.require('power_turtle.view.markdown');
goog.require('soda_ash.core');
power_turtle.view.lessons.li = (function power_turtle$view$lessons$li(tree,parent){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListSA,(function (){var iter__28947__auto__ = (function power_turtle$view$lessons$li_$_iter__39657(s__39658){
return (new cljs.core.LazySeq(null,(function (){
var s__39658__$1 = s__39658;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39658__$1);
if(temp__4657__auto__){
var s__39658__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39658__$2)){
var c__28945__auto__ = cljs.core.chunk_first.call(null,s__39658__$2);
var size__28946__auto__ = cljs.core.count.call(null,c__28945__auto__);
var b__39660 = cljs.core.chunk_buffer.call(null,size__28946__auto__);
if((function (){var i__39659 = (0);
while(true){
if((i__39659 < size__28946__auto__)){
var vec__39661 = cljs.core._nth.call(null,c__28945__auto__,i__39659);
var lesson_name = cljs.core.nth.call(null,vec__39661,(0),null);
var lesson = cljs.core.nth.call(null,vec__39661,(1),null);
var folder_QMARK_ = cljs.core.map_QMARK_.call(null,lesson);
var link = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lesson_name)].join('');
if(cljs.core.not_EQ_.call(null,lesson_name,"description.md")){
cljs.core.chunk_append.call(null,b__39660,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListItem,((!(folder_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),link], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListIcon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),((folder_QMARK_)?"folder":"file")], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListContent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListHeader,lesson_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListDescription,((folder_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.markdown.render_markdown,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.get.call(null,lesson,"description.md")))], null):new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,lesson)))], null),((folder_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.lessons.li,lesson,link], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),link], null)));

var G__39667 = (i__39659 + (1));
i__39659 = G__39667;
continue;
} else {
var G__39668 = (i__39659 + (1));
i__39659 = G__39668;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39660),power_turtle$view$lessons$li_$_iter__39657.call(null,cljs.core.chunk_rest.call(null,s__39658__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39660),null);
}
} else {
var vec__39664 = cljs.core.first.call(null,s__39658__$2);
var lesson_name = cljs.core.nth.call(null,vec__39664,(0),null);
var lesson = cljs.core.nth.call(null,vec__39664,(1),null);
var folder_QMARK_ = cljs.core.map_QMARK_.call(null,lesson);
var link = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lesson_name)].join('');
if(cljs.core.not_EQ_.call(null,lesson_name,"description.md")){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListItem,((!(folder_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),link], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListIcon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),((folder_QMARK_)?"folder":"file")], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListContent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListHeader,lesson_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListDescription,((folder_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.markdown.render_markdown,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.get.call(null,lesson,"description.md")))], null):new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,lesson)))], null),((folder_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.lessons.li,lesson,link], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),link], null)),power_turtle$view$lessons$li_$_iter__39657.call(null,cljs.core.rest.call(null,s__39658__$2)));
} else {
var G__39669 = cljs.core.rest.call(null,s__39658__$2);
s__39658__$1 = G__39669;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28947__auto__.call(null,tree);
})()], null);
});
power_turtle.view.lessons.lessons_view = (function power_turtle$view$lessons$lessons_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.lessons.li,cljs.core.get.call(null,power_turtle.lesson_markdown.lessons,cljs.core.deref.call(null,power_turtle.model.current_language)),"#lesson"], null)], null);
});

//# sourceMappingURL=lessons.js.map?rel=1506931525980
