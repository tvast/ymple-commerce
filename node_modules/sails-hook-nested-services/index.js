'use strict';

var _ = require('lodash');

module.exports = function(sails) {
    return {
        initialize: function(done) {
            try {
                var services = require('include-all')({
                    dirname: sails.config.appPath + '/api/services',
                    filter: new RegExp("(.+)\\.js$"),
                    flattenDirectories: true,
                    keepDirectoryPath: true
                });

                _.extend(sails.services, _.pick(services, function(service, name) {
                    return /^[^\/]+\/[^\/]+/g.test(name);
                }));

                return done();
            } catch (err) {
                /* istanbul ignore next */
                done(err);
            }
        }
    };
};
