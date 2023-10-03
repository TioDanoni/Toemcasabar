/* global $ oswaldo: true */

$(document).ready(function () {
  function offsetVal() {
    var pageWidth = window.innerWidth;
    if (pageWidth > 1200) {
      return 3;
    } else if (pageWidth < 1200 && pageWidth > 768) {
      return 2;
    } else {
      return 1;
    }
  }

  function filterAndVideoLoad(){
    oswaldo.components.advancedSearch(".jobs-filter");
    oswaldo.components.responsiveVideo(".responsive-video");
  }

  if ($(".widget-slider").first().find(".testimonials-list").length < 1) {
    oswaldo.components.slider({
      container: ".testimonials-list",
      offset: offsetVal(),
    });
  }
  oswaldo.components.slider({
    container: ".gallery-list",
    offset: 4,
  });
  oswaldo.components.slider({
    container: ".slider_box",
    offset: 3,
  });
  if ($(".widget-slider").first().find(".testimonials-list").length > 0) {
    oswaldo.components.slider({
      container: ".testimonials-list",
      offset: offsetVal(),
    });
  }

  filterAndVideoLoad();

  $(document).on("turbolinks:load", filterAndVideoLoad);
});
