document.observe("dom:loaded", function() {
  $$(".panel").each(function(panel) {
    new Draggable(panel.identify(), {
        handle: '.category_header',
    });
  })
  $$(".text").each(function(text) {
    text.hide();
  })
})