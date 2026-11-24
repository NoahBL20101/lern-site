# Lern-Site – INSY · SEW · ITP

Lernseite für den 3. Jahrgang (HTL Villach) mit Theorie und Übungen, die automatisch geprüft werden.

- **INSY**: SQL SELECT bis INNER JOIN, Aggregation, GROUP BY, HAVING. Northwind und Sakila laufen als SQLite direkt im Browser (sql.js).
- **SEW**: Python-Einführung und Rekursion (nach sew.htl-villach.at, Jahr 3), dazu ein Probetest. Python läuft im Browser (Pyodide, braucht Internet).
- **ITP**: Projektmanagement mit den Themen Einführung, Projektphasen und SIN-Obelisk.

## Starten

`index.html` im Browser öffnen. Alle Dateien müssen im selben Ordner liegen.
Der Lernfortschritt wird im Browser gespeichert (localStorage).

## Dateien

| Datei | Inhalt |
|---|---|
| `index.html` | Seite, Editor, Prüflogik, Stoppuhr |
| `content.js` | INSY-Lektionen |
| `sew-content.js` | SEW-Lektionen |
| `itp-content.js` | ITP-Lektionen |
| `sql-asm.js` | sql.js (SQLite für den Browser) |
| `db-northwind.js`, `db-sakila.js` | Datenbanken (gzip + base64) |
