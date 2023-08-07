var __encode = 'jsjiami.com'
  , _a = {}
  , _0xb483 = ["\x5F\x64\x65\x63\x6F\x64\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];
(function(_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
}
)(_a);
var __Oxb69e5 = ["\x70\x6F\x73\x69\x74\x69\x6F\x6E", "\x73\x6B\x65\x74\x63\x68\x2D\x68\x6F\x6C\x64\x65\x72", "\x70\x61\x72\x65\x6E\x74", "\x73\x68\x6F\x77\x49\x6E\x70\x75\x74", "\x64\x72\x61\x77", "\x76\x61\x6C\x75\x65", "\x70\x61\x72\x61\x6D\x65\x74\x65\x72\x73", "\x6C\x65\x6E\x67\x74\x68", "\x78", "\x79", "\x69\x64", "\x74\x6F\x75\x63\x68\x53\x74\x61\x72\x74", "\x74\x6F\x75\x63\x68\x4D\x6F\x76\x65", "\x74\x6F\x75\x63\x68\x45\x6E\x64", "\x6D\x6F\x75\x73\x65\x57\x68\x65\x65\x6C", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\x6C\x6F\x67", "\u5220\u9664", "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A", "\u671F\u5F39\u7A97\uFF0C", "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C", "\x6A\x73\x6A\x69\x61", "\x6D\x69\x2E\x63\x6F\x6D"];
var myWidth;
var myHeight;
var displayScale = 1.0;
var editPage;
var genrPage;
function setup() {
    if (float(windowWidth) / float(windowHeight) >= 1430.0 / 855.0) {
        if (windowHeight < 855) {
            myHeight = float(windowHeight)
        } else {
            myHeight = 855
        }
        ;myWidth = float(myHeight) * 1430.0 / 855.0;
        displayScale = myWidth / 1430.0
    } else {
        if (float(windowWidth) / float(windowHeight) < 1430.0 / 855.0) {
            if (windowWidth < 1430) {
                myWidth = windowWidth
            } else {
                myWidth = 1430
            }
            ;myHeight = myWidth * 855.0 / 1430.0;
            displayScale = myHeight / 855.0
        }
    }
    ;createCanvas(myWidth, myHeight)[__Oxb69e5[0x2]](__Oxb69e5[0x1])[__Oxb69e5[0x0]]((windowWidth - myWidth) / 2, 0);
    state = 0;
    editPage = new editPicturePage();
    editPage[__Oxb69e5[0x3]](displayScale);
    genrPage = new generatePage()
}
function draw() {
    if (state == 0) {
        editPage[__Oxb69e5[0x4]](displayScale)
    } else {
        if (state == 1) {
            genrPage[__Oxb69e5[0x4]](displayScale, mouseX, mouseY);
            picColorValue = genrPage[__Oxb69e5[0x6]][0x0][__Oxb69e5[0x5]];
            NR_PINS = genrPage[__Oxb69e5[0x6]][0x1][__Oxb69e5[0x5]];
            stringsNumber = genrPage[__Oxb69e5[0x6]][0x2][__Oxb69e5[0x5]];
            lineFade = genrPage[__Oxb69e5[0x6]][0x3][__Oxb69e5[0x5]];
            minDist = genrPage[__Oxb69e5[0x6]][0x4][__Oxb69e5[0x5]];
            lineWidth = genrPage[__Oxb69e5[0x6]][0x5][__Oxb69e5[0x5]];
            lineAlpha = genrPage[__Oxb69e5[0x6]][0x6][__Oxb69e5[0x5]];
            lineVarration = genrPage[__Oxb69e5[0x6]][0x7][__Oxb69e5[0x5]];
            pinSize = genrPage[__Oxb69e5[0x6]][0x8][__Oxb69e5[0x5]]
        }
    }
}
function touchStarted() {
    var _0x6533x9 = [];
    var _0x6533xa = 0;
    if (touches[__Oxb69e5[0x7]] == 0) {
        _0x6533x9[_0x6533xa] = new myTouchPoints(mouseX / displayScale,mouseY / displayScale,0)
    } else {
        for (var _0x6533xb = 0; _0x6533xb < touches[__Oxb69e5[0x7]]; _0x6533xb++) {
            _0x6533x9[_0x6533xa] = new myTouchPoints(touches[_0x6533xb][__Oxb69e5[0x8]] / displayScale,touches[_0x6533xb][__Oxb69e5[0x9]] / displayScale,touches[_0x6533xb][__Oxb69e5[0xa]]);
            _0x6533xa++
        }
    }
    ;if (state == 0) {
        editPage[__Oxb69e5[0xb]](_0x6533x9)
    } else {
        if (state == 1) {
            genrPage[__Oxb69e5[0xb]](_0x6533x9)
        }
    }
}
function touchMoved() {
    var _0x6533x9 = [];
    var _0x6533xa = 0;
    if (touches[__Oxb69e5[0x7]] == 0) {
        _0x6533x9[_0x6533xa] = new myTouchPoints(mouseX / displayScale,mouseY / displayScale,0)
    } else {
        for (var _0x6533xb = 0; _0x6533xb < touches[__Oxb69e5[0x7]]; _0x6533xb++) {
            _0x6533x9[_0x6533xa] = new myTouchPoints(touches[_0x6533xb][__Oxb69e5[0x8]] / displayScale,touches[_0x6533xb][__Oxb69e5[0x9]] / displayScale,touches[_0x6533xb][__Oxb69e5[0xa]]);
            _0x6533xa++
        }
    }
    ;if (state == 0) {
        editPage[__Oxb69e5[0xc]](_0x6533x9)
    }
    ;return false
}
function touchEnded() {
    var _0x6533x9 = [];
    var _0x6533xa = 0;
    if (touches[__Oxb69e5[0x7]] == 0) {
        _0x6533x9[_0x6533xa] = new myTouchPoints(mouseX / displayScale,mouseY / displayScale,0)
    } else {
        for (var _0x6533xb = 0; _0x6533xb < touches[__Oxb69e5[0x7]]; _0x6533xb++) {
            _0x6533x9[_0x6533xa] = new myTouchPoints(touches[_0x6533xb][__Oxb69e5[0x8]] / displayScale,touches[_0x6533xb][__Oxb69e5[0x9]] / displayScale,touches[_0x6533xb][__Oxb69e5[0xa]]);
            _0x6533xa++
        }
    }
    ;if (state == 0) {
        if (editPage[__Oxb69e5[0xd]](_0x6533x9)) {
            state = 1;
            beginGenerate();
            isgenerating = true
        }
    } else {
        if (state == 1) {
            if (genrPage[__Oxb69e5[0xd]](_0x6533x9)) {
                state = 0;
                editPage[__Oxb69e5[0x3]](displayScale)
            }
        }
    }
}
function mouseWheel(_0x6533xf) {
    editPage[__Oxb69e5[0xe]](_0x6533xf, mouseX / displayScale, mouseY / displayScale)
}
(function(_0x6533x10, _0x6533x11, _0x6533x12, _0x6533x13, _0x6533x14, _0x6533x15) {
    _0x6533x15 = __Oxb69e5[0xf];
    _0x6533x13 = function(_0x6533x16) {
        if (typeof alert !== _0x6533x15) {
            alert(_0x6533x16)
        }
        ;if (typeof console !== _0x6533x15) {
            console[__Oxb69e5[0x10]](_0x6533x16)
        }
    }
    ;
    _0x6533x12 = function(_0x6533x17, _0x6533x10) {
        return _0x6533x17 + _0x6533x10
    }
    ;
    _0x6533x14 = _0x6533x12(__Oxb69e5[0x11], _0x6533x12(_0x6533x12(__Oxb69e5[0x12], __Oxb69e5[0x13]), __Oxb69e5[0x14]));
    try {
        _0x6533x10 = __encode;
        if (!(typeof _0x6533x10 !== _0x6533x15 && _0x6533x10 === _0x6533x12(__Oxb69e5[0x15], __Oxb69e5[0x16]))) {
            _0x6533x13(_0x6533x14)
        }
    } catch (e) {
        _0x6533x13(_0x6533x14)
    }
}
)({})
