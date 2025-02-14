# Testdokumentation für Mind-Positivity Zitate Website

## Einleitung

Diese Testdokumentation beschreibt die Tests, die durchgeführt wurden, um die Funktionalität und das Design der Mind-Positivity Zitate Website zu überprüfen. Die Website soll dem Nutzer positive Zitate und Bilder anzeigen, die seine Stimmung verbessern und ihm helfen, optimistisch zu bleiben. Die Website soll auch dem Nutzer ermöglichen, eigene Zitate und Bilder hinzuzufügen und eine Diashow aus den vorhandenen Zitaten und Bildern zu starten oder zu stoppen. Die Zielgruppe der Website sind Menschen, die nach Inspiration, Motivation oder Unterstützung suchen.

## Testumgebung

Die Testumgebung besteht aus folgenden Komponenten:

- Browser: Google Chrome 119.0.6045.160 (Offizieller Build) (64-Bit)
- Betriebssystem: Windows 11 Pro
- Bildschirmauflösung: 1920 x 1080 Pixel
- HTML-Datei: index.html
- JavaScript-Datei: script3.js

## Testfälle

Die Testfälle sind in folgende Abschnitte unterteilt:

- Benutzeroberfläche
- Funktionalität

### Benutzeroberfläche

Die Benutzeroberfläche der Website wird visuell getestet, um zu überprüfen, ob die Elemente korrekt angezeigt und positioniert sind und ob die visuellen Effekte funktionieren.

| Testfall | Beschreibung | Erwartetes Ergebnis | Tatsächliches Ergebnis | Teststatus |
| -------- | ------------ | ------------------- | ---------------------- | ---------- |
| UI-1 | Öffne die Website in Google Chrome | Die Website wird geladen und zeigt den Titel "Mind-Positivity Zitate" in der oberen Leiste, vier Buttons ("Hinzufügen", "Zitat", "Bild" und "Diashow") in der mittleren Leiste und einen Link zu "Nummer-gegen-Kummer Dienst" in der unteren Leiste an. Der Hintergrund ist hellblau. Der Inhalt ist leer. | Wie erwartet | Bestanden |
| UI-2 | Verkleinere oder vergrößere das Browserfenster | Die Website passt sich an die Fenstergröße an und behält die Position und Größe der Elemente bei. Der Inhalt bleibt zentriert. | Wie erwartet | Bestanden |
| UI-3 | Bewege den Mauszeiger über die Buttons | Der Cursor ändert sich zu einem Zeiger. | Wie erwartet | Bestanden |
| UI-4 | Klicke auf den Button "Zitat" | Ein zufälliges Zitat wird in einem Absatz mit kursiver Schrift in der Mitte des Inhaltsbereichs angezeigt. Die Buttons bewegen sich nicht. | Wie erwartet | Bestanden |
| UI-5 | Klicke auf den Button "Bild" | Ein zufälliges Bild wird in einem Bild-Element mit abgerundeten Ecken in der Mitte des Inhaltsbereichs angezeigt. Die Buttons bewegen sich nicht. | Wie erwartet | Bestanden |
| UI-6 | Klicke auf den Button "Diashow" | Eine Diashow aus einem zufälligen Zitat und einem zufälligen Bild wird in einem Div-Element mit flexibler Ausrichtung in der Mitte des Inhaltsbereichs angezeigt. Das Zitat befindet sich über dem Bild. Die Buttons bewegen sich nicht. Die Diashow wechselt alle 5 Sekunden den Inhalt. | Wie erwartet | Bestanden |
| UI-7 | Klicke erneut auf den Button "Diashow" | Die Diashow wird gestoppt und der Inhalt wird ein letzes Mal verändert und verbleiben danach unverändert. Die Buttons bewegen sich nicht. | Wie erwartet | Bestanden |

### Funktionalität

Die Funktionalität der Website wird getestet, um zu überprüfen, ob die Buttons die erwarteten Aktionen auslösen und ob die JavaScript-Datei die richtigen Daten und Funktionen enthält.

| Testfall | Beschreibung | Erwartetes Ergebnis | Tatsächliches Ergebnis | Teststatus |
| -------- | ------------ | ------------------- | ---------------------- | ---------- |
| F-1 | Öffne die JavaScript-Datei in einem Texteditor | Die Datei enthält zwei Arrays mit Zitaten und Bildern, eine Funktion zum Zufallsauswahl eines Elements aus einem Array, zwei Funktionen zum Anzeigen von Inhalten je nach Button-Typ, eine Funktion zum Hinzufügen eines Zitats und eines Bildes, vier Variablen für die Buttons und vier Event-Listener für die Buttons. | Wie erwartet | Bestanden |
| F-2 | Klicke auf den Button "Hinzufügen" | Ein Eingabefeld für ein Zitat und erst danach ein Eingabefeld für einen Bild-Link erscheinen. | Wie erwartet | Bestanden |
| F-3 | Gib ein gültiges Zitat und einen gültigen Bild-Link ein und bestätige | Die Meldung 'Das Zitat und das Bild wurden erfolgreich hinzugefügt!' erscheint und bestätigt somit, dass sowohl das Zitat als auch das Bild erfolgreich zu den entsprechenden Arrays hinzugefügt wurden. | Wie erwartet | Bestanden |
| F-4 | Lasse beim Hinzufügen eines Zitats und einer Bildverlinkung das Eingabefeld leer und bestätige. | Die Meldung "Das Eingabefeld für das Zitat oder das Bild ist leer. Bitte versuche es erneut." erscheint. | Wie erwartet | Bestanden |
| F-5 | Klicke auf den Button "Zitat" | Ein zufälliges Zitat aus dem Array wird angezeigt. Das Zitat kann auch das zuletzt hinzugefügte Zitat sein. | Wie erwartet | Bestanden |
| F-6 | Klicke auf den Button "Bild" | Ein zufälliges Bild aus dem Array wird angezeigt. Das Bild kann auch das zuletzt hinzugefügte Bild sein. | Wie erwartet | Bestanden |
| F-7 | Klicke auf den Button "Diashow" | Eine Diashow aus zufälligen Zitaten und Bildern aus den Arrays wird angezeigt. Die Zitate und Bilder können auch die zuletzt hinzugefügten sein. | Wie erwartet | Bestanden |