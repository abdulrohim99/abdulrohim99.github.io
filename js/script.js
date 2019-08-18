$('.page-scroll').on('click', function(e){


var tujuan = $(this).attr('href');

//tangkap elemen yang bersangkutan
var elemenTujuan = $(tujuan);

$('body').animate({ 
	scrollTop: elemenTujuan.offset().top - 50
},1250, 'easeOutQuad');

e.preventDefault();

});