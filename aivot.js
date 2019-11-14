function laatikkoFunktio(boxNumber){
    alert("Nyt vaihdetaan laatikko"+ boxNumber + ":n sisältöä!");

    if (boxNumber == 1){
        document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>Tähän tulee uusi otsikko!</h1>" + 
        "<p>Ja tähän tietysti jotain sisältöä...</p>";
        document.getElementById("laatikko1").style.lineHeight = "50px";
    }
    else if (boxNumber == 2){
        // toiminnallisuus puuttuu!
    }
    else{
        //toiminnallisuus puuttuu!
    }
    
}
function yhteystietoFunktio() {
    var x = document.getElementById("yhteystietolomake");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
  }
  function diagrammiFunktio(){
   alert("bäääh"); 
   var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var arvoArray;
    var arvoPituus;
    var piste=40;
    arvoArray = [100, 150, 100, 110, 120, 110, 120, 120, 130, 150, +
    100, 150, 100, 110, 120, 110, 420, 320, 430, 150 +
    150, 100, 150, 100, 110, 120, 110, 120, 120, 130, 150];

    arvoPituus= arvoArray.length;

    ctx.strokeStyle = "blue";
    ctx.beginPath();

    ctx.moveTo(piste, 500-arvoArray[0]);
    ctx.fillText(arvoArray[0], piste, 500-arvoArray[0]);

    for (i = 1; i < arvoPituus; i++) {
        piste=piste+20;
        ctx.lineTo(piste, 500-arvoArray[i]);
        ctx.fillText(arvoArray[i], piste, 500-arvoArray[i]);
    }
    ctx.stroke();

   /* ctx.beginPath();
    ctx.strokestyle = "red"
    ctx.moveTo(40, 200);
ctx.lineTo(60, 250);
ctx.lineTo(80, 200);
ctx.lineTo(100, 210);
ctx.stroke();*/
}

    
