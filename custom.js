jQuery(".tgrbi").click(function (e) {
    e.stopPropagation();
    jQuery(".mega-imrtrigg ul.mega-sub-menu").toggleClass('amareshowkor');
});

jQuery(document).click(function (e) {
    if(!jQuery(e.target).closest('.mega-imrtrigg ul.mega-sub-menu').length){
      jQuery(".mega-imrtrigg ul.mega-sub-menu").removeClass('amareshowkor');
    }
});
