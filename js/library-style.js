jQuery(document).ready(function () {
	
	/* @auth Matheus
	 * ESCONDER ELEMENTOS DEPOIS DE 2 SEGUNDOS
	 */
	if (!jQuery('.time-out').is(':empty')) {
		setTimeout(function () {
           jQuery('.time-out').toggle(); 
        }, 2000);
    }
	
});

function toggleElement(element, parametro) {
	jQuery(element + '[data-toggle=' + parametro + ']').fadeToggle("slow");
}