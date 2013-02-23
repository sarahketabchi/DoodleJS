var Doodle = (function () {
  var Pic = function(ctx) {

    var fromPos = undefined;
    var toPos = undefined;

    var drawing = false;
    var that = this;

    $('canvas').mousedown(function (event) {
      console.log(event.pageX - $(this).parent().offset().left);
      var x = event.pageX - $(this).parent().offset().left;
      var y = event.pageY - $(this).parent().offset().top;

      that.drawing = true;
      // moveTo() starting position
      ctx.moveTo(x, y);
      //beginPath()
      ctx.beginPath();
    });

    $('canvas').mousemove(function (event) {
      var x = event.pageX - $(this).parent().offset().left;
      var y = event.pageY - $(this).parent().offset().top;

      if (that.drawing == true) {
        // add new point to path with lineTo()
        ctx.lineTo(x, y);
        // color last segment with stoke()
        ctx.stroke();
      };
    });

    $('canvas').mouseup(function (event) {
      //console.log((event.pageX) - $(this).parent().offset().left);
      //console.log((event.pageY) - $(this).parent().offset().top);

      // set flag to stop drawing
      that.drawing = false;
    });  

    this.draw = function() {
      ctx.fillStyle = "800080";
      ctx.fillRect(250, 250, 50, 20);
    };


  }

  return {
    Pic: Pic
  }

})();

$(function() {
  var canvas = $('canvas');
  var ctx = canvas.get(0).getContext("2d");

  pic = new Doodle.Pic(ctx);
  pic.draw();



});