// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_console.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clairvoyant.core');
goog.require('re_frame_tracer.core');
goog.require('re_console.app');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"console-created?","console-created?",468788326),(function (db,p__38755){
var vec__38756 = p__38755;
var _ = cljs.core.nth.call(null,vec__38756,(0),null);
var console_key = cljs.core.nth.call(null,vec__38756,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38756,_,console_key){
return (function (){
return re_console.app.console_created_QMARK_.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__38756,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-items","get-console-items",-1702647473),(function (db,p__38759){
var vec__38760 = p__38759;
var _ = cljs.core.nth.call(null,vec__38760,(0),null);
var console_key = cljs.core.nth.call(null,vec__38760,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38760,_,console_key){
return (function (){
return re_console.app.console_items.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__38760,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-mode","get-console-mode",204621505),(function (db,p__38763){
var vec__38764 = p__38763;
var _ = cljs.core.nth.call(null,vec__38764,(0),null);
var console_key = cljs.core.nth.call(null,vec__38764,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38764,_,console_key){
return (function (){
return re_console.app.console_mode.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__38764,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-frame-updated","get-console-frame-updated",550276687),(function (db,p__38767){
var vec__38768 = p__38767;
var _ = cljs.core.nth.call(null,vec__38768,(0),null);
var console_key = cljs.core.nth.call(null,vec__38768,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38768,_,console_key){
return (function (){
return re_console.app.console_frame_updated.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__38768,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-current-text","get-console-current-text",445390068),(function (db,p__38771){
var vec__38772 = p__38771;
var _ = cljs.core.nth.call(null,vec__38772,(0),null);
var console_key = cljs.core.nth.call(null,vec__38772,(1),null);
var idx = reagent.ratom.make_reaction.call(null,((function (vec__38772,_,console_key){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,console_key),new cljs.core.Keyword(null,"hist-pos","hist-pos",64251178)], null));
});})(vec__38772,_,console_key))
);
var history = reagent.ratom.make_reaction.call(null,((function (idx,vec__38772,_,console_key){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,console_key),new cljs.core.Keyword(null,"history","history",-247395220)], null));
});})(idx,vec__38772,_,console_key))
);
return reagent.ratom.make_reaction.call(null,((function (idx,history,vec__38772,_,console_key){
return (function (){
var items = cljs.core.deref.call(null,history);
var pos = ((cljs.core.count.call(null,items) - cljs.core.deref.call(null,idx)) - (1));
return cljs.core.get.call(null,items,pos);
});})(idx,history,vec__38772,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console","get-console",349506720),(function (db,p__38775){
var vec__38776 = p__38775;
var _ = cljs.core.nth.call(null,vec__38776,(0),null);
var console_key = cljs.core.nth.call(null,vec__38776,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38776,_,console_key){
return (function (){
return re_console.app.console.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__38776,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"queued-forms-count","queued-forms-count",1735821775),(function (db,p__38779){
var vec__38780 = p__38779;
var _ = cljs.core.nth.call(null,vec__38780,(0),null);
var console_key = cljs.core.nth.call(null,vec__38780,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38780,_,console_key){
return (function (){
return cljs.core.count.call(null,re_console.app.queued_forms.call(null,cljs.core.deref.call(null,db),console_key));
});})(vec__38780,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"queued-forms-empty?","queued-forms-empty?",-375471063),(function (db,p__38783){
var vec__38784 = p__38783;
var _ = cljs.core.nth.call(null,vec__38784,(0),null);
var console_key = cljs.core.nth.call(null,vec__38784,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38784,_,console_key){
return (function (){
return !(cljs.core.empty_QMARK_.call(null,re_console.app.queued_forms.call(null,cljs.core.deref.call(null,db),console_key)));
});})(vec__38784,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-eval-opts","get-console-eval-opts",2087577375),(function (db,p__38787){
var vec__38788 = p__38787;
var _ = cljs.core.nth.call(null,vec__38788,(0),null);
var console_key = cljs.core.nth.call(null,vec__38788,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38788,_,console_key){
return (function (){
return re_console.app.console_eval_opts.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__38788,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-on-before-change","get-console-on-before-change",577618067),(function (db,p__38791){
var vec__38792 = p__38791;
var _ = cljs.core.nth.call(null,vec__38792,(0),null);
var console_key = cljs.core.nth.call(null,vec__38792,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38792,_,console_key){
return (function (){
return re_console.app.console_on_before_change.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__38792,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-on-after-change","get-console-on-after-change",-1635241260),(function (db,p__38795){
var vec__38796 = p__38795;
var _ = cljs.core.nth.call(null,vec__38796,(0),null);
var console_key = cljs.core.nth.call(null,vec__38796,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38796,_,console_key){
return (function (){
return re_console.app.console_on_after_change.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__38796,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-full-text","get-console-full-text",-1768204293),(function (db,p__38799){
var vec__38800 = p__38799;
var _ = cljs.core.nth.call(null,vec__38800,(0),null);
var console_key = cljs.core.nth.call(null,vec__38800,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38800,_,console_key){
return (function (){
return re_console.app.console_full_text.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__38800,_,console_key))
);
}));

//# sourceMappingURL=subs.js.map?rel=1506931008069
