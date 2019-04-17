document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';


var jquery = document.createElement( 'script' );
var script = document.createElement( 'script' );

//append all elements
document.body.appendChild( jquery );
document.body.appendChild( script );

jquery.src 	= 'https://code.jquery.com/jquery-3.2.1.min.js'; 
script.src 	= 'https://projects.oxosolutions.com/oxo-page-speed/assets/js/script.js'; 
