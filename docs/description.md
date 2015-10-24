What is it
==========

Computes rescaling coordinates (padding and new size) of an image to be
put into a canvas, by keeping aspect ratio.

E.g., compute vertical padding of wide figures:

``` js

// Canvas Dimensions (width and height)
var cd = {
    cw: 100,
    ch: 100
};

// Pass in Dimensions (iw = image width, ih = image height)
computeAllPosAndSizeNoFit({
    iw: 400,
    ih: 100
    }, cd)

//You get:
//
//{
//  dx: 0,     <- h padding
//  dy: 37.5,  <- v padding
//  scaleh: 0.25,
//  scalew: 0.25,
//  nw: 100,   <- new width
//  nh: 25     <- new height
//}
```
