//Appending same DIV 16 times to create enough for a 4x4 grid
let n = 16
$('.mainCon').append(new Array(++n).join('<div class = "boxDefault"></div>'));

//Logic for only one class to be toggled per div element
$('.boxDefault').on('click', function() {
    $(this).toggleClass('boxLight');
  });