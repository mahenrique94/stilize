NodeList.prototype.forEach = Array.prototype.forEach; 
HTMLCollection.prototype.forEach = Array.prototype.forEach;

document.addEventListener('DOMContentLoaded', function(e) {
	
	/** @auth Matheus
	 * Mostrar e esconder modal ao clicar uma ou duas vezes nos seletores abaixo
	 */
	jQuery(document).on('click dblclick', '[data-toggle=modal], div.bg-modal', function(event) {
		if (event.target.nodeName.toLowerCase() == 'input' && event.type == 'click')
			return false;
		return openBox(this);
	});
	
});

jQuery(document).ready(function () {
	/** @auth Matheus
	 * Adicionar modal em todas as páginas
	 */
	jQuery('body').append('<div class="bg-modal"><div class="modal"><iframe id="iframe-modal"></iframe></div></div>');
	
	/** @auth Matheus
	 * Esconder elementos depois de 3 segundos
	 */
	if(!jQuery('.time-out').is(':empty')) {
		setTimeout(function () {
           jQuery('.time-out').toggle(); 
        }, 3000);
    }
	
	/** @auth Matheus
	 *  Mostrando e escondendo tabs de acordo com a clicada
	 */
	jQuery('li.active a').each(function() {
		var idActive = $(this).attr('href').replace('#', '');
		jQuery('div#' + idActive).fadeIn();
	});
	jQuery('ul[class^=tab] a').click(function(e) {
        e.preventDefault();
        if($(this).closest('li').attr('class') == 'active') {
        	return;
        } else {             
          jQuery('.tab-group').find('[id^=content]').attr({'aria-expanded' : 'false', 'aria-hidden' : 'true'}).hide();
          jQuery('ul[class^=tab] li').removeAttr('class').attr('aria-selected', 'false');
          $(this).parent().addClass('active').attr('aria-selected', 'true');
          jQuery('#content-' + $(this).attr('id')).attr({'aria-expanded' : 'true', 'aria-hidden' : 'false'}).fadeIn();
        }
    });
	
	/** @auth Matheus
	 * Setando li ativo de acordo com url
	 */
//	jQuery('li[id=' + getFinal() + ']').addClass('active');
	
	
	/** @auth Matheus
	 * Realizando slide no menu
	 */
	jQuery('[data-slide=true]').click(function() {
		if (jQuery(this).find('span').hasClass('icon-circle-arrow-down')) {
			jQuery(this).find('span').removeClass('icon-circle-arrow-down').addClass('icon-circle-arrow-up');
			jQuery(jQuery(this).attr('href')).slideDown(500);
		} else {
			jQuery(this).find('span').removeClass('icon-circle-arrow-up').addClass('icon-circle-arrow-down');
			jQuery(jQuery(this).attr('href')).slideUp(500);
		}
	})
	
	/** @auth Matheus
	 *  Executando função para sticky footer
	 */
	stickyFooter();
	
	/** @auth Matheus
	 *  Função para mostrar e esconder collapse em efeito slide
	 */
	jQuery('[data-toggle=collapse]').click(function() {
		event.preventDefault();
		jQuery($(this).attr('href')).slideToggle();
	});
	
	/** @auth Matheus
	 *  Função para mostrar e esconder divs de cadastro passo-a-passo
	 */
	jQuery('button[data-current][data-next]').click(function() {
		jQuery('.' + $(this).data('current')).toggle();
		jQuery('.' + $(this).data('next')).toggle();
	});
	
});

/** @auth Matheus, Fernando e João
 * Abrir e fechar openbox
 */
function openBox($obj) {
	if (($obj.href || $obj.formAction) != undefined)
		jQuery('iframe').attr('src', ($obj.href || $obj.formAction));
	jQuery('div.bg-modal').fadeToggle(300);
	jQuery('div.modal').fadeToggle(300);
	return false;
}

/** @auth Matheus
 * Mostrar ou esconder elemento(s) informado(s) nos parâmetros
 */
function toggleElement(element, type, parametro) {
	for(var i = 0; i < element.length; i++) {
		if (type[i] == 'class') {
			jQuery(element[i] + '.' + parametro[i]).fadeToggle(300);
		} else if (type[i] == 'id') {
			jQuery(element[i] + '#' + parametro[i]).fadeToggle(300);
		} else if (type[i].match('^data')) {
			jQuery(element[i] + '['+ type[i] + '=' + parametro[i] + ']').fadeToggle(300);
		}
	}
}

/** @auth Matheus
 * Identificar url para ativar li
 */
function identityUrl() {
	return window.location.href;
}
function getFinal() {
	var url = identityUrl();
	url = url.substring(url.lastIndexOf('/') + 1);
	if (url.length > 1)
		url = url.substring(0, url.lastIndexOf('?'));
	return url;
}

/** @auth Matheus
 *  Implementando sticky footer
 */
function stickyFooter() {
	applySticky(jQuery('#wrap > #content, #wrap + footer'), 'padding-bottom, margin-top');
}
function applySticky(elements, styles) {
	var properties = styles.split(',');
	jQuery(elements).each(function(i) {
		jQuery(elements[i]).css(jQuery.trim(properties[i]), function() {
			if (i == 0)
				return getHeight(elements[1]); // [0] = section#content, [1] = footer
			else
				return "-" + getHeight(elements[1]); // [0] = section#content, [1] = footer
		});
	});
}
function getHeight(obj) {
	return $(obj).css('height');
}

/** @auth Matheus
 *  Função para mudar o ícon de (+ para -) ou (- para +) 
 */
function toggleIconSquaredPlusToMinus(obj) {
	var icon = jQuery(obj).find('i');
	if ($(icon).attr('class') == 'icon-plus-squared')
		$(icon).removeClass().addClass('icon-minus-squared');
	else
		$(icon).removeClass().addClass('icon-plus-squared');
}

/** @auth Matheus
 *  @param url
 *  @returns Boolean
 *  Verificando arquivos carregados no sistema 
 */
function linkCheck(url) {
	var http = new XMLHttpRequest();
	http.open('HEAD', url, false);
	http.send();
	return http.status != 404;
}