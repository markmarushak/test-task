$(document).ready(function() {
	var t = moment().locale('ru').format('DD MMMM YYYY');

    $('input#date').val(t);

    $('#form-comments').submit(function (event) {
		event.preventDefault();

		var data = $('#form-comments').serializeArray();

		$.ajax({
			url: '',
			data: data,
			success:function () {
				$('.comment > div ').append(
					'<div class="row animated fadeInUp">\n' +
                    '\t\t\t\t<div class="col">\n' +
                    '\t\t\t\t\t<div class="comment-user">\n' +
                    '\t\t\t\t\t\t<div class="comment-user-name">\n' +
                    '\t\t\t\t\t\t\t<strong>'+ data[0].value +
					'</strong>\n' +
                    '\t\t\t\t\t\t\t<div class="comment-user-data">'+ data[1].value +
					'</div>\n' +
                    '\t\t\t\t\t\t</div>\n' +
                    '\t\t\t\t\t</div>\n' +
                    '\t\t\t\t</div>\n' +
                    '\t\t\t\t<div class="col-12">\n' +
                    '\t\t\t\t\t<div class="comment-text">'+ data[2].value+
					'</div>\n' +
                    '\t\t\t\t</div>\n' +
                    '\t\t\t</div>'
				)
			}
		});
	});

});