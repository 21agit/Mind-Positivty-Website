# Pflichtenheft für eine Mind-Positivity Zitate Website


## Einführung
### Deckblatt
- **Projektbezeichnung:** Mind-Positivity Zitate Website

### Zweck des Dokuments 
Dieses Dokument beschreibt die technischen und funktionalen Anforderungen der Mind-Positivity Zitate Website detailliert. Es fördert klare Kommunikation, hilft bei der Planung und dem Zeitmanagement, gewährleistet Qualität und unterstützt das Risikomanagement. Zudem dient es auch als verbindlichen Vertrag zwischen Auftraggeber und Auftragnehmer.

### Zielsetzung

**Beschreibung des Projektes:** Eine einfache Webanwendung, die zufällige Zitate oder Bilder anzeigt, die die positive Einstellung des Benutzers fördern sollen. Die Webanwendung bietet auch die Möglichkeit, eigene Zitate oder Bilder hinzuzufügen oder eine Diashow aus Zitaten und Bildern zu starten.

**Funktionale Anforderungen:** Die vier Hauptanforderungen beziehen sich auf einen Hinzufügen-Button, einen Zitat-Button, einen Bild-Button und einen Diashow-Button. Der Hinzufügen-Button ermöglicht es dem Benutzer, ein eigenes Zitat und ein eigenen Bildlink einzugeben, die dann in die entsprechenden Arrays gespeichert werden. Der Zitat-Button zeigt ein zufälliges Zitat aus dem quotes-Array an. Der Bild-Button zeigt ein zufälliges Bild aus dem images-Array an. Der Diashow-Button startet eine Diashow, die alle fünf Sekunden ein zufälliges Zitat und ein zufälliges Bild aus den Arrays anzeigt.

**Nicht funktionale Anforderungen:** Die Webanwendung wird in HTML, CSS und JavaScript erstellt. Die Webanwendung wird responsive sein, um sich an verschiedene Bildschirmgrößen anzupassen. Die Webanwendung wird ein ansprechendes Design haben, das zum Thema Mind-Positivity passt. Die Webanwendung wird eine einfache und intuitive Benutzeroberfläche haben, die dem Benutzer klare Anweisungen und Feedback gibt. Die Webanwendung wird die Datenqualität der Zitate und Bilder sicherstellen, indem sie nur gültige Eingaben akzeptiert und ungültige Eingaben abweist.

## Funktionalitäten
### Systemarchitektur 
Die Webanwendung besteht aus einer HTML-Datei, bestehend aus HTML und CSS Elementen und einer JavaScript-Datei. Die HTML-Datei definiert die Struktur und den Inhalt der Webanwendung. Das CSS-Skript wurde direkt in die HTML-Datei integriert, um die Übersichtlichkeit zu verbessern und sie definiert das Aussehen und das Layout der Webanwendung. Die JavaScript-Datei definiert das Verhalten und die Logik der Webanwendung.


**Die index.html Datei enthält folgende HTML-Elemente:**

- Ein div-Element mit der Klasse title, das ein h1-Element mit dem Titel der Webanwendung enthält.  
- Ein div-Element mit der Klasse header, das vier button-Elemente mit den Klassen add-button, quote-button, image-button und slideshow-button enthält. Jeder Button hat einen Text, der seine Funktion beschreibt.  
- Ein div-Element mit der Klasse container, das ein div-Element mit der Klasse content enthält. Dieses Element wird verwendet, um das Zitat oder das Bild oder die Diashow anzuzeigen.  
- Ein div-Element mit der Klasse footer, das ein p-Element mit einem Link zu einer Hilfsseite enthält.


**Die index.html-Datei enthält folgende CSS-Regeln:**

- Die body-Regel definiert die Hintergrundfarbe, die Schriftart und die overflow-Eigenschaft der Website.
- Die title-Regel definiert die Position, die Breite, die Höhe, die Hintergrundfarbe, die Ausrichtung und die Anzeige der Überchrift.
- Die h1-Regel definiert die Textausrichtung und die Farbe der Überschrift.
- Die header-Regel definiert die Position, die Breite, die Höhe, die Hintergrundfarbe, die Ausrichtung und die Anzeige der Hintergrundleiste.
- Die container-Regel definiert die Ausrichtung, die Anzeige, die Höhe, den Abstand und die Richtung der Inhalte.
- Die button-Regel definiert die Breite, die Höhe, den Rand, den Radius, die Farbe, die Schriftgröße, den Cursor und den Abstand der Buttons.
- Die add-button-Regel definiert die Hintergrundfarbe des "Hinzufügen"-Buttons.
- Die quote-button-Regel definiert die Hintergrundfarbe des "Zitate"-Buttons.
- Die image-button-Regel definiert die Hintergrundfarbe des "Bild"-Buttons.
- Die slideshow-button-Regel definiert die Hintergrundfarbe des "Diashow"-Buttons.
- Die quote-Regel definiert die Schriftgröße, den Stil, die Textausrichtung und die maximale Breite der Zitate.
- Die image-Regel definiert die Breite, die Höhe, die Anpassung und die Ecken des Bildes.
- Die slideshow-Regel definiert die Ausrichtung und die Anzeige des slideshow-Elements.
- Die footer-Regel definiert die Position, die Breite, die Höhe, die Hintergrundfarbe, die Ausrichtung und die Anzeige der Fußzeile zum Nummer-gegen-Kummer Dienst.


**Die script3.js-Datei enthält folgende Funktionen und Variablen:**

