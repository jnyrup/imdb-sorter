// ==UserScript==
// @name        IMDb layout changer
// @namespace	jnyrup
// @description Change the layout of IMDb. `show` specifies the order in which the elements should be listed. `hide` specifies elements that should be hidden.
// @version     1.0
// @author      Jonas Nyrup
// @match		http://www.imdb.com/title/*
// @match		http://www.imdb.com/title/*/*
// @grant       none
// ==/UserScript==
(function () {
	'use strict';

	/*
	list of currently available id's
	[
		"boardsTeaser", 	Message Boards
		"titleCast", 		Cast
		"titleDetails", 	Details
		"titleDidYouKnow", 	Did You Know?
		"titleFAQ", 		Frequently Asked Questions
		"titleMediaStrip", 	Videos, pictures and trailers
		"titleProduction", 	Production Notes from IMDbPro (shown on incomplete films)
		"titleRecs", 		People who liked this also liked...
		"titleStoryLine"	Storyline
	];
	*/
	// CHANGE THIS PART:
	var show = [
		"titleStoryLine",
		"titleCast", 
		"titleDetails", 
		"titleRecs",
		"boardsTeaser", 
		"titleDidYouKnow", 
		"titleFAQ"
	];

	var hide = [
		"titleMediaStrip", 
		"titleProduction"
	];

	// STOP CHANGING
	hide.forEach(function(id){
		var div = document.getElementById(id);
		if(div !== null)
			div.style.display = 'none';
	});

	show.reverse().forEach(function(id){
		var ref = document.getElementsByClassName('title-overview')[0];
		var div = document.getElementById(id);
		if(div !== null)
			ref.parentNode.insertBefore(div, ref.nextSibling);
	});
}());
