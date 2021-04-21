(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.WarpedAsset_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A069D6").s().p("ACAXeQgnghgVhQQgVhQgFg+QgOiggjhWQgjhWgxg/QgwhDgZgpQgagogQgvQgQgvgWhXQgdh+ALhfQALhgAMgiQAchnAZg8QAZg6AYg9QAYg9AahsQAbiHgJh9QgLjfgoiUQgch7gPgvQgPgvgCg+QgGhMAMhYQAMhZBCguQBPgpBYAhQBaAhAYBEQAKAwgqAuQgqAvgrBhQgwCFAOB8QAOB8AZBVQAdBqAeA8QAeA8ATAyQAUAxgGBJQgDAqgTA3QgTA2glBaQg0B+gcAwQgcAxgTA8QgmCOASBzQARBzATA1QAhBoApA3QAoA3ApA7QApA6AhByQAqCkgQBXQgQBXgSARQgqA4gfAAQgOAAgMgKg");
	this.shape.setTransform(0.0045,0.0025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-151.1,53.1,302.29999999999995);


(lib.Tween106 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AikESQgNgLAAgVQAAgLAEgQQADgQAAgYQAAhHgFgwQgFgxgHgjIgLhEQgFggAAgmQAAgXAPgVQANgVAVgRQAUgQAYgJQAXgJAUgBQAZAAAKALQAMAKAAAUIgCAeIgDArIgDAvIgBArQAAAXADAIQAEAIAHgBQAFAAAKgIQAJgJAQgKQAPgLAVgJQAUgIAaAAQAVAAATAKQATAKAMARQAMARAAAXQAAAWgDAQIgFAiQgDATAAAbQAAAeAHAQQAFAPAGAKQAGAKABANQgBAOgTARQgSARgbAMQgbANgbABQgdAAgQgOQgPgOAAgbQAAglAEgaQAEgaABgaQgBgTgGgKQgHgKgJgBQgLAAgKAOQgKANAAAfQAAAZACARIAEAfQACAOABASQgBASgOAPQgPAOgbAIQgaAJghAAQgYAAgNgKg");
	this.shape.setTransform(-0.05,-5.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-59.1,47,118.30000000000001);


(lib.Tween105 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AikDIQgNgHAAgQQAAgIAEgMQADgLAAgSQAAg0gFgjQgFgkgHgZIgLgyQgFgYAAgbQAAgRAPgQQANgPAVgMQAUgMAYgHQAXgGAUgBQAZAAAKAIQAMAIAAAOIgCAWIgDAgIgDAiIgBAfQAAARADAGQAEAGAHgBQAFAAAKgGQAJgGAQgIQAPgIAVgGQAUgGAaAAQAVAAATAHQATAHAMANQAMANAAAQQAAAQgDAMIgFAZQgDANAAAUQAAAWAHAMQAFALAGAIQAGAHABAJQgBALgTAMQgSAMgbAKQgbAJgbAAQgdAAgQgKQgPgKAAgUQAAgbAEgTQAEgTABgTQgBgOgGgHQgHgIgJAAQgLAAgKAKQgKAKAAAWQAAATACAMIAEAXQACAKABANQgBAOgOAKQgPALgbAGQgaAGghAAQgYAAgNgIg");
	this.shape.setTransform(-0.05,-3.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-43.3,47,86.69999999999999);


(lib.Tween104 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AikESQgNgLAAgVQAAgLAEgQQADgQAAgYQAAhHgFgwQgFgxgHgjIgLhEQgFggAAgmQAAgXAPgVQANgVAVgRQAUgQAYgJQAXgJAUgBQAZAAAKALQAMAKAAAUIgCAeIgDArIgDAvIgBArQAAAXADAIQAEAIAHgBQAFAAAKgIQAJgJAQgKQAPgLAVgJQAUgIAaAAQAVAAATAKQATAKAMARQAMARAAAXQAAAWgDAQIgFAiQgDATAAAbQAAAeAHAQQAFAPAGAKQAGAKABANQgBAOgTARQgSARgbAMQgbANgbABQgdAAgQgOQgPgOAAgbQAAglAEgaQAEgaABgaQgBgTgGgKQgHgKgJgBQgLAAgKAOQgKANAAAfQAAAZACARIAEAfQACAOABASQgBASgOAPQgPAOgbAIQgaAJghAAQgYAAgNgKg");
	this.shape.setTransform(-0.05,-5.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-59.1,47,118.30000000000001);


(lib.Tween103 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhHCxQgpgPgYgTQgZgTAAgPQAAgRANgTQAMgRARgNQARgNAOgBQAHABAJAIIASASQAKAKANAIQAMAIAQAAQAGAAAFgFQAGgGAAgHQgBgLgNgKQgOgIgVgKQgUgJgVgOQgVgNgOgVQgOgWAAggQAAgwAmgcQAngdBDAAQAuAAAeANQAeANAPAPQAPARAAALQAAAOgLARQgKASgOAMQgOANgMABQgGAAgIgIIgQgRQgIgJgJgIQgKgGgLgBQgIAAgFAFQgEAFAAAGQAAAOAQALQAPAKAXAKQAWAMAXAOQAXANAPAVQAQAUAAAeQAAAfgRAaQgRAbggAQQggARgsAAQgxAAgqgPg");
	this.shape.setTransform(-1.325,3.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-59.1,37.5,118.30000000000001);


(lib.Tween102 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhHCHQgpgLgYgPQgZgPAAgLQAAgNANgOQAMgOARgJQARgKAOAAQAHAAAJAGIASAOQAKAHANAHQAMAFAQABQAGAAAFgFQAGgEAAgFQgBgJgNgHQgOgHgVgHQgUgHgVgKQgVgKgOgQQgOgQAAgZQAAglAmgVQAngWBDgBQAuABAeAKQAeAJAPAMQAPANAAAJQAAAKgLANQgKANgOAKQgOAKgMAAQgGAAgIgGIgQgMQgIgHgJgGQgKgFgLgBQgIAAgFAEQgEAEAAAFQAAAKAQAIQAPAIAXAIQAWAJAXAKQAXAKAPAQQAQAQAAAWQAAAXgRAUQgRAVggAMQggANgsABQgxgBgqgLg");
	this.shape.setTransform(-1.325,2.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-45,37.5,90.1);


(lib.Tween101 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhHCxQgpgPgYgTQgZgTAAgPQAAgRANgTQAMgRARgNQARgNAOgBQAHABAJAIIASASQAKAKANAIQAMAIAQAAQAGAAAFgFQAGgGAAgHQgBgLgNgKQgOgIgVgKQgUgJgVgOQgVgNgOgVQgOgWAAggQAAgwAmgcQAngdBDAAQAuAAAeANQAeANAPAPQAPARAAALQAAAOgLARQgKASgOAMQgOANgMABQgGAAgIgIIgQgRQgIgJgJgIQgKgGgLgBQgIAAgFAFQgEAFAAAGQAAAOAQALQAPAKAXAKQAWAMAXAOQAXANAPAVQAQAUAAAeQAAAfgRAaQgRAbggAQQggARgsAAQgxAAgqgPg");
	this.shape.setTransform(-1.325,3.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-59.1,37.5,118.30000000000001);


(lib.Tween100 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AgbESQgbgIgQgMQgQgNAAgOQAAgOAEgWIAIgyQAEgaAAgbQAAgagFgTIgIghQgFgPAAgPQAAgSAVgRQAVgPAfgKQAdgKAgAAQAVAAANALQANAJAAAVQAAANgFAXQgFAUgEAfQgEAdgBAlQABAaADAZIAHAtQADAVABARQAAASgOAMQgOANgeABQgfgBgbgHgAgyh/QgTgKgLgTQgMgRAAgZQAAgXAMgTQALgSATgMQATgKAYgBQAXABATAKQAUAMALASQAMATAAAXQAAAZgMARQgLATgUAKQgTALgXAAQgYAAgTgLg");
	this.shape.setTransform(-0.075,-5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-59.1,24.299999999999997,118.30000000000001);


(lib.Tween99 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AgbDYQgbgGgQgJQgQgKAAgMQAAgLAEgRIAIgnQAEgVAAgVQAAgWgFgOIgIgbQgFgLAAgMQAAgPAVgNQAVgMAfgIQAdgGAggBQAVAAANAIQANAIAAAQQAAAKgFASQgFARgEAYQgEAXgBAdQABAVADATIAHAkQADARABAOQAAANgOALQgOAJgeABQgfAAgbgHgAgyhlQgTgIgLgOQgMgPAAgSQAAgUAMgOQALgPATgJQATgIAYAAQAXAAATAIQAUAJALAPQAMAOAAAUQAAASgMAPQgLAOgUAIQgTAJgXAAQgYAAgTgJg");
	this.shape.setTransform(-0.075,-4.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-46.8,24.299999999999997,93.69999999999999);


(lib.Tween98 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AgbESQgbgIgQgMQgQgNAAgOQAAgOAEgWIAIgyQAEgaAAgbQAAgagFgTIgIghQgFgPAAgPQAAgSAVgRQAVgPAfgKQAdgKAgAAQAVAAANALQANAJAAAVQAAANgFAXQgFAUgEAfQgEAdgBAlQABAaADAZIAHAtQADAVABARQAAASgOAMQgOANgeABQgfgBgbgHgAgyh/QgTgKgLgTQgMgRAAgZQAAgXAMgTQALgSATgMQATgKAYgBQAXABATAKQAUAMALASQAMATAAAXQAAAZgMARQgLATgUAKQgTALgXAAQgYAAgTgLg");
	this.shape.setTransform(-0.075,-5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-59.1,24.299999999999997,118.30000000000001);


(lib.Tween97 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AgsERQgcgHgRgNQgRgNgBgPIACgYIACgiIABg2QAAgKgEgFQgEgEgMAAQgSAAgLgYQgKgYAAgnQAAgMAIgGQAHgGAKgEQAIgCADgDQAEgEAAgIQAAgNgEgNIgFghQgDgSgBgbQABgoATgfQASgfAigSQAigRAugBQAqABAhAQQAgAPASAaQATAaAAAfQgBAXgQAPQgQAQgXAIQgVAJgSAAQgHgBgDgJQgDgKgBgNQgBgMgDgKQgDgKgKAAQgNABgGAOQgFAPAAAUIABAeQAAAPADAJQADAJAFAAQAYAAALgEQAMgDAJAAQANAAALANQAKANAIAVQAGAUAAAZQAAAUgGAKQgIALgMAAIgXABQgNABgKAFQgLAFAAAMQABARADAgQAEAhAAA3QAAAUgJAKQgJAKgXAAQgcAAgcgIg");
	this.shape.setTransform(1.25,-4.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.7,-59.1,35.5,118.30000000000001);


(lib.Tween96 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AgsDRQgcgGgRgKQgRgKgBgLIACgSIACgaIABgqQAAgHgEgEQgEgDgMAAQgSgBgLgRQgKgTAAgeQAAgIAIgEQAHgFAKgDQAIgCADgDQAEgCAAgHQAAgJgEgLIgFgYQgDgPgBgTQABggATgXQASgYAigNQAigOAuAAQAqAAAhAMQAgAMASAVQATATAAAYQgBARgQAMQgQAMgXAHQgVAFgSABQgHAAgDgIQgDgHgBgKQgBgJgDgIQgDgHgKgBQgNABgGALQgFALAAAPIABAYQAAALADAHQADAHAFAAQAYAAALgDQAMgDAJAAQANAAALAKQAKAKAIAQQAGAPAAATQAAAQgGAIQgIAHgMAAIgXABQgNABgKAEQgLAEAAAJQABAMADAZQAEAZAAAqQAAAPgJAIQgJAHgXAAQgcAAgcgFg");
	this.shape.setTransform(1.25,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.7,-45.1,35.5,90.2);


(lib.Tween95 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AgsERQgcgHgRgNQgRgNgBgPIACgYIACgiIABg2QAAgKgEgFQgEgEgMAAQgSAAgLgYQgKgYAAgnQAAgMAIgGQAHgGAKgEQAIgCADgDQAEgEAAgIQAAgNgEgNIgFghQgDgSgBgbQABgoATgfQASgfAigSQAigRAugBQAqABAhAQQAgAPASAaQATAaAAAfQgBAXgQAPQgQAQgXAIQgVAJgSAAQgHgBgDgJQgDgKgBgNQgBgMgDgKQgDgKgKAAQgNABgGAOQgFAPAAAUIABAeQAAAPADAJQADAJAFAAQAYAAALgEQAMgDAJAAQANAAALANQAKANAIAVQAGAUAAAZQAAAUgGAKQgIALgMAAIgXABQgNABgKAFQgLAFAAAMQABARADAgQAEAhAAA3QAAAUgJAKQgJAKgXAAQgcAAgcgIg");
	this.shape.setTransform(1.25,-4.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.7,-59.1,35.5,118.30000000000001);


(lib.Tween94 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AiAELQgUgLgPgSQgQgTgLgUQgJgTAAgSQgBgMAHgGQAFgHALAAQAMABARAEQAQAFATACQARgBAPgHQAQgHAJgLQAKgKAAgMQgBgDgNgRIghgpQgTgagVggQgTgigNgnQgOgngBgrQABgUAPgRQAOgSAVgNQAVgNAXgHQAWgGARgCQAQABAJAHQAJAIAAAOIgBAZIgEAgIgBAuQAAAxAIAWQAJAYAJAAQAMAAALgfQAJgfABhBQAAgggCgQQgCgPgCgIIgBgPQAAgLAHgGQAHgHAMAAQAWAAAYAGQAZAHAVALQAVALAOAQQANAQAAATQAAA1gQBAQgQA/gcA+QgdA+gmAzQgkA0gpAgQgrAfgrABQgTAAgTgMg");
	this.shape.setTransform(-1.2,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.1,-59.1,44.3,118.30000000000001);


(lib.Tween93 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AiADUQgUgKgPgOQgQgOgLgQQgJgQAAgNQgBgKAHgFQAFgGALAAQAMABARAEQAQAEATABQARgBAPgFQAQgGAJgIQAKgJAAgJQgBgDgNgMIghghQgTgVgVgZQgTgbgNgfQgOgfgBghQABgQAPgOQAOgOAVgKQAVgKAXgGQAWgGARAAQAQAAAJAGQAJAGAAALIgBAUIgEAZIgBAlQAAAmAIASQAJASAJAAQAMABALgZQAJgYABg0QAAgZgCgMQgCgNgCgGIgBgMQAAgIAHgFQAHgGAMAAQAWAAAYAFQAZAFAVAJQAVAJAOANQANAMAAAPQAAArgQAyQgQAygcAwQgdAygmAoQgkAqgpAYQgrAZgrABQgTAAgTgJg");
	this.shape.setTransform(-1.2,10.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.1,-46.8,44.3,93.69999999999999);


(lib.Tween92 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AiAELQgUgLgPgSQgQgTgLgUQgJgTAAgSQgBgMAHgGQAFgHALAAQAMABARAEQAQAFATACQARgBAPgHQAQgHAJgLQAKgKAAgMQgBgDgNgRIghgpQgTgagVggQgTgigNgnQgOgngBgrQABgUAPgRQAOgSAVgNQAVgNAXgHQAWgGARgCQAQABAJAHQAJAIAAAOIgBAZIgEAgIgBAuQAAAxAIAWQAJAYAJAAQAMAAALgfQAJgfABhBQAAgggCgQQgCgPgCgIIgBgPQAAgLAHgGQAHgHAMAAQAWAAAYAGQAZAHAVALQAVALAOAQQANAQAAATQAAA1gQBAQgQA/gcA+QgdA+gmAzQgkA0gpAgQgrAfgrABQgTAAgTgMg");
	this.shape.setTransform(-1.2,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.1,-59.1,44.3,118.30000000000001);


(lib.Tween91 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhIEKQgMgLAAgVQABgZADghIAHhIQADgmABgrQgBgzgFgrIgMhKQgFgggBgSQABgOAMgPQANgOAVgMQAUgLAYgIQAXgHAWAAQAXAAAMANQAMANAAAcQgBAjgFAyQgFAygFA9QgFA9gBBGQABAXAGASIAMAgQAHAOAAAOQAAAPgQAQQgPARgeALQgdAMgpAAQgXAAgMgLg");
	this.shape.setTransform(-0.375,-4.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-59.1,25.1,118.30000000000001);


(lib.Tween90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhIDYQgMgJAAgRQABgVADgaIAHg6QADggABgiQgBgqgFgiIgMg9QgFgZgBgQQABgLAMgMQANgLAVgKQAUgJAYgGQAXgGAWAAQAXAAAMALQAMAKAAAXQgBAcgFApQgFAogFAyQgFAxgBA5QABATAGAOIAMAaQAHAMAAALQAAAMgQAOQgPANgeAJQgdAKgpAAQgXAAgMgJg");
	this.shape.setTransform(-0.375,-3.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-48,25.1,96.1);


(lib.Tween89 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhIEKQgMgLAAgVQABgZADghIAHhIQADgmABgrQgBgzgFgrIgMhKQgFgggBgSQABgOAMgPQANgOAVgMQAUgLAYgIQAXgHAWAAQAXAAAMANQAMANAAAcQgBAjgFAyQgFAygFA9QgFA9gBBGQABAXAGASIAMAgQAHAOAAAOQAAAPgQAQQgPARgeALQgdAMgpAAQgXAAgMgLg");
	this.shape.setTransform(-0.375,-4.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-59.1,25.1,118.30000000000001);


(lib.Tween88 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhIEKQgMgLAAgVQABgZADghIAHhIQADgmABgrQgBgzgFgrIgMhKQgFgggBgSQABgOAMgPQANgOAVgMQAUgLAYgIQAXgHAWAAQAXAAAMANQAMANAAAcQgBAjgFAyQgFAygFA9QgFA9gBBGQABAXAGASIAMAgQAHAOAAAOQAAAPgQAQQgPARgeALQgdAMgpAAQgXAAgMgLg");
	this.shape.setTransform(-0.375,-4.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-59.1,25.1,118.30000000000001);


(lib.Tween87 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhIDGQgMgJAAgQQABgSADgZIAHg1QADgdABgfQgBgmgFgfIgMg3QgFgYgBgOQABgKAMgLQANgKAVgJQAUgJAYgFQAXgFAWAAQAXgBAMAKQAMAKAAAVQgBAagFAkQgFAmgFAtQgFAsgBA0QABASAGANIAMAXQAHALAAALQAAALgQAMQgPAMgeAJQgdAIgpABQgXgBgMgHg");
	this.shape.setTransform(-0.375,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-43.8,25.1,87.69999999999999);


(lib.Tween86 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhIEKQgMgLAAgVQABgZADghIAHhIQADgmABgrQgBgzgFgrIgMhKQgFgggBgSQABgOAMgPQANgOAVgMQAUgLAYgIQAXgHAWAAQAXAAAMANQAMANAAAcQgBAjgFAyQgFAygFA9QgFA9gBBGQABAXAGASIAMAgQAHAOAAAOQAAAPgQAQQgPARgeALQgdAMgpAAQgXAAgMgLg");
	this.shape.setTransform(-0.375,-4.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-59.1,25.1,118.30000000000001);


(lib.Tween85 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhUCmQgsgWgZgoQgagpgBg4QABg5AZgrQAagsAsgZQAtgZA4AAQAxAAAjARQAjARATAdQATAdAAAlQgBAagUAQQgUAQgdAHQgdAJgdAFIgxALQgUAFAAAJQgBALAMAIQAKAIAbAAQAYAAATgKQASgLAOgJQANgKAKgBQAMABANAMQANALAKAQQAJAQABAOQgBAQgWAUQgWAUglAPQgmAOgwABQg1AAgsgWgAgIhWQgPAGgJAJQgKAJAAAKQAAAEADADQADAEAFAAQAPAAARgFQATgGAOgIQAOgHABgGQgBgIgGgFQgHgGgNAAQgRAAgNAGg");
	this.shape.setTransform(-0.475,3.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-59.1,42.1,118.30000000000001);


(lib.Tween84 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhUB9QgsgQgZgfQgagegBgrQABgrAZggQAaghAsgTQAtgSA4AAQAxAAAjAMQAjAOATAVQATAWAAAbQgBAVgUALQgUAMgdAFQgdAHgdAEQgeAEgTAEQgUAEAAAGQgBAIAMAHQAKAGAbAAQAYAAATgIQASgHAOgIQANgHAKgBQAMABANAIQANAJAKAMQAJAMABALQgBAMgWAPQgWAOglAMQgmALgwAAQg1AAgsgQgAgIhBQgPAFgJAHQgKAGAAAIQAAADADADQADACAFABQAPgBARgEQATgEAOgGQAOgFABgFQgBgGgGgEQgHgEgNAAQgRAAgNAEg");
	this.shape.setTransform(-0.475,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-44.4,42.1,88.9);


(lib.Tween83 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhUCmQgsgWgZgoQgagpgBg4QABg5AZgrQAagsAsgZQAtgZA4AAQAxAAAjARQAjARATAdQATAdAAAlQgBAagUAQQgUAQgdAHQgdAJgdAFIgxALQgUAFAAAJQgBALAMAIQAKAIAbAAQAYAAATgKQASgLAOgJQANgKAKgBQAMABANAMQANALAKAQQAJAQABAOQgBAQgWAUQgWAUglAPQgmAOgwABQg1AAgsgWgAgIhWQgPAGgJAJQgKAJAAAKQAAAEADADQADAEAFAAQAPAAARgFQATgGAOgIQAOgHABgGQgBgIgGgFQgHgGgNAAQgRAAgNAGg");
	this.shape.setTransform(-0.475,3.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-59.1,42.1,118.30000000000001);


(lib.Tween82 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhmDqQgogXgWgoQgVgngBg1QABgSAUgRQATgQAcgLQAcgKAcgBQALAAAFAGQAGAGAAALQAAAWACATQACAUAGALQAFANAJAAQANAAAHgUQAJgTAAghQgBgugIgvQgGgugIgmQgIgngBgSQABgOARgLQAPgLAZgJQAYgJAXgEQAXgFAMAAQAYABAOAdQAOAcAHAxQAHAygBBAQABBagSBBQgTBBgqAjQgrAjhHAAQg4AAgogWg");
	this.shape.setTransform(-0.6474,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-59.1,43.5,118.30000000000001);


(lib.Tween81 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhmC0QgogRgWgfQgVgfgBgpQABgNAUgNQATgNAcgIQAcgIAcgBQALABAFAEQAGAFAAAIQAAARACAPQACAPAGAJQAFAKAJAAQANAAAHgPQAJgPAAgaQgBgjgIgkQgGgkgIgeQgIgdgBgOQABgLARgIQAPgJAZgHQAYgGAXgEQAXgEAMAAQAYABAOAWQAOAWAHAmQAHAngBAxQABBFgSAyQgTAygqAbQgrAbhHABQg4gBgogRg");
	this.shape.setTransform(-0.6474,-1.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-45.6,43.5,91.30000000000001);


(lib.Tween80 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhmDqQgogXgWgoQgVgngBg1QABgSAUgRQATgQAcgLQAcgKAcgBQALAAAFAGQAGAGAAALQAAAWACATQACAUAGALQAFANAJAAQANAAAHgUQAJgTAAghQgBgugIgvQgGgugIgmQgIgngBgSQABgOARgLQAPgLAZgJQAYgJAXgEQAXgFAMAAQAYABAOAdQAOAcAHAxQAHAygBBAQABBagSBBQgTBBgqAjQgrAjhHAAQg4AAgogWg");
	this.shape.setTransform(-0.6474,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-59.1,43.5,118.30000000000001);


(lib.Tween79 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhUCmQgsgWgZgoQgagpgBg4QABg5AZgrQAagsAsgZQAtgZA4AAQAxAAAjARQAjARATAdQATAdAAAlQgBAagUAQQgUAQgdAHQgdAJgdAFIgxALQgUAFAAAJQgBALAMAIQAKAIAbAAQAYAAATgKQASgLAOgJQANgKAKgBQAMABANAMQANALAKAQQAJAQABAOQgBAQgWAUQgWAUglAPQgmAOgwABQg1AAgsgWgAgIhWQgPAGgJAJQgKAJAAAKQAAAEADADQADAEAFAAQAPAAARgFQATgGAOgIQAOgHABgGQgBgIgGgFQgHgGgNAAQgRAAgNAGg");
	this.shape.setTransform(-0.475,3.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-59.1,42.1,118.30000000000001);


(lib.Tween78 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhUCFQgsgSgZggQgaghgBgsQABguAZgiQAagkAsgUQAtgTA4gBQAxAAAjAOQAjAOATAXQATAXAAAeQgBAVgUANQgUAMgdAGQgdAHgdAEIgxAJQgUADAAAIQgBAIAMAHQAKAHAbAAQAYgBATgIQASgIAOgIQANgIAKAAQAMAAANAKQANAJAKAMQAJANABALQgBANgWAQQgWARglALQgmAMgwABQg1AAgsgSgAgIhFQgPAFgJAIQgKAGAAAJQAAADADACQADADAFAAQAPAAARgEQATgFAOgFQAOgHABgEQgBgHgGgEQgHgFgNABQgRgBgNAFg");
	this.shape.setTransform(-0.475,2.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-47.4,42.1,94.8);


(lib.Tween77 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhUCmQgsgWgZgoQgagpgBg4QABg5AZgrQAagsAsgZQAtgZA4AAQAxAAAjARQAjARATAdQATAdAAAlQgBAagUAQQgUAQgdAHQgdAJgdAFIgxALQgUAFAAAJQgBALAMAIQAKAIAbAAQAYAAATgKQASgLAOgJQANgKAKgBQAMABANAMQANALAKAQQAJAQABAOQgBAQgWAUQgWAUglAPQgmAOgwABQg1AAgsgWgAgIhWQgPAGgJAJQgKAJAAAKQAAAEADADQADAEAFAAQAPAAARgFQATgGAOgIQAOgHABgGQgBgIgGgFQgHgGgNAAQgRAAgNAGg");
	this.shape.setTransform(-0.475,3.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-59.1,42.1,118.30000000000001);


(lib.Tween76 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AikESQgNgLAAgVQAAgLAEgQQADgQAAgYQAAhHgFgwQgFgxgHgjIgLhEQgFggAAgmQAAgXAPgVQANgVAVgRQAUgQAYgJQAXgJAUgBQAZAAAKALQAMAKAAAUIgCAeIgDArIgDAvIgBArQAAAXADAIQAEAIAHgBQAFAAAKgIQAJgJAQgKQAPgLAVgJQAUgIAaAAQAVAAATAKQATAKAMARQAMARAAAXQAAAWgDAQIgFAiQgDATAAAbQAAAeAHAQQAFAPAGAKQAGAKABANQgBAOgTARQgSARgbAMQgbANgbABQgdAAgQgOQgPgOAAgbQAAglAEgaQAEgaABgaQgBgTgGgKQgHgKgJgBQgLAAgKAOQgKANAAAfQAAAZACARIAEAfQACAOABASQgBASgOAPQgPAOgbAIQgaAJghAAQgYAAgNgKg");
	this.shape.setTransform(-0.05,-5.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-59.1,47,118.30000000000001);


(lib.Tween75 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AikDTQgNgIAAgQQAAgJAEgMQADgMAAgTQAAg3gFglQgFgmgHgaIgLg1QgFgZAAgdQAAgSAPgQQANgRAVgMQAUgNAYgHQAXgHAUAAQAZAAAKAIQAMAIAAAPIgCAXIgDAiIgDAkIgBAhQAAARADAHQAEAGAHgBQAFAAAKgGQAJgHAQgIQAPgIAVgHQAUgGAaAAQAVAAATAIQATAHAMAOQAMANAAARQAAARgDAMIgFAbQgDAOAAAVQAAAXAHAMQAFANAGAHQAGAIABAKQgBALgTANQgSANgbAKQgbAJgbABQgdAAgQgLQgPgLAAgUQAAgdAEgUQAEgUABgUQgBgPgGgIQgHgIgJAAQgLAAgKAKQgKALAAAXQAAAUACANIAEAYQACALABANQgBAPgOALQgPALgbAHQgaAGghAAQgYAAgNgIg");
	this.shape.setTransform(-0.05,-3.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-45.7,47,91.4);


(lib.Tween74 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AikESQgNgLAAgVQAAgLAEgQQADgQAAgYQAAhHgFgwQgFgxgHgjIgLhEQgFggAAgmQAAgXAPgVQANgVAVgRQAUgQAYgJQAXgJAUgBQAZAAAKALQAMAKAAAUIgCAeIgDArIgDAvIgBArQAAAXADAIQAEAIAHgBQAFAAAKgIQAJgJAQgKQAPgLAVgJQAUgIAaAAQAVAAATAKQATAKAMARQAMARAAAXQAAAWgDAQIgFAiQgDATAAAbQAAAeAHAQQAFAPAGAKQAGAKABANQgBAOgTARQgSARgbAMQgbANgbABQgdAAgQgOQgPgOAAgbQAAglAEgaQAEgaABgaQgBgTgGgKQgHgKgJgBQgLAAgKAOQgKANAAAfQAAAZACARIAEAfQACAOABASQgBASgOAPQgPAOgbAIQgaAJghAAQgYAAgNgKg");
	this.shape.setTransform(-0.05,-5.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-59.1,47,118.30000000000001);


(lib.Tween73 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhbEKQgLgJAAgTQABgiAGg0QAGg0ABhGQAAgHgDgDQgCgCgFAAQgGAAgKAEQgLADgIAAQgGABgEgEQgFgEAAgJQAAgOAFgSQADgTAIgSQAHgSAKgMQAKgMAMAAQAFAAACgCQADgDAAgFQgBgRgFgNQgEgNgGgLQgFgMAAgLQABgOAPgOQAPgPAXgNQAYgNAYgIQAXgHATgBQAXAAAJAKQAKAJAAATQgBAXgEAeQgEAfgBAiQAAAHADADQAEADAFAAQANAAAOgDIAWgCQAIAAAEAGQAEAFAAAHQgBAsgMAeQgMAcgWAGQgNADgGAGQgHAFgCAOQgDAOABAbQAAAhABASQACATADALIAEATIACASQgBAPgRARQgRAQggAMQgfALgtABIgCAAQgTAAgLgJg");
	this.shape.setTransform(-0.175,-4.3737);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-59.1,34.3,118.30000000000001);


(lib.Tween72 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhbDNQgLgHAAgPQABgaAGgoQAGgoABg2QAAgFgDgDQgCgCgFAAIgQADQgLADgIAAQgGABgEgDQgFgDAAgHQAAgLAFgOQADgPAIgNQAHgOAKgJQAKgJAMgBQAFAAACgCQADgBAAgEQgBgNgFgKQgEgLgGgIQgFgJAAgIQABgLAPgMQAPgLAXgKQAYgKAYgGQAXgGATAAQAXAAAJAHQAKAHAAAPQgBARgEAYQgEAYgBAaQAAAFADACQAEADAFAAIAbgCQANgCAJAAQAIAAAEAEQAEAEAAAGQgBAigMAXQgMAWgWAEQgNADgGAEQgHAEgCALQgDAKABAWQAAAZABAOQACAPADAIIAEAPIACAOQgBALgRANQgRANggAJQgfAJgtAAIgDAAQgSAAgLgHg");
	this.shape.setTransform(-0.175,-3.3483);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-45.6,34.3,91.30000000000001);


(lib.Tween71 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhbEKQgLgJAAgTQABgiAGg0QAGg0ABhGQAAgHgDgDQgCgCgFAAQgGAAgKAEQgLADgIAAQgGABgEgEQgFgEAAgJQAAgOAFgSQADgTAIgSQAHgSAKgMQAKgMAMAAQAFAAACgCQADgDAAgFQgBgRgFgNQgEgNgGgLQgFgMAAgLQABgOAPgOQAPgPAXgNQAYgNAYgIQAXgHATgBQAXAAAJAKQAKAJAAATQgBAXgEAeQgEAfgBAiQAAAHADADQAEADAFAAQANAAAOgDIAWgCQAIAAAEAGQAEAFAAAHQgBAsgMAeQgMAcgWAGQgNADgGAGQgHAFgCAOQgDAOABAbQAAAhABASQACATADALIAEATIACASQgBAPgRARQgRAQggAMQgfALgtABIgCAAQgTAAgLgJg");
	this.shape.setTransform(-0.175,-4.3737);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-59.1,34.3,118.30000000000001);


(lib.Tween70 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhIEKQgMgLAAgVQABgZADghIAHhIQADgmABgrQgBgzgFgrIgMhKQgFgggBgSQABgOAMgPQANgOAVgMQAUgLAYgIQAXgHAWAAQAXAAAMANQAMANAAAcQgBAjgFAyQgFAygFA9QgFA9gBBGQABAXAGASIAMAgQAHAOAAAOQAAAPgQAQQgPARgeALQgdAMgpAAQgXAAgMgLg");
	this.shape.setTransform(-0.375,-4.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-59.1,25.1,118.30000000000001);


(lib.Tween69 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhIC+QgMgJAAgPQABgSADgWIAHg0QADgbABgeQgBglgFgeIgMg1QgFgXgBgNQABgKAMgKQANgKAVgJQAUgIAYgFQAXgFAWAAQAXAAAMAJQAMAKAAATQgBAZgFAkQgFAjgFAsQgFAqgBAyQABARAGANIAMAXQAHAKAAAJQAAALgQAMQgPAMgeAIQgdAJgpAAQgXgBgMgHg");
	this.shape.setTransform(-0.375,-3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-42.1,25.1,84.30000000000001);


(lib.Tween68 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhIEKQgMgLAAgVQABgZADghIAHhIQADgmABgrQgBgzgFgrIgMhKQgFgggBgSQABgOAMgPQANgOAVgMQAUgLAYgIQAXgHAWAAQAXAAAMANQAMANAAAcQgBAjgFAyQgFAygFA9QgFA9gBBGQABAXAGASIAMAgQAHAOAAAOQAAAPgQAQQgPARgeALQgdAMgpAAQgXAAgMgLg");
	this.shape.setTransform(-0.375,-4.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-59.1,25.1,118.30000000000001);


(lib.Tween67 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhUCmQgsgWgZgoQgagpgBg4QABg5AZgrQAagsAsgZQAtgZA4AAQAxAAAjARQAjARATAdQATAdAAAlQgBAagUAQQgUAQgdAHQgdAJgdAFIgxALQgUAFAAAJQgBALAMAIQAKAIAbAAQAYAAATgKQASgLAOgJQANgKAKgBQAMABANAMQANALAKAQQAJAQABAOQgBAQgWAUQgWAUglAPQgmAOgwABQg1AAgsgWgAgIhWQgPAGgJAJQgKAJAAAKQAAAEADADQADAEAFAAQAPAAARgFQATgGAOgIQAOgHABgGQgBgIgGgFQgHgGgNAAQgRAAgNAGg");
	this.shape.setTransform(-0.475,3.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-59.1,42.1,118.30000000000001);


(lib.Tween66 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhUCHQgsgSgZghQgagggBgvQABgtAZgkQAagkAsgTQAtgVA4AAQAxAAAjAOQAjAOATAXQATAYAAAeQgBAVgUANQgUANgdAGQgdAHgdAFQgeAEgTAEQgUAEAAAIQgBAIAMAHQAKAGAbAAQAYAAATgIQASgJAOgIQANgHAKgBQAMABANAKQANAIAKANQAJANABAMQgBANgWAQQgWAQglAMQgmAMgwABQg1AAgsgSgAgIhFQgPAEgJAHQgKAIAAAJQAAACADADQADADAFAAQAPAAARgFQATgEAOgGQAOgGABgFQgBgHgGgEQgHgEgNgBQgRAAgNAGg");
	this.shape.setTransform(-0.475,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-48,42.1,96.1);


(lib.Tween65 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhUCmQgsgWgZgoQgagpgBg4QABg5AZgrQAagsAsgZQAtgZA4AAQAxAAAjARQAjARATAdQATAdAAAlQgBAagUAQQgUAQgdAHQgdAJgdAFIgxALQgUAFAAAJQgBALAMAIQAKAIAbAAQAYAAATgKQASgLAOgJQANgKAKgBQAMABANAMQANALAKAQQAJAQABAOQgBAQgWAUQgWAUglAPQgmAOgwABQg1AAgsgWgAgIhWQgPAGgJAJQgKAJAAAKQAAAEADADQADAEAFAAQAPAAARgFQATgGAOgIQAOgHABgGQgBgIgGgFQgHgGgNAAQgRAAgNAGg");
	this.shape.setTransform(-0.475,3.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-59.1,42.1,118.30000000000001);


(lib.Tween64 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AjOCpQghgUgTgoQgTgngBg6QAAg+AOgoQAPgpAhgTQAigTA5AAQAOAAAHAHQAHAHAAAMQgBAJgFAUQgGAVgGAcQgGAcAAAdQAAATAGANQAGANANABQAMAAAHgOQAIgOAAgaIgBglIgDgZQgBgLAAgMQABgPASgOQATgOAagJQAZgJAYgBQARAAAGAIQAFAHAAAUQAAATgEAUIgHAoQgDAUAAAXQAAANAHANQAHAMAOABQATAAAJgRQAJgQAAgeQAAgfgFgWQgFgWgBgXQABgLAMgLQAMgLAUgJQATgIAUgFQAVgGARAAQAYAAANARQANAQAAAgQgBBrgYBBQgYBCgoAeQgoAfgygBQgkgBgWgJQgWgKgLgJQgLgJgGgBQgEAAgHAIQgIAJgNALQgOAKgXAIQgXAIgjABQgnAAgggVg");
	this.shape.setTransform(-0.1758,3.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.7,-59.1,61.4,118.30000000000001);


(lib.Tween63 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AjOCGQghgQgTgfQgTgfgBguQAAgxAOggQAPggAhgPQAigQA5AAQAOAAAHAGQAHAGAAAJQgBAHgFAQQgGARgGAVQgGAXAAAXQAAAPAGAKQAGALANAAQAMAAAHgLQAIgLAAgVIgBgdIgDgTIgBgSQABgMASgMQATgLAagHQAZgHAYgBQARAAAGAGQAFAGAAAPQAAAQgEAQIgHAfQgDAQAAASQAAALAHAKQAHAKAOABQATgBAJgNQAJgNAAgYQAAgYgFgSQgFgRgBgSQABgJAMgJQAMgIAUgHQATgHAUgEQAVgEARAAQAYAAANANQANAMAAAaQgBBVgYAzQgYA1goAXQgoAYgyAAQgkgBgWgHQgWgIgLgHQgLgIgGAAQgEAAgHAHQgIAGgNAJQgOAIgXAHQgXAGgjAAQgnAAgggQg");
	this.shape.setTransform(-0.1758,2.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.7,-46.8,61.4,93.69999999999999);


(lib.Tween62 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AjOCpQghgUgTgoQgTgngBg6QAAg+AOgoQAPgpAhgTQAigTA5AAQAOAAAHAHQAHAHAAAMQgBAJgFAUQgGAVgGAcQgGAcAAAdQAAATAGANQAGANANABQAMAAAHgOQAIgOAAgaIgBglIgDgZQgBgLAAgMQABgPASgOQATgOAagJQAZgJAYgBQARAAAGAIQAFAHAAAUQAAATgEAUIgHAoQgDAUAAAXQAAANAHANQAHAMAOABQATAAAJgRQAJgQAAgeQAAgfgFgWQgFgWgBgXQABgLAMgLQAMgLAUgJQATgIAUgFQAVgGARAAQAYAAANARQANAQAAAgQgBBrgYBBQgYBCgoAeQgoAfgygBQgkgBgWgJQgWgKgLgJQgLgJgGgBQgEAAgHAIQgIAJgNALQgOAKgXAIQgXAIgjABQgnAAgggVg");
	this.shape.setTransform(-0.1758,3.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.7,-59.1,61.4,118.30000000000001);


(lib.Tween61 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhUCmQgsgWgZgoQgagpgBg4QABg5AZgrQAagsAsgZQAtgZA4AAQAxAAAjARQAjARATAdQATAdAAAlQgBAagUAQQgUAQgdAHQgdAJgdAFIgxALQgUAFAAAJQgBALAMAIQAKAIAbAAQAYAAATgKQASgLAOgJQANgKAKgBQAMABANAMQANALAKAQQAJAQABAOQgBAQgWAUQgWAUglAPQgmAOgwABQg1AAgsgWgAgIhWQgPAGgJAJQgKAJAAAKQAAAEADADQADAEAFAAQAPAAARgFQATgGAOgIQAOgHABgGQgBgIgGgFQgHgGgNAAQgRAAgNAGg");
	this.shape.setTransform(-0.475,3.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-59.1,42.1,118.30000000000001);


(lib.Tween60 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhUB9QgsgRgZgeQgagegBgrQABgrAZggQAaghAsgTQAtgSA4AAQAxAAAjAMQAjANATAWQATAWAAAbQgBAVgUALQgUAMgdAFQgdAHgdAEQgeAEgTAEQgUAEAAAGQgBAIAMAHQAKAFAbABQAYAAATgIQASgHAOgIQANgHAKgBQAMABANAIQANAJAKAMQAJAMABALQgBAMgWAPQgWAOglAMQgmALgwAAQg1AAgsgQgAgIhBQgPAFgJAHQgKAGAAAIQAAADADADQADACAFABQAPgBARgEQATgEAOgGQAOgFABgFQgBgGgGgEQgHgEgNAAQgRAAgNAEg");
	this.shape.setTransform(-0.475,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-44.4,42.1,88.9);


(lib.Tween59 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhUCmQgsgWgZgoQgagpgBg4QABg5AZgrQAagsAsgZQAtgZA4AAQAxAAAjARQAjARATAdQATAdAAAlQgBAagUAQQgUAQgdAHQgdAJgdAFIgxALQgUAFAAAJQgBALAMAIQAKAIAbAAQAYAAATgKQASgLAOgJQANgKAKgBQAMABANAMQANALAKAQQAJAQABAOQgBAQgWAUQgWAUglAPQgmAOgwABQg1AAgsgWgAgIhWQgPAGgJAJQgKAJAAAKQAAAEADADQADAEAFAAQAPAAARgFQATgGAOgIQAOgHABgGQgBgIgGgFQgHgGgNAAQgRAAgNAGg");
	this.shape.setTransform(-0.475,3.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-59.1,42.1,118.30000000000001);


(lib.Tween58 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhmDqQgogXgWgoQgVgngBg1QABgSAUgRQATgQAcgLQAcgKAcgBQALAAAFAGQAGAGAAALQAAAWACATQACAUAGALQAFANAJAAQANAAAHgUQAJgTAAghQgBgugIgvQgGgugIgmQgIgngBgSQABgOARgLQAPgLAZgJQAYgJAXgEQAXgFAMAAQAYABAOAdQAOAcAHAxQAHAygBBAQABBagSBBQgTBBgqAjQgrAjhHAAQg4AAgogWg");
	this.shape.setTransform(-0.6474,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-59.1,43.5,118.30000000000001);


(lib.Tween57 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhmC9QgogRgWghQgVgggBgsQABgOAUgNQATgOAcgIQAcgJAcAAQALAAAFAFQAGAFAAAJQAAARACAQQACAQAGAJQAFAKAJABQANgBAHgPQAJgQAAgcQgBgkgIgmQgGgmgIgfQgIgegBgQQABgLARgJQAPgJAZgHQAYgHAXgEQAXgEAMAAQAYABAOAXQAOAXAHApQAHAogBAzQABBJgSA1QgTA1gqAcQgrAdhHAAQg4AAgogTg");
	this.shape.setTransform(-0.6474,-1.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-47.9,43.5,95.9);


(lib.Tween56 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AhmDqQgogXgWgoQgVgngBg1QABgSAUgRQATgQAcgLQAcgKAcgBQALAAAFAGQAGAGAAALQAAAWACATQACAUAGALQAFANAJAAQANAAAHgUQAJgTAAghQgBgugIgvQgGgugIgmQgIgngBgSQABgOARgLQAPgLAZgJQAYgJAXgEQAXgFAMAAQAYABAOAdQAOAcAHAxQAHAygBBAQABBagSBBQgTBBgqAjQgrAjhHAAQg4AAgogWg");
	this.shape.setTransform(-0.6474,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-59.1,43.5,118.30000000000001);


(lib.Tween48 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#025E90").s().p("AgFBXQghgGgggHQgegIgcgLQgbgJgTgXQgLgOAMgLQAagWAdgSQAVgQAbgCQAFgBAFgDQAPgJASACQAGgBAEAHQAHAGAJAAQAJADADgKQAFgNAOgGQAJgFAGAJIALAPQAHALANAEQASAIgLARQgFAGAGAEQAPAOASgPQASgMATgIIAOgFQAGgDAFAEQADAGgDAHQgFARABAQQAAASgDASQgCAFgFgDQgTgGgQgMQgLgKgPAGQAMAIgHAKQgGALgNADQgJADgEAKQgMANgRAFQgKACgHgJQgDgJgHgBQgLADgEALQgDAHgEAAIgEgBg");
	this.shape.setTransform(-0.0132,0.0346);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-8.7,36,17.5);


(lib.Tween47 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#025E90").s().p("AgFBXQghgGgggHQgegIgcgLQgbgJgTgXQgLgOAMgLQAagWAdgSQAVgQAbgCQAFgBAFgDQAPgJASACQAGgBAEAHQAHAGAJAAQAJADADgKQAFgNAOgGQAJgFAGAJIALAPQAHALANAEQASAIgLARQgFAGAGAEQAPAOASgPQASgMATgIIAOgFQAGgDAFAEQADAGgDAHQgFARABAQQAAASgDASQgCAFgFgDQgTgGgQgMQgLgKgPAGQAMAIgHAKQgGALgNADQgJADgEAKQgMANgRAFQgKACgHgJQgDgJgHgBQgLADgEALQgDAHgEAAIgEgBg");
	this.shape.setTransform(0.0368,0.0346);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-8.7,36.1,17.5);


(lib.Tween46 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#025E90").s().p("AAfAwQgFgCgDgFQgCgEABgEQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgCAAQgGABgEgBQgHgCgEAEQgFADgFABIgKABQgLABgKgGQgHgCADgHQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgQADIgJADQgJADgIgEQgFgDgDgFIgEgMQgCgEACgDIAJgJQAGgGAJADIAPAFQAKACAJgCQABABAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAIgBgBIgCgCQgDgFACgGIACgDIADgEQADgDADgBIALgEQAHgBAGADQAHAFAHgCQAEgBADgEIAHgGIABgBIAGgCQAFgDAGADIABAAIgBgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAHACAFAGQAFAHAJACIALAFIALAEQAFADAEAEQAFAEAEAFQABACAAADIAAAAQABAHgFAEQgOALgRAEIgRAGIgCABIgGAJQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgDABQgDADgDAAIgBAAg");
	this.shape.setTransform(-13.8661,8.0036);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#025E90").s().p("AAvBJQgIgCgEgIQgEgGACgGQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgDAAQgIABgHgCQgKgCgIAGQgGAFgIABIgPACQgSABgPgJQgKgEAEgLQACgCgEAAQgMACgLADIgOAEQgOAFgNgHQgIgEgDgIIgHgSQgCgFADgFQAGgHAGgHQALgKAOAFIAWAHQAPADAPgCQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAABAAIgCgCIgCgCQgGgIADgKQABgCACgCQAEgCACgEQADgFAGgBIAQgGQALgCAJAGQALAGALgCQAHgCAEgGQAFgGAGgEIABAAIAJgEQAIgFAJAFIABAAIgBgDQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQALADAHAJQAIALANADQAJACAJAFIAQAHQAIAEAHAGQAHAGAFAIQADAEgBAEIAAABQADAKgJAGQgUARgbAGQgNAEgMAFQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAIgKAOQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgDABgDACQgEADgFAAIgBAAg");
	this.shape_1.setTransform(8.3884,-5.4722);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.2,-12.8,48.5,25.6);


(lib.Tween45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#025E90").s().p("AAfAwQgFgCgDgFQgCgEABgEQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgCAAQgGABgEgBQgHgCgEAEQgFADgFABIgKABQgLABgKgGQgHgCADgHQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgQADIgJADQgJADgIgEQgFgDgDgFIgEgMQgCgEACgDIAJgJQAGgGAJADIAPAFQAKACAJgCQABABAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAIgBgBIgCgCQgDgFACgGIACgDIADgEQADgDADgBIALgEQAHgBAGADQAHAFAHgCQAEgBADgEIAHgGIABgBIAGgCQAFgDAGADIABAAIgBgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAHACAFAGQAFAHAJACIALAFIALAEQAFADAEAEQAFAEAEAFQABACAAADIAAAAQABAHgFAEQgOALgRAEIgRAGIgCABIgGAJQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgDABQgDADgDAAIgBAAg");
	this.shape.setTransform(-13.8661,8.0036);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#025E90").s().p("AAvBJQgIgCgEgIQgEgGACgGQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgDAAQgIABgHgCQgKgCgIAGQgGAFgIABIgPACQgSABgPgJQgKgEAEgLQACgCgEAAQgMACgLADIgOAEQgOAFgNgHQgIgEgDgIIgHgSQgCgFADgFQAGgHAGgHQALgKAOAFIAWAHQAPADAPgCQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAABAAIgCgCIgCgCQgGgIADgKQABgCACgCQAEgCACgEQADgFAGgBIAQgGQALgCAJAGQALAGALgCQAHgCAEgGQAFgGAGgEIABAAIAJgEQAIgFAJAFIABAAIgBgDQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQALADAHAJQAIALANADQAJACAJAFIAQAHQAIAEAHAGQAHAGAFAIQADAEgBAEIAAABQADAKgJAGQgUARgbAGQgNAEgMAFQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAIgKAOQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgDABgDACQgEADgFAAIgBAAg");
	this.shape_1.setTransform(8.3884,-5.4722);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.2,-12.8,48.5,25.6);


(lib.Tween44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#026FAA").s().p("AgEBHQgbgFgagGQgYgGgXgJQgXgIgPgTQgJgLAKgIQAVgSAXgPQASgNAWgCQAEgBAEgDQAMgGAPABQAFAAADAFQAGAFAHAAQAHADACgJQAFgKALgGQAIgDAFAHIAIAMQAGAJALADQAOAHgJAOQgEAEAFAEQAMALAPgMQAPgKAPgGIAMgEQAFgDAEAEQACAFgCAFQgEAOAAANQAAAPgCAPQgCADgEgCQgPgFgNgKQgJgIgMAFQAJAGgGAIQgEAKgLACQgHADgDAHQgKALgOAEQgIACgGgIQgCgHgGgBQgJADgEAJQgBAGgEAAIgDgBg");
	this.shape.setTransform(-15.7382,7.0729);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#026FAA").s().p("AgCArIgggGIgdgJQgOgFgJgMQgFgGAGgFQANgLAOgJQAKgIAOgBQACAAADgCQAHgEAJAAQADAAACAEQADACAFAAQAEACABgFQADgGAHgEQAEgCADAEIAGAIQADAFAGACQAKAFgGAIQgDADADACQAIAHAJgIQAJgGAJgEIAHgCQADgCACADQACACgBAEQgDAIABAIIgCASQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAgBQgKgCgIgHQgFgEgIADQAGADgDAFQgDAGgHABQgEACgCAFQgGAGgIADQgFABgEgFQgBgEgEgBQgFACgCAFQgBAEgCAAIgCgBg");
	this.shape_1.setTransform(21.4756,7.0854);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#026FAA").s().p("AgDA8QgXgEgWgFQgUgGgUgHQgSgGgNgQQgIgKAJgHQARgPAUgMQAPgMASgBIAHgDQALgGAMABQAEAAADAFQAFAEAGAAQAGACACgHQADgJAKgEQAGgDAEAGIAIAKQAEAIAJACQANAGgIAMQgEADAFADQAKAKANgKQAMgIANgGIAKgDQAEgCADACQACAEgCAFQgDAMAAALQAAAMgCANQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgOgEgKgJQgIgHgKAFQAIAFgFAHQgEAHgJADQgGACgDAGQgIAJgMAEQgHABgEgGQgCgGgFgBQgIACgDAIQgCAEgDAAIgCAAg");
	this.shape_2.setTransform(6.5992,-8.2015);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,-14.2,60.8,28.5);


(lib.Tween43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#026FAA").s().p("AgEBHQgbgFgagGQgYgGgXgJQgXgIgPgTQgJgLAKgIQAVgSAXgPQASgNAWgCQAEgBAEgDQAMgGAPABQAFAAADAFQAGAFAHAAQAHADACgJQAFgKALgGQAIgDAFAHIAIAMQAGAJALADQAOAHgJAOQgEAEAFAEQAMALAPgMQAPgKAPgGIAMgEQAFgDAEAEQACAFgCAFQgEAOAAANQAAAPgCAPQgCADgEgCQgPgFgNgKQgJgIgMAFQAJAGgGAIQgEAKgLACQgHADgDAHQgKALgOAEQgIACgGgIQgCgHgGgBQgJADgEAJQgBAGgEAAIgDgBg");
	this.shape.setTransform(-15.6882,7.0729);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#026FAA").s().p("AgCArIgggGIgdgJQgOgFgJgMQgFgGAGgFQANgLAOgJQAKgIAOgBQACAAADgCQAHgEAJAAQADAAACAEQADACAFAAQAEACABgFQADgGAHgEQAEgCADAEIAGAIQADAFAGACQAKAFgGAIQgDADADACQAIAHAJgIQAJgGAJgEIAHgCQADgCACADQACACgBAEQgDAIABAIIgCASQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAgBQgKgCgIgHQgFgEgIADQAGADgDAFQgDAGgHABQgEACgCAFQgGAGgIADQgFABgEgFQgBgEgEgBQgFACgCAFQgBAEgCAAIgCgBg");
	this.shape_1.setTransform(21.5256,7.0854);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#026FAA").s().p("AgDA8QgXgEgWgFQgUgGgUgHQgSgGgNgQQgIgKAJgHQARgPAUgMQAPgMASgBIAHgDQALgGAMABQAEAAADAFQAFAEAGAAQAGACACgHQADgJAKgEQAGgDAEAGIAIAKQAEAIAJACQANAGgIAMQgEADAFADQAKAKANgKQAMgIANgGIAKgDQAEgCADACQACAEgCAFQgDAMAAALQAAAMgCANQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgOgEgKgJQgIgHgKAFQAIAFgFAHQgEAHgJADQgGACgDAGQgIAJgMAEQgHABgEgGQgCgGgFgBQgIACgDAIQgCAEgDAAIgCAAg");
	this.shape_2.setTransform(6.6492,-8.2015);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,-14.2,60.9,28.5);


(lib.Tween42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034D77").s().p("AAVD5QgagHgTgVQgWgagmACQAPASAQANQAGAEgEAHQgGAFgFgFQgqgUgdgkQgFgGgHgDQgcgQgEgfQgEgbgbAAQgLAAgKgCQgQgCABgRQABgRAQABQAtABAIgrQAMgjAZgZQAggnAegpQBhhtCSgUQAngHAmAHQgcAIgeABQhHAMhCAhQguAagGAwQgHAxAaAkQAYAYAOAfQAFAOACATQAigXAjgPQARgOAOAHQADANgRALQgmAzAcA5QAFAFgDAFQgGADgFgDQgfgMgWgaQgTgagFAhQgFARgGAQQgQAlARAlQAJANgHALQgFADgFAAQgGAAgHgEg");
	this.shape.setTransform(-0.0258,-0.0115);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-25.3,49,50.6);


(lib.Tween41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034D77").s().p("AAVD5QgagHgTgVQgWgagmACQAPASAQANQAGAEgEAHQgGAFgFgFQgqgUgdgkQgFgGgHgDQgcgQgEgfQgEgbgbAAQgLAAgKgCQgQgCABgRQABgRAQABQAtABAIgrQAMgjAZgZQAggnAegpQBhhtCSgUQAngHAmAHQgcAIgeABQhHAMhCAhQguAagGAwQgHAxAaAkQAYAYAOAfQAFAOACATQAigXAjgPQARgOAOAHQADANgRALQgmAzAcA5QAFAFgDAFQgGADgFgDQgfgMgWgaQgTgagFAhQgFARgGAQQgQAlARAlQAJANgHALQgFADgFAAQgGAAgHgEg");
	this.shape.setTransform(0.0242,-0.0115);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-25.3,49.1,50.6);


(lib.Tween40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#025E90").s().p("AAZBZQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQADgHAGgHQgdADgZgJQgTgGgOgOIgNgMQgNgLgOALQgKAKgOAHQgEADgGgBIAAgBQAVgggOgjQgEgNgIgNQADAAACACQALAHAIAJQAHAKAJAHQAIAHAIgEQABgBABAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQgFgGAAgIQgBgsApgNQAwgRAxASQAPAFANAHQAUALAHAWQADANAEAMQADAIAIADQAHAFgGAGQgDACABADQACAJgJgCQgEAAgBADQgRATgXALQgQAGgMAMQgIAJgMAEIgCAAIgCAAg");
	this.shape.setTransform(-0.004,0.0305);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-8.9,26.700000000000003,17.9);


(lib.Tween39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#025E90").s().p("AAZBZQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQADgHAGgHQgdADgZgJQgTgGgOgOIgNgMQgNgLgOALQgKAKgOAHQgEADgGgBIAAgBQAVgggOgjQgEgNgIgNQADAAACACQALAHAIAJQAHAKAJAHQAIAHAIgEQABgBABAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQgFgGAAgIQgBgsApgNQAwgRAxASQAPAFANAHQAUALAHAWQADANAEAMQADAIAIADQAHAFgGAGQgDACABADQACAJgJgCQgEAAgBADQgRATgXALQgQAGgMAMQgIAJgMAEIgCAAIgCAAg");
	this.shape.setTransform(-0.004,0.0305);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-8.9,26.700000000000003,17.9);


(lib.Tween36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#025E90").s().p("AhRBbQgNgDgIgLIgPgUQgGgJgLgBQgxgHgugRIgNgGQgHgCgBgHQADgEAGAAQAAgDgDgBQgIgHAKgFQAOgJAPgHQAugVAxgKQANgCAOAAQAHABAFgFQAKgKALgHIAQgJIABABQgEADABADQADADAFgCQACgBADAAQgDAFAEADQAFAAAEgBQgCAEAAADQAEADAEgCIgCAGQADADADgBQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQABABAAAAQAAAAAAAAQABAAAAAAQAJABAKgCQAYgIAZgEQAKgCAHAHIALAOQADAGgGABQgGAAgCADQACAEAGABQAdAMAhABQAZgBAYgKIAZgKQAMgEANAAQAHAAgDAHQgFAOgJAMQgMANALAMQAKAOACARQABAGgGAAQgKgBgKgDIgmgNQgigMglAJQAHACgEAEQgLANAEARQACAKgKgCQgQgEgPgJQgSgLgWAEQgzAIg0gFIgEAAQAGADACAGQAAAFgCAGIgEAPQgCADgCAAIgCgBg");
	this.shape.setTransform(-0.0071,0.0167);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.1,-9.2,50.2,18.5);


(lib.Tween35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#025E90").s().p("AhRBbQgNgDgIgLIgPgUQgGgJgLgBQgxgHgugRIgNgGQgHgCgBgHQADgEAGAAQAAgDgDgBQgIgHAKgFQAOgJAPgHQAugVAxgKQANgCAOAAQAHABAFgFQAKgKALgHIAQgJIABABQgEADABADQADADAFgCQACgBADAAQgDAFAEADQAFAAAEgBQgCAEAAADQAEADAEgCIgCAGQADADADgBQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQABABAAAAQAAAAAAAAQABAAAAAAQAJABAKgCQAYgIAZgEQAKgCAHAHIALAOQADAGgGABQgGAAgCADQACAEAGABQAdAMAhABQAZgBAYgKIAZgKQAMgEANAAQAHAAgDAHQgFAOgJAMQgMANALAMQAKAOACARQABAGgGAAQgKgBgKgDIgmgNQgigMglAJQAHACgEAEQgLANAEARQACAKgKgCQgQgEgPgJQgSgLgWAEQgzAIg0gFIgEAAQAGADACAGQAAAFgCAGIgEAPQgCADgCAAIgCgBg");
	this.shape.setTransform(-0.0071,0.0167);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.1,-9.2,50.2,18.5);


(lib.Tween34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034D77").s().p("AgpBtQAAAAAAAAQAAgBAAAAQABgBAAAAQABgBABAAIAEgDIgGgBIABgBQAFgBACgFIAFgIIAAgCIgBAAIgMADIgJACQAAABgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIABgBIAHgCIABgBQgBgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIACgBIARgRQgFABgEADQgFAFgGABIgaAIIgRABQgJACgJgCQgHgBgDgHIgBgCQgFgJADgJIAGgTQADgNAHgKQgDABgEAEQgJAKgLAJIgEACQgMADgBgMQgBgKAAgKIgBgIQgCgIACgIQADgMABgMQACgJAHADQAIAEAGAFQAGAGAIAEQACADADAAQAEABgCgDQgGgPgCgPQgBgHAAgGQAAgKgCgJQgCgNAMgGQAOgEAOAAIAMAAIACAAQALADAKAAIAZADIAXADQAEAAAEACQAJACAJAEIASAMIAIAKIAHAJQAHAJAEALIACAFQAFAJAAAKIAEAOQABAHAEAIQAEAGAGACIAHAEQAFAEAHABIASAFQAFABgCAEIAAAAQABAHgGgCIgMgBQgRgCgRAEIgGACQgIAGgJABQgJABgJADIgSAEQgGAAgEAFIgJAHQgEAFgFAEQgLAKgPAFQgLADgJAHIgEACIgBgBg");
	this.shape.setTransform(17.5993,17.4531);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034D77").s().p("Ag/CmQAAgEAFgBIAFgFIgIgBQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAIgCABgHIAIgNQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgDgBIgRAFIgOAEQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAIAKgDQAAAAAAgBQABAAAAAAQAAAAAAAAQABgBAAAAQgDgEAFAAIADgCIAYgZQgHABgFAFQgIAIgKACIgmALIgaACQgNADgOgCQgLgDgFgLIgBgDQgIgNAFgOIAJgdQAFgSALgQQgGACgFAGQgOAPgQANIgGADQgSAEgDgRQgBgPAAgPQAAgHgCgGQgDgMAEgNQAEgSACgSQACgNAMAFQALAFAJAJQAKAJALAGQAEADAEABQAGABgCgFQgKgVgDgYQgBgKAAgKQAAgOgDgOQgDgUASgIQAVgHAVAAQAKABAJgBIACAAQAQAEARAAIAlAFQARADARABQAHAAAGADQAOAEANAGQAPAIANAKQAHAHAFAIIALAOQAKAOAGAQQABAEACADQAHAOAAAPQACALAEAKQACAMAGAMQAFAJAKADIALAGQAHAGAKACIAcAGQAIACgDAGIAAABQABAJgJgCIgTgCQgZgCgaAFIgJAEQgMAIgOACQgNABgNAFIgbAGQgKAAgHAHIgMAMQgGAHgIAGQgSAPgWAHQgQAFgPALQgDACgCAAIgCAAg");
	this.shape_1.setTransform(-9.9587,-11.7667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-28.4,64.9,56.9);


(lib.Tween33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034D77").s().p("AgpBtQAAAAAAAAQAAgBAAAAQABgBAAAAQABgBABAAIAEgDIgGgBIABgBQAFgBACgFIAFgIIAAgCIgBAAIgMADIgJACQAAABgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIABgBIAHgCIABgBQgBgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIACgBIARgRQgFABgEADQgFAFgGABIgaAIIgRABQgJACgJgCQgHgBgDgHIgBgCQgFgJADgJIAGgTQADgNAHgKQgDABgEAEQgJAKgLAJIgEACQgMADgBgMQgBgKAAgKIgBgIQgCgIACgIQADgMABgMQACgJAHADQAIAEAGAFQAGAGAIAEQACADADAAQAEABgCgDQgGgPgCgPQgBgHAAgGQAAgKgCgJQgCgNAMgGQAOgEAOAAIAMAAIACAAQALADAKAAIAZADIAXADQAEAAAEACQAJACAJAEIASAMIAIAKIAHAJQAHAJAEALIACAFQAFAJAAAKIAEAOQABAHAEAIQAEAGAGACIAHAEQAFAEAHABIASAFQAFABgCAEIAAAAQABAHgGgCIgMgBQgRgCgRAEIgGACQgIAGgJABQgJABgJADIgSAEQgGAAgEAFIgJAHQgEAFgFAEQgLAKgPAFQgLADgJAHIgEACIgBgBg");
	this.shape.setTransform(17.5493,17.4531);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034D77").s().p("Ag/CmQAAgEAFgBIAFgFIgIgBQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAIgCABgHIAIgNQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgDgBIgRAFIgOAEQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAIAKgDQAAAAAAgBQABAAAAAAQAAAAAAAAQABgBAAAAQgDgEAFAAIADgCIAYgZQgHABgFAFQgIAIgKACIgmALIgaACQgNADgOgCQgLgDgFgLIgBgDQgIgNAFgOIAJgdQAFgSALgQQgGACgFAGQgOAPgQANIgGADQgSAEgDgRQgBgPAAgPQAAgHgCgGQgDgMAEgNQAEgSACgSQACgNAMAFQALAFAJAJQAKAJALAGQAEADAEABQAGABgCgFQgKgVgDgYQgBgKAAgKQAAgOgDgOQgDgUASgIQAVgHAVAAQAKABAJgBIACAAQAQAEARAAIAlAFQARADARABQAHAAAGADQAOAEANAGQAPAIANAKQAHAHAFAIIALAOQAKAOAGAQQABAEACADQAHAOAAAPQACALAEAKQACAMAGAMQAFAJAKADIALAGQAHAGAKACIAcAGQAIACgDAGIAAABQABAJgJgCIgTgCQgZgCgaAFIgJAEQgMAIgOACQgNABgNAFIgbAGQgKAAgHAHIgMAMQgGAHgIAGQgSAPgWAHQgQAFgPALQgDACgCAAIgCAAg");
	this.shape_1.setTransform(-10.0087,-11.7667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-28.4,64.8,56.9);


(lib.Tween32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0180C3").s().p("AB2CxQgCgGAGgFQAPgTAJgWQADgJgBgKQAAgPgQAAQglACgmgBQhCgDhAgQQgTgGgNAOQgFAGgIADQgLAGgCgNIAAgBQAEgngmgIQgLgDgLgFQgWgNgWAOQgOAKgDgRQgCgHgGgCIgogHQgTgDgLAQIgeAlQgeAlguARQgGAEgKgCQATgVAEgaQADgaAKgYQAFgNgIgNQgbg1gogqQgGgKgOgGQgKgHgHgTQgBgHAIADQAQAFAQAGQBNAhA7A6QAeAhAsgKQATgFATgCQAPgBAFgOQADgJAIAFQAVAOAYgHICOgTQAmgGAFgnQAFgdgFgcQgDgGAEgFQAGgCAFAEQAgASAWAeIAYAgQAKANAPAAQCkAICgAiQAVAEAUAKQAVAJgSAOQgYASgfADQgIgBgBAJQgDAKgKADQgnAXgtAIQg0AMg2AEQgJACgEAIQgZAjggAbQgUAPgXAHQgEACgDAAQgEAAgDgDg");
	this.shape.setTransform(-0.0152,0.0179);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-18,104,36.1);


(lib.Tween30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0180C3").s().p("AACDLQgZgQgUgXQgRgUgOgWQgEgFgEAEIgKALQgFAEgDgFQgDgDAAgEQAAgSgSgGQglgMgkgPQgegNgggJIgigHQgDAAgBgDQABgEAEABIAFAAIApAAIAAgBIgLgDQgrgEgrgDIhLgEIhLgFIgtgDQgEAAgBgFQABgFAFABQAhAAAhACIBQADIBugBIADAAQAfgFAdgKQA5gXA1geQAKgFADgKQAHgTAKgSQAeg1AyghQAJgGAKgBQADgBADACQAAADgCACIgRAbQgYArABAyQAAAGAGABIATAEIBHAPQA2AHA2ACQATABAUADQAeAGAeADQAPADANgHQAUgJASAOIABACQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAIgDAAQgGgBgCAEQABAFAFAAIAJADQANACANAAQAGAAADgEIA5hHQAZgdAjgRQAMgGAOgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgOAPQgfAhgUAoQgdA0AdA0IACAFQAMAZAPAZQAMARAPAPQAEACgBAEQgDADgFgDIgJgEIgJgFQgmgUgggdQgcgbgUgiQgCgDgDgBQgZABgYAIQgEACgCAEQgCAGAGAAIAKABQAAgBABAAQABAAAAAAQABABAAAAQAAAAABABIgCADQgRAMgTgJQgIgFgJACIglALQgdALADAfQACATAIAQQACACgCADQgCABgDgCIgHgFQgcgUgbgXQgGgGgKAAQgjAAgjAGIhQAMIggACQgGAAABAGQABAKAEAJQANAZANAWQAFAIACAJQAAAAABABQAAABgBAAQAAABAAAAQAAABgBAAIgBAAIgDgBg");
	this.shape.setTransform(-0.02,-0.0146);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.1,-20.4,108.2,40.9);


(lib.Symbol153 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7B4F9").s().p("EgvLAnmMAAAhPLMBeWAAAMAAABPLg");
	this.shape.setTransform(301.95,253.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,603.9,506.8);


(lib.Symbol148 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7B4F9").s().p("EgfkAnmMAAAhPLMA/JAAAMAAABPLg");
	this.shape.setTransform(202.075,253.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,404.2,506.8);


(lib.Symbol146 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7B4F9").s().p("EgvLAnmMAAAhPLMBeWAAAMAAABPLg");
	this.shape.setTransform(301.95,253.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,603.9,506.8);


(lib.Symbol142 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7B4F9").s().p("EgvLAnmMAAAhPLMBeWAAAMAAABPLg");
	this.shape.setTransform(301.95,253.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,603.9,506.8);


(lib.Symbol71 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0DfQgcgBgKgcIgUg+QgIgcgTgVQgsgzgChGQAChQA2g0QA1g0BOAAQBNAEA0A0QAyA1ABBNQgCBFgsAxQgTAWgIAcIgSA+QgKAcgdABg");
	this.shape.setTransform(18.4,22.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.8,44.7);


(lib.Symbol70 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah9B+QgygygChMQAChLAygyQAygyBLgCQBMACAyAyQAyAyACBLQgCBMgyAyQgyAyhMACQhLgCgygyg");
	this.shape.setTransform(17.825,17.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.7,35.7);


(lib.Symbol69 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiNC7IA6g8QgpgVgfgTIgggTQgCgGhAAtQgjAbgOACQgKACgCgKQAChDASggQAEgMgEgLQgSgfgChDQACgKAKABQAPADAiAbQBAAtACgGIAcgRQAagQAigSIgqg6QADgEA/gfQA+geBagIIA4BRQBIASArApQAwAqANAcQAMAVgMAXQgMAcgxAqQgnAkg9AUQg8AThYgYIhKA2g");
	this.shape.setTransform(31.5,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,43);


(lib.Symbol68 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQDNQhPgTh9AlIAAl9IA9AAIAEhFQB8gJAxAnQAtAlABAJQACgJAsglQAxgnB+AJIACBFIA+AAIAAF9Qh+glhOATQhOATgDAGQgCgGhOgTg");
	this.shape.setTransform(28.5,23.1165);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.2,57,45.9);


(lib.Symbol66 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#582296").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,2);


(lib.Symbol65 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#582296").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,2);


(lib.Symbol64 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#582296").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,2);


(lib.Symbol63 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#582296").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,2);


(lib.Symbol62 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#582296").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,2);


(lib.Symbol61 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#582296").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,2);


(lib.Symbol60 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#582296").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,2);


(lib.Symbol59 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#582296").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,2);


(lib.Symbol58 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#582296").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,2);


(lib.Symbol57 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#582296").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,2);


(lib.Symbol56 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak+EqQghgqBChuQBChuCHh+QCHh+Byg6QByg6AoAkQAgAqhBBtQhCBuiHB+QiHB+hyA6QhHAkgqAAQgaAAgPgNg");
	this.shape.setTransform(33.0139,31.1382);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,65.9,62.199999999999996);


(lib.Symbol55 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D14E2").s().p("AmtQQQmCghj9guQj9gvhBgTQhRjlgBkAQAEmaDElLQDElLFLjEQFMjEGZgEQGaAEFLDEQFMDEDEFLQDEFLAEGaQgBEDhTDnQnuB8nTAYQjIALi6AAQj2AAjdgTg");
	this.shape.setTransform(146.925,105.9015);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,293.9,211.8);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AjWHPQhTgBhUgGQg9gEg9gKQhqgXgehoQgQhKgEhLQgHheABhcQAAiDATiBQAFgwAbgqQArg+BMgLQA5gJA5gDQB0gHB0gBQCMgECMADQBJAABIAEQBxADBwAQQBtAWAeBrQASBVAEBWQAEA/ABA/QAAB4gMB3QgEAygNAvQggBphtASQhLALhMADQhgAFhgACIiYABIgaAAQhfAAhfgDgAiBjCQgDAEABAGIAADcIAACWQgCAPAMgJIAsgZIDah+IBGgpIhXgxIj1iNQgDgEgEAAIgBAAg");
	this.shape.setTransform(-0.0049,0.026);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-66.6,-46.6,133.3,93.30000000000001), null);


(lib.eyeR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABJAAQgGBDhDAGQhCgGgGhDQAGhCBCgGQBDAGAGBCg");
	this.shape.setTransform(15.625,18.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhIAAQAGhCBCgGQBDAGAGBCQgGBDhDAGQhCgGgGhDg");
	this.shape_1.setTransform(15.625,18.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhsBtQgrgsgChBQAChAArgsQAsgrBAgCQBBACAsArQArAsACBAQgCBBgrAsQgsArhBACQhAgCgsgrg");
	this.shape_2.setTransform(15.375,15.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyeR, new cjs.Rectangle(0,0,30.8,30.8), null);


(lib.eyeL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABJAAQgGBDhDAGQhCgGgGhDQAGhCBCgGQBDAGAGBCg");
	this.shape.setTransform(15.125,19.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhIAAQAGhCBCgGQBDAGAGBCQgGBDhDAGQhCgGgGhDg");
	this.shape_1.setTransform(15.125,19.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhsBtQgrgsgChBQAChAArgsQAsgrBAgCQBBACAsArQArAsACBAQgCBBgrAsQgsArhBACQhAgCgsgrg");
	this.shape_2.setTransform(15.375,15.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyeL, new cjs.Rectangle(0,0,30.8,30.8), null);


(lib.background01swf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#026FAA").s().p("AAECRIgDgHQgFgXgNgUQgbgoAigmQARgXACgeQACg1gXgvIgCgFQgCgEADgCQADgBABADQAgAqAHA0QAAAigYAVQgGAIAAAJQgCAvAKAsQAEAOAGAMQADAGgGADIgEABQgEAAgDgDg");
	this.shape.setTransform(347.573,496.0895);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#026FAA").s().p("AgMDVQAAgPgKgMQgYgpAWgoIAKgSQAIgMgBgOQABgRgJgOQgRgZgDgdIAAgNQADgmAVghQAdgtgJg3IAAgEQgBgFAEgCQAEABAAAEIAQAqQAOApgkAYQgUAOgMAWQgIARAHAQQAHATAKARQAKASAFAVQAIAegQAcQgJARgGAUQgIAfAPAcQAGAKABALQABAGgEACQgIAAgBgHg");
	this.shape_1.setTransform(343.9691,488.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#026FAA").s().p("AAQC4QgEgCABgFIAAgDQAAgZgPgPQgdgegEgqQgEggATgZQAXgdgBgmIgBgoQgBgeARgaIAOgXQAAAAAAgBQABAAAAgBQABAAABAAQAAAAABAAQABABAAAAQABABAAAAQAAABAAAAQAAABgBAAQgHAWAHAWQADAigIAhQgHAggXAWQgNAQABAWQACA1AaAsQAMAagFAcIgBAEQgCAFgEAAIgBAAg");
	this.shape_2.setTransform(330.2759,492.5148);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#026FAA").s().p("AAbDsQgMgRgPgNQgYgcAAgkQAAgKACgKQABgDgBgEQgcg5Abg6QAKgaAOgXQAFgIgCgJIgMhAQgIgwAKgvQAAgKAHgCQAFADgCAKQAEAjANAhQASAugXArQgHANACAOQAGA9gVA6QgGAOgEAOQgFASAKAPQAKAVAJAXQAIATAOARQAEAFABAHQAAAEgEACIgCAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_3.setTransform(326.7526,487.1375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#026FAA").s().p("AAADbQgEgCABgFQgBgOgGgMQgJgeAJgfQAGgXABgYQACgagIgZIgDgHIgIgcQgThHAihAQAKgYAFgbQACgLAGgKQACgEADABQADACgBADIgBAGQgEAQACAQQADAbgKAaQgMAnAIAnQAHAoAJAmQAFAhgMAgIgLAjQgIAkAKAkQACAGgEAEQgDADgEAAIgCAAg");
	this.shape_4.setTransform(337.9967,489.008);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#025E90").s().p("AAIDvQgEgGgBgFQgKgmgVghQgshDA3g+QAdgnACgxQAEhXgmhOIgEgIQgDgGAEgEQAGgBACAFQA1BEALBWQABA3gnAlQgLAMAAAQQgEBMASBKQAHAWAIAVQAFAJgIAFQgEACgEAAQgGAAgEgFg");
	this.shape_5.setTransform(1322.7826,543.546);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#025E90").s().p("AgVFfQAAgagRgTQgnhCAlhEQAIgPAJgOQAMgUgBgXQABgcgPgXQgbgpgGgxIABgVQAEg+Akg2QAwhLgPhaIgBgHQgCgIAHgDQAHABAAAIQAPAiAMAiQAXBEg8AnQgiAXgTAlQgMAbALAbQALAfARAcQAQAfAJAiQANAygaAtQgQAdgJAgQgPAzAZAvQAKAQACATQACAJgHACIgCABQgLAAgCgLg");
	this.shape_6.setTransform(1316.9037,531.7042);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#025E90").s().p("AAaEvQgHgDADgIIAAgFQAAgpgagYQgwgzgHhFQgFgzAfgqQAlgxgBg/IgChBQgBgyAbgqIAYglQACgGAFACQAEADgCAEQgLAkAKAkQAGA4gOA2QgMA0glAmQgXAaADAkQADBWArBKQAUArgIAuIgCAGQgDAIgHAAIgCAAg");
	this.shape_7.setTransform(1294.3361,537.5892);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#025E90").s().p("AAsGFQgTgcgagWQgmguAAg8QgBgQAEgQQACgGgDgGQgtheAshfQARgrAXgnQAIgMgDgPQgJg1gLg1QgOhOARhOQAAgRAMgDQAJAFgDAQQAGA6AWA2QAcBMglBHQgLAVACAYQAKBkgjBgQgJAXgHAYQgIAdAQAZQASAiAOAlQANAhAXAaQAHAKABALQABAHgHADIgEAAQgEAAgDgDg");
	this.shape_8.setTransform(1288.4751,528.7786);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#025E90").s().p("AAAFoQgHgDAAgIQAAgXgKgTQgPgzAPgyQAJgmADgoQACgqgNgpIgEgLIgJgfIgFgRQgfh0A3hqQASgoAIgrQADgTALgRQACgFAFABQAFACgBAGIgDAKQgFAaACAaQAFAtgQAqQgUBAAOBCQAMBAAOBAQAIA2gTA0IgSA7QgNA8AQA6QAEAKgHAIQgFADgFAAIgFAAg");
	this.shape_9.setTransform(1307.0892,531.8807);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#026FAA").s().p("ACKDqQgSgKAFgTQACgUgGgRQgBgYgIgXQgQgagcAFQgGADgBAHQgCAJgIAGQgIAFgHgGQgGgGADgIIAIgOQgiAFgbAJQgnAPgqgGQgMAAgBgLQACgMAMACQALADgBgLQACgHAJABIAfAAQgJgNgKgFQgLgGAEgLQAHgKAKAHQAVAMAXAIQAYAHAYgMQAKgHgHgMQgJgMgNgFQgagKgdgBQgPAGgQADIgJgBQgMABgBgLQACgLALABQAOACAMgFQALgFgKgFIgugaQgfgWgWgeQgGgIgIgGQgMgIgEgNQgHgLAIgJQAMgGAJAKIAKALQAJATAKgUQAJgMAKARQALAdARAZIAFAIQAEAJAHgCQAFgFgFgHQgHgRgEgRQgEgTgPgLQgWgSgTgWQgLgKAJgLQAMgIAJAMIAWAYQAEgYgJgVIgDgJQgFgKAKgHQAKgCAFAJQAMAUAGAXQgBADAEADQAHgDACgIQAFgHAIACQAJADgBAJQAAAbgIAZQgNAkAWAeQAaAlAoASQAMAIAOAGQAKAGgCgLQgCgWgUgKQgHgCgFgGQgMgMAIgNQALgKAOAJQAOAIAEgQQAJgjgFgjQgEgLAKgGQAMgEAIAKQAGAJAAAKQADAvgLAtQgDAGACAGQAIAVACAVQAHAeAWAUQAaAcAAAlQgCAnATAkQAKASgPAPQgKAGgLAAQgIAAgJgDg");
	this.shape_10.setTransform(1312.2742,443.9913);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034D77").s().p("AC6E9QgXgOAHgaQACgagJgYQAAghgLgfQgWgiglAFQgJAFgCAKQgCAMgLAIQgKAGgLgHQgHgIAEgLIAKgTQguAGgkAMQg1AVg5gIQgQAAgCgPQADgQAQACQAPAFgBgQQADgJAMACIApAAQgLgSgOgGQgPgJAGgPQAJgNAOAJQAdAQAeALQAhAJAggQQAPgJgLgQQgLgQgTgHQgjgOgngBQgLABgKAGQgJAGgMgCIgNAAQgPAAgBgOQABgOAQABQASABARgGQAPgHgOgHQgegSgggRQgqgdgegpQgIgLgKgIQgRgKgFgTQgKgPAMgMQAPgHAMANQAIAHAGAIQAHAJAGAEQAGAEAGgSQANgRANAXQAPAnAYAjIAGALQAFALALgCQAGgHgHgKQgKgWgFgYQgFgZgVgPQgegZgZgdQgQgOAOgPQAQgLAMAQIAdAhQAFghgLgcIgFgMQgGgOANgJQANgEAHANQARAbAIAfQgBAFAFAEQAJgFADgKQAHgJALACQAMAEgCAMQABAlgLAhQgNAaAHAVQAHAVALAWQAOAdAaAPQAZAOAZAQQARALASAJQANAIgCgPQgDgegbgNQgKgEgGgIQgQgPALgSQAPgOASAMQATALAGgWQAMgugHgxQgFgPANgHQAQgFAMANQAIAMgBANQAEA/gPA+QgDAJACAHQALAdADAdQAJAoAfAcQAiAlAAAyQgCA2AZAwQAOAYgUAVQgIAHgRABIgHABQgMAAgJgFg");
	this.shape_11.setTransform(461.2197,615.9165);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0180C3").s().p("AADBeIgEgIQgDgEAAgFQAAgFgCgDIgFgKIgFgHQgEgCgCgDIgBgEQgDgGgFgFIAAgBQgCgGgDgEQgDgDgBgEQgCgIgGgGQgGgDgCgIIgBAAIgDgFIgCgFIgJgPIAAgGIgBgHIAAgMQgDgNgBgMQABgFAEgDQADgDAFACIAIACQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAAAQAFgCAEACIARAEIAMABIAFAAIADACQAHACAHAEQAHAEAGAGIAJAKQAGAIAJADQAEABACAEIACABQAHAEgCAIIAAADIAEAPQACAIAEAHQADAGgBAHIAAABQAEAFABAFQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAIgFAIIgKAQIgEAGQgGAJgIAIIgCABQgEABgDADQgIAHgKAFIgDACIgEABQgDAAgDgDg");
	this.shape_12.setTransform(981.425,447.5665);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0180C3").s().p("AB/BqQgHgBgGgFQgGgGgGgBQgJgBgIgDQgGgCgHABQgFACgGgCIgGgCQgKgDgLgBIgBgBQgIgEgJAAQgGgBgGgCQgKgHgNABQgLACgLgFIgBAAQgFAAgEgCIgHgCQgOgDgNgEIgIgGQgFgCgEgEIgPgOQgSgLgQgNQgFgGAAgIQAAgHAFgEIALgIQADgCABgDQABgIAGgDQALgHAJgJQAHgHAGgIQACgCADgCIAFgCQAJgIAMgDQALgGANAAIAVAAQAOACALgHQAFgFAHACIADAAQALgEAJAKIADADIAVANQAMAGANAEQALADAHAJQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAJABAIAEQADABACADIAFAPQAGAPAEAPIAEAMQAFARACASIAAADQgDAHABAHQACASgDASQgBADAAADQgCAKgKAAIgOgDg");
	this.shape_13.setTransform(961.725,437.3046);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#026FAA").s().p("ABTCBQgFgFgHgEQgHgDgDgHQgCgHgGgEQgIgFgHgGQgFgEgGgCQgGgBgFgEIgFgEQgIgHgJgFIgBgBQgGgHgIgFQgGgCgEgFQgIgKgMgFQgMgDgIgJIgBgBQgFgCgDgDIgGgFQgLgHgLgJIgFgJQgEgEgBgEIgJgTQgMgQgJgSQgCgIAEgHQADgFAIgCIANgCQAEAAADgCQAFgGAHAAQANgCAOgDQAKgDAJgEQADgBAEAAIAGAAQANgCAMACQANAAAMAFIAUAJQAMAIAPgBQAIgCAGAFIADABQAMACADAMIACAEIAPATQAIALALAJQAJAHACAKIABACQAIAFAGAHQACACABADIgCAPQgCAOgDAOIgCANQgDAQgHAQQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgFAEgDAHQgHAQgLANIgEAEQgEAFgGAAIgGgBg");
	this.shape_14.setTransform(81.8917,504.3307);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0180C3").s().p("ABKA7QgEgBgEgCQgDgDgEgBIgJgCIgIAAQgDABgDgBIgDAAQgGgCgGAAIAAAAQgGgDgEAAQgEAAgDgBQgFgDgIAAQgGACgGgDIgBAAQgDABgCgCIgEgBIgPgCIgFgEIgFgDIgJgHQgKgGgJgHQgEgDAAgFQAAgDADgCIAFgFIADgDQAAgEADgCIALgKIAHgIIACgDIAEgBQAFgFAGgCQAGgEAHAAIAMgBQAIABAGgEQACgDAEABIACgBQAGgCAFAGIACABIAMAHIAPAFQAFABAFAFIABABQAFAAAFACQAAAAAAAAQABABAAAAQAAAAABAAQAAABAAAAIAEAJIAGAQIADAGQADAKACAKIgBACQgBADABAEQABALgBAJIAAAEQgBAFgFABIgIgBg");
	this.shape_15.setTransform(212.35,477.6483);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#026FAA").s().p("ACEBoQgHAAgHgFQgGgFgGgCQgJAAgIgDQgGgCgHACQgFACgHgBIgFgCQgLgDgLAAIgBgBQgIgDgJgBQgGABgGgDQgLgFgMAAQgLADgLgEIgCAAIgJgCIgHgCQgOgBgNgEIgJgGQgFgCgDgDIgRgNQgSgKgRgNQgGgGAAgIQAAgGAFgFIAKgIQADgCABgDQABgIAGgEIATgRQAGgHAGgIQACgDACgBIAGgDQAJgJALgDQALgHANgBIAUgBQAPACALgIQAEgFAIABIADAAQALgEAJAKIADADIAWALQAMAGAOADQALADAHAIQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAQAIAAAJAEQADABABADIAHAPQAGAOAEAPIAFALQAHASADASIAAADQgDAHACAHQACASgCASIAAAFQgCALgKAAQgHgCgHAAg");
	this.shape_16.setTransform(389.55,514.0179);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#026FAA").s().p("AiBCrQgRgCgQgBQghADgigCQgNgEgHgKQgHgJAEgKIAFgUQADgGgCgEQgGgMAFgKQAHgTADgUQADgPAAgQQAAgFADgFIAEgHQAFgTAMgPQAIgRAQgNIAbgUQAVgKAIgVQACgLALgEIAEgEQALgPAUAGIAHAAIAngEQAWgDATgHQARgGARAFQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQALgHAPgDQAFgBAFADQALAGAKAIQAWANATAQIAQAMQAYASAUAVQACACAAACQADALAJAIQATAXAMAZQACAEADADQAGAPgMAJQgLAEgKAGQgKAGgNgBQgMgCgKAEQgMAHgNAEQgKADgHAHQgFAIgKADQgFABgEADQgQAFgPAJIgCAAQgOADgMAHQgIAGgKABQgVADgPAMQgMANgTAFIgCABQgFAEgIABQgGACgFADQgTAJgVAHIgRAAIgIABIgIgBg");
	this.shape_17.setTransform(693.9529,575.8625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#026FAA").s().p("AiBCrQgRgCgQgBQghADgigCQgNgEgHgKQgHgJAEgKIAFgUQADgGgCgEQgGgMAFgKQAHgTADgUQADgPAAgQQAAgFADgFIAEgHQAFgTAMgPQAIgRAQgNIAbgUQAVgKAIgVQACgLALgEIAEgEQALgPAUAGIAHAAIAngEQAWgDATgHQARgGARAFQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQALgHAPgDQAFgBAFADQALAGAKAIQAWANATAQIAQAMQAYASAUAVQACACAAACQADALAJAIQATAXAMAZQACAEADADQAGAPgMAJQgLAEgKAGQgKAGgNgBQgMgCgKAEQgMAHgNAEQgKADgHAHQgFAIgKADQgFABgEADQgQAFgPAJIgCAAQgOADgMAHQgIAGgKABQgVADgPAMQgMANgTAFIgCABQgFAEgIABQgGACgFADQgTAJgVAHIgRAAIgIABIgIgBg");
	this.shape_18.setTransform(1234.4529,489.5125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#026FAA").s().p("AiDCYQgIAAgHgEIgggKQghgEgggJQgMgHgFgLQgEgKAFgKIAKgTQAEgEgBgFQgDgMAHgJQAKgRAJgTQAGgNADgQQABgFAEgEIAGgHQAIgRAPgMQANgPASgKIAegNQAXgFAMgTQAFgKAMgCQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAQAOgNATAKQADACAEAAIAlAFQAWACAWgDQARgCAQAJQABAAAAABQABAAAAAAQABAAAAAAQABAAAAgBQAOgEAOABQAFAAAFADQAJAJAJAKQARASAPATIAOAQQATAWAPAZIABAFQABALAGAJQAOAaAHAbIACAJQAEAQgOAGQgMACgLAEQgLADgMgEQgMgEgKABQgOAFgOAAQgKABgJAGQgGAGgLACQgFgBgEACQgRABgQAGIgCAAQgPgBgNAFQgJADgKAAQgVgCgRAIQgPALgTAAIgCAAQgHADgHAAIgMABQgVAGgWACIgRgEg");
	this.shape_19.setTransform(50.8838,499.1528);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034D77").s().p("ACZBvQgIAAgIgFQgGgGgIAAQgKAAgKgCQgIgCgIACQgGADgHgBIgHgBQgNgCgMAAIgBAAQgLgEgKABQgHAAgHgCQgNgFgOACQgOAEgNgEIgCAAQgFAAgFgBIgJgCQgQAAgQgDIgKgGQgFgCgFgDIgTgNQgVgJgUgNQgGgHAAgIQAAgIAGgFIANgKQADgCABgDQACgJAHgFQAMgJAMgLQAIgIAGgKIAHgFIAGgDQAKgKAOgFQANgIAQgCIAYgDQASABANgKQAFgGAJABQABAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQANgFAKAKIAEADIAaALQAOAFAQADQAMACAJAJQAAAAABAAQAAAAAAABQAAAAABAAQAAAAABAAQAKAAAKADQADABADADIAGAQQAIAPAEARIAFANQAHARADATIgBAEQgDAIACAHQACAUgDAUIgBAGQgDALgLACQgIgCgJABg");
	this.shape_20.setTransform(675.2,652.1417);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034D77").s().p("AkeCRQAAgFgBgFQgDgeAEgeQADgMgEgMQgBgCABgEQAGgdAMgbIAIgTQAJgZAMgXQAFgMAHgLQADgGAGgBQAPgEAQABQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAOgOAUgCQAYgCAXgHIAogPIAGgEQARgPATAKIAGABQANgBAIAKQAVAQAaAAIAmAGQAXAFAUANQAUAJAQAQIAKAGQAFADADAFQAKAPAMAOQAQARASAPQALAIABAMQACAGAFADIASARQAKAJgBALQAAAOgLAKQgfARghANQgQAIgOAKQgIAGgIACIgQAIQgZADgYAAQgHAAgHABQgIACgIgBIgCAAQgVAFgUgHQgXgFgUAHQgLADgLgBQgQgCgQAFIgCAAQgTgBgTACQgGAAgFABQgLACgKgGQgLgDgMABQgPADgQgBQgNABgKAHQgLAHgOgBQgNgBgNACQgSgDgCgSg");
	this.shape_21.setTransform(978.1903,676.2158);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#025E90").s().p("ABUCkIgNgCQgIAAgIgEIgCgBQgVgBgSgNQgTgKgXAAQgKAAgLgFQgPgGgQAAIgCAAQgSgIgTgDIgLgCQgLgCgIgIQgKgGgLgCQgQgCgPgGQgLgCgMAEQgOADgMgEQgMgGgOgCQgPgIACgRIACgKQAGgeANgbQAGgKAAgMQAAgDABgDQAPgaATgXIAOgRQAPgVASgSQAIgLALgIQAEgEAGAAQAQABAPAFQAAAAABABQAAAAABAAQAAAAABgBQAAAAABAAQARgJAUAEQAXAFAYgBIAqgCQAEAAADgCQAUgJAQAOQACADADABQAOACAFAMQAPAWAZAHIAjARQAVAMAOASQASAOALAUQACAEAFAEQAEAEABAGQAFASAIAPQAKAVANAUQAIAKgCAOQAAAGAEAFIAMAVQAHALgEALQgFAMgMAHQgjAIgkACQgRAEgRAFQgIADgJAAIgSADQgYgEgYgIg");
	this.shape_22.setTransform(365.5304,634.0777);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#025E90").s().p("AhkECQgLgFgFghQgHgigJggIgJgjQgXhQAuhFQAWggABgoQgCgNAKgFQAJADABANQARArgWApQgJAUgNAUQgSAbAJAgIATBBIAwgwQAEgJgDgLQgKg0ALgyQACgKAFgIQATgegPghQgUg1APg4IAIgVQACgGAHABQAFAEgDAGQgIA7AWA3QAGASAJgQQAdgxgCg5IgBgWQgDgKAGgEQAKABgBAMQAJAhAAAjQABA1gjApQgIAIADANQAOAwgIAxIAAAIQgDAYgNARQgPATgFAXQgEAXgHAZQAtg9AChGQAWhZBOgxQAPgNAKAFQABALgQAHQguAkgWA1QgMAogDAqQgNBvhhAzQgXALgLAAIgHgBgAhWDmQAgggAIgxQgvAmAHArg");
	this.shape_23.setTransform(211.1084,591.186);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#025E90").s().p("AghGJQgRgDgUgsQgXgtgagrIgZguQhAhoAnh0QATg3gOg4QgIgRAMgLQAOAAAHASQAoA3gPBBQgGAhgKAhQgOAuAYAqIA0BVIAxhWQAEgPgKgOQghhGgFhMQgBgPADgNQARgygigqQgyhDAAhUQABgRADgQQABgKAJgBQAIADgBAKQAMBXA1BGQAPAWAHgaQAVhQgXhQIgKgfQgIgNAHgIQAOgCAEAQQAYAtAOAxQAVBLghBHQgJAPAJAQQAnA/AHBJIADALQgDiHBchjQAQgYARADQAGAHgHAJIgPAQQgyBFgKBUQgCA9AMA8QAXCih3BuQggAegRAAIgEAAgAgeEeQgHAmANAYQAgg6gHhIQgYAegHAmgAA1BpQgPAhACAiQADAigBAmQArhogYhjQAEAjgMAdg");
	this.shape_24.setTransform(1127.5221,553.5849);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#025E90").s().p("ABGGFQhOgSg0gxQgMgOgWgDQgogFASgdQASgegsgJQgpgMAcgZQAbgZgbgTQgkgVAfgaQAZgagtgJQgcgFAHgVQAJgXgfgCQgqgJAUgbQATgXgjgFQgegHAKgYQAVgggvADQgZAAgBgSQgBgMgKgKQgPgOAOgNQAUgMAUAMQAbAQAfAKQAiAJgBAaQAEAWALAUQAKASAUALQATAKAHATQAGgkgkgWQgMgGgBgKQgDg1hCgUQgZgKAOgRQAcgdglgVQgUgOARgRQArgdgfglQgKgNgBgOQAAgbAigDQAigBACAaQAFAYgBAXQAAAaAGAZQAHAZgHAaQgLAeApATQAXAKAIAUQANAjAoAVQAhAQgSAaQgPAWAIAUQALAUgFAbQAmgVgHgdQgIgWAbgLQA3gZghguQgNgQAQgNQAigbgogTQgWgMANgQQAQgUgXgNQgRgKAEgOQAKgVADgWQADgWANgUQALgXAbAAQAaAKgNAWQgIAXgDAWQgDAXATAWQADAHgCAJQAAAKADAJQAEANAPgBQANgHgLgLQgOgPAIgQQAMgSgBgUQAAgZAegEQAeADgCAZQgCAZAFAYQARAogfAiQgQAQAHATQAIAQgSAJQgeANgGAWQgGAVgBAWQAAAQgDANQgCANgTAKQgKAHADALQAFAjgtAMQhDAbAMA7QACAHgDAHQgMAeAaAYQAFALAPgDQAogJABAgQAGAXAWAQQAKAJAOgGQAKgIACgXQABgXgIgKQglgaAxgNQAygTgUgmQgKgOALgMQAkgigygYQgagNAQgTQAugoglguQgJgLAJgIQAcgaABggQABgXAdgBQAaAGgGAXIgEA1QgDAbAUAZQADAEgDAFQgjAiAmAhQAAAJAKAGQANgCAFgKQARgOgCgSQgGgYAYgPQAQgJgGgLQgXgZAVgbQADgQgJgUQgGgQAHgOQAHgQAVAAQAUADADAQQACAJgBAKQgBAZAXARQAcAUgXAYQgYAYAHAcQAIAYgZAPQgaAUgNAbQgMAagTAYIAAAFQAFAYgFAHQgGAHgfAGQgvALAQAkQAKAQgRALQgWAPADAXQABAUgDATQgGApgpAAQgLAAgOgDg");
	this.shape_25.setTransform(921.5232,510.6492);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0180C3").s().p("AgmB9IAAgPQABgHgGgGQgFgEADgGQAEgMgNgEQgOgBAEgPIAAgCQgHgSgMgQQgGgFACgJQACgJgHgJQgGgIAHgHQAHgGgBgJIABgHQAAgGAGgBQAGAAABAGQACAFgBAFQgDAIABAFQAGAKgGAJQgCAEAEADQAHAFgCAIQAAAHAEAEQACAEADABQADgCAAgEQAKgLgJgMQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAAAgBQAHgSgEgTQgBgIAHgDQAHABABAIQAAAMAIAIQACAEgCAEQgKAQAMANQAFAHgIAFQgNAIAJAMQAEAEgDAFQgGAOAOAHQANAEgKAKQgEAMAFAKQAEADADgEQAGgFACgIQAAgMAKADQAEABABgEQAIgIgEgLQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQADgVgSgJQgLgFABgMQABgEgDgCQgIgIABgKQADgRgOgLQgFgDACgGQACgHgEgFQgJgMAFgPQABgIAAgJQgBgJAIgBQAIACAAAIQAAAHAEAHQACAFgEAGQgDAEADACQAFABABgFIAAgHQAAgDABgCQAIgQgHgRQgDgHAHgEQAHAAACAIQAFAPADAPQABAGgFADQgFAFADAHQAEAGgGAEQgKAHAJAJQAEAFgDAGQgJAQAOAJQAIAEgCAHQgDAKALAIQgBgKADgHQACgHgEgHQgFgKAJgGQAKgHAEgMQACgHAGgEQAMgHgDgKQgBgTACgSQAAgIABgIQABgJAJAAQAJABAAAKQAAAFgDAEQgIANALAKQAFAHgFAEQgKAIAHAKQAEAGgHAEQgSAHAAATQgBADgDACQgKAIACANQAHgLAIgJQADgIABgHQAAgKAJgDQAJgDAHgGQAFgEAGAEQADAFgEAFQgCADgBAEQAAAHgHAAQgMgBAFALQADAIgIADQgJACAFAIQAFAJgLADQgJABADAIQACAHgIACQgMAEAGAJQAJAJgKAIQgHAGAHAJQAIAJgLAEQgMADAFALQAEAKgKACQgGABgEAFQgOASgUAGIgHABQgLAAgCgOg");
	this.shape_26.setTransform(1194.9058,473.9544);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#034D77").s().p("AiSHcQgDgbABgbQADgfgXgUQgRgPAKgWQARgwgxgPQgggIgGgKQgGgJAGghQABgEgBgDQgUgggNgkQgNgkgagcQgbgUAIggQAIgngZghQgYgfAdgcQAYgXgBgiQgBgNACgMQADgWAVgEQAVAAAIAVQAHAUgGAVQgKAbAEAWQAVAkgYAiQgGAQARALQAYAVgGAhQgCAYASATQAFAOANACQALgHAAgNQAngtgkguQgDgGADgGQAVgigDglIgFhIQgGgfAbgIQAeABABAfQABAsAdAjQAJALgJAPQgmA+AvA3QASAZgcASQg0AhAlAtQAMARgKATQgVA0A0AZQAzASgmAkQgJANACAfQABAgAKALQAPAIAKgNQAXgVAGgfQABgsAqAMQAPADAFgNQAKgSAIgRQAHgSgKgWQgDgIACgKQAIgkgQghQgPghgigOQgvgRAGgwQADgOgKgJQgUgOgDgSQgCgTgBgVQgBgdgGgdQgFgdgggSQgSgNAIgVQAHgbgQgVQghguASg2QAFghgCgiQgCghAfgFQAfAGAAAhQgBAbAMAZQAJAWgPAUQgLAPAOAKQAPAAAEgRQADgMAAgNQgCgNADgJQAUgegEgfQgDgegIggQgNgdAbgNQAcAAAKAeQAOAbAEAeQADAeAKAcQAFAUgTAOQgXASAQAaQAOAWgXARQgpAZAjAkQARASgOAWQgiA+A5AiQAcAPgIAeQgIAnAoAdQgFglALgaQAJgdgQgdQgTgjAigWQAqgcANgvQAIgcAYgNQArgagLgpQgIgkAHgiQAHgigBgiQgBggAGgfQABgkAjABQAkAEAAAlQgBATgKARQggAyAsAnQASAYgVASQgmAdAcAoQAPAXgaAOQhFAagCBJQgBANgMAIQgmAdAGAyQAHgZAUgPQAVgPAKgYQAMgbADgeQAAgkAjgMQAggNAcgWQAVgQAUAQQAPASgQAUQgKAMgBARQgBAYgaAAQgwgEAVArQAKAhgfAJQgkAHAUAfQAUAlgrAMQggAEAJAfQAIAcgdAHQgvANAZAjQAhAigmAdQgcAZAcAiQAdAigqAQQguANATAoQATAogpAGQgXAFgNATQg1BChRAYQgPAFgMAAQgrAAgFg3g");
	this.shape_27.setTransform(286.9894,630.2526);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#026FAA").s().p("AgZEGQgSgcgQgcQgqg/gDhNQABgegMgbQgag9Aeg8QAHgRARgGQANgGgDAPQgQBCATBAQAOAxAIAzQAAAWAIAaQABgigIgeQgHgfgCgfQgDgsAFguQAMgmgCgmQgEg+AEg9QAAgEADgCQAFgBACAFIAEAIQAgBQgMBWIgKBYQASgSABgYQAEgzgBgzQACgrAfgdQAJgJAMAFQAGAIgHAJQgRAkAAAoQABAWgBAXQABAugUAqQgMAXgEAaQgHAYADAdQAUgbACgcQAJg/Afg5QAagtAPgzQADgNAHgKQAFgIAIACQAFAEgEAIQgIAaAEAaQAIAugbAkQgeApgPAuQgGAKAIAGQAIACAFgJQAQgXAHgaQAHgXAPgUQAEgGAGABQAFAEgCAHIgEATQgJAZgDAbQgCA0gyAQQgTAGgLARQgaAngCAvQACAbgJAYQgEAKgFAAQgEAAgGgIg");
	this.shape_28.setTransform(664.4577,550.2055);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0180C3").s().p("AAECdQgFgPABgQQgBgcgQgYQgGgKgMgEQgegJgBggQgCgQgFgPIgDgLQgBgFADgCQAEgBACAEQAJAMAEAOQAFAQAJANQADAGAFgBQAEgEgDgGQgJgcgSgYQgQgWAFgcQACgQgFgQQgDgEAEgDQAFgBACAFQAFAGABAIQAJAfAQAbQATAjAFAlQACARALAQQACgRgEgPQgCgPgHgOQgNgZABgcIAAgbQAAgYgKgWQgEgGAEgFQAGgDAGAGQASARACAaQgBAfACAfQABAPALALIgGg2QgIg0AUgwIACgFQACgDADAAQAAABABAAQAAABAAAAQAAABABAAQAAABgBAAQADAlgDAlQgBAXAHAXQADAcgBAbQgHAkgDAoQAEgQABgNQAFgfAIgeQAMgmgKgoQgCgJAIAEQAKADAEAKQASAlgPAkQgIARABASQgCAugZAmQgKASgLAQQgDAGgDAAQgDAAgCgHg");
	this.shape_29.setTransform(1061.0086,448.9506);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#025E90").s().p("AAKGkQgOgoACgqQgChNgrg/QgRgagfgKQhRgZgDhVQgEgsgPgpIgGgfQgFgKAJgHQAKgBAGAJQAYAgAMAmQAMAqAaAlQAGAPAOgDQAMgLgIgPQgahMgvhCQgrg6AMhJQAGgqgNgrQgGgLAJgIQAMgDAHANQAMAQAFAVQAYBSArBJQAxBcAOBmQAEAuAhArQAFgwgLgmQgHgqgUglQghhDADhMQgCgkACgkQAAhAgcg6QgLgQAKgNQASgHAPAPQAyAuAEBFQgBBTAGBSQABAnAeAeQgHhIgJhIQgViKA1iBIAHgNQACgIAIABQAGAEgBAHQAAAxADAxQAEAygHAxQgDA+ATA9QAJBKgGBJQgDAygMAxQgMAxACA3QAMgqABgkQANhRAXhQQAehpgZhqQgGgXAVAJQAcAJALAcQATAwAGAxQAGAxgZAxQgUAtACAxQgFB7hEBlQgZAvgdArQgJAOgHAAQgIAAgHgQg");
	this.shape_30.setTransform(175.5146,572.2838);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0180C3").s().p("AgfBjQgIgEACgJQAEgagNgWIgOgQIgKgLQgLgMANgMQAIgIALgEQAMgFAEANIAGARQABAFAEAFQACAEAEAAQAFgCABgEQAFgYgRgSIgUgOQgNgHAJgLQAGgKAJgFQAPgIAHAPIAJARQABAGAGgBQAFgCAAgGQABgJAAgKQACgaAaAIQAFACAFAEQAOAOgNAOQgKAIgHALQgDAEAAAFQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAIADgEIADgGQAGgKALAAQAOAFACARQABAMgNAFQgHAEgJABQgPACgJALQgBABAAAAQgBABAAAAQAAABAAABQAAAAABABQACACADgDIAEgEQASgMALASQAJAWgWAHIgTAFQgVAJgKAUQgGALgIAJQgEAGgGAAIgFgBg");
	this.shape_31.setTransform(98.2265,449.1251);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#034D77").s().p("Ag8C8QgPgIAFgRQAFgxgYgqQgMgRgOgOIgTgVQgVgYAYgWQAQgPAVgIQAYgJAHAZIAKAhQADAKAHAIQAEAIAIAAQAJgDACgJQAHgSgHgYQgHgYgPgOQgTgOgUgLQgZgOARgWQAMgSASgKQAcgPANAcIARAhQADAKALAAQAKgFAAgLQACgSgBgRQAFgzAwAQQAKAEAJAIQAcAZgaAaQgSARgOAUQgFAJAAAJQgBAEADACQAEABADgDIAFgHIAHgKQAKgVAXABQAZAKAFAgQABAWgYALQgOAGgQACQgdAFgSAVQgFAEADAGQAFADAFgFIAIgHQAigZAVAlQARAngpAOIgkAKQgpARgTAnQgNAUgPASQgIAKgLAAIgJgBg");
	this.shape_32.setTransform(794.3496,666.5101);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#026FAA").s().p("AgMCaQgMgEABgNQgDgngagcQgMgLgNgIIgSgNQgUgQAPgVQAKgNAPgKQAQgKAKASIANAXQAEAHAGAGQAFAFAGgCQAGgDABgHQAAgkgegVQgRgIgRgGQgVgHAJgTQAGgPANgLQASgQAPATIASAXQAFAHAJgCQAFgFgBgJQgCgOgCgNQgFgnAnAEQAJACAHAEQAaAPgQAYQgLAQgIASQgCAHABAHQAAADADABQADAAABgCIAEgHIADgIQAFgSARgDQAVAEAJAXQAEARgQAMQgKAIgMADQgVAJgKATQgEAEADADQAFACACgFIAGgFQAVgZAXAZQATAbgdARIgbANQgcAUgJAhQgHARgIAQQgGALgLAAIgDAAg");
	this.shape_33.setTransform(543.6676,535.7848);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#025E90").s().p("AgnD0Qgvgoghg1QgshRhDhBQgognAegvQApgyAmA1IARAhIgQhNQgEgZAVgNQAagQAhgCIgGgKQgbguAygUQAtgQAuAPQAZAJABAbQAAAZgFAYQgEAZAGAZQABAKAJABQALgBACgLQADgQgDgRQgFggADgfQADgvAuACQAWABAUAHQA8AWgcA5QgYAqgdAmQhIBZgRBxQgDATABATQACATAQgKQAJgGAFgJQAdg1ANg7QAGgaAKgYQAYguAtAPQA2AVgHAxQgIAhgYAXQhVBXhXBWQgUASgWAAQgWAAgYgTgAhNgHQgYBUA6BCQANARAEgVQAVhIgGhJQgEg0gaguIgkBhg");
	this.shape_34.setTransform(46.4651,569.3603);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#026FAA").s().p("AgJCZQgggVgWgfQgggugsgkQgagWAPgdQAXghAaAeIAMAUIgOguQgEgQAMgIQAQgLAUgEIgEgFQgUgbAegPQAbgLAcAGQAQAFACAQQACAPgCAPQgBAPAEAOQABAHAGAAQAHgBABgHQAAgKgCgKQgFgTAAgTQgBgdAdgBQANgBANAEQAlAKgOAkQgMAagQAZQgnA6gFBFQAAALABAMQACALAKgHQAFgEACgGQAPghAGgkQABgQAFgQQAMgcAdAGQAiAKgCAeQgDAUgNAPIhgByQgNANgPAAQgMAAgNgJgAguADQgKA0AnAmQAJAJABgNQAIgtgHgsQgFgegSgbIgRA8g");
	this.shape_35.setTransform(1040.2695,542.8264);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0180C3").s().p("AgLBJQgOgMgKgQQgOgYgTgTQgMgLAJgOQAMgPALAQIAFAKIgFgXQgBgIAHgEQAHgFAKAAIgBgDQgJgOAPgGQAOgFANAFQAIADAAAIQAAAHgBAHQgCAIACAHQAAABAAABQAAAAABABQAAAAABAAQABABAAAAQADgBABgDIAAgKQgCgJABgKQABgOAOABQAHAAAGACQASAHgJARQgHAMgJALQgVAbgFAhQgBAGAAAFQABAGAFgDIAEgFQAIgPAEgSIAFgOQAHgOAOAFQAQAGgCAOQgDAKgHAHIgzAzQgGAFgHAAQgGAAgHgFgAgWgBQgIAYASAUQAEAFABgGQAGgWgCgVQgBgPgIgOIgKAdg");
	this.shape_36.setTransform(490.0236,507.3748);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#034D77").s().p("Ag+F9QhLg9gzhTQhGh/hqhlQg+g/AvhJQAbgnAkABQAkABAZApQAOAaANAbQgMg+gOg7QgFgoAggTQAqgaA0gDIgJgPQgshJBPgfQBJgZBHAYQAoAOACAqQAAAngHAmQgHAnAJAmQABARAPACQASgCADgRQAEgagFgaQgIgyAFgyQAFhIBJADQAiABAgALQBeAjgsBZQglBBguA7QhxCNgcCxQgEAdABAeQADAdAagOQAOgKAHgPQAuhSAWhcQAIgpAQgnQAmhHBHAWQBVAigMBNQgMA0gmAkQiGCIiICGQggAdgjAAQgiAAgngfgAh5gLQgnCEBcBoQAUAaAHghQAghxgJhzQgGhQgphJIg4CYg");
	this.shape_37.setTransform(742.6528,637.3627);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#026FAA").s().p("AAcDSQgNgIgKgKQgPgPgWgDIgGgCIgYgGIgKABQgXgBgWAEQgJABgIgBQgIgBABgHQABgHAHgDIAJgEQAEgCgEgDIgPgJQgFgEgCgGQgBgGAGgCQAHgBAGACIApAOIAgAIQABAAAAAAQABAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBIgFgGQgIgKgLgHIgegTQgMgHgJgKQgJgJgNgDIgTgGQgJgDgKgBQgHAAgGgEIgOgHQgEgDgDgFQgEgJAJgDQALgDALACIAQAFQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIgPgUQgGgFgFgIQgFgGABgHQABgFAFAAQAGgBAGADQARAKAMAQIASAUIAOAUIADADQAAABABAAQAAAAABAAQAAABAAAAQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIgEgQIgDgQQgCgEABgDQABgJAJABQALADAFAKIAFAVQADASAJARQAEAHAHAFIAIAHQAXAXATAZIATAcIARASQADADADABQABAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIgJgQIgUggIgMgWIgagqQgLgSgJgTQgGgOgBgOQgCgOgFgNQgEgGgHgFQgOgLgQgHQgQgGgMgLQgHgGAFgGQACgEAFAAIAIgBQABAAABAAQAAgBABAAQAAAAAAgBQAAgBgBAAIgFgFIgVgRQgIgHAAgKQAAgFAEgDQAGgCAFABQANABAIAKIAJAJQAIAKAGALIAGAHIAFAGQACAGAGADQABAAABAAQAAAAAAAAQABAAAAgBQAAAAAAgBIgBgDQgFgOACgPIAAgJQAAgGAEgEQAJgJAHAJQAHAJgBAKQABAfAKAdQAFAOABAOIAHAiQABAKAEAKIABADQAAAAABABQAAAAABAAQAAABABgBQAAAAABgBQAEgEABgFIAJgnIAJgdQABgFAEgCQAHgDACAIQACAMgEALQgHAcgEAeQgDARAHAPIAWAtQAHASAJARQACAEAEADQADADADgEQADgFAAgFIAGgpQABgJgDgJQgDgLgFgKQgGgRgEgSIgHgpQgEgUABgUQAAgYgKgXQgFgLgKgIIgFgGQgFgFgGgDQgOgIgKgNQgGgIgEgKQgBgGAEgEQAEgFAGACQAIADAGAGIAIAKIAMAOIAJALQADACADABQABAAAAABQABAAAAgBQABAAAAAAQABgBAAgBIAAgBIAAgFQgBgOgDgOQgEgSALgPQAEgEAEACQAHAFABAJIAGAnIABARQAAAMAEAMQADAIAGgGQAFgFACgGQAGgXAIgXQACgKAHgJQADgEAFgDQAHgCAEAGQADAGgCAGIgIAYIgFAUQgEAPgJANQgLARgIAUQgFAQABASQABARADARQACAPAFAPIAFAKQAEAFAEgFQADgEABgFQAGgYACgaQABgIgBgIQgBgPABgOIgBgMQAAgSAJgPQAGgGAFAIQACAFAAAHIAAACQAAAAABAAQAAABAAAAQAAAAAAAAQABAAAAABQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAFgJAAgKQABgKAGgHQAJgHAJAJQAEAGAAAIQgCANgHALQgKARgHATIgGAQQgCAJACAJQABAGAFgEIACgDIAGgJQADgDAAgEIAEgQIAAgHQABgFADgDQAEgFAEAFQADAFABAFQABAEADACQAEgBABgEIAKgQIASgXIAEgEQAEgCAEACQAEABAAAFQABAMgIAJIgTAVQgLAMgKAOQgJALgLALQgQAPgLAVQgNAagKAbIgDAMQgDAJgFAJQgGANgCAOIgDAUIAAAFQAAAKAJgEQAHgEAEgGIAJgPQAGgLAJgKQAUgUAEgcQACgQgDgQQgCgIABgHQAAgHAGgFQAGgEAEAGIADAHQACAEADgEIAHgNIAIgKQAJgIAFAKQACAGgDAGQgEAMgGALQgJARgHASQgBAEAAAFQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIACgBIAGgKIARgbQAGgLAHgKQAFgGAHADQAEACAAAEQACAKgFAJIgPAYIgJAPQgIAMgMAKIgQAOIgDAFQAAAAAAAAQgBAAAAABQAAAAABAAQAAABAAAAIACAAIAEgDQAKgIAMgBQAMgBACALQAAAHgGAFQgOAMgSAFQgPAFgNAHIgHADQgMAGgJALQgHAIgJAGIgUANQgJAEgIAAQgLAAgLgGg");
	this.shape_38.setTransform(148.2543,479.1418);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0180C3").s().p("AAGBtIgLgCQgFgCgFgDQgGgEgHgBIgEAAIgQgBQgKAAgJgEQgEgBgBgDQgBgGAGgCQAHgBAGACIACABIABAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgDgBIgKgEQgHgEgGgEIgHgGIgMgKQgEgDAAgGQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQADgDADACIAKAIIANALIAFAEIABAAIAAgBIgCgEIgOgPIgJgJQgCgDAAgDQABgGAFACQAEACADADIAFAFQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIABgEQABgEAEABQADACACADIACAIQABAIADAIQAHANANAHQAGADAFAEIAHAGQADADAEABQAFAAgBgFIgBgCIgFgKQgDgHgGgFIgGgHIgEgGQgJgMgLgKQgJgJgLgFQgHgEgGgEIgPgIIgNgIQgFgDgCgGQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIADABIAMAJIAIAGQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgGQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIADADIABAEIAFAIIACACIAFADIACABQAAAAABAAQABAAAAAAQAAAAAAgBQAAAAAAgBQAAgEgDgEIgGgHIgOgPQgFgEgDgHQgCgDABgEQADgGAGACQAEACACAFQACAFAEAEIABAAIAAgBIAAgBIgBgGQABgFAEACQAIAGACAJIACAGQADAHACAHIACAIQAGAMAHAMIADADQABABABAAQAAAAABAAQAAAAABgBQAAAAAAgBIABgGQAAgIgCgIIgDgRQgCgJgGgHQgHgJgJgGQgGgFgEgHIgGgJIgIgLQgDgCABgEQABgEAEAAQADABACACQAFADADAEIAOAVIAFAEQAFACAAgEQAAgHgCgGIgDgIIgDgVQgBgEADgEQAAgBABAAQAAAAAAAAQABAAABAAQAAAAABAAQAIAGABAKQAAAHADAHIABADIAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIACgDIADgHIAEgJIACgGQACgEAEgDQADgCACACQADABAAADQAAAGgCAFQgCAIgGAGIgEAGIgCAEQgDAGgBAGQgBANADAMQAEAKACAKIADAVQABAKAAAKIAAALQAAAFACAEIAIAUQABACADACQAAABABAAQAAAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBIADgUIADgaQABgJgEgIIgPgaQgDgFgBgGQgBgEAEAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABIAJANIALASIAEADQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAIAAgCIgBgKIgCgSIgCgPQAAgQgFgQQgCgFACgFQACgGAGADQADACABADIACAEQADAHgBAIIABACQAAAAAAAAQAAABAAAAQABAAAAAAQAAgBAAAAQADgCAAgEIABgDIACgFQABgHADgGIADgGQACgGAGgDQADgBADAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQACAFgDAFIgIAMIgBADQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIAEgBQABgBAAAAQABAAABAAQAAAAABABQAAAAABAAQADADgCAEQgFAHgGAGQgIAGgEAIQgDADgBAEQAAAHABAHQACAIAAAIIgEAVIgGAZIgDANIgFATIgCAKIABACIACgBIADgCIAFgMIAGgRQAFgQAHgPIADgFQADgEAAgEQACgJgBgJIgBgMQAAgGAFgDQAEgCACAEIACAEIAAAJIABAIQAAABAAAAQAAAAABAAQAAABAAAAQAAAAABAAIABgBIABgCIAEgNIAFgNQADgKAHgIQACgCAEgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQACADgBAEIgDAJIgFAMQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAIACAAIAHgFQAFgDAGAAQAFAAgBAFIgCAFIgFAGIgGAEIgJAFIgJAGQgFADgDAGQgDAGgFAGIgMAOIgHAMIgBAEQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIAPgJIASgOQACgCAEgBQABAAABAAQAAABABAAQAAABABAAQAAABAAABQAAADgCADIgGAHQAAAAAAAAQAAABAAAAQAAAAAAAAQABABAAAAIAFAAQAEABACADQABADgDACIgJADQgLACgMAEIgFABIgLAHIgDACQgKAFgFAKQgEAHgFAGQgGAHgKAAIgDAAg");
	this.shape_39.setTransform(732.1277,433.1786);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#034D77").s().p("ABCHoQgegQgZgYQgjgkgzgIQgIAAgHgDQgcgJgcgEQgMgBgMABQg0AAgzAIQgVADgUgCQgRgDACgRQACgRAPgGIAVgKQAKgEgJgGQgRgKgRgLQgMgJgEgOQgEgPAPgEQAPgDAPAFIBgAgQAlALAlAIQAGACAEgFQADgFgDgFQgEgIgHgHQgVgXgZgSIhGgsQgbgQgWgXQgVgWgdgGIgugOQgVgGgWgCQgQgCgPgHIgggSQgLgHgGgMQgJgUAVgIQAZgGAaAFIAkAKQAGADAEgEQACgGgEgEQgPgYgTgWQgPgOgMgRQgKgOACgRQACgMAMgBQAOgBAMAHQApAYAdAkIAoAxIAiAvIAGAHQADAFAFgBQAGgEgCgGIgIgmIgJgkQgCgJABgKQACgTAUACQAcAFAJAaQAIAYAEAaQAJAqAUAmQAIARARALIASARQA2A1AtA8QAWAgAXAfQATAXAWAVQAGAGAIACQAFACAEgEQADgEgDgGIgVgkIgxhMIgcgyQgggwgdgyQgZgqgVgsQgOghgDgjQgDgggNgdQgJgQgPgKQgggagngRQgkgOgdgaQgPgNAKgPQAGgJALAAIATgBQAJgBgFgHQgEgIgHgEQgZgTgYgUQgUgQABgZQAAgLAKgGQAMgGANACQAeAEATAWIAVAWQATAWANAaQAGAJAIAIQAHAGAEAJQAGAOAOAGQAGADAAgHIgBgIQgMghADgiIABgVQAAgOAKgLQAUgTASAVQAOAUAAAYQACBIAXBFQAKAfAEAhIAQBQQADAYAIAYIACAFQAEAIAGgGQAIgKADgMIAWhbQAJgjAMghQADgLAJgGQARgHAFASQAEAbgJAbQgRBDgKBFQgHAoARAjIAzBqQARAqAWAnQAFAJAIAIQAIAHAHgJQAGgMABgNIANhgQACgVgHgUQgHgZgKgXQgPgogKgqQgJgxgIgwQgHgvACgvQgBg5gXgzQgMgbgXgTIgOgOQgKgLgOgIQghgRgXgfQgOgUgJgWQgEgOAKgKQAKgKAOAEQATAGAOAPQAKAKAJAMIAcAhIAWAaQAFAFAHADQAIADABgJIAAgCIAAgLQAAghgHghQgKgqAagjQAIgKAKAGQARAMACAUIAOBcIADAmQAAAdAJAcQAHATAOgPQALgLAFgPQAOg1ARg1QAHgYAQgUQAHgKALgGQARgGAKAPQAGANgEAPIgTA3IgNAvQgJAjgUAeQgaApgSAtQgOAmAEAqQACAnAHAnQAFAkAMAlQAFALAHALQAIANAKgNQAIgJABgLQANg7AGg9QABgSgCgSQgDgiADgiIgCgbQgBgqAXgjQAOgOAKARQAFAOABAPIAAAFQABADADABQAEAAABgDQAMgWABgYQAAgWAOgQQAWgRAVAUQAKAOgCASQgEAfgRAaQgWAogQAsIgOAlQgGAWAEAVQAEAOALgJQAEgDACgFQAGgLAIgKQAFgHACgIQAFgTAEgTIAAgSQACgKAHgIQAJgKAJAKQAHALAEANQAAAKAIADQAJgBADgKQALgUANgSQATgcAWgZIAKgIQAIgHAJAFQAKAFABALQABAbgSAVQgVAagWAXQgaAdgYAeQgVAcgZAYQgmAmgaAwQgfA8gVBAIgJAcQgGAVgLAUQgQAegDAiIgIAvIgBAKQABAYAWgJQAQgIAJgQIAUgjQAPgaAWgVQAugvAJhCQAFgmgIgmQgEgRABgRQACgQAMgLQAPgLAKAPIAHAQQAFAJAFgJIARgdQAJgPALgLQAUgSALAYQAFAPgGAOQgKAagNAaQgVAogQAqQgEAKABAKQgBADADACQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABgBQAIgLAGgMIAohBQAOgZARgXQALgPAQAIQAJAEABAKQAFAYgNAVQgQAcgTAcQgJARgKARQgVAcgaAYQgUAPgRASIgIAKQgDADACADQADABACgCIAKgGQAXgSAcgDQAcgCAEAZQAAAQgNALQggAegrALQgiALggARIgPAHQgdANgVAZQgPAUgVAOIguAdQgVAKgVAAQgZAAgZgPg");
	this.shape_40.setTransform(1241.1739,592.932);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#034D77").s().p("EBwzAOUQgYgTg4gFQgzgIhFgHIh4AMIh4AAQgdABgeAKQgeAKgfABIh4ADIh4gNIh4AMIh4gEIh4ACIh4gNIh4gHIh4gQQgeACgeAQQgeAPgeACQgegBgegJQgegIgegCIh4gGQgeACgeAIQgeAJgeABQgegCgegMQgegNgegCQgeACgeAPQgeAPgeACIh4ACQgegCgegOQgegPgegCIh4gFQgeABgeAMQgeAMgeACIh4AIIh4gTIh4gNQgeACgeAQQgeAPgeACQgegCgegOQgegOgegCIh4ARIh4gHIh4ADIh4AEIh4AJIh4gLIh4AAIh4AMQgegCgegQQgegQgegCQgeABgeAIQgeAIgeABIh4gLQgeACgeALQgeALgeACIh4gJIh4AOQgegCgegRQgegRgegDIh4APIh4gEIh4AQIh4gLIh4gOQgeABgeAIQgeAIgeABIh4gGIh4gMQgeACgeAOQgeAOgeACIh4gFIh4gDIh4gPIh4gJQgeACgeAMQgeALgeACIh5ADQgegCgegOQgdgOgegCIh5ADQgeABgdAJQgeAJgeABIh4gGIh4gRQgeACgeAPQgeAPgeACIh4gHIh4gQQgeABgeAKQgeAKgeABIh4gDQgegBgegNQgegMgegCIh4AOIh4APIh4gCIh4gKIh5gKIh4gBIh4AHIh4gKIh4gDIh4gJQgeACgeAQQgeAQgeACQgegCgegMQgegMgegCQgeACgeAKQgeALgeACQgegCgegIQgegJgegBIh4gIIh4gDIh4AJQgeACgeAKQgeALgeABQgegCgegOQgegOgegCQgeABgeAOQgeANgeACQgegCgegJQgegIgegCIh4AEIh4gDIh4gSQgfACgeAPQgeAOgeACIh4gGQgegBgegJQgegJgegBQgeABgeALQgeALgeABIh4gQIh4ANIh4gGQgegBgegKQgegJgegBIh4AGIh4ABIh4gNQgeACgeAQQgeAQgeACQgegBgegJQgegJgegCIh4gPQgeACgfAPQgeAPgdACIh4gJQgfgBgegLQgegLgdgBIh4AGIh4AIIh4gDIh4gEIh4gEIh4APQgggCgegLQgegLgcgCIh4AGIh4ADQhGAFgyAFQhygFAEgFQgEgKgDhqQAFgyAEhCIAFh0QgCgbgQgdQgPgdgCgfIAMhzIATh0IgFh0IgIhzIAAh0IgEh0IADh0IgLh0QACggAMgdQANgeABgYQgGg2gXgcQgYgcAlgFQAwgFAVAJQAVAJAvALQAuAKAVAJQAUAKAvAJQAvAIAWAAQAWAAAvAJIB4AhQAbAFAggBQAhgBAhAHIB0AtIB5AaIB2AnIB3AKQA7AKA6AIQAdAIAbASQAbASAcAHQA6AOA7AMQAdADAfgIQAfgIAeACQAdAFAcAQQAcAPAeAFIB3ABIB3gGIB3ADQAdADAdANQAeANAdADIB3gRIB2gQQA8AIA7AGIB2gSQA7gBA7gDQAegBAfAIQAeAIAegCIB2gPQAdgFAbgSQAcgRAdgGIB0gaQAogHASgBQATAAAogHQAogFAUAKQAVAKAogFQAogHARgHQASgHAogIQAngIARgNQAQgMAogJQAogHASgHQARgGAogIQAogGATAEQAUADAogGQAogHARgFQASgFAogHQAogGAUADQATADAogHQAogHASgCQASgCAngIQAngJARgLQAQgLAngJQAogGAUAGQAUAHAogGQAngLAPgRQAPgRAngKQAngIASgBQATAAAngIQAogJAQgIQARgIAogJQAngHAUAHQAUAHAogHQAngJARgLQAQgLAngJQBAgJBAgHQBAgIBAgGQA/gLA/gJQBBAABAACQAggEAfgQQAggPAggDICAACIAAgJIB5ADQA9gDA8gCQAeACAeAMQAeALAeADIB4AMIB6gJQAeAEAdAKQAdALAeAEIB5AEQA8AHA8AJQAeACAggIQAfgHAeADQAeAGAbAUQAcATAdAHQAeAEAfgDQAggDAdAFIB2AZIB3ATQA6ATA5AVIBAASIBBARQAsANAUAJQATAJAsANIBBAQIBBAPQAoAIAUgEQAUgFAoAHQAnAJAQAPQAQAPAoAJQAoAJARAGQASAGAoAIQAoAGAVgKQAVgKAoAGQAoAJAQAOQAQANAoAKQAoAIARAGQASAGAoAJQAoAGAUgHQAVgHAoAHQAoAJAQAOQAQANApAHQAnAFATAAIA6ACQAoABATgEQASgEAoABQAoACATgCQASgBAoACIA6ACIA7ACQAoACASAAQASgBAoACQAeAEAdASQAdARAdAEQAegBAegKQAegLAegBIB3AOIB3gJQA7gCA8gDIB2gUIB2gCQAegBAfALQAfAKAegBIB0gbIB3gOQAdgGAcgNQAcgNAdgGQA7gIA7gJIB0gYIBzgdQA8gEA8gGQArgLASgLQASgLAsgMIA/gQIA/gQQAsgJAXALQAXAKAsgIQAsgLATgGIA/gRIBxgnIB2gOQAcgHAcgPQAbgOAdgHIB1gRIBzgeIB3gNIB2gHQApgGASgIQASgJAqgFIA8gHIA8gHQApgEATABQATABAqgFQApgEAUAGQATAGAqgEIB6gaIB7gZQAfgBAfAIQAgAHAfgBIB8gTQAfABAfALQAgAMAfABQAfgCAfgNQAfgNAfgCIB8ATIB8gFIB9AEQA8ALAvALQBeAKAEAMIAPAhQAMAdAHAzIAEB3IALB1IAaB0QACAcgGAfQgFAeACAfQAEAcANAcQAOAdAEAdQACAdgGAfQgHAeACAeIANB0IAHB2IAaB0IAPB1IAbB0IACB3IATB0QAJA0ANAXQANAXgZAfQgQASgQAAQgJAAgKgIg");
	this.shape_41.setTransform(658.441,728.6103);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#025E90").s().p("EiGMAWcQgOgnAAgSQABgTAAgpQgCgpgEgTQgEgTgCgpQgCgpgFgSQgEgTgCgpQAAgpAJgTQAKgTAAgqQgDgpgKgSQgLgSgDgpQABgpAOgUQANgTABgpQgEgpgPgSQgPgSgEgpQgBgqAFgTQAEgSgBgqQgBgpACgSQABgTgBgpQgCgpgDgTQgDgTgCgpQgDgpgFgSQgFgTgDgpQgCgpgDgTQgEgSgCgpQABgoAQgUQARgTABgpQgDgpgGgTQgHgSgCgpQgDgpgFgTQgEgTgDgpQgCgpgJgSQgIgSgDgpQABgqANgTQANgTABgpQgCgpABgTQABgTgBgpQgEgpgIgRQgHgSALgnQAdABAYgHQAZgHAdAAQAeAEAdAQQAcAQAeADIB4ADIB2AMIB4ABIB3AJQAegBAegPQAfgOAegBQAdADAdAQQAeAQAdAEQAeAAAfgKQAegKAeABIB2AUIB3AKQAeACAegFQAfgFAdACQAdAGAcAUQAbAVAdAGQAeADAegGQAfgFAdADIB3AEIB0AeIByAiIB1AVIB0AWIB0AbIB2AOIB2AMIB4AGIBxAoIBzAZIBzAiIB1ARIB3AMIB3AFQAdAHAaAUQAbAUAdAIIB4ACIB1ATIB2ANIB1AQIBzAhIB2ARQAdABAfgGQAegHAeACIB2AOIB1AQIB2APQA8gBA7gDQA7AFA8ADIB2gLIB2gIIB3AKQA7gIA7gJIB2gNIB2gKIBzgeIB1gSQA6gJA6gLQAegEAfAFQAgAGAdgFIB0gkIBwgwIBygoIB4gXIBzgkQAcgLAZgUQAZgVAcgLIB1ggIBvgwQAcgJAhABQAhAAAdgJQAbgNAXgYQAXgXAcgNQAcgKAiACQAhACAcgKIBvgwQAcgMAYgUQAZgUAcgMIBrg5QAdgJAiAEQAiADAdgIQAbgNAXgYQAYgZAbgMIBzgoQAdgIAgABQAhACAdgIQA5gTA5gSQAdgLAagSQAagTAcgKQA7gQA7gOQA8gJA8gHQA7gKA8gIQA7gQA7gOQA7gPA7gMQAegBAgANQAgANAeAAQAegEAdgPQAegOAegDQA8gHA9gEQA9AAA8AEQAeADAdATQAdASAeAFQAeABAfgGQAegFAeACQA7ALA7ANQA9ACA9ADIB0AgIB3AWIByAmQAdAJAaAQQAbARAdAJIB4APIBxArIB0AfIB2AaIB3ARIBzAnIBzAmIB4AOQA8AHA8AGQAeADAfgFQAegFAfACQAdAFAdAPQAdAQAeADQAfAAAfgOQAfgPAfgCQA9gBA9gFQA+AEA9ABQA9gDA9gFQA9gHA9gJIB2gkQAegEAgADQAgADAegFIB5gYIB6gRQAdgJAagVQAbgVAdgJQAegGAiAJQAiAIAfgFQAdgKAZgXQAagWAdgKIB8gOIB5gVQAdgKAbgTQAbgTAdgJIB1glQAegGAiAIQAhAHAfgFQAdgKAagWQAagWAdgJIB6gTIB2gjQAegEAgAGQAhAGAegEIB6gOQA8gLA8gKIB5gTQAegFAdgNQAegNAegFIB6gGIB7gGIB6gFIB7AHIB6gKQAegDAfgMQAegMAfgCIB6ASIB7ABQA9ABA9ADQA+gCA9AAIB6AQIB4AYQA9AFA9AHQA+ABA9ADQAeAHAcARQAcASAeAHIB6AOQAvALBGAPIB3ATQA6ALA8AOQA9AKA5ANQBAAQA1AUQA+AkAdArIgBASQAhApAKBKQABA8gHBFQAABBgDBBIgKCCQgCAoAGAhQAHAiABAZIgOB2IgKB2QABAdALAeQAKAdACAeIAHB1QgCAdgNAeQgMAdgCAeIARB2IgDB2IALB2QgCAdgMAdQgNAegCAdQACAeAJAdQAIAeACAdQgCAegKAdQgKAegCAdIAHB2QACAIh0ALQgzgHhGgIIh4gBIh3ACQgdADgeALQgdALggADQgcgCgfgNQgegOgfgBIh4AJIh4AAQgdACgeANQgeANgeACQgegBgegKQgegKgfgBIh4AFIh4ACIh3APIh4gEIh4AFIh4gBQgeACgdAKQgeAKgeACIh4AIQgegBgegOQgfgNgegBIh4ADQgeADgdAKQgeALgeADIh4AQQgdgBgfgNQgegMgegBIh4ASIh4AGQgdgBgfgHQgegIgeAAIh4AJIh4AMIh4gJIh3AMIh5gDIh3AGIh4AEQgeADgeAMQgdANgeACQgegBgfgNQgegOgegBIh4ACIh4ABIh4AUIh3AEIh4ABIh4ATQgegBgegMQgegMgfgBIh3AUIh4ABIh4AIIh3APIh4AEIh4ACIh4gHIh5gJIh3AMIh4ADQgeAAgegIQgfgHgegBIh3AIQgeADgeANQgeANgeACIh4gOIh4AJIh4ADIh3AWQgegBgegOQgfgNgegBQgeACgeANQgdAMgeADQgegBgegLQgfgLgegBIh4AKQgeACgdANQgeAMgeADQgegBgegPQgfgOgegBIh4AEIh3ALQgeACgeAMQgeALgeADIh3AFIh4ABQgegBgfgKQgegLgegBIh4AHIh3gDQgeACgeALQgdAKgeADIh5gKQgdACgeALQgeAKgeACIh4gFIh4gHIh4gCIh3AVIh4ABQgegBgfgMQgegMgegBIh4AKIh3AJIh5gKQgeADgdAPQgeAPgeADQgegBgegMQgegLgegBQgeACgeAOQgdAPgeACIh5gLIh4gBIh4gBQgeACgdANQgeAOgeACIh4gOIh5gNIh3ALIh4AOIh4gHIh4APIh4gFIh3AOQgeAAgfgIQgegIgegBQgeADgeAKQgdAKgeACQgeAAgegIQgfgIgeAAIh4AAQgeACgdAMQgeAMgeACQgeAAgegJQgegJgeAAQgeACgeAOQgdANgeADIh4ABQgegBgfgOQgegNgegBIh4AHIh3APIh4AQQgeAAgegKQgfgKgegBQgeADgdANQgeANgeACIh4gBQgeAAgegIQgegIgegBIh4AFIh3ASIh4APQgegBgfgMQgegNgegBQgeACgeALQgdALgeADIh4gKIh4ANIh4gMQgeACgeAMQgeAMgdADQgfgCgegPQgegPgegBQgeADgeANQgeANgdACQgfAAgegIQgegHgegBQgeACgeALQgdALgeACQgegBgegJQgfgJgdgBIh4gCQgfADgdAMQgeAMgeACIh4gGIh3ATIh4gLQgfACgeAJQgeAJgdACQgfgBgegNQgegNgegBQgeACgeALQgeALgdACQgfgBgegLQgfgLgcgBQggADgdANQgeAMgdADIh3ACQhCgFg3gGIh4ADQg4AHgVASQgHAGgHAAQgMAAgKgZg");
	this.shape_42.setTransform(840.1382,673.0586);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#026FAA").s().p("EBwDAdUQgagRg6gGQgygGhGgGQgbACgeAOQgeAOghACQgcgCgegPQgegOghgCQgcABgeAJQgeAKggABQgdgBgegLQgegLgfgBIh4AHIh4AHIh5AJIh4gDIh4AAIh4gPIh5gCQgdACgeAMQgeALgfACQgdgCgfgMQgegMgegBQgeABgeAKQgeAKgeABQgegCgegOQgegOgegCQgeABgeAIQgeAIgfABIh4gOIh4APIh4gKQgeABgeALQgeAMgfABIh4gGQgegCgegKQgegKgegBQgeABgeAKQgeAJgeACQgegCgegIQgegJgegBQgeABgeAMQgeANgfABQgegCgegQQgegQgegCQgeABgeALQgeALgeACIh4gQIh5AJIh4gNQgeABgeAKQgeAKgeABQgegCgegNQgegOgegCIh5AMIh4ANIh4ABQgegBgegJQgegJgegBIh4gFQgeACgeAMQgfAMgeABQgegBgegLQgegLgegCIh4AMIh4AMIh5ADQgegCgegPQgegOgegCIh4gDQgeACgeAMQgeANgeABQgegBgegKQgegKgegBQgeABgfALQgeALgeACIh4gEQgegCgegIQgegJgegCQgeACgeAJQgeAJgfABQgegBgegJQgegJgegCIh4ALIh4gJIh4AKIh5gLIh4AKIh4AIIh3gRIh5gSQgeABgeAMQgeANgeABIh4gGIh5gEIh4gQQgeACgeANQgeANgeACQgegCgegMQgegNgegCQgfACgeAOQgeAOgeABIh4gOIh5AGIh4AFQgegCgegNQgegNgegCIh4gDIh5ARIh4gGIh4gLIh4gKQgeACgfAJQgeAJgeACIh4gOQgeABgeAKQgeAJgeACIh5gIIh4ACQgegCgegLQgegLgegCIh4gDIh4AAQgfACgeAKQgeALgeABIh4AGIh5AAQgegCgegPQgegQgegCQgeACgeALQgeALgeACIh4AFQgfgCgegMQgegMgdgCQgfACgeALQgeALgeACQgegDgegOQgegOgegDIh4ARIh5gBIh4AEIh4gSQgeABgeAMQgfAMgeABIh4AEQgegCgegIQgegJgegCIh4gBIh5AHIh4gOIh4gLIh4gEIh4AAIh5AKIh4ACIh4gEIh5APQgfgDgegNQgdgNgegCIh4ANIh4gFIh4gCIh5AOIh4gGIh5gHQhrgNAIgMQgBgHgNgfQgNgegDg0IgGh4IgIh4IABh4IgNh4IAHh5IgOh3IgKh4QAAgeAHgeQAGgfAAgeIgHh4IgUh3QABgeAMgfQALgfABgeIgSh3QgDgegLgeQgLgdgDgeIgFh3QAAgfANgeQANgfABgeIgKh4QgDgegKgeQgKgegCgdIgCh4IgGh4IABh4IgQh4IgEh4QgFg1gEgRQgFgQAVgjQAtgKBMgMIB6gMQA4gNBBgMQAdgCAgAJQAgAJAggCIB5gcIB6gQIB7gBIB7gHIB6gWIB6gNIB6gNIB8AFQAfgEAdgPQAegOAegFIB6gRIB8ACIB7gIIB3gEIB3gCQAegDAdgMQAdgLAegDIB3gHIB4gGIB3AFQAeABAeAMQAeALAeACIB3gKIB3AKQAegCAegOQAegPAegBQAeADAdARQAdAQAeAEIB3ABQAeAAAfgJQAegJAeAAQA7AKA7AMQAeADAdALQAcALAeAFQAeAAAfgLQAfgMAeABQAeAGAbAUQAcAUAdAGQAeACAfgKQAggLAeADIB0AbIB2AVQAdAGAcAOQAcAOAdAGIB4AGIB1AWIB0AcQAoAKASAJQARAJAoAJQApAJATACQASACApAIQApAHAVgLQAWgLApAHQAoAKAQARQAPARAoALQApAHAUgEQAUgEApAHQAoAIATACQATADApAIQAoAIATAAQAUABAoAIQApAJARAKQARAJAoAKQApAJARAIQARAJApAJQAoAIAUgBQATgCApAIQApAIATACQATABAoAIIA7AMIA7AMQApAJARAJQARAJApAJQAoAIAUgEQAUgDApAHQAoAKARANQARAMAoAKIB0AhIB3ARIB1AcQA9ACA9ABIB1AZQAeADAegEQAfgFAeADQAeAGAbAUQAcAUAeAGIB3AQIB5AFQAeABAfgKQAfgJAeABQAeAFAcATQAdASAdAFIB5AAIB5gBIB3ANIB4ASIB4AGQAegBAfgKQAegKAegBIB4ABQAeACAeAMQAeAMAeACIB5AAQAegCAegQQAdgPAegDQAeACAfAOQAeAPAeABIB4gSQAegCAegLQAdgLAegDIB4gKQAeAAAfAMQAfALAeAAQAegEAdgQQAcgQAegEQAegBAfAKQAfAKAfgBIB3gRIB5gCQAdgFAdgOQAcgPAegFIB3gNIB6gBIB2gYIB0gkIB1gcQAegEAfAHQAgAHAegEIB4gWIA5gRIA6gTQAngNAQgLQAQgLAogOQAngMASgFQATgEAngNIA5gTQASgHAngNQAngNARgKQARgJAngNQAngMAUAAQAUABAogMQAngNARgIQASgIAngNQAngOAQgKQARgLAngNQAogMASgEQATgDAngMQAogNAQgKQARgJAngNQAogNATgCQATgDAngMQAogMATgDQATgCAngNQAogMASgEQASgFAogMQAngOAPgQQAOgPAngOIA6gRIA6gSQAngLAVABQAUACAogMIA5gTIA5gTQAngNARgIQASgIAngNIA5gSIA5gTQAngOAQgNQAQgNAngOQAogKAWAIQAXAIAogKQAngOAPgNQAQgNAngNQAngOARgKQAQgKAngNQAogNARgIQARgIAngNQAogMATgBQAUgCAngMQAogMASgFQATgEAngNQAogMAUACQAUABAogLQAngOAQgNQAPgNAngOQApgSAXgZQAYgYAiAWQAhAZgIAeQgIAegEAsQAAApgCATQgDATAAApIgBA8IAAA8IgBA8IAAA8QgBApgHATQgGATgBApQgBApgFATQgFATgBApQABApAGATQAFATABApQABApAKATQAJASABAqQgCApgSATQgRASgCAqQABApAIATQAIASACAqIAAA8IAAA7QAAAqgFASQgFATgBApQACAqALASQAMATACApQgCApgPATQgOATgCApQACApAQATQAQATACApQAAApgCATQgCASAAApQAAApACATQACATAAApQgBApgDATQgDATgBApQABApABATQACASAAAqQgCApgOATQgOASgCAqQACApANATQAOASACAqQAAApABATIACA8QgBApgBATQgCASAAApQgCAqgOASQgPATgCApQABAqAIASQAIATABApQAAAqAEASQAEATABApQABApAGATQAFATABApQgCApgRATQgSATgCApQAAApADATQADATAAApQABApAEATQAFATABApQACAqAIAUQAIAUgNAnQgJAZgPAAQgHAAgIgGg");
	this.shape_43.setTransform(647.0885,635.1491);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0180C3").s().p("Eh6uAbkQgdgdABgRIAEhHIAIh6QADgcAOgeQAPgeACghIABh6QgCgdgPgfQgOgfgCgfQADgeANgeQANgeACggQgBgdgIgfQgIgfAAgfIAHh5QACgeAJgfQAKgeABgfQgBgegPgfQgPgegCgfIASh6IAJh5IAPh6IAAh6IAFh4IgJh6IAPh6IAAh6QgBgfgKgeQgJgfgBgeIACh6IgKh6IASh5QACggAJgeQAJgfABgcIACh6IgDh6QAHhtAHgKQgCgRBggSQAzgKBCgLQA8gPA7gNQA9gEA9gCQA9gFA8gEQAfAAAfAIQAeAJAfABQAegDAegKQAegLAfgCQAeACAeAJQAeAKAfACQA9gGA9gDQA8ADA9AGIB4AVQAeACAfgGQAfgFAfACQAtAHAUAFQAUAFAtAGQAtAGAUAJQATAIAtAGQAuAGAUAAQAVABAtAFQAtAGAVgCQAVgCAtAFIBvAfQAdADAegJQAegJAdADQAcAHAaARQAaAQAcAHIByAJQAcAHAaAPQAaAPAbAIIByANIByAQIBpAxQAnALAQAIQARAIAmAMIA3AQIA4ARQAmAKATgBQATgBAnALQAmALAQAJQARAIAmAMQAmALARAHQARAGAmAMIB5AVQA6ARA7AQQAeAGAggCQAfgCAeAFQA7ASA7AQQA8AFA+AEQA8AIA8AGQAeAGAcATQAdAUAeAFQA9AGA9AEQA9gCA9gDQA9AMA9ALIB6gCIB6gCIB6AAQAfgCAegLQAegKAegDIB6gIIB3gaQArgDAWAKQAVALArgDQArgEAUAAQAUABArgFQArgFATgIQATgJArgFIA/gIIA/gHQArgFATgEIA+gNQAngHASgCQATgBAmgLQAlgNAOgQQAOgQAmgNQAmgKAWALQAWAKAngKQAmgLARgHQAQgHAmgMIA3gRQARgHAmgLQAmgMAQgIQARgIAmgMQAmgMAPgKQAQgKAmgNIA3gQIA3gRQAngKAUAEQAUAEAmgMQAkgOAMgSQAMgRAjgQQAjgOARgEQASgEAjgOQAkgNAUADQAUADAkgNQAjgQALgUQAKgTAjgRIB1gnQAdgJAhABQAhAAAdgIIBvg4IB0gnIB5gYIB3geQA9gJA9gHQA7gRA7gPQA9gLA8gKQAfgGAdgNQAdgNAegFQAfgCAgALQAgAKAfgBQAegFAegPQAdgPAfgEQA9gFA+gCIB6gPQAfAAAfAIQAfAIAfABIAAgRQA8ADA9AFQAeACAdAMQAeAMAeAEQA8ABA8ADQA7AJA7AKQA9ADA8AGQA6AOA6APQAeAFAggGQAhgGAdAFQAnAKAPALQAQAKAnAKIA4AMIA4AMQAmAKARAHQARAHAmAJQAmAKARAIQAQAJAnAKQAmAIATgDQAUgDAmAIQAmALAPAPQAPAPAmALQAmAJATgBQASAAAnAJQAmAJARAIQAQAHAnAKQAnAIAUgJQAUgJAnAHQAnAKAPAOQAQANAmAKQAnAGAUgDQATgEAnAHQAnAIARAGQARAFAnAJQAnAIAQAKQARAKAmAIQAnAIASACQASACAnAHQAnAJAQAKQAQAKAnAJQAnAHASABQATAAAnAHQAnAHATgGQAUgGAnAHQAnAHASAAQATAAAnAHQAeAIAbATQAcATAeAHIB5AZQA9AFA+AEQAeABAggKQAggJAfAAIB6AJQAeADAeAMQAeANAfACQA9AFA+ACQA9gFA9gHIB8AOIB6gXQA8gOA8gPQAfgBAgAIQAgAJAegDQA9gJA9gMIB2gjQA7gRA7gSQAegFAhAFQAgAEAegFQAegKAagTQAbgUAdgKQA8gNA7gOQAegIAhADQAiADAdgIQA5gXA5gZIBlg3IBugfIBqgqIBwgYIBlg4QBAgTAtgNQAmgLASgBQATgBAlgLIA3gSIA2gQQAmgMAQgIQAQgIAmgMQAlgOAQgQQAQgRAnACQAmAEgSAgQgRAggEA4IgIB3IAOB2IAKB3QACAcAKAdQAJAdADAfQgBAdgMAeQgMAegBAfQAEAdAQAdQAQAdAEAeIAJB2IgHB3IADB2IAGB3IAWB1QAAAegIAeQgHAeAAAeIAEB2IgFB2QADAeAQAdQAPAdAEAdQgBAegPAeQgQAfgBAdQAEAeAQAdQARAdAEAdQAAAegHAeQgHAeAAAdIgGB3QADAeANAdQANAeADAcIALB2QAAAggOAeQgOAfgBAbQAEAiARAdQARAcADAZQACBugDAJQgBADgiALQgiALg7AFQgZAAgfgKQgfgLgjAAIh4AAIh4AHIh4AHQgcADgeALQgeAKgfADIh4gBIh4gBIh5ACIh4gIIh4ALQgdADgeANQgeANgeADIh5gMIh4AGIh4AGIh4APIh4AAIh5gHIh3AJIh4ATQgeAAgegLQgfgMgeAAIh4AQIh4ABIh4AIIh4AFIh4AMIh4AJIh5gNIh4gIQgeADgeAQQgdARgeADIh4AAIh5gFIh4AMIh4gMIh4AQIh4AJIh4ALQgeAAgegKQgfgKgeAAIh4AUIh4ABIh4ABIh4ACIh4ANIh4AMQgegBgegJQgfgKgeAAIh4gEQgeAEgeAQQgdAQgeADIh5gLQgeAAgegHQgfgIgeAAQgeADgdARQgeARgeAEIh4gJIh4AGIh4ALQgeAAgfgIQgegIgeAAIh4gBIh4ARIh5gLQgeACgdAMQgeAMgeADQgeAAgegIQgfgIgeAAIh4gBQgeADgeAQQgdAPgeAEIh5gOIh4ACIh4AIQgeAAgfgIQgegHgeAAQgeADgeAOQgcAOgeADQgegBgfgNQgegNgfgBQgeADgdALQgeAMgeADIh4ANIh4ACIh4gDQgegBgegHQgfgHgeAAQgeACgdAMQgeAMgeADQgegBgfgLQgegLgegBQgeADgeARQgdARgeAEIh4gFIh4ACIh5gFIh4ALIh4AEIh4gGIh5gGIh4ADIh4AUIh3ASQgegBgfgLQgegLgegBIh4ACQgeACgeALQgeALgeADIh4gMIh5gCQgeADgdAQQgeAQgeADIh4gNIh5gCQgeADgdAKQgeAKgeACIh4AIQgegBgfgNQgegNgegBIh4AIQgeADgeAMQgdANgeADIh5gFIh4gKIh5ACIh4gCQgeAEgdAPQgeAPgeADIh4gHIh5gCIh3AWIh5gJIh4gHIh4AVIh4AAIh3ATQgfgBgegQQgfgQgegCIh3ATIh5gEQgeACgeANQgdAMgeADIh4gHQgfACgdAJQgeAJgeACQgegBgfgOQgegPgegBIh4AQIh4AFIh4gHIh4ANIh4AJIh4AHIh4gDIh4AVQgfgBgfgMQgegNgdgBQggADgdAQQgeARgcADIh4gJQhGgGgzgIQg3AHgQASQgHAHgIAAQgMAAgQgRg");
	this.shape_44.setTransform(718.0983,602.3022);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#A1D9E6","#43ACDB","#43ACDB","#43ACDB","#0686CF"],[0,0.498,0.498,0.498,1],0,-384,0,384).s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	this.shape_45.setTransform(683,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.9,0,1786.4,823.4);


(lib.youtube01swf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.movieClip_1.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://www.youtube.com/watch?v=19878Mzmmag', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// youtube
	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(794.35,553.5);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.youtube01swf, new cjs.Rectangle(727.7,506.9,133.29999999999995,93.30000000000007), null);


(lib.Tween110 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape.setTransform(22.05,82.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_1.setTransform(12.625,79.8774);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_2.setTransform(6.05,79.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_3.setTransform(-2.6,82.0331);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_4.setTransform(-17.4979,79.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_5.setTransform(-26.85,79.9761);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_6.setTransform(-33.375,78.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_7.setTransform(-39.2227,79.8933);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_8.setTransform(-52.7,79.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_9.setTransform(-59.825,78.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_10.setTransform(-70.3227,79.8933);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_11.setTransform(-78.6479,79.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_12.setTransform(-88.85,79.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_13.setTransform(-99.376,82.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_14.setTransform(-106.15,79.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_15.setTransform(-115.05,79.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_16.setTransform(-130.476,82.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_17.setTransform(-140.1479,79.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_18.setTransform(-146.975,77.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_19.setTransform(-154.526,82.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_20.setTransform(-164.2479,79.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_21.setTransform(-171.025,77.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_22.setTransform(-175.025,78.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_23.setTransform(-180.8227,79.8933);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_24.setTransform(178.875,54.8774);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_25.setTransform(169.775,55.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_26.setTransform(160.05,54.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_27.setTransform(150.3521,51.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_28.setTransform(135.55,51.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_29.setTransform(125.9021,54.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_30.setTransform(115.65,54.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_31.setTransform(100.6,51.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_32.setTransform(90.35,54.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_33.setTransform(79.9,54.875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_34.setTransform(70.2521,51.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_35.setTransform(56.225,54.8774);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_36.setTransform(46.9021,51.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_37.setTransform(40.325,53.35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_38.setTransform(26.5588,54.7269);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_39.setTransform(14.45,54.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_40.setTransform(7.4,54.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_41.setTransform(1.7,51.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_42.setTransform(-10.2979,54.75);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_43.setTransform(-21.8,54.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_44.setTransform(-33.85,54.875);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_45.setTransform(-44.65,51.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_46.setTransform(-59.676,57.05);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_47.setTransform(-69.3979,54.75);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_48.setTransform(-79.6,54.875);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_49.setTransform(-89.2979,51.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#01395B").s().p("AgVAIIAAgPIArAAIAAAPg");
	this.shape_50.setTransform(-101.75,54.75);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#01395B").s().p("AAAAuQgagCgIgMIANgPQAIAJALABQAKAAABgJQgBgIgGgBIgFgCQgKgDgJgGQgGgHAAgKQABgNAIgHQALgHAKABQALgBARAKIgMAPQgJgHgFABQgIAAgBAHQgBAEAIAEIAGABQAMADAKAJQAEAGAAAIQABAMgKAKQgKAJgOAAIgBAAg");
	this.shape_51.setTransform(-113.4988,54.6419);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#01395B").s().p("AgfAiQgOgNABgVQACgYALgJQAQgNAQABQAZACAIAMQAMATgBAOIAAACIhAAAQAAAJAEAGQAEAHANABQAOAAAGgLIAWADQAAATgqAIIgCAAQgTAAgMgMgAgSgKIAoAAQgFgSgQAAQgOABgFARg");
	this.shape_52.setTransform(-122.7925,54.6435);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#01395B").s().p("AgLBJIAAiRIAXAAIAACRg");
	this.shape_53.setTransform(-130.375,51.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#01395B").s().p("AgUAiQgMgJgCgYQABgXAOgMQASgMAMABQAOAAAKAFIAAAYQgIgHgMAAQgXADgBAUQACAXAXACQAIABALgJIAAAYQgHAFgQAAQgUAAgMgMg");
	this.shape_54.setTransform(-136.925,54.642);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#01395B").s().p("AgCAuQgqgEgDgqQADgpApgEQALgDAQARIAAgLIAYAAIAABVIgYAAIAAgLQgOAOgKAAIgCAAgAgVAAQACAXAUABQAXgBABgXQgBgWgXgBQgUABgCAWg");
	this.shape_55.setTransform(-147.05,54.65);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#01395B").s().p("AgPA6IAAhBIgKAAIAAgUIAKAAIAAgeIAYAAIAAAeIARAAIAAAUIgRAAIAABBg");
	this.shape_56.setTransform(-155.15,53.15);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#01395B").s().p("AARAtIAAgvQACgIgGgJQgHgFgFABQgIAAgGAIQgEAIABAHIAAAtIgZAAIAAhWIAZAAIAAALQAGgMATgCQAOgBAMAMQAIALgBANIAAA2g");
	this.shape_57.setTransform(-163.2691,54.521);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#01395B").s().p("AgfAiQgOgNABgVQACgYALgJQAQgNAQABQAZACAIAMQANATgCAOIAAACIhAAAQAAAJAEAGQAEAHANABQAOAAAGgLIAWADQAAATgqAIIgCAAQgTAAgMgMgAgSgKIAoAAQgFgSgQAAQgOABgFARg");
	this.shape_58.setTransform(-173.7871,54.6435);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#01395B").s().p("AgPA6IAAhBIgKAAIAAgUIAKAAIAAgeIAYAAIAAAeIARAAIAAAUIgRAAIAABBg");
	this.shape_59.setTransform(-181.7,53.15);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_60.setTransform(138.3273,4.8933);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_61.setTransform(130.0521,1.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_62.setTransform(123.475,3.35);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_63.setTransform(116.4,4.9761);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_64.setTransform(106.5,4.875);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_65.setTransform(94.4088,4.7269);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_66.setTransform(80.65,4.75);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_67.setTransform(74.925,2.725);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_68.setTransform(68.025,4.8774);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_69.setTransform(58.7021,1.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_70.setTransform(52.125,3.35);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_71.setTransform(39.8,4.875);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_72.setTransform(32.675,3.35);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_73.setTransform(25.6021,4.75);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_74.setTransform(18.825,2.725);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_75.setTransform(7.5,7.15);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_76.setTransform(-1.925,4.8774);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_77.setTransform(-8.5,4.75);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_78.setTransform(-17.2,7.0331);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_79.setTransform(-32.9,1.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_80.setTransform(-42.675,4.8774);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_81.setTransform(-49.3,4.75);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_82.setTransform(-57.6,4.9761);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_83.setTransform(-64.125,3.35);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_84.setTransform(-71.55,7.0331);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_85.setTransform(-82.6,4.875);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_86.setTransform(-91.95,4.8763);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_87.setTransform(-105.825,4.8774);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_88.setTransform(-114.875,5.125);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_89.setTransform(-124.35,4.875);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_90.setTransform(-136.3912,4.7269);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_91.setTransform(-153.45,1.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_92.setTransform(-163.275,4.8774);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_93.setTransform(-171.5227,4.8933);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_94.setTransform(-179.8,4.9761);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_95.setTransform(178.875,-20.1226);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_96.setTransform(172.25,-20.25);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_97.setTransform(163.05,-20.125);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_98.setTransform(147.35,-23.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_99.setTransform(137.7021,-20.25);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_100.setTransform(127.45,-20.125);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_101.setTransform(111.75,-23.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_102.setTransform(101.5,-20.125);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_103.setTransform(91,-20.125);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_104.setTransform(81.4021,-23.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_105.setTransform(66.675,-20.1226);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_106.setTransform(57.4021,-23.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_107.setTransform(50.775,-21.65);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAFADAWIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_108.setTransform(36.3588,-20.2731);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_109.setTransform(24.25,-20.125);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_110.setTransform(17.25,-20.25);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_111.setTransform(11.55,-23.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_112.setTransform(-1.0979,-20.25);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_113.setTransform(-12.65,-20.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_114.setTransform(-24.7,-20.125);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_115.setTransform(-35.45,-23.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_116.setTransform(-51.126,-17.95);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_117.setTransform(-60.8479,-20.25);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_118.setTransform(-71.1,-20.125);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_119.setTransform(-80.7479,-23.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#01395B").s().p("AgVAIIAAgPIArAAIAAAPg");
	this.shape_120.setTransform(-93.85,-20.25);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#01395B").s().p("AAAAuQgagCgIgMIANgPQAIAJALABQAKAAABgJQgBgIgGgBIgFgCQgKgDgJgGQgGgHAAgKQABgNAIgHQALgHAKABQALgBARAKIgMAPQgJgHgFABQgIAAgBAHQgBAEAIAEIAGABQAMADAKAJQAEAGAAAIQABAMgKAKQgKAJgOAAIgBAAg");
	this.shape_121.setTransform(-106.2988,-20.3581);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#01395B").s().p("AArAtIAAgvQgBgOgDgDQgGgFgEABQgKAAgEAIQgEAIABAHIAAAtIgYAAIAAgvQAAgOgEgDQgFgFgFABQgJAAgEAIQgEAIABAHIAAAtIgZAAIAAhWIAZAAIAAAKQAQgPAJACQAZAFACALQAGgNAWgDQATACAEAJQAHAKgBAOIAAA2g");
	this.shape_122.setTransform(-118.1937,-20.4929);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#01395B").s().p("AgdAtIAAhWIAYAAIAAANQAHgLADgBQAGgEAIAAIALACIgDAXQgFgDgGAAQgIgBgIAIQgFAJAAAJIAAAqg");
	this.shape_123.setTransform(-129.15,-20.475);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#01395B").s().p("AgCAuQgqgEgDgqQADgpApgEQALgDAQARIAAgLIAYAAIAABVIgYAAIAAgLQgOAOgKAAIgCAAgAgVAAQACAXAUABQAXgBABgXQgBgWgXgBQgUABgCAWg");
	this.shape_124.setTransform(-139.25,-20.35);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#01395B").s().p("AgLBJIAAiRIAXAAIAACRg");
	this.shape_125.setTransform(-152.275,-23.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#01395B").s().p("AgCAuQgqgEgDgqQADgpApgEQALgDAQARIAAgLIAYAAIAABVIgYAAIAAgLQgOAOgKAAIgCAAgAgVAAQACAXAUABQAXgBABgXQgBgWgXgBQgUABgCAWg");
	this.shape_126.setTransform(-160.6,-20.35);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#01395B").s().p("AgdAtIAAhWIAYAAIAAANQAHgLADgBQAGgEAIAAIALACIgDAXQgFgDgGAAQgIgBgIAIQgFAJAAAJIAAAqg");
	this.shape_127.setTransform(-168.9,-20.475);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#01395B").s().p("AgiAiQgOgMgBgWQABgUAOgNQALgLAXgBQAZABAKALQAOANAAAUQAAAWgOAMQgKALgZABQgXAAgLgMgAgXAAQABAXAWABQAXgBABgXQgBgVgXgCQgWABgBAWg");
	this.shape_128.setTransform(-178.75,-20.35);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_129.setTransform(-27.1979,-70.25);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_130.setTransform(-36.725,-70.1226);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_131.setTransform(-43.425,-71.65);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_132.setTransform(-51.35,-70.125);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_133.setTransform(-61.125,-70.1226);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_134.setTransform(-72.85,-70.25);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_135.setTransform(-81.325,-70.1226);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_136.setTransform(-88.025,-71.65);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_137.setTransform(-92.85,-73.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_138.setTransform(-101.15,-70.125);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_139.setTransform(-115.625,-70.1226);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_140.setTransform(-127.2412,-70.2731);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_141.setTransform(-136.175,-72.275);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_142.setTransform(-140.175,-71.65);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_143.setTransform(-149.125,-71.65);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_144.setTransform(-154.15,-70.25);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_145.setTransform(-163.05,-70.125);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_146.setTransform(-172.6979,-73.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_147.setTransform(-180.8227,-70.1067);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_148.setTransform(178.15,-95.125);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_149.setTransform(162.9,-95.25);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_150.setTransform(154,-95.125);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_151.setTransform(146.7,-98.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_152.setTransform(130.4,-98.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_153.setTransform(120.625,-95.1226);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_154.setTransform(114,-95.25);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_155.setTransform(105.1,-95.125);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_156.setTransform(98.025,-96.65);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_157.setTransform(92.1773,-95.1067);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_158.setTransform(77.1273,-95.1067);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_159.setTransform(71.425,-97.275);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_160.setTransform(55.85,-98.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_161.setTransform(45.6,-95.125);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_162.setTransform(35.1,-95.125);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_163.setTransform(27.85,-98.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_164.setTransform(12.275,-95.1226);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_165.setTransform(5.7,-95.25);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_166.setTransform(-2.775,-95.1226);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_167.setTransform(-12.0979,-98.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_168.setTransform(-23.65,-95.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#01395B").s().p("AgVAIIAAgPIArAAIAAAPg");
	this.shape_169.setTransform(-41.65,-95.25);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#01395B").s().p("AARBJIAAgwQACgIgGgIQgHgFgFAAQgIAAgGAIQgEAIABAJIAAAsIgZAAIAAiRIAZAAIAABGQAGgMATgBQAOgBAMALQAIALgBANIAAA2g");
	this.shape_170.setTransform(-58.1691,-98.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#01395B").s().p("AgUAiQgMgJgCgYQABgXAOgMQASgMAMABQAOAAAKAFIAAAYQgIgHgMAAQgXADgBAUQACAXAXACQAIABALgJIAAAYQgHAFgQAAQgUAAgMgMg");
	this.shape_171.setTransform(-67.675,-95.358);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#01395B").s().p("AAAAtQgRAAgNgKQgNgOACgNIAAg0IAYAAIAAAwQgBAIAHAHQAEAFAHAAQAHAAAGgFQAFgHgBgIIAAgwIAZAAIAAA0QACANgMAOQgOAKgQAAIgCAAg");
	this.shape_172.setTransform(-77.25,-95.2239);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#01395B").s().p("AgiAiQgOgMgBgWQABgUAOgNQALgLAXgBQAZABAKALQAOANAAAUQAAAWgOAMQgKALgZABQgXAAgLgMgAgXAAQABAXAWABQAXgBABgXQgBgVgXgCQgWABgBAWg");
	this.shape_173.setTransform(-88.3,-95.35);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#01395B").s().p("AgvBEIAAiDIAZAAIAAALQAFgLAWgDQANgCAQANQAMAJACAaQgEAbgKAHQgKAKgTABQgLADgQgRIAAA5gAgRgnQgHAHgBAMQABAMAHAHQAFAEALAAQAMAAAEgFQAIgIAAgKQAAgLgIgHQgHgHgJAAQgJAAgHAGg");
	this.shape_174.setTransform(-99.45,-93.2078);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#01395B").s().p("AARBJIAAgwQACgIgGgIQgHgFgFAAQgIAAgGAIQgEAIABAJIAAAsIgZAAIAAiRIAZAAIAABGQAGgMATgBQAOgBAMALQAIALgBANIAAA2g");
	this.shape_175.setTransform(-118.7191,-98.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#01395B").s().p("AgUAiQgMgJgCgYQABgXAOgMQASgMAMABQAOAAAKAFIAAAYQgIgHgMAAQgXADgBAUQACAXAXACQAIABALgJIAAAYQgHAFgQAAQgUAAgMgMg");
	this.shape_176.setTransform(-128.225,-95.358);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#01395B").s().p("AgCAuQgqgEgDgqQADgpApgEQALgDAQARIAAgLIAYAAIAABVIgYAAIAAgLQgOAOgKAAIgCAAgAgVAAQACAXAUABQAXgBABgXQgBgWgXgBQgUABgCAWg");
	this.shape_177.setTransform(-138.35,-95.35);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#01395B").s().p("AArAtIAAgvQgBgOgDgDQgGgFgEABQgKAAgEAIQgEAIABAHIAAAtIgYAAIAAgvQAAgOgEgDQgFgFgFABQgJAAgEAIQgEAIABAHIAAAtIgZAAIAAhWIAZAAIAAAKQAQgPAJACQAZAFACALQAGgNAWgDQATACAEAJQAHAKgBAOIAAA2g");
	this.shape_178.setTransform(-151.6937,-95.4929);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#01395B").s().p("AgiAiQgOgMgBgWQABgUAOgNQALgLAXgBQAZABAKALQAOANAAAUQAAAWgOAMQgKALgZABQgXAAgLgMgAgXAAQABAXAWABQAXgBABgXQgBgVgXgCQgWABgBAWg");
	this.shape_179.setTransform(-165.3,-95.35);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#01395B").s().p("AgPA6IAAhBIgKAAIAAgUIAKAAIAAgeIAYAAIAAAeIARAAIAAAUIgRAAIAABBg");
	this.shape_180.setTransform(-173.6,-96.85);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#01395B").s().p("AAAAuQgagCgIgMIANgPQAIAJALABQAKAAABgJQgBgIgGgBIgFgCQgKgDgJgGQgGgHAAgKQABgNAIgHQALgHAKABQALgBARAKIgMAPQgJgHgFABQgIAAgBAHQgBAEAIAEIAGABQAMADAKAJQAEAGAAAIQABAMgKAKQgKAJgOAAIgBAAg");
	this.shape_181.setTransform(-180.3988,-95.3581);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_182.setTransform(166.575,-145.1226);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_183.setTransform(157.525,-144.875);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_184.setTransform(148.05,-145.125);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_185.setTransform(135.9588,-145.2731);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_186.setTransform(119.2,-145.125);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_187.setTransform(112.075,-146.65);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_188.setTransform(99.5,-148.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_189.setTransform(89.675,-145.1226);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_190.setTransform(79.35,-148.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_191.setTransform(69.575,-145.1226);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_192.setTransform(59.925,-145.1226);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_193.setTransform(50.4521,-145.25);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_194.setTransform(37.6273,-145.1067);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_195.setTransform(29.225,-145.1226);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_196.setTransform(22.325,-148.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_197.setTransform(15.85,-145.1237);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_198.setTransform(8.0273,-145.1067);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_199.setTransform(-0.2,-145.0239);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_200.setTransform(-11.6912,-145.2731);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_201.setTransform(-28.75,-148.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_202.setTransform(-38.4479,-145.25);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_203.setTransform(-48.7,-145.125);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_204.setTransform(-63.125,-145.1226);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_205.setTransform(-69.75,-145.25);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_206.setTransform(-78.05,-145.0239);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_207.setTransform(-84.625,-146.65);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_208.setTransform(-91.35,-145.1237);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_209.setTransform(-100.4,-145.0239);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_210.setTransform(-107.35,-145.25);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_211.setTransform(-112.875,-146.65);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_212.setTransform(-118.7227,-145.1067);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_213.setTransform(-129.075,-148.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_214.setTransform(-136.65,-145.125);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_215.setTransform(-146.3479,-145.25);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_216.setTransform(-153.3,-145.25);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_217.setTransform(-161.775,-145.1226);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_218.setTransform(-168.475,-146.65);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_219.setTransform(-175.5479,-145.25);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_220.setTransform(-182.375,-147.275);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_221.setTransform(178.875,-170.1226);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_222.setTransform(169.5521,-173.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_223.setTransform(162.975,-171.65);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_224.setTransform(149.8773,-170.1067);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_225.setTransform(140.75,-173.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_226.setTransform(133.675,-173.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_227.setTransform(126.35,-170.125);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_228.setTransform(116.7021,-173.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_229.setTransform(102.875,-171.65);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_230.setTransform(94.95,-170.125);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_231.setTransform(85.2521,-173.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_232.setTransform(78.675,-171.65);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_233.setTransform(64.3521,-173.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_234.setTransform(56.1773,-170.1067);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#01395B").s().p("AAWBKIAAhSIAOAAIAABSgAgbBKIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAAAEIgOAAIAAgEQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFg");
	this.shape_235.setTransform(47.6321,-173.4625);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_236.setTransform(38.8,-167.85);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_237.setTransform(32.125,-173.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_238.setTransform(27.925,-173.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_239.setTransform(21.075,-170.1226);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#01395B").s().p("AgGBVIAAiAIANAAIAACAgAgJhKQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_240.setTransform(14.175,-169.975);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_241.setTransform(0.025,-170.1226);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_242.setTransform(-9.2979,-173.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_243.setTransform(-15.875,-171.65);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_244.setTransform(-27.6,-173.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_245.setTransform(-35.6,-170.125);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_246.setTransform(-52.65,-167.85);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_247.setTransform(-62.8,-173.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_248.setTransform(-73.05,-170.125);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_249.setTransform(-83.3,-173.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_250.setTransform(-100.875,-170.1226);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_251.setTransform(-110.1479,-173.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_252.setTransform(-116.775,-171.65);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#01395B").s().p("AgVAIIAAgPIArAAIAAAPg");
	this.shape_253.setTransform(-129.6,-170.25);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#01395B").s().p("AgCBKQgqgEgDgqQADgpApgEQALgCAQAQIAAhGIAYAAIAACRIgYAAIAAgMQgOAOgKAAIgCAAgAgVAcQACAXAUACQAXgCABgXQgBgWgXgCQgUACgCAWg");
	this.shape_254.setTransform(-146,-173.1585);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#01395B").s().p("AgiAiQgOgMgBgWQABgUAOgNQALgLAXgBQAZABAKALQAOANAAAUQAAAWgOAMQgKALgZABQgXAAgLgMgAgXAAQABAXAWABQAXgBABgXQgBgVgXgCQgWABgBAWg");
	this.shape_255.setTransform(-157.15,-170.35);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#01395B").s().p("AgiAiQgOgMgBgWQABgUAOgNQALgLAXgBQAZABAKALQAOANAAAUQAAAWgOAMQgKALgZABQgXAAgLgMgAgXAAQABAXAWABQAXgBABgXQgBgVgXgCQgWABgBAWg");
	this.shape_256.setTransform(-168.5,-170.35);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#01395B").s().p("AARBJIAAgwQACgIgGgIQgHgFgFAAQgIAAgGAIQgEAIABAJIAAAsIgZAAIAAiRIAZAAIAABGQAGgMATgBQAOgBAMALQAIALgBANIAAA2g");
	this.shape_257.setTransform(-179.1191,-173.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#01395B").s().p("AAZBaIAKhNIhHAAIgKBNIgqAAIAWizIAqAAIgIBDIBGAAIAJhDIAqAAIgXCzg");
	this.shape_258.setTransform(72.9,-225);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#01395B").s().p("AgHBeQgTABgRgJQgOgIgKgLIAXgeQAGAIAJAHQAJAFAMAAQAKABAJgGQAHgGABgLQgBgJgEgEQgCgBgMgGIgKgFQgJgCgRgNQgMgNAAgRQACgcAPgNQAXgTAYACQAYgCAcAUIgUAeQgSgOgNABQgJAAgIAFQgFAFAAAHQAAAJAFAEQAFAEANAFIAKAFQAOAFAKAMQAKALgBAQQgBAegRAQQgVASgYAAIgFAAg");
	this.shape_259.setTransform(55.425,-225.0502);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#01395B").s().p("AgfBaIAWizIApAAIgWCzg");
	this.shape_260.setTransform(44.225,-225);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#01395B").s().p("Ag8BaIAWizIBjAAIgEAjIg6AAIgEAjIA1AAIgEAiIg1AAIgKBLg");
	this.shape_261.setTransform(34.025,-225);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#01395B").s().p("AgqBaIAKhUIg0hfIAvAAIAeA4IAqg4IAyAAIhMBfIgJBUg");
	this.shape_262.setTransform(19.625,-225);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#01395B").s().p("AgyBaIAWizIApAAIgRCQIA3AAIgFAjg");
	this.shape_263.setTransform(5.65,-225);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#01395B").s().p("AgyBaIAWizIApAAIgRCQIA3AAIgFAjg");
	this.shape_264.setTransform(-6.45,-225);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#01395B").s().p("Ag8BaIAWizIBjAAIgFAjIg5AAIgFAjIA4AAIgEAiIg4AAIgFAoIA7AAIgEAjg");
	this.shape_265.setTransform(-19.025,-225);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#01395B").s().p("AgNBcQgOABgOgIQgLgGgHgMIAcgaQACAGAFAEQADAEAHAAQAHAAAEgEQAFgGABgOIAQh6IApAAIgPB5QABAXgTAaQgTANgPAAIgGAAg");
	this.shape_266.setTransform(-32.875,-224.7826);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#01395B").s().p("AAwBaIgJgiIhDAAIgRAiIgtAAIBeizIAnAAIAwCzgAgMAYIAsAAIgPg/g");
	this.shape_267.setTransform(-53.675,-225);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#01395B").s().p("Ag8BaIAWizIBjAAIgEAjIg6AAIgEAjIA1AAIgEAiIg1AAIgKBLg");
	this.shape_268.setTransform(-74.075,-225);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#01395B").s().p("AhIBEQgWgTgDgsQACguAbgZQAlgeAkADQAzADARAUQAYAYABAoQAAAogcAgQgkAfglgDIgIAAQgfAAgegagAAnAoQAPgPABgcQACgTgQgTQgTgQgSACQgaAAgQARQgQASgBAXQABAZAOAMQAUARATgBQATACAVgSg");
	this.shape_269.setTransform(-91.9996,-225.0446);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#01395B").s().p("AgHBeQgTABgRgJQgOgIgKgLIAXgeQAGAIAJAHQAJAFAMAAQAKABAJgGQAHgGABgLQgBgJgEgEQgCgBgMgGIgKgFQgJgCgRgNQgMgNAAgRQACgcAPgNQAXgTAYACQAYgCAcAUIgUAeQgSgOgNABQgJAAgIAFQgFAFAAAHQAAAJAFAEQAFAEANAFIAKAFQAOAFAKAMQAKALgBAQQgBAegRAQQgVASgYAAIgFAAg");
	this.shape_270.setTransform(-117.025,-225.0502);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#01395B").s().p("AgnBaIARiQIgnAAIAEgjIB3AAIgEAjIgoAAIgRCQg");
	this.shape_271.setTransform(-128.65,-225);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#01395B").s().p("AAXBaIgrhHIgJBHIgpAAIAWizIA3AAQAbgDAWATQAKAKACAbQgBAagOANQgNALgPADIAuBJgAgRgHIALAAQAKABANgHQAKgKgBgLQACgKgLgIQgIgFgNABIgHAAg");
	this.shape_272.setTransform(-143.35,-225.0204);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#01395B").s().p("AAwBaIgJgiIhDAAIgRAiIgtAAIBeizIAnAAIAwCzgAgMAYIAsAAIgPg/g");
	this.shape_273.setTransform(-161.475,-225);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#01395B").s().p("AhHBaIAWizIA8AAQAWgDAZASQANAMABAbQAAAfgRAPQgLAOgrACIgXAAIgIA/gAgSgGIAPAAQANABAMgJQAJgKgBgIQAAgJgHgHQgMgIgLABIgMAAg");
	this.shape_274.setTransform(-175.35,-225.0278);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAflAnmMg/JAAAMAAAhPLMA/JAAAg");
	this.shape_275.setTransform(-0.025,0);

	this.instance = new lib.Symbol148("synched",0);
	this.instance.setTransform(-202.1,-253.4);
	this.instance.alpha = 0.3984;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.1,-254.4,406.2,508.8);


(lib.Tween108 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAADxIgCAAIgCAAIAAgBIgBAAQgCgGhMgSQhGgSh/AkQgFACgFgEQgGgDAAgGIAAl9QABgLALgBIA1AAIAAg5QABgKAJgCQCHgIAuApQAeATAKAQQAMgQAcgTQAwgpCGAIQAKACABAKIAAA5IA0AAQALABABALIAAF9QAAAGgGADQgEAEgGgCQh+gkhHASQhMASgCAGIgBAAIgBABIgBAAIAAAAIgBAAIgBAAIgBAAIAAAAgACNCPQhHAIgzA6QAWgIAmgIQBGgRB8AfIAAlhIgoAAIAAEQQgBAFgEAEQgDADgGAAQgCgBgIAAQgSAAgyAGgAgSDRQgzg6hHgIQhHgJgHAEQgGAAgDgDQgEgEAAgFIAAkQIgpAAIAAFhQB7gfBHARQAmAIAWAIIAAAAgAA2i8QglAcgGANIAAFIQAqgtBMgPQA1gJAbACIAAlLQgRgCgQAAQhIAAgyAfgAiAB5QBMAPAqAtIAAlIQgGgNglgcQg+glhdAIIAAFLIALgBQAaAAArAIg");
	this.shape.setTransform(0,0.0965);

	this.instance = new lib.Symbol68("synched",0);
	this.instance.setTransform(-28.5,-23);
	this.instance.alpha = 0.1914;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01395B").s().p("Ak+FAQiAiAgFjAQAFi/CAh/QB/iAC/gFQDAAFCACAQB/B/AEC/QgEDAh/CAQiAB/jAAEQi/gEh/h/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.1,-45.1,90.30000000000001,90.30000000000001);


(lib.title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.play();
	}
	this.frame_109 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(109).call(this.frame_109).wait(3));

	// h
	this.instance = new lib.Tween104("synched",0);
	this.instance.setTransform(600.1,-75.15);
	this.instance._off = true;

	this.instance_1 = new lib.Tween105("synched",0);
	this.instance_1.setTransform(600.1,70.3);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween106("synched",0);
	this.instance_2.setTransform(600.1,59.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},101).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(101).to({_off:false},0).to({_off:true,y:70.3},3).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(101).to({_off:false},3).to({_off:true,y:59.15},3).wait(5));

	// s
	this.instance_3 = new lib.Tween101("synched",0);
	this.instance_3.setTransform(562,-75.15);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween102("synched",0);
	this.instance_4.setTransform(562,70.9);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween103("synched",0);
	this.instance_5.setTransform(562,59.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},96).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(96).to({_off:false},0).to({_off:true,y:70.9},3).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(96).to({_off:false},3).to({_off:true,y:59.15},3).wait(10));

	// i
	this.instance_6 = new lib.Tween98("synched",0);
	this.instance_6.setTransform(535.3,-75.15);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween99("synched",0);
	this.instance_7.setTransform(535.3,73.8);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween100("synched",0);
	this.instance_8.setTransform(535.3,59.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},91).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(91).to({_off:false},0).to({_off:true,y:73.8},3).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(91).to({_off:false},3).to({_off:true,y:59.15},3).wait(15));

	// f
	this.instance_9 = new lib.Tween95("synched",0);
	this.instance_9.setTransform(509.55,-75.15);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween96("synched",0);
	this.instance_10.setTransform(509.55,74.4);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween97("synched",0);
	this.instance_11.setTransform(509.55,59.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},87).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(87).to({_off:false},0).to({_off:true,y:74.4},3).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(87).to({_off:false},3).to({_off:true,y:59.15},3).wait(19));

	// y
	this.instance_12 = new lib.Tween92("synched",0);
	this.instance_12.setTransform(473.85,-75.15);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween93("synched",0);
	this.instance_13.setTransform(473.85,73.8);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween94("synched",0);
	this.instance_14.setTransform(473.85,59.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},81).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},3).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(81).to({_off:false},0).to({_off:true,y:73.8},3).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(81).to({_off:false},3).to({_off:true,y:59.15},3).wait(25));

	// l
	this.instance_15 = new lib.Tween89("synched",0);
	this.instance_15.setTransform(443.35,-75.15);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween90("synched",0);
	this.instance_16.setTransform(443.35,70.25);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween91("synched",0);
	this.instance_17.setTransform(443.35,59.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},76).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_17}]},3).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(76).to({_off:false},0).to({_off:true,y:70.25},3).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(76).to({_off:false},3).to({_off:true,y:59.15},3).wait(30));

	// l
	this.instance_18 = new lib.Tween86("synched",0);
	this.instance_18.setTransform(422.4,-75.15);
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween87("synched",0);
	this.instance_19.setTransform(422.4,74.95);
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween88("synched",0);
	this.instance_20.setTransform(422.4,59.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},70).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},3).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(70).to({_off:false},0).to({_off:true,y:74.95},3).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(70).to({_off:false},3).to({_off:true,y:59.15},3).wait(36));

	// e
	this.instance_21 = new lib.Tween83("synched",0);
	this.instance_21.setTransform(392.95,-75.15);
	this.instance_21._off = true;

	this.instance_22 = new lib.Tween84("synched",0);
	this.instance_22.setTransform(392.95,67.95);
	this.instance_22._off = true;

	this.instance_23 = new lib.Tween85("synched",0);
	this.instance_23.setTransform(392.95,59.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21}]},67).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_23}]},3).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(67).to({_off:false},0).to({_off:true,y:67.95},3).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(67).to({_off:false},3).to({_off:true,y:59.15},3).wait(39));

	// j
	this.instance_24 = new lib.Tween80("synched",0);
	this.instance_24.setTransform(354.35,-75.15);
	this.instance_24._off = true;

	this.instance_25 = new lib.Tween81("synched",0);
	this.instance_25.setTransform(354.35,67.3);
	this.instance_25._off = true;

	this.instance_26 = new lib.Tween82("synched",0);
	this.instance_26.setTransform(354.35,59.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_24}]},61).to({state:[{t:this.instance_25}]},3).to({state:[{t:this.instance_26}]},3).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(61).to({_off:false},0).to({_off:true,y:67.3},3).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(61).to({_off:false},3).to({_off:true,y:59.15},3).wait(45));

	// e
	this.instance_27 = new lib.Tween77("synched",0);
	this.instance_27.setTransform(301.5,-75.15);
	this.instance_27._off = true;

	this.instance_28 = new lib.Tween78("synched",0);
	this.instance_28.setTransform(301.5,67.95);
	this.instance_28._off = true;

	this.instance_29 = new lib.Tween79("synched",0);
	this.instance_29.setTransform(301.5,59.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_27}]},56).to({state:[{t:this.instance_28}]},3).to({state:[{t:this.instance_29}]},3).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(56).to({_off:false},0).to({_off:true,y:67.95},3).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(56).to({_off:false},3).to({_off:true,y:59.15},3).wait(50));

	// h
	this.instance_30 = new lib.Tween74("synched",0);
	this.instance_30.setTransform(261.1,-75.15);
	this.instance_30._off = true;

	this.instance_31 = new lib.Tween75("synched",0);
	this.instance_31.setTransform(261.1,69.7);
	this.instance_31._off = true;

	this.instance_32 = new lib.Tween76("synched",0);
	this.instance_32.setTransform(261.1,59.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_30}]},51).to({state:[{t:this.instance_31}]},3).to({state:[{t:this.instance_32}]},3).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(51).to({_off:false},0).to({_off:true,y:69.7},3).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(51).to({_off:false},3).to({_off:true,y:59.15},3).wait(55));

	// t
	this.instance_33 = new lib.Tween71("synched",0);
	this.instance_33.setTransform(224.65,-75.15);
	this.instance_33._off = true;

	this.instance_34 = new lib.Tween72("synched",0);
	this.instance_34.setTransform(224.65,70.2);
	this.instance_34._off = true;

	this.instance_35 = new lib.Tween73("synched",0);
	this.instance_35.setTransform(224.65,59.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33}]},45).to({state:[{t:this.instance_34}]},4).to({state:[{t:this.instance_35}]},3).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(45).to({_off:false},0).to({_off:true,y:70.2},4).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(45).to({_off:false},4).to({_off:true,y:59.15},3).wait(60));

	// l
	this.instance_36 = new lib.Tween68("synched",0);
	this.instance_36.setTransform(184.9,-75.15);
	this.instance_36._off = true;

	this.instance_37 = new lib.Tween69("synched",0);
	this.instance_37.setTransform(184.9,71.5,1,1.1247);
	this.instance_37._off = true;

	this.instance_38 = new lib.Tween70("synched",0);
	this.instance_38.setTransform(184.9,59.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_36}]},41).to({state:[{t:this.instance_37}]},3).to({state:[{t:this.instance_38}]},3).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(41).to({_off:false},0).to({_off:true,scaleY:1.1247,y:71.5},3).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(41).to({_off:false},3).to({_off:true,scaleY:1,y:59.15},3).wait(65));

	// e
	this.instance_39 = new lib.Tween65("synched",0);
	this.instance_39.setTransform(155.45,-75.15);
	this.instance_39._off = true;

	this.instance_40 = new lib.Tween66("synched",0);
	this.instance_40.setTransform(155.45,69.7);
	this.instance_40._off = true;

	this.instance_41 = new lib.Tween67("synched",0);
	this.instance_41.setTransform(155.45,59.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_39}]},36).to({state:[{t:this.instance_40}]},3).to({state:[{t:this.instance_41}]},3).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(36).to({_off:false},0).to({_off:true,y:69.7},3).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(36).to({_off:false},3).to({_off:true,y:59.15},3).wait(70));

	// w
	this.instance_42 = new lib.Tween62("synched",0);
	this.instance_42.setTransform(107.9,-75.15);
	this.instance_42._off = true;

	this.instance_43 = new lib.Tween63("synched",0);
	this.instance_43.setTransform(107.9,72.05);
	this.instance_43._off = true;

	this.instance_44 = new lib.Tween64("synched",0);
	this.instance_44.setTransform(107.9,59.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_42}]},30).to({state:[{t:this.instance_43}]},4).to({state:[{t:this.instance_44}]},3).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(30).to({_off:false},0).to({_off:true,y:72.05},4).wait(78));
	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(30).to({_off:false},4).to({_off:true,y:59.15},3).wait(75));

	// e
	this.instance_45 = new lib.Tween59("synched",0);
	this.instance_45.setTransform(60.3,-75.15);
	this.instance_45._off = true;

	this.instance_46 = new lib.Tween60("synched",0);
	this.instance_46.setTransform(60.3,70.85);
	this.instance_46._off = true;

	this.instance_47 = new lib.Tween61("synched",0);
	this.instance_47.setTransform(60.3,59.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_45}]},23).to({state:[{t:this.instance_46}]},4).to({state:[{t:this.instance_47}]},3).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(23).to({_off:false},0).to({_off:true,y:70.85},4).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(23).to({_off:false},4).to({_off:true,y:59.15},3).wait(82));

	// j
	this.instance_48 = new lib.Tween56("synched",0);
	this.instance_48.setTransform(21.7,-75.15);
	this.instance_48._off = true;

	this.instance_49 = new lib.Tween57("synched",0);
	this.instance_49.setTransform(21.7,70.35);
	this.instance_49._off = true;

	this.instance_50 = new lib.Tween58("synched",0);
	this.instance_50.setTransform(21.7,59.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_48}]},19).to({state:[{t:this.instance_49}]},4).to({state:[{t:this.instance_50}]},3).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(19).to({_off:false},0).to({_off:true,y:70.35},4).wait(89));
	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(19).to({_off:false},4).to({_off:true,y:59.15},3).wait(86));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-134.3,623.6,255);


(lib.PuppetShape_9copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_2("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A069D6").s().p("AC4XtQgmgjgQhRQgNg7gGhRQgMiKgyhTQgqhFhBg3QgvgogvgvQgigigagqQggg1ghhHQg0h0gBhpQgChRAKg1QARhhAYhHIAqh6QAYhFAVhqQAVhvgCiwQgCkAgeijQgdibgJggQgNgvgBhFQgChfAMhOQAOhZBGguQBRgmBYAnQBYAnAUBGQAHAvgsAuQgyAzgmBeQgwCPAICNQAHCNAUBiQAYB6AaA+QAfBFARAwQATA2gEBFQgDAsgPA3QgHAXgOApIgdBPQgoBygeA9QgbA1gKA3QgZCDAnBwQAhBcAlA8QA4BdAzAuQA/A4AnArQA9BDAhBnQAaBOAFBJQAFA/gLAuQgUBWgTAQQgrAzgfAAQgPAAgMgLg");
	this.shape.setTransform(7.7865,2.2377);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-151.1,67.5,306.1);


(lib.PuppetShape_9copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_2("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A069D6").s().p("AC4XtQgmgjgQhRQgNg7gGhRQgMiKgyhTQgqhFhBg3QgvgogvgvQgigigagqQggg1ghhHQg0h0gBhpQgChRAKg1QARhhAYhHIAqh6QAYhFAVhqQAVhvgCiwQgCkAgeijQgdibgJggQgNgvgBhFQgChfAMhOQAOhZBGguQBRgmBYAnQBYAnAUBGQAHAvgsAuQgyAzgmBeQgwCPAICNQAHCNAUBiQAYB6AaA+QAfBFARAwQATA2gEBFQgDAsgPA3QgHAXgOApIgdBPQgoBygeA9QgbA1gKA3QgZCDAnBwQAhBcAlA8QA4BdAzAuQA/A4AnArQA9BDAhBnQAaBOAFBJQAFA/gLAuQgUBWgTAQQgrAzgfAAQgPAAgMgLg");
	this.shape.setTransform(7.7865,2.2252);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A069D6").s().p("AD0XaQgpgfgYhPQgSg7gNhOQgZiJg7hMQgxg/hHgxQgzgjg0grQgjgdgggqQgng1gkhCQg+hxgHhpQgGhRAHg3QAOhlAUhGIAnh9QAVhFAThrQALhCAEhQQADg5gBhWQgDkFgdifQgaiUgLgnQgMgtgBhIQgCheAMhOQAPhZBGguQBSglBYAoQBXAnAUBGQAGAvgsAtQgwAzgoBeQgxCPAGCNQAHCMAUBiQAaB+AaA5QAfBFAQAwQAUA3gDBDQgCAsgPA2QgGAYgnB4QgkBxgcA+QgZA5gIA0QgSCFAvBpQAnBXArA6QA/BUA5AqQA/AtAxAqQBDA7AsBlQAiBLANBIQALA/gHAvQgNBXgSASQgoA6ggAAQgNAAgLgJg");
	this.shape_1.setTransform(13.9171,0.1708);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A069D6").s().p("AEtXHQgsgcgehMQgWg2gWhQQgliFhDhHQg4g8hKgpQgygbg8gqQgogdggglQgsgxgphAQhHhsgOhpQgMhSADg3QAJhmAQhHIAgiAQAPg2ATh+QAQhwgEi0QgFkNgaiYQgbifgIgdQgMgsgBhJQAAhkANhIQAPhZBHgtQBRgkBZAoQBYAoASBGQAHAugtAuQgzA0goBcQgzCPAGCMQAGCNAUBhQAZB7AcA8QAcA9AVA1QAVA3gCBCQAAApgOA5QgFAWgMAqIgXBQQghB6gWA3QgWA4gEA2QgKCFA4BlQAuBTAvA2QBHBQA7AiQBJArAvAjQBHA0A3BgQAoBJATBGQARA+gDAvQgEBZgQASQgmBAghAAQgLAAgKgGg");
	this.shape_2.setTransform(20.433,-1.9004);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A069D6").s().p("AFlWyQgtgYgmhJQgXgugghTQgyiChJhCQg8g2hOglQg4gag7gjQgsgagigiQgrgqgyhBQhOhmgYhpQgShUAAg0QABhgAMhQQAGgpAShaQAJgrAQiNQAMhygFi1QgHkWgYiRQgYiZgJgkQgLgsAAhJQABhhANhLQARhaBHgrQBSgkBXAqQBYAoARBHQAHAvgtAtQg0AygpBdQg0CNAECNQAFCKAUBjQAYB5AdA8QAhBDASAvQAWA3AABAQAAAmgKA7QgHAlgaBrQgdCHgPAsQgSA5AAA2QAACFA/BhQA3BSAxAwQBMBJA/AgQBKAkAzAfQBNAvA9BbQAwBEAZBFQAXA8ABAvQADBZgOAUQghBGgjAAQgJAAgKgFg");
	this.shape_3.setTransform(26.9265,-4.0396);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A069D6").s().p("AGoWdQgvgUgshFQgegwglhMQg9h+hPg+QhAgzhRggQg2gWhBggQgtgXgkggQgygqgzg5QhWhigfhlQgahUgEgzQgHhgAGhRQADgvAMhXQADgbADg1IAHhsQAIhvgHi9QgLkmgTiDQgZihgGgcQgLgtABhJQAChhAOhLQAShYBIgsQBSgjBXArQBXAqARBHQAFAvgtAsQg0AzgqBbQg3COADCMQAECPATBdQAZB4AeA8QAlBIAQAnQAXA3ACA+QABAngIA5IgLA/IgNBQQgTCHgLAvQgNA5AEA3QALCEBHBdQA+BQA0AsQBTBGA/AaQBMAgA2AcQBOAoBGBWQA1BAAfBCQAcA7AFAuQALBYgMAVQgbBMglAAQgIAAgJgDg");
	this.shape_4.setTransform(32.336,-6.2825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A069D6").s().p("AHrWHQgxgPgyhBQglgygphEQhJh6hTg7QhEgxhUgcQg9gVg8gbQgtgUgngeQg0gng3g2QhdhbgnhiQghhTgIgxQgRhjgBhOQgBgqAEheQACgZgBg5IAAhuQABhfgJjSQgIi1gEg2QgHh3gKhKQgVicgIgiQgKgwAChGQAEhiAPhKQAThYBJgrQBTghBWAsQBXArAPBHQAFAvguAsQg1AxgsBbQg4CMACCNQAACKAVBjQAXB1AgA8QAnBKAQAjQAYA1AFA9QACAjgFA8IgHA+QgEAugCAjQgKCVgFAhQgIA3AJA6QAYCEBPBZQBBBKA6AsQBYBDBAAXQBLAbA6AaQBPAjBNBRQA6A8AkA+QAhA4AKAuQASBWgKAWQgWBSgnAAQgGAAgHgCg");
	this.shape_5.setTransform(37.791,-8.5095);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A069D6").s().p("AItVxQgygLg3g9Qgkgng1hIQhWh3hWg4QhJgvhUgZQhAgUg7gXQgvgTgogbQg8gqg0gtQhkhWguhcQgnhNgOgyQgahkgJhNQgHhCgChGIgHhUQgHhAgCgwIgRk2IgMjtQgIh9gIhGQgTibgHgkQgJguADhIQAFhfARhNQAUhYBJgpQBTggBXAtQBVAtAPBHQAEAvgvArQg2AxgtBaQg7CNAACMQAACIATBjQAYB1AhA7QArBMAOAeQAZA1AHA6QADAagBBEQgDBpABAkQAFCagCAdQgCA7APA1QAkB/BYBZQBJBJA6AoQBeBBBAAVQBIAXA/AZQBRAgBRBKQA+A5AqA6QAlA0ANAtQAbBUgJAYQgOBXgqAAIgKgBg");
	this.shape_6.setTransform(43.2657,-10.8006);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A069D6").s().p("AIJV9QgygOg0g/QgjgqgwhJQhSh6hSg4QhGgwhUgaQg3gShDgcQgugTgngdQg3gng3gzQhfhYgrhgQgjhOgMg0QgUhkgFhOQgDg0ABhUQAAgWgDg9QgDhCAAgtQgBhqgLjIIgMjtQgHh5gKhIQgVijgGgcQgKgvADhHQAEhfAQhNQAThYBJgqQBUggBWAsQBWAsAPBHQAFAvgvArQg0AxguBbQg5CNABCMQABCOATBeQAXBzAhA+QApBMAPAfQAYA2AGA7QADAggEA/IgEA+QgDAsgBAkQgECegDAYQgGA6AMA3QAcCCBUBZQBHBMA4AnQBZBCBBAWQBHAZA/AaQBPAhBQBOQA8A6AnA9QAjA2ALAuQAWBVgJAXQgSBUgoAAQgGAAgGgBg");
	this.shape_7.setTransform(40.246,-9.5321);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A069D6").s().p("AI8VrQgzgKg4g7Qgjglg4hJQhZh2hXg3QhLgwhSgYQhEgVg4gVQgrgQgsgdQg+gqg0grQhlhWgwhaQgphOgOgwQgdhlgKhLQgHg4gFhRQgBgSgIhCQgHhAgDgxIgTk2IgNjuQgIh+gIhFQgTiigGgdQgJgvAEhHQAFhjARhJQAUhXBKgqQBTggBWAuQBWAuAOBGQAEAvgvArQg3AygsBZQg7CLgBCNQAACKASBiQAYB0AhA7QAqBKAQAgQAZA1AIA5QADAaAABDQgCBhACArIAGBuQACAzAAAWQgDA3ASA6QAmB/BaBYQBJBHA8ApQBhBBA+AUQBQAZA4AVQBQAfBTBJQA/A4ArA5QAmA1AOArQAcBUgHAYQgNBYgrAAIgJgBg");
	this.shape_8.setTransform(44.47,-11.3183);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A069D6").s().p("AH8WBQgygOgzhAQghgpgwhLQhNh6hTg5QhHgxhSgbQg+gUg8gaQgrgTgqgeQg4gqg1gyQhehZgphhQgjhRgJgyQgThjgDhPQgCgrAChcQABgZgCg6QgChEAAgrQAAhfgKjSIgMjtQgHh4gKhJQgWiigGgcQgKguADhIQADhgARhMQAShYBJgqQBTghBXAsQBWAsAPBGQAFAvguAsQg1AxgsBbQg5CMABCNQABCQATBcQAYB2AgA7QAqBPANAeQAZA1AFA8QADAfgFBAIgFA+QgEAugBAiQgHCbgDAcQgHA3ALA6QAaCBBSBaQBDBLA5AqQBbBDA/AWQBOAbA3AYQBQAjBOBOQA7A8AmA9QAiA3ALAtQAUBXgKAWQgTBTgoAAQgGAAgGgCg");
	this.shape_9.setTransform(39.153,-9.0926);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A069D6").s().p("AIjV0QgxgLg4g+QgngsgwhFQhVh4hVg3QhHgvhUgaQg4gShDgaQgsgRgrgdQg4gng3gxQhjhWgtheQgnhPgMgxQgZhlgHhMQgEgvgDhZQgBgWgFg+QgFhCgCguQgChbgNjZIgMjuQgHh7gJhHQgUifgHgfQgJgvADhHQAFhjAQhJQAUhZBJgpQBTggBXAtQBVAtAPBGQAFAvgvAsQg1AwguBbQg6CMAACNQAACMAUBfQAXB0AhA8QAoBJAQAiQAaA0AGA8QADAcgCBBIgCA+QgCAsAAAkQACCcgCAbQgEA3APA5QAhCABXBZQBHBIA7AqQBcBBBBAVQBGAXBBAZQBPAgBSBMQA9A5ApA7QAkA1AOAtQAYBVgIAXQgQBWgpAAIgKgBg");
	this.shape_10.setTransform(42.347,-10.4404);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A069D6").s().p("AJJVmQgygJg6g6Qgsgtgxg/Qhbh2hYg3QhLguhUgZQhCgTg5gWQgvgRgpgcQhBgrgxgpQhmhTgyhZQgrhQgOguQgfhjgMhMQgJg+gGhLIgKhUQgJg/gDgzIgWk3IgNjuQgGh/gIhEQgTijgGgdQgJgvAEhHQAFhgAShMQAUhYBKgoQBTggBWAuQBWAuAOBGQADAwgvAqQg2AwguBbQg7CNgBCLQgBCKATBhQAYB1AhA6QAsBNAOAcQAaA2AIA4QADAeAAA/IABA9QAAAqADAlIAHBtQAEAzgBAWQAAA6ASA3QApB+BcBYQBIBFA9AqQBlBCA8ASQBOAZA6AVQBRAfBUBIQBAA3ArA4QAnAzAPAsQAdBTgHAYQgLBZgrAAIgJgBg");
	this.shape_11.setTransform(45.5168,-11.7813);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-151.1,137,306.1);


(lib.PuppetShape_8copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_2("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A069D6").s().p("AJvVYQgzgGg8g4Qgsgog3hAQhjh0hZg1QhQgwhRgWQhDgTg6gUQgvgRgpgaQg+gmg3gqQhphRg2hVQgwhOgQgsQgmhmgPhIQgNg6gLhOIgPhUQgMg/gGg1QgQiigLiXQgFhAgJiwQgHiEgHhAQgSingEgZQgJgwAFhGQAGhkAShIQAVhYBKgoQBUgeBWAuQBUAuAOBHQADAwgwAqQg3AxgtBYQg9CMgDCMQgBCLASBgQAXByAjA8QA0BaAHAOQAbA1AJA2QADATAEBJQADBWAHA0IAOBsQAHA0ABAWQADA3AWA5QAxB8BhBXQBMBEA+ApQBnBAA9ATQBLAWA+AWQBQAbBXBHQBCA0AtA2QApAxASArQAiBSgGAYQgHBcgtAAIgHgBg");
	this.shape.setTransform(48.7063,-13.1469);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A069D6").s().p("AI8VrQgzgKg4g7Qgjglg4hJQhZh2hXg3QhLgwhSgYQhEgVg4gVQgrgQgsgdQg+gqg0grQhlhWgwhaQgphOgOgwQgdhlgKhLQgHg4gFhRQgBgSgIhCQgHhAgDgxIgTk2IgNjuQgIh+gIhFQgTiigGgdQgJgvAEhHQAFhjARhJQAUhXBKgqQBTggBWAuQBWAuAOBGQAEAvgvArQg3AygsBZQg7CLgBCNQAACKASBiQAYB0AhA7QAsBNAOAdQAZA1AIA5QADAaAABDQgCBhACArIAGBuQACAzAAAWQgDA3ASA6QAmB/BaBYQBJBHA8ApQBhBBA+AUQBQAZA4AVQBQAfBTBJQA/A4ArA5QAmA1AOArQAcBUgHAYQgNBYgrAAIgJgBg");
	this.shape_1.setTransform(44.47,-11.3183);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A069D6").s().p("AIJV9QgygOg0g/QgjgqgwhJQhSh6hSg4QhGgwhUgaQg3gShDgcQgugTgngdQg3gng3gzQhfhYgrhgQgjhOgMg0QgUhkgFhOQgDg0ABhUQAAgWgDg9QgDhCAAgtQgBhqgLjIIgMjtQgHh5gKhIQgVijgGgcQgKgvADhHQAEhfAQhNQAThYBJgqQBUggBWAsQBWAsAPBHQAFAvgvArQg0AxguBbQg5CNABCMQABCOATBeQAXBzAhA+QApBMAPAfQAYA2AGA7QADAggEA/IgEA+QgDAsgBAkQgECegDAYQgGA6AMA3QAcCCBUBZQBHBMA4AnQBZBCBBAWQBHAZA/AaQBPAhBQBOQA8A6AnA9QAjA2ALAuQAWBVgJAXQgSBUgoAAQgGAAgGgBg");
	this.shape_2.setTransform(40.246,-9.5321);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A069D6").s().p("AHVWOQgwgQgwhDQghgsgqhMQhFh6hSg9QhEgyhRgdQg0gShFgfQgtgVgngfQg1gqg0g1QhahdglhkQgehRgHgzQgOhnAChLQAAgwAHhXQACgaAAg4IADhtQAEh1gJi6QgHifgFhMQgHh1gLhMQgWiggHgdQgLgvADhHQADhiAPhKQAShZBIgqQBUgiBWAsQBXArAPBGQAFAvgtAsQg0AxgsBcQg4CNACCMQACCMAUBhQAYB1AfA9QAnBMAPAiQAYA1AEA+QACAigGA9IgIA/QgGAtgDAjQgNCQgHAmQgKA3AIA6QASCCBNBcQBBBNA3ArQBYBFA+AXQBEAZBAAeQBQAlBKBSQA4A9AjBAQAfA4AJAvQAQBXgLAWQgXBQgmAAQgHAAgIgDg");
	this.shape_3.setTransform(36.0009,-7.7741);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A069D6").s().p("AGhWfQgvgTgrhHQgbgsgnhQQg9h/hNg+QhCg1hOgfQg/gZg4geQgsgWglghQgvgng1g9QhWhjgehlQgXhQgFg3QgGhhAGhQQADghANhkQAEgcAEg1IAHhrQAIhvgHi8QgJkkgViGQgYiggHgdQgLgwABhFQAChiAOhKQAShZBIgrQBSgjBXAqQBXAqARBHQAFAvgtAsQg0AzgqBbQg2COADCMQADCLAUBiQAZB3AeA8QAnBPANAhQAXA1ACBAQABAlgIA7QgGAlgTBrQgVCIgLAtQgOA5AEA3QAJCCBHBgQA8BOA1AuQBSBHA/AaQBRAiAxAaQBOArBFBVQA0BBAeBCQAbA6AGAvQAKBYgMAVQgcBMglAAQgIAAgJgEg");
	this.shape_4.setTransform(31.7433,-6.0244);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A069D6").s().p("AFtWwQgugXgmhJQgcg0gdhMQg0iChJhBQg+g3hNgkQg9gbg3ghQgogXgmgkQgugsgwg+QhQhogXhmQgThVAAgzQAAhhALhQQAEgfAThkQAKgxAOiHQAHhFABhSQABg2gDhbQgHkVgXiSQgZibgIgiQgMgtABhIQABhhANhLQAQhZBIgsQBSgkBYAqQBXApASBGQAGAvgtAtQgzAygqBdQg1CNAFCNQAECOAUBgQAYB2AeA+QAhBFASAsQAWA4AAA/QAAAqgKA3QgHAlgZBrQgaB/gQA1QgSA1AAA6QABCEBBBhQA0BPA1AyQBMBKA/AeQBSAoAsAbQBMAtA/BbQAwBDAbBFQAXA8ACAvQADBagOATQggBHgjAAQgJAAgJgFg");
	this.shape_5.setTransform(27.5234,-4.3082);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A069D6").s().p("AE+XAQgtgbgghLQgXg1gYhPQgqiEhFhFQg4g6hNgoQg5gdg3glQgogbgiglQgtgxgqg+QhJhpgShrQgOhUADg0QAFhjAQhLIAeiBQANg7ARh7QAPhugEi2QgFkPgaiXQgaibgJghQgLgqgBhLQAAhhANhLQAQhZBHgtQBSgkBYAoQBXAoATBHQAGAvgtAtQgzA0goBcQgzCNAFCOQAGCSAUBbQAZB7AcA7QAiBKAPApQAVA2AABCQgBAqgNA4IgQBAIgVBPQgfB6gVA4QgVA4gDA2QgHCFA6BkQAzBVAvAyQBIBOA8AhQBOArAsAfQBJAyA5BeQArBHAWBHQASA9gBAvQgDBZgPATQgjBCgiAAQgLAAgKgGg");
	this.shape_6.setTransform(22.6511,-2.6216);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A069D6").s().p("AEUXPQgqgdgchNQgRgxgVhXQggiGg/hKQg1g8hKguQg1ggg2gpQgmgegfglQgqgzgnhBQhChugMhqQgJhTAFg1QAKheAThPIAkh+QAShCAShxQALhCADhRQADg6gChVQgFkLgbiZQgciegIgeQgMgvAAhGQgBhhAMhLQAPhaBHgsQBRglBYAoQBYAnASBGQAHAwgrAtQgzA0goBcQgyCPAHCNQAHCPATBfQAYB6AcA8QAgBEARAwQAUA2gCBEQgBAogOA6QgGAWgMAqIgZBPQgkB4gYA5QgXA3gGA2QgOCEA0BoQAtBXAsA1QBDBSA6AmQBCAqAzAnQBGA5AxBhQAmBJAQBIQAPA+gFAvQgIBZgRASQgnA9ggAAQgMAAgLgIg");
	this.shape_7.setTransform(17.499,-0.9772);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A069D6").s().p("ADmXeQgoghgWhOQgPg5gNhRQgWiJg5hOQgvhBhHgyQg1glgvgrQgjgdgfgqQgng3gihCQg7hwgGhqQgFhTAHg1QAQhlAUhFIAoh9QAVg/AUhwQAUhvgCiyQgDkFgdieQgciYgKgjQgMgtgBhIQgBhjALhJQAPhaBGgtQBSglBYAnQBYAoASBFQAIAvgsAtQgyA1gnBcQgxCPAHCNQAHCMAUBjQAYB6AcA9QAZA4AWA9QATA2gDBEQgCAtgPA2QgGAWgOAqIgaBPQglBwgdA/QgZA2gJA3QgTCFAtBqQAmBZAqA5QA8BWA4AqQBFA0ApAnQBCA8AqBmQAgBMALBIQAKA/gIAvQgPBWgSASQgpA4ggAAQgNAAgMgJg");
	this.shape_8.setTransform(12.5278,0.6356);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A069D6").s().p("AEDXVQgogfgbhOQgSg4gQhQQgdiIg9hLQgzg+hIgvQg3gjgygoQgmgegegnQgpg3glg/QhAhvgKhqQgHhVAGgzQANhnAThEIAlh+QAVhHARhrQAThvgDiyQgEkJgbibQgdidgIgfQgMgugBhGQgBhhAMhMQAOhZBHgtQBSglBYAnQBXAoATBGQAHAvgrAtQgyA0goBdQgyCPAHCMQAGCMAUBjQAZB7AcA8QAhBKAPAqQATA2gDBEQgBApgOA5QgGAXgNApIgZBPQgkB1gaA7QgZA5gGA0QgQCFAxBoQAqBWArA5QBBBTA6AnQBCAtAwAoQBFA7AvBiQAjBLAPBHQANA/gGAvQgLBYgRARQgnA8ghAAQgMAAgMgIg");
	this.shape_9.setTransform(15.6614,-0.3813);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A069D6").s().p("ADeXhQgoghgVhPQgQg/gKhLQgUiKg4hPQguhAhGg0Qgwgjg0guQglghgbgoQgmg3gihCQg6hzgFhoQgEhWAIgxQAPhjAWhHIAoh7QAXhGAThrQAMhBAEhQQADg7gBhUQgDkFgdieQgbiYgKgjQgNgugBhHQgChhAMhLQAPhaBGgtQBRglBZAnQBXAnATBGQAIAvgsAtQgxAzgoBeQgxCNAHCPQAICOATBhQAZB6AbA9QAfBHAQAuQAUA2gEBFQgCAqgPA4QgGAXgOApIgbBPQgnB2gcA5QgaA5gIA0QgVCEAsBsQAkBWAqA9QA+BZA1ApQBCA0ArAoQBBA+AoBmQAfBMAKBJQAJA/gJAuQgQBYgSAQQgpA3ggAAQgOAAgLgJg");
	this.shape_10.setTransform(11.6254,0.9377);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A069D6").s().p("AERXRQgqgegchNQgTg3gShRQggiGg+hLQgzg7hLgvQg2ghg0gpQgngegfgmQgqg0gmhAQhChvgLhpQgJhWAGgyQALhlAShHIAkh/QATg/AShzQALhCADhRQACg6gBhVQgEkJgcibQgbiagJgiQgMgsgBhJQgBhhANhLQAPhaBGgsQBSglBYAoQBXAoATBFQAGAwgrAtQgzA0gnBcQgyCOAGCNQAHCRAUBeQAZB7AbA8QAcA7AVA4QAUA2gCBEQgCAogOA6QgFAXgNApIgZBPQgkB6gYA3QgXA2gHA3QgOCEA0BoQArBWAtA3QBCBSA6AmQBGAtAuAlQBHA5AwBhQAmBKAQBIQAOA/gFAvQgKBYgQASQgnA8ghAAQgMAAgKgHg");
	this.shape_11.setTransform(17.1458,-0.8505);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A069D6").s().p("AD0XaQgpgfgYhPQgSg7gNhOQgZiJg7hMQgxg/hHgxQgzgjg0grQgjgdgggqQgng1gkhCQg+hxgHhpQgGhRAHg3QAOhlAUhGIAnh9QAVhFAThrQALhCAEhQQADg5gBhWQgDkFgdifQgaiUgLgnQgMgtgBhIQgCheAMhOQAPhZBGguQBSglBYAoQBXAnAUBGQAGAvgsAtQgwAzgoBeQgxCPAGCNQAHCMAUBiQAaB+AaA5QAfBFAQAwQAUA3gDBDQgCAsgPA2QgGAYgnB4QgkBxgcA+QgZA5gIA0QgSCFAvBpQAnBXArA6QA/BUA5AqQA/AtAxAqQBDA7AsBlQAiBLANBIQALA/gHAvQgNBXgSASQgoA6ggAAQgNAAgLgJg");
	this.shape_12.setTransform(13.9171,0.1708);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A069D6").s().p("ADXXjQgoghgUhQQgPg6gLhQQgRiJg4hRQgthAhFg2QgxgkgxguQglgigbgoQglg3ghhCQg4hygFhqQgEhUAJgzQAQhjAWhGIAph7QAYhJAShnQANhCAEhPQADg7gBhUQgDkEgdifQgciYgKgjQgMgwgBhFQgChgAMhMQAOhZBGguQBSglBYAnQBXAnAUBFQAHAvgsAuQgwAzgoBeQgxCQAHCMQAICOATBhQAZB7AbA8QAeBFARAwQATA3gDBEQgDArgPA4QgHAYgoB3QgnBygdA9QgaA2gJA2QgWCDArBuQAjBXApA9QA7BYA2AsQBFA3AnAmQA/BAAoBlQAdBNAKBIQAIBAgJAuQgRBXgSAQQgpA3ggAAQgNAAgMgKg");
	this.shape_13.setTransform(10.7549,1.2149);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-151.1,143.5,304.1);


(lib.PuppetShape_8copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_2("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A069D6").s().p("AJvVYQgzgGg8g4Qgsgog3hAQhjh0hZg1QhQgwhRgWQhDgTg6gUQgvgRgpgaQg+gmg3gqQhphRg2hVQgwhOgQgsQgmhmgPhIQgNg6gLhOIgPhUQgMg/gGg1QgQiigLiXQgFhAgJiwQgHiEgHhAQgSingEgZQgJgwAFhGQAGhkAShIQAVhYBKgoQBUgeBWAuQBUAuAOBHQADAvgwArQg3AxgtBYQg9CMgDCMQgBCLASBgQAXBxAjA+QAsBJAPAeQAbA1AJA2QADATAEBJQADBWAHA0IAOBsQAHA0ABAWQADA3AWA5QAxB8BhBXQBMBEA+ApQBnBAA9ATQBLAWA+AWQBQAbBXBHQBCA0AtA2QApAxASArQAiBSgGAYQgHBcgtAAIgHgBg");
	this.shape.setTransform(48.7063,-13.1469);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A069D6").s().p("AKEUhQg0gChBgxQgqgghCg9QhshmhegnQhTgihUgLQg1gHhNgRQgygMgrgWQg/ggg8goQhuhKg4haQguhIgSg0QgghcgOhTQgLg9gGhMIgLhUQgJg/gDgzQgQjXgGhgIgNjuQgIiAgHhDQgTikgFgcQgJgtAEhJQAFhgAShMQAUhYBKgpQBUgfBVAuQBVAuAPBHQADAvgvAqQg3AzgtBYQg8CNgBCLQAACNASBeQAXBxAiA+QAsBNAOAcQAbA2AHA3QADAWABBFIABA+QAAAqADAkIAIBsQAEAyAAAWQAAA2AUA4QAtB8BfBKQBOA9BBAhQBlAxBCAKQBOALA/AMQBUARBdA6QBHAsAzAyQAuAtAWApQApBNgDAZQADBhgyAAIgCAAg");
	this.shape_1.setTransform(49.9237,-18.7979);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A069D6").s().p("AIeTBQgxgehDgzQhzhXhigaQhVgWhWABQg3AAhOgJQgsgFg0gTQg8gXhHgpQhyhDg8hdQgvhMgRgyQgehdgMhUQgIg4gEhRIgIhUQgGg/gCgyQgDhDgFhcIgKiWIgNjtQgHh9gIhGQgUingFgYQgJguADhIQAFhiARhKQAUhYBKgpQBTggBWAuQBVAtAPBHQAEAugvAsQg1AwguBbQg7CLgBCNQAACLATBgQAXByAiA+QAsBPANAbQAaA1AHA4QADAZgBBEIgCA+QgBArABAjIAEBrQACAzgBAVQgDA0ATA4QAVA9AkAwQAjAuAuAfQBRA2BBAZQBmAkBCAAQBTAAA7ADQBWAGBkAuQBLAkA5AtQAzAnAZAnQAxBLgBAYQAMBhg0AEIgIAAQgxAAhAgog");
	this.shape_2.setTransform(51.1759,-24.4225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A069D6").s().p("AItSUQgmgThVgzQh4hIhlgMQhVgJhYALQg7AIhLgCQgwgBg0gOQg9gRhLgmQh4g8g/hfQgxhMgRgzQgchbgMhYQgGgugDhbQAAgUgFg/QgFhBgBgwQgChNgNjmIgNjtQgHh7gJhHQgTiggHgfQgKgxAEhFQAFhjAQhJQAUhYBJgpQBTghBXAtQBVAtAPBHQAFAvgvArQg2AygtBZQg6CMAACNQAACJATBiQAXB0AiA9QAnBGARAkQAZA0AHA6QADAggDA+IgDA9QgCAsAAAiIABBqQABAygCAWQgDA0ASA3QAUA7AkAuQAjAsAuAaQBTAwBCAQQBmAZBBgJQBbgMAxgEQBVgHBrAjQBPAaA+AnQA2AjAeAkQA4BGABAYQAVBggzAIQgKACgLAAQgsAAg7gdg");
	this.shape_3.setTransform(52.4262,-30.0915);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A069D6").s().p("AI8RlQghgNgmgRIg5gbQh9g5hnABQhYABhTAWQg3APhPAGQgwADg2gJQg8gKhRgiQh9g0hEhgQg0hNgRgzQgchXgMhcQgHg2gBhTIgFhUQgEhAgBgxQgBhGgFhYIgIiUIgNjtQgHh6gJhIQgTifgHgfQgKguAEhIQAEhjARhJQAUhZBJgpQBUggBVAtQBWAsAPBHQAEAvgvArQg2AygsBaQg6CMAACMQAACMATBgQAYBzAhA9QAmBGASAkQAaA2AFA5QADAggCA+IgEA+QgDAqAAAjIAABqQAAAygCAUQgEA0ATA2QATA6AlArQAjAqAuAVQBZAqA/AIQBkAOBCgSQBLgUA9gNQBWgRBsAWQBSAQBCAhQA7AcAhAiQA+BAADAYQAeBdgxAOQgQAEgTAAQgoAAg0gTg");
	this.shape_4.setTransform(53.686,-35.7395);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A069D6").s().p("AJMQ1QgigJgogOIg7gVQhBgWg9gHQg5gHgvAHQhZAMhPAfQg0AUhRAPQgtAIg5gEQg7gFhWgcQhDgWg1glQgygjgigtQg3hJgTg1QgdhUgPhfQgHgzgChXIgFhUQgEg/gBgyQgBhFgFhaIgJiTIgMjtQgHh6gJhIQgTifgHggQgJguADhIQAEhjARhJQAUhYBJgpQBTghBWAtQBWAtAPBHQAEAvgvArQg1AxgtBaQg7COABCLQAACLATBgQAYB0AgA8QAoBIARAiQAZA1AGA6QAEAigEA8IgEA9QgCAsAAAhIAABpIgBBGQgDAwATA4QAVA5AlAoQAlAnAuARQBcAiA+ACQBkADA+gZQBWgjAugPQBTgbBuAKQBTAIBHAaQA9AWAkAfQBEA6AFAXQAnBagwASQgWAIgdAAQgiAAgqgLg");
	this.shape_5.setTransform(54.8993,-41.3661);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A069D6").s().p("AkzQeQhEgRg4giQg1gggkgrQg9hKgTgzQgihVgQheQgKg1gChUQgBgRgGhEQgFg/gCgyQgBhFgGhbIgJiTIgMjuQgHh8gJhGQgUingFgYQgKgvAEhHQAEhgARhMQAVhZBJgoQBTghBWAuQBWAtAOBHQAFAugwAsQg1AwgtBbQg7CMAACNQAACLATBfQAXB0AhA8QArBLAOAeQAZA1AHA6QADAdgCBAIgDA+QgCAqAAAiIACBoQACAygBATQgCAxAVA2QAWA3AnAlQAmAkAvANQAsAMAsAGQAoAFAagCQBkgHA6gfQBDgmA6gbQBPgkBwgCQBUgCBJATQA/AQAnAbQBKA0AHAWQAvBWguAWQguAYhRgOQghgGgqgKIg9gOQiEgehjAaQhWAWhMAnQgwAZhSAYQgqAMg8ABIgFABQg8AAhUgVg");
	this.shape_6.setTransform(56.0055,-42.6999);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A069D6").s().p("AkYQbQhGgLg8gfQg3gcgngqQhBhDgXg1QgmhVgUhdQgLgwgGhaIgJhUQgHg/gDgzQgChDgHheIgKiUIgNjuQgHh/gIhEQgRiegHghQgJgsADhKQAGhhARhLQAVhZBJgoQBUggBWAuQBUAtAPBIQAEAugvArQg1AwgvBbQg7CMgBCMQgBCKATBhQAYB1AhA5QAtBQAMAaQAaA0AHA5QAEAdgBA/IgCA9QgBApACAjIAFBnQADAygBATQAAAvAYA1QAYA1ApAiQAoAhAvAJQAtAIAsABQApACAZgEQBigRA3gmQBIgyAugbQBLgsBvgOQBTgKBLALQBBAKAqAXQBNAsAKAWQA3BRgrAaQgsAbhSgFQgggCgsgGIg+gJQiGgQhgAlQhVAghHAuQgwAghNAdQgqARg7AHQgTACgWAAQgxAAg8gKg");
	this.shape_7.setTransform(57.0817,-44.0308);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A069D6").s().p("AkpQdQhFgOg6ghQg1gfgmgrQg+hFgVg1QgkhYgRhbQgKgzgEhXIgHhUQgGg/gCgzQgChFgGhbIgJiUIgNjuQgHh9gIhFQgTiigGgdQgJguADhIQAFhjARhJQAUhXBKgqQBTggBWAuQBVAtAPBHQAEAugvAsQg1AwguBbQg7CLgBCNQAACLATBgQAXB0AiA8QAsBPANAZQAZA2AHA5QADAggBA8IgDA+QgCAqABAiIAEBnQABAxgBAUQgBAwAWA2QAXA3AoAjQAmAkAvALQAtAKAsAEQApAEAZgDQBjgLA5giQBGgrA1gbQBPgoBugGQBTgFBKAQQBBAOAoAZQBLAxAIAWQAzBTgtAZQgtAYhSgKQghgEgrgIIg9gNQhDgMg9ACQg5ACguAOQhVAahLAqQgxAdhPAZQgrAOg7AEIgTAAQg3AAhLgQg");
	this.shape_8.setTransform(56.4727,-43.2084);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A069D6").s().p("AkSQaQhGgKg8geQg4gbgogpQhBhDgZg1QgmhVgWhcQgMgzgGhXIgJhVQgIg+gCg0QgDhBgHhgIgKiUIgNjuQgHh/gIhEQgSifgHggQgJgwAEhHQAGhgARhLQAVhYBJgpQBUgfBWAtQBVAuAOBHQAEAvgvArQg3AwgtBaQg8CMgBCMQAACJASBiQAXBzAiA7QAsBNAOAcQAaA1AHA5QAEAggBA8IgBA9QgBApABAiIAHBmQADAzAAASQgBAvAZA1QAZA1ApAhQAoAhAwAHQAtAIArAAQApABAZgFQBhgSA3gnQBFgyAvgdQBLgvBugQQBTgMBLAKQBCAJAqAWQBPArAKAVQA4BQgrAcQgrAbhSgDQghgCgrgFIg+gHQhDgHg+AHQg4AHgtASQhUAhhGAwQguAghOAgQgpARg7AIQgXADgcAAQgsAAg4gIg");
	this.shape_9.setTransform(57.2676,-44.3007);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A069D6").s().p("AkiQcQhFgNg7ggQg2gegngqQg+hEgXg1QgjhUgUheQgKg0gFhWIgIhVQgHg/gBgzQgDhCgGheIgJiUIgNjuQgHh9gIhGQgTihgGgeQgKgvAEhHQAGhiARhKQAUhYBJgoQBUggBWAtQBVAuAOBHQAFAugwArQg3AzgsBYQg8CNAACLQAACKATBiQAXB0AiA7QAsBPANAaQAZA1AHA5QAEAfgCA9IgCA9QgBArABAhIAEBnQACAygBATQAAAxAWA1QAYA1AoAjQAnAjAvAKQBeATA9gHQBjgOA4gkQBDgsA1gdQBNgqBvgKQBTgHBLAOQBAAMApAYQBNAvAIAVQA1BTgsAaQguAZhQgIQghgDgrgHIg+gLQiFgUhiAhQhXAdhHAsQgtAbhRAeQgtAPg5AEIgcABQg0AAhGgNg");
	this.shape_10.setTransform(56.7313,-43.5788);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A069D6").s().p("AkOQZQhHgJg8gdQg4gcgpgoQhBhCgZg1QgmhSgXhfQgMg0gHhWIgKhUQgIg/gDg0QgDhAgHhhIgKiVIgNjuQgIiAgHhDQgTikgFgbQgJgtAEhJQAFhgAShMQAUhYBKgpQBUgfBVAuQBWAuAOBHQADAvgvAqQg2AxguBaQg8CNgBCLQAACIASBjQAXByAiA8QAsBNAOAcQAaA1AHA4QAFAfgBA9IgCA8QAAApACAjIAGBmQAEAzAAASQAAAuAZA2QAaA0ApAhQAoAgAvAHQAuAGArABQApAAAZgFQBjgUA0gnQBCgxAxggQBJguBvgTQBTgNBMAJQBCAIAqAWQBPApAKAVQA6BPgqAdQgsAchRgDQgigBgrgEIg+gHQiGgLhgAoQhTAihGAxQgwAihLAfQgpASg7AJQgaADgfAAQgrAAgzgHg");
	this.shape_11.setTransform(57.4371,-44.4728);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-151.1,160.8,302.29999999999995);


(lib.PuppetShape_7copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_2("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A069D6").s().p("AAbP5QhCgIg1giQgugcghgfQgbgZgOgVQgyhNgihiQgSgxgOhaIgPhXQgLg+gEg3QgTjagGhgIgMjvQgGiBgHhCQgQiXgHgoQgKgwAEhGQAHhlAQhHQAUhYBJgpQBVggBUAuQBWAtAPBGQADAwguArQg1AvgvBcQg8CPgCCKQgCCLASBgQAXBzAiA7QAwBTAKAUQAbA1AIA2QADAaABBBIABA8QABAoADAhQAEAlAJA+IAIBDQADAqAhAzQAcAuAqATQApATAlgOQAlgOAigUQAkgWALgPQAbgjAKgYQAOghgHgbIgPg6QgKgggLgXQgLgVgOgqIgdhXIgsh5QgTg4gFgmQgKhVANgZQAhhaAwATQAuAUAsBGQAsBFAUBCQAZBPARBWQAJAsANBYQAIAyABA4QAAAhgBBBQgBArgRAuIgeBCQgLAXgVAZQgLAMgcAcQgrAphmAjQg0ASg1AAQgVAAgVgDg");
	this.shape.setTransform(24.472,-48.1178);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A069D6").s().p("AAMP7QhBgKg1giQhSg1gjg2QgfgxgVgyQgOgfgQguQgQgwgNhcIgOhXQgKg+gEg3QgRjZgGhgIgLjuQgHiBgHhDQgSijgGgcQgJgvAEhGQAFhiARhKQAUhYBJgpQBTghBWAuQBWAtAOBGQAFAwgvArQg2AxgtBaQg8COgCCLQgBCNASBfQAWBzAiA6IA6BoQAaA1AIA3QAEAgAAA7IAAA8QABAoADAiIALBjQAGAyABARQACApAgA1QAcAuApAUQAoAUAmgNQAlgMAkgVQAkgUAMgPQAcghAMgZQAPghgFgcIgLg8QgIghgJgZQgJgWgKgsIgUhbQgWhfgHghQgLg6ACgpQADhVAQgXQAvhUAsAbQAqAaAhBLQAhBMALBDQANBPAIBXIAKCDQADAwgDA5IgHBhQgCAqgTAtQgGAPgbAyQgMAXgWAXQgMANgcAaQgrAohnAgQgxAPgyAAQgYAAgYgEg");
	this.shape_1.setTransform(24.785,-47.8715);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A069D6").s().p("AAAP8QhBgLg1gjQhSg3gig1QgvhOgghjQgRgxgLhaIgOhXQgKg+gDg3QgRjZgGhgIgMjtQgGiBgIhDQgSijgGgcQgJgtAEhJQAGhiAQhJQAUhZBKgpQBUggBVAuQBVAsAPBIQAEAvgvArQg1AxguBaQg8COgCCLQgBCJASBjQAXBzAiA6IA5BoQAbA1AIA3QAEAhAAA6IgBA8QAAApADAhIALBkIAGBDQACApAfA0QAdAvAoAVQAoAUAmgMQAmgNAkgTQAlgTAMgQQAdggANgaQAQghgDgdIgIg9QgFgigHgaQgHgZgGgsIgLhfQgKhYgCguQgDg8AHgpQAQhTATgUQA9hLAmAgQAnAhAUBQQAVBMACBGQACBKgBBZIgCCBQAAAvgGA5IgLBfQgFAqgUAsQgHAQgbAvQgNAWgWAXQgNAOgcAYQgtAohlAdQgvAOgvAAQgbAAgagEg");
	this.shape_2.setTransform(25.4027,-47.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A069D6").s().p("AgVP7QhCgLg0giQhUg4ggg0QgegxgVgyQgOgfgPguQgRg0gKhYIgOhXQgKg+gDg2QgRjZgGhgQgEgzgJi7QgGiDgHhBQgTikgFgbQgJgwAEhGQAFhfARhMQAVhZBJgoQBUggBVAtQBWAuAOBHQAEAvgvArQg1AvgvBcQg8CNgBCLQgCCJASBjQAYB0AhA5QAtBOANAaQAbA1AHA3QAEAaABBBIgBA8QAAApADAhQADAmAIA+QAGAzAAAQQACAsAfAxQAdAvAoAUQAoAVAmgNQAngMAkgTQAkgTAOgPQAdghAOgbQASghgCgdQgEhPgJgtQgFgbgCgsIgBhhQgBhWAFg0QAFg9AOgoQAchRAWgPQBHhDAiAmQAhAmAIBSQAIBKgHBJIgQCfQgKBXgDAnQgDAsgJA6IgPBeQgGApgVArQgJARgaAsQgOAWgWAXQgNANgcAYQguAmhkAdQgvAOguAAQgbAAgagFg");
	this.shape_3.setTransform(27.5144,-47.7559);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A069D6").s().p("AgvP6QhCgKg0giQgsgdghggQgagZgNgVQgxhPgghhQgRgygMhaIgOhWQgKg+gDg2IgNijIgLiXIgNjuQgGiCgHhBQgRiggHggQgJgxAFhFQAFhgAShLQAUhZBKgoQBUggBVAuQBVAuAOBHQAEAvgvArQg2AwguBaQg8CNgCCMQgCCKATBhQAWBxAjA8QAqBJAQAfQAaA1AIA3QAEAZABBCIgBA8QABAoADAiIAKBjIAHBDQACAqAgAzQAcAuApAUQAoAUAngNQAmgNAkgTQAlgTAOgPQA/hHAAg0IgBhAQgBgkgDgbQgFg0AMh5QAQijAohLQAphNAXgKQBRg4AbArQAbApgEBUQgEBFgRBLQgtDMgLBGQgGAqgLA6IgTBcQgHApgWAqQgJASgaAqQgNAWgWAWIgpAlQguAmhkAeQgwANgvAAQgZAAgagEg");
	this.shape_4.setTransform(30.4008,-47.9029);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A069D6").s().p("AhIP4QhCgKg1ghQgsgcghgfQgbgZgOgVQgfgwgWgxQgPghgPgtQgRgxgNhaIgOhWQgLg+gEg3IgNijQgIhigDg0IgNjvQgHiDgHhAQgRiggGggQgJgxAFhFQAGhiARhKQAVhYBKgoQBTgfBWAuQBVAuAOBHQADAvgvAqQg2AwguBbQg8CNgDCLQgBCNASBeQAXByAiA7QAwBUAKAUQAbA2AIA1QAEAeABA9IAAA8QABAoADAhIALBjIAIBDQACAqAhAyQAdAtApATQAqATAlgNQAogPAjgSQAlgUANgPQBBhHADg3QADhkgBgdQgBg8AYhzQAiihA2hIQA1hGAZgHQBYgrAUAuQAUAugRBSQgNA9gcBOQg8CngUBdQgHAigPA/QgPA8gHAfQgIAogWApQgKAVgZAmQgWAjg2AtQguAnhjAeQgxAPgwAAQgYAAgYgDg");
	this.shape_5.setTransform(33.6729,-48.1455);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A069D6").s().p("AhdP1QhCgIg2ggQgtgbgigeQgbgYgOgVQghgvgXgxQgPgggQgtQgSgwgPhbIgPhWQgMg+gEg3QgUjZgHhhQgFhDgIirQgHiFgGg/QgQidgHgjQgJgwAFhGQAHhjARhJQAWhYBJgoQBVgfBVAuQBUAuAOBIQADAvgvAqQg3AxguBZQg9COgCCKQgCCJASBiQAWByAkA7QAvBSALAVQAbA2AJA1QADAaACBAIABA8QABAoAEAhIANBiQAHAyABAQQAEAqAhAxQAeAsAqASQAqASAmgPQAngPAjgUQAlgUAOgQQBBhIAFg3QAJhiACgiQAChCAkhvQAyibBGhFQA+g8AagEQBdgdAOAxQAMAygdBMQgQAsgsBXQhJCQgcBkIgbBfQgPA1gJAkQgIAmgWApIgjA7QgVAig2AuQgtAnhiAgQgzARg2AAQgTAAgUgCg");
	this.shape_6.setTransform(37.074,-48.5433);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A069D6").s().p("AhvPxQhCgGg2geQgugagjgcQgcgYgPgUQgigvgYgwQgQgfgSgtQgUgwgQhaIgShWQgMg9gFg4IgQikQgJhbgEg8QgGhLgIikQgHiHgGg+QgPiegGgiQgJgtAFhJQAHhgAShLQAVhYBLgoQBTgfBWAvQBUAvAOBHQADAvgwAqQg2AwgvBaQg+CMgDCMQgCCMATBeQAWByAjA7QAzBWAIAQQAcA2AIA0QAFAdACA9IACA7QABAoAFAgIAPBhQAIAyACAQQAEAqAjAvQAfArArAQQArAQAmgQQAngQAjgUQAkgWAPgQQBBhJAIg5IASiFQAIhIAvhpQAhhLAqg5QAlg0AmgbQBIgyAZAAQBhgPAFAzQAFAzgoBIQgRAegXAjIgmA2QhVB+giBlQgqB5gPA6QgKAmgVAoQgLAVgXAlQgWAjg0AuQgtAnhgAiQg4AUg6AAIgdgBg");
	this.shape_7.setTransform(40.5352,-49.0411);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A069D6").s().p("AhlP0QhDgIg1gfQgugagigeQgcgYgOgUQgggvgYgxQgPgegSgvQgSgvgPhbIgRhXQgLg9gFg3QgVjagHhhQgEhAgJiuQgGiFgHg/QgPicgHgkQgIgsAEhLQAHhlARhGQAVhYBLgoQBUgfBVAvQBVAuANBHQADAwgvAqQg2AvgvBaQg+COgCCKQgCCMASBfQAXByAjA7QAtBNANAaQAcA0AIA2QAEAaACBAIABA8QACAoAEAhIANBhIAJBCQAEAqAiAwQAeAsArARQAqASAngQQAmgPAkgUQAkgVAOgPQBChJAGg4QAKhYADgsQAFhDAohuQAchNAkg6QAig2AigeQBCg5AagDQBfgWAKAxQAKAygiBLQgOAggUAlIghA6QhPCIgeBmIgcBdQgQAygJAmQgJAngWAoQgKAUgZAmQgWAkg0AtQgtAnhiAhQg0ASg3AAQgSAAgSgCg");
	this.shape_8.setTransform(38.4633,-48.7041);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A069D6").s().p("AhyPwQhCgGg2gdQhZgwgkgxQgigugZgxQgPgcgTgvQgUgxgRhZIgShWQgNg+gFg3QgbkRgDgqQgFhLgIikQgHiIgGg9QgPiegHgiQgIgwAFhGQAHhkAShIQAVhXBLgpQBUgeBVAvQBUAvAOBHQADAvgwAqQg2AwgvBZQg+CMgDCMQgDCNATBeQAWBxAjA7QAzBVAJARQAbA2AJA0QAFAdACA9IACA7QACAnAEAhIAQBgQAJAzABAPQAFAqAjAvQAgArArAPQArAQAmgQQAngRAjgVQAkgVAPgQQBChJAIg6IATiFQAJhJAxhoQAjhLArg4QAogzAmgZQBKgxAZABQBhgMAEAzQADAzgqBHQgSAdgZAjIgmA0QhWB4glBoQgsB6gOA4QgJAmgWAoQgJATgZAmQgVAjg0AuQguAohfAiQg4AVg7AAIgcgBg");
	this.shape_9.setTransform(41.2323,-49.168);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A069D6").s().p("AhpPyQhDgGg2gfQhXgxgjgyQghgvgYgxQgQgfgRgtQgUgxgPhZIgRhXQgMg9gFg3Igck7QgFhHgIioQgHiGgGg+QgRihgFgfQgJgvAFhHQAHhlARhHQAVhXBLgpQBUgeBVAuQBVAvANBHQADAwgvApQg2AwgvBaQg+CNgCCLQgDCJATBiQAVBvAkA9IA7BnQAcA2AIA0QAEAaACBAIACA8QABAnAEAhIAPBhIAJBCQAEAqAiAwQAfArArARQAqARAngQQAmgPAkgVQAkgVAOgQQBChJAGg4IAQiEQAGhHArhrQAfhMAmg6QAkg0AkgdQBGg3AYgBQBggSAIAxQAIAzglBKQgQAfgWAkIgiA4QhRCCghBnIgeBcQgQAzgJAlQgJAngVAoQgKATgZAnQgVAig1AvQgtAnhhAhQg2ATg3AAQgRAAgRgCg");
	this.shape_10.setTransform(39.3989,-48.8542);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A069D6").s().p("Ah0PvQhDgFg2gdQhXgvgmgyQgigugZgwQgQgfgSgsQgWg0gPhWIgThWQgNg9gGg4IgQilIgOiXQgFhOgIihQgHiIgGg9QgPiegGgiQgJgtAFhJQAIhjAShJQAVhXBKgoQBVgfBVAwQBUAvANBGQADAwgvAqQg3AvgvBaQg/CNgCCLQgDCLATBgQAWBxAkA7QAuBOANAYQAcA1AIA0QAFAdACA9IADA7QACAnAEAhIAQBgQAJAzACAPQAEAqAkAvQAgAqArAQQArAPAngQQAmgRAjgVQAkgVAPgQQBChKAIg6IAViFQAKhMAyhlQAkhKAtg4QAogyAngZQBLgvAYACQBigLACA0QADA0gsBEQgSAdgaAiIgnA0QhZB5gkBkQgtB8gNA2QgKAmgVAoQgKATgZAmQgWAkgzAtQguAoheAiQg5AVg8AAIgagBg");
	this.shape_11.setTransform(41.667,-49.2225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-151.1,129.5,302.29999999999995);


(lib.PuppetShape_6copy5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_2("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A069D6").s().p("Ah8PrQhCgDg3gcQhZgsgngxQgjgtgbgwQgPgbgVgvQgWgxgShYIgVhWQgOg9gGg4Qgbj4gFhFQgGhRgIieQgHiKgGg7QgOiZgGgoQgJguAGhIQAHhhAThLQAWhXBKgoQBVgeBUAwQBUAvAOBHQADAwgxApQg2AwgwBZQg/COgDCJQgDCMATBfQAVBwAlA8QAxBRAKAUQAdA3AJAyQAEAbAEA+IACA7QADAnAFAgQAGAkAMA8QAKAyACAPQAGAqAlAtQAhApAsAOQArAPAngSQAngSAjgVQAkgWAOgRQBChJALg8IAZiGQAOhNA5hjQAphIAzg1QAtgvAqgVQBQgoAXAFQBiAAgCAzQgDA0gyBAQgVAagdAgIgsAwQheBrgpBlQgrBsgTBCQgKAmgVAoQgJASgYAmQgWAkgyAtQgtApheAkQg9AYhAAAIgRgBg");
	this.shape.setTransform(43.969,-49.6606);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A069D6").s().p("AizPzQhBgIg1gfQhWgzgjgyQg0hLglhgQgUg1gNhWIgRhWQgMg9gFg3QgVjagHhgQgFhGgIipQgHiGgGg/QgRihgFgfQgJgtAFhJQAHhgAShLQAVhYBLgoQBTgfBWAvQBUAvAOBHQADAvgwAqQg3AwguBaQg+CLgCCMQgCCKATBhQAWByAjA7QAsBKAPAcQAbA3AJA0QAEAZACBBIABA7QABAoAEAhQAFAlAJA8IAJBCQAEAqAiAwQAfArArASQAqARAogOQApgPAlgSQAkgUAQgPQBHhFAPg6QAPg7AVhJQAVhMBChdQAxhEA4gwQAygqAsgQQBTgfAYAHQBhALgIAzQgIAzg5A6QgXAXgiAdIgwArQhnBfgxBhQg0BngXBBQgNAlgXAlQgMATgaAkQgZAig0ApQgwAlhfAdQgzAPg0AAQgUAAgVgCg");
	this.shape_1.setTransform(46.0377,-48.7297);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A069D6").s().p("AjkP3QhAgMgzghQhUg4gfgzQgwhNghhhQgRgxgLhaIgOhWQgKg9gEg3IgNiiIgMiXIgNjuQgGiCgHhBQgRihgGgfQgJguAEhIQAGhfAShNQAVhYBKgoQBVgfBVAuQBVAvANBHQAEAugwArQg1AvgwBbQg9CNgBCLQgCCKATBhQAXByAiA7QAsBMAOAcQAbA1AIA2QAEAeABA9IAAA8QAAAoADAhIALBjIAHBDQACAqAfAyQAdAtArAVQApAUAqgLQAqgMAlgQQAmgRARgOQBMg/AUg5QASg0AdhNQAehMBJhUQA3g/A9gqQA3glAtgLQBXgVAWAJQBgAWgOAxQgOAzg/AyQgZAVgkAZIg0AlQhwBTg5BcQg4BcgfBFQgQAjgaAkQgLAPgeAkQgbAfg4AmQgzAhhfAWQgoAJgnAAQghAAgggGg");
	this.shape_2.setTransform(48.0692,-47.9293);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A069D6").s().p("AkPP6Qg/gPgxgkQhPg7geg0QguhPgchhQgPgugKhdIgMhWQgIg9gDg2QgEhAgHhiIgMiWIgNjtQgGiCgIhCQgSikgFgbQgJguAEhIQAGhjARhJQAVhXBKgqQBUgfBVAuQBVAuAOBHQAEAvgwArQg2AxguBZQg8CMgCCMQAACLASBgQAXBzAiA7QAqBJAQAfQAbA2AHA2QAFAkgBA4IgBA8QgBApADAhIAIBkIAFBDQABArAeAzQAbAvAqAXQApAXAqgJQArgIAngOQAogOASgNQBQg5AYg3QAlhSAVgrQAkhJBShOQA9g5BCgjQA6gfAvgGQBYgMAVAMQBeAfgUAwQgSAwhFAsQgbASgnAVIg3AfQh4BHg/BWQg/BUglBEQgSAhgdAiQgMAOghAhQgdAeg6AhQgzAehiAQQgdAEgdAAQgrAAgqgKg");
	this.shape_3.setTransform(49.9817,-47.267);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A069D6").s().p("AkyP7Qg+gSgwglQgoghgdggQgYgbgLgWQgrhPgbhiQgOg0gIhXIgKhWQgIg+gDg1QgDhBgHhgIgKiWIgNjtQgHh/gIhEQgSifgGghQgJgtAEhJQAGhfARhMQAVhYBJgpQBUgfBWAuQBVAtAOBHQAEAvgwArQg2AwgtBaQg8CNgBCLQgCCIATBjQAXBzAiA7QAsBOAOAbQAaA2AIA3QAEAggBA8IgCA8QgBApACAhIAHBlQAEAyAAARQAAAuAcAyQAbAwApAZQApAZArgGQAsgFAogMQAogLATgMQBTgyAfg3IBFh3QAqhHBahEQBDgzBGgcQA9gYAvgBQBagCASAOQBZAqgYAtQgXAshKAmQgcAOgpARIg6AZQh8A3hIBRQhEBMgrBCQgVAggfAfQgQARggAbQgfAcg6AdQg3AZhhALQgUACgTAAQg1AAgxgPg");
	this.shape_4.setTransform(51.785,-46.7218);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A069D6").s().p("AlPP7Qg+gUgtgnQhLg/gag0QgphQgahiQgMgvgIhcIgKhVQgHg+gDg1QgDhBgGhgIgLiVIgNjuQgGh/gIhEQgSiegHghQgJgwAEhGQAGhgARhMQAVhYBJgpQBTgfBXAuQBVAuAOBGQAEAvgvArQg3AxgtBaQg8CMgBCMQgBCJATBiQAYB0AhA6QAvBUAKAVQAbA1AHA4QAEAcgBBAIgCA9QgBApABAhIAHBlQADAxAAATQAAAsAbA0QAaAyApAaQApAbAsgDQAsgEApgIQApgJAUgLQBXgsAjg1QA4hRAYggQAzhEBfg5QBIgsBJgUQA/gSAwAEQBYAJASAQQBUAzgdAqQgdAqhNAdQgeALgrAMIg8ASQiAAqhOBIQhLBGgvA+QgXAeghAdQgOANgkAbQgjAbg5AXQg5AXhgAFIgWAAQg9AAg4gTg");
	this.shape_5.setTransform(53.4856,-46.2729);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A069D6").s().p("AlmP6Qg7gWgtgnQhIhAgag0QgnhOgbhkQgNgzgHhXIgKhWQgIg9gCg1QgDhCgHhfIgKiWIgNjtQgHh/gIhEQgTikgFgcQgJgtAEhJQAFhfAShMQAUhYBKgpQBUgfBVAtQBWAuAOBHQADAvgvArQg2AwguBaQg8CNgBCLQAACJASBiQAXBzAiA7QAsBNAOAcQAaA1AHA4QAEAcgBBAIgBA9QgBApACAhIAGBmIAEBEQAAAuAaAzQAaAyAqAcQApAcAtgBQAsAAAqgHQAogGAXgJQBcgoAmgxQAwg6ArgwQA6g/BkgwQBMgjBLgNQBBgKAvAJQBYAQAPASQBOA8ghAnQgiAnhPAUQggAJgrAHIg+AMQiFAchSBAQhNA7g3A9QgZAbgiAbQgSANgiAXQgkAZg7ATQg5AThgABIgDAAQhHAAhAgYg");
	this.shape_6.setTransform(55.129,-45.9276);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A069D6").s().p("AjtQUQhHgDhAgZQg7gYgrgnQhIhAgZg0QgphRgZhfQgNgvgJhcIgLhVQgIg+gDg0IgKiiIgLiWIgNjtQgHiBgIhCQgSijgGgdQgJgtAEhJQAHhiARhKQAUhXBKgpQBUgfBWAuQBVAuAOBHQADAvgvAqQg2AxguBZQg8CNgCCLQAACJASBiQAXBzAiA7QAuBQAMAZQAbA1AHA3QAEAeAAA+IgBA9QgBApACAhIAIBmIAEBEQABAuAbA0QAaAyAqAdQApAdAvACQAtACAqgFQApgEAXgIQBeggAtgvQA8g9ApgkQBAg6BqglQBPgbBMgFQBCgDAtAOQBWAbANATQBGBEgkAjQgmAjhRAMQggAFgsADIg/AEQiEAMhaA4QhPAxg9A6QgbAagkAXQgSAMgkAVQgkAWg8AQQgxAOhHAAIghgBg");
	this.shape_7.setTransform(56.6389,-45.6426);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A069D6").s().p("AjjQTQhIgBhBgZQg7gWgsgnQhKhCgYgzQgqhRgYhgQgNgxgIhZIgKhVQgIg+gCg1QgDhAgIhhIgKiWIgNjtQgHh/gIhEQgSifgGghQgJgtAEhJQAGhfARhMQAVhYBKgpQBTgfBWAuQBVAtAOBHQAEAvgwArQg2AwgtBaQg8CNgBCLQgCCIATBjQAXBzAjA7IA5BpQAaA0AIA5QAEAcgBBAIgBA8QgBAqACAhIAHBlQADAyAAASQABAwAaAyQAaAyAqAdQApAcAuAAQAsABAqgGQApgFAXgJQBcglAqgwQA3g+AngpQA+g9BlgrQBNghBMgJQBBgIAvALQBXAWAOASQBMA+gjAmQgiAlhRASQggAGgsAGIg+AJQiGAWhVA9QhOA4g5A6QgoAqhJAuQgmAYg6ARQg0ARhWAAIgOAAg");
	this.shape_8.setTransform(55.7678,-45.8183);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A069D6").s().p("AjwQUQhHgDhAgaQg6gXgrgnQhJhBgYgzQgqhSgZheQgNgygJhYIgLhVQgIg/gDg0QgEhBgHhhIgLiVIgNjuQgHh/gIhEQgQiZgHgnQgJgtAEhJQAGhiARhKQAVhXBKgpQBUgfBVAuQBVAtAOBIQAEAvgwAqQg2AxguBaQg8CNgBCKQgCCIATBjQAXBzAjA7QAqBKAPAfQAbA1AHA3QAEAdAAA/IgBA8QAAAqACAhIAIBlIAFBFQAAAuAcAzQAaAzAqAdQApAdAvADQAtACArgEQApgEAXgIQBegfAvguQA9g8ApgkQBCg4BqgjQBQgaBMgCQBCgDAtAQQBVAdANATQBGBFgmAjQgnAjhRAJQggAEgtACIg/ADQiFAKhaA1QhQAwg+A5QgbAZgkAXQgRALglAVQglAVg7AQQgwAMhDAAIgmgBg");
	this.shape_9.setTransform(56.9715,-45.6069);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A069D6").s().p("AjoQTQhIgChAgZQg7gXgsgnQhIhAgZg0QgphPgZhiQgNg0gIhWIgLhVQgIg+gCg1QgDhAgIhhIgKiWIgNjtQgIiAgHhDQgRiagHgmQgJgxAEhFQAGhfARhNQAVhXBKgpQBTgfBWAuQBVAtAOBHQAEAwgwAqQg2AxguBZQg8CNgBCLQAACNASBeQAXBzAiA7QApBGARAjQAaA2AIA3QADAdAAA/IgBA8QgBApACAiIAHBlIAEBEQABAwAbAyQAaAyApAdQApAdAuABQAtABAqgFQAqgFAWgJQBcgiAsgwQA2g6ArgrQA+g7BogpQBPgeBLgHQBCgHAuANQBWAXAPAUQBJBBgkAkQgkAlhRAPQggAFgsAFIg+AHQhDAIg7AWQg2ATgpAbQhOA0g7A7QgaAbgjAYQgSANgjAVQglAXg7ASQg0APhRAAIgUgBg");
	this.shape_10.setTransform(56.1668,-45.7382);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A069D6").s().p("AjxQUQhIgDg/gaQg6gYgrgnQhIhBgZgyQgphSgZhfQgOgwgJhaIgLhVQgJg+gDg1IgLihIgLiWIgNjtQgHiBgHhDQgTikgFgbQgJguAEhIQAHhjARhJQAUhXBKgqQBUgfBWAuQBVAvAOBGQADAvgvArQg2AwguBaQg9CNgBCLQgBCHATBkQAXBzAiA7IA6BoQAaA2AIA2QAEAdAAA/IgBA9QAAApACAhIAIBmIAFBEQABAvAbAzQAbAyAqAeQApAdAvADQAsACAsgDQAogEAYgHQBegeAwguQA/g8ApgjQBCg3BrghQBQgZBMgCQBCgBAtAQQBUAeANAUQBFBGgnAiQgnAihRAIQghAEgsABIg+ACQiGAIhbA1QhQAug+A4QgrAnhLAoQgmAVg7APQgsALhAAAIgsgBg");
	this.shape_11.setTransform(57.1426,-45.5615);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-151.1,160.3,302.29999999999995);


(lib.PuppetShape_6copy4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_2("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A069D6").s().p("Ah8PrQhCgEg3gbQgwgYgjgbQgdgXgQgTQgkgugagvQgQgdgUguQgYg0gQhVIgVhWQgOg9gGg4Qgbj3gFhFQgGhSgIieQgHiKgFg7QgQikgFgcQgIguAFhIQAIhlAShHQAWhYBKgnQBVgeBUAvQBUAvANBHQADAwgwApQg2AvgwBaQg+CNgDCLQgDCLATBgQAVBvAkA9QAxBRAKAUQAdA2AJAzQAEAaAEA/IACA7QADAmAFAhIASBfIAMBCQAGApAkAuQAiApArAOQAsAOAngRQAngSAigWQAkgWAPgQQBChKALg7IAZiHQAOhNA5hiQAphIAzg1QAtgvAqgVQBQgoAXAEQBiAAgCAzQgDA0gyBAQgVAbgdAgIgsAvQheBrgpBmQgtBvgRA/QgKAlgVAoQgLAUgWAlQgWAigyAvQgtAoheAkQg9AYhAAAIgRAAg");
	this.shape.setTransform(43.9844,-49.6487);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A069D6").s().p("AhvPxQhCgGg2geQgugagjgcQgcgYgPgUQgigvgYgwQgQgfgSgtQgUgygQhYIgShWQgMg9gFg4IgQikQgJhbgEg8QgGhLgIikQgHiHgGg+QgPiegGgiQgJgwAFhGQAHhhAShKQAVhYBLgoQBUgfBVAvQBUAvAOBHQADAwgwApQg3AxguBZQg+CMgDCMQgCCMATBeQAWByAjA7QAvBPAMAXQAcA2AIA0QAFAdACA9IACA7QABAoAFAgIAPBhQAIAyACAQQAEAqAjAvQAfArArAQQArAQAngQQAmgQAjgUQAkgWAPgQQBBhIAIg6IASiFQAIhIAvhpQAhhLAqg5QAlg0AmgbQBIgyAZAAQBhgPAFAzQAFAzgoBIQgRAegXAjIgmA2QhVB+giBlQgqB5gPA6QgJAmgWAoQgKATgYAnQgWAjg0AuQgtAnhgAiQg4AUg6AAIgdgBg");
	this.shape_1.setTransform(40.5235,-49.0411);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A069D6").s().p("AhdP1QhCgIg2ggQgtgbgigeQgbgYgOgVQg0hNgjhgQgTgygOhZIgPhWQgMg+gEg3QgUjZgHhhQgFhFgIipQgHiGgGg+QgQidgHgjQgJgwAFhGQAHhkARhIQAVhYBKgoQBVgfBVAvQBUAtAOBIQADAvgvAqQg3AxguBZQg9CMgCCMQgCCJASBiQAWByAkA7QAvBSALAVQAbA2AJA1QADAaACBAIABA8QABAoAEAhIANBiQAHAyABAQQAEAqAhAxQAeAsAqASQAqASAmgPQAngPAjgUQAlgUAOgQQBBhHAFg4QAJhiACgiQAChCAkhvQAyibBGhFQA+g8AagEQBdgdAOAxQAMAygdBMQgQAsgsBXQhJCQgcBkIgbBfQgPA1gIAkQgJAngWAoQgJATgaAoQgVAig2AuQgtAnhiAgQgzARg2AAQgTAAgUgCg");
	this.shape_2.setTransform(37.074,-48.5394);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A069D6").s().p("AhIP4QhCgKg0ghQhUg1gjg0QgfgwgWgxQgNgfgRgvQgRgxgNhaIgOhWQgLg+gEg3IgNijIgMiWQgDg0gJi7QgHiCgHhBQgRiggGggQgJguAFhIQAFhdAShPQAVhYBKgoQBTgfBWAuQBVAuAOBHQADAvgvAqQg2AwguBbQg8CLgDCNQgCCJATBiQAXByAiA7QAwBUAKAUQAbA1AIA2QAEAeABA9IAAA8QABAoADAhIAMBjQAGAyABARQACAqAhAyQAdAtAqATQApATAlgNQAogOAjgTQAlgUAOgPQBAhHADg3QAEhWgBgrQgCg7AYh0QAiihA2hIQA1hGAZgHQBYgrAUAuQAUAugRBSQgNA9gcBOQg8CngUBdQgHAigPA/QgPA8gHAfQgIAogWApQgKAVgZAmQgXAlg1ArQguAnhjAeQgxAPgwAAQgYAAgYgDg");
	this.shape_3.setTransform(33.6617,-48.1455);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A069D6").s().p("AguP6QhCgLg0giQgtgdgggfQgagZgOgWQgxhPgghgQgRgygLhaIgOhWQgKg+gEg3IgMijIgMiWQgDg0gJi6QgHiDgHhBQgQiZgHgmQgJgwAEhGQAGhiARhKQAVhZBJgnQBTggBXAuQBUAtAPBHQADAwgvAqQg1AxgvBaQg8COgCCKQgBCLASBhQAWBxAjA8QAqBJAQAfQAbA0AIA3QADAaABBCIAAA8QAAAoADAhIALBjIAHBDQACArAfAyQAdAvApAUQAoATAmgNQAngNAkgTQAlgTANgPQBAhGAAg1IgBg/QgBgkgDgcQgGgxANh7QAQijAnhLQAqhNAXgLQBRg4AaAsQAbApgEBTQgEBFgQBMQguDLgKBHQgGAogMA7IgSBdQgIAogVAqQgJATgaApQgOAWgWAWQgNAOgcAXQgtAnhlAdQgvAOgwAAQgZAAgZgEg");
	this.shape_4.setTransform(30.3893,-47.8909);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A069D6").s().p("AgVP7QhBgLg1giQgsgegggfQgbgagNgVQgegxgVgyQgOgfgPguQgPgvgMhdIgOhXQgKg+gDg2QgRjZgGhgIgNjuQgGiCgIhCQgRiggGgfQgJgtAEhJQAFhfARhNQAVhXBJgpQBUggBWAtQBVAuAOBHQAEAvgvArQg1AvgvBcQg8CNgBCLQgCCKASBiQAYB0AhA5QAsBNAOAbQAbA2AHA2QAEAZABBCIgBA8QAAApADAhQADAlAIA+QAGAzAAARQACAqAfAzQAdAvAoAUQAoAVAngNQAmgMAkgTQAlgTANgPQAdgiAOgaQASghgCgdQgFhWgHgmQgGgbgCgsIgBhhQgBhWAFg0QAFg9AOgoQAchRAWgPQBHhDAiAmQAhAmAIBSQAIBKgHBJIgQCfQgKBXgDAnQgDAtgJA4IgPBfQgGApgVArQgJARgaAsQgVAjg4AvQgtAmhlAdQguAOgvAAQgbAAgagFg");
	this.shape_5.setTransform(27.5144,-47.7559);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A069D6").s().p("AAAP7QhBgLg0giQgtgegggfQgagagNgVQgwhOgghjQgRgygLhZIgOhXQgKg+gDg3QgRjZgGhgIgMjuQgHiBgHhCQgRiZgHgmQgJguAEhIQAGhiAQhKQAVhYBJgpQBTggBWAuQBVAtAPBHQAEAvgvArQg1AwguBbQg8COgCCLQgBCNASBeQAWBxAiA9QAuBQAMAYQAbA1AHA3QAFAgAAA7IgBA8QABAoADAiQADAlAHA+QAGAzABARQACArAfAyQAcAvAoAUQApAVAmgNQAlgMAlgUQAkgTANgPQAcghANgaQARgggEgdQgJhRgLgoQgHgZgGgsIgLhfQgKhYgCguQgDg8AHgpQAQhTATgUQA9hMAmAhQAnAgAUBQQAVBNACBFQACBLgBBZIgCCBQAAAvgGA4IgLBgQgEAqgVAsQgIASgaAsQgMAXgWAXQgOAOgbAYQgtAnhmAeQgvAOgvAAQgbAAgagFg");
	this.shape_6.setTransform(25.4027,-47.7457);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A069D6").s().p("AAMP7QhBgKg1giQhTg2gig1QgegxgWgyQgOgfgPguQgSg1gLhXIgPhXQgKg+gEg3QgRjZgGhgIgMjuQgGiCgHhCQgRiZgHgmQgJgwAEhGQAFhiARhJQAUhYBJgpQBUggBVAtQBWAtAOBHQAFAvgvArQg1AxgvBaQg7CMgCCNQgCCJASBjQAXBzAiA6QAqBKAPAeQAbAzAIA5QAEAgAAA7IAAA8QABAoADAiIALBjQAGAyABARQACApAgA1QAdAuAoAUQApAUAlgNQAmgNAkgUQAjgUANgPQAbghAMgaQAPgggFgcQgNhPgPgnQgIgWgKgsIgVhaQgXhhgGggQgLg7ACgoQADhVAQgXQAvhUAsAbQAqAaAhBLQAhBMALBDQANBPAIBXIAKCDQADAxgDA4IgGBhQgDAqgTAtQgHARgZAvQgNAXgVAYQgOAPgaAYQgrAohnAgQgxAPgyAAQgYAAgZgEg");
	this.shape_7.setTransform(24.7827,-47.8593);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A069D6").s().p("AAFP7QhAgKg1gjQgsgdghgfQgagagNgWQgxhOgghiQgRgygLhaIgOhWQgKg+gEg3QgRjZgGhgIgMjuQgGiCgHhCQgTijgFgcQgJgtAEhJQAFhiARhJQAUhYBJgpQBUggBVAtQBWAuAPBGQADAvguArQg2AxguBaQg8COgBCLQgCCNASBfQAWBxAjA8QAuBQAMAYQAaA1AIA3QAEAhAAA6IAAA8QAAApADAhQADAiAIBBIAHBEQACArAfAyQAdAvAoAUQApAVAlgNQAmgNAkgTQAkgUANgPQAcghANgaQAQgggEgcQgNhUgLgkQgIgYgHgsIgPhdQgPhagEgqQgGg8AFgoQALhWARgUQA3hQAqAfQAoAfAZBNQAZBLAGBGQAHBNACBYIADCCQACAwgFA4IgKBhQgEAqgTAsQgIARgaAuQgNAXgVAXQgOAPgbAXQgsAohmAeQgwAPgwAAQgaAAgagFg");
	this.shape_8.setTransform(25.0808,-47.7782);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A069D6").s().p("AAOP7QhBgKg1giQgtgdghgfQgagagOgVQgegxgWgyQgOgfgPguQgSg1gLhXIgPhXQgKg+gEg3QgRjZgGhgIgMjuQgGiAgHhEQgRiZgHgmQgJgvAEhHQAFhhARhKQAUhYBJgpQBTghBWAuQBWAtAOBGQAFAwgvArQg2AxgtBaQg8COgCCLQgCCIASBkQAXBzAiA6QAuBQAMAYQAaA1AIA3QAEAgAAA7IAAA8QABAoADAiIALBjQAGAzABAQQACArAgAyQAdAvAoAUQApAUAlgNQAmgNAjgVQAkgUAMgPQAbgiAMgZQAPgggFgcQgPhPgPgmQgJgWgLgsIgWhaQgahngFgYQgNg6AAgoQABhWAPgWQAthWAtAZQAsAaAiBKQAiBJAOBFQAPBPAJBXQAEAcAIBnQAFAxgDA4QgBAhgEBAQgDArgSAtQgIATgYAtQgNAYgVAXQgOAQgaAXQgrAphmAgQgyAQgyAAQgYAAgYgEg");
	this.shape_9.setTransform(24.6604,-47.8991);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A069D6").s().p("AACP7QhAgLg1giQgsgegggfQgbgagNgVQgegxgVgyQgNgegQgvQgRgzgLhZIgOhXQgKg+gDg3QgRjZgGhgIgMjuQgHiBgHhCQgSijgGgcQgJguAEhIQAGhiAQhKQAUhYBKgpQBUggBVAuQBVAtAPBGQAEAwgvArQg1AwguBbQg8COgCCLQgBCNASBeQAXBzAhA7QAuBQAMAYQAbA1AHA3QAFAgAAA7IgBA8QABAoADAiQADAlAHA+QAGAzABARQACApAfA0QAcAvAoAUQApAVAmgNQAmgNAkgTQAkgTANgPQAcghANgaQAQghgDgcQgKhRgMgoQgHgYgGgtIgNhdQgMhZgDgtQgEg8AHgoQANhUATgVQA7hNAnAgQAnAgAXBPQAWBMADBGQAEBLABBZIgBCBQABAwgGA4IgKBgQgEAqgVAsQgGAOgbAxQgNAWgWAXQgPAPgaAXQgtAnhlAfQgvAOgwAAQgaAAgbgFg");
	this.shape_10.setTransform(25.2135,-47.7457);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A069D6").s().p("AAJP7QhBgKg1gjQgsgcghggQgagZgNgWQgyhQgfhgQgRgygMhaIgOhXQgKg+gEg2QgRjagGhgIgMjuQgGiBgHhCQgRiagHglQgJgwAEhGQAFhiARhKQAUhYBJgpQBUggBVAtQBWAtAPBHQADAvguArQg1AxgvBbQg7CLgCCOQgCCJASBiQAXBzAiA7QAuBQAMAYQAaA1AIA2QAEAgAAA8IAAA8QAAAnADAiIALBkQAGAyABARQACAqAgA0QAcAuApAUQAoAVAmgNQAlgNAkgUQAkgUANgOQAcgiAMgZQAPghgEgcQgNhQgOgmQgIgYgJgsIgShbQgUhfgFgjQgJg7ADgoQAGhWARgVQAyhTArAcQAqAcAdBNQAdBKAKBFQALBPAFBXQAEAxADBSQADAwgEA4IgIBhQgDAqgTAtQgGAOgbAyQgMAXgWAXQgNAOgbAZQgtAohlAfQgwAOgwAAQgaAAgagEg");
	this.shape_11.setTransform(24.8655,-47.8062);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A069D6").s().p("AARP7QhBgKg1giQhUg2gig0QgyhPghhhQgRgygMhaIgPhXQgKg+gEg2QgRjagGhgIgMjuQgGiCgIhCQgQiZgHgmQgKgvAEhGQAGhiAQhKQAUhYBJgpQBTghBXAuQBVAsAPBHQAEAwgvArQg1AxguBaQg8COgBCLQgCCIASBkQAWBzAiA6QAqBKAQAeQAbA2AHA2QAFAgAAA7IAAA8QAAAoAEAhIALBjQAGAyABASQADApAgA0QAdAuAoAUQApATAlgNQAlgNAkgUQAkgVAMgPQAbgiALgZQAPgggGgcQgPhPgQglQgJgWgMgrIgXhZIgjh+QgOg6gBgnQgChXAOgWQAqhXAuAYQAsAYAlBJQAlBJAPBDQARBQAMBWIAOCEQAFAxgBA4IgFBiQgCAqgSAuQgHARgZAvQgMAYgVAXQgNAPgbAZQgrAohmAhQgyAQgyAAQgYAAgYgDg");
	this.shape_12.setTransform(24.633,-47.9517);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-151.1,134.2,302.29999999999995);


(lib.PuppetShape_6copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_2("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A069D6").s().p("Ah8PrQhCgEg3gbQgwgYgjgbQgdgXgQgTQgjgugbgvQgRgegTgtQgWgxgShYIgVhWQgOg9gGg4Qgbj3gFhFQgGhSgIieQgHiKgFg7QgQijgFgdQgIguAFhIQAHhhAThLQAWhYBKgnQBVgeBUAvQBUAvANBHQADAwgwApQg2AvgwBaQg+CNgDCLQgDCLATBgQAVBxAkA7QAxBRAKAUQAdA2AJAzQAEAaAEA/IACA7QADAmAFAhIASBfIAMBCQAGApAkAuQAiApArAOQAsAOAngRQAngSAigWQAkgWAPgQQBChKALg7IAZiHQAOhNA5hiQAphIAzg1QAtgvAqgVQBQgoAXAEQBiAAgCAzQgDA0gyBAQgVAbgdAgIgsAvQheBrgpBmQgtBvgRA/QgKAmgVAnQgKAUgXAlQgWAigyAvQgtAoheAkQg9AYhAAAIgRAAg");
	this.shape.setTransform(43.9808,-49.6487);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A069D6").s().p("AhjPuQhDgFg2gdQhZguglgxQgjgugagvQgQgegTgtQgWgzgRhXIgUhWQgOg9gGg4QgajogGhUQgFhOgIihQgHiJgGg8QgPifgGghQgIgwAFhHQAIhjAShIQAWhYBKgoQBUgdBVAuQBVAwAMBHQADAvgvAqQg3AvgvBaQg/CMgDCLQgDCMATBfQAVBwAlA8IA7BmQAcA1AJA0QAEAWAEBDIACA7QADAnAFAhQAGAlALA7IAMBBQAFArAkAtQAhAqAsAQQArAPAngRQAmgQAkgVQAjgWAPgQQBChKAHg5IASiFQAHhGAuhrQAhhLAog5QAmg1AlgbQBGgzAagBQBggQAHAyQAGA0goBIQgQAegXAjIglA3QhUCAgiBlQgrCBgNAyQgKAngVAoQgKAUgYAmQgXAkgyAtQgsAohgAjQg6AVg9AAIgXAAg");
	this.shape_1.setTransform(40.8565,-49.3572);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A069D6").s().p("AhEPuQhCgFg3gdQgvgZgigcQgdgXgPgUQgjgugZgvQgRgegTgtQgVgzgShXIgUhWQgOg9gGg4QgZjdgHhfQgFhPgIihQgHiIgGg9QgQikgFgcQgIgxAFhFQAIhjAShJQAVhXBLgoQBUgeBVAvQBVAvAMBHQADAvgvAqQg4AwguBZQg/CNgDCLQgDCLATBgQAVBvAkA9IA8BlQAcA1AJA0QAEAXAEBDIADA7QACAnAFAgQAGAlAMA8IAMBBQAFArAkAuQAhAqAsAQQArAQAmgQQAngQAkgUQAkgVAOgQQBBhKAFg3QAIhYABgrQAChAAihxQAwieBChEQA8g+AagFQBcghAPAxQAOAwgaBPQgSA1gmBPQhHCVgbBkIgbBeQgPA2gIAkQgJAngUApQgKASgZAoQgUAig1AwQgsAnhhAjQg5AVg6AAIgcgCg");
	this.shape_2.setTransform(37.6734,-49.2404);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A069D6").s().p("AghPuQhCgFg2gdQhZgvglgxQgjgtgagwQgQgdgUgtQgWg0gShWIgVhWQgOg9gHg4QgajpgGhUQgHhUgHicQgGiLgGg6QgPiegGgiQgIgvAFhHQAIhjAShJQAVhXBLgoQBUgeBVAvQBUAvANBHQADAvgvAqQg3AvgvBaQg/COgDCKQgDCMATBfQAVBxAkA7QAwBQALAVQAdA2AJAzQAEAWAEBDIADA7QADAmAGAhQAGAnAMA6IANBCQAGAqAkAuQAhArAsAQQArAQAmgQQAogPAjgVQAkgVAOgQQBAhKACg1QADhcgBglQgDg4AWh3QAdigAxhKQAxhHAYgJQBWgwAXAuQAWAsgNBSQgKBDgYBKQg5C0gSBVQgHAkgOA+IgVBbQgIAogUApQgJATgZApQgVAkg0AuQgtAohgAjQg6AVg6AAIgcgCg");
	this.shape_3.setTransform(34.58,-49.2404);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A069D6").s().p("AAFPtQhBgFg3gcQhZgtgmgxQgkgtgbgvQgQgegVgsQgWgygUhXIgXhWQgPg9gHg5QgajNgIhxQgHhUgHicQgGiLgGg6QgPikgFgcQgJgyAGhEQAHhhAThLQAWhYBKgnQBVgeBUAvQBUAvANBHQADAwgwApQg2AwgwBaQg/CNgDCKQgDCOASBdQAVBwAlA8QAxBRAKAUQAcAzAKA1QAEAXAFBCIAEA6QAEAnAGAgQAHAmANA6IAOBCQAGApAmAvQAhAqAsAQQAsAQAngPQAngQAjgVQAkgVAOgQQA/hJgBg1QgBhZgFglQgGguAIh+QAGhUAKg2QAKg8ARgnQAjhOAXgOQBMg9AfApQAdApACBSQACBIgNBLIgcCbQgOBQgGAsQgGApgLA7IgRBdQgHAogTArIghA8QgNAWgVAXQgNAPgaAYQgsAohhAjQg8AWg9AAIgXgBg");
	this.shape_4.setTransform(31.7558,-49.4153);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A069D6").s().p("AAoPqQhBgDg4gcQhYgrgogwQg9hKgrhaQgZg0gVhVIgYhWQgQg9gIg4Qgai1gLiKQgHhYgHiYQgGiPgFg3QgOiggGggQgIgwAGhHQAHhgAThLQAWhYBKgnQBVgeBUAvQBVAwAMBHQADAwgwApQg3AwgvBZQg/CMgECMQgECMATBeQAVByAkA6IA8BkQAdA1AKAyQADASAGBHIAFA6QAFAmAGAhIAXBfQANAyACAPQAHApAnAvQAjApAsAPQAtAPAngPQAmgQAkgWQAjgVANgQQAegjANgcQARgigCgdIgEg+QgEgjgGgaQgFgagDgtIgGhgQgEhYABgvQACg8AKgoQAVhTAUgSQBBhJAlAkQAkAjAPBRQAPBOgCBFQgEB5gPCqQgCAtgIA5IgOBfQgFApgTArQgIATgYArQgUAmgzAvQgrAqhhAkQg+AYg/AAIgTgBg");
	this.shape_5.setTransform(29.6747,-49.7298);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A069D6").s().p("ABGPmQhCgCg3gaQhbgpgpguQg+hGgvhbQgagzgYhVIgahVQgTg9gJg5QgbisgMiUQgIhagGiXQgGiRgFg1QgNicgGgkQgIguAGhJQAIhiAShJQAWhYBLgnQBUgeBVAwQBUAvANBHQADAvgwAqQg3AwgwBZQhACNgECLQgFCLATBgQAVBuAkA9QA0BSAJARQAcAzALAzQADARAIBHIAGA6QAFAmAIAgQAJAlAQA5QAPAyADAPQAIApApAsQAjApAuAOQAtANAngQQAmgRAjgWQAjgXANgQQAcgkANgbQAQghgEgdQgKhRgMgnQgIgXgHgtIgPhdQgShpgDgYQgIg7AEgoQAGhTASgXQAzhTArAdQApAcAdBNQAdBPAIBCQAIBPADBZQABAxABBSQABAugFA5IgJBgQgDAqgSAsQgFAOgZAyQgLAXgUAYQgOAQgYAYQgoAphjApQhBAbhEAAIgKAAg");
	this.shape_6.setTransform(28.6298,-50.2086);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A069D6").s().p("AgdPJQhdgngqgsQhBhDgzhaQgeg1gZhRIgdhVQgVg8gKg6QgeirgNiWQgIhfgGiTQgGiXgEgvQgOikgEgdQgJgxAHhGQAIhfAThMQAWhXBLgoQBUgdBVAwQBUAvAMBIQADAvgwApQg3AwgwBZQhBCNgFCLQgECNASBeQAVBuAlA8IA8BjQAeA1AKAwQAEAOADAZIAGAvQAJBRANAtQALAmASA3IAUBAQAKAoAqArQAlAnAvAMQAuAMAmgSQAlgRAjgYQAigYAMgQQAbglAMgbQAOgigFgcQgPhPgPglQgJgVgMgsQgRhBgHgXIglh6QgQg5gEgmQgIhTAOgZQAlhbAuAWQAuAVAqBIQArBJAQBAQAVBRAMBYQAFAiAKBjQAEAwgBA5IgEBgQgBArgQAtQgGARgWAwQgKAYgTAZQgMAOgZAcQgpArhfArQhFAfhJABIgFAAQg/AAg2gWg");
	this.shape_7.setTransform(28.6779,-50.8594);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A069D6").s().p("ABPPjQhCAAg4gZQhcgogpguQg+hFgxhaQgdg3gXhQIgchVQgTg9gJg5QgdiugMiTQgIhcgGiVQgGiTgEgzQgOicgFglQgIgwAFhHQAIhgAThLQAWhXBLgoQBVgdBUAvQBUAwANBHQADAvgwAqQg3AwgxBZQg/CNgFCLQgFCJATBhQAVBvAlA8IA8BjQAeA2AKAwQAEASAHBFQAKBWAKApQAKAlARA5QAPAyADAPQAJAoAqAsQAkAoAuAOQAuANAmgRQAmgRAjgYQAigXANgQQAbgkANgbQAPghgEgdQgMhQgOgmQgIgXgJgsIgShbIgbh/QgMg7ABgmQAAhUAQgYQAuhWAsAaQArAZAjBLQAiBNALBCQANBQAHBYIAHCEQADAvgEA6IgHBgQgCAqgRAtQgHARgXAvQgSAlgyAzQgqArhfApQhEAchHAAIgEAAg");
	this.shape_8.setTransform(28.64,-50.4635);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A069D6").s().p("AgZPIQhdgkgrgtQgpgqgfgsQgVgdgYgpQgfg2gZhQIgehVQgVg8gKg6QgfiqgNiYQgIhegGiUQgGiWgEgwQgMiegGgjQgIgyAGhEQAIhfAThNQAXhXBKgnQBUgeBVAwQBVAxAMBGQADAwgxApQg2AvgxBaQhBCNgECLQgFCLASBfQAVBwAlA6IA8BjQAfA2AKAvIAMBWQAJBNAOAxQALAlASA3QARAzAEANQAKAoArArQAlAnAvALQAuAMAmgSQAmgSAigYQAigYAMgRQAbglALgbQAOgigFgbQgQhOgQgmQgJgUgMgsIgahXIgoh4QgSg5gFglQgLhUANgYQAhhcAwATQAtAUAtBGQAvBLARA9QAXBRAOBYQAHApALBcQAFAwgBA5IgCBhQgBAqgQAuQgFAQgWAxQgKAYgTAZQgMAPgZAbQgnArhgAtQhFAfhJACIgIAAQg9AAg1gWg");
	this.shape_9.setTransform(28.7244,-51.0069);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A069D6").s().p("ABJPlQhCgBg3gaQhbgogpguQhBhJgthYQgcg0gXhTIgbhWQgSg9gKg5QgcizgMiNQgHhagGiXQgHiRgEg1QgOiigFgfQgJgwAHhGQAIhjAShIQAWhYBLgnQBVgeBUAwQBUAvANBHQADAvgwAqQg3AwgwBZQhACMgFCMQgECMATBfQAUBuAlA9IA9BjQAdA3AKAvQAEATAHBFIAHA5QAFAmAIAgQAJAnAQA3IASBBQAJAnApAuQAjAoAuAOQAuANAmgQQAngRAigXQAjgXANgQQAcgjAMgbQAQgigEgdQgLhRgMgmQgIgYgIgsIgQhcIgXiAQgJg7ACgnQAEhUARgXQAxhUArAcQAqAaAfBNQAgBPAIBBQALBQAEBYIAECDQABAvgEA5IgIBgQgDAqgSAtQgGAQgXAvQgMAXgUAYQgMAQgZAZQgqAqhgAoQhDAchGAAIgHAAg");
	this.shape_10.setTransform(28.6279,-50.3114);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A069D6").s().p("AgjPJQhdgngpgtQgogqgfgtQgUgdgYgqQgcg0gZhSIgdhWQgTg8gKg6QgeiogMiZQgIhdgGiUQgGiVgEgxQgOijgFgeQgIguAGhJQAIhgAThLQAWhYBLgnQBUgdBVAwQBTAvANBHQADAwgwApQg3AxgwBYQhACMgFCMQgFCNATBeQAUBuAlA8IA9BjQAdA0ALAxQADAPADAZIAGAvQAKBUALAqQAKAnASA3QAQAzADANQAKApAqArQAkAnAvANQAtAMAngRQAlgRAjgYQAjgXAMgRQAbgkAMgbQAPgigFgcQgOhQgOglQgJgWgLgsQgMg3gJgiQgZhZgIgjQgPg6gCgmQgFhTAOgZQAohaAuAYQAsAWAoBKQAoBLAPBAQARBSAKBXQAEAlAIBgQAEAvgDA6IgFBgQgBAqgRAtQgGASgWAvQgLAXgTAZQgNAQgYAaQgpArhfAqQhFAehKABQhCAAg4gYg");
	this.shape_11.setTransform(28.6567,-50.6865);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A069D6").s().p("AgVPIQhdgkgsgsQhBhDg1hZQgfg1gahQIgfhVQgUg8gLg6QggisgNiWQgIhegGiUQgGiWgEgwQgNikgFgdQgIgvAHhIQAIhfAThMQAWhXBLgoQBUgdBVAwQBUAwAMBHQADAvgwAqQg3AvgxBZQhACNgFCLQgFCMASBfQAVBwAlA6IA9BiQAeA4AKAtQADAOAKBIQALBRAMAsQALAmATA2QASAzADANQAKAnArArQAmAmAwAMQAuALAmgTQAlgSAigYQAjgZALgQQAbgmALgaQAOgigGgcIgOg7QgJgggKgXQgKgVgNgrIgbhWIgrh2QgUg5gGgkQgNhTALgaQAfhcAwASQAvARAuBGQAyBJATA8QAZBRAQBYQAHAnANBeQAGAxAAA5IgCBhQgBAqgPAuQgEAMgWA2QgKAYgTAZQgMAQgYAaQgoAsheAtQhFAghJACIgLAAQg8AAg0gUg");
	this.shape_12.setTransform(28.7561,-51.1533);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-151.1,134.2,302.29999999999995);


(lib.PuppetShape_5copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_2("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A069D6").s().p("AgGPFQheghgtgrQhEhBg3hXQghg1gchOIghhVQgXg8gLg6QghiegPilQgJhhgFiSQgGicgDgqQgNilgFgdQgIgvAHhHQAJhjAThJQAXhXBLgnQBUgdBVAxQBTAwANBHQACAvgwAqQg5AwgwBYQhBCNgFCLQgGCKASBgQAVBvAlA7IAiA0IAcAtQAeA1ALAvQAFAXAJA/QAMBOAOAtQAMAlAUA2QAUAyADANQAMAnAsApQAnAlAwAKQAvAJAmgTQAlgTAhgaQAhgZAMgRQAZgmAKgbQANgigHgbQgKgngGgTQgKgfgMgXQgKgSgQgrQgVg5gLgaIg0hwQgag2gJgiQgWhSAJgaQAVhfAxAMQAxANA1BAQAdAiASAbQAVAgAOAiQAhBRAWBWQANAzAPBSQAJAxACA5QACAhAABAQACArgOAuQgGASgTAxQgKAYgSAaQgLAQgXAcQgoAthcAvQhEAihJAFIgWABQg2AAgwgSg");
	this.shape.setTransform(28.9866,-51.6849);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A069D6").s().p("AgePJQhdgngqgsQgogpgggtQgTgcgZgrQgeg1gZhRIgdhVQgUg8gLg6QgeiugMiUQgIhdgGiUQgGiVgEgxQgPipgEgYQgHguAFhJQAIhgAThLQAXhYBKgnQBVgdBUAwQBUAvANBHQADAwgxApQg3AxgwBYQhACOgFCKQgFCKATBhQAUBuAlA8IAiA1IAbAuQAdA1ALAwQADAPADAZIAGAvQAKBQAMAtQAKAlATA4QAQAyAEAOQAKApAqArQAlAmAvANQAuAMAmgSQAmgSAigYQAjgYAMgQQAbglALgbQAOgigFgcIgMg7QgIghgKgYQgJgVgLgsIgYhYIglh6QgRg5gDgmQgIhTANgZQAlhbAvAWQAtAVAqBIQArBJARBAQAUBRAMBYQAGAoAJBdQAFAwgCA5IgEBgQgBAqgQAuQgEAMgXA1QgLAYgTAZQgMAPgZAbQgpArheArQhFAghKAAIgFAAQg/AAg2gWg");
	this.shape_1.setTransform(28.701,-50.8594);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A069D6").s().p("ABGPmQhCgCg4gaQhbgpgoguQg+hGgvhbQgcg2gWhSIgbhVQgSg9gJg5QgbirgMiVQgIhagGiXQgGiRgFg1QgNicgGgkQgIgwAGhHQAIhiAShJQAWhYBLgnQBUgeBVAwQBUAvANBHQADAvgwAqQg3AvgwBaQhACNgECLQgFCMATBfQAVBuAlA9IA8BjQAdA1AKAxQADAOAIBKQAJBVAKArQAJAlAQA5QAPAzADAOQAIApApAsQAjApAuAOQAtANAngQQAmgRAjgWQAjgXANgQQAcgjANgcQAPghgDgdQgKhRgMgnQgIgYgHgsIgPhdQgShpgDgYQgIg7AEgoQAGhTASgXQAzhTArAdQApAcAdBNQAdBPAIBCQAIBPADBZQABAxABBSQABAugFA6IgJBfQgDAqgSAsQgHATgXAtQgMAXgUAYQgNAQgYAYQgqAqhhAoQhBAbhFAAIgJAAg");
	this.shape_2.setTransform(28.6463,-50.2086);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A069D6").s().p("AAoPqQhBgDg4gcQhagsgmgvQg9hKgrhaQgZg0gVhVIgYhWQgQg9gIg4QgbjCgKh9QgHhXgGiZQgHiOgFg4QgOiggGggQgIgwAGhHQAHhgAThLQAWhYBKgnQBVgeBUAvQBVAwAMBHQADAwgwApQg3AwgvBZQg/CMgECMQgECJATBhQAVBwAkA8IA8BkQAdA0AKAzQADASAGBHIAFA6QAFAmAGAhQAIAnAPA4IAPBBQAIArAmAtQAjApAsAPQAtAQAngQQAmgQAkgWQAjgWANgPQAdgjAOgcQARghgCgeQgGhXgIgkQgGgbgDgsIgFhgQgEhYABgvQACg8AKgoQAVhTAUgSQBBhJAlAkQAkAjAPBRQAPBOgCBFQgCBGgHBdIgKCAQgCAtgIA5IgOBfQgFApgTArQgHAQgZAuQgTAlg0AxQgtAphfAkQg+AYg/AAIgTgBg");
	this.shape_3.setTransform(29.6747,-49.718);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A069D6").s().p("AAFPtQhBgFg3gcQhZgtgmgxQgkgtgbgvQgQgegVgsQgYg2gShTIgXhXQgPg9gHg4QgZjEgJh6QgHhUgHicQgGiLgGg6QgOiggGggQgIguAFhIQAHhgAThMQAWhXBKgoQBUgeBVAvQBVAvAMBHQADAwgwApQg2AvgwBaQg/COgDCKQgDCJASBiQAVBwAlA8QAxBRAKAUQAcAzAKA1QAEAWAFBDIAEA6QAEAnAGAgQAHAmANA6IAOBCQAHArAkAtQAiAqAsAQQAsAQAngPQAngQAjgVQAkgVAOgQQA+hJAAg1QgBhZgFglQgGguAIh+QAGhUAKg2QAKg8ARgnQAjhOAXgOQBMg9AfApQAdApACBSQACBIgNBLIgcCbQgPBQgFAsQgGAqgLA6IgRBdQgHAogUArQgIARgZArQgMAWgVAXQgNAPgaAYQgsAohhAjQg8AWg9AAIgXgBg");
	this.shape_4.setTransform(31.7676,-49.4072);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A069D6").s().p("AghPuQhCgFg2gdQhZgvglgxQgjgtgagwQgQgegUgtQgWgzgShWIgVhWQgOg9gHg4QgajpgGhUQgHhUgHicQgGiLgGg6QgPiegGgiQgIgvAFhHQAIhjAShJQAVhXBLgoQBUgeBVAvQBVAwAMBGQADAvgvAqQg4AwguBZQg+CMgECMQgDCMATBfQAVBvAkA9QAwBQALAVQAdA2AJAzQAEAWAEBDIADA7QADAmAGAhQAGAnAMA6IANBCQAFApAlAvQAhArAsAQQAqAQAngPQAogQAjgVQAkgVAOgQQBAhJACg2QADhcgBglQgDg4AWh3QAdigAxhKQAxhHAYgJQBWgwAXAuQAWAsgNBSQgKBDgYBKQg5C0gSBVQgHAkgOA+IgVBbQgIAogUApQgJATgZApQgVAkg0AuQgtAohgAjQg6AVg6AAIgcgCg");
	this.shape_5.setTransform(34.58,-49.2404);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A069D6").s().p("AhEPvQhCgFg3gdQgvgZgigcQgdgXgPgUQgjgugZgwQgRgegTgtQgVgygShXIgUhWQgOg+gGg3QgZjegHhfQgFhOgIihQgHiJgGg8QgQikgFgcQgIgyAFhFQAIhjAShIQAVhXBLgpQBUgeBVAvQBVAvAMBHQADAwgvApQg4AxguBZQg/CMgDCLQgDCMATBfQAVBwAlA8IA7BmQAcA1AJA0QAEAWAEBDIADA7QACAnAFAhQAGAkAMA8IAMBCQAFArAkAtQAhArAsAQQArAQAmgQQAngQAkgVQAkgVAOgQQBBhJAFg4QAIhXABgsQAChAAihxQAwidBChEQA8g/AagEQBcghAPAwQAOAwgaBPQgSA1gmBQQhHCVgbBjIgbBfQgPA1gIAkQgJAngUApQgKATgZAoQgVAjg0AuQgsAohhAiQg5AVg6AAIgcgBg");
	this.shape_6.setTransform(37.6734,-49.2523);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A069D6").s().p("AhjPuQhDgFg2gdQhZguglgxQgjgugagvQgQgegTgtQgWgwgRhaIgUhWQgOg9gGg4QgajogGhUQgFhOgIihQgHiJgGg8QgQikgFgcQgIgwAFhHQAIhjAShIQAVhYBLgoQBUgdBVAuQBUAvANBHQADAwgvAqQg3AvgvBaQg/CMgDCLQgDCMATBfQAVBwAlA8IA7BmQAcA1AJA0QAEAWAEBDIACA7QADAnAFAhQAGAlALA7IAMBBQAFArAkAtQAhAqAsAQQArAPAngRQAmgQAjgVQAkgWAPgQQBChKAHg5IASiFQAHhGAuhrQAhhLAog5QAmg1AlgbQBGgzAagBQBggQAHAyQAGA0goBIQgQAegXAjIglA3QhUCAgiBlQgrCBgNAyQgKAngVAoQgLAVgXAlQgXAkgyAtQgsAohgAjQg6AVg9AAIgXAAg");
	this.shape_7.setTransform(40.8565,-49.3572);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A069D6").s().p("AhRPvQhCgGg3gdQgugYgjgdQgdgWgPgUQgjgugZgwQgQgdgUguQgWgzgRhXIgUhWQgOg9gGg4QgZjogGhUQgGhOgIihQgGiJgGg8QgQikgFgcQgJgyAGhFQAHhjAShIQAVhXBLgpQBUgeBVAvQBVAwANBGQADAwgwApQg3AxgvBZQg+CMgDCLQgDCMATBfQAVBwAkA8QAvBPAMAXQAdA2AJAzQADAVAEBEIADA7QACAnAGAhQAGAmALA6IAMBCQAFAqAkAuQAhArArAPQAsAQAmgQQAngQAjgVQAkgVAPgQQBBhKAGg4QALhlACgeQAEhDAnhuQAbhOAig6QAgg3AigeQBAg6AagDQBfgaALAwQALAyggBMQgRArgvBVQhMCMgfBlIgcBeQgPAzgJAlQgJAngVApQgJASgZAoQgUAhg1AwQgtAohgAjQg7AVg7AAIgZgBg");
	this.shape_8.setTransform(38.9343,-49.2606);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A069D6").s().p("AhpPtQhCgEg3gdQhYgtgmgxQgjgugagwQgQgegTgtQgWgygRhXIgUhWQgOg+gGg3QgajogGhUQgFhPgIihQgHiIgGg9QgPiegGgiQgIgvAFhHQAIhjAShJQAWhYBKgnQBUgeBVAvQBUAvANBHQADAwgvApQg3AvgvBaQg/CNgDCLQgDCLATBgQAVBvAkA9QAwBQAMAVQAcA0AJA1QAEAXAEBDIACA7QADAmAFAhQAGAmALA6IAMBCQAFAqAkAtQAhAqAsAPQArAPAngQQAngSAigUQAkgWAPgQQBChKAIg6IATiFQAJhJAwhoQAjhLAqg4QAngzAmgaQBIgyAaABQBhgNAEAzQAFAzgqBHQgSAdgYAjIgmA1QhXB9gjBkQgsB+gNA0QgKAngVAoQgKAUgYAlQgVAjgzAuQgsAohgAkQg7AWg+AAIgWgBg");
	this.shape_9.setTransform(41.4637,-49.4143);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A069D6").s().p("AhZPuQhCgFg3gdQhYgvglgwQgjgugagvQgQgegTguQgWgygRhXIgUhWQgOg9gGg4QgajogGhUQgFhPgIihQgHiIgGg9QgQikgFgcQgIgyAFhEQAIhjAShJQAVhXBLgoQBUgeBVAvQBUAvANBHQADAvgvAqQg3AwgvBZQg/CNgDCLQgDCLATBgQAVBvAlA9QAvBOAMAXQAdA3AIAyQAEAXAEBDIACA7QADAmAFAhIASBgIALBCQAGAqAjAuQAhAqAsAQQArAPAmgQQAogQAjgVQAkgVAOgQQBChJAGg6QALhXAEgtQAHhHAphqQAdhNAlg5QAig2AjgdQBEg4AZgBQBggXAJAyQAJAxgjBMQgPAggVAkIghA5QhQCGggBmIgdBdQgQAygJAmQgKAmgVApQgJASgZAoQgVAkg0AtQgtAohfAjQg5AVg8AAIgagBg");
	this.shape_10.setTransform(39.7684,-49.3237);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A069D6").s().p("AhsPtQhDgEg3gdQhYgugmgxQgjgtgagwQgPgdgVguQgVgygShXIgUhWQgOg+gGg3QgZjogGhUQgGhSgIieQgHiKgFg7QgPiegGgiQgJgvAGhHQAHhjAShJQAWhYBKgnQBVgeBUAvQBVAvANBHQADAwgwApQg2AvgwBaQg+CNgDCLQgDCLATBgQAVBxAkA7QAwBQALAVQAcA0AJA1QAEAXAEBDIADA6QACAnAFAhQAGAlAMA7IALBBQAFApAlAvQAhAqArAPQAsAPAngRQAmgRAjgVQAkgWAPgQQBChKAIg6IAUiFQAKhJAxhoQAkhKAsg4QAogzAngZQBKgwAZABQBhgLAEAzQADA0gsBFQgSAdgZAjIgnA0QhXB3gmBnQgrB7gOA3QgKAmgVAoIgiA6QgXAkgyAtQguAohdAjQg7AXg+AAIgVgBg");
	this.shape_11.setTransform(41.9016,-49.4393);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-151.1,130,302.29999999999995);


(lib.PuppetShape_4copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_2("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A069D6").s().p("Aj3QUQhHgFg+gaQg6gZgqgmQhIhBgZgyQgqhSgahdQgNgvgLhbIgNhVQgJg+gEg1IgMiiIgLiWIgOjuQgHiCgHhBQgRiggGggQgJguAEhIQAGhfAShNQAVhYBKgoQBVgfBVAuQBVAvANBHQAEAvgwAqQg2AvguBbQg9CNgCCLQgBCHATBkQAXByAiA7QAwBUAKAUQAbA2AIA2QAEAZABBCIAAA8QAAApADAiIAKBlQAFAyAAATQACAuAcA0QAbAyArAfQApAeAwAEQAuADArgCQApgCAYgGQBhgbAygqQBDg4ArggQBIg0BsgZQBSgTBMAEQBCAEArATQBTAlALAUQA/BLgpAfQgpAfhSACQghABgsgBIg+gDQiHgChdAuQhRAohDA1QgcAXglAVIg3AdQgnAUg7AMQglAIg0AAQgdAAghgCg");
	this.shape.setTransform(58.0692,-45.4324);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A069D6").s().p("AkQQaQhGgKg9gdQg4gcgogoQhBhCgZg1QgmhUgWhdQgMgxgHhZIgKhVQgIg+gCg1QgDhAgHhgIgLiVIgNjuQgHh/gHhEIgOh2QgGgzgFgXQgJgtAEhJQAGhgARhLQAVhYBJgpQBUgfBWAtQBVAuAOBHQAEAvgwArQg2AwgtBaQg8CMgBCMQgBCKATBhQAYB1AhA5IA6BpQAaA2AHA3QAEAhgBA7IgBA9QgBAqACAhIAGBnQAEAzAAASQAAAvAZA1QAZA0ApAhQAoAhAwAHQAtAGArABQAqAAAYgEQBjgUA1gnQBEgyAwgeQBLgvBtgRQBTgMBLAJQBCAIAqAXQBPApAKAWQA6BPgrAcQgrAchSgDQgigBgrgFIg+gHQiFgMhhAnQhTAihGAwQguAghOAhQgoARg8AJQgYADgeAAQgrAAg2gHg");
	this.shape_1.setTransform(57.3834,-44.4181);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A069D6").s().p("AkmQdQhFgOg6ghQg2gegmgqQg+hFgWg1QgjhVgThdQgKgzgFhXQAAgPgHhGQgHg/gBgzQgChCgGheIgKiUIgNjtQgHh9gIhGQgSicgHgjQgJgsADhKQAGhjARhJQAThXBKgqQBUggBWAuQBVAtAOBHQAFAvgwArQg2AxgtBaQg7CMgBCMQAACLATBgQAXB0AiA8QAqBJAPAfQAaA2AGA4QAEAggCA9IgCA9QgCAqABAiIAEBnQACAzgBATQgBAwAXA1QAXA2AoAkQAnAjAvAKQBfAVA7gIQBkgMA4gjQBDgrA2gdQBMgoBwgJQBUgHBKAPQBBANAoAZQBMAuAJAXQA0BUgtAYQgsAZhTgJQghgDgrgIIg9gMQhDgLg+AEQg5ADgtAOQhWAchJArQgvAchQAcQgtAPg5ADIgZABQg2AAhHgOg");
	this.shape_2.setTransform(56.6198,-43.4156);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A069D6").s().p("Ak2QeQhEgRg4gkQg0gggkgsQg7hIgUg0QgghVgRheQgIgwgDhaQgBgSgFhCQgGhAgBgyQgBhEgFhbIgJiUIgNjtQgHh7gJhHQgSicgHgjQgJgvADhHQAEhgARhMQAUhYBKgpQBTghBWAuQBVAtAPBGQAFAvgwAsQg1AwgtBbQg7CLAACNQAACLATBgQAXB0AiA8QAmBEASAlQAaA3AGA4QADAdgCBAIgDA+QgDAqABAiIACBoQAAAygBAUQgCAxAVA2QAWA3AmAmQAmAlAvANQAsANAsAHQAoAGAagCQBjgEA8ggQBKgmA0gXQBRgjBvAAQBTAABJAUQA/ASAnAbQBJA1AHAWQAtBXguAWQguAWhRgPQghgGgqgLIg9gQQiBgghmAYQhXAUhNAmQgxAZhRAVQgsAMg6AAQg8AAhYgXg");
	this.shape_3.setTransform(55.8438,-42.4521);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A069D6").s().p("AixQ9Qg7gEhXgcQhCgVg2glQgygjgigsQg5hKgRg0QgghZgNhbQgHgygChXIgFhUQgFhAgBgxQgBhGgEhZIgJiUIgNjtQgHh7gJhHQgSibgIgkQgJgtADhJQAFhiAQhJQAUhZBJgpQBTggBXAtQBVAtAPBGQAFAvgvAsQg1AwguBbQg6COAACKQAACMATBgQAZB2AgA6QAnBHARAiQAaA2AFA6QAEAhgDA8IgEA+QgCArgBAiIABBoIgBBGQgDAzATA1QAVA5AlAoQAlAnAvAQQBaAhA/ACQBlABA9gZQBNggA2gTQBTgcBuAJQBUAGBGAaQA+AWAkAeQBEA6AGAXQAoBZgwATQgwAThQgVQghgJgogNIg8gVQiAgqhmAPQhWANhRAgQgiANgnAKIg8ANQgdAGgkAAIglgBg");
	this.shape_4.setTransform(55.0041,-41.5315);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A069D6").s().p("AJBRTQgggKgngRIg7gZQh/g0hlAGQhZAFhRAaQgzAQhTAKQgsAFg6gIQg+gIhRggQh/gwhGhhQg2hMgQgzQgehagMhZQgGgvgChbIgFhTQgEhAgBgxQgBhGgEhZIgJiTIgMjtQgHh6gJhIQgUiggGgfQgKgtADhJQAFhjAQhJQAUhYBJgpQBUghBWAtQBVAsAPBIQAFAugvAsQg2AxgtBaQg6CNABCMQAACLATBgQAYB0AgA9QAnBFARAkQAaA1AGA7QADAigDA7IgEA+QgDArAAAiIAABqQAAAxgCAVQgDAyASA3QAUA5AlArQAkApAuAUQArASArAMQAnALAbADQBoAKA9gVQBOgZA5gOQBUgVBuASQBSANBEAeQA8AbAiAhQBAA9AEAYQAiBcgxAPQgSAGgWAAQgmAAgygRg");
	this.shape_5.setTransform(54.1348,-37.7821);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A069D6").s().p("AI2R2QgggNgmgTIg5geQh6g+hngEQhZgDhTATQg2AMhQADQgvACg2gLQg6gMhSgkQh8g3hBhgQg0hNgQgzQgchXgMhbQgHg2gBhTIgFhUQgEhAgBgxQgBhGgFhZIgIiTIgNjtQgHh7gJhHQgTiggHgfQgKgtAEhJQAEhjARhJQAUhYBJgpQBTghBWAtQBWAtAPBHQAEAvgvArQg2AxgsBaQg6CMAACNQABCNASBeQAZB2AgA7QAnBGARAjQAZA1AGA7QADAggCA9IgEA+QgDAsAAAiQAACcgBAUQgEAyASA4QAUA7AkAsQAjArAuAXQBWArBBAMQBlASBCgPQBWgUA0gIQBWgNBrAbQBRAUBBAjQA5AfAgAjQA7BAADAZQAbBfgyALQgNAEgQAAQgqAAg3gXg");
	this.shape_6.setTransform(53.253,-33.6909);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A069D6").s().p("AIrSYQgsgWhOgxQh2hJhngNQhWgLhWAKQgwAHhWgCQgwgBg0gPQg9gRhKgmQh4g9g/hfQgyhOgPgxQgchagMhYQgIg4gBhRQgBgSgFhCQgFg/gBgyQgChDgFhbIgIiVIgNjtQgHh8gJhGQgTiggHgfQgKguAEhIQAFhjAQhJQAUhYBJgpQBTghBXAuQBVAsAPBHQAFAvgwArQg1AygtBaQg6CLAACNQAACIATBjQAYB0AhA9QAtBSALAYQAZA0AHA6QADAdgCBAIgDA+QgDArABAjIABBqQAAAygBAWQgDA0ASA3QAUA8AkAtQAiAtAuAaQBVAxBAAQQBlAbBDgJQBZgLAzgDQBWgFBpAjQBPAbA+AnQA2AjAdAlQA4BGAAAYQAUBggyAIIgTACQgtAAg9geg");
	this.shape_7.setTransform(52.3265,-29.5802);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A069D6").s().p("AIgS5QgwgchFgzQhzhVhjgWQhVgUhXACQg6AChLgIQgsgEg2gSQg9gXhGgnQhzhCg9heQgvhMgRgyQgdhdgMhUQgIg6gEhPQAAgSgHhCQgGhAgCgxQgChEgGhbIgJiVIgNjuQgHh8gIhGQgTiigHgdQgJgwAEhGQAEhgARhMQAVhZBJgoQBUggBVAtQBWAuAOBGQAFAvgwArQg1AxguBaQg6CMgBCMQAACHATBlQAXByAiA9QArBMAOAeQAZA0AHA6QADAZgBBEIgCA+QgBAqABAkIADBrQABAygBAVQgCA0ASA4QAVA9AkAwQAjAuAtAeQBVA3A+AUQBkAjBFgCQBMgCBBACQBVACBmAtQBMAiA6AsQAzAmAbAnQAyBJgBAYQAOBhgzAFIgKABQgwAAhBgmg");
	this.shape_8.setTransform(51.407,-25.4679);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A069D6").s().p("AIVTaQgwgig/g2QhvhfhgghQhSgchXgGQg+gEhGgNQgugIgwgWQg6gZhFgrQhwhGg6hcQgvhNgQgxQgfhbgOhVQgJg7gFhNIgJhUQgIg/gCgzIgUk2IgNjuQgHh+gIhEQgTiigGgeQgJgtAEhJQAFhiARhKQAUhYBLgoQBTggBVAuQBWAtAOBHQAEAvgvArQg1AvguBbQg9COAACLQAACIASBjQAYB0AiA7QAtBRAMAYQAaA1AHA5QAEAZAABDIgBA+QgBAqADAkIAFBrQADAzAAAVQgCA1AUA5QArB6BfBGQBTA7A+AcQBlArBDAFQBWAHA4AHQBTAMBiA1QBJAoA2AvQAwArAXAoQAtBNgCAYQAGBigzABIgCAAQgzAAhDgug");
	this.shape_9.setTransform(50.4502,-21.3554);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A069D6").s().p("AJ+UwQg0gDhAgzQgrgig+g+QhphphdgsQhPglhXgPQg6gKhGgSQgxgNgrgXQg7gfg/gsQhshLg4hZQguhLgRgxQghhegQhQQgKg8gIhNIgMhUQgKg/gDg0IgYk3IgNjvQgHiBgIhCQgQibgHglQgJgtAEhJQAGhiARhKQAVhXBKgpQBUgfBVAuQBVAuAOBHQAEAvgwAqQg1AxgvBaQg8CMgBCMQgCCHATBkQAYB0AiA7QAuBQAMAYQAaA1AIA4QADAWACBFQACBhADAqIAKBsQAEAzABAWQABA4AUA3QAtB7BhBOQBOBABAAhQBlA2BAAMQBIANBFAQQBSAUBdA9QBFAvAyAzQAsAuAVApQAnBPgEAZQgBBggwAAIgDgBg");
	this.shape_10.setTransform(49.5615,-17.2446);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A069D6").s().p("AIaTOQgwgfhCg1QhxhchhgdQhUgZhWgDQg8gChIgLQgvgHgxgUQg/gbhCgoQhxhEg6hdQgwhNgQgxQgehbgNhVQgJg6gEhPIgJhUQgHg/gCgzQgDhDgGhcIgKiVIgNjuQgHh9gIhGQgTihgGgeQgKgvAEhHQAGhjARhJQAUhYBJgpQBUggBWAuQBVAuAOBGQAFAvgwArQg3AygsBZQg7CLgBCNQAACGATBlQAYB0AhA8QAmBDATAmQAaA1AHA4QADAaAABDIgCA+QAAAqABAkIAFBrQACAzAAAVQgCA2ATA3QAqB7BgBDQBUA6A+AYQBmApBCACQBUAEA5AFQBXAJBhAyQBKAlA3AvQAyApAYAnQAvBKgCAaQAJBigzACIgFAAQgyAAhBgrg");
	this.shape_11.setTransform(50.8077,-22.8313);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A069D6").s().p("AKHUZQg0AAhCgxQgvgig+g6QhthkhegkQhSghhWgJQg/gHhDgPQgwgKgugWQg6gchDgrQhuhJg5haQguhMgRgxQgghegOhSQgKg3gGhRIgKhUQgJhAgDgyIgVk3IgNjuQgIiAgHhDQgSidgHgiQgJgwAEhHQAGhgARhLQAVhYBJgpQBUgfBWAtQBVAuAOBHQAEAvgwArQg2AwgtBaQg8CMgBCMQAACJASBjQAXBxAiA+QApBGARAjQAaA1AIA4QADAWABBFIAAA+QAAAqACAkIAIBsQADAyAAAWQAAA1AUA5QArB6BgBKQBQA9BAAeQBkAwBDAIQBNAJBAALQBUAPBfA5QBIArA0AxQAuAsAXApQAqBMgDAaQADBhgyAAIgBAAg");
	this.shape_12.setTransform(50.0746,-19.6026);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A069D6").s().p("AJ8U5Qg0gEg/g0Qguglg6g9QhphshbgtQhRgohUgPQg4gLhIgUQgwgNgrgZQhAgjg5goQhrhMg4hZQguhKgRgxQgjhhgPhOQgMg/gHhJQgCgQgLhEQgKhAgEgzQgTjmgFhSIgOjvQgHiCgHhCQgRiggHgfQgJgyAFhEQAGhjARhJQAVhYBKgpQBUgeBVAuQBVAuAOBHQAEAvgwAqQg2AwguBaQg9CPgBCJQgBCIATBkQAXByAiA8QAuBQAMAYQAbA2AIA3QADAWACBFQADBlAEAmIAKBsQAFA0ABAVQABA2AVA5QAuB8BgBPQBNBABBAkQBjA4BCANQBQARA7AQQBSAUBcBBQBFAvAwA0QAsAvAUApQAmBQgEAYQgCBfgwAAIgDAAg");
	this.shape_13.setTransform(49.3988,-16.377);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A069D6").s().p("AIVTcQgugghBg5QhuhfhggiQhUgdhWgGQhAgFhDgNQgxgJgtgVQg7gZhEgrQhwhHg5hcQgxhPgPguQgehbgOhVQgKg6gFhPIgJhTQgIg/gDgzQgDg9gHhjIgKiWIgNjuQgHiAgIhDQgTihgGgeQgJguAEhIQAFhfAShNQAUhZBKgoQBUggBVAuQBVAtAOBIQAFAugwArQg1AwguBbQg8CMgBCMQAACGATBlQAXByAiA+QAsBNANAcQAaA0AIA6QADAYAABDIgBA+QAAArACAjIAGBrQADA0AAAVQgBA1ATA4QArB7BgBGQBSA8A/AbQBlAtBCAFQBQAGA+AJQBTALBiA2QBJApA1AwQAwAqAYAoQAsBNgCAYQAGBjg0AAIgCAAQgzAAhCgug");
	this.shape_14.setTransform(50.4448,-21.1304);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A069D6").s().p("AKDUkQg1gChAgxQgqghhBg9QhshnhegoQhRgihWgMQgygHhPgSQgwgMgtgXQg5gdhCgrQhthKg4haQgwhMgQgwQgihhgNhOQgKg5gHhQIgLhUQgJhAgEgzIgWk2IgNjvQgHiAgIhDQgSiegGghQgJguAEhJQAGhfARhMQAVhYBKgpQBTgfBWAuQBVAtAOBHQAEAwgwAqQg2AxgtBZQg8CLgCCNQAACJASBjQAYB0AiA7QAqBJAPAfQAbA1AIA4QADAWABBGIAAA9QABAqADAkIAIBsQAEA0AAAVQAAA2AVA4QArB6BhBNQBQA/A/AfQBkAyBCAKQBXAOA2ALQBUARBdA7QBHAtAzAyQAtAtAWApQApBOgEAYQACBhgxAAIgCAAg");
	this.shape_15.setTransform(49.8522,-18.4479);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A069D6").s().p("AJ5U/Qg0gFg+g0Qgpgjg+hBQhmhshcgwQhQgphVgRQg6gMhFgUQgxgPgqgXQg+gkg6gpQhqhMg4hZQguhLgRgwQgkhkgOhKQgMg5gJhQQgBgQgMhEQgKg/gEg0QgTjigGhWIgOjvQgHiCgHhCQgSilgFgaQgKgvAFhIQAFhdAThOQAVhYBKgpQBUgeBVAuQBVAuAOBHQADAwgvApQg2AwgvBaQg8CMgCCMQgBCIATBkQAXByAiA8QAwBUAKAUQAbA1AIA3QAEAXACBEIACA+QABAqAEAkIALBsQAGA0AAAVQABA3AVA4QAvB8BgBQQBQBDA+AjQBkA5BAAOQBZAVAzAOQBRAWBbBBQBEAxAwA0QAsAvATAqQAmBQgGAZQgDBegwAAIgDAAg");
	this.shape_16.setTransform(49.249,-15.7769);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-151.1,162.2,302.29999999999995);


(lib.PuppetShape_4copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_2("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A069D6").s().p("Aj3QUQhHgFg+gaQg6gZgqgmQhIhBgZgyQgqhSgahdQgPg1gJhVIgNhVQgJg+gEg1IgXk4IgOjuQgHiCgHhBQgRifgGghQgJgvAFhHQAFhdAShPQAWhYBJgoQBVgfBVAuQBVAvANBGQAEAwgwAqQg2AwguBaQg9CNgCCLQgBCHATBkQAXByAiA7QAwBUAKAUQAbA2AIA2QAEAZABBCIAAA8QAAApADAiIAKBlQAFAyAAATQACAuAcA0QAbAyArAfQApAeAwAEQAuADArgCQApgCAYgGQBhgbAygqQBDg4ArggQBIg0BsgZQBSgTBMAEQBCAEArATQBTAlALAUQA/BLgpAfQgpAfhSACQghABgsgBIg+gDQiHgChdAuQhRAohDA1QgcAXglAVIg3AdQgnAUg7AMQglAIg0AAQgdAAghgCg");
	this.shape.setTransform(58.0689,-45.4324);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A069D6").s().p("AjtQUQhHgDhAgZQg7gYgrgnQhIhAgZg0QgphRgZhfQgNgvgJhcIgLhVQgIg+gDg0IgKiiIgLiWIgNjtQgHiBgIhCQgSijgGgdQgJgtAEhJQAHhiARhKQAUhXBKgpQBUgfBWAuQBVAuAOBHQADAvgvAqQg2AxguBZQg8CNgCCLQAACJASBiQAXBzAiA7QAuBQAMAZQAbA1AHA3QAEAeAAA+IgBA9QgBApACAhIAIBmIAEBEQABAuAbA0QAaAyAqAdQApAdAvACQAtACAqgFQApgEAXgIQBeggAtgvQA8g9ApgkQBAg6BqglQBPgbBMgFQBCgDAtAOQBWAbANATQBGBEgkAjQgmAjhRAMQggAFgsADIg/AEQiEAMhaA4QhPAxg9A6QgbAagkAXQgSAMgkAVQgkAWg8AQQgxAOhHAAIghgBg");
	this.shape_1.setTransform(56.6389,-45.6426);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A069D6").s().p("AlmP6Qg7gWgtgnQhIhAgag0QgnhOgbhkQgNgzgHhXIgKhWQgIg9gCg1QgDhCgHhfIgKiWIgNjtQgHiAgIhDQgTikgFgcQgJgtAEhJQAFhfAShMQAUhYBKgpQBUgfBVAuQBWAtAOBHQADAvgvArQg2AwguBaQg8CNgBCLQAACJASBiQAXBzAiA7QAsBNAOAcQAaA1AHA4QAEAcgBBAIgBA9QgBApACAhIAGBmIAEBEQAAAsAaA1QAaAyAqAcQApAcAtgBQAsAAAqgHQAogGAXgJQBcgoAmgxQAwg6ArgwQA6g/BkgwQBMgjBLgNQBBgKAvAJQBYAQAPASQBOA8ghAnQgiAnhPAUQggAJgrAHIg+AMQiFAchSBAQhNA7g3A9QgZAbgiAbQgRAMgjAYQgkAZg7ATQg5AThgABIgDAAQhHAAhAgYg");
	this.shape_2.setTransform(55.129,-45.9235);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A069D6").s().p("AlPP7Qg+gUgtgnQhLg/gag0QgphQgahiQgMgvgIhcIgKhVQgHg+gDg1QgDhBgGhgIgLiVIgNjuQgGh/gIhEQgSiegHghQgJgwAEhGQAGhgARhMQAVhYBJgpQBUgfBWAuQBVAuAOBGQAEAwgwAqQg2AxgtBaQg8CMgBCMQgBCJATBiQAYB0AhA6QAvBUAKAVQAbA1AHA4QAEAcgBBAIgCA9QgBApABAhIAHBlQADAxAAATQAAAsAbA0QAaAyApAaQApAbAsgDQAsgEApgIQApgJAUgLQBXgsAjg1QA4hRAYggQAzhEBfg5QBIgsBJgUQA/gSAwAEQBYAJASAQQBUAzgdAqQgdAqhNAdQgeALgrAMIg8ASQiAAqhOBIQhLBGgvA+QgXAeghAdQgOANgkAbQgjAbg5AXQg5AXhgAFIgWAAQg9AAg4gTg");
	this.shape_3.setTransform(53.4856,-46.2729);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A069D6").s().p("AkyP7Qg+gSgwglQgoghgdggQgYgbgLgWQgrhPgbhiQgOg0gIhXIgKhWQgIg+gDg1QgDhBgHhgIgKiWIgNjtQgHh/gIhEQgSifgGghQgJgtAEhJQAGhfARhMQAVhYBKgpQBTgfBWAuQBVAtAOBHQAEAvgwArQg2AwgtBaQg8CNgCCLQAACJASBiQAXBzAiA7QAsBOAOAbQAaA2AIA3QAEAggBA8IgCA8QgBApACAhIAHBlQAEAyAAARQAAAuAcAyQAbAwApAZQApAZArgGQAsgFAogMQAogLATgMQBTgyAfg3IBFh3QAqhHBahEQBDgzBGgcQA9gYAvgBQBagCASAOQBZAqgYAtQgXAshKAmQgcAOgpARIg6AZQh8A3hIBRQhEBMgrBCQgVAggfAfQgQARggAbQgfAcg6AdQg3AZhhALQgUACgTAAQg1AAgxgPg");
	this.shape_4.setTransform(51.785,-46.7218);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A069D6").s().p("AkPP6Qg/gPgxgkQhPg7geg0QguhPgchhQgPgugKhdIgMhWQgIg9gDg2QgEhAgHhiIgMiWIgNjtQgGiCgIhCQgSikgFgbQgJguAEhIQAGhjARhJQAVhXBKgqQBUgfBVAuQBVAuAOBHQAEAvgwArQg1AwgvBaQg8CMgCCMQgBCIATBjQAXBzAiA7QAqBJAQAfQAbA2AHA2QAFAkgBA4IgBA8QgBApADAhIAIBkIAFBDQABArAeAzQAbAvAqAXQApAXAqgJQArgIAngOQAogOASgNQBQg5AYg3IA6h9QAkhJBShOQA9g5BCgjQA6gfAvgGQBYgMAVAMQBeAfgUAwQgSAwhFAsQgbASgnAVIg3AfQh4BHg/BWQg/BUglBEQgSAhgdAiQgMAOghAhQgdAeg6AhQgzAehiAQQgdAEgdAAQgrAAgqgKg");
	this.shape_5.setTransform(49.9817,-47.267);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A069D6").s().p("AjkP3QhAgMgzghQhUg4gfgzQgwhNghhhQgRg0gLhXIgOhWQgKg9gEg3IgNiiIgMiWIgNjvQgGiCgHhBQgRihgGgfQgJgsAEhKQAGhfAShNQAVhYBKgoQBVgfBVAuQBVAvANBHQAEAugwArQg2AwgvBaQg9CNgBCLQgCCGATBlQAXByAiA7QAsBMAOAcQAbA1AIA2QAEAeABA9IAAA8QAAAoADAhIALBjIAHBDQACAqAfAyQAdAtArAVQApAUAqgLQAqgMAlgQQAmgRARgOQBMg/AUg5QASg0AdhNQAehMBJhUQA3g/A9gqQA3glAtgLQBXgVAWAJQBgAWgOAxQgOAzg/AyQgZAVgkAZIg0AlQhwBTg5BcQg4BcgfBFQgQAjgaAkQgLAPgeAkQgbAfg4AmQgzAhhfAWQgoAJgnAAQghAAgggGg");
	this.shape_6.setTransform(48.0692,-47.9293);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A069D6").s().p("AizPzQhBgIg1gfQhWgzgjgyQg0hLglhgQgUg1gNhWIgRhWQgMg9gFg3QgVjagHhgQgFhGgIipQgHiGgGg/QgRihgFgfQgJgtAFhJQAHhgAShLQAVhYBLgoQBUgfBVAvQBUAvAOBHQADAvgwAqQg2AwgvBaQg+CMgCCLQgCCKATBhQAVBwAkA9QAsBKAPAcQAbA3AJA0QAEAZACBBIABA7QABAoAEAhIAOBhIAJBCQAEAqAiAwQAfArArASQAqARAogOQApgPAlgSQAkgUAQgPQBHhFAPg6QAPg7AVhJQAVhMBChdQAxhEA4gwQAygqAsgQQBTgfAYAHQBhALgIAzQgIAzg5A6QgXAXgiAdIgwArQhnBfgxBhQg0BogWBAQgNAlgYAlQgLASgbAlQgZAig0ApQgwAlhfAdQgzAPg0AAQgUAAgVgCg");
	this.shape_7.setTransform(46.0377,-48.7297);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A069D6").s().p("AjRP2QhBgLg0ggQhSg0gjg1QgxhMgjhhQgRgygNhZIgPhWQgKg9gFg3QgTjZgGhgQgFhBgJiuQgHiEgGg/QgSingFgZQgJgwAFhHQAHhjARhIQAVhYBLgoQBUgfBVAvQBVAuANBHQAEAvgwArQg3AwguBZQg9CMgCCMQgCCKATBhQAWBzAjA6QAwBTAKAUQAcA0AIA3QAEAdABA+IABA8QAAAoAEAhIAMBiQAGAyABAQQADAqAgAyQAeAsAqAUQAqATApgNQAqgMAlgRQAlgSARgPQBKhBASg6QARg4AahKQAZhLBHhZQA0hBA8gsQA1gnAtgNQBVgaAXAJQBgARgLAyQgLAyg9A3QgZAVgjAbIgyAnQhtBag2BdQg2BggcBDQgOAkgaAlQgMARgcAjQgZAgg4AnQgyAkhfAYQgsALgsAAQgcAAgbgEg");
	this.shape_8.setTransform(47.267,-48.2336);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A069D6").s().p("AioPyQhCgHg2gfQgtgagigdQgcgXgPgVQghgugYgxQgOgdgTgvQgUgygPhYIgRhWQgMg9gFg3IgQikQgJhdgEg6QgFhGgJipQgGiGgHg/IgMh2QgFgzgEgXQgJgwAFhGQAHhhAShLQAVhXBLgoQBUgfBVAvQBUAwAOBGQADAvgwAqQg3AxguBZQg+CLgDCMQgCCNATBeQAWBzAjA6QAsBKAPAcQAcA3AIAzQAFAdACA9IABA7QACApAEAgIAPBhIAJBCQAEApAjAwQAfArArARQArARAogPQApgQAigTQAmgUAPgPQBHhGAOg6IAhiFQAUhMBAheQAvhFA4gxQAxgrAsgRQBTghAXAHQBhAIgGAzQgHAzg5A8QgWAXghAeIgvAsQhmBjgvBgQgwBigYBIQgNAlgXAmQgLASgaAkQgZAjgzAqQgvAlhfAfQg2AQg1AAQgSAAgSgBg");
	this.shape_9.setTransform(45.641,-48.9064);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A069D6").s().p("AjEP0QhBgJg0ggQhWg0ghgzQgggvgWgxQgPgfgRgtQgRgxgPhaIgPhWQgMg9gEg3QgUjZgHhhQgFhFgIipQgHiGgGg+QgSimgFgaQgJgwAFhHQAIhlARhGQAVhYBKgoQBUgeBWAuQBUAvAOBGQADAwgwAqQg1AwgwBZQg9CMgCCMQgCCJASBiQAXBzAjA6QAtBNANAaQAbA0AJA3QAEAZACBBIAAA8QABAnAEAhQAEAnAJA7QAHAzABAPQAEAsAgAvQAfAsAqATQArASAogNQAqgOAkgRQAlgTAQgOQBJhDARg6QAQg2AYhNQAYhNBEhZQAyhDA7gtQA0gpAsgOQBUgcAXAIQBhAOgJAyQgLAzg7A4QgXAWgjAcIgxApQhrBcgzBfQg2BlgZBAQgOAkgZAmQgMASgbAjQgaAhg1AoQgxAkhfAaQgvANgvAAQgZAAgZgEg");
	this.shape_10.setTransform(46.7281,-48.4364);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A069D6").s().p("AihPwQhCgGg2geQgugagigcQgcgYgPgUQg1hLgnhfQgUgzgPhXIgShWQgNg9gFg4QgakSgDgpQgFhKgJilQgGiHgGg+QgRiigFgeQgIgwAEhGQAIhjAShJQAVhXBKgoQBVgfBVAwQBUAvANBGQAEAvgwArQg3AvgvBaQg+CMgDCMQgCCMATBeQAWByAjA7QAvBOAMAYQAcA1AJA1QAEAdACA9IACA7QACAoAEAgIAPBhQAJAxABAQQAFAqAiAvQAgArArARQArAQAogPQAogQAjgUQAlgUAPgQQBGhGAOg7IAgiFQAThOA/hdQAuhGA3gxQAwgsAsgSQBTghAXAGQBiAHgHAzQgGAzg4A9QgWAYggAeIgvAsQhlBlguBgQgvBlgXBGQgMAkgWAnQgKARgbAmQgZAkgzApQgvAnheAfQg3ASg3AAQgRAAgQgCg");
	this.shape_11.setTransform(45.3892,-49.041);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-151.1,162.2,302.29999999999995);


(lib.magglassicon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_21 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_41 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(20).call(this.frame_41).wait(1));

	// pointers
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUBXIAAg3QABgMgHgJQgFgFgIAAQgKACgDADQgJANACAKIAAA1IgjAAIAAiuIAjAAIAABRQAGgIAHgDQAJgFALAAQAOgBAQAMQANAQgDAPIAABDg");
	this.shape.setTransform(-545.1798,-193.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AF0iaIrnE1");
	this.shape_1.setTransform(-747.8,-37.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1,1).p("AHbAAIu1AA");
	this.shape_2.setTransform(-758.15,-123.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3,1,1).p("AnDinIOHFP");
	this.shape_3.setTransform(-755.85,-209.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3,1,1).p("AmskeINZI9");
	this.shape_4.setTransform(-751.525,-288.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrBLQgRgSAAgZQABgbAQgPQAOgNAXgBQASgBAOARIAAhQIAjAAIAACuIgjAAIAAgNQgGAOgbACQgWAAgOgOgAABAFQgJAAgIAHQgIAHgBANQABANAIAHQAJAIAIAAQALAAAJgIQAGgGABgOQAAgNgHgGQgIgIgKAAIgCAAg");
	this.shape_5.setTransform(-651.95,-261.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguAoQgQgSAAgWQAAgVAQgSQAPgQAfgBQAfABAQAQQAQASAAAVQAAAWgQASQgPAQggABQgfgBgPgQgAgTgTQgHAIgBALQACAPAGAFQAHAIAMAAQALAAAJgIQAHgHAAgNQAAgLgHgIQgJgHgLAAQgLAAgIAHg");
	this.shape_6.setTransform(-665.95,-258.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguAoQgQgSAAgWQAAgVAQgSQAPgQAfgBQAfABAQAQQAQASAAAVQAAAWgQASQgPAQggABQgfgBgPgQgAgTgTQgHAIgBALQACAPAGAFQAHAIAMAAQALAAAJgIQAHgHAAgNQAAgLgHgIQgJgHgLAAQgLAAgIAHg");
	this.shape_7.setTransform(-680.15,-258.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUBXIAAg3QABgMgHgJQgFgFgIAAQgKACgDADQgJANACAKIAAA1IgjAAIAAiuIAjAAIAABRQAGgIAHgDQAJgFALAAQAOgBAQAMQANAQgDAPIAABDg");
	this.shape_8.setTransform(-693.7798,-262.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAA5QgWACgWgRIAOgYQAHAFAFADQAIAEAHAAQAEAAAFgDQAEgDAAgEQABgDgFgDIgJgEIgJgCQgKgDgHgGQgIgIAAgMQABgQAJgIQARgNAPACQAXABANAIIgOAWQgJgGgKAAQgGAAgDADQgCACAAADQAAADADABIAKAEIAJADQAJACAJAHQAIAIAAAMQgCAVgKAHQgOAMgQAAIgDAAg");
	this.shape_9.setTransform(-602.35,-122.1455);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA1A3IAAg2QABgKgGgKQgEgGgIAAQgJAAgFAHQgGAJABALIAAA1IghAAIAAg3QABgMgHgJQgGgEgFAAQgHAAgFAEQgJANACAIIAAA3IgjAAIAAhqIAjAAIAAAMQAPgRAPACQAIgBAMAGQAIAFAEAKQAEgHAKgHQAKgGAMAAQAUABAKAJQAOASgDAOIAABDg");
	this.shape_10.setTransform(-617.6805,-122.2906);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmA3IAAhqIAiAAIAAARQAFgKAIgFQAIgFALAAQAFAAAGACIgCAgQgHgDgJgBQgLABgGAHQgJANABAOIAAAsg");
	this.shape_11.setTransform(-631.75,-122.2773);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEA5QgXABgRgRQgQgTAAgVQABgbAQgQQAOgOAXAAQAPgDASASIAAgMIAiAAIAABqIgiAAIAAgNQgPARgMAAIgEAAgAgQgTQgHAFgBAOQABAOAGAFQAIAIALAAQALAAAHgHQAIgHABgNQAAgLgIgIQgJgHgKAAQgLAAgHAHg");
	this.shape_12.setTransform(-644.4508,-122.1452);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQBXIAAiuIAhAAIAACug");
	this.shape_13.setTransform(-660.125,-125.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEA5QgXABgRgRQgQgTAAgVQABgbAQgQQAOgOAXAAQAPgDASASIAAgMIAiAAIAABqIgiAAIAAgNQgPARgMAAIgEAAgAgQgTQgHAFgBAOQABAOAGAFQAIAIALAAQALAAAHgHQAIgHABgNQAAgLgIgIQgJgHgKAAQgLAAgHAHg");
	this.shape_14.setTransform(-670.7508,-122.1452);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgmA3IAAhqIAiAAIAAARQAFgKAIgFQAIgFALAAQAFAAAGACIgCAgQgHgDgJgBQgLABgGAHQgJANABAOIAAAsg");
	this.shape_15.setTransform(-681.25,-122.2773);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguAoQgQgSAAgWQAAgVAQgSQAPgQAfgBQAfABAQAQQAQASAAAVQAAAWgQASQgPAQggABQgfgBgPgQgAgTgTQgHAIgBALQACAPAGAFQAHAIAMAAQALAAAJgIQAHgHAAgNQAAgLgHgIQgJgHgLAAQgLAAgIAHg");
	this.shape_16.setTransform(-693.6,-122.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAA5QgWACgWgRIAOgYQAHAFAFADQAIAEAHAAQAEAAAFgDQAEgDAAgEQABgDgFgDIgJgEIgJgCQgKgDgHgGQgIgIAAgMQABgQAJgIQARgNAPACQAXABANAIIgOAWQgJgGgKAAQgGAAgDADQgCACAAADQAAADADABIAKAEIAJADQAJACAJAHQAIAIAAAMQgCAVgKAHQgOAMgQAAIgDAAg");
	this.shape_17.setTransform(-610.25,-53.8455);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpAqQgPgOgBgbQAAgXARgSQAVgSATACQAUgCAWASQARAWgCAVIAAADIhPAAQAAAKAHAJQAJAHAIgBQAIAAAFgDQACAAAGgJIAhAEQgKAWgLAFQgQAIgSgBIgEAAQgVAAgRgPgAgPgZQgEAFgCAHIAuAAQAAgEgHgJQgFgFgLgBQgMABgFAGg");
	this.shape_18.setTransform(-621.9895,-53.8544);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQBXIAAiuIAhAAIAACug");
	this.shape_19.setTransform(-631.775,-57.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQA5QgaAAgPgQQgPgLgCgdQACgbAQgPQASgQAWABQAOAAANAGIAAAgQgNgKgKACQgQACgDAFQgHAHAAAMQAAANAGAHQAJAIAMAAQAJABANgJIAAAfQgMAGgNAAIgCAAg");
	this.shape_20.setTransform(-640.175,-53.8512);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEA5QgXABgRgRQgQgTAAgVQABgbAQgQQAOgOAXAAQAPgDASASIAAgMIAiAAIAABqIgiAAIAAgNQgPARgMAAIgEAAgAgQgTQgHAFgBAOQABAOAGAFQAIAIALAAQALAAAHgHQAIgHABgNQAAgLgIgIQgJgHgKAAQgLAAgHAHg");
	this.shape_21.setTransform(-652.7008,-53.8452);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVBHIAAhOIgMAAIAAgcIAMAAIAAgjIAiAAIAAAjIAVAAIAAAcIgVAAIAABOg");
	this.shape_22.setTransform(-663.15,-55.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAUA3IAAg3QABgLgHgJQgEgEgJgBQgKABgDAFQgIAJABAKIAAA3IgjAAIAAhqIAjAAIAAANQARgSAPACQAQgBAPAMQANARgDAOIAABDg");
	this.shape_23.setTransform(-673.5798,-54.0152);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgpAqQgPgOgBgbQAAgXARgSQAVgSATACQAUgCAWASQARAWgCAVIAAADIhPAAQAAAKAHAJQAJAHAIgBQAIAAAFgDQACAAAGgJIAhAEQgKAWgLAFQgQAIgSgBIgEAAQgVAAgRgPgAgPgZQgEAFgCAHIAuAAQAAgEgHgJQgFgFgLgBQgMABgFAGg");
	this.shape_24.setTransform(-686.9395,-53.8544);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVBHIAAhOIgMAAIAAgcIAMAAIAAgjIAiAAIAAAjIAVAAIAAAcIgVAAIAABOg");
	this.shape_25.setTransform(-697.05,-55.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAQA5QgaAAgPgQQgPgLgCgdQACgbAQgPQASgQAWABQAOAAANAGIAAAgQgNgKgKACQgQACgDAFQgHAHAAAMQAAANAGAHQAJAIAMAAQAJABANgJIAAAfQgMAGgNAAIgCAAg");
	this.shape_26.setTransform(-557.375,-190.4512);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAAA3QgWACgUgQQgOgOACgSIAAg/IAiAAIAAA6QgBAIAHAJQAEAEAKABQAKAAAEgFQAHgIgBgJIAAg6IAjAAIAAA9QACATgOAPQgTAOgTAAIgFAAg");
	this.shape_27.setTransform(-569.295,-190.2639);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AguAoQgQgSAAgWQAAgVAQgSQAPgQAfgBQAfABAQAQQAQASAAAVQAAAWgQASQgPAQggABQgfgBgPgQgAgTgTQgHAIgBALQACAPAGAFQAHAIAMAAQALAAAJgIQAHgHAAgNQAAgLgHgIQgJgHgLAAQgLAAgIAHg");
	this.shape_28.setTransform(-583.2,-190.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag8BTIAAihIAiAAIAAANQATgUAOADQAcADAKAMQAPAPABAbQAAAbgRAPQgPAPgWgBQgcgEgFgLIAABDgAgUgsQgIAJAAALQABAKAHAJQAIAGALABQAKAAAIgHQAIgJAAgLQAAgMgIgIQgHgHgLAAQgOABgFAHg");
	this.shape_29.setTransform(-597.25,-187.895);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAUBXIAAg3QABgMgHgJQgFgFgIAAQgKACgDADQgJANACAKIAAA1IgjAAIAAiuIAjAAIAABRQAGgIAHgDQAJgFALAAQAOgBAQAMQANAQgDAPIAABDg");
	this.shape_30.setTransform(-617.0798,-193.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAQA5QgaAAgPgQQgPgLgCgdQACgbAQgPQASgQAWABQAOAAANAGIAAAgQgNgKgKACQgQACgDAFQgHAHAAAMQAAANAGAHQAJAIAMAAQAJABANgJIAAAfQgMAGgNAAIgCAAg");
	this.shape_31.setTransform(-629.225,-190.4512);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgEA5QgXABgRgRQgQgTAAgVQABgbAQgQQAOgOAXAAQAPgDASASIAAgMIAiAAIAABqIgiAAIAAgNQgPARgMAAIgEAAgAgQgTQgHAFgBAOQABAOAGAFQAIAIALAAQALAAAHgHQAIgHABgNQAAgLgIgIQgJgHgKAAQgLAAgHAHg");
	this.shape_32.setTransform(-641.7508,-190.4452);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AA1A3IAAg2QABgKgGgKQgEgGgIAAQgJAAgFAHQgGAJABALIAAA1IghAAIAAg3QABgMgHgJQgGgEgFAAQgHAAgFAEQgJANACAIIAAA3IgjAAIAAhqIAjAAIAAAMQAPgRAPACQAIgBAMAGQAIAFAEAKQAEgHAKgHQAKgGAMAAQAUABAKAJQAOASgDAOIAABDg");
	this.shape_33.setTransform(-658.7805,-190.5906);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AguAoQgQgSAAgWQAAgVAQgSQAPgQAfgBQAfABAQAQQAQASAAAVQAAAWgQASQgPAQggABQgfgBgPgQgAgTgTQgHAIgBALQACAPAGAFQAHAIAMAAQALAAAJgIQAHgHAAgNQAAgLgHgIQgJgHgLAAQgLAAgIAHg");
	this.shape_34.setTransform(-676,-190.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgVBHIAAhOIgMAAIAAgcIAMAAIAAgjIAiAAIAAAjIAVAAIAAAcIgVAAIAABOg");
	this.shape_35.setTransform(-686.65,-192.175);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAAA5QgWACgWgRIAOgYQAHAFAFADQAIAEAHAAQAEAAAFgDQAEgDAAgEQABgDgFgDIgJgEIgJgCQgKgDgHgGQgIgIAAgMQABgQAJgIQARgNAPACQAXABANAIIgOAWQgJgGgKAAQgGAAgDADQgCACAAADQAAADADABIAKAEIAJADQAJACAJAHQAIAIAAAMQgCAVgKAHQgOAMgQAAIgDAAg");
	this.shape_36.setTransform(-695.5,-190.4455);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},21).to({state:[]},1).wait(20));

	// button
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AArBeIiHiIQgVgZAVgZQAYgVAZAVICICHQAVAZgVAaQgLAKgOgBQgOABgLgKg");
	this.shape_37.setTransform(61.8625,61.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgcAdQgHgIAHgIIApgpQAIgHAIAHQAHAIgHAIIgpApQgDAEgFgBQgFABgDgEg");
	this.shape_38.setTransform(51,51.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgxBCQgngmgBg5QAAgoAVghQAEgFAFADQAFAEgDAFQgSAegBAkQACAzAiAjQAjAiAzACQASAAASgGQAGgBACAGQABAGgFACQgUAGgUAAQg5gBgmgng");
	this.shape_39.setTransform(31.3327,38.8804);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AiFCGQg2g1gChRQAChPA2g2QA2g2BPgCQBRACA1A2QA2A2ACBPQgCBRg2A1Qg1A2hRACQhPgCg2g2gAh1h1QgvAvgBBGQABBHAvAvQAvAvBGACQBHgCAvgvQAvgvAChHQgChGgvgvQgvgvhHgBQhGABgvAvg");
	this.shape_40.setTransform(35.925,35.875);

	this.instance = new lib.Symbol70("synched",0);
	this.instance.setTransform(18.1,18.05);
	this.instance.alpha = 0.1914;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#01395B").s().p("Ak+FAQiAiAgFjAQAFi/CAh/QB/iAC/gFQDAAFCACAQB/B/AEC/QgEDAh/CAQiAB/jAAEQi/gEh/h/g");
	this.shape_41.setTransform(45.15,45.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.instance},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]}).to({state:[{t:this.shape_41},{t:this.instance},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},21).to({state:[{t:this.shape_41},{t:this.instance},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},20).wait(1));

	// info_box
	this.instance_1 = new lib.Tween110("synched",0);
	this.instance_1.setTransform(47.25,44.95,0.0666,0.0666);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:-276.85,y:-30.9},21).to({scaleX:0.0666,scaleY:0.0666,x:48.45,y:49.95},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-807.1,-318.6,897.4,542.1);


(lib.jellyfish = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol66("synched",0);
	this.instance.setTransform(78.05,120.15);
	this.instance.alpha = 0.4492;

	this.instance_1 = new lib.Symbol65("synched",0);
	this.instance_1.setTransform(84.5,109.45);
	this.instance_1.alpha = 0.4492;

	this.instance_2 = new lib.Symbol64("synched",0);
	this.instance_2.setTransform(72.75,108.95);
	this.instance_2.alpha = 0.4492;

	this.instance_3 = new lib.Symbol63("synched",0);
	this.instance_3.setTransform(88.3,120.15);
	this.instance_3.alpha = 0.4492;

	this.instance_4 = new lib.Symbol62("synched",0);
	this.instance_4.setTransform(94.15,114.25);
	this.instance_4.alpha = 0.4492;

	this.instance_5 = new lib.Symbol61("synched",0);
	this.instance_5.setTransform(213.95,120.15);
	this.instance_5.alpha = 0.4492;

	this.instance_6 = new lib.Symbol60("synched",0);
	this.instance_6.setTransform(207.45,109.45);
	this.instance_6.alpha = 0.4492;

	this.instance_7 = new lib.Symbol59("synched",0);
	this.instance_7.setTransform(219.2,108.95);
	this.instance_7.alpha = 0.4492;

	this.instance_8 = new lib.Symbol58("synched",0);
	this.instance_8.setTransform(203.65,120.15);
	this.instance_8.alpha = 0.4492;

	this.instance_9 = new lib.Symbol57("synched",0);
	this.instance_9.setTransform(197.8,114.25);
	this.instance_9.alpha = 0.4492;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFA1F4").ss(1,1,1).p("ACggSQgxBJhigBQhngOhFhLQAvgPBUgDQBTgCBpAlg");
	this.shape.setTransform(148.95,143.6678);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFA1F4").s().p("AANA2QhngOhFhLQAvgPBVgDQBSgCBpAlQgwBIhgAAIgDAAg");
	this.shape_1.setTransform(148.95,143.6678);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#340066").ss(1,1,1).p("AjZiBQA/AHB1ACQB0ACCKgSQAeAAgBAeQgKBEgxBXQgwBXhtABQhogOhGhMQhFhMgeg+QgKgiAkgEg");
	this.shape_2.setTransform(147.2686,135.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#340066").s().p("AiQAvQhFhMgeg+QgKgiAkgEQA/AHB1ACQB0ACCKgSQAeAAgBAeQgKBEgxBXQgwBXhtABQhogOhGhMg");
	this.shape_3.setTransform(147.2686,135.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#340066").ss(1,1,1).p("ABVgpQgcAHglAUQgkATgdAmQgPARgTgNQgRgRAQgTQAWgUAqgWQApgWA7ABQAJAEgIAHg");
	this.shape_4.setTransform(98.4686,63.1146);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#340066").s().p("AhPAvQgRgRAQgTQAWgUAqgWQApgWA7ABQAJAEgIAHQgcAHglAUQgkATgdAmQgIAKgKAAQgHAAgJgGg");
	this.shape_5.setTransform(98.4686,63.1146);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#340066").ss(1,1,1).p("AhUgpQAbAHAmAUQAkATAdAmQAPARATgNQARgRgQgTQgWgUgqgWQgpgWg7ABQgJAEAIAHg");
	this.shape_6.setTransform(195.4189,63.1146);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#340066").s().p("AAuArQgdgmgkgTQgmgUgbgHQgIgHAJgEQA7gBApAWQAqAWAWAUQAQATgRARQgIAGgIAAQgKAAgIgKg");
	this.shape_7.setTransform(195.4189,63.1146);

	this.instance_10 = new lib.Symbol56("synched",0);
	this.instance_10.setTransform(33.05,22.9);
	this.instance_10.alpha = 0.5586;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CAA2F9").s().p("AIWL5QgygOgsgWQhAgig9glQg+gmhEgYQiOgpiNAsQhCAUg+AeQhaAphdAiQhLAbhNAQQiVAfiXgoQiXgohYiDIgMgWQhDiWAQilQAHitBAifIAHgQQBhjfC4igQDBilDzhJQC1g3C8AAQFhABEvC2QEaCuCMEsQBNCtAIC+IABAgQAMCphJCSQhSB7iQAlQhgAehgAAQhMAAhMgSg");
	this.shape_8.setTransform(146.8791,108.6986);

	this.instance_11 = new lib.Symbol55("synched",0);
	this.instance_11.alpha = 0.4805;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#522C99").s().p("AoZNaQAzjWBTjMIArhlIAwhjQAMgZANgYIA1hgQANgYAPgYIA6hcIAPgXIAvhEQA/haBFhWIBDhWQAigqAfgtIA+hZIA5hcQBxi7BGjMIAJgaIAWhNQAMg0AJg1IAFgbIADgaIADgaIACgbIABgaIABgbQAAgagDgYIAAgCQgBgbAbgGQAcgBAGAbIAAABQADAfgBAcIgBAcIgCAcIgDAcIgDAcIgEAcIgFAcQgLA3gOA2IgYBQIgJAaQhMDSh2C7Qh3C7iPCoQhFBUg/BYIgwBCIgPAXIg8BaIgcAvIg2BeIgaAwIgxBhIgsBkQhWDJg3DUQhQFAgBFIQgJlIBMlEg");
	this.shape_9.setTransform(166.4706,309.7621);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#522C99").s().p("EAIAAmaQAAgsgFgrQgFgrgLgqIgKgqIgNgqQg6ikhiiRQgwhIg2hEQgcgigcggQgdgggbgkQgzhIgZhVQgXhWAChYQAJiyBIiiQAjhQAthMQAWglAZgkQAXgkAVgmQBViXA8ijQA8iiAciqQAdirgPirQgPishEifQhFidhziBIg6g+Ig/g7QhBg8g7hAQj2j+iWlDQhJiigiivQgQhXgEhaQgCgsACgtIADgtIADgXIAFgWIABgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIALgOQAXgOATAUQAJAPgGAOIAAABIgBABIABgBIgDAOIgCAUIgEAqQgDAqACAqQADBVAPBUQAeCoBFCeQCOE7DuD9QA7A/A+A7IBAA9IA8BBQB1CGBFClQBFCkAOCyQANCwgfCtQgfCtg/CkQg+CkhXCYQgWAmgYAlQgZAjgXAlQgtBKgjBPQhJCfgKCtQgEBXAXBTQAXBUAyBHQAZAiAdAhQAcAhAbAiQA2BFAvBJQBhCSA4CmIANAqIAKAqQAKArAFArQAFArgBAsQgBAVgDAWQADgWAAgVg");
	this.shape_10.setTransform(105.5921,417.7371);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#522C99").s().p("EAAXAnhQAbghAZgjQAyhHAlhNQBMidANitQAGhWgMhVQgMhVgbhSQgHgUgIgUIgPgoQgRgogOgpQgOgpgNgpQgLgqgKgqQglirANiuQAQiuA3ilQA2ilBAigQBAigA0iiQAyilgRipQgViphNiaQhMiYhkiMQhjiMhniKIhniLIgyhGIgZgkIgXglQgvhLgjhRQgjhRgWhVQguirAEiyQAChYANhXQAHgsAKgrIALgrIAOgrQAMgZAaAHQAZALgHAbIAAABQgHASgFAVIgLAoQgKApgHApQgOBTgDBVQgFCpApClQAVBRAhBOQAgBOAsBJIAXAkIAXAjIAxBGIBlCMQBmCKBiCOQBkCPBMCdQBNCfAVCwQAQCyg3CpQg2CjhBCgQhCCfg4CjQg3CjgSCqQgPCsAjCpQAJAqALApQALApAOApQAOAoAQAoIAPApQAIAUAGAVQAcBSAKBXQALBWgHBWQgOCvhPCcQgmBOgzBGQgZAjgcAhIgcAgIAcghg");
	this.shape_11.setTransform(185.0691,413.2734);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#522C99").s().p("AgwTWQAChfAXhcQA0i2BKitQAihXAahaQAahbAMhcIAFguIABguQgBgugIguQgShagshSQhdifh0iWQgbgngZgpQgagpgUgrQgrhYgNhjQgEgxABgwIAEhUIAHg8IAIgvIAFgYIAFgXIAMgvQAahdAohXQAUgsAYgrIAZgpIANgVIAOgUQATgVAWAOQAVASgOAYIgBAAIAAABIgNASIgMATIgYAmQgXAogUApQgoBTgbBZIgMAsIgFAWIgFAXQgFAWgEAXIgNB+IgBA5QAAAXACAXQAFAsAMAsQAGAWAIAVIAIAVIAJAVQATAqAXAoQAYAoAaAnQBvCVBeCoQAsBVARBgQAIAvAAAxQgBAYgCAYQgCAYgDAXQgPBegcBbQgcBagkBYQhOCsg3CzQgZBbgDBeQgCBeAUBdQgWhcAAhfg");
	this.shape_12.setTransform(244.9972,308.5289);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A069D6").s().p("EgK4AgwQhigYAXiMQAbhhBHhTQBHhSA3gfQAjgUAsgMICyg1QDWg+BQjNQAghhAXhjQAoiXBJiLQAkg6ALhCQACg8gbg3QgehAglg8Qglg8gbhCQgahHAEhIQADhIANhKQAdigAzhzQAzhzAggwQBKh3AZgtQAZgtAAhAQABhIgSgvQgSgvgWhgQgPhSAShSQAShRAkhoQAYhHAUgtQBIicAYgwQAthqgIhfQgJhfgMhGQgNhFAhgdQApgaBAAeQA/AeAsA7QAsBEAABPQgBBPgPBMQgNBMgTArQgTAsgXAtQgWAtgZBSQgrCbgEB+QgDB+AJBFQAMBfAMAhQALAhgDA6QgEBIglBJQgmBJhaCmQhrDOgaBMQgaBMAEAZQgBBFATBKQATBKAkA7QApA7AsA0QAsAzALBMQAEBigwBYQgvBcg5BWQg5BXgtBdQhACig+CmQg+ClifBfQhjAyg9ALQg8ALhyAwQh6BBg4BRQg0BLgvAAIgHAAg");
	this.shape_13.setTransform(84.7067,358.289);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A069D6").s().p("EgExAgtQgmgWgVglQgZgxATgyIAshvQAYg+gJhSQgOhIggglQghglgbhhQgKgfgHhJQgIhIAZhaQAchUAuguIBchaQAtgtAZhUQAThSgIhBQgIhBgJgYQgMgrgbgsQgbgshGh7Qg9hvgRgoQgQgpAAgPQgHhBAQg3QAPg1AXgzQAthiAlgsQAmgrAWhRQAJgnADiEQAChpgDguQgCgtADgpQAHhPAhg3QAgg3A0hrQAeg9Aph0QAoh0AMiWQADiRgUhHQgShHAdhVQArhnBWhDQBWhDBLASQA5AVAcBMQAcBMAHBeQAGBegIBMQgLBlgjBXQgiBXg4BuQhCCBg0BNQg0BNghA/QgiA/gLBXQgDA2gbCNQgdB9gdBMQg1CcgaBeQgaBdAEBAQAFBBAUAkIAyBYQAdA0AgBsQAbBbAOBRQAPBSgPBZQgIArgPAfQgOAegbA1QgdA1gwBtQguBngXA8QgYA9gCAkQgDBKAVAuIAtBjQAYA1AIBfQAEBFgLA/QgLBAgYBYQgaBmgVAfQgUAggPAAQgMADgLAAQgcAAgagPg");
	this.shape_14.setTransform(195.4407,331.0172);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A069D6").s().p("AiaXTQgqg+gFgSQgihZALhUQALhTASg6QAZhOAVgmQAUgmAFhAQADhKgNg0QgNgzgGgMQghhKgegeQgegdgIgzQgEgnAPgoQAQgpAgg/QAjhCAWgZQAWgaAWgxQAMgXAPg6QAQg7gIhNQgPhSgfgmQgfglgFg+QABhBAlgoQAlgnAlhXQAghjgIhcQgJhdgVhSQgeh2gdgxQgdgxgHhWQgFgmANhfQANhfBQhPQBJg7BQgLQBQgLAUAcQAHANgRAXQgQAYgVA0QgCACgMAyQgMAzACBKQAGBDAXAjQAXAkAZBRQANAlAKBQQAKBRgbBiQgSA1gVAZQgVAZgdA+QgnBkgGBOQgFBOADAcQASCUAuBLQAvBLgiBJQgRAdgaAaQgbAagwBDQgtBAgVAoQgXApABAnQABAsAeAhQAeAhAyBbQAfA3AVA6QAWA6gJBBQgFAfgLAXQgLAXgUA1QgQArgSBDQgSBEgBBSQAEBlARA2QARA2gaAuQglA2g/AFQhHgHgqg9g");
	this.shape_15.setTransform(61.1194,322.7179);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#522C99").s().p("ACkYpQAyhqAohvQAVg3AMg5IAFgdIACgOIACgPIADgdIAAgdQAAh2guhtQgvhrhBhiQhBhig/hlQg8hlgphxQgnhygCh6IAAgeIALh2IAGgdQAGgeAHgcQAahzAThzQApjpgcjmQgQhzgvhoQgYg0ghguIgigvIgSgZIgJgNIgIgNQhChrgMh+QgEg/ALg+QAGgfAKgeIALgdQAFgPAJgQQAPgWAZAKQAXAQgLAZIAAACIgMAXIgJAZQgJAagGAbQgKA2ADA4QAIBwA6BiIAHAMIAIAMIAQAXIAjAxQAiAzAZA4QAxBwAOB5QAZDwgtDrQgVB1gdByIgNA5IgGAdIgNBxIAAAdQAAB0AkBwQAlBuA7BlQA8BlA/BjQBBBkAuBuQAtBwgCB4IgBAeIgDAdIgCAPQAAAIgCAHIgGAdQgOA6gUA3QgrBug0BqQg0Bqg7BmQA5hnAzhrg");
	this.shape_16.setTransform(198.1491,342.408);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#522C99").s().p("AEsYOIgTg/IgWg+Igyh6Qg2h4hDhxQiLjfh9jqIgqhaIgNgeIglhdIgGgPIgkhuQgGgQgEgQQgKgggIggIgPhBQgbiCAAiGIABgiIACghQADgiAFghQAJhCAShBQAmiBA8h4IB1jrQAdg7AXg9QAXg8APg/IAHgfIAGggIAKhAIAHhAIAEhAQADiCgah+QgOg/gWg8QgLgdgNgdIgOgcIgPgaIgBgBQgNgYAWgRQAYgNARAVIABABQAKAQAHAPIAPAfQAPAfALAhQAVBAAOBDQAaCFgGCHIgEBEIgIBCIgMBCIgHAhIgIAhQgQBCgYA+QgaA/gdA7Ih5DrQg9B0gmB8QgSA+gKBAQgFAggDAhIgCAgQgCAQAAAQQgCCDAZB/IANBAIARA/QAEAQAFAQIAjBtIAFAPIAkBcQAFAQAHAOIApBaQB4DpCIDiQBCBzA1B6IAwB7QALAfAKAfIATBAQAzC/AWDFQgbjEg2i+g");
	this.shape_17.setTransform(117.8871,358.5176);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#522C99").s().p("ADVeEQgDiPgaiMQg3kYhkkMQhhkLh2kEIg7iCQgdhCgVhFQgsiKgGiSQgFiQAfiOQAgiNA5iFQB6kGCbjvQBNh4A/h+QA8h+AaiKQAbiJgNiLQgIhEgShDQgJghgNgfIgNggIgIgPIgHgNIAAgBQgMgYAWgRQAZgMAQAWIAAABIAKARIAIASQAIARAGARQANAjAKAkQATBHAHBKQAMCUgeCQQgPBHgXBFQgMAjgOAiQgOAhgRAhQhCCAhPB4QieDth6D/Qg6CBghCJQggCKADCMQAECOApCIQAUBDAcBBIA5CDQBzEGBeENQBgEOAzEZQAZCNABCQQABBsgYBoQAWhpgDhrg");
	this.shape_18.setTransform(56.2152,353.4132);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_11},{t:this.shape_8},{t:this.instance_10},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jellyfish, new cjs.Rectangle(0,0,293.9,669.5), null);


(lib.info1swf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AgJA6QABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJgAgGAnIAAhqIANAAIAABqg");
	this.shape.setTransform(839.25,435.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_1.setTransform(834.2,438.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_2.setTransform(825.725,438.3274);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_3.setTransform(816.675,438.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_4.setTransform(807.625,438.3274);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_5.setTransform(801.05,438.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_6.setTransform(792.15,438.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_7.setTransform(784.85,435.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_8.setTransform(772.625,438.3274);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_9.setTransform(763.575,438.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_10.setTransform(757.275,436.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_11.setTransform(753.125,435.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_12.setTransform(741.15,438.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_13.setTransform(734.025,436.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_14.setTransform(722.125,438.3274);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_15.setTransform(715.275,435.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_16.setTransform(708.15,435.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_17.setTransform(697.1,438.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_18.setTransform(682.675,438.3274);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_19.setTransform(672.85,435.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_20.setTransform(657.45,438.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_21.setTransform(650.325,436.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_22.setTransform(637.75,435.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_23.setTransform(627.925,438.3274);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_24.setTransform(618.875,438.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_25.setTransform(609.825,438.3274);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_26.setTransform(602.925,436.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_27.setTransform(598.775,435.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_28.setTransform(591.875,438.3274);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_29.setTransform(582.05,435.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_30.setTransform(568.4773,438.3433);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_31.setTransform(562.775,436.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_32.setTransform(551.3521,435.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_33.setTransform(543.1773,438.3433);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#01395B").s().p("AAWBKIAAhSIAOAAIAABSgAgbBKIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAAAEIgOAAIAAgEQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFg");
	this.shape_34.setTransform(534.6321,434.9875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_35.setTransform(525.8,440.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_36.setTransform(519.125,435.15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_37.setTransform(514.975,435.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_38.setTransform(508.075,438.3274);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#01395B").s().p("AgGBVIAAiAIANAAIAACAgAgJhKQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_39.setTransform(501.175,438.475);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_40.setTransform(1069.7,410.05);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_41.setTransform(1061.75,413.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_42.setTransform(1045.675,413.3274);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_43.setTransform(1035.85,415.4831);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_44.setTransform(1025.75,415.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_45.setTransform(1018.625,411.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_46.setTransform(1005.425,413.3274);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_47.setTransform(995.9021,413.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#01395B").s().p("AhFAAQAHhAA+gEQBAAEAFBAQgFBAhAAFQg/gFgGhAgAg1AAQAFAyAwAFQAygFAEgyQgEgygygEQgwAEgFAyg");
	this.shape_48.setTransform(983.25,410.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_49.setTransform(967,416.65);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_50.setTransform(961.2773,413.3433);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_51.setTransform(955.65,413.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_52.setTransform(946.45,413.325);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_53.setTransform(936.675,413.3274);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_54.setTransform(927.25,415.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_55.setTransform(914.55,410.05);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_56.setTransform(906.6,413.325);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_57.setTransform(890.525,413.3274);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_58.setTransform(883.625,410.15);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_59.setTransform(876.55,415.4831);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_60.setTransform(866.35,413.4261);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_61.setTransform(856.45,413.325);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_62.setTransform(846.85,413.3263);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_63.setTransform(830.9,413.325);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_64.setTransform(814.65,413.325);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_65.setTransform(807.525,411.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_66.setTransform(794.1,415.4831);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_67.setTransform(783.9,413.4261);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_68.setTransform(768,413.325);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_69.setTransform(760.875,411.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_70.setTransform(749.0273,413.3433);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_71.setTransform(741,415.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_72.setTransform(730.9,413.325);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_73.setTransform(720.35,410.25);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_74.setTransform(707.3,410.05);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_75.setTransform(699.3,413.325);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_76.setTransform(683.225,413.3274);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_77.setTransform(676.325,410.15);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_78.setTransform(669.25,415.4831);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_79.setTransform(659.1,413.4261);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_80.setTransform(649.2,413.325);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_81.setTransform(639.6,413.3263);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_82.setTransform(623.65,413.325);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_83.setTransform(607.4,413.325);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_84.setTransform(600.275,411.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_85.setTransform(586.8,415.4831);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_86.setTransform(576.65,413.4261);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_87.setTransform(559.1588,413.1769);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_88.setTransform(547.05,413.325);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_89.setTransform(540,413.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_90.setTransform(534.3,410.05);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_91.setTransform(520.725,413.3274);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_92.setTransform(511.675,413.575);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_93.setTransform(505.325,411.175);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_94.setTransform(501.175,410.15);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_95.setTransform(1067.1021,388.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_96.setTransform(1056.85,388.325);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_97.setTransform(1047.5,388.3263);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_98.setTransform(1033.95,390.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_99.setTransform(1024.525,388.3274);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_100.setTransform(1015.2021,385.15);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_101.setTransform(1008.625,386.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_102.setTransform(998.775,392.95);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_103.setTransform(992.4021,385.15);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_104.setTransform(984.2273,388.3433);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#01395B").s().p("AAWBKIAAhSIAOAAIAABSgAgbBKIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAAAEIgOAAIAAgEQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFg");
	this.shape_105.setTransform(975.6821,384.9875);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_106.setTransform(966.85,390.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_107.setTransform(960.175,385.15);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_108.setTransform(956.025,385.15);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_109.setTransform(949.125,388.3274);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#01395B").s().p("AgGBVIAAiAIANAAIAACAgAgJhKQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_110.setTransform(942.225,388.475);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_111.setTransform(933.55,385.05);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_112.setTransform(925.55,388.325);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_113.setTransform(910.925,388.3274);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_114.setTransform(901.1,390.4831);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_115.setTransform(891,390.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_116.setTransform(883.925,386.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_117.setTransform(872.125,388.3274);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_118.setTransform(862.8521,385.15);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_119.setTransform(856.225,386.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_120.setTransform(844.6021,388.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_121.setTransform(834.65,388.325);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_122.setTransform(819.324,390.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_123.setTransform(809.6521,388.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_124.setTransform(802.825,386.175);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_125.setTransform(795.45,385.25);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_126.setTransform(785.7521,388.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_127.setTransform(776.225,388.3274);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_128.setTransform(766.4,390.4831);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_129.setTransform(756.075,388.3274);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#01395B").s().p("AgxBDIAAiFIAcAAQAVgDAbATQAVAPABAjQgDAogUALQgQAQgfAAgAghA1IAMAAQASACATgOQARgNABgcQgCgxg1gDIgMAAg");
	this.shape_130.setTransform(745.3,385.7541);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_131.setTransform(731.8,391.65);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_132.setTransform(724.8021,385.15);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_133.setTransform(716.6773,388.3433);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#01395B").s().p("AAWBKIAAhSIAOAAIAABSgAgbBKIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAAAEIgOAAIAAgEQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFg");
	this.shape_134.setTransform(708.0821,384.9875);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_135.setTransform(699.3,390.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_136.setTransform(692.575,385.15);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_137.setTransform(688.425,385.15);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_138.setTransform(681.525,388.3274);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#01395B").s().p("AgGBVIAAiAIANAAIAACAgAgJhKQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_139.setTransform(674.675,388.475);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_140.setTransform(662.5,388.325);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_141.setTransform(649.4773,388.3433);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_142.setTransform(640.35,388.325);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_143.setTransform(628.925,386.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_144.setTransform(624.425,386.175);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_145.setTransform(612.975,388.3274);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#01395B").s().p("AgsApIA8hFIgwAAIAAgNIBNAAIg8BGIA5AAIAAAMg");
	this.shape_146.setTransform(603.8,388.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_147.setTransform(597.075,386.175);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_148.setTransform(590.3021,388.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_149.setTransform(580.124,390.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_150.setTransform(569.85,388.325);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_151.setTransform(560.25,388.3263);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_152.setTransform(551.025,388.3274);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_153.setTransform(544.45,388.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_154.setTransform(531.5521,388.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_155.setTransform(522.025,388.3274);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_156.setTransform(512.975,388.575);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_157.setTransform(503.925,388.3274);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_158.setTransform(1069.875,361.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_159.setTransform(1062.25,363.325);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_160.setTransform(1052.3021,363.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_161.setTransform(1039.425,361.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_162.setTransform(1032.3521,360.15);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_163.setTransform(1022.124,365.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_164.setTransform(1015.075,361.175);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_165.setTransform(1006.1588,363.1769);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_166.setTransform(988.35,363.4261);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_167.setTransform(978.45,363.325);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_168.setTransform(968.6,365.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_169.setTransform(954.825,367.95);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_170.setTransform(949.7273,363.3433);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_171.setTransform(941.325,363.3274);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_172.setTransform(930.974,365.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_173.setTransform(920.45,363.325);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_174.setTransform(913.575,361.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_175.setTransform(907.7273,363.3433);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_176.setTransform(895.975,361.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_177.setTransform(890.1273,363.3433);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_178.setTransform(881.3,363.325);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_179.setTransform(869.2088,363.1769);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_180.setTransform(854.225,361.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#01395B").s().p("AAtBGIgQgmIg4AAIgQAmIgRAAIA9iLIA7CLgAgWASIAtAAIgWg0g");
	this.shape_181.setTransform(845.6,360.45);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_182.setTransform(830.8,366.65);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_183.setTransform(825.0773,363.3433);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_184.setTransform(816.675,363.3274);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_185.setTransform(809.775,360.15);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_186.setTransform(803.35,363.3263);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_187.setTransform(794.35,365.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_188.setTransform(785.4,363.3263);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_189.setTransform(769.925,363.3274);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_190.setTransform(763.05,360.05);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_191.setTransform(758.225,361.175);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_192.setTransform(754.075,360.15);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_193.setTransform(738.85,363.25);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_194.setTransform(727.275,363.3274);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_195.setTransform(720.4,360.05);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgYAAgCAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_196.setTransform(705.85,363.325);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_197.setTransform(689.775,363.3274);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_198.setTransform(683.075,361.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_199.setTransform(678.575,361.175);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_200.setTransform(671.85,363.4261);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#01395B").s().p("AAcBCIAAg6QgHAMgVACQgkAAgFgrQAFgrAkgBQAWADAGAMIAAgNIANAAIAACBgAABg0QgXAAgDAfQAAAcAaACQAbgDAAgbQgEgfgWAAIgBAAg");
	this.shape_201.setTransform(661.65,365.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_202.setTransform(645.7021,360.15);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_203.setTransform(635.474,365.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_204.setTransform(625.8,363.4261);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_205.setTransform(615.9,363.325);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_206.setTransform(608.9,363.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_207.setTransform(600.5521,360.15);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_208.setTransform(593.925,361.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_209.setTransform(580.05,363.325);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_210.setTransform(569.274,365.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_211.setTransform(553.3021,360.15);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_212.setTransform(545.1773,363.3433);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#01395B").s().p("AAWBKIAAhSIAOAAIAABSgAgbBKIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAAAEIgOAAIAAgEQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFg");
	this.shape_213.setTransform(536.5821,359.9875);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_214.setTransform(527.75,365.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_215.setTransform(521.075,360.15);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_216.setTransform(516.925,360.15);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_217.setTransform(510.025,363.3274);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#01395B").s().p("AgaA6IAIgMQAIAIAIAAQAFAAAEgEQAGgJgBgNIAAhfIAOAAIAABfQACASgKAOQgGAHgOABQgPAAgJgKg");
	this.shape_218.setTransform(500.8667,360.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_219.setTransform(977.05,316.65);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_220.setTransform(971.3273,313.3433);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_221.setTransform(963.0021,313.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_222.setTransform(952.8,313.325);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_223.setTransform(940.9588,313.1769);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_224.setTransform(929.45,313.4261);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_225.setTransform(920.1021,310.15);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_226.setTransform(903.8588,313.1769);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_227.setTransform(894.75,313.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_228.setTransform(885.55,313.325);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_229.setTransform(875.9021,310.15);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_230.setTransform(864.625,311.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_231.setTransform(857,313.325);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_232.setTransform(847.0521,313.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_233.setTransform(832.45,313.325);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_234.setTransform(821.7,310.25);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_235.setTransform(808.5773,313.3433);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_236.setTransform(799.474,315.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_237.setTransform(789.8021,313.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_238.setTransform(782.975,311.175);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_239.setTransform(779.025,311.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_240.setTransform(773.1773,313.3433);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_241.setTransform(760.2521,310.15);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_242.setTransform(752.0773,313.3433);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#01395B").s().p("AAWBKIAAhSIAOAAIAABSgAgbBKIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAAAEIgOAAIAAgEQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFg");
	this.shape_243.setTransform(743.5321,309.9875);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_244.setTransform(734.7,315.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_245.setTransform(728.025,310.15);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_246.setTransform(723.875,310.15);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_247.setTransform(716.975,313.3274);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#01395B").s().p("AgGBVIAAiAIANAAIAACAgAgJhKQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_248.setTransform(710.075,313.475);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_249.setTransform(698.525,313.3274);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_250.setTransform(686.8588,313.1769);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_251.setTransform(674.75,313.325);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#01395B").s().p("AgcA6QgKgLgDgNIAPgEQACALAGAGQAIAIAKAAQAbgDAAgYQAAgJgHgGQgGgFgKgEIgLgFQgIgDgKgIQgJgIAAgOQADghAhgBQAMgBAKAHQAIAFAFAKIgMAHQgDgGgFgEQgDgDgMgBQgUABgBATQAAAIAFAEQAGAGAIACIAMAGQAMAFAIAHQAKAKAAAOQgDAngnACIgCAAQgNAAgNgLg");
	this.shape_252.setTransform(664.3262,310.7563);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_253.setTransform(652.25,316.65);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_254.setTransform(645.2521,310.15);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_255.setTransform(637.1273,313.3433);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#01395B").s().p("AAWBKIAAhSIAOAAIAABSgAgbBKIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAAAEIgOAAIAAgEQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFg");
	this.shape_256.setTransform(628.5321,309.9875);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_257.setTransform(619.75,315.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_258.setTransform(613.025,310.15);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_259.setTransform(608.875,310.15);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_260.setTransform(601.975,313.3274);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#01395B").s().p("AgGBVIAAiAIANAAIAACAgAgJhKQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_261.setTransform(595.125,313.475);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_262.setTransform(586.3,310.05);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_263.setTransform(578.3,313.325);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_264.setTransform(563.625,313.3274);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_265.setTransform(553.8,315.4831);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_266.setTransform(543.7,315.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_267.setTransform(536.575,311.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_268.setTransform(524,310.25);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_269.setTransform(514.3521,313.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_270.setTransform(504.1,313.325);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_271.setTransform(1066.975,288.3274);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#01395B").s().p("AgsApIA8hFIgwAAIAAgNIBNAAIg8BGIA5AAIAAAMg");
	this.shape_272.setTransform(1057.75,288.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_273.setTransform(1051.075,286.175);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_274.setTransform(1045.5273,288.3433);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_275.setTransform(1032.375,288.3274);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_276.setTransform(1023.1021,285.15);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_277.setTransform(1016.475,286.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_278.setTransform(1004.6521,288.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_279.setTransform(994.7,288.325);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_280.setTransform(981.2773,288.3433);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_281.setTransform(972.15,285.25);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_282.setTransform(962.4521,288.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_283.setTransform(952.975,288.3274);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_284.setTransform(943.15,290.4831);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_285.setTransform(932.825,288.3274);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_286.setTransform(922.45,285.25);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_287.setTransform(907.224,290.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_288.setTransform(897.5021,288.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_289.setTransform(890.725,286.175);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_290.setTransform(886.775,286.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_291.setTransform(880.9273,288.3433);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_292.setTransform(867.775,288.3274);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_293.setTransform(858.4521,285.15);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_294.setTransform(851.875,286.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_295.setTransform(842.65,285.05);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_296.setTransform(834.7,288.325);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_297.setTransform(820.0021,285.15);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_298.setTransform(813.425,286.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_299.setTransform(805.524,290.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_300.setTransform(795.8021,288.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_301.setTransform(786.275,288.3274);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_302.setTransform(779.7,288.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_303.setTransform(774.175,286.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_304.setTransform(768.3273,288.3433);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_305.setTransform(755.175,288.3274);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_306.setTransform(745.8521,285.15);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_307.setTransform(739.275,286.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_308.setTransform(730.225,286.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_309.setTransform(723.2,288.4261);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_310.setTransform(713.5,285.25);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_311.setTransform(700.375,292.95);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_312.setTransform(693.174,290.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_313.setTransform(683.5021,288.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_314.setTransform(676.675,286.175);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_315.setTransform(672.725,286.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_316.setTransform(666.8773,288.3433);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_317.setTransform(653.8521,285.15);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_318.setTransform(645.6773,288.3433);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#01395B").s().p("AAWBKIAAhSIAOAAIAABSgAgbBKIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAAAEIgOAAIAAgEQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFg");
	this.shape_319.setTransform(637.1321,284.9875);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_320.setTransform(628.3,290.6);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_321.setTransform(621.625,285.15);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_322.setTransform(617.475,285.15);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_323.setTransform(610.575,288.3274);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#01395B").s().p("AgGBVIAAiAIANAAIAACAgAgJhKQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_324.setTransform(603.675,288.475);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_325.setTransform(594.775,285.15);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_326.setTransform(590.625,285.15);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#01395B").s().p("AAtBGIgQgmIg4AAIgQAmIgRAAIA9iLIA7CLgAgWASIAtAAIgWg0g");
	this.shape_327.setTransform(582.3,285.45);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_328.setTransform(569.05,291.65);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_329.setTransform(563.3273,288.3433);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_330.setTransform(554.925,288.3274);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_331.setTransform(548.025,285.15);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_332.setTransform(541.6,288.3263);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_333.setTransform(531.65,288.325);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_334.setTransform(524.775,286.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_335.setTransform(517.7021,288.2);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_336.setTransform(508.175,288.3274);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_337.setTransform(501.475,286.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_338.setTransform(1066.274,265.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_339.setTransform(1056.5521,263.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_340.setTransform(1049.775,261.175);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_341.setTransform(1042.174,265.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_342.setTransform(1032.5021,263.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_343.setTransform(1025.675,261.175);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_344.setTransform(1021.725,261.8);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_345.setTransform(1015.8773,263.3433);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_346.setTransform(1003.55,263.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_347.setTransform(997.825,261.175);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_348.setTransform(990.925,263.3274);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_349.setTransform(981.6521,260.15);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_350.setTransform(975.025,261.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_351.setTransform(963.9,263.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_352.setTransform(955,263.325);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_353.setTransform(947.75,260.05);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_354.setTransform(933.8521,263.2);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_355.setTransform(922.3,263.25);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_356.setTransform(910.25,263.325);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_357.setTransform(900.3021,263.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#01395B").s().p("AAQBJIgggmIgEAEIAAAiIgOAAIAAiRIAOAAIAABdIAegeIATAAIgjAiIApAwg");
	this.shape_358.setTransform(892,260.15);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_359.setTransform(875.875,263.3274);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_360.setTransform(869.3,263.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_361.setTransform(860.1,263.325);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_362.setTransform(843.1,260.25);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_363.setTransform(833.4521,263.2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_364.setTransform(823.2,263.325);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_365.setTransform(808.3273,263.3433);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_366.setTransform(799.925,263.3274);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_367.setTransform(793.025,261.175);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_368.setTransform(785.6,260.25);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_369.setTransform(775.35,263.325);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_370.setTransform(765.1,260.25);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_371.setTransform(747.6,260.25);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_372.setTransform(737.825,263.3274);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_373.setTransform(728,265.4831);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_374.setTransform(716.95,263.325);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_375.setTransform(707.3021,260.15);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_376.setTransform(699.1273,263.3433);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#01395B").s().p("AgVAIIAAgPIArAAIAAAPg");
	this.shape_377.setTransform(692.35,263.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_378.setTransform(687.075,260.15);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_379.setTransform(682.875,260.15);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_380.setTransform(676.025,263.3274);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_381.setTransform(666.2,260.25);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_382.setTransform(651.325,267.95);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_383.setTransform(644.825,263.3274);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#01395B").s().p("AAQBJIgggmIgEAEIAAAiIgOAAIAAiRIAOAAIAABdIAegeIATAAIgjAiIApAwg");
	this.shape_384.setTransform(636.65,260.15);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_385.setTransform(629.725,261.175);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_386.setTransform(625.575,260.15);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#01395B").s().p("AgVAIIAAgPIArAAIAAAPg");
	this.shape_387.setTransform(620.25,263.2);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_388.setTransform(611.85,265.6);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_389.setTransform(605.175,260.15);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_390.setTransform(601.025,260.15);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_391.setTransform(594.125,263.3274);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#01395B").s().p("AgGBVIAAiAIANAAIAACAgAgJhKQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_392.setTransform(587.225,263.475);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_393.setTransform(573.875,263.3274);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_394.setTransform(564.825,263.575);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_395.setTransform(555.05,263.325);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_396.setTransform(545.3521,260.15);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_397.setTransform(529.6,265.6);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_398.setTransform(520.175,263.3274);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_399.setTransform(510.9021,260.15);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#01395B").s().p("AgGBDIAAh3IghAAIAAgOIBPAAIAAAOIghAAIAAB3g");
	this.shape_400.setTransform(503.375,260.775);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_401.setTransform(1069.5,241.65);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_402.setTransform(1063.7773,238.3433);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_403.setTransform(1055.375,238.3274);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_404.setTransform(1045.8521,238.2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_405.setTransform(1035.9,238.325);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_406.setTransform(1025.65,235.25);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#01395B").s().p("AAQBJIgggmIgEAEIAAAiIgOAAIAAiRIAOAAIAABdIAegeIATAAIgjAiIApAwg");
	this.shape_407.setTransform(1016.55,235.15);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_408.setTransform(1007.35,238.3263);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_409.setTransform(997.4,238.325);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_410.setTransform(987.4,235.25);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_411.setTransform(971.175,238.3274);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_412.setTransform(962.075,238.575);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_413.setTransform(952.35,238.325);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_414.setTransform(942.6521,235.15);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_415.setTransform(930.125,236.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_416.setTransform(922.45,238.325);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_417.setTransform(912.5521,238.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_418.setTransform(896.65,238.325);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_419.setTransform(885.85,235.25);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_420.setTransform(870.35,240.6);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_421.setTransform(860.925,238.3274);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_422.setTransform(851.6021,235.15);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_423.setTransform(845.025,236.8);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_424.setTransform(831.174,240.5);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_425.setTransform(821.5021,238.2);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_426.setTransform(814.675,236.175);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_427.setTransform(807.9021,238.2);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_428.setTransform(797.7,238.325);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_429.setTransform(787.875,238.3274);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_430.setTransform(776.2588,238.1769);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_431.setTransform(760.525,242.95);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_432.setTransform(755.4273,238.3433);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_433.setTransform(747.025,238.3274);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_434.setTransform(740.325,236.8);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgYAAgCAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_435.setTransform(732.4,238.325);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_436.setTransform(725.55,238.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_437.setTransform(716.9,235.25);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_438.setTransform(706.575,238.3274);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_439.setTransform(699.875,236.8);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_440.setTransform(694.8,238.2);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_441.setTransform(686.375,238.3274);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_442.setTransform(677.275,238.575);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_443.setTransform(668.3521,238.2);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_444.setTransform(661.575,236.175);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_445.setTransform(649.2,238.3263);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_446.setTransform(642.725,236.175);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_447.setTransform(638.725,236.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_448.setTransform(630.8,238.325);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_449.setTransform(621.2,238.4261);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#01395B").s().p("AAcBCIAAg6QgHAMgVACQgkAAgFgrQAFgrAkgBQAWADAGAMIAAgNIANAAIAACBgAABg0QgXAAgDAfQAAAcAaACQAbgDAAgbQgEgfgWAAIgBAAg");
	this.shape_450.setTransform(611,240.5);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_451.setTransform(600.45,238.325);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_452.setTransform(584.725,238.3274);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_453.setTransform(578.15,238.2);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_454.setTransform(568.95,238.325);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_455.setTransform(553.3021,235.15);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_456.setTransform(545.1773,238.3433);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#01395B").s().p("AAWBKIAAhSIAOAAIAABSgAgbBKIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAAAEIgOAAIAAgEQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFg");
	this.shape_457.setTransform(536.5821,234.9875);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_458.setTransform(527.75,240.6);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_459.setTransform(521.075,235.15);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_460.setTransform(516.925,235.15);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_461.setTransform(510.025,238.3274);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#01395B").s().p("AgaA6IAIgMQAIAIAIAAQAFAAAEgEQAGgJgBgNIAAhfIAOAAIAABfQACASgKAOQgGAHgOABQgPAAgJgKg");
	this.shape_462.setTransform(500.8667,235.9);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#01395B").s().p("AgrBGQACgXAWgCQAWACACAXQgCAWgWACQgWgCgCgWgAgiAgIAGgxIANACQAOABAMgJQAHgEABgPQgBgLgEgCQgDgEgKgBQgIAAgFAFQgHAGAAAKIgpAAQAEgXAPgQQAWgSAVADQAYgCAUASQAQATgCARQgBAagOANQgQAMgVAAIgDAWg");
	this.shape_463.setTransform(763.9611,183.4098);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#01395B").s().p("AAZBaIAKhNIhHAAIgKBNIgqAAIAWizIAqAAIgIBDIBGAAIAJhDIAqAAIgXCzg");
	this.shape_464.setTransform(746.6,183.45);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#01395B").s().p("AgHBeQgTABgRgJQgOgIgKgLIAXgeQAGAIAJAHQAJAFAMAAQAKABAJgGQAIgGAAgLQgBgJgEgEQgCgBgMgGIgKgFQgJgCgRgNQgMgNAAgRQACgcAPgNQAXgTAYACQAYgCAcAUIgUAeQgSgOgNABQgJAAgIAFQgFAFAAAHQAAAJAFAEQAFAEANAFIAKAFQAOAFAKAMQAKALgBAQQgBAegRAQQgVASgYAAIgFAAg");
	this.shape_465.setTransform(729.125,183.3998);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#01395B").s().p("AgfBaIAWizIApAAIgWCzg");
	this.shape_466.setTransform(717.875,183.45);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#01395B").s().p("Ag8BaIAWizIBjAAIgEAjIg6AAIgEAjIA1AAIgEAiIg1AAIgKBLg");
	this.shape_467.setTransform(707.725,183.45);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#01395B").s().p("AgqBaIAKhUIg0hfIAvAAIAeA4IAqg4IAyAAIhMBfIgJBUg");
	this.shape_468.setTransform(693.325,183.45);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#01395B").s().p("AgyBaIAWizIApAAIgRCQIA3AAIgFAjg");
	this.shape_469.setTransform(679.3,183.45);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#01395B").s().p("AgyBaIAWizIApAAIgRCQIA3AAIgFAjg");
	this.shape_470.setTransform(667.2,183.45);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#01395B").s().p("Ag8BaIAWizIBjAAIgFAjIg5AAIgFAjIA4AAIgEAiIg4AAIgFAoIA7AAIgEAjg");
	this.shape_471.setTransform(654.625,183.45);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#01395B").s().p("AgNBcQgOABgOgIQgLgGgHgMIAcgaQACAGAFAEQADAEAHAAQAHAAAEgEQAFgGABgOIAQh6IApAAIgPB5QABAXgTAaQgTANgPAAIgGAAg");
	this.shape_472.setTransform(640.825,183.6674);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#01395B").s().p("AAwBaIgJgiIhDAAIgRAiIgtAAIBeizIAnAAIAwCzgAgMAYIAsAAIgPg/g");
	this.shape_473.setTransform(620.025,183.45);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#01395B").s().p("AgHBeQgTABgRgJQgOgIgKgLIAXgeQAGAIAJAHQAJAFAMAAQAKABAJgGQAHgGABgLQgBgJgEgEQgCgBgMgGIgKgFQgJgCgRgNQgMgNAAgRQACgcAPgNQAXgTAYACQAYgCAcAUIgUAeQgSgOgNABQgJAAgIAFQgFAFAAAHQAAAJAFAEQAFAEANAFIAKAFQAOAFAKAMQAKALgBAQQgBAegRAQQgVASgYAAIgFAAg");
	this.shape_474.setTransform(597.875,183.3998);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#01395B").s().p("AgfBaIAWizIApAAIgWCzg");
	this.shape_475.setTransform(586.675,183.45);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#01395B").s().p("AgnBaIARiQIgnAAIAEgjIB3AAIgEAjIgoAAIgRCQg");
	this.shape_476.setTransform(570.9,183.45);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#01395B").s().p("AAwBaIgJgiIhDAAIgRAiIgtAAIBeizIAnAAIAwCzgAgMAYIAsAAIgPg/g");
	this.shape_477.setTransform(554.725,183.45);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#01395B").s().p("AAZBaIAKhNIhHAAIgKBNIgqAAIAWizIAqAAIgIBDIBGAAIAJhDIAqAAIgXCzg");
	this.shape_478.setTransform(536.9,183.45);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#01395B").s().p("AAPBaIgXhtIgzBtIgjAAIgnizIAqAAIAYB3IA1h3IAbAAIAYB3IA1h3IAsAAIhTCzg");
	this.shape_479.setTransform(514.775,183.45);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAvMAnmMheXAAAMAAAhPLMBeXAAAg");
	this.shape_480.setTransform(785.15,408.45);

	this.instance = new lib.Symbol142("synched",0);
	this.instance.setTransform(483.2,155.05);
	this.instance.alpha = 0.3984;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.info1swf, new cjs.Rectangle(482.2,154.1,605.8999999999999,508.79999999999995), null);


(lib.funfactsinfoswf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape.setTransform(1053.05,616.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_1.setTransform(1043.9588,613.1769);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_2.setTransform(1032.275,613.3274);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_3.setTransform(1022.9521,610.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_4.setTransform(1016.375,611.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_5.setTransform(1004.525,613.3274);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#01395B").s().p("AAQBJIgggmIgEAEIAAAiIgOAAIAAiRIAOAAIAABdIAegeIATAAIgjAiIApAwg");
	this.shape_6.setTransform(996.3,610.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_7.setTransform(985.9,613.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_8.setTransform(979.025,611.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_9.setTransform(968.5273,613.3433);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_10.setTransform(963.075,611.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_11.setTransform(956.0021,613.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_12.setTransform(946.475,613.3274);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_13.setTransform(939.85,613.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_14.setTransform(933.95,613.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_15.setTransform(925.65,613.4261);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_16.setTransform(916.6,613.3263);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_17.setTransform(902.725,613.3274);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_18.setTransform(893.4521,610.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_19.setTransform(886.825,611.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_20.setTransform(877.55,613.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_21.setTransform(869.075,613.3274);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_22.setTransform(860.025,613.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_23.setTransform(850.975,613.3274);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_24.setTransform(844.35,613.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_25.setTransform(835.925,613.3274);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_26.setTransform(826.6021,610.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_27.setTransform(815.05,613.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_28.setTransform(801.525,610.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_29.setTransform(794.625,613.3274);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_30.setTransform(785.575,613.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_31.setTransform(775.8,613.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_32.setTransform(768.95,613.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_33.setTransform(763.425,611.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_34.setTransform(750.85,610.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_35.setTransform(741.1521,613.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgYAAgCAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_36.setTransform(730.9,613.325);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_37.setTransform(714.45,613.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_38.setTransform(702.4,613.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#01395B").s().p("AAWBKIAAhxQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFIgOAAIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAABxg");
	this.shape_39.setTransform(692.1821,609.9875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_40.setTransform(678.475,613.3274);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_41.setTransform(669.2021,610.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_42.setTransform(662.575,611.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_43.setTransform(650.8521,610.15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_44.setTransform(644.275,611.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_45.setTransform(639.775,611.175);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_46.setTransform(630.85,613.25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_47.setTransform(614.15,613.325);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_48.setTransform(603.424,615.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_49.setTransform(589.0521,610.15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_50.setTransform(580.8773,613.3433);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#01395B").s().p("AAWBKIAAhSIAOAAIAABSgAgbBKIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAAAEIgOAAIAAgEQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFg");
	this.shape_51.setTransform(572.3321,609.9875);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_52.setTransform(563.5,615.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_53.setTransform(556.825,610.15);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_54.setTransform(552.675,610.15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_55.setTransform(545.775,613.3274);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#01395B").s().p("AgGBVIAAiAIANAAIAACAgAgJhKQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_56.setTransform(538.875,613.475);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_57.setTransform(529.275,617.95);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_58.setTransform(525.675,611.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_59.setTransform(517.75,613.325);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_60.setTransform(508.1021,610.15);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_61.setTransform(501.475,611.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_62.setTransform(1067.0521,588.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_63.setTransform(1056.85,588.325);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_64.setTransform(1047.1521,585.15);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_65.setTransform(1040.575,586.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_66.setTransform(1031.15,588.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_67.setTransform(1022.675,588.3274);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_68.setTransform(1013.4021,585.15);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_69.setTransform(1006.775,586.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#01395B").s().p("AhFAAQAHhAA+gEQBAAEAFBAQgFBAhAAFQg/gFgGhAgAg1AAQAFAyAwAFQAygFAEgyQgEgygygEQgwAEgFAyg");
	this.shape_70.setTransform(996.45,585.75);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_71.setTransform(981.45,591.65);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_72.setTransform(973.65,585.25);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_73.setTransform(966.9,588.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_74.setTransform(957.7,588.325);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_75.setTransform(945.9,588.25);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_76.setTransform(936.2,588.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_77.setTransform(927.3,588.325);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_78.setTransform(920,585.05);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_79.setTransform(905.6588,588.1769);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_80.setTransform(893.975,588.3274);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_81.setTransform(884.7021,585.15);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_82.setTransform(878.075,586.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_83.setTransform(868.875,585.15);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_84.setTransform(861.975,588.3274);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_85.setTransform(852.15,590.4831);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_86.setTransform(841.4,588.325);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_87.setTransform(834.4,588.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_88.setTransform(825.7,590.4831);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_89.setTransform(809.9,585.25);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_90.setTransform(800.2521,588.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_91.setTransform(790,588.325);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_92.setTransform(775.5521,588.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_93.setTransform(764,588.25);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_94.setTransform(751.95,588.325);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_95.setTransform(741.2,585.25);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_96.setTransform(729.2,588.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_97.setTransform(720.725,588.3274);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_98.setTransform(714.025,586.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_99.setTransform(706.1,588.325);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_100.setTransform(694.3,588.25);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_101.setTransform(678.0021,585.15);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_102.setTransform(669.8773,588.3433);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_103.setTransform(661.6,588.4261);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_104.setTransform(651.95,590.4831);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_105.setTransform(636.45,588.325);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_106.setTransform(629.325,586.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_107.setTransform(616.6,588.325);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_108.setTransform(609.575,585.15);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_109.setTransform(605.425,585.15);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_110.setTransform(598.525,588.3274);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_111.setTransform(591.9,588.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_112.setTransform(583.25,585.25);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_113.setTransform(570.9088,588.1769);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_114.setTransform(559.4,588.4261);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_115.setTransform(545.2521,588.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_116.setTransform(535.05,588.325);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_117.setTransform(520.475,588.3274);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#01395B").s().p("AAQBJIgggmIgEAEIAAAiIgOAAIAAiRIAOAAIAABdIAegeIATAAIgjAiIApAwg");
	this.shape_118.setTransform(512.3,585.15);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_119.setTransform(505.325,586.175);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_120.setTransform(501.175,585.15);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_121.setTransform(1069.675,560.15);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_122.setTransform(1065.525,560.15);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_123.setTransform(1058.8,563.4261);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_124.setTransform(1049.4521,560.15);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_125.setTransform(1036.25,563.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_126.setTransform(1030.525,561.175);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_127.setTransform(1023.625,563.3274);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_128.setTransform(1014.3521,560.15);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_129.setTransform(1007.725,561.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_130.setTransform(994.325,563.3274);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_131.setTransform(986.0773,563.3433);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_132.setTransform(977.25,563.325);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_133.setTransform(969.925,560.15);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_134.setTransform(963.45,563.3263);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_135.setTransform(947.35,560.25);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_136.setTransform(937.6521,563.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_137.setTransform(927.45,563.325);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_138.setTransform(911.5521,563.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_139.setTransform(902.025,563.3274);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_140.setTransform(892.2,565.4831);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_141.setTransform(881.45,563.325);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_142.setTransform(865.45,565.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_143.setTransform(856.025,563.3274);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_144.setTransform(846.7021,560.15);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#01395B").s().p("AgGBDIAAh3IghAAIAAgOIBPAAIAAAOIghAAIAAB3g");
	this.shape_145.setTransform(839.175,560.775);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#01395B").s().p("AgPAAQABgOAOgBQAOABABAOQgBAOgOABQgOgBgBgOg");
	this.shape_146.setTransform(826.2,566.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#01395B").s().p("AARAtIAAgvQACgIgGgJQgHgFgFABQgIAAgGAIQgEAIABAHIAAAtIgZAAIAAhWIAZAAIAAALQAGgMATgCQAOgBAMAMQAIALgBANIAAA2g");
	this.shape_147.setTransform(818.3309,562.971);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#01395B").s().p("AAXArIgXgyIgWAyIgMAAIgshVIAbAAIAXAxIAXgxIALAAIAXAxIAXgxIAbAAIgsBVg");
	this.shape_148.setTransform(805.075,563.075);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#01395B").s().p("AgiAiQgOgMgBgWQABgUAOgNQALgLAXgBQAZABAKALQAOANAAAUQAAAWgOAMQgKALgZABQgXAAgLgMgAgXAAQABAXAWABQAXgBABgXQgBgVgXgCQgWABgBAWg");
	this.shape_149.setTransform(791.9,563.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#01395B").s().p("AgCBKQgqgEgDgqQADgpApgEQALgCAQAQIAAhGIAYAAIAACRIgYAAIAAgMQgOAOgKAAIgCAAgAgVAcQACAXAUACQAXgCABgXQgBgWgXgCQgUACgCAWg");
	this.shape_150.setTransform(780.3,560.2915);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#01395B").s().p("AgCBKQgqgEgDgqQADgpApgEQALgCAQAQIAAhGIAYAAIAACRIgYAAIAAgMQgOAOgKAAIgCAAgAgVAcQACAXAUACQAXgCABgXQgBgWgXgCQgUACgCAWg");
	this.shape_151.setTransform(762.7,560.2915);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#01395B").s().p("AARAtIAAgvQACgIgGgJQgHgFgFABQgIAAgGAIQgEAIABAHIAAAtIgZAAIAAhWIAZAAIAAALQAGgMATgCQAOgBAMAMQAIALgBANIAAA2g");
	this.shape_152.setTransform(751.8809,562.971);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#01395B").s().p("AgCAuQgqgEgDgqQADgpApgEQALgDAQARIAAgLIAYAAIAABVIgYAAIAAgLQgOAOgKAAIgCAAgAgVAAQACAXAUABQAXgBABgXQgBgWgXgBQgUABgCAWg");
	this.shape_153.setTransform(740.6,563.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#01395B").s().p("AgvBEIAAiDIAZAAIAAALQAFgLAWgDQANgCAQANQAMAJACAaQgEAbgKAHQgKAKgTABQgLADgQgRIAAA5gAgRgnQgHAHgBAMQABAMAHAHQAFAEALAAQAMAAAEgFQAIgIAAgKQAAgLgIgHQgHgHgJAAQgJAAgHAGg");
	this.shape_154.setTransform(723.45,565.2422);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#01395B").s().p("AAAAtQgRAAgNgKQgNgOACgNIAAg0IAYAAIAAAwQgBAIAHAHQAEAFAHAAQAHAAAGgFQAFgHgBgIIAAgwIAZAAIAAA0QACANgMAOQgOAKgQAAIgCAAg");
	this.shape_155.setTransform(712.2,563.2261);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#01395B").s().p("AgfAiQgOgNABgVQACgYALgJQAQgNAQABQAZACAIAMQAMATgBAOIAAACIhAAAQAAAJAEAGQAEAHANABQAOAAAGgLIAWADQAAATgqAIIgCAAQgTAAgMgMgAgSgKIAoAAQgFgSgQAAQgOABgFARg");
	this.shape_156.setTransform(695.4075,563.0935);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#01395B").s().p("AgGArIgrhVIAbAAIAWAwIAXgwIAbAAIgrBVg");
	this.shape_157.setTransform(685.35,563.075);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#01395B").s().p("AgiAiQgOgMgBgWQABgUAOgNQALgLAXgBQAZABAKALQAOANAAAUQAAAWgOAMQgKALgZABQgXAAgLgMgAgXAAQABAXAWABQAXgBABgXQgBgVgXgCQgWABgBAWg");
	this.shape_158.setTransform(675,563.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#01395B").s().p("AArAtIAAgvQgBgOgDgDQgGgFgEABQgKAAgEAIQgEAIABAHIAAAtIgYAAIAAgvQAAgOgEgDQgFgFgFABQgJAAgEAIQgEAIABAHIAAAtIgZAAIAAhWIAZAAIAAAKQAQgPAJACQAZAFACALQAGgNAWgDQATACAEAJQAHAKgBAOIAAA2g");
	this.shape_159.setTransform(661.4563,562.9571);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#01395B").s().p("AgrBCIAgg7IgqhIIAdAAIAZAxIAZgxIAcAAIhGCDg");
	this.shape_160.setTransform(641.95,565.375);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#01395B").s().p("AgLBJIAAiRIAXAAIAACRg");
	this.shape_161.setTransform(634.225,560.15);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#01395B").s().p("AARAtIAAgvQACgIgGgJQgHgFgFABQgIAAgGAIQgEAIABAHIAAAtIgZAAIAAhWIAZAAIAAALQAGgMATgCQAOgBAMAMQAIALgBANIAAA2g");
	this.shape_162.setTransform(626.4809,562.971);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#01395B").s().p("AgiAiQgOgMgBgWQABgUAOgNQALgLAXgBQAZABAKALQAOANAAAUQAAAWgOAMQgKALgZABQgXAAgLgMgAgXAAQABAXAWABQAXgBABgXQgBgVgXgCQgWABgBAWg");
	this.shape_163.setTransform(615.45,563.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#01395B").s().p("AARAtIAAgvQACgIgGgJQgHgFgFABQgIAAgGAIQgEAIABAHIAAAtIgZAAIAAhWIAZAAIAAALQAGgMATgCQAOgBAMAMQAIALgBANIAAA2g");
	this.shape_164.setTransform(598.2309,562.971);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#01395B").s().p("AgCAuQgqgEgDgqQADgpApgEQALgDAQARIAAgLIAYAAIAABVIgYAAIAAgLQgOAOgKAAIgCAAgAgVAAQACAXAUABQAXgBABgXQgBgWgXgBQgUABgCAWg");
	this.shape_165.setTransform(586.95,563.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#01395B").s().p("AgUAiQgMgJgCgYQABgXAOgMQASgMAMABQAOAAAKAFIAAAYQgIgHgMAAQgXADgBAUQACAXAXACQAIABALgJIAAAYQgHAFgQAAQgUAAgMgMg");
	this.shape_166.setTransform(577.325,563.092);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#01395B").s().p("AARBJIAAgwQACgIgGgIQgHgFgFAAQgIAAgGAIQgEAIABAJIAAAsIgZAAIAAiRIAZAAIAABGQAGgMATgBQAOgBAMALQAIALgBANIAAA2g");
	this.shape_167.setTransform(561.5809,560.15);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#01395B").s().p("AAAAuQgagCgIgMIANgPQAIAJALABQAKAAABgJQgBgIgGgBIgFgCQgKgDgJgGQgGgHAAgKQABgNAIgHQALgHAKABQALgBARAKIgMAPQgJgHgFABQgIAAgBAHQgBAEAIAEIAGABQAMADAKAJQAEAGAAAIQABAMgKAKQgKAJgOAAIgBAAg");
	this.shape_168.setTransform(552.2512,563.0919);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#01395B").s().p("AAVBKIAAhVIAYAAIAABVgAgkBKIAAhBIgJAAIAAgUIAJAAIAAgWQgBgNAIgMQAKgOAXgBQAUgCAPARQAIAPgCAKIAAAGIgYAAIAAgFQABgGgEgGQgGgIgIABQgFgBgHAIQgDAGAAAGIAAAVIAVAAIAAAUIgVAAIAABBg");
	this.shape_169.setTransform(542.47,559.9892);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#01395B").s().p("AgrBCIAgg7IgqhIIAdAAIAZAxIAZgxIAcAAIhGCDg");
	this.shape_170.setTransform(532.25,565.375);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#01395B").s().p("AgLBJIAAiRIAXAAIAACRg");
	this.shape_171.setTransform(524.475,560.15);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#01395B").s().p("AgLBJIAAiRIAXAAIAACRg");
	this.shape_172.setTransform(519.725,560.15);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#01395B").s().p("AgfAiQgOgNABgVQACgYALgJQAQgNAQABQAZACAIAMQAMATgBAOIAAACIhAAAQAAAJAEAGQAEAHANABQAOAAAGgLIAWADQAAATgqAIIgCAAQgTAAgMgMgAgSgKIAoAAQgFgSgQAAQgOABgFARg");
	this.shape_173.setTransform(512.1075,563.0935);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#01395B").s().p("AghA4IAQgTQADAGAKABQAHgBACgEQAEgIgBgNIAAhVIAaAAIAABZQADAVgTATQgJAGgMAAIgBAAQgOAAgPgMg");
	this.shape_174.setTransform(502.0272,560.9259);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#01395B").s().p("AgJA6QABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJgAgGAnIAAhqIANAAIAABqg");
	this.shape_175.setTransform(1014.5,510.875);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_176.setTransform(1008.2773,513.3433);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_177.setTransform(1002.65,513.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_178.setTransform(994.3,513.4261);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_179.setTransform(984.1,513.325);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_180.setTransform(975.6773,513.3433);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_181.setTransform(966.85,513.325);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_182.setTransform(956.9021,513.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_183.setTransform(950.125,511.175);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_184.setTransform(942.7,510.25);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_185.setTransform(931.175,511.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_186.setTransform(925.3273,513.3433);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_187.setTransform(919.7,513.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#01395B").s().p("AAWBKIAAhSIAOAAIAABSgAgbBKIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAAAEIgOAAIAAgEQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFg");
	this.shape_188.setTransform(911.0821,509.9875);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_189.setTransform(897.375,513.3274);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_190.setTransform(888.1021,510.15);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_191.setTransform(881.475,511.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_192.setTransform(872.4,510.05);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_193.setTransform(864.4,513.325);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_194.setTransform(849.675,513.3274);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_195.setTransform(839.374,515.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_196.setTransform(828.8,513.325);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_197.setTransform(814.375,513.3274);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_198.setTransform(805.0521,510.15);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_199.setTransform(798.475,511.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_200.setTransform(787.9773,513.3433);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_201.setTransform(779.575,513.3274);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_202.setTransform(767.9088,513.1769);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_203.setTransform(758.975,511.175);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_204.setTransform(755.025,511.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#01395B").s().p("AglAuQgCgHgBgHIAQAAQAAAIAEAGQAHAJANABQAYgDACgYQABgOgOgJQgHgDgIAAIAAgMQAIABAHgEQAIgCADgRQABgVgYgCQgIgBgIAIQgEAGgCAIIgOAAQAAgLAGgIQAQgSAOACQAmAEAAAgQABARgSANQANAAAFAfQgCAngmABIgCAAQgWAAgNgXg");
	this.shape_205.setTransform(741.9,510.7391);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_206.setTransform(728.4773,513.3433);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_207.setTransform(722.825,511.175);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_208.setTransform(714.175,511.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgYAAgCAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_209.setTransform(706.25,513.325);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_210.setTransform(696.6021,510.15);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#01395B").s().p("AgGBDIAAh3IghAAIAAgOIBPAAIAAAOIghAAIAAB3g");
	this.shape_211.setTransform(689.075,510.775);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_212.setTransform(677.85,516.65);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_213.setTransform(672.1273,513.3433);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_214.setTransform(666.5,513.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_215.setTransform(657.3,513.325);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_216.setTransform(647.525,513.3274);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_217.setTransform(638.1,515.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_218.setTransform(624.1521,513.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_219.setTransform(614.2,513.325);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_220.setTransform(606.875,511.175);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_221.setTransform(602.725,510.15);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_222.setTransform(598.575,510.15);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_223.setTransform(594.425,511.175);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_224.setTransform(585.5088,513.1769);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#01395B").s().p("AAABFQgRABgQgVQgOgUAAgdQAAgcAOgUQAQgVARABQASgBAQAVQAOAUAAAcQAAAdgOAUQgQAUgQAAIgCAAgAAXApQAKgTAAgWQAAgVgKgSQgMgRgLACQgKgCgMARQgKARABAWQgBAWAKATQAMAPAKgBQALABAMgPg");
	this.shape_225.setTransform(568.25,510.75);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#01395B").s().p("AAABFQgRABgQgVQgOgUAAgdQAAgcAOgUQAQgVARABQASgBAQAVQAOAUAAAcQAAAdgOAUQgQAUgQAAIgCAAgAAXApQAKgTAAgWQAAgVgKgSQgMgRgLACQgKgCgMARQgKARABAWQgBAWAKATQAMAPAKgBQALABAMgPg");
	this.shape_226.setTransform(556.9,510.75);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#01395B").s().p("AgyA9IBLhzIhIAAIAAgNIBhAAIhYCHg");
	this.shape_227.setTransform(546.95,510.925);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_228.setTransform(531.5521,513.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_229.setTransform(522.025,513.3274);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_230.setTransform(512.975,513.575);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_231.setTransform(503.925,513.3274);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_232.setTransform(1069.5,488.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_233.setTransform(1060.6,488.325);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#01395B").s().p("AAABFQgRABgQgVQgOgUAAgdQAAgcAOgUQAQgVARABQASgBAQAVQAOAUAAAcQAAAdgOAUQgQAUgQAAIgCAAgAAXApQAKgTAAgWQAAgVgKgSQgMgRgLACQgKgCgMARQgKARABAWQgBAWAKATQAMAPAKgBQALABAMgPg");
	this.shape_234.setTransform(1044.75,485.75);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#01395B").s().p("AAABFQgRABgQgVQgOgUAAgdQAAgcAOgUQAQgVARABQASgBAQAVQAOAUAAAcQAAAdgOAUQgQAUgQAAIgCAAgAAXApQAKgTAAgWQAAgVgKgSQgMgRgLACQgKgCgMARQgKARABAWQgBAWAKATQAMAPAKgBQALABAMgPg");
	this.shape_235.setTransform(1033.4,485.75);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#01395B").s().p("AggA5QgHgFgFgIIAMgJQADAGAGAFQAIAHANABQAegDACgfQgCgegegCQgHgBgTALIAUhBIA0AAIAAAOIgrAAIgHAcIAHgBQAqAEACAqQgFAugrACQgQAAgNgLg");
	this.shape_236.setTransform(1021.55,485.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_237.setTransform(1009.2,488.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_238.setTransform(1000.3,488.325);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_239.setTransform(993.05,485.05);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_240.setTransform(979.85,485.25);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_241.setTransform(970.025,488.3274);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_242.setTransform(963.325,486.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_243.setTransform(957.5273,488.3433);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_244.setTransform(951.825,486.175);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#01395B").s().p("AAaApIgagiIgZAiIgSAAIAkgrIgfgnIASAAIAUAcIAWgcIASAAIgfAnIAjArg");
	this.shape_245.setTransform(945.225,488.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_246.setTransform(935.875,488.3274);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_247.setTransform(921.325,488.3274);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_248.setTransform(912.275,488.575);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_249.setTransform(902.5,488.325);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_250.setTransform(892.8521,485.15);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_251.setTransform(878.5021,485.15);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_252.setTransform(870.3773,488.3433);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#01395B").s().p("AAWBKIAAhSIAOAAIAABSgAgbBKIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAAAEIgOAAIAAgEQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFg");
	this.shape_253.setTransform(861.7821,484.9875);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_254.setTransform(853,490.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_255.setTransform(846.275,485.15);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_256.setTransform(842.125,485.15);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_257.setTransform(835.225,488.3274);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#01395B").s().p("AgGBVIAAiAIANAAIAACAgAgJhKQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_258.setTransform(828.375,488.475);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_259.setTransform(816.575,488.3274);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_260.setTransform(807.475,488.575);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_261.setTransform(798.475,488.3274);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_262.setTransform(791.575,486.175);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_263.setTransform(787.425,485.15);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_264.setTransform(780.525,488.3274);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_265.setTransform(770.7,485.25);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_266.setTransform(756.8273,488.3433);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_267.setTransform(751.325,486.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_268.setTransform(745.5273,488.3433);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_269.setTransform(739.825,486.175);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_270.setTransform(735.875,486.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_271.setTransform(728.8021,488.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_272.setTransform(719.275,488.3274);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_273.setTransform(712.375,486.175);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQACAfAaAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_274.setTransform(705.9,488.3263);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_275.setTransform(698.0773,488.3433);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_276.setTransform(686.675,492.95);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_277.setTransform(681.5773,488.3433);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_278.setTransform(675.925,485.15);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_279.setTransform(671.725,486.175);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_280.setTransform(666.2273,488.3433);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_281.setTransform(659.1773,488.3433);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_282.setTransform(650.35,488.325);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_283.setTransform(643.05,485.05);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_284.setTransform(630.575,488.3274);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_285.setTransform(621.4,488.3263);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_286.setTransform(612.35,488.4261);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_287.setTransform(602.15,485.25);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_288.setTransform(591.95,488.325);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_289.setTransform(584.9,488.2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_290.setTransform(576.25,490.4831);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_291.setTransform(560.6,488.325);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_292.setTransform(553.475,486.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_293.setTransform(542.7273,488.3433);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_294.setTransform(534.325,488.3274);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_295.setTransform(524.8021,488.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_296.setTransform(514.85,488.325);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_297.setTransform(504.6,485.25);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_298.setTransform(1066.975,463.3274);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_299.setTransform(1057.875,463.575);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_300.setTransform(1048.15,463.325);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_301.setTransform(1038.4521,460.15);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_302.setTransform(1025.175,461.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_303.setTransform(1017.5,463.325);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_304.setTransform(1007.6021,463.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_305.setTransform(990.95,463.325);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_306.setTransform(980.15,460.25);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_307.setTransform(963.9,465.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_308.setTransform(954.475,463.3274);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_309.setTransform(945.1521,460.15);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_310.setTransform(938.575,461.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_311.setTransform(924.7521,460.15);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_312.setTransform(914.574,465.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_313.setTransform(904.9,463.4261);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_314.setTransform(895,463.325);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_315.setTransform(885.3521,460.15);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_316.setTransform(878.775,461.8);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_317.setTransform(864.9521,463.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_318.setTransform(855.475,463.3274);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_319.setTransform(846.375,463.575);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#01395B").s().p("AgiBDIAAiFIBFAAIAAAOIg1AAIAAAoIAzAAIAAANIgzAAIAAA0IA1AAIAAAOg");
	this.shape_320.setTransform(837.7,460.775);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#01395B").s().p("AgPAAQABgOAOgBQAOABABAOQgBAOgOABQgOgBgBgOg");
	this.shape_321.setTransform(823.3,466.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#01395B").s().p("AAAAuQgagCgIgMIANgPQAIAJALABQAKAAABgJQgBgIgGgBIgFgCQgKgDgJgGQgGgHAAgKQABgNAIgHQALgHAKABQALgBARAKIgMAPQgJgHgFABQgIAAgBAHQgBAEAIAEIAGABQAMADAKAJQAEAGAAAIQABAMgKAKQgKAJgOAAIgBAAg");
	this.shape_322.setTransform(816.7512,463.0919);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#01395B").s().p("AgdAtIAAhWIAYAAIAAANQAHgLADgBQAGgEAIAAIALACIgDAXQgFgDgGAAQgIgBgIAIQgFAJAAAJIAAAqg");
	this.shape_323.setTransform(809.9,462.975);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#01395B").s().p("AAAAtQgRAAgNgKQgNgOACgNIAAg0IAYAAIAAAwQgBAIAHAHQAEAFAHAAQAHAAAGgFQAFgHgBgIIAAgwIAZAAIAAA0QACANgMAOQgOAKgQAAIgCAAg");
	this.shape_324.setTransform(800.35,463.2261);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#01395B").s().p("AgCAuQgqgEgDgqQADgpApgEQALgDAQARIAAgLIAYAAIAABVIgYAAIAAgLQgOAOgKAAIgCAAgAgVAAQACAXAUABQAXgBABgXQgBgWgXgBQgUABgCAWg");
	this.shape_325.setTransform(789.05,463.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#01395B").s().p("AAAAuQgagCgIgMIANgPQAIAJALABQAKAAABgJQgBgIgGgBIgFgCQgKgDgJgGQgGgHAAgKQABgNAIgHQALgHAKABQALgBARAKIgMAPQgJgHgFABQgIAAgBAHQgBAEAIAEIAGABQAMADAKAJQAEAGAAAIQABAMgKAKQgKAJgOAAIgBAAg");
	this.shape_326.setTransform(779.5512,463.0919);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#01395B").s().p("AgiAiQgOgMgBgWQABgUAOgNQALgLAXgBQAZABAKALQAOANAAAUQAAAWgOAMQgKALgZABQgXAAgLgMgAgXAAQABAXAWABQAXgBABgXQgBgVgXgCQgWABgBAWg");
	this.shape_327.setTransform(770.25,463.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#01395B").s().p("AARAtIAAgvQACgIgGgJQgHgFgFABQgIAAgGAIQgEAIABAHIAAAtIgZAAIAAhWIAZAAIAAALQAGgMATgCQAOgBAMAMQAIALgBANIAAA2g");
	this.shape_328.setTransform(759.2309,462.971);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#01395B").s().p("AgLBFIAAhWIAYAAIAABWgAgOg2QACgNAMgBQANABABANQgBAOgNABQgMgBgCgOg");
	this.shape_329.setTransform(751.5,460.55);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#01395B").s().p("AgCBKQgqgEgDgqQADgpApgEQALgCAQAQIAAhGIAYAAIAACRIgYAAIAAgMQgOAOgKAAIgCAAgAgVAcQACAXAUACQAXgCABgXQgBgWgXgCQgUACgCAWg");
	this.shape_330.setTransform(743.2,460.2915);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#01395B").s().p("AgfAiQgOgNABgVQACgYALgJQAQgNAQABQAZACAIAMQAMATgBAOIAAACIhAAAQAAAJAEAGQAEAHANABQAOAAAGgLIAWADQAAATgqAIIgCAAQgTAAgMgMgAgSgKIAoAAQgFgSgQAAQgOABgFARg");
	this.shape_331.setTransform(725.8075,463.0935);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#01395B").s().p("AARBJIAAgwQACgIgGgIQgHgFgFAAQgIAAgGAIQgEAIABAJIAAAsIgZAAIAAiRIAZAAIAABGQAGgMATgBQAOgBAMALQAIALgBANIAAA2g");
	this.shape_332.setTransform(715.4809,460.15);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#01395B").s().p("AgPA6IAAhBIgKAAIAAgUIAKAAIAAgeIAYAAIAAAeIARAAIAAAUIgRAAIAABBg");
	this.shape_333.setTransform(707.5,461.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#01395B").s().p("AgfAiQgOgNABgVQACgYALgJQAQgNAQABQAZACAIAMQAMATgBAOIAAACIhAAAQAAAJAEAGQAEAHANABQAOAAAGgLIAWADQAAATgqAIIgCAAQgTAAgMgMgAgSgKIAoAAQgFgSgQAAQgOABgFARg");
	this.shape_334.setTransform(692.8075,463.0935);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#01395B").s().p("AgdAtIAAhWIAYAAIAAANQAHgLADgBQAGgEAIAAIALACIgDAXQgFgDgGAAQgIgBgIAIQgFAJAAAJIAAAqg");
	this.shape_335.setTransform(684.95,462.975);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#01395B").s().p("AgiAiQgOgMgBgWQABgUAOgNQALgLAXgBQAZABAKALQAOANAAAUQAAAWgOAMQgKALgZABQgXAAgLgMgAgXAAQABAXAWABQAXgBABgXQgBgVgXgCQgWABgBAWg");
	this.shape_336.setTransform(675.1,463.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#01395B").s().p("AgSBKIAAhBIgJAAIAAgVIAJAAIAAgXQgCgPAOgQQAGgHAOAAQAIAAAGADIAAAWQgFgDgGAAQgFgBgEAFQgCAEgBALIAAAUIAXAAIAAAVIgXAAIAABBg");
	this.shape_337.setTransform(666.7,460);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#01395B").s().p("AgfAiQgOgNABgVQACgYALgJQAQgNAQABQAZACAIAMQAMATgBAOIAAACIhAAAQAAAJAEAGQAEAHANABQAOAAAGgLIAWADQAAATgqAIIgCAAQgTAAgMgMgAgSgKIAoAAQgFgSgQAAQgOABgFARg");
	this.shape_338.setTransform(658.4075,463.0935);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#01395B").s().p("AgWA8IAAAMIgZAAIAAiRIAZAAIAABGQAPgQAMACQAoADADAqQgDArgoADIgEAAQgJAAgOgOgAgZAcQACAXAWACQAWgCACgXQgCgWgWgCQgWACgCAWg");
	this.shape_339.setTransform(647.7,460.2975);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#01395B").s().p("AgCBKQgqgEgDgqQADgpApgEQALgCAQAQIAAhGIAYAAIAACRIgYAAIAAgMQgOAOgKAAIgCAAgAgVAcQACAXAUACQAXgCABgXQgBgWgXgCQgUACgCAWg");
	this.shape_340.setTransform(629.15,460.2915);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#01395B").s().p("AgfAiQgOgNABgVQACgYALgJQAQgNAQABQAZACAIAMQAMATgBAOIAAACIhAAAQAAAJAEAGQAEAHANABQAOAAAGgLIAWADQAAATgqAIIgCAAQgTAAgMgMgAgSgKIAoAAQgFgSgQAAQgOABgFARg");
	this.shape_341.setTransform(618.4575,463.0935);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#01395B").s().p("AgPA6IAAhBIgKAAIAAgUIAKAAIAAgeIAYAAIAAAeIARAAIAAAUIgRAAIAABBg");
	this.shape_342.setTransform(610.55,461.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#01395B").s().p("AAAAuQgagCgIgMIANgPQAIAJALABQAKAAABgJQgBgIgGgBIgFgCQgKgDgJgGQgGgHAAgKQABgNAIgHQALgHAKABQALgBARAKIgMAPQgJgHgFABQgIAAgBAHQgBAEAIAEIAGABQAMADAKAJQAEAGAAAIQABAMgKAKQgKAJgOAAIgBAAg");
	this.shape_343.setTransform(603.8012,463.0919);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#01395B").s().p("AgLBFIAAhWIAYAAIAABWgAgOg2QACgNAMgBQANABABANQgBAOgNABQgMgBgCgOg");
	this.shape_344.setTransform(597.35,460.55);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#01395B").s().p("AAZArIgZgeIgYAeIgfAAIApguIghgnIAfAAIAQAWIASgWIAfAAIgiAnIApAug");
	this.shape_345.setTransform(589.325,463.075);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#01395B").s().p("AgfAiQgOgNABgVQACgYALgJQAQgNAQABQAZACAIAMQAMATgBAOIAAACIhAAAQAAAJAEAGQAEAHANABQAOAAAGgLIAWADQAAATgqAIIgCAAQgTAAgMgMgAgSgKIAoAAQgFgSgQAAQgOABgFARg");
	this.shape_346.setTransform(578.8575,463.0935);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#01395B").s().p("AARBJIAAgwQACgIgGgIQgHgFgFAAQgIAAgGAIQgEAIABAJIAAAsIgZAAIAAiRIAZAAIAABGQAGgMATgBQAOgBAMALQAIALgBANIAAA2g");
	this.shape_347.setTransform(561.5809,460.15);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#01395B").s().p("AAAAuQgagCgIgMIANgPQAIAJALABQAKAAABgJQgBgIgGgBIgFgCQgKgDgJgGQgGgHAAgKQABgNAIgHQALgHAKABQALgBARAKIgMAPQgJgHgFABQgIAAgBAHQgBAEAIAEIAGABQAMADAKAJQAEAGAAAIQABAMgKAKQgKAJgOAAIgBAAg");
	this.shape_348.setTransform(552.2512,463.0919);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#01395B").s().p("AAVBKIAAhVIAYAAIAABVgAgkBKIAAhBIgJAAIAAgUIAJAAIAAgWQgBgNAIgMQAKgOAXgBQAUgCAPARQAIAPgCAKIAAAGIgYAAIAAgFQABgGgEgGQgGgIgIABQgFgBgHAIQgDAGAAAGIAAAVIAVAAIAAAUIgVAAIAABBg");
	this.shape_349.setTransform(542.47,459.9892);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#01395B").s().p("AgrBCIAgg7IgqhIIAdAAIAZAxIAZgxIAcAAIhGCDg");
	this.shape_350.setTransform(532.25,465.375);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#01395B").s().p("AgLBJIAAiRIAXAAIAACRg");
	this.shape_351.setTransform(524.475,460.15);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#01395B").s().p("AgLBJIAAiRIAXAAIAACRg");
	this.shape_352.setTransform(519.725,460.15);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#01395B").s().p("AgfAiQgOgNABgVQACgYALgJQAQgNAQABQAZACAIAMQAMATgBAOIAAACIhAAAQAAAJAEAGQAEAHANABQAOAAAGgLIAWADQAAATgqAIIgCAAQgTAAgMgMgAgSgKIAoAAQgFgSgQAAQgOABgFARg");
	this.shape_353.setTransform(512.1075,463.0935);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#01395B").s().p("AghA4IAQgTQADAGAKABQAHgBACgEQAEgIgBgNIAAhVIAaAAIAABZQADAVgTATQgJAGgMAAIgBAAQgOAAgPgMg");
	this.shape_354.setTransform(502.0272,460.9259);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_355.setTransform(829.1,416.65);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_356.setTransform(825.55,413.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_357.setTransform(819.775,411.175);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_358.setTransform(812.2,413.325);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_359.setTransform(797.725,413.3274);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_360.setTransform(788.4021,410.15);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_361.setTransform(781.825,411.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_362.setTransform(769.55,413.325);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_363.setTransform(762.425,411.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_364.setTransform(755.3021,413.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_365.setTransform(748.525,411.175);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_366.setTransform(736.975,413.3274);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_367.setTransform(730.275,411.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_368.setTransform(722.35,413.325);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_369.setTransform(715.55,413.2);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_370.setTransform(706.65,413.325);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_371.setTransform(696.4,415.4831);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_372.setTransform(685.35,413.325);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_373.setTransform(676.125,413.575);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_374.setTransform(667.075,413.3274);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_375.setTransform(654.1773,413.3433);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_376.setTransform(645.775,413.3274);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_377.setTransform(638.875,411.175);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_378.setTransform(631.45,410.25);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_379.setTransform(621.2,413.325);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_380.setTransform(610.95,410.25);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_381.setTransform(598.55,413.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_382.setTransform(592.825,411.175);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_383.setTransform(585.925,413.3274);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_384.setTransform(576.6021,410.15);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_385.setTransform(570.025,411.8);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_386.setTransform(559.5273,413.3433);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_387.setTransform(550.4,413.325);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_388.setTransform(537.2773,413.3433);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_389.setTransform(531.65,413.2);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_390.setTransform(523.35,413.4261);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_391.setTransform(513.45,413.325);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_392.setTransform(503.8021,410.15);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_393.setTransform(1064.95,388.25);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_394.setTransform(1053.325,388.3274);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_395.setTransform(1046.45,385.05);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_396.setTransform(1032.8,388.325);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_397.setTransform(1020.525,386.8);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_398.setTransform(1014.6773,388.3433);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_399.setTransform(1006.45,388.4261);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#01395B").s().p("AgGBVIAAiAIANAAIAACAgAgJhKQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_400.setTransform(999.725,388.475);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_401.setTransform(989.95,388.2);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_402.setTransform(981.525,388.3274);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_403.setTransform(974.825,386.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_404.setTransform(969.95,385.05);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_405.setTransform(961.7,388.325);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_406.setTransform(949.05,388.2);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_407.setTransform(939.85,388.325);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_408.setTransform(930.075,388.3274);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_409.setTransform(920.25,390.4831);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_410.setTransform(909.7,390.4831);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_411.setTransform(898.7,388.325);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_412.setTransform(890.2273,388.3433);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_413.setTransform(884.575,386.175);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_414.setTransform(877.15,385.25);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_415.setTransform(862.1021,388.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_416.setTransform(851.85,388.325);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_417.setTransform(842.5,388.3263);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_418.setTransform(828.15,390.6);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_419.setTransform(818.725,388.3274);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_420.setTransform(809.4021,385.15);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_421.setTransform(802.825,386.8);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_422.setTransform(792.175,392.95);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_423.setTransform(785.675,388.3274);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_424.setTransform(779.05,388.2);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_425.setTransform(770.15,388.325);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_426.setTransform(760.5521,385.15);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_427.setTransform(752.3773,388.3433);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_428.setTransform(743.25,388.325);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_429.setTransform(728.2021,385.15);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_430.setTransform(720.0273,388.3433);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgYAAgCAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_431.setTransform(710.9,388.325);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_432.setTransform(699.1,388.25);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_433.setTransform(682.3,390.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_434.setTransform(672.925,388.3274);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_435.setTransform(663.6021,385.15);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_436.setTransform(657.025,386.8);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_437.setTransform(644.5521,388.2);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_438.setTransform(635.025,388.3274);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_439.setTransform(625.7021,385.15);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#01395B").s().p("AAAggIgqBpIgziKIAQAAIAjBjIAqhrIAnBrIAnhjIAQAAIg4CKg");
	this.shape_440.setTransform(612.625,385.75);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_441.setTransform(595.35,391.65);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_442.setTransform(591.175,386.8);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_443.setTransform(584.1021,388.2);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_444.setTransform(574.575,388.3274);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAFADAWIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_445.setTransform(562.9588,388.1769);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_446.setTransform(551.4021,388.2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_447.setTransform(541.45,388.325);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_448.setTransform(534.4,388.2);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_449.setTransform(528.675,386.175);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_450.setTransform(522.375,388.575);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_451.setTransform(513.4521,388.2);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSABgFAVg");
	this.shape_452.setTransform(503.925,388.3274);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_453.setTransform(1069.5,363.2);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_454.setTransform(1063.775,361.175);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_455.setTransform(1056.875,363.3274);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_456.setTransform(1047.6021,360.15);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_457.setTransform(1040.975,361.8);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_458.setTransform(1026.6,363.325);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_459.setTransform(1019.475,361.8);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_460.setTransform(1012.4021,363.2);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_461.setTransform(1005.625,361.175);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_462.setTransform(991.25,360.25);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_463.setTransform(981.5521,363.2);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_464.setTransform(972.025,363.3274);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_465.setTransform(965.175,360.15);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_466.setTransform(958.05,360.25);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_467.setTransform(940.55,363.325);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_468.setTransform(933.425,361.8);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_469.setTransform(917.4588,363.1769);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_470.setTransform(905.775,363.3274);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_471.setTransform(896.175,363.3274);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_472.setTransform(887.9273,363.3433);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_473.setTransform(872.95,365.6);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_474.setTransform(863.575,363.3274);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_475.setTransform(854.2521,360.15);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_476.setTransform(847.675,361.8);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_477.setTransform(835.625,367.95);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_478.setTransform(830.5273,363.3433);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_479.setTransform(824.825,361.175);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_480.setTransform(818.0521,360.15);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_481.setTransform(811.475,361.8);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_482.setTransform(800.3,360.05);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_483.setTransform(792.3,363.325);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_484.setTransform(775.475,363.3274);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_485.setTransform(767.2273,363.3433);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_486.setTransform(759,363.4261);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_487.setTransform(748.8,363.325);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQACAfAaAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_488.setTransform(739.45,363.3263);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_489.setTransform(730.225,363.3274);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#01395B").s().p("AgGBDIghAAIAAiFIAYAAQAOgBAQAKQAJAEADAXQACAMgPAOQAaAKgBAXQgBAUgNAJQgOAJgMAAIgFAAgAgYA1IARAAQAMABAKgHQAJgGAAgMQgCgQgJgEQgHgEgPAAIgPAAgAgYgHIALAAQASAEAHgaQgBgQgKgEQgJgDgEAAIgMAAg");
	this.shape_490.setTransform(720.5018,360.7806);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#01395B").s().p("AgPAAQABgOAOgBQAOABABAOQgBAOgOABQgOgBgBgOg");
	this.shape_491.setTransform(705.55,366.1);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#01395B").s().p("AgdAtIAAhWIAYAAIAAANQAHgLADgBQAGgEAIAAIALACIgDAXQgFgDgGAAQgIgBgIAIQgFAJAAAJIAAAqg");
	this.shape_492.setTransform(701.05,362.975);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#01395B").s().p("AgfAiQgOgNABgVQACgYALgJQAQgNAQABQAZACAIAMQAMATgBAOIAAACIhAAAQAAAJAEAGQAEAHANABQAOAAAGgLIAWADQAAATgqAIIgCAAQgTAAgMgMgAgSgKIAoAAQgFgSgQAAQgOABgFARg");
	this.shape_493.setTransform(691.6575,363.0935);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#01395B").s().p("AgPA6IAAhBIgKAAIAAgUIAKAAIAAgeIAYAAIAAAeIARAAIAAAUIgRAAIAABBg");
	this.shape_494.setTransform(683.8,361.6);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#01395B").s().p("AgCAuQgqgEgDgqQADgpApgEQALgDAQARIAAgLIAYAAIAABVIgYAAIAAgLQgOAOgKAAIgCAAgAgVAAQACAXAUABQAXgBABgXQgBgWgXgBQgUABgCAWg");
	this.shape_495.setTransform(675.1,363.1);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#01395B").s().p("AAXArIgXgyIgWAyIgMAAIgshVIAbAAIAXAxIAXgxIALAAIAXAxIAXgxIAbAAIgsBVg");
	this.shape_496.setTransform(661.925,363.075);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#01395B").s().p("AgsBBIBPiIIAKAGIhPCJgAAEAkQACgdAfgCQAhACACAdQgCAeghACQgfgCgCgegAAVAkQABARAPABQAQgBABgRQgBgQgQgBQgPABgBAQgAhHgkQACgeAggCQAhACAAAeQAAAdghACQgggCgCgdgAg1gkQAAAQAQABQAQgBABgQQgBgQgQgCQgQACAAAQg");
	this.shape_497.setTransform(639.55,360.825);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#01395B").s().p("AgfA/QgIgFgIgHIAJgWQAFAHAJAFQAJAFAKAAQAPgCAEgGQAHgGAAgOQABgLgIgHQgLgHgJABQgOAAgPAIIAQhFIA8AAIAAAWIgrAAIgFAVIAIgBQAWABANANQAOARgDAOQABAVgOAOQgQAOgUgBIgDAAQgLAAgPgFg");
	this.shape_498.setTransform(625.7189,360.9317);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#01395B").s().p("AgZA8IAfgqQgGADgHAAQgQAAgOgLQgLgKgBgVQgBgSANgPQARgQAUABQAVgBARAPQAMAKABAWQgBAXgQASIgmA0gAgQgpQgGAEgBANQAAAMAHAHQAIAGAIgBQALAAAHgGQAHgHAAgKQgBgNgGgFQgGgGgMgBQgLABgFAGg");
	this.shape_499.setTransform(614.749,360.7932);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#01395B").s().p("AgfAiQgOgNABgVQACgYALgJQAQgNAQABQAZACAIAMQAMATgBAOIAAACIhAAAQAAAJAEAGQAEAHANABQAOAAAGgLIAWADQAAATgqAIIgCAAQgTAAgMgMgAgSgKIAoAAQgFgSgQAAQgOABgFARg");
	this.shape_500.setTransform(597.1075,363.0935);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#01395B").s().p("AgdAtIAAhWIAYAAIAAANQAHgLADgBQAGgEAIAAIALACIgDAXQgFgDgGAAQgIgBgIAIQgFAJAAAJIAAAqg");
	this.shape_501.setTransform(589.25,362.975);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#01395B").s().p("AgCAuQgqgEgDgqQADgpApgEQALgDAQARIAAgLIAYAAIAABVIgYAAIAAgLQgOAOgKAAIgCAAgAgVAAQACAXAUABQAXgBABgXQgBgWgXgBQgUABgCAWg");
	this.shape_502.setTransform(579.15,363.1);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#01395B").s().p("AARBJIAAgwQACgIgGgIQgHgFgFAAQgIAAgGAIQgEAIABAJIAAAsIgZAAIAAiRIAZAAIAABGQAGgMATgBQAOgBAMALQAIALgBANIAAA2g");
	this.shape_503.setTransform(561.5809,360.15);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#01395B").s().p("AAAAuQgagCgIgMIANgPQAIAJALABQAKAAABgJQgBgIgGgBIgFgCQgKgDgJgGQgGgHAAgKQABgNAIgHQALgHAKABQALgBARAKIgMAPQgJgHgFABQgIAAgBAHQgBAEAIAEIAGABQAMADAKAJQAEAGAAAIQABAMgKAKQgKAJgOAAIgBAAg");
	this.shape_504.setTransform(552.2512,363.0919);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#01395B").s().p("AAVBKIAAhVIAYAAIAABVgAgkBKIAAhBIgJAAIAAgUIAJAAIAAgWQgBgNAIgMQAKgOAXgBQAUgCAPARQAIAPgCAKIAAAGIgYAAIAAgFQABgGgEgGQgGgIgIABQgFgBgHAIQgDAGAAAGIAAAVIAVAAIAAAUIgVAAIAABBg");
	this.shape_505.setTransform(542.47,359.9892);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#01395B").s().p("AgrBCIAgg7IgqhIIAdAAIAZAxIAZgxIAcAAIhGCDg");
	this.shape_506.setTransform(532.25,365.375);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#01395B").s().p("AgLBJIAAiRIAXAAIAACRg");
	this.shape_507.setTransform(524.475,360.15);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#01395B").s().p("AgLBJIAAiRIAXAAIAACRg");
	this.shape_508.setTransform(519.725,360.15);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#01395B").s().p("AgfAiQgOgNABgVQACgYALgJQAQgNAQABQAZACAIAMQAMATgBAOIAAACIhAAAQAAAJAEAGQAEAHANABQAOAAAGgLIAWADQAAATgqAIIgCAAQgTAAgMgMgAgSgKIAoAAQgFgSgQAAQgOABgFARg");
	this.shape_509.setTransform(512.1075,363.0935);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#01395B").s().p("AghA4IAQgTQADAGAKABQAHgBACgEQAEgIgBgNIAAhVIAaAAIAABZQADAVgTATQgJAGgMAAIgBAAQgOAAgPgMg");
	this.shape_510.setTransform(502.0272,360.9259);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_511.setTransform(850.9,316.65);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_512.setTransform(841.7588,313.1769);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_513.setTransform(830.125,313.3274);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_514.setTransform(820.8021,310.15);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_515.setTransform(814.225,311.8);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_516.setTransform(801.6,310.25);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_517.setTransform(791.9521,313.2);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_518.setTransform(782.55,313.4261);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_519.setTransform(772.65,313.325);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_520.setTransform(765.65,313.2);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_521.setTransform(756.45,313.325);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_522.setTransform(744.925,311.8);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_523.setTransform(737.8521,313.2);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_524.setTransform(728.325,313.3274);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_525.setTransform(716.7088,313.1769);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_526.setTransform(705.1521,313.2);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_527.setTransform(695.2,313.325);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_528.setTransform(688.15,313.2);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_529.setTransform(682.425,311.175);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_530.setTransform(676.075,313.575);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_531.setTransform(667.1521,313.2);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_532.setTransform(657.675,313.3274);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_533.setTransform(645.9,313.2);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_534.setTransform(640.175,311.175);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_535.setTransform(633.275,313.3274);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_536.setTransform(624.0021,310.15);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_537.setTransform(617.375,311.8);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_538.setTransform(605.6521,313.2);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_539.setTransform(598.875,311.175);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_540.setTransform(588.6773,313.3433);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_541.setTransform(580.275,313.3274);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_542.setTransform(569.974,315.5);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_543.setTransform(560.2521,313.2);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_544.setTransform(550,313.325);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_545.setTransform(540.3521,310.15);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_546.setTransform(531.25,313.3263);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_547.setTransform(517.375,313.3274);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_548.setTransform(508.1021,310.15);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_549.setTransform(501.475,311.8);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_550.setTransform(1066.5,288.325);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_551.setTransform(1059.375,286.8);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_552.setTransform(1046.95,285.25);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_553.setTransform(1037.2521,288.2);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_554.setTransform(1027.3,288.325);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_555.setTransform(1017.1,290.4831);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_556.setTransform(1008.1273,288.3433);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_557.setTransform(999.725,288.3274);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_558.setTransform(993.1,288.2);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_559.setTransform(979.7,288.325);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_560.setTransform(972.575,286.8);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_561.setTransform(963.775,286.8);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_562.setTransform(956.575,288.3274);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_563.setTransform(947.0521,288.2);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_564.setTransform(933.025,288.3274);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_565.setTransform(923.975,288.575);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_566.setTransform(917.05,288.2);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_567.setTransform(908.575,288.3274);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_568.setTransform(899.1021,288.2);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_569.setTransform(884.35,288.325);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_570.setTransform(870.025,288.3274);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_571.setTransform(861.7773,288.3433);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_572.setTransform(853.5,288.4261);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_573.setTransform(839.75,290.6);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_574.setTransform(830.325,288.3274);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_575.setTransform(821.0021,285.15);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_576.setTransform(814.425,286.8);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_577.setTransform(801.95,285.25);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_578.setTransform(792.3021,288.2);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#01395B").s().p("AAtBGIgQgmIg4AAIgQAmIgRAAIA9iLIA7CLgAgWASIAtAAIgWg0g");
	this.shape_579.setTransform(781.35,285.45);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_580.setTransform(768.35,291.65);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_581.setTransform(764.175,286.8);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_582.setTransform(759.1,288.2);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_583.setTransform(749.95,288.325);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_584.setTransform(740.125,288.3274);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_585.setTransform(730.8521,285.15);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgYAAgCAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_586.setTransform(716.05,288.325);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_587.setTransform(701.05,285.25);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_588.setTransform(691.225,288.3274);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_589.setTransform(681.625,288.3274);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_590.setTransform(672.1021,288.2);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_591.setTransform(660.975,286.8);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_592.setTransform(653.35,288.325);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_593.setTransform(643.4521,288.2);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_594.setTransform(628.95,288.325);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_595.setTransform(618.2,285.25);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_596.setTransform(604.1,290.6);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_597.setTransform(594.675,288.3274);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_598.setTransform(585.3521,285.15);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_599.setTransform(578.775,286.8);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_600.setTransform(566.6,288.325);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_601.setTransform(557.9273,288.3433);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_602.setTransform(546.925,292.95);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_603.setTransform(539.75,285.25);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_604.setTransform(529.5,288.325);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_605.setTransform(519,288.325);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_606.setTransform(511.725,285.15);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_607.setTransform(504.6,285.25);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_608.setTransform(1067.15,265.6);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_609.setTransform(1057.8521,263.2);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_610.setTransform(1047.65,263.325);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_611.setTransform(1032.025,263.3274);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_612.setTransform(1022.925,263.575);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_613.setTransform(1013.2,263.325);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_614.setTransform(1003.5021,260.15);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_615.setTransform(991.075,261.8);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_616.setTransform(983.45,263.325);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_617.setTransform(973.5021,263.2);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_618.setTransform(957.7,263.325);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_619.setTransform(946.95,260.25);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_620.setTransform(931.55,265.6);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_621.setTransform(922.125,263.3274);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_622.setTransform(912.8021,260.15);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#01395B").s().p("AgGBDIAAh3IghAAIAAgOIBPAAIAAAOIghAAIAAB3g");
	this.shape_623.setTransform(905.275,260.775);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_624.setTransform(892.9,266.65);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_625.setTransform(887.1773,263.3433);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_626.setTransform(878.074,265.5);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_627.setTransform(868.3521,263.2);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_628.setTransform(859,263.4261);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_629.setTransform(852.275,260.15);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_630.setTransform(838.8,260.25);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_631.setTransform(829.025,263.3274);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_632.setTransform(819.425,263.3274);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_633.setTransform(809.9021,263.2);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_634.setTransform(797.475,261.8);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_635.setTransform(789.85,263.325);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_636.setTransform(779.9021,263.2);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_637.setTransform(764.1,263.325);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_638.setTransform(753.35,260.25);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_639.setTransform(737.95,265.6);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_640.setTransform(728.525,263.3274);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_641.setTransform(719.2021,260.15);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_642.setTransform(712.625,261.8);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_643.setTransform(699.15,263.325);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_644.setTransform(690.4773,263.3433);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_645.setTransform(678.125,267.95);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_646.setTransform(674.575,261.8);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_647.setTransform(670.125,261.175);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_648.setTransform(657.5021,260.15);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_649.setTransform(647.274,265.5);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_650.setTransform(637.6,263.4261);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_651.setTransform(627.7,263.325);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_652.setTransform(620.7,263.2);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_653.setTransform(612.3521,260.15);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_654.setTransform(605.725,261.8);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_655.setTransform(595.625,261.8);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_656.setTransform(588.5521,260.15);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_657.setTransform(578.324,265.5);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_658.setTransform(571.225,261.175);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_659.setTransform(566.9,263.2);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_660.setTransform(552.7021,263.2);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_661.setTransform(543.175,263.3274);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_662.setTransform(532.874,265.5);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_663.setTransform(523.25,265.6);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#01395B").s().p("AAaApIgagiIgZAiIgSAAIAkgrIgfgnIASAAIAUAcIAWgcIASAAIgfAnIAjArg");
	this.shape_664.setTransform(514.125,263.3);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_665.setTransform(504.35,263.325);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_666.setTransform(1066.75,235.25);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_667.setTransform(1059,238.2);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_668.setTransform(1050.1,238.325);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_669.setTransform(1041.4273,238.3433);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_670.setTransform(1032.8,235.25);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_671.setTransform(1021.75,238.325);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_672.setTransform(1006.6521,238.2);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_673.setTransform(996.45,238.325);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_674.setTransform(987.05,238.3263);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_675.setTransform(972.6021,238.2);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_676.setTransform(965.825,236.175);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#01395B").s().p("AAQBJIgggmIgEAEIAAAiIgOAAIAAiRIAOAAIAABdIAegeIATAAIgjAiIApAwg");
	this.shape_677.setTransform(960.15,235.15);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_678.setTransform(951.8273,238.3433);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_679.setTransform(940.6,238.2);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_680.setTransform(934.825,236.175);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_681.setTransform(927.975,238.3274);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_682.setTransform(918.6521,235.15);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#01395B").s().p("AgGBDIAAh3IghAAIAAgOIBPAAIAAAOIghAAIAAB3g");
	this.shape_683.setTransform(911.125,235.775);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#01395B").s().p("AgPAAQABgOAOgBQAOABABAOQgBAOgOABQgOgBgBgOg");
	this.shape_684.setTransform(898.9,241.1);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#01395B").s().p("AARAtIAAgvQACgIgGgJQgHgFgFABQgIAAgGAIQgEAIABAHIAAAtIgZAAIAAhWIAZAAIAAALQAGgMATgCQAOgBAMAMQAIALgBANIAAA2g");
	this.shape_685.setTransform(891.0809,237.971);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#01395B").s().p("AgLBFIAAhWIAYAAIAABWgAgOg2QACgNAMgBQANABABANQgBAOgNABQgMgBgCgOg");
	this.shape_686.setTransform(883.35,235.55);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#01395B").s().p("AgCAuQgqgEgDgqQADgpApgEQALgDAQARIAAgLIAYAAIAABVIgYAAIAAgLQgOAOgKAAIgCAAgAgVAAQACAXAUABQAXgBABgXQgBgWgXgBQgUABgCAWg");
	this.shape_687.setTransform(875.05,238.1);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#01395B").s().p("AgdAtIAAhWIAYAAIAAANQAHgLADgBQAGgEAIAAIALACIgDAXQgFgDgGAAQgIgBgIAIQgFAJAAAJIAAAqg");
	this.shape_688.setTransform(866.75,237.975);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#01395B").s().p("AgWA8IAAAMIgZAAIAAiRIAZAAIAABGQAPgQAMACQAoADADAqQgDArgoADIgEAAQgJAAgOgOgAgZAcQACAXAWACQAWgCACgXQgCgWgWgCQgWACgCAWg");
	this.shape_689.setTransform(857.1,235.2975);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#01395B").s().p("AgCAuQgqgEgDgqQADgpApgEQALgDAQARIAAgLIAYAAIAABVIgYAAIAAgLQgOAOgKAAIgCAAgAgVAAQACAXAUABQAXgBABgXQgBgWgXgBQgUABgCAWg");
	this.shape_690.setTransform(839.85,238.1);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#01395B").s().p("AgdAtIAAhWIAYAAIAAANQAHgLADgBQAGgEAIAAIALACIgDAXQgFgDgGAAQgIgBgIAIQgFAJAAAJIAAAqg");
	this.shape_691.setTransform(825.95,237.975);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#01395B").s().p("AgiAiQgOgMgBgWQABgUAOgNQALgLAXgBQAZABAKALQAOANAAAUQAAAWgOAMQgKALgZABQgXAAgLgMgAgXAAQABAXAWABQAXgBABgXQgBgVgXgCQgWABgBAWg");
	this.shape_692.setTransform(816.1,238.1);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#01395B").s().p("AgVAaIAVg1IAWADIgbA0g");
	this.shape_693.setTransform(801.725,242.425);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#01395B").s().p("AAAAuQgagCgIgMIANgPQAIAJALABQAKAAABgJQgBgIgGgBIgFgCQgKgDgJgGQgGgHAAgKQABgNAIgHQALgHAKABQALgBARAKIgMAPQgJgHgFABQgIAAgBAHQgBAEAIAEIAGABQAMADAKAJQAEAGAAAIQABAMgKAKQgKAJgOAAIgBAAg");
	this.shape_694.setTransform(795.8012,238.0919);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#01395B").s().p("AgfA6QgKgKgEgQIAbAAQACAGAEAEQAIAGAGgBQAKgBAEgFQAIgIgBgLIAAgMQgPARgLgDQgRABgNgMQgMgKgCgYQABgVANgNQAMgLARgBQAXADAEALIAAgLIAYAAIAABSQACAUgOARQgIALgaACQgYgCgIgIgAgOgnQgHAFgBANQABAMAGAFQAIAHAIAAQAKAAAHgFQAHgIAAgLQAAgMgHgFQgHgHgKAAQgKABgFAFg");
	this.shape_695.setTransform(785.8625,240.275);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#01395B").s().p("AARAtIAAgvQACgIgGgJQgHgFgFABQgIAAgGAIQgEAIABAHIAAAtIgZAAIAAhWIAZAAIAAALQAGgMATgCQAOgBAMAMQAIALgBANIAAA2g");
	this.shape_696.setTransform(775.0809,237.971);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#01395B").s().p("AAAAtQgRAAgNgKQgNgOACgNIAAg0IAYAAIAAAwQgBAIAHAHQAEAFAHAAQAHAAAGgFQAFgHgBgIIAAgwIAZAAIAAA0QACANgMAOQgOAKgQAAIgCAAg");
	this.shape_697.setTransform(764.35,238.2261);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#01395B").s().p("AgLBJIAAiRIAXAAIAACRg");
	this.shape_698.setTransform(756.625,235.15);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#01395B").s().p("AgVAaIAVg1IAWADIgbA0g");
	this.shape_699.setTransform(745.575,242.425);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#01395B").s().p("AgPA6IAAhBIgKAAIAAgUIAKAAIAAgeIAYAAIAAAeIARAAIAAAUIgRAAIAABBg");
	this.shape_700.setTransform(741.05,236.6);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#01395B").s().p("AgdAtIAAhWIAYAAIAAANQAHgLADgBQAGgEAIAAIALACIgDAXQgFgDgGAAQgIgBgIAIQgFAJAAAJIAAAqg");
	this.shape_701.setTransform(734.6,237.975);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#01395B").s().p("AgCAuQgqgEgDgqQADgpApgEQALgDAQARIAAgLIAYAAIAABVIgYAAIAAgLQgOAOgKAAIgCAAgAgVAAQACAXAUABQAXgBABgXQgBgWgXgBQgUABgCAWg");
	this.shape_702.setTransform(724.55,238.1);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#01395B").s().p("AgfAiQgOgNABgVQACgYALgJQAQgNAQABQAZACAIAMQAMATgBAOIAAACIhAAAQAAAJAEAGQAEAHANABQAOAAAGgLIAWADQAAATgqAIIgCAAQgTAAgMgMgAgSgKIAoAAQgFgSgQAAQgOABgFARg");
	this.shape_703.setTransform(713.6575,238.0935);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#01395B").s().p("AARBJIAAgwQACgIgGgIQgHgFgFAAQgIAAgGAIQgEAIABAJIAAAsIgZAAIAAiRIAZAAIAABGQAGgMATgBQAOgBAMALQAIALgBANIAAA2g");
	this.shape_704.setTransform(703.2809,235.15);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#01395B").s().p("AgCAuQgqgEgDgqQADgpApgEQALgDAQARIAAgLIAYAAIAABVIgYAAIAAgLQgOAOgKAAIgCAAgAgVAAQACAXAUABQAXgBABgXQgBgWgXgBQgUABgCAWg");
	this.shape_705.setTransform(686.65,238.1);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#01395B").s().p("AgfAiQgOgNABgVQACgYALgJQAQgNAQABQAZACAIAMQAMATgBAOIAAACIhAAAQAAAJAEAGQAEAHANABQAOAAAGgLIAWADQAAATgqAIIgCAAQgTAAgMgMgAgSgKIAoAAQgFgSgQAAQgOABgFARg");
	this.shape_706.setTransform(670.5575,238.0935);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#01395B").s().p("AgGArIgrhVIAbAAIAWAwIAXgwIAbAAIgrBVg");
	this.shape_707.setTransform(660.45,238.075);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#01395B").s().p("AgCAuQgqgEgDgqQADgpApgEQALgDAQARIAAgLIAYAAIAABVIgYAAIAAgLQgOAOgKAAIgCAAgAgVAAQACAXAUABQAXgBABgXQgBgWgXgBQgUABgCAWg");
	this.shape_708.setTransform(649.5,238.1);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#01395B").s().p("AARBJIAAgwQACgIgGgIQgHgFgFAAQgIAAgGAIQgEAIABAJIAAAsIgZAAIAAiRIAZAAIAABGQAGgMATgBQAOgBAMALQAIALgBANIAAA2g");
	this.shape_709.setTransform(638.6809,235.15);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#01395B").s().p("AgPA6IAAhBIgKAAIAAgUIAKAAIAAgeIAYAAIAAAeIARAAIAAAUIgRAAIAABBg");
	this.shape_710.setTransform(625.3,236.6);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#01395B").s().p("AgiAiQgOgMgBgWQABgUAOgNQALgLAXgBQAZABAKALQAOANAAAUQAAAWgOAMQgKALgZABQgXAAgLgMgAgXAAQABAXAWABQAXgBABgXQgBgVgXgCQgWABgBAWg");
	this.shape_711.setTransform(616.85,238.1);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#01395B").s().p("AARAtIAAgvQACgIgGgJQgHgFgFABQgIAAgGAIQgEAIABAHIAAAtIgZAAIAAhWIAZAAIAAALQAGgMATgCQAOgBAMAMQAIALgBANIAAA2g");
	this.shape_712.setTransform(605.8309,237.971);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#01395B").s().p("AgiAiQgOgMgBgWQABgUAOgNQALgLAXgBQAZABAKALQAOANAAAUQAAAWgOAMQgKALgZABQgXAAgLgMgAgXAAQABAXAWABQAXgBABgXQgBgVgXgCQgWABgBAWg");
	this.shape_713.setTransform(589.4,238.1);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#01395B").s().p("AgCBKQgqgEgDgqQADgpApgEQALgCAQAQIAAhGIAYAAIAACRIgYAAIAAgMQgOAOgKAAIgCAAgAgVAcQACAXAUACQAXgCABgXQgBgWgXgCQgUACgCAWg");
	this.shape_714.setTransform(577.8,235.2915);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#01395B").s().p("AARBJIAAgwQACgIgGgIQgHgFgFAAQgIAAgGAIQgEAIABAJIAAAsIgZAAIAAiRIAZAAIAABGQAGgMATgBQAOgBAMALQAIALgBANIAAA2g");
	this.shape_715.setTransform(561.5809,235.15);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#01395B").s().p("AAAAuQgagCgIgMIANgPQAIAJALABQAKAAABgJQgBgIgGgBIgFgCQgKgDgJgGQgGgHAAgKQABgNAIgHQALgHAKABQALgBARAKIgMAPQgJgHgFABQgIAAgBAHQgBAEAIAEIAGABQAMADAKAJQAEAGAAAIQABAMgKAKQgKAJgOAAIgBAAg");
	this.shape_716.setTransform(552.2512,238.0919);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#01395B").s().p("AAVBKIAAhVIAYAAIAABVgAgkBKIAAhBIgJAAIAAgUIAJAAIAAgWQgBgNAIgMQAKgOAXgBQAUgCAPARQAIAPgCAKIAAAGIgYAAIAAgFQABgGgEgGQgGgIgIABQgFgBgHAIQgDAGAAAGIAAAVIAVAAIAAAUIgVAAIAABBg");
	this.shape_717.setTransform(542.47,234.9892);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#01395B").s().p("AgrBCIAgg7IgqhIIAdAAIAZAxIAZgxIAcAAIhGCDg");
	this.shape_718.setTransform(532.25,240.375);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#01395B").s().p("AgLBJIAAiRIAXAAIAACRg");
	this.shape_719.setTransform(524.475,235.15);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#01395B").s().p("AgLBJIAAiRIAXAAIAACRg");
	this.shape_720.setTransform(519.725,235.15);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#01395B").s().p("AgfAiQgOgNABgVQACgYALgJQAQgNAQABQAZACAIAMQAMATgBAOIAAACIhAAAQAAAJAEAGQAEAHANABQAOAAAGgLIAWADQAAATgqAIIgCAAQgTAAgMgMgAgSgKIAoAAQgFgSgQAAQgOABgFARg");
	this.shape_721.setTransform(512.1075,238.0935);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#01395B").s().p("AghA4IAQgTQADAGAKABQAHgBACgEQAEgIgBgNIAAhVIAaAAIAABZQADAVgTATQgJAGgMAAIgBAAQgOAAgPgMg");
	this.shape_722.setTransform(502.0272,235.9259);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#01395B").s().p("AggBEQADgXAWgCQAWACABAXQgBAWgWACQgWgCgDgWgAgXAcIAQh3IAnAAIgOB3g");
	this.shape_723.setTransform(636,183.675);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#01395B").s().p("AgHBeQgTABgRgJQgOgIgKgLIAXgeQAGAIAJAHQAJAFAMAAQAKABAJgGQAHgGABgLQgBgJgEgEQgCgBgMgGIgKgFQgJgCgRgNQgMgNAAgRQACgcAPgNQAXgTAYACQAYgCAcAUIgUAeQgSgOgNABQgJAAgIAFQgFAFAAAHQAAAJAFAEQAFAEANAFIAKAFQAOAFAKAMQAKALgBAQQgBAegRAQQgVASgYAAIgFAAg");
	this.shape_724.setTransform(624.275,183.3998);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#01395B").s().p("AgnBaIARiQIgnAAIAEgjIB3AAIgEAjIgoAAIgRCQg");
	this.shape_725.setTransform(612.6,183.45);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#01395B").s().p("AgyBGQgVgQgEguQACgvAbgaQAXgaAwgCQApAEAKAJIgFAsQgKgOgjgEQgagBgQASQgQATAAAWQABAYANANQANANAYABQAbgCAPgOIgFAtQgJAIgjACQgxgFgNgTg");
	this.shape_726.setTransform(597.325,183.4);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#01395B").s().p("AAwBaIgJgiIhDAAIgRAiIgtAAIBeizIAnAAIAwCzgAgMAYIAsAAIgPg/g");
	this.shape_727.setTransform(579.275,183.45);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#01395B").s().p("Ag8BaIAWizIBjAAIgEAjIg6AAIgEAjIA1AAIgEAiIg1AAIgKBLg");
	this.shape_728.setTransform(567.125,183.45);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#01395B").s().p("AApBaIhTh1IgOB1IgqAAIAXizIAkAAIBSB0IAOh0IAqAAIgWCzg");
	this.shape_729.setTransform(543.075,183.45);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#01395B").s().p("AgJBcQgeADgbgWQgRgQABgZIACgdIAMheIApAAIgMBhQgBAGAAAKQgBAMAJALQAHAHAQABQATgBAHgIQAMgQAAgSIAMhlIAqAAIgNBnQgBAigUAaQgbAUgXAAIgIAAg");
	this.shape_730.setTransform(523.1743,183.6855);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#01395B").s().p("Ag8BaIAWizIBjAAIgEAjIg6AAIgEAjIA1AAIgEAiIg1AAIgKBLg");
	this.shape_731.setTransform(507.125,183.45);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAvMAnmMheXAAAMAAAhPLMBeXAAAg");
	this.shape_732.setTransform(785.15,408.45);

	this.instance = new lib.Symbol153("synched",0);
	this.instance.setTransform(483.2,155.05);
	this.instance.alpha = 0.3984;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.funfactsinfoswf, new cjs.Rectangle(482.2,154.1,605.8999999999999,508.79999999999995), null);


(lib.fish01swf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(716));

	// Layer_9
	this.instance = new lib.Tween32("synched",0);
	this.instance.setTransform(-72.3,387.35);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({x:1428.2},555).to({_off:true},2).wait(60));

	// Layer_8
	this.instance_1 = new lib.Tween47("synched",0);
	this.instance_1.setTransform(1393,546.75);

	this.instance_2 = new lib.Tween48("synched",0);
	this.instance_2.setTransform(-31.7,546.75);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,x:-31.7},332).wait(384));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},332).wait(62).to({x:1400.2},0).to({x:-31.7},145).to({_off:true},1).wait(176));

	// Layer_7
	this.instance_3 = new lib.Tween43("synched",0);
	this.instance_3.setTransform(1411.75,494.25);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween44("synched",0);
	this.instance_4.setTransform(-41.55,494.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},276).to({state:[{t:this.instance_4}]},411).to({state:[]},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(276).to({_off:false},0).to({_off:true,x:-41.55},411).wait(29));

	// Layer_6
	this.instance_5 = new lib.Tween41("synched",0);
	this.instance_5.setTransform(1405.55,605.45);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween42("synched",0);
	this.instance_6.setTransform(-42.05,609.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},351).to({state:[{t:this.instance_6}]},239).to({state:[]},1).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(351).to({_off:false},0).to({_off:true,x:-42.05,y:609.55},239).wait(126));

	// Layer_5
	this.instance_7 = new lib.Tween35("synched",0);
	this.instance_7.setTransform(1403.15,528.75);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween36("synched",0);
	this.instance_8.setTransform(-47.35,528.75);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(38).to({_off:false},0).to({_off:true,x:-47.35},440).wait(238));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(38).to({_off:false},440).wait(16).to({x:1401.7},0).to({x:-35.9},221).wait(1));

	// Layer_4_copy
	this.instance_9 = new lib.Tween45("synched",0);
	this.instance_9.setTransform(-35.6,592.95);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween46("synched",0);
	this.instance_10.setTransform(1399.15,592.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},361).to({state:[{t:this.instance_10}]},348).to({state:[]},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(361).to({_off:false},0).to({_off:true,x:1399.15},348).wait(7));

	// Layer_4
	this.instance_11 = new lib.Tween45("synched",0);
	this.instance_11.setTransform(-35.6,592.95);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween46("synched",0);
	this.instance_12.setTransform(1399.15,592.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},202).to({state:[{t:this.instance_12}]},291).to({state:[]},2).wait(221));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(202).to({_off:false},0).to({_off:true,x:1399.15},291).wait(223));

	// Layer_3
	this.instance_13 = new lib.Tween30("synched",0);
	this.instance_13.setTransform(1436.05,463.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(155).to({_off:false},0).to({x:-67.3},469).to({_off:true},1).wait(91));

	// Layer_2
	this.instance_14 = new lib.Tween39("synched",0);
	this.instance_14.setTransform(-28.15,564.45);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween40("synched",0);
	this.instance_15.setTransform(1383.8,564.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},250).to({state:[{t:this.instance_15}]},289).to({state:[]},2).wait(175));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(250).to({_off:false},0).to({_off:true,x:1383.8},289).wait(177));

	// Layer_1
	this.instance_16 = new lib.Tween33("synched",0);
	this.instance_16.setTransform(-54.45,651.6);

	this.instance_17 = new lib.Tween34("synched",0);
	this.instance_17.setTransform(1407.4,651.6);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true,x:1407.4},335).wait(381));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:false},335).wait(32).to({x:-45.95},0).to({x:1408.85},233).to({_off:true},1).wait(115));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.3,369.4,1614.3999999999999,310.70000000000005);


(lib.dietinfo01swf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape.setTransform(1070.85,566.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_1.setTransform(1063.9021,560.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_2.setTransform(1057.325,561.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_3.setTransform(1050.25,563.4261);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_4.setTransform(1040.35,563.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_5.setTransform(1028.2588,563.1769);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_6.setTransform(1011.925,563.3274);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_7.setTransform(1002.6521,560.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_8.setTransform(996.025,561.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_9.setTransform(985.5273,563.3433);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_10.setTransform(976.4,560.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_11.setTransform(969.65,563.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_12.setTransform(960.45,563.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_13.setTransform(948.65,563.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_14.setTransform(936.6,563.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_15.setTransform(929.475,561.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_16.setTransform(916.9,560.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_17.setTransform(906.65,563.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_18.setTransform(896.15,563.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_19.setTransform(888.9,560.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_20.setTransform(876.675,563.3274);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_21.setTransform(867.3521,560.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_22.setTransform(860.775,561.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_23.setTransform(848.925,563.3274);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_24.setTransform(839.825,563.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_25.setTransform(830.35,563.325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_26.setTransform(818.3088,563.1769);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_27.setTransform(802.2,565.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_28.setTransform(795.475,560.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_29.setTransform(786.6,563.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_30.setTransform(774.55,563.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_31.setTransform(767.225,560.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_32.setTransform(761.6773,563.3433);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_33.setTransform(748.2,563.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_34.setTransform(741.075,561.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_35.setTransform(730.5773,563.3433);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_36.setTransform(722.175,563.3274);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_37.setTransform(715.275,560.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQACAfAaAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_38.setTransform(708.8,563.3263);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgYAAgCAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_39.setTransform(698.9,563.325);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_40.setTransform(692.025,561.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_41.setTransform(684.9521,563.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_42.setTransform(675.425,563.3274);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_43.setTransform(668.725,561.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_44.setTransform(659.4,563.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_45.setTransform(653.675,561.175);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_46.setTransform(646.775,563.3274);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_47.setTransform(637.5021,560.15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_48.setTransform(630.875,561.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_49.setTransform(619.025,563.3274);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_50.setTransform(610.7773,563.3433);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_51.setTransform(602.5,563.4261);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_52.setTransform(588.5021,563.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_53.setTransform(578.975,563.3274);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_54.setTransform(569.7021,560.15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_55.setTransform(563.075,561.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_56.setTransform(551.3521,560.15);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_57.setTransform(543.1773,563.3433);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#01395B").s().p("AAWBKIAAhSIAOAAIAABSgAgbBKIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAAAEIgOAAIAAgEQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFg");
	this.shape_58.setTransform(534.6321,559.9875);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_59.setTransform(525.8,565.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_60.setTransform(519.125,560.15);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_61.setTransform(514.975,560.15);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_62.setTransform(508.075,563.3274);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#01395B").s().p("AgGBVIAAiAIANAAIAACAgAgJhKQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_63.setTransform(501.175,563.475);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_64.setTransform(1066.975,538.3274);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_65.setTransform(1057.6521,535.15);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#01395B").s().p("AgGBDIAAh3IghAAIAAgOIBPAAIAAAOIghAAIAAB3g");
	this.shape_66.setTransform(1050.125,535.775);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_67.setTransform(1035,541.65);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_68.setTransform(1027.174,540.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_69.setTransform(1017.5021,538.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_70.setTransform(1010.725,536.175);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_71.setTransform(1003.6,540.4831);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_72.setTransform(992.55,538.325);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_73.setTransform(983.2,538.3263);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_74.setTransform(975.3773,538.3433);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_75.setTransform(966.975,538.3274);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_76.setTransform(946.7088,538.1769);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_77.setTransform(934.6,538.325);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_78.setTransform(927.6,538.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_79.setTransform(921.9,535.05);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_80.setTransform(908.625,536.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_81.setTransform(904.175,536.175);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_82.setTransform(888.45,540.4831);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_83.setTransform(878.125,538.3274);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_84.setTransform(868.525,538.3274);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#01395B").s().p("AAQBJIgggmIgEAEIAAAiIgOAAIAAiRIAOAAIAABdIAegeIATAAIgjAiIApAwg");
	this.shape_85.setTransform(860.35,535.15);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_86.setTransform(843.4273,538.3433);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_87.setTransform(837.725,535.15);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_88.setTransform(833.575,535.15);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_89.setTransform(826.675,538.3274);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_90.setTransform(817.5,538.3263);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_91.setTransform(802.25,538.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_92.setTransform(793.775,538.3274);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_93.setTransform(783.474,540.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_94.setTransform(773.7521,538.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_95.setTransform(766.975,536.175);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_96.setTransform(763.025,536.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_97.setTransform(757.1773,538.3433);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_98.setTransform(742.9,535.05);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_99.setTransform(734.9,538.325);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_100.setTransform(717.6273,538.3433);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_101.setTransform(708.5,535.25);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_102.setTransform(698.8021,538.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgYAAgCAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_103.setTransform(688.6,538.325);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_104.setTransform(680.1273,538.3433);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_105.setTransform(671.9,538.4261);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_106.setTransform(662,538.325);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_107.setTransform(652.3521,535.15);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_108.setTransform(645.775,536.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_109.setTransform(629.975,538.3274);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_110.setTransform(620.6521,535.15);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_111.setTransform(614.075,536.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_112.setTransform(600.175,542.95);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_113.setTransform(595.0273,538.3433);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_114.setTransform(586.625,538.3274);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_115.setTransform(579.775,535.15);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_116.setTransform(573.3,538.3263);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_117.setTransform(563.4,538.325);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_118.setTransform(556.525,536.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_119.setTransform(549.4021,538.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_120.setTransform(539.925,538.3274);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_121.setTransform(533.225,536.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_122.setTransform(517.375,538.3274);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_123.setTransform(508.1021,535.15);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_124.setTransform(501.475,536.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_125.setTransform(1068.3273,513.3433);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_126.setTransform(1059.925,513.3274);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_127.setTransform(1050.6021,510.15);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_128.setTransform(1041.55,513.3263);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_129.setTransform(1032.5,513.4261);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_130.setTransform(1022.6,513.325);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_131.setTransform(1015.475,511.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_132.setTransform(1004.35,515.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_133.setTransform(994.975,513.3274);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_134.setTransform(988.35,513.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_135.setTransform(979.7,515.4831);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_136.setTransform(966.6273,513.3433);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_137.setTransform(961.175,511.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_138.setTransform(956.675,511.175);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_139.setTransform(945.8021,513.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_140.setTransform(936.275,513.3274);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_141.setTransform(927.0021,510.15);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#01395B").s().p("AAAggIgqBpIgziKIAQAAIAjBjIAqhrIAnBrIAnhjIAQAAIg4CKg");
	this.shape_142.setTransform(913.875,510.75);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_143.setTransform(897.9,516.65);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_144.setTransform(890.1,510.25);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_145.setTransform(879.85,513.325);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_146.setTransform(869.4,513.325);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_147.setTransform(862.1,510.05);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_148.setTransform(853,513.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_149.setTransform(847.225,511.175);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_150.setTransform(840.375,513.3274);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_151.setTransform(831.0521,510.15);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_152.setTransform(824.475,511.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_153.setTransform(813.2521,510.15);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_154.setTransform(804.2,513.3263);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_155.setTransform(797.925,511.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_156.setTransform(790,513.325);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_157.setTransform(780.6,513.3263);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_158.setTransform(766.9,513.325);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_159.setTransform(759.775,511.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_160.setTransform(749.8273,513.3433);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_161.setTransform(744.325,511.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_162.setTransform(737.125,513.3274);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_163.setTransform(727.6521,513.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_164.setTransform(715.3773,513.3433);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_165.setTransform(706.25,513.325);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_166.setTransform(693.7273,513.3433);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_167.setTransform(685.325,513.3274);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_168.setTransform(678.425,510.15);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_169.setTransform(671.95,513.3263);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_170.setTransform(662.05,513.325);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_171.setTransform(655.175,511.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_172.setTransform(648.1021,513.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_173.setTransform(638.575,513.3274);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_174.setTransform(631.875,511.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_175.setTransform(623.1,513.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_176.setTransform(617.375,511.175);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_177.setTransform(610.475,513.3274);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_178.setTransform(601.2021,510.15);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_179.setTransform(594.575,511.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_180.setTransform(583.275,513.3274);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_181.setTransform(575.0273,513.3433);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_182.setTransform(566.75,513.4261);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_183.setTransform(553.3021,510.15);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_184.setTransform(545.1773,513.3433);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#01395B").s().p("AAWBKIAAhSIAOAAIAABSgAgbBKIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAAAEIgOAAIAAgEQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFg");
	this.shape_185.setTransform(536.5821,509.9875);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_186.setTransform(527.75,515.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_187.setTransform(521.075,510.15);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_188.setTransform(516.925,510.15);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_189.setTransform(510.025,513.3274);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#01395B").s().p("AgaA6IAIgMQAIAIAIAAQAFAAAEgEQAGgJgBgNIAAhfIAOAAIAABfQACASgKAOQgGAHgOABQgPAAgJgKg");
	this.shape_190.setTransform(500.8667,510.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_191.setTransform(723.25,466.65);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_192.setTransform(716.3021,460.15);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_193.setTransform(708.1273,463.3433);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#01395B").s().p("AAWBKIAAhSIAOAAIAABSgAgbBKIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAAAEIgOAAIAAgEQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFg");
	this.shape_194.setTransform(699.5821,459.9875);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_195.setTransform(690.75,465.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_196.setTransform(684.075,460.15);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_197.setTransform(679.925,460.15);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_198.setTransform(673.025,463.3274);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#01395B").s().p("AgGBVIAAiAIANAAIAACAgAgJhKQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_199.setTransform(666.125,463.475);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_200.setTransform(657.1,463.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_201.setTransform(648.675,463.3274);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_202.setTransform(639.3521,460.15);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_203.setTransform(632.775,461.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_204.setTransform(625.1,463.325);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_205.setTransform(609.7,460.25);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_206.setTransform(600.0021,463.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_207.setTransform(589.75,463.325);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_208.setTransform(577.225,467.95);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_209.setTransform(572.1273,463.3433);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_210.setTransform(563.725,463.3274);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_211.setTransform(556.825,460.15);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_212.setTransform(550.35,463.3263);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_213.setTransform(540.45,463.325);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_214.setTransform(530.7521,463.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_215.setTransform(523.8,463.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_216.setTransform(514.6,463.325);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_217.setTransform(504.6,460.25);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_218.setTransform(1068.875,442.95);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_219.setTransform(1063.7773,438.3433);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#01395B").s().p("AAQBJIgggmIgEAEIAAAiIgOAAIAAiRIAOAAIAABdIAegeIATAAIgjAiIApAwg");
	this.shape_220.setTransform(1056.6,435.15);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_221.setTransform(1048.2773,438.3433);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_222.setTransform(1040.05,438.4261);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_223.setTransform(1033.275,435.15);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_224.setTransform(1029.125,435.15);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_225.setTransform(1021.8,438.325);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_226.setTransform(1009.7588,438.1769);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_227.setTransform(989.975,442.95);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_228.setTransform(983.3,440.4831);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_229.setTransform(970.9588,438.1769);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_230.setTransform(962.025,436.175);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_231.setTransform(957.65,438.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_232.setTransform(949.3021,435.15);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_233.setTransform(941.1773,438.3433);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_234.setTransform(924.675,442.95);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_235.setTransform(920.925,435.15);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_236.setTransform(916.775,435.15);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_237.setTransform(912.625,436.175);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_238.setTransform(908.3,438.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#01395B").s().p("AAQBJIgggmIgEAEIAAAiIgOAAIAAiRIAOAAIAABdIAegeIATAAIgjAiIApAwg");
	this.shape_239.setTransform(901.05,435.15);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_240.setTransform(881.375,438.3274);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_241.setTransform(874.8,438.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_242.setTransform(865.6,438.325);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_243.setTransform(845.9021,438.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_244.setTransform(835.95,438.325);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_245.setTransform(828.825,436.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#01395B").s().p("AAQBJIgggmIgEAEIAAAiIgOAAIAAiRIAOAAIAABdIAegeIATAAIgjAiIApAwg");
	this.shape_246.setTransform(822.85,435.15);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_247.setTransform(813.3021,438.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_248.setTransform(803.1,438.325);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_249.setTransform(796.025,435.15);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_250.setTransform(788.9,440.4831);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_251.setTransform(778.15,438.325);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_252.setTransform(767.7,438.325);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#01395B").s().p("AgsApIA8hFIgwAAIAAgNIBNAAIg8BGIA5AAIAAAMg");
	this.shape_253.setTransform(758.05,438.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_254.setTransform(741.4,435.05);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_255.setTransform(733.4,438.325);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_256.setTransform(714.7273,438.3433);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_257.setTransform(706.325,438.3274);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_258.setTransform(699.425,435.15);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_259.setTransform(692.35,440.4831);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_260.setTransform(680.0088,438.1769);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_261.setTransform(667.6,438.325);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#01395B").s().p("AAaApIgagiIgZAiIgSAAIAkgrIgfgnIASAAIAUAcIAWgcIASAAIgfAnIAjArg");
	this.shape_262.setTransform(658.075,438.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_263.setTransform(648.725,438.3274);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_264.setTransform(629.125,438.3274);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_265.setTransform(617.4588,438.1769);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_266.setTransform(605.35,438.325);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#01395B").s().p("AgcA6QgKgLgDgNIAPgEQACALAGAGQAIAIAKAAQAbgDAAgYQAAgJgHgGQgGgFgKgEIgLgFQgIgDgKgIQgJgIAAgOQADghAhgBQAMgBAKAHQAIAFAFAKIgMAHQgDgGgFgEQgDgDgMgBQgUABgBATQAAAIAFAEQAGAGAIACIAMAGQAMAFAIAHQAKAKAAAOQgDAngnACIgCAAQgNAAgNgLg");
	this.shape_267.setTransform(594.9262,435.7563);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_268.setTransform(577.5,441.65);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_269.setTransform(573.9,438.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_270.setTransform(565.475,438.3274);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_271.setTransform(558.725,436.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_272.setTransform(550.85,438.325);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_273.setTransform(539,438.25);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_274.setTransform(517.375,438.3274);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_275.setTransform(508.1021,435.15);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_276.setTransform(501.475,436.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_277.setTransform(1067.0521,413.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_278.setTransform(1060.275,411.175);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_279.setTransform(1048.774,415.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_280.setTransform(1039.0521,413.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_281.setTransform(1032.275,411.175);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_282.setTransform(1028.325,411.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_283.setTransform(1023.45,410.05);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_284.setTransform(1018.625,411.175);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_285.setTransform(1014.3,413.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_286.setTransform(1005.1,410.25);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_287.setTransform(992.7273,413.3433);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_288.setTransform(982.3088,413.1769);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_289.setTransform(971.9773,413.3433);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_290.setTransform(966.325,411.175);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_291.setTransform(959.5521,413.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_292.setTransform(949.3,413.325);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_293.setTransform(938.824,415.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_294.setTransform(932,413.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_295.setTransform(923.1,413.325);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_296.setTransform(909.35,415.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_297.setTransform(900.0521,413.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_298.setTransform(893.275,411.175);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_299.setTransform(889.325,411.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_300.setTransform(878.175,413.3274);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_301.setTransform(871.6,413.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_302.setTransform(862.4,413.325);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_303.setTransform(848.8021,410.15);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_304.setTransform(839.7,413.3263);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_305.setTransform(833.225,411.175);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_306.setTransform(826.4521,410.15);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_307.setTransform(814.9,413.25);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_308.setTransform(801.275,417.95);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_309.setTransform(794.9521,413.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_310.setTransform(785,413.325);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_311.setTransform(777.875,411.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#01395B").s().p("AAQBJIgggmIgEAEIAAAiIgOAAIAAiRIAOAAIAABdIAegeIATAAIgjAiIApAwg");
	this.shape_312.setTransform(771.9,410.15);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_313.setTransform(762.3521,413.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_314.setTransform(752.1,413.325);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_315.setTransform(745.025,410.15);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_316.setTransform(737.95,415.4831);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_317.setTransform(727.2,413.325);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_318.setTransform(716.7,413.325);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#01395B").s().p("AgsApIA8hFIgwAAIAAgNIBNAAIg8BGIA5AAIAAAMg");
	this.shape_319.setTransform(707.05,413.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_320.setTransform(696.625,411.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgYAAgCAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_321.setTransform(688.7,413.325);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_322.setTransform(678.925,413.3274);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_323.setTransform(665.6,415.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_324.setTransform(658.925,410.15);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_325.setTransform(654.725,410.15);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_326.setTransform(647.15,413.325);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_327.setTransform(637.75,413.3263);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_328.setTransform(631.325,411.175);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_329.setTransform(624.2,415.4831);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_330.setTransform(614.1,415.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_331.setTransform(607.025,411.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_332.setTransform(596.0021,410.15);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_333.setTransform(587.8273,413.3433);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#01395B").s().p("AAWBKIAAhSIAOAAIAABSgAgbBKIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAAAEIgOAAIAAgEQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFg");
	this.shape_334.setTransform(579.2821,409.9875);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_335.setTransform(570.45,415.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_336.setTransform(563.775,410.15);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_337.setTransform(559.625,410.15);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_338.setTransform(552.725,413.3274);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#01395B").s().p("AgGBVIAAiAIANAAIAACAgAgJhKQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_339.setTransform(545.825,413.475);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_340.setTransform(537.925,411.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_341.setTransform(533.475,410.15);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_342.setTransform(526.7,413.4261);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_343.setTransform(516.55,410.25);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#01395B").s().p("AAtBGIgQgmIg4AAIgQAmIgRAAIA9iLIA7CLgAgWASIAtAAIgWg0g");
	this.shape_344.setTransform(505.3,410.45);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_345.setTransform(812.9,366.65);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_346.setTransform(805.825,363.3274);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#01395B").s().p("AgsApIA8hFIgwAAIAAgNIBNAAIg8BGIA5AAIAAAMg");
	this.shape_347.setTransform(796.6,363.3);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_348.setTransform(789.925,361.175);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_349.setTransform(784.3773,363.3433);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_350.setTransform(774.075,360.15);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_351.setTransform(769.875,360.15);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_352.setTransform(762.3,363.325);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_353.setTransform(750.4588,363.1769);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_354.setTransform(740.1273,363.3433);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_355.setTransform(727.3,365.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_356.setTransform(719.8,363.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_357.setTransform(711.325,363.3274);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_358.setTransform(702.275,363.575);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_359.setTransform(691.15,363.2);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_360.setTransform(685.375,361.175);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_361.setTransform(678.525,363.3274);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_362.setTransform(669.2021,360.15);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_363.setTransform(662.625,361.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_364.setTransform(653.5,360.05);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_365.setTransform(645.5,363.325);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_366.setTransform(630.825,363.3274);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_367.setTransform(622.5773,363.3433);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_368.setTransform(614.3,363.4261);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_369.setTransform(604.1,363.325);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_370.setTransform(594.75,363.3263);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_371.setTransform(585.575,363.3274);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_372.setTransform(575.75,360.25);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_373.setTransform(560.05,360.25);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_374.setTransform(550.225,363.3274);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_375.setTransform(543.525,361.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_376.setTransform(539.075,361.175);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_377.setTransform(530.1588,363.1769);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_378.setTransform(521.225,361.175);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_379.setTransform(517.025,360.15);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_380.setTransform(506.8773,363.3433);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_381.setTransform(501.175,361.175);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_382.setTransform(1066.975,338.3274);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_383.setTransform(1057.75,338.3263);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_384.setTransform(1051.6,338.2);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_385.setTransform(1043.3,338.4261);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_386.setTransform(1033.4,338.325);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_387.setTransform(1024.6773,338.3433);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_388.setTransform(1010.55,335.25);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_389.setTransform(1000.35,338.325);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_390.setTransform(989.85,338.325);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_391.setTransform(982.55,335.05);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_392.setTransform(972.55,338.2);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_393.setTransform(966.825,336.175);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_394.setTransform(959.925,338.3274);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_395.setTransform(950.6021,335.15);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#01395B").s().p("AgGBDIAAh3IghAAIAAgOIBPAAIAAAOIghAAIAAB3g");
	this.shape_396.setTransform(943.075,335.775);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_397.setTransform(931.55,341.65);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_398.setTransform(924.475,338.3274);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_399.setTransform(914.1,338.325);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_400.setTransform(904.875,338.575);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_401.setTransform(897.95,338.2);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_402.setTransform(888.75,338.325);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_403.setTransform(881.725,335.15);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_404.setTransform(872.35,338.2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_405.setTransform(863.45,338.325);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_406.setTransform(849.7773,338.3433);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_407.setTransform(840.674,340.5);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_408.setTransform(830.124,340.5);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_409.setTransform(820.325,338.3274);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_410.setTransform(804.95,335.25);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_411.setTransform(795.3021,338.2);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_412.setTransform(785.05,338.325);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_413.setTransform(771.5773,338.3433);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_414.setTransform(763.175,338.3274);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_415.setTransform(756.325,335.15);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_416.setTransform(749.85,338.3263);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_417.setTransform(743.375,336.175);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_418.setTransform(739.425,336.8);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_419.setTransform(734.35,338.2);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgYAAgCAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_420.setTransform(725.15,338.325);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#01395B").s().p("AgpBCIAAiAIAPAAIAAALQARgQALADQAnAFAAAnQAAAmgnAEQgTgBgJgNIAAA6gAgbgUQABAbAaACQAagCABgbQgEgfgXAAQgXAAgEAfg");
	this.shape_421.setTransform(715.15,340.4831);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgYAAgCAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_422.setTransform(699.1,335.25);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_423.setTransform(688.9,338.325);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_424.setTransform(678.4,338.325);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_425.setTransform(671.1,335.05);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_426.setTransform(658.8,340.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_427.setTransform(649.5021,338.2);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_428.setTransform(642.675,336.175);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_429.setTransform(638.725,336.8);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_430.setTransform(629.425,336.8);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_431.setTransform(621.5,338.325);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_432.setTransform(611.725,338.3274);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_433.setTransform(597.2021,335.15);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_434.setTransform(589.0273,338.3433);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#01395B").s().p("AAWBKIAAhSIAOAAIAABSgAgbBKIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAAAEIgOAAIAAgEQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFg");
	this.shape_435.setTransform(580.4821,334.9875);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_436.setTransform(571.65,340.6);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_437.setTransform(564.975,335.15);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_438.setTransform(560.825,335.15);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_439.setTransform(553.925,338.3274);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#01395B").s().p("AgGBVIAAiAIANAAIAACAgAgJhKQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_440.setTransform(547.025,338.475);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_441.setTransform(535.35,340.6);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_442.setTransform(525.75,335.25);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_443.setTransform(514.7,338.325);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#01395B").s().p("AgGBDIghAAIAAiFIAYAAQAOgBAQAKQAJAEADAXQACAMgPAOQAaAKgBAXQgBAUgNAJQgOAJgMAAIgFAAgAgYA1IARAAQAMABAKgHQAJgGAAgMQgCgQgJgEQgHgEgPAAIgPAAgAgYgHIALAAQASAEAHgaQgBgQgKgEQgJgDgEAAIgMAAg");
	this.shape_444.setTransform(504.7518,335.7806);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_445.setTransform(1071,291.65);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_446.setTransform(1063.2,285.25);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_447.setTransform(1052.95,288.325);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_448.setTransform(1042.5,288.325);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#01395B").s().p("AgMBKIAAhGIgJAAIAAgMIAJAAIAAgkQgCgNAKgLQAFgFAKAAQAIAAADACIAAAOQgFgCgFAAQgFAAgEAFQgCAEAAAIIAAAiIAVAAIAAAMIgVAAIAABGg");
	this.shape_449.setTransform(1035.2,285.05);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_450.setTransform(1025.55,288.2);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_451.setTransform(1019.775,286.175);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_452.setTransform(1012.875,288.3274);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_453.setTransform(1003.6021,285.15);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_454.setTransform(997.025,286.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_455.setTransform(988.075,286.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_456.setTransform(981.0021,288.2);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_457.setTransform(971.6,288.4261);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_458.setTransform(962.2521,285.15);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_459.setTransform(948.3,290.6);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_460.setTransform(941.625,285.15);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_461.setTransform(934.725,288.3274);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_462.setTransform(925.675,288.575);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_463.setTransform(919.375,286.175);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_464.setTransform(915.375,286.8);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_465.setTransform(908.6,288.3263);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_466.setTransform(898.7,288.325);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_467.setTransform(887.175,286.8);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_468.setTransform(879.55,288.325);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_469.setTransform(869.6021,288.2);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_470.setTransform(855,288.325);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#01395B").s().p("AgpAeQAFgqAkAAQAWADAGAKIAAhKIANAAIAACRIgNAAIAAgMQgHAMgVACQgkAAgFgsgAABAAQgXAAgDAeQAAAdAaADQAbgEAAgcQgEgegXAAIAAAAg");
	this.shape_471.setTransform(844.2,285.25);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_472.setTransform(830,290.6);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_473.setTransform(820.575,288.3274);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_474.setTransform(811.2521,285.15);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_475.setTransform(804.675,286.8);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_476.setTransform(795.725,286.8);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_477.setTransform(788.65,288.4261);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#01395B").s().p("AgaA8IAAAMIgPAAIAAiRIAPAAIAABKQARgPALACQAnAFAAAmQAAAngnAEQgTgBgJgNgAgbAeQABAdAaADQAagEABgbQgEgfgXAAQgXAAgEAeg");
	this.shape_478.setTransform(779,285.25);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_479.setTransform(765.925,292.95);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_480.setTransform(762.375,286.8);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_481.setTransform(754.45,288.325);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_482.setTransform(744.675,288.3274);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_483.setTransform(733.0088,288.1769);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_484.setTransform(719.625,286.8);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_485.setTransform(711.7,288.325);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_486.setTransform(701.875,288.3274);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_487.setTransform(687.85,290.6);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_488.setTransform(678.425,288.3274);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_489.setTransform(669.1021,285.15);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_490.setTransform(662.525,286.8);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQABAMAFAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_491.setTransform(649.974,290.5);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_492.setTransform(640.2521,288.2);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_493.setTransform(633.475,286.175);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_494.setTransform(626.7021,288.2);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_495.setTransform(616.45,288.325);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_496.setTransform(606.675,288.3274);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_497.setTransform(595.0088,288.1769);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_498.setTransform(580.575,292.95);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_499.setTransform(575.4773,288.3433);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_500.setTransform(567.075,288.3274);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_501.setTransform(560.5,288.2);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_502.setTransform(551.6,288.325);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_503.setTransform(542.075,288.575);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_504.setTransform(535.775,286.175);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_505.setTransform(529.0021,288.2);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_506.setTransform(522.05,288.2);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_507.setTransform(512.85,288.325);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_508.setTransform(503.5,288.3263);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_509.setTransform(1066.975,263.3274);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_510.setTransform(1060.35,263.2);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_511.setTransform(1051.2,263.325);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_512.setTransform(1033,265.6);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_513.setTransform(1023.625,263.3274);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_514.setTransform(1014.3021,260.15);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#01395B").s().p("AgGBDIAAh3IghAAIAAgOIBPAAIAAAOIghAAIAAB3g");
	this.shape_515.setTransform(1006.775,260.775);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_516.setTransform(991.65,266.65);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_517.setTransform(985.9273,263.3433);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_518.setTransform(978.8773,263.3433);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_519.setTransform(970.05,263.325);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_520.setTransform(963.05,263.2);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_521.setTransform(955,263.3263);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_522.setTransform(945.1,263.325);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_523.setTransform(926.725,263.3274);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_524.setTransform(915.0588,263.1769);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_525.setTransform(902.95,263.325);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_526.setTransform(893.35,263.3263);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_527.setTransform(875.8,265.6);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_528.setTransform(866.375,263.3274);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_529.setTransform(857.0521,260.15);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_530.setTransform(850.475,261.8);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_531.setTransform(837.25,263.2);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_532.setTransform(828.775,263.3274);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_533.setTransform(819.725,263.575);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_534.setTransform(810.675,263.3274);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_535.setTransform(803.975,261.8);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_536.setTransform(796.05,263.325);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_537.setTransform(786.3521,260.15);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_538.setTransform(774.85,263.25);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_539.setTransform(757.575,261.8);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_540.setTransform(749.65,263.325);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_541.setTransform(739.825,263.3274);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_542.setTransform(724.375,260.15);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_543.setTransform(720.225,260.15);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_544.setTransform(716.025,261.175);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_545.setTransform(707.15,263.25);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_546.setTransform(687.15,265.6);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_547.setTransform(677.725,263.3274);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_548.setTransform(668.4521,260.15);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_549.setTransform(661.825,261.8);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_550.setTransform(645.65,263.325);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_551.setTransform(636.9273,263.3433);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#01395B").s().p("AgOAVIAQgtIANAFIgTAsg");
	this.shape_552.setTransform(621.875,267.95);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_553.setTransform(618.125,260.15);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_554.setTransform(613.975,260.15);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_555.setTransform(607.075,263.3274);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_556.setTransform(595.45,263.25);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_557.setTransform(575.45,265.6);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_558.setTransform(568,263.2);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_559.setTransform(559.525,263.3274);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#01395B").s().p("AgogrIAQAAIAYA3IAZg3IAQAAIgpBXg");
	this.shape_560.setTransform(550.475,263.575);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_561.setTransform(530.8088,263.1769);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_562.setTransform(521.875,261.175);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_563.setTransform(512.95,263.25);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_564.setTransform(502.6773,263.3433);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_565.setTransform(1069.875,236.8);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_566.setTransform(1062.25,238.325);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_567.setTransform(1052.3021,238.2);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_568.setTransform(1042.9021,238.2);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_569.setTransform(1032.7,238.325);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_570.setTransform(1023.3,238.3263);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_571.setTransform(1009.05,240.6);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_572.setTransform(999.625,238.3274);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_573.setTransform(990.3521,235.15);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#01395B").s().p("AgGBDIAAh3IghAAIAAgOIBPAAIAAAOIghAAIAAB3g");
	this.shape_574.setTransform(982.775,235.775);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#01395B").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_575.setTransform(970.95,241.65);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_576.setTransform(965.2273,238.3433);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_577.setTransform(956.9521,235.15);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_578.setTransform(950.375,236.8);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#01395B").s().p("AAAArQgMAAgNgLQgIgKABgPIAAgxIAOAAIAAAwQgBAJAGAIQADAGAKABQAMgBADgGQAEgIgBgJIAAgwIAPAAIAAAxQABAPgJAKQgLALgNAAIgBAAg");
	this.shape_579.setTransform(943.3,238.4261);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_580.setTransform(933.4,238.325);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_581.setTransform(921.3588,238.1769);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#01395B").s().p("AgWAqIAAhSIAOAAIAAAJQACgGAQgFQAHABAGADIgHANQgEgDgEAAQgIABgDAEQgEADgBAUIAAAqg");
	this.shape_582.setTransform(906.9,238.2);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_583.setTransform(901.175,236.175);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_584.setTransform(894.275,238.3274);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_585.setTransform(885.0021,235.15);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_586.setTransform(878.375,236.8);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_587.setTransform(865.45,238.325);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_588.setTransform(858.325,236.8);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_589.setTransform(851.2521,238.2);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_590.setTransform(844.475,236.175);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_591.setTransform(835.225,236.8);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#01395B").s().p("AAWBKIAAhSIAOAAIAABSgAgbBKIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAAAEIgOAAIAAgEQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFg");
	this.shape_592.setTransform(827.8321,234.9875);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_593.setTransform(813.6521,238.2);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_594.setTransform(803.4,238.325);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#01395B").s().p("AAJAsQgpgDgDgpQADgoApgDQATACAHAGIAAARQgNgNgNABQgaAAgCAeQADAfAZAAQAOAAANgNIAAARQgOAJgMAAIgBAAg");
	this.shape_595.setTransform(794.05,238.3263);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_596.setTransform(779.75,240.6);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_597.setTransform(770.325,238.3274);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_598.setTransform(761.0521,235.15);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_599.setTransform(754.425,236.8);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#01395B").s().p("AgcA2QgKgIgBgTIAOAAQAAAMAGAFQAKAKAJgCQAQABAGgMQAGgKgBgLIAAgMQgHAMgUACQgTgBgKgLQgKgHgCgYQACgYAKgJQALgKASgBQARABAKAOIAAgNIAOAAIAABQQADAPgLASQgJAOgYACQgUgCgIgKgAgSgsQgJAMABALQgBAMAKAMQAHAGAKAAQAMAAAGgHQAJgIABgPQgBgPgIgJQgHgGgMgBQgMABgGAHg");
	this.shape_600.setTransform(741.274,240.5);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_601.setTransform(731.5521,238.2);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_602.setTransform(724.775,236.175);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_603.setTransform(718.0021,235.15);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_604.setTransform(711.375,236.8);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_605.setTransform(704.4,240.6);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#01395B").s().p("AATAqIAAgxQAAgIgEgIQgEgFgKgBQgHAAgGAGQgIAMACALIAAAqIgPAAIAAhSIAPAAIAAAKQADgIATgEQAQAAAIAMQAGAIgBAOIAAAyg");
	this.shape_606.setTransform(695.1021,238.2);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_607.setTransform(684.85,238.325);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_608.setTransform(672.725,236.8);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_609.setTransform(666.8773,238.3433);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#01395B").s().p("AgrAAQADgoAogDQApADADAoQgDApgpADQgogDgDgpgAgcAAQADAfAZAAQAaAAADgfQgDgegaAAQgZAAgDAeg");
	this.shape_610.setTransform(658.05,238.325);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#01395B").s().p("AAoArIAAgyQADgSgSgDQgWAFAEAVIAAAtIgOAAIAAgwQAEgQgTgHQgVAGADAVIAAAsIgOAAIAAhSIAOAAIAAAJQAHgLAOAAQAUAEABAJQAPgQAKADQAgAHgFAZIAAA0g");
	this.shape_611.setTransform(645.9588,238.1769);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_612.setTransform(637.025,235.15);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_613.setTransform(629.4,238.325);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#01395B").s().p("AgJA5IAAhFIgJAAIAAgOIAJAAIAAgeIANAAIAAAeIAPAAIAAAOIgPAAIAABFg");
	this.shape_614.setTransform(617.225,236.8);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#01395B").s().p("AgpAAQAFgrAkAAQAWADAGALIAAgMIANAAIAABSIgNAAIAAgLQgHALgVADQgkAAgFgsgAABgeQgXAAgDAeQAAAdAaACQAbgDAAgcQgEgegWAAIgBAAg");
	this.shape_615.setTransform(609.3,238.325);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_616.setTransform(599.525,238.3274);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_617.setTransform(587.325,235.15);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_618.setTransform(583.175,235.15);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#01395B").s().p("AgGA+IAAhSIANAAIAABSgAgJgzQABgJAIgBQAJABABAJQgBAJgJABQgIgBgBgJg");
	this.shape_619.setTransform(579.025,236.175);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#01395B").s().p("AAAgNIgYA9IgqhYIARAAIAYA3IAZg+IAaA+IAYg3IARAAIgqBYg");
	this.shape_620.setTransform(570.1,238.25);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#01395B").s().p("AATBJIAAgzQAAgIgEgIQgEgFgKAAQgHgBgGAHQgIAMACALIAAArIgPAAIAAiRIAPAAIAABIQADgIATgDQAQAAAIALQAGAIgBANIAAA0g");
	this.shape_621.setTransform(553.3021,235.15);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#01395B").s().p("AgcAWIANgFQABAKAOAEQAOgCAAgLQgBgLgMgDQgOgFgGgGQgEgGABgHQABgWAWgBQAKgDANASIgMAGQgDgHgJgBQgIAAgBAJQAAAIANAEQARAHADAFQAFAHAAAGQgCAbgbABIgDAAQgKAAgPgWg");
	this.shape_622.setTransform(545.1773,238.3433);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#01395B").s().p("AAWBKIAAhSIAOAAIAABSgAgbBKIAAhFIgIAAIAAgNIAIAAIAAgfQgBgNAGgJQAEgKAWgCQAOgCANAOQAGAMgBAKIAAAEIgOAAIAAgEQAAgGgDgHQgDgGgMAAQgLAAgDAGQgDAGAAAHIAAAfIAUAAIAAANIgUAAIAABFg");
	this.shape_623.setTransform(536.5821,234.9875);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#01395B").s().p("AggBAIAag2IgmhKIARAAIAcA8IAbg8IARAAIg9CAg");
	this.shape_624.setTransform(527.75,240.6);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_625.setTransform(521.075,235.15);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#01395B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_626.setTransform(516.925,235.15);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#01395B").s().p("AgnAAQACgnAlgEQAZACAHANQAIANAAASIhAAAQADAbAWABQALAAAGgGQAGgFADgHIAMAHQgEAHgGAGQgMALgQAAIgBAAQghAAgGgsgAgXgIIAwAAQgFgVgUgBQgSACgFAUg");
	this.shape_627.setTransform(510.025,238.3274);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#01395B").s().p("AgaA6IAIgMQAIAIAIAAQAFAAAEgEQAGgJgBgNIAAhfIAOAAIAABfQACASgKAOQgGAHgOABQgPAAgJgKg");
	this.shape_628.setTransform(500.8667,235.9);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#01395B").s().p("AgrBGQACgXAWgCQAWACACAXQgCAWgWACQgWgCgCgWgAgiAgIAGgxIANACQAOABAMgJQAHgEABgPQgBgLgEgCQgDgEgKgBQgIAAgFAFQgHAGAAAKIgpAAQAEgXAPgQQAWgSAVADQAYgCAUASQAQATgCARQgBAagOANQgQAMgVAAIgDAWg");
	this.shape_629.setTransform(806.1111,183.4098);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#01395B").s().p("AgnBaIARiQIgnAAIAEgjIB3AAIgEAjIgoAAIgRCQg");
	this.shape_630.setTransform(793.15,183.45);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#01395B").s().p("AAwBaIgJgiIhDAAIgRAiIgtAAIBeizIAnAAIAwCzgAgMAYIAsAAIgPg/g");
	this.shape_631.setTransform(776.975,183.45);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#01395B").s().p("Ag8BaIAWizIBjAAIgFAjIg5AAIgFAjIA4AAIgEAiIg4AAIgFAoIA7AAIgEAjg");
	this.shape_632.setTransform(762.225,183.45);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#01395B").s().p("AAZBaIAKhNIhHAAIgKBNIgqAAIAWizIAqAAIgIBDIBGAAIAJhDIAqAAIgXCzg");
	this.shape_633.setTransform(739.3,183.45);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#01395B").s().p("AgHBeQgTABgRgJQgOgIgKgLIAXgeQAGAIAJAHQAJAFAMAAQAKABAJgGQAIgGAAgLQgBgJgEgEQgCgBgMgGIgKgFQgJgCgRgNQgMgNAAgRQACgcAPgNQAXgTAYACQAYgCAcAUIgUAeQgSgOgNABQgJAAgIAFQgFAFAAAHQAAAJAFAEQAFAEANAFIAKAFQAOAFAKAMQAKALgBAQQgBAegRAQQgVASgYAAIgFAAg");
	this.shape_634.setTransform(721.825,183.3998);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#01395B").s().p("AgfBaIAWizIApAAIgWCzg");
	this.shape_635.setTransform(710.575,183.45);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#01395B").s().p("Ag8BaIAWizIBjAAIgEAjIg6AAIgEAjIA1AAIgEAiIg1AAIgKBLg");
	this.shape_636.setTransform(700.425,183.45);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#01395B").s().p("AgqBaIAKhUIg0hfIAvAAIAeA4IAqg4IAyAAIhMBfIgJBUg");
	this.shape_637.setTransform(685.975,183.45);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#01395B").s().p("AgyBaIAWizIApAAIgRCQIA3AAIgFAjg");
	this.shape_638.setTransform(672,183.45);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#01395B").s().p("AgyBaIAWizIApAAIgRCQIA3AAIgFAjg");
	this.shape_639.setTransform(659.9,183.45);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#01395B").s().p("Ag8BaIAWizIBjAAIgFAjIg5AAIgFAjIA4AAIgEAiIg4AAIgFAoIA7AAIgEAjg");
	this.shape_640.setTransform(647.325,183.45);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#01395B").s().p("AgNBcQgOABgOgIQgLgGgHgMIAcgaQACAGAFAEQADAEAHAAQAHAAAEgEQAFgGABgOIAQh6IApAAIgPB5QABAXgTAaQgTANgPAAIgGAAg");
	this.shape_641.setTransform(633.525,183.6674);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#01395B").s().p("AhIBEQgWgTgDgsQACguAbgZQAlgeAkADQAzADARAUQAYAYABAoQAAAogcAgQgkAfglgDIgIAAQgfAAgegagAAnAoQAPgPABgcQACgTgQgTQgTgQgSACQgaAAgQARQgQASgBAXQABAZAOAMQAUARATgBQATACAVgSg");
	this.shape_642.setTransform(611.9504,183.4054);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#01395B").s().p("AgaBaIg4AAIAWizIA1AAQAhgDAjAaQAUASABAqQgGA8gWALQgdAZgrAAIgIAAgAgkA3IANAAQAVADAYgRQAQgOACggQAAgYgNgMQgOgNgXAAIgMAAg");
	this.shape_643.setTransform(591.65,183.44);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#01395B").s().p("AgnBaIARiQIgnAAIAEgjIB3AAIgEAjIgoAAIgRCQg");
	this.shape_644.setTransform(570.9,183.45);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#01395B").s().p("AAwBaIgJgiIhDAAIgRAiIgtAAIBeizIAnAAIAwCzgAgMAYIAsAAIgPg/g");
	this.shape_645.setTransform(554.725,183.45);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#01395B").s().p("AAZBaIAKhNIhHAAIgKBNIgqAAIAWizIAqAAIgIBDIBGAAIAJhDIAqAAIgXCzg");
	this.shape_646.setTransform(536.9,183.45);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#01395B").s().p("AAPBaIgXhtIgzBtIgjAAIgnizIAqAAIAYB3IA1h3IAbAAIAYB3IA1h3IAsAAIhTCzg");
	this.shape_647.setTransform(514.775,183.45);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAvMAnmMheXAAAMAAAhPLMBeXAAAg");
	this.shape_648.setTransform(785.15,408.45);

	this.instance = new lib.Symbol146("synched",0);
	this.instance.setTransform(483.2,155.05);
	this.instance.alpha = 0.3984;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dietinfo01swf, new cjs.Rectangle(482.2,154.1,605.8999999999999,508.79999999999995), null);


(lib.bookicon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_21 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_41 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(20).call(this.frame_41).wait(1));

	// youtube
	this.instance = new lib.youtube01swf();
	this.instance.setTransform(-378.4,424.25,1,1,0,0,0,794.4,553.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({_off:true},1).wait(20));

	// icon
	this.instance_1 = new lib.Tween108("synched",0);
	this.instance_1.setTransform(45.15,45.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1));

	// info
	this.instance_2 = new lib.info1swf();
	this.instance_2.setTransform(45.15,45.15,0.0498,0.0498,0,0,0,785.6,408.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:785.1,scaleX:1,scaleY:1,x:-376.65,y:272.6},21).to({regY:408.3,scaleX:0.0381,scaleY:0.0381,x:45.15,y:45.15},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-679,0,769.3,526.6);


(lib.Tween112 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.funfactsinfoswf();
	this.instance.setTransform(-82.55,-10,1,1,0,0,0,785.1,408.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384.9,-263.8,604.9,507.8);


(lib.tentacle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(84));

	// tentacle
	this.instance = new lib.PuppetShape_9copy("synched",1,false);
	this.instance.setTransform(26.55,151.15);

	this.instance_1 = new lib.PuppetShape_8copy("synched",1,false);
	this.instance_1.setTransform(26.55,151.15);
	this.instance_1._off = true;

	this.instance_2 = new lib.PuppetShape_4copy("synched",1,false);
	this.instance_2.setTransform(26.55,151.15);
	this.instance_2._off = true;

	this.instance_3 = new lib.PuppetShape_6copy3("synched",1,false);
	this.instance_3.setTransform(26.55,151.15);
	this.instance_3._off = true;

	this.instance_4 = new lib.PuppetShape_5copy2("synched",1,false);
	this.instance_4.setTransform(26.55,151.15);
	this.instance_4._off = true;

	this.instance_5 = new lib.PuppetShape_6copy4("synched",1,false);
	this.instance_5.setTransform(26.55,151.15);
	this.instance_5._off = true;

	this.instance_6 = new lib.PuppetShape_7copy2("synched",1,false);
	this.instance_6.setTransform(26.55,151.15);
	this.instance_6._off = true;

	this.instance_7 = new lib.PuppetShape_6copy5("synched",1,false);
	this.instance_7.setTransform(26.55,151.15);
	this.instance_7._off = true;

	this.instance_8 = new lib.PuppetShape_4copy3("synched",1,false);
	this.instance_8.setTransform(26.55,151.15);
	this.instance_8._off = true;

	this.instance_9 = new lib.PuppetShape_8copy3("synched",1,false);
	this.instance_9.setTransform(26.55,151.15);
	this.instance_9._off = true;

	this.instance_10 = new lib.PuppetShape_9copy3("synched",1,false);
	this.instance_10.setTransform(26.55,151.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_4}]},8).to({state:[{t:this.instance_5}]},8).to({state:[{t:this.instance_6}]},8).to({state:[{t:this.instance_7}]},8).to({state:[{t:this.instance_8}]},8).to({state:[{t:this.instance_9}]},11).to({state:[{t:this.instance_10}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},7).wait(77));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},7).to({_off:true},8).wait(69));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},8).to({_off:true},8).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},8).to({_off:true},8).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},8).to({_off:true},8).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({_off:false},8).to({_off:true},8).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},8).to({_off:true},8).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(47).to({_off:false},8).to({_off:true},8).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(55).to({_off:false},8).to({_off:true},11).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(63).to({_off:false},11).to({_off:true},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,0.6,161,305.59999999999997);


(lib.lightbulbicon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_21 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_41 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(20).call(this.frame_41).wait(1));

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhIA9QABg4AnglQAlgnA4gBQALABABALQgBALgLAAQguACgfAfQgfAfgCAuQAAALgLABQgLgBgBgLg");
	this.shape.setTransform(39,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzDrQgmgCgNgjIgTg/QgIgZgRgTQgwg4gBhJQABhSA6g6QA8g5BRABQBSAEA2A4QA2A4ABBTQgCBHgvA2QgRAUgIAaIgSA9QgNAkgmACgAh3ihQg0AzAABIQAABAArAxQAUAXAJAeIAUA/QAHAUAVABIBoAAQAWgCAHgTIASg+QAJgfAVgXQApgwABg/QAAhIgwgxQgvgyhJgDIgEAAQhFAAgyAxg");
	this.shape_1.setTransform(45.175,37.3491);

	this.instance = new lib.Symbol71("synched",0);
	this.instance.setTransform(26.75,15);
	this.instance.alpha = 0.1914;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqALQgKgBgBgKQABgJAKgBIBVAAQAKABABAJQgBAKgKABg");
	this.shape_2.setTransform(45.175,75.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1ALQgJgBgBgKQABgJAJgBIBqAAQAKABABAJQgBAKgKABg");
	this.shape_3.setTransform(45.175,71.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/ALQgKgBgBgKQABgJAKgBIB/AAQAKABABAJQgBAKgKABg");
	this.shape_4.setTransform(45.175,67.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhKALQgJgBgBgKQABgJAJgBICVAAQAJABABAJQgBAKgJABg");
	this.shape_5.setTransform(45.175,63.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#01395B").s().p("Ak+FAQiAiAgFjAQAFi/CAh/QB/iAC/gFQDAAFCACAQB/B/AEC/QgEDAh/CAQiAB/jAAEQi/gEh/h/g");
	this.shape_6.setTransform(45.15,45.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]},21).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]},20).wait(1));

	// info_box
	this.instance_1 = new lib.Tween112("synched",0);
	this.instance_1.setTransform(42.75,47.3,0.0748,0.0748,0,0,0,-91,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,scaleX:1,scaleY:1,x:-294.1,y:-173},21).to({regX:-82.6,regY:-10,scaleX:0.0799,scaleY:0.0799,x:44.2,y:46.65},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-679.5,-437.3,769.8,527.6);


(lib.fishicon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_21 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_41 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(20).call(this.frame_41).wait(1));

	// fish_button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAAQACgOAOgCQAPACACAOQgCAPgPACQgOgCgCgPg");
	this.shape.setTransform(66.125,43.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhODhIhDgbQgGgDgBgGQgCgFAFgFIAvgxQgzgbgggYQgBgFg7AqQgfAYgXAIIgGABQgGgBgGgEQgIgFgBgLQADhGASgiQADgGgDgIQgSgggDhGQABgKAIgHQAJgFAJACQAXAHAfAYQAxAlAJAAQAZgTAtgYIghgvQgDgEABgFQAAgFAFgDQAFgFBAggQBAgeBbgIQAGAAAEAGIA1BMQBKAVAqAoQAyAsANAdQAPAcgPAbQgNAdgyAtQgcAagrATQgqAVg6ABQgmAAgtgMIhFAyQgDACgEAAIgEgBgAh5C3IAtATIAzglQgVgIgYgLIgKgFgAg8hZQhnAygZAbQgaAaAEACIAAABQgDACAaAcQAaAbBlAzQAiAPAcAKIACAAQBqAcBAgiQgUgNgWggQgWgggCgyQACgxAWgfQAWggAUgOQgTgIgWgEIgFgCQgSgEgWAAQg+AAhWAmgACeg9QgYAdgDAxQADAzAZAcQAYAcAPAIQAYgOATgRQAugpAMgZQAJgRgJgSQgMgYgugpQgTgRgYgPQgPAIgZAcgAkcABQAHARgHAQQgQAegCA8QANgEAdgWQAmgdARgHIgHgHQgYgbADgKQgGgLAggiQgRgIgkgcQgdgWgNgEQACA+AQAcgAgxiuQg1AWgWAPIAdAnIAZgMQBqgwBIAKIgkg2QhFAGg0AWg");
	this.shape_1.setTransform(45.1625,45.15);

	this.instance = new lib.Symbol69("synched",0);
	this.instance.setTransform(13.65,23.7);
	this.instance.alpha = 0.1914;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01395B").s().p("Ak+FAQiAiAgFjAQAFi/CAh/QB/iAC/gFQDAAFCACAQB/B/AEC/QgEDAh/CAQiAB/jAAEQi/gEh/h/g");
	this.shape_2.setTransform(45.15,45.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]},21).to({state:[{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]},20).wait(1));

	// info_box
	this.instance_1 = new lib.dietinfo01swf();
	this.instance_1.setTransform(41.8,47.1,0.0599,0.0599,0,0,0,785,408.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:785.1,regY:408.4,scaleX:1,scaleY:1,x:-376.55,y:121},21).to({regX:785,regY:408.6,scaleX:0.0558,scaleY:0.0558,x:47,y:46},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-678.9,-132.8,769.1999999999999,507.8);


// stage content:
(lib.interactivecartoon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		stage.enableMouseOver(30);
		var _this = this;
		
		stage.on('stagemousemove', function(e){
		 var radians = Math.atan2(e.localY - _this.eyeR.y, e.localX - _this.eyeR.x);
		 var degrees = radians * (180 / Math.PI);
		 _this.eyeR.rotation = degrees - 90;
		
		var radians = Math.atan2(e.localY - _this.eyeL.y, e.localX - _this.eyeL.x);
		 var degrees = radians * (180 / Math.PI);
		 _this.eyeL.rotation = degrees - 90;
		});
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.jellyfish.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.what_is_this.play();
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.book_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.book_button.play();
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.fish_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.fish_button.play();
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mag_glass_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mag_glass_button.play();
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.light_bulb_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.light_bulb_button.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// title
	this.instance = new lib.title();
	this.instance.setTransform(474.15,27.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// book_button
	this.book_button = new lib.bookicon();
	this.book_button.name = "book_button";
	this.book_button.setTransform(1162,136);

	this.timeline.addTween(cjs.Tween.get(this.book_button).wait(1));

	// fish_button
	this.fish_button = new lib.fishicon();
	this.fish_button.name = "fish_button";
	this.fish_button.setTransform(1162,287.95);

	this.timeline.addTween(cjs.Tween.get(this.fish_button).wait(1));

	// mag_glass_button
	this.mag_glass_button = new lib.magglassicon();
	this.mag_glass_button.name = "mag_glass_button";
	this.mag_glass_button.setTransform(1162,439.9);

	this.timeline.addTween(cjs.Tween.get(this.mag_glass_button).wait(1));

	// light_bulb_button
	this.light_bulb_button = new lib.lightbulbicon();
	this.light_bulb_button.name = "light_bulb_button";
	this.light_bulb_button.setTransform(1207.1,636.95,1,1,0,0,0,45.1,45.1);

	this.timeline.addTween(cjs.Tween.get(this.light_bulb_button).wait(1));

	// eyeR
	this.eyeR = new lib.eyeR();
	this.eyeR.name = "eyeR";
	this.eyeR.setTransform(289.5,149.1,1,1,0,0,0,15.3,15.3);

	this.timeline.addTween(cjs.Tween.get(this.eyeR).wait(1));

	// eyeL
	this.eyeL = new lib.eyeL();
	this.eyeL.name = "eyeL";
	this.eyeL.setTransform(228.05,149.1,1,1,0,0,0,15.3,15.3);

	this.timeline.addTween(cjs.Tween.get(this.eyeL).wait(1));

	// jellyfish
	this.jellyfish = new lib.jellyfish();
	this.jellyfish.name = "jellyfish";
	this.jellyfish.setTransform(258.8,398.7,1,1,0,0,0,146.9,334.7);

	this.timeline.addTween(cjs.Tween.get(this.jellyfish).wait(1));

	// tentacle
	this.what_is_this = new lib.tentacle();
	this.what_is_this.name = "what_is_this";
	this.what_is_this.setTransform(347.4,363.85,1,1,0,0,0,26.6,151.2);

	this.timeline.addTween(cjs.Tween.get(this.what_is_this).wait(1));

	// fish
	this.instance_1 = new lib.fish01swf();
	this.instance_1.setTransform(665.95,533,1,1,0,0,0,663.1,524.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// background
	this.instance_2 = new lib.background01swf("synched",0);
	this.instance_2.setTransform(816.3,411.7,1,1,0,0,0,816.2,411.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(599,384,1110.6,439.4);
// library properties:
lib.properties = {
	id: 'B845C69B0FD3854FACA080060C501681',
	width: 1366,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B845C69B0FD3854FACA080060C501681'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;