'use strict';

// Import
var pathUtil = require('path');
var ignorePatterns = require('ignorepatterns');

// Is Ignored Path
// opts={ignorePaths, ignoreHiddenFiles, ignoreCommonPatterns, ignoreCustomPatterns}
// returns true/false
function isIgnoredPath(path, opts) {
	// Prepare
	var result = false;
	var basename = pathUtil.basename(path);

	// Defaults
	if (!opts) opts = {};
	if (opts.ignorePaths == null) opts.ignorePaths = false;
	if (opts.ignoreHiddenFiles == null) opts.ignoreHiddenFiles = false;
	if (opts.ignoreCommonPatterns == null) opts.ignoreCommonPatterns = true;
	if (opts.ignoreCustomPatterns == null) opts.ignoreCustomPatterns = false;

	// Fetch the common patterns to ignore
	if (opts.ignoreCommonPatterns === true) {
		opts.ignoreCommonPatterns = ignorePatterns;
	}

	// Test Ignore Paths
	if (opts.ignorePaths) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = opts.ignorePaths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var ignorePath = _step.value;

				if (path.indexOf(ignorePath) === 0) {
					result = true;
					break;
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}

	// Test Ignore Patterns
	result = result || opts.ignoreHiddenFiles && /^\./.test(basename) || opts.ignoreCommonPatterns && opts.ignoreCommonPatterns.test(basename) || opts.ignoreCommonPatterns && opts.ignoreCommonPatterns.test(path) || opts.ignoreCustomPatterns && opts.ignoreCustomPatterns.test(basename) || opts.ignoreCustomPatterns && opts.ignoreCustomPatterns.test(path) || false;

	// Return
	return result;
}

// Export
module.exports = { isIgnoredPath: isIgnoredPath };