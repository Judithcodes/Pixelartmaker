// Select color input
// Select size input

 
//enter number netween 1-30
$(function(){
    $("input").keydown(function (){
        $(this).data("old",$(this).val());
    });
    $("input").keyup(function (){
        if (parseInt($(this).val())<=30 && parseInt ($(this).val())>=0);
        else
        $(this).val($(this).data("old"));
    });
});
//create a table for the pixel art maker using the code below
$('#sizePicker').submit(function makeGrid(event){//we select the DOM element "form here for the "submit" event.
    $('table tr').remove();//IMPORTANT! this clear any already created grid for new tables to appear
var rows=$('#inputHeight').val();//the height of the grid is equal to the number of rows
var cols=$('#inputWidth').val();//the width of the grid is equal to the number of the columns.
    for (var i=1; i<=rows;i++) {
        $('table').append("<tr></tr>");
        for (var j=1;j<=cols;j++) {
            $('tr:last').append("<td></td>"); //IMPORTANT!  'tr:last' ensures the colums are added to the last created table row and not all
            $('td').attr('class','pixel');
        }
    }
    event.preventDefault();//IMPORTANT! this prevents the page from reloading when the submit button is clicked   
});

//the JS code below is used to select and apply the color to the cell of the canvas.
$('#pixelCanvas').on('click','.pixel', function(){//this looks out for changes in the table with id 'pixelCanvas' and makes changes to element of class '.pixel'.   
    var paint=$('#colorPicker').val();
    $(this ).css('background-color',paint);
});
var Name= prompt('What is your name?');
alert(Name + ', you are welcome to my Pixel Art Maker. Pick a grid size and a color to create any art piece you desire!!! ');

