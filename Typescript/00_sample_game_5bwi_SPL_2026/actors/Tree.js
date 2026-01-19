"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
var Tree = /** @class */ (function () {
    function Tree(x, y, sizeX, sizeY) {
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
    Tree.prototype.update = function (deltaTime) {
        // Trees don't move, so no update logic needed
    };
    Tree.prototype.render = function (ctx) {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY);
        // Simple representation of a tree
        ctx.fillStyle = "brown";
        ctx.fillRect(this.x + this.sizeX / 4, this.y + this.sizeY, this.sizeX / 2, this.sizeY / 2);
    };
    return Tree;
}());
exports.Tree = Tree;
