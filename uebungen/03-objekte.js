// Bislang speichern wir Werte in Variablen.
// Bsp: let vorname = "Hans"
// Jede Variable nimmt genau einen Wert auf. In dem Beispiel ist der Wert "Hans".
// In der realen Welt gibt es Objekte, über die mehrere Werte abgespeichert werden sollen.
// Interessierende Eigenschaften: Vorname, Nachname, Geburtsdatum, Geburtsort, Klasse, Anschrift,...
// Bislang haben wir das so gelöst:
// let vorname = "Hans"
// let klasse = "GW23A"
// let ...
// Problem: Die Eigenschaften stehen in keinem Zusammenhang.
// Um den Zusammenhang zwichen einzelnen Werten herzustellen, gibt es Klassen und Objekte.
// Zunächst lägt der Programierer zur Entwicklungszeit die Baupläne (Klassen) fest, nac denen Objekte zur

class Schueler { 
    constructor(){
        this.Vorname
        this.Nachname
        this.Klasse

    }

 }

 // Die Objekte werden nun aus dem Bauplan (=Klasse) wie folgt erzeugt:

 let schueler = new Schueler()
 schueler.Vorname = "Hans"
 schueler.Nachname = "Meyer"
 schueler.Klasse = "GW23A"

 // Die Werte können wieder ausgegeben werden:

 console.log("Nachname: " + schueler.Nachname + ",Vorname: " + schueler.Vorname )

 let schueler2 = new Schueler()
 schueler2.Nachname = "Müller"
 schueler2.Vorname = "Pit"
 schueler2.Klasse = "GW23A"

 console.log("Nachname: " + schueler2.Nachname + ", Vorname: " + schueler2. Vorname)

// Um aus dem Bauplan (=Klasse) ein konkretes Objekt zu erzeugen, sind 3 Schritte notwendig:
// 1. DEKLARATION      let schueler()
//                     Bei der Deklaratin wird bekanntgegeben, dass es ein Objekt namens schueler geben soll.
// 2. INITIALISIERUNG: = new Scheule()
//                     Bei der Instanziierung werden Speicherzellen im Arbeitsspeicher reserviert, um Eigenschaften aufzunehmen
// 3. INITIALISIERUNG: schueler.Nachname = "Schmidt"
//                     Bei der Initialisierung werden konkrete Werte in die Speicherzellen geschrieben


console.log("Aufgabe 1")
//Für eine Autovermietng sollen Autos verwaltet werden.
//Erstelle den Bauplan, um dann drei Objekte zu instanziieren.

class Auto { 
    constructor(){
        this.Preis
        this.Farbe
        this.Baujahr

    }
 }
// Aus dem Bauplan werden nun drei Ojekte deklariert und instanziiert:

let borAb123 = new Auto();
let borXy876 = new Auto();
let borQz253 = new Auto();
//INIZIALISIERUNG
borAb123.Preis = 30000 // Zahlen ohne Anführungszeichen
borAb123.Baujahr = 2000
borAb123.Farbe = "blau"

console.log("Preis: " + borAb123.Preis + ", Baujahr: " + borAb123.Baujahr + ", Farbe: " + borAb123.Farbe)

console.log("Aufgabe 2")
// Deklariere, instanziiere und initalisiere ein Objekt der realen Welt der eigenen Wahl.
// Beispiel: Florian programiert sich ein Programm zur Verwaltung seiner Fahrräder:

class Fahrrad { 
    constructor(){
        this.Preis
        this.Farbe
        this.Typ

    }
 }

 let Fahrrad = new Fahrrad()

 fahrrad.Preis = 1000
 fahrrad.Farbe = "rot"
 fahrrad.Typ = "Mountainbike"

 console.log("Preis: " + fahrrad.Preis + ", Farbe: " + fahrrad.Farbe + "Typ" + fahrrad.Typ)