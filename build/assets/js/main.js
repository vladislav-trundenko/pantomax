$(document).ready(function (){
	$('#nav-toggle').on('click', function(e) {
		e.preventDefault();
		if ( $('#order').hasClass('open-order')){
		$('#order').removeClass('open-order');
		$(this).text('Сделать заказ');
		}else {
		$('#order').hide().addClass('open-order');
		$(this).text('Отмена');
	}
	});
});