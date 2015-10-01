"use strict";

var util = {
	ConvertToArray: function ConvertToArray(elements) {
		return [].slice.call(elements);
	}
};

module.exports = util;