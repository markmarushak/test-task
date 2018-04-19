var obj = [];
var sum = 0;
var result = [];
$('.diagram-map tr').each(function (i,v) {
	obj[i] = [
		$(this).find('td[diagram-number]').html().trim()
	];
});
$.each(obj, function(){
	sum += parseInt(this)
});
$('.diagram-map tr').each(function (i,v) {
	$.each(obj, function(i){
		result[i] = [parseInt(this)*100/sum];
	});
	$(this).find('td[diagram-number]').attr('diagram-number','true').prev().find('span').css('width', result[i]+'%');
});
$('.summ').html(sum);
