function info () {
    Swal.fire({
        title: "Come si gioca?",
        text: "Il Sudoku è un gioco di logica e numeri su una griglia 9x9 divisa in sotto-griglie 3x3. " +
              "Riempi la griglia con numeri da 1 a 9 in modo che ogni riga, colonna e sotto-griglia contenga ogni numero senza ripetizioni." + 
              "Risolvi il sudoku usando logica e ragionamento deduttivo, evitando di indovinare. Buon divertimento a risolvere i puzzle!",
        icon: "info"
      });
}

function play () {
    document.getElementById("pag1").style.display = "none"
    document.getElementById("pag2").style.display = "block"
    document.getElementById("pag3").style.display = "none"
    document.body.style.backgroundImage = "url('immagini/pag2.png')"
}

function home () {
    location.reload()
}

var livello
function facile () {
    document.getElementById("pag2").style.display = "none"
    document.getElementById("pag3").style.display = "block"
    document.body.style.backgroundImage = "url('immagini/liv facile.png')"
    var id_name
    for ( i=0 ; i<=60 ; i++ ) { //in questo for mi porto le input con id n1, n2, n3, ... con lo stile delle blank (ovviamente mi porto quelle che nel livello semplice sono già col numero)
        id_name = "n" + i
        if ( i==1 || i==2 || i==6 || i==8 || i==10 || i==12 || i==14 || i==16 || i==17 || i==19 || i==20 || i==22 || i==24 || i==26 || i==27 || i==30 || i==31 || i==33 || i==34 || i==36 || i==39 || i==42 || i==44 || i==45 || i==47 || i==48 || i==49 || i==52 || i==53 || i==54 || i==57 || i==59 || i==60) {
            document.getElementById(id_name).style.background = "none"
            document.getElementById(id_name).readOnly = true
        }
    }
    livello = "facile"
}
function medio () {
    document.getElementById("pag2").style.display = "none"
    document.getElementById("pag3").style.display = "block"
    document.body.style.backgroundImage = "url('immagini/liv medio.png')"
    var id_name
    for ( i=0 ; i<=60 ; i++ ) { //in questo for mi porto le input con id n1, n2, n3, ... con lo stile delle blank (ovviamente mi porto quelle che nel livello semplice sono già col numero)
        id_name = "n" + i
        if ( i==2 || i==3 || i==11 || i==12 || i==13 || i==17 || i==19 || i==22 || i==25 || i==27 || i==29 || i==30 || i==31 || i==34 || i==38 || i==41 || i==45 || i==48 || i==49 || i==51 || i==53 || i==56 || i==57 || i==60) {
            document.getElementById(id_name).style.background = "none"
            document.getElementById(id_name).readOnly = true
        }
    }
    livello = "medio"
}
function difficile () {
    document.getElementById("pag2").style.display = "none"
    document.getElementById("pag3").style.display = "block"
    document.body.style.backgroundImage = "url('immagini/liv difficile.png')"
    var id_name
    for ( i=0 ; i<=60 ; i++ ) { //in questo for mi porto le input con id n1, n2, n3, ... con lo stile delle blank (ovviamente mi porto quelle che nel livello semplice sono già col numero)
        id_name = "n" + i
        if ( i==5 || i==8 || i==15 || i==20 || i==21 || i==26 || i==29 || i==33 || i==37 || i==44 || i==51 || i==52 || i==54 || i==56 || i==59) {
            document.getElementById(id_name).style.background = "none"
            document.getElementById(id_name).readOnly = true
        }
    }
    livello = "difficile"
}

