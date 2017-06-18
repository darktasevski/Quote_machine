
    
    $('#quote__button').click(function getQuote() {
        $.getJSON("http://www.quotzzy.co/api/quote")
            .done(update)
            .fail(handleErr);
    })
		function update(response) {
			var modObj  = JSON.parse(JSON.stringify(response)); // mutating JSON into an object 
			console.log(modObj);
		  // $('#quote__display').html('<p>' + modObj.text + '</p>');
		  $('.quote__text').html('<p>' + modObj.text + '</p>');
		  $('.quote__author').html('<small><p>' + modObj.author.name + '</p></small>');
		  $('.quote__wiki').html('<a href="' + modObj.author.wiki + '"></a>');
		}

		function handleErr(jqxhr, textStatus, err) {
		  console.log("Request Failed: " + textStatus + ", " + err);
		}
