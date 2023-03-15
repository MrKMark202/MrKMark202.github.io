    var tekst = "POZDRAV I DOBRODOŠAO!";

    var i = 0;

    function samopisuciTekst() {
      if (i < tekst.length) {
        document.getElementById("samopisajuci-tekst").innerHTML += tekst.charAt(i);
        i++;
        setTimeout(samopisuciTekst, 100);
      } else {
        setTimeout(obrisiTekst, 1000);
      }
    }

    function obrisiTekst() {
      if (i >= 0) {
        var tekstNovi = tekst.substring(0, i);
        document.getElementById("samopisajuci-tekst").innerHTML = tekstNovi;
        i--;
        setTimeout(obrisiTekst, 50);
      } else {
        i = 0;
        setTimeout(samopisuciTekst, 1000);
      }
    }

    samopisuciTekst();


var myIndex = 0;
carousel();

function carousel() {
  var ii;
  var x = document.getElementsByClassName("mySlides");
  for (ii = 0; ii < x.length; ii++) {
    x[ii].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 1000);    
}