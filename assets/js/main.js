---
---

// highlight selected menu item based on current page meta data
(function() {
  let postTitle = $("#content").attr('post-title');
  let postCategory = $("#content").attr('post-category');

  let nav1Items = $("#nav1 a");
  let nav2Items = $('#nav2 a');

  //highlight nav 1 selected item
  nav1Items.each(function(index, value) {
    let attr = value.getAttribute("link-cat");

    if (attr === postCategory) {
      $(value).addClass("selected");      
    }
  });

  nav2Items.each(function(index, value) {
    let attr = value.getAttribute("link-cat");
    if (attr === postTitle) {
      $(value).addClass("selected");
    }
  })
})();



(function() {
  $("#content a").each(function(index, value) {
    $(this).attr("target", "_blank");
  })
})()
