/* jshint expr:true */
'use strict';

var expect = require('chai').expect;

describe('sails-hook-nested-services tests', function() {
    var sails, cwd;

    before(function(done) {
        this.timeout(10000);

        cwd = process.cwd();
        process.chdir(__dirname + '/test-app');

        var Sails = new require('sails').Sails();
        Sails.lift({
            hooks: {
                sockets: false,
                pubsub: false,
                grunt: false,
                'nested-services': require('../index')
            },
            log: {
                level: 'silent'
            }
        }, function(err, _sails) {
            if (err) {
                return done(err);
            }
            sails = _sails;
            done();
        });
    });


    after(function(done) {
        process.chdir(cwd);
        if (sails) {
            return sails.lower(done);
        }
        done();
    });


    it('sails does not crash', function() {
        return true;
    });


    it('should load top level services as normal', function() {
        expect(sails.services.normal).to.be.an('object');
    });


    it('should load nested services at the appropriate path', function() {
        expect(sails.services['one/test']).to.be.an('object');
        expect(sails.services['one/test'].one).to.be.a('function');
        expect(sails.services['one/two/test']).to.be.an('object');
        expect(sails.services['one/two/test'].two).to.be.a('function');
    });
});
