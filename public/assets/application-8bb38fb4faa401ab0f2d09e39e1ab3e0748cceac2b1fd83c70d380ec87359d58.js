/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */


(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var deletedIds = [];

var document = window.document;

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.12.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type( obj ) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {

			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
		} catch ( e ) {

			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( !support.ownFirst ) {
			for ( key in obj ) {
				return hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {

			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1, IE<9
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( indexOf ) {
				return indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {

				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) {
			while ( second[ j ] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: function() {
		return +( new Date() );
	},

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// init accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt( 0 ) === "<" &&
				selector.charAt( selector.length - 1 ) === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {

						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[ 2 ] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof root.ready !== "undefined" ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter( function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[ 0 ], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem, this );
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.uniqueSort( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = true;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );

					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * Clean-up method for dom ready events
 */
function detach() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );

	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function completed() {

	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener ||
		window.event.type === "load" ||
		document.readyState === "complete" ) {

		detach();
		jQuery.ready();
	}
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE6-10
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );

		// If IE event model is used
		} else {

			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch ( e ) {}

			if ( top && top.doScroll ) {
				( function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {

							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll( "left" );
						} catch ( e ) {
							return window.setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				} )();
			}
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) {
	break;
}
support.ownFirst = i === "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery( function() {

	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) {

		// Return for frameset docs that don't have a body
		return;
	}

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== "undefined" ) {

		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {

			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
} );


( function() {
	var div = document.createElement( "div" );

	// Support: IE<9
	support.deleteExpando = true;
	try {
		delete div.test;
	} catch ( e ) {
		support.deleteExpando = false;
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();
var acceptData = function( elem ) {
	var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
};




var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}

function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
		data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {

		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {

		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split( " " );
					}
				}
			} else {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[ i ] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, undefined
	} else {
		cache[ id ] = undefined;
	}
}

jQuery.extend( {
	cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: {
		"applet ": true,
		"embed ": true,

		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				jQuery.data( this, key );
			} );
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each( function() {
				jQuery.data( this, key, value );
			} ) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each( function() {
			jQuery.removeData( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object,
	// or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );


( function() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() {
		if ( shrinkWrapBlocksVal != null ) {
			return shrinkWrapBlocksVal;
		}

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {

			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== "undefined" ) {

			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		}

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	};

} )();
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn(
					elems[ i ],
					key,
					raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[ 0 ], key ) : emptyGet;
};
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );

var rleadingWhitespace = ( /^\s+/ );

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
		"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
		"mark|meter|nav|output|picture|progress|section|summary|template|time|video";



function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}


( function() {
	var div = document.createElement( "div" ),
		fragment = document.createDocumentFragment(),
		input = document.createElement( "input" );

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );

	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input = document.createElement( "input" );
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
	support.noCloneEvent = !!div.addEventListener;

	// Support: IE<9
	// Since attributes and properties are the same in IE,
	// cleanData must set properties to undefined rather than use removeAttribute
	div[ jQuery.expando ] = 1;
	support.attributes = !div.getAttribute( jQuery.expando );
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {
	option: [ 1, "<select multiple='multiple'>", "</select>" ],
	legend: [ 1, "<fieldset>", "</fieldset>" ],
	area: [ 1, "<map>", "</map>" ],

	// Support: IE8
	param: [ 1, "<object>", "</object>" ],
	thead: [ 1, "<table>", "</table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
	// unless wrapped in a div with non-breaking characters in front of it.
	_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
};

// Support: IE8-IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
				undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context;
			( elem = elems[ i ] ) != null;
			i++
		) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; ( elem = elems[ i ] ) != null; i++ ) {
		jQuery._data(
			elem,
			"globalEval",
			!refElements || jQuery._data( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/,
	rtbody = /<tbody/i;

function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

function buildFragment( elems, context, scripts, selection, ignored ) {
	var j, elem, contains,
		tmp, tag, tbody, wrap,
		l = elems.length,

		// Ensure a safe fragment
		safe = createSafeFragment( context ),

		nodes = [],
		i = 0;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || safe.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;

				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Manually add leading whitespace removed by IE
				if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
					nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
				}

				// Remove IE's autoinserted <tbody> from table fragments
				if ( !support.tbody ) {

					// String was a <table>, *may* have spurious <tbody>
					elem = tag === "table" && !rtbody.test( elem ) ?
						tmp.firstChild :

						// String was a bare <thead> or <tfoot>
						wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
							tmp :
							0;

					j = elem && elem.childNodes.length;
					while ( j-- ) {
						if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
							!tbody.childNodes.length ) {

							elem.removeChild( tbody );
						}
					}
				}

				jQuery.merge( nodes, tmp.childNodes );

				// Fix #12392 for WebKit and IE > 9
				tmp.textContent = "";

				// Fix #12392 for oldIE
				while ( tmp.firstChild ) {
					tmp.removeChild( tmp.firstChild );
				}

				// Remember the top-level container for proper cleanup
				tmp = safe.lastChild;
			}
		}
	}

	// Fix #11356: Clear elements from fragment
	if ( tmp ) {
		safe.removeChild( tmp );
	}

	// Reset defaultChecked for any radios and checkboxes
	// about to be appended to the DOM in IE 6/7 (#8060)
	if ( !support.appendChecked ) {
		jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
	}

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}

			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( safe.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	tmp = null;

	return safe;
}


( function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
	for ( i in { submit: true, change: true, focusin: true } ) {
		eventName = "on" + i;

		if ( !( support[ i ] = eventName in window ) ) {

			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" &&
					( !e || jQuery.event.triggered !== e.type ) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};

			// Add elem as a property of the handle fn to prevent a memory leak
			// with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
				jQuery._data( cur, "handle" );

			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if (
				( !special._default ||
				 special._default.apply( eventPath.pop(), data ) === false
				) && acceptData( elem )
			) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {

						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Safari 6-8+
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
			"pageX pageY screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ?
					original.toElement :
					fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {

						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	// Piggyback on a donor event to simulate a different one
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true

				// Previously, `originalEvent: {}` was set here, so stopPropagation call
				// would not be triggered on donor event, since in our own
				// jQuery.event.stopPropagation function we had a check for existence of
				// originalEvent.stopPropagation method, so, consequently it would be a noop.
				//
				// Guard for simulated events was moved to jQuery.event.stopPropagation function
				// since `originalEvent` should point to the original event for the
				// constancy with other events and for more focused logic
			}
		);

		jQuery.event.trigger( e, null, elem );

		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event,
			// to properly expose it to GC
			if ( typeof elem[ name ] === "undefined" ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( !e || this.isSimulated ) {
			return;
		}

		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

// IE submit delegation
if ( !support.submit ) {

	jQuery.event.special.submit = {
		setup: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {

				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?

						// Support: IE <=8
						// We use jQuery.prop instead of elem.form
						// to allow fixing the IE8 delegated submit issue (gh-2332)
						// by 3rd party polyfills/workarounds.
						jQuery.prop( elem, "form" ) :
						undefined;

				if ( form && !jQuery._data( form, "submit" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submitBubble = true;
					} );
					jQuery._data( form, "submit", true );
				}
			} );

			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {

			// If form was submitted by the user, bubble the event up the tree
			if ( event._submitBubble ) {
				delete event._submitBubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event );
				}
			}
		},

		teardown: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.change ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {

				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._justChanged = true;
						}
					} );
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._justChanged && !event.isTrigger ) {
							this._justChanged = false;
						}

						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event );
					} );
				}
				return false;
			}

			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event );
						}
					} );
					jQuery._data( elem, "change", true );
				}
			} );
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger ||
				( elem.type !== "radio" && elem.type !== "checkbox" ) ) {

				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	} );
}

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	},

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}
	return elem;
}

