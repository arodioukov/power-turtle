// Compiled by ClojureScript 1.9.908 {}
goog.provide('power_turtle.api');
goog.require('cljs.core');
goog.require('power_turtle.view.toolbar');
goog.require('power_turtle.view.canvas.html_canvas');
goog.require('power_turtle.view.canvas.raster_api');
goog.require('clojure_turtle.core');
/**
 * Repeatedly calls input function f n times and returns the last result
 */
power_turtle.api.repeat = (function power_turtle$api$repeat(n,f){
return cljs.core.last.call(null,cljs.core.repeatedly.call(null,n,f));
});
power_turtle.api.forward = (function power_turtle$api$forward(x){
clojure_turtle.core.forward.call(null,x);

return null;
});
power_turtle.api.back = (function power_turtle$api$back(x){
clojure_turtle.core.back.call(null,x);

return null;
});
power_turtle.api.left = (function power_turtle$api$left(x){
clojure_turtle.core.left.call(null,x);

return null;
});
power_turtle.api.right = (function power_turtle$api$right(x){
clojure_turtle.core.right.call(null,x);

return null;
});
power_turtle.api.forward_right = (function power_turtle$api$forward_right(){
power_turtle.api.forward.call(null,(50));

return power_turtle.api.right.call(null,(45));
});
power_turtle.api.forward_left = (function power_turtle$api$forward_left(){
power_turtle.api.forward.call(null,(50));

return power_turtle.api.left.call(null,(45));
});
power_turtle.api.octagon = (function power_turtle$api$octagon(){
return power_turtle.api.repeat.call(null,(8),power_turtle.api.forward_right);
});
power_turtle.api.pattern = (function power_turtle$api$pattern(){
return power_turtle.api.repeat.call(null,(12),(function (){
power_turtle.api.octagon.call(null);

return power_turtle.api.right.call(null,(30));
}));
});
power_turtle.api.red = (function power_turtle$api$red(){
clojure_turtle.core.color.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null));

return null;
});
power_turtle.api.green = (function power_turtle$api$green(){
clojure_turtle.core.color.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null));

return null;
});
power_turtle.api.blue = (function power_turtle$api$blue(){
clojure_turtle.core.color.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255)], null));

return null;
});
power_turtle.api.clean = (function power_turtle$api$clean(){
clojure_turtle.core.clean.call(null);

return null;
});
power_turtle.api.home = (function power_turtle$api$home(){
clojure_turtle.core.home.call(null);

return null;
});
power_turtle.api.init = (function power_turtle$api$init(){
power_turtle.api.home.call(null);

power_turtle.api.clean.call(null);

clojure_turtle.core.color.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null));

return null;
});
power_turtle.api.color = (function power_turtle$api$color(x){
if((x instanceof cljs.core.Keyword)){
power_turtle.view.canvas.raster_api.color.call(null,x);
} else {
clojure_turtle.core.color.call(null,x);
}

return null;
});
power_turtle.api.add_action = (function power_turtle$api$add_action(label,f){
return cljs.core.swap_BANG_.call(null,power_turtle.view.toolbar.actions,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,f], null));
});
cljs.core.reset_BANG_.call(null,power_turtle.view.toolbar.actions,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"<-","<-",-1894022771,null),(function (){
return power_turtle.api.left.call(null,(45));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null),(function (){
return power_turtle.api.right.call(null,(45));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^",(function (){
return power_turtle.api.forward.call(null,(50));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"<-.","<-.",-1461586766,null),power_turtle.api.forward_left], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,".->",".->",771835157,null),power_turtle.api.forward_right], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"octagon","octagon",1286859315,null),power_turtle.api.octagon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),power_turtle.api.pattern], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"red","red",671103323,null),power_turtle.api.red], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"green","green",695004688,null),power_turtle.api.green], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"blue","blue",1018430907,null),power_turtle.api.blue], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"init","init",-234949907,null),power_turtle.api.init], null)], null));
power_turtle.api.html = (function power_turtle$api$html(x){
return cljs.core.reset_BANG_.call(null,power_turtle.view.canvas.html_canvas.component,x);
});

//# sourceMappingURL=api.js.map?rel=1506931010750
