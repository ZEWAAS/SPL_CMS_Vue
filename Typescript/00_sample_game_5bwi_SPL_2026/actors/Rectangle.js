"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, sizeX, sizeY) {
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
    Rectangle.prototype.update = function (deltaTime) {
        this.x += deltaTime * 100;
    };
    Rectangle.prototype.render = function (ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
