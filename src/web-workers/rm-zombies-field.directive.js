var ZOMBIE_TEMPLATE = "<div class='zombie'></div>";

var zombieEl = $(ZOMBIE_TEMPLATE);
zombieEl.css({top: 12, left: Math.random() * 100});

var fieldEl = element.find(".zombies-field");



fieldEl.append(zombieEl)

// TODO: get field position
// var fieldEl = element.find(".zombies-field");
// var offset = fieldEl.offset();
// fieldEl.width(),
// fieldEl.height()

// TODO: handle field click
// fieldEl.on("click", function (event) {
//   var x = event.clientX - offset.left;
//   var y = event.clientY - offset.top;
// });


// animation:
// zombieEl.stop(true, false);
// zombieEl.animate({top: 10, left: -13}, 1200);
