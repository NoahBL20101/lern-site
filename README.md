# Lern-Site – INSY · SEW · ITP

Lernseite für den 3. Jahrgang (HTL Villach) mit Theorie und Übungen, die automatisch geprüft werden.

- **INSY**: SQL SELECT bis INNER JOIN, Aggregation, GROUP BY, HAVING. Northwind und Sakila laufen als SQLite direkt im Browser (sql.js).
- **SEW**: Python-Einführung und Rekursion (nach sew.htl-villach.at, Jahr 3), dazu ein Probetest. Python läuft im Browser (Pyodide, braucht Internet).
- **ITP**: Projektmanagement mit den Themen Einführung, Projektphasen und SIN-Obelisk.

## Starten

`index.html` im Browser öffnen. Alle Dateien müssen im selben Ordner liegen.
Der Lernfortschritt wird im Browser gespeichert (localStorage).

## Login & Fortschritt im Konto (Supabase)

Eingerichtet ist das Supabase-Projekt **lern-site** (Region eu-central-1). Die Zugangsdaten stehen in `config.js`. So richtet man es neu ein:

1. Auf supabase.com ein (kostenloses) Projekt anlegen.
2. Im **SQL Editor** den Inhalt von `supabase-setup.sql` ausführen. Das legt die Tabelle `progress` mit Row Level Security an.
3. Unter **Project Settings → API** die **Project URL** und den **anon/publishable key** kopieren und in `config.js` eintragen.
4. Optional: Unter **Authentication → Sign In / Providers → Email** „Confirm email“ ausschalten. Dann kann man sich sofort nach dem Registrieren anmelden. Bleibt es eingeschaltet, kommt eine Bestätigungs-Mail. Deren Link führt auf die *Site URL* unter **Authentication → URL Configuration**, dort am besten die GitHub-Pages-Adresse eintragen.

Ohne Eintrag in `config.js` funktioniert die Seite wie bisher, und der Fortschritt bleibt nur im Browser gespeichert.

## Dateien

| Datei | Inhalt |
|---|---|
| `index.html` | Seite, Editor, Prüflogik, Stoppuhr, Login |
| `config.js` | Supabase-URL und anon key |
| `supabase-setup.sql` | Tabelle und Rechte für den Fortschritt |
| `content.js` | INSY-Lektionen |
| `sew-content.js` | SEW-Lektionen |
| `itp-content.js` | ITP-Lektionen |
| `sql-asm.js` | sql.js (SQLite für den Browser) |
| `db-northwind.js`, `db-sakila.js` | Datenbanken (gzip + base64) |
