// Import
const pathUtil = require('path')
const ignorePatterns = require('ignorepatterns')

// Is Ignored Path
// opts={ignorePaths, ignoreHiddenFiles, ignoreCommonPatterns, ignoreCustomPatterns}
// returns true/false
function isIgnoredPath (path, opts) {
	// Prepare
	let result = false
	const basename = pathUtil.basename(path)

	// Defaults
	if ( !opts )  opts = {}
	if ( opts.ignorePaths == null )  opts.ignorePaths = false
	if ( opts.ignoreHiddenFiles == null )  opts.ignoreHiddenFiles = false
	if ( opts.ignoreCommonPatterns == null )  opts.ignoreCommonPatterns = true
	if ( opts.ignoreCustomPatterns == null )  opts.ignoreCustomPatterns = false

	// Fetch the common patterns to ignore
	if ( opts.ignoreCommonPatterns === true ) {
		opts.ignoreCommonPatterns = ignorePatterns
	}

	// Test Ignore Paths
	if ( opts.ignorePaths ) {
		for ( const ignorePath of opts.ignorePaths ) {
			if ( path.indexOf(ignorePath) === 0 ) {
				result = true
				break
			}
		}
	}

	// Test Ignore Patterns
	result =
		result ||
		(opts.ignoreHiddenFiles    && (/^\./).test(basename)) ||
		(opts.ignoreCommonPatterns && opts.ignoreCommonPatterns.test(basename)) ||
		(opts.ignoreCommonPatterns && opts.ignoreCommonPatterns.test(path)) ||
		(opts.ignoreCustomPatterns && opts.ignoreCustomPatterns.test(basename)) ||
		(opts.ignoreCustomPatterns && opts.ignoreCustomPatterns.test(path)) ||
		false

	// Return
	return result
}

// Export
module.exports = {isIgnoredPath}
