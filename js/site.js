//Dynamic height of the map

$(document).ready(function(){
	var resultSearch = $('.resultSearch'), logo = $('.brand-logo'), header = $('.page-header'), footer = $('.page-footer'), footerText = $('.page-footer .container'), map = $('#map'), displayHeight = $(window).height();
	$(header).css('height', 0.1*displayHeight+'px');
	$(footer).css('height', 0.1*displayHeight+'px');
	$(map).css('height', 0.8*displayHeight+'px');
	$(resultSearch).css('height', 0.25*displayHeight+'px');
	$(resultSearch).css('bottom', 0.115*displayHeight+'px');

	$(logo).css({height: $(header).height()-10+'px', marginTop: '5px', marginBottom: '5px'});
	$(footerText).css('line-height', $(footer).height()+'px');

	$(window).resize(function(){
		var resultSearch = $('.resultSearch'), logo = $('.brand-logo'), header = $('.page-header'), footer = $('.page-footer'), footerText = $('.page-footer .container'), map = $('#map'), displayHeight = $(window).height();
		$(header).css('height', 0.1*displayHeight+'px');
		$(footer).css('height', 0.1*displayHeight+'px');
		$(map).css('height', 0.8*displayHeight+'px');
		$(resultSearch).css('height', 0.25*displayHeight+'px');
		$(resultSearch).css('bottom', 0.115*displayHeight+'px');

		$(logo).css({height: $(header).height()-10+'px', marginTop: '5px', marginBottom: '5px'});
		$(footerText).css('line-height', $(footer).height()+'px');
	});
});

//datepicker materielize options

$('.datepicker').pickadate({

    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
    firstDay: true, // first day of the week, True = Monday False= Sunday

    labelMonthNext: 'mois suivant',
    labelMonthPrev: 'mois précédent',
    labelMonthSelect: 'Choisir un mois',
    labelYearSelect: 'Choisir une année',
    monthsFull: [ 'Janiver', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ],
    monthsShort: [ 'Jan', 'Feb', 'Mar', 'Avr', 'Mai', 'Jui', 'Juil', 'Au', 'Sep', 'Oct', 'Nov', 'Dec' ],
    weekdaysFull: [ 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi','Samedi' ],
    weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    weekdaysLetter: [ 'D', 'L', 'Ma', 'Me', 'J', 'V', 'S' ],
    today: 'aujourd\'hui',
    clear: 'effacer',
    close: 'Fermer'
});