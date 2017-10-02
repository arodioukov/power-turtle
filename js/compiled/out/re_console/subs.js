// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_console.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clairvoyant.core');
goog.require('re_frame_tracer.core');
goog.require('re_console.app');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"console-created?","console-created?",468788326),(function (db,p__37849){
var vec__37850 = p__37849;
var _ = cljs.core.nth.call(null,vec__37850,(0),null);
var console_key = cljs.core.nth.call(null,vec__37850,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__37850,_,console_key){
return (function (){
return re_console.app.console_created_QMARK_.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__37850,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-items","get-console-items",-1702647473),(function (db,p__37853){
var vec__37854 = p__37853;
var _ = cljs.core.nth.call(null,vec__37854,(0),null);
var console_key = cljs.core.nth.call(null,vec__37854,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__37854,_,console_key){
return (function (){
return re_console.app.console_items.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__37854,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-mode","get-console-mode",204621505),(function (db,p__37857){
var vec__37858 = p__37857;
var _ = cljs.core.nth.call(null,vec__37858,(0),null);
var console_key = cljs.core.nth.call(null,vec__37858,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__37858,_,console_key){
return (function (){
return re_console.app.console_mode.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__37858,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-frame-updated","get-console-frame-updated",550276687),(function (db,p__37861){
var vec__37862 = p__37861;
var _ = cljs.core.nth.call(null,vec__37862,(0),null);
var console_key = cljs.core.nth.call(null,vec__37862,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__37862,_,console_key){
return (function (){
return re_console.app.console_frame_updated.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__37862,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-current-text","get-console-current-text",445390068),(function (db,p__37865){
var vec__37866 = p__37865;
var _ = cljs.core.nth.call(null,vec__37866,(0),null);
var console_key = cljs.core.nth.call(null,vec__37866,(1),null);
var idx = reagent.ratom.make_reaction.call(null,((function (vec__37866,_,console_key){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,console_key),new cljs.core.Keyword(null,"hist-pos","hist-pos",64251178)], null));
});})(vec__37866,_,console_key))
);
var history = reagent.ratom.make_reaction.call(null,((function (idx,vec__37866,_,console_key){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,console_key),new cljs.core.Keyword(null,"history","history",-247395220)], null));
});})(idx,vec__37866,_,console_key))
);
return reagent.ratom.make_reaction.call(null,((function (idx,history,vec__37866,_,console_key){
return (function (){
var items = cljs.core.deref.call(null,history);
var pos = ((cljs.core.count.call(null,items) - cljs.core.deref.call(null,idx)) - (1));
return cljs.core.get.call(null,items,pos);
});})(idx,history,vec__37866,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console","get-console",349506720),(function (db,p__37869){
var vec__37870 = p__37869;
var _ = cljs.core.nth.call(null,vec__37870,(0),null);
var console_key = cljs.core.nth.call(null,vec__37870,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__37870,_,console_key){
return (function (){
return re_console.app.console.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__37870,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"queued-forms-count","queued-forms-count",1735821775),(function (db,p__37873){
var vec__37874 = p__37873;
var _ = cljs.core.nth.call(null,vec__37874,(0),null);
var console_key = cljs.core.nth.call(null,vec__37874,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__37874,_,console_key){
return (function (){
return cljs.core.count.call(null,re_console.app.queued_forms.call(null,cljs.core.deref.call(null,db),console_key));
});})(vec__37874,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"queued-forms-empty?","queued-forms-empty?",-375471063),(function (db,p__37877){
var vec__37878 = p__37877;
var _ = cljs.core.nth.call(null,vec__37878,(0),null);
var console_key = cljs.core.nth.call(null,vec__37878,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__37878,_,console_key){
return (function (){
return !(cljs.core.empty_QMARK_.call(null,re_console.app.queued_forms.call(null,cljs.core.deref.call(null,db),console_key)));
});})(vec__37878,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-eval-opts","get-console-eval-opts",2087577375),(function (db,p__37881){
var vec__37882 = p__37881;
var _ = cljs.core.nth.call(null,vec__37882,(0),null);
var console_key = cljs.core.nth.call(null,vec__37882,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__37882,_,console_key){
return (function (){
return re_console.app.console_eval_opts.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__37882,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-on-before-change","get-console-on-before-change",577618067),(function (db,p__37885){
var vec__37886 = p__37885;
var _ = cljs.core.nth.call(null,vec__37886,(0),null);
var console_key = cljs.core.nth.call(null,vec__37886,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__37886,_,console_key){
return (function (){
return re_console.app.console_on_before_change.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__37886,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-on-after-change","get-console-on-after-change",-1635241260),(function (db,p__37889){
var vec__37890 = p__37889;
var _ = cljs.core.nth.call(null,vec__37890,(0),null);
var console_key = cljs.core.nth.call(null,vec__37890,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__37890,_,console_key){
return (function (){
return re_console.app.console_on_after_change.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__37890,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-full-text","get-console-full-text",-1768204293),(function (db,p__37893){
var vec__37894 = p__37893;
var _ = cljs.core.nth.call(null,vec__37894,(0),null);
var console_key = cljs.core.nth.call(null,vec__37894,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__37894,_,console_key){
return (function (){
return re_console.app.console_full_text.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__37894,_,console_key))
);
}));

//# sourceMappingURL=subs.js.map?rel=1506931522829
