$(document).ready(function(){

	var company_logo_image = '<div style="float:left;"><img src="http://oxosolutions.in/wp-content/uploads/2015/02/logo.svg" alt="OXO Solutions® | OXO IT SOLUTIONS PRIVATE LIMITED" style="width:120px;max-height:104px; height: auto !important" class="retina_logo"></div>';
	
	var company_logo_title = '<div id="logo_text">';
		company_logo_title = company_logo_title + ' <div id="site_title"><a id="site_name" href="http://oxosolutions.in/">OXO Solutions® | OXO IT SOLUTIONS PRIVATE LIMITED</a></div>';
	 	company_logo_title = company_logo_title +  '</div>';
    
    var company_header_banner = '<div id="header-banner" style="float:right;">';
    	company_header_banner = company_header_banner + '<h1 class="banner-title" style="color: #168dc5; margin: -35px 40px 4px 0px; font-size: 18px; line-height: 22px; font-weight: 500; font-family: "Open Sans",Arial, Helvetica, sans-serif;">Empowering small to large businesses since 2008</h1>';
    	company_header_banner = company_header_banner + '<h3 class="banner-desc" style="text-align: right; margin: 0px 40px 0px 0px; font-size: 18px; line-height: 20px; font-weight: 100; font-family: "Open Sans",Arial, Helvetica, sans-serif;">Fulfilling all your IT needs at single stop</h3>';
    	company_header_banner = company_header_banner + '</div>';
    	
	var company_footer = '<div style=" display: inline-block; width: 100%; height: 60px; padding-top: 18px; text-align: center; background-color: #282a2b;">©2015 <a href="http://oxosolutions.in">OXO IT SOLUTIONS PRIVATE LIMITED</a>. All rights reserved. <a href="http://darlic.com" target="_blank">DARLIC™</a> is a registered trademark of <a href="http://oxosolutions.in">OXO IT SOLUTIONS PVT LTD.</a></div>';
                        
	var header_html = company_logo_image + company_logo_title + company_header_banner;
	var footer_html = company_footer;

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