function cloneCopyEvent( src, dest ) {
	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {

		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var first, node, hasScripts,
		scripts, doc, fragment,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!jQuery._data( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval(
								( node.text || node.textContent || node.innerHTML || "" )
									.replace( rcleanScript, "" )
							);
						}
					}
				}
			}

			// Fix #11809: Avoid leaking memory
			fragment = first = null;
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		elems = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = elems[ i ] ) != null; i++ ) {

		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
			!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {

			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
				( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {

				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[ i ] ) {
					fixCloneNodeIssues( node, destElements[ i ] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
					cloneCopyEvent( node, destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems, /* internal */ forceAcceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			attributes = support.attributes,
			special = jQuery.event.special;

		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			if ( forceAcceptData || acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// Support: IE<9
						// IE does not allow us to delete expando properties from nodes
						// IE creates expando attributes along with the property
						// IE does not have a removeAttribute function on Document nodes
						if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
							elem.removeAttribute( internalKey );

						// Webkit & Blink performance suffers when deleting properties
						// from DOM nodes, so set to undefined instead
						// https://code.google.com/p/chromium/issues/detail?id=378607
						} else {
							elem[ internalKey ] = undefined;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append(
					( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
				);
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {

			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {

						// Remove element nodes and prevent memory leaks
						elem = this[ i ] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	div.style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = div.style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!div.style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container = document.createElement( "div" );
	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	div.innerHTML = "";
	container.appendChild( div );

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
		div.style.WebkitBoxSizing === "";

	jQuery.extend( support, {
		reliableHiddenOffsets: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function() {

			// We're checking for pixelPositionVal here instead of boxSizingReliableVal
			// since that compresses better and they're computed together anyway.
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},

		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},

		pixelPosition: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelPositionVal;
		},

		reliableMarginRight: function() {

			// Support: Android 2.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginRightVal;
		},

		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		}
	} );

	function computeStyleTests() {
		var contents, divStyle,
			documentElement = document.documentElement;

		// Setup
		documentElement.appendChild( container );

		div.style.cssText =

			// Support: Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";

		// Support: IE<9
		// Assume reasonable values in the absence of getComputedStyle
		pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
		pixelMarginRightVal = reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9.
		if ( window.getComputedStyle ) {
			divStyle = window.getComputedStyle( div );
			pixelPositionVal = ( divStyle || {} ).top !== "1%";
			reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
			boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";

			// Support: Android 2.3 only
			// Div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			contents.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );

			div.removeChild( contents );
		}

		// Support: IE6-8
		// First check that getClientRects works as expected
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.style.display = "none";
		reliableHiddenOffsetsVal = div.getClientRects().length === 0;
		if ( reliableHiddenOffsetsVal ) {
			div.style.display = "";
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			div.childNodes[ 0 ].style.borderCollapse = "separate";
			contents = div.getElementsByTagName( "td" );
			contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			if ( reliableHiddenOffsetsVal ) {
				contents[ 0 ].style.display = "";
				contents[ 1 ].style.display = "none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			}
		}

		// Teardown
		documentElement.removeChild( container );
	}

} )();


var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) {
	getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

	curCSS = function( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value"
			// instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values,
			// but width seems to be reliably pixels
			// this is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	};
} else if ( documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, computed ) {
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are
		// proportional to the parent element instead
		// and we can't measure the parent instead because it
		// might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	};
}




function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/i,

	// swappable if display is none or starts with table except
	// "table", "table-cell", or "table-caption"
	// see here for display values:
	// https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] =
					jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) {
				jQuery._data(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {

		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight
			// (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try {
					style[ name ] = value;
				} catch ( e ) {}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing &&
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
} );

if ( !support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {

			// IE uses filters for opacity
			return ropacity.test( ( computed && elem.currentStyle ?
				elem.currentStyle.filter :
				elem.style.filter ) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
					computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist -
			// attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule
				// or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return (
				parseFloat( curCSS( elem, "marginLeft" ) ) ||

				// Support: IE<=11+
				// Running getBoundingClientRect on a disconnected node in IE throws an error
				// Support: IE8 only
				// getClientRects() errors on disconnected elems
				( jQuery.contains( elem.ownerDocument, elem ) ?
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} ) :
					0
				)
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var a,
		input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Support: Windows Web Apps (WWA)
	// `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "checkbox" );
	div.appendChild( input );

	a = div.getElementsByTagName( "a" )[ 0 ];

	// First batch of tests.
	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class.
	// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute( "style" ) );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute( "href" ) === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement( "form" ).enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
} )();


var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if (
					hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// handle most common string cases
					ret.replace( rreturn, "" ) :

					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled :
								option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {

					// Setting the type on a radio button after the value resets the value in IE8-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;

					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {

			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		} else {

			// Support: IE<9
			// Use defaultChecked and defaultSelected for oldIE
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} else {
		attrHandle[ name ] = function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
	}
} );

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {

				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {

				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {

			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					( ret = elem.ownerDocument.createAttribute( name ) )
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each( [ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	} );
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {

			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case sensitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each( function() {

			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch ( e ) {}
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {

	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each( [ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	} );
}

// Support: Safari, IE9+
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return jQuery.attr( elem, "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// store className if set
					jQuery._data( this, "__className__", className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				jQuery.attr( this, "class",
					className || value === false ?
					"" :
					jQuery._data( this, "__className__" ) || ""
				);
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




// Return jQuery for attributes-only inclusion


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );


var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {

	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {

		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	} ) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new window.DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch ( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,

	// IE leaves an \r character at EOL
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var

			// Cross-domain detection vars
			parts,

			// Loop variable
			i,

			// URL without anti-cache param
			cacheURL,

			// Response headers as string
			responseHeadersString,

			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,

			// Response headers
			responseHeaders,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" )
			.replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


function getDisplay( elem ) {
	return elem.style && elem.style.display || jQuery.css( elem, "display" );
}

function filterHidden( elem ) {

	// Disconnected elements are considered hidden
	if ( !jQuery.contains( elem.ownerDocument || document, elem ) ) {
		return true;
	}
	while ( elem && elem.nodeType === 1 ) {
		if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
			return true;
		}
		elem = elem.parentNode;
	}
	return false;
}

jQuery.expr.filters.hidden = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return support.reliableHiddenOffsets() ?
		( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
			!elem.getClientRects().length ) :
			filterHidden( elem );
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

	// Support: IE6-IE8
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		if ( this.isLocal ) {
			return createActiveXHR();
		}

		// Support: IE 9-11
		// IE seems to error on cross-domain PATCH requests when ActiveX XHR
		// is used. In IE 9+ always use the native XHR.
		// Note: this condition won't catch Edge as it doesn't define
		// document.documentMode but it also doesn't support ActiveX so it won't
		// reach this code.
		if ( document.documentMode > 8 ) {
			return createStandardXHR();
		}

		// Support: IE<9
		// oldIE XHR does not support non-RFC2616 methods (#13240)
		// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
		// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
		// Although this check for six methods instead of eight
		// since IE also does not support "trace" and "connect"
		return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
			createStandardXHR() || createActiveXHR();
	} :

	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	} );
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport( function( options ) {

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {

						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch ( e ) {

									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;

								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					// Do send the request
					// `xhr.send` may raise an exception, but it will be
					// handled in jQuery.ajax (so no try/catch here)
					if ( !options.async ) {

						// If we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {

						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						window.setTimeout( callback );
					} else {

						// Register the callback, but delay it in case `xhr.send` throws
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	} );
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch ( e ) {}
}




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// data: string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};





/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left
		// is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== "undefined" ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? ( prop in win ) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
	function( defaultExtra, funcName ) {

		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only,
					// but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  'use strict';

  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]), textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[name][type=file]:not([disabled])',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Up-to-date Cross-Site Request Forgery token
    csrfToken: function() {
     return $('meta[name=csrf-token]').attr('content');
    },

    // URL param that must contain the CSRF token
    csrfParam: function() {
     return $('meta[name=csrf-param]').attr('content');
    },

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = rails.csrfToken();
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Make sure that all forms have actual up-to-date tokens (cached forms contain old ones)
    refreshCSRFTokens: function(){
      $('form input[name="' + rails.csrfParam() + '"]').val(rails.csrfToken());
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element[0].href;
    },

    // Checks "data-remote" if true to handle the request through a XHR request.
    isRemote: function(element) {
      return element.data('remote') !== undefined && element.data('remote') !== false;
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.data('ujs:submit-button-formmethod') || element.attr('method');
          url = element.data('ujs:submit-button-formaction') || element.attr('action');
          data = $(element[0]).serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
          element.data('ujs:submit-button-formmethod', null);
          element.data('ujs:submit-button-formaction', null);
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: rails.isCrossDomain(url)
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Determines if the request is a cross domain request.
    isCrossDomain: function(url) {
      var originAnchor = document.createElement('a');
      originAnchor.href = location.href;
      var urlAnchor = document.createElement('a');

      try {
        urlAnchor.href = url;
        // This is a workaround to a IE bug.
        urlAnchor.href = urlAnchor.href;

        // If URL protocol is false or is a string containing a single colon
        // *and* host are false, assume it is not a cross-domain request
        // (should only be the case for IE7 and IE compatibility mode).
        // Otherwise, evaluate protocol and host of the URL against the origin
        // protocol and host.
        return !(((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host) ||
          (originAnchor.protocol + '//' + originAnchor.host ===
            urlAnchor.protocol + '//' + urlAnchor.host));
      } catch (e) {
        // If there is an error parsing the URL, assume it is crossDomain.
        return true;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = rails.csrfToken(),
        csrfParam = rails.csrfParam(),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element[method]());
        element[method](replacement);
      }

      element.prop('disabled', true);
      element.data('ujs:disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with') !== undefined) {
        element[method](element.data('ujs:enable-with'));
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.prop('disabled', false);
      element.removeData('ujs:disabled');
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        try {
          answer = rails.confirm(message);
        } catch (e) {
          (console.error || console.log).call(console, e.stack || e);
        }
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var foundInputs = $(),
        input,
        valueToCheck,
        radiosForNameWithNoneSelected,
        radioName,
        selector = specifiedSelector || 'input,textarea',
        requiredInputs = form.find(selector),
        checkedRadioButtonNames = {};

      requiredInputs.each(function() {
        input = $(this);
        if (input.is('input[type=radio]')) {

          // Don't count unchecked required radio as blank if other radio with same name is checked,
          // regardless of whether same-name radio input has required attribute or not. The spec
          // states https://www.w3.org/TR/html5/forms.html#the-required-attribute
          radioName = input.attr('name');

          // Skip if we've already seen the radio with this name.
          if (!checkedRadioButtonNames[radioName]) {

            // If none checked
            if (form.find('input[type=radio]:checked[name="' + radioName + '"]').length === 0) {
              radiosForNameWithNoneSelected = form.find(
                'input[type=radio][name="' + radioName + '"]');
              foundInputs = foundInputs.add(radiosForNameWithNoneSelected);
            }

            // We only need to check each name once.
            checkedRadioButtonNames[radioName] = radioName;
          }
        } else {
          valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : !!input.val();
          if (valueToCheck === nonBlank) {
            foundInputs = foundInputs.add(input);
          }
        }
      });
      return foundInputs.length ? foundInputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  Replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element.html()); // store enabled state
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
      element.data('ujs:disabled', true);
    },

    // Restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
      element.removeData('ujs:disabled');
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
    $(window).on('pageshow.rails', function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableFormElement(element);
        }
      });

      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableElement(element);
        }
      });
    });

    $document.on('ajax:complete', rails.linkDisableSelector, function() {
        rails.enableElement($(this));
    });

    $document.on('ajax:complete', rails.buttonDisableSelector, function() {
        rails.enableFormElement($(this));
    });

    $document.on('click.rails', rails.linkClickSelector, function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (rails.isRemote(link)) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // Response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.fail( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.on('click.rails', rails.buttonClickSelector, function(e) {
      var button = $(this);

      if (!rails.allowAction(button) || !rails.isRemote(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // Response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.fail( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.on('change.rails', rails.inputChangeSelector, function(e) {
      var link = $(this);
      if (!rails.allowAction(link) || !rails.isRemote(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.on('submit.rails', rails.formSubmitSelector, function(e) {
      var form = $(this),
        remote = rails.isRemote(form),
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // Skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') === undefined) {
        if (form.data('ujs:formnovalidate-button') === undefined) {
          blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector, false);
          if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
            return rails.stopEverything(e);
          }
        } else {
          // Clear the formnovalidate in case the next button click is not on a formnovalidate button
          // Not strictly necessary to do here, since it is also reset on each button click, but just to be certain
          form.data('ujs:formnovalidate-button', undefined);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // Slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // Re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // Slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.on('click.rails', rails.formInputClickSelector, function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // Register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      var form = button.closest('form');
      if (form.length === 0) {
        form = $('#' + button.attr('form'));
      }
      form.data('ujs:submit-button', data);

      // Save attributes from button
      form.data('ujs:formnovalidate-button', button.attr('formnovalidate'));
      form.data('ujs:submit-button-formaction', button.attr('formaction'));
      form.data('ujs:submit-button-formmethod', button.attr('formmethod'));
    });

    $document.on('ajax:send.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.disableFormElements($(this));
    });

    $document.on('ajax:complete.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/master/actionview/app/assets/javascripts
Released under the MIT license
 */


(function() {
  var context = this;

  (function() {
    (function() {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };

    }).call(this);
  }).call(context);

  var Rails = context.Rails;

  (function() {
    (function() {
      var expando, m;

      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function(element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function(element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function(element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }
        return element[expando][key] = value;
      };

      Rails.$ = function(selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };

    }).call(this);
    (function() {
      var $, csrfParam, csrfToken;

      $ = Rails.$;

      csrfToken = Rails.csrfToken = function() {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function() {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function(xhr) {
        var token;
        token = csrfToken();
        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function() {
        var param, token;
        token = csrfToken();
        param = csrfParam();
        if ((token != null) && (param != null)) {
          return $('form input[name="' + param + '"]').forEach(function(input) {
            return input.value = token;
          });
        }
      };

    }).call(this);
    (function() {
      var CustomEvent, fire, matches;

      matches = Rails.matches;

      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };
        CustomEvent.prototype = window.Event.prototype;
      }

      fire = Rails.fire = function(obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function(e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function(element, selector, eventType, handler) {
        return element.addEventListener(eventType, function(e) {
          var target;
          target = e.target;
          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }
          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };

    }).call(this);
    (function() {
      var AcceptHeaders, CSRFProtection, createXHR, fire, prepareOptions, processResponse;

      CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;

      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function(options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function() {
          var response;
          response = processResponse(xhr.response, xhr.getResponseHeader('Content-Type'));
          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }
          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });
        if (!(typeof options.beforeSend === "function" ? options.beforeSend(xhr, options) : void 0)) {
          return false;
        }
        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();
        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }
        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }
        options.accept = AcceptHeaders[options.dataType];
        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }
        return options;
      };

      createXHR = function(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);
        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }
        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        }
        CSRFProtection(xhr);
        xhr.withCredentials = !!options.withCredentials;
        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };
        return xhr;
      };

      processResponse = function(response, type) {
        var parser, script;
        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');
            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }
        return response;
      };

      Rails.href = function(element) {
        return element.href;
      };

      Rails.isCrossDomain = function(url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');
        try {
          urlAnchor.href = url;
          return !(((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host) || (originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host));
        } catch (error) {
          e = error;
          return true;
        }
      };

    }).call(this);
    (function() {
      var matches, toArray;

      matches = Rails.matches;

      toArray = function(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function(element, additionalParam) {
        var inputs, params;
        inputs = [element];
        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }
        params = [];
        inputs.forEach(function(input) {
          if (!input.name || input.disabled) {
            return;
          }
          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function(option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });
        if (additionalParam) {
          params.push(additionalParam);
        }
        return params.map(function(param) {
          if (param.name != null) {
            return (encodeURIComponent(param.name)) + "=" + (encodeURIComponent(param.value));
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function(form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function(el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };

    }).call(this);
    (function() {
      var allowAction, fire, stopEverything;

      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function(e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      allowAction = function(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');
        if (!message) {
          return true;
        }
        answer = false;
        if (fire(element, 'confirm')) {
          try {
            answer = confirm(message);
          } catch (error) {}
          callback = fire(element, 'confirm:complete', [answer]);
        }
        return answer && callback;
      };

    }).call(this);
    (function() {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, matches, setData, stopEverything;

      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function(e) {
        var element;
        element = this;
        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function(e) {
        var element;
        element = e instanceof Event ? e.target : e;
        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function(e) {
        var element;
        element = e instanceof Event ? e.target : e;
        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function(element) {
        var replacement;
        replacement = element.getAttribute('data-disable-with');
        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }
        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');
        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }
        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function(element) {
        var replacement;
        replacement = element.getAttribute('data-disable-with');
        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }
        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');
        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }
          setData(element, 'ujs:enable-with', null);
        }
        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

    }).call(this);
    (function() {
      var stopEverything;

      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function(e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');
        if (!method) {
          return;
        }
        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";
        if ((csrfParam != null) && (csrfToken != null) && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }
        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };

    }).call(this);
    (function() {
      var ajax, fire, getData, isCrossDomain, isRemote, matches, serializeElement, setData, stopEverything,
        slice = [].slice;

      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function(element) {
        var value;
        value = element.getAttribute('data-remote');
        return (value != null) && value !== 'false';
      };

      Rails.handleRemote = function(e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;
        if (!isRemote(element)) {
          return true;
        }
        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }
        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';
        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;
          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }
          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);
            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }
          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }
        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: (withCredentials != null) && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function(e) {
        var button, form;
        button = this;
        form = button.form;
        if (!form) {
          return;
        }
        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }
        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.handleMetaClick = function(e) {
        var data, link, metaClick, method;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        if (metaClick && method === 'GET' && !data) {
          return e.stopImmediatePropagation();
        }
      };

    }).call(this);
    (function() {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMetaClick, handleMethod, handleRemote, refreshCSRFTokens;

      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMetaClick = Rails.handleMetaClick, handleMethod = Rails.handleMethod;

      if ((typeof jQuery !== "undefined" && jQuery !== null) && (jQuery.ajax != null) && !jQuery.rails) {
        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function(options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function() {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }
        window.addEventListener('pageshow', function() {
          $(Rails.formEnableSelector).forEach(function(el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function(el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', handleMetaClick);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function(e) {
          return setTimeout((function() {
            return disableElement(e);
          }), 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }

    }).call(this);
  }).call(this);

  if (typeof module === "object" && module.exports) {
    module.exports = Rails;
  } else if (typeof define === "function" && define.amd) {
    define(Rails);
  }
}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=269)}([function(e,t,n){e.exports=n(175)()},function(e,t,n){"use strict";e.exports=n(268)},function(e,t,n){"use strict";e.exports=function(){}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,a,i,l){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,a,i,l],c=0;(u=new Error(t.replace(/%s/g,function(){return s[c++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(1),i=n.n(a),l=n(0),u=n.n(l),s=n(94),c=n.n(s),f=n(3),p=n.n(f),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var y=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=h(this,e.call.apply(e,[this].concat(a))),r.state={match:r.computeMatch(r.props.history.location.pathname)},h(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.getChildContext=function(){return{router:d({},this.context.router,{history:this.props.history,route:{location:this.props.history.location,match:this.state.match}})}},t.prototype.computeMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}},t.prototype.componentWillMount=function(){var e=this,t=this.props,n=t.children,r=t.history;p()(null==n||1===i.a.Children.count(n),"A <Router> may have only one child element"),this.unlisten=r.listen(function(){e.setState({match:e.computeMatch(r.location.pathname)})})},t.prototype.componentWillReceiveProps=function(e){o()(this.props.history===e.history,"You cannot change <Router history>")},t.prototype.componentWillUnmount=function(){this.unlisten()},t.prototype.render=function(){var e=this.props.children;return e?i.a.Children.only(e):null},t}(i.a.Component);y.propTypes={history:u.a.object.isRequired,children:u.a.node},y.contextTypes={router:u.a.object},y.childContextTypes={router:u.a.object.isRequired};var v=y,m=v;function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=b(this,e.call.apply(e,[this].concat(a))),r.history=c()(r.props),b(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){o()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},t.prototype.render=function(){return i.a.createElement(m,{history:this.history,children:this.props.children})},t}(i.a.Component);g.propTypes={basename:u.a.string,forceRefresh:u.a.bool,getUserConfirmation:u.a.func,keyLength:u.a.number,children:u.a.node};var _=g,w=n(93),E=n.n(w);function P(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var O=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=P(this,e.call.apply(e,[this].concat(a))),r.history=E()(r.props),P(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){o()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},t.prototype.render=function(){return i.a.createElement(m,{history:this.history,children:this.props.children})},t}(i.a.Component);O.propTypes={basename:u.a.string,getUserConfirmation:u.a.func,hashType:u.a.oneOf(["hashbang","noslash","slash"]),children:u.a.node};var k=O,S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var j=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},C=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=x(this,e.call.apply(e,[this].concat(a))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!j(e)){e.preventDefault();var t=r.context.router.history,n=r.props,o=n.replace,a=n.to;o?t.replace(a):t.push(a)}},x(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);p()(this.context.router,"You should not use <Link> outside a <Router>");var o=this.context.router.history.createHref("string"==typeof t?{pathname:t}:t);return i.a.createElement("a",S({},r,{onClick:this.handleClick,href:o,ref:n}))},t}(i.a.Component);C.propTypes={onClick:u.a.func,target:u.a.string,replace:u.a.bool,to:u.a.oneOfType([u.a.string,u.a.object]).isRequired,innerRef:u.a.oneOfType([u.a.string,u.a.func])},C.defaultProps={replace:!1},C.contextTypes={router:u.a.shape({history:u.a.shape({push:u.a.func.isRequired,replace:u.a.func.isRequired,createHref:u.a.func.isRequired}).isRequired}).isRequired};var T=C,R=n(92),N=n.n(R);function M(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var L=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=M(this,e.call.apply(e,[this].concat(a))),r.history=N()(r.props),M(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){o()(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")},t.prototype.render=function(){return i.a.createElement(v,{history:this.history,children:this.props.children})},t}(i.a.Component);L.propTypes={initialEntries:u.a.array,initialIndex:u.a.number,getUserConfirmation:u.a.func,keyLength:u.a.number,children:u.a.node};var A=L,D=n(91),I=n.n(D),U={},F=0,V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"string"==typeof t&&(t={path:t});var n=t,r=n.path,o=void 0===r?"/":r,a=n.exact,i=void 0!==a&&a,l=n.strict,u=void 0!==l&&l,s=n.sensitive,c=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=U[n]||(U[n]={});if(r[e])return r[e];var o=[],a={re:I()(e,o,t),keys:o};return F<1e4&&(r[e]=a,F++),a}(o,{end:i,strict:u,sensitive:void 0!==s&&s}),f=c.re,p=c.keys,d=f.exec(e);if(!d)return null;var h=d[0],y=d.slice(1),v=e===h;return i&&!v?null:{path:o,url:"/"===o&&""===h?"/":h,isExact:v,params:p.reduce(function(e,t,n){return e[t.name]=y[n],e},{})}},z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function W(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var B=function(e){return 0===i.a.Children.count(e)},H=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=W(this,e.call.apply(e,[this].concat(a))),r.state={match:r.computeMatch(r.props,r.context.router)},W(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.getChildContext=function(){return{router:z({},this.context.router,{route:{location:this.props.location||this.context.router.route.location,match:this.state.match}})}},t.prototype.computeMatch=function(e,t){var n=e.computedMatch,r=e.location,o=e.path,a=e.strict,i=e.exact,l=e.sensitive;if(n)return n;p()(t,"You should not use <Route> or withRouter() outside a <Router>");var u=t.route,s=(r||u.location).pathname;return o?V(s,{path:o,strict:a,exact:i,sensitive:l}):u.match},t.prototype.componentWillMount=function(){o()(!(this.props.component&&this.props.render),"You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored"),o()(!(this.props.component&&this.props.children&&!B(this.props.children)),"You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored"),o()(!(this.props.render&&this.props.children&&!B(this.props.children)),"You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored")},t.prototype.componentWillReceiveProps=function(e,t){o()(!(e.location&&!this.props.location),'<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),o()(!(!e.location&&this.props.location),'<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'),this.setState({match:this.computeMatch(e,t.router)})},t.prototype.render=function(){var e=this.state.match,t=this.props,n=t.children,r=t.component,o=t.render,a=this.context.router,l=a.history,u=a.route,s=a.staticContext,c={match:e,location:this.props.location||u.location,history:l,staticContext:s};return r?e?i.a.createElement(r,c):null:o?e?o(c):null:n?"function"==typeof n?n(c):B(n)?null:i.a.Children.only(n):null},t}(i.a.Component);H.propTypes={computedMatch:u.a.object,path:u.a.string,exact:u.a.bool,strict:u.a.bool,sensitive:u.a.bool,component:u.a.func,render:u.a.func,children:u.a.oneOfType([u.a.func,u.a.node]),location:u.a.object},H.contextTypes={router:u.a.shape({history:u.a.object.isRequired,route:u.a.object.isRequired,staticContext:u.a.object})},H.childContextTypes={router:u.a.object.isRequired};var q=H,Y=q,$=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var K=function(e){var t=e.to,n=e.exact,r=e.strict,o=e.location,a=e.activeClassName,l=e.className,u=e.activeStyle,s=e.style,c=e.isActive,f=e.ariaCurrent,p=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","ariaCurrent"]);return i.a.createElement(Y,{path:"object"===(void 0===t?"undefined":G(t))?t.pathname:t,exact:n,strict:r,location:o,children:function(e){var n=e.location,r=e.match,o=!!(c?c(r,n):r);return i.a.createElement(T,$({to:t,className:o?[l,a].filter(function(e){return e}).join(" "):l,style:o?$({},s,u):s,"aria-current":o&&f},p))}})};K.propTypes={to:T.propTypes.to,exact:u.a.bool,strict:u.a.bool,location:u.a.object,activeClassName:u.a.string,className:u.a.string,activeStyle:u.a.object,style:u.a.object,isActive:u.a.func,ariaCurrent:u.a.oneOf(["page","step","location","true"])},K.defaultProps={activeClassName:"active",ariaCurrent:"true"};var Q=K;var J=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.enable=function(e){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(e)},t.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},t.prototype.componentWillMount=function(){p()(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},t.prototype.componentWillReceiveProps=function(e){e.when?this.props.when&&this.props.message===e.message||this.enable(e.message):this.disable()},t.prototype.componentWillUnmount=function(){this.disable()},t.prototype.render=function(){return null},t}(i.a.Component);J.propTypes={when:u.a.bool,message:u.a.oneOfType([u.a.func,u.a.string]).isRequired},J.defaultProps={when:!0},J.contextTypes={router:u.a.shape({history:u.a.shape({block:u.a.func.isRequired}).isRequired}).isRequired};var X=J,Z=n(52),ee=n(51),te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ne=function(e,t,n,r){var o=void 0;"string"==typeof e?(o=function(e){var t=e||"/",n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var a=t.indexOf("?");return-1!==a&&(n=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(o=te({},e)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=Object(Z.default)(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o},re=function(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&Object(ee.default)(e.state,t.state)};"undefined"==typeof window||!window.document||window.document.createElement,"function"==typeof Symbol&&Symbol.iterator,Object.assign,Object.assign,"function"==typeof Symbol&&Symbol.iterator,Object.assign;var oe=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},t.prototype.componentWillMount=function(){p()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},t.prototype.componentDidMount=function(){this.isStatic()||this.perform()},t.prototype.componentDidUpdate=function(e){var t=ne(e.to),n=ne(this.props.to);re(t,n)?o()(!1,"You tried to redirect to the same route you're currently on: \""+n.pathname+n.search+'"'):this.perform()},t.prototype.perform=function(){var e=this.context.router.history,t=this.props,n=t.push,r=t.to;n?e.push(r):e.replace(r)},t.prototype.render=function(){return null},t}(i.a.Component);oe.propTypes={push:u.a.bool,from:u.a.string,to:u.a.oneOfType([u.a.string,u.a.object]).isRequired},oe.defaultProps={push:!1},oe.contextTypes={router:u.a.shape({history:u.a.shape({push:u.a.func.isRequired,replace:u.a.func.isRequired}).isRequired,staticContext:u.a.object}).isRequired};var ae=oe,ie=n(12),le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function ue(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var se=function(e,t){return e?le({},t,{pathname:Object(ie.addLeadingSlash)(e)+t.pathname}):t},ce=function(e){return"string"==typeof e?Object(ie.parsePath)(e):(n=(t=e).pathname,r=void 0===n?"/":n,o=t.search,a=void 0===o?"":o,i=t.hash,l=void 0===i?"":i,{pathname:r,search:"?"===a?"":a,hash:"#"===l?"":l});var t,n,r,o,a,i,l},fe=function(e){return"string"==typeof e?e:Object(ie.createPath)(e)},pe=function(e){return function(){p()(!1,"You cannot %s with <StaticRouter>",e)}},de=function(){},he=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=ue(this,e.call.apply(e,[this].concat(a))),r.createHref=function(e){return Object(ie.addLeadingSlash)(r.props.basename+fe(e))},r.handlePush=function(e){var t=r.props,n=t.basename,o=t.context;o.action="PUSH",o.location=se(n,ce(e)),o.url=fe(o.location)},r.handleReplace=function(e){var t=r.props,n=t.basename,o=t.context;o.action="REPLACE",o.location=se(n,ce(e)),o.url=fe(o.location)},r.handleListen=function(){return de},r.handleBlock=function(){return de},ue(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},t.prototype.componentWillMount=function(){o()(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")},t.prototype.render=function(){var e=this.props,t=e.basename,n=(e.context,e.location),r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["basename","context","location"]),o={createHref:this.createHref,action:"POP",location:function(e,t){if(!e)return t;var n=Object(ie.addLeadingSlash)(e);return 0!==t.pathname.indexOf(n)?t:le({},t,{pathname:t.pathname.substr(n.length)})}(t,ce(n)),push:this.handlePush,replace:this.handleReplace,go:pe("go"),goBack:pe("goBack"),goForward:pe("goForward"),listen:this.handleListen,block:this.handleBlock};return i.a.createElement(v,le({},r,{history:o}))},t}(i.a.Component);he.propTypes={basename:u.a.string,context:u.a.object.isRequired,location:u.a.oneOfType([u.a.string,u.a.object])},he.defaultProps={basename:"",location:"/"},he.childContextTypes={router:u.a.object.isRequired};var ye=he;var ve=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){p()(this.context.router,"You should not use <Switch> outside a <Router>")},t.prototype.componentWillReceiveProps=function(e){o()(!(e.location&&!this.props.location),'<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),o()(!(!e.location&&this.props.location),'<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.')},t.prototype.render=function(){var e=this.context.router.route,t=this.props.children,n=this.props.location||e.location,r=void 0,o=void 0;return i.a.Children.forEach(t,function(t){if(i.a.isValidElement(t)){var a=t.props,l=a.path,u=a.exact,s=a.strict,c=a.sensitive,f=a.from,p=l||f;null==r&&(o=t,r=p?V(n.pathname,{path:p,exact:u,strict:s,sensitive:c}):e.match)}}),r?i.a.cloneElement(o,{location:n,computedMatch:r}):null},t}(i.a.Component);ve.contextTypes={router:u.a.shape({route:u.a.object.isRequired}).isRequired},ve.propTypes={children:u.a.node,location:u.a.object};var me=ve,be=V,ge=n(35),_e=n.n(ge),we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var Ee=function(e){var t=function(t){var n=t.wrappedComponentRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["wrappedComponentRef"]);return i.a.createElement(q,{render:function(t){return i.a.createElement(e,we({},r,t,{ref:n}))}})};return t.displayName="withRouter("+(e.displayName||e.name)+")",t.WrappedComponent=e,t.propTypes={wrappedComponentRef:u.a.func},_e()(t,e)};n.d(t,"BrowserRouter",function(){return _}),n.d(t,"HashRouter",function(){return k}),n.d(t,"Link",function(){return T}),n.d(t,"MemoryRouter",function(){return A}),n.d(t,"NavLink",function(){return Q}),n.d(t,"Prompt",function(){return X}),n.d(t,"Redirect",function(){return ae}),n.d(t,"Route",function(){return Y}),n.d(t,"Router",function(){return m}),n.d(t,"StaticRouter",function(){return ye}),n.d(t,"Switch",function(){return me}),n.d(t,"matchPath",function(){return be}),n.d(t,"withRouter",function(){return Ee})},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),a=n.n(o),i=a.a.shape({trySubscribe:a.a.func.isRequired,tryUnsubscribe:a.a.func.isRequired,notifyNestedSubs:a.a.func.isRequired,isSubscribed:a.a.func.isRequired}),l=a.a.shape({subscribe:a.a.func.isRequired,dispatch:a.a.func.isRequired,getState:a.a.func.isRequired});function u(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"store",n=arguments[1]||t+"Subscription",o=function(e){function o(n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,r));return a[t]=n.store,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,e),o.prototype.getChildContext=function(){var e;return(e={})[t]=this[t],e[n]=null,e},o.prototype.render=function(){return r.Children.only(this.props.children)},o}(r.Component);return o.propTypes={store:l.isRequired,children:a.a.element.isRequired},o.childContextTypes=((e={})[t]=l.isRequired,e[n]=i,e),o}var s=u(),c=n(35),f=n.n(c),p=n(3),d=n.n(p);var h=null,y={notify:function(){}};var v=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.store=t,this.parentSub=n,this.onStateChange=r,this.unsubscribe=null,this.listeners=y}return e.prototype.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},e.prototype.notifyNestedSubs=function(){this.listeners.notify()},e.prototype.isSubscribed=function(){return Boolean(this.unsubscribe)},e.prototype.trySubscribe=function(){var e,t;this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=(e=[],t=[],{clear:function(){t=h,e=h},notify:function(){for(var n=e=t,r=0;r<n.length;r++)n[r]()},get:function(){return t},subscribe:function(n){var r=!0;return t===e&&(t=e.slice()),t.push(n),function(){r&&e!==h&&(r=!1,t===e&&(t=e.slice()),t.splice(t.indexOf(n),1))}}}))},e.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=y)},e}(),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var b=0,g={};function _(){}function w(e){var t,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=o.getDisplayName,u=void 0===a?function(e){return"ConnectAdvanced("+e+")"}:a,s=o.methodName,c=void 0===s?"connectAdvanced":s,p=o.renderCountProp,h=void 0===p?void 0:p,y=o.shouldHandleStateChanges,w=void 0===y||y,E=o.storeKey,P=void 0===E?"store":E,O=o.withRef,k=void 0!==O&&O,S=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(o,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),x=P+"Subscription",j=b++,C=((t={})[P]=l,t[x]=i,t),T=((n={})[x]=i,n);return function(t){d()("function"==typeof t,"You must pass a component to the function returned by "+c+". Instead received "+JSON.stringify(t));var n=t.displayName||t.name||"Component",o=u(n),a=m({},S,{getDisplayName:u,methodName:c,renderCountProp:h,shouldHandleStateChanges:w,storeKey:P,withRef:k,displayName:o,wrappedComponentName:n,WrappedComponent:t}),i=function(n){function i(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,n.call(this,e,t));return r.version=j,r.state={},r.renderCount=0,r.store=e[P]||t[P],r.propsMode=Boolean(e[P]),r.setWrappedInstance=r.setWrappedInstance.bind(r),d()(r.store,'Could not find "'+P+'" in either the context or props of "'+o+'". Either wrap the root component in a <Provider>, or explicitly pass "'+P+'" as a prop to "'+o+'".'),r.initSelector(),r.initSubscription(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,n),i.prototype.getChildContext=function(){var e,t=this.propsMode?null:this.subscription;return(e={})[x]=t||this.context[x],e},i.prototype.componentDidMount=function(){w&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},i.prototype.componentWillReceiveProps=function(e){this.selector.run(e)},i.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},i.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=_,this.store=null,this.selector.run=_,this.selector.shouldComponentUpdate=!1},i.prototype.getWrappedInstance=function(){return d()(k,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+c+"() call."),this.wrappedInstance},i.prototype.setWrappedInstance=function(e){this.wrappedInstance=e},i.prototype.initSelector=function(){var t=e(this.store.dispatch,a);this.selector=function(e,t){var n={run:function(r){try{var o=e(t.getState(),r);(o!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=o,n.error=null)}catch(e){n.shouldComponentUpdate=!0,n.error=e}}};return n}(t,this.store),this.selector.run(this.props)},i.prototype.initSubscription=function(){if(w){var e=(this.propsMode?this.props:this.context)[x];this.subscription=new v(this.store,e,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},i.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(g)):this.notifyNestedSubs()},i.prototype.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},i.prototype.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},i.prototype.addExtraProps=function(e){if(!(k||h||this.propsMode&&this.subscription))return e;var t=m({},e);return k&&(t.ref=this.setWrappedInstance),h&&(t[h]=this.renderCount++),this.propsMode&&this.subscription&&(t[x]=this.subscription),t},i.prototype.render=function(){var e=this.selector;if(e.shouldComponentUpdate=!1,e.error)throw e.error;return Object(r.createElement)(t,this.addExtraProps(e.props))},i}(r.Component);return i.WrappedComponent=t,i.displayName=o,i.childContextTypes=T,i.contextTypes=C,i.propTypes=C,f()(i,t)}}var E=Object.prototype.hasOwnProperty;function P(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function O(e,t){if(P(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!E.call(t,n[o])||!P(e[n[o]],t[n[o]]))return!1;return!0}var k=n(17),S=n(95),x="object"==typeof self&&self&&self.Object===Object&&self,j=(S.a||x||Function("return this")()).Symbol,C=Object.prototype;C.hasOwnProperty,C.toString,j&&j.toStringTag;Object.prototype.toString;j&&j.toStringTag;Object.getPrototypeOf,Object;var T=Function.prototype,R=Object.prototype,N=T.toString;R.hasOwnProperty,N.call(Object);function M(e){return function(t,n){var r=e(t,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function L(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function A(e,t){return function(t,n){n.displayName;var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=L(e);var o=r(t,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=L(o),o=r(t,n)),o},r}}var D=[function(e){return"function"==typeof e?A(e):void 0},function(e){return e?void 0:M(function(e){return{dispatch:e}})},function(e){return e&&"object"==typeof e?M(function(t){return Object(k.bindActionCreators)(e,t)}):void 0}];var I=[function(e){return"function"==typeof e?A(e):void 0},function(e){return e?void 0:M(function(){return{}})}],U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function F(e,t,n){return U({},n,e,t)}var V=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var r=n.pure,o=n.areMergedPropsEqual,a=!1,i=void 0;return function(t,n,l){var u=e(t,n,l);return a?r&&o(u,i)||(i=u):(a=!0,i=u),i}}}(e):void 0},function(e){return e?void 0:function(){return F}}];function z(e,t,n,r){return function(o,a){return n(e(o,a),t(r,a),a)}}function W(e,t,n,r,o){var a=o.areStatesEqual,i=o.areOwnPropsEqual,l=o.areStatePropsEqual,u=!1,s=void 0,c=void 0,f=void 0,p=void 0,d=void 0;function h(o,u){var h,y,v=!i(u,c),m=!a(o,s);return s=o,c=u,v&&m?(f=e(s,c),t.dependsOnOwnProps&&(p=t(r,c)),d=n(f,p,c)):v?(e.dependsOnOwnProps&&(f=e(s,c)),t.dependsOnOwnProps&&(p=t(r,c)),d=n(f,p,c)):m?(h=e(s,c),y=!l(h,f),f=h,y&&(d=n(f,p,c)),d):d}return function(o,a){return u?h(o,a):(f=e(s=o,c=a),p=t(r,c),d=n(f,p,c),u=!0,d)}}function B(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),i=n(e,a),l=r(e,a),u=o(e,a);return(a.pure?W:z)(i,l,u,e,a)}var H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function q(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function Y(e,t){return e===t}var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.connectHOC,n=void 0===t?w:t,r=e.mapStateToPropsFactories,o=void 0===r?I:r,a=e.mapDispatchToPropsFactories,i=void 0===a?D:a,l=e.mergePropsFactories,u=void 0===l?V:l,s=e.selectorFactory,c=void 0===s?B:s;return function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},l=a.pure,s=void 0===l||l,f=a.areStatesEqual,p=void 0===f?Y:f,d=a.areOwnPropsEqual,h=void 0===d?O:d,y=a.areStatePropsEqual,v=void 0===y?O:y,m=a.areMergedPropsEqual,b=void 0===m?O:m,g=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(a,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),_=q(e,o,"mapStateToProps"),w=q(t,i,"mapDispatchToProps"),E=q(r,u,"mergeProps");return n(c,H({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:_,initMapDispatchToProps:w,initMergeProps:E,pure:s,areStatesEqual:p,areOwnPropsEqual:h,areStatePropsEqual:v,areMergedPropsEqual:b},g))}}();n.d(t,"Provider",function(){return s}),n.d(t,"createProvider",function(){return u}),n.d(t,"connectAdvanced",function(){return w}),n.d(t,"connect",function(){return $})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.OPEN_MODAL="OPEN_MODAL",o=t.CLOSE_MODAL="CLOSE_MODAL";t.openModal=function(e){return{type:r,modal:e}},t.closeModal=function(){return{type:o}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logout=t.signup=t.login=t.receiveErrors=t.RECEIVE_SESSION_ERRORS=t.LOGOUT_CURRENT_USER=t.RECEIVE_CURRENT_USER=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(88));var o=t.RECEIVE_CURRENT_USER="RECEIVE_CURRENT_USER",a=t.LOGOUT_CURRENT_USER="LOGOUT_CURRENT_USER",i=t.RECEIVE_SESSION_ERRORS="RECEIVE_SESSION_ERRORS",l=t.receiveErrors=function(e){return{type:i,errors:e}};t.login=function(e){return function(t){return r.login(e).then(function(e){return t({type:o,currentUser:e})},function(e){return t(l(e.responseJSON))})}},t.signup=function(e){return function(t){return r.signup(e).then(function(e){return t({type:o,currentUser:e})},function(e){return t(l(e.responseJSON))})}},t.logout=function(){return function(e){return r.logout().then(function(t){return e({type:a})},function(t){return e(l(t.responseJSON))})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.parseStartTime=function(e){return h(e,c)},t.parseEndTime=function(e){return h(e,f)},t.randomString=function(){return Math.random().toString(36).substr(2,5)},t.queryString=function(e){return Object.keys(e).map(function(t){return t+"="+e[t]}).join("&")},t.getSDK=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return!0},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:a.default;if(window[t]&&r(window[t]))return Promise.resolve(window[t]);return new Promise(function(r,a){if(y[e])y[e].push(r);else{y[e]=[r];var i=function(t){y[e].forEach(function(e){return e(t)})};if(n){var l=window[n];window[n]=function(){l&&l(),i(window[t])}}o(e,function(e){e&&a(e),n||i(window[t])})}})},t.getConfig=function(e,t,n){var r=(0,i.default)(t.config,e.config),o=!0,a=!1,u=void 0;try{for(var c,f=l.DEPRECATED_CONFIG_PROPS[Symbol.iterator]();!(o=(c=f.next()).done);o=!0){var p=c.value;if(e[p]){var d=p.replace(/Config$/,"");if(r=(0,i.default)(r,s({},d,e[p])),n){var h="ReactPlayer: %c"+p+" %cis deprecated, please use the config prop instead – https://github.com/CookPete/react-player#config-prop";console.warn(h,"font-weight: bold","")}}}}catch(e){a=!0,u=e}finally{try{!o&&f.return&&f.return()}finally{if(a)throw u}}return r},t.omit=function(e){for(var t,n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var a=(t=[]).concat.apply(t,r),i={},l=Object.keys(e),u=!0,s=!1,c=void 0;try{for(var f,p=l[Symbol.iterator]();!(u=(f=p.next()).done);u=!0){var d=f.value;-1===a.indexOf(d)&&(i[d]=e[d])}}catch(e){s=!0,c=e}finally{try{!u&&p.return&&p.return()}finally{if(s)throw c}}return i},t.callPlayer=function(e){var t;if(!this.player||!this.player[e]){var n="ReactPlayer: "+this.constructor.displayName+" player could not call %c"+e+"%c – ";return this.player?this.player[e]||(n+="The method was not available"):n+="The player was not available",console.warn(n,"font-weight: bold",""),null}for(var r=arguments.length,o=Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return(t=this.player)[e].apply(t,o)},t.isObject=v,t.isEqual=function e(t,n){if("function"==typeof t&&"function"==typeof n)return!0;if(t instanceof Array&&n instanceof Array){if(t.length!==n.length)return!1;for(var r=0;r!==t.length;r++)if(!e(t[r],n[r]))return!1;return!0}if(v(t)&&v(n)){if(Object.keys(t).length!==Object.keys(n).length)return!1;var o=!0,a=!1,i=void 0;try{for(var l,u=Object.keys(t)[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var s=l.value;if(!e(t[s],n[s]))return!1}}catch(e){a=!0,i=e}finally{try{!o&&u.return&&u.return()}finally{if(a)throw i}}return!0}return t===n},t.isMediaStream=function(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream};var a=u(n(107)),i=u(n(106)),l=n(23);function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=/[?&#](?:start|t)=([0-9hms]+)/,f=/[?&#]end=([0-9hms]+)/,p=/(\d+)(h|m|s)/g,d=/^\d+$/;function h(e,t){var n=e.match(t);if(n){var r=n[1];if(r.match(p))return function(e){var t=0,n=p.exec(e);for(;null!==n;){var r=n,a=o(r,3),i=a[1],l=a[2];"h"===l&&(t+=60*parseInt(i,10)*60),"m"===l&&(t+=60*parseInt(i,10)),"s"===l&&(t+=parseInt(i,10)),n=p.exec(e)}return t}(r);if(d.test(r))return parseInt(r)}}var y={};function v(e){return null!==e&&"object"===(void 0===e?"undefined":r(e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deletePlaylist=t.updatePlaylist=t.createPlaylist=t.fetchPlaylist=t.fetchPlaylists=t.REMOVE_PLAYLIST=t.RECEIVE_PLAYLIST=t.RECEIVE_ALL_PLAYLISTS=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(252));var o=t.RECEIVE_ALL_PLAYLISTS="RECEIVE_ALL_PLAYLISTS",a=t.RECEIVE_PLAYLIST="RECEIVE_PLAYLIST",i=t.REMOVE_PLAYLIST="REMOVE_PLAYLIST";t.fetchPlaylists=function(){return function(e){return r.fetchPlaylists().then(function(t){return e({type:o,playlists:t})})}},t.fetchPlaylist=function(e){return function(t){return r.fetchPlaylist(e).then(function(e){return t({type:a,playlist:e})})}},t.createPlaylist=function(e){return function(t){return r.createPlaylist(e).then(function(e){return t({type:a,playlist:e})})}},t.updatePlaylist=function(e){return function(t){return r.updatePlaylist(e).then(function(e){return t({type:a,playlist:e})})}},t.deletePlaylist=function(e){return function(t){return r.deletePlaylist(e).then(function(e){return t({type:i,id:e.id})})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){var t,n;return n=t=function(t){function n(){var e,t,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return r=f(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),t=r,r.config=(0,u.getConfig)(r.props,l.defaultProps,!0),r.getDuration=function(){return r.player?r.player.getDuration():null},r.getCurrentTime=function(){return r.player?r.player.getCurrentTime():null},r.getSecondsLoaded=function(){return r.player?r.player.getSecondsLoaded():null},r.getInternalPlayer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"player";return r.player?r.player.getInternalPlayer(e):null},r.seekTo=function(e){if(!r.player)return null;r.player.seekTo(e)},r.ref=function(e){r.player=e},f(r,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),o(n,[{key:"shouldComponentUpdate",value:function(e){return!(0,u.isEqual)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.config=(0,u.getConfig)(e,l.defaultProps)}},{key:"render",value:function(){if(!e.canPlay(this.props.url))return null;var t=this.props,n=t.style,o=t.width,a=t.height,c=t.wrapper,f=(0,u.omit)(this.props,p,l.DEPRECATED_CONFIG_PROPS);return i.default.createElement(c,r({style:r({},n,{width:o,height:a})},f),i.default.createElement(s.default,r({},this.props,{ref:this.ref,activePlayer:e,config:this.config})))}}]),n}(a.Component),t.displayName=e.displayName+"Player",t.propTypes=l.propTypes,t.defaultProps=l.defaultProps,t.canPlay=e.canPlay,n};var a=n(1),i=c(a),l=n(23),u=n(8),s=c(n(36));function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=Object.keys(l.propTypes)},function(e,t,n){var r=n(86),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},function(e,t,n){"use strict";t.__esModule=!0;t.addLeadingSlash=function(e){return"/"===e.charAt(0)?e:"/"+e},t.stripLeadingSlash=function(e){return"/"===e.charAt(0)?e.substr(1):e};var r=t.hasBasename=function(e,t){return new RegExp("^"+t+"(\\/|\\?|#|$)","i").test(e)};t.stripBasename=function(e,t){return r(e,t)?e.substr(t.length):e},t.stripTrailingSlash=function(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e},t.parsePath=function(e){var t=e||"/",n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var a=t.indexOf("?");return-1!==a&&(n=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}},t.createPath=function(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchSong=t.fetchSongs=t.RECEIVE_SONG=t.RECEIVE_ALL_SONGS=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(190));var o=t.RECEIVE_ALL_SONGS="RECEIVE_ALL_SONGS",a=t.RECEIVE_SONG="RECEIVE_SONG";t.fetchSongs=function(){return function(e){return r.fetchSongs().then(function(t){return e({type:o,songs:t})})}},t.fetchSong=function(e){return function(t){return r.fetchSong(e).then(function(e){return t({type:a,song:e})})}}},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){var r=n(240),o=n(235);e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},function(e,t,n){var r=n(251),o=n(200)(function(e,t,n){r(e,t,n)});e.exports=o},function(e,t,n){"use strict";n.r(t),n.d(t,"createStore",function(){return u}),n.d(t,"combineReducers",function(){return c}),n.d(t,"bindActionCreators",function(){return p}),n.d(t,"applyMiddleware",function(){return h}),n.d(t,"compose",function(){return d}),n.d(t,"__DO_NOT_USE__ActionTypes",function(){return o});var r=n(53),o={INIT:"@@redux/INIT"+Math.random().toString(36).substring(7).split("").join("."),REPLACE:"@@redux/REPLACE"+Math.random().toString(36).substring(7).split("").join(".")},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function l(e){if("object"!==(void 0===e?"undefined":a(e))||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function u(e,t,n){var i;if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(u)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var s=e,c=t,f=[],p=f,d=!1;function h(){p===f&&(p=f.slice())}function y(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return c}function v(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return h(),p.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,h();var n=p.indexOf(e);p.splice(n,1)}}}function m(e){if(!l(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,c=s(c,e)}finally{d=!1}for(var t=f=p,n=0;n<t.length;n++){(0,t[n])()}return e}return m({type:o.INIT}),(i={dispatch:m,subscribe:v,getState:y,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");s=e,m({type:o.REPLACE})}})[r.a]=function(){var e,t=v;return(e={subscribe:function(e){if("object"!==(void 0===e?"undefined":a(e))||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(y())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},i}function s(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function c(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var a=t[r];0,"function"==typeof e[a]&&(n[a]=e[a])}var i=Object.keys(n);var l=void 0;try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:o.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+o.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(e){l=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(l)throw l;for(var r=!1,o={},a=0;a<i.length;a++){var u=i[a],c=n[u],f=e[u],p=c(f,t);if(void 0===p){var d=s(u,t);throw new Error(d)}o[u]=p,r=r||p!==f}return r?o:e}}function f(e,t){return function(){return t(e.apply(this,arguments))}}function p(e,t){if("function"==typeof e)return f(e,t);if("object"!==(void 0===e?"undefined":a(e))||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":void 0===e?"undefined":a(e))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},o=0;o<n.length;o++){var i=n[o],l=e[i];"function"==typeof l&&(r[i]=f(l,t))}return r}function d(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function h(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var a=e.apply(void 0,r),l=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},u={getState:a.getState,dispatch:function(){return l.apply(void 0,arguments)}},s=t.map(function(e){return e(u)});return l=d.apply(void 0,s)(a.dispatch),i({},a,{dispatch:l})}}}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(5),a=n(9),i=n(139),l=(r=i)&&r.__esModule?r:{default:r},u=n(40),s=n(6),c=n(25);t.default=(0,o.connect)(function(e){return{playlists:(0,c.getFilteredPlaylists)(e),clickedSong:e.entities.clicked_song}},function(e){return{fetchPlaylists:function(){return e((0,a.fetchPlaylists)())},createPlaylistSong:function(t){return e((0,u.createPlaylistSong)(t))},closeModal:function(){return e((0,s.closeModal)())},updatePlaylist:function(t){return e((0,a.updatePlaylist)(t))}}})(l.default)},function(e,t,n){var r=n(46),o=n(239),a=n(238),i="[object Null]",l="[object Undefined]",u=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?l:i:u&&u in Object(e)?o(e):a(e)}},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEPRECATED_CONFIG_PROPS=t.defaultProps=t.propTypes=void 0;var r,o=n(0),a=(r=o)&&r.__esModule?r:{default:r};var i=a.default.string,l=a.default.bool,u=a.default.number,s=a.default.array,c=a.default.oneOfType,f=a.default.shape,p=a.default.object,d=a.default.func;t.propTypes={url:c([i,s,p]),playing:l,loop:l,controls:l,volume:u,muted:l,playbackRate:u,width:c([i,u]),height:c([i,u]),style:p,progressInterval:u,playsinline:l,wrapper:c([i,d]),config:f({soundcloud:f({options:p}),youtube:f({playerVars:p,preload:l}),facebook:f({appId:i}),dailymotion:f({params:p,preload:l}),vimeo:f({playerOptions:p,preload:l}),file:f({attributes:p,tracks:s,forceVideo:l,forceAudio:l,forceHLS:l,forceDASH:l,hlsOptions:p}),wistia:f({options:p}),mixcloud:f({options:p}),twitch:f({options:p})}),onReady:d,onStart:d,onPlay:d,onPause:d,onBuffer:d,onEnded:d,onError:d,onDuration:d,onSeek:d,onProgress:d},t.defaultProps={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,wrapper:"div",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},preload:!1},facebook:{appId:"1309697205772819"},dailymotion:{params:{api:1,"endscreen-enable":!1},preload:!1},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},preload:!1},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,hlsOptions:{}},wistia:{options:{}},mixcloud:{options:{hide_cover:1}},twitch:{options:{}}},onReady:function(){},onStart:function(){},onPlay:function(){},onPause:function(){},onBuffer:function(){},onEnded:function(){},onError:function(){},onDuration:function(){},onSeek:function(){},onProgress:function(){}},t.DEPRECATED_CONFIG_PROPS=["soundcloudConfig","youtubeConfig","facebookConfig","dailymotionConfig","vimeoConfig","fileConfig","wistiaConfig"]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(5),a=n(9),i=n(136),l=(r=i)&&r.__esModule?r:{default:r},u=n(6);t.default=(0,o.connect)(function(e){return{playlist:{title:"",creator_id:""+e.session.currentUser.id}}},function(e){return{createPlaylist:function(t){return e((0,a.createPlaylist)(t))},closeModal:function(){return e((0,u.closeModal)())}}})(l.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getFilteredFollowedPlaylists=t.getFilteredOtherPlaylists=t.getFilteredPlaylists=t.getFilteredPlaylistSongs=void 0;n(13),t.getFilteredPlaylistSongs=function(e,t){var n=[];for(var r in e.entities.playlist_songs)if(e.entities.playlist_songs[r].playlist_id===parseInt(t)){var o=e.entities.playlist_songs[r].song_id;n.push(e.entities.songs[o])}return n},t.getFilteredPlaylists=function(e){var t=[];for(var n in e.entities.playlists)e.entities.playlists[n].creator_id===e.session.currentUser.id&&t.push(e.entities.playlists[n]);return t},t.getFilteredOtherPlaylists=function(e){var t=[];for(var n in e.entities.playlists)e.entities.playlists[n].creator_id!==e.session.currentUser.id&&t.push(e.entities.playlists[n]);return t},t.getFilteredFollowedPlaylists=function(e){var t=[];for(var n in e.entities.playlist_followers)e.entities.playlist_followers[n].creator_id===e.session.currentUser.id&&t.push(e.entities.playlist_followers[n]);return t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.NOW_PLAYING_QUEUE="NOW_PLAYING_QUEUE";t.nowPlayingQueue=function(e){return{type:r,queue:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.PLAY_NOW="PLAY_NOW";t.playNow=function(e){return{type:r,idx:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deletePlaylistFollower=t.createPlaylistFollower=t.fetchPlaylistFollowers=t.REMOVE_PLAYLIST_FOLLOWER=t.RECEIVE_PLAYLIST_FOLLOWER=t.RECEIVE_ALL_PLAYLIST_FOLLOWERS=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(184));var o=t.RECEIVE_ALL_PLAYLIST_FOLLOWERS="RECEIVE_ALL_PLAYLIST_FOLLOWERS",a=t.RECEIVE_PLAYLIST_FOLLOWER="RECEIVE_PLAYLIST_FOLLOWER",i=t.REMOVE_PLAYLIST_FOLLOWER="REMOVE_PLAYLIST_FOLLOWER";t.fetchPlaylistFollowers=function(){return function(e){return r.fetchPlaylistFollowers().then(function(t){return e({type:o,playlist_followers:t})})}},t.createPlaylistFollower=function(e){return function(t){return r.createPlaylistFollower(e).then(function(e){return t({type:a,playlist_follower:e})})}},t.deletePlaylistFollower=function(e){return function(t){return r.deletePlaylistFollower(e).then(function(e){return t({type:i,id:e.id})})}}},function(e,t,n){var r=n(47),o=n(77);e.exports=function(e){return null!=e&&o(e.length)&&!r(e)}},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){var r=n(226);e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},function(e,t,n){var r=n(15)(Object,"create");e.exports=r},function(e,t,n){var r=n(21);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},function(e,t,n){var r=n(250),o=n(249),a=n(248),i=n(247),l=n(246);function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=l,e.exports=u},function(e,t,n){e.exports=function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,r=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,a=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,l=i&&i(Object);return function u(s,c,f){if("string"!=typeof c){if(l){var p=i(c);p&&p!==l&&u(s,p,f)}var d=r(c);o&&(d=d.concat(o(c)));for(var h=0;h<d.length;++h){var y=d[h];if(!(e[y]||t[y]||f&&f[y])){var v=a(c,y);try{n(s,y,v)}catch(e){}}}return s}return s}}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),l=(r=i)&&r.__esModule?r:{default:r},u=n(23);function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.mounted=!1,r.isReady=!1,r.isPlaying=!1,r.isLoading=!0,r.loadOnReady=null,r.startOnPlay=!0,r.seekOnPlay=null,r.onDurationCalled=!1,r.getInternalPlayer=function(e){return r.player?r.player[e]:null},r.progress=function(){if(r.props.url&&r.player&&r.isReady){var e=r.getCurrentTime()||0,t=r.getSecondsLoaded(),n=r.getDuration();if(n){var o={playedSeconds:e,played:e/n};null!==t&&(o.loadedSeconds=t,o.loaded=t/n),o.played===r.prevPlayed&&o.loaded===r.prevLoaded||r.props.onProgress(o),r.prevPlayed=o.played,r.prevLoaded=o.loaded}}r.progressTimeout=setTimeout(r.progress,r.props.progressFrequency||r.props.progressInterval)},r.onReady=function(){if(r.mounted){r.isReady=!0,r.isLoading=!1;var e=r.props,t=e.onReady,n=e.playing,o=e.volume,a=e.muted;t(),a||null===o||r.player.setVolume(o),r.loadOnReady?(r.player.load(r.loadOnReady,!0),r.loadOnReady=null):n&&r.player.play(),r.onDurationCheck()}},r.onPlay=function(){r.isPlaying=!0,r.isLoading=!1;var e=r.props,t=e.onStart,n=e.onPlay,o=e.playbackRate;r.startOnPlay&&(r.player.setPlaybackRate&&r.player.setPlaybackRate(o),t(),r.startOnPlay=!1),n(),r.seekOnPlay&&(r.seekTo(r.seekOnPlay),r.seekOnPlay=null),r.onDurationCheck()},r.onPause=function(e){r.isPlaying=!1,r.isLoading||r.props.onPause(e)},r.onEnded=function(){var e=r.props,t=e.activePlayer,n=e.loop,o=e.onEnded;t.loopOnEnded&&n&&r.seekTo(0),n||(r.isPlaying=!1),o()},r.onDurationCheck=function(){clearTimeout(r.durationCheckTimeout);var e=r.getDuration();e?r.onDurationCalled||(r.props.onDuration(e),r.onDurationCalled=!0):r.durationCheckTimeout=setTimeout(r.onDurationCheck,100)},r.ref=function(e){e&&(r.player=e)},s(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),a(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.player.load(this.props.url),this.progress()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.player.stop(),this.mounted=!1}},{key:"componentWillReceiveProps",value:function(e){var t=this,n=this.props,r=n.url,o=n.playing,a=n.volume,i=n.muted,l=n.playbackRate;if(r!==e.url){if(this.isLoading)return console.warn("ReactPlayer: the attempt to load "+e.url+" is being deferred until the player has loaded"),void(this.loadOnReady=e.url);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(e.url,this.isReady)}o||!e.playing||this.isPlaying||this.player.play(),o&&!e.playing&&this.isPlaying&&this.player.pause(),a!==e.volume&&null!==e.volume&&this.player.setVolume(e.volume),i!==e.muted&&(e.muted?this.player.mute():(this.player.unmute(),null!==e.volume&&setTimeout(function(){return t.player.setVolume(e.volume)}))),l!==e.playbackRate&&this.player.setPlaybackRate&&this.player.setPlaybackRate(e.playbackRate)}},{key:"getDuration",value:function(){return this.isReady?this.player.getDuration():null}},{key:"getCurrentTime",value:function(){return this.isReady?this.player.getCurrentTime():null}},{key:"getSecondsLoaded",value:function(){return this.isReady?this.player.getSecondsLoaded():null}},{key:"seekTo",value:function(e){var t=this;if(!this.isReady&&0!==e)return this.seekOnPlay=e,void setTimeout(function(){t.seekOnPlay=null},5e3);if(e>0&&e<1){var n=this.player.getDuration();return n?void this.player.seekTo(n*e):void console.warn("ReactPlayer: could not seek using fraction – duration not yet available")}this.player.seekTo(e)}},{key:"render",value:function(){var e=this.props.activePlayer;return e?l.default.createElement(e,o({},this.props,{ref:this.ref,onReady:this.onReady,onPlay:this.onPlay,onPause:this.onPause,onEnded:this.onEnded})):null}}]),t}();c.displayName="Player",c.propTypes=u.propTypes,c.defaultProps=u.defaultProps,t.default=c},function(e,t,n){(function(e,r){var o=/%[sdj%]/g;t.format=function(e){if(!m(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(l(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,a=r.length,i=String(e).replace(o,function(e){if("%%"===e)return"%";if(n>=a)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),u=r[n];n<a;u=r[++n])y(u)||!_(u)?i+=" "+u:i+=" "+l(u);return i},t.deprecate=function(n,o){if(b(e.process))return function(){return t.deprecate(n,o).apply(this,arguments)};if(!0===r.noDeprecation)return n;var a=!1;return function(){if(!a){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation?console.trace(o):console.error(o),a=!0}return n.apply(this,arguments)}};var a,i={};function l(e,n){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&t._extend(r,n),b(r.showHidden)&&(r.showHidden=!1),b(r.depth)&&(r.depth=2),b(r.colors)&&(r.colors=!1),b(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),c(r,e,r.depth)}function u(e,t){var n=l.styles[t];return n?"["+l.colors[n][0]+"m"+e+"["+l.colors[n][1]+"m":e}function s(e,t){return e}function c(e,n,r){if(e.customInspect&&n&&P(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return m(o)||(o=c(e,o,r)),o}var a=function(e,t){if(b(t))return e.stylize("undefined","undefined");if(m(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(v(t))return e.stylize(""+t,"number");if(h(t))return e.stylize(""+t,"boolean");if(y(t))return e.stylize("null","null")}(e,n);if(a)return a;var i=Object.keys(n),l=function(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}(i);if(e.showHidden&&(i=Object.getOwnPropertyNames(n)),E(n)&&(i.indexOf("message")>=0||i.indexOf("description")>=0))return f(n);if(0===i.length){if(P(n)){var u=n.name?": "+n.name:"";return e.stylize("[Function"+u+"]","special")}if(g(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return e.stylize(Date.prototype.toString.call(n),"date");if(E(n))return f(n)}var s,_="",O=!1,k=["{","}"];(d(n)&&(O=!0,k=["[","]"]),P(n))&&(_=" [Function"+(n.name?": "+n.name:"")+"]");return g(n)&&(_=" "+RegExp.prototype.toString.call(n)),w(n)&&(_=" "+Date.prototype.toUTCString.call(n)),E(n)&&(_=" "+f(n)),0!==i.length||O&&0!=n.length?r<0?g(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),s=O?function(e,t,n,r,o){for(var a=[],i=0,l=t.length;i<l;++i)x(t,String(i))?a.push(p(e,t,n,r,String(i),!0)):a.push("");return o.forEach(function(o){o.match(/^\d+$/)||a.push(p(e,t,n,r,o,!0))}),a}(e,n,r,l,i):i.map(function(t){return p(e,n,r,l,t,O)}),e.seen.pop(),function(e,t,n){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(s,_,k)):k[0]+_+k[1]}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,r,o,a){var i,l,u;if((u=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?l=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(l=e.stylize("[Setter]","special")),x(r,o)||(i="["+o+"]"),l||(e.seen.indexOf(u.value)<0?(l=y(n)?c(e,u.value,null):c(e,u.value,n-1)).indexOf("\n")>-1&&(l=a?l.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+l.split("\n").map(function(e){return"   "+e}).join("\n")):l=e.stylize("[Circular]","special")),b(i)){if(a&&o.match(/^\d+$/))return l;(i=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(i=i.substr(1,i.length-2),i=e.stylize(i,"name")):(i=i.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),i=e.stylize(i,"string"))}return i+": "+l}function d(e){return Array.isArray(e)}function h(e){return"boolean"==typeof e}function y(e){return null===e}function v(e){return"number"==typeof e}function m(e){return"string"==typeof e}function b(e){return void 0===e}function g(e){return _(e)&&"[object RegExp]"===O(e)}function _(e){return"object"==typeof e&&null!==e}function w(e){return _(e)&&"[object Date]"===O(e)}function E(e){return _(e)&&("[object Error]"===O(e)||e instanceof Error)}function P(e){return"function"==typeof e}function O(e){return Object.prototype.toString.call(e)}function k(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(b(a)&&(a=r.env.NODE_DEBUG||""),e=e.toUpperCase(),!i[e])if(new RegExp("\\b"+e+"\\b","i").test(a)){var n=r.pid;i[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else i[e]=function(){};return i[e]},t.inspect=l,l.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},l.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=d,t.isBoolean=h,t.isNull=y,t.isNullOrUndefined=function(e){return null==e},t.isNumber=v,t.isString=m,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=b,t.isRegExp=g,t.isObject=_,t.isDate=w,t.isError=E,t.isFunction=P,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(134);var S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function x(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){var e,n;console.log("%s - %s",(e=new Date,n=[k(e.getHours()),k(e.getMinutes()),k(e.getSeconds())].join(":"),[e.getDate(),S[e.getMonth()],n].join(" ")),t.format.apply(t,arguments))},t.inherits=n(133),t._extend=function(e,t){if(!t||!_(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(this,n(22),n(135))},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(2),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(){var e=null,t=[];return{setPrompt:function(t){return(0,a.default)(null==e,"A history supports only one prompt at a time"),e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,o){if(null!=e){var i="function"==typeof e?e(t,n):e;"string"==typeof i?"function"==typeof r?r(i,o):((0,a.default)(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),o(!0)):o(!1!==i)}else o(!0)},appendListener:function(e){var n=!0,r=function(){n&&e.apply(void 0,arguments)};return t.push(r),function(){n=!1,t=t.filter(function(e){return e!==r})}},notifyListeners:function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach(function(e){return e.apply(void 0,n)})}}}},function(e,t,n){"use strict";t.__esModule=!0,t.locationsAreEqual=t.createLocation=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=l(n(52)),a=l(n(51)),i=n(12);function l(e){return e&&e.__esModule?e:{default:e}}t.createLocation=function(e,t,n,a){var l=void 0;"string"==typeof e?(l=(0,i.parsePath)(e)).state=t:(void 0===(l=r({},e)).pathname&&(l.pathname=""),l.search?"?"!==l.search.charAt(0)&&(l.search="?"+l.search):l.search="",l.hash?"#"!==l.hash.charAt(0)&&(l.hash="#"+l.hash):l.hash="",void 0!==t&&void 0===l.state&&(l.state=t));try{l.pathname=decodeURI(l.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+l.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(l.key=n),a?l.pathname?"/"!==l.pathname.charAt(0)&&(l.pathname=(0,o.default)(l.pathname,a.pathname)):l.pathname=a.pathname:l.pathname||(l.pathname="/"),l},t.locationsAreEqual=function(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&(0,a.default)(e.state,t.state)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deletePlaylistSong=t.createPlaylistSong=t.fetchPlaylistSongs=t.REMOVE_PLAYLIST_SONG=t.RECEIVE_PLAYLIST_SONG=t.RECEIVE_ALL_PLAYLIST_SONGS=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(71));var o=t.RECEIVE_ALL_PLAYLIST_SONGS="RECEIVE_ALL_PLAYLIST_SONGS",a=t.RECEIVE_PLAYLIST_SONG="RECEIVE_PLAYLIST_SONG",i=t.REMOVE_PLAYLIST_SONG="REMOVE_PLAYLIST_SONG";t.fetchPlaylistSongs=function(){return function(e){return r.fetchPlaylistSongs().then(function(t){return e({type:o,playlist_songs:t})})}},t.createPlaylistSong=function(e){return function(t){return r.createPlaylistSong(e).then(function(e){return t({type:a,playlist_song:e})})}},t.deletePlaylistSong=function(e){return function(t){return r.deletePlaylistSong(e).then(function(e){return t({type:i,id:e.id})})}}},function(e,t,n){var r=n(209),o=n(208),a=n(207),i=a&&a.isTypedArray,l=i?o(i):r;e.exports=l},function(e,t,n){(function(e){var r=n(11),o=n(211),a="object"==typeof t&&t&&!t.nodeType&&t,i=a&&"object"==typeof e&&e&&!e.nodeType&&e,l=i&&i.exports===a?r.Buffer:void 0,u=(l?l.isBuffer:void 0)||o;e.exports=u}).call(this,n(44)(e))},function(e,t){var n=Object.prototype;e.exports=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||n)}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){var r=n(82);e.exports=function(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},function(e,t,n){var r=n(11).Symbol;e.exports=r},function(e,t,n){var r=n(20),o=n(14),a="[object AsyncFunction]",i="[object Function]",l="[object GeneratorFunction]",u="[object Proxy]";e.exports=function(e){if(!o(e))return!1;var t=r(e);return t==i||t==l||t==a||t==u}},function(e,t,n){var r=n(15)(n(11),"Map");e.exports=r},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,o,a,i,l,u){if(r(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,a,i,l,u],f=0;(s=new Error(t.replace(/%s/g,function(){return c[f++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(e,t,n){"use strict";n.r(t);var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function e(t,n){if(t===n)return!0;if(null==t||null==n)return!1;if(Array.isArray(t))return Array.isArray(n)&&t.length===n.length&&t.every(function(t,r){return e(t,n[r])});var o=void 0===t?"undefined":r(t);if(o!==(void 0===n?"undefined":r(n)))return!1;if("object"===o){var a=t.valueOf(),i=n.valueOf();if(a!==t||i!==n)return e(a,i);var l=Object.keys(t),u=Object.keys(n);return l.length===u.length&&l.every(function(r){return e(t[r],n[r])})}return!1}},function(e,t,n){"use strict";function r(e){return"/"===e.charAt(0)}function o(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}n.r(t),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e&&e.split("/")||[],a=t&&t.split("/")||[],i=e&&r(e),l=t&&r(t),u=i||l;if(e&&r(e)?a=n:n.length&&(a.pop(),a=a.concat(n)),!a.length)return"/";var s=void 0;if(a.length){var c=a[a.length-1];s="."===c||".."===c||""===c}else s=!1;for(var f=0,p=a.length;p>=0;p--){var d=a[p];"."===d?o(a,p):".."===d?(o(a,p),f++):f&&(o(a,p),f--)}if(!u)for(;f--;f)a.unshift("..");!u||""===a[0]||a[0]&&r(a[0])||a.unshift("");var h=a.join("/");return s&&"/"!==h.substr(-1)&&(h+="/"),h}},function(e,t,n){"use strict";(function(e,r){var o,a=n(96);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var i=Object(a.a)(o);t.a=i}).call(this,n(22),n(258)(e))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FilePlayer=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=s(a),l=n(8),u=s(n(10));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f="undefined"!=typeof navigator&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,p=/\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,d=/\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i,h=/\.(m3u8)($|\?)/i,y=/\.(mpd)($|\?)/i,v=/www\.dropbox\.com\/.+/;var m=t.FilePlayer=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,l=Array(a),u=0;u<a;u++)l[u]=arguments[u];return n=o=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.onSeek=function(e){o.props.onSeek(e.target.currentTime)},o.mute=function(){o.player.muted=!0},o.unmute=function(){o.player.muted=!1},o.renderSourceElement=function(e,t){return"string"==typeof e?i.default.createElement("source",{key:t,src:e}):i.default.createElement("source",r({key:t},e))},o.renderTrack=function(e,t){return i.default.createElement("track",r({key:t},e))},o.ref=function(e){o.player=e},c(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"componentDidMount",value:function(){this.addListeners(),f&&this.player.load()}},{key:"componentWillReceiveProps",value:function(e){this.shouldUseAudio(this.props)!==this.shouldUseAudio(e)&&this.removeListeners()}},{key:"componentDidUpdate",value:function(e){this.shouldUseAudio(this.props)!==this.shouldUseAudio(e)&&this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"addListeners",value:function(){var e=this.props,t=e.onReady,n=e.onPlay,r=e.onPause,o=e.onEnded,a=e.onError,i=e.playsinline;this.player.addEventListener("canplay",t),this.player.addEventListener("play",n),this.player.addEventListener("pause",r),this.player.addEventListener("seeked",this.onSeek),this.player.addEventListener("ended",o),this.player.addEventListener("error",a),i&&(this.player.setAttribute("playsinline",""),this.player.setAttribute("webkit-playsinline",""))}},{key:"removeListeners",value:function(){var e=this.props,t=e.onReady,n=e.onPlay,r=e.onPause,o=e.onEnded,a=e.onError;this.player.removeEventListener("canplay",t),this.player.removeEventListener("play",n),this.player.removeEventListener("pause",r),this.player.removeEventListener("seeked",this.onSeek),this.player.removeEventListener("ended",o),this.player.removeEventListener("error",a)}},{key:"shouldUseAudio",value:function(e){return!e.config.file.forceVideo&&(!e.config.file.attributes.poster&&(p.test(e.url)||e.config.file.forceAudio))}},{key:"shouldUseHLS",value:function(e){return h.test(e)&&!f||this.props.config.file.forceHLS}},{key:"shouldUseDASH",value:function(e){return y.test(e)||this.props.config.file.forceDASH}},{key:"load",value:function(e){var t=this;if(this.shouldUseHLS(e)&&(0,l.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.9.1/hls.min.js","Hls").then(function(n){t.hls=new n(t.props.config.file.hlsOptions),t.hls.on(n.Events.ERROR,function(e,r){t.props.onError(e,r,t.hls,n)}),t.hls.loadSource(e),t.hls.attachMedia(t.player)}),this.shouldUseDASH(e)&&(0,l.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/2.6.5/dash.all.min.js","dashjs").then(function(n){t.dash=n.MediaPlayer().create(),t.dash.initialize(t.player,e,t.props.playing),t.dash.getDebug().setLogToBrowserConsole(!1)}),(0,l.isMediaStream)(e))try{this.player.srcObject=e}catch(t){this.player.src=window.URL.createObjectURL(e)}}},{key:"play",value:function(){var e=this.player.play();e&&e.catch(this.props.onError)}},{key:"pause",value:function(){this.player.pause()}},{key:"stop",value:function(){this.player.removeAttribute("src"),this.hls&&this.hls.destroy(),this.dash&&this.dash.reset()}},{key:"seekTo",value:function(e){this.player.currentTime=e}},{key:"setVolume",value:function(e){this.player.volume=e}},{key:"setPlaybackRate",value:function(e){this.player.playbackRate=e}},{key:"getDuration",value:function(){return this.player.duration}},{key:"getCurrentTime",value:function(){return this.player.currentTime}},{key:"getSecondsLoaded",value:function(){var e=this.player.buffered;if(0===e.length)return 0;var t=e.end(e.length-1),n=this.getDuration();return t>n?n:t}},{key:"getSource",value:function(e){var t=this.shouldUseHLS(e),n=this.shouldUseDASH(e);if(!(e instanceof Array||(0,l.isMediaStream)(e)||t||n))return v.test(e)?e.replace("www.dropbox.com","dl.dropboxusercontent.com"):e}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.playing,o=e.loop,a=e.controls,l=e.muted,u=e.config,s=e.width,c=e.height,f=this.shouldUseAudio(this.props)?"audio":"video",p={width:"auto"===s?s:"100%",height:"auto"===c?c:"100%"};return i.default.createElement(f,r({ref:this.ref,src:this.getSource(t),style:p,preload:"auto",autoPlay:n||void 0,controls:a,muted:l,loop:o},u.file.attributes),t instanceof Array&&t.map(this.renderSourceElement),u.file.tracks.map(this.renderTrack))}}]),t}();m.displayName="FilePlayer",m.canPlay=function e(t){if(t instanceof Array){var n=!0,r=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var u=a.value;if("string"==typeof u&&e(u))return!0;if(e(u.src))return!0}}catch(e){r=!0,o=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw o}}return!1}return!!(0,l.isMediaStream)(t)||p.test(t)||d.test(t)||h.test(t)||y.test(t)},t.default=(0,u.default)(m)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DailyMotion=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=s(a),l=n(8),u=s(n(10));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=/dailymotion\.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/,p=t.DailyMotion=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.callPlayer=l.callPlayer,r.onDurationChange=function(){var e=r.getDuration();r.props.onDuration(e)},r.mute=function(){r.callPlayer("setMuted",!0)},r.unmute=function(){r.callPlayer("setMuted",!1)},r.ref=function(e){r.container=e},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"parseId",value:function(e){var t=e.match(f);return t[4]||t[2]}},{key:"load",value:function(e){var t=this,n=this.props,o=n.controls,a=n.config,i=n.onError,u=n.playing,s=this.parseId(e);this.player?this.player.load(s,{start:(0,l.parseStartTime)(e),autoplay:u}):(0,l.getSDK)("https://api.dmcdn.net/all.js","DM","dmAsyncInit",function(e){return e.player}).then(function(n){if(t.container){var u=n.player;t.player=new u(t.container,{width:"100%",height:"100%",video:s,params:r({controls:o,autoplay:t.props.playing,mute:t.props.muted,start:(0,l.parseStartTime)(e),origin:window.location.origin},a.dailymotion.params),events:{apiready:t.props.onReady,seeked:function(){return t.props.onSeek(t.player.currentTime)},video_end:t.props.onEnded,durationchange:t.onDurationChange,pause:t.props.onPause,playing:t.props.onPlay,waiting:t.props.onBuffer,error:function(e){return i(e)}}})}},i)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.player.duration||null}},{key:"getCurrentTime",value:function(){return this.player.currentTime}},{key:"getSecondsLoaded",value:function(){return this.player.bufferedTime}},{key:"render",value:function(){var e=r({width:"100%",height:"100%",backgroundColor:"black"},this.props.style);return i.default.createElement("div",{style:e},i.default.createElement("div",{ref:this.ref}))}}]),t}();p.displayName="DailyMotion",p.canPlay=function(e){return f.test(e)},p.loopOnEnded=!0,t.default=(0,u.default)(p)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vimeo=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=s(a),l=n(8),u=s(n(10));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=/vimeo\.com\/.+/,p=/vimeo\.com\/external\/.+\.mp4/,d=t.Vimeo=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.callPlayer=l.callPlayer,r.duration=null,r.currentTime=null,r.secondsLoaded=null,r.mute=function(){r.setVolume(0)},r.unmute=function(){null!==r.props.volume&&r.setVolume(r.props.volume)},r.ref=function(e){r.container=e},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"load",value:function(e){var t=this;this.duration=null,(0,l.getSDK)("https://player.vimeo.com/api/player.js","Vimeo").then(function(n){t.container&&(t.player=new n.Player(t.container,r({},t.props.config.vimeo.playerOptions,{url:e,autoplay:t.props.playing,muted:t.props.muted,loop:t.props.loop})),t.player.ready().then(function(){var e=t.container.querySelector("iframe");e.style.width="100%",e.style.height="100%"}).catch(t.props.onError),t.player.on("loaded",function(){t.props.onReady(),t.player.getDuration().then(function(e){t.duration=e})}),t.player.on("play",t.props.onPlay),t.player.on("pause",t.props.onPause),t.player.on("seeked",function(e){return t.props.onSeek(e.seconds)}),t.player.on("ended",t.props.onEnded),t.player.on("error",t.props.onError),t.player.on("timeupdate",function(e){var n=e.seconds;t.currentTime=n}),t.player.on("progress",function(e){var n=e.seconds;t.secondsLoaded=n}))},this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("unload")}},{key:"seekTo",value:function(e){this.callPlayer("setCurrentTime",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){var e=r({width:"100%",height:"100%",overflow:"hidden",backgroundColor:"black"},this.props.style);return i.default.createElement("div",{key:this.props.url,ref:this.ref,style:e})}}]),t}();d.displayName="Vimeo",d.canPlay=function(e){return!p.test(e)&&f.test(e)},t.default=(0,u.default)(d)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SoundCloud=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=s(a),l=n(8),u=s(n(10));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=/(soundcloud\.com|snd\.sc)\/.+$/,p=t.SoundCloud=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.callPlayer=l.callPlayer,r.duration=null,r.currentTime=null,r.fractionLoaded=null,r.mute=function(){r.setVolume(0)},r.unmute=function(){null!==r.props.volume&&r.setVolume(r.props.volume)},r.ref=function(e){r.iframe=e},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"load",value:function(e,t){var n=this;(0,l.getSDK)("https://w.soundcloud.com/player/api.js","SC").then(function(o){if(n.iframe){var a=o.Widget.Events,i=a.PLAY,l=a.PLAY_PROGRESS,u=a.PAUSE,s=a.FINISH,c=a.ERROR;t||(n.player=o.Widget(n.iframe),n.player.bind(i,n.props.onPlay),n.player.bind(u,n.props.onPause),n.player.bind(l,function(e){n.currentTime=e.currentPosition/1e3,n.fractionLoaded=e.loadedProgress}),n.player.bind(s,function(){return n.props.onEnded()}),n.player.bind(c,function(e){return n.props.onError(e)})),n.player.load(e,r({},n.props.config.soundcloud.options,{callback:function(){n.player.getDuration(function(e){n.duration=e/1e3,n.props.onReady()})}}))}})}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("seekTo",1e3*e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.fractionLoaded*this.duration}},{key:"render",value:function(){var e=r({width:"100%",height:"100%"},this.props.style);return i.default.createElement("iframe",{ref:this.ref,src:"https://w.soundcloud.com/player/?url="+encodeURIComponent(this.props.url),style:e,frameBorder:0})}}]),t}();p.displayName="SoundCloud",p.canPlay=function(e){return f.test(e)},p.loopOnEnded=!0,t.default=(0,u.default)(p)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.YouTube=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=s(a),l=n(8),u=s(n(10));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f="YT",p=/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})/,d=t.YouTube=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.callPlayer=l.callPlayer,r.onStateChange=function(e){var t=e.data,n=r.props,o=n.onPlay,a=n.onPause,i=n.onBuffer,l=n.onEnded,u=n.onReady,s=window[f].PlayerState,c=s.PLAYING,p=s.PAUSED,d=s.BUFFERING,h=s.ENDED,y=s.CUED;t===c&&o(),t===p&&a(),t===d&&i(),t===h&&l(),t===y&&u()},r.mute=function(){r.callPlayer("mute")},r.unmute=function(){r.callPlayer("unMute")},r.ref=function(e){r.container=e},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"load",value:function(e,t){var n=this,o=this.props,a=o.playing,i=o.muted,u=o.playsinline,s=o.controls,c=o.config,d=o.onError,h=c.youtube.playerVars,y=e&&e.match(p)[1];t?this.player.cueVideoById({videoId:y,startSeconds:(0,l.parseStartTime)(e)||h.start,endSeconds:(0,l.parseEndTime)(e)||h.end}):(0,l.getSDK)("https://www.youtube.com/iframe_api",f,"onYouTubeIframeAPIReady",function(e){return e.loaded}).then(function(t){n.container&&(n.player=new t.Player(n.container,{width:"100%",height:"100%",videoId:y,playerVars:r({autoplay:a?1:0,mute:i?1:0,controls:s?1:0,start:(0,l.parseStartTime)(e),end:(0,l.parseEndTime)(e),origin:window.location.origin,playsinline:u},h),events:{onReady:n.props.onReady,onStateChange:n.onStateChange,onError:function(e){return d(e.data)}}}))},d)}},{key:"play",value:function(){this.callPlayer("playVideo")}},{key:"pause",value:function(){this.callPlayer("pauseVideo")}},{key:"stop",value:function(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}},{key:"seekTo",value:function(e){this.callPlayer("seekTo",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("setPlaybackRate",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}},{key:"render",value:function(){var e=r({width:"100%",height:"100%"},this.props.style);return i.default.createElement("div",{style:e},i.default.createElement("div",{ref:this.ref}))}}]),t}();d.displayName="YouTube",d.canPlay=function(e){return p.test(e)},d.loopOnEnded=!0,t.default=(0,u.default)(d)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(60),a=s(n(1)),i=n(4),l=s(n(62)),u=s(n(61));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"render",value:function(){var e=void 0;return e=""==typeof this.props.now_playing?"":this.props.now_playing.album_art,a.default.createElement("div",{className:"main-sidebar"},a.default.createElement("div",null,a.default.createElement("div",{className:"audify-logo"}),a.default.createElement("div",{className:"side-links-container"},a.default.createElement("div",null,a.default.createElement(i.NavLink,{to:"/search",className:"side-links",activeClassName:"active-side"},a.default.createElement("div",{className:"search-icon"}),"Search")),a.default.createElement("div",null,a.default.createElement(i.NavLink,{to:"/home",className:"side-links",activeClassName:"active-side"},a.default.createElement("div",{className:"home-icon"}),"Home")),a.default.createElement("div",null,a.default.createElement(i.NavLink,{to:"/browse",className:"side-links",activeClassName:"active-side"},a.default.createElement("div",{className:"library-icon"}),"Browse")),a.default.createElement("div",null,a.default.createElement(i.NavLink,{to:"/aboutme",className:"side-links",activeClassName:"active-side"},a.default.createElement("div",{className:"dev-icon"}),"Developer Info")),a.default.createElement("div",{className:"side-user"},a.default.createElement(o.ProtectedRoute,{path:"/",component:u.default}),a.default.createElement(o.ProtectedRoute,{path:"/",component:l.default})))),a.default.createElement("div",{className:"side-art"},a.default.createElement("img",{src:e})))}}]),t}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ProtectedRoute=t.AuthRoute=void 0;var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r},i=n(5),l=n(4);var u=function(e){return{loggedIn:Boolean(e.session.currentUser)}};t.AuthRoute=(0,l.withRouter)((0,i.connect)(u,null)(function(e){var t=e.component,n=e.path,r=e.loggedIn,o=e.exact;return a.default.createElement(l.Route,{path:n,exact:o,render:function(e){return r?a.default.createElement(l.Redirect,{to:"/home"}):a.default.createElement(t,e)}})})),t.ProtectedRoute=(0,l.withRouter)((0,i.connect)(u,null)(function(e){var t=e.component,n=e.path,r=e.loggedIn,o=e.exact;return a.default.createElement(l.Route,{path:n,exact:o,render:function(e){return r?a.default.createElement(t,e):a.default.createElement(l.Redirect,{to:"/login"})}})}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=(a(n(1)),n(4),a(n(127)));function a(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.connect)(function(e){return{current_user:e.session.currentUser}},null)(o.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(5),a=n(7),i=n(128),l=(r=i)&&r.__esModule?r:{default:r};t.default=(0,o.connect)(null,function(e){return{logout:function(){return e((0,a.logout)())}}})(l.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(5),a=n(9),i=n(132),l=(r=i)&&r.__esModule?r:{default:r},u=n(6),s=n(4);t.default=(0,s.withRouter)((0,o.connect)(function(e,t){return{playlist:e.entities.playlists[t.match.params.playlistId]}},function(e){return{updatePlaylist:function(t){return e((0,a.updatePlaylist)(t))},closeModal:function(){return e((0,u.closeModal)())}}})(l.default))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=(r=a)&&r.__esModule?r:{default:r};n(4),n(71);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.green_nwpl=n.props.green_nwpl,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentWillReceiveProps",value:function(e){this.props.now_pl_green!==e.now_pl_green&&(void 0===e.now_pl_green?this.green_nwpl="":this.props.song.title===e.now_pl_green.title?this.green_nwpl="apply-green-nwpl":this.green_nwpl="")}},{key:"handleClick",value:function(){this.props.songClick(this.props.song)}},{key:"handlePlayClick",value:function(){this.props.playNow(this.props.idx),this.props.nowPlayingQueue(this.props.current_songs_list)}},{key:"handleDelete",value:function(){this.props.deletePlaylistSong({playlist_id:this.props.playlist.id,song_id:this.props.song.id})}},{key:"render",value:function(){return i.default.createElement("div",{className:"right-pl-show"},i.default.createElement("li",{className:"pl-each-song"},i.default.createElement("div",{className:"pl-song-first",onClick:this.handlePlayClick.bind(this)},i.default.createElement("div",{className:"music-note-icon"}),i.default.createElement("div",{className:"pl-song-title"},i.default.createElement("div",{className:this.green_nwpl},this.props.song.title),i.default.createElement("span",{className:"pl-song-details"},this.props.song.artist_name),i.default.createElement("span",{className:"pl-artist-album-separator"},"•"),i.default.createElement("span",{className:"pl-song-details"},this.props.song.album_title))),i.default.createElement("div",null,i.default.createElement("button",{className:"remove-song-from-pl",onClick:this.handleDelete.bind(this)},i.default.createElement("p",{className:"rsfp-text"},"REMOVE")))))}}]),t}();t.default=l},function(e,t,n){var r=n(166),o=n(163),a=n(162),i=1,l=2;e.exports=function(e,t,n,u,s,c){var f=n&i,p=e.length,d=t.length;if(p!=d&&!(f&&d>p))return!1;var h=c.get(e);if(h&&c.get(t))return h==t;var y=-1,v=!0,m=n&l?new r:void 0;for(c.set(e,t),c.set(t,e);++y<p;){var b=e[y],g=t[y];if(u)var _=f?u(g,b,y,t,e,c):u(b,g,y,e,t,c);if(void 0!==_){if(_)continue;v=!1;break}if(m){if(!o(t,function(e,t){if(!a(m,t)&&(b===e||s(b,e,n,u,c)))return m.push(t)})){v=!1;break}}else if(b!==g&&!s(b,g,n,u,c)){v=!1;break}}return c.delete(e),c.delete(t),v}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(1)),a=n(4);i(n(169));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={username:"",password:""},n.handleUsernameChange=n.handleUsernameChange.bind(n),n.handlePasswordChange=n.handlePasswordChange.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentWillUnmount",value:function(){this.props.clearErrors([])}},{key:"handleUsernameChange",value:function(e){this.props.clearErrors([]),this.setState({username:e.currentTarget.value})}},{key:"handlePasswordChange",value:function(e){this.props.clearErrors([]),this.setState({password:e.currentTarget.value})}},{key:"handleSubmit",value:function(e){void 0!==e&&e.preventDefault(),this.props.submitForm(this.state)}},{key:"handleDemoSubmit",value:function(e){void 0!==e&&e.preventDefault(),this.props.demoLogin(this.state)}},{key:"handleDemo",value:function(e){var t=this;this.setState({username:"itspronouncedjif",password:"password"},function(){return t.handleDemoSubmit()})}},{key:"renderErrors",value:function(){var e=this.props.errors;return o.default.createElement("ul",{className:"errors"},e.map(function(e,t){return o.default.createElement("li",{key:"error-"+t},e)}))}},{key:"render",value:function(){var e=void 0,t=void 0;return"LOG IN"===this.props.formType?(e=o.default.createElement("span",null,o.default.createElement("button",{className:"demo-login-fb",onClick:this.handleDemo.bind(this)},"DEMO LOGIN"),o.default.createElement("p",{className:"or"},"- OR -")),t=o.default.createElement("div",null,"Don't have an account? ",o.default.createElement(a.Link,{to:"/signup",className:"ss"},"Sign Up"))):(e=o.default.createElement("span",null,o.default.createElement("button",{className:"demo-login-fb",onClick:this.handleDemo.bind(this)},"DEMO LOGIN"),o.default.createElement("p",{className:"or"},"- OR -")),t=o.default.createElement("div",null,"Already have an account? ",o.default.createElement(a.Link,{to:"/login",className:"ss"},"Log in"))),o.default.createElement("div",{className:"AllSession"},o.default.createElement("div",{className:"sessionlogo-container"},o.default.createElement("div",{className:"sessionlogo"})),o.default.createElement("div",{className:"allform"},e,o.default.createElement("form",null,o.default.createElement("div",null,o.default.createElement("input",{type:"text",value:this.state.username,onChange:this.handleUsernameChange,className:"usernameform",placeholder:"Username",autoFocus:!0}),o.default.createElement("br",null),o.default.createElement("input",{type:"password",value:this.state.password,onChange:this.handlePasswordChange,className:"passwordform",placeholder:"Password"}),o.default.createElement("br",null),this.renderErrors(),o.default.createElement("div",{className:"submitcontainer"},o.default.createElement("button",{onClick:this.handleSubmit.bind(this),className:"submitForm"},this.props.formType))))),t,o.default.createElement("div",{className:"tc"},' If you click "Demo Login" and are not a Audify user, you are invited to visit my ',o.default.createElement("a",{href:"#",className:"ss1"},"Github")," and ",o.default.createElement("a",{href:"#",className:"ss1"},"LinkedIn")))}}]),t}();t.default=(0,a.withRouter)(l)},function(e,t,n){"use strict";t.__esModule=!0;t.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),t.addEventListener=function(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},t.removeEventListener=function(e,t,n){return e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)},t.getConfirmation=function(e,t){return t(window.confirm(e))},t.supportsHistory=function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)},t.supportsPopStateOnHashChange=function(){return-1===window.navigator.userAgent.indexOf("Trident")},t.supportsGoWithoutReloadUsingHash=function(){return-1===window.navigator.userAgent.indexOf("Firefox")},t.isExtraneousPopstateEvent=function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.UPDATE_NWPL="UPDATE_NWPL";t.updateNwpl=function(e){return{type:r,idx:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchSearchResults=t.RECEIVE_SEARCH_RESULTS=void 0;var r=n(186),o=t.RECEIVE_SEARCH_RESULTS="RECEIVE_SEARCH_RESULTS";t.fetchSearchResults=function(e){return function(t){return(0,r.fetchResults)(e).then(function(e){return t({type:o,results:e})})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.ADD_CLICKED_SONG="ADD_CLICKED_SONG";t.songClick=function(e){return{type:r,song:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.fetchPlaylistSongs=function(){return $.ajax({method:"GET",url:"api/playlist_songs"})},t.createPlaylistSong=function(e){return $.ajax({url:"api/playlist_songs",method:"POST",data:{playlist_song:e}})},t.deletePlaylistSong=function(e){return $.ajax({url:"api/playlist_songs/"+e.playlist_id+"/"+e.song_id,method:"DELETE",data:{ps:e}})}},function(e,t){e.exports=function(e){return e}},function(e,t){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){var o=typeof e;return!!(t=null==t?n:t)&&("number"==o||"symbol"!=o&&r.test(e))&&e>-1&&e%1==0&&e<t}},function(e,t,n){var r=n(203),o=n(78),a=n(30),i=n(42),l=n(73),u=n(41),s=Object.prototype.hasOwnProperty;e.exports=function(e,t){var n=a(e),c=!n&&o(e),f=!n&&!c&&i(e),p=!n&&!c&&!f&&u(e),d=n||c||f||p,h=d?r(e.length,String):[],y=h.length;for(var v in e)!t&&!s.call(e,v)||d&&("length"==v||f&&("offset"==v||"parent"==v)||p&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||l(v,y))||h.push(v);return h}},function(e,t,n){var r=n(74),o=n(202),a=n(29);e.exports=function(e){return a(e)?r(e,!0):o(e)}},function(e,t){e.exports=function(e,t){return"__proto__"==t?void 0:e[t]}},function(e,t){var n=9007199254740991;e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}},function(e,t,n){var r=n(213),o=n(18),a=Object.prototype,i=a.hasOwnProperty,l=a.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(e){return o(e)&&i.call(e,"callee")&&!l.call(e,"callee")};e.exports=u},function(e,t){e.exports=function(e,t){return function(n){return e(t(n))}}},function(e,t,n){var r=n(79)(Object.getPrototypeOf,Object);e.exports=r},function(e,t,n){var r=n(11).Uint8Array;e.exports=r},function(e,t,n){var r=n(15),o=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},function(e,t,n){var r=n(45),o=n(21);e.exports=function(e,t,n){(void 0===n||o(e[t],n))&&(void 0!==n||t in e)||r(e,t,n)}},function(e,t,n){var r=n(234),o=n(227),a=n(225),i=n(224),l=n(223);function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=l,e.exports=u},function(e,t){var n=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return n.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(22))},function(e,t,n){var r=n(34),o=n(245),a=n(244),i=n(243),l=n(242),u=n(241);function s(e){var t=this.__data__=new r(e);this.size=t.size}s.prototype.clear=o,s.prototype.delete=a,s.prototype.get=i,s.prototype.has=l,s.prototype.set=u,e.exports=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.login=function(e){return $.ajax({url:"api/session",method:"POST",data:{user:e}})},t.signup=function(e){return $.ajax({url:"api/users",method:"POST",data:{user:e}})},t.logout=function(){return $.ajax({url:"api/session",method:"DELETE"})}},function(e,t,n){"use strict";e.exports={}},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,l=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))o.call(n,s)&&(l[s]=n[s]);if(r){i=r(n);for(var c=0;c<i.length;c++)a.call(n,i[c])&&(l[i[c]]=n[i[c]])}}return l}},function(e,t,n){var r=n(173);e.exports=d,e.exports.parse=a,e.exports.compile=function(e,t){return l(a(e,t))},e.exports.tokensToFunction=l,e.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(e,t){for(var n,r=[],a=0,i=0,l="",c=t&&t.delimiter||"/";null!=(n=o.exec(e));){var f=n[0],p=n[1],d=n.index;if(l+=e.slice(i,d),i=d+f.length,p)l+=p[1];else{var h=e[i],y=n[2],v=n[3],m=n[4],b=n[5],g=n[6],_=n[7];l&&(r.push(l),l="");var w=null!=y&&null!=h&&h!==y,E="+"===g||"*"===g,P="?"===g||"*"===g,O=n[2]||c,k=m||b;r.push({name:v||a++,prefix:y||"",delimiter:O,optional:P,repeat:E,partial:w,asterisk:!!_,pattern:k?s(k):_?".*":"[^"+u(O)+"]+?"})}}return i<e.length&&(l+=e.substr(i)),l&&r.push(l),r}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function l(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,o){for(var a="",l=n||{},u=(o||{}).pretty?i:encodeURIComponent,s=0;s<e.length;s++){var c=e[s];if("string"!=typeof c){var f,p=l[c.name];if(null==p){if(c.optional){c.partial&&(a+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(r(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(f=u(p[d]),!t[s].test(f))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(f)+"`");a+=(0===d?c.prefix:c.delimiter)+f}}else{if(f=c.asterisk?encodeURI(p).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):u(p),!t[s].test(f))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+f+'"');a+=c.prefix+f}}else a+=c}return a}}function u(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function c(e,t){return e.keys=t,e}function f(e){return e.sensitive?"":"i"}function p(e,t,n){r(t)||(n=t||n,t=[]);for(var o=(n=n||{}).strict,a=!1!==n.end,i="",l=0;l<e.length;l++){var s=e[l];if("string"==typeof s)i+=u(s);else{var p=u(s.prefix),d="(?:"+s.pattern+")";t.push(s),s.repeat&&(d+="(?:"+p+d+")*"),i+=d=s.optional?s.partial?p+"("+d+")?":"(?:"+p+"("+d+"))?":p+"("+d+")"}}var h=u(n.delimiter||"/"),y=i.slice(-h.length)===h;return o||(i=(y?i.slice(0,-h.length):i)+"(?:"+h+"(?=$))?"),i+=a?"$":o&&y?"":"(?="+h+"|$)",c(new RegExp("^"+i,f(n)),t)}function d(e,t,n){return r(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return c(e,t)}(e,t):r(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(d(e[o],t,n).source);return c(new RegExp("(?:"+r.join("|")+")",f(n)),t)}(e,t,n):function(e,t,n){return p(a(e,n),t,n)}(e,t,n)}},function(e,t,n){"use strict";t.__esModule=!0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=s(n(2)),i=n(12),l=n(39),u=s(n(38));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e,t,n){return Math.min(Math.max(e,t),n)};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.getUserConfirmation,n=e.initialEntries,s=void 0===n?["/"]:n,f=e.initialIndex,p=void 0===f?0:f,d=e.keyLength,h=void 0===d?6:d,y=(0,u.default)(),v=function(e){o(E,e),E.length=E.entries.length,y.notifyListeners(E.location,E.action)},m=function(){return Math.random().toString(36).substr(2,h)},b=c(p,0,s.length-1),g=s.map(function(e){return"string"==typeof e?(0,l.createLocation)(e,void 0,m()):(0,l.createLocation)(e,void 0,e.key||m())}),_=i.createPath,w=function(e){var n=c(E.index+e,0,E.entries.length-1),r=E.entries[n];y.confirmTransitionTo(r,"POP",t,function(e){e?v({action:"POP",location:r,index:n}):v()})},E={length:g.length,action:"POP",location:g[b],index:b,entries:g,createHref:_,push:function(e,n){(0,a.default)(!("object"===(void 0===e?"undefined":r(e))&&void 0!==e.state&&void 0!==n),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var o=(0,l.createLocation)(e,n,m(),E.location);y.confirmTransitionTo(o,"PUSH",t,function(e){if(e){var t=E.index+1,n=E.entries.slice(0);n.length>t?n.splice(t,n.length-t,o):n.push(o),v({action:"PUSH",location:o,index:t,entries:n})}})},replace:function(e,n){(0,a.default)(!("object"===(void 0===e?"undefined":r(e))&&void 0!==e.state&&void 0!==n),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var o=(0,l.createLocation)(e,n,m(),E.location);y.confirmTransitionTo(o,"REPLACE",t,function(e){e&&(E.entries[E.index]=o,v({action:"REPLACE",location:o}))})},go:w,goBack:function(){return w(-1)},goForward:function(){return w(1)},canGo:function(e){var t=E.index+e;return t>=0&&t<E.entries.length},block:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return y.setPrompt(e)},listen:function(e){return y.appendListener(e)}};return E}},function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(n(2)),a=c(n(3)),i=n(39),l=n(12),u=c(n(38)),s=n(67);function c(e){return e&&e.__esModule?e:{default:e}}var f={hashbang:{encodePath:function(e){return"!"===e.charAt(0)?e:"!/"+(0,l.stripLeadingSlash)(e)},decodePath:function(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:l.stripLeadingSlash,decodePath:l.addLeadingSlash},slash:{encodePath:l.addLeadingSlash,decodePath:l.addLeadingSlash}},p=function(){var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)},d=function(e){var t=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,t>=0?t:0)+"#"+e)};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a.default)(s.canUseDOM,"Hash history needs a DOM");var t=window.history,n=(0,s.supportsGoWithoutReloadUsingHash)(),c=e.getUserConfirmation,h=void 0===c?s.getConfirmation:c,y=e.hashType,v=void 0===y?"slash":y,m=e.basename?(0,l.stripTrailingSlash)((0,l.addLeadingSlash)(e.basename)):"",b=f[v],g=b.encodePath,_=b.decodePath,w=function(){var e=_(p());return(0,o.default)(!m||(0,l.hasBasename)(e,m),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+e+'" to begin with "'+m+'".'),m&&(e=(0,l.stripBasename)(e,m)),(0,i.createLocation)(e)},E=(0,u.default)(),P=function(e){r(I,e),I.length=t.length,E.notifyListeners(I.location,I.action)},O=!1,k=null,S=function(){var e=p(),t=g(e);if(e!==t)d(t);else{var n=w(),r=I.location;if(!O&&(0,i.locationsAreEqual)(r,n))return;if(k===(0,l.createPath)(n))return;k=null,x(n)}},x=function(e){O?(O=!1,P()):E.confirmTransitionTo(e,"POP",h,function(t){t?P({action:"POP",location:e}):j(e)})},j=function(e){var t=I.location,n=N.lastIndexOf((0,l.createPath)(t));-1===n&&(n=0);var r=N.lastIndexOf((0,l.createPath)(e));-1===r&&(r=0);var o=n-r;o&&(O=!0,M(o))},C=p(),T=g(C);C!==T&&d(T);var R=w(),N=[(0,l.createPath)(R)],M=function(e){(0,o.default)(n,"Hash history go(n) causes a full page reload in this browser"),t.go(e)},L=0,A=function(e){1===(L+=e)?(0,s.addEventListener)(window,"hashchange",S):0===L&&(0,s.removeEventListener)(window,"hashchange",S)},D=!1,I={length:t.length,action:"POP",location:R,createHref:function(e){return"#"+g(m+(0,l.createPath)(e))},push:function(e,t){(0,o.default)(void 0===t,"Hash history cannot push state; it is ignored");var n=(0,i.createLocation)(e,void 0,void 0,I.location);E.confirmTransitionTo(n,"PUSH",h,function(e){if(e){var t=(0,l.createPath)(n),r=g(m+t);if(p()!==r){k=t,function(e){window.location.hash=e}(r);var a=N.lastIndexOf((0,l.createPath)(I.location)),i=N.slice(0,-1===a?0:a+1);i.push(t),N=i,P({action:"PUSH",location:n})}else(0,o.default)(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),P()}})},replace:function(e,t){(0,o.default)(void 0===t,"Hash history cannot replace state; it is ignored");var n=(0,i.createLocation)(e,void 0,void 0,I.location);E.confirmTransitionTo(n,"REPLACE",h,function(e){if(e){var t=(0,l.createPath)(n),r=g(m+t);p()!==r&&(k=t,d(r));var o=N.indexOf((0,l.createPath)(I.location));-1!==o&&(N[o]=t),P({action:"REPLACE",location:n})}})},go:M,goBack:function(){return M(-1)},goForward:function(){return M(1)},block:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=E.setPrompt(e);return D||(A(1),D=!0),function(){return D&&(D=!1,A(-1)),t()}},listen:function(e){var t=E.appendListener(e);return A(1),function(){A(-1),t()}}};return I}},function(e,t,n){"use strict";t.__esModule=!0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=f(n(2)),i=f(n(3)),l=n(39),u=n(12),s=f(n(38)),c=n(67);function f(e){return e&&e.__esModule?e:{default:e}}var p=function(){try{return window.history.state||{}}catch(e){return{}}};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,i.default)(c.canUseDOM,"Browser history needs a DOM");var t=window.history,n=(0,c.supportsHistory)(),f=!(0,c.supportsPopStateOnHashChange)(),d=e.forceRefresh,h=void 0!==d&&d,y=e.getUserConfirmation,v=void 0===y?c.getConfirmation:y,m=e.keyLength,b=void 0===m?6:m,g=e.basename?(0,u.stripTrailingSlash)((0,u.addLeadingSlash)(e.basename)):"",_=function(e){var t=e||{},n=t.key,r=t.state,o=window.location,i=o.pathname+o.search+o.hash;return(0,a.default)(!g||(0,u.hasBasename)(i,g),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+i+'" to begin with "'+g+'".'),g&&(i=(0,u.stripBasename)(i,g)),(0,l.createLocation)(i,r,n)},w=function(){return Math.random().toString(36).substr(2,b)},E=(0,s.default)(),P=function(e){o(D,e),D.length=t.length,E.notifyListeners(D.location,D.action)},O=function(e){(0,c.isExtraneousPopstateEvent)(e)||x(_(e.state))},k=function(){x(_(p()))},S=!1,x=function(e){S?(S=!1,P()):E.confirmTransitionTo(e,"POP",v,function(t){t?P({action:"POP",location:e}):j(e)})},j=function(e){var t=D.location,n=T.indexOf(t.key);-1===n&&(n=0);var r=T.indexOf(e.key);-1===r&&(r=0);var o=n-r;o&&(S=!0,N(o))},C=_(p()),T=[C.key],R=function(e){return g+(0,u.createPath)(e)},N=function(e){t.go(e)},M=0,L=function(e){1===(M+=e)?((0,c.addEventListener)(window,"popstate",O),f&&(0,c.addEventListener)(window,"hashchange",k)):0===M&&((0,c.removeEventListener)(window,"popstate",O),f&&(0,c.removeEventListener)(window,"hashchange",k))},A=!1,D={length:t.length,action:"POP",location:C,createHref:R,push:function(e,o){(0,a.default)(!("object"===(void 0===e?"undefined":r(e))&&void 0!==e.state&&void 0!==o),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var i=(0,l.createLocation)(e,o,w(),D.location);E.confirmTransitionTo(i,"PUSH",v,function(e){if(e){var r=R(i),o=i.key,l=i.state;if(n)if(t.pushState({key:o,state:l},null,r),h)window.location.href=r;else{var u=T.indexOf(D.location.key),s=T.slice(0,-1===u?0:u+1);s.push(i.key),T=s,P({action:"PUSH",location:i})}else(0,a.default)(void 0===l,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=r}})},replace:function(e,o){(0,a.default)(!("object"===(void 0===e?"undefined":r(e))&&void 0!==e.state&&void 0!==o),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var i=(0,l.createLocation)(e,o,w(),D.location);E.confirmTransitionTo(i,"REPLACE",v,function(e){if(e){var r=R(i),o=i.key,l=i.state;if(n)if(t.replaceState({key:o,state:l},null,r),h)window.location.replace(r);else{var u=T.indexOf(D.location.key);-1!==u&&(T[u]=i.key),P({action:"REPLACE",location:i})}else(0,a.default)(void 0===l,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(r)}})},go:N,goBack:function(){return N(-1)},goForward:function(){return N(1)},block:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=E.setPrompt(e);return A||(L(1),A=!0),function(){return A&&(A=!1,L(-1)),t()}},listen:function(e){var t=E.appendListener(e);return L(1),function(){L(-1),t()}}};return D}},function(e,t,n){"use strict";(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.a=n}).call(this,n(22))},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r};n(4);t.default=function(){return a.default.createElement("div",{className:"devPage-full"},a.default.createElement("div",{className:"me-icon"}),a.default.createElement("div",{className:"me-text"},"Shashank Racherla"),a.default.createElement("div",{className:"lll"},a.default.createElement("div",null,a.default.createElement("a",{href:"https://github.com/srac1777/Audify",className:"ab-Links"},"Github")),a.default.createElement("div",null,a.default.createElement("a",{href:"https://www.linkedin.com/in/shashankracherla/",className:"ab-Links"},"Linkedin"))))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=(a(n(1)),a(n(59)));function a(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.connect)(function(e){return{now_playing:e.now_playing_queue[e.now_playing]||""}},null)(o.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=[],a=!0,i=!1,l=void 0;try{for(var u,s=c[Symbol.iterator]();!(a=(u=s.next()).done);a=!0){var f=u.value;!f.Player.canPlay(e)&&t[f.configKey].preload&&n.push(r.default.createElement(o.default,{key:f.Player.displayName,activePlayer:f.Player,url:f.url,playing:!0,muted:!0,style:{display:"none"}}))}}catch(e){i=!0,l=e}finally{try{!a&&s.return&&s.return()}finally{if(i)throw l}}return n};var r=s(n(1)),o=s(n(36)),a=n(58),i=n(57),l=n(56),u=n(55);function s(e){return e&&e.__esModule?e:{default:e}}var c=[{Player:a.YouTube,configKey:"youtube",url:"https://www.youtube.com/watch?v=GlCmAC4MHek"},{Player:i.SoundCloud,configKey:"soundcloud",url:"https://soundcloud.com/seucheu/john-cage-433-8-bit-version"},{Player:l.Vimeo,configKey:"vimeo",url:"https://vimeo.com/127250231"},{Player:u.DailyMotion,configKey:"dailymotion",url:"http://www.dailymotion.com/video/xqdpyk"}]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Mixcloud=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=s(a),l=n(8),u=s(n(10));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=/mixcloud\.com\/([^/]+\/[^/]+)/,p=t.Mixcloud=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.callPlayer=l.callPlayer,r.duration=null,r.currentTime=null,r.secondsLoaded=null,r.mute=function(){},r.unmute=function(){},r.ref=function(e){r.iframe=e},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"load",value:function(e){var t=this;(0,l.getSDK)("//widget.mixcloud.com/media/js/widgetApi.js","Mixcloud").then(function(e){t.player=e.PlayerWidget(t.iframe),t.player.ready.then(function(){t.player.events.play.on(t.props.onPlay),t.player.events.pause.on(t.props.onPause),t.player.events.ended.on(t.props.onEnded),t.player.events.error.on(t.props.error),t.player.events.progress.on(function(e,n){t.currentTime=e,t.duration=n}),t.props.onReady()})},this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.config,o=t.match(f)[1],a=(0,l.queryString)(r({},n.mixcloud.options,{feed:"/"+o+"/"}));return i.default.createElement("iframe",{key:o,ref:this.ref,style:{width:"100%",height:"100%"},src:"https://www.mixcloud.com/widget/iframe/?"+a,frameBorder:"0"})}}]),t}();p.displayName="Mixcloud",p.canPlay=function(e){return f.test(e)},t.default=(0,u.default)(p)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Twitch=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=s(a),l=n(8),u=s(n(10));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,p=/(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/,d="twitch-player-",h=t.Twitch=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.callPlayer=l.callPlayer,r.playerID=d+(0,l.randomString)(),r.mute=function(){r.callPlayer("setMuted",!0)},r.unmute=function(){r.callPlayer("setMuted",!1)},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"load",value:function(e,t){var n=this,o=this.props,a=o.playsinline,i=o.onError,u=o.config,s=p.test(e),c=s?e.match(p)[1]:e.match(f)[1];t?s?this.player.setChannel(c):this.player.setVideo("v"+c):(0,l.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then(function(e){n.player=new e.Player(n.playerID,r({video:s?"":c,channel:s?c:"",height:"100%",width:"100%",playsinline:a,autoplay:n.props.playing,muted:n.props.muted},u.twitch.options));var t=e.Player,o=t.READY,i=t.PLAY,l=t.PAUSE,f=t.ENDED;n.player.addEventListener(o,n.props.onReady),n.player.addEventListener(i,n.props.onPlay),n.player.addEventListener(l,n.props.onPause),n.player.addEventListener(f,n.props.onEnded)},i)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("pause")}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){return i.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}]),t}();h.displayName="Twitch",h.canPlay=function(e){return f.test(e)||p.test(e)},h.loopOnEnded=!0,t.default=(0,u.default)(h)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Wistia=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=s(a),l=n(8),u=s(n(10));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=/(?:wistia\.com|wi\.st)\/(?:medias|embed)\/(.*)$/,p=t.Wistia=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.callPlayer=l.callPlayer,r.mute=function(){r.callPlayer("mute")},r.unmute=function(){r.callPlayer("unmute")},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"getID",value:function(e){return e&&e.match(f)[1]}},{key:"load",value:function(e){var t=this,n=this.props,o=n.playing,a=n.muted,i=n.controls,u=n.onReady,s=n.onPlay,c=n.onPause,f=n.onSeek,p=n.onEnded,d=n.config;(0,l.getSDK)("//fast.wistia.com/assets/external/E-v1.js","Wistia").then(function(){window._wq=window._wq||[],window._wq.push({id:t.getID(e),options:r({autoPlay:o,silentAutoPlay:"allow",muted:a,controlsVisibleOnLoad:i},d.wistia.options),onReady:function(e){t.player=e,t.player.bind("play",s),t.player.bind("pause",c),t.player.bind("seek",f),t.player.bind("end",p),u()}})})}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("remove")}},{key:"seekTo",value:function(e){this.callPlayer("time",e)}},{key:"setVolume",value:function(e){this.callPlayer("volume",e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("playbackRate",e)}},{key:"getDuration",value:function(){return this.callPlayer("duration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("time")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e=this.getID(this.props.url),t="wistia_embed wistia_async_"+e;return i.default.createElement("div",{key:e,className:t,style:{width:"100%",height:"100%"}})}}]),t}();p.displayName="Wistia",p.canPlay=function(e){return f.test(e)},p.loopOnEnded=!0,t.default=(0,u.default)(p)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Streamable=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=u(o),i=n(8),l=u(n(10));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=/streamable\.com\/([a-z0-9]+)$/,f=t.Streamable=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.callPlayer=i.callPlayer,r.duration=null,r.currentTime=null,r.secondsLoaded=null,r.mute=function(){r.callPlayer("mute")},r.unmute=function(){r.callPlayer("unmute")},r.ref=function(e){r.iframe=e},s(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"load",value:function(e){var t=this;(0,i.getSDK)("//cdn.embed.ly/player-0.1.0.min.js","playerjs").then(function(e){t.iframe&&(t.player=new e.Player(t.iframe),t.player.setLoop(t.props.loop),t.player.on("ready",t.props.onReady),t.player.on("play",t.props.onPlay),t.player.on("pause",t.props.onPause),t.player.on("seeked",t.props.onSeek),t.player.on("ended",t.props.onEnded),t.player.on("error",t.props.onError),t.player.on("timeupdate",function(e){var n=e.duration,r=e.seconds;t.duration=n,t.currentTime=r}),t.player.on("buffered",function(e){var n=e.percent;t.duration&&(t.secondsLoaded=t.duration*n)}),t.props.muted&&t.player.mute())},this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("setCurrentTime",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){var e=this.props.url.match(c)[1];return a.default.createElement("iframe",{ref:this.ref,src:"https://streamable.com/o/"+e,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allowFullScreen:!0})}}]),t}();f.displayName="Streamable",f.canPlay=function(e){return c.test(e)},t.default=(0,l.default)(f)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Facebook=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=u(o),i=n(8),l=u(n(10));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c="//connect.facebook.net/en_US/sdk.js",f=/facebook\.com\/([^/?].+\/)?video(s|\.php)[/?].*$/,p="facebook-player-",d=t.Facebook=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.callPlayer=i.callPlayer,r.playerID=p+(0,i.randomString)(),r.mute=function(){r.callPlayer("mute")},r.unmute=function(){r.callPlayer("unmute")},s(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"load",value:function(e,t){var n=this;t?(0,i.getSDK)(c,"FB","fbAsyncInit").then(function(e){return e.XFBML.parse()}):(0,i.getSDK)(c,"FB","fbAsyncInit").then(function(e){e.init({appId:n.props.config.facebook.appId,xfbml:!0,version:"v2.5"}),e.Event.subscribe("xfbml.ready",function(e){"video"===e.type&&e.id===n.playerID&&(n.player=e.instance,n.player.subscribe("startedPlaying",n.props.onPlay),n.player.subscribe("paused",n.props.onPause),n.player.subscribe("finishedPlaying",n.props.onEnded),n.player.subscribe("startedBuffering",n.props.onBuffer),n.player.subscribe("error",n.props.onError),n.props.muted||n.callPlayer("unmute"),n.props.onReady())})})}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentPosition")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){return a.default.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"black"},id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false"})}}]),t}();d.displayName="Facebook",d.canPlay=function(e){return f.test(e)},d.loopOnEnded=!0,t.default=(0,l.default)(d)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(58),o=n(57),a=n(56),i=n(104),l=n(103),u=n(102),s=n(101),c=n(55),f=n(100),p=n(54);t.default=[r.YouTube,o.SoundCloud,a.Vimeo,i.Facebook,l.Streamable,u.Wistia,s.Twitch,c.DailyMotion,f.Mixcloud,p.FilePlayer]},function(e,t,n){"use strict";n.r(t);var r=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===o}(e)}(e)};var o="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function a(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function i(e,t,n){return e.concat(t).map(function(e){return a(e,n)})}function l(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||i,n.isMergeableObject=n.isMergeableObject||r;var o=Array.isArray(t);return o===Array.isArray(e)?o?n.arrayMerge(e,t,n):function(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(t){r[t]=a(e[t],n)}),Object.keys(t).forEach(function(o){n.isMergeableObject(t[o])&&e[o]?r[o]=l(e[o],t[o],n):r[o]=a(t[o],n)}),r}(e,t,n):a(t,n)}l.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,n){return l(e,n,t)},{})};var u=l;t.default=u},function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof t&&(o=t,t={}),t=t||{},o=o||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?n:r)(i,o),i.onload||n(i,o),a.appendChild(i)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=d(a),l=n(23),u=n(8),s=d(n(105)),c=d(n(36)),f=n(54),p=d(n(99));function d(e){return e&&e.__esModule?e:{default:e}}function h(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var v=Object.keys(l.propTypes),m=[],b=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=y(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.config=(0,u.getConfig)(r.props,l.defaultProps,!0),r.getDuration=function(){return r.player?r.player.getDuration():null},r.getCurrentTime=function(){return r.player?r.player.getCurrentTime():null},r.getSecondsLoaded=function(){return r.player?r.player.getSecondsLoaded():null},r.getInternalPlayer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"player";return r.player?r.player.getInternalPlayer(e):null},r.seekTo=function(e){if(!r.player)return null;r.player.seekTo(e)},r.onReady=function(){r.props.onReady(r)},r.wrapperRef=function(e){r.wrapper=e},r.activePlayerRef=function(e){r.player=e},y(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"componentDidMount",value:function(){if(this.props.progressFrequency){console.warn("ReactPlayer: %cprogressFrequency%c is deprecated, please use %cprogressInterval%c instead","font-weight: bold","","font-weight: bold","")}}},{key:"shouldComponentUpdate",value:function(e){return!(0,u.isEqual)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.config=(0,u.getConfig)(e,l.defaultProps)}},{key:"getActivePlayer",value:function(e){for(var t=[].concat(h(m),h(s.default)),n=0;n<t.length;n++){var r=t[n];if(r.canPlay(e))return r}return f.FilePlayer}},{key:"renderActivePlayer",value:function(e){if(!e)return null;var t=this.getActivePlayer(e);return i.default.createElement(c.default,r({},this.props,{key:t.displayName,ref:this.activePlayerRef,config:this.config,activePlayer:t,onReady:this.onReady}))}},{key:"sortPlayers",value:function(e,t){return e&&t?e.key<t.key?-1:1:0}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.style,o=e.width,a=e.height,s=e.wrapper,c=(0,u.omit)(this.props,v,l.DEPRECATED_CONFIG_PROPS),f=this.renderActivePlayer(t),d=(0,p.default)(t,this.config),y=[f].concat(h(d)).sort(this.sortPlayers);return i.default.createElement(s,r({ref:this.wrapperRef,style:r({},n,{width:o,height:a})},c),y)}}]),t}();b.addCustomPlayer=function(e){m.push(e)},b.removeCustomPlayers=function(){m=[]},b.displayName="ReactPlayer",b.propTypes=l.propTypes,b.defaultProps=l.defaultProps,b.canPlay=function(e){for(var t=[].concat(h(m),h(s.default)),n=0;n<t.length;n++){if(t[n].canPlay(e))return!0}return!1},t.default=b},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(1)),a=i(n(108));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={play_pause_toggle:!1,duration:null,secondsElapsed:0,seeking:!1,volume:1,v_changing:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"onDuration",value:function(e){this.setState({duration:e})}},{key:"onProgress",value:function(e){if(this.state.duration){var t=e.played*this.state.duration;t!==this.state.secondsElapsed&&this.setState({secondsElapsed:t})}}},{key:"play_next",value:function(){var e=this.props.now_playing_index;void 0===this.props.now_playing_queue[e+1]&&this.setState({play_pause_toggle:!1}),this.props.updateNwpl(e+1)}},{key:"playPauseToggle",value:function(){!0===this.state.play_pause_toggle?this.setState({play_pause_toggle:!1}):this.setState({play_pause_toggle:!0})}},{key:"forward",value:function(){var e=this.props.now_playing_index;void 0===this.props.now_playing_queue[e+1]&&this.setState({play_pause_toggle:!1}),this.play_next()}},{key:"rewind",value:function(){var e=this.props.now_playing_index;void 0===this.props.now_playing_queue[e+1]&&this.setState({play_pause_toggle:!1}),this.props.updateNwpl(e-1)}},{key:"ref",value:function(e){this.player=e}},{key:"handleMouseSeekDown",value:function(){this.setState({seeking:!0})}},{key:"handleMouseSeekUp",value:function(e){this.setState({seeking:!1}),this.player.seekTo(parseFloat(e.target.value))}},{key:"handleSeek",value:function(e){this.setState({secondsElapsed:e.target.value})}},{key:"handleMouseVolumeDown",value:function(){this.setState({v_changing:!0})}},{key:"handleMouseVolumeUp",value:function(e){this.setState({v_changing:!1})}},{key:"handleVolume",value:function(e){this.setState({volume:e.target.value})}},{key:"prettyTime",value:function(e){var t=Math.floor(e/60),n=Math.floor(e%60);return n<10&&(n="0"+n),t+":"+n}},{key:"componentWillReceiveProps",value:function(e){this.props.now_playing_song!=e.now_playing_song&&this.setState({play_pause_toggle:!0})}},{key:"render",value:function(){var e=void 0,t=void 0,n=void 0;""===this.props.now_playing_song||void 0===this.props.now_playing_song?(e="",t="",n=""):(e=this.props.now_playing_song.song_url,t=this.props.now_playing_song.title,n=this.props.now_playing_song.artist_name);var r=void 0;r=!1===this.state.play_pause_toggle?"play-btn":"pause-btn";return void 0===this.props.now_playing_song||void 0===this.props.now_playing_song.album_art?"https://s3-us-west-1.amazonaws.com/audifymaster/fallback/no-pl-songs.png":this.props.now_playing_song.album_art,o.default.createElement("div",{className:"main-footer"},o.default.createElement("div",{className:"left-footer"},o.default.createElement("div",{className:"nwpl-song-title"},t),o.default.createElement("div",{className:"nwpl-song-artist"},n)),o.default.createElement("div",{className:"main-player"},o.default.createElement("div",{className:"player-controller-btns"},o.default.createElement("div",null,o.default.createElement("button",{className:"prev-btn",onClick:this.rewind.bind(this)})),o.default.createElement("div",null,o.default.createElement("button",{className:r,onClick:this.playPauseToggle.bind(this)})),o.default.createElement("div",null,o.default.createElement("button",{className:"next-btn",onClick:this.forward.bind(this)}))),o.default.createElement("div",null,o.default.createElement("div",{className:"under-controller"},o.default.createElement("div",{className:"duration-time"},o.default.createElement("p",null,this.prettyTime(this.state.secondsElapsed))),o.default.createElement("div",{className:"seekbar-con"},o.default.createElement("input",{className:"seekbar-main",type:"range",min:"0",onMouseDown:this.handleMouseSeekDown.bind(this),onMouseUp:this.handleMouseSeekUp.bind(this),onChange:this.handleSeek.bind(this),max:this.state.duration,step:"any",value:this.state.secondsElapsed})),o.default.createElement("div",{className:"duration-time"},o.default.createElement("p",null,this.prettyTime(this.state.duration)))),o.default.createElement(a.default,{url:e,playing:this.state.play_pause_toggle,onEnded:this.play_next.bind(this),ref:this.ref.bind(this),onDuration:this.onDuration.bind(this),onProgress:this.onProgress.bind(this),volume:this.state.volume}))),o.default.createElement("div",{className:"right-footer"},o.default.createElement("div",{className:"volume-icon"}),o.default.createElement("div",null,o.default.createElement("input",{className:"volume-bar",type:"range",min:"0",onMouseDown:this.handleMouseVolumeDown.bind(this),onMouseUp:this.handleMouseVolumeUp.bind(this),onChange:this.handleVolume.bind(this),max:"1",step:"any",value:this.state.volume}))))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(5),a=n(109),i=(r=a)&&r.__esModule?r:{default:r},l=n(68);t.default=(0,o.connect)(function(e){return{now_playing_song:e.now_playing_queue[e.now_playing],now_playing_index:e.now_playing,now_playing_queue:Object.values(e.now_playing_queue)}},function(e){return{updateNwpl:function(t){return e((0,l.updateNwpl)(t))}}})(i.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=(r=a)&&r.__esModule?r:{default:r},l=n(4);var u=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"render",value:function(){var e=void 0;return e=void 0===this.props.each_p.songs[0]?"https://s3-us-west-1.amazonaws.com/audifymaster/fallback/no-pl-songs.png":this.props.each_p.songs[0].album_art,i.default.createElement("div",{className:"each-pf"},i.default.createElement(l.Link,{to:"/playlists/"+this.props.each_p.id},i.default.createElement("div",{className:"each-pf-item"},i.default.createElement("div",null,i.default.createElement("img",{className:"browse-aa",src:e})),i.default.createElement("div",{className:"each-pf-item-title"},this.props.each_p.title),i.default.createElement("div",{className:"each-pf-item-by"},"by"),i.default.createElement("div",{className:"each-pf-item-creator"},this.props.each_p.creator_name))))}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(1)),a=i(n(111));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){this.props.fetchPlaylists()}},{key:"render",value:function(){return void 0===this.props.all_playlists?o.default.createElement("div",null):o.default.createElement("div",{className:"browse-full-container"},o.default.createElement("div",{className:"browse-title"},"Browse playlists by other Audify users"),o.default.createElement("div",{className:"browse-page-full"},this.props.all_playlists.map(function(e){return o.default.createElement(a.default,{key:e.id,each_p:e})})))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(5),a=n(112),i=(r=a)&&r.__esModule?r:{default:r},l=(n(28),n(9)),u=n(25);t.default=(0,o.connect)(function(e){return{all_playlists:(0,u.getFilteredOtherPlaylists)(e)}},function(e){return{fetchPlaylists:function(){return e((0,l.fetchPlaylists)())}}})(i.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(1)),a=n(4),i=l(n(64));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={searchResultPlaylist:n.props.playlists[n.props.result.searchable_id]||"",searchResultSong:""},n.songs_arr=[],n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){var e=this;"Playlist"===this.props.result.searchable_type?this.props.fetchPlaylist(this.props.result.searchable_id).then(function(t){e.setState({searchResultPlaylist:t.playlist})}):"Song"===this.props.result.searchable_type&&this.props.fetchSong(this.props.result.searchable_id).then(function(t){e.setState({searchResultSong:t.song})})}},{key:"render",value:function(){var e=void 0,t=void 0,n=void 0;return n=void 0===this.state.searchResultPlaylist.album_art?"https://s3-us-west-1.amazonaws.com/audifymaster/fallback/no-pl-songs.png":this.state.searchResultPlaylist.album_art,""===this.state.searchResultPlaylist&&""===this.state.searchResultSong?o.default.createElement("div",null):(t=""===this.state.searchResultPlaylist?o.default.createElement("div",null):o.default.createElement("div",null,o.default.createElement(a.Link,{className:"sr-pl-render-c",to:"/playlists/"+this.state.searchResultPlaylist.id},o.default.createElement("div",null,o.default.createElement("img",{className:"sr-playlist-img",src:n})),o.default.createElement("div",{className:"sr-pl-title"},this.state.searchResultPlaylist.title))),e=""===this.state.searchResultSong?o.default.createElement("div",null):o.default.createElement("div",null,o.default.createElement(i.default,{song:this.state.searchResultSong,idx:this.props.send_key,playlist:this.props.playlist,playNow:this.props.playNow,current_songs_list:[this.state.searchResultSong],nowPlayingQueue:this.props.nowPlayingQueue,now_pl_green:this.props.now_pl_green})),o.default.createElement("div",{className:"sr-each-render"},o.default.createElement("div",{className:"sr-playlists-render"},t),o.default.createElement("div",{className:"sr-songs-render"},e)))}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(5),a=n(114),i=(r=a)&&r.__esModule?r:{default:r},l=n(9),u=n(13),s=n(27),c=n(26);t.default=(0,o.connect)(function(e,t){return{result:t.result,searchResults:Object.values(e.entities.search_results),songs:Object.values(e.entities.songs),playlists:Object.values(e.entities.playlists)}},function(e){return{fetchPlaylist:function(t){return e((0,l.fetchPlaylist)(t))},fetchSong:function(t){return e((0,u.fetchSong)(t))},playNow:function(t){return e((0,s.playNow)(t))},nowPlayingQueue:function(t){return e((0,c.nowPlayingQueue)(t))}}})(i.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(1)),a=i(n(115));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={searchResults:n.props.searchResults},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"handleInput",value:function(e){""!==e.target.value&&this.props.fetchSearchResults(e.target.value)}},{key:"componentWillReceiveProps",value:function(e){this.props.searchResults!==e.searchResults&&this.setState({searchResults:e.searchResults})}},{key:"componentWillUnmount",value:function(){this.props.clearSearch()}},{key:"render",value:function(){var e=this,t=void 0;return t=void 0===this.state.searchResults?o.default.createElement("p",null):this.state.searchResults.map(function(e,t){return o.default.createElement(a.default,{key:t,send_key:t,result:e})}),o.default.createElement("div",{className:"search-full"},o.default.createElement("div",{className:"search-top"},o.default.createElement("div",{className:"search-top-tiny-text"},o.default.createElement("p",null,"Search for a Song or a Playlist")),o.default.createElement("div",{className:"search-input"},o.default.createElement("form",null,o.default.createElement("input",{className:"search-input-actual-input",type:"text",onChange:function(t){return e.handleInput(t)},autoFocus:!0,placeholder:"Start typing..."})))),o.default.createElement("div",{className:"search-results-container"},o.default.createElement("div",{className:"sr-ul"},t)))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(5),a=n(116),i=(r=a)&&r.__esModule?r:{default:r},l=n(69),u=n(9),s=n(13);t.default=(0,o.connect)(function(e){return{searchResults:Object.values(e.entities.search_results),songs:Object.values(e.entities.songs),playlists:e.entities.playlists}},function(e){return{fetchSearchResults:function(t){return e((0,l.fetchSearchResults)(t))},fetchPlaylist:function(t){return e((0,u.fetchPlaylist)(t))},fetchSongs:function(){return e((0,s.fetchSongs)())},clearSearch:function(){return e({type:l.RECEIVE_SEARCH_RESULTS,results:{}})}}})(i.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(1)),o=n(6),a=n(5),i=l(n(19));function l(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.connect)(function(e){return{modal:e.ui.modal}},function(e){return{closeModal:function(){return e((0,o.closeModal)())}}})(function(e){var t=e.modal,n=e.closeModal;if(!t)return null;var o=void 0;switch(t){case"atp":o=r.default.createElement(i.default,null);break;default:return null}return r.default.createElement("div",{onClick:n},r.default.createElement("div",{onClick:function(e){return e.stopPropagation()}},o))})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=(r=a)&&r.__esModule?r:{default:r};n(4),n(37);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={now_playing_song:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"handleClick",value:function(){this.props.songClick(this.props.song),this.props.openModal("atp")}},{key:"handlePlayClick",value:function(){this.props.playNow(this.props.song.id-1),this.props.nowPlayingQueue(this.props.current_songs_list)}},{key:"myFunction",value:function(){document.getElementById("myDropdown"+this.props.song.id).classList.toggle("show")}},{key:"prettyTime",value:function(e){var t=Math.floor(e/60),n=Math.floor(e%60);return n<10&&(n="0"+n),t+":"+n}},{key:"render",value:function(){var e=void 0;return e=this.props.song.title===this.props.now_pl_green.title?"apply-green-nwpl":"",i.default.createElement("li",{className:"each-song"},i.default.createElement("div",{className:"song-first",onClick:this.handlePlayClick.bind(this)},i.default.createElement("div",{className:"music-note-icon"}),i.default.createElement("div",{className:"song-title"},i.default.createElement("div",{className:e},this.props.song.title),i.default.createElement("span",{className:"song-details"},this.props.song.artist_name),i.default.createElement("span",{className:"artist-album-separator"},"•"),i.default.createElement("span",{className:"song-details"},this.props.song.album_title))),i.default.createElement("div",{className:"left-song"},i.default.createElement("div",{className:"dropdown"},i.default.createElement("button",{onClick:this.myFunction.bind(this),className:"dropbtn"},"•••"),i.default.createElement("div",{id:"myDropdown"+this.props.song.id,className:"dropdown-content"},i.default.createElement("a",null," ",i.default.createElement("button",{className:"atp-button-fix",onClick:this.handleClick.bind(this)},"Add to Playlist")))),i.default.createElement("div",{className:"dur"},this.prettyTime(this.props.song.duration))))}}]),t}();window.onclick=function(e){if(!e.target.matches(".dropbtn")){var t,n=document.getElementsByClassName("dropdown-content");for(t=0;t<n.length;t++){var r=n[t];r.classList.contains("show")&&r.classList.remove("show")}}},t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(1)),a=n(4),i=u(n(119)),l=u(n(118));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){this.props.fetchSongs()}},{key:"handleClick",value:function(){this.props.openModal("np")}},{key:"render",value:function(){var e=this;return o.default.createElement("div",null,o.default.createElement("div",{className:"container2"},o.default.createElement("div",{className:"nav-left-filler"}),o.default.createElement("div",{className:"main-nav"},o.default.createElement("div",{className:"nav-link-items"},o.default.createElement(a.NavLink,{to:"/home/songs",activeClassName:"active-nav"},o.default.createElement("p",{className:"nav-text"},"Songs"),o.default.createElement("div",{className:"active-underline"}))),o.default.createElement("div",{className:"nav-link-items"},o.default.createElement(a.NavLink,{exact:!0,to:"/home",activeClassName:"active-nav"},o.default.createElement("p",{className:"nav-text"},"Playlists"),o.default.createElement("div",{className:"active-underline"})))),o.default.createElement("div",null,o.default.createElement("button",{className:"new-playlist-button4"},"New Playlist"))),o.default.createElement("div",{className:"songs-index-items-container"},o.default.createElement("ul",null,this.props.songs.map(function(t,n){return o.default.createElement(i.default,{key:t.id,song:t,openModal:e.props.openModal,closeModal:e.props.closeModal,songClick:e.props.songClick,playNow:e.props.playNow,current_songs_list:e.props.songs,nowPlayingQueue:e.props.nowPlayingQueue,now_pl_green:e.props.now_pl_green})}))),o.default.createElement(l.default,{closeModal:this.props.closeModal,modal:"atp"}))}}]),t}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(5),a=n(13),i=n(120),l=(r=i)&&r.__esModule?r:{default:r},u=n(6),s=n(70),c=n(27),f=n(26);t.default=(0,o.connect)(function(e){return{songs:Object.values(e.entities.songs),now_pl_green:e.now_playing_queue[e.now_playing]||""}},function(e){return{fetchSongs:function(){return e((0,a.fetchSongs)())},openModal:function(t){return e((0,u.openModal)(t))},songClick:function(t){return e((0,s.songClick)(t))},closeModal:function(){return e((0,u.closeModal)())},playNow:function(t){return e((0,c.playNow)(t))},nowPlayingQueue:function(t){return e((0,f.nowPlayingQueue)(t))}}})(l.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(1)),o=n(6),a=n(5),i=u(n(19)),l=u(n(24));function u(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.connect)(function(e){return{modal:e.ui.modal}},function(e){return{closeModal:function(){return e((0,o.closeModal)())}}})(function(e){if(!e.modal)return null;var t=void 0;switch(e.modal){case"atp":t=r.default.createElement(i.default,null);break;case"np":t=r.default.createElement(l.default,null);break;default:return null}return r.default.createElement("div",null,r.default.createElement("div",{onClick:function(e){return e.stopPropagation()}},t))})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=(r=a)&&r.__esModule?r:{default:r},l=n(4);var u=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props.playlist.songs,t=void 0;return t=void 0===e||""===e.join()?"https://s3-us-west-1.amazonaws.com/audifymaster/fallback/no-pl-songs.png":e[0].album_art,i.default.createElement("div",null,i.default.createElement("li",null,i.default.createElement(l.Link,{to:"/playlists/"+this.props.playlist.id},i.default.createElement("div",{className:"overlay-gradient-pl"},i.default.createElement("img",{className:"album-art-pl-index effect2",src:t})),i.default.createElement("p",{className:"playlist-title-index-page"},this.props.playlist.title))))}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(1)),a=u(n(123)),i=(u(n(24)),u(n(122))),l=n(4);function u(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){this.props.fetchPlaylists().then(this.props.fetchPlaylistFollowers)}},{key:"handleClick",value:function(){this.props.openModal("np")}},{key:"render",value:function(){return o.default.createElement("div",{className:"full-playlists-index"},o.default.createElement("div",{className:"container"},o.default.createElement(i.default,{closeModal:this.props.closeModal,modal:"np"}),o.default.createElement("div",{className:"nav-left-filler"}),o.default.createElement("div",{className:"main-nav"},o.default.createElement("div",{className:"nav-link-items"},o.default.createElement(l.NavLink,{to:"/home/songs",activeClassName:"active-nav"},o.default.createElement("p",{className:"nav-text"},"Songs"),o.default.createElement("div",{className:"active-underline"}))),o.default.createElement("div",{className:"nav-link-items"},o.default.createElement(l.NavLink,{to:"/home",activeClassName:"active-nav"},o.default.createElement("p",{className:"nav-text"},"Playlists"),o.default.createElement("div",{className:"active-underline"})))),o.default.createElement("div",{className:"np-button-container"},o.default.createElement("button",{className:"new-playlist-button",onClick:this.handleClick.bind(this)},"New Playlist"))),o.default.createElement("div",{className:"playlist-index-list-container"},o.default.createElement("ul",null,this.props.playlists.map(function(e){return o.default.createElement(a.default,{key:e.id,playlist:e})}))))}}]),t}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(5),a=n(9),i=n(124),l=(r=i)&&r.__esModule?r:{default:r},u=n(6),s=n(25),c=n(28);t.default=(0,o.connect)(function(e){return{playlists:(0,s.getFilteredPlaylists)(e),followed_playlists:(0,s.getFilteredFollowedPlaylists)(e)}},function(e){return{openModal:function(t){return e((0,u.openModal)(t))},closeModal:function(){return e((0,u.closeModal)())},fetchPlaylists:function(){return e((0,a.fetchPlaylists)())},fetchPlaylistFollowers:function(){return e((0,c.fetchPlaylistFollowers)())}}})(l.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(1)),a=i(n(125));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"homePlaylistIndex"},o.default.createElement(a.default,null))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r};n(4);t.default=function(e){var t=e.current_user;return a.default.createElement("div",{className:"username"},a.default.createElement("div",{className:"user-icon"}),a.default.createElement("div",{className:"username-text"},t.username))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r};n(4);t.default=function(e){var t=e.logout;return a.default.createElement("div",{className:"lb-container"},a.default.createElement("div",null,a.default.createElement("button",{className:"logout-button",onClick:t},"Log Out")))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=(r=a)&&r.__esModule?r:{default:r};n(37);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=e.playlist,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"handleDelete",value:function(e){e.stopPropagation(),this.props.deletePlaylist(this.props.playlist.id),this.props.closeModal(),this.props.history.push("/home")}},{key:"render",value:function(){return i.default.createElement("div",{className:"modal-ep"},i.default.createElement("div",null,i.default.createElement("button",{className:"close-ep",onClick:this.props.closeModal},"x")),i.default.createElement("div",{className:"delete-playlist-modal"},"Do you really want to delete this playlist?"),i.default.createElement("div",null,i.default.createElement("button",{className:"delete-pl-button-modal",onClick:this.handleDelete.bind(this)},"Delete")))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(5),a=n(6),i=n(9),l=n(129),u=(r=l)&&r.__esModule?r:{default:r},s=n(4);t.default=(0,s.withRouter)((0,o.connect)(function(e,t){return{playlist:t.playlist}},function(e){return{deletePlaylist:function(t){return e((0,i.deletePlaylist)(t))},closeModal:function(){return e((0,a.closeModal)())}}})(u.default))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(1)),o=n(6),a=n(5),i=c(n(19)),l=c(n(24)),u=c(n(63)),s=c(n(130));function c(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.connect)(function(e){return{modal:e.ui.modal}},function(e){return{closeModal:function(){return e((0,o.closeModal)())}}})(function(e){var t=e.modal,n=e.closeModal,o=e.playlist;if(!t)return null;var a=void 0;switch(t){case"atp":a=r.default.createElement(i.default,null);break;case"np":a=r.default.createElement(l.default,null);break;case"ep":a=r.default.createElement(u.default,null);break;case"dp":a=r.default.createElement(s.default,{playlist:o});break;default:return null}return r.default.createElement("div",{onClick:n,className:"modal-dp-test"},r.default.createElement("div",{onClick:function(e){return e.stopPropagation()}},a))})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=(r=a)&&r.__esModule?r:{default:r};var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=e.playlist,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"handletitle",value:function(e){this.setState({title:e.target.value})}},{key:"handleSubmit",value:function(e){this.props.updatePlaylist(this.state,[]),this.setState({title:""}),this.props.closeModal()}},{key:"render",value:function(){return i.default.createElement("div",{className:"modal-ep"},i.default.createElement("div",null,i.default.createElement("button",{className:"close-ep",onClick:this.props.closeModal},"x")),i.default.createElement("div",{className:"rename-playlist"},"Rename playlist"),i.default.createElement("form",{onSubmit:this.handleSubmit.bind(this)},i.default.createElement("div",{className:"ep-stuff"},i.default.createElement("div",null,i.default.createElement("input",{className:"form-ep",type:"text",onChange:this.handletitle.bind(this),value:this.state.title,autoFocus:!0})),i.default.createElement("div",{className:"submit-edit"},i.default.createElement("input",{type:"submit",className:"edit-ep-button",value:"rename"})))))}}]),t}();t.default=l},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,s=[],c=!1,f=-1;function p(){c&&u&&(c=!1,u.length?s=u.concat(s):f=-1,s.length&&d())}function d(){if(!c){var e=l(p);c=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||c||l(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=(r=a)&&r.__esModule?r:{default:r};n(37);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=e.playlist,n.focus=n.focus.bind(n),n.state={title:e.playlist.title,creator_id:e.playlist.creator_id,errors:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"focus",value:function(){this.textInput.focus()}},{key:"escFunction",value:function(e){27===e.keyCode&&this.props.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.escFunction.bind(this),!1)}},{key:"handletitle",value:function(e){this.setState({title:e.target.value})}},{key:"renderErrors",value:function(e){}},{key:"handleSubmit",value:function(e){""===this.state.title?this.renderErrors(e):(this.props.createPlaylist(this.state),this.setState({title:""}),this.props.closeModal())}},{key:"render",value:function(){return i.default.createElement("div",{className:"modal-np"},i.default.createElement("button",{className:"close-np",onClick:this.props.closeModal},"x"),i.default.createElement("div",{className:"create-playlist"},"Create new playlist"),i.default.createElement("div",{className:"cp-form"},i.default.createElement("form",{onSubmit:this.handleSubmit.bind(this)},i.default.createElement("div",null,i.default.createElement("input",{className:"form-np",type:"text",onChange:this.handletitle.bind(this),autoFocus:!0,value:this.state.title,placeholder:"Start Typing..."})),i.default.createElement("div",{className:"cp-buttons"},i.default.createElement("div",null,i.default.createElement("input",{type:"submit",className:"create-np-button",value:"CREATE"}))))))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=(r=a)&&r.__esModule?r:{default:r};n(4);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={playlist_id:"",song_id:"",status:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"handleClick",value:function(e){var t=this;this.props.createPlaylistSong({playlist_id:""+this.props.playlist.id,song_id:""+this.props.clickedSong.id}).then(this.setState({status:"success"},function(){return setTimeout(function(){return t.props.closeModal()},700)}))}},{key:"render",value:function(){var e=this.props.playlist.songs,t=void 0;return t=void 0===e||""===e.join()?"https://s3-us-west-1.amazonaws.com/audifymaster/fallback/no-pl-songs.png":e[0].album_art,i.default.createElement("div",{className:"atp-li"},i.default.createElement("p",{className:"s-atp"},this.state.status),i.default.createElement("li",{className:"atp-li-li",onClick:this.handleClick.bind(this)},i.default.createElement("div",{className:"overlay-gradient-pl"},i.default.createElement("img",{className:"atp-album-art-pl-index",src:t})),i.default.createElement("div",{className:"atp-text"},this.props.playlist.title)))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(1)),a=i(n(137));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){this.props.fetchPlaylists()}},{key:"render",value:function(){var e=this;return o.default.createElement("ul",null,o.default.createElement("div",{className:"atp-index-comp-con"},this.props.playlists.map(function(t){return o.default.createElement(a.default,{key:t.id,playlist:t,createPlaylistSong:e.props.createPlaylistSong,clickedSong:e.props.clickedSong,closeModal:e.props.closeModal,updatePlaylist:e.props.updatePlaylist})})))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(1)),a=i(n(138));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){var e=this;return o.default.createElement("div",{className:"ModalATP"},o.default.createElement("div",{className:"modal-atp-x"},o.default.createElement("button",{onClick:function(){return e.props.closeModal()}},"x")),o.default.createElement("div",{className:"choose-playlist"},o.default.createElement("h1",null,"Add to playlist")),o.default.createElement("div",{className:"atp-index-container"},o.default.createElement(a.default,{playlists:this.props.playlists,fetchPlaylists:this.props.fetchPlaylists,createPlaylistSong:this.props.createPlaylistSong,clickedSong:this.props.clickedSong,closeModal:this.props.closeModal})))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(1)),o=n(6),a=n(5),i=s(n(19)),l=s(n(24)),u=s(n(63));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.connect)(function(e){return{modal:e.ui.modal}},function(e){return{closeModal:function(){return e((0,o.closeModal)())}}})(function(e){var t=e.modal,n=e.closeModal;if(!t)return null;var o=void 0;switch(t){case"atp":o=r.default.createElement(i.default,null);break;case"np":o=r.default.createElement(l.default,null);break;case"ep":o=r.default.createElement(u.default,null);break;default:return null}return r.default.createElement("div",{onClick:n},r.default.createElement("div",{onClick:function(e){return e.stopPropagation()}},o))})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(1)),a=(n(4),l(n(64))),i=(l(n(140)),l(n(131)));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentWillMount",value:function(){this.props.fetchPlaylists().then(this.props.fetchSongs).then(this.props.fetchPlaylistSongs)}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"handleEdit",value:function(){this.props.openModal("ep")}},{key:"handleDelete",value:function(){this.props.openModal("dp")}},{key:"handleFollow",value:function(){this.props.createPlaylistFollower(this.props.playlist.id)}},{key:"handleUnfollow",value:function(){this.props.deletePlaylistFollower({playlist_id:this.props.playlist.id,user_id:this.props.currentUser.id})}},{key:"render",value:function(){var e=this;if(void 0===this.props.playlist)return o.default.createElement("div",null,"hello");var t=this.props.playlist.songs,n=void 0;n=void 0===t||""===t.join()?"https://s3-us-west-1.amazonaws.com/audifymaster/fallback/no-pl-songs.png":t[0].album_art;var r=void 0,l=void 0,u=void 0,s=void 0;return this.props.playlist.creator_id===this.props.currentUser.id?(r=o.default.createElement("div",null,o.default.createElement("button",{className:"delete-pl-button",onClick:this.handleDelete.bind(this)},"Delete")),l=o.default.createElement("div",null,o.default.createElement("button",{className:"pl-rename-button",onClick:this.handleEdit.bind(this)},"rename")),u=o.default.createElement("div",null),s=o.default.createElement("div",null)):(r=o.default.createElement("div",null),l=o.default.createElement("div",null),u=o.default.createElement("div",null,o.default.createElement("button",{className:"pl-rename-button",onClick:this.handleFollow.bind(this)},"Follow")),s=o.default.createElement("div",null,o.default.createElement("button",{className:"pl-rename-button",onClick:this.handleUnfollow.bind(this)},"Unfollow"))),o.default.createElement("div",{className:"playlist-show"},o.default.createElement(i.default,{playlist:this.props.playlist}),o.default.createElement("div",{className:"left-pl-show"},o.default.createElement("div",null,o.default.createElement("img",{className:"pl-show-img",src:n})),o.default.createElement("div",{className:"pl-show-title"},this.props.playlist.title),o.default.createElement("div",{className:"pl-show-title-creator"},"by ",this.props.playlist.creator_name),o.default.createElement("div",{className:"pl-show-left-buttons"},l,r,u,s)),o.default.createElement("div",{className:"pl-songs-container"},o.default.createElement("ul",null,this.props.songs.map(function(t,n){return o.default.createElement(a.default,{key:t.id,deletePlaylistSong:e.props.deletePlaylistSong,playlist_songs:e.props.playlist_songs,current_playlist:e.props.playlist,song:t,idx:n,playlist:e.props.playlist,playNow:e.props.playNow,current_songs_list:e.props.songs,nowPlayingQueue:e.props.nowPlayingQueue,now_pl_green:e.props.now_pl_green})}))))}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=d(n(141)),a=n(9),i=n(6),l=n(13),u=n(25),s=n(40),c=(d(n(16)),n(27)),f=n(26),p=n(28);function d(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.connect)(function(e,t){return{playlist:e.entities.playlists[t.match.params.playlistId],songs:(0,u.getFilteredPlaylistSongs)(e,t.match.params.playlistId),playlist_songs:Object.values(e.entities.playlist_songs),ownProps:t,now_pl_green:e.now_playing_queue[e.now_playing],currentUser:e.session.currentUser}},function(e){return{fetchPlaylist:function(t){return e((0,a.fetchPlaylist)(t))},fetchPlaylists:function(){return e((0,a.fetchPlaylists)())},openModal:function(t){return e((0,i.openModal)(t))},closeModal:function(){return e((0,i.closeModal)())},deletePlaylist:function(t){return e((0,a.deletePlaylist)(t))},fetchSongs:function(){return e((0,l.fetchSongs)())},fetchPlaylistSongs:function(){return e((0,s.fetchPlaylistSongs)())},deletePlaylistSong:function(t){return e((0,s.deletePlaylistSong)(t))},playNow:function(t){return e((0,c.playNow)(t))},nowPlayingQueue:function(t){return e((0,f.nowPlayingQueue)(t))},createPlaylistFollower:function(t){return e((0,p.createPlaylistFollower)(t))},deletePlaylistFollower:function(t){return e((0,p.deletePlaylistFollower)(t))}}})(o.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=(i(n(1)),n(4),n(7)),a=i(n(66));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.connect)(function(e){return{errors:e.errors.session,formType:"LOG IN"}},function(e){return{submitForm:function(t){return e((0,o.login)(t))},demoLogin:function(t){return e((0,o.login)(t))},clearErrors:function(t){return e((0,o.receiveErrors)(t))}}})(a.default)},function(e,t,n){var r=n(15)(n(11),"WeakMap");e.exports=r},function(e,t,n){var r=n(15)(n(11),"Set");e.exports=r},function(e,t,n){var r=n(15)(n(11),"Promise");e.exports=r},function(e,t,n){var r=n(15)(n(11),"DataView");e.exports=r},function(e,t,n){var r=n(147),o=n(48),a=n(146),i=n(145),l=n(144),u=n(20),s=n(85),c=s(r),f=s(o),p=s(a),d=s(i),h=s(l),y=u;(r&&"[object DataView]"!=y(new r(new ArrayBuffer(1)))||o&&"[object Map]"!=y(new o)||a&&"[object Promise]"!=y(a.resolve())||i&&"[object Set]"!=y(new i)||l&&"[object WeakMap]"!=y(new l))&&(y=function(e){var t=u(e),n="[object Object]"==t?e.constructor:void 0,r=n?s(n):"";if(r)switch(r){case c:return"[object DataView]";case f:return"[object Map]";case p:return"[object Promise]";case d:return"[object Set]";case h:return"[object WeakMap]"}return t}),e.exports=y},function(e,t,n){var r=n(79)(Object.keys,Object);e.exports=r},function(e,t,n){var r=n(43),o=n(149),a=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return o(e);var t=[];for(var n in Object(e))a.call(e,n)&&"constructor"!=n&&t.push(n);return t}},function(e,t,n){var r=n(74),o=n(150),a=n(29);e.exports=function(e){return a(e)?r(e):o(e)}},function(e,t){e.exports=function(){return[]}},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,a=[];++n<r;){var i=e[n];t(i,n,e)&&(a[o++]=i)}return a}},function(e,t,n){var r=n(153),o=n(152),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,l=i?function(e){return null==e?[]:(e=Object(e),r(i(e),function(t){return a.call(e,t)}))}:o;e.exports=l},function(e,t){e.exports=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}},function(e,t,n){var r=n(155),o=n(30);e.exports=function(e,t,n){var a=t(e);return o(e)?a:r(a,n(e))}},function(e,t,n){var r=n(156),o=n(154),a=n(151);e.exports=function(e){return r(e,a,o)}},function(e,t,n){var r=n(157),o=1,a=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,i,l,u){var s=n&o,c=r(e),f=c.length;if(f!=r(t).length&&!s)return!1;for(var p=f;p--;){var d=c[p];if(!(s?d in t:a.call(t,d)))return!1}var h=u.get(e);if(h&&u.get(t))return h==t;var y=!0;u.set(e,t),u.set(t,e);for(var v=s;++p<f;){var m=e[d=c[p]],b=t[d];if(i)var g=s?i(b,m,d,t,e,u):i(m,b,d,e,t,u);if(!(void 0===g?m===b||l(m,b,n,i,u):g)){y=!1;break}v||(v="constructor"==d)}if(y&&!v){var _=e.constructor,w=t.constructor;_!=w&&"constructor"in e&&"constructor"in t&&!("function"==typeof _&&_ instanceof _&&"function"==typeof w&&w instanceof w)&&(y=!1)}return u.delete(e),u.delete(t),y}},function(e,t){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}},function(e,t){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}},function(e,t,n){var r=n(46),o=n(81),a=n(21),i=n(65),l=n(160),u=n(159),s=1,c=2,f="[object Boolean]",p="[object Date]",d="[object Error]",h="[object Map]",y="[object Number]",v="[object RegExp]",m="[object Set]",b="[object String]",g="[object Symbol]",_="[object ArrayBuffer]",w="[object DataView]",E=r?r.prototype:void 0,P=E?E.valueOf:void 0;e.exports=function(e,t,n,r,E,O,k){switch(n){case w:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case _:return!(e.byteLength!=t.byteLength||!O(new o(e),new o(t)));case f:case p:case y:return a(+e,+t);case d:return e.name==t.name&&e.message==t.message;case v:case b:return e==t+"";case h:var S=l;case m:var x=r&s;if(S||(S=u),e.size!=t.size&&!x)return!1;var j=k.get(e);if(j)return j==t;r|=c,k.set(e,t);var C=i(S(e),S(t),r,E,O,k);return k.delete(e),C;case g:if(P)return P.call(e)==P.call(t)}return!1}},function(e,t){e.exports=function(e,t){return e.has(t)}},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}},function(e,t){e.exports=function(e){return this.__data__.has(e)}},function(e,t){var n="__lodash_hash_undefined__";e.exports=function(e){return this.__data__.set(e,n),this}},function(e,t,n){var r=n(84),o=n(165),a=n(164);function i(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new r;++t<n;)this.add(e[t])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,e.exports=i},function(e,t,n){var r=n(87),o=n(65),a=n(161),i=n(158),l=n(148),u=n(30),s=n(42),c=n(41),f=1,p="[object Arguments]",d="[object Array]",h="[object Object]",y=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,v,m,b){var g=u(e),_=u(t),w=g?d:l(e),E=_?d:l(t),P=(w=w==p?h:w)==h,O=(E=E==p?h:E)==h,k=w==E;if(k&&s(e)){if(!s(t))return!1;g=!0,P=!1}if(k&&!P)return b||(b=new r),g||c(e)?o(e,t,n,v,m,b):a(e,t,w,n,v,m,b);if(!(n&f)){var S=P&&y.call(e,"__wrapped__"),x=O&&y.call(t,"__wrapped__");if(S||x){var j=S?e.value():e,C=x?t.value():t;return b||(b=new r),m(j,C,n,v,b)}}return!!k&&(b||(b=new r),i(e,t,n,v,m,b))}},function(e,t,n){var r=n(167),o=n(18);e.exports=function e(t,n,a,i,l){return t===n||(null==t||null==n||!o(t)&&!o(n)?t!=t&&n!=n:r(t,n,a,i,e,l))}},function(e,t,n){var r=n(168);e.exports=function(e,t){return r(e,t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=(i(n(1)),n(4),n(7)),a=i(n(66));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.connect)(function(e){return{errors:e.errors.session,formType:"SIGN UP"}},function(e){return{submitForm:function(t){return e((0,o.signup)(t))},demoLogin:function(t){return e((0,o.login)(t))},clearErrors:function(t){return e((0,o.receiveErrors)(t))}}})(a.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=(r=a)&&r.__esModule?r:{default:r},l=n(4);var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"render",value:function(){return i.default.createElement("div",{className:"AllLanding"},i.default.createElement("div",{className:"landing"},i.default.createElement("div",{className:"left-landing"},i.default.createElement("div",{className:"landing-logo"}),i.default.createElement(l.Link,{to:"/signup",className:"link1"},"SIGN UP"),i.default.createElement("p",null,"- ALREADY HAVE AN ACCOUNT? -"),i.default.createElement(l.Link,{to:"/login",className:"link2"},"LOG IN")),i.default.createElement("div",{className:"middle-landing-bar"}),i.default.createElement("div",{className:"right-landing"},i.default.createElement("h1",null,"Get the right music, ",i.default.createElement("br",null),"right now"),i.default.createElement("h3",null,"Listen to millions of songs for free."),i.default.createElement("ul",null,i.default.createElement("li",null,i.default.createElement("div",{className:"landing-tick"}),i.default.createElement("span",{className:"ticktext"},"Search & discover music you'll love")),i.default.createElement("li",null,i.default.createElement("div",{className:"landing-tick"}),i.default.createElement("span",{className:"ticktext"},"Create playlists of your favorite music"))))))}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=b(n(1)),o=n(4),a=b(n(171)),i=b(n(170)),l=b(n(143)),u=b(n(142)),s=(b(n(62)),b(n(61)),b(n(126))),c=b(n(121)),f=b(n(19)),p=(n(7),n(60)),d=(n(13),b(n(117))),h=b(n(113)),y=(b(n(59)),b(n(110))),v=b(n(98)),m=b(n(97));function b(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){e.store;return r.default.createElement("div",{className:"AppComponent"},r.default.createElement("div",{className:"inAppComponent"},r.default.createElement("div",{className:"main-upper"},r.default.createElement("div",{className:"main-component"},r.default.createElement(p.ProtectedRoute,{path:"/",component:v.default}),r.default.createElement(o.Switch,null,r.default.createElement(p.AuthRoute,{path:"/login",component:l.default}),r.default.createElement(p.AuthRoute,{path:"/signup",component:i.default}),r.default.createElement(p.ProtectedRoute,{exact:!0,path:"/aboutme",component:m.default}),r.default.createElement(p.ProtectedRoute,{exact:!0,path:"/home",component:s.default}),r.default.createElement(p.ProtectedRoute,{exact:!0,path:"/browse",component:h.default}),r.default.createElement(p.ProtectedRoute,{exact:!0,path:"/search",component:d.default}),r.default.createElement(p.ProtectedRoute,{exact:!0,path:"/playlists/:playlistId",component:u.default}),r.default.createElement(p.ProtectedRoute,{exact:!0,path:"/songs/addtoplaylist",component:f.default}),r.default.createElement(p.ProtectedRoute,{path:"/home/songs",component:c.default}),r.default.createElement(p.AuthRoute,{path:"/",component:a.default}))),r.default.createElement(p.ProtectedRoute,{path:"/",component:y.default}))))}},function(e,t){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=n(49),o=n(50),a=n(174);e.exports=function(){function e(e,t,n,r,i,l){l!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(1)),o=n(5),a=n(4),i=l(n(172));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.store;return r.default.createElement(o.Provider,{store:t},r.default.createElement(a.HashRouter,null,r.default.createElement(i.default,{store:t})))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),o=n(26);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(Object.freeze(e),t.type){case o.NOW_PLAYING_QUEUE:return t.queue;case r.LOGOUT_CURRENT_USER:return{};default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(16),a=((r=o)&&r.__esModule,n(7)),i=n(27),l=n(68);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(Object.freeze(e),t.type){case i.PLAY_NOW:case l.UPDATE_NWPL:return t.idx;case a.LOGOUT_CURRENT_USER:return{};default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case r.OPEN_MODAL:return t.modal;case r.CLOSE_MODAL:return null;default:return e}};var r=n(6)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(17),a=n(179),i=(r=a)&&r.__esModule?r:{default:r};t.default=(0,o.combineReducers)({modal:i.default})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(Object.freeze(e),t.type){case r.RECEIVE_SESSION_ERRORS:return t.errors;case r.RECEIVE_CURRENT_USER:return[];default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(17),a=n(181),i=(r=a)&&r.__esModule?r:{default:r};var l=(0,o.combineReducers)({session:i.default});t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{currentUser:null},t=arguments[1];switch(Object.freeze(e),t.type){case r.RECEIVE_CURRENT_USER:return{currentUser:t.currentUser};case r.LOGOUT_CURRENT_USER:return{currentUser:null};default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.fetchPlaylistFollowers=function(){return $.ajax({method:"GET",url:"api/playlist_followers"})},t.createPlaylistFollower=function(e){return $.ajax({url:"api/playlist_followers",method:"POST",data:{playlist_follower:{playlist_id:parseInt(e)}}})},t.deletePlaylistFollower=function(e){return $.ajax({url:"api/playlist_followers/"+e.playlist_id+"/"+e.user_id,method:"DELETE",data:{pf:e}})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(28),a=n(16),i=(r=a)&&r.__esModule?r:{default:r},l=n(7);t.default=function(){var e,t,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments[1];switch(Object.freeze(r),a.type){case o.RECEIVE_ALL_PLAYLIST_FOLLOWERS:return(0,i.default)({},r,a.playlist_followers);case o.RECEIVE_PLAYLIST_FOLLOWER:return(0,i.default)({},r,(e={},t=a.playlist_follower.id,n=a.playlist_follower,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e));case o.REMOVE_PLAYLIST_FOLLOWER:var u=(0,i.default)({},r);return delete u[a.id],u;case l.LOGOUT_CURRENT_USER:return{};default:return r}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.fetchResults=function(e){return $.ajax({method:"GET",url:"api/search",data:{query:e}})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),o=n(69);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(Object.freeze(e),t.type){case o.RECEIVE_SEARCH_RESULTS:return t.results;case r.LOGOUT_CURRENT_USER:return{};default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(16),a=(r=o)&&r.__esModule?r:{default:r},i=n(7),l=n(6),u=n(70);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(Object.freeze(e),t.type){case u.ADD_CLICKED_SONG:return(0,a.default)({},e,t.song);case l.CLOSE_MODAL:case i.LOGOUT_CURRENT_USER:return{};default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(40),a=n(16),i=(r=a)&&r.__esModule?r:{default:r},l=n(7);t.default=function(){var e,t,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments[1];switch(Object.freeze(r),a.type){case o.RECEIVE_ALL_PLAYLIST_SONGS:return(0,i.default)({},r,a.playlist_songs);case o.RECEIVE_PLAYLIST_SONG:return(0,i.default)({},r,(e={},t=a.playlist_song.id,n=a.playlist_song,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e));case o.REMOVE_PLAYLIST_SONG:var u=(0,i.default)({},r);return delete u[a.id],u;case l.LOGOUT_CURRENT_USER:return{};default:return r}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.fetchSongs=function(){return $.ajax({method:"GET",url:"api/songs"})},t.fetchSong=function(e){return $.ajax({method:"GET",url:"api/songs/"+e})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(13),a=n(16),i=(r=a)&&r.__esModule?r:{default:r};t.default=function(){var e,t,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments[1];switch(Object.freeze(r),a.type){case o.RECEIVE_ALL_SONGS:return(0,i.default)({},r,a.songs);case o.RECEIVE_SONG:return(0,i.default)({},r,(e={},t=a.song.id,n=a.song,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e));default:return r}}},function(e,t,n){var r=n(21),o=n(29),a=n(73),i=n(14);e.exports=function(e,t,n){if(!i(n))return!1;var l=typeof t;return!!("number"==l?o(n)&&a(t,n.length):"string"==l&&t in n)&&r(n[t],e)}},function(e,t){var n=800,r=16,o=Date.now;e.exports=function(e){var t=0,a=0;return function(){var i=o(),l=r-(i-a);if(a=i,l>0){if(++t>=n)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},function(e,t){e.exports=function(e){return function(){return e}}},function(e,t,n){var r=n(194),o=n(82),a=n(72),i=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:a;e.exports=i},function(e,t,n){var r=n(195),o=n(193)(r);e.exports=o},function(e,t){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},function(e,t,n){var r=n(197),o=Math.max;e.exports=function(e,t,n){return t=o(void 0===t?e.length-1:t,0),function(){for(var a=arguments,i=-1,l=o(a.length-t,0),u=Array(l);++i<l;)u[i]=a[t+i];i=-1;for(var s=Array(t+1);++i<t;)s[i]=a[i];return s[t]=n(u),r(e,this,s)}}},function(e,t,n){var r=n(72),o=n(198),a=n(196);e.exports=function(e,t){return a(o(e,t,r),e+"")}},function(e,t,n){var r=n(199),o=n(192);e.exports=function(e){return r(function(t,n){var r=-1,a=n.length,i=a>1?n[a-1]:void 0,l=a>2?n[2]:void 0;for(i=e.length>3&&"function"==typeof i?(a--,i):void 0,l&&o(n[0],n[1],l)&&(i=a<3?void 0:i,a=1),t=Object(t);++r<a;){var u=n[r];u&&e(t,u,r,i)}return t})}},function(e,t){e.exports=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}},function(e,t,n){var r=n(14),o=n(43),a=n(201),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return a(e);var t=o(e),n=[];for(var l in e)("constructor"!=l||!t&&i.call(e,l))&&n.push(l);return n}},function(e,t){e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}},function(e,t,n){var r=n(45),o=n(21),a=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){var i=e[t];a.call(e,t)&&o(i,n)&&(void 0!==n||t in e)||r(e,t,n)}},function(e,t,n){var r=n(204),o=n(45);e.exports=function(e,t,n,a){var i=!n;n||(n={});for(var l=-1,u=t.length;++l<u;){var s=t[l],c=a?a(n[s],e[s],s,n,e):void 0;void 0===c&&(c=e[s]),i?o(n,s,c):r(n,s,c)}return n}},function(e,t,n){var r=n(205),o=n(75);e.exports=function(e){return r(e,o(e))}},function(e,t,n){(function(e){var r=n(86),o="object"==typeof t&&t&&!t.nodeType&&t,a=o&&"object"==typeof e&&e&&!e.nodeType&&e,i=a&&a.exports===o&&r.process,l=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=l}).call(this,n(44)(e))},function(e,t){e.exports=function(e){return function(t){return e(t)}}},function(e,t,n){var r=n(20),o=n(77),a=n(18),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,e.exports=function(e){return a(e)&&o(e.length)&&!!i[r(e)]}},function(e,t,n){var r=n(20),o=n(80),a=n(18),i="[object Object]",l=Function.prototype,u=Object.prototype,s=l.toString,c=u.hasOwnProperty,f=s.call(Object);e.exports=function(e){if(!a(e)||r(e)!=i)return!1;var t=o(e);if(null===t)return!0;var n=c.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==f}},function(e,t){e.exports=function(){return!1}},function(e,t,n){var r=n(29),o=n(18);e.exports=function(e){return o(e)&&r(e)}},function(e,t,n){var r=n(20),o=n(18),a="[object Arguments]";e.exports=function(e){return o(e)&&r(e)==a}},function(e,t,n){var r=n(14),o=Object.create,a=function(){function e(){}return function(t){if(!r(t))return{};if(o)return o(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();e.exports=a},function(e,t,n){var r=n(214),o=n(80),a=n(43);e.exports=function(e){return"function"!=typeof e.constructor||a(e)?{}:r(o(e))}},function(e,t){e.exports=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}},function(e,t,n){var r=n(81);e.exports=function(e){var t=new e.constructor(e.byteLength);return new r(t).set(new r(e)),t}},function(e,t,n){var r=n(217);e.exports=function(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}},function(e,t,n){(function(e){var r=n(11),o="object"==typeof t&&t&&!t.nodeType&&t,a=o&&"object"==typeof e&&e&&!e.nodeType&&e,i=a&&a.exports===o?r.Buffer:void 0,l=i?i.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var n=e.length,r=l?l(n):new e.constructor(n);return e.copy(r),r}}).call(this,n(44)(e))},function(e,t,n){var r=n(83),o=n(219),a=n(218),i=n(216),l=n(215),u=n(78),s=n(30),c=n(212),f=n(42),p=n(47),d=n(14),h=n(210),y=n(41),v=n(76),m=n(206);e.exports=function(e,t,n,b,g,_,w){var E=v(e,n),P=v(t,n),O=w.get(P);if(O)r(e,n,O);else{var k=_?_(E,P,n+"",e,t,w):void 0,S=void 0===k;if(S){var x=s(P),j=!x&&f(P),C=!x&&!j&&y(P);k=P,x||j||C?s(E)?k=E:c(E)?k=i(E):j?(S=!1,k=o(P,!0)):C?(S=!1,k=a(P,!0)):k=[]:h(P)||u(P)?(k=E,u(E)?k=m(E):(!d(E)||b&&p(E))&&(k=l(P))):S=!1}S&&(w.set(P,k),g(k,P,b,_,w),w.delete(P)),r(e,n,k)}}},function(e,t){e.exports=function(e){return function(t,n,r){for(var o=-1,a=Object(t),i=r(t),l=i.length;l--;){var u=i[e?l:++o];if(!1===n(a[u],u,a))break}return t}}},function(e,t,n){var r=n(221)();e.exports=r},function(e,t,n){var r=n(31);e.exports=function(e,t){var n=r(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}},function(e,t,n){var r=n(31);e.exports=function(e){return r(this,e).has(e)}},function(e,t,n){var r=n(31);e.exports=function(e){return r(this,e).get(e)}},function(e,t){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},function(e,t,n){var r=n(31);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},function(e,t,n){var r=n(32),o="__lodash_hash_undefined__";e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?o:t,this}},function(e,t,n){var r=n(32),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}},function(e,t,n){var r=n(32),o="__lodash_hash_undefined__",a=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return n===o?void 0:n}return a.call(t,e)?t[e]:void 0}},function(e,t){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},function(e,t,n){var r=n(32);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(e,t,n){var r=n(232),o=n(231),a=n(230),i=n(229),l=n(228);function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=l,e.exports=u},function(e,t,n){var r=n(233),o=n(34),a=n(48);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t,n){var r=n(11)["__core-js_shared__"];e.exports=r},function(e,t,n){var r,o=n(236),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!a&&a in e}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t,n){var r=n(46),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,l=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,l),n=e[l];try{e[l]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[l]=n:delete e[l]),o}},function(e,t,n){var r=n(47),o=n(237),a=n(14),i=n(85),l=/^\[object .+?Constructor\]$/,u=Function.prototype,s=Object.prototype,c=u.toString,f=s.hasOwnProperty,p=RegExp("^"+c.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(r(e)?p:l).test(i(e))}},function(e,t,n){var r=n(34),o=n(48),a=n(84),i=200;e.exports=function(e,t){var n=this.__data__;if(n instanceof r){var l=n.__data__;if(!o||l.length<i-1)return l.push([e,t]),this.size=++n.size,this;n=this.__data__=new a(l)}return n.set(e,t),this.size=n.size,this}},function(e,t){e.exports=function(e){return this.__data__.has(e)}},function(e,t){e.exports=function(e){return this.__data__.get(e)}},function(e,t){e.exports=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}},function(e,t,n){var r=n(34);e.exports=function(){this.__data__=new r,this.size=0}},function(e,t,n){var r=n(33);e.exports=function(e,t){var n=this.__data__,o=r(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}},function(e,t,n){var r=n(33);e.exports=function(e){return r(this.__data__,e)>-1}},function(e,t,n){var r=n(33);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},function(e,t,n){var r=n(33),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0||(n==t.length-1?t.pop():o.call(t,n,1),--this.size,0))}},function(e,t){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,n){var r=n(87),o=n(83),a=n(222),i=n(220),l=n(14),u=n(75),s=n(76);e.exports=function e(t,n,c,f,p){t!==n&&a(n,function(a,u){if(l(a))p||(p=new r),i(t,n,u,c,e,f,p);else{var d=f?f(s(t,u),a,u+"",t,n,p):void 0;void 0===d&&(d=a),o(t,u,d)}},u)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.fetchPlaylists=function(){return $.ajax({method:"GET",url:"api/playlists"})},t.fetchPlaylist=function(e){return $.ajax({method:"GET",url:"api/playlists/"+e})},t.createPlaylist=function(e){return $.ajax({url:"api/playlists",method:"POST",data:{playlist:e}})},t.updatePlaylist=function(e,t){return $.ajax({url:"api/playlists/"+e.id,method:"PATCH",data:{playlist:e,song_change:t}})},t.deletePlaylist=function(e){return $.ajax({url:"api/playlists/"+e,method:"DELETE"})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(9),a=n(16),i=(r=a)&&r.__esModule?r:{default:r},l=n(7);t.default=function(){var e,t,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments[1];switch(Object.freeze(r),a.type){case o.RECEIVE_ALL_PLAYLISTS:return(0,i.default)({},r,a.playlists);case o.RECEIVE_PLAYLIST:return(0,i.default)({},r,(e={},t=a.playlist.id,n=a.playlist,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e));case o.REMOVE_PLAYLIST:var u=(0,i.default)({},r);return delete u[a.id],u;case l.LOGOUT_CURRENT_USER:return{};default:return r}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),o=c(n(253)),a=c(n(191)),i=c(n(189)),l=c(n(188)),u=c(n(187)),s=c(n(185));function c(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.combineReducers)({playlists:o.default,songs:a.default,playlist_songs:i.default,playlist_followers:s.default,clicked_song:l.default,search_results:u.default})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),o=c(n(254)),a=c(n(183)),i=c(n(182)),l=c(n(180)),u=c(n(178)),s=c(n(177));function c(e){return e&&e.__esModule?e:{default:e}}var f=(0,r.combineReducers)({entities:o.default,session:a.default,errors:i.default,ui:l.default,now_playing:u.default,now_playing_queue:s.default});t.default=f},function(e,t,n){(function(e){!function(t){"use strict";function n(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,n){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:n,enumerable:!0})}function a(e,t){a.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function l(e,t,n){l.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:n,enumerable:!0})}function u(e,t,n){var r=e.slice((n||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,r),e}function s(e){var t=void 0===e?"undefined":E(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function c(e,t,n,r,f,p,d){f=f||[],d=d||[];var h=f.slice(0);if(void 0!==p){if(r){if("function"==typeof r&&r(h,p))return;if("object"===(void 0===r?"undefined":E(r))){if(r.prefilter&&r.prefilter(h,p))return;if(r.normalize){var y=r.normalize(h,p,e,t);y&&(e=y[0],t=y[1])}}}h.push(p)}"regexp"===s(e)&&"regexp"===s(t)&&(e=e.toString(),t=t.toString());var v=void 0===e?"undefined":E(e),m=void 0===t?"undefined":E(t),b="undefined"!==v||d&&d[d.length-1].lhs&&d[d.length-1].lhs.hasOwnProperty(p),g="undefined"!==m||d&&d[d.length-1].rhs&&d[d.length-1].rhs.hasOwnProperty(p);if(!b&&g)n(new a(h,t));else if(!g&&b)n(new i(h,e));else if(s(e)!==s(t))n(new o(h,e,t));else if("date"===s(e)&&e-t!=0)n(new o(h,e,t));else if("object"===v&&null!==e&&null!==t)if(d.filter(function(t){return t.lhs===e}).length)e!==t&&n(new o(h,e,t));else{if(d.push({lhs:e,rhs:t}),Array.isArray(e)){var _;for(e.length,_=0;_<e.length;_++)_>=t.length?n(new l(h,_,new i(void 0,e[_]))):c(e[_],t[_],n,r,h,_,d);for(;_<t.length;)n(new l(h,_,new a(void 0,t[_++])))}else{var w=Object.keys(e),P=Object.keys(t);w.forEach(function(o,a){var i=P.indexOf(o);i>=0?(c(e[o],t[o],n,r,h,o,d),P=u(P,i)):c(e[o],void 0,n,r,h,o,d)}),P.forEach(function(e){c(void 0,t[e],n,r,h,e,d)})}d.length=d.length-1}else e!==t&&("number"===v&&isNaN(e)&&isNaN(t)||n(new o(h,e,t)))}function f(e,t,n,r){return r=r||[],c(e,t,function(e){e&&r.push(e)},n),r.length?r:void 0}function p(e,t,n){if(e&&t&&n&&n.kind){for(var r=e,o=-1,a=n.path?n.path.length-1:0;++o<a;)void 0===r[n.path[o]]&&(r[n.path[o]]="number"==typeof n.path[o]?[]:{}),r=r[n.path[o]];switch(n.kind){case"A":!function e(t,n,r){if(r.path&&r.path.length){var o,a=t[n],i=r.path.length-1;for(o=0;o<i;o++)a=a[r.path[o]];switch(r.kind){case"A":e(a[r.path[o]],r.index,r.item);break;case"D":delete a[r.path[o]];break;case"E":case"N":a[r.path[o]]=r.rhs}}else switch(r.kind){case"A":e(t[n],r.index,r.item);break;case"D":t=u(t,n);break;case"E":case"N":t[n]=r.rhs}return t}(n.path?r[n.path[o]]:r,n.index,n.item);break;case"D":delete r[n.path[o]];break;case"E":case"N":r[n.path[o]]=n.rhs}}}function d(e,t,n,r){var o=f(e,t);try{r?n.groupCollapsed("diff"):n.group("diff")}catch(e){n.log("diff")}o?o.forEach(function(e){var t=e.kind,r=function(e){var t=e.kind,n=e.path,r=e.lhs,o=e.rhs,a=e.index,i=e.item;switch(t){case"E":return[n.join("."),r,"→",o];case"N":return[n.join("."),o];case"D":return[n.join(".")];case"A":return[n.join(".")+"["+a+"]",i];default:return[]}}(e);n.log.apply(n,["%c "+k[t].text,function(e){return"color: "+k[e].color+"; font-weight: bold"}(t)].concat(P(r)))}):n.log("—— no diff ——");try{n.groupEnd()}catch(e){n.log("—— diff end —— ")}}function h(e,t,n,r){switch(void 0===e?"undefined":E(e)){case"object":return"function"==typeof e[r]?e[r].apply(e,P(n)):e[r];case"function":return e(t);default:return e}}function y(e,t){var n=t.logger,r=t.actionTransformer,o=t.titleFormatter,a=void 0===o?function(e){var t=e.timestamp,n=e.duration;return function(e,r,o){var a=["action"];return a.push("%c"+String(e.type)),t&&a.push("%c@ "+r),n&&a.push("%c(in "+o.toFixed(2)+" ms)"),a.join(" ")}}(t):o,i=t.collapsed,l=t.colors,u=t.level,s=t.diff,c=void 0===t.titleFormatter;e.forEach(function(o,f){var p=o.started,y=o.startedTime,v=o.action,m=o.prevState,b=o.error,g=o.took,w=o.nextState,E=e[f+1];E&&(w=E.prevState,g=E.started-p);var P=r(v),O="function"==typeof i?i(function(){return w},v,o):i,k=_(y),S=l.title?"color: "+l.title(P)+";":"",x=["color: gray; font-weight: lighter;"];x.push(S),t.timestamp&&x.push("color: gray; font-weight: lighter;"),t.duration&&x.push("color: gray; font-weight: lighter;");var j=a(P,k,g);try{O?l.title&&c?n.groupCollapsed.apply(n,["%c "+j].concat(x)):n.groupCollapsed(j):l.title&&c?n.group.apply(n,["%c "+j].concat(x)):n.group(j)}catch(e){n.log(j)}var C=h(u,P,[m],"prevState"),T=h(u,P,[P],"action"),R=h(u,P,[b,m],"error"),N=h(u,P,[w],"nextState");if(C)if(l.prevState){var M="color: "+l.prevState(m)+"; font-weight: bold";n[C]("%c prev state",M,m)}else n[C]("prev state",m);if(T)if(l.action){var L="color: "+l.action(P)+"; font-weight: bold";n[T]("%c action    ",L,P)}else n[T]("action    ",P);if(b&&R)if(l.error){var A="color: "+l.error(b,m)+"; font-weight: bold;";n[R]("%c error     ",A,b)}else n[R]("error     ",b);if(N)if(l.nextState){var D="color: "+l.nextState(w)+"; font-weight: bold";n[N]("%c next state",D,w)}else n[N]("next state",w);s&&d(m,w,n,O);try{n.groupEnd()}catch(e){n.log("—— log end ——")}})}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},S,e),n=t.logger,r=t.stateTransformer,o=t.errorTransformer,a=t.predicate,i=t.logErrors,l=t.diffPredicate;if(void 0===n)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var n=e.getState;return function(e){return function(s){if("function"==typeof a&&!a(n,s))return e(s);var c={};u.push(c),c.started=w.now(),c.startedTime=new Date,c.prevState=r(n()),c.action=s;var f=void 0;if(i)try{f=e(s)}catch(e){c.error=o(e)}else f=e(s);c.took=w.now()-c.started,c.nextState=r(n());var p=t.diff&&"function"==typeof l?l(n,s):t.diff;if(y(u,Object.assign({},t,{diff:p})),u.length=0,c.error)throw c.error;return f}}}}var m,b,g=function(e,t){return function(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e},_=function(e){return g(e.getHours(),2)+":"+g(e.getMinutes(),2)+":"+g(e.getSeconds(),2)+"."+g(e.getMilliseconds(),3)},w="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},O=[];m="object"===(void 0===e?"undefined":E(e))&&e?e:"undefined"!=typeof window?window:{},(b=m.DeepDiff)&&O.push(function(){void 0!==b&&m.DeepDiff===f&&(m.DeepDiff=b,b=void 0)}),n(o,r),n(a,r),n(i,r),n(l,r),Object.defineProperties(f,{diff:{value:f,enumerable:!0},observableDiff:{value:c,enumerable:!0},applyDiff:{value:function(e,t,n){e&&t&&c(e,t,function(r){n&&!n(e,t,r)||p(e,t,r)})},enumerable:!0},applyChange:{value:p,enumerable:!0},revertChange:{value:function(e,t,n){if(e&&t&&n&&n.kind){var r,o,a=e;for(o=n.path.length-1,r=0;r<o;r++)void 0===a[n.path[r]]&&(a[n.path[r]]={}),a=a[n.path[r]];switch(n.kind){case"A":!function e(t,n,r){if(r.path&&r.path.length){var o,a=t[n],i=r.path.length-1;for(o=0;o<i;o++)a=a[r.path[o]];switch(r.kind){case"A":e(a[r.path[o]],r.index,r.item);break;case"D":case"E":a[r.path[o]]=r.lhs;break;case"N":delete a[r.path[o]]}}else switch(r.kind){case"A":e(t[n],r.index,r.item);break;case"D":case"E":t[n]=r.lhs;break;case"N":t=u(t,n)}return t}(a[n.path[r]],n.index,n.item);break;case"D":case"E":a[n.path[r]]=n.lhs;break;case"N":delete a[n.path[r]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==b},enumerable:!0},noConflict:{value:function(){return O&&(O.forEach(function(e){e()}),O=null),f},enumerable:!0}});var k={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},S={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,n=e.getState;return"function"==typeof t||"function"==typeof n?v()({dispatch:t,getState:n}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};t.defaults=S,t.createLogger=v,t.logger=x,t.default=x,Object.defineProperty(t,"__esModule",{value:!0})}(t)}).call(this,n(22))},function(e,t,n){"use strict";function r(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"==typeof o?o(n,r,e):t(o)}}}}n.r(t);var o=r();o.withExtraArgument=r,t.default=o},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),o=i(n(257)),a=(i(n(256)),i(n(255)));function i(e){return e&&e.__esModule?e:{default:e}}var l=[o.default];t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.createStore)(a.default,e,r.applyMiddleware.apply(void 0,l))}},function(e,t,n){"use strict";e.exports=function(e){var t=(e?e.ownerDocument||e:document).defaultView||window;return!(!e||!("function"==typeof t.Node?e instanceof t.Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}},function(e,t,n){"use strict";var r=n(260);e.exports=function(e){return r(e)&&3==e.nodeType}},function(e,t,n){"use strict";var r=n(261);e.exports=function e(t,n){return!(!t||!n)&&(t===n||!r(t)&&(r(n)?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}},function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty;function o(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}e.exports=function(e,t){if(o(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(var i=0;i<n.length;i++)if(!r.call(t,n[i])||!o(e[n[i]],t[n[i]]))return!1;return!0}},function(e,t,n){"use strict";e.exports=function(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}},function(e,t,n){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};e.exports=o},function(e,t,n){"use strict";
/** @license React v16.4.0
 * react-dom.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(50),o=n(1),a=n(265),i=n(90),l=n(49),u=n(264),s=n(263),c=n(262),f=n(89);function p(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=0;o<t;o++)n+="&args[]="+encodeURIComponent(arguments[o+1]);r(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}o||p("227");var d={_caughtError:null,_hasCaughtError:!1,_rethrowError:null,_hasRethrowError:!1,invokeGuardedCallback:function(e,t,n,r,o,a,i,l,u){(function(e,t,n,r,o,a,i,l,u){this._hasCaughtError=!1,this._caughtError=null;var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(e){this._caughtError=e,this._hasCaughtError=!0}}).apply(d,arguments)},invokeGuardedCallbackAndCatchFirstError:function(e,t,n,r,o,a,i,l,u){if(d.invokeGuardedCallback.apply(this,arguments),d.hasCaughtError()){var s=d.clearCaughtError();d._hasRethrowError||(d._hasRethrowError=!0,d._rethrowError=s)}},rethrowCaughtError:function(){return function(){if(d._hasRethrowError){var e=d._rethrowError;throw d._rethrowError=null,d._hasRethrowError=!1,e}}.apply(d,arguments)},hasCaughtError:function(){return d._hasCaughtError},clearCaughtError:function(){if(d._hasCaughtError){var e=d._caughtError;return d._caughtError=null,d._hasCaughtError=!1,e}p("198")}};var h=null,y={};function v(){if(h)for(var e in y){var t=y[e],n=h.indexOf(e);if(-1<n||p("96",e),!b[n])for(var r in t.extractEvents||p("97",e),b[n]=t,n=t.eventTypes){var o=void 0,a=n[r],i=t,l=r;g.hasOwnProperty(l)&&p("99",l),g[l]=a;var u=a.phasedRegistrationNames;if(u){for(o in u)u.hasOwnProperty(o)&&m(u[o],i,l);o=!0}else a.registrationName?(m(a.registrationName,i,l),o=!0):o=!1;o||p("98",r,e)}}}function m(e,t,n){_[e]&&p("100",e),_[e]=t,w[e]=t.eventTypes[n].dependencies}var b=[],g={},_={},w={};function E(e){h&&p("101"),h=Array.prototype.slice.call(e),v()}function P(e){var t,n=!1;for(t in e)if(e.hasOwnProperty(t)){var r=e[t];y.hasOwnProperty(t)&&y[t]===r||(y[t]&&p("102",t),y[t]=r,n=!0)}n&&v()}var O={plugins:b,eventNameDispatchConfigs:g,registrationNameModules:_,registrationNameDependencies:w,possibleRegistrationNames:null,injectEventPluginOrder:E,injectEventPluginsByName:P},k=null,S=null,x=null;function j(e,t,n,r){t=e.type||"unknown-event",e.currentTarget=x(r),d.invokeGuardedCallbackAndCatchFirstError(t,n,void 0,e),e.currentTarget=null}function C(e,t){return null==t&&p("30"),null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function T(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var R=null;function N(e,t){if(e){var n=e._dispatchListeners,r=e._dispatchInstances;if(Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)j(e,t,n[o],r[o]);else n&&j(e,t,n,r);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function M(e){return N(e,!0)}function L(e){return N(e,!1)}var A={injectEventPluginOrder:E,injectEventPluginsByName:P};function D(e,t){var n=e.stateNode;if(!n)return null;var r=k(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}return e?null:(n&&"function"!=typeof n&&p("231",t,typeof n),n)}function I(e,t){null!==e&&(R=C(R,e)),e=R,R=null,e&&(T(e,t?M:L),R&&p("95"),d.rethrowCaughtError())}function U(e,t,n,r){for(var o=null,a=0;a<b.length;a++){var i=b[a];i&&(i=i.extractEvents(e,t,n,r))&&(o=C(o,i))}I(o,!1)}var F={injection:A,getListener:D,runEventsInBatch:I,runExtractedEventsInBatch:U},V=Math.random().toString(36).slice(2),z="__reactInternalInstance$"+V,W="__reactEventHandlers$"+V;function B(e){if(e[z])return e[z];for(;!e[z];){if(!e.parentNode)return null;e=e.parentNode}return 5===(e=e[z]).tag||6===e.tag?e:null}function H(e){if(5===e.tag||6===e.tag)return e.stateNode;p("33")}function q(e){return e[W]||null}var Y={precacheFiberNode:function(e,t){t[z]=e},getClosestInstanceFromNode:B,getInstanceFromNode:function(e){return!(e=e[z])||5!==e.tag&&6!==e.tag?null:e},getNodeFromInstance:H,getFiberCurrentPropsFromNode:q,updateFiberProps:function(e,t){e[W]=t}};function $(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function G(e,t,n){for(var r=[];e;)r.push(e),e=$(e);for(e=r.length;0<e--;)t(r[e],"captured",n);for(e=0;e<r.length;e++)t(r[e],"bubbled",n)}function K(e,t,n){(t=D(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=C(n._dispatchListeners,t),n._dispatchInstances=C(n._dispatchInstances,e))}function Q(e){e&&e.dispatchConfig.phasedRegistrationNames&&G(e._targetInst,K,e)}function J(e){if(e&&e.dispatchConfig.phasedRegistrationNames){var t=e._targetInst;G(t=t?$(t):null,K,e)}}function X(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=D(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=C(n._dispatchListeners,t),n._dispatchInstances=C(n._dispatchInstances,e))}function Z(e){e&&e.dispatchConfig.registrationName&&X(e._targetInst,null,e)}function ee(e){T(e,Q)}function te(e,t,n,r){if(n&&r)e:{for(var o=n,a=r,i=0,l=o;l;l=$(l))i++;l=0;for(var u=a;u;u=$(u))l++;for(;0<i-l;)o=$(o),i--;for(;0<l-i;)a=$(a),l--;for(;i--;){if(o===a||o===a.alternate)break e;o=$(o),a=$(a)}o=null}else o=null;for(a=o,o=[];n&&n!==a&&(null===(i=n.alternate)||i!==a);)o.push(n),n=$(n);for(n=[];r&&r!==a&&(null===(i=r.alternate)||i!==a);)n.push(r),r=$(r);for(r=0;r<o.length;r++)X(o[r],"bubbled",e);for(e=n.length;0<e--;)X(n[e],"captured",t)}var ne={accumulateTwoPhaseDispatches:ee,accumulateTwoPhaseDispatchesSkipTarget:function(e){T(e,J)},accumulateEnterLeaveDispatches:te,accumulateDirectDispatches:function(e){T(e,Z)}};function re(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n["ms"+e]="MS"+t,n["O"+e]="o"+t.toLowerCase(),n}var oe={animationend:re("Animation","AnimationEnd"),animationiteration:re("Animation","AnimationIteration"),animationstart:re("Animation","AnimationStart"),transitionend:re("Transition","TransitionEnd")},ae={},ie={};function le(e){if(ae[e])return ae[e];if(!oe[e])return e;var t,n=oe[e];for(t in n)if(n.hasOwnProperty(t)&&t in ie)return ae[e]=n[t];return e}a.canUseDOM&&(ie=document.createElement("div").style,"AnimationEvent"in window||(delete oe.animationend.animation,delete oe.animationiteration.animation,delete oe.animationstart.animation),"TransitionEvent"in window||delete oe.transitionend.transition);var ue=le("animationend"),se=le("animationiteration"),ce=le("animationstart"),fe=le("transitionend"),pe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),de=null;function he(){return!de&&a.canUseDOM&&(de="textContent"in document.documentElement?"textContent":"innerText"),de}var ye={_root:null,_startText:null,_fallbackText:null};function ve(){if(ye._fallbackText)return ye._fallbackText;var e,t,n=ye._startText,r=n.length,o=me(),a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[a-t];t++);return ye._fallbackText=o.slice(e,1<t?1-t:void 0),ye._fallbackText}function me(){return"value"in ye._root?ye._root.value:ye._root[he()]}var be="dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),ge={type:null,target:null,currentTarget:l.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};function _e(e,t,n,r){for(var o in this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface)e.hasOwnProperty(o)&&((t=e[o])?this[o]=t(n):"target"===o?this.target=r:this[o]=n[o]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?l.thatReturnsTrue:l.thatReturnsFalse,this.isPropagationStopped=l.thatReturnsFalse,this}function we(e,t,n,r){if(this.eventPool.length){var o=this.eventPool.pop();return this.call(o,e,t,n,r),o}return new this(e,t,n,r)}function Ee(e){e instanceof this||p("223"),e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function Pe(e){e.eventPool=[],e.getPooled=we,e.release=Ee}i(_e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=l.thatReturnsTrue)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=l.thatReturnsTrue)},persist:function(){this.isPersistent=l.thatReturnsTrue},isPersistent:l.thatReturnsFalse,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;for(t=0;t<be.length;t++)this[be[t]]=null}}),_e.Interface=ge,_e.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var o=new t;return i(o,n.prototype),n.prototype=o,n.prototype.constructor=n,n.Interface=i({},r.Interface,e),n.extend=r.extend,Pe(n),n},Pe(_e);var Oe=_e.extend({data:null}),ke=_e.extend({data:null}),Se=[9,13,27,32],xe=a.canUseDOM&&"CompositionEvent"in window,je=null;a.canUseDOM&&"documentMode"in document&&(je=document.documentMode);var Ce=a.canUseDOM&&"TextEvent"in window&&!je,Te=a.canUseDOM&&(!xe||je&&8<je&&11>=je),Re=String.fromCharCode(32),Ne={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Me=!1;function Le(e,t){switch(e){case"keyup":return-1!==Se.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function Ae(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var De=!1;var Ie={eventTypes:Ne,extractEvents:function(e,t,n,r){var o=void 0,a=void 0;if(xe)e:{switch(e){case"compositionstart":o=Ne.compositionStart;break e;case"compositionend":o=Ne.compositionEnd;break e;case"compositionupdate":o=Ne.compositionUpdate;break e}o=void 0}else De?Le(e,n)&&(o=Ne.compositionEnd):"keydown"===e&&229===n.keyCode&&(o=Ne.compositionStart);return o?(Te&&(De||o!==Ne.compositionStart?o===Ne.compositionEnd&&De&&(a=ve()):(ye._root=r,ye._startText=me(),De=!0)),o=Oe.getPooled(o,t,n,r),a?o.data=a:null!==(a=Ae(n))&&(o.data=a),ee(o),a=o):a=null,(e=Ce?function(e,t){switch(e){case"compositionend":return Ae(t);case"keypress":return 32!==t.which?null:(Me=!0,Re);case"textInput":return(e=t.data)===Re&&Me?null:e;default:return null}}(e,n):function(e,t){if(De)return"compositionend"===e||!xe&&Le(e,t)?(e=ve(),ye._root=null,ye._startText=null,ye._fallbackText=null,De=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Te?null:t.data;default:return null}}(e,n))?((t=ke.getPooled(Ne.beforeInput,t,n,r)).data=e,ee(t)):t=null,null===a?t:null===t?a:[a,t]}},Ue=null,Fe={injectFiberControlledHostComponent:function(e){Ue=e}},Ve=null,ze=null;function We(e){if(e=S(e)){Ue&&"function"==typeof Ue.restoreControlledState||p("194");var t=k(e.stateNode);Ue.restoreControlledState(e.stateNode,e.type,t)}}function Be(e){Ve?ze?ze.push(e):ze=[e]:Ve=e}function He(){return null!==Ve||null!==ze}function qe(){if(Ve){var e=Ve,t=ze;if(ze=Ve=null,We(e),t)for(e=0;e<t.length;e++)We(t[e])}}var Ye={injection:Fe,enqueueStateRestore:Be,needsStateRestore:He,restoreStateIfNeeded:qe};function $e(e,t){return e(t)}function Ge(e,t,n){return e(t,n)}function Ke(){}var Qe=!1;function Je(e,t){if(Qe)return e(t);Qe=!0;try{return $e(e,t)}finally{Qe=!1,He()&&(Ke(),qe())}}var Xe={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ze(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Xe[e.type]:"textarea"===t}function et(e){return(e=e.target||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function tt(e,t){return!(!a.canUseDOM||t&&!("addEventListener"in document))&&((t=(e="on"+e)in document)||((t=document.createElement("div")).setAttribute(e,"return;"),t="function"==typeof t[e]),t)}function nt(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function rt(e){e._valueTracker||(e._valueTracker=function(e){var t=nt(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ot(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=nt(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}var at=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,it="function"==typeof Symbol&&Symbol.for,lt=it?Symbol.for("react.element"):60103,ut=it?Symbol.for("react.portal"):60106,st=it?Symbol.for("react.fragment"):60107,ct=it?Symbol.for("react.strict_mode"):60108,ft=it?Symbol.for("react.profiler"):60114,pt=it?Symbol.for("react.provider"):60109,dt=it?Symbol.for("react.context"):60110,ht=it?Symbol.for("react.async_mode"):60111,yt=it?Symbol.for("react.forward_ref"):60112,vt=it?Symbol.for("react.timeout"):60113,mt="function"==typeof Symbol&&Symbol.iterator;function bt(e){return null===e||void 0===e?null:"function"==typeof(e=mt&&e[mt]||e["@@iterator"])?e:null}function gt(e){var t=e.type;if("function"==typeof t)return t.displayName||t.name;if("string"==typeof t)return t;switch(t){case ht:return"AsyncMode";case dt:return"Context.Consumer";case st:return"ReactFragment";case ut:return"ReactPortal";case ft:return"Profiler("+e.pendingProps.id+")";case pt:return"Context.Provider";case ct:return"StrictMode";case vt:return"Timeout"}if("object"==typeof t&&null!==t)switch(t.$$typeof){case yt:return""!==(e=t.render.displayName||t.render.name||"")?"ForwardRef("+e+")":"ForwardRef"}return null}function _t(e){var t="";do{e:switch(e.tag){case 0:case 1:case 2:case 5:var n=e._debugOwner,r=e._debugSource,o=gt(e),a=null;n&&(a=gt(n)),n=r,o="\n    in "+(o||"Unknown")+(n?" (at "+n.fileName.replace(/^.*[\\\/]/,"")+":"+n.lineNumber+")":a?" (created by "+a+")":"");break e;default:o=""}t+=o,e=e.return}while(e);return t}var wt=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Et={},Pt={};function Ot(e,t,n,r,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){kt[e]=new Ot(e,0,!1,e,null)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];kt[t]=new Ot(t,1,!1,e[1],null)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){kt[e]=new Ot(e,2,!1,e.toLowerCase(),null)}),["autoReverse","externalResourcesRequired","preserveAlpha"].forEach(function(e){kt[e]=new Ot(e,2,!1,e,null)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){kt[e]=new Ot(e,3,!1,e.toLowerCase(),null)}),["checked","multiple","muted","selected"].forEach(function(e){kt[e]=new Ot(e,3,!0,e.toLowerCase(),null)}),["capture","download"].forEach(function(e){kt[e]=new Ot(e,4,!1,e.toLowerCase(),null)}),["cols","rows","size","span"].forEach(function(e){kt[e]=new Ot(e,6,!1,e.toLowerCase(),null)}),["rowSpan","start"].forEach(function(e){kt[e]=new Ot(e,5,!1,e.toLowerCase(),null)});var St=/[\-:]([a-z])/g;function xt(e){return e[1].toUpperCase()}function jt(e,t,n,r){var o=kt.hasOwnProperty(t)?kt[t]:null;(null!==o?0===o.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null===t||void 0===t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!Pt.hasOwnProperty(e)||!Et.hasOwnProperty(e)&&(wt.test(e)?Pt[e]=!0:(Et[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}function Ct(e,t){var n=t.checked;return i({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Tt(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=At(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Rt(e,t){null!=(t=t.checked)&&jt(e,"checked",t,!1)}function Nt(e,t){Rt(e,t);var n=At(t.value);null!=n&&("number"===t.type?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n)),t.hasOwnProperty("value")?Lt(e,t.type,n):t.hasOwnProperty("defaultValue")&&Lt(e,t.type,At(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Mt(e,t){(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue"))&&(""===e.value&&(e.value=""+e._wrapperState.initialValue),e.defaultValue=""+e._wrapperState.initialValue),""!==(t=e.name)&&(e.name=""),e.defaultChecked=!e.defaultChecked,e.defaultChecked=!e.defaultChecked,""!==t&&(e.name=t)}function Lt(e,t,n){"number"===t&&e.ownerDocument.activeElement===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function At(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(St,xt);kt[t]=new Ot(t,1,!1,e,null)}),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(St,xt);kt[t]=new Ot(t,1,!1,e,"http://www.w3.org/1999/xlink")}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(St,xt);kt[t]=new Ot(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")}),kt.tabIndex=new Ot("tabIndex",1,!1,"tabindex",null);var Dt={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function It(e,t,n){return(e=_e.getPooled(Dt.change,e,t,n)).type="change",Be(n),ee(e),e}var Ut=null,Ft=null;function Vt(e){I(e,!1)}function zt(e){if(ot(H(e)))return e}function Wt(e,t){if("change"===e)return t}var Bt=!1;function Ht(){Ut&&(Ut.detachEvent("onpropertychange",qt),Ft=Ut=null)}function qt(e){"value"===e.propertyName&&zt(Ft)&&Je(Vt,e=It(Ft,e,et(e)))}function Yt(e,t,n){"focus"===e?(Ht(),Ft=n,(Ut=t).attachEvent("onpropertychange",qt)):"blur"===e&&Ht()}function $t(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return zt(Ft)}function Gt(e,t){if("click"===e)return zt(t)}function Kt(e,t){if("input"===e||"change"===e)return zt(t)}a.canUseDOM&&(Bt=tt("input")&&(!document.documentMode||9<document.documentMode));var Qt={eventTypes:Dt,_isInputEventSupported:Bt,extractEvents:function(e,t,n,r){var o=t?H(t):window,a=void 0,i=void 0,l=o.nodeName&&o.nodeName.toLowerCase();if("select"===l||"input"===l&&"file"===o.type?a=Wt:Ze(o)?Bt?a=Kt:(a=$t,i=Yt):(l=o.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===o.type||"radio"===o.type)&&(a=Gt),a&&(a=a(e,t)))return It(a,n,r);i&&i(e,o,t),"blur"===e&&null!=t&&(e=t._wrapperState||o._wrapperState)&&e.controlled&&"number"===o.type&&Lt(o,"number",o.value)}},Jt=_e.extend({view:null,detail:null}),Xt={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zt(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Xt[e])&&!!t[e]}function en(){return Zt}var tn=Jt.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:en,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)}}),nn=tn.extend({pointerId:null,width:null,height:null,pressure:null,tiltX:null,tiltY:null,pointerType:null,isPrimary:null}),rn={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},on={eventTypes:rn,extractEvents:function(e,t,n,r){var o="mouseover"===e||"pointerover"===e,a="mouseout"===e||"pointerout"===e;if(o&&(n.relatedTarget||n.fromElement)||!a&&!o)return null;if(o=r.window===r?r:(o=r.ownerDocument)?o.defaultView||o.parentWindow:window,a?(a=t,t=(t=n.relatedTarget||n.toElement)?B(t):null):a=null,a===t)return null;var i=void 0,l=void 0,u=void 0,s=void 0;return"mouseout"===e||"mouseover"===e?(i=tn,l=rn.mouseLeave,u=rn.mouseEnter,s="mouse"):"pointerout"!==e&&"pointerover"!==e||(i=nn,l=rn.pointerLeave,u=rn.pointerEnter,s="pointer"),e=null==a?o:H(a),o=null==t?o:H(t),(l=i.getPooled(l,a,n,r)).type=s+"leave",l.target=e,l.relatedTarget=o,(n=i.getPooled(u,t,n,r)).type=s+"enter",n.target=o,n.relatedTarget=e,te(l,n,a,t),[l,n]}};function an(e){var t=e;if(e.alternate)for(;t.return;)t=t.return;else{if(0!=(2&t.effectTag))return 1;for(;t.return;)if(0!=(2&(t=t.return).effectTag))return 1}return 3===t.tag?2:3}function ln(e){2!==an(e)&&p("188")}function un(e){var t=e.alternate;if(!t)return 3===(t=an(e))&&p("188"),1===t?null:e;for(var n=e,r=t;;){var o=n.return,a=o?o.alternate:null;if(!o||!a)break;if(o.child===a.child){for(var i=o.child;i;){if(i===n)return ln(o),e;if(i===r)return ln(o),t;i=i.sibling}p("188")}if(n.return!==r.return)n=o,r=a;else{i=!1;for(var l=o.child;l;){if(l===n){i=!0,n=o,r=a;break}if(l===r){i=!0,r=o,n=a;break}l=l.sibling}if(!i){for(l=a.child;l;){if(l===n){i=!0,n=a,r=o;break}if(l===r){i=!0,r=a,n=o;break}l=l.sibling}i||p("189")}}n.alternate!==r&&p("190")}return 3!==n.tag&&p("188"),n.stateNode.current===n?e:t}function sn(e){if(!(e=un(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}var cn=_e.extend({animationName:null,elapsedTime:null,pseudoElement:null}),fn=_e.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pn=Jt.extend({relatedTarget:null});function dn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}var hn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vn=Jt.extend({key:function(e){if(e.key){var t=hn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=dn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?yn[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:en,charCode:function(e){return"keypress"===e.type?dn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?dn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),mn=tn.extend({dataTransfer:null}),bn=Jt.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:en}),gn=_e.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),_n=tn.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),wn=[["abort","abort"],[ue,"animationEnd"],[se,"animationIteration"],[ce,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[fe,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],En={},Pn={};function On(e,t){var n=e[0],r="on"+((e=e[1])[0].toUpperCase()+e.slice(1));t={phasedRegistrationNames:{bubbled:r,captured:r+"Capture"},dependencies:[n],isInteractive:t},En[e]=t,Pn[n]=t}[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(e){On(e,!0)}),wn.forEach(function(e){On(e,!1)});var kn={eventTypes:En,isInteractiveTopLevelEventType:function(e){return void 0!==(e=Pn[e])&&!0===e.isInteractive},extractEvents:function(e,t,n,r){var o=Pn[e];if(!o)return null;switch(e){case"keypress":if(0===dn(n))return null;case"keydown":case"keyup":e=vn;break;case"blur":case"focus":e=pn;break;case"click":if(2===n.button)return null;case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=tn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=bn;break;case ue:case se:case ce:e=cn;break;case fe:e=gn;break;case"scroll":e=Jt;break;case"wheel":e=_n;break;case"copy":case"cut":case"paste":e=fn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=nn;break;default:e=_e}return ee(t=e.getPooled(o,t,n,r)),t}},Sn=kn.isInteractiveTopLevelEventType,xn=[];function jn(e){var t=e.targetInst;do{if(!t){e.ancestors.push(t);break}var n;for(n=t;n.return;)n=n.return;if(!(n=3!==n.tag?null:n.stateNode.containerInfo))break;e.ancestors.push(t),t=B(n)}while(t);for(n=0;n<e.ancestors.length;n++)t=e.ancestors[n],U(e.topLevelType,t,e.nativeEvent,et(e.nativeEvent))}var Cn=!0;function Tn(e){Cn=!!e}function Rn(e,t){if(!t)return null;var n=(Sn(e)?Mn:Ln).bind(null,e);t.addEventListener(e,n,!1)}function Nn(e,t){if(!t)return null;var n=(Sn(e)?Mn:Ln).bind(null,e);t.addEventListener(e,n,!0)}function Mn(e,t){Ge(Ln,e,t)}function Ln(e,t){if(Cn){var n=et(t);if(null===(n=B(n))||"number"!=typeof n.tag||2===an(n)||(n=null),xn.length){var r=xn.pop();r.topLevelType=e,r.nativeEvent=t,r.targetInst=n,e=r}else e={topLevelType:e,nativeEvent:t,targetInst:n,ancestors:[]};try{Je(jn,e)}finally{e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>xn.length&&xn.push(e)}}}var An={get _enabled(){return Cn},setEnabled:Tn,isEnabled:function(){return Cn},trapBubbledEvent:Rn,trapCapturedEvent:Nn,dispatchEvent:Ln},Dn={},In=0,Un="_reactListenersID"+(""+Math.random()).slice(2);function Fn(e){return Object.prototype.hasOwnProperty.call(e,Un)||(e[Un]=In++,Dn[e[Un]]={}),Dn[e[Un]]}function Vn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zn(e,t){var n,r=Vn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Vn(r)}}function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&"text"===e.type||"textarea"===t||"true"===e.contentEditable)}var Bn=a.canUseDOM&&"documentMode"in document&&11>=document.documentMode,Hn={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu focus keydown keyup mousedown mouseup selectionchange".split(" ")}},qn=null,Yn=null,$n=null,Gn=!1;function Kn(e,t){if(Gn||null==qn||qn!==u())return null;var n=qn;return"selectionStart"in n&&Wn(n)?n={start:n.selectionStart,end:n.selectionEnd}:window.getSelection?n={anchorNode:(n=window.getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}:n=void 0,$n&&s($n,n)?null:($n=n,(e=_e.getPooled(Hn.select,Yn,e,t)).type="select",e.target=qn,ee(e),e)}var Qn={eventTypes:Hn,extractEvents:function(e,t,n,r){var o,a=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;if(!(o=!a)){e:{a=Fn(a),o=w.onSelect;for(var i=0;i<o.length;i++){var l=o[i];if(!a.hasOwnProperty(l)||!a[l]){a=!1;break e}}a=!0}o=!a}if(o)return null;switch(a=t?H(t):window,e){case"focus":(Ze(a)||"true"===a.contentEditable)&&(qn=a,Yn=t,$n=null);break;case"blur":$n=Yn=qn=null;break;case"mousedown":Gn=!0;break;case"contextmenu":case"mouseup":return Gn=!1,Kn(n,r);case"selectionchange":if(Bn)break;case"keydown":case"keyup":return Kn(n,r)}return null}};A.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),k=Y.getFiberCurrentPropsFromNode,S=Y.getInstanceFromNode,x=Y.getNodeFromInstance,A.injectEventPluginsByName({SimpleEventPlugin:kn,EnterLeaveEventPlugin:on,ChangeEventPlugin:Qt,SelectEventPlugin:Qn,BeforeInputEventPlugin:Ie});var Jn=void 0;Jn="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};var Xn=void 0,Zn=void 0;if(a.canUseDOM){var er=[],tr=0,nr={},rr=-1,or=!1,ar=!1,ir=0,lr=33,ur=33,sr={didTimeout:!1,timeRemaining:function(){var e=ir-Jn();return 0<e?e:0}},cr=function(e,t){if(nr[t])try{e(sr)}finally{delete nr[t]}},fr="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(e){if(e.source===window&&e.data===fr&&(or=!1,0!==er.length)){if(0!==er.length&&(e=Jn(),!(-1===rr||rr>e))){rr=-1,sr.didTimeout=!0;for(var t=0,n=er.length;t<n;t++){var r=er[t],o=r.timeoutTime;-1!==o&&o<=e?cr(r.scheduledCallback,r.callbackId):-1!==o&&(-1===rr||o<rr)&&(rr=o)}}for(e=Jn();0<ir-e&&0<er.length;)e=er.shift(),sr.didTimeout=!1,cr(e.scheduledCallback,e.callbackId),e=Jn();0<er.length&&!ar&&(ar=!0,requestAnimationFrame(pr))}},!1);var pr=function(e){ar=!1;var t=e-ir+ur;t<ur&&lr<ur?(8>t&&(t=8),ur=t<lr?lr:t):lr=t,ir=e+ur,or||(or=!0,window.postMessage(fr,"*"))};Xn=function(e,t){var n=-1;return null!=t&&"number"==typeof t.timeout&&(n=Jn()+t.timeout),(-1===rr||-1!==n&&n<rr)&&(rr=n),t=++tr,er.push({scheduledCallback:e,callbackId:t,timeoutTime:n}),nr[t]=!0,ar||(ar=!0,requestAnimationFrame(pr)),t},Zn=function(e){delete nr[e]}}else{var dr=0,hr={};Xn=function(e){var t=dr++,n=setTimeout(function(){e({timeRemaining:function(){return 1/0},didTimeout:!1})});return hr[t]=n,t},Zn=function(e){var t=hr[e];delete hr[e],clearTimeout(t)}}function yr(e,t){return e=i({children:void 0},t),(t=function(e){var t="";return o.Children.forEach(e,function(e){null==e||"string"!=typeof e&&"number"!=typeof e||(t+=e)}),t}(t.children))&&(e.children=t),e}function vr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+n,t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function mr(e,t){var n=t.value;e._wrapperState={initialValue:null!=n?n:t.defaultValue,wasMultiple:!!t.multiple}}function br(e,t){return null!=t.dangerouslySetInnerHTML&&p("91"),i({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gr(e,t){var n=t.value;null==n&&(n=t.defaultValue,null!=(t=t.children)&&(null!=n&&p("92"),Array.isArray(t)&&(1>=t.length||p("93"),t=t[0]),n=""+t),null==n&&(n="")),e._wrapperState={initialValue:""+n}}function _r(e,t){var n=t.value;null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&(e.defaultValue=n)),null!=t.defaultValue&&(e.defaultValue=t.defaultValue)}function wr(e){var t=e.textContent;t===e._wrapperState.initialValue&&(e.value=t)}var Er={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Pr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Or(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?Pr(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var kr,Sr=void 0,xr=(kr=function(e,t){if(e.namespaceURI!==Er.svg||"innerHTML"in e)e.innerHTML=t;else{for((Sr=Sr||document.createElement("div")).innerHTML="<svg>"+t+"</svg>",t=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return kr(e,t)})}:kr);function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Cr={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tr=["Webkit","ms","Moz","O"];function Rr(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=n,a=t[n];o=null==a||"boolean"==typeof a||""===a?"":r||"number"!=typeof a||0===a||Cr.hasOwnProperty(o)&&Cr[o]?(""+a).trim():a+"px","float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(Cr).forEach(function(e){Tr.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cr[t]=Cr[e]})});var Nr=i({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mr(e,t,n){t&&(Nr[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML)&&p("137",e,n()),null!=t.dangerouslySetInnerHTML&&(null!=t.children&&p("60"),"object"==typeof t.dangerouslySetInnerHTML&&"__html"in t.dangerouslySetInnerHTML||p("61")),null!=t.style&&"object"!=typeof t.style&&p("62",n()))}function Lr(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ar=l.thatReturns("");function Dr(e,t){var n=Fn(e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument);t=w[t];for(var r=0;r<t.length;r++){var o=t[r];if(!n.hasOwnProperty(o)||!n[o]){switch(o){case"scroll":Nn("scroll",e);break;case"focus":case"blur":Nn("focus",e),Nn("blur",e),n.blur=!0,n.focus=!0;break;case"cancel":case"close":tt(o,!0)&&Nn(o,e);break;case"invalid":case"submit":case"reset":break;default:-1===pe.indexOf(o)&&Rn(o,e)}n[o]=!0}}}function Ir(e,t,n,r){return n=9===n.nodeType?n:n.ownerDocument,r===Er.html&&(r=Pr(e)),r===Er.html?"script"===e?((e=n.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):e="string"==typeof t.is?n.createElement(e,{is:t.is}):n.createElement(e):e=n.createElementNS(r,e),e}function Ur(e,t){return(9===t.nodeType?t:t.ownerDocument).createTextNode(e)}function Fr(e,t,n,r){var o=Lr(t,n);switch(t){case"iframe":case"object":Rn("load",e);var a=n;break;case"video":case"audio":for(a=0;a<pe.length;a++)Rn(pe[a],e);a=n;break;case"source":Rn("error",e),a=n;break;case"img":case"image":case"link":Rn("error",e),Rn("load",e),a=n;break;case"form":Rn("reset",e),Rn("submit",e),a=n;break;case"details":Rn("toggle",e),a=n;break;case"input":Tt(e,n),a=Ct(e,n),Rn("invalid",e),Dr(r,"onChange");break;case"option":a=yr(e,n);break;case"select":mr(e,n),a=i({},n,{value:void 0}),Rn("invalid",e),Dr(r,"onChange");break;case"textarea":gr(e,n),a=br(e,n),Rn("invalid",e),Dr(r,"onChange");break;default:a=n}Mr(t,a,Ar);var u,s=a;for(u in s)if(s.hasOwnProperty(u)){var c=s[u];"style"===u?Rr(e,c):"dangerouslySetInnerHTML"===u?null!=(c=c?c.__html:void 0)&&xr(e,c):"children"===u?"string"==typeof c?("textarea"!==t||""!==c)&&jr(e,c):"number"==typeof c&&jr(e,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(_.hasOwnProperty(u)?null!=c&&Dr(r,u):null!=c&&jt(e,u,c,o))}switch(t){case"input":rt(e),Mt(e,n);break;case"textarea":rt(e),wr(e);break;case"option":null!=n.value&&e.setAttribute("value",n.value);break;case"select":e.multiple=!!n.multiple,null!=(t=n.value)?vr(e,!!n.multiple,t,!1):null!=n.defaultValue&&vr(e,!!n.multiple,n.defaultValue,!0);break;default:"function"==typeof a.onClick&&(e.onclick=l)}}function Vr(e,t,n,r,o){var a=null;switch(t){case"input":n=Ct(e,n),r=Ct(e,r),a=[];break;case"option":n=yr(e,n),r=yr(e,r),a=[];break;case"select":n=i({},n,{value:void 0}),r=i({},r,{value:void 0}),a=[];break;case"textarea":n=br(e,n),r=br(e,r),a=[];break;default:"function"!=typeof n.onClick&&"function"==typeof r.onClick&&(e.onclick=l)}Mr(t,r,Ar),t=e=void 0;var u=null;for(e in n)if(!r.hasOwnProperty(e)&&n.hasOwnProperty(e)&&null!=n[e])if("style"===e){var s=n[e];for(t in s)s.hasOwnProperty(t)&&(u||(u={}),u[t]="")}else"dangerouslySetInnerHTML"!==e&&"children"!==e&&"suppressContentEditableWarning"!==e&&"suppressHydrationWarning"!==e&&"autoFocus"!==e&&(_.hasOwnProperty(e)?a||(a=[]):(a=a||[]).push(e,null));for(e in r){var c=r[e];if(s=null!=n?n[e]:void 0,r.hasOwnProperty(e)&&c!==s&&(null!=c||null!=s))if("style"===e)if(s){for(t in s)!s.hasOwnProperty(t)||c&&c.hasOwnProperty(t)||(u||(u={}),u[t]="");for(t in c)c.hasOwnProperty(t)&&s[t]!==c[t]&&(u||(u={}),u[t]=c[t])}else u||(a||(a=[]),a.push(e,u)),u=c;else"dangerouslySetInnerHTML"===e?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(a=a||[]).push(e,""+c)):"children"===e?s===c||"string"!=typeof c&&"number"!=typeof c||(a=a||[]).push(e,""+c):"suppressContentEditableWarning"!==e&&"suppressHydrationWarning"!==e&&(_.hasOwnProperty(e)?(null!=c&&Dr(o,e),a||s===c||(a=[])):(a=a||[]).push(e,c))}return u&&(a=a||[]).push("style",u),a}function zr(e,t,n,r,o){"input"===n&&"radio"===o.type&&null!=o.name&&Rt(e,o),Lr(n,r),r=Lr(n,o);for(var a=0;a<t.length;a+=2){var i=t[a],l=t[a+1];"style"===i?Rr(e,l):"dangerouslySetInnerHTML"===i?xr(e,l):"children"===i?jr(e,l):jt(e,i,l,r)}switch(n){case"input":Nt(e,o);break;case"textarea":_r(e,o);break;case"select":e._wrapperState.initialValue=void 0,t=e._wrapperState.wasMultiple,e._wrapperState.wasMultiple=!!o.multiple,null!=(n=o.value)?vr(e,!!o.multiple,n,!1):t!==!!o.multiple&&(null!=o.defaultValue?vr(e,!!o.multiple,o.defaultValue,!0):vr(e,!!o.multiple,o.multiple?[]:"",!1))}}function Wr(e,t,n,r,o){switch(t){case"iframe":case"object":Rn("load",e);break;case"video":case"audio":for(r=0;r<pe.length;r++)Rn(pe[r],e);break;case"source":Rn("error",e);break;case"img":case"image":case"link":Rn("error",e),Rn("load",e);break;case"form":Rn("reset",e),Rn("submit",e);break;case"details":Rn("toggle",e);break;case"input":Tt(e,n),Rn("invalid",e),Dr(o,"onChange");break;case"select":mr(e,n),Rn("invalid",e),Dr(o,"onChange");break;case"textarea":gr(e,n),Rn("invalid",e),Dr(o,"onChange")}for(var a in Mr(t,n,Ar),r=null,n)if(n.hasOwnProperty(a)){var i=n[a];"children"===a?"string"==typeof i?e.textContent!==i&&(r=["children",i]):"number"==typeof i&&e.textContent!==""+i&&(r=["children",""+i]):_.hasOwnProperty(a)&&null!=i&&Dr(o,a)}switch(t){case"input":rt(e),Mt(e,n);break;case"textarea":rt(e),wr(e);break;case"select":case"option":break;default:"function"==typeof n.onClick&&(e.onclick=l)}return r}function Br(e,t){return e.nodeValue!==t}var Hr={createElement:Ir,createTextNode:Ur,setInitialProperties:Fr,diffProperties:Vr,updateProperties:zr,diffHydratedProperties:Wr,diffHydratedText:Br,warnForUnmatchedText:function(){},warnForDeletedHydratableElement:function(){},warnForDeletedHydratableText:function(){},warnForInsertedHydratedElement:function(){},warnForInsertedHydratedText:function(){},restoreControlledState:function(e,t,n){switch(t){case"input":if(Nt(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=q(r);o||p("90"),ot(r),Nt(r,o)}}}break;case"textarea":_r(e,n);break;case"select":null!=(t=n.value)&&vr(e,!!n.multiple,t,!1)}}},qr=null,Yr=null;function $r(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Gr(e,t){return"textarea"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&"string"==typeof t.dangerouslySetInnerHTML.__html}var Kr=Jn,Qr=Xn,Jr=Zn;function Xr(e){for(e=e.nextSibling;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}function Zr(e){for(e=e.firstChild;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}new Set;var eo=[],to=-1;function no(e){return{current:e}}function ro(e){0>to||(e.current=eo[to],eo[to]=null,to--)}function oo(e,t){eo[++to]=e.current,e.current=t}var ao=no(f),io=no(!1),lo=f;function uo(e){return co(e)?lo:ao.current}function so(e,t){var n=e.type.contextTypes;if(!n)return f;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,a={};for(o in n)a[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function co(e){return 2===e.tag&&null!=e.type.childContextTypes}function fo(e){co(e)&&(ro(io),ro(ao))}function po(e){ro(io),ro(ao)}function ho(e,t,n){ao.current!==f&&p("168"),oo(ao,t),oo(io,n)}function yo(e,t){var n=e.stateNode,r=e.type.childContextTypes;if("function"!=typeof n.getChildContext)return t;for(var o in n=n.getChildContext())o in r||p("108",gt(e)||"Unknown",o);return i({},t,n)}function vo(e){if(!co(e))return!1;var t=e.stateNode;return t=t&&t.__reactInternalMemoizedMergedChildContext||f,lo=ao.current,oo(ao,t),oo(io,io.current),!0}function mo(e,t){var n=e.stateNode;if(n||p("169"),t){var r=yo(e,lo);n.__reactInternalMemoizedMergedChildContext=r,ro(io),ro(ao),oo(ao,r)}else ro(io);oo(io,t)}function bo(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=null,this.index=0,this.ref=null,this.pendingProps=t,this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.expirationTime=0,this.alternate=null}function go(e,t,n){var r=e.alternate;return null===r?((r=new bo(e.tag,t,e.key,e.mode)).type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.effectTag=0,r.nextEffect=null,r.firstEffect=null,r.lastEffect=null),r.expirationTime=n,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function _o(e,t,n){var r=e.type,o=e.key;if(e=e.props,"function"==typeof r)var a=r.prototype&&r.prototype.isReactComponent?2:0;else if("string"==typeof r)a=5;else switch(r){case st:return wo(e.children,t,n,o);case ht:a=11,t|=3;break;case ct:a=11,t|=2;break;case ft:return(r=new bo(15,e,o,4|t)).type=ft,r.expirationTime=n,r;case vt:a=16,t|=2;break;default:e:{switch("object"==typeof r&&null!==r?r.$$typeof:null){case pt:a=13;break e;case dt:a=12;break e;case yt:a=14;break e;default:p("130",null==r?r:typeof r,"")}a=void 0}}return(t=new bo(a,e,o,t)).type=r,t.expirationTime=n,t}function wo(e,t,n,r){return(e=new bo(10,e,r,t)).expirationTime=n,e}function Eo(e,t,n){return(e=new bo(6,e,null,t)).expirationTime=n,e}function Po(e,t,n){return(t=new bo(4,null!==e.children?e.children:[],e.key,t)).expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Oo(e,t,n){return e={current:t=new bo(3,null,null,t?3:0),containerInfo:e,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,pendingCommitExpirationTime:0,finishedWork:null,context:null,pendingContext:null,hydrate:n,remainingExpirationTime:0,firstBatch:null,nextScheduledRoot:null},t.stateNode=e}var ko=null,So=null;function xo(e){return function(t){try{return e(t)}catch(e){}}}function jo(e){"function"==typeof ko&&ko(e)}function Co(e){"function"==typeof So&&So(e)}var To=!1;function Ro(e){return{expirationTime:0,baseState:e,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function No(e){return{expirationTime:e.expirationTime,baseState:e.baseState,firstUpdate:e.firstUpdate,lastUpdate:e.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Mo(e){return{expirationTime:e,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Lo(e,t,n){null===e.lastUpdate?e.firstUpdate=e.lastUpdate=t:(e.lastUpdate.next=t,e.lastUpdate=t),(0===e.expirationTime||e.expirationTime>n)&&(e.expirationTime=n)}function Ao(e,t,n){var r=e.alternate;if(null===r){var o=e.updateQueue,a=null;null===o&&(o=e.updateQueue=Ro(e.memoizedState))}else o=e.updateQueue,a=r.updateQueue,null===o?null===a?(o=e.updateQueue=Ro(e.memoizedState),a=r.updateQueue=Ro(r.memoizedState)):o=e.updateQueue=No(a):null===a&&(a=r.updateQueue=No(o));null===a||o===a?Lo(o,t,n):null===o.lastUpdate||null===a.lastUpdate?(Lo(o,t,n),Lo(a,t,n)):(Lo(o,t,n),a.lastUpdate=t)}function Do(e,t,n){var r=e.updateQueue;null===(r=null===r?e.updateQueue=Ro(e.memoizedState):Io(e,r)).lastCapturedUpdate?r.firstCapturedUpdate=r.lastCapturedUpdate=t:(r.lastCapturedUpdate.next=t,r.lastCapturedUpdate=t),(0===r.expirationTime||r.expirationTime>n)&&(r.expirationTime=n)}function Io(e,t){var n=e.alternate;return null!==n&&t===n.updateQueue&&(t=e.updateQueue=No(t)),t}function Uo(e,t,n,r,o,a){switch(n.tag){case 1:return"function"==typeof(e=n.payload)?e.call(a,r,o):e;case 3:e.effectTag=-1025&e.effectTag|64;case 0:if(null===(o="function"==typeof(e=n.payload)?e.call(a,r,o):e)||void 0===o)break;return i({},r,o);case 2:To=!0}return r}function Fo(e,t,n,r,o){if(To=!1,!(0===t.expirationTime||t.expirationTime>o)){for(var a=(t=Io(e,t)).baseState,i=null,l=0,u=t.firstUpdate,s=a;null!==u;){var c=u.expirationTime;c>o?(null===i&&(i=u,a=s),(0===l||l>c)&&(l=c)):(s=Uo(e,0,u,s,n,r),null!==u.callback&&(e.effectTag|=32,u.nextEffect=null,null===t.lastEffect?t.firstEffect=t.lastEffect=u:(t.lastEffect.nextEffect=u,t.lastEffect=u))),u=u.next}for(c=null,u=t.firstCapturedUpdate;null!==u;){var f=u.expirationTime;f>o?(null===c&&(c=u,null===i&&(a=s)),(0===l||l>f)&&(l=f)):(s=Uo(e,0,u,s,n,r),null!==u.callback&&(e.effectTag|=32,u.nextEffect=null,null===t.lastCapturedEffect?t.firstCapturedEffect=t.lastCapturedEffect=u:(t.lastCapturedEffect.nextEffect=u,t.lastCapturedEffect=u))),u=u.next}null===i&&(t.lastUpdate=null),null===c?t.lastCapturedUpdate=null:e.effectTag|=32,null===i&&null===c&&(a=s),t.baseState=a,t.firstUpdate=i,t.firstCapturedUpdate=c,t.expirationTime=l,e.memoizedState=s}}function Vo(e,t){"function"!=typeof e&&p("191",e),e.call(t)}function zo(e,t,n){for(null!==t.firstCapturedUpdate&&(null!==t.lastUpdate&&(t.lastUpdate.next=t.firstCapturedUpdate,t.lastUpdate=t.lastCapturedUpdate),t.firstCapturedUpdate=t.lastCapturedUpdate=null),e=t.firstEffect,t.firstEffect=t.lastEffect=null;null!==e;){var r=e.callback;null!==r&&(e.callback=null,Vo(r,n)),e=e.nextEffect}for(e=t.firstCapturedEffect,t.firstCapturedEffect=t.lastCapturedEffect=null;null!==e;)null!==(t=e.callback)&&(e.callback=null,Vo(t,n)),e=e.nextEffect}function Wo(e,t){return{value:e,source:t,stack:_t(t)}}var Bo=no(null),Ho=no(null),qo=no(0);function Yo(e){var t=e.type._context;oo(qo,t._changedBits),oo(Ho,t._currentValue),oo(Bo,e),t._currentValue=e.pendingProps.value,t._changedBits=e.stateNode}function $o(e){var t=qo.current,n=Ho.current;ro(Bo),ro(Ho),ro(qo),(e=e.type._context)._currentValue=n,e._changedBits=t}var Go={},Ko=no(Go),Qo=no(Go),Jo=no(Go);function Xo(e){return e===Go&&p("174"),e}function Zo(e,t){oo(Jo,t),oo(Qo,e),oo(Ko,Go);var n=t.nodeType;switch(n){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Or(null,"");break;default:t=Or(t=(n=8===n?t.parentNode:t).namespaceURI||null,n=n.tagName)}ro(Ko),oo(Ko,t)}function ea(e){ro(Ko),ro(Qo),ro(Jo)}function ta(e){Qo.current===e&&(ro(Ko),ro(Qo))}function na(e,t,n){var r=e.memoizedState;r=null===(t=t(n,r))||void 0===t?r:i({},r,t),e.memoizedState=r,null!==(e=e.updateQueue)&&0===e.expirationTime&&(e.baseState=r)}var ra={isMounted:function(e){return!!(e=e._reactInternalFiber)&&2===an(e)},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=yi(),o=Mo(r=di(r,e));o.payload=t,void 0!==n&&null!==n&&(o.callback=n),Ao(e,o,r),hi(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=yi(),o=Mo(r=di(r,e));o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),Ao(e,o,r),hi(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=yi(),r=Mo(n=di(n,e));r.tag=2,void 0!==t&&null!==t&&(r.callback=t),Ao(e,r,n),hi(e,n)}};function oa(e,t,n,r,o,a){var i=e.stateNode;return e=e.type,"function"==typeof i.shouldComponentUpdate?i.shouldComponentUpdate(n,o,a):!e.prototype||!e.prototype.isPureReactComponent||(!s(t,n)||!s(r,o))}function aa(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ra.enqueueReplaceState(t,t.state,null)}function ia(e,t){var n=e.type,r=e.stateNode,o=e.pendingProps,a=uo(e);r.props=o,r.state=e.memoizedState,r.refs=f,r.context=so(e,a),null!==(a=e.updateQueue)&&(Fo(e,a,o,r,t),r.state=e.memoizedState),"function"==typeof(a=e.type.getDerivedStateFromProps)&&(na(e,a,o),r.state=e.memoizedState),"function"==typeof n.getDerivedStateFromProps||"function"==typeof r.getSnapshotBeforeUpdate||"function"!=typeof r.UNSAFE_componentWillMount&&"function"!=typeof r.componentWillMount||(n=r.state,"function"==typeof r.componentWillMount&&r.componentWillMount(),"function"==typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount(),n!==r.state&&ra.enqueueReplaceState(r,r.state,null),null!==(a=e.updateQueue)&&(Fo(e,a,o,r,t),r.state=e.memoizedState)),"function"==typeof r.componentDidMount&&(e.effectTag|=4)}var la=Array.isArray;function ua(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){var r=void 0;(n=n._owner)&&(2!==n.tag&&p("110"),r=n.stateNode),r||p("147",e);var o=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===o?t.ref:((t=function(e){var t=r.refs===f?r.refs={}:r.refs;null===e?delete t[o]:t[o]=e})._stringRef=o,t)}"string"!=typeof e&&p("148"),n._owner||p("254",e)}return e}function sa(e,t){"textarea"!==e.type&&p("31","[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,"")}function ca(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.effectTag=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t,n){return(e=go(e,t,n)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.effectTag=2,n):r:(t.effectTag=2,n):n}function i(t){return e&&null===t.alternate&&(t.effectTag=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Eo(n,e.mode,r)).return=e,t):((t=o(t,n,r)).return=e,t)}function u(e,t,n,r){return null!==t&&t.type===n.type?((r=o(t,n.props,r)).ref=ua(e,t,n),r.return=e,r):((r=_o(n,e.mode,r)).ref=ua(e,t,n),r.return=e,r)}function s(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Po(n,e.mode,r)).return=e,t):((t=o(t,n.children||[],r)).return=e,t)}function c(e,t,n,r,a){return null===t||10!==t.tag?((t=wo(n,e.mode,r,a)).return=e,t):((t=o(t,n,r)).return=e,t)}function f(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=Eo(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case lt:return(n=_o(t,e.mode,n)).ref=ua(e,null,t),n.return=e,n;case ut:return(t=Po(t,e.mode,n)).return=e,t}if(la(t)||bt(t))return(t=wo(t,e.mode,n,null)).return=e,t;sa(e,t)}return null}function d(e,t,n,r){var o=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==o?null:l(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case lt:return n.key===o?n.type===st?c(e,t,n.props.children,r,o):u(e,t,n,r):null;case ut:return n.key===o?s(e,t,n,r):null}if(la(n)||bt(n))return null!==o?null:c(e,t,n,r,null);sa(e,n)}return null}function h(e,t,n,r,o){if("string"==typeof r||"number"==typeof r)return l(t,e=e.get(n)||null,""+r,o);if("object"==typeof r&&null!==r){switch(r.$$typeof){case lt:return e=e.get(null===r.key?n:r.key)||null,r.type===st?c(t,e,r.props.children,o,r.key):u(t,e,r,o);case ut:return s(t,e=e.get(null===r.key?n:r.key)||null,r,o)}if(la(r)||bt(r))return c(t,e=e.get(n)||null,r,o,null);sa(t,r)}return null}function y(o,i,l,u){for(var s=null,c=null,p=i,y=i=0,v=null;null!==p&&y<l.length;y++){p.index>y?(v=p,p=null):v=p.sibling;var m=d(o,p,l[y],u);if(null===m){null===p&&(p=v);break}e&&p&&null===m.alternate&&t(o,p),i=a(m,i,y),null===c?s=m:c.sibling=m,c=m,p=v}if(y===l.length)return n(o,p),s;if(null===p){for(;y<l.length;y++)(p=f(o,l[y],u))&&(i=a(p,i,y),null===c?s=p:c.sibling=p,c=p);return s}for(p=r(o,p);y<l.length;y++)(v=h(p,o,y,l[y],u))&&(e&&null!==v.alternate&&p.delete(null===v.key?y:v.key),i=a(v,i,y),null===c?s=v:c.sibling=v,c=v);return e&&p.forEach(function(e){return t(o,e)}),s}function v(o,i,l,u){var s=bt(l);"function"!=typeof s&&p("150"),null==(l=s.call(l))&&p("151");for(var c=s=null,y=i,v=i=0,m=null,b=l.next();null!==y&&!b.done;v++,b=l.next()){y.index>v?(m=y,y=null):m=y.sibling;var g=d(o,y,b.value,u);if(null===g){y||(y=m);break}e&&y&&null===g.alternate&&t(o,y),i=a(g,i,v),null===c?s=g:c.sibling=g,c=g,y=m}if(b.done)return n(o,y),s;if(null===y){for(;!b.done;v++,b=l.next())null!==(b=f(o,b.value,u))&&(i=a(b,i,v),null===c?s=b:c.sibling=b,c=b);return s}for(y=r(o,y);!b.done;v++,b=l.next())null!==(b=h(y,o,v,b.value,u))&&(e&&null!==b.alternate&&y.delete(null===b.key?v:b.key),i=a(b,i,v),null===c?s=b:c.sibling=b,c=b);return e&&y.forEach(function(e){return t(o,e)}),s}return function(e,r,a,l){"object"==typeof a&&null!==a&&a.type===st&&null===a.key&&(a=a.props.children);var u="object"==typeof a&&null!==a;if(u)switch(a.$$typeof){case lt:e:{var s=a.key;for(u=r;null!==u;){if(u.key===s){if(10===u.tag?a.type===st:u.type===a.type){n(e,u.sibling),(r=o(u,a.type===st?a.props.children:a.props,l)).ref=ua(e,u,a),r.return=e,e=r;break e}n(e,u);break}t(e,u),u=u.sibling}a.type===st?((r=wo(a.props.children,e.mode,l,a.key)).return=e,e=r):((l=_o(a,e.mode,l)).ref=ua(e,r,a),l.return=e,e=l)}return i(e);case ut:e:{for(u=a.key;null!==r;){if(r.key===u){if(4===r.tag&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),(r=o(r,a.children||[],l)).return=e,e=r;break e}n(e,r);break}t(e,r),r=r.sibling}(r=Po(a,e.mode,l)).return=e,e=r}return i(e)}if("string"==typeof a||"number"==typeof a)return a=""+a,null!==r&&6===r.tag?(n(e,r.sibling),(r=o(r,a,l)).return=e,e=r):(n(e,r),(r=Eo(a,e.mode,l)).return=e,e=r),i(e);if(la(a))return y(e,r,a,l);if(bt(a))return v(e,r,a,l);if(u&&sa(e,a),void 0===a)switch(e.tag){case 2:case 1:p("152",(l=e.type).displayName||l.name||"Component")}return n(e,r)}}var fa=ca(!0),pa=ca(!1),da=null,ha=null,ya=!1;function va(e,t){var n=new bo(5,null,null,0);n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function ma(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);default:return!1}}function ba(e){if(ya){var t=ha;if(t){var n=t;if(!ma(e,t)){if(!(t=Xr(n))||!ma(e,t))return e.effectTag|=2,ya=!1,void(da=e);va(da,n)}da=e,ha=Zr(t)}else e.effectTag|=2,ya=!1,da=e}}function ga(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag;)e=e.return;da=e}function _a(e){if(e!==da)return!1;if(!ya)return ga(e),ya=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!Gr(t,e.memoizedProps))for(t=ha;t;)va(e,t),t=Xr(t);return ga(e),ha=da?Xr(e.stateNode):null,!0}function wa(){ha=da=null,ya=!1}function Ea(e,t,n){Pa(e,t,n,t.expirationTime)}function Pa(e,t,n,r){t.child=null===e?pa(t,null,n,r):fa(t,e.child,n,r)}function Oa(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.effectTag|=128)}function ka(e,t,n,r,o){Oa(e,t);var a=0!=(64&t.effectTag);if(!n&&!a)return r&&mo(t,!1),ja(e,t);n=t.stateNode,at.current=t;var i=a?null:n.render();return t.effectTag|=1,a&&(Pa(e,t,null,o),t.child=null),Pa(e,t,i,o),t.memoizedState=n.state,t.memoizedProps=n.props,r&&mo(t,!0),t.child}function Sa(e){var t=e.stateNode;t.pendingContext?ho(0,t.pendingContext,t.pendingContext!==t.context):t.context&&ho(0,t.context,!1),Zo(e,t.containerInfo)}function xa(e,t,n,r){var o=e.child;for(null!==o&&(o.return=e);null!==o;){switch(o.tag){case 12:var a=0|o.stateNode;if(o.type===t&&0!=(a&n)){for(a=o;null!==a;){var i=a.alternate;if(0===a.expirationTime||a.expirationTime>r)a.expirationTime=r,null!==i&&(0===i.expirationTime||i.expirationTime>r)&&(i.expirationTime=r);else{if(null===i||!(0===i.expirationTime||i.expirationTime>r))break;i.expirationTime=r}a=a.return}a=null}else a=o.child;break;case 13:a=o.type===e.type?null:o.child;break;default:a=o.child}if(null!==a)a.return=o;else for(a=o;null!==a;){if(a===e){a=null;break}if(null!==(o=a.sibling)){o.return=a.return,a=o;break}a=a.return}o=a}}function ja(e,t){if(null!==e&&t.child!==e.child&&p("153"),null!==t.child){var n=go(e=t.child,e.pendingProps,e.expirationTime);for(t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=go(e,e.pendingProps,e.expirationTime)).return=t;n.sibling=null}return t.child}function Ca(e,t,n){if(0===t.expirationTime||t.expirationTime>n){switch(t.tag){case 3:Sa(t);break;case 2:vo(t);break;case 4:Zo(t,t.stateNode.containerInfo);break;case 13:Yo(t)}return null}switch(t.tag){case 0:null!==e&&p("155");var r=t.type,o=t.pendingProps,a=uo(t);return r=r(o,a=so(t,a)),t.effectTag|=1,"object"==typeof r&&null!==r&&"function"==typeof r.render&&void 0===r.$$typeof?(a=t.type,t.tag=2,t.memoizedState=null!==r.state&&void 0!==r.state?r.state:null,"function"==typeof(a=a.getDerivedStateFromProps)&&na(t,a,o),o=vo(t),r.updater=ra,t.stateNode=r,r._reactInternalFiber=t,ia(t,n),e=ka(e,t,!0,o,n)):(t.tag=1,Ea(e,t,r),t.memoizedProps=o,e=t.child),e;case 1:return o=t.type,n=t.pendingProps,io.current||t.memoizedProps!==n?(o=o(n,r=so(t,r=uo(t))),t.effectTag|=1,Ea(e,t,o),t.memoizedProps=n,e=t.child):e=ja(e,t),e;case 2:if(o=vo(t),null===e)if(null===t.stateNode){var i=t.pendingProps,l=t.type;r=uo(t);var u=2===t.tag&&null!=t.type.contextTypes;i=new l(i,a=u?so(t,r):f),t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,i.updater=ra,t.stateNode=i,i._reactInternalFiber=t,u&&((u=t.stateNode).__reactInternalMemoizedUnmaskedChildContext=r,u.__reactInternalMemoizedMaskedChildContext=a),ia(t,n),r=!0}else{l=t.type,r=t.stateNode,u=t.memoizedProps,a=t.pendingProps,r.props=u;var s=r.context;i=so(t,i=uo(t));var c=l.getDerivedStateFromProps;(l="function"==typeof c||"function"==typeof r.getSnapshotBeforeUpdate)||"function"!=typeof r.UNSAFE_componentWillReceiveProps&&"function"!=typeof r.componentWillReceiveProps||(u!==a||s!==i)&&aa(t,r,a,i),To=!1;var d=t.memoizedState;s=r.state=d;var h=t.updateQueue;null!==h&&(Fo(t,h,a,r,n),s=t.memoizedState),u!==a||d!==s||io.current||To?("function"==typeof c&&(na(t,c,a),s=t.memoizedState),(u=To||oa(t,u,a,d,s,i))?(l||"function"!=typeof r.UNSAFE_componentWillMount&&"function"!=typeof r.componentWillMount||("function"==typeof r.componentWillMount&&r.componentWillMount(),"function"==typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount()),"function"==typeof r.componentDidMount&&(t.effectTag|=4)):("function"==typeof r.componentDidMount&&(t.effectTag|=4),t.memoizedProps=a,t.memoizedState=s),r.props=a,r.state=s,r.context=i,r=u):("function"==typeof r.componentDidMount&&(t.effectTag|=4),r=!1)}else l=t.type,r=t.stateNode,a=t.memoizedProps,u=t.pendingProps,r.props=a,s=r.context,i=so(t,i=uo(t)),(l="function"==typeof(c=l.getDerivedStateFromProps)||"function"==typeof r.getSnapshotBeforeUpdate)||"function"!=typeof r.UNSAFE_componentWillReceiveProps&&"function"!=typeof r.componentWillReceiveProps||(a!==u||s!==i)&&aa(t,r,u,i),To=!1,s=t.memoizedState,d=r.state=s,null!==(h=t.updateQueue)&&(Fo(t,h,u,r,n),d=t.memoizedState),a!==u||s!==d||io.current||To?("function"==typeof c&&(na(t,c,u),d=t.memoizedState),(c=To||oa(t,a,u,s,d,i))?(l||"function"!=typeof r.UNSAFE_componentWillUpdate&&"function"!=typeof r.componentWillUpdate||("function"==typeof r.componentWillUpdate&&r.componentWillUpdate(u,d,i),"function"==typeof r.UNSAFE_componentWillUpdate&&r.UNSAFE_componentWillUpdate(u,d,i)),"function"==typeof r.componentDidUpdate&&(t.effectTag|=4),"function"==typeof r.getSnapshotBeforeUpdate&&(t.effectTag|=256)):("function"!=typeof r.componentDidUpdate||a===e.memoizedProps&&s===e.memoizedState||(t.effectTag|=4),"function"!=typeof r.getSnapshotBeforeUpdate||a===e.memoizedProps&&s===e.memoizedState||(t.effectTag|=256),t.memoizedProps=u,t.memoizedState=d),r.props=u,r.state=d,r.context=i,r=c):("function"!=typeof r.componentDidUpdate||a===e.memoizedProps&&s===e.memoizedState||(t.effectTag|=4),"function"!=typeof r.getSnapshotBeforeUpdate||a===e.memoizedProps&&s===e.memoizedState||(t.effectTag|=256),r=!1);return ka(e,t,r,o,n);case 3:return Sa(t),null!==(o=t.updateQueue)?(r=null!==(r=t.memoizedState)?r.element:null,Fo(t,o,t.pendingProps,null,n),(o=t.memoizedState.element)===r?(wa(),e=ja(e,t)):(r=t.stateNode,(r=(null===e||null===e.child)&&r.hydrate)&&(ha=Zr(t.stateNode.containerInfo),da=t,r=ya=!0),r?(t.effectTag|=2,t.child=pa(t,null,o,n)):(wa(),Ea(e,t,o)),e=t.child)):(wa(),e=ja(e,t)),e;case 5:return Xo(Jo.current),(o=Xo(Ko.current))!==(r=Or(o,t.type))&&(oo(Qo,t),oo(Ko,r)),null===e&&ba(t),o=t.type,u=t.memoizedProps,r=t.pendingProps,a=null!==e?e.memoizedProps:null,io.current||u!==r||((u=1&t.mode&&!!r.hidden)&&(t.expirationTime=1073741823),u&&1073741823===n)?(u=r.children,Gr(o,r)?u=null:a&&Gr(o,a)&&(t.effectTag|=16),Oa(e,t),1073741823!==n&&1&t.mode&&r.hidden?(t.expirationTime=1073741823,t.memoizedProps=r,e=null):(Ea(e,t,u),t.memoizedProps=r,e=t.child)):e=ja(e,t),e;case 6:return null===e&&ba(t),t.memoizedProps=t.pendingProps,null;case 16:return null;case 4:return Zo(t,t.stateNode.containerInfo),o=t.pendingProps,io.current||t.memoizedProps!==o?(null===e?t.child=fa(t,null,o,n):Ea(e,t,o),t.memoizedProps=o,e=t.child):e=ja(e,t),e;case 14:return o=t.type.render,n=t.pendingProps,r=t.ref,io.current||t.memoizedProps!==n||r!==(null!==e?e.ref:null)?(Ea(e,t,o=o(n,r)),t.memoizedProps=n,e=t.child):e=ja(e,t),e;case 10:return n=t.pendingProps,io.current||t.memoizedProps!==n?(Ea(e,t,n),t.memoizedProps=n,e=t.child):e=ja(e,t),e;case 11:return n=t.pendingProps.children,io.current||null!==n&&t.memoizedProps!==n?(Ea(e,t,n),t.memoizedProps=n,e=t.child):e=ja(e,t),e;case 15:return n=t.pendingProps,t.memoizedProps===n?e=ja(e,t):(Ea(e,t,n.children),t.memoizedProps=n,e=t.child),e;case 13:return function(e,t,n){var r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=!0;if(io.current)i=!1;else if(a===o)return t.stateNode=0,Yo(t),ja(e,t);var l=o.value;if(t.memoizedProps=o,null===a)l=1073741823;else if(a.value===o.value){if(a.children===o.children&&i)return t.stateNode=0,Yo(t),ja(e,t);l=0}else{var u=a.value;if(u===l&&(0!==u||1/u==1/l)||u!=u&&l!=l){if(a.children===o.children&&i)return t.stateNode=0,Yo(t),ja(e,t);l=0}else if(l="function"==typeof r._calculateChangedBits?r._calculateChangedBits(u,l):1073741823,0==(l|=0)){if(a.children===o.children&&i)return t.stateNode=0,Yo(t),ja(e,t)}else xa(t,r,l,n)}return t.stateNode=l,Yo(t),Ea(e,t,o.children),t.child}(e,t,n);case 12:e:if(r=t.type,a=t.pendingProps,u=t.memoizedProps,o=r._currentValue,i=r._changedBits,io.current||0!==i||u!==a){if(t.memoizedProps=a,void 0!==(l=a.unstable_observedBits)&&null!==l||(l=1073741823),t.stateNode=l,0!=(i&l))xa(t,r,i,n);else if(u===a){e=ja(e,t);break e}n=(n=a.children)(o),t.effectTag|=1,Ea(e,t,n),e=t.child}else e=ja(e,t);return e;default:p("156")}}function Ta(e){e.effectTag|=4}var Ra=void 0,Na=void 0,Ma=void 0;function La(e,t){var n=t.pendingProps;switch(t.tag){case 1:return null;case 2:return fo(t),null;case 3:ea(),po();var r=t.stateNode;return r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(_a(t),t.effectTag&=-3),Ra(t),null;case 5:ta(t),r=Xo(Jo.current);var o=t.type;if(null!==e&&null!=t.stateNode){var a=e.memoizedProps,i=t.stateNode,l=Xo(Ko.current);i=Vr(i,o,a,n,r),Na(e,t,i,o,a,n,r,l),e.ref!==t.ref&&(t.effectTag|=128)}else{if(!n)return null===t.stateNode&&p("166"),null;if(e=Xo(Ko.current),_a(t))n=t.stateNode,o=t.type,a=t.memoizedProps,n[z]=t,n[W]=a,r=Wr(n,o,a,e,r),t.updateQueue=r,null!==r&&Ta(t);else{(e=Ir(o,n,r,e))[z]=t,e[W]=n;e:for(a=t.child;null!==a;){if(5===a.tag||6===a.tag)e.appendChild(a.stateNode);else if(4!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===t)break;for(;null===a.sibling;){if(null===a.return||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}Fr(e,o,n,r),$r(o,n)&&Ta(t),t.stateNode=e}null!==t.ref&&(t.effectTag|=128)}return null;case 6:if(e&&null!=t.stateNode)Ma(e,t,e.memoizedProps,n);else{if("string"!=typeof n)return null===t.stateNode&&p("166"),null;r=Xo(Jo.current),Xo(Ko.current),_a(t)?(r=t.stateNode,n=t.memoizedProps,r[z]=t,Br(r,n)&&Ta(t)):((r=Ur(n,r))[z]=t,t.stateNode=r)}return null;case 14:case 16:case 10:case 11:case 15:return null;case 4:return ea(),Ra(t),null;case 13:return $o(t),null;case 12:return null;case 0:p("167");default:p("156")}}function Aa(e,t){var n=t.source;null===t.stack&&null!==n&&_t(n),null!==n&&gt(n),t=t.value,null!==e&&2===e.tag&&gt(e);try{t&&t.suppressReactErrorLogging||console.error(t)}catch(e){e&&e.suppressReactErrorLogging||console.error(e)}}function Da(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){fi(e,t)}else t.current=null}function Ia(e){switch(Co(e),e.tag){case 2:Da(e);var t=e.stateNode;if("function"==typeof t.componentWillUnmount)try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(t){fi(e,t)}break;case 5:Da(e);break;case 4:Va(e)}}function Ua(e){return 5===e.tag||3===e.tag||4===e.tag}function Fa(e){e:{for(var t=e.return;null!==t;){if(Ua(t)){var n=t;break e}t=t.return}p("160"),n=void 0}var r=t=void 0;switch(n.tag){case 5:t=n.stateNode,r=!1;break;case 3:case 4:t=n.stateNode.containerInfo,r=!0;break;default:p("161")}16&n.effectTag&&(jr(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||Ua(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag;){if(2&n.effectTag)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break e}}for(var o=e;;){if(5===o.tag||6===o.tag)if(n)if(r){var a=t,i=o.stateNode,l=n;8===a.nodeType?a.parentNode.insertBefore(i,l):a.insertBefore(i,l)}else t.insertBefore(o.stateNode,n);else r?(a=t,i=o.stateNode,8===a.nodeType?a.parentNode.insertBefore(i,a):a.appendChild(i)):t.appendChild(o.stateNode);else if(4!==o.tag&&null!==o.child){o.child.return=o,o=o.child;continue}if(o===e)break;for(;null===o.sibling;){if(null===o.return||o.return===e)return;o=o.return}o.sibling.return=o.return,o=o.sibling}}function Va(e){for(var t=e,n=!1,r=void 0,o=void 0;;){if(!n){n=t.return;e:for(;;){switch(null===n&&p("160"),n.tag){case 5:r=n.stateNode,o=!1;break e;case 3:case 4:r=n.stateNode.containerInfo,o=!0;break e}n=n.return}n=!0}if(5===t.tag||6===t.tag){e:for(var a=t,i=a;;)if(Ia(i),null!==i.child&&4!==i.tag)i.child.return=i,i=i.child;else{if(i===a)break;for(;null===i.sibling;){if(null===i.return||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}o?(a=r,i=t.stateNode,8===a.nodeType?a.parentNode.removeChild(i):a.removeChild(i)):r.removeChild(t.stateNode)}else if(4===t.tag?r=t.stateNode.containerInfo:Ia(t),null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return;4===(t=t.return).tag&&(n=!1)}t.sibling.return=t.return,t=t.sibling}}function za(e,t){switch(t.tag){case 2:break;case 5:var n=t.stateNode;if(null!=n){var r=t.memoizedProps;e=null!==e?e.memoizedProps:r;var o=t.type,a=t.updateQueue;t.updateQueue=null,null!==a&&(n[W]=r,zr(n,a,o,e,r))}break;case 6:null===t.stateNode&&p("162"),t.stateNode.nodeValue=t.memoizedProps;break;case 3:case 15:case 16:break;default:p("163")}}function Wa(e,t,n){(n=Mo(n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gi(r),Aa(e,t)},n}function Ba(e,t,n){(n=Mo(n)).tag=3;var r=e.stateNode;return null!==r&&"function"==typeof r.componentDidCatch&&(n.callback=function(){null===ii?ii=new Set([this]):ii.add(this);var n=t.value,r=t.stack;Aa(e,t),this.componentDidCatch(n,{componentStack:null!==r?r:""})}),n}function Ha(e,t,n,r,o,a){n.effectTag|=512,n.firstEffect=n.lastEffect=null,r=Wo(r,n),e=t;do{switch(e.tag){case 3:return e.effectTag|=1024,void Do(e,r=Wa(e,r,a),a);case 2:if(t=r,n=e.stateNode,0==(64&e.effectTag)&&null!==n&&"function"==typeof n.componentDidCatch&&(null===ii||!ii.has(n)))return e.effectTag|=1024,void Do(e,r=Ba(e,t,a),a)}e=e.return}while(null!==e)}function qa(e){switch(e.tag){case 2:fo(e);var t=e.effectTag;return 1024&t?(e.effectTag=-1025&t|64,e):null;case 3:return ea(),po(),1024&(t=e.effectTag)?(e.effectTag=-1025&t|64,e):null;case 5:return ta(e),null;case 16:return 1024&(t=e.effectTag)?(e.effectTag=-1025&t|64,e):null;case 4:return ea(),null;case 13:return $o(e),null;default:return null}}Ra=function(){},Na=function(e,t,n){(t.updateQueue=n)&&Ta(t)},Ma=function(e,t,n,r){n!==r&&Ta(t)};var Ya=Kr(),$a=2,Ga=Ya,Ka=0,Qa=0,Ja=!1,Xa=null,Za=null,ei=0,ti=-1,ni=!1,ri=null,oi=!1,ai=!1,ii=null;function li(){if(null!==Xa)for(var e=Xa.return;null!==e;){var t=e;switch(t.tag){case 2:fo(t);break;case 3:ea(),po();break;case 5:ta(t);break;case 4:ea();break;case 13:$o(t)}e=e.return}Za=null,ei=0,ti=-1,ni=!1,Xa=null,ai=!1}function ui(e){for(;;){var t=e.alternate,n=e.return,r=e.sibling;if(0==(512&e.effectTag)){t=La(t,e);var o=e;if(1073741823===ei||1073741823!==o.expirationTime){var a=0;switch(o.tag){case 3:case 2:var i=o.updateQueue;null!==i&&(a=i.expirationTime)}for(i=o.child;null!==i;)0!==i.expirationTime&&(0===a||a>i.expirationTime)&&(a=i.expirationTime),i=i.sibling;o.expirationTime=a}if(null!==t)return t;if(null!==n&&0==(512&n.effectTag)&&(null===n.firstEffect&&(n.firstEffect=e.firstEffect),null!==e.lastEffect&&(null!==n.lastEffect&&(n.lastEffect.nextEffect=e.firstEffect),n.lastEffect=e.lastEffect),1<e.effectTag&&(null!==n.lastEffect?n.lastEffect.nextEffect=e:n.firstEffect=e,n.lastEffect=e)),null!==r)return r;if(null===n){ai=!0;break}e=n}else{if(null!==(e=qa(e)))return e.effectTag&=511,e;if(null!==n&&(n.firstEffect=n.lastEffect=null,n.effectTag|=512),null!==r)return r;if(null===n)break;e=n}}return null}function si(e){var t=Ca(e.alternate,e,ei);return null===t&&(t=ui(e)),at.current=null,t}function ci(e,t,n){Ja&&p("243"),Ja=!0,t===ei&&e===Za&&null!==Xa||(li(),ei=t,ti=-1,Xa=go((Za=e).current,null,ei),e.pendingCommitExpirationTime=0);var r=!1;for(ni=!n||ei<=$a;;){try{if(n)for(;null!==Xa&&!$i();)Xa=si(Xa);else for(;null!==Xa;)Xa=si(Xa)}catch(t){if(null===Xa)r=!0,Gi(t);else{null===Xa&&p("271");var o=(n=Xa).return;if(null===o){r=!0,Gi(t);break}Ha(e,o,n,t,0,ei),Xa=ui(n)}}break}if(Ja=!1,r)return null;if(null===Xa){if(ai)return e.pendingCommitExpirationTime=t,e.current.alternate;ni&&p("262"),0<=ti&&setTimeout(function(){var t=e.current.expirationTime;0!==t&&(0===e.remainingExpirationTime||e.remainingExpirationTime<t)&&Ui(e,t)},ti),function(e){null===Pi&&p("246"),Pi.remainingExpirationTime=e}(e.current.expirationTime)}return null}function fi(e,t){var n;e:{for(Ja&&!oi&&p("263"),n=e.return;null!==n;){switch(n.tag){case 2:var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromCatch||"function"==typeof r.componentDidCatch&&(null===ii||!ii.has(r))){Ao(n,e=Ba(n,e=Wo(t,e),1),1),hi(n,1),n=void 0;break e}break;case 3:Ao(n,e=Wa(n,e=Wo(t,e),1),1),hi(n,1),n=void 0;break e}n=n.return}3===e.tag&&(Ao(e,n=Wa(e,n=Wo(t,e),1),1),hi(e,1)),n=void 0}return n}function pi(){var e=2+25*(1+((yi()-2+500)/25|0));return e<=Ka&&(e=Ka+1),Ka=e}function di(e,t){return e=0!==Qa?Qa:Ja?oi?1:ei:1&t.mode?Ni?2+10*(1+((e-2+15)/10|0)):2+25*(1+((e-2+500)/25|0)):1,Ni&&(0===ki||e>ki)&&(ki=e),e}function hi(e,t){for(;null!==e;){if((0===e.expirationTime||e.expirationTime>t)&&(e.expirationTime=t),null!==e.alternate&&(0===e.alternate.expirationTime||e.alternate.expirationTime>t)&&(e.alternate.expirationTime=t),null===e.return){if(3!==e.tag)break;var n=e.stateNode;!Ja&&0!==ei&&t<ei&&li();var r=n.current.expirationTime;Ja&&!oi&&Za===n||Ui(n,r),Ai>Li&&p("185")}e=e.return}}function yi(){return Ga=Kr()-Ya,$a=2+(Ga/10|0)}function vi(e){var t=Qa;Qa=2+25*(1+((yi()-2+500)/25|0));try{return e()}finally{Qa=t}}function mi(e,t,n,r,o){var a=Qa;Qa=1;try{return e(t,n,r,o)}finally{Qa=a}}var bi=null,gi=null,_i=0,wi=-1,Ei=!1,Pi=null,Oi=0,ki=0,Si=!1,xi=!1,ji=null,Ci=null,Ti=!1,Ri=!1,Ni=!1,Mi=null,Li=1e3,Ai=0,Di=1;function Ii(e){if(0!==_i){if(e>_i)return;Jr(wi)}var t=Kr()-Ya;_i=e,wi=Qr(Vi,{timeout:10*(e-2)-t})}function Ui(e,t){if(null===e.nextScheduledRoot)e.remainingExpirationTime=t,null===gi?(bi=gi=e,e.nextScheduledRoot=e):(gi=gi.nextScheduledRoot=e).nextScheduledRoot=bi;else{var n=e.remainingExpirationTime;(0===n||t<n)&&(e.remainingExpirationTime=t)}Ei||(Ti?Ri&&(Pi=e,Oi=1,qi(e,1,!1)):1===t?zi():Ii(t))}function Fi(){var e=0,t=null;if(null!==gi)for(var n=gi,r=bi;null!==r;){var o=r.remainingExpirationTime;if(0===o){if((null===n||null===gi)&&p("244"),r===r.nextScheduledRoot){bi=gi=r.nextScheduledRoot=null;break}if(r===bi)bi=o=r.nextScheduledRoot,gi.nextScheduledRoot=o,r.nextScheduledRoot=null;else{if(r===gi){(gi=n).nextScheduledRoot=bi,r.nextScheduledRoot=null;break}n.nextScheduledRoot=r.nextScheduledRoot,r.nextScheduledRoot=null}r=n.nextScheduledRoot}else{if((0===e||o<e)&&(e=o,t=r),r===gi)break;n=r,r=r.nextScheduledRoot}}null!==(n=Pi)&&n===t&&1===e?Ai++:Ai=0,Pi=t,Oi=e}function Vi(e){Wi(0,!0,e)}function zi(){Wi(1,!1,null)}function Wi(e,t,n){if(Ci=n,Fi(),t)for(;null!==Pi&&0!==Oi&&(0===e||e>=Oi)&&(!Si||yi()>=Oi);)yi(),qi(Pi,Oi,!Si),Fi();else for(;null!==Pi&&0!==Oi&&(0===e||e>=Oi);)qi(Pi,Oi,!1),Fi();null!==Ci&&(_i=0,wi=-1),0!==Oi&&Ii(Oi),Ci=null,Si=!1,Hi()}function Bi(e,t){Ei&&p("253"),Pi=e,Oi=t,qi(e,t,!1),zi(),Hi()}function Hi(){if(Ai=0,null!==Mi){var e=Mi;Mi=null;for(var t=0;t<e.length;t++){var n=e[t];try{n._onComplete()}catch(e){xi||(xi=!0,ji=e)}}}if(xi)throw e=ji,ji=null,xi=!1,e}function qi(e,t,n){Ei&&p("245"),Ei=!0,n?null!==(n=e.finishedWork)?Yi(e,n,t):(e.finishedWork=null,null!==(n=ci(e,t,!0))&&($i()?e.finishedWork=n:Yi(e,n,t))):null!==(n=e.finishedWork)?Yi(e,n,t):(e.finishedWork=null,null!==(n=ci(e,t,!1))&&Yi(e,n,t)),Ei=!1}function Yi(e,t,n){var r=e.firstBatch;if(null!==r&&r._expirationTime<=n&&(null===Mi?Mi=[r]:Mi.push(r),r._defer))return e.finishedWork=t,void(e.remainingExpirationTime=0);if(e.finishedWork=null,oi=Ja=!0,(n=t.stateNode).current===t&&p("177"),0===(r=n.pendingCommitExpirationTime)&&p("261"),n.pendingCommitExpirationTime=0,yi(),at.current=null,1<t.effectTag)if(null!==t.lastEffect){t.lastEffect.nextEffect=t;var o=t.firstEffect}else o=t;else o=t.firstEffect;qr=Cn;var a=u();if(Wn(a)){if("selectionStart"in a)var i={start:a.selectionStart,end:a.selectionEnd};else e:{var l=window.getSelection&&window.getSelection();if(l&&0!==l.rangeCount){i=l.anchorNode;var s=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{i.nodeType,f.nodeType}catch(e){i=null;break e}var d=0,h=-1,y=-1,v=0,m=0,b=a,g=null;t:for(;;){for(var _;b!==i||0!==s&&3!==b.nodeType||(h=d+s),b!==f||0!==l&&3!==b.nodeType||(y=d+l),3===b.nodeType&&(d+=b.nodeValue.length),null!==(_=b.firstChild);)g=b,b=_;for(;;){if(b===a)break t;if(g===i&&++v===s&&(h=d),g===f&&++m===l&&(y=d),null!==(_=b.nextSibling))break;g=(b=g).parentNode}b=_}i=-1===h||-1===y?null:{start:h,end:y}}else i=null}i=i||{start:0,end:0}}else i=null;for(Yr={focusedElem:a,selectionRange:i},Tn(!1),ri=o;null!==ri;){a=!1,i=void 0;try{for(;null!==ri;){if(256&ri.effectTag){var w=ri.alternate;switch((s=ri).tag){case 2:if(256&s.effectTag&&null!==w){var E=w.memoizedProps,P=w.memoizedState,O=s.stateNode;O.props=s.memoizedProps,O.state=s.memoizedState;var k=O.getSnapshotBeforeUpdate(E,P);O.__reactInternalSnapshotBeforeUpdate=k}break;case 3:case 5:case 6:case 4:break;default:p("163")}}ri=ri.nextEffect}}catch(e){a=!0,i=e}a&&(null===ri&&p("178"),fi(ri,i),null!==ri&&(ri=ri.nextEffect))}for(ri=o;null!==ri;){w=!1,E=void 0;try{for(;null!==ri;){var S=ri.effectTag;if(16&S&&jr(ri.stateNode,""),128&S){var x=ri.alternate;if(null!==x){var j=x.ref;null!==j&&("function"==typeof j?j(null):j.current=null)}}switch(14&S){case 2:Fa(ri),ri.effectTag&=-3;break;case 6:Fa(ri),ri.effectTag&=-3,za(ri.alternate,ri);break;case 4:za(ri.alternate,ri);break;case 8:Va(P=ri),P.return=null,P.child=null,P.alternate&&(P.alternate.child=null,P.alternate.return=null)}ri=ri.nextEffect}}catch(e){w=!0,E=e}w&&(null===ri&&p("178"),fi(ri,E),null!==ri&&(ri=ri.nextEffect))}if(j=Yr,x=u(),S=j.focusedElem,w=j.selectionRange,x!==S&&c(document.documentElement,S)){Wn(S)&&(x=w.start,void 0===(j=w.end)&&(j=x),"selectionStart"in S?(S.selectionStart=x,S.selectionEnd=Math.min(j,S.value.length)):window.getSelection&&(x=window.getSelection(),E=S[he()].length,j=Math.min(w.start,E),w=void 0===w.end?j:Math.min(w.end,E),!x.extend&&j>w&&(E=w,w=j,j=E),E=zn(S,j),P=zn(S,w),E&&P&&(1!==x.rangeCount||x.anchorNode!==E.node||x.anchorOffset!==E.offset||x.focusNode!==P.node||x.focusOffset!==P.offset)&&((O=document.createRange()).setStart(E.node,E.offset),x.removeAllRanges(),j>w?(x.addRange(O),x.extend(P.node,P.offset)):(O.setEnd(P.node,P.offset),x.addRange(O))))),x=[];for(j=S;j=j.parentNode;)1===j.nodeType&&x.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(S.focus(),S=0;S<x.length;S++)(j=x[S]).element.scrollLeft=j.left,j.element.scrollTop=j.top}for(Yr=null,Tn(qr),qr=null,n.current=t,ri=o;null!==ri;){o=!1,S=void 0;try{for(x=r;null!==ri;){var C=ri.effectTag;if(36&C){var T=ri.alternate;switch(w=x,(j=ri).tag){case 2:var R=j.stateNode;if(4&j.effectTag)if(null===T)R.props=j.memoizedProps,R.state=j.memoizedState,R.componentDidMount();else{var N=T.memoizedProps,M=T.memoizedState;R.props=j.memoizedProps,R.state=j.memoizedState,R.componentDidUpdate(N,M,R.__reactInternalSnapshotBeforeUpdate)}var L=j.updateQueue;null!==L&&(R.props=j.memoizedProps,R.state=j.memoizedState,zo(j,L,R));break;case 3:var A=j.updateQueue;if(null!==A){if(E=null,null!==j.child)switch(j.child.tag){case 5:E=j.child.stateNode;break;case 2:E=j.child.stateNode}zo(j,A,E)}break;case 5:var D=j.stateNode;null===T&&4&j.effectTag&&$r(j.type,j.memoizedProps)&&D.focus();break;case 6:case 4:case 15:case 16:break;default:p("163")}}if(128&C){j=void 0;var I=ri.ref;if(null!==I){var U=ri.stateNode;switch(ri.tag){case 5:j=U;break;default:j=U}"function"==typeof I?I(j):I.current=j}}var F=ri.nextEffect;ri.nextEffect=null,ri=F}}catch(e){o=!0,S=e}o&&(null===ri&&p("178"),fi(ri,S),null!==ri&&(ri=ri.nextEffect))}Ja=oi=!1,jo(t.stateNode),0===(t=n.current.expirationTime)&&(ii=null),e.remainingExpirationTime=t}function $i(){return!(null===Ci||Ci.timeRemaining()>Di)&&(Si=!0)}function Gi(e){null===Pi&&p("246"),Pi.remainingExpirationTime=0,xi||(xi=!0,ji=e)}function Ki(e,t){var n=Ti;Ti=!0;try{return e(t)}finally{(Ti=n)||Ei||zi()}}function Qi(e,t){if(Ti&&!Ri){Ri=!0;try{return e(t)}finally{Ri=!1}}return e(t)}function Ji(e,t){Ei&&p("187");var n=Ti;Ti=!0;try{return mi(e,t)}finally{Ti=n,zi()}}function Xi(e){var t=Ti;Ti=!0;try{mi(e)}finally{(Ti=t)||Ei||Wi(1,!1,null)}}function Zi(e,t,n,r,o){var a=t.current;if(n){var i;n=n._reactInternalFiber;e:{for(2===an(n)&&2===n.tag||p("170"),i=n;3!==i.tag;){if(co(i)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}(i=i.return)||p("171")}i=i.stateNode.context}n=co(n)?yo(n,i):i}else n=f;return null===t.context?t.context=n:t.pendingContext=n,t=o,(o=Mo(r)).payload={element:e},null!==(t=void 0===t?null:t)&&(o.callback=t),Ao(a,o,r),hi(a,r),r}function el(e){var t=e._reactInternalFiber;return void 0===t&&("function"==typeof e.render?p("188"):p("268",Object.keys(e))),null===(e=sn(t))?null:e.stateNode}function tl(e,t,n,r){var o=t.current;return Zi(e,t,n,o=di(yi(),o),r)}function nl(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function rl(e){var t=e.findFiberByHostInstance;return function(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);ko=xo(function(e){return t.onCommitFiberRoot(n,e)}),So=xo(function(e){return t.onCommitFiberUnmount(n,e)})}catch(e){}return!0}(i({},e,{findHostInstanceByFiber:function(e){return null===(e=sn(e))?null:e.stateNode},findFiberByHostInstance:function(e){return t?t(e):null}}))}var ol=Ki,al=function(e,t,n){if(Ni)return e(t,n);Ti||Ei||0===ki||(Wi(ki,!1,null),ki=0);var r=Ni,o=Ti;Ti=Ni=!0;try{return e(t,n)}finally{Ni=r,(Ti=o)||Ei||zi()}},il=function(){Ei||0===ki||(Wi(ki,!1,null),ki=0)};function ll(e){this._expirationTime=pi(),this._root=e,this._callbacks=this._next=null,this._hasChildren=this._didComplete=!1,this._children=null,this._defer=!0}function ul(){this._callbacks=null,this._didCommit=!1,this._onCommit=this._onCommit.bind(this)}function sl(e,t,n){this._internalRoot=Oo(e,t,n)}function cl(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function fl(e,t,n,r,o){cl(n)||p("200");var a=n._reactRootContainer;if(a){if("function"==typeof o){var i=o;o=function(){var e=nl(a._internalRoot);i.call(e)}}null!=e?a.legacy_renderSubtreeIntoContainer(e,t,o):a.render(t,o)}else{if(a=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new sl(e,!1,t)}(n,r),"function"==typeof o){var l=o;o=function(){var e=nl(a._internalRoot);l.call(e)}}Qi(function(){null!=e?a.legacy_renderSubtreeIntoContainer(e,t,o):a.render(t,o)})}return nl(a._internalRoot)}function pl(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;return cl(t)||p("200"),function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ut,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)}Fe.injectFiberControlledHostComponent(Hr),ll.prototype.render=function(e){this._defer||p("250"),this._hasChildren=!0,this._children=e;var t=this._root._internalRoot,n=this._expirationTime,r=new ul;return Zi(e,t,null,n,r._onCommit),r},ll.prototype.then=function(e){if(this._didComplete)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},ll.prototype.commit=function(){var e=this._root._internalRoot,t=e.firstBatch;if(this._defer&&null!==t||p("251"),this._hasChildren){var n=this._expirationTime;if(t!==this){this._hasChildren&&(n=this._expirationTime=t._expirationTime,this.render(this._children));for(var r=null,o=t;o!==this;)r=o,o=o._next;null===r&&p("251"),r._next=o._next,this._next=t,e.firstBatch=this}this._defer=!1,Bi(e,n),t=this._next,this._next=null,null!==(t=e.firstBatch=t)&&t._hasChildren&&t.render(t._children)}else this._next=null,this._defer=!1},ll.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++)(0,e[t])()}},ul.prototype.then=function(e){if(this._didCommit)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},ul.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++){var n=e[t];"function"!=typeof n&&p("191",n),n()}}},sl.prototype.render=function(e,t){var n=this._internalRoot,r=new ul;return null!==(t=void 0===t?null:t)&&r.then(t),tl(e,n,null,r._onCommit),r},sl.prototype.unmount=function(e){var t=this._internalRoot,n=new ul;return null!==(e=void 0===e?null:e)&&n.then(e),tl(null,t,null,n._onCommit),n},sl.prototype.legacy_renderSubtreeIntoContainer=function(e,t,n){var r=this._internalRoot,o=new ul;return null!==(n=void 0===n?null:n)&&o.then(n),tl(t,r,e,o._onCommit),o},sl.prototype.createBatch=function(){var e=new ll(this),t=e._expirationTime,n=this._internalRoot,r=n.firstBatch;if(null===r)n.firstBatch=e,e._next=null;else{for(n=null;null!==r&&r._expirationTime<=t;)n=r,r=r._next;e._next=r,null!==n&&(n._next=e)}return e},$e=ol,Ge=al,Ke=il;var dl={createPortal:pl,findDOMNode:function(e){return null==e?null:1===e.nodeType?e:el(e)},hydrate:function(e,t,n){return fl(null,e,t,!0,n)},render:function(e,t,n){return fl(null,e,t,!1,n)},unstable_renderSubtreeIntoContainer:function(e,t,n,r){return(null==e||void 0===e._reactInternalFiber)&&p("38"),fl(e,t,n,!1,r)},unmountComponentAtNode:function(e){return cl(e)||p("40"),!!e._reactRootContainer&&(Qi(function(){fl(null,null,e,!1,function(){e._reactRootContainer=null})}),!0)},unstable_createPortal:function(){return pl.apply(void 0,arguments)},unstable_batchedUpdates:Ki,unstable_deferredUpdates:vi,flushSync:Ji,unstable_flushControlled:Xi,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{EventPluginHub:F,EventPluginRegistry:O,EventPropagators:ne,ReactControlledComponent:Ye,ReactDOMComponentTree:Y,ReactDOMEventListener:An},unstable_createRoot:function(e,t){return new sl(e,!0,null!=t&&!0===t.hydrate)}};rl({findFiberByHostInstance:B,bundleType:0,version:"16.4.0",rendererPackageName:"react-dom"});var hl={default:dl},yl=hl&&dl||hl;e.exports=yl.default?yl.default:yl},function(e,t,n){"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=n(266)},function(e,t,n){"use strict";
/** @license React v16.4.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(90),o=n(50),a=n(89),i=n(49),l="function"==typeof Symbol&&Symbol.for,u=l?Symbol.for("react.element"):60103,s=l?Symbol.for("react.portal"):60106,c=l?Symbol.for("react.fragment"):60107,f=l?Symbol.for("react.strict_mode"):60108,p=l?Symbol.for("react.profiler"):60114,d=l?Symbol.for("react.provider"):60109,h=l?Symbol.for("react.context"):60110,y=l?Symbol.for("react.async_mode"):60111,v=l?Symbol.for("react.forward_ref"):60112;l&&Symbol.for("react.timeout");var m="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);o(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function _(e,t,n){this.props=e,this.context=t,this.refs=a,this.updater=n||g}function w(){}function E(e,t,n){this.props=e,this.context=t,this.refs=a,this.updater=n||g}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&b("85"),this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=_.prototype;var P=E.prototype=new w;P.constructor=E,r(P,_.prototype),P.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r=void 0,o={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:u,type:e,key:a,ref:i,props:o,_owner:O.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var C=/\/+/g,T=[];function R(e,t,n,r){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function M(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case u:case s:a=!0}}if(a)return n(r,e,""===t?"."+L(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=t+L(o=e[i],i);a+=M(o,l,n,r)}else if(null===e||void 0===e?l=null:l="function"==typeof(l=m&&e[m]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(o=e.next()).done;)a+=M(o=o.value,l=t+L(o,i++),n,r);else"object"===o&&b("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return a}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,r,n,i.thatReturnsArgument):null!=e&&(j(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+n,e={$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function I(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(C,"$&/")+"/"),t=R(t,a,r,o),null==e||M(e,"",D,t),N(t)}var U={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return I(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=R(null,null,t,n),null==e||M(e,"",A,t),N(t)},count:function(e){return null==e?0:M(e,"",i.thatReturnsNull,null)},toArray:function(e){var t=[];return I(e,t,null,i.thatReturnsArgument),t},only:function(e){return j(e)||b("143"),e}},createRef:function(){return{current:null}},Component:_,PureComponent:E,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:h,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_currentValue2:e,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:v,render:e}},Fragment:c,StrictMode:f,unstable_AsyncMode:y,unstable_Profiler:p,createElement:x,cloneElement:function(e,t,n){(null===e||void 0===e)&&b("267",e);var o=void 0,a=r({},e.props),i=e.key,l=e.ref,s=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,s=O.current),void 0!==t.key&&(i=""+t.key);var c=void 0;for(o in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)k.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=void 0===t[o]&&void 0!==c?c[o]:t[o])}if(1===(o=arguments.length-2))a.children=n;else if(1<o){c=Array(o);for(var f=0;f<o;f++)c[f]=arguments[f+2];a.children=c}return{$$typeof:u,type:e.type,key:i,ref:l,props:a,_owner:s}},createFactory:function(e){var t=x.bind(null,e);return t.type=e,t},isValidElement:j,version:"16.4.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:O,assign:r}},F={default:U},V=F&&U||F;e.exports=V.default?V.default:V},function(e,t,n){"use strict";var r=s(n(1)),o=s(n(267)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(88)),i=s(n(259)),l=s(n(176)),u=n(9);function s(e){return e&&e.__esModule?e:{default:e}}document.addEventListener("DOMContentLoaded",function(){var e=void 0;if(window.currentUser){var t={session:{currentUser:window.currentUser}};e=(0,i.default)(t),delete window.currentUser}else e=(0,i.default)();window.getState=e.getState,window.fetchPlaylists=u.fetchPlaylists,window.logout=a.logout,window.dispatch=e.dispatch;var n=document.getElementById("root");o.default.render(r.default.createElement(l.default,{store:e}),n)})}]);
//# sourceMappingURL=bundle.js.map
;
(function() {
  var context = this;

  (function() {
    (function() {
      var slice = [].slice;

      this.ActionCable = {
        INTERNAL: {
          "message_types": {
            "welcome": "welcome",
            "ping": "ping",
            "confirmation": "confirm_subscription",
            "rejection": "reject_subscription"
          },
          "default_mount_path": "/cable",
          "protocols": ["actioncable-v1-json", "actioncable-unsupported"]
        },
        WebSocket: window.WebSocket,
        logger: window.console,
        createConsumer: function(url) {
          var ref;
          if (url == null) {
            url = (ref = this.getConfig("url")) != null ? ref : this.INTERNAL.default_mount_path;
          }
          return new ActionCable.Consumer(this.createWebSocketURL(url));
        },
        getConfig: function(name) {
          var element;
          element = document.head.querySelector("meta[name='action-cable-" + name + "']");
          return element != null ? element.getAttribute("content") : void 0;
        },
        createWebSocketURL: function(url) {
          var a;
          if (url && !/^wss?:/i.test(url)) {
            a = document.createElement("a");
            a.href = url;
            a.href = a.href;
            a.protocol = a.protocol.replace("http", "ws");
            return a.href;
          } else {
            return url;
          }
        },
        startDebugging: function() {
          return this.debugging = true;
        },
        stopDebugging: function() {
          return this.debugging = null;
        },
        log: function() {
          var messages, ref;
          messages = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          if (this.debugging) {
            messages.push(Date.now());
            return (ref = this.logger).log.apply(ref, ["[ActionCable]"].concat(slice.call(messages)));
          }
        }
      };

    }).call(this);
  }).call(context);

  var ActionCable = context.ActionCable;

  (function() {
    (function() {
      var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

      ActionCable.ConnectionMonitor = (function() {
        var clamp, now, secondsSince;

        ConnectionMonitor.pollInterval = {
          min: 3,
          max: 30
        };

        ConnectionMonitor.staleThreshold = 6;

        function ConnectionMonitor(connection) {
          this.connection = connection;
          this.visibilityDidChange = bind(this.visibilityDidChange, this);
          this.reconnectAttempts = 0;
        }

        ConnectionMonitor.prototype.start = function() {
          if (!this.isRunning()) {
            this.startedAt = now();
            delete this.stoppedAt;
            this.startPolling();
            document.addEventListener("visibilitychange", this.visibilityDidChange);
            return ActionCable.log("ConnectionMonitor started. pollInterval = " + (this.getPollInterval()) + " ms");
          }
        };

        ConnectionMonitor.prototype.stop = function() {
          if (this.isRunning()) {
            this.stoppedAt = now();
            this.stopPolling();
            document.removeEventListener("visibilitychange", this.visibilityDidChange);
            return ActionCable.log("ConnectionMonitor stopped");
          }
        };

        ConnectionMonitor.prototype.isRunning = function() {
          return (this.startedAt != null) && (this.stoppedAt == null);
        };

        ConnectionMonitor.prototype.recordPing = function() {
          return this.pingedAt = now();
        };

        ConnectionMonitor.prototype.recordConnect = function() {
          this.reconnectAttempts = 0;
          this.recordPing();
          delete this.disconnectedAt;
          return ActionCable.log("ConnectionMonitor recorded connect");
        };

        ConnectionMonitor.prototype.recordDisconnect = function() {
          this.disconnectedAt = now();
          return ActionCable.log("ConnectionMonitor recorded disconnect");
        };

        ConnectionMonitor.prototype.startPolling = function() {
          this.stopPolling();
          return this.poll();
        };

        ConnectionMonitor.prototype.stopPolling = function() {
          return clearTimeout(this.pollTimeout);
        };

        ConnectionMonitor.prototype.poll = function() {
          return this.pollTimeout = setTimeout((function(_this) {
            return function() {
              _this.reconnectIfStale();
              return _this.poll();
            };
          })(this), this.getPollInterval());
        };

        ConnectionMonitor.prototype.getPollInterval = function() {
          var interval, max, min, ref;
          ref = this.constructor.pollInterval, min = ref.min, max = ref.max;
          interval = 5 * Math.log(this.reconnectAttempts + 1);
          return Math.round(clamp(interval, min, max) * 1000);
        };

        ConnectionMonitor.prototype.reconnectIfStale = function() {
          if (this.connectionIsStale()) {
            ActionCable.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + (this.getPollInterval()) + " ms, time disconnected = " + (secondsSince(this.disconnectedAt)) + " s, stale threshold = " + this.constructor.staleThreshold + " s");
            this.reconnectAttempts++;
            if (this.disconnectedRecently()) {
              return ActionCable.log("ConnectionMonitor skipping reopening recent disconnect");
            } else {
              ActionCable.log("ConnectionMonitor reopening");
              return this.connection.reopen();
            }
          }
        };

        ConnectionMonitor.prototype.connectionIsStale = function() {
          var ref;
          return secondsSince((ref = this.pingedAt) != null ? ref : this.startedAt) > this.constructor.staleThreshold;
        };

        ConnectionMonitor.prototype.disconnectedRecently = function() {
          return this.disconnectedAt && secondsSince(this.disconnectedAt) < this.constructor.staleThreshold;
        };

        ConnectionMonitor.prototype.visibilityDidChange = function() {
          if (document.visibilityState === "visible") {
            return setTimeout((function(_this) {
              return function() {
                if (_this.connectionIsStale() || !_this.connection.isOpen()) {
                  ActionCable.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = " + document.visibilityState);
                  return _this.connection.reopen();
                }
              };
            })(this), 200);
          }
        };

        now = function() {
          return new Date().getTime();
        };

        secondsSince = function(time) {
          return (now() - time) / 1000;
        };

        clamp = function(number, min, max) {
          return Math.max(min, Math.min(max, number));
        };

        return ConnectionMonitor;

      })();

    }).call(this);
    (function() {
      var i, message_types, protocols, ref, supportedProtocols, unsupportedProtocol,
        slice = [].slice,
        bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
        indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

      ref = ActionCable.INTERNAL, message_types = ref.message_types, protocols = ref.protocols;

      supportedProtocols = 2 <= protocols.length ? slice.call(protocols, 0, i = protocols.length - 1) : (i = 0, []), unsupportedProtocol = protocols[i++];

      ActionCable.Connection = (function() {
        Connection.reopenDelay = 500;

        function Connection(consumer) {
          this.consumer = consumer;
          this.open = bind(this.open, this);
          this.subscriptions = this.consumer.subscriptions;
          this.monitor = new ActionCable.ConnectionMonitor(this);
          this.disconnected = true;
        }

        Connection.prototype.send = function(data) {
          if (this.isOpen()) {
            this.webSocket.send(JSON.stringify(data));
            return true;
          } else {
            return false;
          }
        };

        Connection.prototype.open = function() {
          if (this.isActive()) {
            ActionCable.log("Attempted to open WebSocket, but existing socket is " + (this.getState()));
            return false;
          } else {
            ActionCable.log("Opening WebSocket, current state is " + (this.getState()) + ", subprotocols: " + protocols);
            if (this.webSocket != null) {
              this.uninstallEventHandlers();
            }
            this.webSocket = new ActionCable.WebSocket(this.consumer.url, protocols);
            this.installEventHandlers();
            this.monitor.start();
            return true;
          }
        };

        Connection.prototype.close = function(arg) {
          var allowReconnect, ref1;
          allowReconnect = (arg != null ? arg : {
            allowReconnect: true
          }).allowReconnect;
          if (!allowReconnect) {
            this.monitor.stop();
          }
          if (this.isActive()) {
            return (ref1 = this.webSocket) != null ? ref1.close() : void 0;
          }
        };

        Connection.prototype.reopen = function() {
          var error;
          ActionCable.log("Reopening WebSocket, current state is " + (this.getState()));
          if (this.isActive()) {
            try {
              return this.close();
            } catch (error1) {
              error = error1;
              return ActionCable.log("Failed to reopen WebSocket", error);
            } finally {
              ActionCable.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms");
              setTimeout(this.open, this.constructor.reopenDelay);
            }
          } else {
            return this.open();
          }
        };

        Connection.prototype.getProtocol = function() {
          var ref1;
          return (ref1 = this.webSocket) != null ? ref1.protocol : void 0;
        };

        Connection.prototype.isOpen = function() {
          return this.isState("open");
        };

        Connection.prototype.isActive = function() {
          return this.isState("open", "connecting");
        };

        Connection.prototype.isProtocolSupported = function() {
          var ref1;
          return ref1 = this.getProtocol(), indexOf.call(supportedProtocols, ref1) >= 0;
        };

        Connection.prototype.isState = function() {
          var ref1, states;
          states = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return ref1 = this.getState(), indexOf.call(states, ref1) >= 0;
        };

        Connection.prototype.getState = function() {
          var ref1, state, value;
          for (state in WebSocket) {
            value = WebSocket[state];
            if (value === ((ref1 = this.webSocket) != null ? ref1.readyState : void 0)) {
              return state.toLowerCase();
            }
          }
          return null;
        };

        Connection.prototype.installEventHandlers = function() {
          var eventName, handler;
          for (eventName in this.events) {
            handler = this.events[eventName].bind(this);
            this.webSocket["on" + eventName] = handler;
          }
        };

        Connection.prototype.uninstallEventHandlers = function() {
          var eventName;
          for (eventName in this.events) {
            this.webSocket["on" + eventName] = function() {};
          }
        };

        Connection.prototype.events = {
          message: function(event) {
            var identifier, message, ref1, type;
            if (!this.isProtocolSupported()) {
              return;
            }
            ref1 = JSON.parse(event.data), identifier = ref1.identifier, message = ref1.message, type = ref1.type;
            switch (type) {
              case message_types.welcome:
                this.monitor.recordConnect();
                return this.subscriptions.reload();
              case message_types.ping:
                return this.monitor.recordPing();
              case message_types.confirmation:
                return this.subscriptions.notify(identifier, "connected");
              case message_types.rejection:
                return this.subscriptions.reject(identifier);
              default:
                return this.subscriptions.notify(identifier, "received", message);
            }
          },
          open: function() {
            ActionCable.log("WebSocket onopen event, using '" + (this.getProtocol()) + "' subprotocol");
            this.disconnected = false;
            if (!this.isProtocolSupported()) {
              ActionCable.log("Protocol is unsupported. Stopping monitor and disconnecting.");
              return this.close({
                allowReconnect: false
              });
            }
          },
          close: function(event) {
            ActionCable.log("WebSocket onclose event");
            if (this.disconnected) {
              return;
            }
            this.disconnected = true;
            this.monitor.recordDisconnect();
            return this.subscriptions.notifyAll("disconnected", {
              willAttemptReconnect: this.monitor.isRunning()
            });
          },
          error: function() {
            return ActionCable.log("WebSocket onerror event");
          }
        };

        return Connection;

      })();

    }).call(this);
    (function() {
      var slice = [].slice;

      ActionCable.Subscriptions = (function() {
        function Subscriptions(consumer) {
          this.consumer = consumer;
          this.subscriptions = [];
        }

        Subscriptions.prototype.create = function(channelName, mixin) {
          var channel, params, subscription;
          channel = channelName;
          params = typeof channel === "object" ? channel : {
            channel: channel
          };
          subscription = new ActionCable.Subscription(this.consumer, params, mixin);
          return this.add(subscription);
        };

        Subscriptions.prototype.add = function(subscription) {
          this.subscriptions.push(subscription);
          this.consumer.ensureActiveConnection();
          this.notify(subscription, "initialized");
          this.sendCommand(subscription, "subscribe");
          return subscription;
        };

        Subscriptions.prototype.remove = function(subscription) {
          this.forget(subscription);
          if (!this.findAll(subscription.identifier).length) {
            this.sendCommand(subscription, "unsubscribe");
          }
          return subscription;
        };

        Subscriptions.prototype.reject = function(identifier) {
          var i, len, ref, results, subscription;
          ref = this.findAll(identifier);
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            subscription = ref[i];
            this.forget(subscription);
            this.notify(subscription, "rejected");
            results.push(subscription);
          }
          return results;
        };

        Subscriptions.prototype.forget = function(subscription) {
          var s;
          this.subscriptions = (function() {
            var i, len, ref, results;
            ref = this.subscriptions;
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              s = ref[i];
              if (s !== subscription) {
                results.push(s);
              }
            }
            return results;
          }).call(this);
          return subscription;
        };

        Subscriptions.prototype.findAll = function(identifier) {
          var i, len, ref, results, s;
          ref = this.subscriptions;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            s = ref[i];
            if (s.identifier === identifier) {
              results.push(s);
            }
          }
          return results;
        };

        Subscriptions.prototype.reload = function() {
          var i, len, ref, results, subscription;
          ref = this.subscriptions;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            subscription = ref[i];
            results.push(this.sendCommand(subscription, "subscribe"));
          }
          return results;
        };

        Subscriptions.prototype.notifyAll = function() {
          var args, callbackName, i, len, ref, results, subscription;
          callbackName = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
          ref = this.subscriptions;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            subscription = ref[i];
            results.push(this.notify.apply(this, [subscription, callbackName].concat(slice.call(args))));
          }
          return results;
        };

        Subscriptions.prototype.notify = function() {
          var args, callbackName, i, len, results, subscription, subscriptions;
          subscription = arguments[0], callbackName = arguments[1], args = 3 <= arguments.length ? slice.call(arguments, 2) : [];
          if (typeof subscription === "string") {
            subscriptions = this.findAll(subscription);
          } else {
            subscriptions = [subscription];
          }
          results = [];
          for (i = 0, len = subscriptions.length; i < len; i++) {
            subscription = subscriptions[i];
            results.push(typeof subscription[callbackName] === "function" ? subscription[callbackName].apply(subscription, args) : void 0);
          }
          return results;
        };

        Subscriptions.prototype.sendCommand = function(subscription, command) {
          var identifier;
          identifier = subscription.identifier;
          return this.consumer.send({
            command: command,
            identifier: identifier
          });
        };

        return Subscriptions;

      })();

    }).call(this);
    (function() {
      ActionCable.Subscription = (function() {
        var extend;

        function Subscription(consumer, params, mixin) {
          this.consumer = consumer;
          if (params == null) {
            params = {};
          }
          this.identifier = JSON.stringify(params);
          extend(this, mixin);
        }

        Subscription.prototype.perform = function(action, data) {
          if (data == null) {
            data = {};
          }
          data.action = action;
          return this.send(data);
        };

        Subscription.prototype.send = function(data) {
          return this.consumer.send({
            command: "message",
            identifier: this.identifier,
            data: JSON.stringify(data)
          });
        };

        Subscription.prototype.unsubscribe = function() {
          return this.consumer.subscriptions.remove(this);
        };

        extend = function(object, properties) {
          var key, value;
          if (properties != null) {
            for (key in properties) {
              value = properties[key];
              object[key] = value;
            }
          }
          return object;
        };

        return Subscription;

      })();

    }).call(this);
    (function() {
      ActionCable.Consumer = (function() {
        function Consumer(url) {
          this.url = url;
          this.subscriptions = new ActionCable.Subscriptions(this);
          this.connection = new ActionCable.Connection(this);
        }

        Consumer.prototype.send = function(data) {
          return this.connection.send(data);
        };

        Consumer.prototype.connect = function() {
          return this.connection.open();
        };

        Consumer.prototype.disconnect = function() {
          return this.connection.close({
            allowReconnect: false
          });
        };

        Consumer.prototype.ensureActiveConnection = function() {
          if (!this.connection.isActive()) {
            return this.connection.open();
          }
        };

        return Consumer;

      })();

    }).call(this);
  }).call(this);

  if (typeof module === "object" && module.exports) {
    module.exports = ActionCable;
  } else if (typeof define === "function" && define.amd) {
    define(ActionCable);
  }
}).call(this);
// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//




(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//




;
