// Lerninhalte: Theorie + Übungen in Unterrichts-Reihenfolge (INSY, 3. Jahrgang)
// ex: { id, db, task, hint, solution, order?: [Spaltenindizes der Sortierung in der Lösung], note? }
window.LESSONS = [
{
  id: 'intro', title: 'Einführung: SQL & Tabellen', short: 'Einführung',
  source: '02 - SQL SELECT - 1, Folien 2–7',
  theory: `
<h3>Was ist SQL?</h3>
<p><b>SQL = Structured Query Language.</b> Eine standardisierte Abfragesprache (ANSI, ISO), die alles enthält, was man beim Arbeiten mit einer <b>relationalen Datenbank</b> braucht.</p>
<ul>
  <li>Versionen: SQL-89, SQL-92, SQL-99 (SQL3), SQL-2003 – plus herstellerspezifische Erweiterungen (z.&nbsp;B. MySQL).</li>
  <li>SQL ist <b>nichtprozedural</b> und <b>mengenorientiert</b>: Du beschreibst, <i>was</i> du willst – nicht, <i>wie</i> die DB es holt.</li>
</ul>
<h3>Der Umfang von SQL</h3>
<div class="grid2">
  <div class="card"><b>DDL</b> – Data Definition Language<br><span class="muted">Tabellen, Wertebereiche, Views, DB-Objekte anlegen</span></div>
  <div class="card hl"><b>DML</b> – Data Manipulation Language<br><span class="muted"><code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code></span></div>
  <div class="card"><b>DCL</b> – Data Control Language<br><span class="muted">Benutzer, Rollen, Rechte</span></div>
  <div class="card"><b>TCO</b> – Transaction Control<br><span class="muted"><code>COMMIT</code>, <code>ROLLBACK</code>, <code>SAVEPOINT</code></span></div>
</div>
<p>Außerdem: API (Embedded SQL), physisches Modell (Tablespace, Index, Cluster), prozedurale Erweiterungen.</p>
<h3>Relationale Datenbank = Tabellen</h3>
<p>Eine relationale DB besteht aus mehreren <b>Tabellen</b>, die miteinander verbunden sind. Jede Tabelle hat <b>Spalten</b> (Attribute) und <b>Zeilen</b> (Datensätze / Records).</p>
<p>Wir üben mit zwei Beispiel-Datenbanken aus deinem Ordner:</p>
<ul>
  <li><b>Northwind</b> – Handelsfirma: <code>products</code>, <code>categories</code>, <code>customers</code>, <code>orders</code>, <code>order_details</code>, <code>suppliers</code>, <code>employees</code> …</li>
  <li><b>Sakila</b> – DVD-Verleih: <code>film</code>, <code>actor</code>, <code>customer</code>, <code>payment</code>, <code>rental</code>, <code>language</code> …</li>
</ul>
<p>Rechts neben jeder Übung siehst du alle Tabellen und Spalten der aktuellen DB. Ein Klick auf einen Namen fügt ihn in den Editor ein.</p>
<h3>DML: SELECT</h3>
<p><code>SELECT</code> fragt Daten aus einer oder mehreren Tabellen ab – und ist die Anweisung mit der größten Komplexität. Darum geht's in allen weiteren Kapiteln.</p>
<div class="example" data-db="northwind">select * from categories;</div>
`,
  exercises: [
    { id: 'i1', db: 'northwind', task: 'Lass dir die komplette Tabelle <code>categories</code> ausgeben (alle Spalten, alle Zeilen).', hint: 'Der Stern * steht für „alle Spalten“.', solution: 'select * from categories;' },
    { id: 'i2', db: 'sakila', task: 'Wechsle zur Sakila-DB: Gib die komplette Tabelle <code>language</code> aus.', hint: 'Gleiches Muster wie vorher, nur andere Tabelle.', solution: 'select * from language;' },
  ]
},
{
  id: 'select', title: 'SELECT, FROM & Alias', short: 'SELECT & FROM',
  source: '02 - SQL SELECT - 1, Folien 8–11',
  theory: `
<h3>Syntax (verkürzt)</h3>
<pre class="syntax">SELECT [ALL | DISTINCT] select-list | *
FROM [schema.]table | view
[WHERE condition]
[GROUP BY column-list [HAVING condition]]
[UNION | UNION ALL | INTERSECT | EXCEPT SELECT command]
[ORDER BY {column-name [ASC | DESC]}, ...]</pre>
<p class="callout"><b>Pflicht</b> sind nur die <code>SELECT</code>- und die <code>FROM</code>-Klausel. Alles in [eckigen Klammern] ist optional.</p>
<h3>SELECT und FROM</h3>
<ul>
  <li><b>SELECT</b> liefert eine <b>Ergebnistabelle</b> (Menge von Datensätzen) mit genau den Spalten, die du angibst.</li>
  <li><b>FROM</b> sagt dem DBMS, aus <b>welcher Tabelle</b> die Daten kommen.</li>
</ul>
<h3>Abfragemuster</h3>
<pre class="syntax">select &lt;spalte1, spalte2, ...&gt; from &lt;tabelle&gt;;   -- bestimmte Spalten
select * from &lt;tabelle&gt;;                         -- alle Spalten
select &lt;spalte&gt; as &lt;neuer_name&gt; from &lt;tabelle&gt;;  -- Alias</pre>
<p>Ein <b>Alias</b> (<code>as</code>) legt die Spaltenüberschrift im Ergebnis fest. Ohne Alias erscheint der ursprüngliche Spaltenname.</p>
<h3>Beispiele (Sakila)</h3>
<div class="example" data-db="sakila">select customer_id, first_name, last_name, active
from customer;</div>
<div class="example" data-db="sakila">select customer_id, last_name, email as mailaddress
from customer;</div>
<div class="example" data-db="sakila">select last_name as Nachname,
       create_date as Erstellungsdatum
from customer;</div>
<p class="tip">💡 Groß-/Kleinschreibung der Schlüsselwörter ist egal (<code>SELECT</code> = <code>select</code>). Ein Strichpunkt <code>;</code> beendet die Anweisung.</p>
`,
  exercises: [
    { id: 's1', db: 'sakila', task: 'Gib Vorname und Nachname aller Schauspieler (<code>actor</code>) aus.', hint: 'Spalten: first_name, last_name', solution: 'select first_name, last_name\nfrom actor;' },
    { id: 's2', db: 'sakila', task: 'Gib Titel, Länge und Mietpreis aller Filme aus. Die Spalten sollen <b>Titel</b>, <b>Laenge</b> und <b>Mietpreis</b> heißen.', hint: 'Tabelle film, Spalten title, length, rental_rate – jeweils mit „as“ umbenennen.', solution: 'select title as Titel, length as Laenge, rental_rate as Mietpreis\nfrom film;' },
    { id: 's3', db: 'sakila', task: 'Gib von allen Kunden die ID und die E-Mail-Adresse aus. Die E-Mail-Spalte soll <b>Mail</b> heißen.', hint: 'Tabelle customer, Spalten customer_id und email.', solution: 'select customer_id, email as Mail\nfrom customer;' },
    { id: 's4', db: 'northwind', task: 'Northwind: Liste aller Produkte mit Produktname (Alias <b>Produkt</b>) und Stückpreis (Alias <b>Preis</b>).', hint: 'Tabelle products, Spalten ProductName und UnitPrice.', solution: 'select ProductName as Produkt, UnitPrice as Preis\nfrom products;' },
    { id: 's5', db: 'northwind', task: 'Gib Firmenname, Stadt und Land aller Kunden aus.', hint: 'Tabelle customers – Spalten CompanyName, City, Country.', solution: 'select CompanyName, City, Country\nfrom customers;' },
  ]
},
{
  id: 'distinct', title: 'DISTINCT & ORDER BY', short: 'DISTINCT & ORDER BY',
  source: '02 - SQL SELECT - 1, Folien 12–13',
  theory: `
<h3>DISTINCT – Duplikate entfernen</h3>
<p>Verhindert, dass gleiche Zeilen mehrmals im Ergebnis vorkommen.</p>
<pre class="syntax">select distinct &lt;spalte1, spalte2, ...&gt; from &lt;tabelle&gt;;</pre>
<p class="tip">💡 <code>distinct</code> wirkt auf die <b>ganze Zeile</b>, nicht nur auf die erste Spalte.</p>
<div class="example" data-db="sakila">select first_name from customer;</div>
<div class="example" data-db="sakila">select distinct first_name from customer;</div>
<h3>ORDER BY – Sortieren</h3>
<p>Sortiert das Ergebnis nach den angegebenen Spalten: <code>ASC</code> = aufsteigend (Standard), <code>DESC</code> = absteigend. Bei mehreren Spalten wird zuerst nach der ersten sortiert, bei Gleichstand nach der zweiten usw.</p>
<pre class="syntax">select &lt;spalte1, spalte2, …&gt; from &lt;tabelle&gt;
order by &lt;spalte1 [ASC | DESC], spalte2 [ASC | DESC], ...&gt;;</pre>
<div class="example" data-db="sakila">select customer_id, last_name, email, active as aktiv
from customer
order by last_name, active;</div>
<div class="example" data-db="sakila">select customer_id, email, active, last_name as Nachname
from customer
order by active, last_name desc;</div>
<p class="tip">💡 <code>ORDER BY</code> steht immer <b>ganz am Ende</b> der Abfrage. Du darfst dort auch einen Alias verwenden.</p>
`,
  exercises: [
    { id: 'd1', db: 'sakila', task: 'Welche unterschiedlichen Altersfreigaben (<code>rating</code>) gibt es bei den Filmen? Jede soll nur einmal vorkommen.', hint: 'select distinct …', solution: 'select distinct rating\nfrom film;' },
    { id: 'd2', db: 'northwind', task: 'Aus welchen Ländern kommen die Kunden? Jedes Land nur einmal, alphabetisch sortiert.', hint: 'distinct + order by Country', solution: 'select distinct Country\nfrom customers\norder by Country;', order: [0] },
    { id: 'd3', db: 'sakila', task: 'Titel und Länge aller Filme – der <b>längste</b> Film zuerst.', hint: 'order by … desc', solution: 'select title, length\nfrom film\norder by length desc;', order: [1], orderDir: ['desc'] },
    { id: 'd4', db: 'sakila', task: 'Nachname und Vorname aller Schauspieler, sortiert nach Nachname und bei gleichem Nachnamen nach Vorname (beides aufsteigend).', hint: 'Zwei Spalten im order by, durch Komma getrennt.', solution: 'select last_name, first_name\nfrom actor\norder by last_name, first_name;', order: [0, 1] },
    { id: 'd5', db: 'northwind', task: 'Produktname und Preis aller Produkte – das <b>teuerste</b> zuerst.', hint: 'products, UnitPrice desc', solution: 'select ProductName, UnitPrice\nfrom products\norder by UnitPrice desc;', order: [1], orderDir: ['desc'] },
    { id: 'd6', db: 'northwind', task: 'Welche unterschiedlichen Kombinationen aus Land und Stadt gibt es bei den Lieferanten (<code>suppliers</code>)? Sortiert nach Land, dann Stadt.', hint: 'distinct auf zwei Spalten', solution: 'select distinct Country, City\nfrom suppliers\norder by Country, City;', order: [0, 1] },
  ]
},
{
  id: 'where', title: 'WHERE – Zeilen filtern', short: 'WHERE',
  source: 'Syntax-Folie 8 (WHERE condition) – ergänzt, da die Folien 14–21 im PDF fehlen',
  theory: `
<p class="callout">ℹ️ In deinem PDF „02 - SQL SELECT - 1“ fehlen die Folien 14–21. Die WHERE-Klausel steht aber in der Syntax (Folie 8) und wird ab den Aggregations-Folien ständig benutzt – darum hier zusammengefasst.</p>
<h3>WHERE</h3>
<p>Mit <code>WHERE</code> filterst du <b>Zeilen</b>: Nur Datensätze, für die die Bedingung wahr ist, kommen ins Ergebnis.</p>
<pre class="syntax">select &lt;spalten&gt; from &lt;tabelle&gt;
where &lt;bedingung&gt;;</pre>
<h3>Vergleichsoperatoren</h3>
<table class="ops">
<tr><td><code>=</code></td><td>gleich</td><td><code>&lt;&gt;</code> / <code>!=</code></td><td>ungleich</td></tr>
<tr><td><code>&lt;</code> <code>&gt;</code></td><td>kleiner / größer</td><td><code>&lt;=</code> <code>&gt;=</code></td><td>kleiner-gleich / größer-gleich</td></tr>
<tr><td><code>between a and b</code></td><td>zwischen a und b (inklusive!)</td><td><code>in (1,2,3)</code></td><td>einer der Werte</td></tr>
<tr><td><code>like 'M%'</code></td><td>Muster: <code>%</code> = beliebig viele Zeichen, <code>_</code> = genau 1 Zeichen</td><td><code>is null</code> / <code>is not null</code></td><td>Wert fehlt / vorhanden</td></tr>
</table>
<p>Verknüpfen mit <code>and</code>, <code>or</code>, <code>not</code>. Texte und Datumswerte stehen in <b>einfachen Anführungszeichen</b>: <code>'G'</code>, <code>'2005-07-09'</code>.</p>
<div class="example" data-db="sakila">select title, length, rating
from film
where rating = 'G' and length > 150;</div>
<div class="example" data-db="sakila">select title, rental_duration
from film
where rental_duration in (3, 5, 7);</div>
<div class="example" data-db="northwind">select ProductName, UnitPrice
from products
where ProductName like 'M%';</div>
<p class="tip">⚠️ <code>= null</code> funktioniert <b>nicht</b> – immer <code>is null</code> schreiben!</p>
<p class="tip">⚠️ Achtung bei <code>and</code>/<code>or</code>: <code>and</code> bindet stärker. Im Zweifel Klammern setzen: <code>where (a = 1 or a = 2) and b = 3</code></p>
`,
  exercises: [
    { id: 'w1', db: 'sakila', task: 'Titel und Länge aller Filme, die <b>länger als 180 Minuten</b> sind.', hint: 'where length > …', solution: 'select title, length\nfrom film\nwhere length > 180;' },
    { id: 'w2', db: 'sakila', task: 'Titel aller Filme mit Freigabe <b>PG-13</b> und einem Mietpreis von <b>4.99</b>.', hint: 'Zwei Bedingungen mit and verknüpfen. Text in einfachen Anführungszeichen.', solution: "select title\nfrom film\nwhere rating = 'PG-13' and rental_rate = 4.99;" },
    { id: 'w3', db: 'sakila', task: 'Vor- und Nachname aller Kunden, deren Nachname mit <b>S</b> beginnt.', hint: "like 'S%'", solution: "select first_name, last_name\nfrom customer\nwhere last_name like 'S%';" },
    { id: 'w4', db: 'sakila', task: 'Alle Filmtitel, die das Wort <b>LOVE</b> enthalten.', hint: "Prozentzeichen auf beiden Seiten: '%LOVE%'", solution: "select title\nfrom film\nwhere title like '%LOVE%';" },
    { id: 'w5', db: 'northwind', task: 'Produktname und Preis aller Produkte mit einem Preis <b>zwischen 20 und 30</b> (inklusive).', hint: 'between … and …', solution: 'select ProductName, UnitPrice\nfrom products\nwhere UnitPrice between 20 and 30;' },
    { id: 'w6', db: 'northwind', task: 'Firmenname und Land aller Kunden aus <b>Germany, Austria oder Switzerland</b>.', hint: "in ('Germany', …)", solution: "select CompanyName, Country\nfrom customers\nwhere Country in ('Germany', 'Austria', 'Switzerland');" },
    { id: 'w7', db: 'northwind', task: 'Welche Bestellungen wurden noch <b>nicht verschickt</b> (kein <code>ShippedDate</code>)? Gib OrderID und OrderDate aus.', hint: 'is null', solution: 'select OrderID, OrderDate\nfrom orders\nwhere ShippedDate is null;' },
    { id: 'w8', db: 'sakila', task: 'Alle Zahlungen (<code>payment</code>) von Kunde <b>1</b> mit einem Betrag <b>über 5</b>: payment_id, amount, payment_date – nach Datum aufsteigend sortiert.', hint: 'where … and …, dann order by payment_date', solution: 'select payment_id, amount, payment_date\nfrom payment\nwhere customer_id = 1 and amount > 5\norder by payment_date;', order: [2] },
  ]
},
{
  id: 'agg', title: 'Aggregatfunktionen', short: 'Aggregation',
  source: '02 - SQL SELECT - 1, Folien 22–23',
  theory: `
<h3>Aggregation</h3>
<p>Aggregation = <b>Daten einer Spalte zusammenfassen</b>, z.&nbsp;B. zu einer Summe. Aus vielen Zeilen wird <b>ein</b> Wert.</p>
<table class="ops">
<tr><td><code>MIN(spalte)</code></td><td>kleinster Wert</td></tr>
<tr><td><code>MAX(spalte)</code></td><td>größter Wert</td></tr>
<tr><td><code>SUM(spalte)</code></td><td>Summe – nur für Zahlen</td></tr>
<tr><td><code>AVG(spalte)</code></td><td>Mittelwert (Durchschnitt) – nur für Zahlen</td></tr>
<tr><td><code>COUNT(spalte)</code>, <code>COUNT(*)</code></td><td>Anzahl der Zeilen</td></tr>
</table>
<p class="tip">💡 <code>count(*)</code> zählt <b>alle</b> Zeilen. <code>count(spalte)</code> zählt nur Zeilen, in denen die Spalte <b>nicht NULL</b> ist. <code>count(distinct spalte)</code> zählt unterschiedliche Werte.</p>
<h3>Beispiele (Sakila)</h3>
<div class="example" data-db="sakila">select max(length) from film;</div>
<div class="example" data-db="sakila">select min(title) from film;</div>
<div class="example" data-db="sakila">select avg(replacement_cost)
from film
where rating = 'G';</div>
<div class="example" data-db="sakila">select sum(replacement_cost) as SumCosts
from film
where rental_duration in (3,5,7);</div>
<div class="example" data-db="sakila">select count(*) from film;</div>
<div class="example" data-db="sakila">select count(length)
from film
where length > 85;</div>
<p class="tip">💡 <code>min</code>/<code>max</code> funktionieren auch bei Text (alphabetisch) und Datum.</p>
`,
  exercises: [
    { id: 'a1', db: 'sakila', task: 'Wie viele Filme gibt es insgesamt?', hint: 'count(*)', solution: 'select count(*) as AnzahlFilme\nfrom film;' },
    { id: 'a2', db: 'sakila', task: 'Wie lang ist der <b>kürzeste</b> Film?', hint: 'min(length)', solution: 'select min(length) as KuerzesterFilm\nfrom film;' },
    { id: 'a3', db: 'sakila', task: 'Wie viel Geld wurde insgesamt eingenommen? (Summe aller Beträge in <code>payment</code>)', hint: 'sum(amount)', solution: 'select sum(amount) as Gesamt\nfrom payment;' },
    { id: 'a4', db: 'sakila', task: 'Was ist die durchschnittliche Filmlänge der Filme mit Freigabe <b>R</b>?', hint: 'avg + where', solution: "select avg(length) as DurchschnLaenge\nfrom film\nwhere rating = 'R';" },
    { id: 'a5', db: 'northwind', task: 'Gib in <b>einer</b> Abfrage den billigsten und den teuersten Produktpreis aus (zwei Spalten: <b>MinPreis</b>, <b>MaxPreis</b>).', hint: 'Mehrere Aggregatfunktionen durch Komma trennen.', solution: 'select min(UnitPrice) as MinPreis, max(UnitPrice) as MaxPreis\nfrom products;' },
    { id: 'a6', db: 'northwind', task: 'Wie viele Produkte werden nicht mehr geführt (<code>Discontinued = 1</code>)?', hint: 'count(*) mit where', solution: 'select count(*) as AnzahlEingestellt\nfrom products\nwhere Discontinued = 1;' },
    { id: 'a7', db: 'northwind', task: 'Wie viele Kunden haben eine Faxnummer eingetragen (Fax ist nicht NULL)?', hint: 'count(Fax) zählt NULL-Werte nicht mit.', solution: 'select count(Fax) as MitFax\nfrom customers;' },
    { id: 'a8', db: 'northwind', task: 'In wie vielen <b>unterschiedlichen</b> Ländern gibt es Kunden?', hint: 'count(distinct …)', solution: 'select count(distinct Country) as AnzahlLaender\nfrom customers;' },
  ]
},
{
  id: 'groupby', title: 'GROUP BY – Gruppieren', short: 'GROUP BY',
  source: '02 - SQL SELECT - 3 - Aggregation_Group_By, Folien 24–27',
  theory: `
<h3>GROUP BY</h3>
<p><code>GROUP BY</code> gibt die Spalte(n) an, nach deren Werten die Aggregation <b>gruppiert</b> wird. Statt <i>einem</i> Wert für die ganze Tabelle bekommst du <b>einen Wert pro Gruppe</b>.</p>
<p class="callout"><code>GROUP BY</code> macht nur in Kombination mit einer <b>Aggregation</b> Sinn!</p>
<div class="example" data-db="northwind">select * from employees;</div>
<div class="example" data-db="northwind">select country, count(*)
from employees
group by country;</div>
<p>→ Die Mitarbeiter werden nach Land in Gruppen gesteckt (UK, USA) und pro Gruppe gezählt.</p>
<h3>Achtung</h3>
<p>Weitere Spalten im <code>SELECT</code> machen nur Sinn, wenn sie über die ganze Gruppe <b>den gleichen Wert</b> haben. Faustregel: <b>Jede Spalte im SELECT steht entweder im GROUP BY oder in einer Aggregatfunktion.</b></p>
<pre class="syntax bad">-- ergibt KEINEN Sinn: welcher UnitPrice der Gruppe soll angezeigt werden?
select ReorderLevel, UnitPrice
from products
group by ReorderLevel;</pre>
<p class="muted">(MySQL meldet hier je nach Einstellung einen Fehler, diese Lern-Engine zeigt einfach irgendeinen Wert an – beides ist falsch gedacht.)</p>
<h3>Beispiele (Northwind)</h3>
<div class="example" data-db="northwind">select CategoryID, count(*)
from products
group by CategoryID;</div>
<div class="example" data-db="northwind">select min(UnitPrice) as MinUnitPrice, CategoryID
from products
group by CategoryID;</div>
<div class="example" data-db="northwind">select ProductID, sum(Quantity) as Total_Quantity
from order_details
where ProductID < 5
group by ProductID;</div>
<div class="example" data-db="northwind">select count(CustomerID), Country
from Customers
group by Country;</div>
<div class="example" data-db="northwind">select ContactTitle, count(CustomerID)
from Customers
group by ContactTitle
order by count(CustomerID) desc;</div>
<p class="tip">💡 Du kannst auch nach <b>mehreren Spalten</b> gruppieren: <code>group by rating, rental_rate</code> → eine Gruppe pro Kombination.</p>
`,
  exercises: [
    { id: 'g1', db: 'sakila', task: 'Wie viele Filme gibt es <b>pro Altersfreigabe</b> (rating)? Spalten: rating, Anzahl.', hint: 'group by rating', solution: 'select rating, count(*) as Anzahl\nfrom film\ngroup by rating;' },
    { id: 'g2', db: 'northwind', task: 'Wie viele Kunden gibt es <b>pro Land</b>? Das Land mit den meisten Kunden zuerst.', hint: 'group by Country, order by count(*) desc', solution: 'select Country, count(*) as AnzahlKunden\nfrom customers\ngroup by Country\norder by AnzahlKunden desc;', order: [1], orderDir: ['desc'] },
    { id: 'g3', db: 'northwind', task: 'Was ist der <b>Durchschnittspreis</b> der Produkte pro Kategorie (CategoryID)?', hint: 'avg(UnitPrice) … group by CategoryID', solution: 'select CategoryID, avg(UnitPrice) as DurchschnPreis\nfrom products\ngroup by CategoryID;' },
    { id: 'g4', db: 'sakila', task: 'Wie viel hat jeder Mitarbeiter (<code>staff_id</code>) an Zahlungen kassiert? (Summe der Beträge pro staff_id)', hint: 'Tabelle payment', solution: 'select staff_id, sum(amount) as Summe\nfrom payment\ngroup by staff_id;' },
    { id: 'g5', db: 'northwind', task: 'Wie viele Bestellungen hat jeder Mitarbeiter (<code>EmployeeID</code>) bearbeitet? Sortiert nach EmployeeID.', hint: 'Tabelle orders', solution: 'select EmployeeID, count(OrderID) as AnzahlBestellungen\nfrom orders\ngroup by EmployeeID\norder by EmployeeID;', order: [0] },
    { id: 'g6', db: 'sakila', task: 'Wie viele Filme gibt es pro <b>Kombination</b> aus Freigabe (rating) und Mietdauer (rental_duration)?', hint: 'group by rating, rental_duration', solution: 'select rating, rental_duration, count(*) as Anzahl\nfrom film\ngroup by rating, rental_duration;' },
    { id: 'g7', db: 'northwind', task: 'Gesamter Lagerbestand (<code>UnitsInStock</code>) pro Lieferant – aber nur für Produkte, die <b>nicht eingestellt</b> sind (Discontinued = 0).', hint: 'Erst where, dann group by', solution: 'select SupplierID, sum(UnitsInStock) as Lagerbestand\nfrom products\nwhere Discontinued = 0\ngroup by SupplierID;' },
  ]
},
{
  id: 'having', title: 'HAVING & Ausführungsreihenfolge', short: 'HAVING',
  source: '02 - SQL SELECT - 3 - Aggregation_Having, Folien 28–33',
  theory: `
<h3>HAVING</h3>
<p><code>HAVING</code> definiert Bedingungen – ähnlich wie <code>WHERE</code> – aber auf <b>aggregierte Spalten</b>. Darum geht HAVING nur zusammen mit <code>GROUP BY</code>.</p>
<pre class="syntax">select &lt;spalte&gt;, &lt;function&gt; as &lt;name&gt;
from &lt;tabelle&gt;
group by &lt;spalte&gt;
having &lt;bedingung&gt;;</pre>
<div class="example" data-db="northwind">select CategoryID, max(UnitPrice)
from products
group by CategoryID
having max(UnitPrice) < 180;</div>
<div class="example" data-db="northwind">select CategoryID, sum(UnitPrice) as SumPrice
from products
where CategoryID in (1,2,3,4,5)
group by CategoryID
having SumPrice between 250 and 300
order by SumPrice;</div>
<h3>WHERE vs. HAVING</h3>
<div class="grid2">
  <div class="card"><b>WHERE = PRE-Filter</b><br>filtert <b>Zeilen</b> aus der ursprünglichen Datenmenge – <i>vor</i> dem Gruppieren.<pre class="syntax">select CategoryID, UnitPrice
from products
where UnitPrice &lt; 180;</pre></div>
  <div class="card"><b>HAVING = POST-Filter</b><br>filtert <b>Gruppen</b> – <i>nach</i> dem Gruppieren, über eine aggregierte Spalte.<pre class="syntax">select CategoryID, max(UnitPrice)
from products
group by CategoryID
having max(UnitPrice) &lt; 180;</pre></div>
</div>
<p class="callout">WHERE und HAVING dürfen in <b>derselben</b> Query vorkommen! Merke: Bedingung mit <code>count/sum/avg/min/max</code> → HAVING. Bedingung auf normale Spalte → WHERE.</p>
<h3>SQL – Ausführungsreihenfolge</h3>
<p>Du <i>schreibst</i> SELECT zuerst, aber die DB <i>führt</i> die Teile in dieser Reihenfolge aus:</p>
<ol class="steps">
  <li><code>FROM</code> <span>kartesisches Produkt – welche Tabelle(n)?</span></li>
  <li><code>WHERE</code> <span>Selektion – Zeilen filtern</span></li>
  <li><code>GROUP BY</code> <span>Gruppierung</span></li>
  <li><code>HAVING</code> <span>Selektion von Gruppen</span></li>
  <li><code>SELECT</code> <span>Projektion, Aggregation – welche Spalten?</span></li>
  <li><code>ORDER BY</code> <span>Sortierung</span></li>
</ol>
<p class="tip">💡 Darum kannst du in <code>WHERE</code> noch keine Aggregatfunktion verwenden – zu diesem Zeitpunkt gibt es noch keine Gruppen!</p>
<h3>Welches Ergebnis liefert diese Query? (Folie 32)</h3>
<p>Überleg zuerst selbst, dann ausführen: Pro Mitarbeiter die Anzahl der <i>verschickten</i> Bestellungen und die höchste Frachtgebühr – aber nur Mitarbeiter, deren höchste Fracht mindestens 800 beträgt.</p>
<div class="example" data-db="northwind">select EmployeeID, count(*), max(Freight)
from Orders
where ShippedDate is not null
group by EmployeeID
having max(Freight) >= 800
order by EmployeeID;</div>
`,
  exercises: [
    { id: 'h1', db: 'sakila', task: '<span class="tag">Folie 31 / 1</span> Liste mit Kunden-ID und Summe aller bezahlten Filme pro Kunde, deren Summe <b>größer als 180</b> ist.', hint: 'Tabelle payment, group by customer_id, having sum(amount) > 180', solution: 'select customer_id, sum(amount) as Summe\nfrom payment\ngroup by customer_id\nhaving sum(amount) > 180;' },
    { id: 'h2', db: 'sakila', task: '<span class="tag">Folie 31 / 2</span> Liste mit Kunden-ID und Anzahl der bezahlten Filme pro Kunde. Der Kunde muss <b>mind. 35</b> Filme bezahlt haben. Sortierung: absteigend nach Anzahl.', hint: 'count(*) … having count(*) >= 35 … order by … desc', solution: 'select customer_id, count(*) as Anzahl\nfrom payment\ngroup by customer_id\nhaving count(*) >= 35\norder by Anzahl desc;', order: [1], orderDir: ['desc'] },
    { id: 'h3', db: 'sakila', task: '<span class="tag">Folie 31 / 3</span> Liste mit Kunden-ID und Durchschnitt aller bezahlten Filme pro Kunde, die im Zeitraum <b>09.07.2005 bis 11.07.2005</b> bezahlt wurden und deren Durchschnitt von <b>4 bis 10</b> liegt.', hint: "WHERE für das Datum (vor dem Gruppieren!), HAVING für den Durchschnitt. Tipp: date(payment_date) schneidet die Uhrzeit ab.", solution: "select customer_id, avg(amount) as Durchschnitt\nfrom payment\nwhere date(payment_date) between '2005-07-09' and '2005-07-11'\ngroup by customer_id\nhaving avg(amount) between 4 and 10;" },
    { id: 'h4', db: 'northwind', task: 'Welche Kategorien (CategoryID) haben <b>mehr als 10</b> Produkte? Gib CategoryID und Anzahl aus.', hint: 'having count(*) > 10', solution: 'select CategoryID, count(*) as Anzahl\nfrom products\ngroup by CategoryID\nhaving count(*) > 10;' },
    { id: 'h5', db: 'northwind', task: 'Welche Kunden (CustomerID) haben <b>mindestens 20</b> Bestellungen aufgegeben?', hint: 'Tabelle orders', solution: 'select CustomerID, count(OrderID) as AnzahlBestellungen\nfrom orders\ngroup by CustomerID\nhaving count(OrderID) >= 20;' },
    { id: 'h6', db: 'sakila', task: 'Bei welchen Längen (length) gibt es <b>mindestens 6</b> Filme? Nur Filme mit Freigabe <b>PG</b> oder <b>G</b> zählen.', hint: "where rating in ('PG','G') … group by length … having count(*) >= 6", solution: "select length, count(*) as Anzahl\nfrom film\nwhere rating in ('PG', 'G')\ngroup by length\nhaving count(*) >= 6;" },
    { id: 'h7', db: 'northwind', task: 'Welche Länder (ShipCountry) haben Bestellungen mit einer <b>durchschnittlichen Fracht über 100</b>? Nur Bestellungen aus dem Jahr <b>1997</b> berücksichtigen. Sortiert nach Durchschnitt absteigend.', hint: "where OrderDate between '1997-01-01' and '1997-12-31 23:59:59' (oder year(OrderDate) = 1997)", solution: "select ShipCountry, avg(Freight) as DurchschnFracht\nfrom orders\nwhere year(OrderDate) = 1997\ngroup by ShipCountry\nhaving avg(Freight) > 100\norder by DurchschnFracht desc;", order: [1], orderDir: ['desc'] },
  ]
},
{
  id: 'join', title: 'INNER JOIN – Tabellen verbinden', short: 'INNER JOIN',
  source: '02 - SQL SELECT - 5 - Verbund von Tabellen - INNER JOIN, Folien 34–42',
  theory: `
<h3>Verbund von Tabellen</h3>
<ul>
  <li>Bisher wurde immer nur <b>eine</b> Tabelle abgefragt.</li>
  <li>SELECT kann auch über <b>mehrere Tabellen</b> abfragen – dabei werden die Tabellen <b>verbunden (JOIN)</b>.</li>
  <li>Das geht über die <b>Schlüsselfelder</b>: Primärschlüssel der einen Tabelle = Fremdschlüssel der anderen.</li>
</ul>
<h3>Zwei Schreibweisen</h3>
<div class="grid2">
  <div class="card"><b>Ohne SQL-92</b> (Verknüpfung im WHERE)<pre class="syntax">SELECT t1.feld1, t2.feld2
FROM t1, t2
WHERE t1.key = t2.foreign_key
[AND ...]</pre></div>
  <div class="card hl"><b>Mit SQL-92</b> (INNER JOIN … ON)<pre class="syntax">SELECT t1.feld1, t2.feld2
FROM t1 INNER JOIN t2
  ON t1.key = t2.foreign_key
[WHERE ...]</pre></div>
</div>
<ul>
  <li>Zusammengehörige Datensätze müssen über die <b>Schlüsselfelder verknüpft</b> werden – sonst bekommst du das kartesische Produkt (jede Zeile mit jeder!).</li>
  <li>Gibt es denselben Spaltennamen in beiden Tabellen (z.&nbsp;B. <code>CategoryID</code>), musst du den Tabellennamen davor schreiben: <code>products.CategoryID</code>.</li>
</ul>
<div class="example" data-db="northwind">select * from products, categories
where products.CategoryID = categories.CategoryID
  and UnitPrice > 50 and CategoryName like 'M%';</div>
<div class="example" data-db="northwind">select * from products
inner join categories on products.CategoryID = categories.CategoryID
where UnitPrice > 50 and CategoryName like 'M%';</div>
<h3>Equijoin mit Tabellen-Aliasen</h3>
<p>Bei längeren Abfragen gibt man den Tabellen kurze Aliase:</p>
<pre class="syntax">SELECT f.feld1, s.feld2
FROM first_table f INNER JOIN second_table s
  ON f.keyfield = s.foreign_keyfield
[WHERE ...]</pre>
<div class="example" data-db="sakila">select * from film f
inner join language l on l.language_id = f.language_id;</div>
<div class="example" data-db="sakila">select c.last_name, c.first_name, a.address
from customer c inner join address a on a.address_id = c.address_id;</div>
<div class="example" data-db="northwind">select o.CustomerID, count(od.orderid)
from orders o inner join order_details od on od.orderid = o.orderid
group by o.CustomerID;</div>
<div class="example" data-db="northwind">select p.productid, p.productname, p.supplierid, p.categoryid,
       p.quantityperunit, c.categoryid, c.categoryname, c.description
from products p inner join categories c on p.categoryid = c.categoryid
where p.productid between 1 and 23;</div>
<h3>Mehr als zwei Tabellen</h3>
<p>Einfach weitere <code>inner join … on …</code> anhängen:</p>
<div class="example" data-db="sakila">select c.first_name, c.last_name, ci.city
from customer c
inner join address a on a.address_id = c.address_id
inner join city ci on ci.city_id = a.city_id;</div>
<p class="tip">💡 Schau dir die Diagramme (<code>Nothwind_Diagramm.pdf</code>, <code>sakila_diagram.pdf</code>) an, um zu sehen, welche Schlüssel zusammengehören. Rechts in der Tabellenliste siehst du die Spalten.</p>
`,
  exercises: [
    { id: 'j1', db: 'northwind', task: '<span class="tag">Folie 42 / 1</span> Vor- und Nachname aller Mitarbeiter, die bei Bestellungen beteiligt waren (jeder nur einmal).', hint: 'employees inner join orders … distinct', solution: 'select distinct e.FirstName, e.LastName\nfrom employees e\ninner join orders o on o.EmployeeID = e.EmployeeID;' },
    { id: 'j2', db: 'northwind', task: '<span class="tag">Folie 42 / 2</span> Liste mit Produktnamen und Kategorienamen.', hint: 'products inner join categories on CategoryID', solution: 'select p.ProductName, c.CategoryName\nfrom products p\ninner join categories c on c.CategoryID = p.CategoryID;' },
    { id: 'j3', db: 'northwind', task: '<span class="tag">Folie 42 / 3</span> In welchen Kategorien gibt es <b>mehr als 10</b> Produkte? Ergebnisliste: Kategoriename, Anzahl der Produkte.', hint: 'JOIN + group by CategoryName + having', solution: 'select c.CategoryName, count(p.ProductID) as AnzahlProdukte\nfrom products p\ninner join categories c on c.CategoryID = p.CategoryID\ngroup by c.CategoryName\nhaving count(p.ProductID) > 10;' },
    { id: 'j4', db: 'northwind', task: '<span class="tag">Folie 42 / 4</span> Alle Produkte, die jemals bestellt wurden. Ergebnisliste: Produktname, Lieferantenname (jede Kombination nur einmal).', hint: 'Drei Tabellen: products, order_details, suppliers. Lieferantenname = suppliers.CompanyName', solution: 'select distinct p.ProductName, s.CompanyName\nfrom products p\ninner join order_details od on od.ProductID = p.ProductID\ninner join suppliers s on s.SupplierID = p.SupplierID;' },
    { id: 'j5', db: 'sakila', task: 'Filmtitel und Name der Sprache (<code>language.name</code>) aller Filme.', hint: 'film inner join language', solution: 'select f.title, l.name\nfrom film f\ninner join language l on l.language_id = f.language_id;' },
    { id: 'j6', db: 'sakila', task: 'Vor- und Nachname aller Schauspieler im Film <b>ACADEMY DINOSAUR</b>.', hint: 'actor – film_actor – film (drei Tabellen)', solution: "select a.first_name, a.last_name\nfrom actor a\ninner join film_actor fa on fa.actor_id = a.actor_id\ninner join film f on f.film_id = fa.film_id\nwhere f.title = 'ACADEMY DINOSAUR';" },
    { id: 'j7', db: 'sakila', task: 'Wie viele Filme gibt es pro <b>Kategorie-Name</b> (z. B. Action, Comedy)? Sortiert nach Anzahl absteigend.', hint: 'film_category inner join category, group by category.name', solution: 'select c.name, count(fc.film_id) as AnzahlFilme\nfrom film_category fc\ninner join category c on c.category_id = fc.category_id\ngroup by c.name\norder by AnzahlFilme desc;', order: [1], orderDir: ['desc'] },
    { id: 'j8', db: 'northwind', task: 'Umsatz pro Kunde (Firmenname): Summe von <code>UnitPrice * Quantity</code> aller Bestellpositionen. Nur Kunden mit Umsatz <b>über 50000</b>, höchster zuerst.', hint: 'customers – orders – order_details, group by CompanyName, having', solution: 'select c.CompanyName, sum(od.UnitPrice * od.Quantity) as Umsatz\nfrom customers c\ninner join orders o on o.CustomerID = c.CustomerID\ninner join order_details od on od.OrderID = o.OrderID\ngroup by c.CompanyName\nhaving sum(od.UnitPrice * od.Quantity) > 50000\norder by Umsatz desc;', order: [1], orderDir: ['desc'] },
  ]
},
{
  id: 'blatt04', title: 'Aufgabenblatt: Aggregation – 2', short: 'Aufgabenblatt 04',
  source: 'SQL 04 - Select mit Aggregation - 2.pdf (+ deine Lösungsdatei)',
  theory: `
<h3>Prüfungsmodus: das echte Aufgabenblatt</h3>
<p>Das sind die 13 Aufgaben aus <b>„SQL 04 – SELECT Queries mit Aggregation – 2“</b> (HTBLuVA Villach). Jetzt ohne Theorie daneben – schreib jede Query selbst.</p>
<p>Setze für die Ergebnisspalten geeignete <b>Aliase</b>.</p>
<p class="tip">💡 Die Musterlösungen kommen aus deiner Datei <code>SQL_04_Aggregation_2_Loesung.sql</code>. Bei Aufgabe 7 und 13 liefert auch die Lösung mit diesen Daten ein <b>leeres Ergebnis</b> – das ist kein Fehler.</p>
<h3>Spickzettel</h3>
<pre class="syntax">select   spalte, agg(spalte) as alias   -- 5.
from     tabelle                          -- 1.
where    bedingung auf Zeilen             -- 2.
group by spalte                           -- 3.
having   bedingung auf agg(...)           -- 4.
order by alias [asc|desc];                -- 6.</pre>
`,
  exercises: [
    { id: 'b1', db: 'northwind', task: '<span class="tag">1</span> Erstelle eine Liste, in der für jede Bestellung ersichtlich ist, wie viel gezahlt wurde.', hint: 'order_details: Preis × Menge × (1 − Rabatt), pro OrderID summieren.', solution: 'select OrderID, round(sum(UnitPrice * Quantity * (1 - Discount)), 2) as Gesamtbetrag\nfrom order_details\ngroup by OrderID;' },
    { id: 'b2', db: 'northwind', task: '<span class="tag">2</span> Erstelle eine Liste mit der Anzahl der Kunden pro Stadt, deren Stadtname von „K“ bis „R“ beginnt.', hint: "left(City, 1) between 'K' and 'R'", solution: "select City, count(*) as AnzahlKunden\nfrom customers\nwhere left(City, 1) between 'K' and 'R'\ngroup by City;" },
    { id: 'b3', db: 'northwind', task: '<span class="tag">3</span> Welche Lieferanten liefern weniger unterschiedliche Artikel? Ergebnisliste: Lieferanten-ID und Anzahl der gelieferten Artikel.', hint: 'Die Lösung interpretiert „weniger“ als weniger als 3: having count(ProductID) < 3', solution: 'select SupplierID, count(ProductID) as AnzahlArtikel\nfrom products\ngroup by SupplierID\nhaving count(ProductID) < 3;', note: '„Weniger“ ist im Angabeblatt nicht genau definiert – die Musterlösung nimmt < 3.' },
    { id: 'b4', db: 'northwind', task: '<span class="tag">4</span> Aus welcher Produkt-Kategorie hat die Firma mehr als 8 Stück lagernd, die vom Lieferanten mit der ID 3 geliefert wurden?', hint: 'where SupplierID = 3 … having sum(UnitsInStock) > 8', solution: 'select CategoryID, sum(UnitsInStock) as Lagerbestand\nfrom products\nwhere SupplierID = 3\ngroup by CategoryID\nhaving sum(UnitsInStock) > 8;' },
    { id: 'b5', db: 'northwind', task: '<span class="tag">5</span> Aus welcher Produkt-Kategorie hat die Firma 8, 10 oder 12 unterschiedliche Artikel? Ergebnisliste: Produkt-Kategorie und Anzahl der Artikel.', hint: 'having count(…) in (8, 10, 12)', solution: 'select CategoryID, count(ProductID) as AnzahlArtikel\nfrom products\ngroup by CategoryID\nhaving count(ProductID) in (8, 10, 12);' },
    { id: 'b6', db: 'northwind', task: '<span class="tag">6</span> In welchen Städten hat die Firma 2 bis 5 Kunden? Zeige City und Anzahl der Kunden in dieser Stadt.', hint: 'having count(…) between 2 and 5', solution: 'select City, count(CustomerID) as AnzahlKunden\nfrom customers\ngroup by City\nhaving count(CustomerID) between 2 and 5;' },
    { id: 'b7', db: 'northwind', task: '<span class="tag">7</span> Zeige, wie viel Preisnachlass (Discount) pro Produkt beim Verkaufen durchschnittlich gegeben wurde. Nur Artikel mit durchschnittlichem Nachlass von mindestens 12 % und maximal 15 %. Sortiere nach ProductID absteigend.', hint: 'Discount ist als Dezimalzahl gespeichert: 12 % = 0.12', solution: 'select ProductID, avg(Discount) as DurchschnRabatt\nfrom order_details\ngroup by ProductID\nhaving avg(Discount) between 0.12 and 0.15\norder by ProductID desc;', order: [0], orderDir: ['desc'], note: 'Liefert mit diesen Daten keine Zeile – der höchste Durchschnitt liegt bei ca. 10,8 %. Vergleiche deine Query mit der Lösung.' },
    { id: 'b8', db: 'northwind', task: '<span class="tag">8</span> Welche Kunden haben mehr als 8 Bestellungen, die aus Argentinien, Belgien oder Kanada geliefert wurden?', hint: "ShipCountry in ('Argentina', 'Belgium', 'Canada')", solution: "select CustomerID, count(OrderID) as AnzahlBestellungen\nfrom orders\nwhere ShipCountry in ('Argentina', 'Belgium', 'Canada')\ngroup by CustomerID\nhaving count(OrderID) > 8;" },
    { id: 'b9', db: 'northwind', task: '<span class="tag">9</span> Pro Anbieter der Durchschnitt der Bestellungen (UnitsOnOrder), deren Durchschnitt zwischen 20 und 45 liegt. Anbieter mit ID = 2 darf nicht vorkommen. Nach Anbieter aufsteigend sortiert.', hint: 'where SupplierID <> 2 … having avg(UnitsOnOrder) between 20 and 45', solution: 'select SupplierID, avg(UnitsOnOrder) as DurchschnBestellt\nfrom products\nwhere SupplierID <> 2\ngroup by SupplierID\nhaving avg(UnitsOnOrder) between 20 and 45\norder by SupplierID asc;', order: [0] },
    { id: 'b10', db: 'sakila', task: '<span class="tag">10</span> Wie viele Filme pro Filmlänge gibt es, deren Filmlänge kleiner als 95 Minuten ist? Spalten: Länge, Anzahl. Aufsteigend sortiert nach Anzahl.', hint: 'where length < 95 group by length order by Anzahl', solution: 'select length as Laenge, count(film_id) as AnzahlFilme\nfrom film\nwhere length < 95\ngroup by length\norder by AnzahlFilme asc;', order: [1] },
    { id: 'b11', db: 'sakila', task: '<span class="tag">11</span> Wie viel Geld haben die Kunden mit den IDs 5, 9, 11 und 12 jeweils bezahlt? Absteigend sortiert nach Geld.', hint: 'payment, where customer_id in (…)', solution: 'select customer_id, sum(amount) as Gesamtbetrag\nfrom payment\nwhere customer_id in (5, 9, 11, 12)\ngroup by customer_id\norder by Gesamtbetrag desc;', order: [1], orderDir: ['desc'] },
    { id: 'b12', db: 'sakila', task: '<span class="tag">12</span> Liste der Kunden mit den IDs 100 bis 240, die <b>gerade</b> mehr als einen Film ausgeliehen haben. Ergebnis: Kunden-ID, Anzahl der ausgeliehenen Filme.', hint: '„Gerade ausgeliehen“ = noch nicht zurückgegeben → return_date is null', solution: 'select customer_id, count(rental_id) as AnzahlAusgeliehen\nfrom rental\nwhere customer_id between 100 and 240\n  and return_date is null\ngroup by customer_id\nhaving count(rental_id) > 1;' },
    { id: 'b13', db: 'sakila', task: '<span class="tag">13</span> Liste der durchschnittlichen Ersatzkosten pro Bewertung und Mietpreis. Durchschnittliche Ersatzkosten dürfen 15 nicht überschreiten. Der Mietpreis muss größer als 2 sein.', hint: 'group by rating, rental_rate – where für den Mietpreis, having für den Durchschnitt', solution: 'select rating, rental_rate, avg(replacement_cost) as DurchschnErsatzkosten\nfrom film\nwhere rental_rate > 2\ngroup by rating, rental_rate\nhaving avg(replacement_cost) <= 15;', note: 'Liefert mit diesen Daten keine Zeile – alle Durchschnitte liegen über 18. Vergleiche deine Query mit der Lösung.' },
  ]
},

{
  id: 'wiederholung', title: 'Test-Wiederholung', short: 'Test-Wiederholung',
  source: 'Teststoff INSY – ergänzt die Punkte, die in den anderen Kapiteln fehlen oder nur kurz vorkommen',
  theory: `
<p class="callout">📋 Dieses Kapitel geht deine Teststoff-Liste durch: <b>relationale DB & Record</b>, <b>NULL</b>, <b>[NOT] LIKE</b>, <b>horizontale vs. vertikale Partitionierung</b>, <b>Pre- vs. Post-Filter</b>, <b>Zeilenanzahl vorhersagen</b> und die <b>Ausführungsreihenfolge</b>. Die Übungen sind gemischt: Quizfragen, „Wie viele Zeilen?“-Fragen und SQL zum Selberschreiben.</p>

<h3>Relationale Datenbank & DB-Record</h3>
<ul>
  <li><b>Relationale DB</b> = besteht aus mehreren <b>Tabellen</b> (Relationen), die über <b>Schlüssel</b> miteinander verbunden sind.</li>
  <li><b>Spalte</b> = Attribut (z.&nbsp;B. <code>ProductName</code>). Jede Spalte hat einen Datentyp.</li>
  <li><b>Zeile</b> = <b>Datensatz / Record</b> (auch Tupel): <i>ein</i> konkretes Objekt, z.&nbsp;B. <i>ein</i> Produkt mit all seinen Werten.</li>
  <li><b>Primärschlüssel</b> (PK) identifiziert jeden Record eindeutig (z.&nbsp;B. <code>ProductID</code>).</li>
  <li><b>Fremdschlüssel</b> (FK) verweist auf den PK einer anderen Tabelle (z.&nbsp;B. <code>products.CategoryID → categories.CategoryID</code>) – darüber läuft der JOIN.</li>
  <li>Das Ergebnis eines <code>SELECT</code> ist wieder eine <b>Tabelle</b> (Menge von Records).</li>
</ul>

<h3>NULL – was ist das?</h3>
<p><code>NULL</code> bedeutet: <b>kein Wert vorhanden / unbekannt</b>. NULL ist <b>nicht 0</b> und <b>nicht ''</b> (leerer Text)!</p>
<ul>
  <li>Jeder Vergleich mit NULL ergibt „unbekannt“ → <code>where Region = null</code> liefert <b>immer 0 Zeilen</b>. Richtig: <code>is null</code> / <code>is not null</code>.</li>
  <li>Auch <code>&lt;&gt;</code> greift nicht: <code>where Region &lt;&gt; 'WA'</code> liefert die NULL-Zeilen <b>nicht</b> mit.</li>
  <li><b>Aggregatfunktionen ignorieren NULL</b>: <code>count(Region)</code>, <code>sum</code>, <code>avg</code>, <code>min</code>, <code>max</code> überspringen NULL-Werte. Nur <code>count(*)</code> zählt alle Zeilen.</li>
  <li><code>DISTINCT</code> und <code>GROUP BY</code> behandeln NULL als <b>eigenen Wert</b> → NULL bildet eine eigene Gruppe.</li>
</ul>
<div class="example" data-db="northwind">select count(*) as alle, count(Region) as mitRegion, count(Fax) as mitFax
from customers;</div>
<div class="example" data-db="northwind">select Country, count(*)
from employees
group by Country;   -- NULL ist eine eigene Gruppe!</div>

<h3>Suchmuster: [NOT] LIKE</h3>
<table class="ops">
<tr><td><code>%</code></td><td>beliebig viele Zeichen (auch 0)</td><td><code>_</code></td><td>genau 1 Zeichen</td></tr>
<tr><td><code>like 'A%'</code></td><td>beginnt mit A</td><td><code>like '%a'</code></td><td>endet mit a</td></tr>
<tr><td><code>like '%an%'</code></td><td>enthält „an“</td><td><code>like '___'</code></td><td>genau 3 Zeichen lang</td></tr>
<tr><td><code>like '_a%'</code></td><td>2. Zeichen ist a</td><td><code>not like 'A%'</code></td><td>beginnt <b>nicht</b> mit A</td></tr>
</table>
<p class="tip">💡 Ohne <code>%</code> oder <code>_</code> wirkt <code>like</code> wie <code>=</code>. In MySQL ist <code>like</code> standardmäßig nicht case-sensitiv. Achtung: <code>not like</code> liefert NULL-Zeilen auch <b>nicht</b> mit.</p>
<div class="example" data-db="sakila">select first_name from actor
where first_name like '___';</div>

<h3>Horizontale vs. vertikale Partitionierung</h3>
<div class="grid2">
  <div class="card"><b>Horizontal = Selektion</b><br>Man wählt <b>Zeilen</b> aus → die Tabelle wird „waagrecht“ zerschnitten.<br>Zuständig: <code>WHERE</code> (und <code>HAVING</code> für Gruppen).
  <table class="part"><tr><td></td><td></td><td></td></tr><tr class="on"><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr class="on"><td></td><td></td><td></td></tr></table></div>
  <div class="card"><b>Vertikal = Projektion</b><br>Man wählt <b>Spalten</b> aus → die Tabelle wird „senkrecht“ zerschnitten.<br>Zuständig: die Spaltenliste im <code>SELECT</code>.
  <table class="part vert"><tr><td></td><td class="on"></td><td></td></tr><tr><td></td><td class="on"></td><td></td></tr><tr><td></td><td class="on"></td><td></td></tr><tr><td></td><td class="on"></td><td></td></tr></table></div>
</div>
<pre class="syntax">select ProductName, UnitPrice   -- vertikal: nur 2 Spalten
from products
where UnitPrice > 50;           -- horizontal: nur bestimmte Zeilen</pre>

<h3>Pre-Filter vs. Post-Filter</h3>
<table class="ops">
<tr><td><b>WHERE = Pre-Filter</b></td><td>filtert <b>Records</b> der Ausgangstabelle, <i>bevor</i> gruppiert wird. Keine Aggregatfunktionen erlaubt.</td></tr>
<tr><td><b>HAVING = Post-Filter</b></td><td>filtert <b>Gruppen</b>, <i>nachdem</i> gruppiert wurde – Bedingung auf aggregierte Spalten.</td></tr>
</table>

<h3>Zeilenanzahl im Ergebnis vorhersagen</h3>
<table class="ops">
<tr><td>Keine Aggregation, kein DISTINCT</td><td>so viele Zeilen wie die Tabelle hat, die <b>WHERE</b> übersteht. Die Spaltenauswahl (vertikal) ändert die Zeilenanzahl <b>nie</b>.</td></tr>
<tr><td><code>DISTINCT</code></td><td>Anzahl der <b>unterschiedlichen</b> Kombinationen der gewählten Spalten (NULL zählt als Wert).</td></tr>
<tr><td>Aggregation <b>ohne</b> GROUP BY</td><td><b>immer genau 1 Zeile</b> – auch wenn WHERE alles wegfiltert (dann z.&nbsp;B. <code>count = 0</code>, <code>max = NULL</code>).</td></tr>
<tr><td><code>GROUP BY</code></td><td>so viele Zeilen wie es <b>unterschiedliche Werte</b> (Gruppen) nach dem WHERE gibt. Filtert WHERE alles weg → 0 Zeilen.</td></tr>
<tr><td><code>HAVING</code></td><td>höchstens so viele Zeilen wie Gruppen – meistens weniger.</td></tr>
<tr><td><code>INNER JOIN</code> 1:n</td><td>pro passendem Record der „n“-Seite eine Zeile (z.&nbsp;B. products ⋈ categories = Anzahl Produkte). Records ohne Partner fallen weg.</td></tr>
</table>

<h3>Ausführungsreihenfolge (nochmal)</h3>
<ol class="steps">
  <li><code>FROM</code> <span>Tabellen holen / verbinden (JOIN)</span></li>
  <li><code>WHERE</code> <span>Records filtern (Pre-Filter, horizontal)</span></li>
  <li><code>GROUP BY</code> <span>Gruppen bilden</span></li>
  <li><code>HAVING</code> <span>Gruppen filtern (Post-Filter)</span></li>
  <li><code>SELECT</code> <span>Spalten auswählen, Aggregate berechnen (vertikal)</span></li>
  <li><code>ORDER BY</code> <span>Sortieren</span></li>
</ol>
<p class="tip">💡 Merksatz für die Reihenfolge: <b>F</b>ranz <b>W</b>ill <b>G</b>erne <b>H</b>eute <b>S</b>chnitzel <b>O</b>rdern. Darum geht ein Alias aus dem SELECT nicht im WHERE (WHERE läuft vorher), aber im ORDER BY schon.</p>
`,
  exercises: [
    { id: 'r1', type: 'quiz', task: 'Was ist ein <b>DB-Record</b>?', options: ['Eine Spalte einer Tabelle', 'Eine Zeile einer Tabelle (ein Datensatz)', 'Die ganze Datenbank', 'Der Primärschlüssel'], correct: 1, explain: 'Ein Record (Datensatz, Tupel) ist eine Zeile – also ein konkretes Objekt mit allen seinen Spaltenwerten.' },
    { id: 'r2', type: 'quiz', task: 'Wodurch werden die Tabellen einer <b>relationalen</b> Datenbank miteinander verbunden?', options: ['Durch gleiche Tabellennamen', 'Durch Primär- und Fremdschlüssel', 'Durch die Reihenfolge der Zeilen', 'Gar nicht – jede Tabelle ist unabhängig'], correct: 1, explain: 'Ein Fremdschlüssel (z. B. products.CategoryID) verweist auf den Primärschlüssel einer anderen Tabelle (categories.CategoryID).' },
    { id: 'r3', type: 'quiz', task: 'Welche Klausel sorgt für eine <b>horizontale</b> Partitionierung?', options: ['SELECT-Spaltenliste', 'ORDER BY', 'WHERE', 'FROM'], correct: 2, explain: 'Horizontal = Zeilen auswählen (Selektion) → WHERE. Vertikal = Spalten auswählen (Projektion) → SELECT.' },
    { id: 'r4', type: 'quiz', task: '<code>select title, length from film;</code> – welche Partitionierung ist das?', options: ['Horizontal', 'Vertikal', 'Beides', 'Keine'], correct: 1, explain: 'Es werden nur bestimmte Spalten gewählt, aber alle Zeilen bleiben → vertikal (Projektion).' },
    { id: 'r5', type: 'quiz', task: '<code>select * from film where rating = \'G\';</code> – welche Partitionierung ist das?', options: ['Horizontal', 'Vertikal', 'Beides', 'Keine'], correct: 0, explain: 'Alle Spalten (*), aber nur bestimmte Zeilen → horizontal (Selektion).' },
    { id: 'r6', type: 'quiz', task: 'Was bedeutet <code>NULL</code>?', options: ['Die Zahl 0', 'Ein leerer Text \'\'', 'Kein Wert vorhanden / unbekannt', 'Ein Fehler in der Datenbank'], correct: 2, explain: 'NULL heißt „kein Wert“. Es ist weder 0 noch ein leerer String.' },
    { id: 'r7', type: 'predict', db: 'northwind', task: 'Die Tabelle <code>customers</code> hat 91 Zeilen, 60 davon haben <i>keine</i> Region (NULL). Wie viele Zeilen liefert diese Query?', query: 'select CompanyName\nfrom customers\nwhere Region = null;', explain: '0 Zeilen! Ein Vergleich mit = NULL ist nie wahr. Richtig wäre: where Region is null.' },
    { id: 'r8', type: 'predict', db: 'northwind', task: 'customers: 91 Zeilen, 31 haben eine Region, der Rest ist NULL. Was liefert <code>count(Region)</code>?', query: 'select count(Region)\nfrom customers;', answerFrom: 'value', explain: '31 – count(spalte) zählt NULL-Werte nicht mit. count(*) würde 91 liefern.' },
    { id: 'r9', type: 'sql', db: 'northwind', task: 'Firmenname und Region aller Kunden, die eine Region eingetragen haben.', hint: 'is not null', solution: 'select CompanyName, Region\nfrom customers\nwhere Region is not null;' },
    { id: 'r10', type: 'sql', db: 'northwind', task: 'Gib in einer Abfrage aus: Anzahl <b>aller</b> Kunden (<b>Alle</b>) und Anzahl der Kunden <b>ohne</b> Fax (<b>OhneFax</b>).', hint: 'count(*) zählt alle. Für „ohne Fax“: count(*) mit where Fax is null geht nicht in derselben Query … aber count(*) - count(Fax)!', solution: 'select count(*) as Alle, count(*) - count(Fax) as OhneFax\nfrom customers;' },
    { id: 'r11', type: 'quiz', task: 'Welches Muster findet alle Vornamen mit <b>genau 4</b> Buchstaben?', options: ["like '4%'", "like '____'", "like '%%%%'", "like '_%_'"], correct: 1, explain: '_ steht für genau ein Zeichen – vier Unterstriche = genau 4 Zeichen.' },
    { id: 'r12', type: 'sql', db: 'sakila', task: 'Alle Filmtitel, die <b>nicht</b> den Buchstaben <b>A</b> enthalten.', hint: "not like '%A%'", solution: "select title\nfrom film\nwhere title not like '%A%';" },
    { id: 'r13', type: 'sql', db: 'sakila', task: 'Vor- und Nachname aller Schauspieler, deren Vorname <b>genau 3 Zeichen</b> lang ist und deren Nachname <b>nicht</b> mit <b>S</b> beginnt.', hint: "like '___' and … not like 'S%'", solution: "select first_name, last_name\nfrom actor\nwhere first_name like '___'\n  and last_name not like 'S%';" },
    { id: 'r14', type: 'quiz', task: 'Wo gehört die Bedingung <code>avg(amount) > 4</code> hin?', options: ['WHERE (Pre-Filter)', 'HAVING (Post-Filter)', 'GROUP BY', 'ORDER BY'], correct: 1, explain: 'Bedingungen auf Aggregate gehen nur im HAVING – im WHERE gibt es noch keine Gruppen.' },
    { id: 'r15', type: 'quiz', task: 'Eine Query gruppiert Zahlungen nach Kunde. Du willst nur Zahlungen aus dem Jahr 2005 berücksichtigen. Wohin gehört <code>year(payment_date) = 2005</code>?', options: ['WHERE – die einzelnen Records vor dem Gruppieren filtern', 'HAVING – nach dem Gruppieren', 'SELECT', 'Egal, beides gleich'], correct: 0, explain: 'Es geht um einzelne Records (Zahlungen), nicht um Gruppen → Pre-Filter WHERE.' },
    { id: 'r16', type: 'quiz', task: 'Was wird direkt <b>nach</b> <code>WHERE</code> ausgeführt?', options: ['SELECT', 'HAVING', 'GROUP BY', 'ORDER BY'], correct: 2, explain: 'FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.' },
    { id: 'r17', type: 'quiz', task: 'Warum funktioniert <code>select UnitPrice*2 as Doppelt from products where Doppelt > 100</code> in MySQL nicht?', options: ['Weil man nicht multiplizieren darf', 'Weil WHERE vor SELECT ausgeführt wird – den Alias gibt es da noch nicht', 'Weil der Alias zu lang ist', 'Weil WHERE nur Text vergleicht'], correct: 1, explain: 'WHERE (Schritt 2) läuft vor SELECT (Schritt 5). Im ORDER BY (Schritt 6) darf man den Alias verwenden.' },
    { id: 'r18', type: 'predict', db: 'northwind', task: '<code>products</code> hat 78 Zeilen. Wie viele Zeilen liefert:', query: 'select ProductName, UnitPrice\nfrom products;', explain: '78 – die Spaltenauswahl (vertikal) ändert die Zeilenanzahl nicht.' },
    { id: 'r19', type: 'predict', db: 'northwind', task: '<code>products</code> hat 78 Zeilen, jedes Produkt gehört zu einer der <b>8</b> Kategorien. Wie viele Zeilen liefert:', query: 'select CategoryID, count(*)\nfrom products\ngroup by CategoryID;', explain: '8 – eine Zeile pro Gruppe (pro unterschiedlichem CategoryID-Wert).' },
    { id: 'r20', type: 'predict', db: 'northwind', task: 'Kein Produkt kostet mehr als 1000. Wie viele Zeilen liefert:', query: 'select count(*), max(UnitPrice)\nfrom products\nwhere UnitPrice > 1000;', explain: '1 Zeile! Aggregation ohne GROUP BY liefert immer genau eine Zeile – hier mit count = 0 und max = NULL.' },
    { id: 'r21', type: 'predict', db: 'northwind', task: 'Gleiche Situation (kein Produkt über 1000), aber jetzt mit GROUP BY:', query: 'select CategoryID, count(*)\nfrom products\nwhere UnitPrice > 1000\ngroup by CategoryID;', explain: '0 Zeilen – WHERE filtert alle Records weg, also entstehen gar keine Gruppen.' },
    { id: 'r22', type: 'predict', db: 'northwind', task: '<code>employees</code>: 4 Mitarbeiter aus UK, 5 aus USA und 1 Mitarbeiter ohne Land (NULL). Wie viele Zeilen liefert:', query: 'select distinct Country\nfrom employees;', explain: '3 – UK, USA und NULL. DISTINCT (und GROUP BY) behandelt NULL als eigenen Wert.' },
    { id: 'r23', type: 'predict', db: 'northwind', task: 'Jedes der 78 Produkte hat genau eine Kategorie, die es in <code>categories</code> auch gibt. Wie viele Zeilen liefert der JOIN?', query: 'select p.ProductName, c.CategoryName\nfrom products p\ninner join categories c on c.CategoryID = p.CategoryID;', explain: '78 – bei 1:n kommt pro Produkt (n-Seite) genau eine Zeile heraus.' },
    { id: 'r24', type: 'predict', db: 'northwind', task: 'Die 8 Kategorien haben 5 bis 13 Produkte. Wie viele Zeilen liefert:', query: 'select CategoryID, count(*)\nfrom products\ngroup by CategoryID\nhaving count(*) > 100;', explain: '0 – keine Gruppe hat mehr als 100 Produkte, HAVING filtert alle Gruppen weg.' },
    { id: 'r25', type: 'sql', db: 'sakila', task: '<b>Test-Aufgabe (alles kombiniert):</b> Pro Kategorie-Name die Anzahl der Filme mit einer Länge über 120 Minuten. Nur Kategorien mit <b>mindestens 30</b> solcher Filme. Sortiert nach Anzahl absteigend.', hint: 'film – film_category – category; WHERE für length, HAVING für count', solution: 'select c.name, count(*) as Anzahl\nfrom film f\ninner join film_category fc on fc.film_id = f.film_id\ninner join category c on c.category_id = fc.category_id\nwhere f.length > 120\ngroup by c.name\nhaving count(*) >= 30\norder by Anzahl desc;', order: [1], orderDir: ['desc'] },
  ]
},
];
