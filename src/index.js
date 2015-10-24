//var _ = require('lodash')

var _module = () => {

    /* reduces height and width */
    function fitHeight(nw, nh, ch, iar) {
        if (nh > ch) {
            return {
                nw: ch * iar,
                nh: ch
            }
        } else {
            return {
                nw, nh
            }
        }
    }

    /* reduces width and height */
    function fitWidth(nw, nh, cw, iar) {
        if (nw > cw) {
            return {
                nw: cw,
                nh: cw / iar
            }
        } else {
            return {
                nw, nh
            }
        }
    }

    function computePosAndSizeNoFit(imageDimensions, canvasDimensions) {
        let {
            cw, ch
        } = canvasDimensions;
        let {
            iw, ih
        } = imageDimensions;
        let iar = iw / ih;

        let nw = iw;
        let nh = ih;

        ({
            nw, nh
        } = fitWidth(nw, nh, cw, iar));
        ({
            nw, nh
        } = fitHeight(nw, nh, ch, iar));

        return {
            nw, nh
        };
    }

    return {
        computePosAndSizeNoFit
    }
}

module.exports = _module()
