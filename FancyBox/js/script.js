$(function() {
    // Set your custom Fancybox options here. See http://fancyapps.com/fancybox/3/docs/#options
    $.fancybox.defaults.animationEffect = "zoom";
    $.fancybox.defaults.transitionEffect = "slide";

// Initialize Fancybox on all galleries (but not if we're in the editor)
if (!window.isCMS) {
  var i = 0;
     $('.cms-gallery, .cms-editable[data-type="gallery"]').each(function() {
    var gallery = this;
    i++;

    $(gallery).find('a').each(function() {
        var a = this;
        var img = $(a).find('img');
        var caption = $(img).attr('data-caption');
        var alt = $(img).attr('alt');

        $(a)
          .attr('data-fancybox', 'gallery-' + i)
          .attr('data-caption', caption);
      });
    });
  }
});