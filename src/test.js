var chai = require('chai')
chai.use(require('chai-as-promised'))
var should = chai.should()

/*global describe, it, before, beforeEach, after, afterEach */

describe('#module', () => {
    "use strict"
    let mod = require('..');
    it('should load the module', () => {
        should.exist(mod);
        should.exist(mod.computePosAndSizeNoFit);

    });

    it('should resize image orizontally', () => {
        var cd = {
            cw: 100,
            ch: 100
        };
        mod.computePosAndSizeNoFit({
            iw: 200,
            ih: 100
        }, cd).should.be.deep.equal({
            nw: 100,
            nh: 50
        });
        mod.computePosAndSizeNoFit({
            iw: 70,
            ih: 100
        }, cd).should.be.deep.equal({
            nw: 70,
            nh: 100
        });
    });

    it('should resize image vertically', () => {
        var cd = {
            cw: 100,
            ch: 100
        };
        mod.computePosAndSizeNoFit({
            ih: 200,
            iw: 100
        }, cd).should.be.deep.equal({
            nw: 50,
            nh: 100
        });
        mod.computePosAndSizeNoFit({
            ih: 70,
            iw: 100
        }, cd).should.be.deep.equal({
            nh: 70,
            nw: 100
        });
    })
})
