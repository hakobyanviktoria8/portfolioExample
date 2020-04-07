const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "PHP",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "Bootstrap",
				weight: 14
			}, {
				text: "Sass",
				weight: 3
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "jquery",
				weight: 10
			}, {
				text: "OOP",
				weight: 9
			}, {
				text: "javascript",
				weight: 15
			}, {
				text: "HTML",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.", "love everything about code.", "also teach programming to people.", "solve problems.","implement life dream...!"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#ff50f9"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
