var __encode = 'jsjiami.com'
  , _a = {}
  , _0xb483 = ["\x5F\x64\x65\x63\x6F\x64\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];
(function(_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
}
)(_a);
var __Oxb69ea = ["\x70\x75\x73\x68", "\x6C\x65\x6E\x67\x74\x68", "\x68\x65\x69\x67\x68\x74", "\x77\x69\x64\x74\x68", "\x70\x69\x78\x65\x6C\x73", "\x75\x70\x64\x61\x74\x65\x50\x69\x78\x65\x6C\x73", "", "\x2D", "\x61\x70\x70\x6C\x79", "\x63\x6F\x70\x79", "\x6C\x6F\x61\x64\x50\x69\x78\x65\x6C\x73", "\x2C", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\x6C\x6F\x67", "\u5220\u9664", "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A", "\u671F\u5F39\u7A97\uFF0C", "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C", "\x6A\x73\x6A\x69\x61", "\x6D\x69\x2E\x63\x6F\x6D"];
var NR_PINS = 200;
var LAST_NR_PINS = 200;
var stringsNumber = 2200;
var lineFade = 50;
var minDist = 15;
var lineWidth = 0.9;
var lineAlpha = 80;
var lineVarration = 3;
var pinSize = 5;
var SIZE = 700;
var newColorImg;
var imgCopy;
var pins = [];
var lines = [];
var steps = [];
function calcCirclePins() {
    pins = [];
    var _0x5eafx11 = round(SIZE / 2.0);
    var _0x5eafx12 = round(SIZE / 2.0);
    var _0x5eafx13 = SIZE / 2;
    var _0x5eafx14 = TWO_PI / float(NR_PINS);
    for (var _0x5eafx15 = 0; _0x5eafx15 < int(NR_PINS); _0x5eafx15++) {
        pins[__Oxb69ea[0x0]]([round(_0x5eafx11 + _0x5eafx13 * cos(_0x5eafx15 * _0x5eafx14)), round(_0x5eafx12 + _0x5eafx13 * sin(_0x5eafx15 * _0x5eafx14))])
    }
}
function linePixels(_0x5eafx17, _0x5eafx18) {
    var _0x5eafx19 = [];
    var _0x5eafx1a = abs(_0x5eafx18[0x0] - _0x5eafx17[0x0]);
    var _0x5eafx1b = -abs(_0x5eafx18[0x1] - _0x5eafx17[0x1]);
    var _0x5eafx1c = _0x5eafx17[0x0] < _0x5eafx18[0x0] ? 1 : -1;
    var _0x5eafx1d = _0x5eafx17[0x1] < _0x5eafx18[0x1] ? 1 : -1;
    var _0x5eafx1e = _0x5eafx1a + _0x5eafx1b;
    var _0x5eafx1f = _0x5eafx17[0x0];
    var _0x5eafx20 = _0x5eafx17[0x1];
    while (_0x5eafx1f !== _0x5eafx18[0x0] || _0x5eafx20 !== _0x5eafx18[0x1]) {
        _0x5eafx19[__Oxb69ea[0x0]]([_0x5eafx1f, _0x5eafx20]);
        e2 = 2 * _0x5eafx1e;
        if (e2 > _0x5eafx1b) {
            _0x5eafx1e += _0x5eafx1b;
            _0x5eafx1f += _0x5eafx1c
        }
        ;if (e2 < _0x5eafx1a) {
            _0x5eafx1e += _0x5eafx1a;
            _0x5eafx20 += _0x5eafx1d
        }
    }
    ;return _0x5eafx19
}
function lineScore(_0x5eafx22, _0x5eafx19) {
    var _0x5eafx23 = 0;
    for (var _0x5eafx15 = 0; _0x5eafx15 < _0x5eafx19[__Oxb69ea[0x1]]; _0x5eafx15++) {
        if (_0x5eafx19[_0x5eafx15][0x1] < _0x5eafx22[__Oxb69ea[0x2]]) {
            var _0x5eafx24 = 4 * (_0x5eafx19[_0x5eafx15][0x1] * _0x5eafx22[__Oxb69ea[0x3]] + _0x5eafx19[_0x5eafx15][0x0]);
            var _0x5eafx25 = 255 - _0x5eafx22[__Oxb69ea[0x4]][_0x5eafx24];
            _0x5eafx23 += _0x5eafx25
        } else {
            var _0x5eafx24 = 4 * ((_0x5eafx19[_0x5eafx15][0x1] - 1) * _0x5eafx22[__Oxb69ea[0x3]] + _0x5eafx19[_0x5eafx15][0x0]);
            var _0x5eafx25 = 255 - _0x5eafx22[__Oxb69ea[0x4]][_0x5eafx24];
            _0x5eafx23 += _0x5eafx25
        }
    }
    ;return _0x5eafx23 / _0x5eafx19[__Oxb69ea[0x1]]
}
function reduceLine(_0x5eafx22, _0x5eafx19, _0x5eafx27) {
    for (var _0x5eafx15 = 0; _0x5eafx15 < _0x5eafx19[__Oxb69ea[0x1]]; _0x5eafx15++) {
        var _0x5eafx24 = 4 * (_0x5eafx19[_0x5eafx15][0x1] * _0x5eafx22[__Oxb69ea[0x3]] + _0x5eafx19[_0x5eafx15][0x0]);
        var _0x5eafx25 = _0x5eafx22[__Oxb69ea[0x4]][_0x5eafx24];
        _0x5eafx25 += _0x5eafx27;
        if (_0x5eafx25 > 255) {
            _0x5eafx25 = 255
        }
        ;_0x5eafx22[__Oxb69ea[0x4]][_0x5eafx24] = _0x5eafx25;
        _0x5eafx22[__Oxb69ea[0x4]][_0x5eafx24 + 1] = _0x5eafx25;
        _0x5eafx22[__Oxb69ea[0x4]][_0x5eafx24 + 2] = _0x5eafx25;
        _0x5eafx22[__Oxb69ea[0x4]][_0x5eafx24 + 3] = 255
    }
    ;_0x5eafx22[__Oxb69ea[0x5]]()
}
function pinPair(_0x5eafx17, _0x5eafx18) {
    strrr = __Oxb69ea[0x6];
    if (_0x5eafx17 < _0x5eafx18) {
        strrr = _0x5eafx17 + __Oxb69ea[0x7] + _0x5eafx18
    } else {
        strrr = _0x5eafx18 + __Oxb69ea[0x7] + _0x5eafx17
    }
    ;return strrr
}
function contains(_0x5eafx2a, _0x5eafx2b) {
    for (var _0x5eafx15 = 0; _0x5eafx15 < _0x5eafx2a[__Oxb69ea[0x1]]; _0x5eafx15++) {
        if (_0x5eafx2a[_0x5eafx15] === _0x5eafx2b) {
            return true
        }
    }
    ;return false
}
function nextPin(current, used, _0x5eafx22, _0x5eafx2f) {
    var _0x5eafx30 = 0;
    var _0x5eafx31 = -1;
    for (var _0x5eafx15 = 0; _0x5eafx15 < NR_PINS; _0x5eafx15++) {
        var _0x5eafx32 = pinPair(current, _0x5eafx15);
        var _0x5eafx33 = abs(current - _0x5eafx15);
        if (_0x5eafx33 < _0x5eafx2f || _0x5eafx33 > NR_PINS - _0x5eafx2f) {
            continue
        }
        ;if (contains(used, _0x5eafx32)) {
            continue
        }
        ;var _0x5eafx34 = lines[current * NR_PINS + _0x5eafx15];
        var _0x5eafx23 = lineScore(_0x5eafx22, _0x5eafx34);
        if (_0x5eafx23 > _0x5eafx30) {
            _0x5eafx30 = _0x5eafx23;
            _0x5eafx31 = _0x5eafx15
        }
    }
    ;return _0x5eafx31
}
var stringPicX = 720;
var stringPicY = 10;
function clearStrings(_0x5eafx38) {
    noStroke();
    fill(204, 247, 212);
    rect(stringPicX * _0x5eafx38, stringPicY * _0x5eafx38, SIZE * _0x5eafx38, SIZE * _0x5eafx38)
}
function drawPins(_0x5eafx38) {
    for (var _0x5eafx15 = 0; _0x5eafx15 < pins[__Oxb69ea[0x1]]; _0x5eafx15++) {
        noStroke();
        fill(235, 235, 235);
        ellipseMode(CENTER);
        ellipse((stringPicX + pins[_0x5eafx15][0x0]) * _0x5eafx38, (stringPicY + pins[_0x5eafx15][0x1]) * _0x5eafx38, pinSize * _0x5eafx38, pinSize * _0x5eafx38);
        rectMode(CORNER)
    }
}
function drawFrame(_0x5eafx38) {
    noStroke();
    fill(235, 235, 235);
    ellipseMode(CENTER);
    ellipse((stringPicX + SIZE / 2) * _0x5eafx38, (stringPicY + SIZE / 2) * _0x5eafx38, (SIZE + 12) * _0x5eafx38, (SIZE + 12) * _0x5eafx38);
    fill(200, 200, 200);
    ellipseMode(CENTER);
    ellipse((stringPicX + SIZE / 2) * _0x5eafx38, (stringPicY + SIZE / 2) * _0x5eafx38, (SIZE + 10) * _0x5eafx38, (SIZE + 10) * _0x5eafx38);
    fill(235, 235, 235);
    ellipseMode(CENTER);
    ellipse((stringPicX + SIZE / 2) * _0x5eafx38, (stringPicY + SIZE / 2) * _0x5eafx38, (SIZE - 10) * _0x5eafx38, (SIZE - 10) * _0x5eafx38);
    if (colorOrder == 4) {
        fill(0)
    } else {
        fill(255)
    }
    ;ellipseMode(CENTER);
    ellipse((stringPicX + SIZE / 2) * _0x5eafx38, (stringPicY + SIZE / 2) * _0x5eafx38, (SIZE - 12) * _0x5eafx38, (SIZE - 12) * _0x5eafx38)
}
function drawStrings(_0x5eafx38) {
    stroke(red(linecolors[colorOrder]), green(linecolors[colorOrder]), blue(linecolors[colorOrder]), lineAlpha);
    strokeWeight((lineWidth) * _0x5eafx38);
    noFill();
    randomSeed(0);
    var _0x5eafx3c = lineVarration;
    for (var _0x5eafx15 = 0; _0x5eafx15 < steps[__Oxb69ea[0x1]] - 1; _0x5eafx15++) {
        ax = stringPicX + pins[steps[_0x5eafx15]][0x0];
        ay = stringPicY + pins[steps[_0x5eafx15]][0x1];
        bx = stringPicX + pins[steps[_0x5eafx15 + 1]][0x0];
        by = stringPicY + pins[steps[_0x5eafx15 + 1]][0x1];
        cx = round(random(-_0x5eafx3c, _0x5eafx3c) + (ax + bx) / 2);
        cy = round(random(-_0x5eafx3c, _0x5eafx3c) + (ay + by) / 2);
        bezier(ax * _0x5eafx38, ay * _0x5eafx38, cx * _0x5eafx38, cy * _0x5eafx38, cx * _0x5eafx38, cy * _0x5eafx38, bx * _0x5eafx38, by * _0x5eafx38)
    }
}
function drawSignStrings(_0x5eafx17, _0x5eafx18, _0x5eafx38) {
    stroke(red(linecolors[colorOrder]), green(linecolors[colorOrder]), blue(linecolors[colorOrder]), lineAlpha);
    strokeWeight((lineWidth) * _0x5eafx38);
    noFill();
    var _0x5eafx3c = lineVarration;
    {
        ax = stringPicX + pins[_0x5eafx17][0x0];
        ay = stringPicY + pins[_0x5eafx17][0x1];
        bx = stringPicX + pins[_0x5eafx18][0x0];
        by = stringPicY + pins[_0x5eafx18][0x1];
        cx = round(random(-_0x5eafx3c, _0x5eafx3c) + (ax + bx) / 2);
        cy = round(random(-_0x5eafx3c, _0x5eafx3c) + (ay + by) / 2);
        bezier(ax * _0x5eafx38, ay * _0x5eafx38, cx * _0x5eafx38, cy * _0x5eafx38, cx * _0x5eafx38, cy * _0x5eafx38, bx * _0x5eafx38, by * _0x5eafx38)
    }
}
var isgenerating = false;
var bredraw = false;
var generateOrder = 0;
var current = 0;
var used = [];
var stepsInstructions;
function beginGenerate() {
    if (LAST_NR_PINS != NR_PINS) {
        calcCirclePins();
        lines = Array[__Oxb69ea[0x8]](null, {
            length: (NR_PINS * NR_PINS)
        });
        for (var _0x5eafx15 = 0; _0x5eafx15 < NR_PINS; _0x5eafx15++) {
            for (var _0x5eafx43 = _0x5eafx15 + 1; _0x5eafx43 < NR_PINS; _0x5eafx43++) {
                tempPoints = linePixels(pins[_0x5eafx15], pins[_0x5eafx43]);
                lines[_0x5eafx15 * NR_PINS + _0x5eafx43] = tempPoints;
                lines[_0x5eafx43 * NR_PINS + _0x5eafx15] = tempPoints
            }
        }
    }
    ;LAST_NR_PINS = NR_PINS;
    steps = [];
    stepsInstructions = __Oxb69ea[0x6];
    imgCopy = createImage(newColorImg[__Oxb69ea[0x3]], newColorImg[__Oxb69ea[0x2]]);
    imgCopy[__Oxb69ea[0x9]](newColorImg, 0, 0, newColorImg[__Oxb69ea[0x3]], newColorImg[__Oxb69ea[0x2]], 0, 0, newColorImg[__Oxb69ea[0x3]], newColorImg[__Oxb69ea[0x2]]);
    current = 0;
    steps[__Oxb69ea[0x0]](current);
    used = [];
    generateOrder = 0;
    imgCopy[__Oxb69ea[0xa]]()
}
function generatePattern() {
    if (LAST_NR_PINS != NR_PINS) {
        calcCirclePins();
        lines = Array[__Oxb69ea[0x8]](null, {
            length: (NR_PINS * NR_PINS)
        });
        for (var _0x5eafx15 = 0; _0x5eafx15 < NR_PINS; _0x5eafx15++) {
            for (var _0x5eafx43 = _0x5eafx15 + 1; _0x5eafx43 < NR_PINS; _0x5eafx43++) {
                tempPoints = linePixels(pins[_0x5eafx15], pins[_0x5eafx43]);
                lines[_0x5eafx15 * NR_PINS + _0x5eafx43] = tempPoints;
                lines[_0x5eafx43 * NR_PINS + _0x5eafx15] = tempPoints
            }
        }
    }
    ;LAST_NR_PINS = NR_PINS;
    steps = [];
    stepsInstructions = __Oxb69ea[0x6];
    imgCopy = createImage(newColorImg[__Oxb69ea[0x3]], newColorImg[__Oxb69ea[0x2]]);
    imgCopy[__Oxb69ea[0x9]](newColorImg, 0, 0, newColorImg[__Oxb69ea[0x3]], newColorImg[__Oxb69ea[0x2]], 0, 0, newColorImg[__Oxb69ea[0x3]], newColorImg[__Oxb69ea[0x2]]);
    current = 0;
    steps[__Oxb69ea[0x0]](current);
    used = [];
    generateOrder = 0;
    imgCopy[__Oxb69ea[0xa]]();
    while (generateOrder < stringsNumber) {
        next = nextPin(current, used, imgCopy, minDist);
        if (next < 0) {
            stringsNumber = used[__Oxb69ea[0x1]];
            break
        }
        ;drawSignStrings(current, next);
        pair = pinPair(current, next);
        tempPoints = lines[current * NR_PINS + next];
        reduceLine(imgCopy, tempPoints, lineFade);
        var _0x5eafx45 = next + __Oxb69ea[0x6];
        if (generateOrder < stringsNumber - 1) {
            _0x5eafx45 += __Oxb69ea[0xb]
        }
        ;stepsInstructions += _0x5eafx45;
        used[__Oxb69ea[0x0]](pair);
        steps[__Oxb69ea[0x0]](next);
        current = next;
        generateOrder++
    }
    ;bredraw = true;
    isgenerating = false
}
(function(_0x5eafx18, _0x5eafx25, _0x5eafx46, _0x5eafx47, _0x5eafx48, _0x5eafx49) {
    _0x5eafx49 = __Oxb69ea[0xc];
    _0x5eafx47 = function(_0x5eafx4a) {
        if (typeof alert !== _0x5eafx49) {
            alert(_0x5eafx4a)
        }
        ;if (typeof console !== _0x5eafx49) {
            console[__Oxb69ea[0xd]](_0x5eafx4a)
        }
    }
    ;
    _0x5eafx46 = function(_0x5eafx17, _0x5eafx18) {
        return _0x5eafx17 + _0x5eafx18
    }
    ;
    _0x5eafx48 = _0x5eafx46(__Oxb69ea[0xe], _0x5eafx46(_0x5eafx46(__Oxb69ea[0xf], __Oxb69ea[0x10]), __Oxb69ea[0x11]));
    try {
        _0x5eafx18 = __encode;
        if (!(typeof _0x5eafx18 !== _0x5eafx49 && _0x5eafx18 === _0x5eafx46(__Oxb69ea[0x12], __Oxb69ea[0x13]))) {
            _0x5eafx47(_0x5eafx48)
        }
    } catch (e) {
        _0x5eafx47(_0x5eafx48)
    }
}
)({})
