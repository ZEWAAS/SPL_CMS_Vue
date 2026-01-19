"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(x, y, sizeX, sizeY) {
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
    Circle.prototype.update = function (deltaTime) {
        this.x += deltaTime * 100;
    };
    Circle.prototype.render = function (ctx) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.sizeX, 0, 2 * Math.PI);
        ctx.stroke();
    };
    return Circle;
}());
exports.Circle = Circle;
