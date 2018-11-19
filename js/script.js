//event pada saat link di klik
$('.page-scroll').on('click', function(e) {

	//ambil isi href (#home, #about, #portofolio, #contact)
	//this (link yang bersangkutan atau yg di klik)
	var tujuan = $(this).attr('href');
	// console.log(href);

	//untuk menangkap elemen yang bersangkutan
	var elemenTujuan = $(tujuan);
	// console.log(elemenTujuan);


	//memindahkan scroll
	$('html').animate({
	scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'easeInOutExpo');
	//1000 = 1 detik (satuan waktu)
	//swing = efek scroll (efek ayunan)

	e.preventDefault();

});

//Parallax
$(window).scroll(function()			/*ARTI ELEMEN WINDOW = ADALAH ELEMEN YANG MENANGANI EVENT SCROLL*/
{
	var TitikScroll = $(this).scrollTop();
	/*console.log(TitikScroll);*/

	//gambar avatar
	$('.jumbotron img').css(
	{
		'transform' : 'translate(0px, '+ TitikScroll/12 +'%)'	/*translate(horizontal, 'vertikal'%)*/

	});

	//Teks h2
	$('.jumbotron h1').css(
	{
		'transform' : 'translate(0px, '+ TitikScroll/3 +'%)'	/*translate(horizontal, 'vertikal'%)*/

	});

	//Teks p
	$('.jumbotron p').css(
	{
		'transform' : 'translate(0px, '+ TitikScroll +'%)'	/*translate(horizontal, 'vertikal'%)*/

	});
});

//LANDING SCROLL PORTOFOLIO
$(window).scroll(function()
{
	var TitikScroll = $(this).scrollTop();
	/*console.log(TitikScroll);*/

	if (TitikScroll > $('.about').offset().top - 50) 
	{
		/*console.log('Udah about, bos!');*/
		/*$('.portofolio .thumbnail').addClass('muncul');*/

		/*jQuery mengambil seluruh elemen thumbnail | each() = Setiap, pemisahan, dipirit, atau penambahan fungsi setiap elemennya*/ 
		$('.portofolio .thumbnail').each(function(i)
		{ 
			/*Event untuk menunggu beberapa waktu*/
			setTimeout(function() 
			{
				// console.log('Muncul, udah 2 detik!');

				//munculin gambar
				//method eq = untuk munculin satu2 atau elemen yg keberapa
				$('.portofolio .thumbnail').eq(i).addClass('muncul');
				
			}, 300 * i);	/*2000 = 2 detik*/
		});
	}
});

$(window).on('load', function() 
{
	$('.pKiri').addClass('pMuncul');		//Munculin pKiri
	$('.pKanan').addClass('pMuncul');		//Munculin pKanan
})