(ns power-turtle.view.repl
  (:require
    [cljs.js]
    [power-turtle.api]
    [power-turtle.replumb-proxy :as replumb-proxy]
    [re-console.core :as console]
    [re-frame.core :refer [dispatch subscribe]]
    [cljsjs.codemirror]
    [cljsjs.codemirror.addon.edit.matchbrackets]
    [cljsjs.codemirror.addon.runmode.runmode]
    [cljsjs.codemirror.addon.runmode.colorize]
    [cljsjs.codemirror.mode.clojure]
    [re-console.parinfer :as parinfer]
    [parinfer.codemirror.mode.clojure.clojure-parinfer])
  (:require-macros
    [clojure-turtle.macros :refer [all repeat]]
    [power-turtle.translations :as g]))

(defonce console-key :cljs-console)

(def src-paths
  ["src" "js/compiled/out"])

(def replumb-opts
  (replumb-proxy/replumb-options false src-paths))

(defn toggle-verbose []
  (let [verbose? (subscribe [:get-console-verbose])]
    (fn []
      [:button
       {:on-click
        (fn [e]
          (dispatch [:toggle-verbose])
          (dispatch [:set-console-eval-opts console-key
                     (replumb-proxy/eval-opts
                       (replumb-proxy/replumb-options (not @verbose?) src-paths))]))}
       "Verbose is " [:strong (if (false? @verbose?) "false" "true")]])))

(defn toggle-parinfer []
  (let [mode (subscribe [:get-console-mode console-key])]
    (fn []
      [:button
       {:on-click #(let [new-mode (if (= @mode :none) :indent-mode :none)]
                    (dispatch [:set-console-mode console-key new-mode]))}
       "Paredit is " [:strong (name @mode)]])))

(def preambles
  ;; TODO: why do macros need to be required explicitly, but other stuff not so much???
  ;; ANSWER: needs to load the file at runtime...
  ;; WHY?? Dunno, just put the file in resources/public/src please!
  ["(require-macros '[clojure-turtle.macros :refer [all repeat]])"
   (g/require-translations)])

(defn do-preambles [[preamble & more]]
  (replumb-proxy/read-eval-call
    ;; TODO: why do we get a warning for the defs?
    (assoc replumb-opts :warning-as-error false)
    (fn [{:keys [result]}]
      (println "***" result)
      (when (seq more)
        (do-preambles more)))
    preamble))

(defn buttons []
  [:div.buttons-container
   [toggle-verbose]
   [toggle-parinfer]])

(dispatch [:init-options])

(defn repl []
  (defonce so-ugly-why-are-you-like-this?
    (do-preambles preambles))
  (fn []
    [:div#repl
     [console/console console-key
      {:eval-opts (replumb-proxy/eval-opts replumb-opts)
       :mode-line? true}]
     [buttons]]))
