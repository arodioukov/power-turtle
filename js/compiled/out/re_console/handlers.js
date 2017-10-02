// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_console.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clairvoyant.core');
goog.require('re_frame_tracer.core');
goog.require('re_console.app');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"init-console","init-console",1925118851),(function re_console$handlers$add_console(db,p__38657){
var vec__38658 = p__38657;
var _ = cljs.core.nth.call(null,vec__38658,(0),null);
var console_key = cljs.core.nth.call(null,vec__38658,(1),null);
var eval_opts = cljs.core.nth.call(null,vec__38658,(2),null);
return re_console.app.init_console.call(null,db,console_key,eval_opts);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-instance","add-console-instance",9095274),(function re_console$handlers$add_console(db,p__38661){
var vec__38662 = p__38661;
var _ = cljs.core.nth.call(null,vec__38662,(0),null);
var console_key = cljs.core.nth.call(null,vec__38662,(1),null);
var instance = cljs.core.nth.call(null,vec__38662,(2),null);
return re_console.app.add_console_instance.call(null,db,console_key,instance);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),(function re_console$handlers$focus_console_editor(db,p__38665){
var vec__38666 = p__38665;
var _ = cljs.core.nth.call(null,vec__38666,(0),null);
var console_key = cljs.core.nth.call(null,vec__38666,(1),null);
var temp__4657__auto___38669 = re_console.app.console.call(null,db,console_key);
if(cljs.core.truth_(temp__4657__auto___38669)){
var instance_38670 = temp__4657__auto___38669;
instance_38670.focus();
} else {
}

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-theme","set-console-theme",-659914150),(function re_console$handlers$set_console_theme(db,p__38671){
var vec__38672 = p__38671;
var _ = cljs.core.nth.call(null,vec__38672,(0),null);
var console_key = cljs.core.nth.call(null,vec__38672,(1),null);
var theme = cljs.core.nth.call(null,vec__38672,(2),null);
var temp__4657__auto___38675 = re_console.app.console.call(null,db,console_key);
if(cljs.core.truth_(temp__4657__auto___38675)){
var instance_38676 = temp__4657__auto___38675;
instance_38676.setOption("theme",theme);
} else {
}

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"clear-console-items","clear-console-items",-1821518386),(function re_console$handlers$clear_console_items(db,p__38677){
var vec__38678 = p__38677;
var _ = cljs.core.nth.call(null,vec__38678,(0),null);
var console_key = cljs.core.nth.call(null,vec__38678,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.clear_console_items.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"reset-console-items","reset-console-items",-1878088383),(function re_console$handlers$reset_console_items(db,p__38681){
var vec__38682 = p__38681;
var _ = cljs.core.nth.call(null,vec__38682,(0),null);
var console_key = cljs.core.nth.call(null,vec__38682,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.reset_console_items.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-item","add-console-item",-1440738899),(function re_console$handlers$add_console_item(db,p__38685){
var vec__38686 = p__38685;
var _ = cljs.core.nth.call(null,vec__38686,(0),null);
var console_key = cljs.core.nth.call(null,vec__38686,(1),null);
var item = cljs.core.nth.call(null,vec__38686,(2),null);
return re_console.app.add_console_item.call(null,db,console_key,item);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-items","add-console-items",-1014410013),(function re_console$handlers$add_console_items(db,p__38689){
var vec__38690 = p__38689;
var _ = cljs.core.nth.call(null,vec__38690,(0),null);
var console_key = cljs.core.nth.call(null,vec__38690,(1),null);
var items = cljs.core.nth.call(null,vec__38690,(2),null);
return re_console.app.add_console_item.call(null,db,console_key,items);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-input","add-console-input",-277003986),(function re_console$handlers$add_console_input(db,p__38693){
var vec__38694 = p__38693;
var _ = cljs.core.nth.call(null,vec__38694,(0),null);
var console_key = cljs.core.nth.call(null,vec__38694,(1),null);
var input = cljs.core.nth.call(null,vec__38694,(2),null);
var ns = cljs.core.nth.call(null,vec__38694,(3),null);
return re_console.app.add_console_input.call(null,db,console_key,input,ns);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-result","add-console-result",1768771531),(function re_console$handlers$add_console_result(db,p__38697){
var vec__38698 = p__38697;
var _ = cljs.core.nth.call(null,vec__38698,(0),null);
var console_key = cljs.core.nth.call(null,vec__38698,(1),null);
var error_QMARK_ = cljs.core.nth.call(null,vec__38698,(2),null);
var value = cljs.core.nth.call(null,vec__38698,(3),null);
return re_console.app.add_console_result.call(null,db,console_key,error_QMARK_,value);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-log","add-console-log",-371208070),(function re_console$handlers$add_console_log(db,p__38701){
var vec__38702 = p__38701;
var _ = cljs.core.nth.call(null,vec__38702,(0),null);
var console_key = cljs.core.nth.call(null,vec__38702,(1),null);
var item = cljs.core.nth.call(null,vec__38702,(2),null);
return re_console.app.add_console_log.call(null,db,console_key,item);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"console-set-text","console-set-text",860354388),(function re_console$handlers$console_set_text(db,p__38705){
var vec__38706 = p__38705;
var _ = cljs.core.nth.call(null,vec__38706,(0),null);
var console_key = cljs.core.nth.call(null,vec__38706,(1),null);
var text = cljs.core.nth.call(null,vec__38706,(2),null);
return re_console.app.set_console_text.call(null,db,console_key,text);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"console-go-up","console-go-up",50535611),(function re_console$handlers$console_go_up(db,p__38709){
var vec__38710 = p__38709;
var _ = cljs.core.nth.call(null,vec__38710,(0),null);
var console_key = cljs.core.nth.call(null,vec__38710,(1),null);
return re_console.app.console_go_up.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"console-go-down","console-go-down",-1045916631),(function re_console$handlers$console_go_down(db,p__38713){
var vec__38714 = p__38713;
var _ = cljs.core.nth.call(null,vec__38714,(0),null);
var console_key = cljs.core.nth.call(null,vec__38714,(1),null);
return re_console.app.console_go_down.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-queued-forms","set-console-queued-forms",-419528812),(function re_console$handlers$set_queued_forms(db,p__38717){
var vec__38718 = p__38717;
var _ = cljs.core.nth.call(null,vec__38718,(0),null);
var console_key = cljs.core.nth.call(null,vec__38718,(1),null);
var forms = cljs.core.nth.call(null,vec__38718,(2),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.set_console_queued_forms.call(null,db,console_key,forms);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"clear-console-queued-forms","clear-console-queued-forms",1162162382),(function re_console$handlers$clear_console_queued_forms(db,p__38721){
var vec__38722 = p__38721;
var _ = cljs.core.nth.call(null,vec__38722,(0),null);
var console_key = cljs.core.nth.call(null,vec__38722,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.clear_console_queued_forms.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"on-eval-complete","on-eval-complete",436163213),(function re_console$handlers$on_eval_complete(db,p__38725){
var vec__38726 = p__38725;
var _ = cljs.core.nth.call(null,vec__38726,(0),null);
var console_key = cljs.core.nth.call(null,vec__38726,(1),null);
var result_map = cljs.core.nth.call(null,vec__38726,(2),null);
return re_console.app.on_eval_complete.call(null,db,console_key,result_map);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-eval-opts","set-console-eval-opts",1878351193),(function re_console$handlers$set_console_eval_opts(db,p__38729){
var vec__38730 = p__38729;
var _ = cljs.core.nth.call(null,vec__38730,(0),null);
var console_key = cljs.core.nth.call(null,vec__38730,(1),null);
var eval_opts = cljs.core.nth.call(null,vec__38730,(2),null);
return re_console.app.set_console_eval_opts.call(null,db,console_key,eval_opts);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-mode","set-console-mode",158101301),(function re_console$handlers$set_console_mode(db,p__38733){
var vec__38734 = p__38733;
var _ = cljs.core.nth.call(null,vec__38734,(0),null);
var console_key = cljs.core.nth.call(null,vec__38734,(1),null);
var mode = cljs.core.nth.call(null,vec__38734,(2),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.set_console_mode.call(null,db,console_key,mode);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-frame-updated","set-console-frame-updated",-1984928832),(function re_console$handlers$set_console_frame_updated(db,p__38737){
var vec__38738 = p__38737;
var _ = cljs.core.nth.call(null,vec__38738,(0),null);
var console_key = cljs.core.nth.call(null,vec__38738,(1),null);
var value = cljs.core.nth.call(null,vec__38738,(2),null);
return re_console.app.set_console_frame_updated.call(null,db,console_key,value);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-on-before-change","set-console-on-before-change",1713310062),(function re_console$handlers$set_console_on_before_change(db,p__38741){
var vec__38742 = p__38741;
var _ = cljs.core.nth.call(null,vec__38742,(0),null);
var console_key = cljs.core.nth.call(null,vec__38742,(1),null);
var on_before_change = cljs.core.nth.call(null,vec__38742,(2),null);
return re_console.app.set_console_on_before_change.call(null,db,console_key,on_before_change);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-on-after-change","set-console-on-after-change",713584618),(function re_console$handlers$set_console_on_after_change(db,p__38745){
var vec__38746 = p__38745;
var _ = cljs.core.nth.call(null,vec__38746,(0),null);
var console_key = cljs.core.nth.call(null,vec__38746,(1),null);
var on_after_change = cljs.core.nth.call(null,vec__38746,(2),null);
return re_console.app.set_console_on_after_change.call(null,db,console_key,on_after_change);
}));

//# sourceMappingURL=handlers.js.map?rel=1506931008025
