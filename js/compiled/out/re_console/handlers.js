// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_console.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clairvoyant.core');
goog.require('re_frame_tracer.core');
goog.require('re_console.app');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"init-console","init-console",1925118851),(function re_console$handlers$add_console(db,p__37751){
var vec__37752 = p__37751;
var _ = cljs.core.nth.call(null,vec__37752,(0),null);
var console_key = cljs.core.nth.call(null,vec__37752,(1),null);
var eval_opts = cljs.core.nth.call(null,vec__37752,(2),null);
return re_console.app.init_console.call(null,db,console_key,eval_opts);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-instance","add-console-instance",9095274),(function re_console$handlers$add_console(db,p__37755){
var vec__37756 = p__37755;
var _ = cljs.core.nth.call(null,vec__37756,(0),null);
var console_key = cljs.core.nth.call(null,vec__37756,(1),null);
var instance = cljs.core.nth.call(null,vec__37756,(2),null);
return re_console.app.add_console_instance.call(null,db,console_key,instance);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),(function re_console$handlers$focus_console_editor(db,p__37759){
var vec__37760 = p__37759;
var _ = cljs.core.nth.call(null,vec__37760,(0),null);
var console_key = cljs.core.nth.call(null,vec__37760,(1),null);
var temp__4657__auto___37763 = re_console.app.console.call(null,db,console_key);
if(cljs.core.truth_(temp__4657__auto___37763)){
var instance_37764 = temp__4657__auto___37763;
instance_37764.focus();
} else {
}

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-theme","set-console-theme",-659914150),(function re_console$handlers$set_console_theme(db,p__37765){
var vec__37766 = p__37765;
var _ = cljs.core.nth.call(null,vec__37766,(0),null);
var console_key = cljs.core.nth.call(null,vec__37766,(1),null);
var theme = cljs.core.nth.call(null,vec__37766,(2),null);
var temp__4657__auto___37769 = re_console.app.console.call(null,db,console_key);
if(cljs.core.truth_(temp__4657__auto___37769)){
var instance_37770 = temp__4657__auto___37769;
instance_37770.setOption("theme",theme);
} else {
}

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"clear-console-items","clear-console-items",-1821518386),(function re_console$handlers$clear_console_items(db,p__37771){
var vec__37772 = p__37771;
var _ = cljs.core.nth.call(null,vec__37772,(0),null);
var console_key = cljs.core.nth.call(null,vec__37772,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.clear_console_items.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"reset-console-items","reset-console-items",-1878088383),(function re_console$handlers$reset_console_items(db,p__37775){
var vec__37776 = p__37775;
var _ = cljs.core.nth.call(null,vec__37776,(0),null);
var console_key = cljs.core.nth.call(null,vec__37776,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.reset_console_items.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-item","add-console-item",-1440738899),(function re_console$handlers$add_console_item(db,p__37779){
var vec__37780 = p__37779;
var _ = cljs.core.nth.call(null,vec__37780,(0),null);
var console_key = cljs.core.nth.call(null,vec__37780,(1),null);
var item = cljs.core.nth.call(null,vec__37780,(2),null);
return re_console.app.add_console_item.call(null,db,console_key,item);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-items","add-console-items",-1014410013),(function re_console$handlers$add_console_items(db,p__37783){
var vec__37784 = p__37783;
var _ = cljs.core.nth.call(null,vec__37784,(0),null);
var console_key = cljs.core.nth.call(null,vec__37784,(1),null);
var items = cljs.core.nth.call(null,vec__37784,(2),null);
return re_console.app.add_console_item.call(null,db,console_key,items);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-input","add-console-input",-277003986),(function re_console$handlers$add_console_input(db,p__37787){
var vec__37788 = p__37787;
var _ = cljs.core.nth.call(null,vec__37788,(0),null);
var console_key = cljs.core.nth.call(null,vec__37788,(1),null);
var input = cljs.core.nth.call(null,vec__37788,(2),null);
var ns = cljs.core.nth.call(null,vec__37788,(3),null);
return re_console.app.add_console_input.call(null,db,console_key,input,ns);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-result","add-console-result",1768771531),(function re_console$handlers$add_console_result(db,p__37791){
var vec__37792 = p__37791;
var _ = cljs.core.nth.call(null,vec__37792,(0),null);
var console_key = cljs.core.nth.call(null,vec__37792,(1),null);
var error_QMARK_ = cljs.core.nth.call(null,vec__37792,(2),null);
var value = cljs.core.nth.call(null,vec__37792,(3),null);
return re_console.app.add_console_result.call(null,db,console_key,error_QMARK_,value);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-log","add-console-log",-371208070),(function re_console$handlers$add_console_log(db,p__37795){
var vec__37796 = p__37795;
var _ = cljs.core.nth.call(null,vec__37796,(0),null);
var console_key = cljs.core.nth.call(null,vec__37796,(1),null);
var item = cljs.core.nth.call(null,vec__37796,(2),null);
return re_console.app.add_console_log.call(null,db,console_key,item);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"console-set-text","console-set-text",860354388),(function re_console$handlers$console_set_text(db,p__37799){
var vec__37800 = p__37799;
var _ = cljs.core.nth.call(null,vec__37800,(0),null);
var console_key = cljs.core.nth.call(null,vec__37800,(1),null);
var text = cljs.core.nth.call(null,vec__37800,(2),null);
return re_console.app.set_console_text.call(null,db,console_key,text);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"console-go-up","console-go-up",50535611),(function re_console$handlers$console_go_up(db,p__37803){
var vec__37804 = p__37803;
var _ = cljs.core.nth.call(null,vec__37804,(0),null);
var console_key = cljs.core.nth.call(null,vec__37804,(1),null);
return re_console.app.console_go_up.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"console-go-down","console-go-down",-1045916631),(function re_console$handlers$console_go_down(db,p__37807){
var vec__37808 = p__37807;
var _ = cljs.core.nth.call(null,vec__37808,(0),null);
var console_key = cljs.core.nth.call(null,vec__37808,(1),null);
return re_console.app.console_go_down.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-queued-forms","set-console-queued-forms",-419528812),(function re_console$handlers$set_queued_forms(db,p__37811){
var vec__37812 = p__37811;
var _ = cljs.core.nth.call(null,vec__37812,(0),null);
var console_key = cljs.core.nth.call(null,vec__37812,(1),null);
var forms = cljs.core.nth.call(null,vec__37812,(2),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.set_console_queued_forms.call(null,db,console_key,forms);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"clear-console-queued-forms","clear-console-queued-forms",1162162382),(function re_console$handlers$clear_console_queued_forms(db,p__37815){
var vec__37816 = p__37815;
var _ = cljs.core.nth.call(null,vec__37816,(0),null);
var console_key = cljs.core.nth.call(null,vec__37816,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.clear_console_queued_forms.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"on-eval-complete","on-eval-complete",436163213),(function re_console$handlers$on_eval_complete(db,p__37819){
var vec__37820 = p__37819;
var _ = cljs.core.nth.call(null,vec__37820,(0),null);
var console_key = cljs.core.nth.call(null,vec__37820,(1),null);
var result_map = cljs.core.nth.call(null,vec__37820,(2),null);
return re_console.app.on_eval_complete.call(null,db,console_key,result_map);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-eval-opts","set-console-eval-opts",1878351193),(function re_console$handlers$set_console_eval_opts(db,p__37823){
var vec__37824 = p__37823;
var _ = cljs.core.nth.call(null,vec__37824,(0),null);
var console_key = cljs.core.nth.call(null,vec__37824,(1),null);
var eval_opts = cljs.core.nth.call(null,vec__37824,(2),null);
return re_console.app.set_console_eval_opts.call(null,db,console_key,eval_opts);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-mode","set-console-mode",158101301),(function re_console$handlers$set_console_mode(db,p__37827){
var vec__37828 = p__37827;
var _ = cljs.core.nth.call(null,vec__37828,(0),null);
var console_key = cljs.core.nth.call(null,vec__37828,(1),null);
var mode = cljs.core.nth.call(null,vec__37828,(2),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.set_console_mode.call(null,db,console_key,mode);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-frame-updated","set-console-frame-updated",-1984928832),(function re_console$handlers$set_console_frame_updated(db,p__37831){
var vec__37832 = p__37831;
var _ = cljs.core.nth.call(null,vec__37832,(0),null);
var console_key = cljs.core.nth.call(null,vec__37832,(1),null);
var value = cljs.core.nth.call(null,vec__37832,(2),null);
return re_console.app.set_console_frame_updated.call(null,db,console_key,value);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-on-before-change","set-console-on-before-change",1713310062),(function re_console$handlers$set_console_on_before_change(db,p__37835){
var vec__37836 = p__37835;
var _ = cljs.core.nth.call(null,vec__37836,(0),null);
var console_key = cljs.core.nth.call(null,vec__37836,(1),null);
var on_before_change = cljs.core.nth.call(null,vec__37836,(2),null);
return re_console.app.set_console_on_before_change.call(null,db,console_key,on_before_change);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-on-after-change","set-console-on-after-change",713584618),(function re_console$handlers$set_console_on_after_change(db,p__37839){
var vec__37840 = p__37839;
var _ = cljs.core.nth.call(null,vec__37840,(0),null);
var console_key = cljs.core.nth.call(null,vec__37840,(1),null);
var on_after_change = cljs.core.nth.call(null,vec__37840,(2),null);
return re_console.app.set_console_on_after_change.call(null,db,console_key,on_after_change);
}));

//# sourceMappingURL=handlers.js.map?rel=1506931522782
