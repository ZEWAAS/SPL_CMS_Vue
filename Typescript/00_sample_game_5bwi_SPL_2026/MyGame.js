"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// MyGame - Example implementation of Game interface
var Circle_js_1 = require("./actors/Circle.js");
var GameFramework_js_1 = require("./GameFramework.js");
var Rectangle_js_1 = require("./actors/Rectangle.js");
var Tree_js_1 = require("./actors/Tree.js");
var MyGame = /** @class */ (function (_super) {
    __extends(MyGame, _super);
    function MyGame() {
        var _this = _super.call(this) || this;
        // Always code against interfaces
        _this.actors = [];
        return _this;
    }
    MyGame.prototype.addActor = function (actor) {
        this.actors.push(actor);
    };
    MyGame.prototype.init = function () {
        console.log("Game started!");
        var r1 = new Rectangle_js_1.Rectangle(0, 0, 10, 20);
        var r2 = new Rectangle_js_1.Rectangle(100, 0, 50, 50);
        var r3 = new Rectangle_js_1.Rectangle(100, 100, 50, 50);
        var c1 = new Circle_js_1.Circle(200, 200, 30, 30);
        var t1 = new Tree_js_1.Tree(300, 300, 40, 60);
        this.addActor(r1);
        this.addActor(r2);
        this.addActor(r3);
        this.addActor(c1);
        this.addActor(t1);
    };
    MyGame.prototype.update = function (deltaTime) {
        console.log("Inside update", deltaTime);
        for (var _i = 0, _a = this.actors; _i < _a.length; _i++) {
            var actor = _a[_i];
            actor.update(deltaTime);
        }
    };
    MyGame.prototype.render = function (ctx) {
        console.log("in rendeers");
        // DRY. dont repeat yourself
        for (var _i = 0, _a = this.actors; _i < _a.length; _i++) {
            var actor = _a[_i];
            actor.render(ctx);
        }
    };
    return MyGame;
}(GameFramework_js_1.Game));
var game = new MyGame();
var framework = new GameFramework_js_1.GameFramework(game, 800, 600);
framework.start();
console.log("test");
