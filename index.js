//var _ = require('lodash')

"use strict";

var _module = function () {

    /* reduces height and width */
    function fitHeight(nw, nh, ch, iar) {
        if (nh > ch) {
            return {
                nw: ch * iar,
                nh: ch
            };
        } else {
            return {
                nw: nw, nh: nh
            };
        }
    }

    /* reduces width and height */
    function fitWidth(nw, nh, cw, iar) {
        if (nw > cw) {
            return {
                nw: cw,
                nh: cw / iar
            };
        } else {
            return {
                nw: nw, nh: nh
            };
        }
    }

    function computePosAndSizeNoFit(imageDimensions, canvasDimensions) {
        var cw = canvasDimensions.cw;
        var ch = canvasDimensions.ch;
        var iw = imageDimensions.iw;
        var ih = imageDimensions.ih;

        var iar = iw / ih;

        var nw = iw;
        var nh = ih;

        var _ref = fitWidth(nw, nh, cw, iar);

        nw = _ref.nw;
        nh = _ref.nh;

        var _ref2 = fitHeight(nw, nh, ch, iar);

        nw = _ref2.nw;
        nh = _ref2.nh;

        return {
            nw: nw, nh: nh
        };
    }

    return {
        computePosAndSizeNoFit: computePosAndSizeNoFit
    };
};

module.exports = _module();