jQuery(function ($) {
    // Function to check and reset left and right properties
    function checkAndReset() {
		// Check if screen width is greater than 767px
		if (!window.matchMedia("(max-width: 767px)").matches) {
			$(".aa-Panel").each(function() {
				var $this = $(this);
				var leftValue = $this.css("left");
				var rightValue = $this.css("right");

				// Check if left or right value is different from 10%
				if (leftValue !== "10%" || rightValue !== "10%") {
					$this.css({
						"left": "10%",
						"right": "10%"
					});
				}
			});
		}
	}

    // Initial check
    checkAndReset();

    // Monitor changes using MutationObserver
    var observer = new MutationObserver(function(mutationsList) {
        for (var mutation of mutationsList) {
            if (mutation.type === 'attributes' && (mutation.attributeName === 'style' || mutation.attributeName === 'class')) {
                // If class or style attribute is changed, check and reset
                checkAndReset();
                break;
            }
        }
    });

    // Observe changes in attributes and style of elements with class "aa-Panel"
    $(".aa-Panel").each(function() {
		console.log("observing")
        observer.observe(this, { attributes: true, attributeFilter: ['style', 'class'] });
    });

	//ensure that it runs after the page is loaded
	$(window).on("load", function() {
		//check and reset after the page is loaded
		$(".aa-Panel").each(function() {
			console.log("observing")
			observer.observe(this, { attributes: true, attributeFilter: ['style', 'class'] });
		});
	});

	//time out and run again after 2000ms
	setTimeout(function() {
		$(".aa-Panel").each(function() {
			console.log("observing")
			observer.observe(this, { attributes: true, attributeFilter: ['style', 'class'] });
		});
	}, 2000);

	//time out and run again after 5000ms
	setTimeout(function() {
		$(".aa-Panel").each(function() {
			console.log("observing")
			observer.observe(this, { attributes: true, attributeFilter: ['style', 'class'] });
		});
	}, 5000);

	//aa-Input click or focus
	$(document).on("click focus keyup keydown", ".aa-Input", function() {
		//check and reset after 100ms
		setTimeout(function() {
			$(".aa-Panel").each(function() {
				console.log("observing")
				observer.observe(this, { attributes: true, attributeFilter: ['style', 'class'] });
			});
		}, 100);
	});
});
