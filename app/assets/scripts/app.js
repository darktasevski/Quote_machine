
    // const link = document.querySelector('#quote__wiki');

    $('#quote__button').click(function getQuote() {
        $.getJSON("http://www.quotzzy.co/api/quote")
            .done(update)
            .fail(handleErr);
    })
		function update(response) {
			var modObj = JSON.parse(JSON.stringify(response)); // mutating JSON into an object 
			console.log(modObj);
		  $('.quote__text').text(modObj.text);
		  $('.quote__author').text(modObj.author.name);
		  $('#quote__wiki').attr("href", modObj.author.wiki);
		}

		function handleErr(jqxhr, textStatus, err) {
		  console.log("Request Failed: " + textStatus + ", " + err);
		}
