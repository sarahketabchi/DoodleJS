var Doodle = (function () {
  var Pic = function(ctx) {
    this.draw = function() {
      ctx.fillStyle = "800080";
      ctx.fillRect(250, 250, 50, 20);
    };
  }

})();

$(function() {
  var canvas = $('canvas');
  var ctx = canvas.get(0).getContext("2d");


});