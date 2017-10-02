(ns figwheel.connect.build-dev (:require [power-turtle.main] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/power-turtle.main.on-reload (apply js/power-turtle.main.on-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'power-turtle.main/on-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

