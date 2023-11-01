var $menu = $('.Menu-list'),
    $item = $('.Menu-list-item'),
    w = $(window).width(),
    h = $(window).height(); 

$(window).on('mousemove', function(e) {
  var offsetX = 0.5 - e.pageX / w, 
      offsetY = 0.5 - e.pageY / h,
      dy = e.pageY - h / 2,
      dx = e.pageX - w / 2,
      theta = Math.atan2(dy, dx),
      angle = theta * 180 / Math.PI - 90,
      offsetPoster = $menu.data('offset'),
      transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

  if (angle < 0) {
    angle = angle + 360;
  }

  $menu.css('transform', transformPoster);

  $item.each(function() {
    var $this = $(this),
        offsetLayer = $this.data('offset') || 0,
        transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';

    $this.css('transform', transformLayer);
  });
});