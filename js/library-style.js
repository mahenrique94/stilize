NodeList.prototype.forEach = Array.prototype.forEach; 
HTMLCollection.prototype.forEach = Array.prototype.forEach;

document.addEventListener('DOMContentLoaded', function(e) {
	
	/** @auth Matheus, João, Fernando
	 * MOSTRAR E ESCONDER MODAL AO CLICAR UMA OU DUAS VEZES NO SELETORES ABAIXO
	 */
	document.querySelectorAll('[data-toggle=modal], div.alpha').forEach(function($e, i, n) {
		$e.ondblclick = function(event) {
			return openBox($e);
		};			
		$e.onclick = function(event) {
			if ($e.nodeName.toLowerCase() == 'input')
				return true;
			return openBox($e);
		}
	});
	
});

jQuery(document).ready(function () {
	/** @auth Matheus
	 * ADICIONAR MODAL EM TODAS AS PAGINAS
	 */
	jQuery('body').append('<div class="alpha"><div class="modal"><iframe></iframe></div></div>');
	
	/** @auth Matheus
	 * ESCONDER ELEMENTOS DEPOIS DE 2 SEGUNDOS
	 */
	if (!jQuery('.time-out').is(':empty')) {
		setTimeout(function () {
           jQuery('.time-out').toggle(); 
        }, 2000);
    }
	
	/** @auth Matheus
	 *  INICIO TABS
	 */
	jQuery('li.active a').each(function() {
		var idActive = $(this).attr('href').replace('#', '');
		jQuery('div#' + idActive).fadeIn();
	})
	
	jQuery('ul.tab-default a').click(function(e) {
        e.preventDefault();
        if ($(this).closest('li').attr('class') == 'active'){
        	return;
        } else {             
          jQuery('div.tab-group').find('div[id^=content]').attr({'aria-expanded' : 'false', 'aria-hidden' : 'true'}).hide();
          jQuery('ul.tab-default li').removeAttr('class').attr('aria-selected', 'false');
          $(this).parent().addClass('active').attr('aria-selected', 'true');
          jQuery('div#content-' + $(this).attr('id')).attr({'aria-expanded' : 'true', 'aria-hidden' : 'false'}).fadeIn();
        }
    });
	/**
	 * FIM TABS
	 */
	
	/** @auth Matheus
	 * READONLY PARA SELECTS
	 */
	jQuery('select[readonly]').css({'background' : '#ECEEEF', 'pointer-events' : 'none'});
	
	/** @auth Matheus
	 * SETANDO LI ATIVO DE ACORDO COM URL
	 */
//	jQuery('li[id=' + getFinal() + ']').addClass('active');
	
});

/** @auth Matheus e Fernando
 * ABRIR E FECHAR OPENBOX
 */
function openBox($obj) {
	if (($obj.href || $obj.formAction) != undefined)
		jQuery('iframe').attr('src', ($obj.href || $obj.formAction));
	if ($obj.nodeName.toLowerCase() == 'div') {
		jQuery('div.alpha').fadeOut(300);
		jQuery('div.modal').fadeOut(300);
	} else {
		jQuery('div.alpha').fadeIn(300);
		jQuery('div.modal').fadeIn(300);
	}
	return false;
}

/** @auth Matheus
 * MOSTRAR OU ESCONDER ELEMENTO INFORMADO NOS PARAETROS
 */
function toggleElement(element, parametro) {
	jQuery(element + '[data-toggle=' + parametro + ']').fadeToggle("slow");
}

/** @auth Matheus
 * IDENTIFICAR URL PARA ATIVAR LI
 */
function identityUrl() {
	return window.location.href;
}
function getFinal() {
	var url = identityUrl();
	return url.substring(url.lastIndexOf('/') + 1);
}