function verifica () {
    var cas_input = document.getElementsByClassName("input-box");
    for (var i = 0; i < cas_input.length; i++) {
        cas_input[i].style.display = "block";
        cas_input[i].readOnly = true;
    }

    /*devo sistemare questa funzione e ho finito, nel frattempo faccio informatica*/
    if (livello == "facile") {
        var test = true; // Inizialmente impostiamo il test a true
        if (!(document.getElementById("n5").value == 1 && document.getElementById("n41").value == 1)) test = false;
        if (!(document.getElementById("n4").value == 2 && document.getElementById("n32").value == 2 && document.getElementById("n50").value == 2)) test = false;
        if (!(document.getElementById("n15").value == 3 && document.getElementById("n25").value == 3 && document.getElementById("n35").value == 3 && document.getElementById("n43").value == 3)) test = false;
        if (!(document.getElementById("n11").value == 4 && document.getElementById("n21").value == 4 && document.getElementById("n55").value == 4)) test = false;
        if (!(document.getElementById("n9").value == 5 && document.getElementById("n29").value == 5 && document.getElementById("n38").value == 5 && document.getElementById("n58").value == 5)) test = false;
        if (!(document.getElementById("n23").value == 6 && document.getElementById("n56").value == 6)) test = false;
        if (!(document.getElementById("n3").value == 7 && document.getElementById("n7").value == 7 && document.getElementById("n18").value == 7 && document.getElementById("n46").value == 7)) test = false;
        if (!(document.getElementById("n28").value == 8 && document.getElementById("n51").value == 8)) test = false;
        if (!(document.getElementById("n13").value == 9 && document.getElementById("n37").value == 9 && document.getElementById("n40").value == 9)) test = false;
    
    } else if (livello == "medio") {
        var test = true; // Inizialmente impostiamo il test a true
        if (!(document.getElementById("n5").value == 1 && document.getElementById("n14").value == 1 && document.getElementById("n24").value == 1 && document.getElementById("n59").value == 1)) test = false;
        if (!(document.getElementById("n4").value == 2 && document.getElementById("n32").value == 2 && document.getElementById("n50").value == 2)) test = false;
        if (!(document.getElementById("n10").value == 3 && document.getElementById("n15").value == 3 && document.getElementById("n35").value == 3 && document.getElementById("n43").value == 3)) test = false;
        if (!(document.getElementById("n21").value == 4 && document.getElementById("n33").value == 4 && document.getElementById("n44").value == 4 && document.getElementById("n47").value == 4 && document.getElementById("n55").value == 4)) test = false;
        if (!(document.getElementById("n1").value == 5 && document.getElementById("n9").value == 5 && document.getElementById("n20").value == 5 && document.getElementById("n58").value == 5)) test = false;
        if (!(document.getElementById("n23").value == 6 && document.getElementById("n26").value == 6 && document.getElementById("n39").value == 6 && document.getElementById("n52").value == 6)) test = false;
        if (!(document.getElementById("n7").value == 7 && document.getElementById("n18").value == 7 && document.getElementById("n36").value == 7)) test = false;
        if (!(document.getElementById("n16").value == 8 && document.getElementById("n28").value == 8 && document.getElementById("n42").value == 8 && document.getElementById("n54").value == 8)) test = false;
        if (!(document.getElementById("n6").value == 9 && document.getElementById("n8").value == 9 && document.getElementById("n37").value == 9 && document.getElementById("n40").value == 9)) test = false;
    
    } else if (livello == "difficile") {
        var test = true; // Inizialmente impostiamo il test a true
        if (!(document.getElementById("n14").value == 1 && document.getElementById("n24").value == 1 && document.getElementById("n27").value == 1 && document.getElementById("n41").value == 1 && document.getElementById("n48").value == 1)) test = false;
        if (!(document.getElementById("n4").value == 2 && document.getElementById("n12").value == 2 && document.getElementById("n22").value == 2 && document.getElementById("n32").value == 2 && document.getElementById("n34").value == 2 && document.getElementById("n50").value == 2 && document.getElementById("n53").value == 2)) test = false;
        if (!(document.getElementById("n10").value == 3 && document.getElementById("n25").value == 3 && document.getElementById("n30").value == 3 && document.getElementById("n35").value == 3 && document.getElementById("n43").value == 3 && document.getElementById("n57").value == 3)) test = false;
        if (!(document.getElementById("n2").value == 4 && document.getElementById("n11").value == 4 && document.getElementById("n47").value == 4 && document.getElementById("n55").value == 4)) test = false;
        if (!(document.getElementById("n1").value == 5 && document.getElementById("n9").value == 5 && document.getElementById("n38").value == 5 && document.getElementById("n45").value == 5 && document.getElementById("n58").value == 5)) test = false;
        if (!(document.getElementById("n17").value == 6 && document.getElementById("n23").value == 6 && document.getElementById("n39").value == 6)) test = false;
        if (!(document.getElementById("n3").value == 7 && document.getElementById("n7").value == 7 && document.getElementById("n18").value == 7 && document.getElementById("n36").value == 7 && document.getElementById("n46").value == 7 && document.getElementById("n60").value == 7)) test = false;
        if (!(document.getElementById("n16").value == 8 && document.getElementById("n28").value == 8 && document.getElementById("n42").value == 8)) test = false;
        if (!(document.getElementById("n6").value == 9 && document.getElementById("n13").value == 9 && document.getElementById("n31").value == 9 && document.getElementById("n40").value == 9 && document.getElementById("n49").value == 9)) test = false;
    
    }

    // Dopo aver controllato tutti i numeri, determina se il test è passato o fallito
    if (test) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Hai vinto!!!",
            text: "Complimenti, sarai riportato alla pagina iniziale",
            showConfirmButton: false,
            timer: 3000
        });
        setTimeout(home, 5000); // Chiamare la funzione home() dopo 5 secondi
    } else {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Hai perso",
            text: "Ricontrolla i numeri e prova ancora",
            showConfirmButton: false,
            timer: 3000
        });
    }
}

function limitaValore(input) {
    // Ottieni il valore inserito dall'utente
    var valore = parseInt(input.value);
    // Controlla se il valore è superiore a 9
    if (valore > 9) {
        if ( input.value%10 == 0) {
            input.value = 1; // Imposta il valore minimo a 1
        } else {
            input.value = input.value%10; // se il valore inserito è maggiore di 9 lascio il resto (tipo se metto 34 lascio 4 quindi l'ultimo numero inserito)
        }
    }
    // Controlla se il valore è inferiore a 1
    if (valore < 1) {
        input.value = 1; // Imposta il valore minimo a 1
    }
}