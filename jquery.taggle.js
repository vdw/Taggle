/**
 * Taggle
 *
 * @copyright	Copyright 2015, Dimitris Krestos
 * @license		Apache License, Version 2.0 (http://www.opensource.org/licenses/apache2.0.php)
 * @link			http://vdw.staytuned.gr
 * @version		v0.0.1
 */

	/* Sample html structure

	<div class='selector'></div>

	*/

;(function($, window, undefined) {
	"use strict";

	$.fn.taggle = function(options) {

		var defaults = {};

		var options = $.extend(defaults, options);

		$(this).each(function() {

			var $this = $(this);

			$this.html($this.html().replace('architecto', '<a href="#">architecto</a>'));

		});

	};

	$(document).ready(function () { $('[data-toggle="taggle"]').taggle(); });

})(jQuery);