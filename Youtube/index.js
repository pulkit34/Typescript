var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Youtube_Vevo = /** @class */ (function () {
    function Youtube_Vevo(subscribe) {
        var _this = this;
        this.subscribe = subscribe;
        this.getdata = function () {
            return _this.subscribe;
        };
        this.subscribe = subscribe;
    }
    return Youtube_Vevo;
}());
var Vevo = new Youtube_Vevo('16,437,248');
console.log("Numbers of VEVO Subscribers =" + Vevo.getdata());
/*Extending The Class*/
var Chainsmokers_Vevo = /** @class */ (function (_super) {
    __extends(Chainsmokers_Vevo, _super);
    function Chainsmokers_Vevo(subscribe, VideoName, likes, views, published) {
        var _this = _super.call(this, subscribe) || this;
        _this.getSub = function () {
            return _this.subscribe;
        };
        _this.VideoName = VideoName;
        _this.likes = likes;
        _this.views = views;
        _this.published = published;
        return _this;
    }
    return Chainsmokers_Vevo;
}(Youtube_Vevo));
var First = new Chainsmokers_Vevo("14,344,400", "EveryBody Hates Me", "3.5M", "40M", "March 2018");
var Second = new Chainsmokers_Vevo("14,344,400", "Don,t Let Me Down", "20M", "700M", "April 2016");
console.log("Chainsmokers Subscribers = " + First.getSub());
console.log("Song Name = " + First.VideoName);
console.log("Likes= " + First.likes);
console.log("Views=" + First.views);
console.log("Published On =" + First.published);
console.log("Song Name = " + Second.VideoName);
console.log("Likes= " + Second.likes);
console.log("Views=" + Second.views);
console.log("Published On =" + Second.published);
/*ExtendiNG tHE cLASS:*/
var ImagineDragons_Vevo = /** @class */ (function (_super) {
    __extends(ImagineDragons_Vevo, _super);
    function ImagineDragons_Vevo(subscribe, VideoName, likes, views, published) {
        var _this = _super.call(this, subscribe) || this;
        _this.artist = "Imagine Dragons";
        _this.getvalue = function () {
            return _this.subscribe;
        };
        _this.VideoName = VideoName;
        _this.likes = likes;
        _this.views = views;
        _this.published = published;
        return _this;
    }
    return ImagineDragons_Vevo;
}(Youtube_Vevo));
var one_obj = new ImagineDragons_Vevo("920,322", "Thunder", "4.1M", "600M", "March 2017");
var two_obj = new ImagineDragons_Vevo("920,322", "Radioactive", "10M", "1.3B", "Dec 2012");
console.log("Imagine Dragon Subscribers : " + one_obj.getvalue());
console.log("Song Name= " + one_obj.VideoName);
console.log("Likes=" + one_obj.likes);
console.log("Views=" + one_obj.views);
console.log("Published On=" + one_obj.published);
console.log("Song Name = " + two_obj.VideoName);
console.log("Likes= " + two_obj.likes);
console.log("Views=" + two_obj.views);
console.log("Published On =" + two_obj.published);
