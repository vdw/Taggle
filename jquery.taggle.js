/**
 * Taggle
 *
 * @copyright Copyright 2015, Dimitris Krestos
 * @license   Apache License, Version 2.0 (http://www.opensource.org/licenses/apache2.0.php)
 * @link      http://vdw.staytuned.gr
 * @version   v0.1.0
 */

  /* Sample html structure

  <article class="my-article" data-tag-list=".my-tag-list">
    <!-- blah blah -->
  </article>

  <div class="my-tag-list">
    <a href="#"><span>tag 1</span></a>
    <a href="#"><span>tag 2</span></a>
    <a href="#"><span>tag 3</span></a>
    <a href="#"><span>tag 4</span></a>
  </div>

  */

;(function($, window, undefined) {
  "use strict";

  $.fn.taggle = function(options) {

    var defaults = {
      linkclass: ''
    };

    var options = $.extend(defaults, options);

    return this.each(function() {

      var $this = $(this);
      var $tags = $($this.data('tag-list')).children('a');

      // Ungly overwrite
      options.linkclass = $this.data('linkclass') || options.linkclass;

      $tags.each(function() {

        var pattern = new RegExp('\\s' + $(this).text() + '\\s', 'gi');

        $this.html($this.html().replace(pattern, ' <a class="' + options.linkclass + '" href="' + $(this).attr('href') + '">' + $(this).text() + '</a> '));

      });

    });

  };

  $(document).ready(function () { $('[data-toggle="taggle"]').taggle(); });

})(jQuery);