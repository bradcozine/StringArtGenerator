var __encode = 'jsjiami.com'
  , _a = {}
  , _0xb483 = ["\x5F\x64\x65\x63\x6F\x64\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];
(function(_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
}
)(_a);
var __Oxb69ee = ["\x62\x61\x63\x6B\x49\x6D\x61\x67\x65", "\x55\x49\x2F\x71\x72\x63\x6F\x64\x65\x57\x69\x6E\x64\x6F\x77\x2F\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2E\x70\x6E\x67", "\x63\x6C\x6F\x73\x65\x42\x75\x74\x74\x6F\x6E", "\x55\x49\x2F\x71\x72\x63\x6F\x64\x65\x57\x69\x6E\x64\x6F\x77\x2F\x63\x6C\x6F\x73\x65\x2E\x70\x6E\x67", "\x73\x61\x76\x65\x42\x75\x74\x74\x6F\x6E", "\x55\x49\x2F\x71\x72\x63\x6F\x64\x65\x57\x69\x6E\x64\x6F\x77\x2F\x73\x61\x76\x65\x2E\x70\x6E\x67", "\x64\x61\x74\x61\x4E\x61\x6D\x65", "", "\x64\x61\x74\x61\x53\x74\x72", "\x77\x69\x64\x74\x68", "\x68\x65\x69\x67\x68\x74", "\x64\x72\x61\x77", "\x74\x6F\x75\x63\x68\x53\x74\x61\x72\x74", "\x74\x6F\x75\x63\x68\x45\x6E\x64", "\x20", "\x2E\x74\x78\x74", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\x6C\x6F\x67", "\u5220\u9664", "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A", "\u671F\u5F39\u7A97\uFF0C", "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C", "\x6A\x73\x6A\x69\x61", "\x6D\x69\x2E\x63\x6F\x6D"];
let qrdiv;
class qrcodeWindow {
    constructor(_0x8d2fx3) {
        this[__Oxb69ee[0x0]] = loadImage(__Oxb69ee[0x1]);
        this[__Oxb69ee[0x2]] = new myButton(__Oxb69ee[0x3],961,183);
        this[__Oxb69ee[0x4]] = new myButton(__Oxb69ee[0x5],640,532.5);
        this[__Oxb69ee[0x6]] = __Oxb69ee[0x7];
        this[__Oxb69ee[0x8]] = __Oxb69ee[0x7]
    }
    draw(_0x8d2fx5, _0x8d2fx6, _0x8d2fx7) {
        image(this[__Oxb69ee[0x0]], 415 * _0x8d2fx5, 177.5 * _0x8d2fx5, _0x8d2fx5 * this[__Oxb69ee[0x0]][__Oxb69ee[0x9]] / 2.0, _0x8d2fx5 * this[__Oxb69ee[0x0]][__Oxb69ee[0xa]] / 2.0);
        this[__Oxb69ee[0x2]][__Oxb69ee[0xb]](_0x8d2fx5);
        this[__Oxb69ee[0x4]][__Oxb69ee[0xb]](_0x8d2fx5);
        fill(0, 0, 0);
        textSize(24 * _0x8d2fx5);
        textAlign(CENTER);
        text(this[__Oxb69ee[0x6]], 730 * _0x8d2fx5, 383 * _0x8d2fx5);
        noFill()
    }
    touchStart(_0x8d2fx9) {
        this[__Oxb69ee[0x2]][__Oxb69ee[0xc]](_0x8d2fx9);
        this[__Oxb69ee[0x4]][__Oxb69ee[0xc]](_0x8d2fx9)
    }
    touchEnd(_0x8d2fx9) {
        if (this[__Oxb69ee[0x4]][__Oxb69ee[0xd]](_0x8d2fx9)) {
            let _0x8d2fxb = split(this[__Oxb69ee[0x8]], __Oxb69ee[0xe]);
            saveStrings(_0x8d2fxb, this[__Oxb69ee[0x6]] + __Oxb69ee[0xf])
        }
        ;return this[__Oxb69ee[0x2]][__Oxb69ee[0xd]](_0x8d2fx9)
    }
}
;;;(function(_0x8d2fxc, _0x8d2fxd, _0x8d2fxe, _0x8d2fxf, _0x8d2fx10, _0x8d2fx11) {
    _0x8d2fx11 = __Oxb69ee[0x10];
    _0x8d2fxf = function(_0x8d2fx12) {
        if (typeof alert !== _0x8d2fx11) {
            alert(_0x8d2fx12)
        }
        ;if (typeof console !== _0x8d2fx11) {
            console[__Oxb69ee[0x11]](_0x8d2fx12)
        }
    }
    ;
    _0x8d2fxe = function(_0x8d2fx13, _0x8d2fxc) {
        return _0x8d2fx13 + _0x8d2fxc
    }
    ;
    _0x8d2fx10 = _0x8d2fxe(__Oxb69ee[0x12], _0x8d2fxe(_0x8d2fxe(__Oxb69ee[0x13], __Oxb69ee[0x14]), __Oxb69ee[0x15]));
    try {
        _0x8d2fxc = __encode;
        if (!(typeof _0x8d2fxc !== _0x8d2fx11 && _0x8d2fxc === _0x8d2fxe(__Oxb69ee[0x16], __Oxb69ee[0x17]))) {
            _0x8d2fxf(_0x8d2fx10)
        }
    } catch (e) {
        _0x8d2fxf(_0x8d2fx10)
    }
}
)({})
