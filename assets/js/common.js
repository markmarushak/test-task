$(document).ready(function() {

	$('.sender-button').click(function (event) {
		event.preventDefault();

		var data = $('form').serialize();

		console.log(data);
		$.ajax({
			url: ajax.php,
			data: data,
			success:function (data) {
				alert('good');
			}
		});
	});

});