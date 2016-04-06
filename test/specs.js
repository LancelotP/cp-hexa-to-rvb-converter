var expect = require('expect.js');
var converter = require('../sources/converter');

describe('Must return the rgb format of an hexacode color', function () {
    it("should return [0, 0, 0]", function () {
        return expect(converter('#000000')).to.eql([0, 0, 0]);
    });
    it("should return [255, 255, 255]", function () {
        return expect(converter('#FFFFFF')).to.eql([255, 255, 255]);
    });
    it("should return [255, 255, 255]", function () {
        return expect(converter('#ffffff')).to.eql([255, 255, 255]);
    });
    it("should return [255, 255, 255]", function () {
        return expect(converter('#FfFFff')).to.eql([255, 255, 255]);
    });
    it("should return 'Error'", function () {
        return expect(converter('#0000000')).to.equal('Wrong Format');
    });
    it("should return 'Error'", function () {
        return expect(converter('00000000')).to.equal('Hash missing');
    });
    it("should return 'Error'", function () {
        return expect(converter('#00000G')).to.equal('Error');
    });
    it("should return [134, 192, 239]", function () {
        return expect(converter('#86c0ef')).to.eql([134, 192, 239]);
    });
    it("should return [186, 7, 211]", function () {
        return expect(converter('#ba07d3')).to.eql([186, 7, 211]);
    });
    it("should return [126, 1, 38]", function () {
        return expect(converter('#7e0126')).to.eql([126, 1, 38]);
    });
    it("should return [61, 79, 200]", function () {
        return expect(converter('#3d4fc8')).to.eql([61, 79, 200]);
    });
    it("should return [82, 58, 107]", function () {
        return expect(converter('#523a6b')).to.eql([82, 58, 107]);
    });
});
