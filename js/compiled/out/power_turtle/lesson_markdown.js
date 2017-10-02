// Compiled by ClojureScript 1.9.908 {}
goog.provide('power_turtle.lesson_markdown');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('power_turtle.translations');
power_turtle.lesson_markdown.slide_separator = /\n---\n/;
power_turtle.lesson_markdown.notes_separator = /\n\?\?\?\n/;
power_turtle.lesson_markdown.incremental = "--";
power_turtle.lesson_markdown.property = /^([a-zA-Z-]+):\s*(.+)$/;
power_turtle.lesson_markdown.property_QMARK_ = (function power_turtle$lesson_markdown$property_QMARK_(line){
return cljs.core.re_matches.call(null,power_turtle.lesson_markdown.property,line);
});
power_turtle.lesson_markdown.parse_properties = (function power_turtle$lesson_markdown$parse_properties(property_lines){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28947__auto__ = (function power_turtle$lesson_markdown$parse_properties_$_iter__31542(s__31543){
return (new cljs.core.LazySeq(null,(function (){
var s__31543__$1 = s__31543;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31543__$1);
if(temp__4657__auto__){
var s__31543__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31543__$2)){
var c__28945__auto__ = cljs.core.chunk_first.call(null,s__31543__$2);
var size__28946__auto__ = cljs.core.count.call(null,c__28945__auto__);
var b__31545 = cljs.core.chunk_buffer.call(null,size__28946__auto__);
if((function (){var i__31544 = (0);
while(true){
if((i__31544 < size__28946__auto__)){
var line = cljs.core._nth.call(null,c__28945__auto__,i__31544);
var vec__31546 = cljs.core.re_find.call(null,power_turtle.lesson_markdown.property,line);
var _ = cljs.core.nth.call(null,vec__31546,(0),null);
var k = cljs.core.nth.call(null,vec__31546,(1),null);
var v = cljs.core.nth.call(null,vec__31546,(2),null);
cljs.core.chunk_append.call(null,b__31545,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null));

var G__31552 = (i__31544 + (1));
i__31544 = G__31552;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31545),power_turtle$lesson_markdown$parse_properties_$_iter__31542.call(null,cljs.core.chunk_rest.call(null,s__31543__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31545),null);
}
} else {
var line = cljs.core.first.call(null,s__31543__$2);
var vec__31549 = cljs.core.re_find.call(null,power_turtle.lesson_markdown.property,line);
var _ = cljs.core.nth.call(null,vec__31549,(0),null);
var k = cljs.core.nth.call(null,vec__31549,(1),null);
var v = cljs.core.nth.call(null,vec__31549,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null),power_turtle$lesson_markdown$parse_properties_$_iter__31542.call(null,cljs.core.rest.call(null,s__31543__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28947__auto__.call(null,property_lines);
})());
});
power_turtle.lesson_markdown.parse_slide = (function power_turtle$lesson_markdown$parse_slide(markdown){
var vec__31553 = clojure.string.split.call(null,markdown,power_turtle.lesson_markdown.notes_separator);
var seq__31554 = cljs.core.seq.call(null,vec__31553);
var first__31555 = cljs.core.first.call(null,seq__31554);
var seq__31554__$1 = cljs.core.next.call(null,seq__31554);
var content = first__31555;
var notes = seq__31554__$1;
var lines = clojure.string.split_lines.call(null,content);
var vec__31556 = cljs.core.split_with.call(null,power_turtle.lesson_markdown.property_QMARK_,lines);
var property_lines = cljs.core.nth.call(null,vec__31556,(0),null);
var content_lines = cljs.core.nth.call(null,vec__31556,(1),null);
var properties = power_turtle.lesson_markdown.parse_properties.call(null,property_lines);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"properties","properties",685819552),properties,new cljs.core.Keyword(null,"notes","notes",-1039600523),clojure.string.join.call(null,power_turtle.lesson_markdown.notes_separator,notes),new cljs.core.Keyword(null,"content","content",15833224),clojure.string.join.call(null,"\n",cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([power_turtle.lesson_markdown.incremental]),content_lines))], null);
});
power_turtle.lesson_markdown.parse_slides = (function power_turtle$lesson_markdown$parse_slides(markdown){
return cljs.core.mapv.call(null,power_turtle.lesson_markdown.parse_slide,clojure.string.split.call(null,markdown,power_turtle.lesson_markdown.slide_separator));
});
power_turtle.lesson_markdown.parse_lessons = (function power_turtle$lesson_markdown$parse_lessons(tree){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28947__auto__ = (function power_turtle$lesson_markdown$parse_lessons_$_iter__31559(s__31560){
return (new cljs.core.LazySeq(null,(function (){
var s__31560__$1 = s__31560;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31560__$1);
if(temp__4657__auto__){
var s__31560__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31560__$2)){
var c__28945__auto__ = cljs.core.chunk_first.call(null,s__31560__$2);
var size__28946__auto__ = cljs.core.count.call(null,c__28945__auto__);
var b__31562 = cljs.core.chunk_buffer.call(null,size__28946__auto__);
if((function (){var i__31561 = (0);
while(true){
if((i__31561 < size__28946__auto__)){
var vec__31563 = cljs.core._nth.call(null,c__28945__auto__,i__31561);
var k = cljs.core.nth.call(null,vec__31563,(0),null);
var v = cljs.core.nth.call(null,vec__31563,(1),null);
cljs.core.chunk_append.call(null,b__31562,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.map_QMARK_.call(null,v))?power_turtle.lesson_markdown.parse_lessons.call(null,v):power_turtle.lesson_markdown.parse_slides.call(null,v))], null));

var G__31569 = (i__31561 + (1));
i__31561 = G__31569;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31562),power_turtle$lesson_markdown$parse_lessons_$_iter__31559.call(null,cljs.core.chunk_rest.call(null,s__31560__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31562),null);
}
} else {
var vec__31566 = cljs.core.first.call(null,s__31560__$2);
var k = cljs.core.nth.call(null,vec__31566,(0),null);
var v = cljs.core.nth.call(null,vec__31566,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.map_QMARK_.call(null,v))?power_turtle.lesson_markdown.parse_lessons.call(null,v):power_turtle.lesson_markdown.parse_slides.call(null,v))], null),power_turtle$lesson_markdown$parse_lessons_$_iter__31559.call(null,cljs.core.rest.call(null,s__31560__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28947__auto__.call(null,tree);
})());
});
power_turtle.lesson_markdown.lessons = power_turtle.lesson_markdown.parse_lessons.call(null,new cljs.core.PersistentArrayMap(null, 2, ["en",new cljs.core.PersistentArrayMap(null, 3, ["1-beginner",new cljs.core.PersistentArrayMap(null, 4, ["1-welcome.md","canvas: turtle\n\nHi!\n\nIn this lesson you will be sending commands to a robot turtle,\ntelling it to move around the grey area on the left.\nThere is a text area on the right of the page where you can enter the commands.\n\nWhen you are ready, press the `>` button to the right.\n\n---\n\nTo send your first command to the turtle robot,\ntype this command into the text area on the right and press the `enter` key:\n\n    (forward 50)\n\nThe turtle will move forward, leaving a line behind it.\n\n---\n\nYou can command the turtle to turn `left` and `right`.\n\nTry sending these commands one at a time:\n\n    (right)\n    (forward)\n    (left)\n    (forward)\n\nThe number you send indicates how far to move in pixels,\nor how far to turn in degrees.\n\n---\n\nIf you press the `up` arrow from the text area,\nit will bring the last command back so that you can execute it again.\nIf you make a mistake typing a command you can just press `up` and fix it,\ninstead of retyping the whole thing.\n\nYou can press `up` and `down` to move backward and forward between the history of things you wrote in the text area.\n\n---\n\nYou can name a combination of commands using `defn`:\n\n    (defn zig []\n      (forward 50)\n      (right 120)\n      (forward 50)))\n\nAnd then you can call your new command by name just like any other command:\n\n    (zig)\n\n---\n\nCommands can take an input and call other commands using that input:\n\n    (defn zag [x]\n      (forward x)\n      (left x)\n      (forward x))\n\n`x` represents the input to the command.\nWe could have called it something else if we wanted to.\nTry passing a number to the `zag` command:\n\n    (zag 100)\n\n---\n\nTry using your new commands together:\n\n    (defn zig-zag []\n      (zig)\n      (zag 100)\n      (zig)\n      (zag 50))\n\n---\n\nSome special commands take other commands as input.\n\n    (repeatedly 3 zig)\n\nWill call `zig` 3 times. Notice that `zig` is not inside `()`.\n\nThe `(zig)` mean execute the command now,\n`zig` without `()` is just the name of the command.\n\n---\n\nAt the bottom of a screen is a list of other useful commands.\nYou can click on them to get more information about what they do.\n","2-patterns.md","canvas: turtle\n\nNow that you know how to move the robot turtle with commands\nit is time to start drawing some patterns.\nPatterns are simple shapes that get repeated in many places.\nFirst we'll need to create a simple shape like a triangle.\n\n    (defn triangle []\n      (forward 50)\n      (right 120)\n      (forward 50)\n      (right 120)\n      (forward 50))\n\n---\n\nNotice that if you call the new `triangle` command 3 times,\n3 triangles get drawn.\nBut from then on, drawing more triangles just go over the\nexisting triangles because the turtle always ends up in the same place.\nTo make a pattern we will need to make the turtle move or turn a little bit\nbetween drawing triangles.\n\n    (right 15)\n    (triangle)\n    (right 15)\n    (triangle)\n    \n---\n\nGreat! We can see a pattern emerging.\nDo you remember how to `repeat` commands?\nFirst we'll need to put the steps into a single command:\n\n    (defn step []\n      (right 15)\n      (triangle))\n      \nCall this command to check that it is working.\n      \n---\n\nNow call the `repeat` command to operate 24 times on `step`:\n\n    (repeat 24 step)\n    \nWe made our first pattern!\n\n---\n\nNow try creating a new version of the `step` command that\nalso moves the turtle forward each time...\nand then use repeat to create a pattern.\nSomething like this:\n\n    (defn step []\n      (right 15)\n      (forward 50)\n      (triangle))\n      \n---\n\nThere are lots of triangles on the grey area now.\nYou can erase them by using the `clean` command.\nYou can send the turtle back to the starting location using the `home` command.\nNow we have a fresh work area.\n\n---\n\nHow would we repeat the pattern we just created in many places?\nWe need to put our pattern into a command and repeat it.\n\n    (defn pattern []\n      (right 15)\n      (forward 50)\n      (repeat 24 step))\n      \nTry it out:\n\n    (repeat 24 pattern)\n    \n---\n\nTry creating a more complicated shape like an octagon,\nand then making a pattern out of it.\nTry using the `blue`, `green` and `red` commands to overlap\ncolorful patterns.\n","4-turtle.md","canvas: turtle\n","5-raster.md","canvas: raster\n\nThe raster canvas provides a way to draw pictures using a pixel based system.\nYou set pixels at (x, y) coordinates on the screen.\n\n    (plot 2 3)      ;; plots a point on the screen\n\nTry setting some pixels at other locations.\n\n---\n\nYou can set the color to draw in like this:\n\n    (color :pink)\n\nThat changes the color to pink. Now when you set a pixel, it will be pink.\n\n    (plot 5 5)\n\nYou can ask what color a pixel is like this:\n\n    (scrn 5 5)\n          \nYou get back the answer `:pink`\n\n---\n\n    (hlin 3 9 10)\n       \nDraws a horizontal line\n\n    (vlin 3 9 10)\n\nDraws a vertical line\n\n    (clear)\n\nClears screen\n\n---\n\nCan you draw a smiley face by setting pixels?\n"], null),"2-intermediate",new cljs.core.PersistentArrayMap(null, 7, ["1-recursion.md","canvas: turtle\n\nFunctions can call themselves.\nBut it's easy for a function to keep calling itself forever...\nSo whenever a function calls itself, we need to specify a stopping condition.\n\n    (defn f [x]\n      (when (< x 10)\n        (forward 20)\n        (right 20)\n        (f (+ x 1))))\n        \nCan you guess what this function will do if you call it?\nTry it out.\n\n    (f 0)\n\n---\n\nWhen we called `(f 0)`, it did `forward`, `right` 10 times.\nThis is kind of like `repeat` right?\nFunctions calling themselves is another way to do things like `repeat`.\n","2-sequences.md","canvas: turtle\n\nYou can create a sequence of numbers like this:\n\n    (range 10)\n","3-spirals.md","canvas: turtle\n\nSpirals are interesting shapes which can draw with the turtle.\n\nDrawing a spiral is a little bit like drawing a circle.\nWe can draw a circle by moving forward a tiny bit and turning a little bit over and over again:\n\n    (defn step []\n      (forward 1)\n      (right 10))\n\nIf you call it 36 times (because there are 360 degrees in a circle),\nthe turtle will draw a circle.\n\n    (repeat 36 step)\n\n---\n\nThe trick with a spiral is that you either need to turn a little bit less each step,\nor go a little bit further each step, so that the circle never meets itself.\nLet's try going a bit further each time. We can tell our step function how far to go by passing in a parameter:\n\n    (defn step [x]\n      (forward x)\n      (right 10))\n\nIf you manually call this step a few times you will see a bigger circle forming.\nPress up enter up enter up enter up enter to repeat the step.\nYou can't use repeat, because the command takes an input now.\n\n\n    (step 5)\n\n---\n\nWhat we need to do is call step with a range of inputs from 1 through\nto some higher number. Something like:\n\n    (step 1)\n    (step 1.1)\n    (step 1.2)\n    (step 1.3)\n    (step 1.4)\n\nIt would be tiresome to type all the numbers out.\nWe can see we just need a range of numbers to operate on.\n\n---\n\nWe want, a sequence of increasing numbers.\nThere are lots of commands to create sequences.\nLet's use the command `range`:\n\n    (range 5)\n\nYou should get back `(0 1 2 3 4)`.\nIt gave you a sequence of integers starting from 0 and up to but not including 5.\n\n---\n\nYou can call range with 3 arguments to request a start, finish, and step size:\n\n    (range 1 10 0.1)\n\nThis says, give me a sequence of numbers starting at 1,\nup to but not including 10,\nincreasing by 0.1 between each number.\nIt will return a sequence of numbers that are the sequence we need to make a spiral.\n\n---\n\nNow we learn a really powerful command: `map`.\nThis is one that is used very often when working with sequences.\n`map` applies a function over a sequence... which is exactly what we want.\nWe want our `step` command to be called on each number in the `range` sequence.\nWe do this like so:\n\n    (map step (range 1 10 0.1))\n\nAnd this draws a spiral.\nIt calls our `step` command on each of the numbers in the sequence we created with `range`\n\n---\n\nThere is also another way to make a spiral called recursion.\nImagine if the `step` command called itself!\nThat is exactly what recursion is.\n\n`step` can call itself with a slightly bigger number each time by adding a little bit to the input we gave it.\nBut it needs to know when to stop, or it will just keep trying to call itself infinitely many times, which is impossible.\nSo the big rule to remember with recursion is to remember to stop!\n\n    (defn step2 [x]\n      (forward x)\n      (right 10)\n      (if (< x 10)\n        (step2 (+ x 0.1))))\n\n---\n\nNow if you start `step2` off with an initial input of 1:\n\n    (step2 1)\n\nYou get exactly the same spiral that we created earlier.\n\nThese are 2 different approaches to calling a command\nover and over again with slightly different values.\nActually they are exactly the same from the computers point of view,\nso it just depends on how you prefer to think about the problem.\n\n---\n\nThe spiral we drew is quite a tight spiral.\nWhat if we wanted the spiral to get bigger faster?\nInstead of numbers spaced out with a fixed step size like:\n\n    [1, 1.1, 1.2, 1.3, ...]\n     \nwe need steps that increase in size each time, like:\n\n    [1, 1.2, 1.4, 1.8, ...]\n\nOne way to achieve that is to multiply every number in the first sequence by 2.\nDo we have a way to do that? Yes! `map` applies a function of a sequence.\n\n---\n\nFirst we create a command that multiplies another number by 2:\n\n    (defn twice [x]\n      (* x 2))\n\nTry it out to make sure when you double 2 you get 4:\n      \n    (twice 2)\n\n---\n\nNow use `twice`, `map`, and `range` together:\n\n    (map twice (range 1 10 0.1))\n\n---\n\nAnd now put it all together to draw a loose spiral:\n\n    (map step (map twice (range 1 10 0.1)))\n    \n---\n\nGreat job, you now know how to create new sequences from other sequences.\nHow would you draw a loose spiral using recursion?    \n","4-maps.md","canvas: turtle\n\n    {:key \"value\"}\n    ","5-reduce.md","","6-vectors.md","canvas: turtle\n\n    [0 1 2 3]\n    ","7-quil.md","canvas: quil\n\nQuil\n\n    (quil.core/line [10 10] [50 50])\n    \n---\n\n    (do (quil.core/ellipse 200 200 150 200)\n      (quil.core/arc 200 240 50 50 0 js/Math.PI)\n      (quil.core/triangle 170 175 173 170 176 175)\n      (quil.core/triangle 220 175 223 170 226 175))\n      \n---\n\nYou can read about more quil commands here:\n\nhttp://quil.info/api\n"], null),"3-advanced",new cljs.core.PersistentArrayMap(null, 5, ["1-html.md","canvas: html\n\nHTML is what web pages like this are made of.\nYou can modify part of this page by calling the `html` command.\n\nGive this a try:\n\n    (html [:h1 \"Hello world!\"])\n\nDo you see the message appear on the screen?\n\n---\n\nTry these commands one at a time:\n\n    (html [:button \"This is a button\"])\n    (html [:p \"This is a paragraph of text.\"])\n    (html [:ul [:li \"item 1\"]\n               [:li \"item 2\"]\n               [:li \"item 3\"]])\n    (html [:input])           \n\n\n---\n\nHTML is composed of tags, attributes and content.\n\nWhen we called\n \n    (html [:button \"This is a button\"])`\n\n`:button` is the tag,\nand `\"This is a button\"` is the content.\nIn this case the content is a string,\nbut it can also be other html.\n\n---\n\nWhen we called\n\n    (html [:ul [:li \"item 1\"]\n               [:li \"item 2\"]\n               [:li \"item 3\"]])\n\nThe outer tag is `:ul`,\nbut the content is 3 more html tags,\nwhich have their own content.\n\n---\n\nAttributes are optional.\n\n    (html [:button\n           {:on-click (fn [e] (js/alert \"hello!\"))}\n           \"Click me!\"])\n\nAttributes come right after the tag and are put inside `{}`.\n\n---\n\nTry putting a turtle command inside the `:on-click` of your button.\n\n---\n\nCheck out the `add-action` command for adding a button that runs a turtle command.\nCan you do a similar thing using `html`?","2-lazy-sequences.md","","3-callbacks.md","","4-conways-game-of-life.md","canvas: raster\n\nConway's game of life uses a raster matrix.\nWhen a cell has 2 or 3 neighbours, it gets filled with a dot.\nThe dot dies when it no longer has 2 or 3 neighbours.\n\n\n---\n\n    (defn neighbours [[x y]]\n      (for [dx [-1 0 1]\n            dy (if (zero? dx)\n                 [-1 1]\n                 [-1 0 1])]\n        [(+ dx x) (+ dy y)]))\n\n---\n    \n    (defn step [cells]\n      (set (for [[loc n] (frequencies (mapcat neighbours cells))\n                 :when (or (= n 3) (and (= n 2) (cells loc)))]\n             loc)))\n\n---\n \n    ((fn draw [board]\n         (clear)\n         (when (< (ffirst board) 38)\n           (run! (fn [[x y]] (plot x y)) board)\n           (js/setTimeout #(draw (step board)) 50)))\n        #{[0 2] [1 0] [1 2] [2 1] [2 2]})\n\n---\n\nYou can read more about Conway's game of life here:\n\nhttps://en.wikipedia.org/wiki/Conway%27s_Game_of_Life","8-macros.md","canvas: turtle\n\nCongratulations! You are brave indeed to have clicked on the macros lesson.\nSadly this lesson is not ready yet."], null)], null),"ko",new cljs.core.PersistentArrayMap(null, 1, ["1-welcome.md","\uC548\uB155!\n\n\uC774 \uB2E8\uC6D0\uC5D0\uC11C\uB294 \uB85C\uBD07 \uAC70\uBD81\uC774\uC5D0\uAC8C \uBA85\uB839\uC744 \uBCF4\uB0C5\uB2C8\uB2E4.\n\uC67C\uCABD\uC758 \uD68C\uC0C9 \uC601\uC5ED\uC744 \uB3CC\uC544 \uB2E4\uB2C8\uBA70 \uC6C0\uC9C1\uC774\uB294 \uAC83\uC744 \uB9D0\uD569\uB2C8\uB2E4.\n\uBA85\uB839\uC744 \uC785\uB825 \uD560 \uC218\uC788\uB294 \uD398\uC774\uC9C0 \uC624\uB978\uCABD\uC5D0 \uD14D\uC2A4\uD2B8 \uC601\uC5ED\uC774 \uC788\uC2B5\uB2C8\uB2E4.\n\n\uC900\uBE44\uAC00\uB418\uBA74 \uC624\uB978\uCABD\uC5D0\uC788\uB294 '>'\uBC84\uD2BC\uC744 \uB204\uB974\uC2ED\uC2DC\uC624.\n\n---\n\n\uCCAB \uBC88\uC9F8 \uBA85\uB839\uC744 \uAC70\uBD81\uC774 \uB85C\uBD07\uC5D0\uAC8C \uBCF4\uB0B4\uB824\uBA74,\n\uC774 \uBA85\uB839\uC744 \uC624\uB978\uCABD\uC758 \uD14D\uC2A4\uD2B8 \uC601\uC5ED\uC5D0 \uC785\uB825\uD558\uACE0 'enter'\uD0A4\uB97C \uB204\uB985\uB2C8\uB2E4 :\n\n    (\uC55E\uC73C\uB85C 50)\n\n\uAC70\uBD81\uC774\uAC00 \uC55E\uC73C\uB85C \uC6C0\uC9C1\uC5EC\uC11C \uADF8 \uB4A4\uC5D0 \uC904\uC774 \uC0DD\uAE41\uB2C8\uB2E4.\n\n---\n\n\uAC70\uBD81\uC774\uC5D0\uAC8C '\uC67C\uCABD'\uACFC '\uC624\uB978\uCABD'\uC744 \uB3CC\uB9AC\uB77C\uACE0 \uBA85\uB839 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\n\uD55C \uBC88\uC5D0 \uD558\uB098\uC529\uC774 \uBA85\uB839\uC744 \uBCF4\uB0B4\uBCF4\uC2ED\uC2DC\uC624.\n\n    (\uAD8C\uB9AC)\n    (\uC55E\uC73C\uB85C)\n    (\uC67C\uCABD)\n    (\uC55E\uC73C\uB85C)\n\n\uBCF4\uB0B4\uB294 \uC22B\uC790\uB294 \uD53D\uC140 \uB2E8\uC704\uB85C \uC774\uB3D9 \uAC70\uB9AC\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4.\n\uB610\uB294\uB3C4 \uB2E8\uC704\uB85C \uD68C\uC804\uD558\uB294 \uAC70\uB9AC.\n\n---\n\n\uD14D\uC2A4\uD2B8 \uC601\uC5ED\uC5D0\uC11C`\uC704\uB85C`\uD654\uC0B4\uD45C\uB97C \uB204\uB974\uBA74,\n\uADF8\uAC83\uC740 \uB2F9\uC2E0\uC774 \uADF8\uAC83\uC744 \uB2E4\uC2DC \uC2E4\uD589\uD560 \uC218 \uC788\uB3C4\uB85D \uB9C8\uC9C0\uB9C9 \uBA85\uB839\uC744 \uB2E4\uC2DC \uAC00\uC838\uC62C \uAC83\uC785\uB2C8\uB2E4.\n\uBA85\uB839\uC744 \uC798\uBABB \uC785\uB825\uD558\uBA74`up`\uC744 \uB20C\uB7EC\uC11C \uACE0\uCE60 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\uBAA8\uB4E0 \uAC83\uC744 \uB2E4\uC2DC \uD0C0\uC774\uD551\uD558\uB294 \uB300\uC2E0\uC5D0.\n\n\uD14D\uC2A4\uD2B8 \uC601\uC5ED\uC5D0 \uC4F4 \uAC83\uC758 \uC5ED\uC0AC \uC0AC\uC774\uB97C '\uC704\uB85C'\uC640 '\uC544\uB798\uB85C'\uB20C\uB7EC \uC55E\uB4A4\uB85C \uC774\uB3D9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\n---\n\n`defn`\uC744 \uC0AC\uC6A9\uD558\uC5EC \uBA85\uB839\uC758 \uC870\uD569\uC744 \uBA85\uBA85 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4 :\n\n    (defig zig []\n      (\uC55E\uC73C\uB85C 50)\n      (\uC624\uB978\uCABD 120)\n      (\uC55E\uC73C\uB85C 50)))\n\n\uADF8\uB7F0 \uB2E4\uC74C \uB2E4\uB978 \uBA85\uB839\uACFC \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uC0C8 \uBA85\uB839\uC744 \uC774\uB984\uC73C\uB85C \uD638\uCD9C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\n    (\uAE09\uACA9\uD55C \uBCC0\uACBD)\n\n---\n\n\uBA85\uB839\uC740 \uC785\uB825\uC744 \uBC1B\uC544 \uD574\uB2F9 \uC785\uB825\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB2E4\uB978 \uBA85\uB839\uC744 \uD638\uCD9C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\n    (defag zag [x]\n      (\uC55E\uC73C\uB85C x)\n      (\uC67C\uCABD x)\n      (\uC55E\uC73C\uB85C x))\n\n`x`\uB294 \uBA85\uB839\uC5D0 \uB300\uD55C \uC785\uB825\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.\n\uC6B0\uB9AC\uAC00 \uC6D0\uD55C\uB2E4\uBA74 \uC6B0\uB9AC\uB294 \uBB54\uAC00 \uB2E4\uB978 \uAC83\uC744 \uBD80\uB97C \uC218\uC788\uC5C8\uC2B5\uB2C8\uB2E4.\n`zag` \uBA85\uB839\uC5D0 \uC22B\uC790\uB97C \uC804\uB2EC\uD558\uC2ED\uC2DC\uC624 :\n\n    (100)\n\n---\n\n\uC0C8 \uBA85\uB839\uC744 \uD568\uAED8 \uC0AC\uC6A9\uD574\uBCF4\uC2ED\uC2DC\uC624.\n\n    (\uC9C0\uADF8\uC7AC\uADF8 []\n      (\uAE09\uACA9\uD55C \uBCC0\uACBD)\n      (100)\n      (\uAE09\uACA9\uD55C \uBCC0\uACBD)\n      (zag 50))\n\n---\n\n\uC77C\uBD80 \uD2B9\uC218 \uBA85\uB839\uC740 \uB2E4\uB978 \uBA85\uB839\uC744 \uC785\uB825\uC73C\uB85C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.\n\n    (\uBC18\uBCF5 3 \uC9C0\uADF8)\n\n`\uC9C0\uADF8 (zig) '\uB97C 3 \uBC88\uC774\uB098 \uBD80\uB97C \uAC83\uC774\uB2E4. `zig`\uB294`()`\uC548\uC5D0 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\n\n`(\uC9C0\uADF8)`\uB294 \uBA85\uB839\uC744 \uC9C0\uAE08 \uC2E4\uD589\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD558\uBA70,\n`()`\uAC00\uC5C6\uB294`zig`\uB294 \uB2E8\uC9C0 \uBA85\uB839\uC758 \uC774\uB984\uC785\uB2C8\uB2E4.\n\n---\n\n\uD654\uBA74 \uB9E8 \uC544\uB798\uC5D0 \uB2E4\uB978 \uC720\uC6A9\uD55C \uBA85\uB839 \uBAA9\uB85D\uC774 \uC788\uC2B5\uB2C8\uB2E4.\n\uD074\uB9AD\uD558\uBA74 \uD574\uB2F9 \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uC815\uBCF4\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\n"], null)], null));
power_turtle.lesson_markdown.first_lesson = "#lesson/1-beginner/1-welcome.md";

//# sourceMappingURL=lesson_markdown.js.map?rel=1506931509048
