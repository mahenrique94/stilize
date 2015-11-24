function toggleElement(element, parametro) {
	jQuery(element + '[data-toggle=' + parametro + ']').fadeToggle("slow");
}