$(document).ready(function() {
  $(".coverflow-right").click(function(e) {
    e.preventDefault(), $("button.flipster__button.flipster__button--next").click()
  }), $(".coverflow-left").click(function(e) {
    e.preventDefault(), $("button.flipster__button.flipster__button--prev").click()
  });
  var e = {
    x: -1,
    y: -1
  };
  $(".feature-each").mousemove(function(t) {
    e.x = t.pageX, e.y = t.pageY;
    var o = $(this).offset(),
      i = $(this).width() / 2,
      a = $(this).height() / 2,
      n = o.left + i,
      r = o.top + a,
      l = 1e-6 * (e.x - n),
      s = 1e-6 * (e.y - r);
    l > 2e-4 && (l = 2e-4), l < -2e-4 && (l = -2e-4), s > 3e-4 && (s = 3e-4), s < -3e-4 && (s = -3e-4), $(this).css("transform", "matrix3d(1,0,0.00," + l + ",0.00,1,0.00," + s + ",0,0,1,0,0,0,0,1)"), $(this).removeClass("active")
  }), $(".feature-each").mouseleave(function() {
    $(this).addClass("active")
  });
  var t = $(".flipster"),
    o = t.find(".flip-items"),
    i = t.find("li");
  t.flipster({
    itemContainer: o,
    itemSelector: i,
    loop: 2,
    start: 2,
    style: "infinite-carousel",
    spacing: 0,
    scrollwheel: !1,
    buttons: !0
  }), $("#wave3").wavify({
    height: 160,
    container: ".wave3",
    bones: 3,
    amplitude: 50,
    speed: .13
  }), $("#wave4").wavify({
    height: 120,
    container: ".wave4",
    bones: 3,
    amplitude: 50,
    speed: .18
  }), $("#wave5").wavify({
    height: 150,
    container: ".wave5",
    bones: 3,
    amplitude: 50,
    speed: .16
  }), $(".feature-b").matchHeight({
    byRow: !1,
    property: "height",
    remove: !1
  }), $(".f-solution").matchHeight({
    byRow: !1,
    property: "height",
    remove: !1
  });
  $("#video2");
  $(window).resize(function() {
    $(".feature-b").matchHeight({
      byRow: !1,
      property: "height",
      remove: !1
    }), $(".f-solution").matchHeight({
      byRow: !1,
      property: "height",
      remove: !1
    });
    var e = $(".flipster"),
      t = e.find(".flip-items"),
      o = e.find("li");
    e.flipster({
      itemContainer: t,
      itemSelector: o,
      loop: 2,
      start: 2,
      style: "infinite-carousel",
      spacing: 0,
      scrollwheel: !1,
      buttons: !0
    })
  }), $('.menu-mob:not(".active")').click(function(e) {
    e.preventDefault(), $("#mob-menu-ctn").addClass("active")
  }), $(".menu-mob.active").click(function(e) {
    e.preventDefault(), $("#mob-menu-ctn").removeClass("active")
  });
  var a = [];
  $.each(["sliderh1_container", "sliderh2_container", "sliderh3_container", "sliderh4_container", "sliderh5_container", "sliderh6_container"], function(e, t) {
    var o = {
        $PauseOnHover: 1,
        $AutoPlaySteps: 4,
        $SlideDuration: 1500,
        $MinDragOffsetToSlide: 20,
        $SlideWidth: 305,
        $SlideHeight: 48,
        $SlideSpacing: 3,
        $Align: 0,
        $UISearchMode: 0,
        $BulletNavigatorOptions: {
          $Class: $JssorBulletNavigator$,
          $ChanceToShow: 2,
          $Steps: 1,
          $Rows: 1,
          $SpacingX: 0,
          $SpacingY: 0,
          $Orientation: 1
        }
      },
      i = new $JssorSlider$(t, o);
    a.push(i)
  });
  var n = {
    $AutoPlay: 1,
    $AutoPlaySteps: 1,
    $Idle: 2e3,
    $PauseOnHover: 1,
    $ArrowKeyNavigation: 1,
    $SlideDuration: 300,
    $MinDragOffsetToSlide: 80,
    $SlideHeight: 48,
    $SlideSpacing: 0,
    $Align: 0,
    $UISearchMode: 0,
    $PlayOrientation: 2,
    $DragOrientation: 2,
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$,
      $ChanceToShow: 2,
      $SpacingY: 20,
      $Orientation: 2
    }
  };
  var mult = false;
  $(window).resize(function() {
    if($(this).width() >= 1600){
      mult = true;
    }else{
      mult = false
    }
  });
  var zoomed = $(window).width();
  console.log(zoomed)
  if(zoomed >= 1600){
    mult = true;
  }else{
    mult = false
  }

  function goToDiv(elem){
    var _scroll = 0;
    if(mult == true){
      _scroll = $(elem).offset().top * 1.25;
    }else{
      _scroll = $(elem).offset().top;
    }

    console.log(mult);
    window.scrollTo({ top: _scroll, behavior: 'smooth' });

  }

  new $JssorSlider$("slider1_container", n);


  $(window).load(function(){
    $(".to-dashboard").click(function(e) {

      e.preventDefault(), $("#mob-menu-ctn").removeClass("active"), goToDiv('.second-block')
    }), $(".to-metrics").click(function(e) {
      e.preventDefault(), $("#mob-menu-ctn").removeClass("active"), goToDiv(".metrics-ctn")
    }), $(".to-search").click(function(e) {
      e.preventDefault(), $("#mob-menu-ctn").removeClass("active"), goToDiv(".searchtools-ctn")
    }), $(".to-crm").click(function(e) {
      e.preventDefault(), $("#mob-menu-ctn").removeClass("active"), goToDiv(".crm-int")
    }), $(".to-local").click(function(e) {
      e.preventDefault(), $("#mob-menu-ctn").removeClass("active"), goToDiv(".third-block")
    }), $(".to-features").click(function(e) {
      e.preventDefault(), $("#mob-menu-ctn").removeClass("active"), goToDiv(".features-ctn")
    }), $(".to-pricing").click(function(e) {
      e.preventDefault(), $("#mob-menu-ctn").removeClass("active"), goToDiv(".princing-blck")
    });
  })


  var r = {
      $AutoPlay: 1,
      $Idle: 3e3,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    },
    l = (new $JssorSlider$("jssor_1", r), $(".map_img")),
    s = $(".map_img > img");
  l.scrollLeft((s.width() - l.width()) / 2)
});
