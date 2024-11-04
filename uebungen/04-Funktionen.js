console.log("Funktionen")
console.log("==========")

//Funktionen führen Operationen aus.
let leange=3;
let breite=5;

let flaecheninhalt = leange * breite 

console.log("Flächeninhalt: " + flaecheninhalt)

//Jetzt die Berechnung in einer Funktion

//Zuerst wird die Funktion erstellt:

function berechne flaecheninhalt(leange, breite){
    return leange*breite
}

//In einem zweiten Schritt wird die Funktion aufgerufen:

console.log("Flächeninhalt: " + berechnFlaecheninhalt(10,10))

//Der Vorteit von Funktionen ist, dass die Berechnung im Rumpf nur einmal ausvormuliert werden muss.

//So werden Funktionen erstellt:

//1. Das reservierte Wort funktion
//2. Ein sprechender Name. D. h., der Name soll beschreiben, was die Funktion macht.
//3. Runde Klammern am Ende nehmen Parameter entgegen. Parameter sind das was die Funktion als  Input 
//   zur Berechnung benötigt. Funktionen können mehrere oder auch keinen Parameter entgegennehmen
//4. In den geschweiften Klammern wird die Logik ausprogramiert.
//5. Mit dem reservierten Wort return wird das Ergebnis zurückgegeben.

console.log("Aufgabe 1")
console.log("==========")
//Berechne das Volumen eines Quadrats mit einer Funktion:

function berechneVolumen(leange,breite,höhe){
    return laenge * breite * höhe
}

console.log("Volumen: " + berechneVolumen(5,6,7))

console.log("Aufgabe 2")
console.log("==========")
//Berechne den Bruttopreis aus dem Nettopreis

function berechneBruttopreis(nettopreis, mehrwertssteuersatz){
    return nettopreis + nettopreis
} 

console.log("Bruttopreis: " + berechneBruttopreis(100,0.19))

console.log("Aufgabe 3")
console.log("=========")
//Berechne die Schulnote aus der Abitur-Punktzahl.

funktion punkteZuNote (punkte){
    if(punkte === 15) return "1+"
    else if(punkte === 14) return "1"
    else if(punkte === 13) return "1-"
    else if(punkte === 12) return "2+"
    else if(punkte === 11) return "2"
    else if(punkte === 10) return "2-"

}

let punkte = 10;

let note = punkteZuNote(10)

console.log("Note: " + note)

console.log("Aufgabe 4")
console.log("=========")
//Funktionen können auch innerhalb von Klassen definiert werden.
//Beispiel: Kredit

class Kredit{
    constructor(){
        this.laufzeit
        this.Betrag
        this.Zinssatz
    }
    berechneGesammtkostenAmEndeDerLaufzeit(){
        return this.Betrag (" Math.powl(1 + this.Zinsatz), this.laufzeit")
    }
}

let kredit = Kredit()
kredit.Bertrag = 100
kredit.laufzeit = 2
kredit.Zinsatz = 0.1

console.log ("Gesamtkosten: " + kredit.berechneGesammtkostenAmEndeDerLaufzeit())
