/*global $, console, jQuery, alert, console*/

$(document).ready(function(){
    "use strict"; // For Js Line Errors
  

//editor
ClassicEditor
    .create( document.querySelector( '#editor' ),{
        removePlugins: [ 'Heading','Bold' ,'Italic', 'BlockQuote' ],
        extraPlugins: 'imgbrowse',
        height : 300
    })
    
    .catch( error => {
        console.error( error );
});

});