    var tekst = "Pozdrav i dobrodošao!";
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