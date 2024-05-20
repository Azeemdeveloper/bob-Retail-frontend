
document.addEventListener("DOMContentLoaded", function() {
	console.log("DOMContentLoaded attached!");
    // Function to attach variations
    //ais-SearchBox-input
	jQuery(document).on('input click keyup', '.ais-Pagination-item, .ais-Pagination-link, .ais-SearchBox-input, .ais-CurrentRefinements-delete .ais-RefinementList-checkbox, .ais-RangeSlider, .ais-HierarchicalMenu-link', function(event) {
		// Your event handling code here
		console.log("Event fired!");
		attachVariations();
		//wait for 2 seconds and call the function again
		setTimeout(attachVariations, 2000);
	});
	setTimeout(attachVariations, 2000);
});

function attachVariations() {
	// Your code to attach variations goes here
	console.log("Variations attached!");

	jQuery('.hit-variations').each(function() {
		var product_id = jQuery(this).data('product_id');
		var attribute_key = jQuery(this).data('attribute_key');
		var $this = jQuery(this); // Cache the jQuery object for performance
		var data = {
			'product_id': product_id,
			'attribute_key': attribute_key,
		};
		jQuery.ajax({
			url: wpApiSettings.root + 'typesense_search/v1/get_variations/',
			method: 'POST',
			data: data,
			beforeSend: function(xhr) {
				xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
			},
			success: function(response) {
				$this.html(response); // Update inner HTML of current hit-variations element
			},
			error: function(error) {
				console.error(error);
			}
		});
	});
}
// Use MutationObserver to detect changes in the DOM
/*var observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		// Check if the mutation added nodes
		if (mutation.addedNodes.length > 0) {
			// Check if any of the added nodes have the class 'ais-InstantSearch'
			mutation.addedNodes.forEach(function(node) {
				// check if ais-InstantSearch is a parent of the added node
				jQuery(node).parents('.ais-InstantSearch').each(function() {
					// Attach variations to the added node
					//attachVariations();
				});
			});
		}
	});
});

// Start observing the entire document for mutations
observer.observe(document, { childList: true, subtree: true });*/