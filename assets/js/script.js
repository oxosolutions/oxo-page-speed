$(document).ready(function(){

	var company_logo_image = '';
	
	var company_logo_title = '<div class="logo_text">';
	company_logo_title = company_logo_title + ' <div> <a href="https://oxosolutions.com" title="OXO Solutions® Logo"><img src="https://oxosolutions.com/wp-content/uploads/2019/03/oxosolutions-logo-website.png" alt="OXO Solutions® Logo for Website" width="" height="60"></a></div>';
	company_logo_title = company_logo_title +  '</div>';

	var company_header_banner = '<div class="header-banner">';
	company_header_banner = company_header_banner + '<h1 class="banner-title">Empowering small to large businesses since 2008</h1>';
	company_header_banner = company_header_banner + '<h3 class="banner-desc">Fulfilling all your IT needs at single stop</h3>';
	company_header_banner = company_header_banner + '</div>';

	var company_footer = '<div class="company-footer">©2019 <a href="http://oxosolutions.in">OXO Solutions®</a>. All rights reserved. <a href="http://oxosolutions.in" target="_blank">OXO Solutions®</a> is a registered trademark of <a href="http://oxosolutions.in">OXO IT SOLUTIONS PRIVATE LIMITED.</a></div>';
	var style = `<style>
	.logo_text{
		float:left;
		width:50%;
	}
	.header{
		padding:10px 5%; 
	}
	.header:after {
		content: "";
		display: table;
		clear: both;
	}
	.header-banner{
		width:50%;
		float:left;
		text-align:right;
	}
	.banner-title{
		color: #168dc5;
		font-size: 18px; 
		line-height: 25px; 
		font-weight: 500; 
		font-family: "Open Sans",Arial, Helvetica, sans-serif;
		margin-bottom: 5px;
	}
	.banner-desc{
		text-align: right;
		font-size: 18px;
		line-height: 20px;
		font-weight: 100;
		font-family: "Open Sans",Arial, Helvetica, sans-serif;
		margin: 0;
	}
	.company-footer a{
		color:#ffffff;
		text-decoration: none;
	}
	.company-footer{
		display: inline-block;
		width: 100%;
		height: 60px;
		padding-top: 18px;
		text-align: center;
		background-color: #282a2b;
	}
	</style>`;

	var header_html = company_logo_image + company_logo_title + company_header_banner;
	var footer_html = company_footer+style;

	$('.header').html( header_html );
	$('.footer').html( footer_html );
	
	$('aside').remove();
	$('.report-tips').remove();
	$('.report-rules-sidebar').remove();
	
	$('li a[href^="#"]').each(function(){ 

	            var oldUrl = $(this).attr("href"); // Get current url

	            if( oldUrl == '#history' || oldUrl == '#video' ){
	            	$(this).parent().remove();
	            }

	        });

	// $('li a[href="#yslow"]').click(); 

	var $div = $('<div />').appendTo('body');
	$div.attr('id', 'editor');

	
});



$(function () {

	var specialElementHandlers = {
		'#editor': function (element,renderer) {
			return true;
		}
	};
	$('li a[href="#yslow"]').click(function () {
		var doc = new jsPDF();
		doc.fromHTML($('.page-wrapper').html(), 15, 15, {
			'width': 170,'elementHandlers': specialElementHandlers
		});
		doc.save('sample-file.pdf');
	});  
});