- Die quotes-Variable ist ein Array, das zehn Zitate als Strings enthält.
- Die images-Variable ist ein Array, das zwölf Bild-URLs von Hunden und Katzen als Strings enthält.
- Die getRandomElement-Funktion nimmt ein Array als Parameter und gibt ein zufälliges Element aus dem Array zurück.
- Die showContent-Funktion nimmt einen String als Parameter, der entweder "quote" oder "image" sein kann, und zeigt ein zufälliges Zitat oder ein zufälliges Bild aus den Arrays an. Dazu wählt sie das content-Element aus, löscht seinen Inhalt, erstellt ein neues Element, je nach dem Parameter, und fügt es dem content-Element hinzu. Außerdem verschiebt sie die -buttons-Elemente nach oben oder unten, je nach dem Parameter.
- Die showSlideshow-Funktion zeigt eine Diashow aus zufälligen Zitaten und Bildern aus den Arrays an. Dazu wählt sie das content-Element aus, löscht seinen Inhalt, erstellt ein neues Element mit der Klasse slideshow, das ein zufälliges Zitat und ein zufälliges Bild enthält, und fügt es dem content-Element hinzu. Außerdem verschiebt sie die buttons-Elemente zufällig nach oben oder unten.
- Die addQuoteAndImage-Funktion ermöglicht es dem Benutzer, ein eigenes Zitat und ein eigenes Bild einzugeben, die dann in die entsprechenden Arrays gespeichert werden. Dazu fragt sie den Benutzer nach einem Zitat und einem Bild-Link mit der prompt-Funktion und überprüft, ob die Eingaben gültig sind. Wenn ja, fügt sie die Eingaben zu den Arrays hinzu und zeigt eine Erfolgsmeldung mit der alert-Funktion an. Wenn nicht, zeigt sie eine Fehlermeldung mit der alert-Funktion an.
- Die addButton-, quoteButton-, imageButton- und slideshowButton-Variablen sind die button-Elemente, die mit der querySelector-Funktion ausgewählt werden.
- Die addEventListener-Funktionen fügen den button-Elementen Klick-Ereignisse hinzu, die die entsprechenden Funktionen aufrufen.
- Die interval-Variable ist eine Zahl, die die Zeit in Millisekunden angibt, die zwischen den Diashow-Elementen vergeht. Sie ist auf 5000 gesetzt, was 5 Sekunden entspricht.
- Die timer-Variable ist eine Variable, die einen Timer speichert, der mit der setInterval-Funktion erstellt wird. Sie ist zu Beginn auf null gesetzt.
- Die addEventListener-Funktion des Diashow-Buttons fügt dem slideshowButton-Element ein Klick-Ereignis hinzu, das den Timer startet oder stoppt, je nachdem, ob er bereits läuft oder nicht. Wenn der Timer läuft, wird er mit der clearInterval-Funktion gestoppt. Wenn der Timer nicht läuft, wird er mit der setInterval-Funktion gestartet, die die showSlideshow-Funktion alle 5 Sekunden aufruft.

### Benutzeroberfläche 

Die Website hat einen hellcyanen Hintergrund und einen Kopfbereich, der den Titel "Mind-Positivity Zitate" enthält.

Unter dem Kopfbereich gibt es vier Buttons: "Hinzufügen", "Zitat", "Bild" und "Diashow". Jeder Button hat eine andere Farbe, die seine Funktion symbolisiert. Hinter den Buttons gibt es eine hellblaue Leiste die sich horizontal und statisch über die Website erstreckt, um die Buttons hervorzuheben.
Der "Hinzufügen"-Button ist lila, der "Zitat"-Button ist grün, der "Bild"-Button ist orange und der "Diashow"-Button ist rot.  

Wenn man auf den "Zitat"-Button klickt, wird ein zufälliges Zitat aus dem quotes-Array angezeigt. Wenn man auf den "Bild"-Button klickt, wird ein zufälliges Bild aus dem images-Array angezeigt. Wenn man auf den "Diashow"-Button klickt, wird eine Diashow aus zufälligen Zitaten und Bildern aus den Arrays gestartet, die alle fünf Sekunden wechselt. Somit wird eine tägliche Dosis Positivität für die Benutzer ausgestrahlt, indem ihnen inspirierende Zitate oder süße Bilder anzeigt werden, die ihre Stimmung heben und ihnen Hoffnung geben können. Die Zitate und Bilder sind aus verschiedenen Quellen ausgewählt, die positive Botschaften vermitteln oder die Schönheit der Tiere zeigen und somit eine antidepressive Wirkung erzeugen.  
Wenn man auf den "Hinzufügen"-Button klickt, kann man ein eigenes Zitat und ein eigenen Bildlink eingeben, die dann in die entsprechenden Arrays gespeichert werden. Dies fördert eine positive Einstellung und Motivation bei den Benutzern, indem sie ihnen die Möglichkeit gibt, eigene Zitate oder Bilder hinzuzufügen, die ihnen wichtig sind. Die Benutzer können so ihre Kreativität ausdrücken.

Im mittleren Bereich der Website gibt es einen Inhaltsbereich, in dem das Zitat oder das Bild oder die Diashow angezeigt wird. Der Inhaltsbereich ist zentriert und passt sich an die Größe des Bildschirms an. Das Zitat ist in kursiver Schrift geschrieben, um seine Bedeutung zu betonen. Das Bild wird abgerundet und passt sich an die Größe des Inhaltsbereichs an. Die Diashow ist eine Kombination aus Zitat und Bild, die in einer vertikalen Anordnung angezeigt werden, wobei das Zitat über dem Bild angezeigt wird.  

Im unteren Bereich der Website gibt es eine Fußzeile, der einen Link zu einer Hilfsseite enthält. Der Link ist blau und ist unterstrichen und beinhaltet den Text "Wenn du Hilfe brauchst, kannst du dich an den Nummer-gegen-Kummer Dienst wenden." Die Hilfsseite bieten dem Nutzer professionelle Unterstützung oder Beratung, wenn diese gebraucht werden.