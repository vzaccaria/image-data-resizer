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

    function computeAllPosAndSizeNoFit(imageDimensions, canvasDimensions) {
        let { nw, nh } = computePosAndSizeNoFit(imageDimensions, canvasDimensions);
        let { iw, ih } = imageDimensions;
        let { cw, ch } = canvasDimensions;


        let scalew = nw/iw
        let scaleh = nh/ih

        let dx = (cw - nw)/2
        let dy = (ch - nh)/2

        return { nw, nh, scalew, scaleh, dx, dy };

    }


    return {
        computePosAndSizeNoFit, computeAllPosAndSizeNoFit
    }
}



module.exports = _module()
