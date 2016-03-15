/** Select Search
 *  @Plugin desenvolvido por Matheus Castiglioni
 *  www.matheuscastiglioni.com.br
 *  Realizar filtros em selects tornando-os select search
 */ 
(function($) {
	$.fn.ss = function(obj) {
		buildList(obj);
		jQuery('input.ss-filter').focus(function() {
			jQuery($(this).next()).slideDown();
		})
		jQuery('input.ss-filter').blur(function() {
			jQuery($(this).next()).slideUp();
		})
		jQuery('input.ss-filter').keyup(function() {
			var param = $(this).val();
			jQuery($(this).next()).find('li').each(function(i, obj) {
				$(obj).css('display', 'block');
				if ($(obj).text().indexOf(param) < 0)
					$(obj).css('display', 'none');
			});
		});
		jQuery('ul.ss-list[role=combobox] li').click(function() {
			var param = $(this).text();
			jQuery('input[data-list=' + $(this).parents().attr('id') + ']').val(param);
			jQuery('select[data-list=' + $(this).parents().attr('id') + '] option').each(function() {
				$(this).removeAttr('selected');
				if ($(this).text() == param)
					$(this).attr('selected', 'selected');
			});
		});
	};
})(jQuery);

// Função utilizada no plugin para criar elementos onde será feito os filtros
function buildList(obj) {
	/** @depedencys
	 *  ss-body: Div para agrupar os recursos do filtro
	 *  ss-filter: Input para realizar os filtros, basta digitar as letras para realizar a busca(começo, meio e fim)
	 *  ss-list: Lista com todas as opções para filtro e escolhe
	 *  ss-option: Opções para escolha e filtro(As mesmas encontradas no select)
	 */
	jQuery('<div class="ss-body" id="' + $(obj).data('list') + '"></div>').insertAfter($(obj));
	if ($(obj).hasClass('ss-upper'))
		jQuery('.ss-body[id=' + $(obj).data('list') + ']').append('<input class="form-data ss-filter" data-list="' + $(obj).data('list') + '" onkeyup="return this.value = this.value.toUpperCase();" style="text-transform: uppercase;" type="search">');
	else
		jQuery('.ss-body[id=' + $(obj).data('list') + ']').append('<input class="form-data ss-filter" data-list="' + $(obj).data('list') + '" type="search">');
	if ($(obj).find('option:selected'))
		jQuery('input[data-list=' + $(obj).data('list') + ']').val($(this).text());
	jQuery('.ss-body[id=' + $(obj).data('list') + ']').append('<ul class="ss-list" id="' + $(obj).data('list') + '" role="combobox"></ul>');	
	// Buscando todos os options do select e adicionando na lista e fazendo a inserção na página HTML do elemento
	$(obj).find('option').each(function() {
		jQuery('div.ss-body ul.ss-list[id=' + $(obj).data('list') + ']').append('<li class="ss-option">' + $(this).text() + '</li>');
	});
	
};

// Inicializando o plugin, ao encontrar selects com a classe .ss e contenham o atributo data-list
// será aplicado o plugin para cada um deles
jQuery('select.ss[data-list]').each(function() {
	jQuery().ss(this);
});