$(document).ready(function() {

    $('#quote__button').on('click', function(ev) {
        $.getJSON("https://www.quotzzy.co/api/quote")
            .done(update)
            .fail(handleErr);
    });

    $('#twitter').on('click', function() {
        window.open("https://twitter.com/intent/tweet?text=" + $("#quote").text() + " - " + $(".quote__author").text());
    })

    function update(response) {
        var modObj = JSON.parse(JSON.stringify(response)); // mutating JSON into an object 
        // console.log(modObj);
        $('.quote__text').text(modObj.text);
        $('.quote__author').text(modObj.author.name);
        $('#quote__wiki').attr("href", modObj.author.wiki);
        $('html').css('background', randomColor);
    }

    function handleErr(jqxhr, textStatus, err) {
        var err = 'Something is wrong, please try again.'
        console.log("Request Failed: " + textStatus + ", " + err);
        $('.quote__text').text(err);
    }

    function randomColor() {
        var green = Math.floor(Math.random() * 256);
        var red = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);

        var rgbArr = [red, green, blue];
        // console.log(rgbArr);
        var currentColor = Math.round(((parseInt(rgbArr[0]) * 299) + (parseInt(rgbArr[1]) * 587) + (parseInt(rgbArr[2]) * 114)) / 1000);
        // dynamic changing the color of text based on background color
        if (currentColor > 125) {
            $('html').css('color', 'black');
            $('.quote__author').css('color', 'black');
            $('#quote__button').css('color', 'black');
        } else {
            $('html').css('color', 'white');
            $('.quote__author').css('color', 'white');
            $('#quote__button').css('color', 'white');
        }
        return 'rgb(' + red + ', ' + green + ', ' + blue + ')'; // spaces are important
    }
});
// const link = document.querySelector('#quote__wiki');
