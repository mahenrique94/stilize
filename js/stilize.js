NodeList.prototype.forEach = Array.prototype.forEach; 
HTMLCollection.prototype.forEach = Array.prototype.forEach;

jQuery(document).ready(function () {
	
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
	var $tabActive = document.querySelector('li.active');
	if ($tabActive != undefined && $tabActive != null) {
		showTab(document.getElementById($tabActive.getAttribute('aria-controls')));
	}
	document.querySelectorAll('ul[class^=tab] a').forEach(function($link) {
		$link.addEventListener('click', function(e) {
			e.preventDefault();
			this.parentNode.parentNode.getElementsByClassName('active')[0].classList.remove('active');
			this.parentNode.classList.add('active');
			hideTab(document.querySelector('.tab-group div[aria-expanded=true]'));
			showTab(document.getElementById(this.href.substring(this.href.lastIndexOf('#') + 1)));
		});
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
	
	/** @auth Matheus
	 *  Slide nav-mobile
	 */
	if (document.querySelector('.nav-mobile a') != undefined) {
		document.querySelector('.nav-mobile a').addEventListener('click', function() {
			event.preventDefault();
			if (this.dataset.slide == 'false') {
				jQuery(this).parent().siblings('li').slideDown();
				this.dataset.slide = true;
			} else {
				jQuery(this).parent().siblings('li').slideUp();
				this.dataset.slide = false;
			}
		});
	}
	
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

/** @auth Matheus
 *  Funções para mostrar e esconder tabs com JS puro sem efeitos IN-OUT
 */
function showTab(obj) {
	obj.style.display = 'block';
	obj.setAttribute('aria-expanded', true);
	obj.setAttribute('aria-hidden', false);
};
function hideTab(obj) {
	obj.style.display = 'none';
	obj.setAttribute('aria-expanded', false);
	obj.setAttribute('aria-hidden', true);
};