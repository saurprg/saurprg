$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#home']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
})

function _(id){ return document.getElementById(id); }
function submitForm(){
  var name=_("name").value;
  var mail=_('email').value;
  var comments=_('comments').value;
  var service = true;
  if(service){
    _("status").innerHTML = 'Currently Service is not available..'
  }
  else if(mail==="" || name==="" ||comments==="")
  {
    _("status").innerHTML = '*fill the form completly...';
  }else{  
    _("send").disabled = true;
    _("status").innerHTML = 'Thanks '+_("name").value+', your message has been sent...';
    var formdata = new FormData();
    formdata.append( "n", _("name").value );
    formdata.append( "e", _("email").value );
    formdata.append( "m", _("comments").value );
    var ajax = new XMLHttpRequest();
    ajax.open( "POST", "util.php" );
    ajax.onreadystatechange = function() {
      if(ajax.readyState == 4 && ajax.status == 200) {
        if(ajax.responseText == "success"){
          _("status").innerHTML = '<h2>Thanks '+_("name").value+', your message has been sent.';
        } else {
          _("status").innerHTML = ajax.responseText;
          _("mybtn").disabled = false;
        }
      }
    }
    ajax.send();
  }
}